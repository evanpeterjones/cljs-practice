// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('cljs_weather.weather');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('ajax.core');
cljs_weather.weather.api_url = "http://api.openweathermap.org/data/2.5/forecast";
cljs_weather.weather.get_location_BANG_ = (function cljs_weather$weather$get_location_BANG_(loc,state){

if(cljs.core.truth_(loc)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,cljs.core.cst$kw$x_DASH_loc,loc.coords.latitude);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,cljs.core.cst$kw$y_DASH_loc,loc.coords.longitude);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,cljs.core.cst$kw$x_DASH_loc,"No Location data");

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,cljs.core.cst$kw$y_DASH_loc,"No Location data");
}
});
cljs_weather.weather.handle_response_BANG_ = (function cljs_weather$weather$handle_response_BANG_(resp,app_state){
var today = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(resp,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["list",(0),"main","temp"], null));
var tomorrow = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(resp,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["list",(8),"main","temp"], null));
var location = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(resp,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["list",(0),"name"], null));
var s_desc = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(resp,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["list",(0),"weather","main"], null));
var description = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(resp,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["list",(0),"weather","description"], null));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$temperatures,cljs.core.cst$kw$today,cljs.core.cst$kw$value], null),cljs.core.constantly(today));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$temperatures,cljs.core.cst$kw$tomorrow,cljs.core.cst$kw$value], null),cljs.core.constantly(tomorrow));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$location_DASH_semantic], null),cljs.core.constantly(location));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(app_state,(7),cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$weather,cljs.core.cst$kw$short_DASH_description], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.constantly(s_desc)], 0));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$weather,cljs.core.cst$kw$full_DASH_description], null));
});
cljs_weather.weather.get_forecast_BANG_ = (function cljs_weather$weather$get_forecast_BANG_(app_state){
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic(cljs_weather.weather.api_url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$params,(cljs.core.truth_(cljs.core.cst$kw$postal_DASH_code.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app_state)))?new cljs.core.PersistentArrayMap(null, 3, ["zip",cljs.core.cst$kw$postal_DASH_code.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app_state)),"appid","3c612cd1a014cd6ce89c67d4cca25f39","units",cljs.core.cst$kw$units.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app_state))], null):new cljs.core.PersistentArrayMap(null, 4, ["lat",cljs.core.cst$kw$x_DASH_loc.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app_state)),"lon",cljs.core.cst$kw$y_DASH_loc.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app_state)),"appid","3c612cd1a014cd6ce89c67d4cca25f39","units",cljs.core.cst$kw$units.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app_state))], null)),cljs.core.cst$kw$handler,cljs_weather.weather.handle_response_BANG_], null)], 0));
});
