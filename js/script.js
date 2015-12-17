var urlGlobo = 'http://globoesporte.globo.com/servico/semantica/editorias/plantao/futebol/times/';
var urlFox = 'http://www.foxsports.com.br/feeds/times/?teamName=';
var urlUol = 'http://esporte.uol.com.br/futebol/clubes/';

var posfixoGlobo = '/feed.rss';
var posfixoUol = '.xml';
var posfixoFox = '';


for(i in times){
	$('<option id="mov0'+i.toString()+'">'+times[i]+'</option>').appendTo("#sel1");
}

var corTime;


function pegaNoticias(n,url){
	$(function () {
		var urlRss = url;
		$.ajax({
			type: "GET",
			url: document.location.protocol + '//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=1000&callback=?&q=' + encodeURIComponent(urlRss),
			dataType: 'json',
			error: function (xhr) {
				var erro = xhr.responseText;
				//console.log('Erro ao ler o feed: ' + erro);
			},
			success: function (xml) {
				//console.log(xml);
				values = xml.responseData.feed.entries;
				exibeNoticias(values,n);
			}
		});
	});
}

$(".nav-pills > li").click(function(){
	$(".nav-pills > li").removeClass("active");
	$(this).addClass("active");
	$('.so-pane').addClass("hidden");
	$('.'+$(this).attr('data-s')).removeClass("hidden");
});	


function exibeNoticias(obj,n){
	//console.log(obj);
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
	uol = document.querySelector(".n2");
}

$("#ir").click(function(){
	$( "select option:selected" ).each(function() {
	    n = $(this).index();
		pegaNoticias(1,urlGlobo+timesGlobo[n]+posfixoGlobo);
		pegaNoticias(2,urlUol+timesUol[n]+posfixoUol);
		pegaNoticias(3,urlFox+timesFox[n]+posfixoFox);
    });

    $(".social").css("display","block");
    $(".pesquisa").css("top","0%");
    $(".pesquisa").css("transform","translateY(0%)");
    $(".pesquisa").css("height","90px");
    $(".pesquisa").css("padding-top","0");
    $(".pesquisa").css("position","fixed");
    $(".get-noticias").css("display","block");
    $("body").css("margin-top","115px");
    $(".time").hide();
    $(".pesquisa > p").hide();
    $(".pesquisa > h1").text(times[n]);
    $(".pesquisa").addClass("pesquisa-nav");
    $(".painel-noticias").css("display","block");
    $(".noticias").css("display","block");
    $(".noticias").addClass("animated bounceInUp wow");
	$(".painel-noticias").css("height","680px");

    getInstagram(jsonT[n][1]);
    getFacebook(jsonT[n][0]);

});

$("#voltar").click(function(){
	window.location.reload(true);
});

var lastScroll = 0;
$(window).scroll(function(){

	var scrollTop = $(window).scrollTop();

	if (lastScroll <= scrollTop) {
			$('.pesquisa-nav').css('transform','translateY(-100%)');
		}else{
			$('.pesquisa-nav').css('transform','translateY(0%)');
		}
	lastScroll = scrollTop;
});

