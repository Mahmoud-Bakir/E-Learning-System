import React, {useEffect, useState} from 'react'
import './styles.css'
import DisplayList from '../../../Components/Parent/ParentComponents/DisplayList'
import DataCard from '../../../Components/Parent/ParentComponents/DataCard'
import TitleHeader from '../../../Components/Parent/ParentComponents/TitleHeader'

import axios from "axios";
import { sendRequest } from "../../../core/config/request";
import { requestMethods } from "../../../core/enums/requestMethods";


function Parent() {

  const [childrenData, setChildrenData] = useState([]);
  const [selectedChildId, setSelectedChildId] = useState(null);
  const [selectedChildClasses, setSelectedChildClasses] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await sendRequest({
          route: "/Parent/get_all_children_Data",
          method: requestMethods.GET,
        });

        console.log(response.data.children)
        setChildrenData(response.data.children)

      } catch (error) {
        console.log(error.response.status);

      }
    };

    fetchData();
  }, []);

  const handleSelectChild = (childId) => {
    setSelectedChildId(childId);

    const selectedChild = childrenData.find(child => child.id === childId);
    if (selectedChild) {
      
      setSelectedChildClasses(selectedChild.classes);
      console.log(selectedChildClasses.submitions)
                console.log(selectedChildClasses.assignmetns)
    } else {
      console.log("Selected Child not found.");
      setSelectedChildClasses([]);
    }
  };

  return (
    <div className='flex column center parent-container'>  
      <div className='flex'>
        <DisplayList children = {childrenData} onSelectChild={handleSelectChild}/>
        <div>
          <TitleHeader/>
          <DataCard childClasses={selectedChildClasses}/>
        </div>  
      </div>
    </div>
  )
}

export default Parent