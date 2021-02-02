import s from './style.module.css';
import cn from 'classnames';

const Navbar = ({onClickHaburger, bClass}) => {
    const handlerClick = () => {
        onClickHaburger()
    }
    return (
        <nav id={s.navbar}>
        <div className={s.navWrapper}>
          <p className={s.brand}>
            LOGO
          </p>
          <span className={cn(s.menuButton, {[s.active]: bClass})} onClick={handlerClick}>
            <span />
          </span>
        </div>
      </nav>
    );
};

export default Navbar;