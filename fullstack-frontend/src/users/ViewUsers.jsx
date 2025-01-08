import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export const ViewUsers = () => {
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
  });

  const { id } = useParams();

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8080/user/${id}`);
    setUser(result.data);
  };

  return (
    <div className="p-4 max-w-md mx-auto my-10 bg-slate-100 shadow-md rounded">
      <h2 className="text-center text-xl font-semibold mb-4">User Details</h2>

      <div className="bg-white rounded shadow">
        <div className="border-b px-4 py-2">
          <p className="font-medium">
            Details of user id : <span className="font-bold">{user.id}</span>
          </p>
        </div>
        <ul className="divide-y divide-gray-200">
          <li className="px-4 py-2">
            <b className="font-semibold">Name:</b> {user.name}
          </li>
          <li className="px-4 py-2">
            <b className="font-semibold">UserName:</b> {user.username}
          </li>
          <li className="px-4 py-2">
            <b className="font-semibold">Email:</b> {user.email}
          </li>
        </ul>
      </div>
      <Link
        className="inline-block mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        to={"/"}
      >
        Back to Home
      </Link>
    </div>
  );
};
