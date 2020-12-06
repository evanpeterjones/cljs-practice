// Compiled by ClojureScript 1.10.773 {:target :nodejs}
goog.provide('cljs_weather.core');
goog.require('cljs.core');
goog.require('cljs_weather.utils');
goog.require('cljs_weather.components.card');
goog.require('cljs_weather.weather');
goog.require('alandipert.storage_atom');
goog.require('reagent.core');
goog.require('reagent.dom');
cljs.core.enable_console_print_BANG_.call(null);
if((typeof cljs_weather !== 'undefined') && (typeof cljs_weather.core !== 'undefined') && (typeof cljs_weather.core.listen_links !== 'undefined')){
} else {
cljs_weather.core.listen_links = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"Apple Podcasts",new cljs.core.Keyword(null,"img-resource","img-resource",-442206549),"img/apple.png",new cljs.core.Keyword(null,"url","url",276297046),"https://podcasts.apple.com/us/podcast/encounters-a-paranormal-experience/id1407471024"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"Google Podcasts",new cljs.core.Keyword(null,"img-resource","img-resource",-442206549),"img/google-podcasts.png",new cljs.core.Keyword(null,"url","url",276297046),"https://www.google.com/podcasts?feed=aHR0cDovL2VuY291bnRlcnN0aGVwb2RjYXN0LmxpYnN5bi5jb20vcnNz"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"Stitcher",new cljs.core.Keyword(null,"img-resource","img-resource",-442206549),"",new cljs.core.Keyword(null,"url","url",276297046),"https://www.stitcher.com/show/encounters-a-paranormal-experience"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"TuneIn",new cljs.core.Keyword(null,"img-resource","img-resource",-442206549),"",new cljs.core.Keyword(null,"url","url",276297046),"https://tunein.com/podcasts/Storytelling-Podcasts/Encounters-A-Paranormal-Experience-p1174861/"], null)], null);
}
if((typeof cljs_weather !== 'undefined') && (typeof cljs_weather.core !== 'undefined') && (typeof cljs_weather.core.social_links !== 'undefined')){
} else {
cljs_weather.core.social_links = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"Facebook",new cljs.core.Keyword(null,"img-resource","img-resource",-442206549),"",new cljs.core.Keyword(null,"url","url",276297046),"https://www.facebook.com/encountersthepodcast/"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"Tumblr",new cljs.core.Keyword(null,"img-resource","img-resource",-442206549),"",new cljs.core.Keyword(null,"url","url",276297046),""], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"RSS",new cljs.core.Keyword(null,"img-resource","img-resource",-442206549),"",new cljs.core.Keyword(null,"url","url",276297046),"http://encountersthepodcast.libsyn.com/rss"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"Email Us",new cljs.core.Keyword(null,"img-resource","img-resource",-442206549),"",new cljs.core.Keyword(null,"url","url",276297046),"mailto:encountersthepodcast@gmail.com"], null)], null);
}
cljs_weather.core.links = (function cljs_weather$core$links(link_list){
var iter__4529__auto__ = (function cljs_weather$core$links_$_iter__37356(s__37357){
return (new cljs.core.LazySeq(null,(function (){
var s__37357__$1 = s__37357;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__37357__$1);
if(temp__5720__auto__){
var s__37357__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__37357__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__37357__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__37359 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__37358 = (0);
while(true){
if((i__37358 < size__4528__auto__)){
var link = cljs.core._nth.call(null,c__4527__auto__,i__37358);
cljs.core.chunk_append.call(null,b__37359,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.grid-container","div.grid-container",-1126502510),cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"test"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),link], null))], null));

var G__37360 = (i__37358 + (1));
i__37358 = G__37360;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37359),cljs_weather$core$links_$_iter__37356.call(null,cljs.core.chunk_rest.call(null,s__37357__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37359),null);
}
} else {
var link = cljs.core.first.call(null,s__37357__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.grid-container","div.grid-container",-1126502510),cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"test"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),link], null))], null),cljs_weather$core$links_$_iter__37356.call(null,cljs.core.rest.call(null,s__37357__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__.call(null,link_list);
});
if((typeof cljs_weather !== 'undefined') && (typeof cljs_weather.core !== 'undefined') && (typeof cljs_weather.core.app_state !== 'undefined')){
} else {
cljs_weather.core.app_state = alandipert.storage_atom.local_storage.call(null,reagent.core.atom.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword(null,"x-loc","x-loc",-298508920),new cljs.core.Keyword(null,"location-semantic","location-semantic",-2135535155),new cljs.core.Keyword(null,"postal-code","postal-code",368585871),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"sub-title","sub-title",-1781490288),new cljs.core.Keyword(null,"mobile?","mobile?",1358664528),new cljs.core.Keyword(null,"data-recieved?","data-recieved?",1169335218),new cljs.core.Keyword(null,"y-loc","y-loc",86184118),new cljs.core.Keyword(null,"weather","weather",1320452344),new cljs.core.Keyword(null,"units","units",-533089095),new cljs.core.Keyword(null,"temperatures","temperatures",1108381981)],["A Paranormal / Supernatural discussion between Amanda and Dakota. We seek to unravel the unexplained and unknown. Join us weekly as we step into the shadows to bring a little light on the unknown. Welcome to the discussion.","No Location Information",null,null,"Encounters","A Paranormal Experience",false,false,null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"short-description","short-description",-596423833),"",new cljs.core.Keyword(null,"full-description","full-description",-1466367642),""], null),"imperial",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"today","today",945271563),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"Today",new cljs.core.Keyword(null,"value","value",305978217),null], null),new cljs.core.Keyword(null,"tomorrow","tomorrow",-1509090259),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"Tomorrow",new cljs.core.Keyword(null,"value","value",305978217),null], null)], null)])),new cljs.core.Keyword(null,"app-state","app-state",-1509963278));
}
cljs_weather.core.title = (function cljs_weather$core$title(){
return cljs_weather.components.card.card.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.title","img.title",1286795944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),"title.png"], null)], null));
});
cljs_weather.core.temperature = (function cljs_weather$core$temperature(temp){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.left","div.left",1530800130),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.temperature","div.temperature",-1367444371),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(temp)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.value","div.value",841295219),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(temp)], null)], null)], null);
});
cljs_weather.core.postal_code = (function cljs_weather$core$postal_code(state){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.postal-code","div.postal-code",98560812),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Enter your postal code"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Postal Code",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"postal-code","postal-code",368585871).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__37361_SHARP_){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"postal-code","postal-code",368585871),p1__37361_SHARP_.target.value);
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),"Go"], null)], null);
});
cljs_weather.core.location_info = (function cljs_weather$core$location_info(state){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.Keyword(null,"x-loc","x-loc",-298508920).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.Keyword(null,"y-loc","y-loc",86184118).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"Get Location",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return navigator.geolocation.getCurrentPosition((function (x){
return cljs_weather.weather.get_location_BANG_.call(null,x,cljs_weather.core.app_state);
}));
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"Get Weather Data",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs_weather.weather.get_forecast_BANG_.call(null,cljs_weather.core.app_state);
})], null)], null)], null);
});
cljs_weather.core.app = (function cljs_weather$core$app(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.app","div.app",-99849286),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"test"], null)], null);
});
reagent.dom.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_weather.core.app], null),document.getElementById("app"));

//# sourceMappingURL=core.js.map?rel=1607273021017
