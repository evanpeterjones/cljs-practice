// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('cljs_weather.components.card');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs_weather.css');
goog.require('reagent.core');
goog.require('reagent.dom');
cljs_weather.components.card.card_css = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$box_DASH_shadow,"0 8px 16px 0 rgba(0,0,0,.2)",cljs.core.cst$kw$font_DASH_family,cljs_weather.css.font,cljs.core.cst$kw$transition,"0.3s"], null);
cljs_weather.components.card.card_desktop = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$padding,"20px"], null);
cljs_weather.components.card.card = (function cljs_weather$components$card$card(var_args){
var args__4742__auto__ = [];
var len__4736__auto___27161 = arguments.length;
var i__4737__auto___27162 = (0);
while(true){
if((i__4737__auto___27162 < len__4736__auto___27161)){
args__4742__auto__.push((arguments[i__4737__auto___27162]));

var G__27163 = (i__4737__auto___27162 + (1));
i__4737__auto___27162 = G__27163;
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
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$container,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_weather.components.card.card_css], null))], null),slot], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$container,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_weather.components.card.card_css,cljs_weather.components.card.card_desktop], null))], null),slot], null);
}
}));

(cljs_weather.components.card.card.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(cljs_weather.components.card.card.cljs$lang$applyTo = (function (seq27160){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27160));
}));

cljs_weather.components.card.styled_card = (function cljs_weather$components$card$styled_card(var_args){
var args__4742__auto__ = [];
var len__4736__auto___27166 = arguments.length;
var i__4737__auto___27167 = (0);
while(true){
if((i__4737__auto___27167 < len__4736__auto___27166)){
args__4742__auto__.push((arguments[i__4737__auto___27167]));

var G__27168 = (i__4737__auto___27167 + (1));
i__4737__auto___27167 = G__27168;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs_weather.components.card.styled_card.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs_weather.components.card.styled_card.cljs$core$IFn$_invoke$arity$variadic = (function (style,slot){
if((window.innerWidth < (500))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$container,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [style,cljs_weather.components.card.card_css], null))], null),slot], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$container,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [style,cljs_weather.components.card.card_css,cljs_weather.components.card.card_desktop], null))], null),slot], null);
}
}));

(cljs_weather.components.card.styled_card.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs_weather.components.card.styled_card.cljs$lang$applyTo = (function (seq27164){
var G__27165 = cljs.core.first(seq27164);
var seq27164__$1 = cljs.core.next(seq27164);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27165,seq27164__$1);
}));

