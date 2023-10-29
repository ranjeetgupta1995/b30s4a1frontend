import React, { useState } from 'react'

export const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [age, setAge] = useState(0);

  const handelRegister = () => {
    const payload = {
      username,
      email,
      pass,
      age
    }
    fetch("https://encouraging-tuna-earrings.cyclic.app/users/register", {
      method: "POST",
      headers: {"Content-type": "application/json"},
      body: JSON.stringify(payload)
    })
    .then(res => res.json())
    .then(res => console.log(res))
    .catch(err => console.log(err))
  }

  return (
    <div>
        <input type='text' placeholder='Enter Username' value={username} onChange={(e) => setUsername(e.target.value)} />
        <br />
        <input type='text' placeholder='Enter Email' value={email} onChange={(e) => setEmail(e.target.value)} />
        <br />
        <input type='text' placeholder='Enter Password' value={pass} onChange={(e) => setPass(e.target.value)} />
        <br />
        <input type='text' placeholder='Enter age' value={age} onChange={(e) => setAge(e.target.value)} />
        <br />
        <button onClick={handelRegister}>Register</button>
    </div>
  )
}
