const mongoose= require('mongoose');


const dbConnexion = () => {
mongoose.connect(process.env.DB_URI)
.then((conn) => { console.log(`DB connected : ${conn.connection.host}`)})
};

module.exports = dbConnexion;