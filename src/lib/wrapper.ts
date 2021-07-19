import axios from 'axios';
import { URL_BASE } from '../keys.js';
import { ILastest } from '../interfaces/Lastest.js';
import { IConversion} from '../interfaces/convert.js';

class FixerWrapper {
  private _access_key: string;
  constructor(access_key: string) {
    this._access_key = access_key;
  }
 
  public async latest(convertTo?: string, baseCurrency?: string): Promise<ILastest> {

    const base: string = typeof baseCurrency !== 'undefined' ? `&base=${baseCurrency}` : '';
    
    const url: string = typeof convertTo !== 'undefined'
      ? `/latest?access_key=${this._access_key}&symbols=${convertTo}${base}`
      : `/latest?access_key=${this._access_key}`;

    const response = await axios({
      url: url,
      method: 'GET',
      baseURL: URL_BASE
    });
    return response.data;
  }

  public async convert(conversionFrom: string, conversionTo: string, amount: string, date?: string): Promise<IConversion> {

    const url: string = typeof date !== 'undefined'
      ? `/convert?access_key=${this._access_key}&from=${conversionFrom}&to=${conversionTo}&amount=${amount}&date=${date}`
      : `/convert?access_key=${this._access_key}&from=${conversionFrom}&to=${conversionTo}&amount=${amount}`;
    
    const response = await axios({
      url: url,
      method: 'GET',
      baseURL: URL_BASE
    });
    return response.data;
  }
}

