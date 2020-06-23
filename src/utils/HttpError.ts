export interface HttpErrorInfo {
  status: number;
  message: string;
}

export class HttpError extends Error {
  status: number;

  constructor(info: HttpErrorInfo) {
    super(info.message);
    Object.setPrototypeOf(this, new.target.prototype);
    this.name = HttpError.name;
    this.status = info.status;
  }
}
