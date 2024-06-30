import useClickHook from '../../hooks/useClickHook';
import Button from '../button/button';
import './input.scss';

import { useEffect, useState } from 'react';

const InputComponent = ({ children, className = '', type, placeholder, ...props }) => {
    return (
        <div className={"input " + className} data-variant="search" {...props}>
            <div className="input-field">
                <input type={type} placeholder={placeholder} />
                <span class="material-symbols-outlined">search</span>
            </div>
        </div>
    )
}

const SearchInput = ({ children, className = '', type, placeholder, ...props }) => {
    const [visibility, setVisibility] = useState(false);
    const { useOutsideClick } = useClickHook();

    const ref = useOutsideClick(() => {
        setVisibility(false);
    });

    return (
        <div ref={ref} className={"input " + className} data-variant="search" {...props}>
            <div className="input-field" onClick={() => setVisibility(true)}>
                <input id='input' type={type} placeholder={placeholder} />
                <div className='input search-ctas'>
                    <Button.IconGhost size='small'>
                        <span className="material-symbols-outlined">search</span>
                    </Button.IconGhost>
                    <hr />
                    <Button.Ghost size='small'>
                        <p>Advanced search</p>
                    </Button.Ghost>
                </div>
            </div>
            <div className='input-dropdown' data-visibility={visibility}>
                {children}
            </div>
        </div>
    );
}

InputComponent.SearchInput = SearchInput;

export default InputComponent;