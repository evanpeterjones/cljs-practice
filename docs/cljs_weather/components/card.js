// Compiled by ClojureScript 1.10.773 {:target :nodejs}
goog.provide('cljs_weather.components.card');
goog.require('cljs.core');
goog.require('cljs_weather.css');
goog.require('reagent.core');
goog.require('reagent.dom');
cljs_weather.components.card.card_css = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),"0 8px 16px 0 rgba(0,0,0,.2)",new cljs.core.Keyword(null,"font-family","font-family",-667419874),cljs_weather.css.font,new cljs.core.Keyword(null,"transition","transition",765692007),"0.3s"], null);
cljs_weather.components.card.card_desktop = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",1660304693),"20px"], null);
cljs_weather.components.card.card = (function cljs_weather$components$card$card(var_args){
var args__4742__auto__ = [];
var len__4736__auto___22477 = arguments.length;
var i__4737__auto___22478 = (0);
while(true){
if((i__4737__auto___22478 < len__4736__auto___22477)){
args__4742__auto__.push((arguments[i__4737__auto___22478]));

var G__22479 = (i__4737__auto___22478 + (1));
i__4737__auto___22478 = G__22479;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return cljs_weather.components.card.card.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(cljs_weather.components.card.card.cljs$core$IFn$_invoke$arity$variadic = (function (slot){
if((window.innerWidth < (500))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_weather.components.card.card_css], null))], null),slot], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_weather.components.card.card_css,cljs_weather.components.card.card_desktop], null))], null),slot], null);
}
}));

(cljs_weather.components.card.card.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(cljs_weather.components.card.card.cljs$lang$applyTo = (function (seq22476){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22476));
}));


//# sourceMappingURL=card.js.map?rel=1607231744253
