var chart;
$(document).ready(function() {
	var chartData = {
		chart: {
			renderTo: 'container',
			defaultSeriesType: 'line',
			marginLeft: 130,
			marginBottom: 25
		},
		credits: {
			//去水印
        	enabled:false
        },
        exporting: {
        	//去下载和打印按钮
            enabled:false
		},
		title: {
			text: '标题',
			x: -20 //center
		},
		subtitle: {
			text: '小标题',
			x: -20
		},
		xAxis: {
			//横坐标
			lineWidth: 1,
			lineColor: "#1a96ef",
			tickWidth: 1,
			labels: {
				y: 20, //x轴刻度往下移动20px
				style: {
					color: '#19a0f5',//颜色
					fontSize:'14px'  //字体
				}
			},
			categories: ['One','Two','three']
		},
		yAxis: {
			title: {
				text: '纵坐标'
			},
			plotLines: [
				{
					//0值线，即横坐标
					value: 0,
					width: 1,
					color: '#808080'
				}
			]
		},
		tooltip: {
			formatter: function() {
				return '<b>'+ this.series.name + '</b><br/>' + this.x + ': ' + this.y + '元';
			}
		},
		legend: {
			layout: 'vertical',
			align: 'left',
			verticalAlign: 'top',
			x: -12,
			y: 100,
			borderWidth: 0
		},
		series: 
		[
			{
				name: 'Tokyo',
				data: [2000,2000,2000,2000,2020,2000,2000,2000,2000,2000,2000,2000,2010,2000,2000,2000]
			},{
				name: 'lala',
				data: [2500,2500,2650,2300,2500,2510,2500,2500,2400,2500,2500,2350,2500,2500,2600,2500]
			}
		]				
	}
	chart = new Highcharts.Chart(chartData);	
});
				