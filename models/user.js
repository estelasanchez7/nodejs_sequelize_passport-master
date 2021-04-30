//MODELS
//https://sequelize.org/v4/manual/tutorial/models-definition.html

//VALIDATIONS
//https://sequelize.org/v4/manual/tutorial/models-definition.html

//RELATIONS
//https://sequelize.org/master/manual/assocs.html

module.exports = (sequelize, Sequelize) => {
    const user = sequelize.define("users", {
      firstname: {type: Sequelize.STRING},
      lastname: {type: Sequelize.STRING},
      username: {type: Sequelize.STRING},
      email: {type: Sequelize.STRING},
      password:{type: Sequelize.STRING},
      provider: {type: Sequelize.STRING},
      active: {type:Sequelize.BOOLEAN}
    },{ define: {timestamps: false }
    },{
      indexes: [
        {
          unique: true,
          fields: ['email']
        }
      ]
    })
    
    return user
}