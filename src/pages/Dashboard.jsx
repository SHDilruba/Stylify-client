import React, { useEffect, useState } from 'react';
import useAuth from '../hooks/useAuth';

const Dashboard = () => {
    const { user } = useAuth();
const [userInfo, setUserInfo] = useState();

useEffect(()=>{
fetch(`http://localhost:5000/user/${user?.email}`)
.then(res=>res.json())
.then(data=>setUserInfo(data))  
}, [user]);
console.log(userInfo);

 return (
  <div className=''>
      <h1>{userInfo?.name}</h1>
      <h1>{userInfo?.email}</h1>
  </div>
 );
};

export default Dashboard;