// import React, { useState, useEffect } from "react";
// import { Row, Col } from "react-bootstrap";
// import { useParams } from "react-router-dom";
// import { useHistory } from "react-router-dom";

// const UserList = () => {
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   // const { username, password } = useParams(); // Receive the username and password as URL parameters

//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const response = await fetch("http://localhost:4000/getUsers");
//         if (!response.ok) {
//           throw new Error("Failed to fetch users");
//         }
//         const data = await response.json();
//         setUsers(data);
//         setLoading(false);
//       } catch (error) {
//         setError(error.message);
//         setLoading(false);
//       }
//     };

//     fetchUsers();
//   }, []);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   return (
//     <div>
//       <h2>User List</h2>
//       {users.map((user) => (
//         <Row key={user._id} className="mb-4">
//           <Col>
//             <strong>Username:</strong> {user.Username}
//           </Col>
//           <Col>
//             <strong>Email:</strong> {user.Email}
//           </Col>
//           <Col>
//             <strong>Mobile Number:</strong> {user.MobileNo}
//           </Col>
//         </Row>
//       ))}
//     </div>
//   );
// };

// export default UserList;

// !important
import React, { useState, useEffect } from "react";
import Table from 'react-bootstrap/Table';
// import { useParams, useHistory } from "react-router-dom";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("http://localhost:4000/getUsers");
        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }
        const data = await response.json();
        setUsers(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>User List</h2>
      <Table striped bordered>
        <thead>
          <tr>
            <th>Username</th>
            <th>Email</th>
            <th>Mobile Number</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td>{user.Username}</td>
              <td>{user.Email}</td>
              <td>{user.MobileNo}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default UserList;
