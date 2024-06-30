import './navigation.component.scss';

import { useThemeContext } from '../../context/themes.context';
import Button from '../../elements/button/button';
import DropdownButton from '../../elements/dropdown_button/dropdown.button';
import InputComponent from '../../elements/input/input';
import { useGlobalModalContext } from '../modals/modal.component';

const NavigationComponent = () => {
    const { setTheme } = useThemeContext();
    const { showModal } = useGlobalModalContext();

    return (
        <nav className='navigation'>
            <div className='navigation-inner'>
                <div className='navigation-items'>
                    <Button.NavButton to='/'>Home</Button.NavButton>
                    <Button.NavButton to='/mangas'>Mangas</Button.NavButton>
                    <Button.NavButton to='/characters'>Characters</Button.NavButton>
                </div>
                <InputComponent.SearchInput className='navigation-search' type="text" placeholder="Search Dikipedia">
                    <p>test</p>
                </InputComponent.SearchInput>
                <div className='navigation-ctas'>
                    <DropdownButton>
                        <DropdownButton.Trigger variant='icon-ghost'>
                            <span className="material-symbols-outlined">palette</span>
                        </DropdownButton.Trigger>
                        <DropdownButton.Content>
                            <Button.IconGhostText onClick={() => setTheme('dark')}>
                                <span className="theme-circle dark"></span>
                                <p>Dark</p>
                            </Button.IconGhostText>
                            <Button.IconGhostText onClick={() => setTheme('light')}>
                                <span className="theme-circle light"></span>
                                <p>Light</p>
                            </Button.IconGhostText>
                            <Button.IconGhostText onClick={() => setTheme('paper')}>
                                <span className="theme-circle paper"></span>
                                <p>Paper</p>
                            </Button.IconGhostText>
                            <Button.IconGhostText onClick={() => setTheme('night')}>
                                <span className="theme-circle night"></span>
                                <p>Night</p>
                            </Button.IconGhostText>
                            <Button.IconGhostText onClick={() => setTheme('eclipse')}>
                                <span className="theme-circle eclipse"></span>
                                <p>eclipse</p>
                            </Button.IconGhostText>
                            <Button.IconGhostText onClick={() => setTheme('power')}>
                                <span className="theme-circle power"></span>
                                <p>power</p>
                            </Button.IconGhostText>
                            <Button.IconGhostText onClick={() => setTheme('future')}>
                                <span className="theme-circle future"></span>
                                <p>Future</p>
                            </Button.IconGhostText>
                            <Button.IconGhostText onClick={() => setTheme('retro')}>
                                <span className="theme-circle retro"></span>
                                <p>Retro</p>
                            </Button.IconGhostText>
                            <Button.IconGhostText onClick={() => setTheme('joy')}>
                                <span className="theme-circle joy"></span>
                                <p>Joy</p>
                            </Button.IconGhostText>
                        </DropdownButton.Content>
                    </DropdownButton>
                    <DropdownButton>
                        <DropdownButton.Trigger variant='icon-ghost'>
                            <span className="material-symbols-outlined">person</span>
                        </DropdownButton.Trigger>
                        <DropdownButton.Content>
                            <Button.IconGhostText onClick={() => { showModal('LoginModal') }}>
                                <span className="material-symbols-outlined">logout</span>
                                <p>Login</p>
                            </Button.IconGhostText>
                            <Button.IconGhostText>
                                <span className="material-symbols-outlined">person_add</span>
                                <p>Create account</p>
                            </Button.IconGhostText>
                            <Button.IconGhostText>
                                <span className="material-symbols-outlined">person_add</span>
                                <p>Save article</p>
                            </Button.IconGhostText>
                            <Button.IconGhostText>
                                <span className="material-symbols-outlined">person_add</span>
                                <p>Contributions</p>
                            </Button.IconGhostText>
                            <Button.IconGhostText>
                                <span className="material-symbols-outlined">person_add</span>
                                <p>Talks</p>
                            </Button.IconGhostText>
                        </DropdownButton.Content>
                    </DropdownButton>

                </div>
            </div>
        </nav>
    );
}

export default NavigationComponent;

/**
 * <Button.IconGhost size='normal'>
                        <span className="material-symbols-outlined">person</span>
                    </Button.IconGhost>
                    <Button.IconGhost size='normal'>
                        <span className="material-symbols-outlined">palette</span>
                    </Button.IconGhost>
 */