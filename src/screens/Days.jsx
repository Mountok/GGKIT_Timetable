import React, { useEffect, useState } from 'react'
import timetable from  "./расписание.json"

import { useLocation, useNavigate } from 'react-router-dom'
const Days = () => {
    const location = useLocation()
    const [param, setParam] = useState(location.search.split("=")[1])
    const [days,setDays] = useState(timetable[param]);   
    const [keys,setKeys] = useState([])
    const [dataKey, setDataKey] = useState(null)
    const navigate = useNavigate()
    
    useEffect(()=>{
        setKeys(setKeyss())
    },[])

    function setKeyss() {
        var array = []
        for (let k in days.Timetable) {
            array.push(k)
        }
        return array
    }

    function handleClick() {
        navigate(`/views/${param}?days=${dataKey}`)
    }
    

  return (
    <>
        <div className="panel">

            <select className='select' onChange={(e) => setDataKey(e.target.value)} >
                <option value="none">Выберите дату</option>
                {
                    keys.map((el, idx) => (
                        <option key={idx} value={idx}>{el}</option>
                    ))
                }
            </select>
            <button onClick={handleClick} >Перейти</button>
            </div>
    </>
  )
}

export default Days