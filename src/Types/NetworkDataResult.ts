export interface NetworkDataResult {
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
  lastCommitted: LastCommitted
  finalized: Finalized
  totalTransactions: TotalTransactions
  mempoolSize: MempoolSize
}

export interface LastCommitted {
  type: string
}

export interface Finalized {
  type: string
}

export interface TotalTransactions {
  type: string
}

export interface MempoolSize {
  type: string
}

export interface Error {
  type: string[]
  properties: Properties5
  required: string[]
}

export interface Properties5 {
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
