const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const dbConnexion = require('./config/db_config');

const categoryRoute = require('./routes/category.routes');
const subCategoryRoute = require('./routes/subCategory.routes');
const brandRoute = require('./routes/brand.routes');
const productRoute = require('./routes/product.routes');

const ApiError = require('./utils/apiError');
const globalError = require('./middlewares/errorMiddleware');

dotenv.config({path: 'config.env'});

// DB connection
dbConnexion();

// express app
const app = express();

// Middlewares
app.use(express.json());


// eslint-disable-next-line eqeqeq
if (process.env.NODE_ENV == "development" ){
    app.use(morgan('dev'));
    console.log(`mode: ${process.env.NODE_ENV}`)
}
else{
    // app.use(morgan('prod'));
    console.log(`mode: ${process.env.NODE_ENV}`)
}
// Routes
app.use('/api/v1/categories', categoryRoute);
app.use('/api/v1/subCategories', subCategoryRoute);
app.use('/api/v1/brands', brandRoute);
app.use('/api/v1/products', productRoute);


app.all('*', (req, res, next) => {
    next(new ApiError(`can't find this route: ${req.originalUrl}`,400) )
})

// Global error handling middleware
app.use(globalError);



const {PORT} = process.env;
const server = app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`)}); 


// handle rejections outside express
process.on('unhandledRejection',(err)=>{
    console.log(`UnhandledRejection error : ${err.name} | ${err.message}`);
    server.close(() => {
        console.error(`shutting down......`);
        process.exit(1);
    });
})
