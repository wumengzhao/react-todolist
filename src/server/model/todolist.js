app => {
  const { STRING, INTEGER } = app.Sequelize;

  const SurveyListCreater = app.model.define('todoList', {
    id: {
      type: INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    taskname: STRING(255),
    isDone: STRING(255),
    checked: STRING(255),
  }, {
    freezeTableName: true,
    timestamps: false,
  });

  return SurveyListCreater;
};
