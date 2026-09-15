import UsuarioRepositories from '../repositories/UsuarioRepositories.js'
import AppError from '../errors/AppError.js'
import bcrypt from 'bcrypt'

class UsuarioServices {
     constructor() {
          this.usuario_repositories = new UsuarioRepositories()
     }

     async visualizar(){
          const result = await this.usuario_repositories.visualizar()

          return result
     }
     async buscarPorId(usuario) {
          const result = await this.usuario_repositories.buscarPorId(usuario)

          if (!result) {
               throw new AppError("Nenhuma usuario com esse id encontrado",400);
               
          }

          return result
     }
     async adicionar(usuario) {
          if (!usuario.nome) {
               throw new AppError("Insira o nome do usuario",400);
               
          }
          if (!usuario.cpf) {
               throw new AppError("Insira o cpf do usuario",400);
               
          }
          if (!usuario.email) {
               throw new AppError("Insira o email do usuario",400);
               
          }
          if (!usuario.senha) {
               throw new AppError("Insira a senha do usuario",400);
               
          }
          if (!usuario.telefone) {
               throw new AppError("Insira o telefone do usuario",400);
               
          }
          if (!usuario.data_nascimento) {
               throw new AppError("Insira a data de nascimento do usuario",400);
               
          }
          if (!usuario.endereco) {
               throw new AppError("Insira o endereço do usuario",400);
               
          }
          if (!usuario.perfil) {
               throw new AppError("Insira o perfil do usuario",400);
               
          }
          
          const verificarEmail = await this.usuario_repositories.buscarPorEmail(usuario)
          
          if (verificarEmail) {
               throw new AppError("Já existe um usuario com esse email",400);
               
          }

          const verificarCpf = await this.usuario_repositories.buscarPorCpf(usuario)
          
          if (verificarCpf) {
               throw new AppError("Já existe um usuario com esse cpf",400);
               
          }

          const senhaHasheada = await bcrypt.hash(usuario.senha, 10)

          const user = {
               nome: usuario.nome,
               cpf: usuario.cpf,
               email: usuario.email,
               senha: senhaHasheada,
               telefone: usuario.telefone,
               data_nascimento: usuario.data_nascimento,
               endereco: usuario.endereco,
               perfil: usuario.perfil
          }

          const result = await this.usuario_repositories.adicionar(user)

          return result

     }
     async atualizar(usuario){
          if (!usuario.id) {
               throw new AppError("Insira o id do usuario",400);
               
          }
          
          const verificarId = await this.usuario_repositories.buscarPorId(usuario)
          
          if (!verificarId) {
               throw new AppError("Nenhuma usuario com esse id encontrado",400);
               
          }
          
          const verificarEmail = await this.usuario_repositories.buscarPorEmail(usuario)
          
          if (verificarEmail && verificarEmail.id != usuario.id) {
               throw new AppError("Já existe uma usuario com esse email",400);
               
          }
          
          const verificarCpf = await this.usuario_repositories.buscarPorCpf(usuario)
          
          if (verificarCpf && verificarCpf.id != usuario.id) {
               throw new AppError("Já existe uma usuario com esse cpf",400);
               
          }

          let senhaHasheada;
          
          const user = {
               id: usuario.id,
               nome: usuario.nome,
               cpf: usuario.cpf,
               email: usuario.email,
               telefone: usuario.telefone,
               data_nascimento: usuario.data_nascimento,
               endereco: usuario.endereco,
               perfil: usuario.perfil
          }

          if (usuario.senha) {
               senhaHasheada = await bcrypt.hash(usuario.senha, 10)
               user.senha = senhaHasheada
          }

          const result = await this.usuario_repositories.atualizar(user)

          return result
     }
     async alterarAtivo(usuario){
          if (!usuario.id) {
               throw new AppError("Insira o id do usuario",400);
               
          }
          
          const verificarId = await this.usuario_repositories.buscarPorId(usuario)
          
          if (!verificarId) {
               throw new AppError("Nenhuma usuario com esse id encontrado",400);
               
          }
          
          const verificarEmprestimosAtivos = await this.usuario_repositories.buscarEmprestimosAtivos(usuario)
          
          if (verificarEmprestimosAtivos) {
               throw new AppError("Esse usuario possui emprestimos ativos",400);
               
          }

          const result = await this.usuario_repositories.alterarAtivo(usuario)

          return result
     }
}

export default UsuarioServices