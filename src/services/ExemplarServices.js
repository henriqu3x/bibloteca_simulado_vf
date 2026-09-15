import ExemplarRepositories from '../repositories/ExemplarRepositories.js'
import AppError from '../errors/AppError.js'

class ExemplarServices {
     constructor() {
          this.exemplar_repositories = new ExemplarRepositories()
     }

     async visualizar(){
          const result = await this.exemplar_repositories.visualizar()

          return result
     }
     async buscarPorId(exemplar) {
          const result = await this.exemplar_repositories.buscarPorId(exemplar)

          if (!result) {
               throw new AppError("Nenhuma exemplar com esse id encontrado",400);
               
          }

          return result
     }
     async adicionar(exemplar) {
          if (!exemplar.cod_identificacao) {
               throw new AppError("Insira a identificação do exemplar",400);
               
          }
          if (!exemplar.livro_id) {
               throw new AppError("Insira o livro do exemplar",400);
               
          }
          if (!exemplar.data_aquisicao) {
               throw new AppError("Insira a data de aquisição do exemplar",400);
               
          }
          if (!exemplar.estado_conservacao) {
               throw new AppError("Insira o estado de conservação do exemplar",400);
               
          }
          if (!exemplar.status) {
               throw new AppError("Insira o status do exemplar",400);
               
          }
          
          const verificarIdentificacao = await this.exemplar_repositories.buscarPorIdentificacao(exemplar)
          
          if (verificarIdentificacao) {
               throw new AppError("Já existe uma exemplar com essa identificação",400);
               
          }

          const result = await this.exemplar_repositories.adicionar(exemplar)

          return result

     }
     async atualizar(exemplar){
          if (!exemplar.id) {
               throw new AppError("Insira o id do exemplar",400);
               
          }
          
          const verificarId = await this.exemplar_repositories.buscarPorId(exemplar)
          
          if (!verificarId) {
               throw new AppError("Nenhuma exemplar com esse id encontrado",400);
               
          }
          
          const verificarIdentificacao = await this.exemplar_repositories.buscarPorIdentificacao(exemplar)
          
          if (verificarIdentificacao && verificarIdentificacao.id != exemplar.id) {
               throw new AppError("Já existe uma exemplar com essa identificação",400);
               
          }

          const result = await this.exemplar_repositories.atualizar(exemplar)

          return result
     }
     async alterarAtivo(exemplar){
          if (!exemplar.id) {
               throw new AppError("Insira o id do exemplar",400);
               
          }
          
          const verificarId = await this.exemplar_repositories.buscarPorId(exemplar)
          
          if (!verificarId) {
               throw new AppError("Nenhuma exemplar com esse id encontrado",400);
               
          }

          const result = await this.exemplar_repositories.alterarAtivo(exemplar)

          return result
     }
}

export default ExemplarServices