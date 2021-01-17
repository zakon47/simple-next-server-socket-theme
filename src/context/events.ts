import {EventEmitter} from "events";

export interface IServiceData {
    auth: boolean|null
    isServer: boolean|null
    referer: string
}
export enum IMainEventEnum {
    main = 'main',
    auth = 'auth',
    isServer = 'isServer',
    referer = 'referer'
}
class mainEventClass extends EventEmitter{
    _data:IServiceData = {
        auth: null,
        isServer: null,
        referer: ''
    }
    setAuth(status: boolean){
        this._data.auth = status
        this.emit(IMainEventEnum.auth, this._data)
        this.emit(IMainEventEnum.main, this._data)
    }
    setIsServer(status: boolean){
        this._data.isServer = status
        this.emit(IMainEventEnum.isServer, this._data)
        this.emit(IMainEventEnum.main, this._data)
    }
    setReferer(from: string){
        this._data.referer = from
        this.emit(IMainEventEnum.referer, this._data)
        this.emit(IMainEventEnum.main, this._data)
    }
    get(){
        return {...this._data}
    }
    async set(data:IServiceData) {
        this._data = {...data}
        this.emit(IMainEventEnum.main, this._data)
    }
}

export const Events = new mainEventClass()