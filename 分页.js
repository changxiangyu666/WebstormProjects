/**
 * Created by MrsChangXY on 2020/3/15.
 */
//定义有关分页的操作
var pageSize;//每页显示的记录数
var countPage;//总页数
var countRecord;//总记录数
var nowPage=1;//当前页
var startIndex;//每页开始的记录数
var endIndex;//每页结束的记录数
var $pageInfo;
var $showUsers;
//dom载入完毕 触发的匿名函数
$(document).ready(function() {

    //分页操作
    pageSize=$("#pagesize").val();//获取默认的pageSize的值
    $pageInfo=$("#showPageInfo");
    $showUsers=$("#showUsers");
    // 获取全选input删除的dom对象
    var qxDom = $("#qx")[0];
    // 把checkbox设置为没有选中的状态
    qxDom.checked = false;

    // 把table隐藏
    $("#users").css("display", "none");
    // 根据id获取添加的input的jquery对象
    var $name = $("#name");
    var $sex = $("input[type='radio']:checked");
    var $age = $("#age");

    /*----------------下面是添加按钮的事件-------------------*/
    // 注册按钮事件
    $("#addUser").click(function() {
        // 获取table中display样式的值
        var val = $("#users").css("display");
        // 判断是否隐藏
        if ("none" == val) {
            // 显示
            $("#users").show();
        }
        // 获取name值
        var name = $name.val();
        // 获取sex
        var sex = $sex.val();
        // 获取age
        var age = $age.val();

        // 创建tr
        var $tr = $("<tr></tr>");
        // 创建td
        var $td1 = $("<td></td>");
        // 创建input
        var $input = $("<input type='checkbox'>");
        $td1.append($input);

        // 创建td 并且 添加name文本节点
        var $td2 = $("<td></td>").append(name);
        // 创建td 并且 把sex 对应的文本添加到td中
        var $td3 = $("<td></td>").append(sex);
        var $td4 = $("<td></td>").append(age);

        // 创建按钮并且为其注册事件
        var $deleteBtn = $("<input type='button' value='删除'>");

        // 给按钮注册事件
        $deleteBtn.click(function() {
            $(this).parent().parent().remove();
        });

        var $td5 = $("<td></td>");
        // 或者
        // $td5.append($deleteBtn);
        // 把创建的按钮添加到td5中
        $deleteBtn.appendTo($td5);

        // 注册可编辑事件
        $td2.dblclick(clickTd);
        $td3.dblclick(clickTd);
        $td4.dblclick(clickTd);

        // 对象的链式操作
        $tr.append($td1).append($td2).append($td3).append($td4).append($td5);
        // 在tbody中添加tr
        $showUsers.append($tr);

        //添加成功之后 进行分页操作
        countRecord=$("#showUsers tr").size();//获取总记录数

        pageInfo();
    });
    /*----------------上面是添加按钮的事件-------------------*/

    /*----------------下面是全选的事件处理-------------------*/
    // 全选和反选的操作
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
    /*----------------上面是全选的事件处理-------------------*/

    /*----------------下面是批量删除的事件处理-------------------*/
    // 删除的操作
    $("#deleteCheckedBtn").click(function() {
        $("td>input[type='checkbox']").each(function() {
            if (this.checked) {
                // 删除所选中的tr行
                $(this).parent().parent().remove();
            }
            // 并且将复选框设置为没选中的状态
            qxDom.checked = false;
        });
    });
    /*----------------上面是批量删除的事件处理-------------------*/

    //注册改变的事件
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
/*----------------下面是表格可编辑的事件处理-------------------*/
// 注册的编辑事件处理
var clickTd = function() {
    // 获取当前对象中孩子节点为input的集合对象 判断这个集合对象的长度是否大于0
    if ($(this).children("input").length > 0) {
        // 返回程序
        return false;
    } else {
        // 获取点击的td的值
        var value = $(this).text();
        // td清空
        $(this).empty();
        // 创建input输入框
        var $cinput = $("<input type='text' value='" + value + "'>");

        // 失去焦点的事件
        $cinput.blur(blurInput);

        // 添加到td中
        $(this).append($cinput);
    }
}

// 失去焦点触发的函数
var blurInput = function() {
    // 获取值
    var value = $(this).val();
    // 给td重新设置文本
    $(this).parent().text(value);
}
/*----------------上面是表格可编辑的事件处理-------------------*/
var pageInfo=function(){


    //获取总记录数
    countRecord=$("#showUsers tr").size();
    //计算总页数
    countPage=Math.ceil(countRecord/pageSize);


    //点击按钮的判断
    if(this.nodeType==1){
        //首先获取你点击的按钮的id的值
        var idValue=$(this).attr("id");
        //判断是否是首页
        if("firstBtn"==idValue){
            nowPage=1;
            //判断是否是上一页
        }else if("backBtn"==idValue){
            if(nowPage>1){
                nowPage--;
            }
            //判断是否是下一页
        }else if("nextBtn"==idValue){
            if(nowPage<countPage){
                nowPage++;
            }
            //判断是否是末页
        }else if("lastBtn"==idValue){
            nowPage=countPage;
        }
    }

    startIndex=(nowPage-1)*pageSize+1;//获取每页开始记录数
    endIndex=nowPage*pageSize;//获取每页结束记录数
    //如果结束的记录大于总记录数
    if(endIndex>=countRecord){
        //让结束的记录数 等于总记录数
        endIndex=countRecord;
    }
    //如果结束的记录数小于显示的记录数
    if(countRecord<=pageSize){
        endIndex=countRecord;
    }
    //显示操作
    $("#showUsers tr:gt("+(startIndex-1)+")").show();
    $("#showUsers tr:lt("+(endIndex-1)+")").show();

    //隐藏操作
    //设置隐藏超出页数之外的数据
    $("#showUsers tr:lt("+(startIndex-1)+")").css("display","none");
    $("#showUsers tr:gt("+(endIndex-1)+")").css("display","none");
    $pageInfo.html("当前从"+startIndex+"记录到"+endIndex+"记录数，共"+countRecord+"记录当前是"+nowPage+",共"+countPage+"页");
}