import { createContext, Dispatch, ReactNode, useEffect, useState } from 'react';
import { AUTH } from '../../../pages/_app';

export let mainContext = createContext<IContext>({} as IContext)

interface IServiceData {
  auth: boolean | null
  isServer: boolean | null
  referer: string
}

interface IState {
  ctx: IServiceData
  name: string
  cookie: string
  redirect: string
  list: Array<number>
}

interface IContext {
  state: IState
  setState: Dispatch<IState>
  singIn: () => void
  saveCookie: (cookie: string) => void
  setAuth: (status: boolean) => void
}

interface IProps {
  ctx: typeof AUTH
  children: ReactNode
}

function MainContext(props: IProps) {
  const [state, setState] = useState<IState>({
    ctx: props.ctx,
    name: "zakon",
    list: [0, 1, 2, 3],
    cookie: '',
    redirect: ''
  })
  const singIn = () => {
    setState({...state, list: [...state.list, state.list.length]})
  }
  const setAuth = (status: boolean) => {
    AUTH.auth = status
    setState({...state, ctx: {...state.ctx, auth: status}})
  }
  const saveCookie = (cookie: string) => {
    setState({...state, cookie})
  }
  const data: IContext = {
    state,
    setState,
    singIn,
    saveCookie,
    setAuth
  }
  return (
    <mainContext.Provider value={data}>
      {props.children}
    </mainContext.Provider>
  )
}

export default MainContext;