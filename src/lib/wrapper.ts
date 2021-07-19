import axios from 'axios';
import { URL_BASE } from '../keys.js';
import { ILastest } from '../interfaces/Lastest.js';
import {
  IConversion,
  IConversionParams
} from '../interfaces/convert.js';

import {
  ITimeSeriesParams,
  ITimeSeries
} from '../interfaces/timeseries.js';

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

  public async convert(params: IConversionParams): Promise<IConversion> {
    const {
      conversionFrom,
      conversionTo,
      amount,
      date } = params;

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

  public async timeSeries(params: ITimeSeriesParams): Promise<ITimeSeries> {
    const {
      startDate,
      endDate,
      base,
      symbols } = params;
    
    const baseParam = typeof base !== 'undefined' ? `&base=${base}` : '';
    
    const url = typeof symbols !== 'undefined'
      ? `/timeseries?access_key=${this._access_key}&start_date=${startDate}&end_date=${endDate}${baseParam}&symbols=${symbols}`
      : `/timeseries?access_key=${this._access_key}&start_date=${startDate}&end_date=${endDate}`;
    
    const response = await axios({
      url: url,
      method: 'GET',
      baseURL: URL_BASE
    });
    return response.data;
  }
};



