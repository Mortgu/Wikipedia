import { NavLink } from 'react-router-dom';
import './table.component.scss';
import React from 'react';

const TableComponent = ({ name, children }) => (
    <div className="table">
        <p className='table-title'>{name}</p>
        {children}
    </div>
);

const TableItem = ({ name, to, children }) => {
    if (React.Children.count(children) <= 0) {
        return (
            <NavLink to={to} className='table-item'>
                <div className='item-front'>
                    <p className='item-title'>{name}</p>
                </div>
            </NavLink>
        )
    }

    return (
        <div className='table-item'>
            <div className='item-front'>
                <p className='item-title'>{name}</p>
                <span class="material-symbols-outlined">expand_more</span>
            </div>
            <div className="table-items">
                {children}
            </div>
        </div>
    )
}

TableComponent.Item = TableItem;

export default TableComponent;