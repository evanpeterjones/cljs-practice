// Compiled by ClojureScript 1.10.773 {:target :nodejs}
goog.provide('cljs_weather.core');
goog.require('cljs.core');
goog.require('cljs_weather.utils');
goog.require('cljs_weather.components.card');
goog.require('cljs_weather.weather');
goog.require('reagent.core');
goog.require('reagent.dom');
goog.require('alandipert.storage_atom');
goog.require('clojure.string');
cljs_weather.core.view = alandipert.storage_atom.local_storage.call(null,reagent.core.atom.call(null,"Home"),new cljs.core.Keyword(null,"view","view",1247994814));
cljs_weather.core.set_view_BANG_ = (function cljs_weather$core$set_view_BANG_(component){
cljs.core.reset_BANG_.call(null,cljs_weather.core.view,component);

return console.log(["Changing to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(component)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs_weather.core.view))].join(''));
});
if((typeof cljs_weather !== 'undefined') && (typeof cljs_weather.core !== 'undefined') && (typeof cljs_weather.core.app_state !== 'undefined')){
} else {
cljs_weather.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"title","title",636505583),"Clear as Day",new cljs.core.Keyword(null,"sub-title","sub-title",-1781490288),"get to enjoy the night life",new cljs.core.Keyword(null,"description","description",-1428560544),"When a city full of unsuspecting people wake up in a world of darkness, how do they cope?",new cljs.core.Keyword(null,"mobile?","mobile?",1358664528),false], null));
}
if((typeof cljs_weather !== 'undefined') && (typeof cljs_weather.core !== 'undefined') && (typeof cljs_weather.core.listen_links !== 'undefined')){
} else {
cljs_weather.core.listen_links = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"Apple Podcasts",new cljs.core.Keyword(null,"img-resource","img-resource",-442206549),"img/apple.png",new cljs.core.Keyword(null,"url","url",276297046),"https://podcasts.apple.com/us/podcast/encounters-a-paranormal-experience/id1407471024"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"Spotify",new cljs.core.Keyword(null,"img-resource","img-resource",-442206549),"",new cljs.core.Keyword(null,"url","url",276297046),"https://open.spotify.com/show/0bcymnpw8brMosTC32Wn8h?si=nUkKOpjZS2GZANDpCQX4zQ"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"Google Podcasts",new cljs.core.Keyword(null,"img-resource","img-resource",-442206549),"img/google-podcasts.png",new cljs.core.Keyword(null,"url","url",276297046),"https://www.google.com/podcasts?feed=aHR0cDovL2VuY291bnRlcnN0aGVwb2RjYXN0LmxpYnN5bi5jb20vcnNz"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"Youtube",new cljs.core.Keyword(null,"img-resource","img-resource",-442206549),"",new cljs.core.Keyword(null,"url","url",276297046),"https://www.youtube.com/channel/UCo6wYpnquR6OwWR5CM9ODDw"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"Stitcher",new cljs.core.Keyword(null,"img-resource","img-resource",-442206549),"",new cljs.core.Keyword(null,"url","url",276297046),"https://www.stitcher.com/show/encounters-a-paranormal-experience"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"TuneIn",new cljs.core.Keyword(null,"img-resource","img-resource",-442206549),"",new cljs.core.Keyword(null,"url","url",276297046),"https://tunein.com/podcasts/Storytelling-Podcasts/Encounters-A-Paranormal-Experience-p1174861/"], null)], null);
}
if((typeof cljs_weather !== 'undefined') && (typeof cljs_weather.core !== 'undefined') && (typeof cljs_weather.core.social_links !== 'undefined')){
} else {
cljs_weather.core.social_links = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"Facebook",new cljs.core.Keyword(null,"img-resource","img-resource",-442206549),"",new cljs.core.Keyword(null,"url","url",276297046),"https://www.facebook.com/encountersthepodcast/"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"Tumblr",new cljs.core.Keyword(null,"img-resource","img-resource",-442206549),"",new cljs.core.Keyword(null,"url","url",276297046),""], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"RSS",new cljs.core.Keyword(null,"img-resource","img-resource",-442206549),"",new cljs.core.Keyword(null,"url","url",276297046),"http://encountersthepodcast.libsyn.com/rss"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"Patreon",new cljs.core.Keyword(null,"img-resource","img-resource",-442206549),"",new cljs.core.Keyword(null,"url","url",276297046),""], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"Email Us",new cljs.core.Keyword(null,"img-resource","img-resource",-442206549),"",new cljs.core.Keyword(null,"url","url",276297046),"mailto:encountersthepodcast@gmail.com"], null)], null);
}
cljs_weather.core.link = (function cljs_weather$core$link(p__27335){
var map__27336 = p__27335;
var map__27336__$1 = (((((!((map__27336 == null))))?(((((map__27336.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27336.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27336):map__27336);
var name = cljs.core.get.call(null,map__27336__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var img_resource = cljs.core.get.call(null,map__27336__$1,new cljs.core.Keyword(null,"img-resource","img-resource",-442206549));
var url = cljs.core.get.call(null,map__27336__$1,new cljs.core.Keyword(null,"url","url",276297046));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.grid-container","div.grid-container",-1126502510),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.links","div.links",440246312),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),url], null),name], null)], null)], null);
});
cljs_weather.core.routing_button = (function cljs_weather$core$routing_button(name){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs_weather.core.set_view_BANG_.call(null,name);
})], null),name], null);
});
cljs_weather.core.horizontal_div = (function cljs_weather$core$horizontal_div(var_args){
var args__4742__auto__ = [];
var len__4736__auto___27339 = arguments.length;
var i__4737__auto___27340 = (0);
while(true){
if((i__4737__auto___27340 < len__4736__auto___27339)){
args__4742__auto__.push((arguments[i__4737__auto___27340]));

var G__27341 = (i__4737__auto___27340 + (1));
i__4737__auto___27340 = G__27341;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return cljs_weather.core.horizontal_div.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(cljs_weather.core.horizontal_div.cljs$core$IFn$_invoke$arity$variadic = (function (b){

var keyw = cljs.core.keyword.call(null,["col-xs-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(Math.floor(((12) / cljs.core.count.call(null,b))))].join(''));
var fixed = cljs.core.map.call(null,(function (x){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [keyw,x], null);
}),b);
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Keyword(null,"div.container-fluid","div.container-fluid",3929737),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Keyword(null,"div.row","div.row",133678515),null,(1),null)),fixed)))),null,(1),null))))));
}));

(cljs_weather.core.horizontal_div.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(cljs_weather.core.horizontal_div.cljs$lang$applyTo = (function (seq27338){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27338));
}));

cljs_weather.core.navbar = (function cljs_weather$core$navbar(views){
var map__27342 = cljs.core.deref.call(null,cljs_weather.core.app_state);
var map__27342__$1 = (((((!((map__27342 == null))))?(((((map__27342.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27342.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27342):map__27342);
var title = cljs.core.get.call(null,map__27342__$1,new cljs.core.Keyword(null,"title","title",636505583));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_weather.components.card.card,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),clojure.string.upper_case.call(null,title)], null),cljs.core.map.call(null,cljs_weather.core.routing_button,views)], null);
});
cljs_weather.core.side_bar = (function cljs_weather$core$side_bar(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_weather.components.card.card,cljs.core.map.call(null,cljs_weather.core.link,cljs_weather.core.listen_links),cljs.core.map.call(null,cljs_weather.core.link,cljs_weather.core.social_links)], null);
});
cljs_weather.core.hdr = (function cljs_weather$core$hdr(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),clojure.string.upper_case.call(null,text)], null);
});
cljs_weather.core.home = (function cljs_weather$core$home(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_weather.components.card.card,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_weather.core.hdr,"now playing"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"sub-title","sub-title",-1781490288).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs_weather.core.app_state))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs_weather.core.app_state))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"iframe","iframe",884422026),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border","border",1444987323),"solid 1px #e4edf2;"], null),new cljs.core.Keyword(null,"src","src",-1651076051),"https://www.stitcher.com/embed/235470",new cljs.core.Keyword(null,"width","width",-384071477),"220",new cljs.core.Keyword(null,"height","height",1025178622),"150",new cljs.core.Keyword(null,"frameborder","frameborder",-7707960),"0",new cljs.core.Keyword(null,"scrolling","scrolling",349011090),"no"], null)], null)], null)], null);
});
cljs_weather.core.characters = (function cljs_weather$core$characters(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_weather.components.card.card,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_weather.core.hdr,"Characters"], null)], null);
});
cljs_weather.core.episodes = (function cljs_weather$core$episodes(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_weather.components.card.card,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_weather.core.hdr,"Episodes"], null)], null);
});
cljs_weather.core.blog = (function cljs_weather$core$blog(){
return cljs_weather.components.card.styled_card.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),"100%"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_weather.core.hdr,"Blog"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"iframe","iframe",884422026),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"src","src",-1651076051),"https://relaxidaisical.blogspot.com/",new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"50%",new cljs.core.Keyword(null,"frameborder","frameborder",-7707960),"0",new cljs.core.Keyword(null,"scrolling","scrolling",349011090),"yes"], null)], null));
});
cljs_weather.core.app = (function cljs_weather$core$app(){
var views = new cljs.core.PersistentArrayMap(null, 4, ["Home",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_weather.core.home], null),"Episodes",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_weather.core.episodes], null),"Characters",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_weather.core.characters], null),"Blog",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_weather.core.blog], null)], null);
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"float","float",-1732389368),"left",new cljs.core.Keyword(null,"width","width",-384071477),"30%"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_weather.core.navbar,cljs.core.keys.call(null,views)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_weather.core.side_bar], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"float","float",-1732389368),"right",new cljs.core.Keyword(null,"width","width",-384071477),"70%"], null)], null),cljs.core.get.call(null,views,cljs.core.deref.call(null,cljs_weather.core.view))], null)], null);
});
});
reagent.dom.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_weather.core.app], null),document.body);

//# sourceMappingURL=core.js.map?rel=1607922350076
