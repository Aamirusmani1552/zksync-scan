export interface AccountTransactions {
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
  network: string;
  apiVersion: string;
  resource: string;
  args: Args;
  timestamp: string;
  required: string[];
}

export interface Args {
  type: string;
  properties: Properties3;
}

export interface Properties3 {}

export interface Status {
  type: string;
}

export interface Result {
  type: string[];
  pagination: Pagination;
  list: List[];
  required: string[];
}

export interface Pagination {
  type: string;
  from: string;
  limit: number;
  direction: string;
  count: number;
  required: string[];
}

export interface List {
  batchId?: number;
  blockIndex: number;
  blockNumber: number;
  createdAt?: string;
  failReason?: string;
  op: {};
  txHash: string;
  status: string;
}

export interface Error {
  type: string[];
  properties: Properties6;
  required: string[];
}

export interface Properties6 {
  errorType: string;
  code: string;
  message: string;
}
