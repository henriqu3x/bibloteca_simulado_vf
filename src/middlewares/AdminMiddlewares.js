const AdminMiddlewares = (req,res,next) => {
     try {
          const perfil = req.user.perfil

          if (perfil != 'admin') {
               return res.status(403).json({
                    "error": "Voce não possui autorização suficiente"
               })
          }

          next()
     } catch (error) {
          res.status(400).json({
               "error": error.message
          })
     }
}

export default AdminMiddlewares