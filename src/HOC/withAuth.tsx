import { useRouter } from 'next/router';
import React, { Component, FC, useContext, useEffect, useState } from 'react';
import AuthService from './auth'
import { mainContext } from '../context/mainContext/mainContext';

interface IProps {

}

const withAuth = (Component) => {
  // const Auth = new AuthService('http://localhost:3100')
  return function (props) {
    const router = useRouter()
    const [stateM, setStateM] = useState({
      isLoading: true
    });
    const {state, saveCookie} = useContext(mainContext);
    useEffect(()=>{
      console.log('Auth-cookie',state.cookie)
      if (!state.cookie) {
        router.push('/')
      }
      setStateM({ isLoading: false })
    },[])
    return (
      <>
        {stateM.isLoading ? (
          <div>Loading...</div>
        ) : (
          <Component {...props} auth={state.cookie}/>
        )}
      </>
    )
  };
};

export default withAuth;