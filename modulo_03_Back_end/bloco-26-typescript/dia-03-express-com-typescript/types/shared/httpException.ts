class HttpException extends Error {
  status: number;
  // message: string; // já presente da classe Error

  constructor(status: number, message: string) {
    super(message);
    this.status = status;
    // this.message = message;
  }
}

export default HttpException;