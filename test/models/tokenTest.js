'use strict';

var mockery = require('mockery');

describe('Token DAO', function () {
    before(function() {
        mockery.enable({
            warnOnUnregistered: false,
            warnOnReplace: false
        });

        mockery.registerMock('../schemas/token', {
            create: function(x, end) {
                end(null, {});
            },
            findOne: function(x) {
                return {
                    populate: function(z) {
                        return {
                            exec: function (done) {
                                done(null, {});
                            }
                        }
                    }
                }
            }
        });

        this.model = require('../../models/token');
    });

    after(function() {
        mockery.disable()
    });

    it('#adiciona', function (done) {
        this.model.adiciona({}, function() {
            done();
        });
    });

    it('#buscaPorConteudo', function (done) {
        this.model.buscaPorConteudo('foo', 'barbar', function() {
            done();
        });
    });
});
