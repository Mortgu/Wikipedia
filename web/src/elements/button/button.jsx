import { NavLink } from 'react-router-dom';
import './button.scss';

import * as React from "react";

// variant = {'default', 'ghost'}
// size = {'big', 'normal', 'small'}



const Button = ({ variant = 'default', size = 'normal', className, children, visiblity = 'false', ...props }) => {
    return (
        <NavLink data-variant={variant} data-size={size} className={'button ' + className} data-visibility={visiblity} {...props}>
            {children}
        </NavLink>
    );
}

export default Button;

Button['NavButton'] = ({ size = 'normal', className='navigation-item', children, to = '#', ...props }) => {
    return (
        <Button to={to} variant='nav' size={size} {...props}>
            {children}
        </Button>
    )
}

Button["Ghost"] = ({ size = 'normal', className, children, visiblity = 'false', ...props }) => {
    return (
        <Button variant='ghost' size={size} className={'button ' + className} visibility={visiblity} {...props}>
            {children}
        </Button>
    );
}

Button['Icon'] = ({ size = 'normal', className, children, visiblity = 'false', ...props }) => {
    return (
        <Button variant='icon' size={size} className={'button ' + className} visibility={visiblity} {...props}>{children}</Button>
    )
}

Button['IconGhost'] = ({ size = 'normal', className, children, visiblity = 'false', ...props }) => {
    return (
        <Button variant='icon-ghost' size={size} className={'button ' + className} visibility={visiblity} {...props}>{children}</Button>
    )
}

Button['IconText'] = ({ size = 'normal', className, children, visiblity = 'false', ...props }) => {
    return (
        <Button variant='icon-text' size={size} className={'button ' + className} visibility={visiblity} {...props}>{children}</Button>
    )
}

Button['IconGhostText'] = ({ size = 'normal', className, children, visiblity = 'false', ...props }) => {
    return (
        <Button variant='icon-ghost-text' size={size} className={'button ' + className} visibility={visiblity} {...props}>{children}</Button>
    )
}