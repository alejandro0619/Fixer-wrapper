export interface IFluctuationParams {
  startDate: string;
  endDate: string;
  baseParam: string;
  symbols: string
}

export interface IFluctuation {
  success: boolean;
  fluctuation: boolean;
  start_date: string;
  end_date: string;
  base: string;
  rates: {}

}