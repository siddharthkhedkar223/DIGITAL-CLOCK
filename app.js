window.onload=()=>{

    function buildclock(){
    console.log("code for Interview"); 

    const date=new Date();
    let hours =date.getHours();
    let minutes=date.getMinutes();
    let seconds=date.getSeconds(); 
 hours= hours< 10 ? "0"+hours:hours;
minutes= minutes< 10 ? "0"+minutes:minutes;
 seconds= seconds< 10 ? "0"+seconds:seconds;


    document.querySelector('#hrs').innerHTML=hours;
    document.querySelector('#min').innerHTML=minutes;
    document.querySelector('#sec').innerHTML=seconds;
    setTimeout(buildclock,1000);

    };
    buildclock();
}