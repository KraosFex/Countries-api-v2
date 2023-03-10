//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
require('dotenv').config()
const { PORT } = process.env
const server = require('./app')
//const { conn } = require('./src/database/db.js')

// Syncing all the models at once.
// conn
//   .sync({ force: false })
//   .then(() => {
server.listen(
  PORT, // <-- Remember  that this is the port
  () => {
    // coneccion con la base de datos
    console.log(`Conexion establecidad y habilitada en el puerto: ${PORT}`) // eslint-disable-line no-console
  }
)
//   })
//   .catch((error) => console.error('Unable to connect to the database:', error))
