module.exports = {
  async up (queryInterface, DataTypes) {
    try { 
    await queryInterface.createTable('padres', { 
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
        type: DataTypes.BIGINT
      }

    })
  }
   catch(e){
    console.log(e)
   }
},
  async down (queryInterface, Sequelize) {
     await queryInterface.dropTable('padres');
  }
};
