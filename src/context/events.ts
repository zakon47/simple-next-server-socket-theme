import Event from 'events';

export interface IData {
    auth: boolean|null
    isServer: boolean|null
    from: string
}

const ServerData: IData = {
    auth: null,
    isServer: null,
    from: ''
}

const myEvent = new Event();
const setAuth = (status: boolean) =>{
    ServerData.auth = status
    myEvent.emit('event', ServerData)
}
const setIsServer = (status: boolean) =>{
    ServerData.isServer = status
    myEvent.emit('event', ServerData)
}
const setReferer = (from: string) =>{
    ServerData.from = from
    myEvent.emit('event', ServerData)
}
const get = () => ({...ServerData})
const set = (data:IData) => {
    ServerData.auth = data.auth
    ServerData.isServer = data.auth
    ServerData.from = data.from
    myEvent.emit('event', ServerData)
}


export const EVENTS = {
    myEvent,
    setAuth,
    setIsServer,
    setReferer,
    get,
    set,
}