import React, { useState, useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
  const data = useLoaderData();
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   fetch(`https://api.github.com/users/xylemic`)
  //   .then((res) => res.json())
  //   .then(data => {
  //     console.log(data);
  //     setData(data);
  //   })
  // }, [])
  return (
    <div className='text-left m-4 bg-gray-600 text-white p-4 text-3xl rounded-md flex flex-col items-center'>
      <img src={data.avatar_url} alt="avatar" className='w-32 h-32 rounded-lg' />
      <h2>Github followers: {data.followers}</h2>
      <h2>Repos: {data.public_repos}</h2>
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
  const response = await fetch(`https://api.github.com/users/xylemic`);
   return response.json();
}
