onmessage=function(e){
    for(var i=1,sum=0;i<=e.data;i++){
        sum+=i;
    };
    postMessage(sum);
};
