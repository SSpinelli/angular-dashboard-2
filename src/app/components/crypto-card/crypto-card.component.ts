import { Component, Input } from '@angular/core';
import { MyBalanceService } from 'src/app/service/my-balance.service';

@Component({
  selector: 'app-crypto-card',
  templateUrl: './crypto-card.component.html',
  styleUrls: ['./crypto-card.component.css']
})
export class CryptoCardComponent {
  constructor(public MyBalanceService: MyBalanceService) {}

  @Input() coin!: 'BTC' | 'ETH' | 'DAS' | 'RIP'

  divClass() {
    return `${this.coin}-div`
  }

  iconClass() {
    return `icon ${this.coin}`
  }

  coinUrl () {
    switch(this.coin) {
      case 'BTC':
        return '../../../assets/bitcoin.svg'
      case 'ETH':
        return '../../../assets/ethereum.svg'
      case 'DAS':
        return '../../../assets/dash.svg'
      case 'RIP':
        return '../../../assets/ripple.svg'
      default:
        return null
    }
  }

  coinInfo () {
    switch(this.coin) {
      case 'BTC':
        return this.MyBalanceService.myWallet.bitcoin
      case 'ETH':
        return this.MyBalanceService.myWallet.ethereum
      case 'DAS':
        return this.MyBalanceService.myWallet.dash
      case 'RIP':
        return this.MyBalanceService.myWallet.ripple
      default:
        return null
    }
  }

}
