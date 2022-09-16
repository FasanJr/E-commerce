import classNames from 'classnames/bind';
import styles from './AuthForm.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faGoogle } from '@fortawesome/free-brands-svg-icons'

const cx = classNames.bind(styles);
function AuthFrom({ type, onSubmit }) {
    return (
        <form action="" id={cx(`${type}-form`)} onSubmit={onSubmit}>
            <h2 className={cx('title')}>{type === 'signup' ? 'Sign up' : 'Log in'}</h2>
            <div className={cx('input-group')}>
                <label>Username</label>
                <input type="text" placeholder="Enter your username" />
            </div>
            {type === 'signup' ? (
                <div className={cx('input-group')}>
                    <label>Email</label>
                    <input type="email" placeholder="Enter your email" />
                </div>
            ) : <></>}
            <div className={cx('input-group')}>
                <label>Password</label>
                <input type="password" placeholder="Enter your password" />
            </div>
            {type === 'signup' ? (
                <div className={cx('input-group')}>
                    <label>Confirm Password</label>
                    <input type="password" placeholder="Confirm your password" />
                </div>
            ) : <></>}
            <div id="button" className={cx('input-group')}>
                <button type="submit" className={type === 'signup' ? cx('btn', 'btn-success') : cx('btn', 'btn-primary')}>{type === 'signup' ? 'Sign up' : 'Log in'}</button>
            </div>
            {type === 'login' ? (
                <div id={cx('alternativeLogin')}>
                    <label>Or sign in with:</label>
                    <div className={cx('icon-group')}>
                        <a href="/" className="icon-link"><FontAwesomeIcon id={cx('facebook')} icon={faFacebook} /></a>
                        <a href="/" className="icon-link"><FontAwesomeIcon id={cx('twitter')} icon={faTwitter} /></a>
                        <a href="/" className="icon-link"><FontAwesomeIcon id={cx('google')} icon={faGoogle} /></a>
                    </div>
                </div>
            ) : <></>}
        </form>
    );
}

export default AuthFrom;