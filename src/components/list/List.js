import React from 'react';
import './List.css';

const List = (data) => {
  console.log('=======================');
  console.log(data);
  console.log('=======================');
  return (
    <div>
      <ul>
        {data.points.map (item => <li key={item.id}>{item.id}<br/>{item.title}<img src={item.image} className="points-img" alt="" /><hr/></li>)}
      </ul>
    </div>
  )
}

export default List;
