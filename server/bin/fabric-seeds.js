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
  	'colour': 'Verde',
  	'weight': 'Ligera',
  	'structure': 'Media',
  	'dye': 'No tintado',
  	'finalUse': 'Camiseta',
  	'shorten': 'Si',
  	'iron': 'Si',
  	'washed': 'A mano',
    'files': 'https://www.pexels.com/photo/abstract-art-artificial-artistic-131634/',
  	'maker': '59df71deae8afc23706622f7'
  },
  {
    'typeName': 'Oxford',
    'origin': 'Galicia',
    'description': 'No es oxford la ciudad, es una tela',
    'fiber': 'Lana',
    'colour': 'Azul',
    'weight': 'Media',
    'structure': 'Media',
    'dye': 'No tintado',
    'finalUse': 'Falda',
    'shorten': 'No',
    'iron': 'Si',
    'washed': 'En seco',
    'files': 'https://trello-attachments.s3.amazonaws.com/59d10f120066b7fc260d3682/59df74cca86a2fcc3f66a993/a88b6d6d9ed3f65947478b927033e621/oxford.jpeg',
    'maker': '59df71deae8afc23706622f8'
  },
  {
    'typeName': 'Muselina',
    'cropOrigin': 'Galicia',
    'description': 'La muselina gatuna de los montes de galicia',
    'fiber': 'PET',
    'colour': 'Violeta',
    'weight': 'Ligera',
    'structure': 'Fluída',
    'dye': 'Inmersión',
    'finalUse': 'Camisa',
    'shorten': 'No',
    'iron': 'No',
    'washed': 'En seco',
    'files': 'https://trello-attachments.s3.amazonaws.com/59d10f120066b7fc260d3682/59df74cca86a2fcc3f66a993/5006c7582f2fe49174146bb6bfc255e6/muselina.jpeg',
    'maker': '59df71deae8afc23706622f9'
  },
  {
    'typeName': 'Franela',
    'origin': 'Galicia',
    'description': 'La franela más suavecita que te hayas puesto y ecológica!',
    'fiber': 'Ortiga',
    'colour': 'Verde',
    'weight': 'Media',
    'structure': 'Media',
    'dye': 'Inmersión',
    'finalUse': 'Abrigo',
    'shorten': 'No',
    'iron': 'Si',
    'whashed': 'En seco',
    'files': 'https://trello-attachments.s3.amazonaws.com/59d10f120066b7fc260d3682/59df74cca86a2fcc3f66a993/b682dc6dea893189b928c3618af41f10/franela.jpg',
    'maker': '59df71deae8afc23706622fa'
  },
  {
    'typeName': 'Punto',
    'origin': 'Andalucía',
    'description': 'El punto hecho con más cariño que hayas visto',
    'fiber': 'Soja',
    'colour': 'Marrón',
    'weight': 'Ligera',
    'structure': 'Fluída',
    'dye': 'Inmersión',
    'finalUse': 'Camiseta',
    'shorten': 'No',
    'iron': 'Si',
    'washed': 'A mano',
    'files': 'https://trello-attachments.s3.amazonaws.com/59d10f120066b7fc260d3682/59df74cca86a2fcc3f66a993/2b3c8503012c32800fee16641d7d28f9/punto.jpg',
    'maker': '59df71deae8afc23706622fa'
  },
  {
    'typeName': 'Denim',
    'origin': 'Andalucía',
    'description': 'Reciclado, ha tenido dos vidas',
    'fiber': 'Algodón',
    'colour': 'Negro',
    'weight': 'Media',
    'structure': 'Media',
    'dye': 'Inmersión',
    'finalUse': 'Chaqueta',
    'shorten': 'No',
    'iron': 'Si',
    'washed': 'A máquina',
    'files': 'https://trello-attachments.s3.amazonaws.com/59d10f120066b7fc260d3682/59df74cca86a2fcc3f66a993/6eb8a2ffb062e01b58498816bef7d1ec/denim.jpeg',
    'maker': '59df71deae8afc23706622fb'
  },
  {
    'typeName': 'Lamé',
    'origin': 'Italia',
    'description': 'Respetamos la vida de los gusanos, aunque sean insectos',
    'fiber': 'Seda',
    'colour': 'Blanco',
    'weight': 'Ligera',
    'structure': 'Media',
    'dye': 'No tintado',
    'finalUse': 'Camisa',
    'shorten': 'No',
    'iron': 'No',
    'washed': 'En seco',
    'files': 'https://trello-attachments.s3.amazonaws.com/59d10f120066b7fc260d3682/59df74cca86a2fcc3f66a993/0c95629e102635a79e20622ea27d3cc1/seda.jpeg',
    'maker': '59df71deae8afc23706622fb'
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
