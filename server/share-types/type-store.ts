import { IScannerCard } from './type-scanner';
import { IIp } from './type-myip';
import { IBots } from './type-bots';

export interface IStoreBase {
  server: {
    token: string
    ip: IIp | null
    scannerStatus: boolean
  }
  arbs: Array<IScannerCard>
  bots: Array<IBots>
}

export const StoreBaseDefault:IStoreBase = {
  arbs: [],
  bots: [],
  server: {
    ip: null,
    scannerStatus: false,
    token: ''
  }
};