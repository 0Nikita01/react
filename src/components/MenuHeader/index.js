import { useState } from 'react';
import { NotificationManager } from 'react-notifications';

import Menu from '../Menu';
import Navbar from '../Navbar';
import Modal from '../Modal';
import LoginForm from '../LoginForm';

const loginSignupUser = async ({email, password, type}) => {
    const requestOptions = {
        method: 'POST',
        body: JSON.stringify({
            email,
            password,
            returnSecureToken: true,
        })
    }

    switch (type) {
        case 'signup':
            return await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDg4tP9wqUTV4mQoFde2nkS6g3uzFk28PY', requestOptions).then(res => res.json());
        case 'login':
            return await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDg4tP9wqUTV4mQoFde2nkS6g3uzFk28PY', requestOptions).then(res => res.json());
        default:
            return 'I cannot login user';
    }
}

const MenuHeader = ({bgActive}) => {
    const [bClass, setbClass] = useState(null);
    const [isOpenModal, setOpenModal] = useState(false);

    const handlerClickHamb = () => {
        setbClass(prevState => !prevState);
    }

    const handleClickLogin = () => {
        setOpenModal(prevState => !prevState);
    }

    const handleSubmitLoginForm = async (props) => {
       
        const responce = await loginSignupUser(props);
        console.log(responce);
        if (responce.hasOwnProperty('error')) {
            NotificationManager.error(responce.error.message, "Wrong!");
        }
        else {
            localStorage.setItem('idToken', responce.idToken);
            NotificationManager.success("Successful");
            handleClickLogin();
        }
    }

    return (
        <>
           <Menu bClass={bClass} onClickLinks={handlerClickHamb}/>
           <Navbar 
                onClickHaburger={handlerClickHamb} 
                bClass={bClass} 
                bgActive={bgActive}
                onClickLogin={handleClickLogin}
            />
            <Modal 
                isOpen={isOpenModal}
                title="Log in..." 
                onCloseModal={handleClickLogin}
            >
                <LoginForm 
                    isResetField={!isOpenModal}
                    onSubmit={handleSubmitLoginForm}
                />
            </Modal>
        </>
    );
};

export default MenuHeader;