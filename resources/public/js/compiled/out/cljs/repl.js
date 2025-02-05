// Compiled by ClojureScript 1.10.773 {:target :nodejs}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__31732){
var map__31733 = p__31732;
var map__31733__$1 = (((((!((map__31733 == null))))?(((((map__31733.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31733.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31733):map__31733);
var m = map__31733__$1;
var n = cljs.core.get.call(null,map__31733__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__31733__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__4126__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return [(function (){var temp__5720__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5720__auto__)){
var ns = temp__5720__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})());

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__31735_31767 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__31736_31768 = null;
var count__31737_31769 = (0);
var i__31738_31770 = (0);
while(true){
if((i__31738_31770 < count__31737_31769)){
var f_31771 = cljs.core._nth.call(null,chunk__31736_31768,i__31738_31770);
cljs.core.println.call(null,"  ",f_31771);


var G__31772 = seq__31735_31767;
var G__31773 = chunk__31736_31768;
var G__31774 = count__31737_31769;
var G__31775 = (i__31738_31770 + (1));
seq__31735_31767 = G__31772;
chunk__31736_31768 = G__31773;
count__31737_31769 = G__31774;
i__31738_31770 = G__31775;
continue;
} else {
var temp__5720__auto___31776 = cljs.core.seq.call(null,seq__31735_31767);
if(temp__5720__auto___31776){
var seq__31735_31777__$1 = temp__5720__auto___31776;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31735_31777__$1)){
var c__4556__auto___31778 = cljs.core.chunk_first.call(null,seq__31735_31777__$1);
var G__31779 = cljs.core.chunk_rest.call(null,seq__31735_31777__$1);
var G__31780 = c__4556__auto___31778;
var G__31781 = cljs.core.count.call(null,c__4556__auto___31778);
var G__31782 = (0);
seq__31735_31767 = G__31779;
chunk__31736_31768 = G__31780;
count__31737_31769 = G__31781;
i__31738_31770 = G__31782;
continue;
} else {
var f_31783 = cljs.core.first.call(null,seq__31735_31777__$1);
cljs.core.println.call(null,"  ",f_31783);


var G__31784 = cljs.core.next.call(null,seq__31735_31777__$1);
var G__31785 = null;
var G__31786 = (0);
var G__31787 = (0);
seq__31735_31767 = G__31784;
chunk__31736_31768 = G__31785;
count__31737_31769 = G__31786;
i__31738_31770 = G__31787;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_31788 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_31788);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_31788)))?cljs.core.second.call(null,arglists_31788):arglists_31788));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Spec");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__31739_31789 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__31740_31790 = null;
var count__31741_31791 = (0);
var i__31742_31792 = (0);
while(true){
if((i__31742_31792 < count__31741_31791)){
var vec__31753_31793 = cljs.core._nth.call(null,chunk__31740_31790,i__31742_31792);
var name_31794 = cljs.core.nth.call(null,vec__31753_31793,(0),null);
var map__31756_31795 = cljs.core.nth.call(null,vec__31753_31793,(1),null);
var map__31756_31796__$1 = (((((!((map__31756_31795 == null))))?(((((map__31756_31795.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31756_31795.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31756_31795):map__31756_31795);
var doc_31797 = cljs.core.get.call(null,map__31756_31796__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_31798 = cljs.core.get.call(null,map__31756_31796__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_31794);

cljs.core.println.call(null," ",arglists_31798);

if(cljs.core.truth_(doc_31797)){
cljs.core.println.call(null," ",doc_31797);
} else {
}


var G__31799 = seq__31739_31789;
var G__31800 = chunk__31740_31790;
var G__31801 = count__31741_31791;
var G__31802 = (i__31742_31792 + (1));
seq__31739_31789 = G__31799;
chunk__31740_31790 = G__31800;
count__31741_31791 = G__31801;
i__31742_31792 = G__31802;
continue;
} else {
var temp__5720__auto___31803 = cljs.core.seq.call(null,seq__31739_31789);
if(temp__5720__auto___31803){
var seq__31739_31804__$1 = temp__5720__auto___31803;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31739_31804__$1)){
var c__4556__auto___31805 = cljs.core.chunk_first.call(null,seq__31739_31804__$1);
var G__31806 = cljs.core.chunk_rest.call(null,seq__31739_31804__$1);
var G__31807 = c__4556__auto___31805;
var G__31808 = cljs.core.count.call(null,c__4556__auto___31805);
var G__31809 = (0);
seq__31739_31789 = G__31806;
chunk__31740_31790 = G__31807;
count__31741_31791 = G__31808;
i__31742_31792 = G__31809;
continue;
} else {
var vec__31758_31810 = cljs.core.first.call(null,seq__31739_31804__$1);
var name_31811 = cljs.core.nth.call(null,vec__31758_31810,(0),null);
var map__31761_31812 = cljs.core.nth.call(null,vec__31758_31810,(1),null);
var map__31761_31813__$1 = (((((!((map__31761_31812 == null))))?(((((map__31761_31812.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31761_31812.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31761_31812):map__31761_31812);
var doc_31814 = cljs.core.get.call(null,map__31761_31813__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_31815 = cljs.core.get.call(null,map__31761_31813__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_31811);

cljs.core.println.call(null," ",arglists_31815);

if(cljs.core.truth_(doc_31814)){
cljs.core.println.call(null," ",doc_31814);
} else {
}


var G__31816 = cljs.core.next.call(null,seq__31739_31804__$1);
var G__31817 = null;
var G__31818 = (0);
var G__31819 = (0);
seq__31739_31789 = G__31816;
chunk__31740_31790 = G__31817;
count__31741_31791 = G__31818;
i__31742_31792 = G__31819;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5720__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5720__auto__)){
var fnspec = temp__5720__auto__;
cljs.core.print.call(null,"Spec");

var seq__31763 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__31764 = null;
var count__31765 = (0);
var i__31766 = (0);
while(true){
if((i__31766 < count__31765)){
var role = cljs.core._nth.call(null,chunk__31764,i__31766);
var temp__5720__auto___31820__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___31820__$1)){
var spec_31821 = temp__5720__auto___31820__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_31821));
} else {
}


var G__31822 = seq__31763;
var G__31823 = chunk__31764;
var G__31824 = count__31765;
var G__31825 = (i__31766 + (1));
seq__31763 = G__31822;
chunk__31764 = G__31823;
count__31765 = G__31824;
i__31766 = G__31825;
continue;
} else {
var temp__5720__auto____$1 = cljs.core.seq.call(null,seq__31763);
if(temp__5720__auto____$1){
var seq__31763__$1 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31763__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__31763__$1);
var G__31826 = cljs.core.chunk_rest.call(null,seq__31763__$1);
var G__31827 = c__4556__auto__;
var G__31828 = cljs.core.count.call(null,c__4556__auto__);
var G__31829 = (0);
seq__31763 = G__31826;
chunk__31764 = G__31827;
count__31765 = G__31828;
i__31766 = G__31829;
continue;
} else {
var role = cljs.core.first.call(null,seq__31763__$1);
var temp__5720__auto___31830__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___31830__$2)){
var spec_31831 = temp__5720__auto___31830__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_31831));
} else {
}


var G__31832 = cljs.core.next.call(null,seq__31763__$1);
var G__31833 = null;
var G__31834 = (0);
var G__31835 = (0);
seq__31763 = G__31832;
chunk__31764 = G__31833;
count__31765 = G__31834;
i__31766 = G__31835;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.call(null,"js",t.name):null
))], null),(function (){var temp__5720__auto__ = cljs.core.ex_message.call(null,t);
if(cljs.core.truth_(temp__5720__auto__)){
var msg = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = cljs.core.ex_data.call(null,t);
if(cljs.core.truth_(temp__5720__auto__)){
var ed = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})());
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__31836 = cljs.core.conj.call(null,via,t);
var G__31837 = cljs.core.ex_cause.call(null,t);
via = G__31836;
t = G__31837;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek.call(null,via);
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec.call(null,cljs.core.map.call(null,base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5720__auto__ = cljs.core.ex_message.call(null,root);
if(cljs.core.truth_(temp__5720__auto__)){
var root_msg = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = cljs.core.ex_data.call(null,root);
if(cljs.core.truth_(temp__5720__auto__)){
var data = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data.call(null,o));
if(cljs.core.truth_(temp__5720__auto__)){
var phase = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})());
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__31840 = datafied_throwable;
var map__31840__$1 = (((((!((map__31840 == null))))?(((((map__31840.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31840.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31840):map__31840);
var via = cljs.core.get.call(null,map__31840__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__31840__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__31840__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__31841 = cljs.core.last.call(null,via);
var map__31841__$1 = (((((!((map__31841 == null))))?(((((map__31841.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31841.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31841):map__31841);
var type = cljs.core.get.call(null,map__31841__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__31841__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__31841__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__31842 = data;
var map__31842__$1 = (((((!((map__31842 == null))))?(((((map__31842.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31842.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31842):map__31842);
var problems = cljs.core.get.call(null,map__31842__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__31842__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__31842__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__31843 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__31843__$1 = (((((!((map__31843 == null))))?(((((map__31843.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31843.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31843):map__31843);
var top_data = map__31843__$1;
var source = cljs.core.get.call(null,map__31843__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__31848 = phase;
var G__31848__$1 = (((G__31848 instanceof cljs.core.Keyword))?G__31848.fqn:null);
switch (G__31848__$1) {
case "read-source":
var map__31849 = data;
var map__31849__$1 = (((((!((map__31849 == null))))?(((((map__31849.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31849.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31849):map__31849);
var line = cljs.core.get.call(null,map__31849__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__31849__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__31851 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__31851__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__31851,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__31851);
var G__31851__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__31851__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__31851__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__31851__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__31851__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__31852 = top_data;
var G__31852__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__31852,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__31852);
var G__31852__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__31852__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__31852__$1);
var G__31852__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__31852__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__31852__$2);
var G__31852__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__31852__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__31852__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__31852__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__31852__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__31853 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__31853,(0),null);
var method = cljs.core.nth.call(null,vec__31853,(1),null);
var file = cljs.core.nth.call(null,vec__31853,(2),null);
var line = cljs.core.nth.call(null,vec__31853,(3),null);
var G__31856 = top_data;
var G__31856__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__31856,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__31856);
var G__31856__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__31856__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__31856__$1);
var G__31856__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.call(null,G__31856__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__31856__$2);
var G__31856__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__31856__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__31856__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__31856__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__31856__$4;
}

break;
case "execution":
var vec__31857 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__31857,(0),null);
var method = cljs.core.nth.call(null,vec__31857,(1),null);
var file = cljs.core.nth.call(null,vec__31857,(2),null);
var line = cljs.core.nth.call(null,vec__31857,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,(function (p1__31839_SHARP_){
var or__4126__auto__ = (p1__31839_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__31839_SHARP_);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__31860 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__31860__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__31860,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__31860);
var G__31860__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__31860__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__31860__$1);
var G__31860__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
}
})())?cljs.core.assoc.call(null,G__31860__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__31860__$2);
var G__31860__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__31860__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__31860__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__31860__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__31860__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31848__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__31864){
var map__31865 = p__31864;
var map__31865__$1 = (((((!((map__31865 == null))))?(((((map__31865.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31865.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31865):map__31865);
var triage_data = map__31865__$1;
var phase = cljs.core.get.call(null,map__31865__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__31865__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__31865__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__31865__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__31865__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__31865__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__31865__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__31865__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = source;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = line;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name.call(null,(function (){var or__4126__auto__ = class$;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__31867 = phase;
var G__31867__$1 = (((G__31867 instanceof cljs.core.Keyword))?G__31867.fqn:null);
switch (G__31867__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__31868_31877 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__31869_31878 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__31870_31879 = true;
var _STAR_print_fn_STAR__temp_val__31871_31880 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__31870_31879);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__31871_31880);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__31862_SHARP_){
return cljs.core.dissoc.call(null,p1__31862_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__31869_31878);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__31868_31877);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})():format.call(null,"%s\n",cause)));

break;
case "macroexpansion":
return format.call(null,"Unexpected error%s macroexpanding %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compile-syntax-check":
return format.call(null,"Syntax error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compilation":
return format.call(null,"Unexpected error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "read-eval-result":
return format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "print-eval-result":
return format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "execution":
if(cljs.core.truth_(spec)){
return format.call(null,"Execution error - invalid arguments to %s at (%s).\n%s",symbol,loc,(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__31872_31881 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__31873_31882 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__31874_31883 = true;
var _STAR_print_fn_STAR__temp_val__31875_31884 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__31874_31883);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__31875_31884);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__31863_SHARP_){
return cljs.core.dissoc.call(null,p1__31863_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__31873_31882);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__31872_31881);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31867__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map?rel=1607284812984
