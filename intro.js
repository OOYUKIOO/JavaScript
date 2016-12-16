//JS CODE

//Change text of h1
var items = document.getElementsByTagName('li');
console.log(items);
for (var i = 0; i < items.length; i++){
    items[i].addEventListener("mouseover",function(e){
	document.getElementById("h").innerHTML = this.innerHTML;
    },false);

    items[i].addEventListener("mouseout",function(e){
	document.getElementById("h").innerHTML = "Hello World!";
    },false);
}
