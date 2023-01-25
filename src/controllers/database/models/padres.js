module.exports = (sequelize, DataTypes) => {
    let alias = "padres"
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
        telefono: {
            type: DataTypes.NUMBER
        },
      

    }
    let config = {
        tableName: "padres",
        timestamps: false,
        deleteAt: false

    }

    const padres = sequelize.define(alias, cols, config)
    padres.associate = function (models) {
        padres.belongsToMany(models.hijos,{
          as: "hijos",
            foreignKey: "padreId",
            otherKey: "hijoId",
            timestamps: false,
            through:"padreshijos" 
        })
    }
    return padres

}
