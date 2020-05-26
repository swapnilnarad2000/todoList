//alert("connected");
/*$("li").click(function(){
	console.log("connected");
	if($(this).css("color") === "rgb(128, 128, 128)"){
		$(this).css({
		color:"black",
		textDecoration:"none"
		});
	}
	else{
		$(this).css({
		color:"gray",
		textDecoration:"line-through"
		});
		console.log($(this).css("color"))
	}

});
*/
$("li").click(function(){
	$(this).toggleClass("selected");
});

$("span").click(function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation();
});