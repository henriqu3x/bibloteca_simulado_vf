import LivroServices from '../services/LivroServices.js'

class LivroControllers {
     constructor() {
          this.livro_services = new LivroServices()
     }
     visualizar = async (req,res) => {
         const result = await this.livro_services.visualizar()
         
         res.status(200).json(result)
     }
     buscarPorId = async (req,res) => {
          const id = req.params.id

          const livro = {
               id
          }

          const result = await this.livro_services.buscarPorId(livro)
         
         res.status(200).json(result)
     }
     adicionar = async (req,res) => {
          const {isbn,titulo,ano_publicacao,edicao,editora,categoria_id,descricao,autor_id} = req.body

          const livro = {
               isbn,
               titulo,
               ano_publicacao: parseInt(ano_publicacao),
               edicao,
               editora,
               categoria_id,
               descricao,
               autor_id
          }

          const result = await this.livro_services.adicionar(livro)

          res.status(200).json({
               "message": "livro adicionado com sucesso",
               result
          })
     }
     atualizar = async (req,res) => {
          const id = req.params.id
          const {isbn,titulo,ano_publicacao,edicao,editora,categoria_id,descricao,autor_id} = req.body

          const livro = {
               id,
               isbn,
               titulo,
               ano_publicacao: parseInt(ano_publicacao),
               edicao,
               editora,
               categoria_id,
               descricao,
               autor_id
          }

          const result = await this.livro_services.atualizar(livro)

          res.status(200).json({
               "message": "livro atualizado com sucesso",
               result
          })
     }
     alterarAtivo = async (req,res) => {
          const id = req.params.id

          const livro = {
               id
          }

          const result = await this.livro_services.alterarAtivo(livro)

          res.status(200).json({
               "message": "Status da livro alterado com sucesso",
               result
          })
     }
}

export default LivroControllers