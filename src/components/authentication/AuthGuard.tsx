import useAuth from '../../hooks/useAuth';
import Login from '../../pages/authentication/Login';
import React, { Fragment, ReactNode, useEffect, useState } from 'react';
import { Router, useRouter } from 'next/router';
import ForgetPassword from '../../pages/authentication/ForgetPassword';
import cookie from 'js-cookie';

// component props interface
interface AuthGuardProps {
  children: ReactNode;
}

const AuthGuard = ({ children }: AuthGuardProps) => {
  const allPages = useRouter();
  const isAuthenticated = cookie.get('interage');
  const pathname = allPages.pathname;
  const [requestedLocation, setRequestedLocation] = useState<string | null>(
    null,
  );

  //se não fizer isto, ele não ira redirecinar para a pagina, pois não esta logado
  if (pathname == '/authentication/ForgetPassword') {
    return <ForgetPassword />;
  }
  
  
  useEffect(() => {

    allPages.beforePopState(() => {

      if (!isAuthenticated || isAuthenticated === undefined ) {
        if (pathname !== requestedLocation) {
          setRequestedLocation(pathname);
        }
        allPages.push('/authentication/Login');        
        return false;
      }
      return true;
    });
    
  }, [children]);

  if (requestedLocation && pathname !== requestedLocation) {
    setRequestedLocation(null);
    allPages.push(requestedLocation);
  }

  
  if (isAuthenticated) {
    
    return <Fragment>{children}</Fragment> }
    else
    {
      return <Login />
    }
    ;

};

export default AuthGuard;
