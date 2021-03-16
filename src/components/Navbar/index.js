import s from './style.module.css';
import cn from 'classnames';
import {ReactComponent as LoginSVG} from "../../assets/login.svg";
import {ReactComponent as UserSVG} from "../../assets/user.svg";
import { useSelector } from 'react-redux';
import { selectLocalID, selectUserLoading } from '../../store/user';

const Navbar = ({onClickHaburger, bClass, bgActive = false, onClickLogin}) => {
	const isLoadingUser = useSelector(selectUserLoading);
	const localId = useSelector(selectLocalID);
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
				{
					(!isLoadingUser && !localId) && (
						<div 
							className={s.loginWrap}
							onClick={onClickLogin}
						>		
							<LoginSVG />
						</div>
				)}
				{
					(!isLoadingUser && localId) && (
						<div 
							className={s.loginWrap}
							onClick={onClickLogin}
						>
							<UserSVG />
						</div>
				)}
				<div className={cn(s.menuButton, {[s.active]: bClass})} onClick={handlerClick}>
					<span />
				</div>
			</div>
        </div>
      </nav>
    );
};

export default Navbar;