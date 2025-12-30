import Navbar from "../components/Navbar";
import { useAuth } from "../hooks/useAuth";

export default function Profile() {
  const { user } = useAuth();

  return (
    <>
      <Navbar />
      <div className="max-w-3xl mx-auto p-6">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Profile</h2>

        <div className="bg-white shadow-lg rounded-xl p-6 space-y-4">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-blue-500 text-white rounded-full flex items-center justify-center text-xl font-bold">
              {user?.name?.charAt(0).toUpperCase()}
            </div>
            <div>
              <p className="text-lg font-semibold text-gray-900">{user?.name}</p>
              <p className="text-gray-500">{user?.email}</p>
            </div>
          </div>

          <div className="mt-4">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Account Details</h3>
            <ul className="space-y-2 text-gray-600">
              <li><span className="font-medium">Name:</span> {user?.name}</li>
              <li><span className="font-medium">Email:</span> {user?.email}</li>
            </ul>
          </div>

          <button className="mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg shadow-md transition transform hover:-translate-y-0.5">
            Edit Profile
          </button>
        </div>
      </div>
    </>
  );
}
