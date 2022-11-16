import {Router} from 'express'

import alunosControllers from "../controllers/alunosControllers";

 const routes = new Router()


routes.get('/alunos', alunosControllers.mostrarAlunos)
routes.get('/aluno/:id', alunosControllers.mostrarAluno)
routes.get('/alunocpf/:cpf',alunosControllers.mostrarAlunoCpf)

routes.post('/aluno', alunosControllers.createAluno)
routes.put('/aluno/:id', alunosControllers.alteraAluno)
export default routes