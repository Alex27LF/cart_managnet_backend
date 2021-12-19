import {Application} from 'express';
import { listIntegrantes } from './controllers/integrante_controllers';
import { listRecibos } from './controllers/recibo_controller';

export function routes(app:Application) {
    app.get('/api/integrante', listIntegrantes);
    app.get('/api/recibo', listRecibos);
}
