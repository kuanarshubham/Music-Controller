import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './components/Card';

const App = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/home');
        console.log(response.data);
        setData(response.data);
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, [100]); 

  return (
    <div>
      {error && <div>Error: {error.message}</div>}
      {data && data.map(item => {
        return(
          <Card host = {item.host} code = {item.code} />
        )
      })}
    </div>
  );
};

export default App;

