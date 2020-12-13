const io = require("socket.io")();
const messageHandlers = require("./handlers/message.handlers");
const uuidv1 = require("uuid/v1");
const users = {};
const firebase = require("firebase/app");


const firebaseConfig = {
    apiKey: "AIzaSyBAZr843fWf8Sz_5UegZ9MRirL-LBNfW6A",
    authDomain: "messaging-app-697ee.firebaseapp.com",
    databaseURL: "https://messaging-app-697ee.firebaseio.com",
    projectId: "messaging-app-697ee",
    storageBucket: "messaging-app-697ee.appspot.com",
    messagingSenderId: "685649527527",
    appId: "1:685649527527:web:c4ecee23e1930359c0d842",
    measurementId: "G-Z1V21CRM3Z"
  };
firebase.initializeApp(firebaseConfig);
require('firebase/database')
const database = firebase.database().ref('user/')



function createUsersOnline(){
    const values = Object.values(users);
    const onlyWithUserNames = values.filter(u => u.username !==undefined);
    return onlyWithUserNames;
}

io.on("connection", socket=>{
    console.log("a user connceted!");
    console.log(socket.id);
    users[socket.id] = {userId: uuidv1()};
    

    socket.on("disconnect",()=>{
        delete users[socket.id];
        io.emit("action",{type: "users_online",data: createUsersOnline()})
    })

    socket.on("action", action=>{
        switch(action.type){
            case "server/join":
                console.log("Get join event", action.data.avatarImg);   
                users[socket.id].username = action.data.username;
                users[socket.id].avatar = action.data.avatarImg;
                users[socket.id].bio = action.data.bio;
                users[socket.id].name = action.data.image;
                io.emit("action", 
                {   type: "users_online",
                    data: createUsersOnline()
                });
                socket.emit("action", {type: "self_user", data: users[socket.id]});
                
                break;
            case "server/private_message":
                const conversationId = action.data.conversationId;
                const from = users[socket.id].userId;
                const userValues = Object.values(users);
                const socketIds = Object.keys(users);

                   
                    for(let i =0; i<userValues.length;i++){
                        
                        if(userValues[i].userId === conversationId){
                           
                            const socketId = socketIds[i];
                           io.sockets.to(socketId).emit("action",{
                            type: "private_message",
                            data: {
                                ...action.data,
                                conversationId: from
                            }
                        });
                       
                        break;
                        }
                        
                    }
        break;
    }
        
    })
});

io.listen(3001);