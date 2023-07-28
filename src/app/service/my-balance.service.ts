import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyBalanceService {
  myWallet = {
    bitcoin: 3479.02,
    ripple: 2704.05,
    ethereum: 1704.05,
    dash: 1633.38,
  }
  totalAmount = this.myWallet.bitcoin + this.myWallet.ripple + this.myWallet.ethereum + this.myWallet.dash
  priceBitcoinToReal = 138429.49
  
  bitcoinUrl = 'https://canvasjs.com/data/docs/btcusd2018.json'
  EthereunnUrl = 'https://canvasjs.com/data/docs/btcusd2018.json'

  constructor() { }
}
