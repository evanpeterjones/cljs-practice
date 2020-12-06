// Compiled by ClojureScript 1.10.773 {:target :nodejs}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__30838){
var map__30839 = p__30838;
var map__30839__$1 = (((((!((map__30839 == null))))?(((((map__30839.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30839.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30839):map__30839);
var m = map__30839__$1;
var n = cljs.core.get.call(null,map__30839__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__30839__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__30841_30873 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__30842_30874 = null;
var count__30843_30875 = (0);
var i__30844_30876 = (0);
while(true){
if((i__30844_30876 < count__30843_30875)){
var f_30877 = cljs.core._nth.call(null,chunk__30842_30874,i__30844_30876);
cljs.core.println.call(null,"  ",f_30877);


var G__30878 = seq__30841_30873;
var G__30879 = chunk__30842_30874;
var G__30880 = count__30843_30875;
var G__30881 = (i__30844_30876 + (1));
seq__30841_30873 = G__30878;
chunk__30842_30874 = G__30879;
count__30843_30875 = G__30880;
i__30844_30876 = G__30881;
continue;
} else {
var temp__5720__auto___30882 = cljs.core.seq.call(null,seq__30841_30873);
if(temp__5720__auto___30882){
var seq__30841_30883__$1 = temp__5720__auto___30882;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30841_30883__$1)){
var c__4556__auto___30884 = cljs.core.chunk_first.call(null,seq__30841_30883__$1);
var G__30885 = cljs.core.chunk_rest.call(null,seq__30841_30883__$1);
var G__30886 = c__4556__auto___30884;
var G__30887 = cljs.core.count.call(null,c__4556__auto___30884);
var G__30888 = (0);
seq__30841_30873 = G__30885;
chunk__30842_30874 = G__30886;
count__30843_30875 = G__30887;
i__30844_30876 = G__30888;
continue;
} else {
var f_30889 = cljs.core.first.call(null,seq__30841_30883__$1);
cljs.core.println.call(null,"  ",f_30889);


var G__30890 = cljs.core.next.call(null,seq__30841_30883__$1);
var G__30891 = null;
var G__30892 = (0);
var G__30893 = (0);
seq__30841_30873 = G__30890;
chunk__30842_30874 = G__30891;
count__30843_30875 = G__30892;
i__30844_30876 = G__30893;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_30894 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_30894);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_30894)))?cljs.core.second.call(null,arglists_30894):arglists_30894));
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
var seq__30845_30895 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__30846_30896 = null;
var count__30847_30897 = (0);
var i__30848_30898 = (0);
while(true){
if((i__30848_30898 < count__30847_30897)){
var vec__30859_30899 = cljs.core._nth.call(null,chunk__30846_30896,i__30848_30898);
var name_30900 = cljs.core.nth.call(null,vec__30859_30899,(0),null);
var map__30862_30901 = cljs.core.nth.call(null,vec__30859_30899,(1),null);
var map__30862_30902__$1 = (((((!((map__30862_30901 == null))))?(((((map__30862_30901.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30862_30901.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30862_30901):map__30862_30901);
var doc_30903 = cljs.core.get.call(null,map__30862_30902__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_30904 = cljs.core.get.call(null,map__30862_30902__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_30900);

cljs.core.println.call(null," ",arglists_30904);

if(cljs.core.truth_(doc_30903)){
cljs.core.println.call(null," ",doc_30903);
} else {
}


var G__30905 = seq__30845_30895;
var G__30906 = chunk__30846_30896;
var G__30907 = count__30847_30897;
var G__30908 = (i__30848_30898 + (1));
seq__30845_30895 = G__30905;
chunk__30846_30896 = G__30906;
count__30847_30897 = G__30907;
i__30848_30898 = G__30908;
continue;
} else {
var temp__5720__auto___30909 = cljs.core.seq.call(null,seq__30845_30895);
if(temp__5720__auto___30909){
var seq__30845_30910__$1 = temp__5720__auto___30909;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30845_30910__$1)){
var c__4556__auto___30911 = cljs.core.chunk_first.call(null,seq__30845_30910__$1);
var G__30912 = cljs.core.chunk_rest.call(null,seq__30845_30910__$1);
var G__30913 = c__4556__auto___30911;
var G__30914 = cljs.core.count.call(null,c__4556__auto___30911);
var G__30915 = (0);
seq__30845_30895 = G__30912;
chunk__30846_30896 = G__30913;
count__30847_30897 = G__30914;
i__30848_30898 = G__30915;
continue;
} else {
var vec__30864_30916 = cljs.core.first.call(null,seq__30845_30910__$1);
var name_30917 = cljs.core.nth.call(null,vec__30864_30916,(0),null);
var map__30867_30918 = cljs.core.nth.call(null,vec__30864_30916,(1),null);
var map__30867_30919__$1 = (((((!((map__30867_30918 == null))))?(((((map__30867_30918.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30867_30918.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30867_30918):map__30867_30918);
var doc_30920 = cljs.core.get.call(null,map__30867_30919__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_30921 = cljs.core.get.call(null,map__30867_30919__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_30917);

cljs.core.println.call(null," ",arglists_30921);

if(cljs.core.truth_(doc_30920)){
cljs.core.println.call(null," ",doc_30920);
} else {
}


var G__30922 = cljs.core.next.call(null,seq__30845_30910__$1);
var G__30923 = null;
var G__30924 = (0);
var G__30925 = (0);
seq__30845_30895 = G__30922;
chunk__30846_30896 = G__30923;
count__30847_30897 = G__30924;
i__30848_30898 = G__30925;
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

var seq__30869 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__30870 = null;
var count__30871 = (0);
var i__30872 = (0);
while(true){
if((i__30872 < count__30871)){
var role = cljs.core._nth.call(null,chunk__30870,i__30872);
var temp__5720__auto___30926__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___30926__$1)){
var spec_30927 = temp__5720__auto___30926__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_30927));
} else {
}


var G__30928 = seq__30869;
var G__30929 = chunk__30870;
var G__30930 = count__30871;
var G__30931 = (i__30872 + (1));
seq__30869 = G__30928;
chunk__30870 = G__30929;
count__30871 = G__30930;
i__30872 = G__30931;
continue;
} else {
var temp__5720__auto____$1 = cljs.core.seq.call(null,seq__30869);
if(temp__5720__auto____$1){
var seq__30869__$1 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30869__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__30869__$1);
var G__30932 = cljs.core.chunk_rest.call(null,seq__30869__$1);
var G__30933 = c__4556__auto__;
var G__30934 = cljs.core.count.call(null,c__4556__auto__);
var G__30935 = (0);
seq__30869 = G__30932;
chunk__30870 = G__30933;
count__30871 = G__30934;
i__30872 = G__30935;
continue;
} else {
var role = cljs.core.first.call(null,seq__30869__$1);
var temp__5720__auto___30936__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___30936__$2)){
var spec_30937 = temp__5720__auto___30936__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_30937));
} else {
}


var G__30938 = cljs.core.next.call(null,seq__30869__$1);
var G__30939 = null;
var G__30940 = (0);
var G__30941 = (0);
seq__30869 = G__30938;
chunk__30870 = G__30939;
count__30871 = G__30940;
i__30872 = G__30941;
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
var G__30942 = cljs.core.conj.call(null,via,t);
var G__30943 = cljs.core.ex_cause.call(null,t);
via = G__30942;
t = G__30943;
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
var map__30946 = datafied_throwable;
var map__30946__$1 = (((((!((map__30946 == null))))?(((((map__30946.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30946.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30946):map__30946);
var via = cljs.core.get.call(null,map__30946__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__30946__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__30946__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__30947 = cljs.core.last.call(null,via);
var map__30947__$1 = (((((!((map__30947 == null))))?(((((map__30947.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30947.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30947):map__30947);
var type = cljs.core.get.call(null,map__30947__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__30947__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__30947__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__30948 = data;
var map__30948__$1 = (((((!((map__30948 == null))))?(((((map__30948.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30948.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30948):map__30948);
var problems = cljs.core.get.call(null,map__30948__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__30948__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__30948__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__30949 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__30949__$1 = (((((!((map__30949 == null))))?(((((map__30949.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30949.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30949):map__30949);
var top_data = map__30949__$1;
var source = cljs.core.get.call(null,map__30949__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__30954 = phase;
var G__30954__$1 = (((G__30954 instanceof cljs.core.Keyword))?G__30954.fqn:null);
switch (G__30954__$1) {
case "read-source":
var map__30955 = data;
var map__30955__$1 = (((((!((map__30955 == null))))?(((((map__30955.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30955.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30955):map__30955);
var line = cljs.core.get.call(null,map__30955__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__30955__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__30957 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__30957__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__30957,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__30957);
var G__30957__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__30957__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__30957__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__30957__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__30957__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__30958 = top_data;
var G__30958__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__30958,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__30958);
var G__30958__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__30958__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__30958__$1);
var G__30958__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__30958__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__30958__$2);
var G__30958__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__30958__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__30958__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__30958__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__30958__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__30959 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__30959,(0),null);
var method = cljs.core.nth.call(null,vec__30959,(1),null);
var file = cljs.core.nth.call(null,vec__30959,(2),null);
var line = cljs.core.nth.call(null,vec__30959,(3),null);
var G__30962 = top_data;
var G__30962__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__30962,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__30962);
var G__30962__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__30962__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__30962__$1);
var G__30962__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.call(null,G__30962__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__30962__$2);
var G__30962__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__30962__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__30962__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__30962__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__30962__$4;
}

break;
case "execution":
var vec__30963 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__30963,(0),null);
var method = cljs.core.nth.call(null,vec__30963,(1),null);
var file = cljs.core.nth.call(null,vec__30963,(2),null);
var line = cljs.core.nth.call(null,vec__30963,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,(function (p1__30945_SHARP_){
var or__4126__auto__ = (p1__30945_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__30945_SHARP_);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__30966 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__30966__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__30966,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__30966);
var G__30966__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__30966__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__30966__$1);
var G__30966__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
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
})())?cljs.core.assoc.call(null,G__30966__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__30966__$2);
var G__30966__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__30966__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__30966__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__30966__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__30966__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30954__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__30970){
var map__30971 = p__30970;
var map__30971__$1 = (((((!((map__30971 == null))))?(((((map__30971.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30971.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30971):map__30971);
var triage_data = map__30971__$1;
var phase = cljs.core.get.call(null,map__30971__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__30971__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__30971__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__30971__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__30971__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__30971__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__30971__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__30971__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__30973 = phase;
var G__30973__$1 = (((G__30973 instanceof cljs.core.Keyword))?G__30973.fqn:null);
switch (G__30973__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__30974_30983 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__30975_30984 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__30976_30985 = true;
var _STAR_print_fn_STAR__temp_val__30977_30986 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__30976_30985);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__30977_30986);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__30968_SHARP_){
return cljs.core.dissoc.call(null,p1__30968_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__30975_30984);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__30974_30983);
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
var _STAR_print_newline_STAR__orig_val__30978_30987 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__30979_30988 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__30980_30989 = true;
var _STAR_print_fn_STAR__temp_val__30981_30990 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__30980_30989);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__30981_30990);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__30969_SHARP_){
return cljs.core.dissoc.call(null,p1__30969_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__30979_30988);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__30978_30987);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30973__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map?rel=1607231750372
