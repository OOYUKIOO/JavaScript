//JS CODE

var items = document.getElementsByTagName('li');

var exclaim = 0;

//Upon button push, add an element to the list.
var addTolist = function(){
    var li = document.createElement("li");
    var input = "Tadaa";
    var exclaims = "";
    for (var i = 0; i < exclaim; i++){
	exclaims += "!";
    }
    li.innerHTML = input+exclaims;
    document.getElementById("thelist").appendChild(li);
    exclaim += 1;
    li.onclick = function() {
	this.parentNode.removeChild(this);
	exclaim -= 1;
    }
}

//Pascal triangle generator

var sFact = function(n){
    var rval=1;
    for (var i = 2; i <= n; i++)
        rval = rval * i;
    return rval;
}

var onePascal = function(n, r){
    if (n==0 && r==0){
	return 1;
    }
    return (sFact(n)/(sFact(r)*(sFact(n-r))));
}

var linePascal = function(n){
    if (n==0){
	return onePascal(0,0);
    }
    var line = "";
    for (var i = 0; i <= n; i++){
	line += ' ' + onePascal(n, i);
    }
    return line;
}

pcount = 0;

var addPascal = function(){
    var li = document.createElement("li");
    var input = linePascal(pcount);
    pcount += 1;
    li.innerHTML = input;
    document.getElementById("pascallist").appendChild(li);
}

//Change text of h1
for (var i = 0; i < items.length; i++){
    items[i].addEventListener("mouseover",function(e){
	document.getElementById("h").innerHTML = this.innerHTML;
    },false);
    
    items[i].addEventListener("mouseout",function(e){
	document.getElementById("h").innerHTML = "Hello World!";
    },false);

    //When an item on the list is clicked, remove it from the DOM
    items[i].onclick = function() {
	this.parentNode.removeChild(this);
    }
}

//Fib Sequence
var fib1Num;
var fib2Num;

var startFin = function(){
    //set first 2 numbers of fib sequence
    fib1Num = 0;
    fib2Num = 1;
    var list = document.getElementById("fiblist");
    //delete all items
    while (list.hasChildNodes()){
	list.removeChild(list.childNodes[0]);
    };
    //first fib num
    var i = document.createElement("li");
    i.appendChild(document.createTextNode(0));
    list.appendChild(i);
};

var nextFib = function(){
    var next = fib1Num + fib2Num;
    fib1Num = fib2Num;
    fib2Num = next;
    addFib(next);
};

var addFib = function(x){
    list = document.getElementById("fiblist");
    var entry = document.createElement("li");
    entry.appendChild(document.createTextNode(x));
    list.appendChild(entry);
};
