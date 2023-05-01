import React, { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';

const Header = () => {

    const {user} = useContext(AuthContext);

    return (
        <div className='container py-5 my-5 text-center bg-warning'>
            <h1>This is Header, {user.name}</h1>
        </div>
    );
};

export default Header;