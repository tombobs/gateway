export interface IListResponse<T> {
  totalResults: number;
  results: Array<T>;
}

export interface IAppConfig {
  apiUrl: string;
}
