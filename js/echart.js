function echart(msg) {
    // 基于准备好的dom，初始化echarts图表
    var myChart = echarts.init(document.getElementById('main'));
    var option = {
        tooltip: {
            trigger: 'item',
            formatter: function(params) {
                var date = params.value[0];
                data = params.seriesName + '<br/>' + date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate() + ' ' + date.getHours() + ':' + date.getMinutes();
                return data + '<br/>' + params.value[1] + '元';
            }
        },
        //时间轴
        dataZoom: {
            show: true,
            start: 0,
            end: 100
        },
        //折线显示隐藏控制
        legend: {
            orient: 'vertical',
            x: 'left',
            y: 'center',
            data: (function() {
                var legend = [];
                msg.data.forEach(function(p) {
                    legend.push({ name: p.platform });
                })
                return legend;
            })()
        },
        //图表位置调整
        grid: {
            x: 150,
            y2: 80,
        },
        xAxis: [{
            type: 'time',
            //横坐标显示的值得个数
            splitNumber: 10
        }],
        yAxis: [{
            type: 'value',
            //纵坐标显示的值得个数
            splitNumber: 6,
            scale: true
        }],
        //数据
        series: (function() {
            var rt = [];
            msg.data.forEach(function(data) {
                var list = {
                    name: data.platform,
                    type: 'line',
                    showAllSymbol: true,
                    symbolSize: function(value) {
                        return 2;
                    },
                    data: (function() {
                        var d = [];
                        data.value.forEach(function(line) {
                            d.push([
                                new Date(line.year, line.month, line.day, line.hour, line.minute),
                                line.price
                            ]);
                        });
                        return d;
                    })()
                };
                rt.push(list);
            });
            return rt;
        })(),
        backgroundColor: '#f2f3f5',
    };

    // 为echarts对象加载数据 
    myChart.setOption(option);
}
