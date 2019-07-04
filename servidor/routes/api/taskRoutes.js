const Task = require("../../models/task");
const API_PATH = "/api";

module.exports = app => {
  // Create Task

  app.post(`${API_PATH}/createTask`, async (req, res) => {
    const { task_name, done, id_users } = req.body;

    try {
      const newTask = await Task.create(
        {
          task_name: task_name,
          done: done,
          userId: id_users
        },
        {
          fields: ["task_name", "done", "userId"]
        }
      );

      return res.json({
        message: "Operacion exitosa",
        data: { newTask }
      });
    } catch (err) {
      console.log("dasd", err);
    }
  });

  // Get Task

  app.get(`${API_PATH}/getTask/:id`, async (req, res) => {
    const taskResult = await Task.findAll({
      where: {
        userId: req.params.id
      }
    });

    return res.json({
      message: "Operacion exitosa",
      data: { taskResult }
    });
  });

  // Edit Task

  app.put(`${API_PATH}/taskEdit/:id`, async (req, res) => {
    const { task_name, done, id_users } = req.body;
    const taskUpdated = await Task.update(
      {
        task_name: task_name,
        done: done,
        userId: id_users
      },
      {
        where: {
          id: req.params.id
        }
      }
    );

    console.log("asdasd", task_name, done, id_users);
  });

  app.put(`${API_PATH}/taskDone`, async (req, res) => {
    console.log("TaskDone");
  });

  app.delete(`${API_PATH}/deleteTask/:id`, async (req, res) => {
    Task.destroy({
      where: {
        id: req.params.id
      }
    });

    return res.json({
      message: "Operacion exitosa"
    });
  });
};

//   app.get(`${API_PATH}/films/:id`, async (req, res) => {
//     const id = req.params.id;
//     const film = await getFilterByID(id);
//     res.json(film);
//   });

//   app.get(`${API_PATH}/films/:id`, async (req, res) => {
//     const id = req.params.id;
//     const film = await getFilterByID(id);
//     res.json(film);
//   });

//   app.delete(`${API_PATH}/filmss/:id`, async (req, res) => {
//     const id = req.params.id;
//     if (id) {
//       const resp = await DeleteByID(id);
//       return res.json(resp);
//     }
//     res.status(400).send({ reason: "No id send." });
//   });
// };
