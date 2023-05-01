import React, { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';

const Home = () => {

    const {user} = useContext(AuthContext);

    return (
        <div className='container my-5 py-5 bg-primary text-center'>
            <h1>Welcome, {user.name} To this React World</h1>
        </div>
    );
};

export default Home;