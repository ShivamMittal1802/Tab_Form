import React from 'react'

const Settings = ({data, setData}) => {
    const {theme} = data;

    const handleOnChange = (e)=> {
        setData(prev => {
            return {...prev, theme: e.target.name}
        })
    }

  return (
    <div style={{display: 'flex', flexDirection: 'column' }}>
      <label>
        <input type='radio' name='dark' checked={(theme === 'dark') ? true : false} onChange={(e)=> handleOnChange(e)} />
        Dark Theme
      </label>
      <label>
        <input type='radio' name='light' checked={(theme === 'light' )? true : false} onChange={(e)=> handleOnChange(e)} />
        Light Theme
      </label>
    </div>
  )
}

export default Settings;
