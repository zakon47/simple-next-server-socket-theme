import Router from 'next/router';

export function redirectByContext(ctx, path: string){
  if(!ctx.auth){
    !ctx.isServer
      ? Router.push(path)
      : ctx.res.writeHead(302, { Location: path }).end()
  }
}

export const isServer = () => typeof window === 'undefined'