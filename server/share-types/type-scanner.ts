const bookmaker = {
  label: '',
  koef: 0
};

export const ScannerCardDefault = {
  arb_type: "",                //тип события
  unic_id: '',                  //уникальный UID по BET_ID+TIME
  bet_id: '',                  //ID бетки
  arb_percent: 0,                 //процент доходности вилки
  bookmaker_event_name: '',                 //процент доходности вилки
  event_name: '',              //название события
  event_id: 0 ,              //название события
  league_name: '',     //название лиги
  current_score: '',   //счет игры
  away_score: 0,     //счет в гостях
  home_score: 0,     //счет дома
  country_name: '',     //Город в котором игра
  team1_name: "",      //название 1 команды
  team2_name: "",      //название 2 команды
  team_home: "",      //кто играет дома
  team_away: "",      //кто играет на выезде
  sport_name: "",      //название спорта
  updated_at: 0,      //название спорта
  market_type: 0,      //название спорта
  market_type_param: 0,      //название спорта
  market_type_name: '',      //название спорта
  koef: 0,
  id: '',           //ID вилки
  url: '',          //урл на бетку
  koef_max: 0,
  koef_mid: 0,
  koef_min: 0,
  is_buy: null as EScannerCardType|null,
  is_valid: false,
  hidden: false,
  hidden_count: 0,
  ras4et_koef: 0,
  ras4et_koef_min: 0,
  ras4et_koef_max: 0,
  ras4et_koef_mid: 0,
  ras4et_raznica: 0,
  ras4et_v1: 0,
  stars: 0,
  ras4et_v2: 0,
  ras4et_ROI: 0,
  disabled: false,
  bookmaker_list: [] as Array<typeof bookmaker>
};
export type IScannerCard = typeof ScannerCardDefault;
export enum EScannerCardType {
  BUY = 'BUY',
  OK = 'OK',
  BAD = 'BAD',
}