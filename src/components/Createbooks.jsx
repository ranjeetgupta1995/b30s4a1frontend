import React, {useState} from 'react';

export const Createbooks = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);

  const handelAddBook = () => {
    const payload = {
      title,
      description,
      price
    }
    fetch("https://encouraging-tuna-earrings.cyclic.app/books/add", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("token")}`    
        },
      body: JSON.stringify(payload)
    })
    .then(res => res.json())
    .then(res => console.log(res))
    .catch(err => console.log(err))
  }


  return (
    <div>
        <input type='text' placeholder='Enter Title' value={title} onChange={(e) => setTitle(e.target.value)} />
        <br />
        <input type='text' placeholder='Enter Description' value={description} onChange={(e) => setDescription(e.target.value)} />
        <br />
        <input type='text' placeholder='Enter Price' value={price} onChange={(e) => setPrice(e.target.value)} />
        <br />
        <button onClick={handelAddBook}>Register</button>
    </div>
  )
}
