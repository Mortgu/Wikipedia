import React, { useEffect } from 'react';
import { GlobalModal } from "../modal.component";

const LoginModal = ({ store, children }) => {

    useEffect(() => {
        console.log(store.current);
    }, []);

    return (
        <GlobalModal.Children>
            <GlobalModal.Page>
                dwa
            </GlobalModal.Page>
            <GlobalModal.Page>
                test
            </GlobalModal.Page>
        </GlobalModal.Children>
    )
}

export default LoginModal;