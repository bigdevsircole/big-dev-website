// import { useState, useEffect } from "react";
// import '../styles/Githubuser.css';

// const gitUrl = "https://api.github.com/users";

// const Githubuser = () => {
//   const [count, setCount] = useState(0);
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(gitUrl);
//         if (!response.ok) {
//           throw new Error("Network response was not ok");
//         }
//         const data = await response.json();
//         setUsers(data);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, [count]);

//   // const handleIncrease = () => {
//   //   setCount(count + 1);
//   // };

//   // const handleDelete = (id) => {
//   //   setUsers(users.filter(user => user.id !== id));
//   // };

//   // const handleClear = () => {
//   //   setUsers([]);
//   // };

//   // const handleReload = () => {
//   //   setCount(count + 1);
//   // };

//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };

//   return (
//     <div>
//       <section className="github fade-in">
//         {/* <h2>Hi, Gitty!</h2> */}
//         {/* <p>{count}</p> */}
//         {/* <button className="button" onClick={handleIncrease}>Increase</button> */}

//         {users.map((user) => {
//           const { id, login, avatar_url, html_url } = user;
//           return (
//             <div key={id} className="user-card">
//               <img src={avatar_url} alt={login} className="avatar" />
//               <h1>{login}</h1>
//               <a rel='noopener noreferrer' href={html_url} className="profileLink">take me to {login} page</a>
//               {/* <button className="button delete-button" onClick={() => handleDelete(id)}>Delete</button> */}
//               <li>{user.login}</li>
//             </div>
//           );
//         })}
//         <button className="return-to-top" onClick={scrollToTop}>Return to Top</button>
//         {/* <button className="button" onClick={handleClear}>Clear</button> */}
//         {/* <button className="button" onClick={handleReload}>Reload</button> */}
//       </section>
//     </div>
//   );
// };

// export default Githubuser;