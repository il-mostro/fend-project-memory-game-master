/*
 * ��Ϸ��ʼ ����
 */

//��������
var pts = 0;//����


//����Ϊ���Զ�������
var TypeNum = 8;//��Ƭ����������Ĭ��8�������趨ʱ������С��8��
var TimeLimit = 0;//����ʱ��0Ϊ��ʼֵ����ʱ���趨����ʱ��gameset alert��
var MissTimes = 0;//����ʧ����� ��0Ϊ��ʼֵ����ʱ���趨gameset alert ���ɫ��

var TypeList = [];//�뿨Ƭ����������������Ƭ��������

$(function () {
   
    $(".card").click(function () {
        $(this).addClass(TypeList[$(".card").index(this)]);
    })
})