// 接收ui线程传递的数据
onmessage=function(e){
    var end=parseInt(e.data);
    // 1.开始时间
    // 2.创建循环，创建结束时间
    // 3.判断：如果结束时间-开始时间<5000，继续循环
    var start=new Date().getTime();
    do{
        var end1=new Date().getTime();
    }while(end1-start<end);
    // console.log('执行完毕')
    // var msg=document.getElementById('msg');
    // msg.innerHTML='执行完毕';
    postMessage('执行完毕');
}
