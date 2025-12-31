import { useEffect, useState } from "react";
import api from "../api/axios";
import Navbar from "../components/Navbar";
import TaskCard from "../components/TaskCard";
import SearchBar from "../components/SearchBar";

export default function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [search, setSearch] = useState("");
  const [title, setTitle] = useState("");

  const fetchTasks = async () => {
    const res = await api.get("/tasks");
    setTasks(res.data);
  };

  const addTask = async () => {
    if (!title) return;
    await api.post("/tasks", { title });
    setTitle("");
    fetchTasks();
  };

  const deleteTask = async (id) => {
    await api.delete(`/tasks/${id}`);
    fetchTasks();
  };

  const toggleTask = async (id) => {
    try {
      const res = await api.patch(`/tasks/${id}`, { 
      status: 'toggle'  // ← NOW SENT TO BACKEND
    });
    
      // Update task in state immediately
      setTasks((prev) =>
        prev.map((task) =>
          task._id === id ? { ...task, status: res.data.status } : task
        )
      );
    } catch (err) {
      console.error(err);
      alert("Failed to update task");
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const filteredTasks = tasks.filter((t) =>
    t.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Navbar />
      <div className="max-w-5xl mx-auto p-6 space-y-6">
        {/* Search bar */}
        <SearchBar
          value={search}
          onChange={setSearch}
          className="shadow-lg rounded-lg"
        />

        {/* Add task */}
        <div className="flex gap-3 items-center bg-white p-4 rounded-xl shadow-md">
          <input
            className="border border-gray-300 p-3 flex-1 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            placeholder="Add a new task..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <button
            onClick={addTask}
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md transition transform hover:-translate-y-1"
          >
            Add Task
          </button>
        </div>

        {/* Tasks List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredTasks.map((task) => (
            <TaskCard
              key={task._id}
              task={task}
              onDelete={deleteTask}
              onToggle={toggleTask}
              className="bg-white rounded-xl p-4 shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1"
            />
          ))}
        </div>
      </div>
    </>
  );
}
