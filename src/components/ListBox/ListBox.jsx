import React from 'react';
import cl from './ListBox.module.css'
import ListBoxItem from "./ListBoxItem";

const ListBox = ({items, selectMode, render}) => {
    const [state, setState] = React.useState(items.map((item, index) => {
        return {
            id: index,
            isSelected: false
        }
    }));

    const [isCtrlDown, setIsCtrlDown] = React.useState(false);

    const onClickHandler = (id) => {
        setState(state.map((item, index) => {
            if(item.id === id) {
                item.isSelected = !item.isSelected;
            }
            else if(selectMode === "Single" || !isCtrlDown) {
                item.isSelected = false;
            }
            return item;
        }))
    }

    return (
        <div className={cl.listBox}
             onKeyUp={e => {
                 console.log(e.ctrlKey);
                 setIsCtrlDown(e.ctrlKey)
             }}
             onKeyDown={e => {
                 if(!isCtrlDown && e.ctrlKey) {
                     setIsCtrlDown(e.ctrlKey)
                 }}} tabIndex={0}>
            {items.map((item, index) => {
                return (
                    <ListBoxItem key={index}
                                 isSelected={state[index].isSelected}
                                 onClickHandler={() => onClickHandler(index)}>
                        {render(item, index)}
                    </ListBoxItem>
                )
            })}
        </div>
    );
};

export default ListBox;