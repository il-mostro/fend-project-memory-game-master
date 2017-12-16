/*
 * ��Ϸ��ʼ ����
 */

//��������
var pts = 0;//����

var step = 0;//����

//����Ϊ���Զ�������
var TypeNum = 8;//��Ƭ����������Ĭ��8�������趨ʱ������С��8��
var TimeLimit = 0;//����ʱ��0Ϊ��ʼֵ����ʱ���趨����ʱ��gameset alert��
var AllowMissTimes = 0;//����ʧ����� ��0Ϊ��ʼֵ����ʱ���趨gameset alert ���ɫ��

var TypeList = [];//�뿨Ƭ����������������Ƭ��������
var CardsArray = [];//��Ƭ�������

var OpenCardCache = '';
var clicklock = false;

$(function () {
    $('#AcceptSetting').click(function () {
        //���ó�ʼ�趨ֵ
        initCards();
        //����ʱ��ʼ
    })
    $('.restart').click(function () {
        //���ó�ʼ�趨ֵ
        initCards();
        //����ʱ��ʼ
    });
    initCards();
})

//����׼��Cards
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

        //clicklock Ϊ��ֹ���ٵ�����bug�ӵ���
        if (clicklock) return;
        clicklock = true;

        step += 1;
        $(".moves").html(step);
        //���Ӽ���

        if ($(this).hasClass('match') || $(this).hasClass('show')) return;//��ƥ��,�ѷ��治������Ӧ
        let classname = CardsArray[$(".card").index(this)]//��������ȡ��class��
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
                    alert("��Ӯ�ˣ�");
                    //����ʱֹͣ
                    //���������������ʱ�䣿��

                    //�洢���а�
                    //��ʾ���а�

                    //���س�ʼ״̬
                }
                clicklock = false;
            }
            else {
                //�ж�ʧ����ٴ�,���������GameOver ���ж�
                
                $(this).addClass('open').addClass('show');

                setTimeout("$('.open.show').removeClass('open').removeClass('show');clicklock = false;",1500);

            }
            OpenCardCache = '';
        }
    })


}


