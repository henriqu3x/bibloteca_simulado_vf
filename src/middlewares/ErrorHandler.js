import AppError from "../errors/AppError.js"

const ErrorHandler = (err,req,res,next) => {
     if (err instanceof AppError) {
          return res.status(err.statusCode).json({
               "error": err.message
          })
     }

     console.log(err)
     return res.status(500).json({
          "error": "Error interno no servidor"
     })
}

export default ErrorHandler