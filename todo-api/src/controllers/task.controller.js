const Task = require("../model/task.model");

//LISTAR
async function getAllTasks(req, res) {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: "Error ao procurar tarefa" });
  }
}

//CRIAR
async function createTask(req, res) {
  try {
    const { title, description } = req.body;
    const newTask = await Task.create({
      title,
      description,
      done: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    res.status(201).json(newTask);
  } catch (error) {
    res.status(500).json({ message: "Erro ao criar tarefa" });
  }
}

//BUSCAR ID
async function getTaskByID(req, res) {
  try {
    const { id } = req.params;
    const task = await Task.findById(id);

    if (!task) {
      return res.status(404).json({ message: "Tarefa Não Encontrada" });
    }

    res.json(task);
  } catch (error) {
    res.status(500).json({ message: "Erro ao buscar tarefa por ID" });
  }
}

//ATUALIZAR
async function updateTask(req, res) {
  try {
    const { id } = req.params;
    const { title, description, done } = req.body;

    const task = await Task.findById(id);

    if (!task) {
      return res.status(404).json({ message: "Tarefa não encontrada!" });
    }

    task.title = title ?? task.title;
    task.description = description ?? task.description;
    task.done = done ?? task.done;
    task.updatedAt = new Date();

    await task.save();

    res.send(task)
  } catch (error) {
    res.status(500).json({ message: "Erro ao atualizar tarefa" });
  }
}

//DELETAR
async function deleteTask(req, res) {
  try {
    const { id } = req.params;
    const task = await Task.findByIdAndDelete(id);

    if (!task) {
      return res.status(404).json({ message: "Tarefa não encontrada!" });
    }

    res.status(204).json();
  } catch (error) {
    res.status(500).json({ message: "Erro ao deletar tarefa" });
  }
}

module.exports = {
  deleteTask,
  updateTask,
  getAllTasks,
  getTaskByID,
  createTask,
};
