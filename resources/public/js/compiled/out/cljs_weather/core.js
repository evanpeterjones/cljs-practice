// Compiled by ClojureScript 1.10.773 {:target :nodejs}
goog.provide('cljs_weather.core');
goog.require('cljs.core');
goog.require('cljs_weather.utils');
goog.require('cljs_weather.components.card');
goog.require('reagent.core');
goog.require('reagent.dom');
goog.require('ajax.core');
cljs.core.enable_console_print_BANG_.call(null);
if((typeof cljs_weather !== 'undefined') && (typeof cljs_weather.core !== 'undefined') && (typeof cljs_weather.core.app_state !== 'undefined')){
} else {
cljs_weather.core.app_state = reagent.core.atom.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"x-loc","x-loc",-298508920),new cljs.core.Keyword(null,"location-semantic","location-semantic",-2135535155),new cljs.core.Keyword(null,"postal-code","postal-code",368585871),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"sub-title","sub-title",-1781490288),new cljs.core.Keyword(null,"mobile?","mobile?",1358664528),new cljs.core.Keyword(null,"data-recieved?","data-recieved?",1169335218),new cljs.core.Keyword(null,"y-loc","y-loc",86184118),new cljs.core.Keyword(null,"weather","weather",1320452344),new cljs.core.Keyword(null,"units","units",-533089095),new cljs.core.Keyword(null,"temperatures","temperatures",1108381981)],["No Location Information",null,null,"Encounters","A Paranormal Experience",false,false,null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"short-description","short-description",-596423833),"",new cljs.core.Keyword(null,"full-description","full-description",-1466367642),""], null),"imperial",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"today","today",945271563),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"Today",new cljs.core.Keyword(null,"value","value",305978217),null], null),new cljs.core.Keyword(null,"tomorrow","tomorrow",-1509090259),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"Tomorrow",new cljs.core.Keyword(null,"value","value",305978217),null], null)], null)]));
}
cljs_weather.core.title = (function cljs_weather$core$title(){
return cljs_weather.components.card.card.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs_weather.core.app_state))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"sub-title","sub-title",-1781490288).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs_weather.core.app_state))], null)], null));
});
cljs_weather.core.temperature = (function cljs_weather$core$temperature(temp){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.temperature","div.temperature",-1367444371),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(temp)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.value","div.value",841295219),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(temp)], null)], null);
});
cljs_weather.core.postal_code = (function cljs_weather$core$postal_code(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class-name","class-name",945142584),"postal-code"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Enter your postal code"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Postal Code",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"postal-code","postal-code",368585871).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs_weather.core.app_state)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__21473_SHARP_){
return cljs.core.swap_BANG_.call(null,cljs_weather.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"postal-code","postal-code",368585871),p1__21473_SHARP_.target.value);
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),"Go"], null)], null);
});
cljs_weather.core.get_location_BANG_ = (function cljs_weather$core$get_location_BANG_(loc){

if(cljs.core.truth_(loc)){
cljs.core.swap_BANG_.call(null,cljs_weather.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"x-loc","x-loc",-298508920),loc.coords.latitude);

return cljs.core.swap_BANG_.call(null,cljs_weather.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"y-loc","y-loc",86184118),loc.coords.longitude);
} else {
cljs.core.swap_BANG_.call(null,cljs_weather.core.app_state,cljs.core.update_in,new cljs.core.Keyword(null,"x-loc","x-loc",-298508920),"No Location data");

return cljs.core.swap_BANG_.call(null,cljs_weather.core.app_state,cljs.core.update_in,new cljs.core.Keyword(null,"y-loc","y-loc",86184118),"No Location data");
}
});
cljs_weather.core.api_url = "http://api.openweathermap.org/data/2.5/forecast";
cljs_weather.core.handle_response_BANG_ = (function cljs_weather$core$handle_response_BANG_(resp){
var today = cljs.core.get_in.call(null,resp,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["list",(0),"main","temp"], null));
var tomorrow = cljs.core.get_in.call(null,resp,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["list",(8),"main","temp"], null));
var location = cljs.core.get_in.call(null,resp,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["list",(0),"name"], null));
var s_desc = cljs.core.get_in.call(null,resp,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["list",(0),"weather","main"], null));
var description = cljs.core.get_in.call(null,resp,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["list",(0),"weather","description"], null));
cljs.core.swap_BANG_.call(null,cljs_weather.core.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"temperatures","temperatures",1108381981),new cljs.core.Keyword(null,"today","today",945271563),new cljs.core.Keyword(null,"value","value",305978217)], null),cljs.core.constantly.call(null,today));

cljs.core.swap_BANG_.call(null,cljs_weather.core.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"temperatures","temperatures",1108381981),new cljs.core.Keyword(null,"tomorrow","tomorrow",-1509090259),new cljs.core.Keyword(null,"value","value",305978217)], null),cljs.core.constantly.call(null,tomorrow));

cljs.core.swap_BANG_.call(null,cljs_weather.core.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"location-semantic","location-semantic",-2135535155)], null),cljs.core.constantly.call(null,location));

cljs.core.swap_BANG_.call(null,cljs_weather.core.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"weather","weather",1320452344),new cljs.core.Keyword(null,"short-description","short-description",-596423833)], null),cljs.core.constantly.call(null,s_desc));

return cljs.core.swap_BANG_.call(null,cljs_weather.core.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"weather","weather",1320452344),new cljs.core.Keyword(null,"full-description","full-description",-1466367642)], null));
});
cljs_weather.core.get_forecast_BANG_ = (function cljs_weather$core$get_forecast_BANG_(){
return ajax.core.GET.call(null,cljs_weather.core.api_url,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),(cljs.core.truth_(new cljs.core.Keyword(null,"postal-code","postal-code",368585871).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs_weather.core.app_state)))?new cljs.core.PersistentArrayMap(null, 3, ["zip",new cljs.core.Keyword(null,"postal-code","postal-code",368585871).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs_weather.core.app_state)),"appid","3c612cd1a014cd6ce89c67d4cca25f39","units",new cljs.core.Keyword(null,"units","units",-533089095).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs_weather.core.app_state))], null):new cljs.core.PersistentArrayMap(null, 4, ["lat",new cljs.core.Keyword(null,"x-loc","x-loc",-298508920).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs_weather.core.app_state)),"lon",new cljs.core.Keyword(null,"y-loc","y-loc",86184118).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs_weather.core.app_state)),"appid","3c612cd1a014cd6ce89c67d4cca25f39","units",new cljs.core.Keyword(null,"units","units",-533089095).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs_weather.core.app_state))], null)),new cljs.core.Keyword(null,"handler","handler",-195596612),cljs_weather.core.handle_response_BANG_], null));
});
cljs_weather.core.location_info = (function cljs_weather$core$location_info(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.Keyword(null,"x-loc","x-loc",-298508920).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs_weather.core.app_state))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.Keyword(null,"y-loc","y-loc",86184118).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs_weather.core.app_state))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"Get Location",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return navigator.geolocation.getCurrentPosition(cljs_weather.core.get_location_BANG_);
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"Get Weather Data",new cljs.core.Keyword(null,"on-click","on-click",1632826543),cljs_weather.core.get_forecast_BANG_], null)], null)], null);
});
cljs_weather.core.get_election_data_BANG_ = (function cljs_weather$core$get_election_data_BANG_(){
return ajax.core.GET.call(null,"https://raw.githubusercontent.com/evanpeterjones/election_data/main/1976-2016-president.csv?token=AGJJIAUSUSG4N6N5PZNWYY27ZGFMI");
});
cljs_weather.core.election_data = (function cljs_weather$core$election_data(){
return null;
});
cljs_weather.core.app = (function cljs_weather$core$app(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"app"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_weather.core.title], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"temperatures"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_weather.core.location_info], null),(function (){var iter__4529__auto__ = (function cljs_weather$core$app_$_iter__21474(s__21475){
return (new cljs.core.LazySeq(null,(function (){
var s__21475__$1 = s__21475;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__21475__$1);
if(temp__5720__auto__){
var s__21475__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__21475__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__21475__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__21477 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__21476 = (0);
while(true){
if((i__21476 < size__4528__auto__)){
var temp = cljs.core._nth.call(null,c__4527__auto__,i__21476);
cljs.core.chunk_append.call(null,b__21477,cljs_weather.core.temperature.call(null,temp));

var G__21478 = (i__21476 + (1));
i__21476 = G__21478;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21477),cljs_weather$core$app_$_iter__21474.call(null,cljs.core.chunk_rest.call(null,s__21475__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21477),null);
}
} else {
var temp = cljs.core.first.call(null,s__21475__$2);
return cljs.core.cons.call(null,cljs_weather.core.temperature.call(null,temp),cljs_weather$core$app_$_iter__21474.call(null,cljs.core.rest.call(null,s__21475__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__.call(null,cljs.core.vals.call(null,new cljs.core.Keyword(null,"temperatures","temperatures",1108381981).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs_weather.core.app_state))));
})()], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_weather.core.postal_code], null)], null);
});
reagent.dom.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_weather.core.app], null),document.getElementById("app"));

//# sourceMappingURL=core.js.map?rel=1607194255973
