import React, { useState } from 'react'

const Profile = ({data, setData, error}) => {
    const {name, age, gender, email} = data;

    const handleOnChange = (e, value)=>{
        setData(prev=>{
            return {
                ...prev, [value] : e.target.value
            }
        })
    }

  return (
    <div>
      {name && <div>
            Name: <input type='text' placeholder='Full Name' value={name} onChange={(e)=>{handleOnChange(e, 'name')}} ></input>
       </div>} 
       {error.name && <div style={{color: 'red'}}> {error.name} </div>}
      {age && <div>
            Age: <input type='number' placeholder='Age' value={age} onChange={(e)=>{handleOnChange(e, 'age')}} ></input>
       </div>} 
       {error.age && <div style={{color: 'red'}}> {error.age} </div>  }
      {gender && <div>
            Gender: <input type='text' placeholder='Gender' value={gender} onChange={(e)=>{handleOnChange(e, 'gender')}} ></input>
       </div>} 
       {error.gender && <div style={{color: 'red'}}>{error.gender}</div>}
      {email && <div>
            Email: <input type='email' placeholder='Email' value={email} onChange={(e)=>{handleOnChange(e, 'email')}} ></input>
       </div>} 
       {error.email &&  <div style={{color: 'red'}}> {error.email} </div> }
    </div>
  )
}

export default Profile
