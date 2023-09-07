
const sendErrrorForDev = (err, res) =>res.status(err.statusCode).json({
        status: err.status,
        error: err,
        message: err.message, 
        stack: err.stack,
    })

const sendErrrorForProd = (err, res) =>res.status(err.statusCode).json({
        status: err.status,
        message: err.message, 
    })

const globalError = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.status = err.status || 'error';
   if(process.env.NODE_ENV === "development"){
    sendErrrorForDev (err,res)
   }
   else{
    sendErrrorForProd (err, res)
   }
}

module.exports = globalError;