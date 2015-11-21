var corTime;

/*var i = 0;
setInterval(function(){
	$(".time > input").attr("placeholder","Ex: "+times[i++]);
	if(i==times.length)i = 0;
}, 3000);*/

times = ["Atletico Mineiro","Avai","Chapecoense","Corinthians","Coritiba","Cruzeiro","Figueirense","Flamengo","Fluminense","Goiais","Gremio","Internacional","joinville","Palmeiras","Santos","Sao Paulo","Sport", "Vasco"]
$(".nav-pills > li").click(function(){
	$(".nav-pills > li").removeClass("active");
	$(this).addClass("active");
});	

$("#ir").click(function(){
	$('.pesquisa').css("height","auto");
	$('.pesquisa').css("padding","0");
	$('.social').css("display","block");
});

var feed = new Instafeed ({ 
    get :  'tagged' , 
    tagName :  'awesome' , 
    clientId : '9ee4e17658b245cca93856ac7efeb9cf',
}); 
feed.run(); 
