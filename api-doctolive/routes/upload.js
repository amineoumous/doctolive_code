
const express = require('express');
const router = express.Router();
const UplodController = require('./../controllers/UploadController')
const haveAuthorisation = require('./../middleware/haveAuthorisation')
const verifAuth = require('./../middleware/auth')



router.post("", UplodController.uploadModecinProfile);
router.post("/medecin-profil", verifAuth, haveAuthorisation.isMedecin, UplodController.uploadModecinProfile);
router.post("/cabinet", verifAuth, haveAuthorisation.isMedecin, UplodController.uploadCabinet);
router.post("/document", verifAuth, UplodController.uploadDocument);
router.delete("/document", verifAuth, UplodController.deleteDocument);
router.post("/delete-cabinet", verifAuth, haveAuthorisation.isMedecin, UplodController.deleteCabinet);


module.exports = router;