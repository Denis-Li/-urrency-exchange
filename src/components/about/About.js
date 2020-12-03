import React from 'react';
import './About.css';

const About = (data) => {
  console.log('=======================');
  console.log(data);
  console.log('=======================');
  return (
    <div>
      <ul>
        {data.points.map (item => <li key={item.id}>{item.title} <img src={item.image} className="points-img" alt="" /> </li>)}
      </ul>
    </div>
  )
}

export default About;
