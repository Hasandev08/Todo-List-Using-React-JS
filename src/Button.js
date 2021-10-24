import React from 'react';

function Button(props) {

    return (
        <div className="todo_list">
            <button onClick={() => {
                props.onSelect(props.id)
            }}>x</button>
            <li>{props.list}</li>
        </div>
    )
}

export default Button;
