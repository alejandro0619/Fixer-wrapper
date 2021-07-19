import axios from 'axios';
import { URL_BASE } from '../keys.js';
import { IgetLastest } from '../interfaces/Interface.js';

class FixerWrapper {
  private _access_key: string;
  constructor(access_key: string) {
    this._access_key = access_key;
  }
 
  public async getLatest(convertTo?: string, baseCurrency?: string): Promise<IgetLastest> {

    const base = typeof baseCurrency !== 'undefined' ? `&base=${baseCurrency}` : '';
    
    const url = typeof convertTo !== 'undefined'
      ? `/latest?access_key=${this._access_key}&symbols=${convertTo}${base}`
      : `/latest?access_key=${this._access_key}`;

    const response = await axios({
      url: url,
      method: 'GET',
      baseURL: URL_BASE
    });
    return response.data
  };


  
}

