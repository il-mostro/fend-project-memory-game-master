/*
 * 游戏开始 设置
 */

//基本设置
var pts = 0;//分数

var step = 0;//步数

//以下为可自定义内容
var TypeNum = 8;//卡片种类数量（默认8，但是设定时不允许小于8）
var TimeLimit = 0;//倒计时（0为初始值，此时不设定倒计时与gameset alert）
var AllowMissTimes = 0;//允许失误次数 （0为初始值，此时不设定gameset alert 与变色）

var TypeList = [];//与卡片种类数量伴生。卡片种类序列
var CardsArray = [];//卡片点击序列

var OpenCardCache = '';
var clicklock = false;

$(function () {
    $('#AcceptSetting').click(function () {
        //设置初始设定值
        initCards();
        //倒计时开始
    })
    $('.restart').click(function () {
        //设置初始设定值
        initCards();
        //倒计时开始
    });
    initCards();
})

//重新准备Cards
function initCards() {
    OpenCardCache = '';
    step = 0;
    $(".moves").html(step);
    clicklock = false;

    TypeList = getArrayItems(TypeNum);
    CardsArray = TypeList.concat(TypeList.reverse());
    CardsArray = shuffle(CardsArray);

    var cardsHtml = '';

    for (let i = 0; i < CardsArray.length; i++) {
        cardsHtml += '<li class="card"><i class="fa"></i></li>';
    }
    $('ul.deck').html(cardsHtml);

    initCardsOnclick();
}

function initCardsOnclick() {    
    $(".card").click(function () {

        //clicklock 为防止快速点击造成bug加的锁
        if (clicklock) return;
        clicklock = true;

        step += 1;
        $(".moves").html(step);
        //增加计数

        if ($(this).hasClass('match') || $(this).hasClass('show')) return;//已匹配,已翻面不再作反应
        let classname = CardsArray[$(".card").index(this)]//从序列中取出class名
        $(this).find('i').addClass(classname);

        if (OpenCardCache == '') {
            OpenCardCache = classname;
            $(this).addClass('open').addClass('show');
            clicklock = false;
        } else {
            if (OpenCardCache == classname) {
                $(this).addClass('match');
                $('.open.show').removeClass('open').removeClass('show').addClass('match');
                TypeList.splice(jQuery.inArray(classname, TypeList), 1);

                if (TypeList.length == 0) {
                    alert("你赢了！");
                    //倒计时停止
                    //计算分数（步数与时间？）

                    //存储排行榜
                    //显示排行榜

                    //返回初始状态
                }
                clicklock = false;
            }
            else {
                //判断失误多少次,如果超过则GameOver 并中断
                
                $(this).addClass('open').addClass('show');

                setTimeout("$('.open.show').removeClass('open').removeClass('show');clicklock = false;",1500);

            }
            OpenCardCache = '';
        }
    })


}


