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
}catch (e31170){if((e31170 instanceof Error)){
var e = e31170;
return "Error: Unable to stringify";
} else {
throw e31170;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__31173 = arguments.length;
switch (G__31173) {
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
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__31171_SHARP_){
if(typeof p1__31171_SHARP_ === 'string'){
return p1__31171_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__31171_SHARP_);
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
var len__4736__auto___31176 = arguments.length;
var i__4737__auto___31177 = (0);
while(true){
if((i__4737__auto___31177 < len__4736__auto___31176)){
args__4742__auto__.push((arguments[i__4737__auto___31177]));

var G__31178 = (i__4737__auto___31177 + (1));
i__4737__auto___31177 = G__31178;
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
(figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq31175){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31175));
}));

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4742__auto__ = [];
var len__4736__auto___31180 = arguments.length;
var i__4737__auto___31181 = (0);
while(true){
if((i__4737__auto___31181 < len__4736__auto___31180)){
args__4742__auto__.push((arguments[i__4737__auto___31181]));

var G__31182 = (i__4737__auto___31181 + (1));
i__4737__auto___31181 = G__31182;
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
(figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq31179){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31179));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__31183){
var map__31184 = p__31183;
var map__31184__$1 = (((((!((map__31184 == null))))?(((((map__31184.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31184.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31184):map__31184);
var message = cljs.core.get.call(null,map__31184__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__31184__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__27259__auto___31263 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27260__auto__ = (function (){var switch__27164__auto__ = (function (state_31235){
var state_val_31236 = (state_31235[(1)]);
if((state_val_31236 === (7))){
var inst_31231 = (state_31235[(2)]);
var state_31235__$1 = state_31235;
var statearr_31237_31264 = state_31235__$1;
(statearr_31237_31264[(2)] = inst_31231);

(statearr_31237_31264[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31236 === (1))){
var state_31235__$1 = state_31235;
var statearr_31238_31265 = state_31235__$1;
(statearr_31238_31265[(2)] = null);

(statearr_31238_31265[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31236 === (4))){
var inst_31188 = (state_31235[(7)]);
var inst_31188__$1 = (state_31235[(2)]);
var state_31235__$1 = (function (){var statearr_31239 = state_31235;
(statearr_31239[(7)] = inst_31188__$1);

return statearr_31239;
})();
if(cljs.core.truth_(inst_31188__$1)){
var statearr_31240_31266 = state_31235__$1;
(statearr_31240_31266[(1)] = (5));

} else {
var statearr_31241_31267 = state_31235__$1;
(statearr_31241_31267[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31236 === (15))){
var inst_31195 = (state_31235[(8)]);
var inst_31210 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_31195);
var inst_31211 = cljs.core.first.call(null,inst_31210);
var inst_31212 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_31211);
var inst_31213 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_31212)].join('');
var inst_31214 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_31213);
var state_31235__$1 = state_31235;
var statearr_31242_31268 = state_31235__$1;
(statearr_31242_31268[(2)] = inst_31214);

(statearr_31242_31268[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31236 === (13))){
var inst_31219 = (state_31235[(2)]);
var state_31235__$1 = state_31235;
var statearr_31243_31269 = state_31235__$1;
(statearr_31243_31269[(2)] = inst_31219);

(statearr_31243_31269[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31236 === (6))){
var state_31235__$1 = state_31235;
var statearr_31244_31270 = state_31235__$1;
(statearr_31244_31270[(2)] = null);

(statearr_31244_31270[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31236 === (17))){
var inst_31217 = (state_31235[(2)]);
var state_31235__$1 = state_31235;
var statearr_31245_31271 = state_31235__$1;
(statearr_31245_31271[(2)] = inst_31217);

(statearr_31245_31271[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31236 === (3))){
var inst_31233 = (state_31235[(2)]);
var state_31235__$1 = state_31235;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31235__$1,inst_31233);
} else {
if((state_val_31236 === (12))){
var inst_31194 = (state_31235[(9)]);
var inst_31208 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_31194,opts);
var state_31235__$1 = state_31235;
if(inst_31208){
var statearr_31246_31272 = state_31235__$1;
(statearr_31246_31272[(1)] = (15));

} else {
var statearr_31247_31273 = state_31235__$1;
(statearr_31247_31273[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31236 === (2))){
var state_31235__$1 = state_31235;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31235__$1,(4),ch);
} else {
if((state_val_31236 === (11))){
var inst_31195 = (state_31235[(8)]);
var inst_31200 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31201 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_31195);
var inst_31202 = cljs.core.async.timeout.call(null,(1000));
var inst_31203 = [inst_31201,inst_31202];
var inst_31204 = (new cljs.core.PersistentVector(null,2,(5),inst_31200,inst_31203,null));
var state_31235__$1 = state_31235;
return cljs.core.async.ioc_alts_BANG_.call(null,state_31235__$1,(14),inst_31204);
} else {
if((state_val_31236 === (9))){
var inst_31195 = (state_31235[(8)]);
var inst_31221 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_31222 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_31195);
var inst_31223 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_31222);
var inst_31224 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_31223)].join('');
var inst_31225 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_31224);
var state_31235__$1 = (function (){var statearr_31248 = state_31235;
(statearr_31248[(10)] = inst_31221);

return statearr_31248;
})();
var statearr_31249_31274 = state_31235__$1;
(statearr_31249_31274[(2)] = inst_31225);

(statearr_31249_31274[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31236 === (5))){
var inst_31188 = (state_31235[(7)]);
var inst_31190 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_31191 = (new cljs.core.PersistentArrayMap(null,2,inst_31190,null));
var inst_31192 = (new cljs.core.PersistentHashSet(null,inst_31191,null));
var inst_31193 = figwheel.client.focus_msgs.call(null,inst_31192,inst_31188);
var inst_31194 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_31193);
var inst_31195 = cljs.core.first.call(null,inst_31193);
var inst_31196 = figwheel.client.autoload_QMARK_.call(null);
var state_31235__$1 = (function (){var statearr_31250 = state_31235;
(statearr_31250[(9)] = inst_31194);

(statearr_31250[(8)] = inst_31195);

return statearr_31250;
})();
if(cljs.core.truth_(inst_31196)){
var statearr_31251_31275 = state_31235__$1;
(statearr_31251_31275[(1)] = (8));

} else {
var statearr_31252_31276 = state_31235__$1;
(statearr_31252_31276[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31236 === (14))){
var inst_31206 = (state_31235[(2)]);
var state_31235__$1 = state_31235;
var statearr_31253_31277 = state_31235__$1;
(statearr_31253_31277[(2)] = inst_31206);

(statearr_31253_31277[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31236 === (16))){
var state_31235__$1 = state_31235;
var statearr_31254_31278 = state_31235__$1;
(statearr_31254_31278[(2)] = null);

(statearr_31254_31278[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31236 === (10))){
var inst_31227 = (state_31235[(2)]);
var state_31235__$1 = (function (){var statearr_31255 = state_31235;
(statearr_31255[(11)] = inst_31227);

return statearr_31255;
})();
var statearr_31256_31279 = state_31235__$1;
(statearr_31256_31279[(2)] = null);

(statearr_31256_31279[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31236 === (8))){
var inst_31194 = (state_31235[(9)]);
var inst_31198 = figwheel.client.reload_file_state_QMARK_.call(null,inst_31194,opts);
var state_31235__$1 = state_31235;
if(cljs.core.truth_(inst_31198)){
var statearr_31257_31280 = state_31235__$1;
(statearr_31257_31280[(1)] = (11));

} else {
var statearr_31258_31281 = state_31235__$1;
(statearr_31258_31281[(1)] = (12));

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
var figwheel$client$file_reloader_plugin_$_state_machine__27165__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__27165__auto____0 = (function (){
var statearr_31259 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31259[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__27165__auto__);

(statearr_31259[(1)] = (1));

return statearr_31259;
});
var figwheel$client$file_reloader_plugin_$_state_machine__27165__auto____1 = (function (state_31235){
while(true){
var ret_value__27166__auto__ = (function (){try{while(true){
var result__27167__auto__ = switch__27164__auto__.call(null,state_31235);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27167__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27167__auto__;
}
break;
}
}catch (e31260){if((e31260 instanceof Object)){
var ex__27168__auto__ = e31260;
var statearr_31261_31282 = state_31235;
(statearr_31261_31282[(5)] = ex__27168__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31235);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31260;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31283 = state_31235;
state_31235 = G__31283;
continue;
} else {
return ret_value__27166__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__27165__auto__ = function(state_31235){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__27165__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__27165__auto____1.call(this,state_31235);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__27165__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__27165__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__27165__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__27165__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__27165__auto__;
})()
})();
var state__27261__auto__ = (function (){var statearr_31262 = f__27260__auto__.call(null);
(statearr_31262[(6)] = c__27259__auto___31263);

return statearr_31262;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27261__auto__);
}));


return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__31284_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__31284_SHARP_));
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
var base_path_31290 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__31286 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__31287 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__31288 = true;
var _STAR_print_fn_STAR__temp_val__31289 = (function (x){
return sb.append(x);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__31288);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__31289);

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
var result_value__$1 = (((!(typeof result_value === 'string')))?cljs.core.pr_str.call(null,result_value):result_value);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value__$1], null));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__31287);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__31286);
}}catch (e31285){if((e31285 instanceof Error)){
var e = e31285;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_31290], null));
} else {
var e = e31285;
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__31291){
var map__31292 = p__31291;
var map__31292__$1 = (((((!((map__31292 == null))))?(((((map__31292.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31292.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31292):map__31292);
var opts = map__31292__$1;
var build_id = cljs.core.get.call(null,map__31292__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return (function (p__31294){
var vec__31295 = p__31294;
var seq__31296 = cljs.core.seq.call(null,vec__31295);
var first__31297 = cljs.core.first.call(null,seq__31296);
var seq__31296__$1 = cljs.core.next.call(null,seq__31296);
var map__31298 = first__31297;
var map__31298__$1 = (((((!((map__31298 == null))))?(((((map__31298.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31298.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31298):map__31298);
var msg = map__31298__$1;
var msg_name = cljs.core.get.call(null,map__31298__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__31296__$1;
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
return (function (p__31300){
var vec__31301 = p__31300;
var seq__31302 = cljs.core.seq.call(null,vec__31301);
var first__31303 = cljs.core.first.call(null,seq__31302);
var seq__31302__$1 = cljs.core.next.call(null,seq__31302);
var map__31304 = first__31303;
var map__31304__$1 = (((((!((map__31304 == null))))?(((((map__31304.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31304.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31304):map__31304);
var msg = map__31304__$1;
var msg_name = cljs.core.get.call(null,map__31304__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__31302__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__31306){
var map__31307 = p__31306;
var map__31307__$1 = (((((!((map__31307 == null))))?(((((map__31307.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31307.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31307):map__31307);
var on_compile_warning = cljs.core.get.call(null,map__31307__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__31307__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
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
var pred__31315 = cljs.core._EQ_;
var expr__31316 = msg_name;
if(cljs.core.truth_(pred__31315.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__31316))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__31315.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__31316))){
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
var c__27259__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27260__auto__ = (function (){var switch__27164__auto__ = (function (state_31405){
var state_val_31406 = (state_31405[(1)]);
if((state_val_31406 === (7))){
var inst_31325 = (state_31405[(2)]);
var state_31405__$1 = state_31405;
if(cljs.core.truth_(inst_31325)){
var statearr_31407_31454 = state_31405__$1;
(statearr_31407_31454[(1)] = (8));

} else {
var statearr_31408_31455 = state_31405__$1;
(statearr_31408_31455[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31406 === (20))){
var inst_31399 = (state_31405[(2)]);
var state_31405__$1 = state_31405;
var statearr_31409_31456 = state_31405__$1;
(statearr_31409_31456[(2)] = inst_31399);

(statearr_31409_31456[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31406 === (27))){
var inst_31395 = (state_31405[(2)]);
var state_31405__$1 = state_31405;
var statearr_31410_31457 = state_31405__$1;
(statearr_31410_31457[(2)] = inst_31395);

(statearr_31410_31457[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31406 === (1))){
var inst_31318 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_31405__$1 = state_31405;
if(cljs.core.truth_(inst_31318)){
var statearr_31411_31458 = state_31405__$1;
(statearr_31411_31458[(1)] = (2));

} else {
var statearr_31412_31459 = state_31405__$1;
(statearr_31412_31459[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31406 === (24))){
var inst_31397 = (state_31405[(2)]);
var state_31405__$1 = state_31405;
var statearr_31413_31460 = state_31405__$1;
(statearr_31413_31460[(2)] = inst_31397);

(statearr_31413_31460[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31406 === (4))){
var inst_31403 = (state_31405[(2)]);
var state_31405__$1 = state_31405;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31405__$1,inst_31403);
} else {
if((state_val_31406 === (15))){
var inst_31401 = (state_31405[(2)]);
var state_31405__$1 = state_31405;
var statearr_31414_31461 = state_31405__$1;
(statearr_31414_31461[(2)] = inst_31401);

(statearr_31414_31461[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31406 === (21))){
var inst_31354 = (state_31405[(2)]);
var inst_31355 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31356 = figwheel.client.auto_jump_to_error.call(null,opts,inst_31355);
var state_31405__$1 = (function (){var statearr_31415 = state_31405;
(statearr_31415[(7)] = inst_31354);

return statearr_31415;
})();
var statearr_31416_31462 = state_31405__$1;
(statearr_31416_31462[(2)] = inst_31356);

(statearr_31416_31462[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31406 === (31))){
var inst_31384 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_31405__$1 = state_31405;
if(inst_31384){
var statearr_31417_31463 = state_31405__$1;
(statearr_31417_31463[(1)] = (34));

} else {
var statearr_31418_31464 = state_31405__$1;
(statearr_31418_31464[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31406 === (32))){
var inst_31393 = (state_31405[(2)]);
var state_31405__$1 = state_31405;
var statearr_31419_31465 = state_31405__$1;
(statearr_31419_31465[(2)] = inst_31393);

(statearr_31419_31465[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31406 === (33))){
var inst_31380 = (state_31405[(2)]);
var inst_31381 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31382 = figwheel.client.auto_jump_to_error.call(null,opts,inst_31381);
var state_31405__$1 = (function (){var statearr_31420 = state_31405;
(statearr_31420[(8)] = inst_31380);

return statearr_31420;
})();
var statearr_31421_31466 = state_31405__$1;
(statearr_31421_31466[(2)] = inst_31382);

(statearr_31421_31466[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31406 === (13))){
var inst_31339 = figwheel.client.heads_up.clear.call(null);
var state_31405__$1 = state_31405;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31405__$1,(16),inst_31339);
} else {
if((state_val_31406 === (22))){
var inst_31360 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31361 = figwheel.client.heads_up.append_warning_message.call(null,inst_31360);
var state_31405__$1 = state_31405;
var statearr_31422_31467 = state_31405__$1;
(statearr_31422_31467[(2)] = inst_31361);

(statearr_31422_31467[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31406 === (36))){
var inst_31391 = (state_31405[(2)]);
var state_31405__$1 = state_31405;
var statearr_31423_31468 = state_31405__$1;
(statearr_31423_31468[(2)] = inst_31391);

(statearr_31423_31468[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31406 === (29))){
var inst_31371 = (state_31405[(2)]);
var inst_31372 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31373 = figwheel.client.auto_jump_to_error.call(null,opts,inst_31372);
var state_31405__$1 = (function (){var statearr_31424 = state_31405;
(statearr_31424[(9)] = inst_31371);

return statearr_31424;
})();
var statearr_31425_31469 = state_31405__$1;
(statearr_31425_31469[(2)] = inst_31373);

(statearr_31425_31469[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31406 === (6))){
var inst_31320 = (state_31405[(10)]);
var state_31405__$1 = state_31405;
var statearr_31426_31470 = state_31405__$1;
(statearr_31426_31470[(2)] = inst_31320);

(statearr_31426_31470[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31406 === (28))){
var inst_31367 = (state_31405[(2)]);
var inst_31368 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31369 = figwheel.client.heads_up.display_warning.call(null,inst_31368);
var state_31405__$1 = (function (){var statearr_31427 = state_31405;
(statearr_31427[(11)] = inst_31367);

return statearr_31427;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31405__$1,(29),inst_31369);
} else {
if((state_val_31406 === (25))){
var inst_31365 = figwheel.client.heads_up.clear.call(null);
var state_31405__$1 = state_31405;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31405__$1,(28),inst_31365);
} else {
if((state_val_31406 === (34))){
var inst_31386 = figwheel.client.heads_up.flash_loaded.call(null);
var state_31405__$1 = state_31405;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31405__$1,(37),inst_31386);
} else {
if((state_val_31406 === (17))){
var inst_31345 = (state_31405[(2)]);
var inst_31346 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31347 = figwheel.client.auto_jump_to_error.call(null,opts,inst_31346);
var state_31405__$1 = (function (){var statearr_31428 = state_31405;
(statearr_31428[(12)] = inst_31345);

return statearr_31428;
})();
var statearr_31429_31471 = state_31405__$1;
(statearr_31429_31471[(2)] = inst_31347);

(statearr_31429_31471[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31406 === (3))){
var inst_31337 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_31405__$1 = state_31405;
if(inst_31337){
var statearr_31430_31472 = state_31405__$1;
(statearr_31430_31472[(1)] = (13));

} else {
var statearr_31431_31473 = state_31405__$1;
(statearr_31431_31473[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31406 === (12))){
var inst_31333 = (state_31405[(2)]);
var state_31405__$1 = state_31405;
var statearr_31432_31474 = state_31405__$1;
(statearr_31432_31474[(2)] = inst_31333);

(statearr_31432_31474[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31406 === (2))){
var inst_31320 = (state_31405[(10)]);
var inst_31320__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_31405__$1 = (function (){var statearr_31433 = state_31405;
(statearr_31433[(10)] = inst_31320__$1);

return statearr_31433;
})();
if(cljs.core.truth_(inst_31320__$1)){
var statearr_31434_31475 = state_31405__$1;
(statearr_31434_31475[(1)] = (5));

} else {
var statearr_31435_31476 = state_31405__$1;
(statearr_31435_31476[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31406 === (23))){
var inst_31363 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_31405__$1 = state_31405;
if(inst_31363){
var statearr_31436_31477 = state_31405__$1;
(statearr_31436_31477[(1)] = (25));

} else {
var statearr_31437_31478 = state_31405__$1;
(statearr_31437_31478[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31406 === (35))){
var state_31405__$1 = state_31405;
var statearr_31438_31479 = state_31405__$1;
(statearr_31438_31479[(2)] = null);

(statearr_31438_31479[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31406 === (19))){
var inst_31358 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_31405__$1 = state_31405;
if(inst_31358){
var statearr_31439_31480 = state_31405__$1;
(statearr_31439_31480[(1)] = (22));

} else {
var statearr_31440_31481 = state_31405__$1;
(statearr_31440_31481[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31406 === (11))){
var inst_31329 = (state_31405[(2)]);
var state_31405__$1 = state_31405;
var statearr_31441_31482 = state_31405__$1;
(statearr_31441_31482[(2)] = inst_31329);

(statearr_31441_31482[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31406 === (9))){
var inst_31331 = figwheel.client.heads_up.clear.call(null);
var state_31405__$1 = state_31405;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31405__$1,(12),inst_31331);
} else {
if((state_val_31406 === (5))){
var inst_31322 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_31405__$1 = state_31405;
var statearr_31442_31483 = state_31405__$1;
(statearr_31442_31483[(2)] = inst_31322);

(statearr_31442_31483[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31406 === (14))){
var inst_31349 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_31405__$1 = state_31405;
if(inst_31349){
var statearr_31443_31484 = state_31405__$1;
(statearr_31443_31484[(1)] = (18));

} else {
var statearr_31444_31485 = state_31405__$1;
(statearr_31444_31485[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31406 === (26))){
var inst_31375 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_31405__$1 = state_31405;
if(inst_31375){
var statearr_31445_31486 = state_31405__$1;
(statearr_31445_31486[(1)] = (30));

} else {
var statearr_31446_31487 = state_31405__$1;
(statearr_31446_31487[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31406 === (16))){
var inst_31341 = (state_31405[(2)]);
var inst_31342 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31343 = figwheel.client.heads_up.display_exception.call(null,inst_31342);
var state_31405__$1 = (function (){var statearr_31447 = state_31405;
(statearr_31447[(13)] = inst_31341);

return statearr_31447;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31405__$1,(17),inst_31343);
} else {
if((state_val_31406 === (30))){
var inst_31377 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31378 = figwheel.client.heads_up.display_warning.call(null,inst_31377);
var state_31405__$1 = state_31405;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31405__$1,(33),inst_31378);
} else {
if((state_val_31406 === (10))){
var inst_31335 = (state_31405[(2)]);
var state_31405__$1 = state_31405;
var statearr_31448_31488 = state_31405__$1;
(statearr_31448_31488[(2)] = inst_31335);

(statearr_31448_31488[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31406 === (18))){
var inst_31351 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31352 = figwheel.client.heads_up.display_exception.call(null,inst_31351);
var state_31405__$1 = state_31405;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31405__$1,(21),inst_31352);
} else {
if((state_val_31406 === (37))){
var inst_31388 = (state_31405[(2)]);
var state_31405__$1 = state_31405;
var statearr_31449_31489 = state_31405__$1;
(statearr_31449_31489[(2)] = inst_31388);

(statearr_31449_31489[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31406 === (8))){
var inst_31327 = figwheel.client.heads_up.flash_loaded.call(null);
var state_31405__$1 = state_31405;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31405__$1,(11),inst_31327);
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
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27165__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27165__auto____0 = (function (){
var statearr_31450 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31450[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27165__auto__);

(statearr_31450[(1)] = (1));

return statearr_31450;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27165__auto____1 = (function (state_31405){
while(true){
var ret_value__27166__auto__ = (function (){try{while(true){
var result__27167__auto__ = switch__27164__auto__.call(null,state_31405);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27167__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27167__auto__;
}
break;
}
}catch (e31451){if((e31451 instanceof Object)){
var ex__27168__auto__ = e31451;
var statearr_31452_31490 = state_31405;
(statearr_31452_31490[(5)] = ex__27168__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31405);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31451;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31491 = state_31405;
state_31405 = G__31491;
continue;
} else {
return ret_value__27166__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27165__auto__ = function(state_31405){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27165__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27165__auto____1.call(this,state_31405);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27165__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27165__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27165__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27165__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27165__auto__;
})()
})();
var state__27261__auto__ = (function (){var statearr_31453 = f__27260__auto__.call(null);
(statearr_31453[(6)] = c__27259__auto__);

return statearr_31453;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27261__auto__);
}));

return c__27259__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__27259__auto___31520 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27260__auto__ = (function (){var switch__27164__auto__ = (function (state_31506){
var state_val_31507 = (state_31506[(1)]);
if((state_val_31507 === (1))){
var state_31506__$1 = state_31506;
var statearr_31508_31521 = state_31506__$1;
(statearr_31508_31521[(2)] = null);

(statearr_31508_31521[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31507 === (2))){
var state_31506__$1 = state_31506;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31506__$1,(4),ch);
} else {
if((state_val_31507 === (3))){
var inst_31504 = (state_31506[(2)]);
var state_31506__$1 = state_31506;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31506__$1,inst_31504);
} else {
if((state_val_31507 === (4))){
var inst_31494 = (state_31506[(7)]);
var inst_31494__$1 = (state_31506[(2)]);
var state_31506__$1 = (function (){var statearr_31509 = state_31506;
(statearr_31509[(7)] = inst_31494__$1);

return statearr_31509;
})();
if(cljs.core.truth_(inst_31494__$1)){
var statearr_31510_31522 = state_31506__$1;
(statearr_31510_31522[(1)] = (5));

} else {
var statearr_31511_31523 = state_31506__$1;
(statearr_31511_31523[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31507 === (5))){
var inst_31494 = (state_31506[(7)]);
var inst_31496 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_31494);
var state_31506__$1 = state_31506;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31506__$1,(8),inst_31496);
} else {
if((state_val_31507 === (6))){
var state_31506__$1 = state_31506;
var statearr_31512_31524 = state_31506__$1;
(statearr_31512_31524[(2)] = null);

(statearr_31512_31524[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31507 === (7))){
var inst_31502 = (state_31506[(2)]);
var state_31506__$1 = state_31506;
var statearr_31513_31525 = state_31506__$1;
(statearr_31513_31525[(2)] = inst_31502);

(statearr_31513_31525[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31507 === (8))){
var inst_31498 = (state_31506[(2)]);
var state_31506__$1 = (function (){var statearr_31514 = state_31506;
(statearr_31514[(8)] = inst_31498);

return statearr_31514;
})();
var statearr_31515_31526 = state_31506__$1;
(statearr_31515_31526[(2)] = null);

(statearr_31515_31526[(1)] = (2));


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
var figwheel$client$heads_up_plugin_$_state_machine__27165__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__27165__auto____0 = (function (){
var statearr_31516 = [null,null,null,null,null,null,null,null,null];
(statearr_31516[(0)] = figwheel$client$heads_up_plugin_$_state_machine__27165__auto__);

(statearr_31516[(1)] = (1));

return statearr_31516;
});
var figwheel$client$heads_up_plugin_$_state_machine__27165__auto____1 = (function (state_31506){
while(true){
var ret_value__27166__auto__ = (function (){try{while(true){
var result__27167__auto__ = switch__27164__auto__.call(null,state_31506);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27167__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27167__auto__;
}
break;
}
}catch (e31517){if((e31517 instanceof Object)){
var ex__27168__auto__ = e31517;
var statearr_31518_31527 = state_31506;
(statearr_31518_31527[(5)] = ex__27168__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31506);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31517;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31528 = state_31506;
state_31506 = G__31528;
continue;
} else {
return ret_value__27166__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__27165__auto__ = function(state_31506){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__27165__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__27165__auto____1.call(this,state_31506);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__27165__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__27165__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__27165__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__27165__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__27165__auto__;
})()
})();
var state__27261__auto__ = (function (){var statearr_31519 = f__27260__auto__.call(null);
(statearr_31519[(6)] = c__27259__auto___31520);

return statearr_31519;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27261__auto__);
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
var c__27259__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27260__auto__ = (function (){var switch__27164__auto__ = (function (state_31534){
var state_val_31535 = (state_31534[(1)]);
if((state_val_31535 === (1))){
var inst_31529 = cljs.core.async.timeout.call(null,(3000));
var state_31534__$1 = state_31534;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31534__$1,(2),inst_31529);
} else {
if((state_val_31535 === (2))){
var inst_31531 = (state_31534[(2)]);
var inst_31532 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_31534__$1 = (function (){var statearr_31536 = state_31534;
(statearr_31536[(7)] = inst_31531);

return statearr_31536;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31534__$1,inst_31532);
} else {
return null;
}
}
});
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__27165__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__27165__auto____0 = (function (){
var statearr_31537 = [null,null,null,null,null,null,null,null];
(statearr_31537[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__27165__auto__);

(statearr_31537[(1)] = (1));

return statearr_31537;
});
var figwheel$client$enforce_project_plugin_$_state_machine__27165__auto____1 = (function (state_31534){
while(true){
var ret_value__27166__auto__ = (function (){try{while(true){
var result__27167__auto__ = switch__27164__auto__.call(null,state_31534);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27167__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27167__auto__;
}
break;
}
}catch (e31538){if((e31538 instanceof Object)){
var ex__27168__auto__ = e31538;
var statearr_31539_31541 = state_31534;
(statearr_31539_31541[(5)] = ex__27168__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31534);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31538;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31542 = state_31534;
state_31534 = G__31542;
continue;
} else {
return ret_value__27166__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__27165__auto__ = function(state_31534){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__27165__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__27165__auto____1.call(this,state_31534);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__27165__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__27165__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__27165__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__27165__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__27165__auto__;
})()
})();
var state__27261__auto__ = (function (){var statearr_31540 = f__27260__auto__.call(null);
(statearr_31540[(6)] = c__27259__auto__);

return statearr_31540;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27261__auto__);
}));

return c__27259__auto__;
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
var c__27259__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27260__auto__ = (function (){var switch__27164__auto__ = (function (state_31549){
var state_val_31550 = (state_31549[(1)]);
if((state_val_31550 === (1))){
var inst_31543 = cljs.core.async.timeout.call(null,(2000));
var state_31549__$1 = state_31549;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31549__$1,(2),inst_31543);
} else {
if((state_val_31550 === (2))){
var inst_31545 = (state_31549[(2)]);
var inst_31546 = ["Figwheel Client Version <strong>",figwheel.client._figwheel_version_,"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_31547 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_31546);
var state_31549__$1 = (function (){var statearr_31551 = state_31549;
(statearr_31551[(7)] = inst_31545);

return statearr_31551;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31549__$1,inst_31547);
} else {
return null;
}
}
});
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27165__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27165__auto____0 = (function (){
var statearr_31552 = [null,null,null,null,null,null,null,null];
(statearr_31552[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27165__auto__);

(statearr_31552[(1)] = (1));

return statearr_31552;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27165__auto____1 = (function (state_31549){
while(true){
var ret_value__27166__auto__ = (function (){try{while(true){
var result__27167__auto__ = switch__27164__auto__.call(null,state_31549);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27167__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27167__auto__;
}
break;
}
}catch (e31553){if((e31553 instanceof Object)){
var ex__27168__auto__ = e31553;
var statearr_31554_31556 = state_31549;
(statearr_31554_31556[(5)] = ex__27168__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31549);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31553;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31557 = state_31549;
state_31549 = G__31557;
continue;
} else {
return ret_value__27166__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27165__auto__ = function(state_31549){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27165__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27165__auto____1.call(this,state_31549);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27165__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27165__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27165__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27165__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27165__auto__;
})()
})();
var state__27261__auto__ = (function (){var statearr_31555 = f__27260__auto__.call(null);
(statearr_31555[(6)] = c__27259__auto__);

return statearr_31555;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27261__auto__);
}));

return c__27259__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__31558){
var map__31559 = p__31558;
var map__31559__$1 = (((((!((map__31559 == null))))?(((((map__31559.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31559.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31559):map__31559);
var file = cljs.core.get.call(null,map__31559__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__31559__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__31559__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__31561 = "";
var G__31561__$1 = (cljs.core.truth_(file)?[G__31561,"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__31561);
var G__31561__$2 = (cljs.core.truth_(line)?[G__31561__$1," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__31561__$1);
if(cljs.core.truth_((function (){var and__4115__auto__ = line;
if(cljs.core.truth_(and__4115__auto__)){
return column;
} else {
return and__4115__auto__;
}
})())){
return [G__31561__$2,", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__31561__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__31562){
var map__31563 = p__31562;
var map__31563__$1 = (((((!((map__31563 == null))))?(((((map__31563.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31563.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31563):map__31563);
var ed = map__31563__$1;
var exception_data = cljs.core.get.call(null,map__31563__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__31563__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
var message_31566 = (function (){var G__31565 = cljs.core.apply.call(null,cljs.core.str,"Figwheel: Compile Exception ",figwheel.client.format_messages.call(null,exception_data));
if(cljs.core.truth_(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(exception_data))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31565)," Error on ",figwheel.client.file_line_column.call(null,exception_data)].join('');
} else {
return G__31565;
}
})();
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),message_31566);

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__31567){
var map__31568 = p__31567;
var map__31568__$1 = (((((!((map__31568 == null))))?(((((map__31568.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31568.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31568):map__31568);
var w = map__31568__$1;
var message = cljs.core.get.call(null,map__31568__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__31570 = cljs.core.seq.call(null,plugins);
var chunk__31571 = null;
var count__31572 = (0);
var i__31573 = (0);
while(true){
if((i__31573 < count__31572)){
var vec__31580 = cljs.core._nth.call(null,chunk__31571,i__31573);
var k = cljs.core.nth.call(null,vec__31580,(0),null);
var plugin = cljs.core.nth.call(null,vec__31580,(1),null);
if(cljs.core.truth_(plugin)){
var pl_31586 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__31570,chunk__31571,count__31572,i__31573,pl_31586,vec__31580,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_31586.call(null,msg_hist);
});})(seq__31570,chunk__31571,count__31572,i__31573,pl_31586,vec__31580,k,plugin))
);
} else {
}


var G__31587 = seq__31570;
var G__31588 = chunk__31571;
var G__31589 = count__31572;
var G__31590 = (i__31573 + (1));
seq__31570 = G__31587;
chunk__31571 = G__31588;
count__31572 = G__31589;
i__31573 = G__31590;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__31570);
if(temp__5720__auto__){
var seq__31570__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31570__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__31570__$1);
var G__31591 = cljs.core.chunk_rest.call(null,seq__31570__$1);
var G__31592 = c__4556__auto__;
var G__31593 = cljs.core.count.call(null,c__4556__auto__);
var G__31594 = (0);
seq__31570 = G__31591;
chunk__31571 = G__31592;
count__31572 = G__31593;
i__31573 = G__31594;
continue;
} else {
var vec__31583 = cljs.core.first.call(null,seq__31570__$1);
var k = cljs.core.nth.call(null,vec__31583,(0),null);
var plugin = cljs.core.nth.call(null,vec__31583,(1),null);
if(cljs.core.truth_(plugin)){
var pl_31595 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__31570,chunk__31571,count__31572,i__31573,pl_31595,vec__31583,k,plugin,seq__31570__$1,temp__5720__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_31595.call(null,msg_hist);
});})(seq__31570,chunk__31571,count__31572,i__31573,pl_31595,vec__31583,k,plugin,seq__31570__$1,temp__5720__auto__))
);
} else {
}


var G__31596 = cljs.core.next.call(null,seq__31570__$1);
var G__31597 = null;
var G__31598 = (0);
var G__31599 = (0);
seq__31570 = G__31596;
chunk__31571 = G__31597;
count__31572 = G__31598;
i__31573 = G__31599;
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
var G__31601 = arguments.length;
switch (G__31601) {
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

var seq__31602_31607 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__31603_31608 = null;
var count__31604_31609 = (0);
var i__31605_31610 = (0);
while(true){
if((i__31605_31610 < count__31604_31609)){
var msg_31611 = cljs.core._nth.call(null,chunk__31603_31608,i__31605_31610);
figwheel.client.socket.handle_incoming_message.call(null,msg_31611);


var G__31612 = seq__31602_31607;
var G__31613 = chunk__31603_31608;
var G__31614 = count__31604_31609;
var G__31615 = (i__31605_31610 + (1));
seq__31602_31607 = G__31612;
chunk__31603_31608 = G__31613;
count__31604_31609 = G__31614;
i__31605_31610 = G__31615;
continue;
} else {
var temp__5720__auto___31616 = cljs.core.seq.call(null,seq__31602_31607);
if(temp__5720__auto___31616){
var seq__31602_31617__$1 = temp__5720__auto___31616;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31602_31617__$1)){
var c__4556__auto___31618 = cljs.core.chunk_first.call(null,seq__31602_31617__$1);
var G__31619 = cljs.core.chunk_rest.call(null,seq__31602_31617__$1);
var G__31620 = c__4556__auto___31618;
var G__31621 = cljs.core.count.call(null,c__4556__auto___31618);
var G__31622 = (0);
seq__31602_31607 = G__31619;
chunk__31603_31608 = G__31620;
count__31604_31609 = G__31621;
i__31605_31610 = G__31622;
continue;
} else {
var msg_31623 = cljs.core.first.call(null,seq__31602_31617__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_31623);


var G__31624 = cljs.core.next.call(null,seq__31602_31617__$1);
var G__31625 = null;
var G__31626 = (0);
var G__31627 = (0);
seq__31602_31607 = G__31624;
chunk__31603_31608 = G__31625;
count__31604_31609 = G__31626;
i__31605_31610 = G__31627;
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
var len__4736__auto___31632 = arguments.length;
var i__4737__auto___31633 = (0);
while(true){
if((i__4737__auto___31633 < len__4736__auto___31632)){
args__4742__auto__.push((arguments[i__4737__auto___31633]));

var G__31634 = (i__4737__auto___31633 + (1));
i__4737__auto___31633 = G__31634;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__31629){
var map__31630 = p__31629;
var map__31630__$1 = (((((!((map__31630 == null))))?(((((map__31630.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31630.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31630):map__31630);
var opts = map__31630__$1;
return figwheel.client.start.call(null,opts);
}));

(figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq31628){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31628));
}));

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e31635){if((e31635 instanceof Error)){
var e = e31635;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e31635;

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

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),(function (p__31636){
var map__31637 = p__31636;
var map__31637__$1 = (((((!((map__31637 == null))))?(((((map__31637.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31637.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31637):map__31637);
var msg_name = cljs.core.get.call(null,map__31637__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return (location.href = location.href);
} else {
return null;
}
}));
});

//# sourceMappingURL=client.js.map?rel=1607206821442
