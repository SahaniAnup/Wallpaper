import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

export default function Wallpapers({ headline }) {
  const [wallpapers, setWallpaper] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/all-wallpapers")
      .then((response) => response.json())
      .then((data) => {
        setWallpaper(data);
        console.log(data);
      });
  }, []);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  }

  const filterwallpaper = wallpapers.filter(wallpapers => wallpapers.title.toLowerCase().includes(search.toLowerCase())) ;

  return (
    <>
      <h1 style={{ padding: "10px", marginLeft:"40px" }}>Popular Wallpapers</h1>
      <h2 style={{marginLeft:"1210px"}}>Find Your Wallpaper Here</h2>
      <div className="search-container">
        <input className='form-control search-input' placeholder="Search by title" type="text" onChange={handleSearch}></input>
        <button className="search-button"><i className="fa-solid fa-magnifying-glass"></i></button>
      </div>
      <div className="container mt-5">
        <h1 align="center">{headline}</h1>
        <div className="row">
          {filterwallpaper.map((wallpapers, index) => (
            <div className="col-md-4" key={index}>
              <div className="card card-hover" style={{ width: "100%" }}>
                <img src={wallpapers.img} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{wallpapers.title}</h5>

                  <div className="btn-container d-flex justify-content-between">
                    
                    <Link to={`/singlepaper/${wallpapers._id}`} className="btn btn-success">Preview</Link>
                  </div>
                 
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
