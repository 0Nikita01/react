import { useState } from 'react';
import Menu from '../Menu';
import Navbar from '../Navbar';

const MenuHeader = ({bgActive}) => {
    const [bClass, setbClass] = useState(null);

    const handlerClickHamb = () => {
        setbClass(prevState => !prevState);
    }

    return (
        <>
           <Menu bClass={bClass}/>
           <Navbar onClickHaburger={handlerClickHamb} bClass={bClass} bgActive={bgActive}/>
        </>
    );
};

export default MenuHeader;