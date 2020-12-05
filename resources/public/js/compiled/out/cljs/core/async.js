// Compiled by ClojureScript 1.10.773 {:target :nodejs}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('goog.array');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__27291 = arguments.length;
switch (G__27291) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27292 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27292 = (function (f,blockable,meta27293){
this.f = f;
this.blockable = blockable;
this.meta27293 = meta27293;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async27292.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27294,meta27293__$1){
var self__ = this;
var _27294__$1 = this;
return (new cljs.core.async.t_cljs$core$async27292(self__.f,self__.blockable,meta27293__$1));
}));

(cljs.core.async.t_cljs$core$async27292.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27294){
var self__ = this;
var _27294__$1 = this;
return self__.meta27293;
}));

(cljs.core.async.t_cljs$core$async27292.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27292.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async27292.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async27292.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async27292.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta27293","meta27293",-982055314,null)], null);
}));

(cljs.core.async.t_cljs$core$async27292.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async27292.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27292");

(cljs.core.async.t_cljs$core$async27292.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async27292");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27292.
 */
cljs.core.async.__GT_t_cljs$core$async27292 = (function cljs$core$async$__GT_t_cljs$core$async27292(f__$1,blockable__$1,meta27293){
return (new cljs.core.async.t_cljs$core$async27292(f__$1,blockable__$1,meta27293));
});

}

return (new cljs.core.async.t_cljs$core$async27292(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__27298 = arguments.length;
switch (G__27298) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__27301 = arguments.length;
switch (G__27301) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__27304 = arguments.length;
switch (G__27304) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_27306 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_27306);
} else {
cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,val_27306);
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__27308 = arguments.length;
switch (G__27308) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5718__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5718__auto__)){
var ret = temp__5718__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5718__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5718__auto__)){
var retb = temp__5718__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,ret);
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4613__auto___27310 = n;
var x_27311 = (0);
while(true){
if((x_27311 < n__4613__auto___27310)){
(a[x_27311] = x_27311);

var G__27312 = (x_27311 + (1));
x_27311 = G__27312;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27313 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27313 = (function (flag,meta27314){
this.flag = flag;
this.meta27314 = meta27314;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async27313.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27315,meta27314__$1){
var self__ = this;
var _27315__$1 = this;
return (new cljs.core.async.t_cljs$core$async27313(self__.flag,meta27314__$1));
}));

(cljs.core.async.t_cljs$core$async27313.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27315){
var self__ = this;
var _27315__$1 = this;
return self__.meta27314;
}));

(cljs.core.async.t_cljs$core$async27313.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27313.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async27313.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async27313.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async27313.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta27314","meta27314",1591564646,null)], null);
}));

(cljs.core.async.t_cljs$core$async27313.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async27313.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27313");

(cljs.core.async.t_cljs$core$async27313.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async27313");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27313.
 */
cljs.core.async.__GT_t_cljs$core$async27313 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async27313(flag__$1,meta27314){
return (new cljs.core.async.t_cljs$core$async27313(flag__$1,meta27314));
});

}

return (new cljs.core.async.t_cljs$core$async27313(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27316 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27316 = (function (flag,cb,meta27317){
this.flag = flag;
this.cb = cb;
this.meta27317 = meta27317;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async27316.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27318,meta27317__$1){
var self__ = this;
var _27318__$1 = this;
return (new cljs.core.async.t_cljs$core$async27316(self__.flag,self__.cb,meta27317__$1));
}));

(cljs.core.async.t_cljs$core$async27316.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27318){
var self__ = this;
var _27318__$1 = this;
return self__.meta27317;
}));

(cljs.core.async.t_cljs$core$async27316.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27316.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async27316.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async27316.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async27316.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta27317","meta27317",608330503,null)], null);
}));

(cljs.core.async.t_cljs$core$async27316.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async27316.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27316");

(cljs.core.async.t_cljs$core$async27316.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async27316");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27316.
 */
cljs.core.async.__GT_t_cljs$core$async27316 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async27316(flag__$1,cb__$1,meta27317){
return (new cljs.core.async.t_cljs$core$async27316(flag__$1,cb__$1,meta27317));
});

}

return (new cljs.core.async.t_cljs$core$async27316(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count.call(null,ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__27319_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27319_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__27320_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27320_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4126__auto__ = wport;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return port;
}
})()], null));
} else {
var G__27321 = (i + (1));
i = G__27321;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4126__auto__ = ret;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5720__auto__ = (function (){var and__4115__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(temp__5720__auto__)){
var got = temp__5720__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___27327 = arguments.length;
var i__4737__auto___27328 = (0);
while(true){
if((i__4737__auto___27328 < len__4736__auto___27327)){
args__4742__auto__.push((arguments[i__4737__auto___27328]));

var G__27329 = (i__4737__auto___27328 + (1));
i__4737__auto___27328 = G__27329;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__27324){
var map__27325 = p__27324;
var map__27325__$1 = (((((!((map__27325 == null))))?(((((map__27325.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27325.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27325):map__27325);
var opts = map__27325__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq27322){
var G__27323 = cljs.core.first.call(null,seq27322);
var seq27322__$1 = cljs.core.next.call(null,seq27322);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27323,seq27322__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__27331 = arguments.length;
switch (G__27331) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__27231__auto___27377 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27232__auto__ = (function (){var switch__27136__auto__ = (function (state_27355){
var state_val_27356 = (state_27355[(1)]);
if((state_val_27356 === (7))){
var inst_27351 = (state_27355[(2)]);
var state_27355__$1 = state_27355;
var statearr_27357_27378 = state_27355__$1;
(statearr_27357_27378[(2)] = inst_27351);

(statearr_27357_27378[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27356 === (1))){
var state_27355__$1 = state_27355;
var statearr_27358_27379 = state_27355__$1;
(statearr_27358_27379[(2)] = null);

(statearr_27358_27379[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27356 === (4))){
var inst_27334 = (state_27355[(7)]);
var inst_27334__$1 = (state_27355[(2)]);
var inst_27335 = (inst_27334__$1 == null);
var state_27355__$1 = (function (){var statearr_27359 = state_27355;
(statearr_27359[(7)] = inst_27334__$1);

return statearr_27359;
})();
if(cljs.core.truth_(inst_27335)){
var statearr_27360_27380 = state_27355__$1;
(statearr_27360_27380[(1)] = (5));

} else {
var statearr_27361_27381 = state_27355__$1;
(statearr_27361_27381[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27356 === (13))){
var state_27355__$1 = state_27355;
var statearr_27362_27382 = state_27355__$1;
(statearr_27362_27382[(2)] = null);

(statearr_27362_27382[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27356 === (6))){
var inst_27334 = (state_27355[(7)]);
var state_27355__$1 = state_27355;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27355__$1,(11),to,inst_27334);
} else {
if((state_val_27356 === (3))){
var inst_27353 = (state_27355[(2)]);
var state_27355__$1 = state_27355;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27355__$1,inst_27353);
} else {
if((state_val_27356 === (12))){
var state_27355__$1 = state_27355;
var statearr_27363_27383 = state_27355__$1;
(statearr_27363_27383[(2)] = null);

(statearr_27363_27383[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27356 === (2))){
var state_27355__$1 = state_27355;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27355__$1,(4),from);
} else {
if((state_val_27356 === (11))){
var inst_27344 = (state_27355[(2)]);
var state_27355__$1 = state_27355;
if(cljs.core.truth_(inst_27344)){
var statearr_27364_27384 = state_27355__$1;
(statearr_27364_27384[(1)] = (12));

} else {
var statearr_27365_27385 = state_27355__$1;
(statearr_27365_27385[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27356 === (9))){
var state_27355__$1 = state_27355;
var statearr_27366_27386 = state_27355__$1;
(statearr_27366_27386[(2)] = null);

(statearr_27366_27386[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27356 === (5))){
var state_27355__$1 = state_27355;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27367_27387 = state_27355__$1;
(statearr_27367_27387[(1)] = (8));

} else {
var statearr_27368_27388 = state_27355__$1;
(statearr_27368_27388[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27356 === (14))){
var inst_27349 = (state_27355[(2)]);
var state_27355__$1 = state_27355;
var statearr_27369_27389 = state_27355__$1;
(statearr_27369_27389[(2)] = inst_27349);

(statearr_27369_27389[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27356 === (10))){
var inst_27341 = (state_27355[(2)]);
var state_27355__$1 = state_27355;
var statearr_27370_27390 = state_27355__$1;
(statearr_27370_27390[(2)] = inst_27341);

(statearr_27370_27390[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27356 === (8))){
var inst_27338 = cljs.core.async.close_BANG_.call(null,to);
var state_27355__$1 = state_27355;
var statearr_27371_27391 = state_27355__$1;
(statearr_27371_27391[(2)] = inst_27338);

(statearr_27371_27391[(1)] = (10));


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
});
return (function() {
var cljs$core$async$state_machine__27137__auto__ = null;
var cljs$core$async$state_machine__27137__auto____0 = (function (){
var statearr_27372 = [null,null,null,null,null,null,null,null];
(statearr_27372[(0)] = cljs$core$async$state_machine__27137__auto__);

(statearr_27372[(1)] = (1));

return statearr_27372;
});
var cljs$core$async$state_machine__27137__auto____1 = (function (state_27355){
while(true){
var ret_value__27138__auto__ = (function (){try{while(true){
var result__27139__auto__ = switch__27136__auto__.call(null,state_27355);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27139__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27139__auto__;
}
break;
}
}catch (e27373){if((e27373 instanceof Object)){
var ex__27140__auto__ = e27373;
var statearr_27374_27392 = state_27355;
(statearr_27374_27392[(5)] = ex__27140__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27355);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27373;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27138__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27393 = state_27355;
state_27355 = G__27393;
continue;
} else {
return ret_value__27138__auto__;
}
break;
}
});
cljs$core$async$state_machine__27137__auto__ = function(state_27355){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27137__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27137__auto____1.call(this,state_27355);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27137__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27137__auto____0;
cljs$core$async$state_machine__27137__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27137__auto____1;
return cljs$core$async$state_machine__27137__auto__;
})()
})();
var state__27233__auto__ = (function (){var statearr_27375 = f__27232__auto__.call(null);
(statearr_27375[(6)] = c__27231__auto___27377);

return statearr_27375;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27233__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = (function (p__27394){
var vec__27395 = p__27394;
var v = cljs.core.nth.call(null,vec__27395,(0),null);
var p = cljs.core.nth.call(null,vec__27395,(1),null);
var job = vec__27395;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__27231__auto___27566 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27232__auto__ = (function (){var switch__27136__auto__ = (function (state_27402){
var state_val_27403 = (state_27402[(1)]);
if((state_val_27403 === (1))){
var state_27402__$1 = state_27402;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27402__$1,(2),res,v);
} else {
if((state_val_27403 === (2))){
var inst_27399 = (state_27402[(2)]);
var inst_27400 = cljs.core.async.close_BANG_.call(null,res);
var state_27402__$1 = (function (){var statearr_27404 = state_27402;
(statearr_27404[(7)] = inst_27399);

return statearr_27404;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27402__$1,inst_27400);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27137__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27137__auto____0 = (function (){
var statearr_27405 = [null,null,null,null,null,null,null,null];
(statearr_27405[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27137__auto__);

(statearr_27405[(1)] = (1));

return statearr_27405;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27137__auto____1 = (function (state_27402){
while(true){
var ret_value__27138__auto__ = (function (){try{while(true){
var result__27139__auto__ = switch__27136__auto__.call(null,state_27402);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27139__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27139__auto__;
}
break;
}
}catch (e27406){if((e27406 instanceof Object)){
var ex__27140__auto__ = e27406;
var statearr_27407_27567 = state_27402;
(statearr_27407_27567[(5)] = ex__27140__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27402);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27406;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27138__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27568 = state_27402;
state_27402 = G__27568;
continue;
} else {
return ret_value__27138__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27137__auto__ = function(state_27402){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27137__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27137__auto____1.call(this,state_27402);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27137__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27137__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27137__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27137__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27137__auto__;
})()
})();
var state__27233__auto__ = (function (){var statearr_27408 = f__27232__auto__.call(null);
(statearr_27408[(6)] = c__27231__auto___27566);

return statearr_27408;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27233__auto__);
}));


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});
var async = (function (p__27409){
var vec__27410 = p__27409;
var v = cljs.core.nth.call(null,vec__27410,(0),null);
var p = cljs.core.nth.call(null,vec__27410,(1),null);
var job = vec__27410;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});
var n__4613__auto___27569 = n;
var __27570 = (0);
while(true){
if((__27570 < n__4613__auto___27569)){
var G__27413_27571 = type;
var G__27413_27572__$1 = (((G__27413_27571 instanceof cljs.core.Keyword))?G__27413_27571.fqn:null);
switch (G__27413_27572__$1) {
case "compute":
var c__27231__auto___27574 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__27570,c__27231__auto___27574,G__27413_27571,G__27413_27572__$1,n__4613__auto___27569,jobs,results,process,async){
return (function (){
var f__27232__auto__ = (function (){var switch__27136__auto__ = ((function (__27570,c__27231__auto___27574,G__27413_27571,G__27413_27572__$1,n__4613__auto___27569,jobs,results,process,async){
return (function (state_27426){
var state_val_27427 = (state_27426[(1)]);
if((state_val_27427 === (1))){
var state_27426__$1 = state_27426;
var statearr_27428_27575 = state_27426__$1;
(statearr_27428_27575[(2)] = null);

(statearr_27428_27575[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27427 === (2))){
var state_27426__$1 = state_27426;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27426__$1,(4),jobs);
} else {
if((state_val_27427 === (3))){
var inst_27424 = (state_27426[(2)]);
var state_27426__$1 = state_27426;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27426__$1,inst_27424);
} else {
if((state_val_27427 === (4))){
var inst_27416 = (state_27426[(2)]);
var inst_27417 = process.call(null,inst_27416);
var state_27426__$1 = state_27426;
if(cljs.core.truth_(inst_27417)){
var statearr_27429_27576 = state_27426__$1;
(statearr_27429_27576[(1)] = (5));

} else {
var statearr_27430_27577 = state_27426__$1;
(statearr_27430_27577[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27427 === (5))){
var state_27426__$1 = state_27426;
var statearr_27431_27578 = state_27426__$1;
(statearr_27431_27578[(2)] = null);

(statearr_27431_27578[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27427 === (6))){
var state_27426__$1 = state_27426;
var statearr_27432_27579 = state_27426__$1;
(statearr_27432_27579[(2)] = null);

(statearr_27432_27579[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27427 === (7))){
var inst_27422 = (state_27426[(2)]);
var state_27426__$1 = state_27426;
var statearr_27433_27580 = state_27426__$1;
(statearr_27433_27580[(2)] = inst_27422);

(statearr_27433_27580[(1)] = (3));


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
});})(__27570,c__27231__auto___27574,G__27413_27571,G__27413_27572__$1,n__4613__auto___27569,jobs,results,process,async))
;
return ((function (__27570,switch__27136__auto__,c__27231__auto___27574,G__27413_27571,G__27413_27572__$1,n__4613__auto___27569,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27137__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27137__auto____0 = (function (){
var statearr_27434 = [null,null,null,null,null,null,null];
(statearr_27434[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27137__auto__);

(statearr_27434[(1)] = (1));

return statearr_27434;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27137__auto____1 = (function (state_27426){
while(true){
var ret_value__27138__auto__ = (function (){try{while(true){
var result__27139__auto__ = switch__27136__auto__.call(null,state_27426);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27139__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27139__auto__;
}
break;
}
}catch (e27435){if((e27435 instanceof Object)){
var ex__27140__auto__ = e27435;
var statearr_27436_27581 = state_27426;
(statearr_27436_27581[(5)] = ex__27140__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27426);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27435;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27138__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27582 = state_27426;
state_27426 = G__27582;
continue;
} else {
return ret_value__27138__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27137__auto__ = function(state_27426){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27137__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27137__auto____1.call(this,state_27426);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27137__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27137__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27137__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27137__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27137__auto__;
})()
;})(__27570,switch__27136__auto__,c__27231__auto___27574,G__27413_27571,G__27413_27572__$1,n__4613__auto___27569,jobs,results,process,async))
})();
var state__27233__auto__ = (function (){var statearr_27437 = f__27232__auto__.call(null);
(statearr_27437[(6)] = c__27231__auto___27574);

return statearr_27437;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27233__auto__);
});})(__27570,c__27231__auto___27574,G__27413_27571,G__27413_27572__$1,n__4613__auto___27569,jobs,results,process,async))
);


break;
case "async":
var c__27231__auto___27583 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__27570,c__27231__auto___27583,G__27413_27571,G__27413_27572__$1,n__4613__auto___27569,jobs,results,process,async){
return (function (){
var f__27232__auto__ = (function (){var switch__27136__auto__ = ((function (__27570,c__27231__auto___27583,G__27413_27571,G__27413_27572__$1,n__4613__auto___27569,jobs,results,process,async){
return (function (state_27450){
var state_val_27451 = (state_27450[(1)]);
if((state_val_27451 === (1))){
var state_27450__$1 = state_27450;
var statearr_27452_27584 = state_27450__$1;
(statearr_27452_27584[(2)] = null);

(statearr_27452_27584[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27451 === (2))){
var state_27450__$1 = state_27450;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27450__$1,(4),jobs);
} else {
if((state_val_27451 === (3))){
var inst_27448 = (state_27450[(2)]);
var state_27450__$1 = state_27450;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27450__$1,inst_27448);
} else {
if((state_val_27451 === (4))){
var inst_27440 = (state_27450[(2)]);
var inst_27441 = async.call(null,inst_27440);
var state_27450__$1 = state_27450;
if(cljs.core.truth_(inst_27441)){
var statearr_27453_27585 = state_27450__$1;
(statearr_27453_27585[(1)] = (5));

} else {
var statearr_27454_27586 = state_27450__$1;
(statearr_27454_27586[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27451 === (5))){
var state_27450__$1 = state_27450;
var statearr_27455_27587 = state_27450__$1;
(statearr_27455_27587[(2)] = null);

(statearr_27455_27587[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27451 === (6))){
var state_27450__$1 = state_27450;
var statearr_27456_27588 = state_27450__$1;
(statearr_27456_27588[(2)] = null);

(statearr_27456_27588[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27451 === (7))){
var inst_27446 = (state_27450[(2)]);
var state_27450__$1 = state_27450;
var statearr_27457_27589 = state_27450__$1;
(statearr_27457_27589[(2)] = inst_27446);

(statearr_27457_27589[(1)] = (3));


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
});})(__27570,c__27231__auto___27583,G__27413_27571,G__27413_27572__$1,n__4613__auto___27569,jobs,results,process,async))
;
return ((function (__27570,switch__27136__auto__,c__27231__auto___27583,G__27413_27571,G__27413_27572__$1,n__4613__auto___27569,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27137__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27137__auto____0 = (function (){
var statearr_27458 = [null,null,null,null,null,null,null];
(statearr_27458[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27137__auto__);

(statearr_27458[(1)] = (1));

return statearr_27458;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27137__auto____1 = (function (state_27450){
while(true){
var ret_value__27138__auto__ = (function (){try{while(true){
var result__27139__auto__ = switch__27136__auto__.call(null,state_27450);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27139__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27139__auto__;
}
break;
}
}catch (e27459){if((e27459 instanceof Object)){
var ex__27140__auto__ = e27459;
var statearr_27460_27590 = state_27450;
(statearr_27460_27590[(5)] = ex__27140__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27450);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27459;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27138__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27591 = state_27450;
state_27450 = G__27591;
continue;
} else {
return ret_value__27138__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27137__auto__ = function(state_27450){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27137__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27137__auto____1.call(this,state_27450);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27137__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27137__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27137__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27137__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27137__auto__;
})()
;})(__27570,switch__27136__auto__,c__27231__auto___27583,G__27413_27571,G__27413_27572__$1,n__4613__auto___27569,jobs,results,process,async))
})();
var state__27233__auto__ = (function (){var statearr_27461 = f__27232__auto__.call(null);
(statearr_27461[(6)] = c__27231__auto___27583);

return statearr_27461;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27233__auto__);
});})(__27570,c__27231__auto___27583,G__27413_27571,G__27413_27572__$1,n__4613__auto___27569,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27413_27572__$1)].join('')));

}

var G__27592 = (__27570 + (1));
__27570 = G__27592;
continue;
} else {
}
break;
}

var c__27231__auto___27593 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27232__auto__ = (function (){var switch__27136__auto__ = (function (state_27483){
var state_val_27484 = (state_27483[(1)]);
if((state_val_27484 === (7))){
var inst_27479 = (state_27483[(2)]);
var state_27483__$1 = state_27483;
var statearr_27485_27594 = state_27483__$1;
(statearr_27485_27594[(2)] = inst_27479);

(statearr_27485_27594[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27484 === (1))){
var state_27483__$1 = state_27483;
var statearr_27486_27595 = state_27483__$1;
(statearr_27486_27595[(2)] = null);

(statearr_27486_27595[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27484 === (4))){
var inst_27464 = (state_27483[(7)]);
var inst_27464__$1 = (state_27483[(2)]);
var inst_27465 = (inst_27464__$1 == null);
var state_27483__$1 = (function (){var statearr_27487 = state_27483;
(statearr_27487[(7)] = inst_27464__$1);

return statearr_27487;
})();
if(cljs.core.truth_(inst_27465)){
var statearr_27488_27596 = state_27483__$1;
(statearr_27488_27596[(1)] = (5));

} else {
var statearr_27489_27597 = state_27483__$1;
(statearr_27489_27597[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27484 === (6))){
var inst_27464 = (state_27483[(7)]);
var inst_27469 = (state_27483[(8)]);
var inst_27469__$1 = cljs.core.async.chan.call(null,(1));
var inst_27470 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27471 = [inst_27464,inst_27469__$1];
var inst_27472 = (new cljs.core.PersistentVector(null,2,(5),inst_27470,inst_27471,null));
var state_27483__$1 = (function (){var statearr_27490 = state_27483;
(statearr_27490[(8)] = inst_27469__$1);

return statearr_27490;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27483__$1,(8),jobs,inst_27472);
} else {
if((state_val_27484 === (3))){
var inst_27481 = (state_27483[(2)]);
var state_27483__$1 = state_27483;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27483__$1,inst_27481);
} else {
if((state_val_27484 === (2))){
var state_27483__$1 = state_27483;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27483__$1,(4),from);
} else {
if((state_val_27484 === (9))){
var inst_27476 = (state_27483[(2)]);
var state_27483__$1 = (function (){var statearr_27491 = state_27483;
(statearr_27491[(9)] = inst_27476);

return statearr_27491;
})();
var statearr_27492_27598 = state_27483__$1;
(statearr_27492_27598[(2)] = null);

(statearr_27492_27598[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27484 === (5))){
var inst_27467 = cljs.core.async.close_BANG_.call(null,jobs);
var state_27483__$1 = state_27483;
var statearr_27493_27599 = state_27483__$1;
(statearr_27493_27599[(2)] = inst_27467);

(statearr_27493_27599[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27484 === (8))){
var inst_27469 = (state_27483[(8)]);
var inst_27474 = (state_27483[(2)]);
var state_27483__$1 = (function (){var statearr_27494 = state_27483;
(statearr_27494[(10)] = inst_27474);

return statearr_27494;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27483__$1,(9),results,inst_27469);
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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27137__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27137__auto____0 = (function (){
var statearr_27495 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27495[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27137__auto__);

(statearr_27495[(1)] = (1));

return statearr_27495;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27137__auto____1 = (function (state_27483){
while(true){
var ret_value__27138__auto__ = (function (){try{while(true){
var result__27139__auto__ = switch__27136__auto__.call(null,state_27483);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27139__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27139__auto__;
}
break;
}
}catch (e27496){if((e27496 instanceof Object)){
var ex__27140__auto__ = e27496;
var statearr_27497_27600 = state_27483;
(statearr_27497_27600[(5)] = ex__27140__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27483);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27496;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27138__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27601 = state_27483;
state_27483 = G__27601;
continue;
} else {
return ret_value__27138__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27137__auto__ = function(state_27483){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27137__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27137__auto____1.call(this,state_27483);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27137__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27137__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27137__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27137__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27137__auto__;
})()
})();
var state__27233__auto__ = (function (){var statearr_27498 = f__27232__auto__.call(null);
(statearr_27498[(6)] = c__27231__auto___27593);

return statearr_27498;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27233__auto__);
}));


var c__27231__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27232__auto__ = (function (){var switch__27136__auto__ = (function (state_27536){
var state_val_27537 = (state_27536[(1)]);
if((state_val_27537 === (7))){
var inst_27532 = (state_27536[(2)]);
var state_27536__$1 = state_27536;
var statearr_27538_27602 = state_27536__$1;
(statearr_27538_27602[(2)] = inst_27532);

(statearr_27538_27602[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27537 === (20))){
var state_27536__$1 = state_27536;
var statearr_27539_27603 = state_27536__$1;
(statearr_27539_27603[(2)] = null);

(statearr_27539_27603[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27537 === (1))){
var state_27536__$1 = state_27536;
var statearr_27540_27604 = state_27536__$1;
(statearr_27540_27604[(2)] = null);

(statearr_27540_27604[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27537 === (4))){
var inst_27501 = (state_27536[(7)]);
var inst_27501__$1 = (state_27536[(2)]);
var inst_27502 = (inst_27501__$1 == null);
var state_27536__$1 = (function (){var statearr_27541 = state_27536;
(statearr_27541[(7)] = inst_27501__$1);

return statearr_27541;
})();
if(cljs.core.truth_(inst_27502)){
var statearr_27542_27605 = state_27536__$1;
(statearr_27542_27605[(1)] = (5));

} else {
var statearr_27543_27606 = state_27536__$1;
(statearr_27543_27606[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27537 === (15))){
var inst_27514 = (state_27536[(8)]);
var state_27536__$1 = state_27536;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27536__$1,(18),to,inst_27514);
} else {
if((state_val_27537 === (21))){
var inst_27527 = (state_27536[(2)]);
var state_27536__$1 = state_27536;
var statearr_27544_27607 = state_27536__$1;
(statearr_27544_27607[(2)] = inst_27527);

(statearr_27544_27607[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27537 === (13))){
var inst_27529 = (state_27536[(2)]);
var state_27536__$1 = (function (){var statearr_27545 = state_27536;
(statearr_27545[(9)] = inst_27529);

return statearr_27545;
})();
var statearr_27546_27608 = state_27536__$1;
(statearr_27546_27608[(2)] = null);

(statearr_27546_27608[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27537 === (6))){
var inst_27501 = (state_27536[(7)]);
var state_27536__$1 = state_27536;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27536__$1,(11),inst_27501);
} else {
if((state_val_27537 === (17))){
var inst_27522 = (state_27536[(2)]);
var state_27536__$1 = state_27536;
if(cljs.core.truth_(inst_27522)){
var statearr_27547_27609 = state_27536__$1;
(statearr_27547_27609[(1)] = (19));

} else {
var statearr_27548_27610 = state_27536__$1;
(statearr_27548_27610[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27537 === (3))){
var inst_27534 = (state_27536[(2)]);
var state_27536__$1 = state_27536;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27536__$1,inst_27534);
} else {
if((state_val_27537 === (12))){
var inst_27511 = (state_27536[(10)]);
var state_27536__$1 = state_27536;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27536__$1,(14),inst_27511);
} else {
if((state_val_27537 === (2))){
var state_27536__$1 = state_27536;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27536__$1,(4),results);
} else {
if((state_val_27537 === (19))){
var state_27536__$1 = state_27536;
var statearr_27549_27611 = state_27536__$1;
(statearr_27549_27611[(2)] = null);

(statearr_27549_27611[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27537 === (11))){
var inst_27511 = (state_27536[(2)]);
var state_27536__$1 = (function (){var statearr_27550 = state_27536;
(statearr_27550[(10)] = inst_27511);

return statearr_27550;
})();
var statearr_27551_27612 = state_27536__$1;
(statearr_27551_27612[(2)] = null);

(statearr_27551_27612[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27537 === (9))){
var state_27536__$1 = state_27536;
var statearr_27552_27613 = state_27536__$1;
(statearr_27552_27613[(2)] = null);

(statearr_27552_27613[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27537 === (5))){
var state_27536__$1 = state_27536;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27553_27614 = state_27536__$1;
(statearr_27553_27614[(1)] = (8));

} else {
var statearr_27554_27615 = state_27536__$1;
(statearr_27554_27615[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27537 === (14))){
var inst_27514 = (state_27536[(8)]);
var inst_27514__$1 = (state_27536[(2)]);
var inst_27515 = (inst_27514__$1 == null);
var inst_27516 = cljs.core.not.call(null,inst_27515);
var state_27536__$1 = (function (){var statearr_27555 = state_27536;
(statearr_27555[(8)] = inst_27514__$1);

return statearr_27555;
})();
if(inst_27516){
var statearr_27556_27616 = state_27536__$1;
(statearr_27556_27616[(1)] = (15));

} else {
var statearr_27557_27617 = state_27536__$1;
(statearr_27557_27617[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27537 === (16))){
var state_27536__$1 = state_27536;
var statearr_27558_27618 = state_27536__$1;
(statearr_27558_27618[(2)] = false);

(statearr_27558_27618[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27537 === (10))){
var inst_27508 = (state_27536[(2)]);
var state_27536__$1 = state_27536;
var statearr_27559_27619 = state_27536__$1;
(statearr_27559_27619[(2)] = inst_27508);

(statearr_27559_27619[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27537 === (18))){
var inst_27519 = (state_27536[(2)]);
var state_27536__$1 = state_27536;
var statearr_27560_27620 = state_27536__$1;
(statearr_27560_27620[(2)] = inst_27519);

(statearr_27560_27620[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27537 === (8))){
var inst_27505 = cljs.core.async.close_BANG_.call(null,to);
var state_27536__$1 = state_27536;
var statearr_27561_27621 = state_27536__$1;
(statearr_27561_27621[(2)] = inst_27505);

(statearr_27561_27621[(1)] = (10));


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
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27137__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27137__auto____0 = (function (){
var statearr_27562 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27562[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27137__auto__);

(statearr_27562[(1)] = (1));

return statearr_27562;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27137__auto____1 = (function (state_27536){
while(true){
var ret_value__27138__auto__ = (function (){try{while(true){
var result__27139__auto__ = switch__27136__auto__.call(null,state_27536);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27139__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27139__auto__;
}
break;
}
}catch (e27563){if((e27563 instanceof Object)){
var ex__27140__auto__ = e27563;
var statearr_27564_27622 = state_27536;
(statearr_27564_27622[(5)] = ex__27140__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27536);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27563;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27138__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27623 = state_27536;
state_27536 = G__27623;
continue;
} else {
return ret_value__27138__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27137__auto__ = function(state_27536){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27137__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27137__auto____1.call(this,state_27536);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27137__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27137__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27137__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27137__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27137__auto__;
})()
})();
var state__27233__auto__ = (function (){var statearr_27565 = f__27232__auto__.call(null);
(statearr_27565[(6)] = c__27231__auto__);

return statearr_27565;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27233__auto__);
}));

return c__27231__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__27625 = arguments.length;
switch (G__27625) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__27628 = arguments.length;
switch (G__27628) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__27631 = arguments.length;
switch (G__27631) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__27231__auto___27680 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27232__auto__ = (function (){var switch__27136__auto__ = (function (state_27657){
var state_val_27658 = (state_27657[(1)]);
if((state_val_27658 === (7))){
var inst_27653 = (state_27657[(2)]);
var state_27657__$1 = state_27657;
var statearr_27659_27681 = state_27657__$1;
(statearr_27659_27681[(2)] = inst_27653);

(statearr_27659_27681[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27658 === (1))){
var state_27657__$1 = state_27657;
var statearr_27660_27682 = state_27657__$1;
(statearr_27660_27682[(2)] = null);

(statearr_27660_27682[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27658 === (4))){
var inst_27634 = (state_27657[(7)]);
var inst_27634__$1 = (state_27657[(2)]);
var inst_27635 = (inst_27634__$1 == null);
var state_27657__$1 = (function (){var statearr_27661 = state_27657;
(statearr_27661[(7)] = inst_27634__$1);

return statearr_27661;
})();
if(cljs.core.truth_(inst_27635)){
var statearr_27662_27683 = state_27657__$1;
(statearr_27662_27683[(1)] = (5));

} else {
var statearr_27663_27684 = state_27657__$1;
(statearr_27663_27684[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27658 === (13))){
var state_27657__$1 = state_27657;
var statearr_27664_27685 = state_27657__$1;
(statearr_27664_27685[(2)] = null);

(statearr_27664_27685[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27658 === (6))){
var inst_27634 = (state_27657[(7)]);
var inst_27640 = p.call(null,inst_27634);
var state_27657__$1 = state_27657;
if(cljs.core.truth_(inst_27640)){
var statearr_27665_27686 = state_27657__$1;
(statearr_27665_27686[(1)] = (9));

} else {
var statearr_27666_27687 = state_27657__$1;
(statearr_27666_27687[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27658 === (3))){
var inst_27655 = (state_27657[(2)]);
var state_27657__$1 = state_27657;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27657__$1,inst_27655);
} else {
if((state_val_27658 === (12))){
var state_27657__$1 = state_27657;
var statearr_27667_27688 = state_27657__$1;
(statearr_27667_27688[(2)] = null);

(statearr_27667_27688[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27658 === (2))){
var state_27657__$1 = state_27657;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27657__$1,(4),ch);
} else {
if((state_val_27658 === (11))){
var inst_27634 = (state_27657[(7)]);
var inst_27644 = (state_27657[(2)]);
var state_27657__$1 = state_27657;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27657__$1,(8),inst_27644,inst_27634);
} else {
if((state_val_27658 === (9))){
var state_27657__$1 = state_27657;
var statearr_27668_27689 = state_27657__$1;
(statearr_27668_27689[(2)] = tc);

(statearr_27668_27689[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27658 === (5))){
var inst_27637 = cljs.core.async.close_BANG_.call(null,tc);
var inst_27638 = cljs.core.async.close_BANG_.call(null,fc);
var state_27657__$1 = (function (){var statearr_27669 = state_27657;
(statearr_27669[(8)] = inst_27637);

return statearr_27669;
})();
var statearr_27670_27690 = state_27657__$1;
(statearr_27670_27690[(2)] = inst_27638);

(statearr_27670_27690[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27658 === (14))){
var inst_27651 = (state_27657[(2)]);
var state_27657__$1 = state_27657;
var statearr_27671_27691 = state_27657__$1;
(statearr_27671_27691[(2)] = inst_27651);

(statearr_27671_27691[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27658 === (10))){
var state_27657__$1 = state_27657;
var statearr_27672_27692 = state_27657__$1;
(statearr_27672_27692[(2)] = fc);

(statearr_27672_27692[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27658 === (8))){
var inst_27646 = (state_27657[(2)]);
var state_27657__$1 = state_27657;
if(cljs.core.truth_(inst_27646)){
var statearr_27673_27693 = state_27657__$1;
(statearr_27673_27693[(1)] = (12));

} else {
var statearr_27674_27694 = state_27657__$1;
(statearr_27674_27694[(1)] = (13));

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
});
return (function() {
var cljs$core$async$state_machine__27137__auto__ = null;
var cljs$core$async$state_machine__27137__auto____0 = (function (){
var statearr_27675 = [null,null,null,null,null,null,null,null,null];
(statearr_27675[(0)] = cljs$core$async$state_machine__27137__auto__);

(statearr_27675[(1)] = (1));

return statearr_27675;
});
var cljs$core$async$state_machine__27137__auto____1 = (function (state_27657){
while(true){
var ret_value__27138__auto__ = (function (){try{while(true){
var result__27139__auto__ = switch__27136__auto__.call(null,state_27657);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27139__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27139__auto__;
}
break;
}
}catch (e27676){if((e27676 instanceof Object)){
var ex__27140__auto__ = e27676;
var statearr_27677_27695 = state_27657;
(statearr_27677_27695[(5)] = ex__27140__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27657);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27676;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27138__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27696 = state_27657;
state_27657 = G__27696;
continue;
} else {
return ret_value__27138__auto__;
}
break;
}
});
cljs$core$async$state_machine__27137__auto__ = function(state_27657){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27137__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27137__auto____1.call(this,state_27657);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27137__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27137__auto____0;
cljs$core$async$state_machine__27137__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27137__auto____1;
return cljs$core$async$state_machine__27137__auto__;
})()
})();
var state__27233__auto__ = (function (){var statearr_27678 = f__27232__auto__.call(null);
(statearr_27678[(6)] = c__27231__auto___27680);

return statearr_27678;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27233__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__27231__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27232__auto__ = (function (){var switch__27136__auto__ = (function (state_27717){
var state_val_27718 = (state_27717[(1)]);
if((state_val_27718 === (7))){
var inst_27713 = (state_27717[(2)]);
var state_27717__$1 = state_27717;
var statearr_27719_27737 = state_27717__$1;
(statearr_27719_27737[(2)] = inst_27713);

(statearr_27719_27737[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27718 === (1))){
var inst_27697 = init;
var state_27717__$1 = (function (){var statearr_27720 = state_27717;
(statearr_27720[(7)] = inst_27697);

return statearr_27720;
})();
var statearr_27721_27738 = state_27717__$1;
(statearr_27721_27738[(2)] = null);

(statearr_27721_27738[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27718 === (4))){
var inst_27700 = (state_27717[(8)]);
var inst_27700__$1 = (state_27717[(2)]);
var inst_27701 = (inst_27700__$1 == null);
var state_27717__$1 = (function (){var statearr_27722 = state_27717;
(statearr_27722[(8)] = inst_27700__$1);

return statearr_27722;
})();
if(cljs.core.truth_(inst_27701)){
var statearr_27723_27739 = state_27717__$1;
(statearr_27723_27739[(1)] = (5));

} else {
var statearr_27724_27740 = state_27717__$1;
(statearr_27724_27740[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27718 === (6))){
var inst_27704 = (state_27717[(9)]);
var inst_27700 = (state_27717[(8)]);
var inst_27697 = (state_27717[(7)]);
var inst_27704__$1 = f.call(null,inst_27697,inst_27700);
var inst_27705 = cljs.core.reduced_QMARK_.call(null,inst_27704__$1);
var state_27717__$1 = (function (){var statearr_27725 = state_27717;
(statearr_27725[(9)] = inst_27704__$1);

return statearr_27725;
})();
if(inst_27705){
var statearr_27726_27741 = state_27717__$1;
(statearr_27726_27741[(1)] = (8));

} else {
var statearr_27727_27742 = state_27717__$1;
(statearr_27727_27742[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27718 === (3))){
var inst_27715 = (state_27717[(2)]);
var state_27717__$1 = state_27717;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27717__$1,inst_27715);
} else {
if((state_val_27718 === (2))){
var state_27717__$1 = state_27717;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27717__$1,(4),ch);
} else {
if((state_val_27718 === (9))){
var inst_27704 = (state_27717[(9)]);
var inst_27697 = inst_27704;
var state_27717__$1 = (function (){var statearr_27728 = state_27717;
(statearr_27728[(7)] = inst_27697);

return statearr_27728;
})();
var statearr_27729_27743 = state_27717__$1;
(statearr_27729_27743[(2)] = null);

(statearr_27729_27743[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27718 === (5))){
var inst_27697 = (state_27717[(7)]);
var state_27717__$1 = state_27717;
var statearr_27730_27744 = state_27717__$1;
(statearr_27730_27744[(2)] = inst_27697);

(statearr_27730_27744[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27718 === (10))){
var inst_27711 = (state_27717[(2)]);
var state_27717__$1 = state_27717;
var statearr_27731_27745 = state_27717__$1;
(statearr_27731_27745[(2)] = inst_27711);

(statearr_27731_27745[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27718 === (8))){
var inst_27704 = (state_27717[(9)]);
var inst_27707 = cljs.core.deref.call(null,inst_27704);
var state_27717__$1 = state_27717;
var statearr_27732_27746 = state_27717__$1;
(statearr_27732_27746[(2)] = inst_27707);

(statearr_27732_27746[(1)] = (10));


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
});
return (function() {
var cljs$core$async$reduce_$_state_machine__27137__auto__ = null;
var cljs$core$async$reduce_$_state_machine__27137__auto____0 = (function (){
var statearr_27733 = [null,null,null,null,null,null,null,null,null,null];
(statearr_27733[(0)] = cljs$core$async$reduce_$_state_machine__27137__auto__);

(statearr_27733[(1)] = (1));

return statearr_27733;
});
var cljs$core$async$reduce_$_state_machine__27137__auto____1 = (function (state_27717){
while(true){
var ret_value__27138__auto__ = (function (){try{while(true){
var result__27139__auto__ = switch__27136__auto__.call(null,state_27717);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27139__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27139__auto__;
}
break;
}
}catch (e27734){if((e27734 instanceof Object)){
var ex__27140__auto__ = e27734;
var statearr_27735_27747 = state_27717;
(statearr_27735_27747[(5)] = ex__27140__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27717);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27734;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27138__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27748 = state_27717;
state_27717 = G__27748;
continue;
} else {
return ret_value__27138__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__27137__auto__ = function(state_27717){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__27137__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__27137__auto____1.call(this,state_27717);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__27137__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__27137__auto____0;
cljs$core$async$reduce_$_state_machine__27137__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__27137__auto____1;
return cljs$core$async$reduce_$_state_machine__27137__auto__;
})()
})();
var state__27233__auto__ = (function (){var statearr_27736 = f__27232__auto__.call(null);
(statearr_27736[(6)] = c__27231__auto__);

return statearr_27736;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27233__auto__);
}));

return c__27231__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__27231__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27232__auto__ = (function (){var switch__27136__auto__ = (function (state_27754){
var state_val_27755 = (state_27754[(1)]);
if((state_val_27755 === (1))){
var inst_27749 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_27754__$1 = state_27754;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27754__$1,(2),inst_27749);
} else {
if((state_val_27755 === (2))){
var inst_27751 = (state_27754[(2)]);
var inst_27752 = f__$1.call(null,inst_27751);
var state_27754__$1 = state_27754;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27754__$1,inst_27752);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__27137__auto__ = null;
var cljs$core$async$transduce_$_state_machine__27137__auto____0 = (function (){
var statearr_27756 = [null,null,null,null,null,null,null];
(statearr_27756[(0)] = cljs$core$async$transduce_$_state_machine__27137__auto__);

(statearr_27756[(1)] = (1));

return statearr_27756;
});
var cljs$core$async$transduce_$_state_machine__27137__auto____1 = (function (state_27754){
while(true){
var ret_value__27138__auto__ = (function (){try{while(true){
var result__27139__auto__ = switch__27136__auto__.call(null,state_27754);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27139__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27139__auto__;
}
break;
}
}catch (e27757){if((e27757 instanceof Object)){
var ex__27140__auto__ = e27757;
var statearr_27758_27760 = state_27754;
(statearr_27758_27760[(5)] = ex__27140__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27754);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27757;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27138__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27761 = state_27754;
state_27754 = G__27761;
continue;
} else {
return ret_value__27138__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__27137__auto__ = function(state_27754){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__27137__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__27137__auto____1.call(this,state_27754);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__27137__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__27137__auto____0;
cljs$core$async$transduce_$_state_machine__27137__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__27137__auto____1;
return cljs$core$async$transduce_$_state_machine__27137__auto__;
})()
})();
var state__27233__auto__ = (function (){var statearr_27759 = f__27232__auto__.call(null);
(statearr_27759[(6)] = c__27231__auto__);

return statearr_27759;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27233__auto__);
}));

return c__27231__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__27763 = arguments.length;
switch (G__27763) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__27231__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27232__auto__ = (function (){var switch__27136__auto__ = (function (state_27788){
var state_val_27789 = (state_27788[(1)]);
if((state_val_27789 === (7))){
var inst_27770 = (state_27788[(2)]);
var state_27788__$1 = state_27788;
var statearr_27790_27811 = state_27788__$1;
(statearr_27790_27811[(2)] = inst_27770);

(statearr_27790_27811[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27789 === (1))){
var inst_27764 = cljs.core.seq.call(null,coll);
var inst_27765 = inst_27764;
var state_27788__$1 = (function (){var statearr_27791 = state_27788;
(statearr_27791[(7)] = inst_27765);

return statearr_27791;
})();
var statearr_27792_27812 = state_27788__$1;
(statearr_27792_27812[(2)] = null);

(statearr_27792_27812[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27789 === (4))){
var inst_27765 = (state_27788[(7)]);
var inst_27768 = cljs.core.first.call(null,inst_27765);
var state_27788__$1 = state_27788;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27788__$1,(7),ch,inst_27768);
} else {
if((state_val_27789 === (13))){
var inst_27782 = (state_27788[(2)]);
var state_27788__$1 = state_27788;
var statearr_27793_27813 = state_27788__$1;
(statearr_27793_27813[(2)] = inst_27782);

(statearr_27793_27813[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27789 === (6))){
var inst_27773 = (state_27788[(2)]);
var state_27788__$1 = state_27788;
if(cljs.core.truth_(inst_27773)){
var statearr_27794_27814 = state_27788__$1;
(statearr_27794_27814[(1)] = (8));

} else {
var statearr_27795_27815 = state_27788__$1;
(statearr_27795_27815[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27789 === (3))){
var inst_27786 = (state_27788[(2)]);
var state_27788__$1 = state_27788;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27788__$1,inst_27786);
} else {
if((state_val_27789 === (12))){
var state_27788__$1 = state_27788;
var statearr_27796_27816 = state_27788__$1;
(statearr_27796_27816[(2)] = null);

(statearr_27796_27816[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27789 === (2))){
var inst_27765 = (state_27788[(7)]);
var state_27788__$1 = state_27788;
if(cljs.core.truth_(inst_27765)){
var statearr_27797_27817 = state_27788__$1;
(statearr_27797_27817[(1)] = (4));

} else {
var statearr_27798_27818 = state_27788__$1;
(statearr_27798_27818[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27789 === (11))){
var inst_27779 = cljs.core.async.close_BANG_.call(null,ch);
var state_27788__$1 = state_27788;
var statearr_27799_27819 = state_27788__$1;
(statearr_27799_27819[(2)] = inst_27779);

(statearr_27799_27819[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27789 === (9))){
var state_27788__$1 = state_27788;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27800_27820 = state_27788__$1;
(statearr_27800_27820[(1)] = (11));

} else {
var statearr_27801_27821 = state_27788__$1;
(statearr_27801_27821[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27789 === (5))){
var inst_27765 = (state_27788[(7)]);
var state_27788__$1 = state_27788;
var statearr_27802_27822 = state_27788__$1;
(statearr_27802_27822[(2)] = inst_27765);

(statearr_27802_27822[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27789 === (10))){
var inst_27784 = (state_27788[(2)]);
var state_27788__$1 = state_27788;
var statearr_27803_27823 = state_27788__$1;
(statearr_27803_27823[(2)] = inst_27784);

(statearr_27803_27823[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27789 === (8))){
var inst_27765 = (state_27788[(7)]);
var inst_27775 = cljs.core.next.call(null,inst_27765);
var inst_27765__$1 = inst_27775;
var state_27788__$1 = (function (){var statearr_27804 = state_27788;
(statearr_27804[(7)] = inst_27765__$1);

return statearr_27804;
})();
var statearr_27805_27824 = state_27788__$1;
(statearr_27805_27824[(2)] = null);

(statearr_27805_27824[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__27137__auto__ = null;
var cljs$core$async$state_machine__27137__auto____0 = (function (){
var statearr_27806 = [null,null,null,null,null,null,null,null];
(statearr_27806[(0)] = cljs$core$async$state_machine__27137__auto__);

(statearr_27806[(1)] = (1));

return statearr_27806;
});
var cljs$core$async$state_machine__27137__auto____1 = (function (state_27788){
while(true){
var ret_value__27138__auto__ = (function (){try{while(true){
var result__27139__auto__ = switch__27136__auto__.call(null,state_27788);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27139__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27139__auto__;
}
break;
}
}catch (e27807){if((e27807 instanceof Object)){
var ex__27140__auto__ = e27807;
var statearr_27808_27825 = state_27788;
(statearr_27808_27825[(5)] = ex__27140__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27788);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27807;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27138__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27826 = state_27788;
state_27788 = G__27826;
continue;
} else {
return ret_value__27138__auto__;
}
break;
}
});
cljs$core$async$state_machine__27137__auto__ = function(state_27788){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27137__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27137__auto____1.call(this,state_27788);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27137__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27137__auto____0;
cljs$core$async$state_machine__27137__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27137__auto____1;
return cljs$core$async$state_machine__27137__auto__;
})()
})();
var state__27233__auto__ = (function (){var statearr_27809 = f__27232__auto__.call(null);
(statearr_27809[(6)] = c__27231__auto__);

return statearr_27809;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27233__auto__);
}));

return c__27231__auto__;
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_27827 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,_);
} else {
var m__4426__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_27827.call(null,_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_27828 = (function (m,ch,close_QMARK_){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4426__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_27828.call(null,m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_27829 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m,ch);
} else {
var m__4426__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_27829.call(null,m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_27830 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m);
} else {
var m__4426__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_27830.call(null,m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27831 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27831 = (function (ch,cs,meta27832){
this.ch = ch;
this.cs = cs;
this.meta27832 = meta27832;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async27831.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27833,meta27832__$1){
var self__ = this;
var _27833__$1 = this;
return (new cljs.core.async.t_cljs$core$async27831(self__.ch,self__.cs,meta27832__$1));
}));

(cljs.core.async.t_cljs$core$async27831.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27833){
var self__ = this;
var _27833__$1 = this;
return self__.meta27832;
}));

(cljs.core.async.t_cljs$core$async27831.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27831.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async27831.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27831.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async27831.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async27831.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async27831.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta27832","meta27832",622460215,null)], null);
}));

(cljs.core.async.t_cljs$core$async27831.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async27831.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27831");

(cljs.core.async.t_cljs$core$async27831.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async27831");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27831.
 */
cljs.core.async.__GT_t_cljs$core$async27831 = (function cljs$core$async$mult_$___GT_t_cljs$core$async27831(ch__$1,cs__$1,meta27832){
return (new cljs.core.async.t_cljs$core$async27831(ch__$1,cs__$1,meta27832));
});

}

return (new cljs.core.async.t_cljs$core$async27831(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});
var c__27231__auto___28053 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27232__auto__ = (function (){var switch__27136__auto__ = (function (state_27968){
var state_val_27969 = (state_27968[(1)]);
if((state_val_27969 === (7))){
var inst_27964 = (state_27968[(2)]);
var state_27968__$1 = state_27968;
var statearr_27970_28054 = state_27968__$1;
(statearr_27970_28054[(2)] = inst_27964);

(statearr_27970_28054[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27969 === (20))){
var inst_27867 = (state_27968[(7)]);
var inst_27879 = cljs.core.first.call(null,inst_27867);
var inst_27880 = cljs.core.nth.call(null,inst_27879,(0),null);
var inst_27881 = cljs.core.nth.call(null,inst_27879,(1),null);
var state_27968__$1 = (function (){var statearr_27971 = state_27968;
(statearr_27971[(8)] = inst_27880);

return statearr_27971;
})();
if(cljs.core.truth_(inst_27881)){
var statearr_27972_28055 = state_27968__$1;
(statearr_27972_28055[(1)] = (22));

} else {
var statearr_27973_28056 = state_27968__$1;
(statearr_27973_28056[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27969 === (27))){
var inst_27836 = (state_27968[(9)]);
var inst_27911 = (state_27968[(10)]);
var inst_27909 = (state_27968[(11)]);
var inst_27916 = (state_27968[(12)]);
var inst_27916__$1 = cljs.core._nth.call(null,inst_27909,inst_27911);
var inst_27917 = cljs.core.async.put_BANG_.call(null,inst_27916__$1,inst_27836,done);
var state_27968__$1 = (function (){var statearr_27974 = state_27968;
(statearr_27974[(12)] = inst_27916__$1);

return statearr_27974;
})();
if(cljs.core.truth_(inst_27917)){
var statearr_27975_28057 = state_27968__$1;
(statearr_27975_28057[(1)] = (30));

} else {
var statearr_27976_28058 = state_27968__$1;
(statearr_27976_28058[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27969 === (1))){
var state_27968__$1 = state_27968;
var statearr_27977_28059 = state_27968__$1;
(statearr_27977_28059[(2)] = null);

(statearr_27977_28059[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27969 === (24))){
var inst_27867 = (state_27968[(7)]);
var inst_27886 = (state_27968[(2)]);
var inst_27887 = cljs.core.next.call(null,inst_27867);
var inst_27845 = inst_27887;
var inst_27846 = null;
var inst_27847 = (0);
var inst_27848 = (0);
var state_27968__$1 = (function (){var statearr_27978 = state_27968;
(statearr_27978[(13)] = inst_27847);

(statearr_27978[(14)] = inst_27886);

(statearr_27978[(15)] = inst_27846);

(statearr_27978[(16)] = inst_27848);

(statearr_27978[(17)] = inst_27845);

return statearr_27978;
})();
var statearr_27979_28060 = state_27968__$1;
(statearr_27979_28060[(2)] = null);

(statearr_27979_28060[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27969 === (39))){
var state_27968__$1 = state_27968;
var statearr_27983_28061 = state_27968__$1;
(statearr_27983_28061[(2)] = null);

(statearr_27983_28061[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27969 === (4))){
var inst_27836 = (state_27968[(9)]);
var inst_27836__$1 = (state_27968[(2)]);
var inst_27837 = (inst_27836__$1 == null);
var state_27968__$1 = (function (){var statearr_27984 = state_27968;
(statearr_27984[(9)] = inst_27836__$1);

return statearr_27984;
})();
if(cljs.core.truth_(inst_27837)){
var statearr_27985_28062 = state_27968__$1;
(statearr_27985_28062[(1)] = (5));

} else {
var statearr_27986_28063 = state_27968__$1;
(statearr_27986_28063[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27969 === (15))){
var inst_27847 = (state_27968[(13)]);
var inst_27846 = (state_27968[(15)]);
var inst_27848 = (state_27968[(16)]);
var inst_27845 = (state_27968[(17)]);
var inst_27863 = (state_27968[(2)]);
var inst_27864 = (inst_27848 + (1));
var tmp27980 = inst_27847;
var tmp27981 = inst_27846;
var tmp27982 = inst_27845;
var inst_27845__$1 = tmp27982;
var inst_27846__$1 = tmp27981;
var inst_27847__$1 = tmp27980;
var inst_27848__$1 = inst_27864;
var state_27968__$1 = (function (){var statearr_27987 = state_27968;
(statearr_27987[(13)] = inst_27847__$1);

(statearr_27987[(15)] = inst_27846__$1);

(statearr_27987[(18)] = inst_27863);

(statearr_27987[(16)] = inst_27848__$1);

(statearr_27987[(17)] = inst_27845__$1);

return statearr_27987;
})();
var statearr_27988_28064 = state_27968__$1;
(statearr_27988_28064[(2)] = null);

(statearr_27988_28064[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27969 === (21))){
var inst_27890 = (state_27968[(2)]);
var state_27968__$1 = state_27968;
var statearr_27992_28065 = state_27968__$1;
(statearr_27992_28065[(2)] = inst_27890);

(statearr_27992_28065[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27969 === (31))){
var inst_27916 = (state_27968[(12)]);
var inst_27920 = done.call(null,null);
var inst_27921 = cljs.core.async.untap_STAR_.call(null,m,inst_27916);
var state_27968__$1 = (function (){var statearr_27993 = state_27968;
(statearr_27993[(19)] = inst_27920);

return statearr_27993;
})();
var statearr_27994_28066 = state_27968__$1;
(statearr_27994_28066[(2)] = inst_27921);

(statearr_27994_28066[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27969 === (32))){
var inst_27910 = (state_27968[(20)]);
var inst_27911 = (state_27968[(10)]);
var inst_27908 = (state_27968[(21)]);
var inst_27909 = (state_27968[(11)]);
var inst_27923 = (state_27968[(2)]);
var inst_27924 = (inst_27911 + (1));
var tmp27989 = inst_27910;
var tmp27990 = inst_27908;
var tmp27991 = inst_27909;
var inst_27908__$1 = tmp27990;
var inst_27909__$1 = tmp27991;
var inst_27910__$1 = tmp27989;
var inst_27911__$1 = inst_27924;
var state_27968__$1 = (function (){var statearr_27995 = state_27968;
(statearr_27995[(20)] = inst_27910__$1);

(statearr_27995[(10)] = inst_27911__$1);

(statearr_27995[(21)] = inst_27908__$1);

(statearr_27995[(11)] = inst_27909__$1);

(statearr_27995[(22)] = inst_27923);

return statearr_27995;
})();
var statearr_27996_28067 = state_27968__$1;
(statearr_27996_28067[(2)] = null);

(statearr_27996_28067[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27969 === (40))){
var inst_27936 = (state_27968[(23)]);
var inst_27940 = done.call(null,null);
var inst_27941 = cljs.core.async.untap_STAR_.call(null,m,inst_27936);
var state_27968__$1 = (function (){var statearr_27997 = state_27968;
(statearr_27997[(24)] = inst_27940);

return statearr_27997;
})();
var statearr_27998_28068 = state_27968__$1;
(statearr_27998_28068[(2)] = inst_27941);

(statearr_27998_28068[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27969 === (33))){
var inst_27927 = (state_27968[(25)]);
var inst_27929 = cljs.core.chunked_seq_QMARK_.call(null,inst_27927);
var state_27968__$1 = state_27968;
if(inst_27929){
var statearr_27999_28069 = state_27968__$1;
(statearr_27999_28069[(1)] = (36));

} else {
var statearr_28000_28070 = state_27968__$1;
(statearr_28000_28070[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27969 === (13))){
var inst_27857 = (state_27968[(26)]);
var inst_27860 = cljs.core.async.close_BANG_.call(null,inst_27857);
var state_27968__$1 = state_27968;
var statearr_28001_28071 = state_27968__$1;
(statearr_28001_28071[(2)] = inst_27860);

(statearr_28001_28071[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27969 === (22))){
var inst_27880 = (state_27968[(8)]);
var inst_27883 = cljs.core.async.close_BANG_.call(null,inst_27880);
var state_27968__$1 = state_27968;
var statearr_28002_28072 = state_27968__$1;
(statearr_28002_28072[(2)] = inst_27883);

(statearr_28002_28072[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27969 === (36))){
var inst_27927 = (state_27968[(25)]);
var inst_27931 = cljs.core.chunk_first.call(null,inst_27927);
var inst_27932 = cljs.core.chunk_rest.call(null,inst_27927);
var inst_27933 = cljs.core.count.call(null,inst_27931);
var inst_27908 = inst_27932;
var inst_27909 = inst_27931;
var inst_27910 = inst_27933;
var inst_27911 = (0);
var state_27968__$1 = (function (){var statearr_28003 = state_27968;
(statearr_28003[(20)] = inst_27910);

(statearr_28003[(10)] = inst_27911);

(statearr_28003[(21)] = inst_27908);

(statearr_28003[(11)] = inst_27909);

return statearr_28003;
})();
var statearr_28004_28073 = state_27968__$1;
(statearr_28004_28073[(2)] = null);

(statearr_28004_28073[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27969 === (41))){
var inst_27927 = (state_27968[(25)]);
var inst_27943 = (state_27968[(2)]);
var inst_27944 = cljs.core.next.call(null,inst_27927);
var inst_27908 = inst_27944;
var inst_27909 = null;
var inst_27910 = (0);
var inst_27911 = (0);
var state_27968__$1 = (function (){var statearr_28005 = state_27968;
(statearr_28005[(27)] = inst_27943);

(statearr_28005[(20)] = inst_27910);

(statearr_28005[(10)] = inst_27911);

(statearr_28005[(21)] = inst_27908);

(statearr_28005[(11)] = inst_27909);

return statearr_28005;
})();
var statearr_28006_28074 = state_27968__$1;
(statearr_28006_28074[(2)] = null);

(statearr_28006_28074[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27969 === (43))){
var state_27968__$1 = state_27968;
var statearr_28007_28075 = state_27968__$1;
(statearr_28007_28075[(2)] = null);

(statearr_28007_28075[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27969 === (29))){
var inst_27952 = (state_27968[(2)]);
var state_27968__$1 = state_27968;
var statearr_28008_28076 = state_27968__$1;
(statearr_28008_28076[(2)] = inst_27952);

(statearr_28008_28076[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27969 === (44))){
var inst_27961 = (state_27968[(2)]);
var state_27968__$1 = (function (){var statearr_28009 = state_27968;
(statearr_28009[(28)] = inst_27961);

return statearr_28009;
})();
var statearr_28010_28077 = state_27968__$1;
(statearr_28010_28077[(2)] = null);

(statearr_28010_28077[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27969 === (6))){
var inst_27900 = (state_27968[(29)]);
var inst_27899 = cljs.core.deref.call(null,cs);
var inst_27900__$1 = cljs.core.keys.call(null,inst_27899);
var inst_27901 = cljs.core.count.call(null,inst_27900__$1);
var inst_27902 = cljs.core.reset_BANG_.call(null,dctr,inst_27901);
var inst_27907 = cljs.core.seq.call(null,inst_27900__$1);
var inst_27908 = inst_27907;
var inst_27909 = null;
var inst_27910 = (0);
var inst_27911 = (0);
var state_27968__$1 = (function (){var statearr_28011 = state_27968;
(statearr_28011[(20)] = inst_27910);

(statearr_28011[(10)] = inst_27911);

(statearr_28011[(21)] = inst_27908);

(statearr_28011[(11)] = inst_27909);

(statearr_28011[(29)] = inst_27900__$1);

(statearr_28011[(30)] = inst_27902);

return statearr_28011;
})();
var statearr_28012_28078 = state_27968__$1;
(statearr_28012_28078[(2)] = null);

(statearr_28012_28078[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27969 === (28))){
var inst_27908 = (state_27968[(21)]);
var inst_27927 = (state_27968[(25)]);
var inst_27927__$1 = cljs.core.seq.call(null,inst_27908);
var state_27968__$1 = (function (){var statearr_28013 = state_27968;
(statearr_28013[(25)] = inst_27927__$1);

return statearr_28013;
})();
if(inst_27927__$1){
var statearr_28014_28079 = state_27968__$1;
(statearr_28014_28079[(1)] = (33));

} else {
var statearr_28015_28080 = state_27968__$1;
(statearr_28015_28080[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27969 === (25))){
var inst_27910 = (state_27968[(20)]);
var inst_27911 = (state_27968[(10)]);
var inst_27913 = (inst_27911 < inst_27910);
var inst_27914 = inst_27913;
var state_27968__$1 = state_27968;
if(cljs.core.truth_(inst_27914)){
var statearr_28016_28081 = state_27968__$1;
(statearr_28016_28081[(1)] = (27));

} else {
var statearr_28017_28082 = state_27968__$1;
(statearr_28017_28082[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27969 === (34))){
var state_27968__$1 = state_27968;
var statearr_28018_28083 = state_27968__$1;
(statearr_28018_28083[(2)] = null);

(statearr_28018_28083[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27969 === (17))){
var state_27968__$1 = state_27968;
var statearr_28019_28084 = state_27968__$1;
(statearr_28019_28084[(2)] = null);

(statearr_28019_28084[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27969 === (3))){
var inst_27966 = (state_27968[(2)]);
var state_27968__$1 = state_27968;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27968__$1,inst_27966);
} else {
if((state_val_27969 === (12))){
var inst_27895 = (state_27968[(2)]);
var state_27968__$1 = state_27968;
var statearr_28020_28085 = state_27968__$1;
(statearr_28020_28085[(2)] = inst_27895);

(statearr_28020_28085[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27969 === (2))){
var state_27968__$1 = state_27968;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27968__$1,(4),ch);
} else {
if((state_val_27969 === (23))){
var state_27968__$1 = state_27968;
var statearr_28021_28086 = state_27968__$1;
(statearr_28021_28086[(2)] = null);

(statearr_28021_28086[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27969 === (35))){
var inst_27950 = (state_27968[(2)]);
var state_27968__$1 = state_27968;
var statearr_28022_28087 = state_27968__$1;
(statearr_28022_28087[(2)] = inst_27950);

(statearr_28022_28087[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27969 === (19))){
var inst_27867 = (state_27968[(7)]);
var inst_27871 = cljs.core.chunk_first.call(null,inst_27867);
var inst_27872 = cljs.core.chunk_rest.call(null,inst_27867);
var inst_27873 = cljs.core.count.call(null,inst_27871);
var inst_27845 = inst_27872;
var inst_27846 = inst_27871;
var inst_27847 = inst_27873;
var inst_27848 = (0);
var state_27968__$1 = (function (){var statearr_28023 = state_27968;
(statearr_28023[(13)] = inst_27847);

(statearr_28023[(15)] = inst_27846);

(statearr_28023[(16)] = inst_27848);

(statearr_28023[(17)] = inst_27845);

return statearr_28023;
})();
var statearr_28024_28088 = state_27968__$1;
(statearr_28024_28088[(2)] = null);

(statearr_28024_28088[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27969 === (11))){
var inst_27867 = (state_27968[(7)]);
var inst_27845 = (state_27968[(17)]);
var inst_27867__$1 = cljs.core.seq.call(null,inst_27845);
var state_27968__$1 = (function (){var statearr_28025 = state_27968;
(statearr_28025[(7)] = inst_27867__$1);

return statearr_28025;
})();
if(inst_27867__$1){
var statearr_28026_28089 = state_27968__$1;
(statearr_28026_28089[(1)] = (16));

} else {
var statearr_28027_28090 = state_27968__$1;
(statearr_28027_28090[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27969 === (9))){
var inst_27897 = (state_27968[(2)]);
var state_27968__$1 = state_27968;
var statearr_28028_28091 = state_27968__$1;
(statearr_28028_28091[(2)] = inst_27897);

(statearr_28028_28091[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27969 === (5))){
var inst_27843 = cljs.core.deref.call(null,cs);
var inst_27844 = cljs.core.seq.call(null,inst_27843);
var inst_27845 = inst_27844;
var inst_27846 = null;
var inst_27847 = (0);
var inst_27848 = (0);
var state_27968__$1 = (function (){var statearr_28029 = state_27968;
(statearr_28029[(13)] = inst_27847);

(statearr_28029[(15)] = inst_27846);

(statearr_28029[(16)] = inst_27848);

(statearr_28029[(17)] = inst_27845);

return statearr_28029;
})();
var statearr_28030_28092 = state_27968__$1;
(statearr_28030_28092[(2)] = null);

(statearr_28030_28092[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27969 === (14))){
var state_27968__$1 = state_27968;
var statearr_28031_28093 = state_27968__$1;
(statearr_28031_28093[(2)] = null);

(statearr_28031_28093[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27969 === (45))){
var inst_27958 = (state_27968[(2)]);
var state_27968__$1 = state_27968;
var statearr_28032_28094 = state_27968__$1;
(statearr_28032_28094[(2)] = inst_27958);

(statearr_28032_28094[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27969 === (26))){
var inst_27900 = (state_27968[(29)]);
var inst_27954 = (state_27968[(2)]);
var inst_27955 = cljs.core.seq.call(null,inst_27900);
var state_27968__$1 = (function (){var statearr_28033 = state_27968;
(statearr_28033[(31)] = inst_27954);

return statearr_28033;
})();
if(inst_27955){
var statearr_28034_28095 = state_27968__$1;
(statearr_28034_28095[(1)] = (42));

} else {
var statearr_28035_28096 = state_27968__$1;
(statearr_28035_28096[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27969 === (16))){
var inst_27867 = (state_27968[(7)]);
var inst_27869 = cljs.core.chunked_seq_QMARK_.call(null,inst_27867);
var state_27968__$1 = state_27968;
if(inst_27869){
var statearr_28036_28097 = state_27968__$1;
(statearr_28036_28097[(1)] = (19));

} else {
var statearr_28037_28098 = state_27968__$1;
(statearr_28037_28098[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27969 === (38))){
var inst_27947 = (state_27968[(2)]);
var state_27968__$1 = state_27968;
var statearr_28038_28099 = state_27968__$1;
(statearr_28038_28099[(2)] = inst_27947);

(statearr_28038_28099[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27969 === (30))){
var state_27968__$1 = state_27968;
var statearr_28039_28100 = state_27968__$1;
(statearr_28039_28100[(2)] = null);

(statearr_28039_28100[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27969 === (10))){
var inst_27846 = (state_27968[(15)]);
var inst_27848 = (state_27968[(16)]);
var inst_27856 = cljs.core._nth.call(null,inst_27846,inst_27848);
var inst_27857 = cljs.core.nth.call(null,inst_27856,(0),null);
var inst_27858 = cljs.core.nth.call(null,inst_27856,(1),null);
var state_27968__$1 = (function (){var statearr_28040 = state_27968;
(statearr_28040[(26)] = inst_27857);

return statearr_28040;
})();
if(cljs.core.truth_(inst_27858)){
var statearr_28041_28101 = state_27968__$1;
(statearr_28041_28101[(1)] = (13));

} else {
var statearr_28042_28102 = state_27968__$1;
(statearr_28042_28102[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27969 === (18))){
var inst_27893 = (state_27968[(2)]);
var state_27968__$1 = state_27968;
var statearr_28043_28103 = state_27968__$1;
(statearr_28043_28103[(2)] = inst_27893);

(statearr_28043_28103[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27969 === (42))){
var state_27968__$1 = state_27968;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27968__$1,(45),dchan);
} else {
if((state_val_27969 === (37))){
var inst_27836 = (state_27968[(9)]);
var inst_27927 = (state_27968[(25)]);
var inst_27936 = (state_27968[(23)]);
var inst_27936__$1 = cljs.core.first.call(null,inst_27927);
var inst_27937 = cljs.core.async.put_BANG_.call(null,inst_27936__$1,inst_27836,done);
var state_27968__$1 = (function (){var statearr_28044 = state_27968;
(statearr_28044[(23)] = inst_27936__$1);

return statearr_28044;
})();
if(cljs.core.truth_(inst_27937)){
var statearr_28045_28104 = state_27968__$1;
(statearr_28045_28104[(1)] = (39));

} else {
var statearr_28046_28105 = state_27968__$1;
(statearr_28046_28105[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27969 === (8))){
var inst_27847 = (state_27968[(13)]);
var inst_27848 = (state_27968[(16)]);
var inst_27850 = (inst_27848 < inst_27847);
var inst_27851 = inst_27850;
var state_27968__$1 = state_27968;
if(cljs.core.truth_(inst_27851)){
var statearr_28047_28106 = state_27968__$1;
(statearr_28047_28106[(1)] = (10));

} else {
var statearr_28048_28107 = state_27968__$1;
(statearr_28048_28107[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__27137__auto__ = null;
var cljs$core$async$mult_$_state_machine__27137__auto____0 = (function (){
var statearr_28049 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28049[(0)] = cljs$core$async$mult_$_state_machine__27137__auto__);

(statearr_28049[(1)] = (1));

return statearr_28049;
});
var cljs$core$async$mult_$_state_machine__27137__auto____1 = (function (state_27968){
while(true){
var ret_value__27138__auto__ = (function (){try{while(true){
var result__27139__auto__ = switch__27136__auto__.call(null,state_27968);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27139__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27139__auto__;
}
break;
}
}catch (e28050){if((e28050 instanceof Object)){
var ex__27140__auto__ = e28050;
var statearr_28051_28108 = state_27968;
(statearr_28051_28108[(5)] = ex__27140__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27968);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28050;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27138__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28109 = state_27968;
state_27968 = G__28109;
continue;
} else {
return ret_value__27138__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__27137__auto__ = function(state_27968){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__27137__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__27137__auto____1.call(this,state_27968);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__27137__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__27137__auto____0;
cljs$core$async$mult_$_state_machine__27137__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__27137__auto____1;
return cljs$core$async$mult_$_state_machine__27137__auto__;
})()
})();
var state__27233__auto__ = (function (){var statearr_28052 = f__27232__auto__.call(null);
(statearr_28052[(6)] = c__27231__auto___28053);

return statearr_28052;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27233__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__28111 = arguments.length;
switch (G__28111) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_28113 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m,ch);
} else {
var m__4426__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_28113.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_28114 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m,ch);
} else {
var m__4426__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_28114.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_28115 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m);
} else {
var m__4426__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_28115.call(null,m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_28116 = (function (m,state_map){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m,state_map);
} else {
var m__4426__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_28116.call(null,m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_28117 = (function (m,mode){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m,mode);
} else {
var m__4426__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_28117.call(null,m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___28128 = arguments.length;
var i__4737__auto___28129 = (0);
while(true){
if((i__4737__auto___28129 < len__4736__auto___28128)){
args__4742__auto__.push((arguments[i__4737__auto___28129]));

var G__28130 = (i__4737__auto___28129 + (1));
i__4737__auto___28129 = G__28130;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__28122){
var map__28123 = p__28122;
var map__28123__$1 = (((((!((map__28123 == null))))?(((((map__28123.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28123.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28123):map__28123);
var opts = map__28123__$1;
var statearr_28125_28131 = state;
(statearr_28125_28131[(1)] = cont_block);


var temp__5720__auto__ = cljs.core.async.do_alts.call(null,(function (val){
var statearr_28126_28132 = state;
(statearr_28126_28132[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
}),ports,opts);
if(cljs.core.truth_(temp__5720__auto__)){
var cb = temp__5720__auto__;
var statearr_28127_28133 = state;
(statearr_28127_28133[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq28118){
var G__28119 = cljs.core.first.call(null,seq28118);
var seq28118__$1 = cljs.core.next.call(null,seq28118);
var G__28120 = cljs.core.first.call(null,seq28118__$1);
var seq28118__$2 = cljs.core.next.call(null,seq28118__$1);
var G__28121 = cljs.core.first.call(null,seq28118__$2);
var seq28118__$3 = cljs.core.next.call(null,seq28118__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28119,G__28120,G__28121,seq28118__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv.call(null,(function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_.call(null,solos))))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28134 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28134 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta28135){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta28135 = meta28135;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async28134.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28136,meta28135__$1){
var self__ = this;
var _28136__$1 = this;
return (new cljs.core.async.t_cljs$core$async28134(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta28135__$1));
}));

(cljs.core.async.t_cljs$core$async28134.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28136){
var self__ = this;
var _28136__$1 = this;
return self__.meta28135;
}));

(cljs.core.async.t_cljs$core$async28134.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28134.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async28134.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28134.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async28134.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async28134.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async28134.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async28134.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async28134.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta28135","meta28135",1577025907,null)], null);
}));

(cljs.core.async.t_cljs$core$async28134.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async28134.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28134");

(cljs.core.async.t_cljs$core$async28134.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async28134");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28134.
 */
cljs.core.async.__GT_t_cljs$core$async28134 = (function cljs$core$async$mix_$___GT_t_cljs$core$async28134(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta28135){
return (new cljs.core.async.t_cljs$core$async28134(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta28135));
});

}

return (new cljs.core.async.t_cljs$core$async28134(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__27231__auto___28298 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27232__auto__ = (function (){var switch__27136__auto__ = (function (state_28238){
var state_val_28239 = (state_28238[(1)]);
if((state_val_28239 === (7))){
var inst_28153 = (state_28238[(2)]);
var state_28238__$1 = state_28238;
var statearr_28240_28299 = state_28238__$1;
(statearr_28240_28299[(2)] = inst_28153);

(statearr_28240_28299[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28239 === (20))){
var inst_28165 = (state_28238[(7)]);
var state_28238__$1 = state_28238;
var statearr_28241_28300 = state_28238__$1;
(statearr_28241_28300[(2)] = inst_28165);

(statearr_28241_28300[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28239 === (27))){
var state_28238__$1 = state_28238;
var statearr_28242_28301 = state_28238__$1;
(statearr_28242_28301[(2)] = null);

(statearr_28242_28301[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28239 === (1))){
var inst_28140 = (state_28238[(8)]);
var inst_28140__$1 = calc_state.call(null);
var inst_28142 = (inst_28140__$1 == null);
var inst_28143 = cljs.core.not.call(null,inst_28142);
var state_28238__$1 = (function (){var statearr_28243 = state_28238;
(statearr_28243[(8)] = inst_28140__$1);

return statearr_28243;
})();
if(inst_28143){
var statearr_28244_28302 = state_28238__$1;
(statearr_28244_28302[(1)] = (2));

} else {
var statearr_28245_28303 = state_28238__$1;
(statearr_28245_28303[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28239 === (24))){
var inst_28212 = (state_28238[(9)]);
var inst_28189 = (state_28238[(10)]);
var inst_28198 = (state_28238[(11)]);
var inst_28212__$1 = inst_28189.call(null,inst_28198);
var state_28238__$1 = (function (){var statearr_28246 = state_28238;
(statearr_28246[(9)] = inst_28212__$1);

return statearr_28246;
})();
if(cljs.core.truth_(inst_28212__$1)){
var statearr_28247_28304 = state_28238__$1;
(statearr_28247_28304[(1)] = (29));

} else {
var statearr_28248_28305 = state_28238__$1;
(statearr_28248_28305[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28239 === (4))){
var inst_28156 = (state_28238[(2)]);
var state_28238__$1 = state_28238;
if(cljs.core.truth_(inst_28156)){
var statearr_28249_28306 = state_28238__$1;
(statearr_28249_28306[(1)] = (8));

} else {
var statearr_28250_28307 = state_28238__$1;
(statearr_28250_28307[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28239 === (15))){
var inst_28183 = (state_28238[(2)]);
var state_28238__$1 = state_28238;
if(cljs.core.truth_(inst_28183)){
var statearr_28251_28308 = state_28238__$1;
(statearr_28251_28308[(1)] = (19));

} else {
var statearr_28252_28309 = state_28238__$1;
(statearr_28252_28309[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28239 === (21))){
var inst_28188 = (state_28238[(12)]);
var inst_28188__$1 = (state_28238[(2)]);
var inst_28189 = cljs.core.get.call(null,inst_28188__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_28190 = cljs.core.get.call(null,inst_28188__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_28191 = cljs.core.get.call(null,inst_28188__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_28238__$1 = (function (){var statearr_28253 = state_28238;
(statearr_28253[(10)] = inst_28189);

(statearr_28253[(12)] = inst_28188__$1);

(statearr_28253[(13)] = inst_28190);

return statearr_28253;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_28238__$1,(22),inst_28191);
} else {
if((state_val_28239 === (31))){
var inst_28220 = (state_28238[(2)]);
var state_28238__$1 = state_28238;
if(cljs.core.truth_(inst_28220)){
var statearr_28254_28310 = state_28238__$1;
(statearr_28254_28310[(1)] = (32));

} else {
var statearr_28255_28311 = state_28238__$1;
(statearr_28255_28311[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28239 === (32))){
var inst_28197 = (state_28238[(14)]);
var state_28238__$1 = state_28238;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28238__$1,(35),out,inst_28197);
} else {
if((state_val_28239 === (33))){
var inst_28188 = (state_28238[(12)]);
var inst_28165 = inst_28188;
var state_28238__$1 = (function (){var statearr_28256 = state_28238;
(statearr_28256[(7)] = inst_28165);

return statearr_28256;
})();
var statearr_28257_28312 = state_28238__$1;
(statearr_28257_28312[(2)] = null);

(statearr_28257_28312[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28239 === (13))){
var inst_28165 = (state_28238[(7)]);
var inst_28172 = inst_28165.cljs$lang$protocol_mask$partition0$;
var inst_28173 = (inst_28172 & (64));
var inst_28174 = inst_28165.cljs$core$ISeq$;
var inst_28175 = (cljs.core.PROTOCOL_SENTINEL === inst_28174);
var inst_28176 = ((inst_28173) || (inst_28175));
var state_28238__$1 = state_28238;
if(cljs.core.truth_(inst_28176)){
var statearr_28258_28313 = state_28238__$1;
(statearr_28258_28313[(1)] = (16));

} else {
var statearr_28259_28314 = state_28238__$1;
(statearr_28259_28314[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28239 === (22))){
var inst_28197 = (state_28238[(14)]);
var inst_28198 = (state_28238[(11)]);
var inst_28196 = (state_28238[(2)]);
var inst_28197__$1 = cljs.core.nth.call(null,inst_28196,(0),null);
var inst_28198__$1 = cljs.core.nth.call(null,inst_28196,(1),null);
var inst_28199 = (inst_28197__$1 == null);
var inst_28200 = cljs.core._EQ_.call(null,inst_28198__$1,change);
var inst_28201 = ((inst_28199) || (inst_28200));
var state_28238__$1 = (function (){var statearr_28260 = state_28238;
(statearr_28260[(14)] = inst_28197__$1);

(statearr_28260[(11)] = inst_28198__$1);

return statearr_28260;
})();
if(cljs.core.truth_(inst_28201)){
var statearr_28261_28315 = state_28238__$1;
(statearr_28261_28315[(1)] = (23));

} else {
var statearr_28262_28316 = state_28238__$1;
(statearr_28262_28316[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28239 === (36))){
var inst_28188 = (state_28238[(12)]);
var inst_28165 = inst_28188;
var state_28238__$1 = (function (){var statearr_28263 = state_28238;
(statearr_28263[(7)] = inst_28165);

return statearr_28263;
})();
var statearr_28264_28317 = state_28238__$1;
(statearr_28264_28317[(2)] = null);

(statearr_28264_28317[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28239 === (29))){
var inst_28212 = (state_28238[(9)]);
var state_28238__$1 = state_28238;
var statearr_28265_28318 = state_28238__$1;
(statearr_28265_28318[(2)] = inst_28212);

(statearr_28265_28318[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28239 === (6))){
var state_28238__$1 = state_28238;
var statearr_28266_28319 = state_28238__$1;
(statearr_28266_28319[(2)] = false);

(statearr_28266_28319[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28239 === (28))){
var inst_28208 = (state_28238[(2)]);
var inst_28209 = calc_state.call(null);
var inst_28165 = inst_28209;
var state_28238__$1 = (function (){var statearr_28267 = state_28238;
(statearr_28267[(7)] = inst_28165);

(statearr_28267[(15)] = inst_28208);

return statearr_28267;
})();
var statearr_28268_28320 = state_28238__$1;
(statearr_28268_28320[(2)] = null);

(statearr_28268_28320[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28239 === (25))){
var inst_28234 = (state_28238[(2)]);
var state_28238__$1 = state_28238;
var statearr_28269_28321 = state_28238__$1;
(statearr_28269_28321[(2)] = inst_28234);

(statearr_28269_28321[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28239 === (34))){
var inst_28232 = (state_28238[(2)]);
var state_28238__$1 = state_28238;
var statearr_28270_28322 = state_28238__$1;
(statearr_28270_28322[(2)] = inst_28232);

(statearr_28270_28322[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28239 === (17))){
var state_28238__$1 = state_28238;
var statearr_28271_28323 = state_28238__$1;
(statearr_28271_28323[(2)] = false);

(statearr_28271_28323[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28239 === (3))){
var state_28238__$1 = state_28238;
var statearr_28272_28324 = state_28238__$1;
(statearr_28272_28324[(2)] = false);

(statearr_28272_28324[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28239 === (12))){
var inst_28236 = (state_28238[(2)]);
var state_28238__$1 = state_28238;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28238__$1,inst_28236);
} else {
if((state_val_28239 === (2))){
var inst_28140 = (state_28238[(8)]);
var inst_28145 = inst_28140.cljs$lang$protocol_mask$partition0$;
var inst_28146 = (inst_28145 & (64));
var inst_28147 = inst_28140.cljs$core$ISeq$;
var inst_28148 = (cljs.core.PROTOCOL_SENTINEL === inst_28147);
var inst_28149 = ((inst_28146) || (inst_28148));
var state_28238__$1 = state_28238;
if(cljs.core.truth_(inst_28149)){
var statearr_28273_28325 = state_28238__$1;
(statearr_28273_28325[(1)] = (5));

} else {
var statearr_28274_28326 = state_28238__$1;
(statearr_28274_28326[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28239 === (23))){
var inst_28197 = (state_28238[(14)]);
var inst_28203 = (inst_28197 == null);
var state_28238__$1 = state_28238;
if(cljs.core.truth_(inst_28203)){
var statearr_28275_28327 = state_28238__$1;
(statearr_28275_28327[(1)] = (26));

} else {
var statearr_28276_28328 = state_28238__$1;
(statearr_28276_28328[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28239 === (35))){
var inst_28223 = (state_28238[(2)]);
var state_28238__$1 = state_28238;
if(cljs.core.truth_(inst_28223)){
var statearr_28277_28329 = state_28238__$1;
(statearr_28277_28329[(1)] = (36));

} else {
var statearr_28278_28330 = state_28238__$1;
(statearr_28278_28330[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28239 === (19))){
var inst_28165 = (state_28238[(7)]);
var inst_28185 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28165);
var state_28238__$1 = state_28238;
var statearr_28279_28331 = state_28238__$1;
(statearr_28279_28331[(2)] = inst_28185);

(statearr_28279_28331[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28239 === (11))){
var inst_28165 = (state_28238[(7)]);
var inst_28169 = (inst_28165 == null);
var inst_28170 = cljs.core.not.call(null,inst_28169);
var state_28238__$1 = state_28238;
if(inst_28170){
var statearr_28280_28332 = state_28238__$1;
(statearr_28280_28332[(1)] = (13));

} else {
var statearr_28281_28333 = state_28238__$1;
(statearr_28281_28333[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28239 === (9))){
var inst_28140 = (state_28238[(8)]);
var state_28238__$1 = state_28238;
var statearr_28282_28334 = state_28238__$1;
(statearr_28282_28334[(2)] = inst_28140);

(statearr_28282_28334[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28239 === (5))){
var state_28238__$1 = state_28238;
var statearr_28283_28335 = state_28238__$1;
(statearr_28283_28335[(2)] = true);

(statearr_28283_28335[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28239 === (14))){
var state_28238__$1 = state_28238;
var statearr_28284_28336 = state_28238__$1;
(statearr_28284_28336[(2)] = false);

(statearr_28284_28336[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28239 === (26))){
var inst_28198 = (state_28238[(11)]);
var inst_28205 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_28198);
var state_28238__$1 = state_28238;
var statearr_28285_28337 = state_28238__$1;
(statearr_28285_28337[(2)] = inst_28205);

(statearr_28285_28337[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28239 === (16))){
var state_28238__$1 = state_28238;
var statearr_28286_28338 = state_28238__$1;
(statearr_28286_28338[(2)] = true);

(statearr_28286_28338[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28239 === (38))){
var inst_28228 = (state_28238[(2)]);
var state_28238__$1 = state_28238;
var statearr_28287_28339 = state_28238__$1;
(statearr_28287_28339[(2)] = inst_28228);

(statearr_28287_28339[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28239 === (30))){
var inst_28189 = (state_28238[(10)]);
var inst_28190 = (state_28238[(13)]);
var inst_28198 = (state_28238[(11)]);
var inst_28215 = cljs.core.empty_QMARK_.call(null,inst_28189);
var inst_28216 = inst_28190.call(null,inst_28198);
var inst_28217 = cljs.core.not.call(null,inst_28216);
var inst_28218 = ((inst_28215) && (inst_28217));
var state_28238__$1 = state_28238;
var statearr_28288_28340 = state_28238__$1;
(statearr_28288_28340[(2)] = inst_28218);

(statearr_28288_28340[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28239 === (10))){
var inst_28140 = (state_28238[(8)]);
var inst_28161 = (state_28238[(2)]);
var inst_28162 = cljs.core.get.call(null,inst_28161,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_28163 = cljs.core.get.call(null,inst_28161,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_28164 = cljs.core.get.call(null,inst_28161,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_28165 = inst_28140;
var state_28238__$1 = (function (){var statearr_28289 = state_28238;
(statearr_28289[(16)] = inst_28163);

(statearr_28289[(7)] = inst_28165);

(statearr_28289[(17)] = inst_28162);

(statearr_28289[(18)] = inst_28164);

return statearr_28289;
})();
var statearr_28290_28341 = state_28238__$1;
(statearr_28290_28341[(2)] = null);

(statearr_28290_28341[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28239 === (18))){
var inst_28180 = (state_28238[(2)]);
var state_28238__$1 = state_28238;
var statearr_28291_28342 = state_28238__$1;
(statearr_28291_28342[(2)] = inst_28180);

(statearr_28291_28342[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28239 === (37))){
var state_28238__$1 = state_28238;
var statearr_28292_28343 = state_28238__$1;
(statearr_28292_28343[(2)] = null);

(statearr_28292_28343[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28239 === (8))){
var inst_28140 = (state_28238[(8)]);
var inst_28158 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28140);
var state_28238__$1 = state_28238;
var statearr_28293_28344 = state_28238__$1;
(statearr_28293_28344[(2)] = inst_28158);

(statearr_28293_28344[(1)] = (10));


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
var cljs$core$async$mix_$_state_machine__27137__auto__ = null;
var cljs$core$async$mix_$_state_machine__27137__auto____0 = (function (){
var statearr_28294 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28294[(0)] = cljs$core$async$mix_$_state_machine__27137__auto__);

(statearr_28294[(1)] = (1));

return statearr_28294;
});
var cljs$core$async$mix_$_state_machine__27137__auto____1 = (function (state_28238){
while(true){
var ret_value__27138__auto__ = (function (){try{while(true){
var result__27139__auto__ = switch__27136__auto__.call(null,state_28238);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27139__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27139__auto__;
}
break;
}
}catch (e28295){if((e28295 instanceof Object)){
var ex__27140__auto__ = e28295;
var statearr_28296_28345 = state_28238;
(statearr_28296_28345[(5)] = ex__27140__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28238);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28295;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27138__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28346 = state_28238;
state_28238 = G__28346;
continue;
} else {
return ret_value__27138__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__27137__auto__ = function(state_28238){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__27137__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__27137__auto____1.call(this,state_28238);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__27137__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__27137__auto____0;
cljs$core$async$mix_$_state_machine__27137__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__27137__auto____1;
return cljs$core$async$mix_$_state_machine__27137__auto__;
})()
})();
var state__27233__auto__ = (function (){var statearr_28297 = f__27232__auto__.call(null);
(statearr_28297[(6)] = c__27231__auto___28298);

return statearr_28297;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27233__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_28349 = (function (p,v,ch,close_QMARK_){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4426__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_28349.call(null,p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_28350 = (function (p,v,ch){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,p,v,ch);
} else {
var m__4426__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_28350.call(null,p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_28351 = (function() {
var G__28352 = null;
var G__28352__1 = (function (p){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,p);
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
});
var G__28352__2 = (function (p,v){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,p,v);
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
});
G__28352 = function(p,v){
switch(arguments.length){
case 1:
return G__28352__1.call(this,p);
case 2:
return G__28352__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__28352.cljs$core$IFn$_invoke$arity$1 = G__28352__1;
G__28352.cljs$core$IFn$_invoke$arity$2 = G__28352__2;
return G__28352;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__28348 = arguments.length;
switch (G__28348) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_28351.call(null,p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_28351.call(null,p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__28356 = arguments.length;
switch (G__28356) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,(function (p1__28354_SHARP_){
if(cljs.core.truth_(p1__28354_SHARP_.call(null,topic))){
return p1__28354_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__28354_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28357 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28357 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta28358){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta28358 = meta28358;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async28357.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28359,meta28358__$1){
var self__ = this;
var _28359__$1 = this;
return (new cljs.core.async.t_cljs$core$async28357(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta28358__$1));
}));

(cljs.core.async.t_cljs$core$async28357.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28359){
var self__ = this;
var _28359__$1 = this;
return self__.meta28358;
}));

(cljs.core.async.t_cljs$core$async28357.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28357.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async28357.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28357.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async28357.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5720__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5720__auto__)){
var m = temp__5720__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async28357.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async28357.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async28357.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta28358","meta28358",926637553,null)], null);
}));

(cljs.core.async.t_cljs$core$async28357.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async28357.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28357");

(cljs.core.async.t_cljs$core$async28357.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async28357");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28357.
 */
cljs.core.async.__GT_t_cljs$core$async28357 = (function cljs$core$async$__GT_t_cljs$core$async28357(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta28358){
return (new cljs.core.async.t_cljs$core$async28357(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta28358));
});

}

return (new cljs.core.async.t_cljs$core$async28357(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__27231__auto___28477 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27232__auto__ = (function (){var switch__27136__auto__ = (function (state_28431){
var state_val_28432 = (state_28431[(1)]);
if((state_val_28432 === (7))){
var inst_28427 = (state_28431[(2)]);
var state_28431__$1 = state_28431;
var statearr_28433_28478 = state_28431__$1;
(statearr_28433_28478[(2)] = inst_28427);

(statearr_28433_28478[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28432 === (20))){
var state_28431__$1 = state_28431;
var statearr_28434_28479 = state_28431__$1;
(statearr_28434_28479[(2)] = null);

(statearr_28434_28479[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28432 === (1))){
var state_28431__$1 = state_28431;
var statearr_28435_28480 = state_28431__$1;
(statearr_28435_28480[(2)] = null);

(statearr_28435_28480[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28432 === (24))){
var inst_28410 = (state_28431[(7)]);
var inst_28419 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_28410);
var state_28431__$1 = state_28431;
var statearr_28436_28481 = state_28431__$1;
(statearr_28436_28481[(2)] = inst_28419);

(statearr_28436_28481[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28432 === (4))){
var inst_28362 = (state_28431[(8)]);
var inst_28362__$1 = (state_28431[(2)]);
var inst_28363 = (inst_28362__$1 == null);
var state_28431__$1 = (function (){var statearr_28437 = state_28431;
(statearr_28437[(8)] = inst_28362__$1);

return statearr_28437;
})();
if(cljs.core.truth_(inst_28363)){
var statearr_28438_28482 = state_28431__$1;
(statearr_28438_28482[(1)] = (5));

} else {
var statearr_28439_28483 = state_28431__$1;
(statearr_28439_28483[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28432 === (15))){
var inst_28404 = (state_28431[(2)]);
var state_28431__$1 = state_28431;
var statearr_28440_28484 = state_28431__$1;
(statearr_28440_28484[(2)] = inst_28404);

(statearr_28440_28484[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28432 === (21))){
var inst_28424 = (state_28431[(2)]);
var state_28431__$1 = (function (){var statearr_28441 = state_28431;
(statearr_28441[(9)] = inst_28424);

return statearr_28441;
})();
var statearr_28442_28485 = state_28431__$1;
(statearr_28442_28485[(2)] = null);

(statearr_28442_28485[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28432 === (13))){
var inst_28386 = (state_28431[(10)]);
var inst_28388 = cljs.core.chunked_seq_QMARK_.call(null,inst_28386);
var state_28431__$1 = state_28431;
if(inst_28388){
var statearr_28443_28486 = state_28431__$1;
(statearr_28443_28486[(1)] = (16));

} else {
var statearr_28444_28487 = state_28431__$1;
(statearr_28444_28487[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28432 === (22))){
var inst_28416 = (state_28431[(2)]);
var state_28431__$1 = state_28431;
if(cljs.core.truth_(inst_28416)){
var statearr_28445_28488 = state_28431__$1;
(statearr_28445_28488[(1)] = (23));

} else {
var statearr_28446_28489 = state_28431__$1;
(statearr_28446_28489[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28432 === (6))){
var inst_28362 = (state_28431[(8)]);
var inst_28412 = (state_28431[(11)]);
var inst_28410 = (state_28431[(7)]);
var inst_28410__$1 = topic_fn.call(null,inst_28362);
var inst_28411 = cljs.core.deref.call(null,mults);
var inst_28412__$1 = cljs.core.get.call(null,inst_28411,inst_28410__$1);
var state_28431__$1 = (function (){var statearr_28447 = state_28431;
(statearr_28447[(11)] = inst_28412__$1);

(statearr_28447[(7)] = inst_28410__$1);

return statearr_28447;
})();
if(cljs.core.truth_(inst_28412__$1)){
var statearr_28448_28490 = state_28431__$1;
(statearr_28448_28490[(1)] = (19));

} else {
var statearr_28449_28491 = state_28431__$1;
(statearr_28449_28491[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28432 === (25))){
var inst_28421 = (state_28431[(2)]);
var state_28431__$1 = state_28431;
var statearr_28450_28492 = state_28431__$1;
(statearr_28450_28492[(2)] = inst_28421);

(statearr_28450_28492[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28432 === (17))){
var inst_28386 = (state_28431[(10)]);
var inst_28395 = cljs.core.first.call(null,inst_28386);
var inst_28396 = cljs.core.async.muxch_STAR_.call(null,inst_28395);
var inst_28397 = cljs.core.async.close_BANG_.call(null,inst_28396);
var inst_28398 = cljs.core.next.call(null,inst_28386);
var inst_28372 = inst_28398;
var inst_28373 = null;
var inst_28374 = (0);
var inst_28375 = (0);
var state_28431__$1 = (function (){var statearr_28451 = state_28431;
(statearr_28451[(12)] = inst_28372);

(statearr_28451[(13)] = inst_28373);

(statearr_28451[(14)] = inst_28375);

(statearr_28451[(15)] = inst_28397);

(statearr_28451[(16)] = inst_28374);

return statearr_28451;
})();
var statearr_28452_28493 = state_28431__$1;
(statearr_28452_28493[(2)] = null);

(statearr_28452_28493[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28432 === (3))){
var inst_28429 = (state_28431[(2)]);
var state_28431__$1 = state_28431;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28431__$1,inst_28429);
} else {
if((state_val_28432 === (12))){
var inst_28406 = (state_28431[(2)]);
var state_28431__$1 = state_28431;
var statearr_28453_28494 = state_28431__$1;
(statearr_28453_28494[(2)] = inst_28406);

(statearr_28453_28494[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28432 === (2))){
var state_28431__$1 = state_28431;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28431__$1,(4),ch);
} else {
if((state_val_28432 === (23))){
var state_28431__$1 = state_28431;
var statearr_28454_28495 = state_28431__$1;
(statearr_28454_28495[(2)] = null);

(statearr_28454_28495[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28432 === (19))){
var inst_28362 = (state_28431[(8)]);
var inst_28412 = (state_28431[(11)]);
var inst_28414 = cljs.core.async.muxch_STAR_.call(null,inst_28412);
var state_28431__$1 = state_28431;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28431__$1,(22),inst_28414,inst_28362);
} else {
if((state_val_28432 === (11))){
var inst_28372 = (state_28431[(12)]);
var inst_28386 = (state_28431[(10)]);
var inst_28386__$1 = cljs.core.seq.call(null,inst_28372);
var state_28431__$1 = (function (){var statearr_28455 = state_28431;
(statearr_28455[(10)] = inst_28386__$1);

return statearr_28455;
})();
if(inst_28386__$1){
var statearr_28456_28496 = state_28431__$1;
(statearr_28456_28496[(1)] = (13));

} else {
var statearr_28457_28497 = state_28431__$1;
(statearr_28457_28497[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28432 === (9))){
var inst_28408 = (state_28431[(2)]);
var state_28431__$1 = state_28431;
var statearr_28458_28498 = state_28431__$1;
(statearr_28458_28498[(2)] = inst_28408);

(statearr_28458_28498[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28432 === (5))){
var inst_28369 = cljs.core.deref.call(null,mults);
var inst_28370 = cljs.core.vals.call(null,inst_28369);
var inst_28371 = cljs.core.seq.call(null,inst_28370);
var inst_28372 = inst_28371;
var inst_28373 = null;
var inst_28374 = (0);
var inst_28375 = (0);
var state_28431__$1 = (function (){var statearr_28459 = state_28431;
(statearr_28459[(12)] = inst_28372);

(statearr_28459[(13)] = inst_28373);

(statearr_28459[(14)] = inst_28375);

(statearr_28459[(16)] = inst_28374);

return statearr_28459;
})();
var statearr_28460_28499 = state_28431__$1;
(statearr_28460_28499[(2)] = null);

(statearr_28460_28499[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28432 === (14))){
var state_28431__$1 = state_28431;
var statearr_28464_28500 = state_28431__$1;
(statearr_28464_28500[(2)] = null);

(statearr_28464_28500[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28432 === (16))){
var inst_28386 = (state_28431[(10)]);
var inst_28390 = cljs.core.chunk_first.call(null,inst_28386);
var inst_28391 = cljs.core.chunk_rest.call(null,inst_28386);
var inst_28392 = cljs.core.count.call(null,inst_28390);
var inst_28372 = inst_28391;
var inst_28373 = inst_28390;
var inst_28374 = inst_28392;
var inst_28375 = (0);
var state_28431__$1 = (function (){var statearr_28465 = state_28431;
(statearr_28465[(12)] = inst_28372);

(statearr_28465[(13)] = inst_28373);

(statearr_28465[(14)] = inst_28375);

(statearr_28465[(16)] = inst_28374);

return statearr_28465;
})();
var statearr_28466_28501 = state_28431__$1;
(statearr_28466_28501[(2)] = null);

(statearr_28466_28501[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28432 === (10))){
var inst_28372 = (state_28431[(12)]);
var inst_28373 = (state_28431[(13)]);
var inst_28375 = (state_28431[(14)]);
var inst_28374 = (state_28431[(16)]);
var inst_28380 = cljs.core._nth.call(null,inst_28373,inst_28375);
var inst_28381 = cljs.core.async.muxch_STAR_.call(null,inst_28380);
var inst_28382 = cljs.core.async.close_BANG_.call(null,inst_28381);
var inst_28383 = (inst_28375 + (1));
var tmp28461 = inst_28372;
var tmp28462 = inst_28373;
var tmp28463 = inst_28374;
var inst_28372__$1 = tmp28461;
var inst_28373__$1 = tmp28462;
var inst_28374__$1 = tmp28463;
var inst_28375__$1 = inst_28383;
var state_28431__$1 = (function (){var statearr_28467 = state_28431;
(statearr_28467[(12)] = inst_28372__$1);

(statearr_28467[(13)] = inst_28373__$1);

(statearr_28467[(14)] = inst_28375__$1);

(statearr_28467[(17)] = inst_28382);

(statearr_28467[(16)] = inst_28374__$1);

return statearr_28467;
})();
var statearr_28468_28502 = state_28431__$1;
(statearr_28468_28502[(2)] = null);

(statearr_28468_28502[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28432 === (18))){
var inst_28401 = (state_28431[(2)]);
var state_28431__$1 = state_28431;
var statearr_28469_28503 = state_28431__$1;
(statearr_28469_28503[(2)] = inst_28401);

(statearr_28469_28503[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28432 === (8))){
var inst_28375 = (state_28431[(14)]);
var inst_28374 = (state_28431[(16)]);
var inst_28377 = (inst_28375 < inst_28374);
var inst_28378 = inst_28377;
var state_28431__$1 = state_28431;
if(cljs.core.truth_(inst_28378)){
var statearr_28470_28504 = state_28431__$1;
(statearr_28470_28504[(1)] = (10));

} else {
var statearr_28471_28505 = state_28431__$1;
(statearr_28471_28505[(1)] = (11));

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
var cljs$core$async$state_machine__27137__auto__ = null;
var cljs$core$async$state_machine__27137__auto____0 = (function (){
var statearr_28472 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28472[(0)] = cljs$core$async$state_machine__27137__auto__);

(statearr_28472[(1)] = (1));

return statearr_28472;
});
var cljs$core$async$state_machine__27137__auto____1 = (function (state_28431){
while(true){
var ret_value__27138__auto__ = (function (){try{while(true){
var result__27139__auto__ = switch__27136__auto__.call(null,state_28431);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27139__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27139__auto__;
}
break;
}
}catch (e28473){if((e28473 instanceof Object)){
var ex__27140__auto__ = e28473;
var statearr_28474_28506 = state_28431;
(statearr_28474_28506[(5)] = ex__27140__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28431);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28473;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27138__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28507 = state_28431;
state_28431 = G__28507;
continue;
} else {
return ret_value__27138__auto__;
}
break;
}
});
cljs$core$async$state_machine__27137__auto__ = function(state_28431){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27137__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27137__auto____1.call(this,state_28431);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27137__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27137__auto____0;
cljs$core$async$state_machine__27137__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27137__auto____1;
return cljs$core$async$state_machine__27137__auto__;
})()
})();
var state__27233__auto__ = (function (){var statearr_28475 = f__27232__auto__.call(null);
(statearr_28475[(6)] = c__27231__auto___28477);

return statearr_28475;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27233__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__28509 = arguments.length;
switch (G__28509) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__28512 = arguments.length;
switch (G__28512) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__28515 = arguments.length;
switch (G__28515) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,(function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.call(null,cnt));
var c__27231__auto___28582 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27232__auto__ = (function (){var switch__27136__auto__ = (function (state_28554){
var state_val_28555 = (state_28554[(1)]);
if((state_val_28555 === (7))){
var state_28554__$1 = state_28554;
var statearr_28556_28583 = state_28554__$1;
(statearr_28556_28583[(2)] = null);

(statearr_28556_28583[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28555 === (1))){
var state_28554__$1 = state_28554;
var statearr_28557_28584 = state_28554__$1;
(statearr_28557_28584[(2)] = null);

(statearr_28557_28584[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28555 === (4))){
var inst_28518 = (state_28554[(7)]);
var inst_28520 = (inst_28518 < cnt);
var state_28554__$1 = state_28554;
if(cljs.core.truth_(inst_28520)){
var statearr_28558_28585 = state_28554__$1;
(statearr_28558_28585[(1)] = (6));

} else {
var statearr_28559_28586 = state_28554__$1;
(statearr_28559_28586[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28555 === (15))){
var inst_28550 = (state_28554[(2)]);
var state_28554__$1 = state_28554;
var statearr_28560_28587 = state_28554__$1;
(statearr_28560_28587[(2)] = inst_28550);

(statearr_28560_28587[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28555 === (13))){
var inst_28543 = cljs.core.async.close_BANG_.call(null,out);
var state_28554__$1 = state_28554;
var statearr_28561_28588 = state_28554__$1;
(statearr_28561_28588[(2)] = inst_28543);

(statearr_28561_28588[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28555 === (6))){
var state_28554__$1 = state_28554;
var statearr_28562_28589 = state_28554__$1;
(statearr_28562_28589[(2)] = null);

(statearr_28562_28589[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28555 === (3))){
var inst_28552 = (state_28554[(2)]);
var state_28554__$1 = state_28554;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28554__$1,inst_28552);
} else {
if((state_val_28555 === (12))){
var inst_28540 = (state_28554[(8)]);
var inst_28540__$1 = (state_28554[(2)]);
var inst_28541 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_28540__$1);
var state_28554__$1 = (function (){var statearr_28563 = state_28554;
(statearr_28563[(8)] = inst_28540__$1);

return statearr_28563;
})();
if(cljs.core.truth_(inst_28541)){
var statearr_28564_28590 = state_28554__$1;
(statearr_28564_28590[(1)] = (13));

} else {
var statearr_28565_28591 = state_28554__$1;
(statearr_28565_28591[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28555 === (2))){
var inst_28517 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_28518 = (0);
var state_28554__$1 = (function (){var statearr_28566 = state_28554;
(statearr_28566[(7)] = inst_28518);

(statearr_28566[(9)] = inst_28517);

return statearr_28566;
})();
var statearr_28567_28592 = state_28554__$1;
(statearr_28567_28592[(2)] = null);

(statearr_28567_28592[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28555 === (11))){
var inst_28518 = (state_28554[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_28554,(10),Object,null,(9));
var inst_28527 = chs__$1.call(null,inst_28518);
var inst_28528 = done.call(null,inst_28518);
var inst_28529 = cljs.core.async.take_BANG_.call(null,inst_28527,inst_28528);
var state_28554__$1 = state_28554;
var statearr_28568_28593 = state_28554__$1;
(statearr_28568_28593[(2)] = inst_28529);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28554__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28555 === (9))){
var inst_28518 = (state_28554[(7)]);
var inst_28531 = (state_28554[(2)]);
var inst_28532 = (inst_28518 + (1));
var inst_28518__$1 = inst_28532;
var state_28554__$1 = (function (){var statearr_28569 = state_28554;
(statearr_28569[(10)] = inst_28531);

(statearr_28569[(7)] = inst_28518__$1);

return statearr_28569;
})();
var statearr_28570_28594 = state_28554__$1;
(statearr_28570_28594[(2)] = null);

(statearr_28570_28594[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28555 === (5))){
var inst_28538 = (state_28554[(2)]);
var state_28554__$1 = (function (){var statearr_28571 = state_28554;
(statearr_28571[(11)] = inst_28538);

return statearr_28571;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28554__$1,(12),dchan);
} else {
if((state_val_28555 === (14))){
var inst_28540 = (state_28554[(8)]);
var inst_28545 = cljs.core.apply.call(null,f,inst_28540);
var state_28554__$1 = state_28554;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28554__$1,(16),out,inst_28545);
} else {
if((state_val_28555 === (16))){
var inst_28547 = (state_28554[(2)]);
var state_28554__$1 = (function (){var statearr_28572 = state_28554;
(statearr_28572[(12)] = inst_28547);

return statearr_28572;
})();
var statearr_28573_28595 = state_28554__$1;
(statearr_28573_28595[(2)] = null);

(statearr_28573_28595[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28555 === (10))){
var inst_28522 = (state_28554[(2)]);
var inst_28523 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_28554__$1 = (function (){var statearr_28574 = state_28554;
(statearr_28574[(13)] = inst_28522);

return statearr_28574;
})();
var statearr_28575_28596 = state_28554__$1;
(statearr_28575_28596[(2)] = inst_28523);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28554__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28555 === (8))){
var inst_28536 = (state_28554[(2)]);
var state_28554__$1 = state_28554;
var statearr_28576_28597 = state_28554__$1;
(statearr_28576_28597[(2)] = inst_28536);

(statearr_28576_28597[(1)] = (5));


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
});
return (function() {
var cljs$core$async$state_machine__27137__auto__ = null;
var cljs$core$async$state_machine__27137__auto____0 = (function (){
var statearr_28577 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28577[(0)] = cljs$core$async$state_machine__27137__auto__);

(statearr_28577[(1)] = (1));

return statearr_28577;
});
var cljs$core$async$state_machine__27137__auto____1 = (function (state_28554){
while(true){
var ret_value__27138__auto__ = (function (){try{while(true){
var result__27139__auto__ = switch__27136__auto__.call(null,state_28554);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27139__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27139__auto__;
}
break;
}
}catch (e28578){if((e28578 instanceof Object)){
var ex__27140__auto__ = e28578;
var statearr_28579_28598 = state_28554;
(statearr_28579_28598[(5)] = ex__27140__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28554);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28578;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27138__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28599 = state_28554;
state_28554 = G__28599;
continue;
} else {
return ret_value__27138__auto__;
}
break;
}
});
cljs$core$async$state_machine__27137__auto__ = function(state_28554){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27137__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27137__auto____1.call(this,state_28554);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27137__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27137__auto____0;
cljs$core$async$state_machine__27137__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27137__auto____1;
return cljs$core$async$state_machine__27137__auto__;
})()
})();
var state__27233__auto__ = (function (){var statearr_28580 = f__27232__auto__.call(null);
(statearr_28580[(6)] = c__27231__auto___28582);

return statearr_28580;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27233__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__28602 = arguments.length;
switch (G__28602) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27231__auto___28656 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27232__auto__ = (function (){var switch__27136__auto__ = (function (state_28634){
var state_val_28635 = (state_28634[(1)]);
if((state_val_28635 === (7))){
var inst_28614 = (state_28634[(7)]);
var inst_28613 = (state_28634[(8)]);
var inst_28613__$1 = (state_28634[(2)]);
var inst_28614__$1 = cljs.core.nth.call(null,inst_28613__$1,(0),null);
var inst_28615 = cljs.core.nth.call(null,inst_28613__$1,(1),null);
var inst_28616 = (inst_28614__$1 == null);
var state_28634__$1 = (function (){var statearr_28636 = state_28634;
(statearr_28636[(7)] = inst_28614__$1);

(statearr_28636[(8)] = inst_28613__$1);

(statearr_28636[(9)] = inst_28615);

return statearr_28636;
})();
if(cljs.core.truth_(inst_28616)){
var statearr_28637_28657 = state_28634__$1;
(statearr_28637_28657[(1)] = (8));

} else {
var statearr_28638_28658 = state_28634__$1;
(statearr_28638_28658[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28635 === (1))){
var inst_28603 = cljs.core.vec.call(null,chs);
var inst_28604 = inst_28603;
var state_28634__$1 = (function (){var statearr_28639 = state_28634;
(statearr_28639[(10)] = inst_28604);

return statearr_28639;
})();
var statearr_28640_28659 = state_28634__$1;
(statearr_28640_28659[(2)] = null);

(statearr_28640_28659[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28635 === (4))){
var inst_28604 = (state_28634[(10)]);
var state_28634__$1 = state_28634;
return cljs.core.async.ioc_alts_BANG_.call(null,state_28634__$1,(7),inst_28604);
} else {
if((state_val_28635 === (6))){
var inst_28630 = (state_28634[(2)]);
var state_28634__$1 = state_28634;
var statearr_28641_28660 = state_28634__$1;
(statearr_28641_28660[(2)] = inst_28630);

(statearr_28641_28660[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28635 === (3))){
var inst_28632 = (state_28634[(2)]);
var state_28634__$1 = state_28634;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28634__$1,inst_28632);
} else {
if((state_val_28635 === (2))){
var inst_28604 = (state_28634[(10)]);
var inst_28606 = cljs.core.count.call(null,inst_28604);
var inst_28607 = (inst_28606 > (0));
var state_28634__$1 = state_28634;
if(cljs.core.truth_(inst_28607)){
var statearr_28643_28661 = state_28634__$1;
(statearr_28643_28661[(1)] = (4));

} else {
var statearr_28644_28662 = state_28634__$1;
(statearr_28644_28662[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28635 === (11))){
var inst_28604 = (state_28634[(10)]);
var inst_28623 = (state_28634[(2)]);
var tmp28642 = inst_28604;
var inst_28604__$1 = tmp28642;
var state_28634__$1 = (function (){var statearr_28645 = state_28634;
(statearr_28645[(10)] = inst_28604__$1);

(statearr_28645[(11)] = inst_28623);

return statearr_28645;
})();
var statearr_28646_28663 = state_28634__$1;
(statearr_28646_28663[(2)] = null);

(statearr_28646_28663[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28635 === (9))){
var inst_28614 = (state_28634[(7)]);
var state_28634__$1 = state_28634;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28634__$1,(11),out,inst_28614);
} else {
if((state_val_28635 === (5))){
var inst_28628 = cljs.core.async.close_BANG_.call(null,out);
var state_28634__$1 = state_28634;
var statearr_28647_28664 = state_28634__$1;
(statearr_28647_28664[(2)] = inst_28628);

(statearr_28647_28664[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28635 === (10))){
var inst_28626 = (state_28634[(2)]);
var state_28634__$1 = state_28634;
var statearr_28648_28665 = state_28634__$1;
(statearr_28648_28665[(2)] = inst_28626);

(statearr_28648_28665[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28635 === (8))){
var inst_28604 = (state_28634[(10)]);
var inst_28614 = (state_28634[(7)]);
var inst_28613 = (state_28634[(8)]);
var inst_28615 = (state_28634[(9)]);
var inst_28618 = (function (){var cs = inst_28604;
var vec__28609 = inst_28613;
var v = inst_28614;
var c = inst_28615;
return (function (p1__28600_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__28600_SHARP_);
});
})();
var inst_28619 = cljs.core.filterv.call(null,inst_28618,inst_28604);
var inst_28604__$1 = inst_28619;
var state_28634__$1 = (function (){var statearr_28649 = state_28634;
(statearr_28649[(10)] = inst_28604__$1);

return statearr_28649;
})();
var statearr_28650_28666 = state_28634__$1;
(statearr_28650_28666[(2)] = null);

(statearr_28650_28666[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__27137__auto__ = null;
var cljs$core$async$state_machine__27137__auto____0 = (function (){
var statearr_28651 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28651[(0)] = cljs$core$async$state_machine__27137__auto__);

(statearr_28651[(1)] = (1));

return statearr_28651;
});
var cljs$core$async$state_machine__27137__auto____1 = (function (state_28634){
while(true){
var ret_value__27138__auto__ = (function (){try{while(true){
var result__27139__auto__ = switch__27136__auto__.call(null,state_28634);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27139__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27139__auto__;
}
break;
}
}catch (e28652){if((e28652 instanceof Object)){
var ex__27140__auto__ = e28652;
var statearr_28653_28667 = state_28634;
(statearr_28653_28667[(5)] = ex__27140__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28634);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28652;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27138__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28668 = state_28634;
state_28634 = G__28668;
continue;
} else {
return ret_value__27138__auto__;
}
break;
}
});
cljs$core$async$state_machine__27137__auto__ = function(state_28634){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27137__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27137__auto____1.call(this,state_28634);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27137__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27137__auto____0;
cljs$core$async$state_machine__27137__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27137__auto____1;
return cljs$core$async$state_machine__27137__auto__;
})()
})();
var state__27233__auto__ = (function (){var statearr_28654 = f__27232__auto__.call(null);
(statearr_28654[(6)] = c__27231__auto___28656);

return statearr_28654;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27233__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__28670 = arguments.length;
switch (G__28670) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27231__auto___28715 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27232__auto__ = (function (){var switch__27136__auto__ = (function (state_28694){
var state_val_28695 = (state_28694[(1)]);
if((state_val_28695 === (7))){
var inst_28676 = (state_28694[(7)]);
var inst_28676__$1 = (state_28694[(2)]);
var inst_28677 = (inst_28676__$1 == null);
var inst_28678 = cljs.core.not.call(null,inst_28677);
var state_28694__$1 = (function (){var statearr_28696 = state_28694;
(statearr_28696[(7)] = inst_28676__$1);

return statearr_28696;
})();
if(inst_28678){
var statearr_28697_28716 = state_28694__$1;
(statearr_28697_28716[(1)] = (8));

} else {
var statearr_28698_28717 = state_28694__$1;
(statearr_28698_28717[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28695 === (1))){
var inst_28671 = (0);
var state_28694__$1 = (function (){var statearr_28699 = state_28694;
(statearr_28699[(8)] = inst_28671);

return statearr_28699;
})();
var statearr_28700_28718 = state_28694__$1;
(statearr_28700_28718[(2)] = null);

(statearr_28700_28718[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28695 === (4))){
var state_28694__$1 = state_28694;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28694__$1,(7),ch);
} else {
if((state_val_28695 === (6))){
var inst_28689 = (state_28694[(2)]);
var state_28694__$1 = state_28694;
var statearr_28701_28719 = state_28694__$1;
(statearr_28701_28719[(2)] = inst_28689);

(statearr_28701_28719[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28695 === (3))){
var inst_28691 = (state_28694[(2)]);
var inst_28692 = cljs.core.async.close_BANG_.call(null,out);
var state_28694__$1 = (function (){var statearr_28702 = state_28694;
(statearr_28702[(9)] = inst_28691);

return statearr_28702;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28694__$1,inst_28692);
} else {
if((state_val_28695 === (2))){
var inst_28671 = (state_28694[(8)]);
var inst_28673 = (inst_28671 < n);
var state_28694__$1 = state_28694;
if(cljs.core.truth_(inst_28673)){
var statearr_28703_28720 = state_28694__$1;
(statearr_28703_28720[(1)] = (4));

} else {
var statearr_28704_28721 = state_28694__$1;
(statearr_28704_28721[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28695 === (11))){
var inst_28671 = (state_28694[(8)]);
var inst_28681 = (state_28694[(2)]);
var inst_28682 = (inst_28671 + (1));
var inst_28671__$1 = inst_28682;
var state_28694__$1 = (function (){var statearr_28705 = state_28694;
(statearr_28705[(8)] = inst_28671__$1);

(statearr_28705[(10)] = inst_28681);

return statearr_28705;
})();
var statearr_28706_28722 = state_28694__$1;
(statearr_28706_28722[(2)] = null);

(statearr_28706_28722[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28695 === (9))){
var state_28694__$1 = state_28694;
var statearr_28707_28723 = state_28694__$1;
(statearr_28707_28723[(2)] = null);

(statearr_28707_28723[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28695 === (5))){
var state_28694__$1 = state_28694;
var statearr_28708_28724 = state_28694__$1;
(statearr_28708_28724[(2)] = null);

(statearr_28708_28724[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28695 === (10))){
var inst_28686 = (state_28694[(2)]);
var state_28694__$1 = state_28694;
var statearr_28709_28725 = state_28694__$1;
(statearr_28709_28725[(2)] = inst_28686);

(statearr_28709_28725[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28695 === (8))){
var inst_28676 = (state_28694[(7)]);
var state_28694__$1 = state_28694;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28694__$1,(11),out,inst_28676);
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
});
return (function() {
var cljs$core$async$state_machine__27137__auto__ = null;
var cljs$core$async$state_machine__27137__auto____0 = (function (){
var statearr_28710 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28710[(0)] = cljs$core$async$state_machine__27137__auto__);

(statearr_28710[(1)] = (1));

return statearr_28710;
});
var cljs$core$async$state_machine__27137__auto____1 = (function (state_28694){
while(true){
var ret_value__27138__auto__ = (function (){try{while(true){
var result__27139__auto__ = switch__27136__auto__.call(null,state_28694);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27139__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27139__auto__;
}
break;
}
}catch (e28711){if((e28711 instanceof Object)){
var ex__27140__auto__ = e28711;
var statearr_28712_28726 = state_28694;
(statearr_28712_28726[(5)] = ex__27140__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28694);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28711;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27138__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28727 = state_28694;
state_28694 = G__28727;
continue;
} else {
return ret_value__27138__auto__;
}
break;
}
});
cljs$core$async$state_machine__27137__auto__ = function(state_28694){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27137__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27137__auto____1.call(this,state_28694);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27137__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27137__auto____0;
cljs$core$async$state_machine__27137__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27137__auto____1;
return cljs$core$async$state_machine__27137__auto__;
})()
})();
var state__27233__auto__ = (function (){var statearr_28713 = f__27232__auto__.call(null);
(statearr_28713[(6)] = c__27231__auto___28715);

return statearr_28713;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27233__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28729 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28729 = (function (f,ch,meta28730){
this.f = f;
this.ch = ch;
this.meta28730 = meta28730;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async28729.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28731,meta28730__$1){
var self__ = this;
var _28731__$1 = this;
return (new cljs.core.async.t_cljs$core$async28729(self__.f,self__.ch,meta28730__$1));
}));

(cljs.core.async.t_cljs$core$async28729.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28731){
var self__ = this;
var _28731__$1 = this;
return self__.meta28730;
}));

(cljs.core.async.t_cljs$core$async28729.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28729.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async28729.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async28729.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28729.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28732 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28732 = (function (f,ch,meta28730,_,fn1,meta28733){
this.f = f;
this.ch = ch;
this.meta28730 = meta28730;
this._ = _;
this.fn1 = fn1;
this.meta28733 = meta28733;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async28732.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28734,meta28733__$1){
var self__ = this;
var _28734__$1 = this;
return (new cljs.core.async.t_cljs$core$async28732(self__.f,self__.ch,self__.meta28730,self__._,self__.fn1,meta28733__$1));
}));

(cljs.core.async.t_cljs$core$async28732.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28734){
var self__ = this;
var _28734__$1 = this;
return self__.meta28733;
}));

(cljs.core.async.t_cljs$core$async28732.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28732.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
}));

(cljs.core.async.t_cljs$core$async28732.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async28732.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return (function (p1__28728_SHARP_){
return f1.call(null,(((p1__28728_SHARP_ == null))?null:self__.f.call(null,p1__28728_SHARP_)));
});
}));

(cljs.core.async.t_cljs$core$async28732.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28730","meta28730",-1448804810,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async28729","cljs.core.async/t_cljs$core$async28729",557485580,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta28733","meta28733",-970656040,null)], null);
}));

(cljs.core.async.t_cljs$core$async28732.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async28732.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28732");

(cljs.core.async.t_cljs$core$async28732.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async28732");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28732.
 */
cljs.core.async.__GT_t_cljs$core$async28732 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async28732(f__$1,ch__$1,meta28730__$1,___$2,fn1__$1,meta28733){
return (new cljs.core.async.t_cljs$core$async28732(f__$1,ch__$1,meta28730__$1,___$2,fn1__$1,meta28733));
});

}

return (new cljs.core.async.t_cljs$core$async28732(self__.f,self__.ch,self__.meta28730,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref.call(null,ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async28729.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28729.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async28729.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28730","meta28730",-1448804810,null)], null);
}));

(cljs.core.async.t_cljs$core$async28729.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async28729.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28729");

(cljs.core.async.t_cljs$core$async28729.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async28729");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28729.
 */
cljs.core.async.__GT_t_cljs$core$async28729 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async28729(f__$1,ch__$1,meta28730){
return (new cljs.core.async.t_cljs$core$async28729(f__$1,ch__$1,meta28730));
});

}

return (new cljs.core.async.t_cljs$core$async28729(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28735 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28735 = (function (f,ch,meta28736){
this.f = f;
this.ch = ch;
this.meta28736 = meta28736;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async28735.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28737,meta28736__$1){
var self__ = this;
var _28737__$1 = this;
return (new cljs.core.async.t_cljs$core$async28735(self__.f,self__.ch,meta28736__$1));
}));

(cljs.core.async.t_cljs$core$async28735.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28737){
var self__ = this;
var _28737__$1 = this;
return self__.meta28736;
}));

(cljs.core.async.t_cljs$core$async28735.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28735.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async28735.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28735.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async28735.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28735.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
}));

(cljs.core.async.t_cljs$core$async28735.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28736","meta28736",754761917,null)], null);
}));

(cljs.core.async.t_cljs$core$async28735.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async28735.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28735");

(cljs.core.async.t_cljs$core$async28735.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async28735");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28735.
 */
cljs.core.async.__GT_t_cljs$core$async28735 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async28735(f__$1,ch__$1,meta28736){
return (new cljs.core.async.t_cljs$core$async28735(f__$1,ch__$1,meta28736));
});

}

return (new cljs.core.async.t_cljs$core$async28735(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28738 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28738 = (function (p,ch,meta28739){
this.p = p;
this.ch = ch;
this.meta28739 = meta28739;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async28738.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28740,meta28739__$1){
var self__ = this;
var _28740__$1 = this;
return (new cljs.core.async.t_cljs$core$async28738(self__.p,self__.ch,meta28739__$1));
}));

(cljs.core.async.t_cljs$core$async28738.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28740){
var self__ = this;
var _28740__$1 = this;
return self__.meta28739;
}));

(cljs.core.async.t_cljs$core$async28738.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28738.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async28738.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async28738.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28738.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async28738.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28738.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async28738.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28739","meta28739",-1923473298,null)], null);
}));

(cljs.core.async.t_cljs$core$async28738.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async28738.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28738");

(cljs.core.async.t_cljs$core$async28738.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async28738");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28738.
 */
cljs.core.async.__GT_t_cljs$core$async28738 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async28738(p__$1,ch__$1,meta28739){
return (new cljs.core.async.t_cljs$core$async28738(p__$1,ch__$1,meta28739));
});

}

return (new cljs.core.async.t_cljs$core$async28738(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__28742 = arguments.length;
switch (G__28742) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27231__auto___28782 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27232__auto__ = (function (){var switch__27136__auto__ = (function (state_28763){
var state_val_28764 = (state_28763[(1)]);
if((state_val_28764 === (7))){
var inst_28759 = (state_28763[(2)]);
var state_28763__$1 = state_28763;
var statearr_28765_28783 = state_28763__$1;
(statearr_28765_28783[(2)] = inst_28759);

(statearr_28765_28783[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28764 === (1))){
var state_28763__$1 = state_28763;
var statearr_28766_28784 = state_28763__$1;
(statearr_28766_28784[(2)] = null);

(statearr_28766_28784[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28764 === (4))){
var inst_28745 = (state_28763[(7)]);
var inst_28745__$1 = (state_28763[(2)]);
var inst_28746 = (inst_28745__$1 == null);
var state_28763__$1 = (function (){var statearr_28767 = state_28763;
(statearr_28767[(7)] = inst_28745__$1);

return statearr_28767;
})();
if(cljs.core.truth_(inst_28746)){
var statearr_28768_28785 = state_28763__$1;
(statearr_28768_28785[(1)] = (5));

} else {
var statearr_28769_28786 = state_28763__$1;
(statearr_28769_28786[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28764 === (6))){
var inst_28745 = (state_28763[(7)]);
var inst_28750 = p.call(null,inst_28745);
var state_28763__$1 = state_28763;
if(cljs.core.truth_(inst_28750)){
var statearr_28770_28787 = state_28763__$1;
(statearr_28770_28787[(1)] = (8));

} else {
var statearr_28771_28788 = state_28763__$1;
(statearr_28771_28788[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28764 === (3))){
var inst_28761 = (state_28763[(2)]);
var state_28763__$1 = state_28763;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28763__$1,inst_28761);
} else {
if((state_val_28764 === (2))){
var state_28763__$1 = state_28763;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28763__$1,(4),ch);
} else {
if((state_val_28764 === (11))){
var inst_28753 = (state_28763[(2)]);
var state_28763__$1 = state_28763;
var statearr_28772_28789 = state_28763__$1;
(statearr_28772_28789[(2)] = inst_28753);

(statearr_28772_28789[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28764 === (9))){
var state_28763__$1 = state_28763;
var statearr_28773_28790 = state_28763__$1;
(statearr_28773_28790[(2)] = null);

(statearr_28773_28790[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28764 === (5))){
var inst_28748 = cljs.core.async.close_BANG_.call(null,out);
var state_28763__$1 = state_28763;
var statearr_28774_28791 = state_28763__$1;
(statearr_28774_28791[(2)] = inst_28748);

(statearr_28774_28791[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28764 === (10))){
var inst_28756 = (state_28763[(2)]);
var state_28763__$1 = (function (){var statearr_28775 = state_28763;
(statearr_28775[(8)] = inst_28756);

return statearr_28775;
})();
var statearr_28776_28792 = state_28763__$1;
(statearr_28776_28792[(2)] = null);

(statearr_28776_28792[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28764 === (8))){
var inst_28745 = (state_28763[(7)]);
var state_28763__$1 = state_28763;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28763__$1,(11),out,inst_28745);
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
});
return (function() {
var cljs$core$async$state_machine__27137__auto__ = null;
var cljs$core$async$state_machine__27137__auto____0 = (function (){
var statearr_28777 = [null,null,null,null,null,null,null,null,null];
(statearr_28777[(0)] = cljs$core$async$state_machine__27137__auto__);

(statearr_28777[(1)] = (1));

return statearr_28777;
});
var cljs$core$async$state_machine__27137__auto____1 = (function (state_28763){
while(true){
var ret_value__27138__auto__ = (function (){try{while(true){
var result__27139__auto__ = switch__27136__auto__.call(null,state_28763);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27139__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27139__auto__;
}
break;
}
}catch (e28778){if((e28778 instanceof Object)){
var ex__27140__auto__ = e28778;
var statearr_28779_28793 = state_28763;
(statearr_28779_28793[(5)] = ex__27140__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28763);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28778;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27138__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28794 = state_28763;
state_28763 = G__28794;
continue;
} else {
return ret_value__27138__auto__;
}
break;
}
});
cljs$core$async$state_machine__27137__auto__ = function(state_28763){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27137__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27137__auto____1.call(this,state_28763);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27137__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27137__auto____0;
cljs$core$async$state_machine__27137__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27137__auto____1;
return cljs$core$async$state_machine__27137__auto__;
})()
})();
var state__27233__auto__ = (function (){var statearr_28780 = f__27232__auto__.call(null);
(statearr_28780[(6)] = c__27231__auto___28782);

return statearr_28780;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27233__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__28796 = arguments.length;
switch (G__28796) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__27231__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27232__auto__ = (function (){var switch__27136__auto__ = (function (state_28859){
var state_val_28860 = (state_28859[(1)]);
if((state_val_28860 === (7))){
var inst_28855 = (state_28859[(2)]);
var state_28859__$1 = state_28859;
var statearr_28861_28899 = state_28859__$1;
(statearr_28861_28899[(2)] = inst_28855);

(statearr_28861_28899[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28860 === (20))){
var inst_28825 = (state_28859[(7)]);
var inst_28836 = (state_28859[(2)]);
var inst_28837 = cljs.core.next.call(null,inst_28825);
var inst_28811 = inst_28837;
var inst_28812 = null;
var inst_28813 = (0);
var inst_28814 = (0);
var state_28859__$1 = (function (){var statearr_28862 = state_28859;
(statearr_28862[(8)] = inst_28812);

(statearr_28862[(9)] = inst_28813);

(statearr_28862[(10)] = inst_28811);

(statearr_28862[(11)] = inst_28814);

(statearr_28862[(12)] = inst_28836);

return statearr_28862;
})();
var statearr_28863_28900 = state_28859__$1;
(statearr_28863_28900[(2)] = null);

(statearr_28863_28900[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28860 === (1))){
var state_28859__$1 = state_28859;
var statearr_28864_28901 = state_28859__$1;
(statearr_28864_28901[(2)] = null);

(statearr_28864_28901[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28860 === (4))){
var inst_28800 = (state_28859[(13)]);
var inst_28800__$1 = (state_28859[(2)]);
var inst_28801 = (inst_28800__$1 == null);
var state_28859__$1 = (function (){var statearr_28865 = state_28859;
(statearr_28865[(13)] = inst_28800__$1);

return statearr_28865;
})();
if(cljs.core.truth_(inst_28801)){
var statearr_28866_28902 = state_28859__$1;
(statearr_28866_28902[(1)] = (5));

} else {
var statearr_28867_28903 = state_28859__$1;
(statearr_28867_28903[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28860 === (15))){
var state_28859__$1 = state_28859;
var statearr_28871_28904 = state_28859__$1;
(statearr_28871_28904[(2)] = null);

(statearr_28871_28904[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28860 === (21))){
var state_28859__$1 = state_28859;
var statearr_28872_28905 = state_28859__$1;
(statearr_28872_28905[(2)] = null);

(statearr_28872_28905[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28860 === (13))){
var inst_28812 = (state_28859[(8)]);
var inst_28813 = (state_28859[(9)]);
var inst_28811 = (state_28859[(10)]);
var inst_28814 = (state_28859[(11)]);
var inst_28821 = (state_28859[(2)]);
var inst_28822 = (inst_28814 + (1));
var tmp28868 = inst_28812;
var tmp28869 = inst_28813;
var tmp28870 = inst_28811;
var inst_28811__$1 = tmp28870;
var inst_28812__$1 = tmp28868;
var inst_28813__$1 = tmp28869;
var inst_28814__$1 = inst_28822;
var state_28859__$1 = (function (){var statearr_28873 = state_28859;
(statearr_28873[(8)] = inst_28812__$1);

(statearr_28873[(9)] = inst_28813__$1);

(statearr_28873[(10)] = inst_28811__$1);

(statearr_28873[(11)] = inst_28814__$1);

(statearr_28873[(14)] = inst_28821);

return statearr_28873;
})();
var statearr_28874_28906 = state_28859__$1;
(statearr_28874_28906[(2)] = null);

(statearr_28874_28906[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28860 === (22))){
var state_28859__$1 = state_28859;
var statearr_28875_28907 = state_28859__$1;
(statearr_28875_28907[(2)] = null);

(statearr_28875_28907[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28860 === (6))){
var inst_28800 = (state_28859[(13)]);
var inst_28809 = f.call(null,inst_28800);
var inst_28810 = cljs.core.seq.call(null,inst_28809);
var inst_28811 = inst_28810;
var inst_28812 = null;
var inst_28813 = (0);
var inst_28814 = (0);
var state_28859__$1 = (function (){var statearr_28876 = state_28859;
(statearr_28876[(8)] = inst_28812);

(statearr_28876[(9)] = inst_28813);

(statearr_28876[(10)] = inst_28811);

(statearr_28876[(11)] = inst_28814);

return statearr_28876;
})();
var statearr_28877_28908 = state_28859__$1;
(statearr_28877_28908[(2)] = null);

(statearr_28877_28908[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28860 === (17))){
var inst_28825 = (state_28859[(7)]);
var inst_28829 = cljs.core.chunk_first.call(null,inst_28825);
var inst_28830 = cljs.core.chunk_rest.call(null,inst_28825);
var inst_28831 = cljs.core.count.call(null,inst_28829);
var inst_28811 = inst_28830;
var inst_28812 = inst_28829;
var inst_28813 = inst_28831;
var inst_28814 = (0);
var state_28859__$1 = (function (){var statearr_28878 = state_28859;
(statearr_28878[(8)] = inst_28812);

(statearr_28878[(9)] = inst_28813);

(statearr_28878[(10)] = inst_28811);

(statearr_28878[(11)] = inst_28814);

return statearr_28878;
})();
var statearr_28879_28909 = state_28859__$1;
(statearr_28879_28909[(2)] = null);

(statearr_28879_28909[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28860 === (3))){
var inst_28857 = (state_28859[(2)]);
var state_28859__$1 = state_28859;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28859__$1,inst_28857);
} else {
if((state_val_28860 === (12))){
var inst_28845 = (state_28859[(2)]);
var state_28859__$1 = state_28859;
var statearr_28880_28910 = state_28859__$1;
(statearr_28880_28910[(2)] = inst_28845);

(statearr_28880_28910[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28860 === (2))){
var state_28859__$1 = state_28859;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28859__$1,(4),in$);
} else {
if((state_val_28860 === (23))){
var inst_28853 = (state_28859[(2)]);
var state_28859__$1 = state_28859;
var statearr_28881_28911 = state_28859__$1;
(statearr_28881_28911[(2)] = inst_28853);

(statearr_28881_28911[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28860 === (19))){
var inst_28840 = (state_28859[(2)]);
var state_28859__$1 = state_28859;
var statearr_28882_28912 = state_28859__$1;
(statearr_28882_28912[(2)] = inst_28840);

(statearr_28882_28912[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28860 === (11))){
var inst_28825 = (state_28859[(7)]);
var inst_28811 = (state_28859[(10)]);
var inst_28825__$1 = cljs.core.seq.call(null,inst_28811);
var state_28859__$1 = (function (){var statearr_28883 = state_28859;
(statearr_28883[(7)] = inst_28825__$1);

return statearr_28883;
})();
if(inst_28825__$1){
var statearr_28884_28913 = state_28859__$1;
(statearr_28884_28913[(1)] = (14));

} else {
var statearr_28885_28914 = state_28859__$1;
(statearr_28885_28914[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28860 === (9))){
var inst_28847 = (state_28859[(2)]);
var inst_28848 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_28859__$1 = (function (){var statearr_28886 = state_28859;
(statearr_28886[(15)] = inst_28847);

return statearr_28886;
})();
if(cljs.core.truth_(inst_28848)){
var statearr_28887_28915 = state_28859__$1;
(statearr_28887_28915[(1)] = (21));

} else {
var statearr_28888_28916 = state_28859__$1;
(statearr_28888_28916[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28860 === (5))){
var inst_28803 = cljs.core.async.close_BANG_.call(null,out);
var state_28859__$1 = state_28859;
var statearr_28889_28917 = state_28859__$1;
(statearr_28889_28917[(2)] = inst_28803);

(statearr_28889_28917[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28860 === (14))){
var inst_28825 = (state_28859[(7)]);
var inst_28827 = cljs.core.chunked_seq_QMARK_.call(null,inst_28825);
var state_28859__$1 = state_28859;
if(inst_28827){
var statearr_28890_28918 = state_28859__$1;
(statearr_28890_28918[(1)] = (17));

} else {
var statearr_28891_28919 = state_28859__$1;
(statearr_28891_28919[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28860 === (16))){
var inst_28843 = (state_28859[(2)]);
var state_28859__$1 = state_28859;
var statearr_28892_28920 = state_28859__$1;
(statearr_28892_28920[(2)] = inst_28843);

(statearr_28892_28920[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28860 === (10))){
var inst_28812 = (state_28859[(8)]);
var inst_28814 = (state_28859[(11)]);
var inst_28819 = cljs.core._nth.call(null,inst_28812,inst_28814);
var state_28859__$1 = state_28859;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28859__$1,(13),out,inst_28819);
} else {
if((state_val_28860 === (18))){
var inst_28825 = (state_28859[(7)]);
var inst_28834 = cljs.core.first.call(null,inst_28825);
var state_28859__$1 = state_28859;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28859__$1,(20),out,inst_28834);
} else {
if((state_val_28860 === (8))){
var inst_28813 = (state_28859[(9)]);
var inst_28814 = (state_28859[(11)]);
var inst_28816 = (inst_28814 < inst_28813);
var inst_28817 = inst_28816;
var state_28859__$1 = state_28859;
if(cljs.core.truth_(inst_28817)){
var statearr_28893_28921 = state_28859__$1;
(statearr_28893_28921[(1)] = (10));

} else {
var statearr_28894_28922 = state_28859__$1;
(statearr_28894_28922[(1)] = (11));

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
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__27137__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__27137__auto____0 = (function (){
var statearr_28895 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28895[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__27137__auto__);

(statearr_28895[(1)] = (1));

return statearr_28895;
});
var cljs$core$async$mapcat_STAR__$_state_machine__27137__auto____1 = (function (state_28859){
while(true){
var ret_value__27138__auto__ = (function (){try{while(true){
var result__27139__auto__ = switch__27136__auto__.call(null,state_28859);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27139__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27139__auto__;
}
break;
}
}catch (e28896){if((e28896 instanceof Object)){
var ex__27140__auto__ = e28896;
var statearr_28897_28923 = state_28859;
(statearr_28897_28923[(5)] = ex__27140__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28859);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28896;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27138__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28924 = state_28859;
state_28859 = G__28924;
continue;
} else {
return ret_value__27138__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__27137__auto__ = function(state_28859){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__27137__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__27137__auto____1.call(this,state_28859);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__27137__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__27137__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__27137__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__27137__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__27137__auto__;
})()
})();
var state__27233__auto__ = (function (){var statearr_28898 = f__27232__auto__.call(null);
(statearr_28898[(6)] = c__27231__auto__);

return statearr_28898;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27233__auto__);
}));

return c__27231__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__28926 = arguments.length;
switch (G__28926) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__28929 = arguments.length;
switch (G__28929) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__28932 = arguments.length;
switch (G__28932) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27231__auto___28979 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27232__auto__ = (function (){var switch__27136__auto__ = (function (state_28956){
var state_val_28957 = (state_28956[(1)]);
if((state_val_28957 === (7))){
var inst_28951 = (state_28956[(2)]);
var state_28956__$1 = state_28956;
var statearr_28958_28980 = state_28956__$1;
(statearr_28958_28980[(2)] = inst_28951);

(statearr_28958_28980[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28957 === (1))){
var inst_28933 = null;
var state_28956__$1 = (function (){var statearr_28959 = state_28956;
(statearr_28959[(7)] = inst_28933);

return statearr_28959;
})();
var statearr_28960_28981 = state_28956__$1;
(statearr_28960_28981[(2)] = null);

(statearr_28960_28981[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28957 === (4))){
var inst_28936 = (state_28956[(8)]);
var inst_28936__$1 = (state_28956[(2)]);
var inst_28937 = (inst_28936__$1 == null);
var inst_28938 = cljs.core.not.call(null,inst_28937);
var state_28956__$1 = (function (){var statearr_28961 = state_28956;
(statearr_28961[(8)] = inst_28936__$1);

return statearr_28961;
})();
if(inst_28938){
var statearr_28962_28982 = state_28956__$1;
(statearr_28962_28982[(1)] = (5));

} else {
var statearr_28963_28983 = state_28956__$1;
(statearr_28963_28983[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28957 === (6))){
var state_28956__$1 = state_28956;
var statearr_28964_28984 = state_28956__$1;
(statearr_28964_28984[(2)] = null);

(statearr_28964_28984[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28957 === (3))){
var inst_28953 = (state_28956[(2)]);
var inst_28954 = cljs.core.async.close_BANG_.call(null,out);
var state_28956__$1 = (function (){var statearr_28965 = state_28956;
(statearr_28965[(9)] = inst_28953);

return statearr_28965;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28956__$1,inst_28954);
} else {
if((state_val_28957 === (2))){
var state_28956__$1 = state_28956;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28956__$1,(4),ch);
} else {
if((state_val_28957 === (11))){
var inst_28936 = (state_28956[(8)]);
var inst_28945 = (state_28956[(2)]);
var inst_28933 = inst_28936;
var state_28956__$1 = (function (){var statearr_28966 = state_28956;
(statearr_28966[(10)] = inst_28945);

(statearr_28966[(7)] = inst_28933);

return statearr_28966;
})();
var statearr_28967_28985 = state_28956__$1;
(statearr_28967_28985[(2)] = null);

(statearr_28967_28985[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28957 === (9))){
var inst_28936 = (state_28956[(8)]);
var state_28956__$1 = state_28956;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28956__$1,(11),out,inst_28936);
} else {
if((state_val_28957 === (5))){
var inst_28936 = (state_28956[(8)]);
var inst_28933 = (state_28956[(7)]);
var inst_28940 = cljs.core._EQ_.call(null,inst_28936,inst_28933);
var state_28956__$1 = state_28956;
if(inst_28940){
var statearr_28969_28986 = state_28956__$1;
(statearr_28969_28986[(1)] = (8));

} else {
var statearr_28970_28987 = state_28956__$1;
(statearr_28970_28987[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28957 === (10))){
var inst_28948 = (state_28956[(2)]);
var state_28956__$1 = state_28956;
var statearr_28971_28988 = state_28956__$1;
(statearr_28971_28988[(2)] = inst_28948);

(statearr_28971_28988[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28957 === (8))){
var inst_28933 = (state_28956[(7)]);
var tmp28968 = inst_28933;
var inst_28933__$1 = tmp28968;
var state_28956__$1 = (function (){var statearr_28972 = state_28956;
(statearr_28972[(7)] = inst_28933__$1);

return statearr_28972;
})();
var statearr_28973_28989 = state_28956__$1;
(statearr_28973_28989[(2)] = null);

(statearr_28973_28989[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__27137__auto__ = null;
var cljs$core$async$state_machine__27137__auto____0 = (function (){
var statearr_28974 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28974[(0)] = cljs$core$async$state_machine__27137__auto__);

(statearr_28974[(1)] = (1));

return statearr_28974;
});
var cljs$core$async$state_machine__27137__auto____1 = (function (state_28956){
while(true){
var ret_value__27138__auto__ = (function (){try{while(true){
var result__27139__auto__ = switch__27136__auto__.call(null,state_28956);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27139__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27139__auto__;
}
break;
}
}catch (e28975){if((e28975 instanceof Object)){
var ex__27140__auto__ = e28975;
var statearr_28976_28990 = state_28956;
(statearr_28976_28990[(5)] = ex__27140__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28956);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28975;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27138__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28991 = state_28956;
state_28956 = G__28991;
continue;
} else {
return ret_value__27138__auto__;
}
break;
}
});
cljs$core$async$state_machine__27137__auto__ = function(state_28956){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27137__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27137__auto____1.call(this,state_28956);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27137__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27137__auto____0;
cljs$core$async$state_machine__27137__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27137__auto____1;
return cljs$core$async$state_machine__27137__auto__;
})()
})();
var state__27233__auto__ = (function (){var statearr_28977 = f__27232__auto__.call(null);
(statearr_28977[(6)] = c__27231__auto___28979);

return statearr_28977;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27233__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__28993 = arguments.length;
switch (G__28993) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27231__auto___29059 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27232__auto__ = (function (){var switch__27136__auto__ = (function (state_29031){
var state_val_29032 = (state_29031[(1)]);
if((state_val_29032 === (7))){
var inst_29027 = (state_29031[(2)]);
var state_29031__$1 = state_29031;
var statearr_29033_29060 = state_29031__$1;
(statearr_29033_29060[(2)] = inst_29027);

(statearr_29033_29060[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29032 === (1))){
var inst_28994 = (new Array(n));
var inst_28995 = inst_28994;
var inst_28996 = (0);
var state_29031__$1 = (function (){var statearr_29034 = state_29031;
(statearr_29034[(7)] = inst_28996);

(statearr_29034[(8)] = inst_28995);

return statearr_29034;
})();
var statearr_29035_29061 = state_29031__$1;
(statearr_29035_29061[(2)] = null);

(statearr_29035_29061[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29032 === (4))){
var inst_28999 = (state_29031[(9)]);
var inst_28999__$1 = (state_29031[(2)]);
var inst_29000 = (inst_28999__$1 == null);
var inst_29001 = cljs.core.not.call(null,inst_29000);
var state_29031__$1 = (function (){var statearr_29036 = state_29031;
(statearr_29036[(9)] = inst_28999__$1);

return statearr_29036;
})();
if(inst_29001){
var statearr_29037_29062 = state_29031__$1;
(statearr_29037_29062[(1)] = (5));

} else {
var statearr_29038_29063 = state_29031__$1;
(statearr_29038_29063[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29032 === (15))){
var inst_29021 = (state_29031[(2)]);
var state_29031__$1 = state_29031;
var statearr_29039_29064 = state_29031__$1;
(statearr_29039_29064[(2)] = inst_29021);

(statearr_29039_29064[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29032 === (13))){
var state_29031__$1 = state_29031;
var statearr_29040_29065 = state_29031__$1;
(statearr_29040_29065[(2)] = null);

(statearr_29040_29065[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29032 === (6))){
var inst_28996 = (state_29031[(7)]);
var inst_29017 = (inst_28996 > (0));
var state_29031__$1 = state_29031;
if(cljs.core.truth_(inst_29017)){
var statearr_29041_29066 = state_29031__$1;
(statearr_29041_29066[(1)] = (12));

} else {
var statearr_29042_29067 = state_29031__$1;
(statearr_29042_29067[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29032 === (3))){
var inst_29029 = (state_29031[(2)]);
var state_29031__$1 = state_29031;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29031__$1,inst_29029);
} else {
if((state_val_29032 === (12))){
var inst_28995 = (state_29031[(8)]);
var inst_29019 = cljs.core.vec.call(null,inst_28995);
var state_29031__$1 = state_29031;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29031__$1,(15),out,inst_29019);
} else {
if((state_val_29032 === (2))){
var state_29031__$1 = state_29031;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29031__$1,(4),ch);
} else {
if((state_val_29032 === (11))){
var inst_29011 = (state_29031[(2)]);
var inst_29012 = (new Array(n));
var inst_28995 = inst_29012;
var inst_28996 = (0);
var state_29031__$1 = (function (){var statearr_29043 = state_29031;
(statearr_29043[(7)] = inst_28996);

(statearr_29043[(10)] = inst_29011);

(statearr_29043[(8)] = inst_28995);

return statearr_29043;
})();
var statearr_29044_29068 = state_29031__$1;
(statearr_29044_29068[(2)] = null);

(statearr_29044_29068[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29032 === (9))){
var inst_28995 = (state_29031[(8)]);
var inst_29009 = cljs.core.vec.call(null,inst_28995);
var state_29031__$1 = state_29031;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29031__$1,(11),out,inst_29009);
} else {
if((state_val_29032 === (5))){
var inst_28996 = (state_29031[(7)]);
var inst_28995 = (state_29031[(8)]);
var inst_29004 = (state_29031[(11)]);
var inst_28999 = (state_29031[(9)]);
var inst_29003 = (inst_28995[inst_28996] = inst_28999);
var inst_29004__$1 = (inst_28996 + (1));
var inst_29005 = (inst_29004__$1 < n);
var state_29031__$1 = (function (){var statearr_29045 = state_29031;
(statearr_29045[(11)] = inst_29004__$1);

(statearr_29045[(12)] = inst_29003);

return statearr_29045;
})();
if(cljs.core.truth_(inst_29005)){
var statearr_29046_29069 = state_29031__$1;
(statearr_29046_29069[(1)] = (8));

} else {
var statearr_29047_29070 = state_29031__$1;
(statearr_29047_29070[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29032 === (14))){
var inst_29024 = (state_29031[(2)]);
var inst_29025 = cljs.core.async.close_BANG_.call(null,out);
var state_29031__$1 = (function (){var statearr_29049 = state_29031;
(statearr_29049[(13)] = inst_29024);

return statearr_29049;
})();
var statearr_29050_29071 = state_29031__$1;
(statearr_29050_29071[(2)] = inst_29025);

(statearr_29050_29071[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29032 === (10))){
var inst_29015 = (state_29031[(2)]);
var state_29031__$1 = state_29031;
var statearr_29051_29072 = state_29031__$1;
(statearr_29051_29072[(2)] = inst_29015);

(statearr_29051_29072[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29032 === (8))){
var inst_28995 = (state_29031[(8)]);
var inst_29004 = (state_29031[(11)]);
var tmp29048 = inst_28995;
var inst_28995__$1 = tmp29048;
var inst_28996 = inst_29004;
var state_29031__$1 = (function (){var statearr_29052 = state_29031;
(statearr_29052[(7)] = inst_28996);

(statearr_29052[(8)] = inst_28995__$1);

return statearr_29052;
})();
var statearr_29053_29073 = state_29031__$1;
(statearr_29053_29073[(2)] = null);

(statearr_29053_29073[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__27137__auto__ = null;
var cljs$core$async$state_machine__27137__auto____0 = (function (){
var statearr_29054 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29054[(0)] = cljs$core$async$state_machine__27137__auto__);

(statearr_29054[(1)] = (1));

return statearr_29054;
});
var cljs$core$async$state_machine__27137__auto____1 = (function (state_29031){
while(true){
var ret_value__27138__auto__ = (function (){try{while(true){
var result__27139__auto__ = switch__27136__auto__.call(null,state_29031);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27139__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27139__auto__;
}
break;
}
}catch (e29055){if((e29055 instanceof Object)){
var ex__27140__auto__ = e29055;
var statearr_29056_29074 = state_29031;
(statearr_29056_29074[(5)] = ex__27140__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29031);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29055;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27138__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29075 = state_29031;
state_29031 = G__29075;
continue;
} else {
return ret_value__27138__auto__;
}
break;
}
});
cljs$core$async$state_machine__27137__auto__ = function(state_29031){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27137__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27137__auto____1.call(this,state_29031);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27137__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27137__auto____0;
cljs$core$async$state_machine__27137__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27137__auto____1;
return cljs$core$async$state_machine__27137__auto__;
})()
})();
var state__27233__auto__ = (function (){var statearr_29057 = f__27232__auto__.call(null);
(statearr_29057[(6)] = c__27231__auto___29059);

return statearr_29057;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27233__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__29077 = arguments.length;
switch (G__29077) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27231__auto___29147 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27232__auto__ = (function (){var switch__27136__auto__ = (function (state_29119){
var state_val_29120 = (state_29119[(1)]);
if((state_val_29120 === (7))){
var inst_29115 = (state_29119[(2)]);
var state_29119__$1 = state_29119;
var statearr_29121_29148 = state_29119__$1;
(statearr_29121_29148[(2)] = inst_29115);

(statearr_29121_29148[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29120 === (1))){
var inst_29078 = [];
var inst_29079 = inst_29078;
var inst_29080 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_29119__$1 = (function (){var statearr_29122 = state_29119;
(statearr_29122[(7)] = inst_29080);

(statearr_29122[(8)] = inst_29079);

return statearr_29122;
})();
var statearr_29123_29149 = state_29119__$1;
(statearr_29123_29149[(2)] = null);

(statearr_29123_29149[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29120 === (4))){
var inst_29083 = (state_29119[(9)]);
var inst_29083__$1 = (state_29119[(2)]);
var inst_29084 = (inst_29083__$1 == null);
var inst_29085 = cljs.core.not.call(null,inst_29084);
var state_29119__$1 = (function (){var statearr_29124 = state_29119;
(statearr_29124[(9)] = inst_29083__$1);

return statearr_29124;
})();
if(inst_29085){
var statearr_29125_29150 = state_29119__$1;
(statearr_29125_29150[(1)] = (5));

} else {
var statearr_29126_29151 = state_29119__$1;
(statearr_29126_29151[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29120 === (15))){
var inst_29109 = (state_29119[(2)]);
var state_29119__$1 = state_29119;
var statearr_29127_29152 = state_29119__$1;
(statearr_29127_29152[(2)] = inst_29109);

(statearr_29127_29152[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29120 === (13))){
var state_29119__$1 = state_29119;
var statearr_29128_29153 = state_29119__$1;
(statearr_29128_29153[(2)] = null);

(statearr_29128_29153[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29120 === (6))){
var inst_29079 = (state_29119[(8)]);
var inst_29104 = inst_29079.length;
var inst_29105 = (inst_29104 > (0));
var state_29119__$1 = state_29119;
if(cljs.core.truth_(inst_29105)){
var statearr_29129_29154 = state_29119__$1;
(statearr_29129_29154[(1)] = (12));

} else {
var statearr_29130_29155 = state_29119__$1;
(statearr_29130_29155[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29120 === (3))){
var inst_29117 = (state_29119[(2)]);
var state_29119__$1 = state_29119;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29119__$1,inst_29117);
} else {
if((state_val_29120 === (12))){
var inst_29079 = (state_29119[(8)]);
var inst_29107 = cljs.core.vec.call(null,inst_29079);
var state_29119__$1 = state_29119;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29119__$1,(15),out,inst_29107);
} else {
if((state_val_29120 === (2))){
var state_29119__$1 = state_29119;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29119__$1,(4),ch);
} else {
if((state_val_29120 === (11))){
var inst_29083 = (state_29119[(9)]);
var inst_29087 = (state_29119[(10)]);
var inst_29097 = (state_29119[(2)]);
var inst_29098 = [];
var inst_29099 = inst_29098.push(inst_29083);
var inst_29079 = inst_29098;
var inst_29080 = inst_29087;
var state_29119__$1 = (function (){var statearr_29131 = state_29119;
(statearr_29131[(7)] = inst_29080);

(statearr_29131[(11)] = inst_29099);

(statearr_29131[(12)] = inst_29097);

(statearr_29131[(8)] = inst_29079);

return statearr_29131;
})();
var statearr_29132_29156 = state_29119__$1;
(statearr_29132_29156[(2)] = null);

(statearr_29132_29156[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29120 === (9))){
var inst_29079 = (state_29119[(8)]);
var inst_29095 = cljs.core.vec.call(null,inst_29079);
var state_29119__$1 = state_29119;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29119__$1,(11),out,inst_29095);
} else {
if((state_val_29120 === (5))){
var inst_29083 = (state_29119[(9)]);
var inst_29080 = (state_29119[(7)]);
var inst_29087 = (state_29119[(10)]);
var inst_29087__$1 = f.call(null,inst_29083);
var inst_29088 = cljs.core._EQ_.call(null,inst_29087__$1,inst_29080);
var inst_29089 = cljs.core.keyword_identical_QMARK_.call(null,inst_29080,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_29090 = ((inst_29088) || (inst_29089));
var state_29119__$1 = (function (){var statearr_29133 = state_29119;
(statearr_29133[(10)] = inst_29087__$1);

return statearr_29133;
})();
if(cljs.core.truth_(inst_29090)){
var statearr_29134_29157 = state_29119__$1;
(statearr_29134_29157[(1)] = (8));

} else {
var statearr_29135_29158 = state_29119__$1;
(statearr_29135_29158[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29120 === (14))){
var inst_29112 = (state_29119[(2)]);
var inst_29113 = cljs.core.async.close_BANG_.call(null,out);
var state_29119__$1 = (function (){var statearr_29137 = state_29119;
(statearr_29137[(13)] = inst_29112);

return statearr_29137;
})();
var statearr_29138_29159 = state_29119__$1;
(statearr_29138_29159[(2)] = inst_29113);

(statearr_29138_29159[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29120 === (10))){
var inst_29102 = (state_29119[(2)]);
var state_29119__$1 = state_29119;
var statearr_29139_29160 = state_29119__$1;
(statearr_29139_29160[(2)] = inst_29102);

(statearr_29139_29160[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29120 === (8))){
var inst_29083 = (state_29119[(9)]);
var inst_29087 = (state_29119[(10)]);
var inst_29079 = (state_29119[(8)]);
var inst_29092 = inst_29079.push(inst_29083);
var tmp29136 = inst_29079;
var inst_29079__$1 = tmp29136;
var inst_29080 = inst_29087;
var state_29119__$1 = (function (){var statearr_29140 = state_29119;
(statearr_29140[(7)] = inst_29080);

(statearr_29140[(8)] = inst_29079__$1);

(statearr_29140[(14)] = inst_29092);

return statearr_29140;
})();
var statearr_29141_29161 = state_29119__$1;
(statearr_29141_29161[(2)] = null);

(statearr_29141_29161[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__27137__auto__ = null;
var cljs$core$async$state_machine__27137__auto____0 = (function (){
var statearr_29142 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29142[(0)] = cljs$core$async$state_machine__27137__auto__);

(statearr_29142[(1)] = (1));

return statearr_29142;
});
var cljs$core$async$state_machine__27137__auto____1 = (function (state_29119){
while(true){
var ret_value__27138__auto__ = (function (){try{while(true){
var result__27139__auto__ = switch__27136__auto__.call(null,state_29119);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27139__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27139__auto__;
}
break;
}
}catch (e29143){if((e29143 instanceof Object)){
var ex__27140__auto__ = e29143;
var statearr_29144_29162 = state_29119;
(statearr_29144_29162[(5)] = ex__27140__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29119);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29143;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27138__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29163 = state_29119;
state_29119 = G__29163;
continue;
} else {
return ret_value__27138__auto__;
}
break;
}
});
cljs$core$async$state_machine__27137__auto__ = function(state_29119){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27137__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27137__auto____1.call(this,state_29119);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27137__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27137__auto____0;
cljs$core$async$state_machine__27137__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27137__auto____1;
return cljs$core$async$state_machine__27137__auto__;
})()
})();
var state__27233__auto__ = (function (){var statearr_29145 = f__27232__auto__.call(null);
(statearr_29145[(6)] = c__27231__auto___29147);

return statearr_29145;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27233__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=async.js.map?rel=1605638685457
