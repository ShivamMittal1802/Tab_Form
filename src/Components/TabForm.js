import React, { useState } from 'react'
import Profile from './Profile'
import Interests from './Interests'
import Settings from './Setting'
import { checkEmail } from '../utils/customFunction'

const TabForm = () => {

    const json = {
        name: 'shivam mittal',
        age: 18,
        gender: "Male",
        email: "shivammittal1802@gmail.com",
        interests: ['sports', 'coding', 'music'],
        theme: 'dark'
    }
    const [errMsg, setErrMsg] = useState({});
    const [currentInd, setCurrentInd] = useState(0);
    const [data, setData] = useState(json)


    const TabsComponent = [
        {
            name: 'Profile',
            component : <Profile data={data}  setData={setData}error= {errMsg}/>,
            validate: ()=>{
                const err={};
                if(!data.name || data.name.length <=2){
                    err.name = "Name must be greater than 2 char";
                }
                if(!data.age || data.age <=18){
                    err.age = "age must be greatet than 18";
                }
                if(!data.gender){
                    err.gender = "please select gender";
                }
                if(!data.email || !checkEmail(data.email)){
                    err.email = "Email is not correct";
                }
                setErrMsg(err);
                // console.log("err", err);
                return (err.name || err.email || err.age || err.gender) ? false : true;
            }
        },
        {
            name: 'Interests',
            component: <Interests data={data}  setData={setData} error= {errMsg}/>,
            validate : ()=>{
                const err={};
                if(data.interests.length < 1){
                    err.interests = "please select atleast one interests"
                }
                setErrMsg(err);
                console.log("err", err);
                return err.interests ? false : true;
            }
        },
        {
            name: 'Settings',
            component: <Settings data={data}  setData={setData} error= {errMsg}/>,
            validate: ()=>{
                return true;
            }
        }
    ]

    const CurrentTab = TabsComponent[currentInd].component;
    const handleOnClick = (ind) => {
        console.log(TabsComponent[currentInd].validate());
        if(!TabsComponent[currentInd].validate()){
            return;
        }
        setCurrentInd(ind);

    }


  return (
    <div>
        <div className='header-container'>
            {
                TabsComponent.map((tab, ind)=>{
                    return <div onClick={()=> handleOnClick(ind)} className='tab-header'> {tab.name}  </div>
                })
            }
        </div>
        <div className='main-container'>
            {CurrentTab}
        </div>
    </div>  
  )
}

export default TabForm;
