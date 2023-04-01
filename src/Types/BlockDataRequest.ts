export interface BlockDataRequest {
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
  pagination: Pagination;
  list: List[];
  required: string[];
}

export interface Properties4 {}

export interface Pagination {
  type: string;
  from: number;
  limit: string;
  direction: string;
  count: number;
  required: string[];
}

export interface List {
  blockNumber: number;
  blockSize: number;
  commitTxHash: string;
  committedAt: string;
  finalizedAt?: string;
  newStateRoot: string;
  status: string;
}

export interface Error {
  type: string[];
  properties: Properties6;
  required: string[];
}

export interface Properties6 {
  errorType: ErrorType;
  code: Code;
  message: Message;
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
