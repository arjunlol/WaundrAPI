'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.changeColumn(
      'users',
      'currentLat',
      {
        type: Sequelize.FLOAT,
        defaultValue: 43.644625
      }
    ).then(function() {
        return queryInterface.changeColumn(
        'users',
        'currentLng',
        {
          type: Sequelize.FLOAT,
          defaultValue: -79.395197
        }
      ).then(function() {
          return queryInterface.changeColumn(
          'users',
          'points',
          {
            type: Sequelize.INTEGER,
            defaultValue: 0
          }
        )
      })
    })
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.dropTable('users');
  }
};
