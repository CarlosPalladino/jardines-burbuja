module.exports = {
  async up(queryInterface, DataTypes) {
    try {
      await queryInterface.createTable('turnos', {
        id: {
          allowNull: false,
          type: DataTypes.TEXT,
          primareKey: true
        },
        maniana: {
          allowNull: true,
          type: DataTypes.TEXT
        },
        tarde: {
          allowNull: true,
          type: DataTypes.TEXT,
        }
      });
    }
    catch (e) {
      console.log(e);
    }
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('turnos');
  }
};
