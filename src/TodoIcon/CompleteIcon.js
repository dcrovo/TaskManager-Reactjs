import React from "react";
import {TodoIcon} from './index';
function CompleteIcon({completed, onCompleted}) {
    return (   
        <TodoIcon
            type="check"
            color={completed ? "#3fad3bdc" : "gray" }
            onClick={onCompleted}
        />
    );
}

export {CompleteIcon};