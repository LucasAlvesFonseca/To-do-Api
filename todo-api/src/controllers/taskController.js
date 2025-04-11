let tasks = [];

//LISTAR
function getAllTasks(req, res) {
  res.json(tasks);
}

//CRIAR
function createTask(req, res) {
    const { title, description } = req.body;
    const newTask = {
      id: tasks.length + 1,
      title,
      description,
      done: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    tasks.push(newTask);
    res.status(201).json(newTask);
  }

//BUSCAR ID
function getTaskByID(req, res) {
  const { id } = req.params;
  const task = tasks.find((t) => t.id == parseInt(id));
  if (!task) return res.status(404).json({ message: "Tarefa não encontrada!" });
  res.json(task);
}

//ATUALIZAR
function updateTask(req, res) {
    const { id } = req.params;
    const { title, description, done } = req.body;
  
    const index = tasks.findIndex((t) => t.id === parseInt(id));
    if (index === -1) {
      return res.status(404).json({ message: "Tarefa não encontrada" });
    }
  
    const task = tasks[index];
  
    task.title = title ?? task.title;
    task.description = description ?? task.description;
    task.done = done ?? task.done;
    task.updatedAt = new Date();
  
    res.json(task);
  }
  

//DELETAR
function deleteTask(req, res) {
    const { id } = req.params;
    const index = tasks.findIndex((t) => t.id === parseInt(id));
  
    if (index === -1) {
      return res.status(404).json({ message: "Esta Tarefa Não Existe" });
    }
  
    tasks.splice(index, 1);
    res.status(204).send(); // 204 = No Content
  }
  

module.exports = {
  deleteTask,
  updateTask,
  getAllTasks,
  getTaskByID,
  createTask,
};
