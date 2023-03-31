export interface TransactionDetailsResult {
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
  tx: Tx
  ethSignature: EthSignature
}

export interface Tx {
  type: string
  properties: Properties5
  required: string[]
}

export interface Properties5 {
  txHash: TxHash
  blockNumber: BlockNumber
  op: Op
  status: Status2
  failReason: FailReason
  createdAt: CreatedAt
  batchId: BatchId
}

export interface TxHash {
  type: string
}

export interface BlockNumber {
  type: string
}

export interface Op {
  type: string
  enum: Enum[]
}

export interface Enum {
  type: string
  to?: string
  fee: any
  from?: string
  nonce?: number
  token?: number
  amount: any
  accountId?: number
  validFrom?: number
  validUntil?: number
  signature?: Signature
  tokenId?: number
  fast?: boolean
  ethTxHash?: string
  account?: string
  newPkHash?: string
  feeTokenId?: number
  ethAuthData?: string
  ethSignature?: string
  initiatorAccountId?: number
  target?: string
  submitterId?: number
  submitterAddress?: string
  orders?: Order[]
  amounts?: string[]
  feeToken?: number
  creatorId?: number
  creatorAddress?: string
  contentHash?: string
  recipient?: string
  ethHash?: string
  id?: number
  txHash?: string
}

export interface Signature {
  pubKey: string
  signature: string
}

export interface Order {
  accountId: number
  recipient: string
  nonce: number
  tokenBuy: number
  tokenSell: number
  ratio: string[]
  amount: string
  validFrom: number
  validUntil: number
  signature: Signature2
}

export interface Signature2 {
  pubKey: string
  signature: string
}

export interface Status2 {
  type: string
  enum: string[]
}

export interface FailReason {
  type: string[]
}

export interface CreatedAt {
  type: string[]
}

export interface BatchId {
  type: string[]
}

export interface EthSignature {
  type: string[]
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
