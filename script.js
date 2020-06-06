function checkTime(i)
{
    if(i<10)
    {
        i="0"+i;
    }
    return i;
}


function startTime()
{
    let time=new Date();
    let h=time.getHours();
    let m=time.getMinutes();
    let s=time.getSeconds();
    h=checkTime(h);
    m=checkTime(m);
    s=checkTime(s);
    document.querySelector("#time").innerHTML = h + "."+m+"."+s;
   
    t=setTimeout(function(){
        startTime()
    },500);
}
startTime();


// content orange equal width 
function summeryBox()
{
let d1=document.querySelector(".contentTop div:nth-child(1)");
let dVal1 = d1.clientWidth;
let d2=document.querySelector(".contentTop div:nth-child(2)");
let dVal2 = d2.clientWidth;
let d3=document.querySelector(".contentTop div:nth-child(3)");
let dVal3 = d3.clientWidth;
let d4=document.querySelector(".contentTop div:nth-child(4)");
let dVal4 = d4.clientWidth;
let d5=document.querySelector(".contentTop div:nth-child(5)");
let dVal5 = d5.clientWidth;
let maxWidth=Math.max(dVal1,dVal2,dVal3,dVal4,dVal5);

d1.style.width=maxWidth;
d2.style.width=maxWidth;
d3.style.width=maxWidth;
d4.style.width=maxWidth;
}

// Graph Data
function graphShow()
{
let canvas=document.getElementById('myChart');
canvas.height=135;
console.log(canvas.height);
var ctx = canvas.getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['2012','2013','2014', '2015', '2016', '2018', '2019', '2020'],
        datasets: [{
            label: 'Marks Obtained',
            data: [11,10,12, 19, 12, 17, 20, 19],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 2
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
}
// DATE COllection
function dateTime()
{
    let selY=document.querySelector(".contentPaneDataYear");
    let selM=document.querySelector(".contentPaneDataMonth");
    for(let ctn=2020;ctn>=2002;ctn--)
    {
        let opt1=document.createElement("option");
        opt1.appendChild(document.createTextNode(ctn));
        opt1.value=ctn;
        selY.appendChild(opt1);
    }
    for(let ctn2=12;ctn2>=1;ctn2--)
    {
        let opt2=document.createElement("option");
        opt2.appendChild(document.createTextNode(ctn2));
        opt2.value=ctn2;
        selM.appendChild(opt2);
    }
}
