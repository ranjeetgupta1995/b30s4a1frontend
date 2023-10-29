import React, { useState } from 'react'

export const Login = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handelLogin = () => {
    const payload = {
      email,
      pass,
    }
    fetch("https://encouraging-tuna-earrings.cyclic.app/users/login", {
      method: "POST",
      headers: {"Content-type": "application/json"},
      body: JSON.stringify(payload)
    })
    .then(res => res.json())
    .then(res => {
        console.log(res)
        localStorage.setItem("token", res.Token)
    })
    .catch(err => console.log(err))
  }

  return (
    <div>
        <input type='text' placeholder='Enter Email' value={email} onChange={(e) => setEmail(e.target.value)} />
        <br />
        <input type='text' placeholder='Enter Password' value={pass} onChange={(e) => setPass(e.target.value)} />
        <br />
        <button onClick={handelLogin}>Login</button>
    </div>
  )
}
