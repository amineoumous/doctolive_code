
const medecins = [];
const tickets = [];
const patients = [];

module.exports.reconnectPatient = ({ socket_id, patient }) => {
  try {
    let indexExistingPAtient = patients.findIndex((pat) => pat.id === patient.id);
    let thisPatient = {}

    if(indexExistingPAtient === -1) {
      thisPatient = {...patient, socket_id, state: "conected" };
      patients.push(thisPatient);
    }
    else{
      thisPatient = patients[indexExistingPAtient];
      thisPatient = {...patient, socket_id, state: "conected" };
    }
      return { error:false, thisPatient, message: "reconnect success" };  
  } catch (err) {
    console.log(err)
    return { error: true, message: 'une erreur est survenue' };
  }
}

module.exports.recoonectMedecin = ({ socket_id, user }) => {
  try {
    if(!user) return { error: true, message: 'aucun utilisateur envoyé.' };
    user = { ...user, socket_id, state: "conected" };
    var existingUser = medecins.findIndex((us) => us.id === user.id);
     
    if(existingUser === -1) {
      medecins.push(user);
    }else{
      medecins[existingUser] = user; 
    }        
    return { error:false, medecinConnected: user }; 
  } catch (err) {
    console.log(err);
    return { error: true, message: 'une erreur est survenue' };
  }
}

module.exports.addMedecin = ({ socket_id, user }) => {
  try {
    if(!user) return { error: true, message: 'aucun utilisateur envoyé.', medecinConnected: {} };
    user = { ...user, socket_id, state: "conected" };
    var existingUser = medecins.findIndex((us) => us.id === user.id); 

    if(existingUser === -1) {
      medecins.push(user);
    }

    medecins[existingUser] = user;            
    return { error:false,  message: ' ', medecinConnected: user}; 

  } catch (err) {
    console.log(err);
    return { error: true, message: 'une erreur est survenue' };
  }
}

module.exports.addPatient = ({ socket_id, patient }) => {
  try {
    const newPatient = {...patient , socket_id, state: "conected" };
      let indexExistingPAtient = patients.findIndex((tkt) => tkt.id === patient.id);
      var thisPatient ={};
      if(indexExistingPAtient !== -1) {
        thisPatient = patients[indexExistingPAtient];
        thisPatient = {...thisPatient, socket_id, state: "conected" }
      }else{
        patients.push({ ...newPatient, socket_id, state: "conected" })
        thisPatient = newPatient
      }
      return {patient: thisPatient, medecin: {}, error: false, message:" vous n'avez pas encore choisit de médecin"}  
  } catch (err) {
    console.log(err)
    return { error: true, message: 'une erreur est survenue' };
  }
}

module.exports.addTicket = ({  ticket }) => {
  try {

    tickets.push(ticket)

    return { error: false,message:"ticket ajouté"};
  } catch (err) {
    console.log(err)
    return { error: true, message: 'une erreur est survenue' };
  }
}

module.exports.openTicket = ({medecin_id, ticket}) => {
  try {
    let thisTicket = tickets.findIndex((tkt) => tkt.id === ticket.id);

    if(thisTicket === -1){
      tickets.push(ticket)
    }else{
      tickets[thisTicket] = ticket
    }
   
    return {  }
  } catch (err) {
    console.log(err)
    return { error: true, message: 'une erreur est survenue' };
  }
}

module.exports.closeTicket = ({medecin, ticket}) => {
  try {
    let indexMedecin = medecins.findIndex(med => med.id === medecin.id);

    if(indexMedecin === -1){
      medecins.push(medecin)
      indexMedecin = medecins.length -1
    }
    ticketsMedecin = medecins[indexMedecin]['tickets'];
  } catch (err) {
    console.log(err)
    return { error: true, message: 'une erreur est survenue' };
  }
}

module.exports.removeUser = (socket_id, reason) => {
  try {
   
    let medecinindex = medecins.findIndex((user) => user.socket_id === socket_id);
  if(medecinindex === -1){
    let patientIndex = patients.findIndex((user) => user.socket_id === socket_id);
    
      if(patientIndex === -1) return {error : true, message: 404}
      let patient = patients[patientIndex];
        // si un patient qui vas être déconnecter on le met on etat deconnected 
        let sta = (reason === "ping timeout") ? "veille" : "disconnected"
        patients[patientIndex] = {...patient , state: sta}

        let ticketPatient = tickets.find((tkt) => tkt.id === patient.id);

        if(ticketPatient === undefined) return {error: false, message: 'aucun ticket',  type: "patient"};
        let medecin = medecins.find(med => med.id === ticketPatient.id_medecin);
        
        if(medecin === undefined) return {error: false, message: 'aucun medecin',  type: "patient"};
      
        // tickets[patient.medecin] = ticketsthismedecin // on modifier les changement dans la variable globale
      return {patient, medecin , type: "patient"} 
  }
  else {
     // si un medecin qui vas être déconnecter on le met on etat deconnected 
     let sta = (reason === "ping timeout") ? "veille" : "disconnected"

    medecins[medecinindex] = {...medecins[medecinindex] , state: sta}
    
    return {medecin: medecins[medecinindex],  type: "medecin"};
  }
  } catch (err) {
    console.log(err)
    return { error: true, message: 'une erreur est survenue' };
  }
  
}


