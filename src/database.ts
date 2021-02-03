import * as Sequelize from 'sequelize'
import * as data from './config/config.json';

const db = data.development.database
const username = data.development.username
const password = data.development.password

export const database = new Sequelize.Sequelize(db, username, password, {
  dialect: "mysql",
  port: 3306,
  define: {
    timestamps: false
  }
});