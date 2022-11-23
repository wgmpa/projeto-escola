import {Router} from 'express'

import alunosControllers from "../controllers/alunosControllers";

 const routes = new Router()


routes.get('/alunos', alunosControllers.mostrarAlunos)
routes.get('/aluno/:id', alunosControllers.mostrarAluno)
routes.get('/alunocpf/:cpf',alunosControllers.mostrarAlunoCpf)

routes.post('/aluno', alunosControllers.createAluno)
routes.put('/aluno/:cpf', alunosControllers.alteraAluno)
routes.delete('/aluno/:id', alunosControllers.delAluno)
export default routes