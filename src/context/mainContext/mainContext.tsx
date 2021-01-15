import { createContext, Dispatch, useState } from 'react';

export let mainContext = createContext<IContext>({} as IContext)

interface IState{
  ctx:{
    auth: boolean|null
    isServer: boolean|null
  }
  name: string
  cookie: string
  redirect: string
  list: Array<number>
}
interface IContext {
  state: IState
  setState: Dispatch<IState>
  singIn: ()=>void
  saveCookie: (cookie:string)=>void
  setAuth: (status: boolean)=>void
}

function MainContext(props){
  const [state, setState] = useState<IState>({
    ctx:{
      auth: null,
      isServer: null
    },
    name: "zakon",
    list: [0,1,2,3],
    cookie: '',
    redirect: ''
  })
  const singIn = () => {
    setState({...state, list: [...state.list, state.list.length]})
  }
  const setAuth = (status: boolean) => {
    setState({...state, ctx:{...state.ctx, auth: status} })
  }
  const saveCookie = (cookie:string) => {
    setState({...state, cookie})
  }
  const data = {
    state, setState, singIn, saveCookie, setAuth
  }
  // console.log('RENDER CONTEXT')
  return (
    <mainContext.Provider value={data}>
      {props.children}
    </mainContext.Provider>
  )
}
export default MainContext;