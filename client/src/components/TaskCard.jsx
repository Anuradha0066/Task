export default function TaskCard({ task, onDelete }) {
  return (
    <div className="border p-4 rounded shadow-sm flex justify-between">
      <div>
        <h3 className="font-semibold">{task.title}</h3>
        <p className="text-sm text-gray-600">{task.status}</p>
      </div>
      <button
        onClick={() => onDelete(task._id)}
        className="text-red-500"
      >
        Delete
      </button>
    </div>
  );
}
