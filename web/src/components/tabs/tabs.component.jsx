import { NavLink, useParams } from 'react-router-dom';
import './tabs.component.scss';

const TabsComponent = ({ children }) => {

    return (
        <div className="tabs">
            <div className='tabs-items'>
                {children}
            </div>
        </div>
    );
}

export const TabsItem = ({ to, className, children }) => {
    return (
        <NavLink to={to} className={'tabs-item ' + className} end>{children}</NavLink>
    );
}

TabsComponent.Item = TabsItem;

export default TabsComponent;