function chia(a,b){
    if(b==0){
        throw "khongo thee cho phep chia cho 0";
    }
    var t = a/3;
    return t;
}
try
{
    var kg= chia(4,0);
    alert(kg);
    alert("con gaaaaaaaaaaaaaaaaaaaaaaa");
}catch(e)
{
    alert("loi"+e);
    alert("con gaf");
} 

