import './modal.component.scss';

import React, { Children, createContext, useContext, useState } from "react";
import LoginModal from "./templates/login.modal";
import Button from '../../elements/button/button';

export const MODAL_TYPES = {
    LOGIN_MODAL: 'LoginModal'
}

const MODAL_COMPONENTS = {
    [MODAL_TYPES.LOGIN_MODAL]: LoginModal,
}

const initialState = {
    showModal: (modalType, modalProps) => { },
    hideModal: () => { },
    store: {},
}

const GlobalModalContext = createContext(initialState);
export const useGlobalModalContext = () => useContext(GlobalModalContext);

export const GlobalModal = ({ children }) => {
    const [store, setStore] = useState({
        current: 0
    });

    const { modalType, modalProps } = store || {};

    const showModal = (modalType, modalProps) => {
        setStore({ ...store, modalType, modalProps });
    }

    const nextPage = () => { }

    const prevPage = () => { }

    const closeModal = () => {
        setStore({ ...store, modalType: null, modalProps: {} });
    }

    const renderComponent = () => {
        const ModalComponent = MODAL_COMPONENTS[modalType];

        if (!modalType || !ModalComponent)
            return null;

        return (
            <div className="modal">
                <div className='modal-backdrop' onClick={closeModal}></div>
                <div className='modal-window'>
                    <div className='window-head'>
                        <h3 className='head-title'>Authentication</h3>
                        <Button.IconGhost onClick={closeModal}>
                            <span className="material-symbols-outlined">close</span>
                        </Button.IconGhost>
                    </div>
                    <div className='window-content'>
                        <ModalComponent store={store} />
                    </div>
                </div>
            </div>
        );
    }

    return (
        <GlobalModalContext.Provider value={{ showModal, closeModal, nextPage, prevPage, ...store }}>
            {renderComponent()}
            {children}
        </GlobalModalContext.Provider>
    );
}

const GlobalModal_Children = ({ children }) => {
    React.Children.map(children, child => {
        if (React.isValidElement-(child)) {
            console.log(child);
        }
    });

    return children;
};
GlobalModal.Children = GlobalModal_Children;


const GlobalModalPage = ({ children }) => (
    <>page - 1 {children}</>
)

GlobalModal.Page = GlobalModalPage;