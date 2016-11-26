var express = require('express')
var app = express()
var server = require('http').Server(app);
var io = require('socket.io')(server);

var names = ['Carly Cardone', 'Deneen Ducharme', 'Lance Leep', 'Miquel Mitschke', 'Corene Caraway', 'Loyce Linzy', 'Nena Neaves', 'Maye Mcandrew', 'Latoyia Lessman', 'Laurel Laine', 'Heriberto Hayslett', 'Vaughn Venuti', 'Lady Landreneau', 'Elvia Einhorn', 'Chloe Cordes', 'Pok Piazza', 'Assunta Addington', 'Brinda Baskins', 'Mindi Mohamed', 'Hunter Horman', 'Lawanda Lentine', 'Jocelyn Joubert', 'Dionne Deslauriers', 'Benny Bridgewater', 'Lindsy Lembo', 'Ciera Cater', 'Karol Keys', 'Elidia Elsass', 'Zandra Zerby', 'Lisbeth Langlinais', 'Lianne Lenhardt', 'Torri Tatro', 'Glenn Garzon', 'Victoria Vanover', 'Gricelda Greenawalt', 'Kristopher Koening', 'Jamey Juel', 'Felecia Fritze', 'Ezekiel Emmert', 'Beaulah Bodkin', 'Nelida Naylor', 'Jazmin Job', 'Hugh Huckabee', 'Sondra Sangster', 'Jacques Janas', 'Sharda Serna', 'Nathan Naron', 'Donovan Devin', 'Joella Jason', 'Nathanael Neville', 'Marybeth Miro', 'Josue Jolicoeur', 'Heath Hyer', 'Moises Mounsey', 'Abbie Arras', 'Cameron Cava', 'Benton Brenes', 'Latoya Lohman', 'Monique Mondragon', 'Julio Junkin', 'Adella Abbot', 'Ona Olmos', 'Bettie Buzard', 'Kati Ketner', 'Belva Buckalew', 'Galina Guercio', 'Hershel Hasting', 'Bernardine Burgess', 'Wesley Whitchurch', 'Kanisha Knutson', 'Jillian Jarboe', 'Isela Ireland', 'Reynalda Rizer', 'Chanda Clune', 'Jessika Jeon', 'Reina Royston', 'Kiley Kelsch', 'Joesph Johnstone', 'Britney Bach', 'Denise Donley', 'Rikki Rodriquez', 'Larhonda Lohmann', 'Arlean Alpaugh', 'Shemeka Segrest', 'Marlon Matheson', 'Sharilyn Sayer', 'Rosena Rowton', 'Rubi Reina', 'Yanira Yoon', 'Sonia Stclair', 'Jinny Jardine', 'Joeann Janson', 'Rickey Redrick', 'Audrea Arocha', 'Buster Bloom', 'Elmer Ell', 'Porsha Peirce', 'Roslyn Ruddick', 'Jerry Jewett', 'Gloria Guerrero', 'Arcelia Abrams', 'Rachael Rossbach', 'Juliane Jeffrey', 'Tangela Tsan', 'Tifany Tarlton', 'Aleta Abreu', 'Ellie Echols', 'Mikki Mcmasters', 'Jeana Joyner', 'Magaret Main', 'Norbert Nagy', 'Lean Lawver', 'Gwyneth Goulet', 'Sharda Sola', 'Lawanda Liefer', 'Aliza Abler', 'Lemuel Lewison', 'Talia Talbert', 'Dorthy Dickenson', 'Thomasine Teitelbaum', 'Sabrina Stansbury', 'Shavon Shimek', 'Devin Duenes', 'Kallie Krzeminski', 'Ethel Ewart', 'Miguel Marlin', 'Carita Cirillo', 'Blanca Bogart', 'Lynetta Livingston', 'Virgilio Verret', 'Hildegard Huynh', 'Andres Ahern', 'Everette Eatman', 'Verline Vanwart', 'Divina Delamora', 'Alease Ahmed', 'Stormy Schatz', 'Song Schott', 'Lesia Littrell', 'Theo Tapp', 'Halina Harness', 'Florentina Flora', 'Leann Leitz', 'Ezra Eatman', 'Stanley Sarinana', 'Tiny Torrens', 'Joann Jurgens', 'Cristen Crowl', 'Archie Alamo', 'Loida Langford'];
var randName = function(){
    return names[Math.floor(Math.random()*names.length)];
}
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.use(express.static(__dirname + '/dist'));

io.on('connect', function (socket) {
  console.log('Client is connected, pushing data...');
  setInterval(function(){
    socket.emit('post', { name: randName(), avatar: 'http://lorempixel.com/400/200/', age: Math.random().toFixed(1)*100 });
  }, 2500);
});

server.listen(3000)
