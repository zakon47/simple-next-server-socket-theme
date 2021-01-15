export enum ESocketTypeMessage {
    CLIENT = "CLIENT",
    SERVER_TOKEN = "SERVER_TOKEN",
    SERVER_DATA = "SERVER_DATA",
    SERVER_SCANNER_STATUS = "SERVER_SCANNER_STATUS",
    SERVER_SCANNER_INIT = "SERVER_SCANNER_INIT",
    SERVER_NOTICE = "SERVER_NOTICE",
    SERVER_STORE = "SERVER_STORE",
}

export enum INoticeType {
    info = 'info',
    success = 'success',
    warning = 'warning',
    error = 'error',
}

export type INotice = {
    type: INoticeType
    msg: string
    date?: number
}