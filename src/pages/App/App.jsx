import Toolbar from '../../components/Layout/Toolbar/Toolbar';
import Sidebar from '../../components/Layout/Sidebar/Sidebar';
import styles from './App.module.css'
import React, { useState, useEffect } from 'react';
import { fetchData, FIELDS, updateEntry } from '../../quintadb';
const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Оборачиваем асинхронный вызов в IIFE (Immediately Invoked Function Expression)
    (async () => {
      const response = await fetchData();
      console.log(response)
      if (response) {
        setData(response);
      }
    })();
  }, []); 
  return (
    <div className="App">
      <h1>Данные из QuintaDB</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Text</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.values[FIELDS.title]}</td>
              <td>{item.values[FIELDS.text]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
// function App() {
//     return (
//       <div className={styles.app}>
//         <Toolbar />
//         <Sidebar />
//       </div>
//     );
//   }
  
//   export default App;
  