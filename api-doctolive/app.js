
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const app = express();
const path = require('path');

const fileUpload = require('express-fileupload');

const config = require('./config');

const bodyParser = require('body-parser');

const http = require('http');
const mysql = require('mysql2/promise');

const server = http.createServer(app);
const socketio = require('socket.io');
const dotenv = require('dotenv');

const db = require('./config/database');

const jwt = require('jsonwebtoken');

const Patient = require('./models/patient')
const Admin = require('./models/admin')
const Docuuments = require('./models/documents')

const City = require('./models/city');
const Specialite = require('./models/specialite');
const Medecin = require('./models/medecin')
/****************     Creat data base if not exist      *****************/
initialize();
async function initialize() {
  try {
    
    // create db if it doesn't already exist
    const { host, port, user, password, name } = config;
    const connection = await mysql.createConnection({ host, port, user, password });
    // await connection.query(`DROP DATABASE IF EXISTS \`${name}\`;`);
    await connection.query(`CREATE DATABASE IF NOT EXISTS \`${name}\`;`);
  } catch (error) {
    console.log(error)
  }
}

/****************     INIT APP      *****************/

app.use(cors())
dotenv.config()

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(bodyParser.raw({
  type: 'application/vnd.custom-type',
  limit: '10mb',
  extended: true
}))
app.use(bodyParser.text({
  type: 'text/html',
  limit: '10mb',
  extended: true
}))

app.use(fileUpload());

app.use(cookieParser());


const io = socketio(server);


require('./routes/index')(app, io);
require('./models/index')();

app.use(express.static(path.join(__dirname, 'public')));

app.use('/media/consultation-document/*', async (req, res, next) => {

  try{
    if(req.cookies){
      if(req.cookies.patientData){
        const userData = JSON.parse(req.cookies.patientData) ;
  
        if(!userData.token){
          res.status(401).json({error: true, message:'aucun token envoyé'});
        }
        let decodedToken;
      
        decodedToken = jwt.verify(userData.token, process.env.TOKEN_SECRET);
  
        let documentWanted = await Docuuments.findOne({where: {path: req.originalUrl}});
        if(!documentWanted) return res.status(401).json({error: true, message:'Aucun document trouvé'});
        if(documentWanted.medecinId === decodedToken.id){
          next();
        }else{
          return res.status(401).json({error: true, message:"Vous n'avez pas l'autorisation de voir ce document"});
        }
  
      }
      else if(req.cookies.userData){
        const userData = JSON.parse(req.cookies.userData) ;
  
      if(!userData.token){
        res.status(401).json({error: true, message:'aucun token envoyé'});
      }
      let decodedToken;
    
      decodedToken = jwt.verify(userData.token, process.env.TOKEN_SECRET);
      req.user = decodedToken;
  
      let documentWanted = await Docuuments.findOne({where: {path: req.originalUrl}});
      if(!documentWanted) return res.status(401).json({error: true, message:'Aucun document trouvé'});
  
      if(documentWanted.medecinId === decodedToken.id){
        next();
      }else {
        return res.status(401).json({error: true, message:"Vous n'avez pas l'autorisation de voir ce document"});
      }
     
      }
    }
    
    
  }
  catch (err){
    console.log(err)
    res.status(401).json({error: true, message:'token invalid or expired'});
  }
  
});

app.use('/media',express.static(path.join(__dirname, 'media')));


// db.sync(  )
server.listen(process.env.PORT, () => console.log(`Server has started. at ${process.env.PORT}`));

if(false){
db.sync(
  // {force: true}
  )
  .then( async result => {
    await City.create({
        name: "Kenitra",
        active: true,
    });
    await Specialite.bulkCreate([
      {
        name: "generaliste",
        icon:"",
        active: true,
      },
      { 
        name: "Chirurgien",
        icon:"",
        active: true,
      },
      {
        name: "stomatologue",
        icon:"",
        active: true,
      },
  ]);

  Admin.create({ 
      fullName : "admin admin", 
      email : "admin@admin.com", 
      password: "$2a$10$d/E.1Y2WIykXJiKrCG8CIOimhmHmu2r7u.zMewnt27W6YRqWQG2p2", 
      active: 1, 
  });
await Medecin.create({
  email: "adnane@gmail.com",
  nom: "Adnane",
  prenom: "ROUHI",
  phone:"0650517418",
  cityId: 1,
  password: "$2a$10$d/E.1Y2WIykXJiKrCG8CIOimhmHmu2r7u.zMewnt27W6YRqWQG2p2"
})
await City.bulkCreate([
  {
    name: "Casablanca",
    active: true,
},
  {
    name: "Rabat",
    active: true,
},
  {
    name: "Marrakech",
    active: true,
},
  {
    name: "Fes",
    active: true,
},
  {
    name: "Meknes",
    active: true,
},
  {
    name: "Agadir",
    active: true,
},
]);

  })
  .catch((err) => {
      console.log('error: ', err)
  })}