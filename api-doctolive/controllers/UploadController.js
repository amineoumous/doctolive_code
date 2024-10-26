

const moment = require('moment')
// const fs = require('fs');
const fs = require('fs').promises;
const path = require('path');


const Medecin = require('../models/medecin');
const Patient = require('../models/patient');
const Pictures = require('../models/image');
const Documents = require('../models/documents');

exports.uploadModecinProfile = async (req, res) => {
  try {
   
      if (req.body.data === null || req.body.data === undefined) {
          return res.status(400).json({error: true, msg: 'No file uploaded' });
      }
      var file = req.body.data;
      
      let base64Image = file.split(';base64,').pop();
      
      const ext = file.substring(file.indexOf("/")+1, file.indexOf(";base64"));      
      // const ext = base64Image.substring(base64Image.indexOf("/")+1, base64Image.indexOf(";base64"));
      
      let fileName = moment().format('YYYY-MM-DD-HH-mm:ss') + "." + ext
        if(req.body.fileType === "image"){
      
          fs.writeFile(`public/medecin-profil/${fileName}`, base64Image, {encoding: 'base64'})
          .then(async result => {
              try {
                let thisMedecin = await Medecin.findOne({where : { id: req.user.id}});
                let oldPicture = thisMedecin.getDataValue('image');
                try {
                  fs.unlink(`public/${oldPicture}`, (err) => {
                    console.log(err)
                  }) 
                  
                } catch (error) {
                  
                }
                await Medecin.update({
                    image: `/medecin-profil/${fileName}`,
                }, {
                    where: { id: thisMedecin.getDataValue('id') }
                });
              } catch (error) {

              }
          })
          .catch(err => {
            
          })
          // , async (err) => {


           

            return res.status(200).json({ error: false, data: { realName: req.body.realName, fileType: "image", fileName, filePath: `https://api.doctolive.ma/medecin-profil/${fileName}` , fileLink: `/medecin-profil/${fileName}` }});
        //  };
        }else {
            return res.status(400).json({ error: true, msg: "Type de fichier n'est pas acceptable " });
        }
  } catch (error) {
      console.log(error)
      res.status(500).json({ error: true, message: 'server problem' })
  }      
}
exports.uploadPatientProfile = async (req, res) => {
  try {
    // Check if the file data is provided
    if (!req.body.data) {
      return res.status(400).json({ error: true, msg: 'No file uploaded' });
    }

    const file = req.body.data;

    // Validate and extract the base64 string
    const base64Match = file.match(/^data:([A-Za-z-+/]+);base64,(.+)$/);
    if (!base64Match) {
      return res.status(400).json({ error: true, msg: 'Invalid file format' });
    }

    const ext = base64Match[1].split('/').pop(); // Extract the file extension
    const base64Image = base64Match[2]; // Extract the base64 encoded data

    const fileName = `${moment().format('YYYY-MM-DD-HH-mm:ss')}.${ext}`;

    const validFileTypes = ["jpeg", "png", "svg", "jpg"];

    if (validFileTypes.includes(ext)) {
      // Save the image to the filesystem
      const filePath = path.join('public', 'patient-profil', fileName);
      await fs.writeFile(filePath, base64Image, { encoding: 'base64' });

      try {
        const thisMedecin = await Patient.findOne({ where: { id: req.user.id } });
        const oldPicture = thisMedecin.getDataValue('image');

        if (oldPicture) {
          try {
            await fs.unlink(path.join('public', oldPicture));
          } catch (err) {
            console.error('Error deleting old image:', err);
          }
        }

        await Patient.update({ image: `/patient-profil/${fileName}` }, { where: { id: req.user.id } });

        return res.status(200).json({
          error: false,
          data: {
            realName: req.body.realName,
            fileType: ext,
            fileName,
            filePath: `https://api.doctolive.ma/patient-profil/${fileName}`,
            fileLink: `/patient-profil/${fileName}`,
            base64Image:base64Image
          },
        });
      } catch (err) {
        console.error('Error updating patient profile:', err);
        return res.status(500).json({ error: true, msg: 'Error updating patient profile' });
      }
    } else {
      return res.status(400).json({ error: true, msg: "Invalid file type" });
    }
  } catch (err) {
    console.error('Server error:', err);
    return res.status(500).json({ error: true, msg: 'Server problem' });
  }
};

exports.uploadCabinet = async (req, res) => {
  try {
    
      if (req.body.data === null || req.body.data === undefined) {
          return res.status(400).json({error: true, msg: 'Aucun fichier envoyer' });
      }

      var files = req.body.data;

      savingImages(files).then(async response=> {
        let savedImages = await StoreDataBase(response, req);

        return res.status(200).json({ error: false, ...savedImages });

      }).catch(async response => {
        let savedImages = await StoreDataBase(response, req);

        return res.status(200).json({ error: false, ...savedImages});
      })

      // return res.status(400).json({ error: true, msg: "Type de fichier n'est pas acceptable " });

  } catch (error) {
      console.log(error)
      res.status(500).json({ error: true, message: 'server problem' })
  }      
}

exports.uploadDocument = async (req, res) => {
  try {
 
      if (req.body.data === null || req.body.data === undefined) {
          return res.status(400).json({error: true, msg: 'Aucun fichier envoyer' });
      }

      var files = req.body.data;

      savingDocuments(files).then(async response=> {
        console.log('then', response)
        let savedImages = await TransferDocuments(response, req);
        return res.status(200).json({ error: false, ...savedImages });
      }).catch(async response => {
        console.log('catch', response)
        let savedImages = await TransferDocuments(response, req);

        return res.status(200).json({ error: false, ...savedImages});
      })

      // return res.status(400).json({ error: true, msg: "Type de fichier n'est pas acceptable " });

  } catch (error) {
      console.log(error)
      res.status(500).json({ error: true, message: 'server problem' })
  }      
}

function savingImages(files) {
  return new Promise(async (resolve, reject) => {
    let allPic = [];

    let i = 0;

    files.forEach( async (file, index) => {
      let base64Image = file.filePath.split(';base64,').pop();
      const ext = file.filePath.substring(file.filePath.indexOf("/")+1, file.filePath.indexOf(";base64"));
      let fileName = moment().format('YYYYMMDDHHmmss') + "-" + index + "." + ext

      fs.writeFile(`public/medecin-cabinet/${fileName}`, base64Image, {encoding: 'base64'}).then(result => {
        i++;
        allPic= [...allPic, {error: false, realName: file.realName, fileName, filePath: `/medecin-cabinet/${fileName}` , fileLink: `/medecin-cabinet/${fileName}` }];
        if(i === files.length ){
          resolve(allPic)
        }
      })
       .catch(err=> {
        i++;
        allPic= [...allPic, {error: true, index: index }];

         console.log(err)
         if(i === files.length ){
          resolve(allPic)
        } 
      })
    })
  })
  

}

async function  StoreDataBase  (data, req) {
  try {
    let thisMedecin = await Medecin.findOne({where : { id: req.user.id}});

    let validateData = [];
    let canceledData = [];

    data.map(dt => {
      if(!dt.error){
        validateData= [...validateData, {path: dt.filePath, medecinId:  thisMedecin.id}]
      }else {
        canceledData= [...canceledData, dt]
      }
    })

    if(validateData.length > 0 ) {
      let savedPictures = await Pictures.bulkCreate(validateData)
      return {savedPictures, canceledData}
    }
    return {savedPictures: [], canceledData}
    
  } catch (error) {
    console.log(error)
    return {savedPictures: [], canceledData: []}
  }
}

async function TransferDocuments (data, req) {
  try {
    let validateData = [];
    let canceledData = [];

    data.map(dt => {
      if(!dt.error){
        validateData= [...validateData, {path: dt.filePath, name: dt.realName, type: dt.kind, sentTo: req.body.sentTo, consultationId: req.body.consultation.id, medecinId: req.body.consultation.medecin.id, patientId: req.body.consultation.patient.id}]
      }else {
        canceledData= [...canceledData, dt]
      }
    })

    if(validateData.length > 0 ) {
      let savedPictures = await Documents.bulkCreate(validateData)
      return {savedPictures, canceledData}
    }
    return {savedPictures: [], canceledData}
    
  } catch (error) {
    console.log(error)
    return {savedPictures: [], canceledData: []}
  }
}

function savingDocuments(files) {
  return new Promise(async (resolve, reject) => {
    let allPic = [];

    let i = 0;


    files.forEach( async (file, index) => {
      let base64Image = file.filePath.split(';base64,').pop();
      const ext = file.filePath.substring(file.filePath.indexOf("/")+1, file.filePath.indexOf(";base64"));
      let fileName = moment().format('YYYYMMDDHHmmss') + "-" + index + "." + ext

      fs.writeFile(`media/consultation-document/${fileName}`, base64Image, {encoding: 'base64'}).then(result => {
        i++;
        allPic= [...allPic, {error: false, realName: file.realName, kind: file.kind,  fileName, filePath: `/media/consultation-document/${fileName}` , fileLink: `/media/consultation-document/${fileName}` }];
        if(i === files.length ){
          resolve(allPic)
        }
      })
       .catch(err=> {
         console.log(err)
        i++;
        allPic= [...allPic, {error: true, index , err}];
         if(i === files.length ){
          resolve(allPic)
        } 
      })
    })
  })
  

}

exports.deleteCabinet = async (req, res) => {
  try {
      let oldPicture = req.body.path;

    
        fs.unlink(`public${oldPicture}`, (err) => {
          console.log(err)
        }) 
        
     
      await Pictures.destroy({
          where: { id: req.body.id }
      });

      return res.status(200).json({ error: false});
   
  } catch (error) {

    res.status(500).json({ error: true, message: 'server problem' })
  }      
}


exports.deleteDocument = async (req, res) => {
  try {
      let oldPicture = req.body.path;
    
        fs.unlink(`public${oldPicture}`, (err) => {
          console.log(err)
        }) 
        
     
      await Documents.destroy({
          where: { id: req.body.id }
      });

      return res.status(200).json({ error: false});
   
 
  } catch (error) {

    res.status(500).json({ error: true, message: 'server problem' })
  }      
}