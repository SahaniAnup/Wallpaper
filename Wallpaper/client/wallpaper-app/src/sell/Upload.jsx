import React from 'react'

export const Upload = () => {


   
      const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const title = form.elements.title.value;
        const img = form.elements.img.value;

        const wallpaperObj ={
            title,
            img,
            
        }
        fetch("http://localhost:5000/add-wallpaper",
    {
        method:"POST",
        headers:
        {
            'Content-Type': 'application/json'

        },
        body:JSON.stringify(wallpaperObj)

    }).then((data)=>
{
    alert("Wallpaper Uploaded Successfully")
    form.reset()
})


 };

  return (
    <>
       <div className="my-12 px-4">
      <h2 className="mb-8 text-3xl font-bold">Upload A Book</h2>
      <form className='p-4'onSubmit={handleSubmit}>
  
       

 <div className="form-group mb-3">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            className='form-control'
            id='title'
            name='title' 
            placeholder='Book Title'
            required
          />
        </div> 

        <div className="form-group mb-3">
          <label htmlFor="img">Wallpaper Image URL</label>
          <input
            type="text"
            className='form-control'
            id='img'
            name='img' 
            placeholder='Book Image'
            required
          />
          </div>
  
              
          <button type='submit' className='btn btn-danger'>Upload wallpaper</button>
      </form>
    </div>
    </>
  )
}
export default Upload
