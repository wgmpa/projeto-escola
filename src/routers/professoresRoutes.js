import {Router} from 'express'
import professoresControllers from '../controllers/professoresControllers'

const routes = new Router()

routes.get('/professores',professoresControllers.index)
routes.get('/professores/:id',professoresControllers.listarProfessor)

routes.post('/professores',professoresControllers.createProfessor)
routes.put('/professores/:id',professoresControllers.alterProf)
routes.delete('/professor/:id',professoresControllers.delProf)





export default  routes