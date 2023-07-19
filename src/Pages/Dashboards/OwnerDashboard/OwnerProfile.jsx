import React, { useContext } from 'react';
import { AuthContext } from '../../../AuthProvider';

const OwnerProfile = () => {
    const {user}=useContext(AuthContext)
    return (
        <div>
            <p className='text-4xl text-gray-700'>Name</p>
            <p className='text-3xl text-black'>{user?.name}</p>
            <p className='text-4xl text-gray-700'>Email</p>
            <p className='text-3xl text-black'>{user?.email}</p>
        </div>
    );
};

export default OwnerProfile;