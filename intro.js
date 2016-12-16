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
var fib1Num = 0;
var fib2Num = 0;

var startFin = function(){
    fib1Num = 0;
    fib2Num = 1;
    var list = document.getElementById("fiblist");
    console.log(list.key("li").length);
};

var nextFib = function(){
    var next = fib1Num + fib2Num;
    fib1Num = fib2Num;
    fib2Num = next;
    addFib(next);
};
var addFib = function(x){
    console.log(x);
    list = document.getElementById("fiblist");
    var entry = document.createElement("li");
    entry.appendChild(document.createTextNode(x));
    list.appendChild(entry);
};
