import { Check, Trash2 } from "lucide-react";

export default function TaskCard({ task, onDelete, onToggle }) {
  const isCompleted = task.status === "completed";

  return (
    <div
      className={`relative border p-4 rounded-md shadow-md
        transition transform hover:scale-[1.02]
        ${isCompleted ? "border-green-400 bg-green-50" : "border-yellow-400 bg-yellow-50"}`}
    >
      {/* Title */}
      <h3
        className={`text-base font-semibold mb-4
          ${isCompleted ? "line-through text-gray-500" : "text-gray-900"}`}
      >
        {task.title}
      </h3>

      {/* Actions */}
      <div className="flex justify-between items-center">
        {/* Checkbox with label */}
        <label className="flex items-center gap-2 cursor-pointer select-none">
          <input
            type="checkbox"
            checked={isCompleted}
            onChange={() => onToggle(task._id)}
            className="hidden"
          />
          <div
            className={`w-6 h-6 flex items-center justify-center border-2 rounded-sm
              ${isCompleted ? "bg-green-500 border-green-500" : "bg-white border-gray-400"}`}
          >
            {isCompleted && <Check className="text-white w-4 h-4" />}
          </div>
          <span className={`${isCompleted ? "text-gray-500 line-through" : "text-gray-800"}`}>
            Mark as Done
          </span>
        </label>

        {/* Delete */}
        <button
          onClick={() => onDelete(task._id)}
          className="text-gray-400 hover:text-red-500"
        >
          <Trash2 size={18} />
        </button>
      </div>
    </div>
  );
}
