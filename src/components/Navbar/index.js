import s from './style.module.css';
import cn from 'classnames';
import {ReactComponent as LoginSVG} from "../../assets/login.svg";

const Navbar = ({onClickHaburger, bClass, bgActive = false, onClickLogin}) => {
    const handlerClick = () => {
        onClickHaburger();
    }
    return (
        <nav id={s.navbar} className={cn({[s.bgActive]: bgActive})}>
        <div className={s.navWrapper}>
			<p className={s.brand}>
			LOGO
			</p>
			<div className={s.loginAndMenu}>
				<div 
					className={s.loginWrap}
					onClick={onClickLogin}
				>
					<LoginSVG />
				</div>
				<div className={cn(s.menuButton, {[s.active]: bClass})} onClick={handlerClick}>
					<span />
				</div>
			</div>
        </div>
      </nav>
    );
};

export default Navbar;