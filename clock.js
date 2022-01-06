var timeElement=document.getElementById("time")
var today, hours, minutes , seconds ,time , suffix
timeElement.innerHTML=getTime()

function getTime(){
    today=new Date()
    hours=today.getHours()
    minutes=today.getMinutes()
    seconds=today.getSeconds()
    if(hours<12)
    suffix="AM"
    else
    suffix="PM"
    if(hours<10)
    hours='0'+hours
    if(minutes<10)
    minutes='0'+minutes
    if(seconds<10)
    seconds='0'+seconds
    time=hours+":"+minutes+":"+seconds+" "+suffix
    return time
}
setInterval(function(){
    timeElement.innerHTML=getTime()
},1000)