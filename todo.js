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
$("ul").on("click","li",function(){
	$(this).toggleClass("selected");
});

$("ul").on("click","span",function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
	if(event.which===13){
		var todoItem= $(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class='far fa-trash-alt'></i></span> "+todoItem+"</li>");
	}
});

$(".fa-plus").click(function(){
	//$("input").toggleClass("display");
	$("input[type='text']").fadeToggle();
});