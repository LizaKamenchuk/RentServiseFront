export class ErrorResponse {
  message: string | null;
  status: number | null;

  constructor(message: string, status: number) {
    this.message = message;
    this.status = status;
  }
}
