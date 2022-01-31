import {Application} from 'express';
import { listIntegrantes, consultarIntegrante, createIntegrante } from './controllers/integrante_controllers';
import { listRecibos, createRecibo, consultarRecibo } from './controllers/recibo_controller';
import { registro } from './controllers/autenticacion_controllers';

export function routes(app:Application) {
    app.get('/api/integrante', listIntegrantes);
    app.get('/api/integrante/:id', consultarIntegrante);
    app.post('/api/integrante', createIntegrante);
    
    app.get('/api/recibo', listRecibos);
    app.post('/api/recibo', createRecibo);
    app.get('/api/recibo/:id', consultarRecibo);
    
    app.post('/api/registro', registro);

}
