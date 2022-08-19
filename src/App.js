import "./App.css";
import React, { useState, useEffect } from "react";
import { get_User_Data } from "./api";

function App() {
  const [users, setUsers] = useState();

  useEffect(() => {
    const userData = get_User_Data();
    userData.then((data) => {
      setUsers(data);
    });
  }, []);

  return (
    <div className="App">
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th>S.No</th>
              <th>Name</th>
              <th>User Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>address</th>
              <th>Company</th>
            </tr>
          </thead>
          <tbody>
            {users &&
              users.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.username}</td>
                  <td>{user.phone}</td>
                  <td>{user.email}</td>
                  <td>
                    City: {user.address.city}
                    <br />
                    Street: {user.address.street}
                    <br />
                    Zipcode: {user.address.zipcode}
                  </td>
                  <td>
                    Name: {user.company.name}
                    <br />
                    Base: {user.company.bs}
                    <br />
                    CatchPhrase: {user.company.catchPhrase}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
