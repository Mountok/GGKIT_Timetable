import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import timetable from "./расписание.json";

const Views = () => {
  const location = useLocation();

  const [group, setGroup] = useState(timetable[location.pathname.split("/")[2]]);
  const [lessons, setLessons] = useState(location.search.split("=")[1]);
  const [dataKey, setKey] = useState(setKeysData);
  const [lessonsKey, setLessonsKeys] = useState(setLessKeys(dataKey));


  function setKeysData() {
    var array = [];
    for (let k in group.Timetable) {
      array.push(k);
    }
    return array;
  }
  function setLessKeys(dataKey) {
    var array = [];
    for (let k in group.Timetable[dataKey[lessons]]) {
      array.push(k);
    }

    return array;
  }

  return (
    <div>
      Views
      <table>
        <thead>
          <tr>
            <th>Пара</th>
            <th>Предмет</th>
            <th>Преподователь</th>
        </tr>  
        </thead>
        <tbody>
        {
            lessonsKey.map((el,idx) => (
                <tr key={idx}>
                    <td>{idx+1}</td>
                    <td>{el}</td>
                    <td>{group.Timetable[dataKey[lessons]][lessonsKey[idx]]}</td>
                </tr>
            ))
            // console.log()
        }
        </tbody>
        
        
      </table>
    </div>
  );
};

export default Views;
