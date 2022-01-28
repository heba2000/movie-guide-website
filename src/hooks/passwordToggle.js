import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React , { useState } from 'react';

const UsePasswordToggle = () => {
    const [visible , setVisibility] = useState(false);
    const EyeIcon = (
    <FontAwesomeIcon icon = { visible ? "eye-slash" : "eye" } 
    onClick = {() => setVisibility (visibility => !visibility)}
    />
    );   
    const passInputType = visible ? 'text' : 'password';
    return [passInputType , EyeIcon]
}

export default UsePasswordToggle;
