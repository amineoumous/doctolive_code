



// const routes = require('./routes')
/****************     MODELS      *****************/
const City = require('./city');
const Consultation = require(('./consultation'));
const Experience = require('./experience');
const Horaire = require('./horaire');
const Image = require('./image');
const Medecin = require('./medecin');
const MethodePaiement = require('./methodepaiement');
const Specialite = require('./specialite');
const Tarif = require('./tarif');
const Adress = require('./adress');
const Patient = require('./patient');
const Documents = require('./documents');
const Message = require('./message');
const CallVideo = require('./callvideo');
const Feedback = require('./feedback');

const Motif = require('./motif');
const CategorieMotif = require('./categoriemotif');


module.exports = function() {
  
/****************     ASSOCIATIONS      *****************/

    Medecin.belongsToMany(Specialite, {
        through: "specialite_medecin",
        as: "specialites",
        foreignKey: "medecin_id",
    });
    Specialite.belongsToMany(Medecin, {
        through: "specialite_medecin",
        as: "medecins",
        foreignKey: "specialite_id",
    });
  
    Medecin.belongsToMany(Patient, {
        through: "blocked_patient",
        as: "blockedPatient",
        foreignKey: "medecin_id",
    });
    Patient.belongsToMany(Medecin, {
        through: "blocked_patient",
        as: "blockedBy",
        foreignKey: "patient_id",
    });
  
  

  
    Medecin.belongsToMany(MethodePaiement, {
        through: "methode_paiement_medecin",
        as: "methode_paiements",
        foreignKey: "medecin_id",
    });
    MethodePaiement.belongsToMany(Medecin, {
        through: "methode_paiement_medecin",
        as: "medecins",
        foreignKey: "methode_paiement_id",
    });
  
    Experience.belongsTo(Medecin, {
        foreignKey: {
            allowNull: false,
        },
    });
    Medecin.hasMany(Experience, {
        foreignKey: {
            allowNull: false,
        }, 
    });
    
    Motif.belongsTo(Medecin, {
        foreignKey: {
            allowNull: true,
        },
    });
    Medecin.hasMany(Motif, {
        foreignKey: {
            allowNull: true,
        }, 
    });
  

    Motif.belongsTo(CategorieMotif, {
        foreignKey: {
            allowNull: true,
        },
    });
    CategorieMotif.hasMany(Motif, {
        foreignKey: {
            allowNull: true,
        }, 
    });
  
    Consultation.belongsTo(Patient, {
        foreignKey: {
            allowNull: true,
        },
    });
    Patient.hasMany(Consultation, {
        foreignKey: {
            allowNull: true,
        }, 
    });
    
    Documents.belongsTo(Consultation, {
        foreignKey: {
            allowNull: true,
        },
    });
    Consultation.hasMany(Documents, {
        foreignKey: {
            allowNull: true,
        }, 
    });
    
    CallVideo.belongsTo(Consultation, {
        foreignKey: {
            allowNull: true,
        },
    });
    Consultation.hasMany(CallVideo, {
        foreignKey: {
            allowNull: true,
        }, 
    });
    
    Feedback.belongsTo(Consultation, {
        foreignKey: {
            allowNull: true,
        },
    });
    Consultation.hasMany(Feedback, {
        foreignKey: {
            allowNull: true,
        }, 
    });
    
    Message.belongsTo(Consultation, {
        foreignKey: {
            allowNull: false,
        },
    });
    Consultation.hasMany(Message, {
        foreignKey: {
            allowNull: false,
        }, 
    });
    
    Documents.belongsTo(Patient, {
        foreignKey: {
            allowNull: true,
        },
    });
    Patient.hasMany(Documents, {
        foreignKey: {
            allowNull: true,
        }, 
    });
    
    Documents.belongsTo(Medecin, {
        foreignKey: {
            allowNull: true,
        },
    });
    Medecin.hasMany(Documents, {
        foreignKey: {
            allowNull: true,
        }, 
    });
    
    Consultation.belongsTo(Medecin, {
        foreignKey: {
            allowNull: false,
        },
    });
    Medecin.hasMany(Consultation, {
        foreignKey: {
            allowNull: false,
        },
    });
    Consultation.belongsTo(Tarif, {
        foreignKey: {
            allowNull: false,
        },
    });
    Tarif.hasMany(Consultation, {
        foreignKey: {
            allowNull: false,
        }, 
    });
    
    Horaire.belongsTo(Medecin, {
        foreignKey: {
            allowNull: true,
        },
    });
    Medecin.hasMany(Horaire, {
        foreignKey: {
            allowNull: true,
        }, 
    });
    
    Medecin.belongsTo(City, {
        foreignKey: {
            allowNull: false,
        },
    });
    City.hasOne(Medecin, {
        foreignKey: {
            allowNull: false,
        },
    });
    Adress.belongsTo(Medecin, {
        foreignKey: {
            allowNull: true,
            unique: true
        },
    });
    Medecin.hasOne(Adress, {
        foreignKey: {
            allowNull: true,
            unique: true
        },
    });
    
    
    Tarif.belongsTo(Medecin, {
        foreignKey: {
        allowNull: false,
        },
    });
    Medecin.hasMany(Tarif, {
        foreignKey: {
        allowNull: false,
        },
    });
    
    Image.belongsTo(Medecin, {
        foreignKey: {
        allowNull: false,
        },
    });
    Medecin.hasMany(Image, {
        foreignKey: {
        allowNull: false,
        },
    });
  
  
}
 