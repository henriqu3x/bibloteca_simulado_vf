import CategoriaServices from '../services/CategoriaServices.js'

class CategoriaControllers {
     constructor() {
          this.categoria_services = new CategoriaServices()
     }
     visualizar = async (req,res) => {
         const result = await this.categoria_services.visualizar()
         
         res.status(200).json(result)
     }
     buscarPorId = async (req,res) => {
          const id = req.params.id

          const categoria = {
               id
          }

          const result = await this.categoria_services.buscarPorId(categoria)
         
         res.status(200).json(result)
     }
     adicionar = async (req,res) => {
          const {nome,descricao} = req.body

          const categoria = {
               nome,
               descricao
          }

          const result = await this.categoria_services.adicionar(categoria)

          res.status(200).json({
               "message": "categoria adicionado com sucesso",
               result
          })
     }
     atualizar = async (req,res) => {
          const id = req.params.id
          const {nome,descricao} = req.body

          const categoria = {
               id,
               nome,
               descricao
          }

          const result = await this.categoria_services.atualizar(categoria)

          res.status(200).json({
               "message": "categoria atualizado com sucesso",
               result
          })
     }
     alterarAtivo = async (req,res) => {
          const id = req.params.id

          const categoria = {
               id
          }

          const result = await this.categoria_services.alterarAtivo(categoria)

          res.status(200).json({
               "message": "Status da categoria alterado com sucesso",
               result
          })
     }
}

export default CategoriaControllers