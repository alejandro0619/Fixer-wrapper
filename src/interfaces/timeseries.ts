export interface ITimeSeriesParams {
  startDate: string;
  endDate: string;
  baseParam?: string;
  symbols?: string;
}
interface IError {
  error: {
    code: number;
    type: string;
    info: string;
  }
}
export interface ITimeSeries {
  success: boolean;
  error: IError;
  timeseries: boolean;
  start_date: string;
  end_date: string;
  base: string;
  rates: {};
}
