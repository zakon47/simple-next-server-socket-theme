import {createContext, Dispatch, useEffect, useState} from 'react';
import {EVENTS, IData} from "../events";

export let mainContext = createContext<IContext>({} as IContext)

interface IState{
  ctx: IData
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
    ctx: EVENTS.get(),
    name: "zakon",
    list: [0,1,2,3],
    cookie: '',
    redirect: ''
  })
  const singIn = () => {
    setState({...state, list: [...state.list, state.list.length]})
  }
  useEffect(()=>{
    console.log('START')
    const handleEvent = (data:IData)=>{
      setState(prevState => ({...prevState, ctx:{...data} }))
    }
    EVENTS.myEvent.on('event', handleEvent)
    return ()=>{
      console.log('END')
      EVENTS.myEvent.off('event', handleEvent)
    }
  },[])
  const setAuth = (status: boolean) => {
    EVENTS.setAuth(status);
  }
  const saveCookie = (cookie:string) => {
    setState({...state, cookie})
  }
  const data = {
    state, setState, singIn, saveCookie, setAuth
  }
  return (
    <mainContext.Provider value={data}>
      {props.children}
    </mainContext.Provider>
  )
}
export default MainContext;