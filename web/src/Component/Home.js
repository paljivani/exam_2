import React, { useEffect, useState } from 'react';

import './Apps.css';


const Home = () => {
  let [data, setdata] = useState([]);
  let pro = JSON.parse(localStorage.getItem('data')) || [];
  useEffect(() => {
    get();
  }, []);
  let get = async () => {
    let req = await fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants?limit=1000&page=1`);
    let res = await req.json();
    setdata(res.data)};
    return (
      <div>
              <div className="container ">
                <div className="product">
                  {data.map((v, i) => {
                    return (
                    
                        <div key={i}>
                          <div>
                            <div className='box'>
                              <h2>{v.name}</h2>
                                <img src={v.image}/>
                                <h5>{v.rating}⭐⭐⭐⭐⭐</h5>
                                <h5>{v.type}</h5>
                                <h4>{v.price_starts_from}</h4>
                            </div>
                          </div>
                        </div>
                      
                    );
                  })}
                </div>
              </div>
      </div>
    );
  }

export default Home;