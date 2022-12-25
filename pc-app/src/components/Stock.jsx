import React, { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';

function Stock() {

const stock = "stock";
const [items, setItems] = useState([]);
const { id } = useParams();
// const { stock } = useContext(StockContext); // Idea: usar memo para guardar info en cache?
// const [data, setData] = useState(null);
// Nota: añadir paginación y usar objeto para parse de datos de bd
// const [page, setPage] = useState(1);
// const [hasMore, setHasMore] = useState(true);

    useEffect( () => {      
      
      async function fetchData(id) {
        if (id) {
          console.log("param:", id)
          const response = await fetch(`http://80.240.127.173:5000/get/${id}`)
          const data = await response.json();
          console.log("data:", data);
          setItems(prevItems => [...prevItems, ...data.data]);
        } else {
          const response = await fetch('http://80.240.127.173:5000/all')
          const data = await response.json();
          console.log("param:", id)
          console.log("data:", data);
          setItems(prevItems => [...prevItems, ...data.data]);
        } 
    }
    fetchData(id);
      }, []);

  return (
    <div className="stock">
      <h1 className="text-light text-center">Stock</h1>
      <div>
      {items ? (
        // <p className='text-light'>{data}</p>
        <table className='text-light table'>
          <thead>
            <tr>
              <th scope="col" className='th-bold'>Id</th>
              <th scope="col" className='th-bold'>Model</th>
              <th scope="col" className='th-bold'>Device</th>
              <th scope="col" className='th-bold'>Img</th>
              <th scope="col" className='th-bold'>Description</th>
              <th scope="col" className='th-bold'>Category</th>
              <th scope="col" className='th-bold'>Subcategory</th>
              <th scope="col" className='th-bold'>Brand</th>
              <th scope="col" className='th-bold'>Stock</th>
              <th scope="col" className='th-bold'>Status</th>
              <th scope="col" className='th-bold'>Ranking</th>
              <th scope="col" className='th-bold'>Created at</th>
            </tr>
            </thead>
          <tbody>
          { id ? items.length > 0 ?
          items.slice(0, 1).map(item => (
            <tr key={item[0]}>
              <td className='td-light'>{item[0]}</td>
              <td className='td-light'>{item[1]}</td>
              <td className='td-light'>{item[2]}</td>
              <td className='td-light'>{<img src={item[3]} width={150}/>}</td>
              <td className='td-light'>{item[4]}</td>
              <td className='td-light'>{item[5]}</td>
              <td className='td-light'>{item[6]}</td>
              <td className='td-light'>{item[7]}</td>
              <td className='td-light'>{item[8]}</td>
              <td className='td-light'>{item[9]}</td>
              <td className='td-light'>{item[10]}</td>
              <td className='td-light'>{item[11]}</td>
            </tr>
          )) :
          <tr><td colSpan='12' className='text-center'>{"No hay datos."}</td></tr>
          :
          items.slice(0, 20).map(item => (
            <tr key={item[0]}>
              <td className='td-light'>{item[0]}</td>
              <td className='td-light'>{item[1]}</td>
              <td className='td-light'>{item[2]}</td>
              <td className='td-light'>{<img src={item[3]} width={150}/>}</td>
              <td className='td-light'>{item[4]}</td>
              <td className='td-light'>{item[5]}</td>
              <td className='td-light'>{item[6]}</td>
              <td className='td-light'>{item[7]}</td>
              <td className='td-light'>{item[8]}</td>
              <td className='td-light'>{item[9]}</td>
              <td className='td-light'>{item[10]}</td>
              <td className='td-light'>{item[11]}</td>
            </tr>
          ))
          }
          </tbody>
        </table>
        
      ) : (
        <p>Loading data...</p>
      )}
    </div>
    </div>
  );
}

export default Stock;