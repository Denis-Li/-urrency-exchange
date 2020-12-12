import React, { useState } from 'react';
import './Points.css';
import {useDispatch} from 'react-redux';
import { addPoints } from '../../action';

const Points = () => {
  const dispatch = useDispatch();

  const formHandler = (e) => {
    e.preventDefault();
    console.log(e.target.elements);
    let data = e.target.elements;
    dispatch(addPoints(data.id.value, data.title.value, data.image.value));
  }

  const [t1, setT1] = useState('');

  function clickHandler() {
    fetch("http://test1.pl", {
      method: 'POST',
      header: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: JSON.stringify({action : 1})
    })
    .then (response => response.text())
    .then (response => {
      console.log(response);
      setT1(response);
    })
  }

  return(
      <div className="points-root">
          <form onSubmit={formHandler}>
            <div>
              <input type="text" name="id" defaultValue="28ss7s" />
            </div>
            <div>
              <input type="text" name="title" defaultValue="Капсула для монет Leuchtturm QUADRUM 23мм" />
            </div>
            <div>
              <input type="text" name="image" defaultValue="https://cdn.monetnik.ru/storage/market-lot/24/57/72424/200227_mainViewLot.jpg" />
            </div>
            <div>
              <button className="points-btn" type="submit">Add new coin</button>
            </div>
          </form>
          <button onClick = {clickHandler}>Go</button>
          <div>{t1}</div>
      </div>
  )
}

export default Points;
