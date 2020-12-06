// Compiled by ClojureScript 1.10.773 {:target :nodejs}
goog.provide('cljs_weather.weather');
goog.require('cljs.core');
goog.require('ajax.core');
cljs_weather.weather.api_url = "http://api.openweathermap.org/data/2.5/forecast";
cljs_weather.weather.get_location_BANG_ = (function cljs_weather$weather$get_location_BANG_(loc,state){

if(cljs.core.truth_(loc)){
cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"x-loc","x-loc",-298508920),loc.coords.latitude);

return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"y-loc","y-loc",86184118),loc.coords.longitude);
} else {
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.Keyword(null,"x-loc","x-loc",-298508920),"No Location data");

return cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.Keyword(null,"y-loc","y-loc",86184118),"No Location data");
}
});
cljs_weather.weather.handle_response_BANG_ = (function cljs_weather$weather$handle_response_BANG_(resp,app_state){
var today = cljs.core.get_in.call(null,resp,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["list",(0),"main","temp"], null));
var tomorrow = cljs.core.get_in.call(null,resp,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["list",(8),"main","temp"], null));
var location = cljs.core.get_in.call(null,resp,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["list",(0),"name"], null));
var s_desc = cljs.core.get_in.call(null,resp,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["list",(0),"weather","main"], null));
var description = cljs.core.get_in.call(null,resp,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["list",(0),"weather","description"], null));
cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"temperatures","temperatures",1108381981),new cljs.core.Keyword(null,"today","today",945271563),new cljs.core.Keyword(null,"value","value",305978217)], null),cljs.core.constantly.call(null,today));

cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"temperatures","temperatures",1108381981),new cljs.core.Keyword(null,"tomorrow","tomorrow",-1509090259),new cljs.core.Keyword(null,"value","value",305978217)], null),cljs.core.constantly.call(null,tomorrow));

cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"location-semantic","location-semantic",-2135535155)], null),cljs.core.constantly.call(null,location));

cljs.core.swap_BANG_.call(null,app_state,(7),cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"weather","weather",1320452344),new cljs.core.Keyword(null,"short-description","short-description",-596423833)], null),cljs.core.constantly.call(null,s_desc));

return cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"weather","weather",1320452344),new cljs.core.Keyword(null,"full-description","full-description",-1466367642)], null));
});
cljs_weather.weather.get_forecast_BANG_ = (function cljs_weather$weather$get_forecast_BANG_(app_state){
return ajax.core.GET.call(null,cljs_weather.weather.api_url,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),(cljs.core.truth_(new cljs.core.Keyword(null,"postal-code","postal-code",368585871).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app_state)))?new cljs.core.PersistentArrayMap(null, 3, ["zip",new cljs.core.Keyword(null,"postal-code","postal-code",368585871).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app_state)),"appid","3c612cd1a014cd6ce89c67d4cca25f39","units",new cljs.core.Keyword(null,"units","units",-533089095).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app_state))], null):new cljs.core.PersistentArrayMap(null, 4, ["lat",new cljs.core.Keyword(null,"x-loc","x-loc",-298508920).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app_state)),"lon",new cljs.core.Keyword(null,"y-loc","y-loc",86184118).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app_state)),"appid","3c612cd1a014cd6ce89c67d4cca25f39","units",new cljs.core.Keyword(null,"units","units",-533089095).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app_state))], null)),new cljs.core.Keyword(null,"handler","handler",-195596612),cljs_weather.weather.handle_response_BANG_], null));
});

//# sourceMappingURL=weather.js.map?rel=1607231744267
