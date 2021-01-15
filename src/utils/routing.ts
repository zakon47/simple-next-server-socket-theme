import Router from 'next/router';
import { MainNextPageContext } from '../../pages/_app';

export function redirectByContext(ctx: MainNextPageContext, path: string){
  if(!ctx.auth){
    !ctx.isServer
      ? Router.push(path)
      : ctx.res.writeHead(302, { Location: path }).end()
  }
}