import AutorRepositories from '../repositories/AutorRepositories.js'
import AppError from '../errors/AppError.js'

class AutorServices {
     constructor() {
          this.autor_repositories = new AutorRepositories()
     }

     async visualizar(){
          const result = await this.autor_repositories.visualizar()

          return result
     }
     async buscarPorId(autor) {
          const result = await this.autor_repositories.buscarPorId(autor)

          if (!result) {
               throw new AppError("Nenhuma autor com esse id encontrado",400);
               
          }

          return result
     }
     async adicionar(autor) {
          if (!autor.nome) {
               throw new AppError("Insira o nome do autor",400);
               
          }
          if (!autor.nascionalidade) {
               throw new AppError("Insira a nascionalidade do autor",400);
               
          }
          if (!autor.data_nascimento) {
               throw new AppError("Insira a data de nascimento do autor",400);
               
          }

          const result = await this.autor_repositories.adicionar(autor)

          return result

     }
     async atualizar(autor){
          if (!autor.id) {
               throw new AppError("Insira o id da autor",400);
               
          }
          
          const verificarId = await this.autor_repositories.buscarPorId(autor)
          
          if (!verificarId) {
               throw new AppError("Nenhuma autor com esse id encontrado",400);
               
          }

          const result = await this.autor_repositories.atualizar(autor)

          return result
     }
     async alterarAtivo(autor){
          if (!autor.id) {
               throw new AppError("Insira o id da autor",400);
               
          }
          
          const verificarId = await this.autor_repositories.buscarPorId(autor)
          
          if (!verificarId) {
               throw new AppError("Nenhuma autor com esse id encontrado",400);
               
          }

          const result = await this.autor_repositories.alterarAtivo(autor)

          return result
     }
}

export default AutorServices