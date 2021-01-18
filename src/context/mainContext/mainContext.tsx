import { createContext, Dispatch, ReactNode, useEffect, useState } from 'react';
import { AUTH, MainProps } from '../../../pages/_app';

export let mainContext = createContext<IContext>({} as IContext)

interface IState extends MainProps{
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
  setIsLoading: (status: boolean) => void
  setReferer: (referer: string) => void
}

interface IProps {
  ctx: typeof AUTH
  children: ReactNode
}

function MainContext(props: IProps) {
  const [state, setState] = useState<IState>({
    AUTH: props.ctx,
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
    setState({...state, AUTH: {...state.AUTH, auth: status}})
  }
  const setIsLoading = (status: boolean) => {
    AUTH.isLoadingPage = status
    setState({...state, AUTH: {...state.AUTH, isLoadingPage: status}})
  }
  const setReferer = (referer: string) => {
    AUTH.referer = referer
    setState({...state, AUTH: {...state.AUTH, referer}})
  }
  const saveCookie = (cookie: string) => {
    setState({...state, cookie})
  }
  const data: IContext = {
    state,
    setState,
    singIn,
    saveCookie,
    setAuth,
    setIsLoading,
    setReferer
  }
  return (
    <mainContext.Provider value={data}>
      {props.children}
    </mainContext.Provider>
  )
}

export default MainContext;