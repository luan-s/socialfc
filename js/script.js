var urlGlobo = 'http://globoesporte.globo.com/servico/semantica/editorias/plantao/futebol/times/corinthians/feed.rss';
var urlFox = 'http://www.foxsports.com.br/feeds/times/?teamName=corinthians';
var urlUol = 'http://esporte.uol.com.br/futebol/clubes/corinthians.xml';


for(i in times){
	$('<option id="mov0'+i.toString()+'">'+times[i]+'</option>').appendTo("#sel1");
}

var corTime;
/*
	var i = 0;
	setInterval(function(){
		$(".time > input").attr("placeholder","Ex: "+times[i++]);
		if(i==times.length)i = 0;
	}, 3000);


	var feed = new Instafeed ({ 
	    get :  'tagged' , 
	    tagName :  'awesome' , 
	    clientId : '07fb82d2fea84e99bbe6bf0d1b3c7603',
	}); 
	feed.run(); 
*/
function pegaNoticias(n,url){
	$(function () {
		var urlRss = url;
		$.ajax({
			type: "GET",
			url: document.location.protocol + '//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=1000&callback=?&q=' + encodeURIComponent(urlRss),
			dataType: 'json',
			error: function (xhr) {
				var erro = xhr.responseText;
				console.log('Erro ao ler o feed: ' + erro);
			},
			success: function (xml) {
				values = xml.responseData.feed.entries;
				exibeNoticias(values,n);
				
			}
		});
	});
}



times = ["Atletico Mineiro","Avai","Chapecoense","Corinthians","Coritiba","Cruzeiro","Figueirense","Flamengo","Fluminense","Goiais","Gremio","Internacional","joinville","Palmeiras","Santos","Sao Paulo","Sport", "Vasco"]
$(".nav-pills > li").click(function(){
	$(".nav-pills > li").removeClass("active");
	$(this).addClass("active");
	$('.so-pane').addClass("hidden");
	$('.'+$(this).attr('data-s')).removeClass("hidden");
});	

$("#ir").click(function(){
	$('.pesquisa').css("height","auto");
	$('.pesquisa').css("padding","0");
	$('.pesquisa').css("margin-top","-350px");
	$('.pesquisa').css("background-color","#009688");
	$('nav').css("opacity","1");
	$('.social').css("display","block");
	$('.get-noticias').css("display","block");
});

$('#seta').click(function(){
	if($('#seta').hasClass("glyphicon glyphicon-menu-up")){
		$('#seta').removeClass("glyphicon glyphicon-menu-up");
		$('#seta').addClass("glyphicon glyphicon-menu-down");
		//$(".painel-noticias").css("display","none");
		$(".painel-noticias").css("height","0px");
		$('#seta').show();

	}
	else{
		$('#seta').removeClass("glyphicon glyphicon-menu-down");
		$('#seta').addClass("glyphicon glyphicon-menu-up");
		$(".painel-noticias").css("display","block");
		//$('.get-noticias > h2').hide();
		$(".painel-noticias").css("height","680px");
	}

});


function exibeNoticias(obj,n){
	console.log(obj);
	var page, color;
	if(n==1){
		page = document.querySelector(".n1");
		color ="success";
	}
	if(n==2) {
		page = document.querySelector(".n2");
		color ="danger";
	}

	if(n==3) {
		page = document.querySelector(".n3");
		color ="info";
	}


	for(var i = 0; i<5;i++){

		div = document.createElement("div");
		div.className = "alert alert-dismissible alert-"+color+" cardNot";

		strong = document.createElement("strong");

		a = document.createElement("a");
		a.textContent = obj[i].title;
		a.href = obj[i].link;
		a.target = "_blank";
		a.className = "alert-link";

		div.appendChild(strong);
		div.appendChild(a);
		page.appendChild(div);
	}
}

function exibeNoticiasUol(obj){
	console.log(obj);
	uol = document.querySelector(".n2");
	/*for(var i = 0; i<5;i++){

		div = document.createElement("div");
		div.className = "alert alert-dismissible alert-danger";

		strong = document.createElement("strong");

		a = document.createElement("a");
		a.textContent = obj[i].title;
		a.href = obj[i].link;
		a.target = "_blank";
		a.className = "alert-link";

		div.appendChild(strong);
		div.appendChild(a);
		uol.appendChild(div);
	}*/
}

pegaNoticias(1,urlGlobo);
pegaNoticias(2,urlUol);
pegaNoticias(3,urlFox);




