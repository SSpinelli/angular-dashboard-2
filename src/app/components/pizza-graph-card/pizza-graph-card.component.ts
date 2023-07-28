import { Component } from '@angular/core';
import { MyBalanceService } from 'src/app/service/my-balance.service';


@Component({
  selector: 'app-pizza-graph-card',
  templateUrl: './pizza-graph-card.component.html',
  styleUrls: ['./pizza-graph-card.component.css']
})

export class PizzaGraphCardComponent {
  constructor(public MyBalanceService: MyBalanceService) { }

  chartOptions = {
    animationEnabled: true,
    data: [{
      type: "doughnut",
      yValueFormatString: "#,###.##%",
      indexLabel: "{name}",
      dataPoints: [
        { y: this.MyBalanceService.myWallet.bitcoin / this.MyBalanceService.totalAmount, name: "Bitcoin" },
        { y: this.MyBalanceService.myWallet.ethereum / this.MyBalanceService.totalAmount, name: "Ethereum" },
        { y: this.MyBalanceService.myWallet.ripple / this.MyBalanceService.totalAmount, name: "Ripple" },
        { y: this.MyBalanceService.myWallet.dash / this.MyBalanceService.totalAmount, name: "Dash" },
      ]
    }]
  }
}
