import DevolucaoRepositories from '../repositories/DevolucaoRepositories.js'
import AppError from '../errors/AppError.js'

class DevolucaoServices {
     constructor() {
          this.devolucao_repositories = new DevolucaoRepositories()
     }

     async visualizar(){
          const result = await this.devolucao_repositories.visualizar()

          return result
     }
     async buscarPorId(devolucao) {
          const result = await this.devolucao_repositories.buscarPorId(devolucao)

          if (!result) {
               throw new AppError("Nenhuma devolucao com esse id encontrado",400);
               
          }

          return result
     }
     async adicionar(devolucao) {
          if (!devolucao.emprestimo_id) {
               throw new AppError("Insira o emprestimo da devolucao",400);
               
          }
          if (!devolucao.funcionario_id) {
               throw new AppError("Insira o funcionario responsavel pela devolucao",400);
               
          }
          if (!devolucao.situacao) {
               throw new AppError("Insira a situação da devolucao",400);
               
          }

          const result = await this.devolucao_repositories.adicionar(devolucao)

          return result

     }
}

export default DevolucaoServices