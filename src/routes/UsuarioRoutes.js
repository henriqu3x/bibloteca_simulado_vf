import express from 'express'
import UsuarioControllers from '../controllers/UsuarioControllers.js'
import expressAsyncHandler from 'express-async-handler'
import AuthMiddlewares from '../middlewares/AuthMiddlewares.js'
import AdminMiddlewares from '../middlewares/AdminMiddlewares.js'

const UsuarioRoutes = express.Router()
const usuario_controllers = new UsuarioControllers()

UsuarioRoutes.get('/', expressAsyncHandler(usuario_controllers.visualizar))
UsuarioRoutes.get('/:id', expressAsyncHandler(usuario_controllers.buscarPorId))
UsuarioRoutes.post('/', AuthMiddlewares, AdminMiddlewares, expressAsyncHandler(usuario_controllers.adicionar))
UsuarioRoutes.put('/:id', AuthMiddlewares, AdminMiddlewares, expressAsyncHandler(usuario_controllers.atualizar))
UsuarioRoutes.patch('/:id', AuthMiddlewares, AdminMiddlewares, expressAsyncHandler(usuario_controllers.alterarAtivo))

export default UsuarioRoutes