/*
 * ��Ϸ��ʼ ����
 */

//��������
var pts = 0;//����


//����Ϊ���Զ�������
var TypeNum = 8;//��Ƭ����������Ĭ��8�������趨ʱ������С��8��
var TimeLimit = 0;//����ʱ��0Ϊ��ʼֵ����ʱ���趨����ʱ��gameset alert��
var AllowMissTimes = 0;//����ʧ����� ��0Ϊ��ʼֵ����ʱ���趨gameset alert ���ɫ��

var TypeList = [];//�뿨Ƭ����������������Ƭ��������
var CardsArray = [];//��Ƭ�������

$(function () {
    initCard();
    initOnclick();
})

//����׼��Cards
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
        if ($(this).hasClass('match') || $(this).hasClass('show')) return;//��ƥ��,�ѷ��治������Ӧ
        let classname = CardsArray[$(".card").index(this)]//��������ȡ��class��
        $(this).addClass('open').addClass('show');
        $(this).find('i').addClass(classname);

    })


}


