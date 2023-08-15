import React, {useState} from 'react';
import TabButton from '../TabButton';

    const Tabs = ({ onTabChanged }) => {
        const [selectedTab, setSelectedTab] = useState("");
      
        const selectHandler = (value) => {
          setSelectedTab(value);
      
          onTabChanged(value);
        }
    return (
        <div className='flex center fullwidth landingTabs'>
            <TabButton
                name = {"Course Analysis"}
                selected = {selectedTab === "Course Analysis"}
                value="Course Analysis"
                onSelected={(value) => selectHandler(value)}
            />
            <TabButton
                name = {"Stream"}
                selected = {selectedTab === "Stream"}
                value="Stream"
                onSelected={(value) => selectHandler(value)}
            />
            <TabButton
                name = {"Teacher Communication"}
                selected = {selectedTab === "Teacher Communication"}
                value="Teacher Communication"
                onSelected={(value) => selectHandler(value)}
            />
        </div>
    );
}

export default Tabs;
