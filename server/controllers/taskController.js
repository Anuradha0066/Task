import Task from "../models/Task.js";

export const getTasks = async (req, res) => {
  const tasks = await Task.find({ user: req.user.id });
  res.json(tasks);
};

export const createTask = async (req, res) => {
  const task = await Task.create({
    title: req.body.title,
    user: req.user.id,
  });
  res.status(201).json(task);
};

export const deleteTask = async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.json({ message: "Task removed" });
};

export const completeTask = async (req, res) => {
  const task = await Task.findOne({ _id: req.params.id, user: req.user.id });
  if (!task) return res.status(404).json({ message: "Task not found" });

  task.status = task.status === "pending" ? "completed" : "pending";
  await task.save();

  res.json(task); // Return updated task
};
