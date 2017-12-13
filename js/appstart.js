/*
 * 游戏开始 设置
 */

//基本设置
var pts = 0;//分数


//以下为可自定义内容
var TypeNum = 8;//卡片种类数量（默认8，但是设定时不允许小于8）
var TimeLimit = 0;//倒计时（0为初始值，此时不设定倒计时与gameset alert）
var MissTimes = 0;//允许失误次数 （0为初始值，此时不设定gameset alert 与变色）

var TypeList = [];//与卡片种类数量伴生。卡片种类序列

$(function () {
   
    $(".card").click(function () {
        $(this).addClass(TypeList[$(".card").index(this)]);
    })
})