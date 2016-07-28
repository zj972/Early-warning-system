// 基于准备好的dom，初始化echarts图表
var myChart = echarts.init(document.getElementById('main'));

var option = {
    tooltip: {
        trigger: 'item',
        formatter: function(params) {
            var date = new Date(params.value[0]);
            data = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() + ' ' + date.getHours() + ':' + date.getMinutes();
            return data + '<br/>' + params.value[1];
        }
    },
    //时间轴
    dataZoom: {
        show: true,
        start: 90,
        end: 100
    },
    //折线显示隐藏控制
    legend: {
        orient: 'vertical',
        x: 'left',
        y: 'center',
        data: [{ name: 'series1' }, { name: 'series2' }]
    },
    //图表位置调整
    grid: {
        x: 120,
        y2: 80
    },
    xAxis: [{
        type: 'time',
        //横坐标显示的值得个数
        splitNumber: 10
    }],
    yAxis: [{
        type: 'value',
        //纵坐标显示的值得个数
        splitNumber: 10
    }],
    //数据
    series: [{
        name: 'series1',
        type: 'line',
        showAllSymbol: true,
        symbolSize: function(value) {
            return 2;
        },
        markpoint: {
            symbol: 'emptyCircle',
            symbolSize: function(v) {
                return 10 + v / 10
            },
            effect: {
                show: true,
                shadowBlur: 0
            },
            itemStyle: {
                normal: {
                    label: { show: false }
                },
                emphasis: {
                    label: { position: 'top' }
                }
            },
            data: [
                { name: 'test', value: 100, xAxis: new Date(2014, 9, 14, 0, 0), yAxis: 2100 }
            ]
        },
        data: (
            function() {
                var d = [];
                var len = 0;
                var now = new Date();
                var value;
                while (len++ < 200) {
                    d.push([
                        new Date(2014, 9, 1, 0, len * 100),
                        (Math.random() * 200 + 2000).toFixed(2) - 0
                    ]);
                }
                return d;
            }
        )()
    }, {
        name: 'series2',
        type: 'line',
        showAllSymbol: true,
        symbolSize: function(value) {
            return 2;
        },
        data: (
            function() {
                var d = [];
                var len = 0;
                var now = new Date();
                var value;
                while (len++ < 200) {
                    d.push([
                        new Date(2014, 9, 1, 0, len * 100),
                        (Math.random() * 200 + 2000).toFixed(2) - 0
                    ]);
                }
                return d;
            }
        )()
    }],
    //工具箱
    // toolbox: {
    //     show : true,
    //     feature : {
    //         mark : {show: true},
    //         dataView : {show: true, readOnly: false},
    //         restore : {show: true},
    //         saveAsImage : {show: true}
    //     }
    // },

    //背景颜色，默认透明
    // backgroundColor: '#808080',
    backgroundColor: '#f2f3f5',
    //表标题
    // title : {
    //        text : '时间坐标折线图',
    //        subtext : 'dataZoom支持'
    //    },
    //鼠标hover显示效果(详细数据显示)
};

// 为echarts对象加载数据 
myChart.setOption(option);
