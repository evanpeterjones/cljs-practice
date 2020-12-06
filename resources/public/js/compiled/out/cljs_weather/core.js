// Compiled by ClojureScript 1.10.773 {:target :nodejs}
goog.provide('cljs_weather.core');
goog.require('cljs.core');
goog.require('cljs_weather.utils');
goog.require('cljs_weather.components.card');
goog.require('cljs_weather.weather');
goog.require('reagent.core');
goog.require('reagent.dom');
goog.require('alandipert.storage_atom');
cljs.core.enable_console_print_BANG_.call(null);
if((typeof cljs_weather !== 'undefined') && (typeof cljs_weather.core !== 'undefined') && (typeof cljs_weather.core.listen_links !== 'undefined')){
} else {
cljs_weather.core.listen_links = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"Apple Podcasts",new cljs.core.Keyword(null,"img-resource","img-resource",-442206549),"img/apple.png",new cljs.core.Keyword(null,"url","url",276297046),"https://podcasts.apple.com/us/podcast/encounters-a-paranormal-experience/id1407471024"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"Spotify",new cljs.core.Keyword(null,"img-resource","img-resource",-442206549),"",new cljs.core.Keyword(null,"url","url",276297046),"https://open.spotify.com/show/0bcymnpw8brMosTC32Wn8h?si=nUkKOpjZS2GZANDpCQX4zQ"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"Google Podcasts",new cljs.core.Keyword(null,"img-resource","img-resource",-442206549),"img/google-podcasts.png",new cljs.core.Keyword(null,"url","url",276297046),"https://www.google.com/podcasts?feed=aHR0cDovL2VuY291bnRlcnN0aGVwb2RjYXN0LmxpYnN5bi5jb20vcnNz"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"Youtube",new cljs.core.Keyword(null,"img-resource","img-resource",-442206549),"",new cljs.core.Keyword(null,"url","url",276297046),"https://www.youtube.com/channel/UCo6wYpnquR6OwWR5CM9ODDw"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"Stitcher",new cljs.core.Keyword(null,"img-resource","img-resource",-442206549),"",new cljs.core.Keyword(null,"url","url",276297046),"https://www.stitcher.com/show/encounters-a-paranormal-experience"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"TuneIn",new cljs.core.Keyword(null,"img-resource","img-resource",-442206549),"",new cljs.core.Keyword(null,"url","url",276297046),"https://tunein.com/podcasts/Storytelling-Podcasts/Encounters-A-Paranormal-Experience-p1174861/"], null)], null);
}
if((typeof cljs_weather !== 'undefined') && (typeof cljs_weather.core !== 'undefined') && (typeof cljs_weather.core.social_links !== 'undefined')){
} else {
cljs_weather.core.social_links = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"Facebook",new cljs.core.Keyword(null,"img-resource","img-resource",-442206549),"",new cljs.core.Keyword(null,"url","url",276297046),"https://www.facebook.com/encountersthepodcast/"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"Tumblr",new cljs.core.Keyword(null,"img-resource","img-resource",-442206549),"",new cljs.core.Keyword(null,"url","url",276297046),""], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"RSS",new cljs.core.Keyword(null,"img-resource","img-resource",-442206549),"",new cljs.core.Keyword(null,"url","url",276297046),"http://encountersthepodcast.libsyn.com/rss"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"Email Us",new cljs.core.Keyword(null,"img-resource","img-resource",-442206549),"",new cljs.core.Keyword(null,"url","url",276297046),"mailto:encountersthepodcast@gmail.com"], null)], null);
}
cljs_weather.core.links = (function cljs_weather$core$links(link_list){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.grid-container","div.grid-container",-1126502510),(function (){var iter__4529__auto__ = (function cljs_weather$core$links_$_iter__42394(s__42395){
return (new cljs.core.LazySeq(null,(function (){
var s__42395__$1 = s__42395;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__42395__$1);
if(temp__5720__auto__){
var s__42395__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__42395__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__42395__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__42397 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__42396 = (0);
while(true){
if((i__42396 < size__4528__auto__)){
var link = cljs.core._nth.call(null,c__4527__auto__,i__42396);
cljs.core.chunk_append.call(null,b__42397,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.links","div.links",440246312),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),new cljs.core.Keyword(null,"img-resource","img-resource",-442206549).cljs$core$IFn$_invoke$arity$1(link)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(link)], null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(link)], null)], null));

var G__42398 = (i__42396 + (1));
i__42396 = G__42398;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__42397),cljs_weather$core$links_$_iter__42394.call(null,cljs.core.chunk_rest.call(null,s__42395__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__42397),null);
}
} else {
var link = cljs.core.first.call(null,s__42395__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.links","div.links",440246312),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),new cljs.core.Keyword(null,"img-resource","img-resource",-442206549).cljs$core$IFn$_invoke$arity$1(link)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(link)], null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(link)], null)], null),cljs_weather$core$links_$_iter__42394.call(null,cljs.core.rest.call(null,s__42395__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__.call(null,link_list);
})()], null);
});
if((typeof cljs_weather !== 'undefined') && (typeof cljs_weather.core !== 'undefined') && (typeof cljs_weather.core.app_state !== 'undefined')){
} else {
cljs_weather.core.app_state = alandipert.storage_atom.local_storage.call(null,cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"title","title",636505583),"Encounters",new cljs.core.Keyword(null,"sub-title","sub-title",-1781490288),"A Paranormal Experience",new cljs.core.Keyword(null,"description","description",-1428560544),"A Paranormal / Supernatural discussion between Amanda and Dakota. We seek to unravel the unexplained and unknown. Join us weekly as we step into the shadows to bring a little light on the unknown. Welcome to the discussion.",new cljs.core.Keyword(null,"x-loc","x-loc",-298508920),null,new cljs.core.Keyword(null,"y-loc","y-loc",86184118),null,new cljs.core.Keyword(null,"mobile?","mobile?",1358664528),false], null)),new cljs.core.Keyword(null,"app-state","app-state",-1509963278));
}
if((typeof cljs_weather !== 'undefined') && (typeof cljs_weather.core !== 'undefined') && (typeof cljs_weather.core.current !== 'undefined')){
} else {
cljs_weather.core.current = cljs.core.atom.call(null,new cljs.core.Keyword(null,"home","home",-74557309));
}
cljs_weather.core.temperature = (function cljs_weather$core$temperature(temp){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.left","div.left",1530800130),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.temperature","div.temperature",-1367444371),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(temp)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.value","div.value",841295219),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(temp)], null)], null)], null);
});
cljs_weather.core.postal_code = (function cljs_weather$core$postal_code(code,change){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.postal-code","div.postal-code",98560812),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Enter your postal code"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Postal Code",new cljs.core.Keyword(null,"value","value",305978217),code,new cljs.core.Keyword(null,"on-change","on-change",-732046149),change], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),"Go"], null)], null);
});
cljs_weather.core.navbar = (function cljs_weather$core$navbar(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.navbar","div.navbar",-1681996461),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_weather.components.card.card,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.title","img.title",1286795944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),"title.png"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container-fluid","div.container-fluid",3929737),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-xs-3","div.col-xs-3",-331276165),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),"Zip Code",new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs_weather.core.set_view_BANG_.call(null,new cljs.core.Keyword(null,"zip-code","zip-code",884340280));
})], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-xs-3","div.col-xs-3",-331276165),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"Hosts",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return alert("test");
})], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-xs-3","div.col-xs-3",-331276165),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return alert("test");
})], null),"Home"], null)], null)], null)], null)], null)], null);
});
cljs_weather.core.location_info = (function cljs_weather$core$location_info(state){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.Keyword(null,"x-loc","x-loc",-298508920).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.Keyword(null,"y-loc","y-loc",86184118).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"Get Location",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return navigator.geolocation.getCurrentPosition((function (x){
return cljs_weather.weather.get_location_BANG_.call(null,x,cljs_weather.core.app_state);
}));
})], null)], null)], null);
});
cljs_weather.core.app = (function cljs_weather$core$app(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.app","div.app",-99849286),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_weather.core.navbar], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#body","div#body",250558726),cljs_weather.core.location_info.call(null,cljs_weather.core.app_state),cljs_weather.core.links.call(null,cljs_weather.core.social_links),cljs_weather.core.links.call(null,cljs_weather.core.listen_links)], null)], null);
});
cljs_weather.core.views = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"zip-code","zip-code",884340280),null,new cljs.core.Keyword(null,"home","home",-74557309),cljs_weather.core.app], null);
cljs_weather.core.set_view_BANG_ = (function cljs_weather$core$set_view_BANG_(component){
return cljs.core.swap_BANG_.call(null,cljs_weather.core.current,(function (x){
return component;
}));
});
reagent.dom.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,cljs_weather.core.current).call(null,cljs_weather.core.views)], null),document.body);

//# sourceMappingURL=core.js.map?rel=1607295125254
