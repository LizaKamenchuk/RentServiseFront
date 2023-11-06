export class RequestResponse<T> {
  body: T | null;
  status: number | null;

  constructor(body: T, status: number) {
    this.body = body;
    this.status =  status;
  }

}
