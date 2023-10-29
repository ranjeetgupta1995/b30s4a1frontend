import React, { useEffect } from 'react'

export const Books = () => {
    useEffect(() => {
        fetch("https://encouraging-tuna-earrings.cyclic.app/books", {
            headers: {"Authorization": `Bearer ${localStorage.getItem("token")}`}
        })
        .then(res => res.json())
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }, [])
  return (
    <div>
        <h1>You will get all the Books in the console!!</h1>
    </div>
  )
}
