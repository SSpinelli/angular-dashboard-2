import { Component } from '@angular/core';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent {
  myActivites = [
    {
      coin: 'ETH',
      title: 'Sent Ethereum',
      subtitle: 'To Ethereum Address',
      value: 0.000257,
      imgUrl: '../../../assets/ethereum.svg'
    },
    {
      coin: 'DAS',
      title: 'Sent Dash',
      subtitle: 'To Dash Address',
      value: 0.000257,
      imgUrl: '../../../assets/dash.svg'

    },
    {
      coin: 'RIP',
      title: 'Sent Ripple',
      subtitle: 'To Ripple Address',
      value: 0.000257,
      imgUrl: '../../../assets/ripple.svg'

    },
    {
      coin: 'BTC',
      title: 'Sent Bitcoin',
      subtitle: 'To Bitcoin Address',
      value: 0.000257,
      imgUrl: '../../../assets/bitcoin.svg'
    }
  ]
}
