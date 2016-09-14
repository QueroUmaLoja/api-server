'use strict';

var ImagemDAO = require('../dao/imagem'), ImagemController = function () {};

/**
 * Insere uma imagem no álbum do produto
 *
 * @param req
 * @param res
 * @param done
 */
ImagemController.prototype.adiciona = function (produto, site, params, done) {
    ImagemDAO.adicionaImagem(produto, site, params, done);
};

/**
 * Remove uma imagem do álbum do produto
 *
 * @param req
 * @param res
 * @param done
 */
ImagemController.prototype.apaga = function (id, site, imagem, done) {
    ImagemDAO.apagaImagem(id, site, imagem, done);
};

module.exports = new ImagemController;