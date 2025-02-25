import React, { useEffect, useState } from 'react'

export const Delete = () => {

const [wallpapers, setWallpaper] = useState([]);
useEffect(()=>{
    fetch("http://localhost:5000/all-wallpapers")
    .then((res)=>res.json())
    .then((data)=>{
        setWallpaper(data)
    });

},[]);

const deleteWallpaper = (id)=>{
    fetch(`http://localhost:5000/wallpaper-delete/${id}`,
{method:"DELETE"})
.then((res)=>res.json())
.then((data)=>
{
    setWallpaper(wallpapers.filter(wallpapers => wallpapers._id !==id))
})
}
  return (
    <>
     <div>
      <h2 className="mb-8 font-bold">Manage Your Wallpaper</h2>
      <table className="table tavle-striped">
        <thead>
          <tr>
            <th>No.</th>
            <th>Title</th>
            <th>Image</th>
            <th>Manage</th>
          </tr>
        </thead>
        <tbody>
          {wallpapers.map((wallpapers, index) => (
            <tr key={wallpapers._id}>
              <td>{index + 1}</td>
              <td>{wallpapers.title}</td>
              <td>{wallpapers.rating}</td>
              <td>
                <button className="btn btn-danger"
                onClick={()=>deleteWallpaper(wallpapers._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    
    </>
  )
}
