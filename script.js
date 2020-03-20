// Data Sets
var datasetOne = [420, 932, 901, 834, 720, 932, 701, 934, 820, 732, 901,];
var datasetTwo = [620, 632, 601, 634, 720, 832, 701, 634, 620, 632, 601, ];
var datasetThree = [420, 432, 501, 534, 520, 432, 401, 434, 650, 532, 401, ];
var datasetFour = [520, 532, 301, 334, 320, 532, 501, 534, 550, 332, 301, ];
var datasetFive = [240, 540, 345, 304, 546, 665, 345, 645, 345, 334, 443, ];
var datasetSix = [650, 667, 560, 580,559, 560, 660, 760, 750, 500, 540, ];

// Background Colors
var bgColorDark = '#000000';
var bgColorMid = '#1F1F1F';
var bgColorLight = '#FFFFFF';

// Data Colors
var dataColorOne = '#71B9F4';
var dataColorTwo = '#FF9933';
var dataColorThree = '#D82661';
var dataColorFour = '#C3E481';
var dataColorFive = '#9545A1';
var dataColorSix = '#F68EC2';



var option = {
    //Choose your Background Color : Dark, Mid, or Light//
    backgroundColor: '#FFFFFF',
    color: [dataColorOne, dataColorTwo, dataColorThree, dataColorFour, dataColorFive, dataColorSix ],
    xAxis: {
        axisTick: {
          lineStyle: {
            width: 1,
            color: '#A6A6A6',
          },
        },
        axisLabel: {
          color: '#666666',
          fontFamily: 'IBM Plex Sans',
          fontSize: '12',
          fontWeight: '400',
        },
        splitLine: {
            show: false,
            lineStyle: {
                color: '#F0F0F0'
            }
        },
        axisLine: {
          lineStyle: {
            color: '#A6A6A6',
          },
        },
        type: 'category',
        boundaryGap: false,
        data: ['00:05', '00:10', '00:15', '00:20','00:25', '00:30', '00:35', '00:40', '00:45', "00:50", '00:55'],
    },
    yAxis: {
        axisLabel: {
          show: true,
          color: '#666666',
          fontFamily: 'IBM Plex Sans',
          fontSize: '12',
          fontWeight: '400',
        },
        splitLine: {
            lineStyle: {
                color: '#F0F0F0'
            }
        },
        axisLine: {
          lineStyle: {
            color: '#A6A6A6',
          },
        },
        type: 'value'
    },
    tooltip:{
      trigger: 'axis',
    },
    grid: {
      right: 16,
      left:56,
      top:16,
      bottom:32,
      show: 'false',
      borderColor: '#F0F0F0',
    },

    series: [
      {
        areaStyle: {opacity: 0,},
        name: "ENG 1: Oil Quantity",
        data: datasetOne,
        type: 'line',
        showSymbol: false,
        markLine: {
                silent: true,
                data: [{
                    yAxis: 150,
                    lineStyle:{
                      color:'#F2A900',
                    },
                }, {
                    yAxis: 500,
                    lineStyle:{
                      color:'#E60029',
                    },
                }],
                symbol:'none',
                label:{
                  show:false,
                },
            }
      },
     ],
};



var option2 = {
    //Choose your Background Color : Dark, Mid, or Light//
    backgroundColor: '#FFFFFF',
    color: [dataColorOne, dataColorTwo, dataColorThree, dataColorFour, dataColorFive, dataColorSix ],
    xAxis: {
        axisTick: {
          lineStyle: {
            width: 1,
            color: '#A6A6A6',
          },
        },
        axisLabel: {
          color: '#666666',
          fontFamily: 'IBM Plex Sans',
          fontSize: '12',
          fontWeight: '400',
        },
        splitLine: {
            show: false,
            lineStyle: {
                color: '#F0F0F0'
            }
        },
        axisLine: {
          lineStyle: {
            color: '#A6A6A6',
          },
        },
        type: 'category',
        boundaryGap: false,
        data: ['00:05', '00:10', '00:15', '00:20','00:25', '00:30', '00:35', '00:40', '00:45', "00:50", '00:55'],
    },
    yAxis: {
        axisLabel: {
          show: true,
          color: '#666666',
          fontFamily: 'IBM Plex Sans',
          fontSize: '12',
          fontWeight: '400',
        },
        splitLine: {
            lineStyle: {
                color: '#F0F0F0'
            }
        },
        axisLine: {
          lineStyle: {
            color: '#A6A6A6',
          },
        },
        type: 'value'
    },
    tooltip:{
      trigger: 'axis',
    },
    grid: {
      right: 16,
      left:56,
      top:16,
      bottom:32,
      show: 'false',
      borderColor: '#F0F0F0',
    },

    series: [
      {
        areaStyle: {opacity: 0,},
        name: "ENG 2: Oil Quantity",
        data: datasetTwo,
        type: 'line',
        showSymbol: false,
        markLine: {
                silent: true,
                data: [{
                    yAxis: 150,
                    lineStyle:{
                      color:'#F2A900',
                    },
                }, {
                    yAxis: 500,
                    lineStyle:{
                      color:'#E60029',
                    },
                }],
                symbol:'none',
                label:{
                  show:false,
                },
            }
      },
     ],
};



var option3 = {
    //Choose your Background Color : Dark, Mid, or Light//
    backgroundColor: '#FFFFFF',
    color: [dataColorOne, dataColorTwo, dataColorThree, dataColorFour, dataColorFive, dataColorSix ],
    xAxis: {
        axisTick: {
          lineStyle: {
            width: 1,
            color: '#A6A6A6',
          },
        },
        axisLabel: {
          color: '#666666',
          fontFamily: 'IBM Plex Sans',
          fontSize: '12',
          fontWeight: '400',
        },
        splitLine: {
            show: false,
            lineStyle: {
                color: '#F0F0F0'
            }
        },
        axisLine: {
          lineStyle: {
            color: '#A6A6A6',
          },
        },
        type: 'category',
        boundaryGap: false,
        data: ['00:05', '00:10', '00:15', '00:20','00:25', '00:30', '00:35', '00:40', '00:45', "00:50", '00:55'],
    },
    yAxis: {
        axisLabel: {
          show: true,
          color: '#666666',
          fontFamily: 'IBM Plex Sans',
          fontSize: '12',
          fontWeight: '400',
        },
        splitLine: {
            lineStyle: {
                color: '#F0F0F0'
            }
        },
        axisLine: {
          lineStyle: {
            color: '#A6A6A6',
          },
        },
        type: 'value'
    },
    tooltip:{
      trigger: 'axis',
    },
    grid: {
      right: 16,
      left:56,
      top:16,
      bottom:32,
      show: 'false',
      borderColor: '#F0F0F0',
    },

    series: [
      {
        areaStyle: {opacity: 0,},
        name: "ENG 1: EGT",
        data: datasetThree,
        type: 'line',
        showSymbol: false,
        markLine: {
                silent: true,
                data: [{
                    yAxis: 150,
                    lineStyle:{
                      color:'#F2A900',
                    },
                }, {
                    yAxis: 500,
                    lineStyle:{
                      color:'#E60029',
                    },
                }],
                symbol:'none',
                label:{
                  show:false,
                },
            }
      },
     ],
};




var option4 = {
    //Choose your Background Color : Dark, Mid, or Light//
    backgroundColor: '#FFFFFF',
    color: [dataColorOne, dataColorTwo, dataColorThree, dataColorFour, dataColorFive, dataColorSix ],
    xAxis: {
        axisTick: {
          lineStyle: {
            width: 1,
            color: '#A6A6A6',
          },
        },
        axisLabel: {
          color: '#666666',
          fontFamily: 'IBM Plex Sans',
          fontSize: '12',
          fontWeight: '400',
        },
        splitLine: {
            show: false,
            lineStyle: {
                color: '#F0F0F0'
            }
        },
        axisLine: {
          lineStyle: {
            color: '#A6A6A6',
          },
        },
        type: 'category',
        boundaryGap: false,
        data: ['00:05', '00:10', '00:15', '00:20','00:25', '00:30', '00:35', '00:40', '00:45', "00:50", '00:55'],
    },
    yAxis: {
        axisLabel: {
          show: true,
          color: '#666666',
          fontFamily: 'IBM Plex Sans',
          fontSize: '12',
          fontWeight: '400',
        },
        splitLine: {
            lineStyle: {
                color: '#F0F0F0'
            }
        },
        axisLine: {
          lineStyle: {
            color: '#A6A6A6',
          },
        },
        type: 'value'
    },
    tooltip:{
      trigger: 'axis',
    },
    grid: {
      right: 16,
      left:56,
      top:16,
      bottom:32,
      show: 'false',
      borderColor: '#F0F0F0',
    },

    series: [
      {
        areaStyle: {opacity: 0,},
        name: "ENG 2: EGT",
        data: datasetFour,
        type: 'line',
        showSymbol: false,
        markLine: {
                silent: true,
                data: [{
                    yAxis: 150,
                    lineStyle:{
                      color:'#F2A900',
                    },
                }, {
                    yAxis: 500,
                    lineStyle:{
                      color:'#E60029',
                    },
                }],
                symbol:'none',
                label:{
                  show:false,
                },
            }
      },
     ],
};



var option5 = {
    //Choose your Background Color : Dark, Mid, or Light//
    backgroundColor: '#FFFFFF',
    color: [dataColorOne, dataColorTwo, dataColorThree, dataColorFour, dataColorFive, dataColorSix ],
    xAxis: {
        axisTick: {
          lineStyle: {
            width: 1,
            color: '#A6A6A6',
          },
        },
        axisLabel: {
          color: '#666666',
          fontFamily: 'IBM Plex Sans',
          fontSize: '12',
          fontWeight: '400',
        },
        splitLine: {
            show: false,
            lineStyle: {
                color: '#F0F0F0'
            }
        },
        axisLine: {
          lineStyle: {
            color: '#A6A6A6',
          },
        },
        type: 'category',
        boundaryGap: false,
        data: ['00:05', '00:10', '00:15', '00:20','00:25', '00:30', '00:35', '00:40', '00:45', "00:50", '00:55'],
    },
    yAxis: {
        axisLabel: {
          show: true,
          color: '#666666',
          fontFamily: 'IBM Plex Sans',
          fontSize: '12',
          fontWeight: '400',
        },
        splitLine: {
            lineStyle: {
                color: '#F0F0F0'
            }
        },
        axisLine: {
          lineStyle: {
            color: '#A6A6A6',
          },
        },
        type: 'value'
    },
    tooltip:{
      trigger: 'axis',
    },
    grid: {
      right: 16,
      left:56,
      top:16,
      bottom:32,
      show: 'false',
      borderColor: '#F0F0F0',
    },

    series: [
      {
        areaStyle: {opacity: 0,},
        name: "Normal Acceleration",
        data: datasetFive,
        type: 'line',
        showSymbol: false,
        markLine: {
                silent: true,
                data: [{
                    yAxis: 150,
                    lineStyle:{
                      color:'#F2A900',
                    },
                }, {
                    yAxis: 500,
                    lineStyle:{
                      color:'#E60029',
                    },
                }],
                symbol:'none',
                label:{
                  show:false,
                },
            }
      },
     ],
};



var option6 = {
    //Choose your Background Color : Dark, Mid, or Light//
    backgroundColor: '#FFFFFF',
    color: [dataColorOne, dataColorTwo, dataColorThree, dataColorFour, dataColorFive, dataColorSix ],
    xAxis: {
        axisTick: {
          lineStyle: {
            width: 1,
            color: '#A6A6A6',
          },
        },
        axisLabel: {
          color: '#666666',
          fontFamily: 'IBM Plex Sans',
          fontSize: '12',
          fontWeight: '400',
        },
        splitLine: {
            show: false,
            lineStyle: {
                color: '#F0F0F0'
            }
        },
        axisLine: {
          lineStyle: {
            color: '#A6A6A6',
          },
        },
        type: 'category',
        boundaryGap: false,
        data: ['00:05', '00:10', '00:15', '00:20','00:25', '00:30', '00:35', '00:40', '00:45', "00:50", '00:55'],
    },
    yAxis: {
        axisLabel: {
          show: true,
          color: '#666666',
          fontFamily: 'IBM Plex Sans',
          fontSize: '12',
          fontWeight: '400',
        },
        splitLine: {
            lineStyle: {
                color: '#F0F0F0'
            }
        },
        axisLine: {
          lineStyle: {
            color: '#A6A6A6',
          },
        },
        type: 'value'
    },
    tooltip:{
      trigger: 'axis',
      backgroundColor: 'rgba(232, 232, 232, .9)',
      textStyle:{
        color:'#000000',
      }
    },
    grid: {
      right: 16,
      left:56,
      top:16,
      bottom:32,
      show: 'false',
      borderColor: '#F0F0F0',
    },


    series: [
      {
        areaStyle: {opacity: 0,},
        name: "Lateral Acceleration",
        data: datasetSix,
        type: 'line',
        showSymbol: false,
        markLine: {
                silent: true,
                data: [{
                    yAxis: 150,
                    lineStyle:{
                      color:'#F2A900',
                    },
                }, {
                    yAxis: 500,
                    lineStyle:{
                      color:'#E60029',
                    },
                }],
                symbol:'none',
                label:{
                  show:false,
                },
            }
      },

     ],

};



var chart1 = echarts.init(document.getElementById("main"));
chart1.setOption(option);
var chart2 = echarts.init(document.getElementById("main2"));
chart2.setOption(option2);
var chart3 = echarts.init(document.getElementById("main3"));
chart3.setOption(option3);
var chart4 = echarts.init(document.getElementById("main4"));
chart4.setOption(option4);
var chart5 = echarts.init(document.getElementById("main5"));
chart5.setOption(option5);
var chart6 = echarts.init(document.getElementById("main6"));
chart6.setOption(option6);

//echarts.connect([chart1, chart2, chart3, chart4, chart5, chart6]);

window.onresize = function() {
            $(".charts").each(function(){
                var id = $(this).attr('_echarts_instance_');
                window.echarts.getInstanceById(id).resize();
            });
        };
