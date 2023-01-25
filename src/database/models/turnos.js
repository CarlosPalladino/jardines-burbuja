module.exports = (sequelize, DataTypes) => {
    let alias = "turnos"
    let cols = {
        id: {
            allowNull: false,
            type: DataTypes.TEXT,
            primaryKey: true
        },
        maniana: {
            allowNull: false,
            type: DataTypes.INTEGER,
        },
        tarde: {
            allowNull: false,
            type: DataTypes.INTEGER,
        }
    },
    config= {
        tableName:"turnos"
    }
    
    const turnos = sequelize.define(alias, cols, config)
    turnos.associate = function (models) {
        turnos.belongsTo(models.hijos,{
            as:"turnos",
            foreignKey: "maniana",
            otherKey: "tarde"
        }
        )}
        return turnos
        
    }