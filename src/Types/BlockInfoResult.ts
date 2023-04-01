export interface BlockInfoResult {
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
  resource: string;
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
  blockNumber: string;
  newStateRoot: string;
  blockSize: number;
  commitTxHash?: string;
  verifyTxHash?: string;
  committedAt?: string;
  finalizedAt?: string;
  status: string;
  required: string;
}

export interface Error {
  type: string[];
  errorType: string;
  code: string;
  message: string;
  required: string[];
}
