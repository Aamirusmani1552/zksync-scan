export interface NetworkDataResult {
  $schema: string;
  type: string;
  request: Request;
  status: Status;
  result: Result;
  error: Error;
  required: string[];
}

export interface Request {
  type: string;
  network: Network;
  apiVersion: ApiVersion;
  resource: Resource;
  args: Args;
  timestamp: Timestamp;
  required: string[];
}

export interface Network {
  type: string;
  enum: string[];
}

export interface ApiVersion {
  type: string;
  enum: string[];
}

export interface Resource {
  type: string;
}

export interface Args {
  type: string;
  properties: Properties3;
}

export interface Properties3 {}

export interface Timestamp {
  type: string;
}

export interface Status {
  type: string;
}

export interface Result {
  type: string[];
  lastCommitted: string;
  finalized: string;
  totalTransactions: string;
  mempoolSize: string;
  required: string[];
}

export interface Error {
  type: string[];
  errorType: ErrorType;
  code: Code;
  message: Message;
  required: string[];
}

export interface ErrorType {
  type: string;
}

export interface Code {
  type: string;
}

export interface Message {
  type: string;
}
