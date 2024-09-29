import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Card = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/course-card/`)
      .then(response => {
        setData(response.data);
		console.log(response.data,'------');
        setLoading(false);
      })
      .catch(error => {
        console.error('There was an error fetching the data!', error);
        setError('Error fetching data');
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className='w-full md:w-[300px] border border-gray-300 rounded-[16px] mt-3'>
      <div className='w-full bg-[#F9F9F9] flex items-center justify-center rounded-[16px]'>
        <img className='w-[198px] h-[198px]' src={data[3].image} alt={data.title} />
      </div>
      <div className='px-8 py-3 w-full rounded-[16px] bg-white'>
        <h3 className='text-lg font-semibold'>{data[0].title}</h3>
        <p>{data[0].description}</p>
      </div>
    </div>
  );
};

export default Card;

