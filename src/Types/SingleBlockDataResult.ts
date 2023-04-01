export interface SingleBlockDataResult {
  $schema: string;
  type: string;
  request: Request;
  status: string;
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
  timestamp: string;
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

export interface Result {
  type: string[];
  pagination: Pagination;
  list: List[];
  required: string[];
}

export interface Pagination {
  type: string;
  from: number;
  limit: number;
  direction: string;
  count: number;
  required: string[];
}

export interface List {
  batcId: number;
  blockIndex: number;
  blockNumber: number;
  createdAt: string;
  failReason?: string;
  op: {
    accountId: number;
    amount: string;
    fee: string;
    from: string;
    nonce: number;
    signature: { pubKey: string; signature: string };
    to: string;
    token: number;
    type: string;
    validFrom: number;
    validUntil: number;
  };
  status: string;
  txHash: string;
}

export interface Error {
  type: string[];
  errorType: string;
  code: string;
  message: string;
  required: string[];
}
