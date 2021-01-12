import { createContext, Dispatch, useState } from 'react';

export const mainContext = createContext<IContext>({} as IContext)

interface IState{
  name: string
  list: Array<number>
  cookie: string
}
interface IContext {
  state: IState
  setState: Dispatch<IState>
  singIn: ()=>void
  saveCookie: (cookie:string)=>void
}

function MainContext(props){
  const [state, setState] = useState<IState>({
    name: "zakon",
    list: [0,1,2,3],
    cookie: ''
  })
  const singIn = () => {
    setState({...state, list: [...state.list, state.list.length]})
  }
  const saveCookie = (cookie:string) => {
    setState({...state, cookie})
  }
  const data = {
    state, setState, singIn, saveCookie
  }
  console.log('RENDER CONTEXT')
  return (
    <mainContext.Provider value={data}>
      {props.children}
    </mainContext.Provider>
  )
}
export default MainContext;