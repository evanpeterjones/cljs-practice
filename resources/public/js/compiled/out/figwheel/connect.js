// Compiled by ClojureScript 1.10.773 {:target :nodejs}
goog.provide('figwheel.connect');
goog.require('cljs.core');
goog.require('figwheel.client');
figwheel.connect.start = (function figwheel$connect$start(){
var config = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__38783__delegate = function (x__38767__auto__){
if(cljs.core.truth_(cljs_weather.core.on_js_reload)){
return cljs.core.apply.call(null,cljs_weather.core.on_js_reload,x__38767__auto__);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),["Figwheel: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602))," hook '","cljs-weather.core/on-js-reload","' is missing"].join(''));
}
};
var G__38783 = function (var_args){
var x__38767__auto__ = null;
if (arguments.length > 0) {
var G__38784__i = 0, G__38784__a = new Array(arguments.length -  0);
while (G__38784__i < G__38784__a.length) {G__38784__a[G__38784__i] = arguments[G__38784__i + 0]; ++G__38784__i;}
  x__38767__auto__ = new cljs.core.IndexedSeq(G__38784__a,0,null);
} 
return G__38783__delegate.call(this,x__38767__auto__);};
G__38783.cljs$lang$maxFixedArity = 0;
G__38783.cljs$lang$applyTo = (function (arglist__38785){
var x__38767__auto__ = cljs.core.seq(arglist__38785);
return G__38783__delegate(x__38767__auto__);
});
G__38783.cljs$core$IFn$_invoke$arity$variadic = G__38783__delegate;
return G__38783;
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

//# sourceMappingURL=connect.js.map?rel=1607284885635
