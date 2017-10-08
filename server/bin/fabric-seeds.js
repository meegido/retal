const mongoose = require('mongoose')
const fabricSchema = require('../routes/api/fabric/Fabric')

mongoose.connect('mongodb://localhost/retal')
  .then(() => console.log('connected to db!'))

const fabric = [
  {
    'typeName': 'Tafetán',
  	'origin': 'Italia',
  	'description': 'Una tela maravillosa de ovejas de la campiña italiana',
  	'fiber': 'Algodón',
  	'colour': 'Crema',
  	'weight': 'Ligera',
  	'structure': 'Media',
  	'dye': 'No tintado',
  	'finalUse': 'Camiseta',
  	'shorten': 'Si',
  	'iron': 'Si',
  	'washed': 'A mano',
    'files': 'http://tiendatelas.com/5354-thickbox_default/punto-liso-de-algodon-organico-crudo.jpg',
  	'maker': '59da0213cf62694ff8df2a62'
  },
  {
    'typeName': 'Oxford',
    'origin': 'Galicia',
    'fiber': 'Lana',
    'colour': 'Rojo',
    'weight': 'Media',
    'structure': 'Media',
    'dye': 'No tintado',
    'finalUse': 'Falda',
    'shorten': 'No',
    'iron': 'Si',
    'washed': 'En seco',
    'files': 'http://propercloth.com/reference/wp-content/uploads/2013/10/300ce67248a9fc767164dac00f7b2b1d.jpg',
    'maker': '59da023ecf62694ff8df2a63'
  },
  {
    'typeName': 'Muselina',
    'cropOrigin': 'Galicia',
    'fiber': 'PET',
    'colour': 'Violeta',
    'weight': 'Ligera',
    'structure': 'Fluída',
    'dye': 'Inmersión',
    'finalUse': 'Camisa',
    'shorten': 'No',
    'iron': 'No',
    'washed': 'En seco',
    'files': 'https://www.voguefabricsstore.com/images/product/P/32112-E.jpg',
    'maker': '59da0257cf62694ff8df2a64'
  },
  {
    'typeName': 'Franela',
    'origin': 'Galicia',
    'fiber': 'Ortiga',
    'colour': 'Verde',
    'weight': 'Media',
    'structure': 'Media',
    'dye': 'Inmersión',
    'finalUse': 'Abrigo',
    'shorten': 'No',
    'iron': 'Si',
    'whashed': 'En seco',
    'files': 'http://www.laretalera.es/1484/tela-franela-azul-cuadros-woolies-flannel.jpg',
    'maker': '59da0287cf62694ff8df2a65'
  },
  {
    'typeName': 'Punto',
    'origin': 'Andalucía',
    'fiber': 'Soja',
    'colour': 'Marrón',
    'weight': 'Ligera',
    'structure': 'Fluída',
    'dye': 'Inmersión',
    'finalUse': 'Camiseta',
    'shorten': 'No',
    'iron': 'Si',
    'washed': 'A mano',
    'files': 'https://content.sparkstone.co.uk/7/1/images/catalog/i/xl_2673-21109.jpg',
    'maker': '59da02bdcf62694ff8df2a66'
  },
  {
    'typeName': 'Denim',
    'origin': 'Andalucía',
    'fiber': 'Algodón',
    'colour': 'Negro',
    'weight': 'Media',
    'structure': 'Media',
    'dye': 'Inmersión',
    'finalUse': 'Chaqueta',
    'shorten': 'No',
    'iron': 'Si',
    'washed': 'A máquina',
    'files': 'https://cdn.pixabay.com/photo/2013/07/19/12/23/denim-165303_960_720.jpg',
    'maker': '59da02bdcf62694ff8df2a67'
  }
]

  fabricSchema.create(fabric, (err, docs) => {
    if (err) {
      throw err
    }

    docs.forEach((fabric) => {
      console.log(fabric)
    })
    mongoose.connection.close()
  })
