'use strict';

var ProdutoModel = require('../models/produto'),
  ProdutoDAO = function () {};

/**
 * Lista os produtos
 */
ProdutoDAO.prototype.lista = function (site, filtro = {}, done) {
    var filter = {
        site: site,
        ativo: true
    };

    if (filtro.tipo !== undefined) {
        filter["categoria.uri"] = filtro.tipo.toLowerCase();

        if (filtro.categoria !== undefined) {
            filter["categoria.categoria.uri"] = filtro.categoria.toLowerCase();
        }
    }

    ProdutoModel.paginate(
        filter, 
        { 
            page: filtro.page, 
            limit: filtro.limit, 
            sort: { 
                cadastro: 'desc' 
            } 
        }, 
        done
    );
};

/**
 * Visualiza um produto
 */
ProdutoDAO.prototype.abre = function (id, site, done) {
    ProdutoModel.findOne({ _id: id, site: site }, done);
};

/**
 * Adiciona um produto
 */
ProdutoDAO.prototype.adiciona = function (site, params, done) {
    ProdutoModel.create(params, done);
};

/**
 * Atualiza os dados de um produto
 */
ProdutoDAO.prototype.atualiza = function (id, site, params, done) {
    ProdutoModel.findOneAndUpdate({ _id: id, site: site }, params, { new: true, multi: true }, done);
};

/**
 * Remove um produto
 */
ProdutoDAO.prototype.apaga = function (id, site, done) {
    ProdutoModel.findOneAndUpdate({ _id: id, site: site }, { ativo: false }, { new: true, multi: true }, done);
};

module.exports = new ProdutoDAO;