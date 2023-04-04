export interface AccountDetailsResult {
  $schema: string;
  type: string;
  request: Request;
  status: Status;
  result: Result;
  error: Error;
  required: string[];
  definitions: Definitions;
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
  depositing: Depositing;
  committed: Committed;
  finalized: Finalized;
  required: string[];
}

export interface Depositing {
  type: string;
  balances: {};
  required: string[];
}

export interface Committed {
  type: string[];
  accountId: string;
  address: string;
  nonce: number;
  pubKeyHash: string;
  lastUpdateInBlock: number;
  balances: {};
  accountType: AccountType;
  nfts: {
    [key: number]: NFT;
  };
  mintedNfts: MintedNfts;
  required: string[];
}

export enum AccountType {
  Owned,
  CREATE2,
}

export interface NFT {
  address: string;
  contentHash: string;
  creatorAddress: string;
  creatorId: string;
  id: number;
  serialId: number;
  symbol: string;
}

export interface MintedNfts {}

export interface Finalized {
  type: string[];
  accountId: string;
  address: string;
  nonce: number;
  pubKeyHash: string;
  lastUpdateInBlock: SVGAnimatedNumberList;
  balances: Tokens;
  accountType: AccountType2;
  nfts: Nfts2;
  mintedNfts: MintedNfts2;
  required: string[];
}

export interface Tokens {
  DAI?: string;
  ETH?: string;
  LDO?: string;
  MATIC?: string;
  UNI?: string;
  USDC?: string;
  USDT?: string;
  UST?: string;
  WBTC?: string;
  ZZ?: string;
  icETH?: string;
}

export interface Properties9 {}

export interface AccountType2 {
  type: string[];
  enum: string | undefined[];
}

export interface Nfts2 {
  $ref: string;
  required: string[];
}

export interface MintedNfts2 {
  $ref: string;
  required: string[];
}

export interface Error {
  type: string[];
  properties: Properties10;
  required: string[];
}

export interface Properties10 {
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

export interface Definitions {
  "100000": N100000;
  ETH: Eth;
}

export interface N100000 {
  type: string;
  patternProperties: PatternProperties;
}

export interface PatternProperties {
  "": GeneratedType;
}

export interface GeneratedType {
  type: string;
  properties: Properties11;
  required: string[];
}

export interface Properties11 {
  id: Id;
  contentHash: ContentHash;
  creatorId: CreatorId;
  creatorAddress: CreatorAddress;
  serialId: SerialId;
  address: Address3;
  symbol: Symbol;
}

export interface Id {
  type: string;
}

export interface ContentHash {
  type: string;
}

export interface CreatorId {
  type: string;
}

export interface CreatorAddress {
  type: string;
}

export interface SerialId {
  type: string;
}

export interface Address3 {
  type: string;
}

export interface Symbol {
  type: string;
}

export interface Eth {
  type: string;
  patternProperties: PatternProperties2;
}

export interface PatternProperties2 {
  "": GeneratedType2;
}

export interface GeneratedType2 {
  type: string;
}

export class customError extends Error {
  code?: string;
  constructor(message: "") {
    super(message);
  }
}
