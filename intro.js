//JS CODE

//Change text of h1
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
}



for (var i = 0; i < items.length; i++){
    items[i].addEventListener("mouseover",function(e){
	document.getElementById("h").innerHTML = this.innerHTML;
    },false);

    items[i].addEventListener("mouseout",function(e){
	document.getElementById("h").innerHTML = "Hello World!";
    },false);
}
