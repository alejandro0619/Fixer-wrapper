import axios from 'axios';
import { URL_BASE } from '../utils/keys.js';
import { ILastest } from '../interfaces/Lastest.js';
import {
  IConversion,
  IConversionParams
} from '../interfaces/convert.js';

import {
  ITimeSeriesParams,
  ITimeSeries
} from '../interfaces/timeseries.js';
import { IHistorical } from '../interfaces/historical.js'
import {
  IFluctuationParams,
  IFluctuation
} from '../interfaces/fluctuation.js'
export default class FixerWrapper {
  private _access_key: string;
  constructor(access_key: string) {
    this._access_key = access_key;
  }
 
  public async latest(symbols?: string, baseParam?: string): Promise<ILastest> {

    const base: string = typeof baseParam !== 'undefined' ? `&base=${baseParam}` : '';
    
    const url: string = typeof symbols !== 'undefined'
      ? `/latest?access_key=${this._access_key}&symbols=${symbols}${base}`
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
      baseParam,
      symbols } = params;
    
    const base = typeof baseParam !== 'undefined' ? `&base=${baseParam}` : '';
    
    const url = typeof symbols !== 'undefined'
      ? `/timeseries?access_key=${this._access_key}&start_date=${startDate}&end_date=${endDate}${base}&symbols=${symbols}`
      : `/timeseries?access_key=${this._access_key}&start_date=${startDate}&end_date=${endDate}${base}`;
    
    const response = await axios({
      url: url,
      method: 'GET',
      baseURL: URL_BASE
    });
    return response.data;
  }

  public async historical(date: string, baseParam?: string, symbols?: string,): Promise<IHistorical>{
    const base: string = typeof baseParam !== 'undefined' ? `&base=${baseParam}` : '';

    const url: string = typeof symbols !== 'undefined'
      ? `${date}?access_key=${this._access_key}${base}&symbols=${symbols}`
      : `${date}?access_key=${this._access_key}${base}`;
    
    const response = await axios({
      url: url,
      method: 'GET',
      baseURL: URL_BASE
    });
    return response.data;
  }

  public async fluctuation(params: IFluctuationParams ): Promise<IFluctuation> {
    const {
      startDate,
      endDate,
      baseParam,
      symbols } = params;
    const base: string = typeof baseParam !== 'undefined' ? `&base=${baseParam}` : '';
    const url: string = typeof symbols !== 'undefined'
      ? `/fluctuation?access_key=${this._access_key}&start_date=${startDate}&end_date=${endDate}${base}&symbols=${symbols}`
      : `/fluctuation?access_key=${this._access_key}&start_date=${startDate}&end_date=${endDate}${base}`;
    
    const response = await axios({
      url: url,
      method: 'GET',
      baseURL: URL_BASE
    });
    return response.data;
  }
}
