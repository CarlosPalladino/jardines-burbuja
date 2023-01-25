
module.exports = {
  async up (queryInterface, DataTypes)  {
 try {
   await queryInterface.createTable('hijos', {
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
    turno:{
      type: DataTypes.TEXT,
      allowNull: false,


    }

  })
}
 catch(e){
  console.log(e)
 }
},
  async down (queryInterface, Sequelize) {
  
     await queryInterface.dropTable('hijos');
  }
};
