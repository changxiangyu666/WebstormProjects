/**
 * Created by MrsChangXY on 2020/3/15.
 */
//�����йط�ҳ�Ĳ���
var pageSize;//ÿҳ��ʾ�ļ�¼��
var countPage;//��ҳ��
var countRecord;//�ܼ�¼��
var nowPage=1;//��ǰҳ
var startIndex;//ÿҳ��ʼ�ļ�¼��
var endIndex;//ÿҳ�����ļ�¼��
var $pageInfo;
var $showUsers;
//dom������� ��������������
$(document).ready(function() {

    //��ҳ����
    pageSize=$("#pagesize").val();//��ȡĬ�ϵ�pageSize��ֵ
    $pageInfo=$("#showPageInfo");
    $showUsers=$("#showUsers");
    // ��ȡȫѡinputɾ����dom����
    var qxDom = $("#qx")[0];
    // ��checkbox����Ϊû��ѡ�е�״̬
    qxDom.checked = false;

    // ��table����
    $("#users").css("display", "none");
    // ����id��ȡ��ӵ�input��jquery����
    var $name = $("#name");
    var $sex = $("input[type='radio']:checked");
    var $age = $("#age");

    /*----------------��������Ӱ�ť���¼�-------------------*/
    // ע�ᰴť�¼�
    $("#addUser").click(function() {
        // ��ȡtable��display��ʽ��ֵ
        var val = $("#users").css("display");
        // �ж��Ƿ�����
        if ("none" == val) {
            // ��ʾ
            $("#users").show();
        }
        // ��ȡnameֵ
        var name = $name.val();
        // ��ȡsex
        var sex = $sex.val();
        // ��ȡage
        var age = $age.val();

        // ����tr
        var $tr = $("<tr></tr>");
        // ����td
        var $td1 = $("<td></td>");
        // ����input
        var $input = $("<input type='checkbox'>");
        $td1.append($input);

        // ����td ���� ���name�ı��ڵ�
        var $td2 = $("<td></td>").append(name);
        // ����td ���� ��sex ��Ӧ���ı���ӵ�td��
        var $td3 = $("<td></td>").append(sex);
        var $td4 = $("<td></td>").append(age);

        // ������ť����Ϊ��ע���¼�
        var $deleteBtn = $("<input type='button' value='ɾ��'>");

        // ����ťע���¼�
        $deleteBtn.click(function() {
            $(this).parent().parent().remove();
        });

        var $td5 = $("<td></td>");
        // ����
        // $td5.append($deleteBtn);
        // �Ѵ����İ�ť��ӵ�td5��
        $deleteBtn.appendTo($td5);

        // ע��ɱ༭�¼�
        $td2.dblclick(clickTd);
        $td3.dblclick(clickTd);
        $td4.dblclick(clickTd);

        // �������ʽ����
        $tr.append($td1).append($td2).append($td3).append($td4).append($td5);
        // ��tbody�����tr
        $showUsers.append($tr);

        //��ӳɹ�֮�� ���з�ҳ����
        countRecord=$("#showUsers tr").size();//��ȡ�ܼ�¼��

        pageInfo();
    });
    /*----------------��������Ӱ�ť���¼�-------------------*/

    /*----------------������ȫѡ���¼�����-------------------*/
    // ȫѡ�ͷ�ѡ�Ĳ���
    $("#qx").click(function() {
        if (this.checked) {
            $("td>input[type='checkbox']").each(function() {
                this.checked = true;
            });
        } else {
            $("td>input[type='checkbox']").each(function() {
                this.checked = false;
            });
        }
    })
    /*----------------������ȫѡ���¼�����-------------------*/

    /*----------------����������ɾ�����¼�����-------------------*/
    // ɾ���Ĳ���
    $("#deleteCheckedBtn").click(function() {
        $("td>input[type='checkbox']").each(function() {
            if (this.checked) {
                // ɾ����ѡ�е�tr��
                $(this).parent().parent().remove();
            }
            // ���ҽ���ѡ������Ϊûѡ�е�״̬
            qxDom.checked = false;
        });
    });
    /*----------------����������ɾ�����¼�����-------------------*/

    //ע��ı���¼�
    $("#pagesize").change(function(){
        pageSize=$(this).val();
        pageInfo();
    });


    var $firstBtn=$("#firstBtn");
    var $backBtn=$("#backBtn");
    var $nextBtn=$("#nextBtn");
    var $lastBtn=$("#lastBtn");

    $firstBtn.click(pageInfo);
    $backBtn.click(pageInfo);
    $nextBtn.click(pageInfo);
    $lastBtn.click(pageInfo);
});
/*----------------�����Ǳ��ɱ༭���¼�����-------------------*/
// ע��ı༭�¼�����
var clickTd = function() {
    // ��ȡ��ǰ�����к��ӽڵ�Ϊinput�ļ��϶��� �ж�������϶���ĳ����Ƿ����0
    if ($(this).children("input").length > 0) {
        // ���س���
        return false;
    } else {
        // ��ȡ�����td��ֵ
        var value = $(this).text();
        // td���
        $(this).empty();
        // ����input�����
        var $cinput = $("<input type='text' value='" + value + "'>");

        // ʧȥ������¼�
        $cinput.blur(blurInput);

        // ��ӵ�td��
        $(this).append($cinput);
    }
}

// ʧȥ���㴥���ĺ���
var blurInput = function() {
    // ��ȡֵ
    var value = $(this).val();
    // ��td���������ı�
    $(this).parent().text(value);
}
/*----------------�����Ǳ��ɱ༭���¼�����-------------------*/
var pageInfo=function(){


    //��ȡ�ܼ�¼��
    countRecord=$("#showUsers tr").size();
    //������ҳ��
    countPage=Math.ceil(countRecord/pageSize);


    //�����ť���ж�
    if(this.nodeType==1){
        //���Ȼ�ȡ�����İ�ť��id��ֵ
        var idValue=$(this).attr("id");
        //�ж��Ƿ�����ҳ
        if("firstBtn"==idValue){
            nowPage=1;
            //�ж��Ƿ�����һҳ
        }else if("backBtn"==idValue){
            if(nowPage>1){
                nowPage--;
            }
            //�ж��Ƿ�����һҳ
        }else if("nextBtn"==idValue){
            if(nowPage<countPage){
                nowPage++;
            }
            //�ж��Ƿ���ĩҳ
        }else if("lastBtn"==idValue){
            nowPage=countPage;
        }
    }

    startIndex=(nowPage-1)*pageSize+1;//��ȡÿҳ��ʼ��¼��
    endIndex=nowPage*pageSize;//��ȡÿҳ������¼��
    //��������ļ�¼�����ܼ�¼��
    if(endIndex>=countRecord){
        //�ý����ļ�¼�� �����ܼ�¼��
        endIndex=countRecord;
    }
    //��������ļ�¼��С����ʾ�ļ�¼��
    if(countRecord<=pageSize){
        endIndex=countRecord;
    }
    //��ʾ����
    $("#showUsers tr:gt("+(startIndex-1)+")").show();
    $("#showUsers tr:lt("+(endIndex-1)+")").show();

    //���ز���
    //�������س���ҳ��֮�������
    $("#showUsers tr:lt("+(startIndex-1)+")").css("display","none");
    $("#showUsers tr:gt("+(endIndex-1)+")").css("display","none");
    $pageInfo.html("��ǰ��"+startIndex+"��¼��"+endIndex+"��¼������"+countRecord+"��¼��ǰ��"+nowPage+",��"+countPage+"ҳ");
}