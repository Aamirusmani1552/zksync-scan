export interface TransactionDetailsResult {
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
  tx: Tx;
  ethSignature?: string;
  required: string[];
}

export interface Properties4 {}

export interface Tx {
  type: string;
  txHash: string;
  blockNumber: number;
  op: Enum;
  status?: string;
  failReason?: string;
  createdAt?: string;
  batchId?: string;
}

export interface TxHash {
  type: string;
}

export interface BlockNumber {
  type: string;
}


export interface Enum {
  type: string;
  to?: string;
  fee: any;
  from?: string;
  nonce?: number;
  token?: number;
  amount?: string|number;
  accountId?: number;
  validFrom?: number;
  validUntil?: number;
  signature?: Signature;
  tokenId?: number;
  fast?: boolean;
  ethTxHash?: string;
  account?: string;
  newPkHash?: string;
  feeTokenId?: number;
  ethAuthData?: string;
  ethSignature?: string;
  initiatorAccountId?: number;
  target?: string;
  submitterId?: number;
  submitterAddress?: string;
  orders?: Order[];
  amounts?: string[];
  feeToken?: number;
  creatorId?: number;
  creatorAddress?: string;
  contentHash?: string;
  recipient?: string;
  ethHash?: string;
  id?: number;
  txHash?: string;
}

export interface Signature {
  pubKey: string;
  signature: string;
}

export interface Order {
  accountId: number;
  recipient: string;
  nonce: number;
  tokenBuy: number;
  tokenSell: number;
  ratio: string[];
  amount: string;
  validFrom: number;
  validUntil: number;
  signature: Signature2;
}

export interface Signature2 {
  pubKey: string;
  signature: string;
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
