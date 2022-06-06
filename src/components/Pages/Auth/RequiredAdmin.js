import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import Spinner from '../../Spinner/Spinner';
import useAdmin from '../../hooks/useAdmin';
import auth from '../../../Firebase/firebase.init';

const RequiredAdmin = ({children}) => {
    const [user, loading] = useAuthState(auth);
    const [admin, adminLoading] = useAdmin(user);
    const location = useLocation();

    if(loading || adminLoading){
        return <Spinner></Spinner>;
    }

    if(!user || !admin){
        signOut(auth);
        return <Navigate to="/signIn" state={{ from: location }} replace></Navigate>
    }
    return children;
};

export default RequiredAdmin;