// Compiled by ClojureScript 1.10.773 {:target :nodejs}
goog.provide('figwheel.connect');
goog.require('cljs.core');
goog.require('figwheel.client');
figwheel.connect.start = (function figwheel$connect$start(){
var config = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__31650__delegate = function (x__31634__auto__){
if(cljs.core.truth_(cljs_weather.core.on_js_reload)){
return cljs.core.apply.call(null,cljs_weather.core.on_js_reload,x__31634__auto__);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),["Figwheel: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602))," hook '","cljs-weather.core/on-js-reload","' is missing"].join(''));
}
};
var G__31650 = function (var_args){
var x__31634__auto__ = null;
if (arguments.length > 0) {
var G__31651__i = 0, G__31651__a = new Array(arguments.length -  0);
while (G__31651__i < G__31651__a.length) {G__31651__a[G__31651__i] = arguments[G__31651__i + 0]; ++G__31651__i;}
  x__31634__auto__ = new cljs.core.IndexedSeq(G__31651__a,0,null);
} 
return G__31650__delegate.call(this,x__31634__auto__);};
G__31650.cljs$lang$maxFixedArity = 0;
G__31650.cljs$lang$applyTo = (function (arglist__31652){
var x__31634__auto__ = cljs.core.seq(arglist__31652);
return G__31650__delegate(x__31634__auto__);
});
G__31650.cljs$core$IFn$_invoke$arity$variadic = G__31650__delegate;
return G__31650;
})()
,new cljs.core.Keyword(null,"open-urls","open-urls",-1478664930),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["http://localhost:3449/index.html"], null),new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null);
figwheel.client.start.call(null,config);

if(cljs.core.truth_(new cljs.core.Keyword(null,"devcards","devcards",365747130).cljs$core$IFn$_invoke$arity$1(config))){
return devcards.core.start_devcard_ui_BANG__STAR_();
} else {
return null;
}
});
goog.exportSymbol('figwheel.connect.start', figwheel.connect.start);

//# sourceMappingURL=connect.js.map?rel=1607132441430
