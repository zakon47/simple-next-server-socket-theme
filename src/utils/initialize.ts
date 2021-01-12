import Router from 'next/router';
import { getCookie } from './cookie';
import { useContext } from 'react';
import { mainContext } from '../context/mainContext/mainContext';

// checks if the page is being loaded on the server, and if so, get auth token from the cookie:
export default function initialize(ctx) {
  console.log(mainContext)
  // const {state, saveCookie} = useContext(mainContext);
  if(ctx.isServer) {
    if(ctx.req.headers.cookie) {
      //сохраняем куку в стор
      // saveCookie("xaxaxa")
      // ctx.store.dispatch(actions.reauthenticate(getCookie('token', ctx.req)));
    }
  } else {
    // const token = state.cookie;
    //
    // console.log('token',token)
    // if(token && (ctx.pathname === '/signin' || ctx.pathname === '/signup')) {
    //   setTimeout(function() {
    //     Router.push('/');
    //   }, 0);
    // }
  }


}
