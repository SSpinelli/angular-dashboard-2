import { Component, DoCheck } from '@angular/core';

@Component({
  selector: 'app-column-graph-card',
  templateUrl: './column-graph-card.component.html',
  styleUrls: ['./column-graph-card.component.css']
})
export class ColumnGraphCardComponent implements DoCheck {
  ngDoCheck(): void {
    this.chartOptions()
  }

  weekChartActive = true

  changeGraph() {
    this.weekChartActive = !this.weekChartActive

    this.chartOptions()
  }

  chartOptions() {
    return {
      animationEnabled: true,
      data: [{        
        type: "column",
        dataPoints: this.weekChartActive ? this.dataPointsWeekly : this.dataPointsMonthly
      }]
    }	
  }

  dataPointsMonthly = [
    { x: 10, y: 71 },
    { x: 20, y: 55 },
    { x: 30, y: 50 },
    { x: 40, y: 65 },
    { x: 50, y: 95 },
    { x: 60, y: 68 },
    { x: 70, y: 28 },
    { x: 80, y: 34 },
    { x: 90, y: 14 }
  ]

  dataPointsWeekly = [
    { x: 10, y: 11 },
    { x: 20, y: 75 },
    { x: 30, y: 50 },
    { x: 40, y: 45 },
    { x: 50, y: 45 },
    { x: 60, y: 68 },
    { x: 70, y: 28 },
    { x: 80, y: 34 },
    { x: 90, y: 14 }
  ]
	

}
