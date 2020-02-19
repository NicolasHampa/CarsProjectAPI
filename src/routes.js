import { Router } from 'express';
import CarControler from './controllers/CarController';
import DashboardControler from './controllers/DashboardController';
import LoginController from './controllers/LoginController';

const routes = new Router();

routes.get('/', (req, res) => {
    return res.json({ ok: true })
});

// Rota responsável por armazenar registros extraidos da API da tabela FIPE
// https://deividfortuna.github.io/fipe/
routes.post('/fip', CarControler.storefip);

routes.post('/token/generate-token', LoginController.login);

// Rota para retornar a coleção de carros cadastrados na base de dados
routes.get('/car', DashboardControler.index);

// Rota para cadastrar um carro especifico da base de dados
routes.post('/car', CarControler.store);

// Rota para retornar um carro especifico da base de dados
routes.get('/car/:id', CarControler.index);

// Rota para atualizar um carro especifico da base de dados
routes.put('/car/:id', CarControler.update);

// Rota para deletar um carro especifico da base de dados
routes.delete('/car/:id', CarControler.destroy);

export default routes;