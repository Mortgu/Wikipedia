import './dropdown.button.scss';

import React, { useEffect, useState } from 'react';
import useClickHook from '.././../hooks/useClickHook';
import Button from '../button/button';

// variant = {'default', 'ghost'}
// size = {'big', 'normal', 'small'}

const DropdownButton = ({ position='right', children }) => {
    const [visible, setVisible] = useState(false);
    const { useOutsideClick } = useClickHook();

    const hideDropdown = () => {
        setVisible(false);
    }

    const ref = useOutsideClick(hideDropdown);

    const childrenWithProps = React.Children.map(children, child => {
        // Checking isValidElement is the safe way and avoids a
        // typescript error too.
        if (React.isValidElement(child)) {
            return React.cloneElement(child, { setVisible, visible });
        }
        return child;
    });


    return (
        <div ref={ref} className='dropdown-button' data-pos={position}>
            {childrenWithProps}
        </div>
    );
}

const DropdownButtonTrigger = ({ variant = 'default', size = 'normal', setVisible, visible, children }) => {
    return (
        <Button variant={variant} size={size} className='button dropdown-trigger' onClick={() => setVisible(true)} visiblity={visible} >
            {children}
        </Button>
    );
}
DropdownButton.Trigger = DropdownButtonTrigger;

DropdownButton['Content'] = ({ setVisible, visible, children }) => {
    const childrenWithProps = React.Children.map(children, child => {
        if (React.isValidElement(child)) {
            return React.cloneElement(child, { setVisible, visible });
        }

        return child;
    });

    return (
        <div className='dropdown'>{childrenWithProps}</div>
    );
}

export default DropdownButton;
