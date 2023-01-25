module.exports = (sequelize, DataTypes) => {
    let alias = "mensajes"
    let cols = {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        nombre: {
            type: DataTypes.STRING
        },
        apellido: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.TEXT,
            allowNull: false,
            unique: true
        },
        mensajes: {
            type: DataTypes.TEXT,
            allowNull: false,
        }
    }
    let config = {
        tableName: "mensajes",
        timestamps: false,
        deleteAt: false
    }

 const mensajes = sequelize.define(alias, cols, config)
    return mensajes
}