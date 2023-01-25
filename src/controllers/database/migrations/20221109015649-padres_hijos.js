module.exports = {
  async up(queryInterface, DataTypes) {
    try {
      await queryInterface.createTable('padresHijos', {
        id: {
          allowNull: false,
          type: DataTypes.TEXT,
          primareKey: true
        },
        padreId: {
          allowNull: false,
          type: DataTypes.TEXT,
        },
        hijoId: {
          allowNull: false,
          type: DataTypes.TEXT,
        }
      })}
   catch (err) {
        console.log(err)
      }
    },

  async down(queryInterface, Sequelize) {

        await queryInterface.dropTable('padresHijos');
    }
  };
