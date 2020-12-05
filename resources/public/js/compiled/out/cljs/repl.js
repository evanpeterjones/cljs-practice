// Compiled by ClojureScript 1.10.773 {:target :nodejs}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__30801){
var map__30802 = p__30801;
var map__30802__$1 = (((((!((map__30802 == null))))?(((((map__30802.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30802.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30802):map__30802);
var m = map__30802__$1;
var n = cljs.core.get.call(null,map__30802__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__30802__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__30804_30836 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__30805_30837 = null;
var count__30806_30838 = (0);
var i__30807_30839 = (0);
while(true){
if((i__30807_30839 < count__30806_30838)){
var f_30840 = cljs.core._nth.call(null,chunk__30805_30837,i__30807_30839);
cljs.core.println.call(null,"  ",f_30840);


var G__30841 = seq__30804_30836;
var G__30842 = chunk__30805_30837;
var G__30843 = count__30806_30838;
var G__30844 = (i__30807_30839 + (1));
seq__30804_30836 = G__30841;
chunk__30805_30837 = G__30842;
count__30806_30838 = G__30843;
i__30807_30839 = G__30844;
continue;
} else {
var temp__5720__auto___30845 = cljs.core.seq.call(null,seq__30804_30836);
if(temp__5720__auto___30845){
var seq__30804_30846__$1 = temp__5720__auto___30845;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30804_30846__$1)){
var c__4556__auto___30847 = cljs.core.chunk_first.call(null,seq__30804_30846__$1);
var G__30848 = cljs.core.chunk_rest.call(null,seq__30804_30846__$1);
var G__30849 = c__4556__auto___30847;
var G__30850 = cljs.core.count.call(null,c__4556__auto___30847);
var G__30851 = (0);
seq__30804_30836 = G__30848;
chunk__30805_30837 = G__30849;
count__30806_30838 = G__30850;
i__30807_30839 = G__30851;
continue;
} else {
var f_30852 = cljs.core.first.call(null,seq__30804_30846__$1);
cljs.core.println.call(null,"  ",f_30852);


var G__30853 = cljs.core.next.call(null,seq__30804_30846__$1);
var G__30854 = null;
var G__30855 = (0);
var G__30856 = (0);
seq__30804_30836 = G__30853;
chunk__30805_30837 = G__30854;
count__30806_30838 = G__30855;
i__30807_30839 = G__30856;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_30857 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_30857);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_30857)))?cljs.core.second.call(null,arglists_30857):arglists_30857));
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
var seq__30808_30858 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__30809_30859 = null;
var count__30810_30860 = (0);
var i__30811_30861 = (0);
while(true){
if((i__30811_30861 < count__30810_30860)){
var vec__30822_30862 = cljs.core._nth.call(null,chunk__30809_30859,i__30811_30861);
var name_30863 = cljs.core.nth.call(null,vec__30822_30862,(0),null);
var map__30825_30864 = cljs.core.nth.call(null,vec__30822_30862,(1),null);
var map__30825_30865__$1 = (((((!((map__30825_30864 == null))))?(((((map__30825_30864.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30825_30864.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30825_30864):map__30825_30864);
var doc_30866 = cljs.core.get.call(null,map__30825_30865__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_30867 = cljs.core.get.call(null,map__30825_30865__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_30863);

cljs.core.println.call(null," ",arglists_30867);

if(cljs.core.truth_(doc_30866)){
cljs.core.println.call(null," ",doc_30866);
} else {
}


var G__30868 = seq__30808_30858;
var G__30869 = chunk__30809_30859;
var G__30870 = count__30810_30860;
var G__30871 = (i__30811_30861 + (1));
seq__30808_30858 = G__30868;
chunk__30809_30859 = G__30869;
count__30810_30860 = G__30870;
i__30811_30861 = G__30871;
continue;
} else {
var temp__5720__auto___30872 = cljs.core.seq.call(null,seq__30808_30858);
if(temp__5720__auto___30872){
var seq__30808_30873__$1 = temp__5720__auto___30872;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30808_30873__$1)){
var c__4556__auto___30874 = cljs.core.chunk_first.call(null,seq__30808_30873__$1);
var G__30875 = cljs.core.chunk_rest.call(null,seq__30808_30873__$1);
var G__30876 = c__4556__auto___30874;
var G__30877 = cljs.core.count.call(null,c__4556__auto___30874);
var G__30878 = (0);
seq__30808_30858 = G__30875;
chunk__30809_30859 = G__30876;
count__30810_30860 = G__30877;
i__30811_30861 = G__30878;
continue;
} else {
var vec__30827_30879 = cljs.core.first.call(null,seq__30808_30873__$1);
var name_30880 = cljs.core.nth.call(null,vec__30827_30879,(0),null);
var map__30830_30881 = cljs.core.nth.call(null,vec__30827_30879,(1),null);
var map__30830_30882__$1 = (((((!((map__30830_30881 == null))))?(((((map__30830_30881.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30830_30881.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30830_30881):map__30830_30881);
var doc_30883 = cljs.core.get.call(null,map__30830_30882__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_30884 = cljs.core.get.call(null,map__30830_30882__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_30880);

cljs.core.println.call(null," ",arglists_30884);

if(cljs.core.truth_(doc_30883)){
cljs.core.println.call(null," ",doc_30883);
} else {
}


var G__30885 = cljs.core.next.call(null,seq__30808_30873__$1);
var G__30886 = null;
var G__30887 = (0);
var G__30888 = (0);
seq__30808_30858 = G__30885;
chunk__30809_30859 = G__30886;
count__30810_30860 = G__30887;
i__30811_30861 = G__30888;
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

var seq__30832 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__30833 = null;
var count__30834 = (0);
var i__30835 = (0);
while(true){
if((i__30835 < count__30834)){
var role = cljs.core._nth.call(null,chunk__30833,i__30835);
var temp__5720__auto___30889__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___30889__$1)){
var spec_30890 = temp__5720__auto___30889__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_30890));
} else {
}


var G__30891 = seq__30832;
var G__30892 = chunk__30833;
var G__30893 = count__30834;
var G__30894 = (i__30835 + (1));
seq__30832 = G__30891;
chunk__30833 = G__30892;
count__30834 = G__30893;
i__30835 = G__30894;
continue;
} else {
var temp__5720__auto____$1 = cljs.core.seq.call(null,seq__30832);
if(temp__5720__auto____$1){
var seq__30832__$1 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30832__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__30832__$1);
var G__30895 = cljs.core.chunk_rest.call(null,seq__30832__$1);
var G__30896 = c__4556__auto__;
var G__30897 = cljs.core.count.call(null,c__4556__auto__);
var G__30898 = (0);
seq__30832 = G__30895;
chunk__30833 = G__30896;
count__30834 = G__30897;
i__30835 = G__30898;
continue;
} else {
var role = cljs.core.first.call(null,seq__30832__$1);
var temp__5720__auto___30899__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___30899__$2)){
var spec_30900 = temp__5720__auto___30899__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_30900));
} else {
}


var G__30901 = cljs.core.next.call(null,seq__30832__$1);
var G__30902 = null;
var G__30903 = (0);
var G__30904 = (0);
seq__30832 = G__30901;
chunk__30833 = G__30902;
count__30834 = G__30903;
i__30835 = G__30904;
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
var G__30905 = cljs.core.conj.call(null,via,t);
var G__30906 = cljs.core.ex_cause.call(null,t);
via = G__30905;
t = G__30906;
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
var map__30909 = datafied_throwable;
var map__30909__$1 = (((((!((map__30909 == null))))?(((((map__30909.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30909.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30909):map__30909);
var via = cljs.core.get.call(null,map__30909__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__30909__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__30909__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__30910 = cljs.core.last.call(null,via);
var map__30910__$1 = (((((!((map__30910 == null))))?(((((map__30910.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30910.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30910):map__30910);
var type = cljs.core.get.call(null,map__30910__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__30910__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__30910__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__30911 = data;
var map__30911__$1 = (((((!((map__30911 == null))))?(((((map__30911.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30911.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30911):map__30911);
var problems = cljs.core.get.call(null,map__30911__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__30911__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__30911__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__30912 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__30912__$1 = (((((!((map__30912 == null))))?(((((map__30912.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30912.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30912):map__30912);
var top_data = map__30912__$1;
var source = cljs.core.get.call(null,map__30912__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__30917 = phase;
var G__30917__$1 = (((G__30917 instanceof cljs.core.Keyword))?G__30917.fqn:null);
switch (G__30917__$1) {
case "read-source":
var map__30918 = data;
var map__30918__$1 = (((((!((map__30918 == null))))?(((((map__30918.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30918.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30918):map__30918);
var line = cljs.core.get.call(null,map__30918__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__30918__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__30920 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__30920__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__30920,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__30920);
var G__30920__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__30920__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__30920__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__30920__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__30920__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__30921 = top_data;
var G__30921__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__30921,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__30921);
var G__30921__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__30921__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__30921__$1);
var G__30921__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__30921__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__30921__$2);
var G__30921__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__30921__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__30921__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__30921__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__30921__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__30922 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__30922,(0),null);
var method = cljs.core.nth.call(null,vec__30922,(1),null);
var file = cljs.core.nth.call(null,vec__30922,(2),null);
var line = cljs.core.nth.call(null,vec__30922,(3),null);
var G__30925 = top_data;
var G__30925__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__30925,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__30925);
var G__30925__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__30925__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__30925__$1);
var G__30925__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.call(null,G__30925__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__30925__$2);
var G__30925__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__30925__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__30925__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__30925__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__30925__$4;
}

break;
case "execution":
var vec__30926 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__30926,(0),null);
var method = cljs.core.nth.call(null,vec__30926,(1),null);
var file = cljs.core.nth.call(null,vec__30926,(2),null);
var line = cljs.core.nth.call(null,vec__30926,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,(function (p1__30908_SHARP_){
var or__4126__auto__ = (p1__30908_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__30908_SHARP_);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__30929 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__30929__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__30929,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__30929);
var G__30929__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__30929__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__30929__$1);
var G__30929__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
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
})())?cljs.core.assoc.call(null,G__30929__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__30929__$2);
var G__30929__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__30929__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__30929__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__30929__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__30929__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30917__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__30933){
var map__30934 = p__30933;
var map__30934__$1 = (((((!((map__30934 == null))))?(((((map__30934.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30934.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30934):map__30934);
var triage_data = map__30934__$1;
var phase = cljs.core.get.call(null,map__30934__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__30934__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__30934__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__30934__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__30934__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__30934__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__30934__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__30934__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__30936 = phase;
var G__30936__$1 = (((G__30936 instanceof cljs.core.Keyword))?G__30936.fqn:null);
switch (G__30936__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__30937_30946 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__30938_30947 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__30939_30948 = true;
var _STAR_print_fn_STAR__temp_val__30940_30949 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__30939_30948);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__30940_30949);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__30931_SHARP_){
return cljs.core.dissoc.call(null,p1__30931_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__30938_30947);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__30937_30946);
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
var _STAR_print_newline_STAR__orig_val__30941_30950 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__30942_30951 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__30943_30952 = true;
var _STAR_print_fn_STAR__temp_val__30944_30953 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__30943_30952);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__30944_30953);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__30932_SHARP_){
return cljs.core.dissoc.call(null,p1__30932_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__30942_30951);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__30941_30950);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30936__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map?rel=1605638686919
