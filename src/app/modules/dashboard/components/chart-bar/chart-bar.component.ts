import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { ChartBar } from '../../models/dashboard.model';
import * as am5 from '@amcharts/amcharts5';
import * as am5xy from '@amcharts/amcharts5/xy';
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';

@Component({
  selector: 'app-chart-bar',
  templateUrl: './chart-bar.component.html',
  styleUrls: ['./chart-bar.component.scss']
})
export class ChartBarComponent implements OnInit, OnChanges, OnDestroy {
  @Input() chartBarData: ChartBar[] = [];
  private root!: am5.Root;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['chartBarData'] && this.chartBarData.length > 0) {
      this.initChart();
    }
  }

  initChart() {
    if (this.root) { this.root.dispose(); }

    const root = am5.Root.new('barChartDiv');
    root.setThemes([am5themes_Animated.new(root)]);

    const chart = root.container.children.push(
      am5xy.XYChart.new(root, { panX: false, panY: false, wheelX: 'none', wheelY: 'none' })
    );
    
    const xRenderer = am5xy.AxisRendererX.new(root, { minGridDistance: 30 });
    xRenderer.labels.template.set('forceHidden', true);
    xRenderer.grid.template.set('forceHidden', true);
    xRenderer.setAll({
      strokeOpacity: 1,
      strokeWidth: 1,
      stroke: am5.color(0xE0E0E0)
    });

    const xAxis = chart.xAxes.push(
      am5xy.CategoryAxis.new(root, {
        categoryField: 'name',
        renderer: xRenderer
      })
    );
    xAxis.data.setAll(this.chartBarData);
    
    const yRenderer = am5xy.AxisRendererY.new(root, {});
    yRenderer.labels.template.set('forceHidden', true);
    yRenderer.grid.template.set('forceHidden', true);
    yRenderer.setAll({
      strokeOpacity: 1,
      strokeWidth: 1,
      stroke: am5.color(0xE0E0E0)
    });

    const yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, { renderer: yRenderer }));

    const series = chart.series.push(
      am5xy.ColumnSeries.new(root, {
        name: 'Metrics',
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: 'value',
        categoryXField: 'name'
      })
    );
    
    series.columns.template.setAll({
      strokeOpacity: 0
    });
    
    series.columns.template.adapters.add('fill', (fill, target) => {
      const grayShades = [
        am5.color(0x9E9E9E),
        am5.color(0x949494),
        am5.color(0xA8A8A8),
        am5.color(0x8E8E8E),
        am5.color(0xB2B2B2),
      ];
      const index = series.columns.indexOf(target);
      return grayShades[index % grayShades.length];
    });

    series.data.setAll(this.chartBarData);
    series.appear(1000);
    chart.appear(1000, 100);
    this.root = root;
  }

  ngOnDestroy(): void {
    if (this.root) { this.root.dispose(); }
  }
}