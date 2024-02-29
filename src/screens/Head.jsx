import React, { useState } from 'react'
import timetable from  "./расписание.json"
import { useNavigate } from 'react-router-dom'

const Head = () => {
    const [groups,setGroups] = useState(timetable)
    const [selectGroup, setSelectGroup] = useState(null)
    const navigate = useNavigate()

    const handleclick = () => {
        navigate(`/days?group=${selectGroup}`)
    }
  return (
    <>
        <div className="panel">

            <select className='select'  onChange={(e) => setSelectGroup(e.target.value)}>
                <option value="none">Выберите группу</option>
                {
                    groups.map((idx, el) => (
                        <option key={idx.Name} value={el}>{idx.Name}</option>
                    ))
                }
            </select>
            <button onClick={handleclick}>Перейти</button>
            </div>
    </>
  )
}

export default Head