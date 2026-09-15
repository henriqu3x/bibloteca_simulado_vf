import AuthRepositories from '../repositories/AuthRepositories.js'
import AppError from '../errors/AppError.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import 'dotenv/config'

class AuthServices {
     constructor() {
          this.auth_repositories = new AuthRepositories()
     }

     async login(usuario) {
          if (!usuario.email) {
               throw new AppError("Insira o email do usuario",400);
               
          }
          if (!usuario.senha) {
               throw new AppError("Insira a senha do usuario",400);
               
          }
          
          const verificarEmail = await this.auth_repositories.buscarPorEmail(usuario)
          
          if (!verificarEmail) {
               throw new AppError("Email ou senha incorretos",400);
               
          }

          const verificarSenha = await bcrypt.compare(usuario.senha, verificarEmail.senha)
          
          if (!verificarSenha) {
               throw new AppError("Email ou senha incorretos",400);
               
          }
          
          if (!verificarEmail.ativo || verificarEmail.perfil == 'cliente') {
               throw new AppError("Voce não tem autorização para entrar na plataforma",400);
               
          }

          const user = {
               id: verificarEmail.id,
               nome: verificarEmail.nome,
               email: verificarEmail.email,
               perfil: verificarEmail.perfil,
               ativo: verificarEmail.ativo,
          }

          const token = jwt.sign(user, process.env.JWT_SECRET, {
               expiresIn: '1d'
          })

          return {user, token}

     }
}

export default AuthServices