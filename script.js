document.getElementById('start').onclick = () =>
{
    s = 0;
    min = 0;
    hrs = 0;
    function stopWatch(){

     //take output div   
    const clk = document.getElementById('MyClockDisplay');
    s += 1; //add +1 to up seconds
    
    //Conditions between sec., min., h.
    if (s == 60){
        s = 0;
        min += 1;
    }
    if (min == 60){
        min = 0;
        hrs += 1;
    }

    //modify output
    clk.innerHTML = `${hrs} : ${min} : ${s}`;
    }

    //sequence using setZInerval
    let my_interval = setInterval(stopWatch, 1000);

    //function to close interval and reset the clock
    document.getElementById('reset').onclick = () => {
        clearInterval(my_interval);
        s = 0;
        min = 0;
        hrs = 0;
        
        const clk = document.getElementById('MyClockDisplay');
        clk.innerHTML = `${hrs} : ${min} : ${s}`;
        
    }
 }






