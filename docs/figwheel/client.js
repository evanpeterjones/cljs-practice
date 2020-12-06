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
}catch (e31179){if((e31179 instanceof Error)){
var e = e31179;
return "Error: Unable to stringify";
} else {
throw e31179;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__31182 = arguments.length;
switch (G__31182) {
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
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__31180_SHARP_){
if(typeof p1__31180_SHARP_ === 'string'){
return p1__31180_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__31180_SHARP_);
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
var len__4736__auto___31185 = arguments.length;
var i__4737__auto___31186 = (0);
while(true){
if((i__4737__auto___31186 < len__4736__auto___31185)){
args__4742__auto__.push((arguments[i__4737__auto___31186]));

var G__31187 = (i__4737__auto___31186 + (1));
i__4737__auto___31186 = G__31187;
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
(figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq31184){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31184));
}));

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4742__auto__ = [];
var len__4736__auto___31189 = arguments.length;
var i__4737__auto___31190 = (0);
while(true){
if((i__4737__auto___31190 < len__4736__auto___31189)){
args__4742__auto__.push((arguments[i__4737__auto___31190]));

var G__31191 = (i__4737__auto___31190 + (1));
i__4737__auto___31190 = G__31191;
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
(figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq31188){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31188));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__31192){
var map__31193 = p__31192;
var map__31193__$1 = (((((!((map__31193 == null))))?(((((map__31193.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31193.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31193):map__31193);
var message = cljs.core.get.call(null,map__31193__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__31193__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__27267__auto___31272 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27268__auto__ = (function (){var switch__27172__auto__ = (function (state_31244){
var state_val_31245 = (state_31244[(1)]);
if((state_val_31245 === (7))){
var inst_31240 = (state_31244[(2)]);
var state_31244__$1 = state_31244;
var statearr_31246_31273 = state_31244__$1;
(statearr_31246_31273[(2)] = inst_31240);

(statearr_31246_31273[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31245 === (1))){
var state_31244__$1 = state_31244;
var statearr_31247_31274 = state_31244__$1;
(statearr_31247_31274[(2)] = null);

(statearr_31247_31274[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31245 === (4))){
var inst_31197 = (state_31244[(7)]);
var inst_31197__$1 = (state_31244[(2)]);
var state_31244__$1 = (function (){var statearr_31248 = state_31244;
(statearr_31248[(7)] = inst_31197__$1);

return statearr_31248;
})();
if(cljs.core.truth_(inst_31197__$1)){
var statearr_31249_31275 = state_31244__$1;
(statearr_31249_31275[(1)] = (5));

} else {
var statearr_31250_31276 = state_31244__$1;
(statearr_31250_31276[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31245 === (15))){
var inst_31204 = (state_31244[(8)]);
var inst_31219 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_31204);
var inst_31220 = cljs.core.first.call(null,inst_31219);
var inst_31221 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_31220);
var inst_31222 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_31221)].join('');
var inst_31223 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_31222);
var state_31244__$1 = state_31244;
var statearr_31251_31277 = state_31244__$1;
(statearr_31251_31277[(2)] = inst_31223);

(statearr_31251_31277[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31245 === (13))){
var inst_31228 = (state_31244[(2)]);
var state_31244__$1 = state_31244;
var statearr_31252_31278 = state_31244__$1;
(statearr_31252_31278[(2)] = inst_31228);

(statearr_31252_31278[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31245 === (6))){
var state_31244__$1 = state_31244;
var statearr_31253_31279 = state_31244__$1;
(statearr_31253_31279[(2)] = null);

(statearr_31253_31279[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31245 === (17))){
var inst_31226 = (state_31244[(2)]);
var state_31244__$1 = state_31244;
var statearr_31254_31280 = state_31244__$1;
(statearr_31254_31280[(2)] = inst_31226);

(statearr_31254_31280[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31245 === (3))){
var inst_31242 = (state_31244[(2)]);
var state_31244__$1 = state_31244;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31244__$1,inst_31242);
} else {
if((state_val_31245 === (12))){
var inst_31203 = (state_31244[(9)]);
var inst_31217 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_31203,opts);
var state_31244__$1 = state_31244;
if(inst_31217){
var statearr_31255_31281 = state_31244__$1;
(statearr_31255_31281[(1)] = (15));

} else {
var statearr_31256_31282 = state_31244__$1;
(statearr_31256_31282[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31245 === (2))){
var state_31244__$1 = state_31244;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31244__$1,(4),ch);
} else {
if((state_val_31245 === (11))){
var inst_31204 = (state_31244[(8)]);
var inst_31209 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31210 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_31204);
var inst_31211 = cljs.core.async.timeout.call(null,(1000));
var inst_31212 = [inst_31210,inst_31211];
var inst_31213 = (new cljs.core.PersistentVector(null,2,(5),inst_31209,inst_31212,null));
var state_31244__$1 = state_31244;
return cljs.core.async.ioc_alts_BANG_.call(null,state_31244__$1,(14),inst_31213);
} else {
if((state_val_31245 === (9))){
var inst_31204 = (state_31244[(8)]);
var inst_31230 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_31231 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_31204);
var inst_31232 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_31231);
var inst_31233 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_31232)].join('');
var inst_31234 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_31233);
var state_31244__$1 = (function (){var statearr_31257 = state_31244;
(statearr_31257[(10)] = inst_31230);

return statearr_31257;
})();
var statearr_31258_31283 = state_31244__$1;
(statearr_31258_31283[(2)] = inst_31234);

(statearr_31258_31283[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31245 === (5))){
var inst_31197 = (state_31244[(7)]);
var inst_31199 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_31200 = (new cljs.core.PersistentArrayMap(null,2,inst_31199,null));
var inst_31201 = (new cljs.core.PersistentHashSet(null,inst_31200,null));
var inst_31202 = figwheel.client.focus_msgs.call(null,inst_31201,inst_31197);
var inst_31203 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_31202);
var inst_31204 = cljs.core.first.call(null,inst_31202);
var inst_31205 = figwheel.client.autoload_QMARK_.call(null);
var state_31244__$1 = (function (){var statearr_31259 = state_31244;
(statearr_31259[(9)] = inst_31203);

(statearr_31259[(8)] = inst_31204);

return statearr_31259;
})();
if(cljs.core.truth_(inst_31205)){
var statearr_31260_31284 = state_31244__$1;
(statearr_31260_31284[(1)] = (8));

} else {
var statearr_31261_31285 = state_31244__$1;
(statearr_31261_31285[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31245 === (14))){
var inst_31215 = (state_31244[(2)]);
var state_31244__$1 = state_31244;
var statearr_31262_31286 = state_31244__$1;
(statearr_31262_31286[(2)] = inst_31215);

(statearr_31262_31286[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31245 === (16))){
var state_31244__$1 = state_31244;
var statearr_31263_31287 = state_31244__$1;
(statearr_31263_31287[(2)] = null);

(statearr_31263_31287[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31245 === (10))){
var inst_31236 = (state_31244[(2)]);
var state_31244__$1 = (function (){var statearr_31264 = state_31244;
(statearr_31264[(11)] = inst_31236);

return statearr_31264;
})();
var statearr_31265_31288 = state_31244__$1;
(statearr_31265_31288[(2)] = null);

(statearr_31265_31288[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31245 === (8))){
var inst_31203 = (state_31244[(9)]);
var inst_31207 = figwheel.client.reload_file_state_QMARK_.call(null,inst_31203,opts);
var state_31244__$1 = state_31244;
if(cljs.core.truth_(inst_31207)){
var statearr_31266_31289 = state_31244__$1;
(statearr_31266_31289[(1)] = (11));

} else {
var statearr_31267_31290 = state_31244__$1;
(statearr_31267_31290[(1)] = (12));

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
var figwheel$client$file_reloader_plugin_$_state_machine__27173__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__27173__auto____0 = (function (){
var statearr_31268 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31268[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__27173__auto__);

(statearr_31268[(1)] = (1));

return statearr_31268;
});
var figwheel$client$file_reloader_plugin_$_state_machine__27173__auto____1 = (function (state_31244){
while(true){
var ret_value__27174__auto__ = (function (){try{while(true){
var result__27175__auto__ = switch__27172__auto__.call(null,state_31244);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27175__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27175__auto__;
}
break;
}
}catch (e31269){if((e31269 instanceof Object)){
var ex__27176__auto__ = e31269;
var statearr_31270_31291 = state_31244;
(statearr_31270_31291[(5)] = ex__27176__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31244);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31269;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27174__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31292 = state_31244;
state_31244 = G__31292;
continue;
} else {
return ret_value__27174__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__27173__auto__ = function(state_31244){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__27173__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__27173__auto____1.call(this,state_31244);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__27173__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__27173__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__27173__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__27173__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__27173__auto__;
})()
})();
var state__27269__auto__ = (function (){var statearr_31271 = f__27268__auto__.call(null);
(statearr_31271[(6)] = c__27267__auto___31272);

return statearr_31271;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27269__auto__);
}));


return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__31293_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__31293_SHARP_));
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
var base_path_31299 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__31295 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__31296 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__31297 = true;
var _STAR_print_fn_STAR__temp_val__31298 = (function (x){
return sb.append(x);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__31297);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__31298);

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
var result_value__$1 = (((!(typeof result_value === 'string')))?cljs.core.pr_str.call(null,result_value):result_value);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value__$1], null));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__31296);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__31295);
}}catch (e31294){if((e31294 instanceof Error)){
var e = e31294;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_31299], null));
} else {
var e = e31294;
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__31300){
var map__31301 = p__31300;
var map__31301__$1 = (((((!((map__31301 == null))))?(((((map__31301.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31301.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31301):map__31301);
var opts = map__31301__$1;
var build_id = cljs.core.get.call(null,map__31301__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return (function (p__31303){
var vec__31304 = p__31303;
var seq__31305 = cljs.core.seq.call(null,vec__31304);
var first__31306 = cljs.core.first.call(null,seq__31305);
var seq__31305__$1 = cljs.core.next.call(null,seq__31305);
var map__31307 = first__31306;
var map__31307__$1 = (((((!((map__31307 == null))))?(((((map__31307.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31307.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31307):map__31307);
var msg = map__31307__$1;
var msg_name = cljs.core.get.call(null,map__31307__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__31305__$1;
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
return (function (p__31309){
var vec__31310 = p__31309;
var seq__31311 = cljs.core.seq.call(null,vec__31310);
var first__31312 = cljs.core.first.call(null,seq__31311);
var seq__31311__$1 = cljs.core.next.call(null,seq__31311);
var map__31313 = first__31312;
var map__31313__$1 = (((((!((map__31313 == null))))?(((((map__31313.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31313.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31313):map__31313);
var msg = map__31313__$1;
var msg_name = cljs.core.get.call(null,map__31313__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__31311__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__31315){
var map__31316 = p__31315;
var map__31316__$1 = (((((!((map__31316 == null))))?(((((map__31316.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31316.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31316):map__31316);
var on_compile_warning = cljs.core.get.call(null,map__31316__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__31316__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return (function (p__31318){
var vec__31319 = p__31318;
var seq__31320 = cljs.core.seq.call(null,vec__31319);
var first__31321 = cljs.core.first.call(null,seq__31320);
var seq__31320__$1 = cljs.core.next.call(null,seq__31320);
var map__31322 = first__31321;
var map__31322__$1 = (((((!((map__31322 == null))))?(((((map__31322.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31322.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31322):map__31322);
var msg = map__31322__$1;
var msg_name = cljs.core.get.call(null,map__31322__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__31320__$1;
var pred__31324 = cljs.core._EQ_;
var expr__31325 = msg_name;
if(cljs.core.truth_(pred__31324.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__31325))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__31324.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__31325))){
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
var c__27267__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27268__auto__ = (function (){var switch__27172__auto__ = (function (state_31414){
var state_val_31415 = (state_31414[(1)]);
if((state_val_31415 === (7))){
var inst_31334 = (state_31414[(2)]);
var state_31414__$1 = state_31414;
if(cljs.core.truth_(inst_31334)){
var statearr_31416_31463 = state_31414__$1;
(statearr_31416_31463[(1)] = (8));

} else {
var statearr_31417_31464 = state_31414__$1;
(statearr_31417_31464[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31415 === (20))){
var inst_31408 = (state_31414[(2)]);
var state_31414__$1 = state_31414;
var statearr_31418_31465 = state_31414__$1;
(statearr_31418_31465[(2)] = inst_31408);

(statearr_31418_31465[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31415 === (27))){
var inst_31404 = (state_31414[(2)]);
var state_31414__$1 = state_31414;
var statearr_31419_31466 = state_31414__$1;
(statearr_31419_31466[(2)] = inst_31404);

(statearr_31419_31466[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31415 === (1))){
var inst_31327 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_31414__$1 = state_31414;
if(cljs.core.truth_(inst_31327)){
var statearr_31420_31467 = state_31414__$1;
(statearr_31420_31467[(1)] = (2));

} else {
var statearr_31421_31468 = state_31414__$1;
(statearr_31421_31468[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31415 === (24))){
var inst_31406 = (state_31414[(2)]);
var state_31414__$1 = state_31414;
var statearr_31422_31469 = state_31414__$1;
(statearr_31422_31469[(2)] = inst_31406);

(statearr_31422_31469[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31415 === (4))){
var inst_31412 = (state_31414[(2)]);
var state_31414__$1 = state_31414;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31414__$1,inst_31412);
} else {
if((state_val_31415 === (15))){
var inst_31410 = (state_31414[(2)]);
var state_31414__$1 = state_31414;
var statearr_31423_31470 = state_31414__$1;
(statearr_31423_31470[(2)] = inst_31410);

(statearr_31423_31470[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31415 === (21))){
var inst_31363 = (state_31414[(2)]);
var inst_31364 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31365 = figwheel.client.auto_jump_to_error.call(null,opts,inst_31364);
var state_31414__$1 = (function (){var statearr_31424 = state_31414;
(statearr_31424[(7)] = inst_31363);

return statearr_31424;
})();
var statearr_31425_31471 = state_31414__$1;
(statearr_31425_31471[(2)] = inst_31365);

(statearr_31425_31471[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31415 === (31))){
var inst_31393 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_31414__$1 = state_31414;
if(inst_31393){
var statearr_31426_31472 = state_31414__$1;
(statearr_31426_31472[(1)] = (34));

} else {
var statearr_31427_31473 = state_31414__$1;
(statearr_31427_31473[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31415 === (32))){
var inst_31402 = (state_31414[(2)]);
var state_31414__$1 = state_31414;
var statearr_31428_31474 = state_31414__$1;
(statearr_31428_31474[(2)] = inst_31402);

(statearr_31428_31474[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31415 === (33))){
var inst_31389 = (state_31414[(2)]);
var inst_31390 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31391 = figwheel.client.auto_jump_to_error.call(null,opts,inst_31390);
var state_31414__$1 = (function (){var statearr_31429 = state_31414;
(statearr_31429[(8)] = inst_31389);

return statearr_31429;
})();
var statearr_31430_31475 = state_31414__$1;
(statearr_31430_31475[(2)] = inst_31391);

(statearr_31430_31475[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31415 === (13))){
var inst_31348 = figwheel.client.heads_up.clear.call(null);
var state_31414__$1 = state_31414;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31414__$1,(16),inst_31348);
} else {
if((state_val_31415 === (22))){
var inst_31369 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31370 = figwheel.client.heads_up.append_warning_message.call(null,inst_31369);
var state_31414__$1 = state_31414;
var statearr_31431_31476 = state_31414__$1;
(statearr_31431_31476[(2)] = inst_31370);

(statearr_31431_31476[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31415 === (36))){
var inst_31400 = (state_31414[(2)]);
var state_31414__$1 = state_31414;
var statearr_31432_31477 = state_31414__$1;
(statearr_31432_31477[(2)] = inst_31400);

(statearr_31432_31477[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31415 === (29))){
var inst_31380 = (state_31414[(2)]);
var inst_31381 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31382 = figwheel.client.auto_jump_to_error.call(null,opts,inst_31381);
var state_31414__$1 = (function (){var statearr_31433 = state_31414;
(statearr_31433[(9)] = inst_31380);

return statearr_31433;
})();
var statearr_31434_31478 = state_31414__$1;
(statearr_31434_31478[(2)] = inst_31382);

(statearr_31434_31478[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31415 === (6))){
var inst_31329 = (state_31414[(10)]);
var state_31414__$1 = state_31414;
var statearr_31435_31479 = state_31414__$1;
(statearr_31435_31479[(2)] = inst_31329);

(statearr_31435_31479[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31415 === (28))){
var inst_31376 = (state_31414[(2)]);
var inst_31377 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31378 = figwheel.client.heads_up.display_warning.call(null,inst_31377);
var state_31414__$1 = (function (){var statearr_31436 = state_31414;
(statearr_31436[(11)] = inst_31376);

return statearr_31436;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31414__$1,(29),inst_31378);
} else {
if((state_val_31415 === (25))){
var inst_31374 = figwheel.client.heads_up.clear.call(null);
var state_31414__$1 = state_31414;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31414__$1,(28),inst_31374);
} else {
if((state_val_31415 === (34))){
var inst_31395 = figwheel.client.heads_up.flash_loaded.call(null);
var state_31414__$1 = state_31414;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31414__$1,(37),inst_31395);
} else {
if((state_val_31415 === (17))){
var inst_31354 = (state_31414[(2)]);
var inst_31355 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31356 = figwheel.client.auto_jump_to_error.call(null,opts,inst_31355);
var state_31414__$1 = (function (){var statearr_31437 = state_31414;
(statearr_31437[(12)] = inst_31354);

return statearr_31437;
})();
var statearr_31438_31480 = state_31414__$1;
(statearr_31438_31480[(2)] = inst_31356);

(statearr_31438_31480[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31415 === (3))){
var inst_31346 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_31414__$1 = state_31414;
if(inst_31346){
var statearr_31439_31481 = state_31414__$1;
(statearr_31439_31481[(1)] = (13));

} else {
var statearr_31440_31482 = state_31414__$1;
(statearr_31440_31482[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31415 === (12))){
var inst_31342 = (state_31414[(2)]);
var state_31414__$1 = state_31414;
var statearr_31441_31483 = state_31414__$1;
(statearr_31441_31483[(2)] = inst_31342);

(statearr_31441_31483[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31415 === (2))){
var inst_31329 = (state_31414[(10)]);
var inst_31329__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_31414__$1 = (function (){var statearr_31442 = state_31414;
(statearr_31442[(10)] = inst_31329__$1);

return statearr_31442;
})();
if(cljs.core.truth_(inst_31329__$1)){
var statearr_31443_31484 = state_31414__$1;
(statearr_31443_31484[(1)] = (5));

} else {
var statearr_31444_31485 = state_31414__$1;
(statearr_31444_31485[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31415 === (23))){
var inst_31372 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_31414__$1 = state_31414;
if(inst_31372){
var statearr_31445_31486 = state_31414__$1;
(statearr_31445_31486[(1)] = (25));

} else {
var statearr_31446_31487 = state_31414__$1;
(statearr_31446_31487[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31415 === (35))){
var state_31414__$1 = state_31414;
var statearr_31447_31488 = state_31414__$1;
(statearr_31447_31488[(2)] = null);

(statearr_31447_31488[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31415 === (19))){
var inst_31367 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_31414__$1 = state_31414;
if(inst_31367){
var statearr_31448_31489 = state_31414__$1;
(statearr_31448_31489[(1)] = (22));

} else {
var statearr_31449_31490 = state_31414__$1;
(statearr_31449_31490[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31415 === (11))){
var inst_31338 = (state_31414[(2)]);
var state_31414__$1 = state_31414;
var statearr_31450_31491 = state_31414__$1;
(statearr_31450_31491[(2)] = inst_31338);

(statearr_31450_31491[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31415 === (9))){
var inst_31340 = figwheel.client.heads_up.clear.call(null);
var state_31414__$1 = state_31414;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31414__$1,(12),inst_31340);
} else {
if((state_val_31415 === (5))){
var inst_31331 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_31414__$1 = state_31414;
var statearr_31451_31492 = state_31414__$1;
(statearr_31451_31492[(2)] = inst_31331);

(statearr_31451_31492[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31415 === (14))){
var inst_31358 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_31414__$1 = state_31414;
if(inst_31358){
var statearr_31452_31493 = state_31414__$1;
(statearr_31452_31493[(1)] = (18));

} else {
var statearr_31453_31494 = state_31414__$1;
(statearr_31453_31494[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31415 === (26))){
var inst_31384 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_31414__$1 = state_31414;
if(inst_31384){
var statearr_31454_31495 = state_31414__$1;
(statearr_31454_31495[(1)] = (30));

} else {
var statearr_31455_31496 = state_31414__$1;
(statearr_31455_31496[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31415 === (16))){
var inst_31350 = (state_31414[(2)]);
var inst_31351 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31352 = figwheel.client.heads_up.display_exception.call(null,inst_31351);
var state_31414__$1 = (function (){var statearr_31456 = state_31414;
(statearr_31456[(13)] = inst_31350);

return statearr_31456;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31414__$1,(17),inst_31352);
} else {
if((state_val_31415 === (30))){
var inst_31386 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31387 = figwheel.client.heads_up.display_warning.call(null,inst_31386);
var state_31414__$1 = state_31414;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31414__$1,(33),inst_31387);
} else {
if((state_val_31415 === (10))){
var inst_31344 = (state_31414[(2)]);
var state_31414__$1 = state_31414;
var statearr_31457_31497 = state_31414__$1;
(statearr_31457_31497[(2)] = inst_31344);

(statearr_31457_31497[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31415 === (18))){
var inst_31360 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31361 = figwheel.client.heads_up.display_exception.call(null,inst_31360);
var state_31414__$1 = state_31414;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31414__$1,(21),inst_31361);
} else {
if((state_val_31415 === (37))){
var inst_31397 = (state_31414[(2)]);
var state_31414__$1 = state_31414;
var statearr_31458_31498 = state_31414__$1;
(statearr_31458_31498[(2)] = inst_31397);

(statearr_31458_31498[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31415 === (8))){
var inst_31336 = figwheel.client.heads_up.flash_loaded.call(null);
var state_31414__$1 = state_31414;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31414__$1,(11),inst_31336);
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
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27173__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27173__auto____0 = (function (){
var statearr_31459 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31459[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27173__auto__);

(statearr_31459[(1)] = (1));

return statearr_31459;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27173__auto____1 = (function (state_31414){
while(true){
var ret_value__27174__auto__ = (function (){try{while(true){
var result__27175__auto__ = switch__27172__auto__.call(null,state_31414);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27175__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27175__auto__;
}
break;
}
}catch (e31460){if((e31460 instanceof Object)){
var ex__27176__auto__ = e31460;
var statearr_31461_31499 = state_31414;
(statearr_31461_31499[(5)] = ex__27176__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31414);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31460;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27174__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31500 = state_31414;
state_31414 = G__31500;
continue;
} else {
return ret_value__27174__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27173__auto__ = function(state_31414){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27173__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27173__auto____1.call(this,state_31414);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27173__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27173__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27173__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27173__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27173__auto__;
})()
})();
var state__27269__auto__ = (function (){var statearr_31462 = f__27268__auto__.call(null);
(statearr_31462[(6)] = c__27267__auto__);

return statearr_31462;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27269__auto__);
}));

return c__27267__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__27267__auto___31529 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27268__auto__ = (function (){var switch__27172__auto__ = (function (state_31515){
var state_val_31516 = (state_31515[(1)]);
if((state_val_31516 === (1))){
var state_31515__$1 = state_31515;
var statearr_31517_31530 = state_31515__$1;
(statearr_31517_31530[(2)] = null);

(statearr_31517_31530[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31516 === (2))){
var state_31515__$1 = state_31515;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31515__$1,(4),ch);
} else {
if((state_val_31516 === (3))){
var inst_31513 = (state_31515[(2)]);
var state_31515__$1 = state_31515;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31515__$1,inst_31513);
} else {
if((state_val_31516 === (4))){
var inst_31503 = (state_31515[(7)]);
var inst_31503__$1 = (state_31515[(2)]);
var state_31515__$1 = (function (){var statearr_31518 = state_31515;
(statearr_31518[(7)] = inst_31503__$1);

return statearr_31518;
})();
if(cljs.core.truth_(inst_31503__$1)){
var statearr_31519_31531 = state_31515__$1;
(statearr_31519_31531[(1)] = (5));

} else {
var statearr_31520_31532 = state_31515__$1;
(statearr_31520_31532[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31516 === (5))){
var inst_31503 = (state_31515[(7)]);
var inst_31505 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_31503);
var state_31515__$1 = state_31515;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31515__$1,(8),inst_31505);
} else {
if((state_val_31516 === (6))){
var state_31515__$1 = state_31515;
var statearr_31521_31533 = state_31515__$1;
(statearr_31521_31533[(2)] = null);

(statearr_31521_31533[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31516 === (7))){
var inst_31511 = (state_31515[(2)]);
var state_31515__$1 = state_31515;
var statearr_31522_31534 = state_31515__$1;
(statearr_31522_31534[(2)] = inst_31511);

(statearr_31522_31534[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31516 === (8))){
var inst_31507 = (state_31515[(2)]);
var state_31515__$1 = (function (){var statearr_31523 = state_31515;
(statearr_31523[(8)] = inst_31507);

return statearr_31523;
})();
var statearr_31524_31535 = state_31515__$1;
(statearr_31524_31535[(2)] = null);

(statearr_31524_31535[(1)] = (2));


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
var figwheel$client$heads_up_plugin_$_state_machine__27173__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__27173__auto____0 = (function (){
var statearr_31525 = [null,null,null,null,null,null,null,null,null];
(statearr_31525[(0)] = figwheel$client$heads_up_plugin_$_state_machine__27173__auto__);

(statearr_31525[(1)] = (1));

return statearr_31525;
});
var figwheel$client$heads_up_plugin_$_state_machine__27173__auto____1 = (function (state_31515){
while(true){
var ret_value__27174__auto__ = (function (){try{while(true){
var result__27175__auto__ = switch__27172__auto__.call(null,state_31515);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27175__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27175__auto__;
}
break;
}
}catch (e31526){if((e31526 instanceof Object)){
var ex__27176__auto__ = e31526;
var statearr_31527_31536 = state_31515;
(statearr_31527_31536[(5)] = ex__27176__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31515);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31526;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27174__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31537 = state_31515;
state_31515 = G__31537;
continue;
} else {
return ret_value__27174__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__27173__auto__ = function(state_31515){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__27173__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__27173__auto____1.call(this,state_31515);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__27173__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__27173__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__27173__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__27173__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__27173__auto__;
})()
})();
var state__27269__auto__ = (function (){var statearr_31528 = f__27268__auto__.call(null);
(statearr_31528[(6)] = c__27267__auto___31529);

return statearr_31528;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27269__auto__);
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
var c__27267__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27268__auto__ = (function (){var switch__27172__auto__ = (function (state_31543){
var state_val_31544 = (state_31543[(1)]);
if((state_val_31544 === (1))){
var inst_31538 = cljs.core.async.timeout.call(null,(3000));
var state_31543__$1 = state_31543;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31543__$1,(2),inst_31538);
} else {
if((state_val_31544 === (2))){
var inst_31540 = (state_31543[(2)]);
var inst_31541 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_31543__$1 = (function (){var statearr_31545 = state_31543;
(statearr_31545[(7)] = inst_31540);

return statearr_31545;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31543__$1,inst_31541);
} else {
return null;
}
}
});
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__27173__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__27173__auto____0 = (function (){
var statearr_31546 = [null,null,null,null,null,null,null,null];
(statearr_31546[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__27173__auto__);

(statearr_31546[(1)] = (1));

return statearr_31546;
});
var figwheel$client$enforce_project_plugin_$_state_machine__27173__auto____1 = (function (state_31543){
while(true){
var ret_value__27174__auto__ = (function (){try{while(true){
var result__27175__auto__ = switch__27172__auto__.call(null,state_31543);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27175__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27175__auto__;
}
break;
}
}catch (e31547){if((e31547 instanceof Object)){
var ex__27176__auto__ = e31547;
var statearr_31548_31550 = state_31543;
(statearr_31548_31550[(5)] = ex__27176__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31543);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31547;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27174__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31551 = state_31543;
state_31543 = G__31551;
continue;
} else {
return ret_value__27174__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__27173__auto__ = function(state_31543){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__27173__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__27173__auto____1.call(this,state_31543);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__27173__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__27173__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__27173__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__27173__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__27173__auto__;
})()
})();
var state__27269__auto__ = (function (){var statearr_31549 = f__27268__auto__.call(null);
(statearr_31549[(6)] = c__27267__auto__);

return statearr_31549;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27269__auto__);
}));

return c__27267__auto__;
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
var c__27267__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27268__auto__ = (function (){var switch__27172__auto__ = (function (state_31558){
var state_val_31559 = (state_31558[(1)]);
if((state_val_31559 === (1))){
var inst_31552 = cljs.core.async.timeout.call(null,(2000));
var state_31558__$1 = state_31558;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31558__$1,(2),inst_31552);
} else {
if((state_val_31559 === (2))){
var inst_31554 = (state_31558[(2)]);
var inst_31555 = ["Figwheel Client Version <strong>",figwheel.client._figwheel_version_,"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_31556 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_31555);
var state_31558__$1 = (function (){var statearr_31560 = state_31558;
(statearr_31560[(7)] = inst_31554);

return statearr_31560;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31558__$1,inst_31556);
} else {
return null;
}
}
});
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27173__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27173__auto____0 = (function (){
var statearr_31561 = [null,null,null,null,null,null,null,null];
(statearr_31561[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27173__auto__);

(statearr_31561[(1)] = (1));

return statearr_31561;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27173__auto____1 = (function (state_31558){
while(true){
var ret_value__27174__auto__ = (function (){try{while(true){
var result__27175__auto__ = switch__27172__auto__.call(null,state_31558);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27175__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27175__auto__;
}
break;
}
}catch (e31562){if((e31562 instanceof Object)){
var ex__27176__auto__ = e31562;
var statearr_31563_31565 = state_31558;
(statearr_31563_31565[(5)] = ex__27176__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31558);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31562;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27174__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31566 = state_31558;
state_31558 = G__31566;
continue;
} else {
return ret_value__27174__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27173__auto__ = function(state_31558){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27173__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27173__auto____1.call(this,state_31558);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27173__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27173__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27173__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27173__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27173__auto__;
})()
})();
var state__27269__auto__ = (function (){var statearr_31564 = f__27268__auto__.call(null);
(statearr_31564[(6)] = c__27267__auto__);

return statearr_31564;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27269__auto__);
}));

return c__27267__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__31567){
var map__31568 = p__31567;
var map__31568__$1 = (((((!((map__31568 == null))))?(((((map__31568.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31568.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31568):map__31568);
var file = cljs.core.get.call(null,map__31568__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__31568__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__31568__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__31570 = "";
var G__31570__$1 = (cljs.core.truth_(file)?[G__31570,"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__31570);
var G__31570__$2 = (cljs.core.truth_(line)?[G__31570__$1," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__31570__$1);
if(cljs.core.truth_((function (){var and__4115__auto__ = line;
if(cljs.core.truth_(and__4115__auto__)){
return column;
} else {
return and__4115__auto__;
}
})())){
return [G__31570__$2,", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__31570__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__31571){
var map__31572 = p__31571;
var map__31572__$1 = (((((!((map__31572 == null))))?(((((map__31572.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31572.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31572):map__31572);
var ed = map__31572__$1;
var exception_data = cljs.core.get.call(null,map__31572__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__31572__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
var message_31575 = (function (){var G__31574 = cljs.core.apply.call(null,cljs.core.str,"Figwheel: Compile Exception ",figwheel.client.format_messages.call(null,exception_data));
if(cljs.core.truth_(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(exception_data))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31574)," Error on ",figwheel.client.file_line_column.call(null,exception_data)].join('');
} else {
return G__31574;
}
})();
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),message_31575);

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__31576){
var map__31577 = p__31576;
var map__31577__$1 = (((((!((map__31577 == null))))?(((((map__31577.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31577.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31577):map__31577);
var w = map__31577__$1;
var message = cljs.core.get.call(null,map__31577__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"docs/figwheel/client.cljs",33,1,362,362,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"docs/figwheel/client.cljs",30,1,355,355,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
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
var seq__31579 = cljs.core.seq.call(null,plugins);
var chunk__31580 = null;
var count__31581 = (0);
var i__31582 = (0);
while(true){
if((i__31582 < count__31581)){
var vec__31589 = cljs.core._nth.call(null,chunk__31580,i__31582);
var k = cljs.core.nth.call(null,vec__31589,(0),null);
var plugin = cljs.core.nth.call(null,vec__31589,(1),null);
if(cljs.core.truth_(plugin)){
var pl_31595 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__31579,chunk__31580,count__31581,i__31582,pl_31595,vec__31589,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_31595.call(null,msg_hist);
});})(seq__31579,chunk__31580,count__31581,i__31582,pl_31595,vec__31589,k,plugin))
);
} else {
}


var G__31596 = seq__31579;
var G__31597 = chunk__31580;
var G__31598 = count__31581;
var G__31599 = (i__31582 + (1));
seq__31579 = G__31596;
chunk__31580 = G__31597;
count__31581 = G__31598;
i__31582 = G__31599;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__31579);
if(temp__5720__auto__){
var seq__31579__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31579__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__31579__$1);
var G__31600 = cljs.core.chunk_rest.call(null,seq__31579__$1);
var G__31601 = c__4556__auto__;
var G__31602 = cljs.core.count.call(null,c__4556__auto__);
var G__31603 = (0);
seq__31579 = G__31600;
chunk__31580 = G__31601;
count__31581 = G__31602;
i__31582 = G__31603;
continue;
} else {
var vec__31592 = cljs.core.first.call(null,seq__31579__$1);
var k = cljs.core.nth.call(null,vec__31592,(0),null);
var plugin = cljs.core.nth.call(null,vec__31592,(1),null);
if(cljs.core.truth_(plugin)){
var pl_31604 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__31579,chunk__31580,count__31581,i__31582,pl_31604,vec__31592,k,plugin,seq__31579__$1,temp__5720__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_31604.call(null,msg_hist);
});})(seq__31579,chunk__31580,count__31581,i__31582,pl_31604,vec__31592,k,plugin,seq__31579__$1,temp__5720__auto__))
);
} else {
}


var G__31605 = cljs.core.next.call(null,seq__31579__$1);
var G__31606 = null;
var G__31607 = (0);
var G__31608 = (0);
seq__31579 = G__31605;
chunk__31580 = G__31606;
count__31581 = G__31607;
i__31582 = G__31608;
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
var G__31610 = arguments.length;
switch (G__31610) {
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

var seq__31611_31616 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__31612_31617 = null;
var count__31613_31618 = (0);
var i__31614_31619 = (0);
while(true){
if((i__31614_31619 < count__31613_31618)){
var msg_31620 = cljs.core._nth.call(null,chunk__31612_31617,i__31614_31619);
figwheel.client.socket.handle_incoming_message.call(null,msg_31620);


var G__31621 = seq__31611_31616;
var G__31622 = chunk__31612_31617;
var G__31623 = count__31613_31618;
var G__31624 = (i__31614_31619 + (1));
seq__31611_31616 = G__31621;
chunk__31612_31617 = G__31622;
count__31613_31618 = G__31623;
i__31614_31619 = G__31624;
continue;
} else {
var temp__5720__auto___31625 = cljs.core.seq.call(null,seq__31611_31616);
if(temp__5720__auto___31625){
var seq__31611_31626__$1 = temp__5720__auto___31625;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31611_31626__$1)){
var c__4556__auto___31627 = cljs.core.chunk_first.call(null,seq__31611_31626__$1);
var G__31628 = cljs.core.chunk_rest.call(null,seq__31611_31626__$1);
var G__31629 = c__4556__auto___31627;
var G__31630 = cljs.core.count.call(null,c__4556__auto___31627);
var G__31631 = (0);
seq__31611_31616 = G__31628;
chunk__31612_31617 = G__31629;
count__31613_31618 = G__31630;
i__31614_31619 = G__31631;
continue;
} else {
var msg_31632 = cljs.core.first.call(null,seq__31611_31626__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_31632);


var G__31633 = cljs.core.next.call(null,seq__31611_31626__$1);
var G__31634 = null;
var G__31635 = (0);
var G__31636 = (0);
seq__31611_31616 = G__31633;
chunk__31612_31617 = G__31634;
count__31613_31618 = G__31635;
i__31614_31619 = G__31636;
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
var len__4736__auto___31641 = arguments.length;
var i__4737__auto___31642 = (0);
while(true){
if((i__4737__auto___31642 < len__4736__auto___31641)){
args__4742__auto__.push((arguments[i__4737__auto___31642]));

var G__31643 = (i__4737__auto___31642 + (1));
i__4737__auto___31642 = G__31643;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__31638){
var map__31639 = p__31638;
var map__31639__$1 = (((((!((map__31639 == null))))?(((((map__31639.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31639.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31639):map__31639);
var opts = map__31639__$1;
return figwheel.client.start.call(null,opts);
}));

(figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq31637){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31637));
}));

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e31644){if((e31644 instanceof Error)){
var e = e31644;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e31644;

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

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),(function (p__31645){
var map__31646 = p__31645;
var map__31646__$1 = (((((!((map__31646 == null))))?(((((map__31646.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31646.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31646):map__31646);
var msg_name = cljs.core.get.call(null,map__31646__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return (location.href = location.href);
} else {
return null;
}
}));
});

//# sourceMappingURL=client.js.map?rel=1607231750754
