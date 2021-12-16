import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';  
import * as express from 'express';
import * as cors from 'cors';
import { routersIntegrante } from './router';

//=================== Servidor EXPRESS =====================//
const server = express();
server.use(cors({origin:true}));

//=================== RUTAS =====================//
routersIntegrante(server);

//=================== Exportacion del Servidor =====================//
export const api = functions.https.onRequest(server);


// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
