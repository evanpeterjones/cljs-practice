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
}catch (e31152){if((e31152 instanceof Error)){
var e = e31152;
return "Error: Unable to stringify";
} else {
throw e31152;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__31155 = arguments.length;
switch (G__31155) {
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
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__31153_SHARP_){
if(typeof p1__31153_SHARP_ === 'string'){
return p1__31153_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__31153_SHARP_);
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
var len__4736__auto___31158 = arguments.length;
var i__4737__auto___31159 = (0);
while(true){
if((i__4737__auto___31159 < len__4736__auto___31158)){
args__4742__auto__.push((arguments[i__4737__auto___31159]));

var G__31160 = (i__4737__auto___31159 + (1));
i__4737__auto___31159 = G__31160;
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
(figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq31157){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31157));
}));

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4742__auto__ = [];
var len__4736__auto___31162 = arguments.length;
var i__4737__auto___31163 = (0);
while(true){
if((i__4737__auto___31163 < len__4736__auto___31162)){
args__4742__auto__.push((arguments[i__4737__auto___31163]));

var G__31164 = (i__4737__auto___31163 + (1));
i__4737__auto___31163 = G__31164;
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
(figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq31161){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31161));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__31165){
var map__31166 = p__31165;
var map__31166__$1 = (((((!((map__31166 == null))))?(((((map__31166.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31166.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31166):map__31166);
var message = cljs.core.get.call(null,map__31166__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__31166__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__27064__auto___31245 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27065__auto__ = (function (){var switch__26969__auto__ = (function (state_31217){
var state_val_31218 = (state_31217[(1)]);
if((state_val_31218 === (7))){
var inst_31213 = (state_31217[(2)]);
var state_31217__$1 = state_31217;
var statearr_31219_31246 = state_31217__$1;
(statearr_31219_31246[(2)] = inst_31213);

(statearr_31219_31246[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31218 === (1))){
var state_31217__$1 = state_31217;
var statearr_31220_31247 = state_31217__$1;
(statearr_31220_31247[(2)] = null);

(statearr_31220_31247[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31218 === (4))){
var inst_31170 = (state_31217[(7)]);
var inst_31170__$1 = (state_31217[(2)]);
var state_31217__$1 = (function (){var statearr_31221 = state_31217;
(statearr_31221[(7)] = inst_31170__$1);

return statearr_31221;
})();
if(cljs.core.truth_(inst_31170__$1)){
var statearr_31222_31248 = state_31217__$1;
(statearr_31222_31248[(1)] = (5));

} else {
var statearr_31223_31249 = state_31217__$1;
(statearr_31223_31249[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31218 === (15))){
var inst_31177 = (state_31217[(8)]);
var inst_31192 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_31177);
var inst_31193 = cljs.core.first.call(null,inst_31192);
var inst_31194 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_31193);
var inst_31195 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_31194)].join('');
var inst_31196 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_31195);
var state_31217__$1 = state_31217;
var statearr_31224_31250 = state_31217__$1;
(statearr_31224_31250[(2)] = inst_31196);

(statearr_31224_31250[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31218 === (13))){
var inst_31201 = (state_31217[(2)]);
var state_31217__$1 = state_31217;
var statearr_31225_31251 = state_31217__$1;
(statearr_31225_31251[(2)] = inst_31201);

(statearr_31225_31251[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31218 === (6))){
var state_31217__$1 = state_31217;
var statearr_31226_31252 = state_31217__$1;
(statearr_31226_31252[(2)] = null);

(statearr_31226_31252[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31218 === (17))){
var inst_31199 = (state_31217[(2)]);
var state_31217__$1 = state_31217;
var statearr_31227_31253 = state_31217__$1;
(statearr_31227_31253[(2)] = inst_31199);

(statearr_31227_31253[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31218 === (3))){
var inst_31215 = (state_31217[(2)]);
var state_31217__$1 = state_31217;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31217__$1,inst_31215);
} else {
if((state_val_31218 === (12))){
var inst_31176 = (state_31217[(9)]);
var inst_31190 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_31176,opts);
var state_31217__$1 = state_31217;
if(inst_31190){
var statearr_31228_31254 = state_31217__$1;
(statearr_31228_31254[(1)] = (15));

} else {
var statearr_31229_31255 = state_31217__$1;
(statearr_31229_31255[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31218 === (2))){
var state_31217__$1 = state_31217;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31217__$1,(4),ch);
} else {
if((state_val_31218 === (11))){
var inst_31177 = (state_31217[(8)]);
var inst_31182 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31183 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_31177);
var inst_31184 = cljs.core.async.timeout.call(null,(1000));
var inst_31185 = [inst_31183,inst_31184];
var inst_31186 = (new cljs.core.PersistentVector(null,2,(5),inst_31182,inst_31185,null));
var state_31217__$1 = state_31217;
return cljs.core.async.ioc_alts_BANG_.call(null,state_31217__$1,(14),inst_31186);
} else {
if((state_val_31218 === (9))){
var inst_31177 = (state_31217[(8)]);
var inst_31203 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_31204 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_31177);
var inst_31205 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_31204);
var inst_31206 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_31205)].join('');
var inst_31207 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_31206);
var state_31217__$1 = (function (){var statearr_31230 = state_31217;
(statearr_31230[(10)] = inst_31203);

return statearr_31230;
})();
var statearr_31231_31256 = state_31217__$1;
(statearr_31231_31256[(2)] = inst_31207);

(statearr_31231_31256[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31218 === (5))){
var inst_31170 = (state_31217[(7)]);
var inst_31172 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_31173 = (new cljs.core.PersistentArrayMap(null,2,inst_31172,null));
var inst_31174 = (new cljs.core.PersistentHashSet(null,inst_31173,null));
var inst_31175 = figwheel.client.focus_msgs.call(null,inst_31174,inst_31170);
var inst_31176 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_31175);
var inst_31177 = cljs.core.first.call(null,inst_31175);
var inst_31178 = figwheel.client.autoload_QMARK_.call(null);
var state_31217__$1 = (function (){var statearr_31232 = state_31217;
(statearr_31232[(8)] = inst_31177);

(statearr_31232[(9)] = inst_31176);

return statearr_31232;
})();
if(cljs.core.truth_(inst_31178)){
var statearr_31233_31257 = state_31217__$1;
(statearr_31233_31257[(1)] = (8));

} else {
var statearr_31234_31258 = state_31217__$1;
(statearr_31234_31258[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31218 === (14))){
var inst_31188 = (state_31217[(2)]);
var state_31217__$1 = state_31217;
var statearr_31235_31259 = state_31217__$1;
(statearr_31235_31259[(2)] = inst_31188);

(statearr_31235_31259[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31218 === (16))){
var state_31217__$1 = state_31217;
var statearr_31236_31260 = state_31217__$1;
(statearr_31236_31260[(2)] = null);

(statearr_31236_31260[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31218 === (10))){
var inst_31209 = (state_31217[(2)]);
var state_31217__$1 = (function (){var statearr_31237 = state_31217;
(statearr_31237[(11)] = inst_31209);

return statearr_31237;
})();
var statearr_31238_31261 = state_31217__$1;
(statearr_31238_31261[(2)] = null);

(statearr_31238_31261[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31218 === (8))){
var inst_31176 = (state_31217[(9)]);
var inst_31180 = figwheel.client.reload_file_state_QMARK_.call(null,inst_31176,opts);
var state_31217__$1 = state_31217;
if(cljs.core.truth_(inst_31180)){
var statearr_31239_31262 = state_31217__$1;
(statearr_31239_31262[(1)] = (11));

} else {
var statearr_31240_31263 = state_31217__$1;
(statearr_31240_31263[(1)] = (12));

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
var figwheel$client$file_reloader_plugin_$_state_machine__26970__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__26970__auto____0 = (function (){
var statearr_31241 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31241[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__26970__auto__);

(statearr_31241[(1)] = (1));

return statearr_31241;
});
var figwheel$client$file_reloader_plugin_$_state_machine__26970__auto____1 = (function (state_31217){
while(true){
var ret_value__26971__auto__ = (function (){try{while(true){
var result__26972__auto__ = switch__26969__auto__.call(null,state_31217);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26972__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26972__auto__;
}
break;
}
}catch (e31242){if((e31242 instanceof Object)){
var ex__26973__auto__ = e31242;
var statearr_31243_31264 = state_31217;
(statearr_31243_31264[(5)] = ex__26973__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31217);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31242;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26971__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31265 = state_31217;
state_31217 = G__31265;
continue;
} else {
return ret_value__26971__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__26970__auto__ = function(state_31217){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__26970__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__26970__auto____1.call(this,state_31217);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__26970__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__26970__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__26970__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__26970__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__26970__auto__;
})()
})();
var state__27066__auto__ = (function (){var statearr_31244 = f__27065__auto__.call(null);
(statearr_31244[(6)] = c__27064__auto___31245);

return statearr_31244;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27066__auto__);
}));


return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__31266_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__31266_SHARP_));
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
var base_path_31272 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__31268 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__31269 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__31270 = true;
var _STAR_print_fn_STAR__temp_val__31271 = (function (x){
return sb.append(x);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__31270);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__31271);

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
var result_value__$1 = (((!(typeof result_value === 'string')))?cljs.core.pr_str.call(null,result_value):result_value);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value__$1], null));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__31269);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__31268);
}}catch (e31267){if((e31267 instanceof Error)){
var e = e31267;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_31272], null));
} else {
var e = e31267;
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__31273){
var map__31274 = p__31273;
var map__31274__$1 = (((((!((map__31274 == null))))?(((((map__31274.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31274.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31274):map__31274);
var opts = map__31274__$1;
var build_id = cljs.core.get.call(null,map__31274__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return (function (p__31276){
var vec__31277 = p__31276;
var seq__31278 = cljs.core.seq.call(null,vec__31277);
var first__31279 = cljs.core.first.call(null,seq__31278);
var seq__31278__$1 = cljs.core.next.call(null,seq__31278);
var map__31280 = first__31279;
var map__31280__$1 = (((((!((map__31280 == null))))?(((((map__31280.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31280.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31280):map__31280);
var msg = map__31280__$1;
var msg_name = cljs.core.get.call(null,map__31280__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__31278__$1;
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
return (function (p__31282){
var vec__31283 = p__31282;
var seq__31284 = cljs.core.seq.call(null,vec__31283);
var first__31285 = cljs.core.first.call(null,seq__31284);
var seq__31284__$1 = cljs.core.next.call(null,seq__31284);
var map__31286 = first__31285;
var map__31286__$1 = (((((!((map__31286 == null))))?(((((map__31286.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31286.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31286):map__31286);
var msg = map__31286__$1;
var msg_name = cljs.core.get.call(null,map__31286__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__31284__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__31288){
var map__31289 = p__31288;
var map__31289__$1 = (((((!((map__31289 == null))))?(((((map__31289.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31289.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31289):map__31289);
var on_compile_warning = cljs.core.get.call(null,map__31289__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__31289__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return (function (p__31291){
var vec__31292 = p__31291;
var seq__31293 = cljs.core.seq.call(null,vec__31292);
var first__31294 = cljs.core.first.call(null,seq__31293);
var seq__31293__$1 = cljs.core.next.call(null,seq__31293);
var map__31295 = first__31294;
var map__31295__$1 = (((((!((map__31295 == null))))?(((((map__31295.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31295.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31295):map__31295);
var msg = map__31295__$1;
var msg_name = cljs.core.get.call(null,map__31295__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__31293__$1;
var pred__31297 = cljs.core._EQ_;
var expr__31298 = msg_name;
if(cljs.core.truth_(pred__31297.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__31298))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__31297.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__31298))){
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
var c__27064__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27065__auto__ = (function (){var switch__26969__auto__ = (function (state_31387){
var state_val_31388 = (state_31387[(1)]);
if((state_val_31388 === (7))){
var inst_31307 = (state_31387[(2)]);
var state_31387__$1 = state_31387;
if(cljs.core.truth_(inst_31307)){
var statearr_31389_31436 = state_31387__$1;
(statearr_31389_31436[(1)] = (8));

} else {
var statearr_31390_31437 = state_31387__$1;
(statearr_31390_31437[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31388 === (20))){
var inst_31381 = (state_31387[(2)]);
var state_31387__$1 = state_31387;
var statearr_31391_31438 = state_31387__$1;
(statearr_31391_31438[(2)] = inst_31381);

(statearr_31391_31438[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31388 === (27))){
var inst_31377 = (state_31387[(2)]);
var state_31387__$1 = state_31387;
var statearr_31392_31439 = state_31387__$1;
(statearr_31392_31439[(2)] = inst_31377);

(statearr_31392_31439[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31388 === (1))){
var inst_31300 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_31387__$1 = state_31387;
if(cljs.core.truth_(inst_31300)){
var statearr_31393_31440 = state_31387__$1;
(statearr_31393_31440[(1)] = (2));

} else {
var statearr_31394_31441 = state_31387__$1;
(statearr_31394_31441[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31388 === (24))){
var inst_31379 = (state_31387[(2)]);
var state_31387__$1 = state_31387;
var statearr_31395_31442 = state_31387__$1;
(statearr_31395_31442[(2)] = inst_31379);

(statearr_31395_31442[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31388 === (4))){
var inst_31385 = (state_31387[(2)]);
var state_31387__$1 = state_31387;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31387__$1,inst_31385);
} else {
if((state_val_31388 === (15))){
var inst_31383 = (state_31387[(2)]);
var state_31387__$1 = state_31387;
var statearr_31396_31443 = state_31387__$1;
(statearr_31396_31443[(2)] = inst_31383);

(statearr_31396_31443[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31388 === (21))){
var inst_31336 = (state_31387[(2)]);
var inst_31337 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31338 = figwheel.client.auto_jump_to_error.call(null,opts,inst_31337);
var state_31387__$1 = (function (){var statearr_31397 = state_31387;
(statearr_31397[(7)] = inst_31336);

return statearr_31397;
})();
var statearr_31398_31444 = state_31387__$1;
(statearr_31398_31444[(2)] = inst_31338);

(statearr_31398_31444[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31388 === (31))){
var inst_31366 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_31387__$1 = state_31387;
if(inst_31366){
var statearr_31399_31445 = state_31387__$1;
(statearr_31399_31445[(1)] = (34));

} else {
var statearr_31400_31446 = state_31387__$1;
(statearr_31400_31446[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31388 === (32))){
var inst_31375 = (state_31387[(2)]);
var state_31387__$1 = state_31387;
var statearr_31401_31447 = state_31387__$1;
(statearr_31401_31447[(2)] = inst_31375);

(statearr_31401_31447[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31388 === (33))){
var inst_31362 = (state_31387[(2)]);
var inst_31363 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31364 = figwheel.client.auto_jump_to_error.call(null,opts,inst_31363);
var state_31387__$1 = (function (){var statearr_31402 = state_31387;
(statearr_31402[(8)] = inst_31362);

return statearr_31402;
})();
var statearr_31403_31448 = state_31387__$1;
(statearr_31403_31448[(2)] = inst_31364);

(statearr_31403_31448[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31388 === (13))){
var inst_31321 = figwheel.client.heads_up.clear.call(null);
var state_31387__$1 = state_31387;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31387__$1,(16),inst_31321);
} else {
if((state_val_31388 === (22))){
var inst_31342 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31343 = figwheel.client.heads_up.append_warning_message.call(null,inst_31342);
var state_31387__$1 = state_31387;
var statearr_31404_31449 = state_31387__$1;
(statearr_31404_31449[(2)] = inst_31343);

(statearr_31404_31449[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31388 === (36))){
var inst_31373 = (state_31387[(2)]);
var state_31387__$1 = state_31387;
var statearr_31405_31450 = state_31387__$1;
(statearr_31405_31450[(2)] = inst_31373);

(statearr_31405_31450[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31388 === (29))){
var inst_31353 = (state_31387[(2)]);
var inst_31354 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31355 = figwheel.client.auto_jump_to_error.call(null,opts,inst_31354);
var state_31387__$1 = (function (){var statearr_31406 = state_31387;
(statearr_31406[(9)] = inst_31353);

return statearr_31406;
})();
var statearr_31407_31451 = state_31387__$1;
(statearr_31407_31451[(2)] = inst_31355);

(statearr_31407_31451[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31388 === (6))){
var inst_31302 = (state_31387[(10)]);
var state_31387__$1 = state_31387;
var statearr_31408_31452 = state_31387__$1;
(statearr_31408_31452[(2)] = inst_31302);

(statearr_31408_31452[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31388 === (28))){
var inst_31349 = (state_31387[(2)]);
var inst_31350 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31351 = figwheel.client.heads_up.display_warning.call(null,inst_31350);
var state_31387__$1 = (function (){var statearr_31409 = state_31387;
(statearr_31409[(11)] = inst_31349);

return statearr_31409;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31387__$1,(29),inst_31351);
} else {
if((state_val_31388 === (25))){
var inst_31347 = figwheel.client.heads_up.clear.call(null);
var state_31387__$1 = state_31387;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31387__$1,(28),inst_31347);
} else {
if((state_val_31388 === (34))){
var inst_31368 = figwheel.client.heads_up.flash_loaded.call(null);
var state_31387__$1 = state_31387;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31387__$1,(37),inst_31368);
} else {
if((state_val_31388 === (17))){
var inst_31327 = (state_31387[(2)]);
var inst_31328 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31329 = figwheel.client.auto_jump_to_error.call(null,opts,inst_31328);
var state_31387__$1 = (function (){var statearr_31410 = state_31387;
(statearr_31410[(12)] = inst_31327);

return statearr_31410;
})();
var statearr_31411_31453 = state_31387__$1;
(statearr_31411_31453[(2)] = inst_31329);

(statearr_31411_31453[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31388 === (3))){
var inst_31319 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_31387__$1 = state_31387;
if(inst_31319){
var statearr_31412_31454 = state_31387__$1;
(statearr_31412_31454[(1)] = (13));

} else {
var statearr_31413_31455 = state_31387__$1;
(statearr_31413_31455[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31388 === (12))){
var inst_31315 = (state_31387[(2)]);
var state_31387__$1 = state_31387;
var statearr_31414_31456 = state_31387__$1;
(statearr_31414_31456[(2)] = inst_31315);

(statearr_31414_31456[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31388 === (2))){
var inst_31302 = (state_31387[(10)]);
var inst_31302__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_31387__$1 = (function (){var statearr_31415 = state_31387;
(statearr_31415[(10)] = inst_31302__$1);

return statearr_31415;
})();
if(cljs.core.truth_(inst_31302__$1)){
var statearr_31416_31457 = state_31387__$1;
(statearr_31416_31457[(1)] = (5));

} else {
var statearr_31417_31458 = state_31387__$1;
(statearr_31417_31458[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31388 === (23))){
var inst_31345 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_31387__$1 = state_31387;
if(inst_31345){
var statearr_31418_31459 = state_31387__$1;
(statearr_31418_31459[(1)] = (25));

} else {
var statearr_31419_31460 = state_31387__$1;
(statearr_31419_31460[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31388 === (35))){
var state_31387__$1 = state_31387;
var statearr_31420_31461 = state_31387__$1;
(statearr_31420_31461[(2)] = null);

(statearr_31420_31461[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31388 === (19))){
var inst_31340 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_31387__$1 = state_31387;
if(inst_31340){
var statearr_31421_31462 = state_31387__$1;
(statearr_31421_31462[(1)] = (22));

} else {
var statearr_31422_31463 = state_31387__$1;
(statearr_31422_31463[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31388 === (11))){
var inst_31311 = (state_31387[(2)]);
var state_31387__$1 = state_31387;
var statearr_31423_31464 = state_31387__$1;
(statearr_31423_31464[(2)] = inst_31311);

(statearr_31423_31464[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31388 === (9))){
var inst_31313 = figwheel.client.heads_up.clear.call(null);
var state_31387__$1 = state_31387;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31387__$1,(12),inst_31313);
} else {
if((state_val_31388 === (5))){
var inst_31304 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_31387__$1 = state_31387;
var statearr_31424_31465 = state_31387__$1;
(statearr_31424_31465[(2)] = inst_31304);

(statearr_31424_31465[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31388 === (14))){
var inst_31331 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_31387__$1 = state_31387;
if(inst_31331){
var statearr_31425_31466 = state_31387__$1;
(statearr_31425_31466[(1)] = (18));

} else {
var statearr_31426_31467 = state_31387__$1;
(statearr_31426_31467[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31388 === (26))){
var inst_31357 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_31387__$1 = state_31387;
if(inst_31357){
var statearr_31427_31468 = state_31387__$1;
(statearr_31427_31468[(1)] = (30));

} else {
var statearr_31428_31469 = state_31387__$1;
(statearr_31428_31469[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31388 === (16))){
var inst_31323 = (state_31387[(2)]);
var inst_31324 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31325 = figwheel.client.heads_up.display_exception.call(null,inst_31324);
var state_31387__$1 = (function (){var statearr_31429 = state_31387;
(statearr_31429[(13)] = inst_31323);

return statearr_31429;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31387__$1,(17),inst_31325);
} else {
if((state_val_31388 === (30))){
var inst_31359 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31360 = figwheel.client.heads_up.display_warning.call(null,inst_31359);
var state_31387__$1 = state_31387;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31387__$1,(33),inst_31360);
} else {
if((state_val_31388 === (10))){
var inst_31317 = (state_31387[(2)]);
var state_31387__$1 = state_31387;
var statearr_31430_31470 = state_31387__$1;
(statearr_31430_31470[(2)] = inst_31317);

(statearr_31430_31470[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31388 === (18))){
var inst_31333 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31334 = figwheel.client.heads_up.display_exception.call(null,inst_31333);
var state_31387__$1 = state_31387;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31387__$1,(21),inst_31334);
} else {
if((state_val_31388 === (37))){
var inst_31370 = (state_31387[(2)]);
var state_31387__$1 = state_31387;
var statearr_31431_31471 = state_31387__$1;
(statearr_31431_31471[(2)] = inst_31370);

(statearr_31431_31471[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31388 === (8))){
var inst_31309 = figwheel.client.heads_up.flash_loaded.call(null);
var state_31387__$1 = state_31387;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31387__$1,(11),inst_31309);
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
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26970__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26970__auto____0 = (function (){
var statearr_31432 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31432[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26970__auto__);

(statearr_31432[(1)] = (1));

return statearr_31432;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26970__auto____1 = (function (state_31387){
while(true){
var ret_value__26971__auto__ = (function (){try{while(true){
var result__26972__auto__ = switch__26969__auto__.call(null,state_31387);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26972__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26972__auto__;
}
break;
}
}catch (e31433){if((e31433 instanceof Object)){
var ex__26973__auto__ = e31433;
var statearr_31434_31472 = state_31387;
(statearr_31434_31472[(5)] = ex__26973__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31387);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31433;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26971__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31473 = state_31387;
state_31387 = G__31473;
continue;
} else {
return ret_value__26971__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26970__auto__ = function(state_31387){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26970__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26970__auto____1.call(this,state_31387);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26970__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26970__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26970__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26970__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26970__auto__;
})()
})();
var state__27066__auto__ = (function (){var statearr_31435 = f__27065__auto__.call(null);
(statearr_31435[(6)] = c__27064__auto__);

return statearr_31435;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27066__auto__);
}));

return c__27064__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__27064__auto___31502 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27065__auto__ = (function (){var switch__26969__auto__ = (function (state_31488){
var state_val_31489 = (state_31488[(1)]);
if((state_val_31489 === (1))){
var state_31488__$1 = state_31488;
var statearr_31490_31503 = state_31488__$1;
(statearr_31490_31503[(2)] = null);

(statearr_31490_31503[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31489 === (2))){
var state_31488__$1 = state_31488;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31488__$1,(4),ch);
} else {
if((state_val_31489 === (3))){
var inst_31486 = (state_31488[(2)]);
var state_31488__$1 = state_31488;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31488__$1,inst_31486);
} else {
if((state_val_31489 === (4))){
var inst_31476 = (state_31488[(7)]);
var inst_31476__$1 = (state_31488[(2)]);
var state_31488__$1 = (function (){var statearr_31491 = state_31488;
(statearr_31491[(7)] = inst_31476__$1);

return statearr_31491;
})();
if(cljs.core.truth_(inst_31476__$1)){
var statearr_31492_31504 = state_31488__$1;
(statearr_31492_31504[(1)] = (5));

} else {
var statearr_31493_31505 = state_31488__$1;
(statearr_31493_31505[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31489 === (5))){
var inst_31476 = (state_31488[(7)]);
var inst_31478 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_31476);
var state_31488__$1 = state_31488;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31488__$1,(8),inst_31478);
} else {
if((state_val_31489 === (6))){
var state_31488__$1 = state_31488;
var statearr_31494_31506 = state_31488__$1;
(statearr_31494_31506[(2)] = null);

(statearr_31494_31506[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31489 === (7))){
var inst_31484 = (state_31488[(2)]);
var state_31488__$1 = state_31488;
var statearr_31495_31507 = state_31488__$1;
(statearr_31495_31507[(2)] = inst_31484);

(statearr_31495_31507[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31489 === (8))){
var inst_31480 = (state_31488[(2)]);
var state_31488__$1 = (function (){var statearr_31496 = state_31488;
(statearr_31496[(8)] = inst_31480);

return statearr_31496;
})();
var statearr_31497_31508 = state_31488__$1;
(statearr_31497_31508[(2)] = null);

(statearr_31497_31508[(1)] = (2));


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
var figwheel$client$heads_up_plugin_$_state_machine__26970__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__26970__auto____0 = (function (){
var statearr_31498 = [null,null,null,null,null,null,null,null,null];
(statearr_31498[(0)] = figwheel$client$heads_up_plugin_$_state_machine__26970__auto__);

(statearr_31498[(1)] = (1));

return statearr_31498;
});
var figwheel$client$heads_up_plugin_$_state_machine__26970__auto____1 = (function (state_31488){
while(true){
var ret_value__26971__auto__ = (function (){try{while(true){
var result__26972__auto__ = switch__26969__auto__.call(null,state_31488);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26972__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26972__auto__;
}
break;
}
}catch (e31499){if((e31499 instanceof Object)){
var ex__26973__auto__ = e31499;
var statearr_31500_31509 = state_31488;
(statearr_31500_31509[(5)] = ex__26973__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31488);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31499;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26971__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31510 = state_31488;
state_31488 = G__31510;
continue;
} else {
return ret_value__26971__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__26970__auto__ = function(state_31488){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__26970__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__26970__auto____1.call(this,state_31488);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__26970__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__26970__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__26970__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__26970__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__26970__auto__;
})()
})();
var state__27066__auto__ = (function (){var statearr_31501 = f__27065__auto__.call(null);
(statearr_31501[(6)] = c__27064__auto___31502);

return statearr_31501;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27066__auto__);
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
var c__27064__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27065__auto__ = (function (){var switch__26969__auto__ = (function (state_31516){
var state_val_31517 = (state_31516[(1)]);
if((state_val_31517 === (1))){
var inst_31511 = cljs.core.async.timeout.call(null,(3000));
var state_31516__$1 = state_31516;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31516__$1,(2),inst_31511);
} else {
if((state_val_31517 === (2))){
var inst_31513 = (state_31516[(2)]);
var inst_31514 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_31516__$1 = (function (){var statearr_31518 = state_31516;
(statearr_31518[(7)] = inst_31513);

return statearr_31518;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31516__$1,inst_31514);
} else {
return null;
}
}
});
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__26970__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__26970__auto____0 = (function (){
var statearr_31519 = [null,null,null,null,null,null,null,null];
(statearr_31519[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__26970__auto__);

(statearr_31519[(1)] = (1));

return statearr_31519;
});
var figwheel$client$enforce_project_plugin_$_state_machine__26970__auto____1 = (function (state_31516){
while(true){
var ret_value__26971__auto__ = (function (){try{while(true){
var result__26972__auto__ = switch__26969__auto__.call(null,state_31516);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26972__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26972__auto__;
}
break;
}
}catch (e31520){if((e31520 instanceof Object)){
var ex__26973__auto__ = e31520;
var statearr_31521_31523 = state_31516;
(statearr_31521_31523[(5)] = ex__26973__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31516);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31520;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26971__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31524 = state_31516;
state_31516 = G__31524;
continue;
} else {
return ret_value__26971__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__26970__auto__ = function(state_31516){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__26970__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__26970__auto____1.call(this,state_31516);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__26970__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__26970__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__26970__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__26970__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__26970__auto__;
})()
})();
var state__27066__auto__ = (function (){var statearr_31522 = f__27065__auto__.call(null);
(statearr_31522[(6)] = c__27064__auto__);

return statearr_31522;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27066__auto__);
}));

return c__27064__auto__;
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
var c__27064__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27065__auto__ = (function (){var switch__26969__auto__ = (function (state_31531){
var state_val_31532 = (state_31531[(1)]);
if((state_val_31532 === (1))){
var inst_31525 = cljs.core.async.timeout.call(null,(2000));
var state_31531__$1 = state_31531;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31531__$1,(2),inst_31525);
} else {
if((state_val_31532 === (2))){
var inst_31527 = (state_31531[(2)]);
var inst_31528 = ["Figwheel Client Version <strong>",figwheel.client._figwheel_version_,"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_31529 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_31528);
var state_31531__$1 = (function (){var statearr_31533 = state_31531;
(statearr_31533[(7)] = inst_31527);

return statearr_31533;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31531__$1,inst_31529);
} else {
return null;
}
}
});
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26970__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26970__auto____0 = (function (){
var statearr_31534 = [null,null,null,null,null,null,null,null];
(statearr_31534[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26970__auto__);

(statearr_31534[(1)] = (1));

return statearr_31534;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26970__auto____1 = (function (state_31531){
while(true){
var ret_value__26971__auto__ = (function (){try{while(true){
var result__26972__auto__ = switch__26969__auto__.call(null,state_31531);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26972__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26972__auto__;
}
break;
}
}catch (e31535){if((e31535 instanceof Object)){
var ex__26973__auto__ = e31535;
var statearr_31536_31538 = state_31531;
(statearr_31536_31538[(5)] = ex__26973__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31531);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31535;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26971__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31539 = state_31531;
state_31531 = G__31539;
continue;
} else {
return ret_value__26971__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26970__auto__ = function(state_31531){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26970__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26970__auto____1.call(this,state_31531);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26970__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26970__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26970__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26970__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26970__auto__;
})()
})();
var state__27066__auto__ = (function (){var statearr_31537 = f__27065__auto__.call(null);
(statearr_31537[(6)] = c__27064__auto__);

return statearr_31537;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27066__auto__);
}));

return c__27064__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__31540){
var map__31541 = p__31540;
var map__31541__$1 = (((((!((map__31541 == null))))?(((((map__31541.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31541.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31541):map__31541);
var file = cljs.core.get.call(null,map__31541__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__31541__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__31541__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__31543 = "";
var G__31543__$1 = (cljs.core.truth_(file)?[G__31543,"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__31543);
var G__31543__$2 = (cljs.core.truth_(line)?[G__31543__$1," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__31543__$1);
if(cljs.core.truth_((function (){var and__4115__auto__ = line;
if(cljs.core.truth_(and__4115__auto__)){
return column;
} else {
return and__4115__auto__;
}
})())){
return [G__31543__$2,", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__31543__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__31544){
var map__31545 = p__31544;
var map__31545__$1 = (((((!((map__31545 == null))))?(((((map__31545.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31545.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31545):map__31545);
var ed = map__31545__$1;
var exception_data = cljs.core.get.call(null,map__31545__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__31545__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
var message_31548 = (function (){var G__31547 = cljs.core.apply.call(null,cljs.core.str,"Figwheel: Compile Exception ",figwheel.client.format_messages.call(null,exception_data));
if(cljs.core.truth_(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(exception_data))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31547)," Error on ",figwheel.client.file_line_column.call(null,exception_data)].join('');
} else {
return G__31547;
}
})();
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),message_31548);

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__31549){
var map__31550 = p__31549;
var map__31550__$1 = (((((!((map__31550 == null))))?(((((map__31550.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31550.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31550):map__31550);
var w = map__31550__$1;
var message = cljs.core.get.call(null,map__31550__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__31552 = cljs.core.seq.call(null,plugins);
var chunk__31553 = null;
var count__31554 = (0);
var i__31555 = (0);
while(true){
if((i__31555 < count__31554)){
var vec__31562 = cljs.core._nth.call(null,chunk__31553,i__31555);
var k = cljs.core.nth.call(null,vec__31562,(0),null);
var plugin = cljs.core.nth.call(null,vec__31562,(1),null);
if(cljs.core.truth_(plugin)){
var pl_31568 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__31552,chunk__31553,count__31554,i__31555,pl_31568,vec__31562,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_31568.call(null,msg_hist);
});})(seq__31552,chunk__31553,count__31554,i__31555,pl_31568,vec__31562,k,plugin))
);
} else {
}


var G__31569 = seq__31552;
var G__31570 = chunk__31553;
var G__31571 = count__31554;
var G__31572 = (i__31555 + (1));
seq__31552 = G__31569;
chunk__31553 = G__31570;
count__31554 = G__31571;
i__31555 = G__31572;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__31552);
if(temp__5720__auto__){
var seq__31552__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31552__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__31552__$1);
var G__31573 = cljs.core.chunk_rest.call(null,seq__31552__$1);
var G__31574 = c__4556__auto__;
var G__31575 = cljs.core.count.call(null,c__4556__auto__);
var G__31576 = (0);
seq__31552 = G__31573;
chunk__31553 = G__31574;
count__31554 = G__31575;
i__31555 = G__31576;
continue;
} else {
var vec__31565 = cljs.core.first.call(null,seq__31552__$1);
var k = cljs.core.nth.call(null,vec__31565,(0),null);
var plugin = cljs.core.nth.call(null,vec__31565,(1),null);
if(cljs.core.truth_(plugin)){
var pl_31577 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__31552,chunk__31553,count__31554,i__31555,pl_31577,vec__31565,k,plugin,seq__31552__$1,temp__5720__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_31577.call(null,msg_hist);
});})(seq__31552,chunk__31553,count__31554,i__31555,pl_31577,vec__31565,k,plugin,seq__31552__$1,temp__5720__auto__))
);
} else {
}


var G__31578 = cljs.core.next.call(null,seq__31552__$1);
var G__31579 = null;
var G__31580 = (0);
var G__31581 = (0);
seq__31552 = G__31578;
chunk__31553 = G__31579;
count__31554 = G__31580;
i__31555 = G__31581;
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
var G__31583 = arguments.length;
switch (G__31583) {
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

var seq__31584_31589 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__31585_31590 = null;
var count__31586_31591 = (0);
var i__31587_31592 = (0);
while(true){
if((i__31587_31592 < count__31586_31591)){
var msg_31593 = cljs.core._nth.call(null,chunk__31585_31590,i__31587_31592);
figwheel.client.socket.handle_incoming_message.call(null,msg_31593);


var G__31594 = seq__31584_31589;
var G__31595 = chunk__31585_31590;
var G__31596 = count__31586_31591;
var G__31597 = (i__31587_31592 + (1));
seq__31584_31589 = G__31594;
chunk__31585_31590 = G__31595;
count__31586_31591 = G__31596;
i__31587_31592 = G__31597;
continue;
} else {
var temp__5720__auto___31598 = cljs.core.seq.call(null,seq__31584_31589);
if(temp__5720__auto___31598){
var seq__31584_31599__$1 = temp__5720__auto___31598;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31584_31599__$1)){
var c__4556__auto___31600 = cljs.core.chunk_first.call(null,seq__31584_31599__$1);
var G__31601 = cljs.core.chunk_rest.call(null,seq__31584_31599__$1);
var G__31602 = c__4556__auto___31600;
var G__31603 = cljs.core.count.call(null,c__4556__auto___31600);
var G__31604 = (0);
seq__31584_31589 = G__31601;
chunk__31585_31590 = G__31602;
count__31586_31591 = G__31603;
i__31587_31592 = G__31604;
continue;
} else {
var msg_31605 = cljs.core.first.call(null,seq__31584_31599__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_31605);


var G__31606 = cljs.core.next.call(null,seq__31584_31599__$1);
var G__31607 = null;
var G__31608 = (0);
var G__31609 = (0);
seq__31584_31589 = G__31606;
chunk__31585_31590 = G__31607;
count__31586_31591 = G__31608;
i__31587_31592 = G__31609;
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
var len__4736__auto___31614 = arguments.length;
var i__4737__auto___31615 = (0);
while(true){
if((i__4737__auto___31615 < len__4736__auto___31614)){
args__4742__auto__.push((arguments[i__4737__auto___31615]));

var G__31616 = (i__4737__auto___31615 + (1));
i__4737__auto___31615 = G__31616;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__31611){
var map__31612 = p__31611;
var map__31612__$1 = (((((!((map__31612 == null))))?(((((map__31612.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31612.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31612):map__31612);
var opts = map__31612__$1;
return figwheel.client.start.call(null,opts);
}));

(figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq31610){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31610));
}));

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e31617){if((e31617 instanceof Error)){
var e = e31617;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e31617;

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

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),(function (p__31618){
var map__31619 = p__31618;
var map__31619__$1 = (((((!((map__31619 == null))))?(((((map__31619.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31619.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31619):map__31619);
var msg_name = cljs.core.get.call(null,map__31619__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return (location.href = location.href);
} else {
return null;
}
}));
});

//# sourceMappingURL=client.js.map?rel=1607132441344
