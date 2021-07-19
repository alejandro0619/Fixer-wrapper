interface Irates {
  rates: {}
}
interface IError {
  error: {
    code: number
    type: string
    info: string
  }
}
export interface ILastest {
  success: boolean;
  error?: IError
  timestamp?: number;
  base?: string;
  date?: string;
  rates?: Irates

}