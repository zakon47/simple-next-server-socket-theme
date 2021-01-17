import {createContext, Dispatch, useEffect, useState} from 'react';
import { EVENTS, IMainEventEnum, IServiceData } from "../events";

export let mainContext = createContext<IContext>({} as IContext)

interface IState{
  ctx: IServiceData
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
  const [state, setState] = useState<IState>(()=>{
    console.log('EVENTS.get()', EVENTS.get())
    return {
      ctx: EVENTS.get(),
      name: "zakon",
      list: [0,1,2,3],
      cookie: '',
      redirect: ''
    }
  })
  const singIn = () => {
    setState({...state, list: [...state.list, state.list.length]})
  }
  useEffect(()=>{
    console.log('START')
    const handleEvent = (data:IServiceData)=>{
      console.log('START', 'handleEvent', data)
      setState(prevState => ({...prevState, ctx:{...data} }))
    }
    EVENTS.on(IMainEventEnum.main, handleEvent)
    return ()=>{
      console.log('END')
      EVENTS.off(IMainEventEnum.main, handleEvent)
    }
  },[])
  const setAuth = (status: boolean) => {
    EVENTS.setAuth(status);
  }
  const saveCookie = (cookie:string) => {
    setState({...state, cookie})
  }
  console.log(111, state.ctx)
  const data:IContext = {
    state:{
      ...state,
      ctx: EVENTS.get()
    },
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