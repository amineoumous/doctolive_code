

const UsersController = require('./users');
const moment = require('moment')
const Consultation = require('../models/consultation')
const Message = require('../models/message')

exports.chatMAnager = (io) => {
    io.on('connection', (socket) => {
    socket.on('reconnected-patient', ( {agent} , callback) => {
      try {
        var { error, thisPatient, medecin, message } = UsersController.reconnectPatient({  socket_id: socket.id, patient: agent});
        socket.join(agent.id);
        if(error) {
          return callback({error: true, message, patient: thisPatient});
        } else{           
          callback({error:false, patient:thisPatient, medecin, message});
        }
        if(!agent || !medecin) return {error: true, message: "on pa pus recupérer le ticket et le médecin"};
        io.to(medecin.id).emit('switch-patient', { tickets: medecin.tickets, type:"reconected"});
      } catch (err) {
        console.log(err)
      }
    });

    
    socket.on('reconnected-medecin', ( request , callback) => {
      try {
        if(request.id === undefined || !request ) return callback({error: true, message:"vous n'avez envoyer aucune information au serveur"});
        socket.join(request.id);
         
        const { error } = UsersController.recoonectMedecin({ socket_id: socket.id, user: request });     
        callback({error});
      } catch (err) {
        console.log(err)
      }
    });

    socket.on('join-medecin', ( request , callback) => {
      try {

        if(request.id === undefined || !request ) return callback({error: true, message:"vous n'avez envoyer aucune information au serveur"});
        socket.join(request.id);
         
        const { error, medecinConnected, message } = UsersController.addMedecin({ socket_id: socket.id, user: request });

        if(error) return callback({error: true, message:error});

        if(!medecinConnected) return callback({error: true, message: "data non trouvé"})
        // io.emit('medecin-connected', {  medecinConnected});

        // let medecinsOnligne = UsersController.medecinsNumber();
        // if(!medecinsOnligne) return callback({error: true, message: "on a pas pus récupérer les médecins en ligne" })

        // io.emit('medecins-changed', {medecinsOnligne});
        return callback({error:false, user: medecinConnected});
      } catch (err) {
        console.log(err)
      }
    });

    socket.on('join-patient', ( patient , callback) => {
      try {
        if( !patient ) return callback({error: true, message:"vous n'avez envoyer aucune information au serveur"});
        socket.join(patient.id);
        var { error, patient, message } = UsersController.addPatient({  socket_id: socket.id, patient });
        if(error) return callback({error: true, message})
        callback({error:false, patient, message});

      } catch (err) {
        console.log(err)
      }
    });

    socket.on('check-time',async ({consultationId}, callback) => {
      try {

        if( !consultationId) return callback({error: true, message:"consultation id not found"});
        let thisConsultation  = await Consultation.findByPk(consultationId)
        let time = moment(thisConsultation.date + thisConsultation.time, 'YYYY/MM/DDHH:mm');
        let diff = time.diff(moment()) ;
        // diff = diff - (1000 * 60 * 60);
        console.log(diff, moment(thisConsultation.date + thisConsultation.time, 'YYYY/MM/DDHH:mm').format(), moment().format())
        if(diff < (1000 * 60 * 10)){
          return callback({error: false, message:"", now: Date.now(), closed: !thisConsultation.active, isTime: true, diff});
        }else{
          return callback({error: false, message:"", now: Date.now(), closed: !thisConsultation.active, isTime: false, diff});
        }
      } catch (err) {
        console.log(err)
      } 
    });
    socket.on('add-ticket', ({ticket}, callback) => {
      try {
        if( !ticket) return callback({error: true, message:"vous n'avez envoyer aucune information au serveur"});
        const { error, message } = UsersController.addTicket({ ticket });
        if(error) return callback({error, message});
        io.to(ticket.id_medecin).emit('switch-patient', { ticket: ticket, type: 'add-ticket' });
        callback({error, message, ticket});
      } catch (err) {
        console.log(err)
      } 
    });

    socket.on('open-ticket', ({ticket, medecin_id}, callback) => {
      try {
        if( !ticket || !medecin_id ) return callback({error: true, message:"vous n'avez envoyer aucune information au serveur"})
        UsersController.openTicket({ ticket, medecin_id });

        io.to(ticket.id).emit('ticket-is-oppened', { ticket });
       
        callback({ error: false,  ticket});
      } catch (err) {
        console.log(err)
      } 
    }); 

    socket.on('close-ticket', ({medecin, ticket}, callback) => {
      try {
        if(!medecin || !ticket) return callback({error: true, message:"vous n'avez envoyer aucune information au serveur"})

        io.to(ticket.id).emit('ticket-is-closed', { ticket });
        callback({error:false, message:"ticket férmer et la nouvelle liste des ticket récupérer"});
      } catch (err) {
        console.log(err)
      }
    }); 

   
    
  socket.on('disconnect', (reason) => {
    try {
      const response = UsersController.removeUser(socket.id, reason);

      if(!response.error){
      if(!response.type) return{};
      if(response.type === "medecin"){
        io.emit('medecin-disconnected', { medecinDisconnected: response.user, reason });
      }else if(response.type === "patient"){
        if(response.medecin !== undefined){
            io.to(response.medecin.id).emit('switch-patient', { patient: response.patient , type:"disconnect", reason});

        }
      }
    }
    } catch (err) {
      console.log(err)
    }
  });

      
  socket.on('sendMessage', async (data, callback) => {
    try {
      if(!data.selectedUser) return callback({error: true, message:"vous n'avez envoyer aucune information au serveur"});
      io.to(data.selectedUser).emit('message', {isSentByCurrentUser:false, data });
      let CreatedMessage = await Message.create({message: data.message, consultationId: data.consultationId, sentTo: data.sentTo})
      callback({ send: true }); 
    } catch (err) {
      callback({ send: false }); 
    }
  });

  socket.on('newDocuments', async (data, callback) => {
    try {
      if(!data.selectedUser) return callback({error: true, message:"vous n'avez envoyer aucune information au serveur"});
      io.to(data.selectedUser).emit('newDocuments', data);

      callback({ send: true }); 
    } catch (err) {
      callback({ send: false }); 
    }
  });

 //quand les media du médecin est prêt on envoie un message au patient pour l'informer qu'il reçoit une appel de la part du médecin
  socket.on('call-patient', ({selectedUser}, callback) => {  
    try {
      if(!selectedUser) return callback({error: true, message:"vous n'avez envoyer aucune information au serveur"})  
    io.to(selectedUser).emit('call-entring', {  });
    } catch (err) {
      console.log(err)
    }
    
  }); 
    // quand le media du patient est pête on envoie un message pour le médecin pour commencer l'appel
  socket.on('patient-ready', ({selectedUser}, callback) => {   
    console.log('patient-ready', selectedUser)
try {
      if(!selectedUser) return callback({error: true, message:"vous n'avez envoyer aucune information au serveur"})                    
    io.to(selectedUser).emit('ready-patient', { });
    } catch (err) {
      console.log(err)
    }  
  }); 
  // quand tout est prêt on commance l'appel
  socket.on('client-call', ({selectedUser}, callback) => { 
    try {
      console.log('client-call', selectedUser)

      if(!selectedUser) return callback({error: true, message:"vous n'avez envoyer aucune information au serveur"})            
    io.to(selectedUser).emit('patient-call', { });
    } catch (err) {
      console.log(err)
    } 
    
  }); 
  // quand le patient répond à l'appel et a initialiser le peer on transmettre le data au médecins et on l'informe pour initialiser le peer 
  socket.on('confirm-call', ({selectedUser, data}, callback) => {
    try {
      console.log('confirm-call', selectedUser)

      if(!selectedUser || !data) return callback({error: true, message:"vous n'avez envoyer aucune information au serveur"})                      
      io.to(selectedUser).emit('signal-call', { data });
    } catch (err) {
      console.log(err)
    }
  }); 
  // quand le medecin a terminer l'inatialisation du peer va passer le signal avec le data chez le patient
  socket.on('medecin-confirm-call', ({selectedUser, data}, callback) => {  
    try {
            console.log('confirm-call', selectedUser)

      if(!selectedUser || !data) return callback({error: true, message:"vous n'avez envoyer aucune information au serveur"})             
    io.to(selectedUser).emit('patient-signal-call', { data });
    } catch (err) {
      console.log(err)
    }
  }); 
  // quand le medecin termine l'appel on informe le patient
  socket.on('medecin-reject', ({selectedUser}, callback) => {   
    try {
      if(!selectedUser) return callback({error:true, message: "vous n'avez envoyer aucune information au serveur"})
    io.to(selectedUser).emit('reject-call-patient', {  });
    } catch (err) {
      console.log(err)
    }
  }); 
  // quand le patient termine l'appel on informe le medecin
  socket.on('patient-reject-call', ({selectedUser}, callback) => {  
    try {
      if(!selectedUser) return callback({error: true, message: "vous n'avez envoyer aucune information au serveur"})
    io.to(selectedUser).emit('reject-call-medecin', {  });
    } catch (err) {
      console.log(err)
    }
  }); 

  socket.on('get-time', ({}, callback) => {  
    try {
     callback({now: moment().format('YYYY-MM-DD HH:mm:ss')})
    } catch (err) {
      callback({error: true, message: err})

      console.log(err)
    }
  });


});
}


