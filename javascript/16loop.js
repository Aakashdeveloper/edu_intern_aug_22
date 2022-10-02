for
while
do while
for of
for in  >>>> Object
//////////////////////////////
For > Iterate over the array as well as print the series

for(variable, condition, increment)

for(let i=0;i<5;i++){
    console.log(i)
}
0
1
2
3
4

var a = ['Delhi', 'Mumbai', 'Nice', 'Pisa', 'Genoa', 'Boston']
for(i=0;i<a.length;i++){
    console.log(a[i])
}
Delhi
Mumbai
Nice
Pisa
Genoa
Boston

var a = ['Delhi', 'Mumbai', 'Nice', 'Pisa', 'Genoa', 'Boston']
for(i=0;i<a.length;i++){
    console.log(`<li>${a[i]}</li>`)
}
<li>Delhi</li>
<li>Mumbai</li>
<li>Nice</li>
<li>Pisa</li>
<li>Genoa</li>
<li>Boston</li>

var a = ['Delhi', 'Mumbai',['Red','Purple','Yellow',"Green"], 'Genoa', 'Boston']
for(i=0;i<a.length;i++){
    if(Array.isArray(a[i])){
        for(j=0;j<a[i].length;j++){
            console.log(a[i][j])
        }
    } else {
        console.log(a[i])
    }
}
Delhi
VM49:8 Mumbai
VM49:5 Red
VM49:5 Purple
VM49:5 Yellow
VM49:5 Green
VM49:8 Genoa
VM49:8 Boston

////while
var i = 10;
while(i<5){
    console.log(i);
    i++
}


////do while
var i = 10;
do{
    console.log(i);
    i++
}
while(i<5)

//es for of

var city = ['Delhi', 'Mumbai', 'Nice', 'Pisa', 'Genoa', 'Boston']
for(mycity of city){
    console.log(mycity)
}

var city = ['Delhi', 'Mumbai',['Red','Purple','Yellow',"Green"], 'Genoa', 'Boston']

for(mycity of city){
    if(Array.isArray(mycity)){
        for(mycolor of mycity){
            console.log(mycolor)
        }
    }else{
        console.log(mycity)
    }
}
