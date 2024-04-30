import { NavLink } from "react-router-dom";

const RootRoute = ({ children }) => (
    <div style={{display: 'flex', alignItems: 'center', flexWrap: 'wrap', gridGap: '10px'}}>
        <NavLink to='/test'>test</NavLink>
    </div>
);

export default RootRoute;