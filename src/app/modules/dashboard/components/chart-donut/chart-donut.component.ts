import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { ChartDonut } from '../../models/dashboard.model';
import * as am5 from '@amcharts/amcharts5';
import * as am5percent from '@amcharts/amcharts5/percent';
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';

@Component({
  selector: 'app-chart-donut',
  templateUrl: './chart-donut.component.html',
  styleUrls: ['./chart-donut.component.scss']
})
export class ChartDonutComponent implements OnInit, OnChanges, OnDestroy {
  @Input() chartDonutData: ChartDonut[] = [];
  private root!: am5.Root;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['chartDonutData'] && this.chartDonutData.length > 0) {
      this.initChart();
    }
  }

  initChart() {
    if (this.root) { this.root.dispose(); }

    const root = am5.Root.new('donutChartDiv');
    root.setThemes([am5themes_Animated.new(root)]);

    const chart = root.container.children.push(
      am5percent.PieChart.new(root, { innerRadius: am5.percent(60), layout: root.verticalLayout })
    );

    const series = chart.series.push(
      am5percent.PieSeries.new(root, { valueField: 'value', categoryField: 'name' })
    );
    
    series.labels.template.set('forceHidden', true);
    series.ticks.template.set('forceHidden', true);
    
    series.get('colors')?.set('colors', [
      am5.color(0xC3C3C3),
      am5.color(0xB0B0B0),
      am5.color(0x9E9E9E),
      am5.color(0x8C8C8C),
      am5.color(0x7B7B7B),
    ]);

    series.data.setAll(this.chartDonutData);
    series.appear(1000, 100);
    this.root = root;
  }

  ngOnDestroy(): void {
    if (this.root) { this.root.dispose(); }
  }
}