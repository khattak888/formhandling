import React, { useState } from "react";
import bootstrap from "bootstrap";

const Form = () => {
 const [userRegistration , setUserRegistration] =  useState({
        username:"",
        email :"",
        phone:"",
        password:""

    })
    const [records , setRecords] = useState([])
    const handleInput = (e) =>{
        const name = e.target.name
        const value = e.target.value
        console.log(name , value)

        setUserRegistration({...userRegistration , [name]:value})

    }
    const handleSubmit  = (e) =>{
        e.preventDefault();
        const newRecord = {...userRegistration , id:new Date().getTime().toString()}
        console.log(records)
        setRecords([...records , newRecord])
        // console.log(records)
        setUserRegistration({ username:"", email:"", phone:"", password:""})
    }
  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <h1>
          <b>Form Handling</b>
        </h1>
        <div>
          <label htmlFor="username">Fullname:-</label>
          <input type="text" autoComplete="off" value={userRegistration.username} onChange={handleInput} name="username" id="username" />
          <br />
          <br />
        </div>
        <div>
          <label htmlFor="email">Email:-</label>
          <input type="email" autoComplete="off" value={userRegistration.email} onChange={handleInput} name="email" id="email" />
          <br />
          <br />
        </div>
        <div>
          <label htmlFor="phone">Phone:-</label>
          <input type="text" autoComplete="off" value={userRegistration.phone} onChange={handleInput} name="phone" id="phone" />
          <br />
          <br />
        </div>
        <div>
          <label htmlFor="password">Password:-</label>
          <input
            type="password"
            autoComplete="off"
            value= {userRegistration.password}
            onChange= {handleInput}
            name="password"
            id="password"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Registration
        </button>
      </form>
      <div>
          {
              records.map((curEle)=>{
                  return(
                      <div key={curEle.id}>
                          <p>{curEle.username}</p>
                          <p>{curEle.email}</p>
                          <p>{curEle.phone}</p>
                          <p>{curEle.password}</p>
                      </div>
                  )
              })
          }
      </div>
    </>
  );
};

export default Form;
