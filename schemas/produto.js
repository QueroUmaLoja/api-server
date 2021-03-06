const _ = require('underscore');
const mongoose = require('mongoose');
const ProdutoSchema = new mongoose.Schema({
  codigo: {
    type: String,
    default: ''
  },
  titulo: {
    type: String
  },
  descricao: {
    type: String
  },
  valor: [
    new mongoose.Schema({
      valor: {
        type: Number,
        default: 0.00
      },
      nome: {
        type: String,
        default: 'default'
      },
      moeda: {
        type: String,
        default: 'R$'
      }
    })
  ],
  categoria: new mongoose.Schema({
    titulo: {
      type: String,
      required: true,
      trim: true
    },
    uri: {
      type: String,
      required: true,
      trim: true,
      lowercase: true
    },
    categoria: new mongoose.Schema({
      titulo: {
        type: String,
        required: true,
        trim: true
      },
      uri: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
      }
    })
  }),
  ativo: {
    type: Boolean,
    default: true
  },
  imagem: new mongoose.Schema({
    public_id: {
      type: String
    },
    version: {
      type: String
    },
    signature: {
      type: String
    },
    width: {
      type: Number
    },
    height: {
      type: Number
    },
    format: {
      type: String
    },
    resource_type: {
      type: String
    },
    created_at: {
      type: Date,
      default: Date.now
    },
    tags: {
      type: []
    },
    bytes: {
      type: Number
    },
    type: {
      type: String
    },
    etag: {
      type: String
    },
    url: {
      type: String
    },
    secure_url: {
      type: String
    }
  }),
  album: [
    new mongoose.Schema({
      public_id: {
        type: String
      },
      version: {
        type: String
      },
      signature: {
        type: String
      },
      width: {
        type: Number
      },
      height: {
        type: Number
      },
      format: {
        type: String
      },
      resource_type: {
        type: String
      },
      created_at: {
        type: Date,
        default: Date.now
      },
      tags: {
        type: []
      },
      bytes: {
        type: Number
      },
      type: {
        type: String
      },
      etag: {
        type: String
      },
      url: {
        type: String
      },
      secure_url: {
        type: String
      }
    })
  ],
  site: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Site'
  },
  dimensoes: new mongoose.Schema({
    altura: {
      type: Number
    },
    largura: {
      type: Number
    },
    comprimento: {
      type: Number
    },
    unidade: {
      type: String
    }
  }),
  vendas: {
    type: Number,
    default: 0
  },
  quantidade: {
    type: Number,
    default: 0
  },
  peso: new mongoose.Schema({
    total: {
      type: Number
    },
    unidade: {
      type: String
    }
  }),
  cadastro: {
    type: Date,
    default: Date.now
  },
  atualizacao: {
    type: Date,
    default: Date.now
  }
})
    .plugin(require('mongoose-paginate'))
    .set('toJSON', {
      transform(doc, ret) {
        return _.omit(ret, ['site', 'ativo']);
      }
    })
    .index({ '$**': 'text' });

module.exports = mongoose.model('Produto', ProdutoSchema);
