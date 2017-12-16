/*
 * 游戏开始 设置
 */

//基本设置
var pts = 0;//分数


//以下为可自定义内容
var TypeNum = 8;//卡片种类数量（默认8，但是设定时不允许小于8）
var TimeLimit = 0;//倒计时（0为初始值，此时不设定倒计时与gameset alert）
var AllowMissTimes = 0;//允许失误次数 （0为初始值，此时不设定gameset alert 与变色）

var TypeList = [];//与卡片种类数量伴生。卡片种类序列
var CardsArray = [];//卡片点击序列

$(function () {
    initCard();
    initOnclick();
})

//重新准备Cards
function initCard() {
    TypeList = getArrayItems(TypeNum);
    CardsArray = TypeList.concat(TypeList.reverse());
    CardsArray = shuffle(CardsArray);

    var cardsHtml = '';

    for (let i = 0; i < CardsArray.length; i++) {
        cardsHtml += '<li class="card"><i class="fa"></i></li>';
    }
    $('ul.deck').html(cardsHtml);

}

function initOnclick() {




    $('#AcceptSetting').click(function () {
    })

    $(".card").click(function () {
        debugger;
        if ($(this).hasClass('match') || $(this).hasClass('show')) return;//已匹配,已翻面不再作反应
        let classname = CardsArray[$(".card").index(this)]//从序列中取出class名
        $(this).addClass('open').addClass('show');
        $(this).find('i').addClass(classname);

    })


}


