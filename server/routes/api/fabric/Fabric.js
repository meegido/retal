const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const fabricSchema = new Schema({
  'typeName': {
    type: String,
    enum: [ 'Oxford', 'Plisado', 'Tafetán', 'Satén',
      'Franela', 'Lino', 'Muselina', 'Lona', 'Loneta',
      'Denim', 'Sarga', 'Pana', 'Gasa', 'Lamé', 'Punto']},

  'origin': String,

  'fiber': {
    type: String,
    enum: [ 'Algodón', 'Cáñamo', 'Bambú', 'Ortiga', 'Seda',
      'Mohair', 'Cachemir', 'Alpaca', 'PET', 'Rayón', 'PLA', 'Soja']},

  'colour': String,

  'weight': { type: String,
    enum: ['Ligera', 'Media', 'Pesada', 'Muy pesada']},

  'structure': {
    type: String,
    enum: ['Fluída', 'Media', 'Dura']},

  'dye': {
    type: String,
    enum: ['Inmersión', 'Estampado', 'No tintado']},

  'finalUse': {
    type: String,
    enum: ['Camisa', 'Vestido', 'Pantalón', 'Abrigo', 'Camiseta']
  },
  'shorten': Boolean,
  'iron': Boolean,
  'washed': {
    type: String,
    enum: ['A mano', 'A máquina', 'En seco']
  },
  'maker': { type: Schema.Types.ObjectId, ref: 'User' }
  // files: [{
  //   pic_path: String,
  //   pic_name: String
  // }]
})

fabricSchema.set('timestamps', true);

module.exports = mongoose.model('Fabric', fabricSchema);
