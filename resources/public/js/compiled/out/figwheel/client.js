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
}catch (e31142){if((e31142 instanceof Error)){
var e = e31142;
return "Error: Unable to stringify";
} else {
throw e31142;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__31145 = arguments.length;
switch (G__31145) {
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
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__31143_SHARP_){
if(typeof p1__31143_SHARP_ === 'string'){
return p1__31143_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__31143_SHARP_);
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
var len__4736__auto___31148 = arguments.length;
var i__4737__auto___31149 = (0);
while(true){
if((i__4737__auto___31149 < len__4736__auto___31148)){
args__4742__auto__.push((arguments[i__4737__auto___31149]));

var G__31150 = (i__4737__auto___31149 + (1));
i__4737__auto___31149 = G__31150;
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
(figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq31147){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31147));
}));

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4742__auto__ = [];
var len__4736__auto___31152 = arguments.length;
var i__4737__auto___31153 = (0);
while(true){
if((i__4737__auto___31153 < len__4736__auto___31152)){
args__4742__auto__.push((arguments[i__4737__auto___31153]));

var G__31154 = (i__4737__auto___31153 + (1));
i__4737__auto___31153 = G__31154;
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
(figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq31151){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31151));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__31155){
var map__31156 = p__31155;
var map__31156__$1 = (((((!((map__31156 == null))))?(((((map__31156.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31156.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31156):map__31156);
var message = cljs.core.get.call(null,map__31156__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__31156__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__27231__auto___31235 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27232__auto__ = (function (){var switch__27136__auto__ = (function (state_31207){
var state_val_31208 = (state_31207[(1)]);
if((state_val_31208 === (7))){
var inst_31203 = (state_31207[(2)]);
var state_31207__$1 = state_31207;
var statearr_31209_31236 = state_31207__$1;
(statearr_31209_31236[(2)] = inst_31203);

(statearr_31209_31236[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31208 === (1))){
var state_31207__$1 = state_31207;
var statearr_31210_31237 = state_31207__$1;
(statearr_31210_31237[(2)] = null);

(statearr_31210_31237[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31208 === (4))){
var inst_31160 = (state_31207[(7)]);
var inst_31160__$1 = (state_31207[(2)]);
var state_31207__$1 = (function (){var statearr_31211 = state_31207;
(statearr_31211[(7)] = inst_31160__$1);

return statearr_31211;
})();
if(cljs.core.truth_(inst_31160__$1)){
var statearr_31212_31238 = state_31207__$1;
(statearr_31212_31238[(1)] = (5));

} else {
var statearr_31213_31239 = state_31207__$1;
(statearr_31213_31239[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31208 === (15))){
var inst_31167 = (state_31207[(8)]);
var inst_31182 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_31167);
var inst_31183 = cljs.core.first.call(null,inst_31182);
var inst_31184 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_31183);
var inst_31185 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_31184)].join('');
var inst_31186 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_31185);
var state_31207__$1 = state_31207;
var statearr_31214_31240 = state_31207__$1;
(statearr_31214_31240[(2)] = inst_31186);

(statearr_31214_31240[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31208 === (13))){
var inst_31191 = (state_31207[(2)]);
var state_31207__$1 = state_31207;
var statearr_31215_31241 = state_31207__$1;
(statearr_31215_31241[(2)] = inst_31191);

(statearr_31215_31241[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31208 === (6))){
var state_31207__$1 = state_31207;
var statearr_31216_31242 = state_31207__$1;
(statearr_31216_31242[(2)] = null);

(statearr_31216_31242[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31208 === (17))){
var inst_31189 = (state_31207[(2)]);
var state_31207__$1 = state_31207;
var statearr_31217_31243 = state_31207__$1;
(statearr_31217_31243[(2)] = inst_31189);

(statearr_31217_31243[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31208 === (3))){
var inst_31205 = (state_31207[(2)]);
var state_31207__$1 = state_31207;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31207__$1,inst_31205);
} else {
if((state_val_31208 === (12))){
var inst_31166 = (state_31207[(9)]);
var inst_31180 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_31166,opts);
var state_31207__$1 = state_31207;
if(inst_31180){
var statearr_31218_31244 = state_31207__$1;
(statearr_31218_31244[(1)] = (15));

} else {
var statearr_31219_31245 = state_31207__$1;
(statearr_31219_31245[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31208 === (2))){
var state_31207__$1 = state_31207;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31207__$1,(4),ch);
} else {
if((state_val_31208 === (11))){
var inst_31167 = (state_31207[(8)]);
var inst_31172 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31173 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_31167);
var inst_31174 = cljs.core.async.timeout.call(null,(1000));
var inst_31175 = [inst_31173,inst_31174];
var inst_31176 = (new cljs.core.PersistentVector(null,2,(5),inst_31172,inst_31175,null));
var state_31207__$1 = state_31207;
return cljs.core.async.ioc_alts_BANG_.call(null,state_31207__$1,(14),inst_31176);
} else {
if((state_val_31208 === (9))){
var inst_31167 = (state_31207[(8)]);
var inst_31193 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_31194 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_31167);
var inst_31195 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_31194);
var inst_31196 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_31195)].join('');
var inst_31197 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_31196);
var state_31207__$1 = (function (){var statearr_31220 = state_31207;
(statearr_31220[(10)] = inst_31193);

return statearr_31220;
})();
var statearr_31221_31246 = state_31207__$1;
(statearr_31221_31246[(2)] = inst_31197);

(statearr_31221_31246[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31208 === (5))){
var inst_31160 = (state_31207[(7)]);
var inst_31162 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_31163 = (new cljs.core.PersistentArrayMap(null,2,inst_31162,null));
var inst_31164 = (new cljs.core.PersistentHashSet(null,inst_31163,null));
var inst_31165 = figwheel.client.focus_msgs.call(null,inst_31164,inst_31160);
var inst_31166 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_31165);
var inst_31167 = cljs.core.first.call(null,inst_31165);
var inst_31168 = figwheel.client.autoload_QMARK_.call(null);
var state_31207__$1 = (function (){var statearr_31222 = state_31207;
(statearr_31222[(8)] = inst_31167);

(statearr_31222[(9)] = inst_31166);

return statearr_31222;
})();
if(cljs.core.truth_(inst_31168)){
var statearr_31223_31247 = state_31207__$1;
(statearr_31223_31247[(1)] = (8));

} else {
var statearr_31224_31248 = state_31207__$1;
(statearr_31224_31248[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31208 === (14))){
var inst_31178 = (state_31207[(2)]);
var state_31207__$1 = state_31207;
var statearr_31225_31249 = state_31207__$1;
(statearr_31225_31249[(2)] = inst_31178);

(statearr_31225_31249[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31208 === (16))){
var state_31207__$1 = state_31207;
var statearr_31226_31250 = state_31207__$1;
(statearr_31226_31250[(2)] = null);

(statearr_31226_31250[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31208 === (10))){
var inst_31199 = (state_31207[(2)]);
var state_31207__$1 = (function (){var statearr_31227 = state_31207;
(statearr_31227[(11)] = inst_31199);

return statearr_31227;
})();
var statearr_31228_31251 = state_31207__$1;
(statearr_31228_31251[(2)] = null);

(statearr_31228_31251[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31208 === (8))){
var inst_31166 = (state_31207[(9)]);
var inst_31170 = figwheel.client.reload_file_state_QMARK_.call(null,inst_31166,opts);
var state_31207__$1 = state_31207;
if(cljs.core.truth_(inst_31170)){
var statearr_31229_31252 = state_31207__$1;
(statearr_31229_31252[(1)] = (11));

} else {
var statearr_31230_31253 = state_31207__$1;
(statearr_31230_31253[(1)] = (12));

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
var figwheel$client$file_reloader_plugin_$_state_machine__27137__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__27137__auto____0 = (function (){
var statearr_31231 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31231[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__27137__auto__);

(statearr_31231[(1)] = (1));

return statearr_31231;
});
var figwheel$client$file_reloader_plugin_$_state_machine__27137__auto____1 = (function (state_31207){
while(true){
var ret_value__27138__auto__ = (function (){try{while(true){
var result__27139__auto__ = switch__27136__auto__.call(null,state_31207);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27139__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27139__auto__;
}
break;
}
}catch (e31232){if((e31232 instanceof Object)){
var ex__27140__auto__ = e31232;
var statearr_31233_31254 = state_31207;
(statearr_31233_31254[(5)] = ex__27140__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31207);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31232;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27138__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31255 = state_31207;
state_31207 = G__31255;
continue;
} else {
return ret_value__27138__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__27137__auto__ = function(state_31207){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__27137__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__27137__auto____1.call(this,state_31207);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__27137__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__27137__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__27137__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__27137__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__27137__auto__;
})()
})();
var state__27233__auto__ = (function (){var statearr_31234 = f__27232__auto__.call(null);
(statearr_31234[(6)] = c__27231__auto___31235);

return statearr_31234;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27233__auto__);
}));


return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__31256_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__31256_SHARP_));
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
var base_path_31262 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__31258 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__31259 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__31260 = true;
var _STAR_print_fn_STAR__temp_val__31261 = (function (x){
return sb.append(x);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__31260);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__31261);

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
var result_value__$1 = (((!(typeof result_value === 'string')))?cljs.core.pr_str.call(null,result_value):result_value);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value__$1], null));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__31259);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__31258);
}}catch (e31257){if((e31257 instanceof Error)){
var e = e31257;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_31262], null));
} else {
var e = e31257;
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__31263){
var map__31264 = p__31263;
var map__31264__$1 = (((((!((map__31264 == null))))?(((((map__31264.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31264.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31264):map__31264);
var opts = map__31264__$1;
var build_id = cljs.core.get.call(null,map__31264__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return (function (p__31266){
var vec__31267 = p__31266;
var seq__31268 = cljs.core.seq.call(null,vec__31267);
var first__31269 = cljs.core.first.call(null,seq__31268);
var seq__31268__$1 = cljs.core.next.call(null,seq__31268);
var map__31270 = first__31269;
var map__31270__$1 = (((((!((map__31270 == null))))?(((((map__31270.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31270.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31270):map__31270);
var msg = map__31270__$1;
var msg_name = cljs.core.get.call(null,map__31270__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__31268__$1;
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
return (function (p__31272){
var vec__31273 = p__31272;
var seq__31274 = cljs.core.seq.call(null,vec__31273);
var first__31275 = cljs.core.first.call(null,seq__31274);
var seq__31274__$1 = cljs.core.next.call(null,seq__31274);
var map__31276 = first__31275;
var map__31276__$1 = (((((!((map__31276 == null))))?(((((map__31276.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31276.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31276):map__31276);
var msg = map__31276__$1;
var msg_name = cljs.core.get.call(null,map__31276__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__31274__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__31278){
var map__31279 = p__31278;
var map__31279__$1 = (((((!((map__31279 == null))))?(((((map__31279.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31279.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31279):map__31279);
var on_compile_warning = cljs.core.get.call(null,map__31279__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__31279__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return (function (p__31281){
var vec__31282 = p__31281;
var seq__31283 = cljs.core.seq.call(null,vec__31282);
var first__31284 = cljs.core.first.call(null,seq__31283);
var seq__31283__$1 = cljs.core.next.call(null,seq__31283);
var map__31285 = first__31284;
var map__31285__$1 = (((((!((map__31285 == null))))?(((((map__31285.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31285.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31285):map__31285);
var msg = map__31285__$1;
var msg_name = cljs.core.get.call(null,map__31285__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__31283__$1;
var pred__31287 = cljs.core._EQ_;
var expr__31288 = msg_name;
if(cljs.core.truth_(pred__31287.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__31288))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__31287.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__31288))){
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
var c__27231__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27232__auto__ = (function (){var switch__27136__auto__ = (function (state_31377){
var state_val_31378 = (state_31377[(1)]);
if((state_val_31378 === (7))){
var inst_31297 = (state_31377[(2)]);
var state_31377__$1 = state_31377;
if(cljs.core.truth_(inst_31297)){
var statearr_31379_31426 = state_31377__$1;
(statearr_31379_31426[(1)] = (8));

} else {
var statearr_31380_31427 = state_31377__$1;
(statearr_31380_31427[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31378 === (20))){
var inst_31371 = (state_31377[(2)]);
var state_31377__$1 = state_31377;
var statearr_31381_31428 = state_31377__$1;
(statearr_31381_31428[(2)] = inst_31371);

(statearr_31381_31428[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31378 === (27))){
var inst_31367 = (state_31377[(2)]);
var state_31377__$1 = state_31377;
var statearr_31382_31429 = state_31377__$1;
(statearr_31382_31429[(2)] = inst_31367);

(statearr_31382_31429[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31378 === (1))){
var inst_31290 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_31377__$1 = state_31377;
if(cljs.core.truth_(inst_31290)){
var statearr_31383_31430 = state_31377__$1;
(statearr_31383_31430[(1)] = (2));

} else {
var statearr_31384_31431 = state_31377__$1;
(statearr_31384_31431[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31378 === (24))){
var inst_31369 = (state_31377[(2)]);
var state_31377__$1 = state_31377;
var statearr_31385_31432 = state_31377__$1;
(statearr_31385_31432[(2)] = inst_31369);

(statearr_31385_31432[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31378 === (4))){
var inst_31375 = (state_31377[(2)]);
var state_31377__$1 = state_31377;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31377__$1,inst_31375);
} else {
if((state_val_31378 === (15))){
var inst_31373 = (state_31377[(2)]);
var state_31377__$1 = state_31377;
var statearr_31386_31433 = state_31377__$1;
(statearr_31386_31433[(2)] = inst_31373);

(statearr_31386_31433[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31378 === (21))){
var inst_31326 = (state_31377[(2)]);
var inst_31327 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31328 = figwheel.client.auto_jump_to_error.call(null,opts,inst_31327);
var state_31377__$1 = (function (){var statearr_31387 = state_31377;
(statearr_31387[(7)] = inst_31326);

return statearr_31387;
})();
var statearr_31388_31434 = state_31377__$1;
(statearr_31388_31434[(2)] = inst_31328);

(statearr_31388_31434[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31378 === (31))){
var inst_31356 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_31377__$1 = state_31377;
if(inst_31356){
var statearr_31389_31435 = state_31377__$1;
(statearr_31389_31435[(1)] = (34));

} else {
var statearr_31390_31436 = state_31377__$1;
(statearr_31390_31436[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31378 === (32))){
var inst_31365 = (state_31377[(2)]);
var state_31377__$1 = state_31377;
var statearr_31391_31437 = state_31377__$1;
(statearr_31391_31437[(2)] = inst_31365);

(statearr_31391_31437[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31378 === (33))){
var inst_31352 = (state_31377[(2)]);
var inst_31353 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31354 = figwheel.client.auto_jump_to_error.call(null,opts,inst_31353);
var state_31377__$1 = (function (){var statearr_31392 = state_31377;
(statearr_31392[(8)] = inst_31352);

return statearr_31392;
})();
var statearr_31393_31438 = state_31377__$1;
(statearr_31393_31438[(2)] = inst_31354);

(statearr_31393_31438[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31378 === (13))){
var inst_31311 = figwheel.client.heads_up.clear.call(null);
var state_31377__$1 = state_31377;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31377__$1,(16),inst_31311);
} else {
if((state_val_31378 === (22))){
var inst_31332 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31333 = figwheel.client.heads_up.append_warning_message.call(null,inst_31332);
var state_31377__$1 = state_31377;
var statearr_31394_31439 = state_31377__$1;
(statearr_31394_31439[(2)] = inst_31333);

(statearr_31394_31439[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31378 === (36))){
var inst_31363 = (state_31377[(2)]);
var state_31377__$1 = state_31377;
var statearr_31395_31440 = state_31377__$1;
(statearr_31395_31440[(2)] = inst_31363);

(statearr_31395_31440[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31378 === (29))){
var inst_31343 = (state_31377[(2)]);
var inst_31344 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31345 = figwheel.client.auto_jump_to_error.call(null,opts,inst_31344);
var state_31377__$1 = (function (){var statearr_31396 = state_31377;
(statearr_31396[(9)] = inst_31343);

return statearr_31396;
})();
var statearr_31397_31441 = state_31377__$1;
(statearr_31397_31441[(2)] = inst_31345);

(statearr_31397_31441[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31378 === (6))){
var inst_31292 = (state_31377[(10)]);
var state_31377__$1 = state_31377;
var statearr_31398_31442 = state_31377__$1;
(statearr_31398_31442[(2)] = inst_31292);

(statearr_31398_31442[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31378 === (28))){
var inst_31339 = (state_31377[(2)]);
var inst_31340 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31341 = figwheel.client.heads_up.display_warning.call(null,inst_31340);
var state_31377__$1 = (function (){var statearr_31399 = state_31377;
(statearr_31399[(11)] = inst_31339);

return statearr_31399;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31377__$1,(29),inst_31341);
} else {
if((state_val_31378 === (25))){
var inst_31337 = figwheel.client.heads_up.clear.call(null);
var state_31377__$1 = state_31377;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31377__$1,(28),inst_31337);
} else {
if((state_val_31378 === (34))){
var inst_31358 = figwheel.client.heads_up.flash_loaded.call(null);
var state_31377__$1 = state_31377;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31377__$1,(37),inst_31358);
} else {
if((state_val_31378 === (17))){
var inst_31317 = (state_31377[(2)]);
var inst_31318 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31319 = figwheel.client.auto_jump_to_error.call(null,opts,inst_31318);
var state_31377__$1 = (function (){var statearr_31400 = state_31377;
(statearr_31400[(12)] = inst_31317);

return statearr_31400;
})();
var statearr_31401_31443 = state_31377__$1;
(statearr_31401_31443[(2)] = inst_31319);

(statearr_31401_31443[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31378 === (3))){
var inst_31309 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_31377__$1 = state_31377;
if(inst_31309){
var statearr_31402_31444 = state_31377__$1;
(statearr_31402_31444[(1)] = (13));

} else {
var statearr_31403_31445 = state_31377__$1;
(statearr_31403_31445[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31378 === (12))){
var inst_31305 = (state_31377[(2)]);
var state_31377__$1 = state_31377;
var statearr_31404_31446 = state_31377__$1;
(statearr_31404_31446[(2)] = inst_31305);

(statearr_31404_31446[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31378 === (2))){
var inst_31292 = (state_31377[(10)]);
var inst_31292__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_31377__$1 = (function (){var statearr_31405 = state_31377;
(statearr_31405[(10)] = inst_31292__$1);

return statearr_31405;
})();
if(cljs.core.truth_(inst_31292__$1)){
var statearr_31406_31447 = state_31377__$1;
(statearr_31406_31447[(1)] = (5));

} else {
var statearr_31407_31448 = state_31377__$1;
(statearr_31407_31448[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31378 === (23))){
var inst_31335 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_31377__$1 = state_31377;
if(inst_31335){
var statearr_31408_31449 = state_31377__$1;
(statearr_31408_31449[(1)] = (25));

} else {
var statearr_31409_31450 = state_31377__$1;
(statearr_31409_31450[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31378 === (35))){
var state_31377__$1 = state_31377;
var statearr_31410_31451 = state_31377__$1;
(statearr_31410_31451[(2)] = null);

(statearr_31410_31451[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31378 === (19))){
var inst_31330 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_31377__$1 = state_31377;
if(inst_31330){
var statearr_31411_31452 = state_31377__$1;
(statearr_31411_31452[(1)] = (22));

} else {
var statearr_31412_31453 = state_31377__$1;
(statearr_31412_31453[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31378 === (11))){
var inst_31301 = (state_31377[(2)]);
var state_31377__$1 = state_31377;
var statearr_31413_31454 = state_31377__$1;
(statearr_31413_31454[(2)] = inst_31301);

(statearr_31413_31454[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31378 === (9))){
var inst_31303 = figwheel.client.heads_up.clear.call(null);
var state_31377__$1 = state_31377;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31377__$1,(12),inst_31303);
} else {
if((state_val_31378 === (5))){
var inst_31294 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_31377__$1 = state_31377;
var statearr_31414_31455 = state_31377__$1;
(statearr_31414_31455[(2)] = inst_31294);

(statearr_31414_31455[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31378 === (14))){
var inst_31321 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_31377__$1 = state_31377;
if(inst_31321){
var statearr_31415_31456 = state_31377__$1;
(statearr_31415_31456[(1)] = (18));

} else {
var statearr_31416_31457 = state_31377__$1;
(statearr_31416_31457[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31378 === (26))){
var inst_31347 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_31377__$1 = state_31377;
if(inst_31347){
var statearr_31417_31458 = state_31377__$1;
(statearr_31417_31458[(1)] = (30));

} else {
var statearr_31418_31459 = state_31377__$1;
(statearr_31418_31459[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31378 === (16))){
var inst_31313 = (state_31377[(2)]);
var inst_31314 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31315 = figwheel.client.heads_up.display_exception.call(null,inst_31314);
var state_31377__$1 = (function (){var statearr_31419 = state_31377;
(statearr_31419[(13)] = inst_31313);

return statearr_31419;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31377__$1,(17),inst_31315);
} else {
if((state_val_31378 === (30))){
var inst_31349 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31350 = figwheel.client.heads_up.display_warning.call(null,inst_31349);
var state_31377__$1 = state_31377;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31377__$1,(33),inst_31350);
} else {
if((state_val_31378 === (10))){
var inst_31307 = (state_31377[(2)]);
var state_31377__$1 = state_31377;
var statearr_31420_31460 = state_31377__$1;
(statearr_31420_31460[(2)] = inst_31307);

(statearr_31420_31460[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31378 === (18))){
var inst_31323 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31324 = figwheel.client.heads_up.display_exception.call(null,inst_31323);
var state_31377__$1 = state_31377;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31377__$1,(21),inst_31324);
} else {
if((state_val_31378 === (37))){
var inst_31360 = (state_31377[(2)]);
var state_31377__$1 = state_31377;
var statearr_31421_31461 = state_31377__$1;
(statearr_31421_31461[(2)] = inst_31360);

(statearr_31421_31461[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31378 === (8))){
var inst_31299 = figwheel.client.heads_up.flash_loaded.call(null);
var state_31377__$1 = state_31377;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31377__$1,(11),inst_31299);
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
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27137__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27137__auto____0 = (function (){
var statearr_31422 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31422[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27137__auto__);

(statearr_31422[(1)] = (1));

return statearr_31422;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27137__auto____1 = (function (state_31377){
while(true){
var ret_value__27138__auto__ = (function (){try{while(true){
var result__27139__auto__ = switch__27136__auto__.call(null,state_31377);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27139__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27139__auto__;
}
break;
}
}catch (e31423){if((e31423 instanceof Object)){
var ex__27140__auto__ = e31423;
var statearr_31424_31462 = state_31377;
(statearr_31424_31462[(5)] = ex__27140__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31377);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31423;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27138__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31463 = state_31377;
state_31377 = G__31463;
continue;
} else {
return ret_value__27138__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27137__auto__ = function(state_31377){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27137__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27137__auto____1.call(this,state_31377);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27137__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27137__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27137__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27137__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27137__auto__;
})()
})();
var state__27233__auto__ = (function (){var statearr_31425 = f__27232__auto__.call(null);
(statearr_31425[(6)] = c__27231__auto__);

return statearr_31425;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27233__auto__);
}));

return c__27231__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__27231__auto___31492 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27232__auto__ = (function (){var switch__27136__auto__ = (function (state_31478){
var state_val_31479 = (state_31478[(1)]);
if((state_val_31479 === (1))){
var state_31478__$1 = state_31478;
var statearr_31480_31493 = state_31478__$1;
(statearr_31480_31493[(2)] = null);

(statearr_31480_31493[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31479 === (2))){
var state_31478__$1 = state_31478;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31478__$1,(4),ch);
} else {
if((state_val_31479 === (3))){
var inst_31476 = (state_31478[(2)]);
var state_31478__$1 = state_31478;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31478__$1,inst_31476);
} else {
if((state_val_31479 === (4))){
var inst_31466 = (state_31478[(7)]);
var inst_31466__$1 = (state_31478[(2)]);
var state_31478__$1 = (function (){var statearr_31481 = state_31478;
(statearr_31481[(7)] = inst_31466__$1);

return statearr_31481;
})();
if(cljs.core.truth_(inst_31466__$1)){
var statearr_31482_31494 = state_31478__$1;
(statearr_31482_31494[(1)] = (5));

} else {
var statearr_31483_31495 = state_31478__$1;
(statearr_31483_31495[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31479 === (5))){
var inst_31466 = (state_31478[(7)]);
var inst_31468 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_31466);
var state_31478__$1 = state_31478;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31478__$1,(8),inst_31468);
} else {
if((state_val_31479 === (6))){
var state_31478__$1 = state_31478;
var statearr_31484_31496 = state_31478__$1;
(statearr_31484_31496[(2)] = null);

(statearr_31484_31496[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31479 === (7))){
var inst_31474 = (state_31478[(2)]);
var state_31478__$1 = state_31478;
var statearr_31485_31497 = state_31478__$1;
(statearr_31485_31497[(2)] = inst_31474);

(statearr_31485_31497[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31479 === (8))){
var inst_31470 = (state_31478[(2)]);
var state_31478__$1 = (function (){var statearr_31486 = state_31478;
(statearr_31486[(8)] = inst_31470);

return statearr_31486;
})();
var statearr_31487_31498 = state_31478__$1;
(statearr_31487_31498[(2)] = null);

(statearr_31487_31498[(1)] = (2));


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
var figwheel$client$heads_up_plugin_$_state_machine__27137__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__27137__auto____0 = (function (){
var statearr_31488 = [null,null,null,null,null,null,null,null,null];
(statearr_31488[(0)] = figwheel$client$heads_up_plugin_$_state_machine__27137__auto__);

(statearr_31488[(1)] = (1));

return statearr_31488;
});
var figwheel$client$heads_up_plugin_$_state_machine__27137__auto____1 = (function (state_31478){
while(true){
var ret_value__27138__auto__ = (function (){try{while(true){
var result__27139__auto__ = switch__27136__auto__.call(null,state_31478);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27139__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27139__auto__;
}
break;
}
}catch (e31489){if((e31489 instanceof Object)){
var ex__27140__auto__ = e31489;
var statearr_31490_31499 = state_31478;
(statearr_31490_31499[(5)] = ex__27140__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31478);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31489;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27138__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31500 = state_31478;
state_31478 = G__31500;
continue;
} else {
return ret_value__27138__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__27137__auto__ = function(state_31478){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__27137__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__27137__auto____1.call(this,state_31478);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__27137__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__27137__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__27137__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__27137__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__27137__auto__;
})()
})();
var state__27233__auto__ = (function (){var statearr_31491 = f__27232__auto__.call(null);
(statearr_31491[(6)] = c__27231__auto___31492);

return statearr_31491;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27233__auto__);
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
var c__27231__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27232__auto__ = (function (){var switch__27136__auto__ = (function (state_31506){
var state_val_31507 = (state_31506[(1)]);
if((state_val_31507 === (1))){
var inst_31501 = cljs.core.async.timeout.call(null,(3000));
var state_31506__$1 = state_31506;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31506__$1,(2),inst_31501);
} else {
if((state_val_31507 === (2))){
var inst_31503 = (state_31506[(2)]);
var inst_31504 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_31506__$1 = (function (){var statearr_31508 = state_31506;
(statearr_31508[(7)] = inst_31503);

return statearr_31508;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31506__$1,inst_31504);
} else {
return null;
}
}
});
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__27137__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__27137__auto____0 = (function (){
var statearr_31509 = [null,null,null,null,null,null,null,null];
(statearr_31509[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__27137__auto__);

(statearr_31509[(1)] = (1));

return statearr_31509;
});
var figwheel$client$enforce_project_plugin_$_state_machine__27137__auto____1 = (function (state_31506){
while(true){
var ret_value__27138__auto__ = (function (){try{while(true){
var result__27139__auto__ = switch__27136__auto__.call(null,state_31506);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27139__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27139__auto__;
}
break;
}
}catch (e31510){if((e31510 instanceof Object)){
var ex__27140__auto__ = e31510;
var statearr_31511_31513 = state_31506;
(statearr_31511_31513[(5)] = ex__27140__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31506);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31510;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27138__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31514 = state_31506;
state_31506 = G__31514;
continue;
} else {
return ret_value__27138__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__27137__auto__ = function(state_31506){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__27137__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__27137__auto____1.call(this,state_31506);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__27137__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__27137__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__27137__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__27137__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__27137__auto__;
})()
})();
var state__27233__auto__ = (function (){var statearr_31512 = f__27232__auto__.call(null);
(statearr_31512[(6)] = c__27231__auto__);

return statearr_31512;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27233__auto__);
}));

return c__27231__auto__;
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
var c__27231__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27232__auto__ = (function (){var switch__27136__auto__ = (function (state_31521){
var state_val_31522 = (state_31521[(1)]);
if((state_val_31522 === (1))){
var inst_31515 = cljs.core.async.timeout.call(null,(2000));
var state_31521__$1 = state_31521;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31521__$1,(2),inst_31515);
} else {
if((state_val_31522 === (2))){
var inst_31517 = (state_31521[(2)]);
var inst_31518 = ["Figwheel Client Version <strong>",figwheel.client._figwheel_version_,"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_31519 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_31518);
var state_31521__$1 = (function (){var statearr_31523 = state_31521;
(statearr_31523[(7)] = inst_31517);

return statearr_31523;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31521__$1,inst_31519);
} else {
return null;
}
}
});
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27137__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27137__auto____0 = (function (){
var statearr_31524 = [null,null,null,null,null,null,null,null];
(statearr_31524[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27137__auto__);

(statearr_31524[(1)] = (1));

return statearr_31524;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27137__auto____1 = (function (state_31521){
while(true){
var ret_value__27138__auto__ = (function (){try{while(true){
var result__27139__auto__ = switch__27136__auto__.call(null,state_31521);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27139__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27139__auto__;
}
break;
}
}catch (e31525){if((e31525 instanceof Object)){
var ex__27140__auto__ = e31525;
var statearr_31526_31528 = state_31521;
(statearr_31526_31528[(5)] = ex__27140__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31521);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31525;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27138__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31529 = state_31521;
state_31521 = G__31529;
continue;
} else {
return ret_value__27138__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27137__auto__ = function(state_31521){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27137__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27137__auto____1.call(this,state_31521);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27137__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27137__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27137__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27137__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27137__auto__;
})()
})();
var state__27233__auto__ = (function (){var statearr_31527 = f__27232__auto__.call(null);
(statearr_31527[(6)] = c__27231__auto__);

return statearr_31527;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27233__auto__);
}));

return c__27231__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__31530){
var map__31531 = p__31530;
var map__31531__$1 = (((((!((map__31531 == null))))?(((((map__31531.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31531.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31531):map__31531);
var file = cljs.core.get.call(null,map__31531__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__31531__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__31531__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__31533 = "";
var G__31533__$1 = (cljs.core.truth_(file)?[G__31533,"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__31533);
var G__31533__$2 = (cljs.core.truth_(line)?[G__31533__$1," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__31533__$1);
if(cljs.core.truth_((function (){var and__4115__auto__ = line;
if(cljs.core.truth_(and__4115__auto__)){
return column;
} else {
return and__4115__auto__;
}
})())){
return [G__31533__$2,", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__31533__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__31534){
var map__31535 = p__31534;
var map__31535__$1 = (((((!((map__31535 == null))))?(((((map__31535.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31535.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31535):map__31535);
var ed = map__31535__$1;
var exception_data = cljs.core.get.call(null,map__31535__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__31535__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
var message_31538 = (function (){var G__31537 = cljs.core.apply.call(null,cljs.core.str,"Figwheel: Compile Exception ",figwheel.client.format_messages.call(null,exception_data));
if(cljs.core.truth_(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(exception_data))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31537)," Error on ",figwheel.client.file_line_column.call(null,exception_data)].join('');
} else {
return G__31537;
}
})();
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),message_31538);

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__31539){
var map__31540 = p__31539;
var map__31540__$1 = (((((!((map__31540 == null))))?(((((map__31540.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31540.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31540):map__31540);
var w = map__31540__$1;
var message = cljs.core.get.call(null,map__31540__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__31542 = cljs.core.seq.call(null,plugins);
var chunk__31543 = null;
var count__31544 = (0);
var i__31545 = (0);
while(true){
if((i__31545 < count__31544)){
var vec__31552 = cljs.core._nth.call(null,chunk__31543,i__31545);
var k = cljs.core.nth.call(null,vec__31552,(0),null);
var plugin = cljs.core.nth.call(null,vec__31552,(1),null);
if(cljs.core.truth_(plugin)){
var pl_31558 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__31542,chunk__31543,count__31544,i__31545,pl_31558,vec__31552,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_31558.call(null,msg_hist);
});})(seq__31542,chunk__31543,count__31544,i__31545,pl_31558,vec__31552,k,plugin))
);
} else {
}


var G__31559 = seq__31542;
var G__31560 = chunk__31543;
var G__31561 = count__31544;
var G__31562 = (i__31545 + (1));
seq__31542 = G__31559;
chunk__31543 = G__31560;
count__31544 = G__31561;
i__31545 = G__31562;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__31542);
if(temp__5720__auto__){
var seq__31542__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31542__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__31542__$1);
var G__31563 = cljs.core.chunk_rest.call(null,seq__31542__$1);
var G__31564 = c__4556__auto__;
var G__31565 = cljs.core.count.call(null,c__4556__auto__);
var G__31566 = (0);
seq__31542 = G__31563;
chunk__31543 = G__31564;
count__31544 = G__31565;
i__31545 = G__31566;
continue;
} else {
var vec__31555 = cljs.core.first.call(null,seq__31542__$1);
var k = cljs.core.nth.call(null,vec__31555,(0),null);
var plugin = cljs.core.nth.call(null,vec__31555,(1),null);
if(cljs.core.truth_(plugin)){
var pl_31567 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__31542,chunk__31543,count__31544,i__31545,pl_31567,vec__31555,k,plugin,seq__31542__$1,temp__5720__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_31567.call(null,msg_hist);
});})(seq__31542,chunk__31543,count__31544,i__31545,pl_31567,vec__31555,k,plugin,seq__31542__$1,temp__5720__auto__))
);
} else {
}


var G__31568 = cljs.core.next.call(null,seq__31542__$1);
var G__31569 = null;
var G__31570 = (0);
var G__31571 = (0);
seq__31542 = G__31568;
chunk__31543 = G__31569;
count__31544 = G__31570;
i__31545 = G__31571;
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
var G__31573 = arguments.length;
switch (G__31573) {
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

var seq__31574_31579 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__31575_31580 = null;
var count__31576_31581 = (0);
var i__31577_31582 = (0);
while(true){
if((i__31577_31582 < count__31576_31581)){
var msg_31583 = cljs.core._nth.call(null,chunk__31575_31580,i__31577_31582);
figwheel.client.socket.handle_incoming_message.call(null,msg_31583);


var G__31584 = seq__31574_31579;
var G__31585 = chunk__31575_31580;
var G__31586 = count__31576_31581;
var G__31587 = (i__31577_31582 + (1));
seq__31574_31579 = G__31584;
chunk__31575_31580 = G__31585;
count__31576_31581 = G__31586;
i__31577_31582 = G__31587;
continue;
} else {
var temp__5720__auto___31588 = cljs.core.seq.call(null,seq__31574_31579);
if(temp__5720__auto___31588){
var seq__31574_31589__$1 = temp__5720__auto___31588;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31574_31589__$1)){
var c__4556__auto___31590 = cljs.core.chunk_first.call(null,seq__31574_31589__$1);
var G__31591 = cljs.core.chunk_rest.call(null,seq__31574_31589__$1);
var G__31592 = c__4556__auto___31590;
var G__31593 = cljs.core.count.call(null,c__4556__auto___31590);
var G__31594 = (0);
seq__31574_31579 = G__31591;
chunk__31575_31580 = G__31592;
count__31576_31581 = G__31593;
i__31577_31582 = G__31594;
continue;
} else {
var msg_31595 = cljs.core.first.call(null,seq__31574_31589__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_31595);


var G__31596 = cljs.core.next.call(null,seq__31574_31589__$1);
var G__31597 = null;
var G__31598 = (0);
var G__31599 = (0);
seq__31574_31579 = G__31596;
chunk__31575_31580 = G__31597;
count__31576_31581 = G__31598;
i__31577_31582 = G__31599;
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
var len__4736__auto___31604 = arguments.length;
var i__4737__auto___31605 = (0);
while(true){
if((i__4737__auto___31605 < len__4736__auto___31604)){
args__4742__auto__.push((arguments[i__4737__auto___31605]));

var G__31606 = (i__4737__auto___31605 + (1));
i__4737__auto___31605 = G__31606;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__31601){
var map__31602 = p__31601;
var map__31602__$1 = (((((!((map__31602 == null))))?(((((map__31602.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31602.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31602):map__31602);
var opts = map__31602__$1;
return figwheel.client.start.call(null,opts);
}));

(figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq31600){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31600));
}));

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e31607){if((e31607 instanceof Error)){
var e = e31607;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e31607;

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

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),(function (p__31608){
var map__31609 = p__31608;
var map__31609__$1 = (((((!((map__31609 == null))))?(((((map__31609.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31609.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31609):map__31609);
var msg_name = cljs.core.get.call(null,map__31609__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return (location.href = location.href);
} else {
return null;
}
}));
});

//# sourceMappingURL=client.js.map?rel=1605638687304
