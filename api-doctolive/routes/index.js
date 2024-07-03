
/****************     ROUTES      *****************/


const horaires = require('./horaire');
const specialites = require('./specialite');
const methodePaiement = require('./methodePaiement');
const cities = require('./city');
const consultations = require('./consultation');
// const authorisations = require('./authorisation');
// const sign = require('./auth')
const medecin = require('./medecin')
const feedback = require('./feedback')

const tarif = require('./tarif')
const admin = require('./admin')
const auth = require('./auth')
const upload = require('./upload')
const patient = require('./patient')
const { chatMAnager }= require('./../controllers/ChatController');

module.exports = function(app, io) {
   /****************     USE ROUTES      *****************/


   chatMAnager(io)

   
// app.all('/consultation-document/*', verifAuthUser);

app.use(function (req, res, next) {

  try {
    const allowedOrigins = ['http://127.0.0.1:8020', 'http://localhost:3000', 'http://127.0.0.1:9000', 'http://localhost:3001','http://localhost:3002', "https://doctolive.ma/", "https://doctor.doctolive.ma/", "https://pro.doctolive.ma/", "https://admin.doctolive.ma/"];
    const origin = req.headers.origin;
    //  console.log(origin, req.headers )
    // return next();
    if(origin){
      if (allowedOrigins.includes(origin)) {
        res.setHeader('Access-Control-Allow-Origin', origin);
      }
    res.header('Access-Control-Allow-Methods', 'GET, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.header('Access-Control-Allow-Credentials', true);
    return next();

    }else{
      res.status(401).json({message: "No origin sent", error: true});
    }
   
  } catch (error) {
    console.log(error)
    res.status(401).json({message: "Not allowed", error: true});
  }
 
});


app.use('/consultation', consultations)

app.use('/horaire', horaires)
app.use('/admin', admin)
app.use('/methode-paiement', methodePaiement)
app.use('/speciality', specialites)
app.use('/city', cities)
app.use('/upload', upload)

app.use('/medecin', medecin)
app.use('/patient', patient)
app.use('/feedback', feedback)
app.use(auth)


}

