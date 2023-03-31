export interface SingleBlockDataResult {
  $schema: string
  type: string
  properties: Properties
  required: string[]
}

export interface Properties {
  request: Request
  status: Status
  result: Result
  error: Error
}

export interface Request {
  type: string
  properties: Properties2
  required: string[]
}

export interface Properties2 {
  network: Network
  apiVersion: ApiVersion
  resource: Resource
  args: Args
  timestamp: Timestamp
}

export interface Network {
  type: string
  enum: string[]
}

export interface ApiVersion {
  type: string
  enum: string[]
}

export interface Resource {
  type: string
}

export interface Args {
  type: string
  properties: Properties3
}

export interface Properties3 {}

export interface Timestamp {
  type: string
}

export interface Status {
  type: string
}

export interface Result {
  type: string[]
  properties: Properties4
  required: string[]
}

export interface Properties4 {
  pagination: Pagination
  list: List
}

export interface Pagination {
  type: string
  properties: Properties5
  required: string[]
}

export interface Properties5 {
  from: From
  limit: Limit
  direction: Direction
  count: Count
}

export interface From {
  type: string
}

export interface Limit {
  type: string
}

export interface Direction {
  type: string
}

export interface Count {
  type: string
}

export interface List {
  batcId: number;
  blockIndex:number;
  blockNumber: number;
  createdAt:string;
  failReason?:string
  op:{
    accountId :number;
    amount: string;
    fee: string;
    from: string;
    nonce:number;
    signature:{pubKey: string, signature: string}
    to:string;  
    token:number;
    type: string;
    validFrom: number;
    validUntil:number;
  }
}

export interface Error {
  type: string[]
  properties: Properties6
  required: string[]
}

export interface Properties6 {
  errorType: ErrorType
  code: Code
  message: Message
}

export interface ErrorType {
  type: string
}

export interface Code {
  type: string
}

export interface Message {
  type: string
}
