// Compiled by ClojureScript 1.10.773 {:target :nodejs}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.20";
figwheel.client.js_stringify = (((((typeof JSON !== 'undefined')) && ((!((JSON.stringify == null))))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return cljs.core.str.cljs$core$IFn$_invoke$arity$1(x);
}catch (e38285){if((e38285 instanceof Error)){
var e = e38285;
return "Error: Unable to stringify";
} else {
throw e38285;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__38288 = arguments.length;
switch (G__38288) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__38286_SHARP_){
if(typeof p1__38286_SHARP_ === 'string'){
return p1__38286_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__38286_SHARP_);
}
}),args)], null)], null));

return null;
}));

(figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
}));

(figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2);

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__4742__auto__ = [];
var len__4736__auto___38291 = arguments.length;
var i__4737__auto___38292 = (0);
while(true){
if((i__4737__auto___38292 < len__4736__auto___38291)){
args__4742__auto__.push((arguments[i__4737__auto___38292]));

var G__38293 = (i__4737__auto___38292 + (1));
i__4737__auto___38292 = G__38293;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
}));

(figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq38290){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38290));
}));

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4742__auto__ = [];
var len__4736__auto___38295 = arguments.length;
var i__4737__auto___38296 = (0);
while(true){
if((i__4737__auto___38296 < len__4736__auto___38295)){
args__4742__auto__.push((arguments[i__4737__auto___38296]));

var G__38297 = (i__4737__auto___38296 + (1));
i__4737__auto___38296 = G__38297;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
}));

(figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq38294){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38294));
}));

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
(cljs.core._STAR_print_newline_STAR_ = false);

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),"Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",(cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF")].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__38298){
var map__38299 = p__38298;
var map__38299__$1 = (((((!((map__38299 == null))))?(((((map__38299.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38299.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38299):map__38299);
var message = cljs.core.get.call(null,map__38299__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__38299__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__4126__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return false;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return ((cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts))));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__35214__auto___38378 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__35215__auto__ = (function (){var switch__35119__auto__ = (function (state_38350){
var state_val_38351 = (state_38350[(1)]);
if((state_val_38351 === (7))){
var inst_38346 = (state_38350[(2)]);
var state_38350__$1 = state_38350;
var statearr_38352_38379 = state_38350__$1;
(statearr_38352_38379[(2)] = inst_38346);

(statearr_38352_38379[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38351 === (1))){
var state_38350__$1 = state_38350;
var statearr_38353_38380 = state_38350__$1;
(statearr_38353_38380[(2)] = null);

(statearr_38353_38380[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38351 === (4))){
var inst_38303 = (state_38350[(7)]);
var inst_38303__$1 = (state_38350[(2)]);
var state_38350__$1 = (function (){var statearr_38354 = state_38350;
(statearr_38354[(7)] = inst_38303__$1);

return statearr_38354;
})();
if(cljs.core.truth_(inst_38303__$1)){
var statearr_38355_38381 = state_38350__$1;
(statearr_38355_38381[(1)] = (5));

} else {
var statearr_38356_38382 = state_38350__$1;
(statearr_38356_38382[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38351 === (15))){
var inst_38310 = (state_38350[(8)]);
var inst_38325 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_38310);
var inst_38326 = cljs.core.first.call(null,inst_38325);
var inst_38327 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_38326);
var inst_38328 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_38327)].join('');
var inst_38329 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_38328);
var state_38350__$1 = state_38350;
var statearr_38357_38383 = state_38350__$1;
(statearr_38357_38383[(2)] = inst_38329);

(statearr_38357_38383[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38351 === (13))){
var inst_38334 = (state_38350[(2)]);
var state_38350__$1 = state_38350;
var statearr_38358_38384 = state_38350__$1;
(statearr_38358_38384[(2)] = inst_38334);

(statearr_38358_38384[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38351 === (6))){
var state_38350__$1 = state_38350;
var statearr_38359_38385 = state_38350__$1;
(statearr_38359_38385[(2)] = null);

(statearr_38359_38385[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38351 === (17))){
var inst_38332 = (state_38350[(2)]);
var state_38350__$1 = state_38350;
var statearr_38360_38386 = state_38350__$1;
(statearr_38360_38386[(2)] = inst_38332);

(statearr_38360_38386[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38351 === (3))){
var inst_38348 = (state_38350[(2)]);
var state_38350__$1 = state_38350;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38350__$1,inst_38348);
} else {
if((state_val_38351 === (12))){
var inst_38309 = (state_38350[(9)]);
var inst_38323 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_38309,opts);
var state_38350__$1 = state_38350;
if(inst_38323){
var statearr_38361_38387 = state_38350__$1;
(statearr_38361_38387[(1)] = (15));

} else {
var statearr_38362_38388 = state_38350__$1;
(statearr_38362_38388[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38351 === (2))){
var state_38350__$1 = state_38350;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38350__$1,(4),ch);
} else {
if((state_val_38351 === (11))){
var inst_38310 = (state_38350[(8)]);
var inst_38315 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_38316 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_38310);
var inst_38317 = cljs.core.async.timeout.call(null,(1000));
var inst_38318 = [inst_38316,inst_38317];
var inst_38319 = (new cljs.core.PersistentVector(null,2,(5),inst_38315,inst_38318,null));
var state_38350__$1 = state_38350;
return cljs.core.async.ioc_alts_BANG_.call(null,state_38350__$1,(14),inst_38319);
} else {
if((state_val_38351 === (9))){
var inst_38310 = (state_38350[(8)]);
var inst_38336 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_38337 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_38310);
var inst_38338 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_38337);
var inst_38339 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_38338)].join('');
var inst_38340 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_38339);
var state_38350__$1 = (function (){var statearr_38363 = state_38350;
(statearr_38363[(10)] = inst_38336);

return statearr_38363;
})();
var statearr_38364_38389 = state_38350__$1;
(statearr_38364_38389[(2)] = inst_38340);

(statearr_38364_38389[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38351 === (5))){
var inst_38303 = (state_38350[(7)]);
var inst_38305 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_38306 = (new cljs.core.PersistentArrayMap(null,2,inst_38305,null));
var inst_38307 = (new cljs.core.PersistentHashSet(null,inst_38306,null));
var inst_38308 = figwheel.client.focus_msgs.call(null,inst_38307,inst_38303);
var inst_38309 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_38308);
var inst_38310 = cljs.core.first.call(null,inst_38308);
var inst_38311 = figwheel.client.autoload_QMARK_.call(null);
var state_38350__$1 = (function (){var statearr_38365 = state_38350;
(statearr_38365[(8)] = inst_38310);

(statearr_38365[(9)] = inst_38309);

return statearr_38365;
})();
if(cljs.core.truth_(inst_38311)){
var statearr_38366_38390 = state_38350__$1;
(statearr_38366_38390[(1)] = (8));

} else {
var statearr_38367_38391 = state_38350__$1;
(statearr_38367_38391[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38351 === (14))){
var inst_38321 = (state_38350[(2)]);
var state_38350__$1 = state_38350;
var statearr_38368_38392 = state_38350__$1;
(statearr_38368_38392[(2)] = inst_38321);

(statearr_38368_38392[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38351 === (16))){
var state_38350__$1 = state_38350;
var statearr_38369_38393 = state_38350__$1;
(statearr_38369_38393[(2)] = null);

(statearr_38369_38393[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38351 === (10))){
var inst_38342 = (state_38350[(2)]);
var state_38350__$1 = (function (){var statearr_38370 = state_38350;
(statearr_38370[(11)] = inst_38342);

return statearr_38370;
})();
var statearr_38371_38394 = state_38350__$1;
(statearr_38371_38394[(2)] = null);

(statearr_38371_38394[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38351 === (8))){
var inst_38309 = (state_38350[(9)]);
var inst_38313 = figwheel.client.reload_file_state_QMARK_.call(null,inst_38309,opts);
var state_38350__$1 = state_38350;
if(cljs.core.truth_(inst_38313)){
var statearr_38372_38395 = state_38350__$1;
(statearr_38372_38395[(1)] = (11));

} else {
var statearr_38373_38396 = state_38350__$1;
(statearr_38373_38396[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__35120__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__35120__auto____0 = (function (){
var statearr_38374 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38374[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__35120__auto__);

(statearr_38374[(1)] = (1));

return statearr_38374;
});
var figwheel$client$file_reloader_plugin_$_state_machine__35120__auto____1 = (function (state_38350){
while(true){
var ret_value__35121__auto__ = (function (){try{while(true){
var result__35122__auto__ = switch__35119__auto__.call(null,state_38350);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35122__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35122__auto__;
}
break;
}
}catch (e38375){if((e38375 instanceof Object)){
var ex__35123__auto__ = e38375;
var statearr_38376_38397 = state_38350;
(statearr_38376_38397[(5)] = ex__35123__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38350);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38375;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35121__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38398 = state_38350;
state_38350 = G__38398;
continue;
} else {
return ret_value__35121__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__35120__auto__ = function(state_38350){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__35120__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__35120__auto____1.call(this,state_38350);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__35120__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__35120__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__35120__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__35120__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__35120__auto__;
})()
})();
var state__35216__auto__ = (function (){var statearr_38377 = f__35215__auto__.call(null);
(statearr_38377[(6)] = c__35214__auto___38378);

return statearr_38377;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35216__auto__);
}));


return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__38399_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__38399_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(figwheel.client.utils.node_env_QMARK_.call(null)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(goog.userAgent.product.SAFARI){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(goog.userAgent.product.CHROME){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(goog.userAgent.product.FIREFOX){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(goog.userAgent.product.IE){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_38405 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__38401 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__38402 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__38403 = true;
var _STAR_print_fn_STAR__temp_val__38404 = (function (x){
return sb.append(x);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__38403);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__38404);

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
var result_value__$1 = (((!(typeof result_value === 'string')))?cljs.core.pr_str.call(null,result_value):result_value);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value__$1], null));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__38402);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__38401);
}}catch (e38400){if((e38400 instanceof Error)){
var e = e38400;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_38405], null));
} else {
var e = e38400;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return (cljs.user = ({}));
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__38406){
var map__38407 = p__38406;
var map__38407__$1 = (((((!((map__38407 == null))))?(((((map__38407.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38407.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38407):map__38407);
var opts = map__38407__$1;
var build_id = cljs.core.get.call(null,map__38407__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return (function (p__38409){
var vec__38410 = p__38409;
var seq__38411 = cljs.core.seq.call(null,vec__38410);
var first__38412 = cljs.core.first.call(null,seq__38411);
var seq__38411__$1 = cljs.core.next.call(null,seq__38411);
var map__38413 = first__38412;
var map__38413__$1 = (((((!((map__38413 == null))))?(((((map__38413.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38413.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38413):map__38413);
var msg = map__38413__$1;
var msg_name = cljs.core.get.call(null,map__38413__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__38411__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,(function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
}));
} else {
return null;
}
});
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__38415){
var vec__38416 = p__38415;
var seq__38417 = cljs.core.seq.call(null,vec__38416);
var first__38418 = cljs.core.first.call(null,seq__38417);
var seq__38417__$1 = cljs.core.next.call(null,seq__38417);
var map__38419 = first__38418;
var map__38419__$1 = (((((!((map__38419 == null))))?(((((map__38419.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38419.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38419):map__38419);
var msg = map__38419__$1;
var msg_name = cljs.core.get.call(null,map__38419__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__38417__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__38421){
var map__38422 = p__38421;
var map__38422__$1 = (((((!((map__38422 == null))))?(((((map__38422.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38422.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38422):map__38422);
var on_compile_warning = cljs.core.get.call(null,map__38422__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__38422__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return (function (p__38424){
var vec__38425 = p__38424;
var seq__38426 = cljs.core.seq.call(null,vec__38425);
var first__38427 = cljs.core.first.call(null,seq__38426);
var seq__38426__$1 = cljs.core.next.call(null,seq__38426);
var map__38428 = first__38427;
var map__38428__$1 = (((((!((map__38428 == null))))?(((((map__38428.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38428.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38428):map__38428);
var msg = map__38428__$1;
var msg_name = cljs.core.get.call(null,map__38428__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__38426__$1;
var pred__38430 = cljs.core._EQ_;
var expr__38431 = msg_name;
if(cljs.core.truth_(pred__38430.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__38431))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__38430.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__38431))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__35214__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__35215__auto__ = (function (){var switch__35119__auto__ = (function (state_38520){
var state_val_38521 = (state_38520[(1)]);
if((state_val_38521 === (7))){
var inst_38440 = (state_38520[(2)]);
var state_38520__$1 = state_38520;
if(cljs.core.truth_(inst_38440)){
var statearr_38522_38569 = state_38520__$1;
(statearr_38522_38569[(1)] = (8));

} else {
var statearr_38523_38570 = state_38520__$1;
(statearr_38523_38570[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38521 === (20))){
var inst_38514 = (state_38520[(2)]);
var state_38520__$1 = state_38520;
var statearr_38524_38571 = state_38520__$1;
(statearr_38524_38571[(2)] = inst_38514);

(statearr_38524_38571[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38521 === (27))){
var inst_38510 = (state_38520[(2)]);
var state_38520__$1 = state_38520;
var statearr_38525_38572 = state_38520__$1;
(statearr_38525_38572[(2)] = inst_38510);

(statearr_38525_38572[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38521 === (1))){
var inst_38433 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_38520__$1 = state_38520;
if(cljs.core.truth_(inst_38433)){
var statearr_38526_38573 = state_38520__$1;
(statearr_38526_38573[(1)] = (2));

} else {
var statearr_38527_38574 = state_38520__$1;
(statearr_38527_38574[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38521 === (24))){
var inst_38512 = (state_38520[(2)]);
var state_38520__$1 = state_38520;
var statearr_38528_38575 = state_38520__$1;
(statearr_38528_38575[(2)] = inst_38512);

(statearr_38528_38575[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38521 === (4))){
var inst_38518 = (state_38520[(2)]);
var state_38520__$1 = state_38520;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38520__$1,inst_38518);
} else {
if((state_val_38521 === (15))){
var inst_38516 = (state_38520[(2)]);
var state_38520__$1 = state_38520;
var statearr_38529_38576 = state_38520__$1;
(statearr_38529_38576[(2)] = inst_38516);

(statearr_38529_38576[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38521 === (21))){
var inst_38469 = (state_38520[(2)]);
var inst_38470 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38471 = figwheel.client.auto_jump_to_error.call(null,opts,inst_38470);
var state_38520__$1 = (function (){var statearr_38530 = state_38520;
(statearr_38530[(7)] = inst_38469);

return statearr_38530;
})();
var statearr_38531_38577 = state_38520__$1;
(statearr_38531_38577[(2)] = inst_38471);

(statearr_38531_38577[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38521 === (31))){
var inst_38499 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_38520__$1 = state_38520;
if(inst_38499){
var statearr_38532_38578 = state_38520__$1;
(statearr_38532_38578[(1)] = (34));

} else {
var statearr_38533_38579 = state_38520__$1;
(statearr_38533_38579[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38521 === (32))){
var inst_38508 = (state_38520[(2)]);
var state_38520__$1 = state_38520;
var statearr_38534_38580 = state_38520__$1;
(statearr_38534_38580[(2)] = inst_38508);

(statearr_38534_38580[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38521 === (33))){
var inst_38495 = (state_38520[(2)]);
var inst_38496 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38497 = figwheel.client.auto_jump_to_error.call(null,opts,inst_38496);
var state_38520__$1 = (function (){var statearr_38535 = state_38520;
(statearr_38535[(8)] = inst_38495);

return statearr_38535;
})();
var statearr_38536_38581 = state_38520__$1;
(statearr_38536_38581[(2)] = inst_38497);

(statearr_38536_38581[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38521 === (13))){
var inst_38454 = figwheel.client.heads_up.clear.call(null);
var state_38520__$1 = state_38520;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38520__$1,(16),inst_38454);
} else {
if((state_val_38521 === (22))){
var inst_38475 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38476 = figwheel.client.heads_up.append_warning_message.call(null,inst_38475);
var state_38520__$1 = state_38520;
var statearr_38537_38582 = state_38520__$1;
(statearr_38537_38582[(2)] = inst_38476);

(statearr_38537_38582[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38521 === (36))){
var inst_38506 = (state_38520[(2)]);
var state_38520__$1 = state_38520;
var statearr_38538_38583 = state_38520__$1;
(statearr_38538_38583[(2)] = inst_38506);

(statearr_38538_38583[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38521 === (29))){
var inst_38486 = (state_38520[(2)]);
var inst_38487 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38488 = figwheel.client.auto_jump_to_error.call(null,opts,inst_38487);
var state_38520__$1 = (function (){var statearr_38539 = state_38520;
(statearr_38539[(9)] = inst_38486);

return statearr_38539;
})();
var statearr_38540_38584 = state_38520__$1;
(statearr_38540_38584[(2)] = inst_38488);

(statearr_38540_38584[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38521 === (6))){
var inst_38435 = (state_38520[(10)]);
var state_38520__$1 = state_38520;
var statearr_38541_38585 = state_38520__$1;
(statearr_38541_38585[(2)] = inst_38435);

(statearr_38541_38585[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38521 === (28))){
var inst_38482 = (state_38520[(2)]);
var inst_38483 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38484 = figwheel.client.heads_up.display_warning.call(null,inst_38483);
var state_38520__$1 = (function (){var statearr_38542 = state_38520;
(statearr_38542[(11)] = inst_38482);

return statearr_38542;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38520__$1,(29),inst_38484);
} else {
if((state_val_38521 === (25))){
var inst_38480 = figwheel.client.heads_up.clear.call(null);
var state_38520__$1 = state_38520;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38520__$1,(28),inst_38480);
} else {
if((state_val_38521 === (34))){
var inst_38501 = figwheel.client.heads_up.flash_loaded.call(null);
var state_38520__$1 = state_38520;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38520__$1,(37),inst_38501);
} else {
if((state_val_38521 === (17))){
var inst_38460 = (state_38520[(2)]);
var inst_38461 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38462 = figwheel.client.auto_jump_to_error.call(null,opts,inst_38461);
var state_38520__$1 = (function (){var statearr_38543 = state_38520;
(statearr_38543[(12)] = inst_38460);

return statearr_38543;
})();
var statearr_38544_38586 = state_38520__$1;
(statearr_38544_38586[(2)] = inst_38462);

(statearr_38544_38586[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38521 === (3))){
var inst_38452 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_38520__$1 = state_38520;
if(inst_38452){
var statearr_38545_38587 = state_38520__$1;
(statearr_38545_38587[(1)] = (13));

} else {
var statearr_38546_38588 = state_38520__$1;
(statearr_38546_38588[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38521 === (12))){
var inst_38448 = (state_38520[(2)]);
var state_38520__$1 = state_38520;
var statearr_38547_38589 = state_38520__$1;
(statearr_38547_38589[(2)] = inst_38448);

(statearr_38547_38589[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38521 === (2))){
var inst_38435 = (state_38520[(10)]);
var inst_38435__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_38520__$1 = (function (){var statearr_38548 = state_38520;
(statearr_38548[(10)] = inst_38435__$1);

return statearr_38548;
})();
if(cljs.core.truth_(inst_38435__$1)){
var statearr_38549_38590 = state_38520__$1;
(statearr_38549_38590[(1)] = (5));

} else {
var statearr_38550_38591 = state_38520__$1;
(statearr_38550_38591[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38521 === (23))){
var inst_38478 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_38520__$1 = state_38520;
if(inst_38478){
var statearr_38551_38592 = state_38520__$1;
(statearr_38551_38592[(1)] = (25));

} else {
var statearr_38552_38593 = state_38520__$1;
(statearr_38552_38593[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38521 === (35))){
var state_38520__$1 = state_38520;
var statearr_38553_38594 = state_38520__$1;
(statearr_38553_38594[(2)] = null);

(statearr_38553_38594[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38521 === (19))){
var inst_38473 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_38520__$1 = state_38520;
if(inst_38473){
var statearr_38554_38595 = state_38520__$1;
(statearr_38554_38595[(1)] = (22));

} else {
var statearr_38555_38596 = state_38520__$1;
(statearr_38555_38596[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38521 === (11))){
var inst_38444 = (state_38520[(2)]);
var state_38520__$1 = state_38520;
var statearr_38556_38597 = state_38520__$1;
(statearr_38556_38597[(2)] = inst_38444);

(statearr_38556_38597[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38521 === (9))){
var inst_38446 = figwheel.client.heads_up.clear.call(null);
var state_38520__$1 = state_38520;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38520__$1,(12),inst_38446);
} else {
if((state_val_38521 === (5))){
var inst_38437 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_38520__$1 = state_38520;
var statearr_38557_38598 = state_38520__$1;
(statearr_38557_38598[(2)] = inst_38437);

(statearr_38557_38598[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38521 === (14))){
var inst_38464 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_38520__$1 = state_38520;
if(inst_38464){
var statearr_38558_38599 = state_38520__$1;
(statearr_38558_38599[(1)] = (18));

} else {
var statearr_38559_38600 = state_38520__$1;
(statearr_38559_38600[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38521 === (26))){
var inst_38490 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_38520__$1 = state_38520;
if(inst_38490){
var statearr_38560_38601 = state_38520__$1;
(statearr_38560_38601[(1)] = (30));

} else {
var statearr_38561_38602 = state_38520__$1;
(statearr_38561_38602[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38521 === (16))){
var inst_38456 = (state_38520[(2)]);
var inst_38457 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38458 = figwheel.client.heads_up.display_exception.call(null,inst_38457);
var state_38520__$1 = (function (){var statearr_38562 = state_38520;
(statearr_38562[(13)] = inst_38456);

return statearr_38562;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38520__$1,(17),inst_38458);
} else {
if((state_val_38521 === (30))){
var inst_38492 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38493 = figwheel.client.heads_up.display_warning.call(null,inst_38492);
var state_38520__$1 = state_38520;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38520__$1,(33),inst_38493);
} else {
if((state_val_38521 === (10))){
var inst_38450 = (state_38520[(2)]);
var state_38520__$1 = state_38520;
var statearr_38563_38603 = state_38520__$1;
(statearr_38563_38603[(2)] = inst_38450);

(statearr_38563_38603[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38521 === (18))){
var inst_38466 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38467 = figwheel.client.heads_up.display_exception.call(null,inst_38466);
var state_38520__$1 = state_38520;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38520__$1,(21),inst_38467);
} else {
if((state_val_38521 === (37))){
var inst_38503 = (state_38520[(2)]);
var state_38520__$1 = state_38520;
var statearr_38564_38604 = state_38520__$1;
(statearr_38564_38604[(2)] = inst_38503);

(statearr_38564_38604[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38521 === (8))){
var inst_38442 = figwheel.client.heads_up.flash_loaded.call(null);
var state_38520__$1 = state_38520;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38520__$1,(11),inst_38442);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35120__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35120__auto____0 = (function (){
var statearr_38565 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38565[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35120__auto__);

(statearr_38565[(1)] = (1));

return statearr_38565;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35120__auto____1 = (function (state_38520){
while(true){
var ret_value__35121__auto__ = (function (){try{while(true){
var result__35122__auto__ = switch__35119__auto__.call(null,state_38520);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35122__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35122__auto__;
}
break;
}
}catch (e38566){if((e38566 instanceof Object)){
var ex__35123__auto__ = e38566;
var statearr_38567_38605 = state_38520;
(statearr_38567_38605[(5)] = ex__35123__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38520);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38566;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35121__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38606 = state_38520;
state_38520 = G__38606;
continue;
} else {
return ret_value__35121__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35120__auto__ = function(state_38520){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35120__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35120__auto____1.call(this,state_38520);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35120__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35120__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35120__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35120__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35120__auto__;
})()
})();
var state__35216__auto__ = (function (){var statearr_38568 = f__35215__auto__.call(null);
(statearr_38568[(6)] = c__35214__auto__);

return statearr_38568;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35216__auto__);
}));

return c__35214__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__35214__auto___38635 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__35215__auto__ = (function (){var switch__35119__auto__ = (function (state_38621){
var state_val_38622 = (state_38621[(1)]);
if((state_val_38622 === (1))){
var state_38621__$1 = state_38621;
var statearr_38623_38636 = state_38621__$1;
(statearr_38623_38636[(2)] = null);

(statearr_38623_38636[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38622 === (2))){
var state_38621__$1 = state_38621;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38621__$1,(4),ch);
} else {
if((state_val_38622 === (3))){
var inst_38619 = (state_38621[(2)]);
var state_38621__$1 = state_38621;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38621__$1,inst_38619);
} else {
if((state_val_38622 === (4))){
var inst_38609 = (state_38621[(7)]);
var inst_38609__$1 = (state_38621[(2)]);
var state_38621__$1 = (function (){var statearr_38624 = state_38621;
(statearr_38624[(7)] = inst_38609__$1);

return statearr_38624;
})();
if(cljs.core.truth_(inst_38609__$1)){
var statearr_38625_38637 = state_38621__$1;
(statearr_38625_38637[(1)] = (5));

} else {
var statearr_38626_38638 = state_38621__$1;
(statearr_38626_38638[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38622 === (5))){
var inst_38609 = (state_38621[(7)]);
var inst_38611 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_38609);
var state_38621__$1 = state_38621;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38621__$1,(8),inst_38611);
} else {
if((state_val_38622 === (6))){
var state_38621__$1 = state_38621;
var statearr_38627_38639 = state_38621__$1;
(statearr_38627_38639[(2)] = null);

(statearr_38627_38639[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38622 === (7))){
var inst_38617 = (state_38621[(2)]);
var state_38621__$1 = state_38621;
var statearr_38628_38640 = state_38621__$1;
(statearr_38628_38640[(2)] = inst_38617);

(statearr_38628_38640[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38622 === (8))){
var inst_38613 = (state_38621[(2)]);
var state_38621__$1 = (function (){var statearr_38629 = state_38621;
(statearr_38629[(8)] = inst_38613);

return statearr_38629;
})();
var statearr_38630_38641 = state_38621__$1;
(statearr_38630_38641[(2)] = null);

(statearr_38630_38641[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__35120__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__35120__auto____0 = (function (){
var statearr_38631 = [null,null,null,null,null,null,null,null,null];
(statearr_38631[(0)] = figwheel$client$heads_up_plugin_$_state_machine__35120__auto__);

(statearr_38631[(1)] = (1));

return statearr_38631;
});
var figwheel$client$heads_up_plugin_$_state_machine__35120__auto____1 = (function (state_38621){
while(true){
var ret_value__35121__auto__ = (function (){try{while(true){
var result__35122__auto__ = switch__35119__auto__.call(null,state_38621);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35122__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35122__auto__;
}
break;
}
}catch (e38632){if((e38632 instanceof Object)){
var ex__35123__auto__ = e38632;
var statearr_38633_38642 = state_38621;
(statearr_38633_38642[(5)] = ex__35123__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38621);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38632;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35121__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38643 = state_38621;
state_38621 = G__38643;
continue;
} else {
return ret_value__35121__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__35120__auto__ = function(state_38621){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__35120__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__35120__auto____1.call(this,state_38621);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__35120__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__35120__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__35120__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__35120__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__35120__auto__;
})()
})();
var state__35216__auto__ = (function (){var statearr_38634 = f__35215__auto__.call(null);
(statearr_38634[(6)] = c__35214__auto___38635);

return statearr_38634;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35216__auto__);
}));


figwheel.client.heads_up.ensure_container.call(null);

return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__35214__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__35215__auto__ = (function (){var switch__35119__auto__ = (function (state_38649){
var state_val_38650 = (state_38649[(1)]);
if((state_val_38650 === (1))){
var inst_38644 = cljs.core.async.timeout.call(null,(3000));
var state_38649__$1 = state_38649;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38649__$1,(2),inst_38644);
} else {
if((state_val_38650 === (2))){
var inst_38646 = (state_38649[(2)]);
var inst_38647 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_38649__$1 = (function (){var statearr_38651 = state_38649;
(statearr_38651[(7)] = inst_38646);

return statearr_38651;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38649__$1,inst_38647);
} else {
return null;
}
}
});
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__35120__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__35120__auto____0 = (function (){
var statearr_38652 = [null,null,null,null,null,null,null,null];
(statearr_38652[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__35120__auto__);

(statearr_38652[(1)] = (1));

return statearr_38652;
});
var figwheel$client$enforce_project_plugin_$_state_machine__35120__auto____1 = (function (state_38649){
while(true){
var ret_value__35121__auto__ = (function (){try{while(true){
var result__35122__auto__ = switch__35119__auto__.call(null,state_38649);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35122__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35122__auto__;
}
break;
}
}catch (e38653){if((e38653 instanceof Object)){
var ex__35123__auto__ = e38653;
var statearr_38654_38656 = state_38649;
(statearr_38654_38656[(5)] = ex__35123__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38649);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38653;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35121__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38657 = state_38649;
state_38649 = G__38657;
continue;
} else {
return ret_value__35121__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__35120__auto__ = function(state_38649){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__35120__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__35120__auto____1.call(this,state_38649);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__35120__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__35120__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__35120__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__35120__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__35120__auto__;
})()
})();
var state__35216__auto__ = (function (){var statearr_38655 = f__35215__auto__.call(null);
(statearr_38655[(6)] = c__35214__auto__);

return statearr_38655;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35216__auto__);
}));

return c__35214__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__5720__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__5720__auto__)){
var figwheel_version = temp__5720__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__35214__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__35215__auto__ = (function (){var switch__35119__auto__ = (function (state_38664){
var state_val_38665 = (state_38664[(1)]);
if((state_val_38665 === (1))){
var inst_38658 = cljs.core.async.timeout.call(null,(2000));
var state_38664__$1 = state_38664;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38664__$1,(2),inst_38658);
} else {
if((state_val_38665 === (2))){
var inst_38660 = (state_38664[(2)]);
var inst_38661 = ["Figwheel Client Version <strong>",figwheel.client._figwheel_version_,"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_38662 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_38661);
var state_38664__$1 = (function (){var statearr_38666 = state_38664;
(statearr_38666[(7)] = inst_38660);

return statearr_38666;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38664__$1,inst_38662);
} else {
return null;
}
}
});
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35120__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35120__auto____0 = (function (){
var statearr_38667 = [null,null,null,null,null,null,null,null];
(statearr_38667[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35120__auto__);

(statearr_38667[(1)] = (1));

return statearr_38667;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35120__auto____1 = (function (state_38664){
while(true){
var ret_value__35121__auto__ = (function (){try{while(true){
var result__35122__auto__ = switch__35119__auto__.call(null,state_38664);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35122__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35122__auto__;
}
break;
}
}catch (e38668){if((e38668 instanceof Object)){
var ex__35123__auto__ = e38668;
var statearr_38669_38671 = state_38664;
(statearr_38669_38671[(5)] = ex__35123__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38664);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38668;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35121__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38672 = state_38664;
state_38664 = G__38672;
continue;
} else {
return ret_value__35121__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35120__auto__ = function(state_38664){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35120__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35120__auto____1.call(this,state_38664);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35120__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35120__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35120__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35120__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35120__auto__;
})()
})();
var state__35216__auto__ = (function (){var statearr_38670 = f__35215__auto__.call(null);
(statearr_38670[(6)] = c__35214__auto__);

return statearr_38670;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35216__auto__);
}));

return c__35214__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__38673){
var map__38674 = p__38673;
var map__38674__$1 = (((((!((map__38674 == null))))?(((((map__38674.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38674.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38674):map__38674);
var file = cljs.core.get.call(null,map__38674__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__38674__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__38674__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__38676 = "";
var G__38676__$1 = (cljs.core.truth_(file)?[G__38676,"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__38676);
var G__38676__$2 = (cljs.core.truth_(line)?[G__38676__$1," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__38676__$1);
if(cljs.core.truth_((function (){var and__4115__auto__ = line;
if(cljs.core.truth_(and__4115__auto__)){
return column;
} else {
return and__4115__auto__;
}
})())){
return [G__38676__$2,", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__38676__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__38677){
var map__38678 = p__38677;
var map__38678__$1 = (((((!((map__38678 == null))))?(((((map__38678.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38678.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38678):map__38678);
var ed = map__38678__$1;
var exception_data = cljs.core.get.call(null,map__38678__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__38678__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
var message_38681 = (function (){var G__38680 = cljs.core.apply.call(null,cljs.core.str,"Figwheel: Compile Exception ",figwheel.client.format_messages.call(null,exception_data));
if(cljs.core.truth_(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(exception_data))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38680)," Error on ",figwheel.client.file_line_column.call(null,exception_data)].join('');
} else {
return G__38680;
}
})();
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),message_38681);

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__38682){
var map__38683 = p__38682;
var map__38683__$1 = (((((!((map__38683 == null))))?(((((map__38683.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38683.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38683):map__38683);
var w = map__38683__$1;
var message = cljs.core.get.call(null,map__38683__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",figwheel.client.file_line_column.call(null,message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.config_defaults !== 'undefined')){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/compiled/out/figwheel/client.cljs",33,1,362,362,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/compiled/out/figwheel/client.cljs",30,1,355,355,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(figwheel.client.utils.html_env_QMARK_.call(null)){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = (((!(figwheel.client.utils.html_env_QMARK_.call(null))))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__4115__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__4115__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__4115__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_json_message_watch = (function figwheel$client$add_json_message_watch(key,callback){
return figwheel.client.add_message_watch.call(null,key,cljs.core.comp.call(null,callback,cljs.core.clj__GT_js));
});
goog.exportSymbol('figwheel.client.add_json_message_watch', figwheel.client.add_json_message_watch);
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__38685 = cljs.core.seq.call(null,plugins);
var chunk__38686 = null;
var count__38687 = (0);
var i__38688 = (0);
while(true){
if((i__38688 < count__38687)){
var vec__38695 = cljs.core._nth.call(null,chunk__38686,i__38688);
var k = cljs.core.nth.call(null,vec__38695,(0),null);
var plugin = cljs.core.nth.call(null,vec__38695,(1),null);
if(cljs.core.truth_(plugin)){
var pl_38701 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__38685,chunk__38686,count__38687,i__38688,pl_38701,vec__38695,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_38701.call(null,msg_hist);
});})(seq__38685,chunk__38686,count__38687,i__38688,pl_38701,vec__38695,k,plugin))
);
} else {
}


var G__38702 = seq__38685;
var G__38703 = chunk__38686;
var G__38704 = count__38687;
var G__38705 = (i__38688 + (1));
seq__38685 = G__38702;
chunk__38686 = G__38703;
count__38687 = G__38704;
i__38688 = G__38705;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__38685);
if(temp__5720__auto__){
var seq__38685__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38685__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__38685__$1);
var G__38706 = cljs.core.chunk_rest.call(null,seq__38685__$1);
var G__38707 = c__4556__auto__;
var G__38708 = cljs.core.count.call(null,c__4556__auto__);
var G__38709 = (0);
seq__38685 = G__38706;
chunk__38686 = G__38707;
count__38687 = G__38708;
i__38688 = G__38709;
continue;
} else {
var vec__38698 = cljs.core.first.call(null,seq__38685__$1);
var k = cljs.core.nth.call(null,vec__38698,(0),null);
var plugin = cljs.core.nth.call(null,vec__38698,(1),null);
if(cljs.core.truth_(plugin)){
var pl_38710 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__38685,chunk__38686,count__38687,i__38688,pl_38710,vec__38698,k,plugin,seq__38685__$1,temp__5720__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_38710.call(null,msg_hist);
});})(seq__38685,chunk__38686,count__38687,i__38688,pl_38710,vec__38698,k,plugin,seq__38685__$1,temp__5720__auto__))
);
} else {
}


var G__38711 = cljs.core.next.call(null,seq__38685__$1);
var G__38712 = null;
var G__38713 = (0);
var G__38714 = (0);
seq__38685 = G__38711;
chunk__38686 = G__38712;
count__38687 = G__38713;
i__38688 = G__38714;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__38716 = arguments.length;
switch (G__38716) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((((!((goog.dependencies_ == null)))) || ((((!((goog.debugLoader_ == null)))) && ((!((goog.debugLoader_.dependencies_ == null)))))))){
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.__figwheel_start_once__ !== 'undefined')){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
(figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts));

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__38717_38722 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__38718_38723 = null;
var count__38719_38724 = (0);
var i__38720_38725 = (0);
while(true){
if((i__38720_38725 < count__38719_38724)){
var msg_38726 = cljs.core._nth.call(null,chunk__38718_38723,i__38720_38725);
figwheel.client.socket.handle_incoming_message.call(null,msg_38726);


var G__38727 = seq__38717_38722;
var G__38728 = chunk__38718_38723;
var G__38729 = count__38719_38724;
var G__38730 = (i__38720_38725 + (1));
seq__38717_38722 = G__38727;
chunk__38718_38723 = G__38728;
count__38719_38724 = G__38729;
i__38720_38725 = G__38730;
continue;
} else {
var temp__5720__auto___38731 = cljs.core.seq.call(null,seq__38717_38722);
if(temp__5720__auto___38731){
var seq__38717_38732__$1 = temp__5720__auto___38731;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38717_38732__$1)){
var c__4556__auto___38733 = cljs.core.chunk_first.call(null,seq__38717_38732__$1);
var G__38734 = cljs.core.chunk_rest.call(null,seq__38717_38732__$1);
var G__38735 = c__4556__auto___38733;
var G__38736 = cljs.core.count.call(null,c__4556__auto___38733);
var G__38737 = (0);
seq__38717_38722 = G__38734;
chunk__38718_38723 = G__38735;
count__38719_38724 = G__38736;
i__38720_38725 = G__38737;
continue;
} else {
var msg_38738 = cljs.core.first.call(null,seq__38717_38732__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_38738);


var G__38739 = cljs.core.next.call(null,seq__38717_38732__$1);
var G__38740 = null;
var G__38741 = (0);
var G__38742 = (0);
seq__38717_38722 = G__38739;
chunk__38718_38723 = G__38740;
count__38719_38724 = G__38741;
i__38720_38725 = G__38742;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
} else {
return null;
}
}));

(figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
}));

(figwheel.client.start.cljs$lang$maxFixedArity = 1);

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__4742__auto__ = [];
var len__4736__auto___38747 = arguments.length;
var i__4737__auto___38748 = (0);
while(true){
if((i__4737__auto___38748 < len__4736__auto___38747)){
args__4742__auto__.push((arguments[i__4737__auto___38748]));

var G__38749 = (i__4737__auto___38748 + (1));
i__4737__auto___38748 = G__38749;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__38744){
var map__38745 = p__38744;
var map__38745__$1 = (((((!((map__38745 == null))))?(((((map__38745.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38745.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38745):map__38745);
var opts = map__38745__$1;
return figwheel.client.start.call(null,opts);
}));

(figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq38743){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38743));
}));

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e38750){if((e38750 instanceof Error)){
var e = e38750;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e38750;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
(goog.dependencies_ = true);
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),(function (p__38751){
var map__38752 = p__38751;
var map__38752__$1 = (((((!((map__38752 == null))))?(((((map__38752.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38752.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38752):map__38752);
var msg_name = cljs.core.get.call(null,map__38752__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return (location.href = location.href);
} else {
return null;
}
}));
});

//# sourceMappingURL=client.js.map?rel=1607284885514
