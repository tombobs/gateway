const paginationOptions = require('./pagination.json')

export class Page {
  pageSize: number;
  pageNumber: number;
  totalResults: number;
  pageSizes: Array<number>;

  constructor() {
    Object.assign(this, paginationOptions.defaults);
  }
}
