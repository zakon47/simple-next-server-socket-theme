import { Socket } from 'socket.io';
import {ESocketTypeMessage} from "../share-types/type-socket";

export const serverSocket = function(socket:Socket) {
  // if(!socket)
  console.log('connected!');
  socket.on(ESocketTypeMessage.CLIENT, function(message: any) {
    console.log(ESocketTypeMessage.CLIENT, message)
  });
  // setInterval(()=>{
  //   io.emit(ESocketTypeMessage.SERVER,"I ready! ");
  //   socket.emit(ESocketTypeMessage.SERVER,"I ready!22222222222222222222222222222222")
  //   socket.broadcast.emit(ESocketTypeMessage.SERVER,"I ready!3333333333333333333333333333")
  // },1000)

  socket.on('disconnect', async function() {
    console.log('disconnect!');
  });
};