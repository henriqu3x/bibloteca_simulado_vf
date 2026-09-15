import jwt from 'jsonwebtoken'
import 'dotenv/config'

const AuthMiddlewares = (req,res,next) => {
     try {
          const authHeaders = req.headers.authorization

          if (!authHeaders) {
               return res.status(401).json({
                    "error": "Voce precisa fazer login primeiro"
               })
          }

          const token = authHeaders.split(' ')[1]

          const decode = jwt.verify(token, process.env.JWT_SECRET)

          req.user = decode

          next()
     } catch (error) {
          return res.status(400).json({
               "error": error.message
          })
     }
}

export default AuthMiddlewares