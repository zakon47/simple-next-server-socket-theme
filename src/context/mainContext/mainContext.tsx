import { createContext, Dispatch, useState } from 'react';

export let mainContext = createContext<IContext>({} as IContext)

interface IState{
  auth: boolean|null
  name: string
  list: Array<number>
  cookie: string
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
    auth: null,
    name: "zakon",
    list: [0,1,2,3],
    cookie: ''
  })
  const singIn = () => {
    setState({...state, list: [...state.list, state.list.length]})
  }
  const setAuth = (status: boolean) => {
    setState({...state, auth: status})
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