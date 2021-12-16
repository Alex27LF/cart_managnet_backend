import {Application} from 'express';
import { listIntegrantes } from './controllers/integrante_controllers';

export function routes(app:Application) {
    app.get('/api/integrante', listIntegrantes);
}
