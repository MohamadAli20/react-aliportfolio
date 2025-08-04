import React from 'react';
import Button from 'react-bootstrap/Button';

const CustomButton = ({children, className}) => {
    return(
        <Button className={className}>{children}</Button>
    )
}

export default CustomButton;