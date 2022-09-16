import { useState } from 'react'
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import styles from './Header.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faKey, faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import 'tippy.js/dist/tippy.css';

import Menu from '../../../components/Popper/Menu';

import Modal from 'react-modal'
import AuthForm from '../../../components/AuthForm'

const cx = classNames.bind(styles);

function Header() {
    const isLoggedIn = true;

    //custom modal
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            maxWidth: '500px',
            minWidth: '300px',
            maxHeight: '700px',
            width: '30%',
            backgroundColor: '#FFFFFF',
            borderRadius: '25px',
        },
    };

    const [modalIsOpen, setIsOpen] = useState(false);
    const [typeForm, setTypeForm] = useState('');

    function openModal(type) {
        setIsOpen(true);
        setTypeForm(type);
    }

    function closeModal() {
        setIsOpen(false);
    }

    //User menu
    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View Profile',
            to: '/profile',
        },
        {
            icon: <FontAwesomeIcon icon={faKey} />,
            title: 'Change Password',
            to: '/changePassword',
        },
        {
            icon: <FontAwesomeIcon icon={faRightFromBracket} />,
            title: 'Log out',
            // logout: handleLogout,
        },
    ];


    return (
        <nav className={cx('navbar', 'fixed-top', 'navbar-expand-lg', 'navbar-light', 'white', 'scrolling-navbar')} >
            <div className={cx('container', 'd-flex', 'align-items-center', 'justify-content-between')}>
                {/* Brand */}
                <Link
                    className={cx('navbar-brand', 'waves-effect')}
                    to="/"
                >
                    <strong className='blue-text'>eFishShop</strong>
                </Link>

                <div className={cx('auth-action', 'd-flex', 'align-items-center')}>
                    {
                        !isLoggedIn ? (
                            <>
                                <button className={cx('btn btn-primary')} onClick={() => openModal('login')}>Log in</button>
                                <button className={cx('btn btn-success')} onClick={() => openModal('signup')}>Sign up</button>
                            </>
                        ) : (
                            <>
                                <span style={{ fontWeight: '500' }}>username</span>
                                <FontAwesomeIcon icon={faUser} className={cx('user-icon')} />
                            </>
                        )
                    }
                </div>
                <Modal
                    height={typeForm === 'signup' ? '80%' : '60%'}
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    style={customStyles}
                    ariaHideApp={false}
                >
                    {typeForm === 'signup' ? <AuthForm type='signup' /> : <AuthForm type='login' />}
                </Modal>
            </div>
        </nav>
    );
}

export default Header;