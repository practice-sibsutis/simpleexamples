import React from 'react';
import cl from './ListBoxItem.module.css'

const ListBoxItem = ({isSelected, onClickHandler, children}) => {
    const isSelectedClass = isSelected ? cl.listBoxItemActive : cl.listBoxItem;
    return (
        <div className={isSelectedClass}
             onClick={onClickHandler}>
            {children}
        </div>
    );
};

export default ListBoxItem;