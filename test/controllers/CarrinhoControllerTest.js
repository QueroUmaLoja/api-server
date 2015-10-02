'use strict';

var connection  = require('../test');
var Carrinho = require('../../src/controllers/CarrinhoController');
var Site = require('mongoose').Types.ObjectId;
var sinon = require('sinon');
var assert = require('assert');
var request = require('request');
var response = {
    content: null,
    statusCode: 0,

    json: function(content){
        this.content = content;

        return this;
    },
    status: function(status) {
        this.statusCode = status;

        return this;
    }
};

describe('Carrinho Controller', function () {
    it('#lista() deve retornar um array', function (done) {
        request.headers = {
            site: new Site()
        };

        request.params = {
            usuario: new Site()
        };

        request.query = {
            page: 1,
            limit: 1
        };

        Carrinho.lista(request, response, function() {
            assert.equal(response.content.object, 'list');

            done();
        });
    });

    it('#abre() deve retornar um objeto', function (done) {
        request.headers = {
            site: new Site()
        };

        request.params = {
            usuario: new Site()
        };

        request.query = {
            page: 1,
            limit: 1
        };

        Carrinho.abre(request, response, function() {
            assert.equal(response.content.object, 'object');
            assert.equal(response.statusCode, 200);

            done();
        });
    });

    it('#adiciona() deve retornar um objeto', function (done) {
        request.headers = {
            site: new Site()
        };

        request.params = {
            usuario: new Site()
        };

        request.body = {
            token: 'Foo',
            valor: 1,
            items: [
                {
                    produto: new Site(),
                    quantidade: 1
                }
            ],
            comprador: {
                nome: 'Foo',
                email: 'foo@bar.bar',
                telefone: '0000',
                endereco: {
                    logradouro: 'foo',
                    numero: 1,
                    complemento: 'foo',
                    bairro: 'foo',
                    cep: '00000'
                },
                localidade: {
                    cidade: 'foo',
                    estado: 'foo',
                    uf: 'foo'
                }
            }
        };

        request.query = {
            page: 1,
            limit: 1
        };

        Carrinho.adiciona(request, response, function() {
            assert.equal(response.content.object, 'object');

            done();
        });
    });

    it('#atualiza() deve retornar um objeto', function (done) {
        request.headers = {
            site: new Site()
        };

        request.params = {
            usuario: new Site(),
            id: 1
        };

        request.query = {
            page: 1,
            limit: 1
        };

        Carrinho.atualiza(request, response, function() {
            assert.equal(response.content.object, 'error');

            done();
        });
    });

    it('#apaga() deve retornar um objeto', function (done) {
        request.headers = {
            site: new Site()
        };

        request.params = {
            usuario: new Site(),
            id: 1
        };

        request.query = {
            page: 1,
            limit: 1
        };

        Carrinho.apaga(request, response, function() {
            assert.equal(response.content.object, 'error');

            done();
        });
    });
});