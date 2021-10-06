const Sequelize = require('sequelize');
require('dotenv').config();
let sequelize;
// if (process.env.DATABASE_URL) {
//     // the application is executed on Heroku ... use the postgres database
// } else {
//     // the application is executed on the local machine
//     sequelize = new Sequelize("postgres:///my_db");
// }


if (process.env.DATABASE_URL) {
    sequelize = new Sequelize(process.env.DATABASE_URL, {
        dialect: 'postgres',
        protocol: 'postgres',
        logging: true //false
    });
} else {
    sequelize = new Sequelize(
        process.env.DB_NAME,
        process.env.DB_USER,
        process.env.DB_PASSWORD,
        {
            host: 'localhost',
            dialect: 'mysql',
            port: 3306
        }
    );
}

module.exports = sequelize;
