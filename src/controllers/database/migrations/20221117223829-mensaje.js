module.exports = {
  async up (queryInterface, DataTypes)  {
try {
  await queryInterface.createTable('mensajes', { 
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    nombre: {
      type: DataTypes.STRING,
    },
    apellido: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING ,
        allowNull: false,
        unique: true
    },
    mensajes: {
        type: DataTypes.TEXT,
        allowNull: false,
    }
    });
     
} catch (error) {
  console.log(error)
}    
  },
  async down (queryInterface, Sequelize) {

   await queryInterface.dropTable('mensajes');
  }
};
