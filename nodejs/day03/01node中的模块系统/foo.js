/**
 * Created by ������ on 2019/10/4.
 */
var foo='bar'
function add(x,y){
    return x+y;
}
//exports.add=add;
exports.str='hello'
//���һ��ģ����Ҫֱ�ӵ���ĳ����Ա�����ǹ��صķ�ʽ
module.exports=add;

//��node�У�ÿ��ģ���ڲ�����һ���Լ���module����
//��module�����У���һ����Ա�У�exportsҲ�Ƕ���
//�����Ҫ���⵼����Ա��ֻ��Ҫ�ѵ����ĳ�Ա���ص� module.exports ��

/*
var module={
    exports:{
        foo:'bar'
    }
}*/

//��ģ���л���һ�����
//var exports=module.exports
//��exports��module.exports���¸�ֵ��Ͽ�����֮������ù�ϵ

// exports=== module.exports
module.exports.foo='bar'
exports.add= function (x,y) {
    return x+y;
}

//˭require��˭�͵õ�module.exports
//Ĭ���ڴ���������һ�䣺
//return module.exports