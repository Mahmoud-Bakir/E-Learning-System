import React from 'react';
import './styles.css'

const TabButton = ({name, value, selected, onSelected}) => {
    const clickHandler = () => {
        onSelected(value);
    }

    return (
        <div 
        className='flex column roundedMedium pointer tabButton'
        onClick={() => clickHandler()}
        >
            <p>{name}</p>
            {selected && <div className="selectedMark"></div>}
        </div>
    );
}

export default TabButton;
