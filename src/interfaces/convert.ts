interface IQuery {
  query: {
    from: string;
    to: string;
    amount: number;
  }
}
interface IInfo {
  info: {
    timestamp: number;
    rate: number
  }
}
interface IError {
  error: {
    code: number;
    type: string;
    info: string;
  }
}
export interface IConversion {
  success: boolean;
  error?: IError
  query?: IQuery;
  info?: IInfo;
  historical?: string;
  date?: string;
  result?: number;
}
export interface IConversionParams {
  conversionFrom: string;
  conversionTo: string;
  amount: string;
  date?: string;
}
