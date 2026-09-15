import EmprestimoRepositories from '../repositories/EmprestimoRepositories.js'
import AppError from '../errors/AppError.js'

class EmprestimoServices {
     constructor() {
          this.emprestimo_repositories = new EmprestimoRepositories()
     }

     async visualizar(){
          const result = await this.emprestimo_repositories.visualizar()

          return result
     }
     async buscarPorId(emprestimo) {
          const result = await this.emprestimo_repositories.buscarPorId(emprestimo)

          if (!result) {
               throw new AppError("Nenhuma emprestimo com esse id encontrado",400);
               
          }

          return result
     }
     async adicionar(emprestimo) {
          if (!emprestimo.usuario_id) {
               throw new AppError("Insira o usuario do emprestimo",400);
               
          }
          if (!emprestimo.funcionario_id) {
               throw new AppError("Insira o funcionario responsavel pelo emprestimo",400);
               
          }
          if (!emprestimo.exemplar_id) {
               throw new AppError("Insira o exemplar do emprestimo",400);
               
          }

          const result = await this.emprestimo_repositories.adicionar(emprestimo)

          return result

     }
}

export default EmprestimoServices