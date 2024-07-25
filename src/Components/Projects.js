import React, { useEffect, useState } from 'react';
import Header from './Header';
import '../Css/projects.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import img from '../Assets/suri.png'; 
function Projects() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className='home'>
      <Header />
      <div class="card" style={{width:"18rem"}}>
  <img src={img} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="">Card title</h5>
    <p class="">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
    </div>
  );
}

export default Projects;
