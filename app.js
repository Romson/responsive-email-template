const express = require('express');
const app = express();

app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));

app.set('view engine', 'ejs');

let data = [
  {name: 'product 1', image: 'https://www.plantje.nl/wp-content/uploads/2019/09/sansevieria-trifasciata-laurentii-12-600x600.jpg'},
  {name: 'product 2', image: 'https://www.intratuin.nl/media/catalog/product/8/7/8717263109860_.jpg'},
  {name: 'product 3', image: 'https://greenlifestylestore.nl/wp-content/uploads/2019/07/Musa-Dwarf-Cavendish-op-stam.jpg'},
  {name: 'product 4', image: 'https://www.luchtzuiverende-planten.nl/wp-content/uploads/2016/04/areca-palm-goudpalm-chrysalidocarpus-lutescens.jpg'},
  {name: 'product 5', image: 'https://www.groenrijk.nl/files/images/4_rubberplantkopie.jpg'},
  {name: 'product 6', image: 'https://www.luchtzuiverende-planten.nl/wp-content/uploads/2016/04/dracaena-fragrans-massangeana-corn-plant.jpg'},
  {name: 'product 7', image: 'https://www.groenrijk.nl/files/images/8_sansevieria(1).jpg'},
  {name: 'product 8', image: 'https://www.nextgenlivingwalls.com/wp-content/uploads/2017/06/1SPMBBP10.png'},
  {name: 'product 9', image: 'https://s.s-bol.com/imgbase0/imagebase3/large/FC/5/0/8/8/9200000090728805.jpg'}
];

app.get('/', (req, res) => {
  res.render('landing', { content: data });
});

app.listen(3000, () => {
  console.log('Server started');
});
