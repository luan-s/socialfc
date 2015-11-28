var url = 'http://globoesporte.globo.com/servico/semantica/editorias/plantao/futebol/times/corinthians/feed.rss';
var corTime;


/*
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
			console.log(JSON.stringify(values));
		}
	});
});*/
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
	$('.social').css("display","block");
});
