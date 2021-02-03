import { Model, DataTypes } from 'sequelize';
import { database } from "../database";

export class User extends Model {
    public id!: number;
    public name!: string;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

export interface UserInterface {
    id: Number
    name: String
    username: String
    email: String
    createdAt: Date
    updatedAt: Date
}

User.init(
    {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: new DataTypes.STRING(128),
        allowNull: false,
      },
      username: {
        type: new DataTypes.STRING(128),
        allowNull: false,
      },
      email: {
        type: new DataTypes.STRING(128),
        allowNull: false,
      },
      createdAt: {
        type: new DataTypes.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: new DataTypes.DATE,
        allowNull: false,
      },
    },
    {
      tableName: "users",
      sequelize: database, // this bit is important
    }
  );