import express from 'express'
import AuthControllers from '../controllers/AuthControllers.js'
import expressAsyncHandler from 'express-async-handler'

const AuthRoutes = express.Router()
const auth_controllers = new AuthControllers()

AuthRoutes.post('/login', expressAsyncHandler(auth_controllers.login))

export default AuthRoutes