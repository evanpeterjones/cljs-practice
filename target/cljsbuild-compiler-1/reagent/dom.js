// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('reagent.dom');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('react_dom');
goog.require('reagent.impl.util');
goog.require('reagent.impl.template');
goog.require('reagent.impl.batching');
goog.require('reagent.ratom');
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.roots !== 'undefined')){
} else {
reagent.dom.roots = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.dom.roots,cljs.core.dissoc,container);

return reagent.dom.node$module$react_dom.unmountComponentAtNode(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR__orig_val__27028 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__27029 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__27029);

try{var G__27030 = (comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null));
var G__27031 = container;
var G__27032 = (function (){
var _STAR_always_update_STAR__orig_val__27033 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__27034 = false;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__27034);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.dom.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

reagent.impl.batching.flush_after_render();

if((!((callback == null)))){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__27033);
}});
return reagent.dom.node$module$react_dom.render(G__27030,G__27031,G__27032);
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__27028);
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp(comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element.
 *   The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var G__27036 = arguments.length;
switch (G__27036) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3(comp,container,null);
}));

(reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback){
reagent.ratom.flush_BANG_();

var f = (function (){
return reagent.impl.template.as_element(((cljs.core.fn_QMARK_(comp))?(comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)):comp));
});
return reagent.dom.render_comp(f,container,callback);
}));

(reagent.dom.render.cljs$lang$maxFixedArity = 3);

/**
 * Remove a component from the given DOM node.
 */
reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp(container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return reagent.dom.node$module$react_dom.findDOMNode(this$);
});
(reagent.impl.template.find_dom_node = reagent.dom.dom_node);
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_();

var seq__27038_27042 = cljs.core.seq(cljs.core.vals(cljs.core.deref(reagent.dom.roots)));
var chunk__27039_27043 = null;
var count__27040_27044 = (0);
var i__27041_27045 = (0);
while(true){
if((i__27041_27045 < count__27040_27044)){
var v_27046 = chunk__27039_27043.cljs$core$IIndexed$_nth$arity$2(null,i__27041_27045);
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(reagent.dom.re_render_component,v_27046);


var G__27047 = seq__27038_27042;
var G__27048 = chunk__27039_27043;
var G__27049 = count__27040_27044;
var G__27050 = (i__27041_27045 + (1));
seq__27038_27042 = G__27047;
chunk__27039_27043 = G__27048;
count__27040_27044 = G__27049;
i__27041_27045 = G__27050;
continue;
} else {
var temp__5720__auto___27051 = cljs.core.seq(seq__27038_27042);
if(temp__5720__auto___27051){
var seq__27038_27052__$1 = temp__5720__auto___27051;
if(cljs.core.chunked_seq_QMARK_(seq__27038_27052__$1)){
var c__4556__auto___27053 = cljs.core.chunk_first(seq__27038_27052__$1);
var G__27054 = cljs.core.chunk_rest(seq__27038_27052__$1);
var G__27055 = c__4556__auto___27053;
var G__27056 = cljs.core.count(c__4556__auto___27053);
var G__27057 = (0);
seq__27038_27042 = G__27054;
chunk__27039_27043 = G__27055;
count__27040_27044 = G__27056;
i__27041_27045 = G__27057;
continue;
} else {
var v_27058 = cljs.core.first(seq__27038_27052__$1);
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(reagent.dom.re_render_component,v_27058);


var G__27059 = cljs.core.next(seq__27038_27052__$1);
var G__27060 = null;
var G__27061 = (0);
var G__27062 = (0);
seq__27038_27042 = G__27059;
chunk__27039_27043 = G__27060;
count__27040_27044 = G__27061;
i__27041_27045 = G__27062;
continue;
}
} else {
}
}
break;
}

return reagent.impl.batching.flush_after_render();
});
