import React from 'react'

const Interests = ({data, setData, error}) => {
    const {interests} = data;


    const handleOnChange = (e)=> {
        
        setData(prev=>{
                if(e.target.checked){
                    return {...prev, interests: [...prev.interests, e.target.name]}
                }            
                else{
                    const newArr = data.interests.filter((item)=> item !==e.target.name);
                    return {...prev, interests: newArr}
                }
        })
    }


  return (
    <div>
        <label>
            <input type='checkbox' name="music" checked={interests.includes('music')} onChange={(e)=> handleOnChange(e)} />
             Music
        </label>
        <label>
            <input type='checkbox' name="coding" checked={interests.includes('coding')} onChange={(e)=> handleOnChange(e)}  />
             Coding
        </label>
        <label>
            <input type='checkbox' name="sports" checked={interests.includes('sports')} onChange={(e)=> handleOnChange(e)}  />
             Sports
        </label>
        {error.interests && <div style={{color: 'red'}}> {error.interests} </div>}

    </div>
  )
}

export default Interests
