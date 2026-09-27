import express from 'express'
import EmprestimoControllers from '../controllers/EmprestimoControllers.js'
import expressAsyncHandler from 'express-async-handler'
import AuthMiddlewares from '../middlewares/AuthMiddlewares.js'

const EmprestimoRoutes = express.Router()
const emprestimo_controllers = new EmprestimoControllers()

EmprestimoRoutes.get('/',/* #swagger.tags = ['Emprestimos'] */ expressAsyncHandler(emprestimo_controllers.visualizar))
EmprestimoRoutes.get('/:id',/* #swagger.tags = ['Emprestimos'] */ expressAsyncHandler(emprestimo_controllers.buscarPorId))
EmprestimoRoutes.post('/',/* #swagger.tags = ['Emprestimos'] */ AuthMiddlewares, expressAsyncHandler(emprestimo_controllers.adicionar))


export default EmprestimoRoutes