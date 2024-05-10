// types.ts

import { Api } from "dero-xswd-api";
import { StaticImageData } from "next/image";
import { MutableRefObject } from "react";

export type NewsItem = {
  title: string;
  date: string;
  body: JSX.Element;
}

export type Profile = {
  img: string;
  header: string;
  paragraph: string;
}

export type CountDown = {
  days: number;
  hrs: number;
  mins: number;
}

export type InvoiceRequestBody = {
  Quantity: number;
    Email: string;
    DeroAddress: string;
    SeedID:string;
    Payments: Payment[];
    Status: string;
    Integrated: string;
    CryptoReceived:string;
    Currency:string;
    SeedOutTXID:string;
    IncomingTXID:string;
    DonationAmount:string;
    Password:string;
    CompletedTimestamp: string;
  };

export type Receipt = {
  Quantity: number;
  DeroAddress: string;
  TreeID:string;
  Status:string;
  CryptoReceived:string;
  Currency:string;
  TXIDOut:string;
  TXIDIn:string;
  DonationAmount:string;
  Password:string;
  CompletedTimestamp:string;
  LEAF_SCID:string;
}

export type Payment={
  Rate: string;
  currency: string;
  symbol: string;
  amount: string;
  payment_address: string;
  payment_url: string;
}
  
export type CheckoutContextType = {
  checkoutStep: number;
  setCheckoutStep: (newStep:number) =>void;
  invoice: InvoiceRequestBody;
  setInvoice: (invoice:InvoiceRequestBody)=>void;
  selectedCurrency: Currency;
  setSelectedCurrency: (newCurrency:Currency) =>void;
}

export type WalletContextType = {
  worker :Worker | null;
  setWorker: (worker:Worker|null)=>void;
  activeWallet: wallet | null;
  setActiveWallet: (wallet:wallet|null)=>void;
  walletList: wallet[];
  setWalletList: (wallets:wallet[])=>void;
  deroBridgeApiRef: MutableRefObject<undefined>|null;
  setDeroBridgeApiRef: (ref:MutableRefObject<undefined>|null)=>void;
  xswd?: Api|null;
  setXSWD:(xswd:Api|null)=>void;
}

export type VaultContextType = {
  selectedToken?:balance
  setSelectedToken: (token:balance)=>void;
}

export type FastRegistrationContextType = {
  workerCount: number;
  setWorkerCount: (count:number)=>void;
  hashRate:number[];
  setHashRate: (hr:number[])=>void;
  hashCount:number[];
  setHashCount: (hc:number[])=>void;
  hashRateTotal:number;
  setHashRateTotal: (total:number)=>void;
  hashCountTotal:number;
  setHashCountTotal: (total:number)=>void;
  status:string;
  setStatus:(status:string)=>void;
  wallet:wallet|null;
  setWallet: (wallet:wallet|null)=>void;
  txWorker:Worker|null;
  setTxWorker:(worker:Worker|null)=>void;
}

export type wallet ={
  app: string;
  name: string;
  address: string;
  connection: string;
  fileData:any;
  password:string|null;
  seed:string|null;
  hexSeed:string|null;
  open:boolean;
  active:boolean;
  balances:balance[];

}

export type Currency = {
  name: string;
  symbol: string;
  icon: StaticImageData;
  currency: string;
}

export type DeroAddress = {
  name: string;
  address: string;
  registered: boolean;
}

export type WalletApp = {
  name:string;
  systems:string[];
  downloads?:link[];
}

export type link = {
  name:string;
  url:string;
}

export type balance = {
  name:string;
  scid:string;
  balance?:number;
  iconURL?:string;
  decimals?:number;
  symbol?:string;
}