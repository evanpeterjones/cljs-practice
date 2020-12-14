// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('reagent.debug');
goog.require('cljs.core');
goog.require('cljs.core.constants');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__26665__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$warn], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__26665 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26666__i = 0, G__26666__a = new Array(arguments.length -  0);
while (G__26666__i < G__26666__a.length) {G__26666__a[G__26666__i] = arguments[G__26666__i + 0]; ++G__26666__i;}
  args = new cljs.core.IndexedSeq(G__26666__a,0,null);
} 
return G__26665__delegate.call(this,args);};
G__26665.cljs$lang$maxFixedArity = 0;
G__26665.cljs$lang$applyTo = (function (arglist__26667){
var args = cljs.core.seq(arglist__26667);
return G__26665__delegate(args);
});
G__26665.cljs$core$IFn$_invoke$arity$variadic = G__26665__delegate;
return G__26665;
})()
);

(o.error = (function() { 
var G__26668__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$error], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__26668 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26669__i = 0, G__26669__a = new Array(arguments.length -  0);
while (G__26669__i < G__26669__a.length) {G__26669__a[G__26669__i] = arguments[G__26669__i + 0]; ++G__26669__i;}
  args = new cljs.core.IndexedSeq(G__26669__a,0,null);
} 
return G__26668__delegate.call(this,args);};
G__26668.cljs$lang$maxFixedArity = 0;
G__26668.cljs$lang$applyTo = (function (arglist__26670){
var args = cljs.core.seq(arglist__26670);
return G__26668__delegate(args);
});
G__26668.cljs$core$IFn$_invoke$arity$variadic = G__26668__delegate;
return G__26668;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});
