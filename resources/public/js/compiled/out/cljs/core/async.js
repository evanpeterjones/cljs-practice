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
var G__27124 = arguments.length;
switch (G__27124) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27125 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27125 = (function (f,blockable,meta27126){
this.f = f;
this.blockable = blockable;
this.meta27126 = meta27126;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async27125.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27127,meta27126__$1){
var self__ = this;
var _27127__$1 = this;
return (new cljs.core.async.t_cljs$core$async27125(self__.f,self__.blockable,meta27126__$1));
}));

(cljs.core.async.t_cljs$core$async27125.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27127){
var self__ = this;
var _27127__$1 = this;
return self__.meta27126;
}));

(cljs.core.async.t_cljs$core$async27125.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27125.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async27125.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async27125.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async27125.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta27126","meta27126",1488104791,null)], null);
}));

(cljs.core.async.t_cljs$core$async27125.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async27125.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27125");

(cljs.core.async.t_cljs$core$async27125.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async27125");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27125.
 */
cljs.core.async.__GT_t_cljs$core$async27125 = (function cljs$core$async$__GT_t_cljs$core$async27125(f__$1,blockable__$1,meta27126){
return (new cljs.core.async.t_cljs$core$async27125(f__$1,blockable__$1,meta27126));
});

}

return (new cljs.core.async.t_cljs$core$async27125(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__27131 = arguments.length;
switch (G__27131) {
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
var G__27134 = arguments.length;
switch (G__27134) {
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
var G__27137 = arguments.length;
switch (G__27137) {
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
var val_27139 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_27139);
} else {
cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,val_27139);
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
var G__27141 = arguments.length;
switch (G__27141) {
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
var n__4613__auto___27143 = n;
var x_27144 = (0);
while(true){
if((x_27144 < n__4613__auto___27143)){
(a[x_27144] = x_27144);

var G__27145 = (x_27144 + (1));
x_27144 = G__27145;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27146 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27146 = (function (flag,meta27147){
this.flag = flag;
this.meta27147 = meta27147;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async27146.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27148,meta27147__$1){
var self__ = this;
var _27148__$1 = this;
return (new cljs.core.async.t_cljs$core$async27146(self__.flag,meta27147__$1));
}));

(cljs.core.async.t_cljs$core$async27146.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27148){
var self__ = this;
var _27148__$1 = this;
return self__.meta27147;
}));

(cljs.core.async.t_cljs$core$async27146.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27146.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async27146.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async27146.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async27146.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta27147","meta27147",-577210475,null)], null);
}));

(cljs.core.async.t_cljs$core$async27146.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async27146.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27146");

(cljs.core.async.t_cljs$core$async27146.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async27146");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27146.
 */
cljs.core.async.__GT_t_cljs$core$async27146 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async27146(flag__$1,meta27147){
return (new cljs.core.async.t_cljs$core$async27146(flag__$1,meta27147));
});

}

return (new cljs.core.async.t_cljs$core$async27146(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27149 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27149 = (function (flag,cb,meta27150){
this.flag = flag;
this.cb = cb;
this.meta27150 = meta27150;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async27149.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27151,meta27150__$1){
var self__ = this;
var _27151__$1 = this;
return (new cljs.core.async.t_cljs$core$async27149(self__.flag,self__.cb,meta27150__$1));
}));

(cljs.core.async.t_cljs$core$async27149.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27151){
var self__ = this;
var _27151__$1 = this;
return self__.meta27150;
}));

(cljs.core.async.t_cljs$core$async27149.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27149.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async27149.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async27149.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async27149.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta27150","meta27150",454359167,null)], null);
}));

(cljs.core.async.t_cljs$core$async27149.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async27149.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27149");

(cljs.core.async.t_cljs$core$async27149.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async27149");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27149.
 */
cljs.core.async.__GT_t_cljs$core$async27149 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async27149(flag__$1,cb__$1,meta27150){
return (new cljs.core.async.t_cljs$core$async27149(flag__$1,cb__$1,meta27150));
});

}

return (new cljs.core.async.t_cljs$core$async27149(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__27152_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27152_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__27153_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27153_SHARP_,port], null));
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
var G__27154 = (i + (1));
i = G__27154;
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
var len__4736__auto___27160 = arguments.length;
var i__4737__auto___27161 = (0);
while(true){
if((i__4737__auto___27161 < len__4736__auto___27160)){
args__4742__auto__.push((arguments[i__4737__auto___27161]));

var G__27162 = (i__4737__auto___27161 + (1));
i__4737__auto___27161 = G__27162;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__27157){
var map__27158 = p__27157;
var map__27158__$1 = (((((!((map__27158 == null))))?(((((map__27158.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27158.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27158):map__27158);
var opts = map__27158__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq27155){
var G__27156 = cljs.core.first.call(null,seq27155);
var seq27155__$1 = cljs.core.next.call(null,seq27155);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27156,seq27155__$1);
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
var G__27164 = arguments.length;
switch (G__27164) {
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
var c__27064__auto___27210 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27065__auto__ = (function (){var switch__26969__auto__ = (function (state_27188){
var state_val_27189 = (state_27188[(1)]);
if((state_val_27189 === (7))){
var inst_27184 = (state_27188[(2)]);
var state_27188__$1 = state_27188;
var statearr_27190_27211 = state_27188__$1;
(statearr_27190_27211[(2)] = inst_27184);

(statearr_27190_27211[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27189 === (1))){
var state_27188__$1 = state_27188;
var statearr_27191_27212 = state_27188__$1;
(statearr_27191_27212[(2)] = null);

(statearr_27191_27212[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27189 === (4))){
var inst_27167 = (state_27188[(7)]);
var inst_27167__$1 = (state_27188[(2)]);
var inst_27168 = (inst_27167__$1 == null);
var state_27188__$1 = (function (){var statearr_27192 = state_27188;
(statearr_27192[(7)] = inst_27167__$1);

return statearr_27192;
})();
if(cljs.core.truth_(inst_27168)){
var statearr_27193_27213 = state_27188__$1;
(statearr_27193_27213[(1)] = (5));

} else {
var statearr_27194_27214 = state_27188__$1;
(statearr_27194_27214[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27189 === (13))){
var state_27188__$1 = state_27188;
var statearr_27195_27215 = state_27188__$1;
(statearr_27195_27215[(2)] = null);

(statearr_27195_27215[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27189 === (6))){
var inst_27167 = (state_27188[(7)]);
var state_27188__$1 = state_27188;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27188__$1,(11),to,inst_27167);
} else {
if((state_val_27189 === (3))){
var inst_27186 = (state_27188[(2)]);
var state_27188__$1 = state_27188;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27188__$1,inst_27186);
} else {
if((state_val_27189 === (12))){
var state_27188__$1 = state_27188;
var statearr_27196_27216 = state_27188__$1;
(statearr_27196_27216[(2)] = null);

(statearr_27196_27216[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27189 === (2))){
var state_27188__$1 = state_27188;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27188__$1,(4),from);
} else {
if((state_val_27189 === (11))){
var inst_27177 = (state_27188[(2)]);
var state_27188__$1 = state_27188;
if(cljs.core.truth_(inst_27177)){
var statearr_27197_27217 = state_27188__$1;
(statearr_27197_27217[(1)] = (12));

} else {
var statearr_27198_27218 = state_27188__$1;
(statearr_27198_27218[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27189 === (9))){
var state_27188__$1 = state_27188;
var statearr_27199_27219 = state_27188__$1;
(statearr_27199_27219[(2)] = null);

(statearr_27199_27219[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27189 === (5))){
var state_27188__$1 = state_27188;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27200_27220 = state_27188__$1;
(statearr_27200_27220[(1)] = (8));

} else {
var statearr_27201_27221 = state_27188__$1;
(statearr_27201_27221[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27189 === (14))){
var inst_27182 = (state_27188[(2)]);
var state_27188__$1 = state_27188;
var statearr_27202_27222 = state_27188__$1;
(statearr_27202_27222[(2)] = inst_27182);

(statearr_27202_27222[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27189 === (10))){
var inst_27174 = (state_27188[(2)]);
var state_27188__$1 = state_27188;
var statearr_27203_27223 = state_27188__$1;
(statearr_27203_27223[(2)] = inst_27174);

(statearr_27203_27223[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27189 === (8))){
var inst_27171 = cljs.core.async.close_BANG_.call(null,to);
var state_27188__$1 = state_27188;
var statearr_27204_27224 = state_27188__$1;
(statearr_27204_27224[(2)] = inst_27171);

(statearr_27204_27224[(1)] = (10));


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
var cljs$core$async$state_machine__26970__auto__ = null;
var cljs$core$async$state_machine__26970__auto____0 = (function (){
var statearr_27205 = [null,null,null,null,null,null,null,null];
(statearr_27205[(0)] = cljs$core$async$state_machine__26970__auto__);

(statearr_27205[(1)] = (1));

return statearr_27205;
});
var cljs$core$async$state_machine__26970__auto____1 = (function (state_27188){
while(true){
var ret_value__26971__auto__ = (function (){try{while(true){
var result__26972__auto__ = switch__26969__auto__.call(null,state_27188);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26972__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26972__auto__;
}
break;
}
}catch (e27206){if((e27206 instanceof Object)){
var ex__26973__auto__ = e27206;
var statearr_27207_27225 = state_27188;
(statearr_27207_27225[(5)] = ex__26973__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27188);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27206;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26971__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27226 = state_27188;
state_27188 = G__27226;
continue;
} else {
return ret_value__26971__auto__;
}
break;
}
});
cljs$core$async$state_machine__26970__auto__ = function(state_27188){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26970__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26970__auto____1.call(this,state_27188);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26970__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26970__auto____0;
cljs$core$async$state_machine__26970__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26970__auto____1;
return cljs$core$async$state_machine__26970__auto__;
})()
})();
var state__27066__auto__ = (function (){var statearr_27208 = f__27065__auto__.call(null);
(statearr_27208[(6)] = c__27064__auto___27210);

return statearr_27208;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27066__auto__);
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
var process = (function (p__27227){
var vec__27228 = p__27227;
var v = cljs.core.nth.call(null,vec__27228,(0),null);
var p = cljs.core.nth.call(null,vec__27228,(1),null);
var job = vec__27228;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__27064__auto___27399 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27065__auto__ = (function (){var switch__26969__auto__ = (function (state_27235){
var state_val_27236 = (state_27235[(1)]);
if((state_val_27236 === (1))){
var state_27235__$1 = state_27235;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27235__$1,(2),res,v);
} else {
if((state_val_27236 === (2))){
var inst_27232 = (state_27235[(2)]);
var inst_27233 = cljs.core.async.close_BANG_.call(null,res);
var state_27235__$1 = (function (){var statearr_27237 = state_27235;
(statearr_27237[(7)] = inst_27232);

return statearr_27237;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27235__$1,inst_27233);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26970__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26970__auto____0 = (function (){
var statearr_27238 = [null,null,null,null,null,null,null,null];
(statearr_27238[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26970__auto__);

(statearr_27238[(1)] = (1));

return statearr_27238;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26970__auto____1 = (function (state_27235){
while(true){
var ret_value__26971__auto__ = (function (){try{while(true){
var result__26972__auto__ = switch__26969__auto__.call(null,state_27235);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26972__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26972__auto__;
}
break;
}
}catch (e27239){if((e27239 instanceof Object)){
var ex__26973__auto__ = e27239;
var statearr_27240_27400 = state_27235;
(statearr_27240_27400[(5)] = ex__26973__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27235);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27239;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26971__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27401 = state_27235;
state_27235 = G__27401;
continue;
} else {
return ret_value__26971__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26970__auto__ = function(state_27235){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26970__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26970__auto____1.call(this,state_27235);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26970__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26970__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26970__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26970__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26970__auto__;
})()
})();
var state__27066__auto__ = (function (){var statearr_27241 = f__27065__auto__.call(null);
(statearr_27241[(6)] = c__27064__auto___27399);

return statearr_27241;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27066__auto__);
}));


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});
var async = (function (p__27242){
var vec__27243 = p__27242;
var v = cljs.core.nth.call(null,vec__27243,(0),null);
var p = cljs.core.nth.call(null,vec__27243,(1),null);
var job = vec__27243;
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
var n__4613__auto___27402 = n;
var __27403 = (0);
while(true){
if((__27403 < n__4613__auto___27402)){
var G__27246_27404 = type;
var G__27246_27405__$1 = (((G__27246_27404 instanceof cljs.core.Keyword))?G__27246_27404.fqn:null);
switch (G__27246_27405__$1) {
case "compute":
var c__27064__auto___27407 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__27403,c__27064__auto___27407,G__27246_27404,G__27246_27405__$1,n__4613__auto___27402,jobs,results,process,async){
return (function (){
var f__27065__auto__ = (function (){var switch__26969__auto__ = ((function (__27403,c__27064__auto___27407,G__27246_27404,G__27246_27405__$1,n__4613__auto___27402,jobs,results,process,async){
return (function (state_27259){
var state_val_27260 = (state_27259[(1)]);
if((state_val_27260 === (1))){
var state_27259__$1 = state_27259;
var statearr_27261_27408 = state_27259__$1;
(statearr_27261_27408[(2)] = null);

(statearr_27261_27408[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27260 === (2))){
var state_27259__$1 = state_27259;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27259__$1,(4),jobs);
} else {
if((state_val_27260 === (3))){
var inst_27257 = (state_27259[(2)]);
var state_27259__$1 = state_27259;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27259__$1,inst_27257);
} else {
if((state_val_27260 === (4))){
var inst_27249 = (state_27259[(2)]);
var inst_27250 = process.call(null,inst_27249);
var state_27259__$1 = state_27259;
if(cljs.core.truth_(inst_27250)){
var statearr_27262_27409 = state_27259__$1;
(statearr_27262_27409[(1)] = (5));

} else {
var statearr_27263_27410 = state_27259__$1;
(statearr_27263_27410[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27260 === (5))){
var state_27259__$1 = state_27259;
var statearr_27264_27411 = state_27259__$1;
(statearr_27264_27411[(2)] = null);

(statearr_27264_27411[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27260 === (6))){
var state_27259__$1 = state_27259;
var statearr_27265_27412 = state_27259__$1;
(statearr_27265_27412[(2)] = null);

(statearr_27265_27412[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27260 === (7))){
var inst_27255 = (state_27259[(2)]);
var state_27259__$1 = state_27259;
var statearr_27266_27413 = state_27259__$1;
(statearr_27266_27413[(2)] = inst_27255);

(statearr_27266_27413[(1)] = (3));


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
});})(__27403,c__27064__auto___27407,G__27246_27404,G__27246_27405__$1,n__4613__auto___27402,jobs,results,process,async))
;
return ((function (__27403,switch__26969__auto__,c__27064__auto___27407,G__27246_27404,G__27246_27405__$1,n__4613__auto___27402,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26970__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26970__auto____0 = (function (){
var statearr_27267 = [null,null,null,null,null,null,null];
(statearr_27267[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26970__auto__);

(statearr_27267[(1)] = (1));

return statearr_27267;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26970__auto____1 = (function (state_27259){
while(true){
var ret_value__26971__auto__ = (function (){try{while(true){
var result__26972__auto__ = switch__26969__auto__.call(null,state_27259);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26972__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26972__auto__;
}
break;
}
}catch (e27268){if((e27268 instanceof Object)){
var ex__26973__auto__ = e27268;
var statearr_27269_27414 = state_27259;
(statearr_27269_27414[(5)] = ex__26973__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27259);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27268;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26971__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27415 = state_27259;
state_27259 = G__27415;
continue;
} else {
return ret_value__26971__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26970__auto__ = function(state_27259){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26970__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26970__auto____1.call(this,state_27259);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26970__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26970__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26970__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26970__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26970__auto__;
})()
;})(__27403,switch__26969__auto__,c__27064__auto___27407,G__27246_27404,G__27246_27405__$1,n__4613__auto___27402,jobs,results,process,async))
})();
var state__27066__auto__ = (function (){var statearr_27270 = f__27065__auto__.call(null);
(statearr_27270[(6)] = c__27064__auto___27407);

return statearr_27270;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27066__auto__);
});})(__27403,c__27064__auto___27407,G__27246_27404,G__27246_27405__$1,n__4613__auto___27402,jobs,results,process,async))
);


break;
case "async":
var c__27064__auto___27416 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__27403,c__27064__auto___27416,G__27246_27404,G__27246_27405__$1,n__4613__auto___27402,jobs,results,process,async){
return (function (){
var f__27065__auto__ = (function (){var switch__26969__auto__ = ((function (__27403,c__27064__auto___27416,G__27246_27404,G__27246_27405__$1,n__4613__auto___27402,jobs,results,process,async){
return (function (state_27283){
var state_val_27284 = (state_27283[(1)]);
if((state_val_27284 === (1))){
var state_27283__$1 = state_27283;
var statearr_27285_27417 = state_27283__$1;
(statearr_27285_27417[(2)] = null);

(statearr_27285_27417[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27284 === (2))){
var state_27283__$1 = state_27283;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27283__$1,(4),jobs);
} else {
if((state_val_27284 === (3))){
var inst_27281 = (state_27283[(2)]);
var state_27283__$1 = state_27283;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27283__$1,inst_27281);
} else {
if((state_val_27284 === (4))){
var inst_27273 = (state_27283[(2)]);
var inst_27274 = async.call(null,inst_27273);
var state_27283__$1 = state_27283;
if(cljs.core.truth_(inst_27274)){
var statearr_27286_27418 = state_27283__$1;
(statearr_27286_27418[(1)] = (5));

} else {
var statearr_27287_27419 = state_27283__$1;
(statearr_27287_27419[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27284 === (5))){
var state_27283__$1 = state_27283;
var statearr_27288_27420 = state_27283__$1;
(statearr_27288_27420[(2)] = null);

(statearr_27288_27420[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27284 === (6))){
var state_27283__$1 = state_27283;
var statearr_27289_27421 = state_27283__$1;
(statearr_27289_27421[(2)] = null);

(statearr_27289_27421[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27284 === (7))){
var inst_27279 = (state_27283[(2)]);
var state_27283__$1 = state_27283;
var statearr_27290_27422 = state_27283__$1;
(statearr_27290_27422[(2)] = inst_27279);

(statearr_27290_27422[(1)] = (3));


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
});})(__27403,c__27064__auto___27416,G__27246_27404,G__27246_27405__$1,n__4613__auto___27402,jobs,results,process,async))
;
return ((function (__27403,switch__26969__auto__,c__27064__auto___27416,G__27246_27404,G__27246_27405__$1,n__4613__auto___27402,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26970__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26970__auto____0 = (function (){
var statearr_27291 = [null,null,null,null,null,null,null];
(statearr_27291[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26970__auto__);

(statearr_27291[(1)] = (1));

return statearr_27291;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26970__auto____1 = (function (state_27283){
while(true){
var ret_value__26971__auto__ = (function (){try{while(true){
var result__26972__auto__ = switch__26969__auto__.call(null,state_27283);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26972__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26972__auto__;
}
break;
}
}catch (e27292){if((e27292 instanceof Object)){
var ex__26973__auto__ = e27292;
var statearr_27293_27423 = state_27283;
(statearr_27293_27423[(5)] = ex__26973__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27283);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27292;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26971__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27424 = state_27283;
state_27283 = G__27424;
continue;
} else {
return ret_value__26971__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26970__auto__ = function(state_27283){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26970__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26970__auto____1.call(this,state_27283);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26970__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26970__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26970__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26970__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26970__auto__;
})()
;})(__27403,switch__26969__auto__,c__27064__auto___27416,G__27246_27404,G__27246_27405__$1,n__4613__auto___27402,jobs,results,process,async))
})();
var state__27066__auto__ = (function (){var statearr_27294 = f__27065__auto__.call(null);
(statearr_27294[(6)] = c__27064__auto___27416);

return statearr_27294;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27066__auto__);
});})(__27403,c__27064__auto___27416,G__27246_27404,G__27246_27405__$1,n__4613__auto___27402,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27246_27405__$1)].join('')));

}

var G__27425 = (__27403 + (1));
__27403 = G__27425;
continue;
} else {
}
break;
}

var c__27064__auto___27426 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27065__auto__ = (function (){var switch__26969__auto__ = (function (state_27316){
var state_val_27317 = (state_27316[(1)]);
if((state_val_27317 === (7))){
var inst_27312 = (state_27316[(2)]);
var state_27316__$1 = state_27316;
var statearr_27318_27427 = state_27316__$1;
(statearr_27318_27427[(2)] = inst_27312);

(statearr_27318_27427[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27317 === (1))){
var state_27316__$1 = state_27316;
var statearr_27319_27428 = state_27316__$1;
(statearr_27319_27428[(2)] = null);

(statearr_27319_27428[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27317 === (4))){
var inst_27297 = (state_27316[(7)]);
var inst_27297__$1 = (state_27316[(2)]);
var inst_27298 = (inst_27297__$1 == null);
var state_27316__$1 = (function (){var statearr_27320 = state_27316;
(statearr_27320[(7)] = inst_27297__$1);

return statearr_27320;
})();
if(cljs.core.truth_(inst_27298)){
var statearr_27321_27429 = state_27316__$1;
(statearr_27321_27429[(1)] = (5));

} else {
var statearr_27322_27430 = state_27316__$1;
(statearr_27322_27430[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27317 === (6))){
var inst_27302 = (state_27316[(8)]);
var inst_27297 = (state_27316[(7)]);
var inst_27302__$1 = cljs.core.async.chan.call(null,(1));
var inst_27303 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27304 = [inst_27297,inst_27302__$1];
var inst_27305 = (new cljs.core.PersistentVector(null,2,(5),inst_27303,inst_27304,null));
var state_27316__$1 = (function (){var statearr_27323 = state_27316;
(statearr_27323[(8)] = inst_27302__$1);

return statearr_27323;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27316__$1,(8),jobs,inst_27305);
} else {
if((state_val_27317 === (3))){
var inst_27314 = (state_27316[(2)]);
var state_27316__$1 = state_27316;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27316__$1,inst_27314);
} else {
if((state_val_27317 === (2))){
var state_27316__$1 = state_27316;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27316__$1,(4),from);
} else {
if((state_val_27317 === (9))){
var inst_27309 = (state_27316[(2)]);
var state_27316__$1 = (function (){var statearr_27324 = state_27316;
(statearr_27324[(9)] = inst_27309);

return statearr_27324;
})();
var statearr_27325_27431 = state_27316__$1;
(statearr_27325_27431[(2)] = null);

(statearr_27325_27431[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27317 === (5))){
var inst_27300 = cljs.core.async.close_BANG_.call(null,jobs);
var state_27316__$1 = state_27316;
var statearr_27326_27432 = state_27316__$1;
(statearr_27326_27432[(2)] = inst_27300);

(statearr_27326_27432[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27317 === (8))){
var inst_27302 = (state_27316[(8)]);
var inst_27307 = (state_27316[(2)]);
var state_27316__$1 = (function (){var statearr_27327 = state_27316;
(statearr_27327[(10)] = inst_27307);

return statearr_27327;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27316__$1,(9),results,inst_27302);
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
var cljs$core$async$pipeline_STAR__$_state_machine__26970__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26970__auto____0 = (function (){
var statearr_27328 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27328[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26970__auto__);

(statearr_27328[(1)] = (1));

return statearr_27328;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26970__auto____1 = (function (state_27316){
while(true){
var ret_value__26971__auto__ = (function (){try{while(true){
var result__26972__auto__ = switch__26969__auto__.call(null,state_27316);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26972__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26972__auto__;
}
break;
}
}catch (e27329){if((e27329 instanceof Object)){
var ex__26973__auto__ = e27329;
var statearr_27330_27433 = state_27316;
(statearr_27330_27433[(5)] = ex__26973__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27316);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27329;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26971__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27434 = state_27316;
state_27316 = G__27434;
continue;
} else {
return ret_value__26971__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26970__auto__ = function(state_27316){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26970__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26970__auto____1.call(this,state_27316);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26970__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26970__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26970__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26970__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26970__auto__;
})()
})();
var state__27066__auto__ = (function (){var statearr_27331 = f__27065__auto__.call(null);
(statearr_27331[(6)] = c__27064__auto___27426);

return statearr_27331;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27066__auto__);
}));


var c__27064__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27065__auto__ = (function (){var switch__26969__auto__ = (function (state_27369){
var state_val_27370 = (state_27369[(1)]);
if((state_val_27370 === (7))){
var inst_27365 = (state_27369[(2)]);
var state_27369__$1 = state_27369;
var statearr_27371_27435 = state_27369__$1;
(statearr_27371_27435[(2)] = inst_27365);

(statearr_27371_27435[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27370 === (20))){
var state_27369__$1 = state_27369;
var statearr_27372_27436 = state_27369__$1;
(statearr_27372_27436[(2)] = null);

(statearr_27372_27436[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27370 === (1))){
var state_27369__$1 = state_27369;
var statearr_27373_27437 = state_27369__$1;
(statearr_27373_27437[(2)] = null);

(statearr_27373_27437[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27370 === (4))){
var inst_27334 = (state_27369[(7)]);
var inst_27334__$1 = (state_27369[(2)]);
var inst_27335 = (inst_27334__$1 == null);
var state_27369__$1 = (function (){var statearr_27374 = state_27369;
(statearr_27374[(7)] = inst_27334__$1);

return statearr_27374;
})();
if(cljs.core.truth_(inst_27335)){
var statearr_27375_27438 = state_27369__$1;
(statearr_27375_27438[(1)] = (5));

} else {
var statearr_27376_27439 = state_27369__$1;
(statearr_27376_27439[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27370 === (15))){
var inst_27347 = (state_27369[(8)]);
var state_27369__$1 = state_27369;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27369__$1,(18),to,inst_27347);
} else {
if((state_val_27370 === (21))){
var inst_27360 = (state_27369[(2)]);
var state_27369__$1 = state_27369;
var statearr_27377_27440 = state_27369__$1;
(statearr_27377_27440[(2)] = inst_27360);

(statearr_27377_27440[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27370 === (13))){
var inst_27362 = (state_27369[(2)]);
var state_27369__$1 = (function (){var statearr_27378 = state_27369;
(statearr_27378[(9)] = inst_27362);

return statearr_27378;
})();
var statearr_27379_27441 = state_27369__$1;
(statearr_27379_27441[(2)] = null);

(statearr_27379_27441[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27370 === (6))){
var inst_27334 = (state_27369[(7)]);
var state_27369__$1 = state_27369;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27369__$1,(11),inst_27334);
} else {
if((state_val_27370 === (17))){
var inst_27355 = (state_27369[(2)]);
var state_27369__$1 = state_27369;
if(cljs.core.truth_(inst_27355)){
var statearr_27380_27442 = state_27369__$1;
(statearr_27380_27442[(1)] = (19));

} else {
var statearr_27381_27443 = state_27369__$1;
(statearr_27381_27443[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27370 === (3))){
var inst_27367 = (state_27369[(2)]);
var state_27369__$1 = state_27369;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27369__$1,inst_27367);
} else {
if((state_val_27370 === (12))){
var inst_27344 = (state_27369[(10)]);
var state_27369__$1 = state_27369;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27369__$1,(14),inst_27344);
} else {
if((state_val_27370 === (2))){
var state_27369__$1 = state_27369;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27369__$1,(4),results);
} else {
if((state_val_27370 === (19))){
var state_27369__$1 = state_27369;
var statearr_27382_27444 = state_27369__$1;
(statearr_27382_27444[(2)] = null);

(statearr_27382_27444[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27370 === (11))){
var inst_27344 = (state_27369[(2)]);
var state_27369__$1 = (function (){var statearr_27383 = state_27369;
(statearr_27383[(10)] = inst_27344);

return statearr_27383;
})();
var statearr_27384_27445 = state_27369__$1;
(statearr_27384_27445[(2)] = null);

(statearr_27384_27445[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27370 === (9))){
var state_27369__$1 = state_27369;
var statearr_27385_27446 = state_27369__$1;
(statearr_27385_27446[(2)] = null);

(statearr_27385_27446[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27370 === (5))){
var state_27369__$1 = state_27369;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27386_27447 = state_27369__$1;
(statearr_27386_27447[(1)] = (8));

} else {
var statearr_27387_27448 = state_27369__$1;
(statearr_27387_27448[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27370 === (14))){
var inst_27347 = (state_27369[(8)]);
var inst_27347__$1 = (state_27369[(2)]);
var inst_27348 = (inst_27347__$1 == null);
var inst_27349 = cljs.core.not.call(null,inst_27348);
var state_27369__$1 = (function (){var statearr_27388 = state_27369;
(statearr_27388[(8)] = inst_27347__$1);

return statearr_27388;
})();
if(inst_27349){
var statearr_27389_27449 = state_27369__$1;
(statearr_27389_27449[(1)] = (15));

} else {
var statearr_27390_27450 = state_27369__$1;
(statearr_27390_27450[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27370 === (16))){
var state_27369__$1 = state_27369;
var statearr_27391_27451 = state_27369__$1;
(statearr_27391_27451[(2)] = false);

(statearr_27391_27451[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27370 === (10))){
var inst_27341 = (state_27369[(2)]);
var state_27369__$1 = state_27369;
var statearr_27392_27452 = state_27369__$1;
(statearr_27392_27452[(2)] = inst_27341);

(statearr_27392_27452[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27370 === (18))){
var inst_27352 = (state_27369[(2)]);
var state_27369__$1 = state_27369;
var statearr_27393_27453 = state_27369__$1;
(statearr_27393_27453[(2)] = inst_27352);

(statearr_27393_27453[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27370 === (8))){
var inst_27338 = cljs.core.async.close_BANG_.call(null,to);
var state_27369__$1 = state_27369;
var statearr_27394_27454 = state_27369__$1;
(statearr_27394_27454[(2)] = inst_27338);

(statearr_27394_27454[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__26970__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26970__auto____0 = (function (){
var statearr_27395 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27395[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26970__auto__);

(statearr_27395[(1)] = (1));

return statearr_27395;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26970__auto____1 = (function (state_27369){
while(true){
var ret_value__26971__auto__ = (function (){try{while(true){
var result__26972__auto__ = switch__26969__auto__.call(null,state_27369);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26972__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26972__auto__;
}
break;
}
}catch (e27396){if((e27396 instanceof Object)){
var ex__26973__auto__ = e27396;
var statearr_27397_27455 = state_27369;
(statearr_27397_27455[(5)] = ex__26973__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27369);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27396;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26971__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27456 = state_27369;
state_27369 = G__27456;
continue;
} else {
return ret_value__26971__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26970__auto__ = function(state_27369){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26970__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26970__auto____1.call(this,state_27369);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26970__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26970__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26970__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26970__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26970__auto__;
})()
})();
var state__27066__auto__ = (function (){var statearr_27398 = f__27065__auto__.call(null);
(statearr_27398[(6)] = c__27064__auto__);

return statearr_27398;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27066__auto__);
}));

return c__27064__auto__;
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
var G__27458 = arguments.length;
switch (G__27458) {
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
var G__27461 = arguments.length;
switch (G__27461) {
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
var G__27464 = arguments.length;
switch (G__27464) {
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
var c__27064__auto___27513 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27065__auto__ = (function (){var switch__26969__auto__ = (function (state_27490){
var state_val_27491 = (state_27490[(1)]);
if((state_val_27491 === (7))){
var inst_27486 = (state_27490[(2)]);
var state_27490__$1 = state_27490;
var statearr_27492_27514 = state_27490__$1;
(statearr_27492_27514[(2)] = inst_27486);

(statearr_27492_27514[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27491 === (1))){
var state_27490__$1 = state_27490;
var statearr_27493_27515 = state_27490__$1;
(statearr_27493_27515[(2)] = null);

(statearr_27493_27515[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27491 === (4))){
var inst_27467 = (state_27490[(7)]);
var inst_27467__$1 = (state_27490[(2)]);
var inst_27468 = (inst_27467__$1 == null);
var state_27490__$1 = (function (){var statearr_27494 = state_27490;
(statearr_27494[(7)] = inst_27467__$1);

return statearr_27494;
})();
if(cljs.core.truth_(inst_27468)){
var statearr_27495_27516 = state_27490__$1;
(statearr_27495_27516[(1)] = (5));

} else {
var statearr_27496_27517 = state_27490__$1;
(statearr_27496_27517[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27491 === (13))){
var state_27490__$1 = state_27490;
var statearr_27497_27518 = state_27490__$1;
(statearr_27497_27518[(2)] = null);

(statearr_27497_27518[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27491 === (6))){
var inst_27467 = (state_27490[(7)]);
var inst_27473 = p.call(null,inst_27467);
var state_27490__$1 = state_27490;
if(cljs.core.truth_(inst_27473)){
var statearr_27498_27519 = state_27490__$1;
(statearr_27498_27519[(1)] = (9));

} else {
var statearr_27499_27520 = state_27490__$1;
(statearr_27499_27520[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27491 === (3))){
var inst_27488 = (state_27490[(2)]);
var state_27490__$1 = state_27490;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27490__$1,inst_27488);
} else {
if((state_val_27491 === (12))){
var state_27490__$1 = state_27490;
var statearr_27500_27521 = state_27490__$1;
(statearr_27500_27521[(2)] = null);

(statearr_27500_27521[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27491 === (2))){
var state_27490__$1 = state_27490;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27490__$1,(4),ch);
} else {
if((state_val_27491 === (11))){
var inst_27467 = (state_27490[(7)]);
var inst_27477 = (state_27490[(2)]);
var state_27490__$1 = state_27490;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27490__$1,(8),inst_27477,inst_27467);
} else {
if((state_val_27491 === (9))){
var state_27490__$1 = state_27490;
var statearr_27501_27522 = state_27490__$1;
(statearr_27501_27522[(2)] = tc);

(statearr_27501_27522[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27491 === (5))){
var inst_27470 = cljs.core.async.close_BANG_.call(null,tc);
var inst_27471 = cljs.core.async.close_BANG_.call(null,fc);
var state_27490__$1 = (function (){var statearr_27502 = state_27490;
(statearr_27502[(8)] = inst_27470);

return statearr_27502;
})();
var statearr_27503_27523 = state_27490__$1;
(statearr_27503_27523[(2)] = inst_27471);

(statearr_27503_27523[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27491 === (14))){
var inst_27484 = (state_27490[(2)]);
var state_27490__$1 = state_27490;
var statearr_27504_27524 = state_27490__$1;
(statearr_27504_27524[(2)] = inst_27484);

(statearr_27504_27524[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27491 === (10))){
var state_27490__$1 = state_27490;
var statearr_27505_27525 = state_27490__$1;
(statearr_27505_27525[(2)] = fc);

(statearr_27505_27525[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27491 === (8))){
var inst_27479 = (state_27490[(2)]);
var state_27490__$1 = state_27490;
if(cljs.core.truth_(inst_27479)){
var statearr_27506_27526 = state_27490__$1;
(statearr_27506_27526[(1)] = (12));

} else {
var statearr_27507_27527 = state_27490__$1;
(statearr_27507_27527[(1)] = (13));

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
var cljs$core$async$state_machine__26970__auto__ = null;
var cljs$core$async$state_machine__26970__auto____0 = (function (){
var statearr_27508 = [null,null,null,null,null,null,null,null,null];
(statearr_27508[(0)] = cljs$core$async$state_machine__26970__auto__);

(statearr_27508[(1)] = (1));

return statearr_27508;
});
var cljs$core$async$state_machine__26970__auto____1 = (function (state_27490){
while(true){
var ret_value__26971__auto__ = (function (){try{while(true){
var result__26972__auto__ = switch__26969__auto__.call(null,state_27490);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26972__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26972__auto__;
}
break;
}
}catch (e27509){if((e27509 instanceof Object)){
var ex__26973__auto__ = e27509;
var statearr_27510_27528 = state_27490;
(statearr_27510_27528[(5)] = ex__26973__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27490);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27509;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26971__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27529 = state_27490;
state_27490 = G__27529;
continue;
} else {
return ret_value__26971__auto__;
}
break;
}
});
cljs$core$async$state_machine__26970__auto__ = function(state_27490){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26970__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26970__auto____1.call(this,state_27490);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26970__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26970__auto____0;
cljs$core$async$state_machine__26970__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26970__auto____1;
return cljs$core$async$state_machine__26970__auto__;
})()
})();
var state__27066__auto__ = (function (){var statearr_27511 = f__27065__auto__.call(null);
(statearr_27511[(6)] = c__27064__auto___27513);

return statearr_27511;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27066__auto__);
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
var c__27064__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27065__auto__ = (function (){var switch__26969__auto__ = (function (state_27550){
var state_val_27551 = (state_27550[(1)]);
if((state_val_27551 === (7))){
var inst_27546 = (state_27550[(2)]);
var state_27550__$1 = state_27550;
var statearr_27552_27570 = state_27550__$1;
(statearr_27552_27570[(2)] = inst_27546);

(statearr_27552_27570[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27551 === (1))){
var inst_27530 = init;
var state_27550__$1 = (function (){var statearr_27553 = state_27550;
(statearr_27553[(7)] = inst_27530);

return statearr_27553;
})();
var statearr_27554_27571 = state_27550__$1;
(statearr_27554_27571[(2)] = null);

(statearr_27554_27571[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27551 === (4))){
var inst_27533 = (state_27550[(8)]);
var inst_27533__$1 = (state_27550[(2)]);
var inst_27534 = (inst_27533__$1 == null);
var state_27550__$1 = (function (){var statearr_27555 = state_27550;
(statearr_27555[(8)] = inst_27533__$1);

return statearr_27555;
})();
if(cljs.core.truth_(inst_27534)){
var statearr_27556_27572 = state_27550__$1;
(statearr_27556_27572[(1)] = (5));

} else {
var statearr_27557_27573 = state_27550__$1;
(statearr_27557_27573[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27551 === (6))){
var inst_27530 = (state_27550[(7)]);
var inst_27537 = (state_27550[(9)]);
var inst_27533 = (state_27550[(8)]);
var inst_27537__$1 = f.call(null,inst_27530,inst_27533);
var inst_27538 = cljs.core.reduced_QMARK_.call(null,inst_27537__$1);
var state_27550__$1 = (function (){var statearr_27558 = state_27550;
(statearr_27558[(9)] = inst_27537__$1);

return statearr_27558;
})();
if(inst_27538){
var statearr_27559_27574 = state_27550__$1;
(statearr_27559_27574[(1)] = (8));

} else {
var statearr_27560_27575 = state_27550__$1;
(statearr_27560_27575[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27551 === (3))){
var inst_27548 = (state_27550[(2)]);
var state_27550__$1 = state_27550;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27550__$1,inst_27548);
} else {
if((state_val_27551 === (2))){
var state_27550__$1 = state_27550;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27550__$1,(4),ch);
} else {
if((state_val_27551 === (9))){
var inst_27537 = (state_27550[(9)]);
var inst_27530 = inst_27537;
var state_27550__$1 = (function (){var statearr_27561 = state_27550;
(statearr_27561[(7)] = inst_27530);

return statearr_27561;
})();
var statearr_27562_27576 = state_27550__$1;
(statearr_27562_27576[(2)] = null);

(statearr_27562_27576[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27551 === (5))){
var inst_27530 = (state_27550[(7)]);
var state_27550__$1 = state_27550;
var statearr_27563_27577 = state_27550__$1;
(statearr_27563_27577[(2)] = inst_27530);

(statearr_27563_27577[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27551 === (10))){
var inst_27544 = (state_27550[(2)]);
var state_27550__$1 = state_27550;
var statearr_27564_27578 = state_27550__$1;
(statearr_27564_27578[(2)] = inst_27544);

(statearr_27564_27578[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27551 === (8))){
var inst_27537 = (state_27550[(9)]);
var inst_27540 = cljs.core.deref.call(null,inst_27537);
var state_27550__$1 = state_27550;
var statearr_27565_27579 = state_27550__$1;
(statearr_27565_27579[(2)] = inst_27540);

(statearr_27565_27579[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__26970__auto__ = null;
var cljs$core$async$reduce_$_state_machine__26970__auto____0 = (function (){
var statearr_27566 = [null,null,null,null,null,null,null,null,null,null];
(statearr_27566[(0)] = cljs$core$async$reduce_$_state_machine__26970__auto__);

(statearr_27566[(1)] = (1));

return statearr_27566;
});
var cljs$core$async$reduce_$_state_machine__26970__auto____1 = (function (state_27550){
while(true){
var ret_value__26971__auto__ = (function (){try{while(true){
var result__26972__auto__ = switch__26969__auto__.call(null,state_27550);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26972__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26972__auto__;
}
break;
}
}catch (e27567){if((e27567 instanceof Object)){
var ex__26973__auto__ = e27567;
var statearr_27568_27580 = state_27550;
(statearr_27568_27580[(5)] = ex__26973__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27550);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27567;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26971__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27581 = state_27550;
state_27550 = G__27581;
continue;
} else {
return ret_value__26971__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__26970__auto__ = function(state_27550){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__26970__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__26970__auto____1.call(this,state_27550);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__26970__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__26970__auto____0;
cljs$core$async$reduce_$_state_machine__26970__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__26970__auto____1;
return cljs$core$async$reduce_$_state_machine__26970__auto__;
})()
})();
var state__27066__auto__ = (function (){var statearr_27569 = f__27065__auto__.call(null);
(statearr_27569[(6)] = c__27064__auto__);

return statearr_27569;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27066__auto__);
}));

return c__27064__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__27064__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27065__auto__ = (function (){var switch__26969__auto__ = (function (state_27587){
var state_val_27588 = (state_27587[(1)]);
if((state_val_27588 === (1))){
var inst_27582 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_27587__$1 = state_27587;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27587__$1,(2),inst_27582);
} else {
if((state_val_27588 === (2))){
var inst_27584 = (state_27587[(2)]);
var inst_27585 = f__$1.call(null,inst_27584);
var state_27587__$1 = state_27587;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27587__$1,inst_27585);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__26970__auto__ = null;
var cljs$core$async$transduce_$_state_machine__26970__auto____0 = (function (){
var statearr_27589 = [null,null,null,null,null,null,null];
(statearr_27589[(0)] = cljs$core$async$transduce_$_state_machine__26970__auto__);

(statearr_27589[(1)] = (1));

return statearr_27589;
});
var cljs$core$async$transduce_$_state_machine__26970__auto____1 = (function (state_27587){
while(true){
var ret_value__26971__auto__ = (function (){try{while(true){
var result__26972__auto__ = switch__26969__auto__.call(null,state_27587);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26972__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26972__auto__;
}
break;
}
}catch (e27590){if((e27590 instanceof Object)){
var ex__26973__auto__ = e27590;
var statearr_27591_27593 = state_27587;
(statearr_27591_27593[(5)] = ex__26973__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27587);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27590;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26971__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27594 = state_27587;
state_27587 = G__27594;
continue;
} else {
return ret_value__26971__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__26970__auto__ = function(state_27587){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__26970__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__26970__auto____1.call(this,state_27587);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__26970__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__26970__auto____0;
cljs$core$async$transduce_$_state_machine__26970__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__26970__auto____1;
return cljs$core$async$transduce_$_state_machine__26970__auto__;
})()
})();
var state__27066__auto__ = (function (){var statearr_27592 = f__27065__auto__.call(null);
(statearr_27592[(6)] = c__27064__auto__);

return statearr_27592;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27066__auto__);
}));

return c__27064__auto__;
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
var G__27596 = arguments.length;
switch (G__27596) {
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
var c__27064__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27065__auto__ = (function (){var switch__26969__auto__ = (function (state_27621){
var state_val_27622 = (state_27621[(1)]);
if((state_val_27622 === (7))){
var inst_27603 = (state_27621[(2)]);
var state_27621__$1 = state_27621;
var statearr_27623_27644 = state_27621__$1;
(statearr_27623_27644[(2)] = inst_27603);

(statearr_27623_27644[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27622 === (1))){
var inst_27597 = cljs.core.seq.call(null,coll);
var inst_27598 = inst_27597;
var state_27621__$1 = (function (){var statearr_27624 = state_27621;
(statearr_27624[(7)] = inst_27598);

return statearr_27624;
})();
var statearr_27625_27645 = state_27621__$1;
(statearr_27625_27645[(2)] = null);

(statearr_27625_27645[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27622 === (4))){
var inst_27598 = (state_27621[(7)]);
var inst_27601 = cljs.core.first.call(null,inst_27598);
var state_27621__$1 = state_27621;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27621__$1,(7),ch,inst_27601);
} else {
if((state_val_27622 === (13))){
var inst_27615 = (state_27621[(2)]);
var state_27621__$1 = state_27621;
var statearr_27626_27646 = state_27621__$1;
(statearr_27626_27646[(2)] = inst_27615);

(statearr_27626_27646[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27622 === (6))){
var inst_27606 = (state_27621[(2)]);
var state_27621__$1 = state_27621;
if(cljs.core.truth_(inst_27606)){
var statearr_27627_27647 = state_27621__$1;
(statearr_27627_27647[(1)] = (8));

} else {
var statearr_27628_27648 = state_27621__$1;
(statearr_27628_27648[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27622 === (3))){
var inst_27619 = (state_27621[(2)]);
var state_27621__$1 = state_27621;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27621__$1,inst_27619);
} else {
if((state_val_27622 === (12))){
var state_27621__$1 = state_27621;
var statearr_27629_27649 = state_27621__$1;
(statearr_27629_27649[(2)] = null);

(statearr_27629_27649[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27622 === (2))){
var inst_27598 = (state_27621[(7)]);
var state_27621__$1 = state_27621;
if(cljs.core.truth_(inst_27598)){
var statearr_27630_27650 = state_27621__$1;
(statearr_27630_27650[(1)] = (4));

} else {
var statearr_27631_27651 = state_27621__$1;
(statearr_27631_27651[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27622 === (11))){
var inst_27612 = cljs.core.async.close_BANG_.call(null,ch);
var state_27621__$1 = state_27621;
var statearr_27632_27652 = state_27621__$1;
(statearr_27632_27652[(2)] = inst_27612);

(statearr_27632_27652[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27622 === (9))){
var state_27621__$1 = state_27621;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27633_27653 = state_27621__$1;
(statearr_27633_27653[(1)] = (11));

} else {
var statearr_27634_27654 = state_27621__$1;
(statearr_27634_27654[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27622 === (5))){
var inst_27598 = (state_27621[(7)]);
var state_27621__$1 = state_27621;
var statearr_27635_27655 = state_27621__$1;
(statearr_27635_27655[(2)] = inst_27598);

(statearr_27635_27655[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27622 === (10))){
var inst_27617 = (state_27621[(2)]);
var state_27621__$1 = state_27621;
var statearr_27636_27656 = state_27621__$1;
(statearr_27636_27656[(2)] = inst_27617);

(statearr_27636_27656[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27622 === (8))){
var inst_27598 = (state_27621[(7)]);
var inst_27608 = cljs.core.next.call(null,inst_27598);
var inst_27598__$1 = inst_27608;
var state_27621__$1 = (function (){var statearr_27637 = state_27621;
(statearr_27637[(7)] = inst_27598__$1);

return statearr_27637;
})();
var statearr_27638_27657 = state_27621__$1;
(statearr_27638_27657[(2)] = null);

(statearr_27638_27657[(1)] = (2));


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
var cljs$core$async$state_machine__26970__auto__ = null;
var cljs$core$async$state_machine__26970__auto____0 = (function (){
var statearr_27639 = [null,null,null,null,null,null,null,null];
(statearr_27639[(0)] = cljs$core$async$state_machine__26970__auto__);

(statearr_27639[(1)] = (1));

return statearr_27639;
});
var cljs$core$async$state_machine__26970__auto____1 = (function (state_27621){
while(true){
var ret_value__26971__auto__ = (function (){try{while(true){
var result__26972__auto__ = switch__26969__auto__.call(null,state_27621);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26972__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26972__auto__;
}
break;
}
}catch (e27640){if((e27640 instanceof Object)){
var ex__26973__auto__ = e27640;
var statearr_27641_27658 = state_27621;
(statearr_27641_27658[(5)] = ex__26973__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27621);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27640;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26971__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27659 = state_27621;
state_27621 = G__27659;
continue;
} else {
return ret_value__26971__auto__;
}
break;
}
});
cljs$core$async$state_machine__26970__auto__ = function(state_27621){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26970__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26970__auto____1.call(this,state_27621);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26970__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26970__auto____0;
cljs$core$async$state_machine__26970__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26970__auto____1;
return cljs$core$async$state_machine__26970__auto__;
})()
})();
var state__27066__auto__ = (function (){var statearr_27642 = f__27065__auto__.call(null);
(statearr_27642[(6)] = c__27064__auto__);

return statearr_27642;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27066__auto__);
}));

return c__27064__auto__;
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

var cljs$core$async$Mux$muxch_STAR_$dyn_27660 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_27660.call(null,_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_27661 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_27661.call(null,m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_27662 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_27662.call(null,m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_27663 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_27663.call(null,m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27664 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27664 = (function (ch,cs,meta27665){
this.ch = ch;
this.cs = cs;
this.meta27665 = meta27665;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async27664.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27666,meta27665__$1){
var self__ = this;
var _27666__$1 = this;
return (new cljs.core.async.t_cljs$core$async27664(self__.ch,self__.cs,meta27665__$1));
}));

(cljs.core.async.t_cljs$core$async27664.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27666){
var self__ = this;
var _27666__$1 = this;
return self__.meta27665;
}));

(cljs.core.async.t_cljs$core$async27664.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27664.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async27664.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27664.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async27664.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async27664.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async27664.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta27665","meta27665",-381192,null)], null);
}));

(cljs.core.async.t_cljs$core$async27664.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async27664.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27664");

(cljs.core.async.t_cljs$core$async27664.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async27664");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27664.
 */
cljs.core.async.__GT_t_cljs$core$async27664 = (function cljs$core$async$mult_$___GT_t_cljs$core$async27664(ch__$1,cs__$1,meta27665){
return (new cljs.core.async.t_cljs$core$async27664(ch__$1,cs__$1,meta27665));
});

}

return (new cljs.core.async.t_cljs$core$async27664(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__27064__auto___27886 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27065__auto__ = (function (){var switch__26969__auto__ = (function (state_27801){
var state_val_27802 = (state_27801[(1)]);
if((state_val_27802 === (7))){
var inst_27797 = (state_27801[(2)]);
var state_27801__$1 = state_27801;
var statearr_27803_27887 = state_27801__$1;
(statearr_27803_27887[(2)] = inst_27797);

(statearr_27803_27887[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27802 === (20))){
var inst_27700 = (state_27801[(7)]);
var inst_27712 = cljs.core.first.call(null,inst_27700);
var inst_27713 = cljs.core.nth.call(null,inst_27712,(0),null);
var inst_27714 = cljs.core.nth.call(null,inst_27712,(1),null);
var state_27801__$1 = (function (){var statearr_27804 = state_27801;
(statearr_27804[(8)] = inst_27713);

return statearr_27804;
})();
if(cljs.core.truth_(inst_27714)){
var statearr_27805_27888 = state_27801__$1;
(statearr_27805_27888[(1)] = (22));

} else {
var statearr_27806_27889 = state_27801__$1;
(statearr_27806_27889[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27802 === (27))){
var inst_27669 = (state_27801[(9)]);
var inst_27744 = (state_27801[(10)]);
var inst_27742 = (state_27801[(11)]);
var inst_27749 = (state_27801[(12)]);
var inst_27749__$1 = cljs.core._nth.call(null,inst_27742,inst_27744);
var inst_27750 = cljs.core.async.put_BANG_.call(null,inst_27749__$1,inst_27669,done);
var state_27801__$1 = (function (){var statearr_27807 = state_27801;
(statearr_27807[(12)] = inst_27749__$1);

return statearr_27807;
})();
if(cljs.core.truth_(inst_27750)){
var statearr_27808_27890 = state_27801__$1;
(statearr_27808_27890[(1)] = (30));

} else {
var statearr_27809_27891 = state_27801__$1;
(statearr_27809_27891[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27802 === (1))){
var state_27801__$1 = state_27801;
var statearr_27810_27892 = state_27801__$1;
(statearr_27810_27892[(2)] = null);

(statearr_27810_27892[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27802 === (24))){
var inst_27700 = (state_27801[(7)]);
var inst_27719 = (state_27801[(2)]);
var inst_27720 = cljs.core.next.call(null,inst_27700);
var inst_27678 = inst_27720;
var inst_27679 = null;
var inst_27680 = (0);
var inst_27681 = (0);
var state_27801__$1 = (function (){var statearr_27811 = state_27801;
(statearr_27811[(13)] = inst_27681);

(statearr_27811[(14)] = inst_27719);

(statearr_27811[(15)] = inst_27679);

(statearr_27811[(16)] = inst_27678);

(statearr_27811[(17)] = inst_27680);

return statearr_27811;
})();
var statearr_27812_27893 = state_27801__$1;
(statearr_27812_27893[(2)] = null);

(statearr_27812_27893[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27802 === (39))){
var state_27801__$1 = state_27801;
var statearr_27816_27894 = state_27801__$1;
(statearr_27816_27894[(2)] = null);

(statearr_27816_27894[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27802 === (4))){
var inst_27669 = (state_27801[(9)]);
var inst_27669__$1 = (state_27801[(2)]);
var inst_27670 = (inst_27669__$1 == null);
var state_27801__$1 = (function (){var statearr_27817 = state_27801;
(statearr_27817[(9)] = inst_27669__$1);

return statearr_27817;
})();
if(cljs.core.truth_(inst_27670)){
var statearr_27818_27895 = state_27801__$1;
(statearr_27818_27895[(1)] = (5));

} else {
var statearr_27819_27896 = state_27801__$1;
(statearr_27819_27896[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27802 === (15))){
var inst_27681 = (state_27801[(13)]);
var inst_27679 = (state_27801[(15)]);
var inst_27678 = (state_27801[(16)]);
var inst_27680 = (state_27801[(17)]);
var inst_27696 = (state_27801[(2)]);
var inst_27697 = (inst_27681 + (1));
var tmp27813 = inst_27679;
var tmp27814 = inst_27678;
var tmp27815 = inst_27680;
var inst_27678__$1 = tmp27814;
var inst_27679__$1 = tmp27813;
var inst_27680__$1 = tmp27815;
var inst_27681__$1 = inst_27697;
var state_27801__$1 = (function (){var statearr_27820 = state_27801;
(statearr_27820[(13)] = inst_27681__$1);

(statearr_27820[(15)] = inst_27679__$1);

(statearr_27820[(16)] = inst_27678__$1);

(statearr_27820[(17)] = inst_27680__$1);

(statearr_27820[(18)] = inst_27696);

return statearr_27820;
})();
var statearr_27821_27897 = state_27801__$1;
(statearr_27821_27897[(2)] = null);

(statearr_27821_27897[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27802 === (21))){
var inst_27723 = (state_27801[(2)]);
var state_27801__$1 = state_27801;
var statearr_27825_27898 = state_27801__$1;
(statearr_27825_27898[(2)] = inst_27723);

(statearr_27825_27898[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27802 === (31))){
var inst_27749 = (state_27801[(12)]);
var inst_27753 = done.call(null,null);
var inst_27754 = cljs.core.async.untap_STAR_.call(null,m,inst_27749);
var state_27801__$1 = (function (){var statearr_27826 = state_27801;
(statearr_27826[(19)] = inst_27753);

return statearr_27826;
})();
var statearr_27827_27899 = state_27801__$1;
(statearr_27827_27899[(2)] = inst_27754);

(statearr_27827_27899[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27802 === (32))){
var inst_27741 = (state_27801[(20)]);
var inst_27744 = (state_27801[(10)]);
var inst_27743 = (state_27801[(21)]);
var inst_27742 = (state_27801[(11)]);
var inst_27756 = (state_27801[(2)]);
var inst_27757 = (inst_27744 + (1));
var tmp27822 = inst_27741;
var tmp27823 = inst_27743;
var tmp27824 = inst_27742;
var inst_27741__$1 = tmp27822;
var inst_27742__$1 = tmp27824;
var inst_27743__$1 = tmp27823;
var inst_27744__$1 = inst_27757;
var state_27801__$1 = (function (){var statearr_27828 = state_27801;
(statearr_27828[(22)] = inst_27756);

(statearr_27828[(20)] = inst_27741__$1);

(statearr_27828[(10)] = inst_27744__$1);

(statearr_27828[(21)] = inst_27743__$1);

(statearr_27828[(11)] = inst_27742__$1);

return statearr_27828;
})();
var statearr_27829_27900 = state_27801__$1;
(statearr_27829_27900[(2)] = null);

(statearr_27829_27900[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27802 === (40))){
var inst_27769 = (state_27801[(23)]);
var inst_27773 = done.call(null,null);
var inst_27774 = cljs.core.async.untap_STAR_.call(null,m,inst_27769);
var state_27801__$1 = (function (){var statearr_27830 = state_27801;
(statearr_27830[(24)] = inst_27773);

return statearr_27830;
})();
var statearr_27831_27901 = state_27801__$1;
(statearr_27831_27901[(2)] = inst_27774);

(statearr_27831_27901[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27802 === (33))){
var inst_27760 = (state_27801[(25)]);
var inst_27762 = cljs.core.chunked_seq_QMARK_.call(null,inst_27760);
var state_27801__$1 = state_27801;
if(inst_27762){
var statearr_27832_27902 = state_27801__$1;
(statearr_27832_27902[(1)] = (36));

} else {
var statearr_27833_27903 = state_27801__$1;
(statearr_27833_27903[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27802 === (13))){
var inst_27690 = (state_27801[(26)]);
var inst_27693 = cljs.core.async.close_BANG_.call(null,inst_27690);
var state_27801__$1 = state_27801;
var statearr_27834_27904 = state_27801__$1;
(statearr_27834_27904[(2)] = inst_27693);

(statearr_27834_27904[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27802 === (22))){
var inst_27713 = (state_27801[(8)]);
var inst_27716 = cljs.core.async.close_BANG_.call(null,inst_27713);
var state_27801__$1 = state_27801;
var statearr_27835_27905 = state_27801__$1;
(statearr_27835_27905[(2)] = inst_27716);

(statearr_27835_27905[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27802 === (36))){
var inst_27760 = (state_27801[(25)]);
var inst_27764 = cljs.core.chunk_first.call(null,inst_27760);
var inst_27765 = cljs.core.chunk_rest.call(null,inst_27760);
var inst_27766 = cljs.core.count.call(null,inst_27764);
var inst_27741 = inst_27765;
var inst_27742 = inst_27764;
var inst_27743 = inst_27766;
var inst_27744 = (0);
var state_27801__$1 = (function (){var statearr_27836 = state_27801;
(statearr_27836[(20)] = inst_27741);

(statearr_27836[(10)] = inst_27744);

(statearr_27836[(21)] = inst_27743);

(statearr_27836[(11)] = inst_27742);

return statearr_27836;
})();
var statearr_27837_27906 = state_27801__$1;
(statearr_27837_27906[(2)] = null);

(statearr_27837_27906[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27802 === (41))){
var inst_27760 = (state_27801[(25)]);
var inst_27776 = (state_27801[(2)]);
var inst_27777 = cljs.core.next.call(null,inst_27760);
var inst_27741 = inst_27777;
var inst_27742 = null;
var inst_27743 = (0);
var inst_27744 = (0);
var state_27801__$1 = (function (){var statearr_27838 = state_27801;
(statearr_27838[(20)] = inst_27741);

(statearr_27838[(27)] = inst_27776);

(statearr_27838[(10)] = inst_27744);

(statearr_27838[(21)] = inst_27743);

(statearr_27838[(11)] = inst_27742);

return statearr_27838;
})();
var statearr_27839_27907 = state_27801__$1;
(statearr_27839_27907[(2)] = null);

(statearr_27839_27907[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27802 === (43))){
var state_27801__$1 = state_27801;
var statearr_27840_27908 = state_27801__$1;
(statearr_27840_27908[(2)] = null);

(statearr_27840_27908[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27802 === (29))){
var inst_27785 = (state_27801[(2)]);
var state_27801__$1 = state_27801;
var statearr_27841_27909 = state_27801__$1;
(statearr_27841_27909[(2)] = inst_27785);

(statearr_27841_27909[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27802 === (44))){
var inst_27794 = (state_27801[(2)]);
var state_27801__$1 = (function (){var statearr_27842 = state_27801;
(statearr_27842[(28)] = inst_27794);

return statearr_27842;
})();
var statearr_27843_27910 = state_27801__$1;
(statearr_27843_27910[(2)] = null);

(statearr_27843_27910[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27802 === (6))){
var inst_27733 = (state_27801[(29)]);
var inst_27732 = cljs.core.deref.call(null,cs);
var inst_27733__$1 = cljs.core.keys.call(null,inst_27732);
var inst_27734 = cljs.core.count.call(null,inst_27733__$1);
var inst_27735 = cljs.core.reset_BANG_.call(null,dctr,inst_27734);
var inst_27740 = cljs.core.seq.call(null,inst_27733__$1);
var inst_27741 = inst_27740;
var inst_27742 = null;
var inst_27743 = (0);
var inst_27744 = (0);
var state_27801__$1 = (function (){var statearr_27844 = state_27801;
(statearr_27844[(20)] = inst_27741);

(statearr_27844[(29)] = inst_27733__$1);

(statearr_27844[(10)] = inst_27744);

(statearr_27844[(21)] = inst_27743);

(statearr_27844[(30)] = inst_27735);

(statearr_27844[(11)] = inst_27742);

return statearr_27844;
})();
var statearr_27845_27911 = state_27801__$1;
(statearr_27845_27911[(2)] = null);

(statearr_27845_27911[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27802 === (28))){
var inst_27760 = (state_27801[(25)]);
var inst_27741 = (state_27801[(20)]);
var inst_27760__$1 = cljs.core.seq.call(null,inst_27741);
var state_27801__$1 = (function (){var statearr_27846 = state_27801;
(statearr_27846[(25)] = inst_27760__$1);

return statearr_27846;
})();
if(inst_27760__$1){
var statearr_27847_27912 = state_27801__$1;
(statearr_27847_27912[(1)] = (33));

} else {
var statearr_27848_27913 = state_27801__$1;
(statearr_27848_27913[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27802 === (25))){
var inst_27744 = (state_27801[(10)]);
var inst_27743 = (state_27801[(21)]);
var inst_27746 = (inst_27744 < inst_27743);
var inst_27747 = inst_27746;
var state_27801__$1 = state_27801;
if(cljs.core.truth_(inst_27747)){
var statearr_27849_27914 = state_27801__$1;
(statearr_27849_27914[(1)] = (27));

} else {
var statearr_27850_27915 = state_27801__$1;
(statearr_27850_27915[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27802 === (34))){
var state_27801__$1 = state_27801;
var statearr_27851_27916 = state_27801__$1;
(statearr_27851_27916[(2)] = null);

(statearr_27851_27916[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27802 === (17))){
var state_27801__$1 = state_27801;
var statearr_27852_27917 = state_27801__$1;
(statearr_27852_27917[(2)] = null);

(statearr_27852_27917[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27802 === (3))){
var inst_27799 = (state_27801[(2)]);
var state_27801__$1 = state_27801;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27801__$1,inst_27799);
} else {
if((state_val_27802 === (12))){
var inst_27728 = (state_27801[(2)]);
var state_27801__$1 = state_27801;
var statearr_27853_27918 = state_27801__$1;
(statearr_27853_27918[(2)] = inst_27728);

(statearr_27853_27918[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27802 === (2))){
var state_27801__$1 = state_27801;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27801__$1,(4),ch);
} else {
if((state_val_27802 === (23))){
var state_27801__$1 = state_27801;
var statearr_27854_27919 = state_27801__$1;
(statearr_27854_27919[(2)] = null);

(statearr_27854_27919[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27802 === (35))){
var inst_27783 = (state_27801[(2)]);
var state_27801__$1 = state_27801;
var statearr_27855_27920 = state_27801__$1;
(statearr_27855_27920[(2)] = inst_27783);

(statearr_27855_27920[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27802 === (19))){
var inst_27700 = (state_27801[(7)]);
var inst_27704 = cljs.core.chunk_first.call(null,inst_27700);
var inst_27705 = cljs.core.chunk_rest.call(null,inst_27700);
var inst_27706 = cljs.core.count.call(null,inst_27704);
var inst_27678 = inst_27705;
var inst_27679 = inst_27704;
var inst_27680 = inst_27706;
var inst_27681 = (0);
var state_27801__$1 = (function (){var statearr_27856 = state_27801;
(statearr_27856[(13)] = inst_27681);

(statearr_27856[(15)] = inst_27679);

(statearr_27856[(16)] = inst_27678);

(statearr_27856[(17)] = inst_27680);

return statearr_27856;
})();
var statearr_27857_27921 = state_27801__$1;
(statearr_27857_27921[(2)] = null);

(statearr_27857_27921[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27802 === (11))){
var inst_27678 = (state_27801[(16)]);
var inst_27700 = (state_27801[(7)]);
var inst_27700__$1 = cljs.core.seq.call(null,inst_27678);
var state_27801__$1 = (function (){var statearr_27858 = state_27801;
(statearr_27858[(7)] = inst_27700__$1);

return statearr_27858;
})();
if(inst_27700__$1){
var statearr_27859_27922 = state_27801__$1;
(statearr_27859_27922[(1)] = (16));

} else {
var statearr_27860_27923 = state_27801__$1;
(statearr_27860_27923[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27802 === (9))){
var inst_27730 = (state_27801[(2)]);
var state_27801__$1 = state_27801;
var statearr_27861_27924 = state_27801__$1;
(statearr_27861_27924[(2)] = inst_27730);

(statearr_27861_27924[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27802 === (5))){
var inst_27676 = cljs.core.deref.call(null,cs);
var inst_27677 = cljs.core.seq.call(null,inst_27676);
var inst_27678 = inst_27677;
var inst_27679 = null;
var inst_27680 = (0);
var inst_27681 = (0);
var state_27801__$1 = (function (){var statearr_27862 = state_27801;
(statearr_27862[(13)] = inst_27681);

(statearr_27862[(15)] = inst_27679);

(statearr_27862[(16)] = inst_27678);

(statearr_27862[(17)] = inst_27680);

return statearr_27862;
})();
var statearr_27863_27925 = state_27801__$1;
(statearr_27863_27925[(2)] = null);

(statearr_27863_27925[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27802 === (14))){
var state_27801__$1 = state_27801;
var statearr_27864_27926 = state_27801__$1;
(statearr_27864_27926[(2)] = null);

(statearr_27864_27926[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27802 === (45))){
var inst_27791 = (state_27801[(2)]);
var state_27801__$1 = state_27801;
var statearr_27865_27927 = state_27801__$1;
(statearr_27865_27927[(2)] = inst_27791);

(statearr_27865_27927[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27802 === (26))){
var inst_27733 = (state_27801[(29)]);
var inst_27787 = (state_27801[(2)]);
var inst_27788 = cljs.core.seq.call(null,inst_27733);
var state_27801__$1 = (function (){var statearr_27866 = state_27801;
(statearr_27866[(31)] = inst_27787);

return statearr_27866;
})();
if(inst_27788){
var statearr_27867_27928 = state_27801__$1;
(statearr_27867_27928[(1)] = (42));

} else {
var statearr_27868_27929 = state_27801__$1;
(statearr_27868_27929[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27802 === (16))){
var inst_27700 = (state_27801[(7)]);
var inst_27702 = cljs.core.chunked_seq_QMARK_.call(null,inst_27700);
var state_27801__$1 = state_27801;
if(inst_27702){
var statearr_27869_27930 = state_27801__$1;
(statearr_27869_27930[(1)] = (19));

} else {
var statearr_27870_27931 = state_27801__$1;
(statearr_27870_27931[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27802 === (38))){
var inst_27780 = (state_27801[(2)]);
var state_27801__$1 = state_27801;
var statearr_27871_27932 = state_27801__$1;
(statearr_27871_27932[(2)] = inst_27780);

(statearr_27871_27932[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27802 === (30))){
var state_27801__$1 = state_27801;
var statearr_27872_27933 = state_27801__$1;
(statearr_27872_27933[(2)] = null);

(statearr_27872_27933[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27802 === (10))){
var inst_27681 = (state_27801[(13)]);
var inst_27679 = (state_27801[(15)]);
var inst_27689 = cljs.core._nth.call(null,inst_27679,inst_27681);
var inst_27690 = cljs.core.nth.call(null,inst_27689,(0),null);
var inst_27691 = cljs.core.nth.call(null,inst_27689,(1),null);
var state_27801__$1 = (function (){var statearr_27873 = state_27801;
(statearr_27873[(26)] = inst_27690);

return statearr_27873;
})();
if(cljs.core.truth_(inst_27691)){
var statearr_27874_27934 = state_27801__$1;
(statearr_27874_27934[(1)] = (13));

} else {
var statearr_27875_27935 = state_27801__$1;
(statearr_27875_27935[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27802 === (18))){
var inst_27726 = (state_27801[(2)]);
var state_27801__$1 = state_27801;
var statearr_27876_27936 = state_27801__$1;
(statearr_27876_27936[(2)] = inst_27726);

(statearr_27876_27936[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27802 === (42))){
var state_27801__$1 = state_27801;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27801__$1,(45),dchan);
} else {
if((state_val_27802 === (37))){
var inst_27760 = (state_27801[(25)]);
var inst_27769 = (state_27801[(23)]);
var inst_27669 = (state_27801[(9)]);
var inst_27769__$1 = cljs.core.first.call(null,inst_27760);
var inst_27770 = cljs.core.async.put_BANG_.call(null,inst_27769__$1,inst_27669,done);
var state_27801__$1 = (function (){var statearr_27877 = state_27801;
(statearr_27877[(23)] = inst_27769__$1);

return statearr_27877;
})();
if(cljs.core.truth_(inst_27770)){
var statearr_27878_27937 = state_27801__$1;
(statearr_27878_27937[(1)] = (39));

} else {
var statearr_27879_27938 = state_27801__$1;
(statearr_27879_27938[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27802 === (8))){
var inst_27681 = (state_27801[(13)]);
var inst_27680 = (state_27801[(17)]);
var inst_27683 = (inst_27681 < inst_27680);
var inst_27684 = inst_27683;
var state_27801__$1 = state_27801;
if(cljs.core.truth_(inst_27684)){
var statearr_27880_27939 = state_27801__$1;
(statearr_27880_27939[(1)] = (10));

} else {
var statearr_27881_27940 = state_27801__$1;
(statearr_27881_27940[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__26970__auto__ = null;
var cljs$core$async$mult_$_state_machine__26970__auto____0 = (function (){
var statearr_27882 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27882[(0)] = cljs$core$async$mult_$_state_machine__26970__auto__);

(statearr_27882[(1)] = (1));

return statearr_27882;
});
var cljs$core$async$mult_$_state_machine__26970__auto____1 = (function (state_27801){
while(true){
var ret_value__26971__auto__ = (function (){try{while(true){
var result__26972__auto__ = switch__26969__auto__.call(null,state_27801);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26972__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26972__auto__;
}
break;
}
}catch (e27883){if((e27883 instanceof Object)){
var ex__26973__auto__ = e27883;
var statearr_27884_27941 = state_27801;
(statearr_27884_27941[(5)] = ex__26973__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27801);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27883;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26971__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27942 = state_27801;
state_27801 = G__27942;
continue;
} else {
return ret_value__26971__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__26970__auto__ = function(state_27801){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__26970__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__26970__auto____1.call(this,state_27801);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__26970__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__26970__auto____0;
cljs$core$async$mult_$_state_machine__26970__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__26970__auto____1;
return cljs$core$async$mult_$_state_machine__26970__auto__;
})()
})();
var state__27066__auto__ = (function (){var statearr_27885 = f__27065__auto__.call(null);
(statearr_27885[(6)] = c__27064__auto___27886);

return statearr_27885;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27066__auto__);
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
var G__27944 = arguments.length;
switch (G__27944) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_27946 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_27946.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_27947 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_27947.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_27948 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_27948.call(null,m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_27949 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_27949.call(null,m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_27950 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_27950.call(null,m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___27961 = arguments.length;
var i__4737__auto___27962 = (0);
while(true){
if((i__4737__auto___27962 < len__4736__auto___27961)){
args__4742__auto__.push((arguments[i__4737__auto___27962]));

var G__27963 = (i__4737__auto___27962 + (1));
i__4737__auto___27962 = G__27963;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__27955){
var map__27956 = p__27955;
var map__27956__$1 = (((((!((map__27956 == null))))?(((((map__27956.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27956.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27956):map__27956);
var opts = map__27956__$1;
var statearr_27958_27964 = state;
(statearr_27958_27964[(1)] = cont_block);


var temp__5720__auto__ = cljs.core.async.do_alts.call(null,(function (val){
var statearr_27959_27965 = state;
(statearr_27959_27965[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
}),ports,opts);
if(cljs.core.truth_(temp__5720__auto__)){
var cb = temp__5720__auto__;
var statearr_27960_27966 = state;
(statearr_27960_27966[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq27951){
var G__27952 = cljs.core.first.call(null,seq27951);
var seq27951__$1 = cljs.core.next.call(null,seq27951);
var G__27953 = cljs.core.first.call(null,seq27951__$1);
var seq27951__$2 = cljs.core.next.call(null,seq27951__$1);
var G__27954 = cljs.core.first.call(null,seq27951__$2);
var seq27951__$3 = cljs.core.next.call(null,seq27951__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27952,G__27953,G__27954,seq27951__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27967 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27967 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta27968){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta27968 = meta27968;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async27967.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27969,meta27968__$1){
var self__ = this;
var _27969__$1 = this;
return (new cljs.core.async.t_cljs$core$async27967(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta27968__$1));
}));

(cljs.core.async.t_cljs$core$async27967.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27969){
var self__ = this;
var _27969__$1 = this;
return self__.meta27968;
}));

(cljs.core.async.t_cljs$core$async27967.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27967.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async27967.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27967.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async27967.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async27967.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async27967.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async27967.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async27967.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta27968","meta27968",-1900079016,null)], null);
}));

(cljs.core.async.t_cljs$core$async27967.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async27967.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27967");

(cljs.core.async.t_cljs$core$async27967.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async27967");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27967.
 */
cljs.core.async.__GT_t_cljs$core$async27967 = (function cljs$core$async$mix_$___GT_t_cljs$core$async27967(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta27968){
return (new cljs.core.async.t_cljs$core$async27967(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta27968));
});

}

return (new cljs.core.async.t_cljs$core$async27967(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__27064__auto___28131 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27065__auto__ = (function (){var switch__26969__auto__ = (function (state_28071){
var state_val_28072 = (state_28071[(1)]);
if((state_val_28072 === (7))){
var inst_27986 = (state_28071[(2)]);
var state_28071__$1 = state_28071;
var statearr_28073_28132 = state_28071__$1;
(statearr_28073_28132[(2)] = inst_27986);

(statearr_28073_28132[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28072 === (20))){
var inst_27998 = (state_28071[(7)]);
var state_28071__$1 = state_28071;
var statearr_28074_28133 = state_28071__$1;
(statearr_28074_28133[(2)] = inst_27998);

(statearr_28074_28133[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28072 === (27))){
var state_28071__$1 = state_28071;
var statearr_28075_28134 = state_28071__$1;
(statearr_28075_28134[(2)] = null);

(statearr_28075_28134[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28072 === (1))){
var inst_27973 = (state_28071[(8)]);
var inst_27973__$1 = calc_state.call(null);
var inst_27975 = (inst_27973__$1 == null);
var inst_27976 = cljs.core.not.call(null,inst_27975);
var state_28071__$1 = (function (){var statearr_28076 = state_28071;
(statearr_28076[(8)] = inst_27973__$1);

return statearr_28076;
})();
if(inst_27976){
var statearr_28077_28135 = state_28071__$1;
(statearr_28077_28135[(1)] = (2));

} else {
var statearr_28078_28136 = state_28071__$1;
(statearr_28078_28136[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28072 === (24))){
var inst_28022 = (state_28071[(9)]);
var inst_28045 = (state_28071[(10)]);
var inst_28031 = (state_28071[(11)]);
var inst_28045__$1 = inst_28022.call(null,inst_28031);
var state_28071__$1 = (function (){var statearr_28079 = state_28071;
(statearr_28079[(10)] = inst_28045__$1);

return statearr_28079;
})();
if(cljs.core.truth_(inst_28045__$1)){
var statearr_28080_28137 = state_28071__$1;
(statearr_28080_28137[(1)] = (29));

} else {
var statearr_28081_28138 = state_28071__$1;
(statearr_28081_28138[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28072 === (4))){
var inst_27989 = (state_28071[(2)]);
var state_28071__$1 = state_28071;
if(cljs.core.truth_(inst_27989)){
var statearr_28082_28139 = state_28071__$1;
(statearr_28082_28139[(1)] = (8));

} else {
var statearr_28083_28140 = state_28071__$1;
(statearr_28083_28140[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28072 === (15))){
var inst_28016 = (state_28071[(2)]);
var state_28071__$1 = state_28071;
if(cljs.core.truth_(inst_28016)){
var statearr_28084_28141 = state_28071__$1;
(statearr_28084_28141[(1)] = (19));

} else {
var statearr_28085_28142 = state_28071__$1;
(statearr_28085_28142[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28072 === (21))){
var inst_28021 = (state_28071[(12)]);
var inst_28021__$1 = (state_28071[(2)]);
var inst_28022 = cljs.core.get.call(null,inst_28021__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_28023 = cljs.core.get.call(null,inst_28021__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_28024 = cljs.core.get.call(null,inst_28021__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_28071__$1 = (function (){var statearr_28086 = state_28071;
(statearr_28086[(9)] = inst_28022);

(statearr_28086[(13)] = inst_28023);

(statearr_28086[(12)] = inst_28021__$1);

return statearr_28086;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_28071__$1,(22),inst_28024);
} else {
if((state_val_28072 === (31))){
var inst_28053 = (state_28071[(2)]);
var state_28071__$1 = state_28071;
if(cljs.core.truth_(inst_28053)){
var statearr_28087_28143 = state_28071__$1;
(statearr_28087_28143[(1)] = (32));

} else {
var statearr_28088_28144 = state_28071__$1;
(statearr_28088_28144[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28072 === (32))){
var inst_28030 = (state_28071[(14)]);
var state_28071__$1 = state_28071;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28071__$1,(35),out,inst_28030);
} else {
if((state_val_28072 === (33))){
var inst_28021 = (state_28071[(12)]);
var inst_27998 = inst_28021;
var state_28071__$1 = (function (){var statearr_28089 = state_28071;
(statearr_28089[(7)] = inst_27998);

return statearr_28089;
})();
var statearr_28090_28145 = state_28071__$1;
(statearr_28090_28145[(2)] = null);

(statearr_28090_28145[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28072 === (13))){
var inst_27998 = (state_28071[(7)]);
var inst_28005 = inst_27998.cljs$lang$protocol_mask$partition0$;
var inst_28006 = (inst_28005 & (64));
var inst_28007 = inst_27998.cljs$core$ISeq$;
var inst_28008 = (cljs.core.PROTOCOL_SENTINEL === inst_28007);
var inst_28009 = ((inst_28006) || (inst_28008));
var state_28071__$1 = state_28071;
if(cljs.core.truth_(inst_28009)){
var statearr_28091_28146 = state_28071__$1;
(statearr_28091_28146[(1)] = (16));

} else {
var statearr_28092_28147 = state_28071__$1;
(statearr_28092_28147[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28072 === (22))){
var inst_28030 = (state_28071[(14)]);
var inst_28031 = (state_28071[(11)]);
var inst_28029 = (state_28071[(2)]);
var inst_28030__$1 = cljs.core.nth.call(null,inst_28029,(0),null);
var inst_28031__$1 = cljs.core.nth.call(null,inst_28029,(1),null);
var inst_28032 = (inst_28030__$1 == null);
var inst_28033 = cljs.core._EQ_.call(null,inst_28031__$1,change);
var inst_28034 = ((inst_28032) || (inst_28033));
var state_28071__$1 = (function (){var statearr_28093 = state_28071;
(statearr_28093[(14)] = inst_28030__$1);

(statearr_28093[(11)] = inst_28031__$1);

return statearr_28093;
})();
if(cljs.core.truth_(inst_28034)){
var statearr_28094_28148 = state_28071__$1;
(statearr_28094_28148[(1)] = (23));

} else {
var statearr_28095_28149 = state_28071__$1;
(statearr_28095_28149[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28072 === (36))){
var inst_28021 = (state_28071[(12)]);
var inst_27998 = inst_28021;
var state_28071__$1 = (function (){var statearr_28096 = state_28071;
(statearr_28096[(7)] = inst_27998);

return statearr_28096;
})();
var statearr_28097_28150 = state_28071__$1;
(statearr_28097_28150[(2)] = null);

(statearr_28097_28150[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28072 === (29))){
var inst_28045 = (state_28071[(10)]);
var state_28071__$1 = state_28071;
var statearr_28098_28151 = state_28071__$1;
(statearr_28098_28151[(2)] = inst_28045);

(statearr_28098_28151[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28072 === (6))){
var state_28071__$1 = state_28071;
var statearr_28099_28152 = state_28071__$1;
(statearr_28099_28152[(2)] = false);

(statearr_28099_28152[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28072 === (28))){
var inst_28041 = (state_28071[(2)]);
var inst_28042 = calc_state.call(null);
var inst_27998 = inst_28042;
var state_28071__$1 = (function (){var statearr_28100 = state_28071;
(statearr_28100[(7)] = inst_27998);

(statearr_28100[(15)] = inst_28041);

return statearr_28100;
})();
var statearr_28101_28153 = state_28071__$1;
(statearr_28101_28153[(2)] = null);

(statearr_28101_28153[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28072 === (25))){
var inst_28067 = (state_28071[(2)]);
var state_28071__$1 = state_28071;
var statearr_28102_28154 = state_28071__$1;
(statearr_28102_28154[(2)] = inst_28067);

(statearr_28102_28154[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28072 === (34))){
var inst_28065 = (state_28071[(2)]);
var state_28071__$1 = state_28071;
var statearr_28103_28155 = state_28071__$1;
(statearr_28103_28155[(2)] = inst_28065);

(statearr_28103_28155[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28072 === (17))){
var state_28071__$1 = state_28071;
var statearr_28104_28156 = state_28071__$1;
(statearr_28104_28156[(2)] = false);

(statearr_28104_28156[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28072 === (3))){
var state_28071__$1 = state_28071;
var statearr_28105_28157 = state_28071__$1;
(statearr_28105_28157[(2)] = false);

(statearr_28105_28157[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28072 === (12))){
var inst_28069 = (state_28071[(2)]);
var state_28071__$1 = state_28071;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28071__$1,inst_28069);
} else {
if((state_val_28072 === (2))){
var inst_27973 = (state_28071[(8)]);
var inst_27978 = inst_27973.cljs$lang$protocol_mask$partition0$;
var inst_27979 = (inst_27978 & (64));
var inst_27980 = inst_27973.cljs$core$ISeq$;
var inst_27981 = (cljs.core.PROTOCOL_SENTINEL === inst_27980);
var inst_27982 = ((inst_27979) || (inst_27981));
var state_28071__$1 = state_28071;
if(cljs.core.truth_(inst_27982)){
var statearr_28106_28158 = state_28071__$1;
(statearr_28106_28158[(1)] = (5));

} else {
var statearr_28107_28159 = state_28071__$1;
(statearr_28107_28159[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28072 === (23))){
var inst_28030 = (state_28071[(14)]);
var inst_28036 = (inst_28030 == null);
var state_28071__$1 = state_28071;
if(cljs.core.truth_(inst_28036)){
var statearr_28108_28160 = state_28071__$1;
(statearr_28108_28160[(1)] = (26));

} else {
var statearr_28109_28161 = state_28071__$1;
(statearr_28109_28161[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28072 === (35))){
var inst_28056 = (state_28071[(2)]);
var state_28071__$1 = state_28071;
if(cljs.core.truth_(inst_28056)){
var statearr_28110_28162 = state_28071__$1;
(statearr_28110_28162[(1)] = (36));

} else {
var statearr_28111_28163 = state_28071__$1;
(statearr_28111_28163[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28072 === (19))){
var inst_27998 = (state_28071[(7)]);
var inst_28018 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27998);
var state_28071__$1 = state_28071;
var statearr_28112_28164 = state_28071__$1;
(statearr_28112_28164[(2)] = inst_28018);

(statearr_28112_28164[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28072 === (11))){
var inst_27998 = (state_28071[(7)]);
var inst_28002 = (inst_27998 == null);
var inst_28003 = cljs.core.not.call(null,inst_28002);
var state_28071__$1 = state_28071;
if(inst_28003){
var statearr_28113_28165 = state_28071__$1;
(statearr_28113_28165[(1)] = (13));

} else {
var statearr_28114_28166 = state_28071__$1;
(statearr_28114_28166[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28072 === (9))){
var inst_27973 = (state_28071[(8)]);
var state_28071__$1 = state_28071;
var statearr_28115_28167 = state_28071__$1;
(statearr_28115_28167[(2)] = inst_27973);

(statearr_28115_28167[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28072 === (5))){
var state_28071__$1 = state_28071;
var statearr_28116_28168 = state_28071__$1;
(statearr_28116_28168[(2)] = true);

(statearr_28116_28168[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28072 === (14))){
var state_28071__$1 = state_28071;
var statearr_28117_28169 = state_28071__$1;
(statearr_28117_28169[(2)] = false);

(statearr_28117_28169[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28072 === (26))){
var inst_28031 = (state_28071[(11)]);
var inst_28038 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_28031);
var state_28071__$1 = state_28071;
var statearr_28118_28170 = state_28071__$1;
(statearr_28118_28170[(2)] = inst_28038);

(statearr_28118_28170[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28072 === (16))){
var state_28071__$1 = state_28071;
var statearr_28119_28171 = state_28071__$1;
(statearr_28119_28171[(2)] = true);

(statearr_28119_28171[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28072 === (38))){
var inst_28061 = (state_28071[(2)]);
var state_28071__$1 = state_28071;
var statearr_28120_28172 = state_28071__$1;
(statearr_28120_28172[(2)] = inst_28061);

(statearr_28120_28172[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28072 === (30))){
var inst_28022 = (state_28071[(9)]);
var inst_28023 = (state_28071[(13)]);
var inst_28031 = (state_28071[(11)]);
var inst_28048 = cljs.core.empty_QMARK_.call(null,inst_28022);
var inst_28049 = inst_28023.call(null,inst_28031);
var inst_28050 = cljs.core.not.call(null,inst_28049);
var inst_28051 = ((inst_28048) && (inst_28050));
var state_28071__$1 = state_28071;
var statearr_28121_28173 = state_28071__$1;
(statearr_28121_28173[(2)] = inst_28051);

(statearr_28121_28173[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28072 === (10))){
var inst_27973 = (state_28071[(8)]);
var inst_27994 = (state_28071[(2)]);
var inst_27995 = cljs.core.get.call(null,inst_27994,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_27996 = cljs.core.get.call(null,inst_27994,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_27997 = cljs.core.get.call(null,inst_27994,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_27998 = inst_27973;
var state_28071__$1 = (function (){var statearr_28122 = state_28071;
(statearr_28122[(7)] = inst_27998);

(statearr_28122[(16)] = inst_27996);

(statearr_28122[(17)] = inst_27997);

(statearr_28122[(18)] = inst_27995);

return statearr_28122;
})();
var statearr_28123_28174 = state_28071__$1;
(statearr_28123_28174[(2)] = null);

(statearr_28123_28174[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28072 === (18))){
var inst_28013 = (state_28071[(2)]);
var state_28071__$1 = state_28071;
var statearr_28124_28175 = state_28071__$1;
(statearr_28124_28175[(2)] = inst_28013);

(statearr_28124_28175[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28072 === (37))){
var state_28071__$1 = state_28071;
var statearr_28125_28176 = state_28071__$1;
(statearr_28125_28176[(2)] = null);

(statearr_28125_28176[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28072 === (8))){
var inst_27973 = (state_28071[(8)]);
var inst_27991 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27973);
var state_28071__$1 = state_28071;
var statearr_28126_28177 = state_28071__$1;
(statearr_28126_28177[(2)] = inst_27991);

(statearr_28126_28177[(1)] = (10));


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
var cljs$core$async$mix_$_state_machine__26970__auto__ = null;
var cljs$core$async$mix_$_state_machine__26970__auto____0 = (function (){
var statearr_28127 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28127[(0)] = cljs$core$async$mix_$_state_machine__26970__auto__);

(statearr_28127[(1)] = (1));

return statearr_28127;
});
var cljs$core$async$mix_$_state_machine__26970__auto____1 = (function (state_28071){
while(true){
var ret_value__26971__auto__ = (function (){try{while(true){
var result__26972__auto__ = switch__26969__auto__.call(null,state_28071);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26972__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26972__auto__;
}
break;
}
}catch (e28128){if((e28128 instanceof Object)){
var ex__26973__auto__ = e28128;
var statearr_28129_28178 = state_28071;
(statearr_28129_28178[(5)] = ex__26973__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28071);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28128;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26971__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28179 = state_28071;
state_28071 = G__28179;
continue;
} else {
return ret_value__26971__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__26970__auto__ = function(state_28071){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__26970__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__26970__auto____1.call(this,state_28071);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__26970__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__26970__auto____0;
cljs$core$async$mix_$_state_machine__26970__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__26970__auto____1;
return cljs$core$async$mix_$_state_machine__26970__auto__;
})()
})();
var state__27066__auto__ = (function (){var statearr_28130 = f__27065__auto__.call(null);
(statearr_28130[(6)] = c__27064__auto___28131);

return statearr_28130;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27066__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_28182 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_28182.call(null,p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_28183 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_28183.call(null,p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_28184 = (function() {
var G__28185 = null;
var G__28185__1 = (function (p){
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
var G__28185__2 = (function (p,v){
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
G__28185 = function(p,v){
switch(arguments.length){
case 1:
return G__28185__1.call(this,p);
case 2:
return G__28185__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__28185.cljs$core$IFn$_invoke$arity$1 = G__28185__1;
G__28185.cljs$core$IFn$_invoke$arity$2 = G__28185__2;
return G__28185;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__28181 = arguments.length;
switch (G__28181) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_28184.call(null,p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_28184.call(null,p,v);
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
var G__28189 = arguments.length;
switch (G__28189) {
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
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,(function (p1__28187_SHARP_){
if(cljs.core.truth_(p1__28187_SHARP_.call(null,topic))){
return p1__28187_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__28187_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28190 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28190 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta28191){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta28191 = meta28191;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async28190.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28192,meta28191__$1){
var self__ = this;
var _28192__$1 = this;
return (new cljs.core.async.t_cljs$core$async28190(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta28191__$1));
}));

(cljs.core.async.t_cljs$core$async28190.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28192){
var self__ = this;
var _28192__$1 = this;
return self__.meta28191;
}));

(cljs.core.async.t_cljs$core$async28190.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28190.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async28190.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28190.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async28190.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async28190.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async28190.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async28190.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta28191","meta28191",1818053051,null)], null);
}));

(cljs.core.async.t_cljs$core$async28190.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async28190.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28190");

(cljs.core.async.t_cljs$core$async28190.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async28190");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28190.
 */
cljs.core.async.__GT_t_cljs$core$async28190 = (function cljs$core$async$__GT_t_cljs$core$async28190(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta28191){
return (new cljs.core.async.t_cljs$core$async28190(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta28191));
});

}

return (new cljs.core.async.t_cljs$core$async28190(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__27064__auto___28310 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27065__auto__ = (function (){var switch__26969__auto__ = (function (state_28264){
var state_val_28265 = (state_28264[(1)]);
if((state_val_28265 === (7))){
var inst_28260 = (state_28264[(2)]);
var state_28264__$1 = state_28264;
var statearr_28266_28311 = state_28264__$1;
(statearr_28266_28311[(2)] = inst_28260);

(statearr_28266_28311[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28265 === (20))){
var state_28264__$1 = state_28264;
var statearr_28267_28312 = state_28264__$1;
(statearr_28267_28312[(2)] = null);

(statearr_28267_28312[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28265 === (1))){
var state_28264__$1 = state_28264;
var statearr_28268_28313 = state_28264__$1;
(statearr_28268_28313[(2)] = null);

(statearr_28268_28313[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28265 === (24))){
var inst_28243 = (state_28264[(7)]);
var inst_28252 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_28243);
var state_28264__$1 = state_28264;
var statearr_28269_28314 = state_28264__$1;
(statearr_28269_28314[(2)] = inst_28252);

(statearr_28269_28314[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28265 === (4))){
var inst_28195 = (state_28264[(8)]);
var inst_28195__$1 = (state_28264[(2)]);
var inst_28196 = (inst_28195__$1 == null);
var state_28264__$1 = (function (){var statearr_28270 = state_28264;
(statearr_28270[(8)] = inst_28195__$1);

return statearr_28270;
})();
if(cljs.core.truth_(inst_28196)){
var statearr_28271_28315 = state_28264__$1;
(statearr_28271_28315[(1)] = (5));

} else {
var statearr_28272_28316 = state_28264__$1;
(statearr_28272_28316[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28265 === (15))){
var inst_28237 = (state_28264[(2)]);
var state_28264__$1 = state_28264;
var statearr_28273_28317 = state_28264__$1;
(statearr_28273_28317[(2)] = inst_28237);

(statearr_28273_28317[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28265 === (21))){
var inst_28257 = (state_28264[(2)]);
var state_28264__$1 = (function (){var statearr_28274 = state_28264;
(statearr_28274[(9)] = inst_28257);

return statearr_28274;
})();
var statearr_28275_28318 = state_28264__$1;
(statearr_28275_28318[(2)] = null);

(statearr_28275_28318[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28265 === (13))){
var inst_28219 = (state_28264[(10)]);
var inst_28221 = cljs.core.chunked_seq_QMARK_.call(null,inst_28219);
var state_28264__$1 = state_28264;
if(inst_28221){
var statearr_28276_28319 = state_28264__$1;
(statearr_28276_28319[(1)] = (16));

} else {
var statearr_28277_28320 = state_28264__$1;
(statearr_28277_28320[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28265 === (22))){
var inst_28249 = (state_28264[(2)]);
var state_28264__$1 = state_28264;
if(cljs.core.truth_(inst_28249)){
var statearr_28278_28321 = state_28264__$1;
(statearr_28278_28321[(1)] = (23));

} else {
var statearr_28279_28322 = state_28264__$1;
(statearr_28279_28322[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28265 === (6))){
var inst_28243 = (state_28264[(7)]);
var inst_28245 = (state_28264[(11)]);
var inst_28195 = (state_28264[(8)]);
var inst_28243__$1 = topic_fn.call(null,inst_28195);
var inst_28244 = cljs.core.deref.call(null,mults);
var inst_28245__$1 = cljs.core.get.call(null,inst_28244,inst_28243__$1);
var state_28264__$1 = (function (){var statearr_28280 = state_28264;
(statearr_28280[(7)] = inst_28243__$1);

(statearr_28280[(11)] = inst_28245__$1);

return statearr_28280;
})();
if(cljs.core.truth_(inst_28245__$1)){
var statearr_28281_28323 = state_28264__$1;
(statearr_28281_28323[(1)] = (19));

} else {
var statearr_28282_28324 = state_28264__$1;
(statearr_28282_28324[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28265 === (25))){
var inst_28254 = (state_28264[(2)]);
var state_28264__$1 = state_28264;
var statearr_28283_28325 = state_28264__$1;
(statearr_28283_28325[(2)] = inst_28254);

(statearr_28283_28325[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28265 === (17))){
var inst_28219 = (state_28264[(10)]);
var inst_28228 = cljs.core.first.call(null,inst_28219);
var inst_28229 = cljs.core.async.muxch_STAR_.call(null,inst_28228);
var inst_28230 = cljs.core.async.close_BANG_.call(null,inst_28229);
var inst_28231 = cljs.core.next.call(null,inst_28219);
var inst_28205 = inst_28231;
var inst_28206 = null;
var inst_28207 = (0);
var inst_28208 = (0);
var state_28264__$1 = (function (){var statearr_28284 = state_28264;
(statearr_28284[(12)] = inst_28206);

(statearr_28284[(13)] = inst_28207);

(statearr_28284[(14)] = inst_28230);

(statearr_28284[(15)] = inst_28205);

(statearr_28284[(16)] = inst_28208);

return statearr_28284;
})();
var statearr_28285_28326 = state_28264__$1;
(statearr_28285_28326[(2)] = null);

(statearr_28285_28326[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28265 === (3))){
var inst_28262 = (state_28264[(2)]);
var state_28264__$1 = state_28264;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28264__$1,inst_28262);
} else {
if((state_val_28265 === (12))){
var inst_28239 = (state_28264[(2)]);
var state_28264__$1 = state_28264;
var statearr_28286_28327 = state_28264__$1;
(statearr_28286_28327[(2)] = inst_28239);

(statearr_28286_28327[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28265 === (2))){
var state_28264__$1 = state_28264;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28264__$1,(4),ch);
} else {
if((state_val_28265 === (23))){
var state_28264__$1 = state_28264;
var statearr_28287_28328 = state_28264__$1;
(statearr_28287_28328[(2)] = null);

(statearr_28287_28328[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28265 === (19))){
var inst_28245 = (state_28264[(11)]);
var inst_28195 = (state_28264[(8)]);
var inst_28247 = cljs.core.async.muxch_STAR_.call(null,inst_28245);
var state_28264__$1 = state_28264;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28264__$1,(22),inst_28247,inst_28195);
} else {
if((state_val_28265 === (11))){
var inst_28219 = (state_28264[(10)]);
var inst_28205 = (state_28264[(15)]);
var inst_28219__$1 = cljs.core.seq.call(null,inst_28205);
var state_28264__$1 = (function (){var statearr_28288 = state_28264;
(statearr_28288[(10)] = inst_28219__$1);

return statearr_28288;
})();
if(inst_28219__$1){
var statearr_28289_28329 = state_28264__$1;
(statearr_28289_28329[(1)] = (13));

} else {
var statearr_28290_28330 = state_28264__$1;
(statearr_28290_28330[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28265 === (9))){
var inst_28241 = (state_28264[(2)]);
var state_28264__$1 = state_28264;
var statearr_28291_28331 = state_28264__$1;
(statearr_28291_28331[(2)] = inst_28241);

(statearr_28291_28331[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28265 === (5))){
var inst_28202 = cljs.core.deref.call(null,mults);
var inst_28203 = cljs.core.vals.call(null,inst_28202);
var inst_28204 = cljs.core.seq.call(null,inst_28203);
var inst_28205 = inst_28204;
var inst_28206 = null;
var inst_28207 = (0);
var inst_28208 = (0);
var state_28264__$1 = (function (){var statearr_28292 = state_28264;
(statearr_28292[(12)] = inst_28206);

(statearr_28292[(13)] = inst_28207);

(statearr_28292[(15)] = inst_28205);

(statearr_28292[(16)] = inst_28208);

return statearr_28292;
})();
var statearr_28293_28332 = state_28264__$1;
(statearr_28293_28332[(2)] = null);

(statearr_28293_28332[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28265 === (14))){
var state_28264__$1 = state_28264;
var statearr_28297_28333 = state_28264__$1;
(statearr_28297_28333[(2)] = null);

(statearr_28297_28333[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28265 === (16))){
var inst_28219 = (state_28264[(10)]);
var inst_28223 = cljs.core.chunk_first.call(null,inst_28219);
var inst_28224 = cljs.core.chunk_rest.call(null,inst_28219);
var inst_28225 = cljs.core.count.call(null,inst_28223);
var inst_28205 = inst_28224;
var inst_28206 = inst_28223;
var inst_28207 = inst_28225;
var inst_28208 = (0);
var state_28264__$1 = (function (){var statearr_28298 = state_28264;
(statearr_28298[(12)] = inst_28206);

(statearr_28298[(13)] = inst_28207);

(statearr_28298[(15)] = inst_28205);

(statearr_28298[(16)] = inst_28208);

return statearr_28298;
})();
var statearr_28299_28334 = state_28264__$1;
(statearr_28299_28334[(2)] = null);

(statearr_28299_28334[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28265 === (10))){
var inst_28206 = (state_28264[(12)]);
var inst_28207 = (state_28264[(13)]);
var inst_28205 = (state_28264[(15)]);
var inst_28208 = (state_28264[(16)]);
var inst_28213 = cljs.core._nth.call(null,inst_28206,inst_28208);
var inst_28214 = cljs.core.async.muxch_STAR_.call(null,inst_28213);
var inst_28215 = cljs.core.async.close_BANG_.call(null,inst_28214);
var inst_28216 = (inst_28208 + (1));
var tmp28294 = inst_28206;
var tmp28295 = inst_28207;
var tmp28296 = inst_28205;
var inst_28205__$1 = tmp28296;
var inst_28206__$1 = tmp28294;
var inst_28207__$1 = tmp28295;
var inst_28208__$1 = inst_28216;
var state_28264__$1 = (function (){var statearr_28300 = state_28264;
(statearr_28300[(12)] = inst_28206__$1);

(statearr_28300[(13)] = inst_28207__$1);

(statearr_28300[(15)] = inst_28205__$1);

(statearr_28300[(17)] = inst_28215);

(statearr_28300[(16)] = inst_28208__$1);

return statearr_28300;
})();
var statearr_28301_28335 = state_28264__$1;
(statearr_28301_28335[(2)] = null);

(statearr_28301_28335[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28265 === (18))){
var inst_28234 = (state_28264[(2)]);
var state_28264__$1 = state_28264;
var statearr_28302_28336 = state_28264__$1;
(statearr_28302_28336[(2)] = inst_28234);

(statearr_28302_28336[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28265 === (8))){
var inst_28207 = (state_28264[(13)]);
var inst_28208 = (state_28264[(16)]);
var inst_28210 = (inst_28208 < inst_28207);
var inst_28211 = inst_28210;
var state_28264__$1 = state_28264;
if(cljs.core.truth_(inst_28211)){
var statearr_28303_28337 = state_28264__$1;
(statearr_28303_28337[(1)] = (10));

} else {
var statearr_28304_28338 = state_28264__$1;
(statearr_28304_28338[(1)] = (11));

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
var cljs$core$async$state_machine__26970__auto__ = null;
var cljs$core$async$state_machine__26970__auto____0 = (function (){
var statearr_28305 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28305[(0)] = cljs$core$async$state_machine__26970__auto__);

(statearr_28305[(1)] = (1));

return statearr_28305;
});
var cljs$core$async$state_machine__26970__auto____1 = (function (state_28264){
while(true){
var ret_value__26971__auto__ = (function (){try{while(true){
var result__26972__auto__ = switch__26969__auto__.call(null,state_28264);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26972__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26972__auto__;
}
break;
}
}catch (e28306){if((e28306 instanceof Object)){
var ex__26973__auto__ = e28306;
var statearr_28307_28339 = state_28264;
(statearr_28307_28339[(5)] = ex__26973__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28264);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28306;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26971__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28340 = state_28264;
state_28264 = G__28340;
continue;
} else {
return ret_value__26971__auto__;
}
break;
}
});
cljs$core$async$state_machine__26970__auto__ = function(state_28264){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26970__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26970__auto____1.call(this,state_28264);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26970__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26970__auto____0;
cljs$core$async$state_machine__26970__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26970__auto____1;
return cljs$core$async$state_machine__26970__auto__;
})()
})();
var state__27066__auto__ = (function (){var statearr_28308 = f__27065__auto__.call(null);
(statearr_28308[(6)] = c__27064__auto___28310);

return statearr_28308;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27066__auto__);
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
var G__28342 = arguments.length;
switch (G__28342) {
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
var G__28345 = arguments.length;
switch (G__28345) {
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
var G__28348 = arguments.length;
switch (G__28348) {
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
var c__27064__auto___28415 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27065__auto__ = (function (){var switch__26969__auto__ = (function (state_28387){
var state_val_28388 = (state_28387[(1)]);
if((state_val_28388 === (7))){
var state_28387__$1 = state_28387;
var statearr_28389_28416 = state_28387__$1;
(statearr_28389_28416[(2)] = null);

(statearr_28389_28416[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28388 === (1))){
var state_28387__$1 = state_28387;
var statearr_28390_28417 = state_28387__$1;
(statearr_28390_28417[(2)] = null);

(statearr_28390_28417[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28388 === (4))){
var inst_28351 = (state_28387[(7)]);
var inst_28353 = (inst_28351 < cnt);
var state_28387__$1 = state_28387;
if(cljs.core.truth_(inst_28353)){
var statearr_28391_28418 = state_28387__$1;
(statearr_28391_28418[(1)] = (6));

} else {
var statearr_28392_28419 = state_28387__$1;
(statearr_28392_28419[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28388 === (15))){
var inst_28383 = (state_28387[(2)]);
var state_28387__$1 = state_28387;
var statearr_28393_28420 = state_28387__$1;
(statearr_28393_28420[(2)] = inst_28383);

(statearr_28393_28420[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28388 === (13))){
var inst_28376 = cljs.core.async.close_BANG_.call(null,out);
var state_28387__$1 = state_28387;
var statearr_28394_28421 = state_28387__$1;
(statearr_28394_28421[(2)] = inst_28376);

(statearr_28394_28421[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28388 === (6))){
var state_28387__$1 = state_28387;
var statearr_28395_28422 = state_28387__$1;
(statearr_28395_28422[(2)] = null);

(statearr_28395_28422[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28388 === (3))){
var inst_28385 = (state_28387[(2)]);
var state_28387__$1 = state_28387;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28387__$1,inst_28385);
} else {
if((state_val_28388 === (12))){
var inst_28373 = (state_28387[(8)]);
var inst_28373__$1 = (state_28387[(2)]);
var inst_28374 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_28373__$1);
var state_28387__$1 = (function (){var statearr_28396 = state_28387;
(statearr_28396[(8)] = inst_28373__$1);

return statearr_28396;
})();
if(cljs.core.truth_(inst_28374)){
var statearr_28397_28423 = state_28387__$1;
(statearr_28397_28423[(1)] = (13));

} else {
var statearr_28398_28424 = state_28387__$1;
(statearr_28398_28424[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28388 === (2))){
var inst_28350 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_28351 = (0);
var state_28387__$1 = (function (){var statearr_28399 = state_28387;
(statearr_28399[(9)] = inst_28350);

(statearr_28399[(7)] = inst_28351);

return statearr_28399;
})();
var statearr_28400_28425 = state_28387__$1;
(statearr_28400_28425[(2)] = null);

(statearr_28400_28425[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28388 === (11))){
var inst_28351 = (state_28387[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_28387,(10),Object,null,(9));
var inst_28360 = chs__$1.call(null,inst_28351);
var inst_28361 = done.call(null,inst_28351);
var inst_28362 = cljs.core.async.take_BANG_.call(null,inst_28360,inst_28361);
var state_28387__$1 = state_28387;
var statearr_28401_28426 = state_28387__$1;
(statearr_28401_28426[(2)] = inst_28362);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28387__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28388 === (9))){
var inst_28351 = (state_28387[(7)]);
var inst_28364 = (state_28387[(2)]);
var inst_28365 = (inst_28351 + (1));
var inst_28351__$1 = inst_28365;
var state_28387__$1 = (function (){var statearr_28402 = state_28387;
(statearr_28402[(7)] = inst_28351__$1);

(statearr_28402[(10)] = inst_28364);

return statearr_28402;
})();
var statearr_28403_28427 = state_28387__$1;
(statearr_28403_28427[(2)] = null);

(statearr_28403_28427[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28388 === (5))){
var inst_28371 = (state_28387[(2)]);
var state_28387__$1 = (function (){var statearr_28404 = state_28387;
(statearr_28404[(11)] = inst_28371);

return statearr_28404;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28387__$1,(12),dchan);
} else {
if((state_val_28388 === (14))){
var inst_28373 = (state_28387[(8)]);
var inst_28378 = cljs.core.apply.call(null,f,inst_28373);
var state_28387__$1 = state_28387;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28387__$1,(16),out,inst_28378);
} else {
if((state_val_28388 === (16))){
var inst_28380 = (state_28387[(2)]);
var state_28387__$1 = (function (){var statearr_28405 = state_28387;
(statearr_28405[(12)] = inst_28380);

return statearr_28405;
})();
var statearr_28406_28428 = state_28387__$1;
(statearr_28406_28428[(2)] = null);

(statearr_28406_28428[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28388 === (10))){
var inst_28355 = (state_28387[(2)]);
var inst_28356 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_28387__$1 = (function (){var statearr_28407 = state_28387;
(statearr_28407[(13)] = inst_28355);

return statearr_28407;
})();
var statearr_28408_28429 = state_28387__$1;
(statearr_28408_28429[(2)] = inst_28356);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28387__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28388 === (8))){
var inst_28369 = (state_28387[(2)]);
var state_28387__$1 = state_28387;
var statearr_28409_28430 = state_28387__$1;
(statearr_28409_28430[(2)] = inst_28369);

(statearr_28409_28430[(1)] = (5));


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
var cljs$core$async$state_machine__26970__auto__ = null;
var cljs$core$async$state_machine__26970__auto____0 = (function (){
var statearr_28410 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28410[(0)] = cljs$core$async$state_machine__26970__auto__);

(statearr_28410[(1)] = (1));

return statearr_28410;
});
var cljs$core$async$state_machine__26970__auto____1 = (function (state_28387){
while(true){
var ret_value__26971__auto__ = (function (){try{while(true){
var result__26972__auto__ = switch__26969__auto__.call(null,state_28387);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26972__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26972__auto__;
}
break;
}
}catch (e28411){if((e28411 instanceof Object)){
var ex__26973__auto__ = e28411;
var statearr_28412_28431 = state_28387;
(statearr_28412_28431[(5)] = ex__26973__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28387);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28411;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26971__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28432 = state_28387;
state_28387 = G__28432;
continue;
} else {
return ret_value__26971__auto__;
}
break;
}
});
cljs$core$async$state_machine__26970__auto__ = function(state_28387){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26970__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26970__auto____1.call(this,state_28387);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26970__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26970__auto____0;
cljs$core$async$state_machine__26970__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26970__auto____1;
return cljs$core$async$state_machine__26970__auto__;
})()
})();
var state__27066__auto__ = (function (){var statearr_28413 = f__27065__auto__.call(null);
(statearr_28413[(6)] = c__27064__auto___28415);

return statearr_28413;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27066__auto__);
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
var G__28435 = arguments.length;
switch (G__28435) {
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
var c__27064__auto___28489 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27065__auto__ = (function (){var switch__26969__auto__ = (function (state_28467){
var state_val_28468 = (state_28467[(1)]);
if((state_val_28468 === (7))){
var inst_28446 = (state_28467[(7)]);
var inst_28447 = (state_28467[(8)]);
var inst_28446__$1 = (state_28467[(2)]);
var inst_28447__$1 = cljs.core.nth.call(null,inst_28446__$1,(0),null);
var inst_28448 = cljs.core.nth.call(null,inst_28446__$1,(1),null);
var inst_28449 = (inst_28447__$1 == null);
var state_28467__$1 = (function (){var statearr_28469 = state_28467;
(statearr_28469[(7)] = inst_28446__$1);

(statearr_28469[(9)] = inst_28448);

(statearr_28469[(8)] = inst_28447__$1);

return statearr_28469;
})();
if(cljs.core.truth_(inst_28449)){
var statearr_28470_28490 = state_28467__$1;
(statearr_28470_28490[(1)] = (8));

} else {
var statearr_28471_28491 = state_28467__$1;
(statearr_28471_28491[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28468 === (1))){
var inst_28436 = cljs.core.vec.call(null,chs);
var inst_28437 = inst_28436;
var state_28467__$1 = (function (){var statearr_28472 = state_28467;
(statearr_28472[(10)] = inst_28437);

return statearr_28472;
})();
var statearr_28473_28492 = state_28467__$1;
(statearr_28473_28492[(2)] = null);

(statearr_28473_28492[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28468 === (4))){
var inst_28437 = (state_28467[(10)]);
var state_28467__$1 = state_28467;
return cljs.core.async.ioc_alts_BANG_.call(null,state_28467__$1,(7),inst_28437);
} else {
if((state_val_28468 === (6))){
var inst_28463 = (state_28467[(2)]);
var state_28467__$1 = state_28467;
var statearr_28474_28493 = state_28467__$1;
(statearr_28474_28493[(2)] = inst_28463);

(statearr_28474_28493[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28468 === (3))){
var inst_28465 = (state_28467[(2)]);
var state_28467__$1 = state_28467;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28467__$1,inst_28465);
} else {
if((state_val_28468 === (2))){
var inst_28437 = (state_28467[(10)]);
var inst_28439 = cljs.core.count.call(null,inst_28437);
var inst_28440 = (inst_28439 > (0));
var state_28467__$1 = state_28467;
if(cljs.core.truth_(inst_28440)){
var statearr_28476_28494 = state_28467__$1;
(statearr_28476_28494[(1)] = (4));

} else {
var statearr_28477_28495 = state_28467__$1;
(statearr_28477_28495[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28468 === (11))){
var inst_28437 = (state_28467[(10)]);
var inst_28456 = (state_28467[(2)]);
var tmp28475 = inst_28437;
var inst_28437__$1 = tmp28475;
var state_28467__$1 = (function (){var statearr_28478 = state_28467;
(statearr_28478[(11)] = inst_28456);

(statearr_28478[(10)] = inst_28437__$1);

return statearr_28478;
})();
var statearr_28479_28496 = state_28467__$1;
(statearr_28479_28496[(2)] = null);

(statearr_28479_28496[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28468 === (9))){
var inst_28447 = (state_28467[(8)]);
var state_28467__$1 = state_28467;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28467__$1,(11),out,inst_28447);
} else {
if((state_val_28468 === (5))){
var inst_28461 = cljs.core.async.close_BANG_.call(null,out);
var state_28467__$1 = state_28467;
var statearr_28480_28497 = state_28467__$1;
(statearr_28480_28497[(2)] = inst_28461);

(statearr_28480_28497[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28468 === (10))){
var inst_28459 = (state_28467[(2)]);
var state_28467__$1 = state_28467;
var statearr_28481_28498 = state_28467__$1;
(statearr_28481_28498[(2)] = inst_28459);

(statearr_28481_28498[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28468 === (8))){
var inst_28446 = (state_28467[(7)]);
var inst_28448 = (state_28467[(9)]);
var inst_28447 = (state_28467[(8)]);
var inst_28437 = (state_28467[(10)]);
var inst_28451 = (function (){var cs = inst_28437;
var vec__28442 = inst_28446;
var v = inst_28447;
var c = inst_28448;
return (function (p1__28433_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__28433_SHARP_);
});
})();
var inst_28452 = cljs.core.filterv.call(null,inst_28451,inst_28437);
var inst_28437__$1 = inst_28452;
var state_28467__$1 = (function (){var statearr_28482 = state_28467;
(statearr_28482[(10)] = inst_28437__$1);

return statearr_28482;
})();
var statearr_28483_28499 = state_28467__$1;
(statearr_28483_28499[(2)] = null);

(statearr_28483_28499[(1)] = (2));


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
var cljs$core$async$state_machine__26970__auto__ = null;
var cljs$core$async$state_machine__26970__auto____0 = (function (){
var statearr_28484 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28484[(0)] = cljs$core$async$state_machine__26970__auto__);

(statearr_28484[(1)] = (1));

return statearr_28484;
});
var cljs$core$async$state_machine__26970__auto____1 = (function (state_28467){
while(true){
var ret_value__26971__auto__ = (function (){try{while(true){
var result__26972__auto__ = switch__26969__auto__.call(null,state_28467);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26972__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26972__auto__;
}
break;
}
}catch (e28485){if((e28485 instanceof Object)){
var ex__26973__auto__ = e28485;
var statearr_28486_28500 = state_28467;
(statearr_28486_28500[(5)] = ex__26973__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28467);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28485;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26971__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28501 = state_28467;
state_28467 = G__28501;
continue;
} else {
return ret_value__26971__auto__;
}
break;
}
});
cljs$core$async$state_machine__26970__auto__ = function(state_28467){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26970__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26970__auto____1.call(this,state_28467);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26970__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26970__auto____0;
cljs$core$async$state_machine__26970__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26970__auto____1;
return cljs$core$async$state_machine__26970__auto__;
})()
})();
var state__27066__auto__ = (function (){var statearr_28487 = f__27065__auto__.call(null);
(statearr_28487[(6)] = c__27064__auto___28489);

return statearr_28487;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27066__auto__);
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
var G__28503 = arguments.length;
switch (G__28503) {
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
var c__27064__auto___28548 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27065__auto__ = (function (){var switch__26969__auto__ = (function (state_28527){
var state_val_28528 = (state_28527[(1)]);
if((state_val_28528 === (7))){
var inst_28509 = (state_28527[(7)]);
var inst_28509__$1 = (state_28527[(2)]);
var inst_28510 = (inst_28509__$1 == null);
var inst_28511 = cljs.core.not.call(null,inst_28510);
var state_28527__$1 = (function (){var statearr_28529 = state_28527;
(statearr_28529[(7)] = inst_28509__$1);

return statearr_28529;
})();
if(inst_28511){
var statearr_28530_28549 = state_28527__$1;
(statearr_28530_28549[(1)] = (8));

} else {
var statearr_28531_28550 = state_28527__$1;
(statearr_28531_28550[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28528 === (1))){
var inst_28504 = (0);
var state_28527__$1 = (function (){var statearr_28532 = state_28527;
(statearr_28532[(8)] = inst_28504);

return statearr_28532;
})();
var statearr_28533_28551 = state_28527__$1;
(statearr_28533_28551[(2)] = null);

(statearr_28533_28551[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28528 === (4))){
var state_28527__$1 = state_28527;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28527__$1,(7),ch);
} else {
if((state_val_28528 === (6))){
var inst_28522 = (state_28527[(2)]);
var state_28527__$1 = state_28527;
var statearr_28534_28552 = state_28527__$1;
(statearr_28534_28552[(2)] = inst_28522);

(statearr_28534_28552[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28528 === (3))){
var inst_28524 = (state_28527[(2)]);
var inst_28525 = cljs.core.async.close_BANG_.call(null,out);
var state_28527__$1 = (function (){var statearr_28535 = state_28527;
(statearr_28535[(9)] = inst_28524);

return statearr_28535;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28527__$1,inst_28525);
} else {
if((state_val_28528 === (2))){
var inst_28504 = (state_28527[(8)]);
var inst_28506 = (inst_28504 < n);
var state_28527__$1 = state_28527;
if(cljs.core.truth_(inst_28506)){
var statearr_28536_28553 = state_28527__$1;
(statearr_28536_28553[(1)] = (4));

} else {
var statearr_28537_28554 = state_28527__$1;
(statearr_28537_28554[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28528 === (11))){
var inst_28504 = (state_28527[(8)]);
var inst_28514 = (state_28527[(2)]);
var inst_28515 = (inst_28504 + (1));
var inst_28504__$1 = inst_28515;
var state_28527__$1 = (function (){var statearr_28538 = state_28527;
(statearr_28538[(8)] = inst_28504__$1);

(statearr_28538[(10)] = inst_28514);

return statearr_28538;
})();
var statearr_28539_28555 = state_28527__$1;
(statearr_28539_28555[(2)] = null);

(statearr_28539_28555[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28528 === (9))){
var state_28527__$1 = state_28527;
var statearr_28540_28556 = state_28527__$1;
(statearr_28540_28556[(2)] = null);

(statearr_28540_28556[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28528 === (5))){
var state_28527__$1 = state_28527;
var statearr_28541_28557 = state_28527__$1;
(statearr_28541_28557[(2)] = null);

(statearr_28541_28557[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28528 === (10))){
var inst_28519 = (state_28527[(2)]);
var state_28527__$1 = state_28527;
var statearr_28542_28558 = state_28527__$1;
(statearr_28542_28558[(2)] = inst_28519);

(statearr_28542_28558[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28528 === (8))){
var inst_28509 = (state_28527[(7)]);
var state_28527__$1 = state_28527;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28527__$1,(11),out,inst_28509);
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
var cljs$core$async$state_machine__26970__auto__ = null;
var cljs$core$async$state_machine__26970__auto____0 = (function (){
var statearr_28543 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28543[(0)] = cljs$core$async$state_machine__26970__auto__);

(statearr_28543[(1)] = (1));

return statearr_28543;
});
var cljs$core$async$state_machine__26970__auto____1 = (function (state_28527){
while(true){
var ret_value__26971__auto__ = (function (){try{while(true){
var result__26972__auto__ = switch__26969__auto__.call(null,state_28527);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26972__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26972__auto__;
}
break;
}
}catch (e28544){if((e28544 instanceof Object)){
var ex__26973__auto__ = e28544;
var statearr_28545_28559 = state_28527;
(statearr_28545_28559[(5)] = ex__26973__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28527);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28544;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26971__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28560 = state_28527;
state_28527 = G__28560;
continue;
} else {
return ret_value__26971__auto__;
}
break;
}
});
cljs$core$async$state_machine__26970__auto__ = function(state_28527){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26970__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26970__auto____1.call(this,state_28527);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26970__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26970__auto____0;
cljs$core$async$state_machine__26970__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26970__auto____1;
return cljs$core$async$state_machine__26970__auto__;
})()
})();
var state__27066__auto__ = (function (){var statearr_28546 = f__27065__auto__.call(null);
(statearr_28546[(6)] = c__27064__auto___28548);

return statearr_28546;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27066__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28562 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28562 = (function (f,ch,meta28563){
this.f = f;
this.ch = ch;
this.meta28563 = meta28563;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async28562.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28564,meta28563__$1){
var self__ = this;
var _28564__$1 = this;
return (new cljs.core.async.t_cljs$core$async28562(self__.f,self__.ch,meta28563__$1));
}));

(cljs.core.async.t_cljs$core$async28562.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28564){
var self__ = this;
var _28564__$1 = this;
return self__.meta28563;
}));

(cljs.core.async.t_cljs$core$async28562.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28562.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async28562.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async28562.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28562.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28565 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28565 = (function (f,ch,meta28563,_,fn1,meta28566){
this.f = f;
this.ch = ch;
this.meta28563 = meta28563;
this._ = _;
this.fn1 = fn1;
this.meta28566 = meta28566;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async28565.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28567,meta28566__$1){
var self__ = this;
var _28567__$1 = this;
return (new cljs.core.async.t_cljs$core$async28565(self__.f,self__.ch,self__.meta28563,self__._,self__.fn1,meta28566__$1));
}));

(cljs.core.async.t_cljs$core$async28565.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28567){
var self__ = this;
var _28567__$1 = this;
return self__.meta28566;
}));

(cljs.core.async.t_cljs$core$async28565.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28565.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
}));

(cljs.core.async.t_cljs$core$async28565.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async28565.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return (function (p1__28561_SHARP_){
return f1.call(null,(((p1__28561_SHARP_ == null))?null:self__.f.call(null,p1__28561_SHARP_)));
});
}));

(cljs.core.async.t_cljs$core$async28565.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28563","meta28563",253325315,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async28562","cljs.core.async/t_cljs$core$async28562",513923678,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta28566","meta28566",1733522466,null)], null);
}));

(cljs.core.async.t_cljs$core$async28565.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async28565.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28565");

(cljs.core.async.t_cljs$core$async28565.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async28565");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28565.
 */
cljs.core.async.__GT_t_cljs$core$async28565 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async28565(f__$1,ch__$1,meta28563__$1,___$2,fn1__$1,meta28566){
return (new cljs.core.async.t_cljs$core$async28565(f__$1,ch__$1,meta28563__$1,___$2,fn1__$1,meta28566));
});

}

return (new cljs.core.async.t_cljs$core$async28565(self__.f,self__.ch,self__.meta28563,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

(cljs.core.async.t_cljs$core$async28562.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28562.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async28562.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28563","meta28563",253325315,null)], null);
}));

(cljs.core.async.t_cljs$core$async28562.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async28562.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28562");

(cljs.core.async.t_cljs$core$async28562.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async28562");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28562.
 */
cljs.core.async.__GT_t_cljs$core$async28562 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async28562(f__$1,ch__$1,meta28563){
return (new cljs.core.async.t_cljs$core$async28562(f__$1,ch__$1,meta28563));
});

}

return (new cljs.core.async.t_cljs$core$async28562(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28568 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28568 = (function (f,ch,meta28569){
this.f = f;
this.ch = ch;
this.meta28569 = meta28569;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async28568.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28570,meta28569__$1){
var self__ = this;
var _28570__$1 = this;
return (new cljs.core.async.t_cljs$core$async28568(self__.f,self__.ch,meta28569__$1));
}));

(cljs.core.async.t_cljs$core$async28568.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28570){
var self__ = this;
var _28570__$1 = this;
return self__.meta28569;
}));

(cljs.core.async.t_cljs$core$async28568.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28568.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async28568.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28568.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async28568.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28568.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
}));

(cljs.core.async.t_cljs$core$async28568.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28569","meta28569",-58513695,null)], null);
}));

(cljs.core.async.t_cljs$core$async28568.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async28568.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28568");

(cljs.core.async.t_cljs$core$async28568.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async28568");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28568.
 */
cljs.core.async.__GT_t_cljs$core$async28568 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async28568(f__$1,ch__$1,meta28569){
return (new cljs.core.async.t_cljs$core$async28568(f__$1,ch__$1,meta28569));
});

}

return (new cljs.core.async.t_cljs$core$async28568(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28571 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28571 = (function (p,ch,meta28572){
this.p = p;
this.ch = ch;
this.meta28572 = meta28572;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async28571.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28573,meta28572__$1){
var self__ = this;
var _28573__$1 = this;
return (new cljs.core.async.t_cljs$core$async28571(self__.p,self__.ch,meta28572__$1));
}));

(cljs.core.async.t_cljs$core$async28571.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28573){
var self__ = this;
var _28573__$1 = this;
return self__.meta28572;
}));

(cljs.core.async.t_cljs$core$async28571.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28571.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async28571.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async28571.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28571.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async28571.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28571.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async28571.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28572","meta28572",185418834,null)], null);
}));

(cljs.core.async.t_cljs$core$async28571.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async28571.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28571");

(cljs.core.async.t_cljs$core$async28571.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async28571");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28571.
 */
cljs.core.async.__GT_t_cljs$core$async28571 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async28571(p__$1,ch__$1,meta28572){
return (new cljs.core.async.t_cljs$core$async28571(p__$1,ch__$1,meta28572));
});

}

return (new cljs.core.async.t_cljs$core$async28571(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__28575 = arguments.length;
switch (G__28575) {
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
var c__27064__auto___28615 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27065__auto__ = (function (){var switch__26969__auto__ = (function (state_28596){
var state_val_28597 = (state_28596[(1)]);
if((state_val_28597 === (7))){
var inst_28592 = (state_28596[(2)]);
var state_28596__$1 = state_28596;
var statearr_28598_28616 = state_28596__$1;
(statearr_28598_28616[(2)] = inst_28592);

(statearr_28598_28616[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28597 === (1))){
var state_28596__$1 = state_28596;
var statearr_28599_28617 = state_28596__$1;
(statearr_28599_28617[(2)] = null);

(statearr_28599_28617[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28597 === (4))){
var inst_28578 = (state_28596[(7)]);
var inst_28578__$1 = (state_28596[(2)]);
var inst_28579 = (inst_28578__$1 == null);
var state_28596__$1 = (function (){var statearr_28600 = state_28596;
(statearr_28600[(7)] = inst_28578__$1);

return statearr_28600;
})();
if(cljs.core.truth_(inst_28579)){
var statearr_28601_28618 = state_28596__$1;
(statearr_28601_28618[(1)] = (5));

} else {
var statearr_28602_28619 = state_28596__$1;
(statearr_28602_28619[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28597 === (6))){
var inst_28578 = (state_28596[(7)]);
var inst_28583 = p.call(null,inst_28578);
var state_28596__$1 = state_28596;
if(cljs.core.truth_(inst_28583)){
var statearr_28603_28620 = state_28596__$1;
(statearr_28603_28620[(1)] = (8));

} else {
var statearr_28604_28621 = state_28596__$1;
(statearr_28604_28621[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28597 === (3))){
var inst_28594 = (state_28596[(2)]);
var state_28596__$1 = state_28596;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28596__$1,inst_28594);
} else {
if((state_val_28597 === (2))){
var state_28596__$1 = state_28596;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28596__$1,(4),ch);
} else {
if((state_val_28597 === (11))){
var inst_28586 = (state_28596[(2)]);
var state_28596__$1 = state_28596;
var statearr_28605_28622 = state_28596__$1;
(statearr_28605_28622[(2)] = inst_28586);

(statearr_28605_28622[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28597 === (9))){
var state_28596__$1 = state_28596;
var statearr_28606_28623 = state_28596__$1;
(statearr_28606_28623[(2)] = null);

(statearr_28606_28623[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28597 === (5))){
var inst_28581 = cljs.core.async.close_BANG_.call(null,out);
var state_28596__$1 = state_28596;
var statearr_28607_28624 = state_28596__$1;
(statearr_28607_28624[(2)] = inst_28581);

(statearr_28607_28624[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28597 === (10))){
var inst_28589 = (state_28596[(2)]);
var state_28596__$1 = (function (){var statearr_28608 = state_28596;
(statearr_28608[(8)] = inst_28589);

return statearr_28608;
})();
var statearr_28609_28625 = state_28596__$1;
(statearr_28609_28625[(2)] = null);

(statearr_28609_28625[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28597 === (8))){
var inst_28578 = (state_28596[(7)]);
var state_28596__$1 = state_28596;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28596__$1,(11),out,inst_28578);
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
var cljs$core$async$state_machine__26970__auto__ = null;
var cljs$core$async$state_machine__26970__auto____0 = (function (){
var statearr_28610 = [null,null,null,null,null,null,null,null,null];
(statearr_28610[(0)] = cljs$core$async$state_machine__26970__auto__);

(statearr_28610[(1)] = (1));

return statearr_28610;
});
var cljs$core$async$state_machine__26970__auto____1 = (function (state_28596){
while(true){
var ret_value__26971__auto__ = (function (){try{while(true){
var result__26972__auto__ = switch__26969__auto__.call(null,state_28596);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26972__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26972__auto__;
}
break;
}
}catch (e28611){if((e28611 instanceof Object)){
var ex__26973__auto__ = e28611;
var statearr_28612_28626 = state_28596;
(statearr_28612_28626[(5)] = ex__26973__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28596);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28611;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26971__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28627 = state_28596;
state_28596 = G__28627;
continue;
} else {
return ret_value__26971__auto__;
}
break;
}
});
cljs$core$async$state_machine__26970__auto__ = function(state_28596){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26970__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26970__auto____1.call(this,state_28596);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26970__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26970__auto____0;
cljs$core$async$state_machine__26970__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26970__auto____1;
return cljs$core$async$state_machine__26970__auto__;
})()
})();
var state__27066__auto__ = (function (){var statearr_28613 = f__27065__auto__.call(null);
(statearr_28613[(6)] = c__27064__auto___28615);

return statearr_28613;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27066__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__28629 = arguments.length;
switch (G__28629) {
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
var c__27064__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27065__auto__ = (function (){var switch__26969__auto__ = (function (state_28692){
var state_val_28693 = (state_28692[(1)]);
if((state_val_28693 === (7))){
var inst_28688 = (state_28692[(2)]);
var state_28692__$1 = state_28692;
var statearr_28694_28732 = state_28692__$1;
(statearr_28694_28732[(2)] = inst_28688);

(statearr_28694_28732[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28693 === (20))){
var inst_28658 = (state_28692[(7)]);
var inst_28669 = (state_28692[(2)]);
var inst_28670 = cljs.core.next.call(null,inst_28658);
var inst_28644 = inst_28670;
var inst_28645 = null;
var inst_28646 = (0);
var inst_28647 = (0);
var state_28692__$1 = (function (){var statearr_28695 = state_28692;
(statearr_28695[(8)] = inst_28646);

(statearr_28695[(9)] = inst_28647);

(statearr_28695[(10)] = inst_28669);

(statearr_28695[(11)] = inst_28645);

(statearr_28695[(12)] = inst_28644);

return statearr_28695;
})();
var statearr_28696_28733 = state_28692__$1;
(statearr_28696_28733[(2)] = null);

(statearr_28696_28733[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28693 === (1))){
var state_28692__$1 = state_28692;
var statearr_28697_28734 = state_28692__$1;
(statearr_28697_28734[(2)] = null);

(statearr_28697_28734[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28693 === (4))){
var inst_28633 = (state_28692[(13)]);
var inst_28633__$1 = (state_28692[(2)]);
var inst_28634 = (inst_28633__$1 == null);
var state_28692__$1 = (function (){var statearr_28698 = state_28692;
(statearr_28698[(13)] = inst_28633__$1);

return statearr_28698;
})();
if(cljs.core.truth_(inst_28634)){
var statearr_28699_28735 = state_28692__$1;
(statearr_28699_28735[(1)] = (5));

} else {
var statearr_28700_28736 = state_28692__$1;
(statearr_28700_28736[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28693 === (15))){
var state_28692__$1 = state_28692;
var statearr_28704_28737 = state_28692__$1;
(statearr_28704_28737[(2)] = null);

(statearr_28704_28737[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28693 === (21))){
var state_28692__$1 = state_28692;
var statearr_28705_28738 = state_28692__$1;
(statearr_28705_28738[(2)] = null);

(statearr_28705_28738[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28693 === (13))){
var inst_28646 = (state_28692[(8)]);
var inst_28647 = (state_28692[(9)]);
var inst_28645 = (state_28692[(11)]);
var inst_28644 = (state_28692[(12)]);
var inst_28654 = (state_28692[(2)]);
var inst_28655 = (inst_28647 + (1));
var tmp28701 = inst_28646;
var tmp28702 = inst_28645;
var tmp28703 = inst_28644;
var inst_28644__$1 = tmp28703;
var inst_28645__$1 = tmp28702;
var inst_28646__$1 = tmp28701;
var inst_28647__$1 = inst_28655;
var state_28692__$1 = (function (){var statearr_28706 = state_28692;
(statearr_28706[(8)] = inst_28646__$1);

(statearr_28706[(14)] = inst_28654);

(statearr_28706[(9)] = inst_28647__$1);

(statearr_28706[(11)] = inst_28645__$1);

(statearr_28706[(12)] = inst_28644__$1);

return statearr_28706;
})();
var statearr_28707_28739 = state_28692__$1;
(statearr_28707_28739[(2)] = null);

(statearr_28707_28739[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28693 === (22))){
var state_28692__$1 = state_28692;
var statearr_28708_28740 = state_28692__$1;
(statearr_28708_28740[(2)] = null);

(statearr_28708_28740[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28693 === (6))){
var inst_28633 = (state_28692[(13)]);
var inst_28642 = f.call(null,inst_28633);
var inst_28643 = cljs.core.seq.call(null,inst_28642);
var inst_28644 = inst_28643;
var inst_28645 = null;
var inst_28646 = (0);
var inst_28647 = (0);
var state_28692__$1 = (function (){var statearr_28709 = state_28692;
(statearr_28709[(8)] = inst_28646);

(statearr_28709[(9)] = inst_28647);

(statearr_28709[(11)] = inst_28645);

(statearr_28709[(12)] = inst_28644);

return statearr_28709;
})();
var statearr_28710_28741 = state_28692__$1;
(statearr_28710_28741[(2)] = null);

(statearr_28710_28741[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28693 === (17))){
var inst_28658 = (state_28692[(7)]);
var inst_28662 = cljs.core.chunk_first.call(null,inst_28658);
var inst_28663 = cljs.core.chunk_rest.call(null,inst_28658);
var inst_28664 = cljs.core.count.call(null,inst_28662);
var inst_28644 = inst_28663;
var inst_28645 = inst_28662;
var inst_28646 = inst_28664;
var inst_28647 = (0);
var state_28692__$1 = (function (){var statearr_28711 = state_28692;
(statearr_28711[(8)] = inst_28646);

(statearr_28711[(9)] = inst_28647);

(statearr_28711[(11)] = inst_28645);

(statearr_28711[(12)] = inst_28644);

return statearr_28711;
})();
var statearr_28712_28742 = state_28692__$1;
(statearr_28712_28742[(2)] = null);

(statearr_28712_28742[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28693 === (3))){
var inst_28690 = (state_28692[(2)]);
var state_28692__$1 = state_28692;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28692__$1,inst_28690);
} else {
if((state_val_28693 === (12))){
var inst_28678 = (state_28692[(2)]);
var state_28692__$1 = state_28692;
var statearr_28713_28743 = state_28692__$1;
(statearr_28713_28743[(2)] = inst_28678);

(statearr_28713_28743[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28693 === (2))){
var state_28692__$1 = state_28692;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28692__$1,(4),in$);
} else {
if((state_val_28693 === (23))){
var inst_28686 = (state_28692[(2)]);
var state_28692__$1 = state_28692;
var statearr_28714_28744 = state_28692__$1;
(statearr_28714_28744[(2)] = inst_28686);

(statearr_28714_28744[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28693 === (19))){
var inst_28673 = (state_28692[(2)]);
var state_28692__$1 = state_28692;
var statearr_28715_28745 = state_28692__$1;
(statearr_28715_28745[(2)] = inst_28673);

(statearr_28715_28745[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28693 === (11))){
var inst_28658 = (state_28692[(7)]);
var inst_28644 = (state_28692[(12)]);
var inst_28658__$1 = cljs.core.seq.call(null,inst_28644);
var state_28692__$1 = (function (){var statearr_28716 = state_28692;
(statearr_28716[(7)] = inst_28658__$1);

return statearr_28716;
})();
if(inst_28658__$1){
var statearr_28717_28746 = state_28692__$1;
(statearr_28717_28746[(1)] = (14));

} else {
var statearr_28718_28747 = state_28692__$1;
(statearr_28718_28747[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28693 === (9))){
var inst_28680 = (state_28692[(2)]);
var inst_28681 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_28692__$1 = (function (){var statearr_28719 = state_28692;
(statearr_28719[(15)] = inst_28680);

return statearr_28719;
})();
if(cljs.core.truth_(inst_28681)){
var statearr_28720_28748 = state_28692__$1;
(statearr_28720_28748[(1)] = (21));

} else {
var statearr_28721_28749 = state_28692__$1;
(statearr_28721_28749[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28693 === (5))){
var inst_28636 = cljs.core.async.close_BANG_.call(null,out);
var state_28692__$1 = state_28692;
var statearr_28722_28750 = state_28692__$1;
(statearr_28722_28750[(2)] = inst_28636);

(statearr_28722_28750[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28693 === (14))){
var inst_28658 = (state_28692[(7)]);
var inst_28660 = cljs.core.chunked_seq_QMARK_.call(null,inst_28658);
var state_28692__$1 = state_28692;
if(inst_28660){
var statearr_28723_28751 = state_28692__$1;
(statearr_28723_28751[(1)] = (17));

} else {
var statearr_28724_28752 = state_28692__$1;
(statearr_28724_28752[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28693 === (16))){
var inst_28676 = (state_28692[(2)]);
var state_28692__$1 = state_28692;
var statearr_28725_28753 = state_28692__$1;
(statearr_28725_28753[(2)] = inst_28676);

(statearr_28725_28753[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28693 === (10))){
var inst_28647 = (state_28692[(9)]);
var inst_28645 = (state_28692[(11)]);
var inst_28652 = cljs.core._nth.call(null,inst_28645,inst_28647);
var state_28692__$1 = state_28692;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28692__$1,(13),out,inst_28652);
} else {
if((state_val_28693 === (18))){
var inst_28658 = (state_28692[(7)]);
var inst_28667 = cljs.core.first.call(null,inst_28658);
var state_28692__$1 = state_28692;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28692__$1,(20),out,inst_28667);
} else {
if((state_val_28693 === (8))){
var inst_28646 = (state_28692[(8)]);
var inst_28647 = (state_28692[(9)]);
var inst_28649 = (inst_28647 < inst_28646);
var inst_28650 = inst_28649;
var state_28692__$1 = state_28692;
if(cljs.core.truth_(inst_28650)){
var statearr_28726_28754 = state_28692__$1;
(statearr_28726_28754[(1)] = (10));

} else {
var statearr_28727_28755 = state_28692__$1;
(statearr_28727_28755[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__26970__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__26970__auto____0 = (function (){
var statearr_28728 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28728[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__26970__auto__);

(statearr_28728[(1)] = (1));

return statearr_28728;
});
var cljs$core$async$mapcat_STAR__$_state_machine__26970__auto____1 = (function (state_28692){
while(true){
var ret_value__26971__auto__ = (function (){try{while(true){
var result__26972__auto__ = switch__26969__auto__.call(null,state_28692);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26972__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26972__auto__;
}
break;
}
}catch (e28729){if((e28729 instanceof Object)){
var ex__26973__auto__ = e28729;
var statearr_28730_28756 = state_28692;
(statearr_28730_28756[(5)] = ex__26973__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28692);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28729;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26971__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28757 = state_28692;
state_28692 = G__28757;
continue;
} else {
return ret_value__26971__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__26970__auto__ = function(state_28692){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__26970__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__26970__auto____1.call(this,state_28692);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__26970__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__26970__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__26970__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__26970__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__26970__auto__;
})()
})();
var state__27066__auto__ = (function (){var statearr_28731 = f__27065__auto__.call(null);
(statearr_28731[(6)] = c__27064__auto__);

return statearr_28731;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27066__auto__);
}));

return c__27064__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__28759 = arguments.length;
switch (G__28759) {
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
var G__28762 = arguments.length;
switch (G__28762) {
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
var G__28765 = arguments.length;
switch (G__28765) {
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
var c__27064__auto___28812 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27065__auto__ = (function (){var switch__26969__auto__ = (function (state_28789){
var state_val_28790 = (state_28789[(1)]);
if((state_val_28790 === (7))){
var inst_28784 = (state_28789[(2)]);
var state_28789__$1 = state_28789;
var statearr_28791_28813 = state_28789__$1;
(statearr_28791_28813[(2)] = inst_28784);

(statearr_28791_28813[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28790 === (1))){
var inst_28766 = null;
var state_28789__$1 = (function (){var statearr_28792 = state_28789;
(statearr_28792[(7)] = inst_28766);

return statearr_28792;
})();
var statearr_28793_28814 = state_28789__$1;
(statearr_28793_28814[(2)] = null);

(statearr_28793_28814[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28790 === (4))){
var inst_28769 = (state_28789[(8)]);
var inst_28769__$1 = (state_28789[(2)]);
var inst_28770 = (inst_28769__$1 == null);
var inst_28771 = cljs.core.not.call(null,inst_28770);
var state_28789__$1 = (function (){var statearr_28794 = state_28789;
(statearr_28794[(8)] = inst_28769__$1);

return statearr_28794;
})();
if(inst_28771){
var statearr_28795_28815 = state_28789__$1;
(statearr_28795_28815[(1)] = (5));

} else {
var statearr_28796_28816 = state_28789__$1;
(statearr_28796_28816[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28790 === (6))){
var state_28789__$1 = state_28789;
var statearr_28797_28817 = state_28789__$1;
(statearr_28797_28817[(2)] = null);

(statearr_28797_28817[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28790 === (3))){
var inst_28786 = (state_28789[(2)]);
var inst_28787 = cljs.core.async.close_BANG_.call(null,out);
var state_28789__$1 = (function (){var statearr_28798 = state_28789;
(statearr_28798[(9)] = inst_28786);

return statearr_28798;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28789__$1,inst_28787);
} else {
if((state_val_28790 === (2))){
var state_28789__$1 = state_28789;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28789__$1,(4),ch);
} else {
if((state_val_28790 === (11))){
var inst_28769 = (state_28789[(8)]);
var inst_28778 = (state_28789[(2)]);
var inst_28766 = inst_28769;
var state_28789__$1 = (function (){var statearr_28799 = state_28789;
(statearr_28799[(10)] = inst_28778);

(statearr_28799[(7)] = inst_28766);

return statearr_28799;
})();
var statearr_28800_28818 = state_28789__$1;
(statearr_28800_28818[(2)] = null);

(statearr_28800_28818[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28790 === (9))){
var inst_28769 = (state_28789[(8)]);
var state_28789__$1 = state_28789;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28789__$1,(11),out,inst_28769);
} else {
if((state_val_28790 === (5))){
var inst_28769 = (state_28789[(8)]);
var inst_28766 = (state_28789[(7)]);
var inst_28773 = cljs.core._EQ_.call(null,inst_28769,inst_28766);
var state_28789__$1 = state_28789;
if(inst_28773){
var statearr_28802_28819 = state_28789__$1;
(statearr_28802_28819[(1)] = (8));

} else {
var statearr_28803_28820 = state_28789__$1;
(statearr_28803_28820[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28790 === (10))){
var inst_28781 = (state_28789[(2)]);
var state_28789__$1 = state_28789;
var statearr_28804_28821 = state_28789__$1;
(statearr_28804_28821[(2)] = inst_28781);

(statearr_28804_28821[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28790 === (8))){
var inst_28766 = (state_28789[(7)]);
var tmp28801 = inst_28766;
var inst_28766__$1 = tmp28801;
var state_28789__$1 = (function (){var statearr_28805 = state_28789;
(statearr_28805[(7)] = inst_28766__$1);

return statearr_28805;
})();
var statearr_28806_28822 = state_28789__$1;
(statearr_28806_28822[(2)] = null);

(statearr_28806_28822[(1)] = (2));


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
var cljs$core$async$state_machine__26970__auto__ = null;
var cljs$core$async$state_machine__26970__auto____0 = (function (){
var statearr_28807 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28807[(0)] = cljs$core$async$state_machine__26970__auto__);

(statearr_28807[(1)] = (1));

return statearr_28807;
});
var cljs$core$async$state_machine__26970__auto____1 = (function (state_28789){
while(true){
var ret_value__26971__auto__ = (function (){try{while(true){
var result__26972__auto__ = switch__26969__auto__.call(null,state_28789);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26972__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26972__auto__;
}
break;
}
}catch (e28808){if((e28808 instanceof Object)){
var ex__26973__auto__ = e28808;
var statearr_28809_28823 = state_28789;
(statearr_28809_28823[(5)] = ex__26973__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28789);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28808;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26971__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28824 = state_28789;
state_28789 = G__28824;
continue;
} else {
return ret_value__26971__auto__;
}
break;
}
});
cljs$core$async$state_machine__26970__auto__ = function(state_28789){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26970__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26970__auto____1.call(this,state_28789);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26970__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26970__auto____0;
cljs$core$async$state_machine__26970__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26970__auto____1;
return cljs$core$async$state_machine__26970__auto__;
})()
})();
var state__27066__auto__ = (function (){var statearr_28810 = f__27065__auto__.call(null);
(statearr_28810[(6)] = c__27064__auto___28812);

return statearr_28810;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27066__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__28826 = arguments.length;
switch (G__28826) {
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
var c__27064__auto___28892 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27065__auto__ = (function (){var switch__26969__auto__ = (function (state_28864){
var state_val_28865 = (state_28864[(1)]);
if((state_val_28865 === (7))){
var inst_28860 = (state_28864[(2)]);
var state_28864__$1 = state_28864;
var statearr_28866_28893 = state_28864__$1;
(statearr_28866_28893[(2)] = inst_28860);

(statearr_28866_28893[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28865 === (1))){
var inst_28827 = (new Array(n));
var inst_28828 = inst_28827;
var inst_28829 = (0);
var state_28864__$1 = (function (){var statearr_28867 = state_28864;
(statearr_28867[(7)] = inst_28829);

(statearr_28867[(8)] = inst_28828);

return statearr_28867;
})();
var statearr_28868_28894 = state_28864__$1;
(statearr_28868_28894[(2)] = null);

(statearr_28868_28894[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28865 === (4))){
var inst_28832 = (state_28864[(9)]);
var inst_28832__$1 = (state_28864[(2)]);
var inst_28833 = (inst_28832__$1 == null);
var inst_28834 = cljs.core.not.call(null,inst_28833);
var state_28864__$1 = (function (){var statearr_28869 = state_28864;
(statearr_28869[(9)] = inst_28832__$1);

return statearr_28869;
})();
if(inst_28834){
var statearr_28870_28895 = state_28864__$1;
(statearr_28870_28895[(1)] = (5));

} else {
var statearr_28871_28896 = state_28864__$1;
(statearr_28871_28896[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28865 === (15))){
var inst_28854 = (state_28864[(2)]);
var state_28864__$1 = state_28864;
var statearr_28872_28897 = state_28864__$1;
(statearr_28872_28897[(2)] = inst_28854);

(statearr_28872_28897[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28865 === (13))){
var state_28864__$1 = state_28864;
var statearr_28873_28898 = state_28864__$1;
(statearr_28873_28898[(2)] = null);

(statearr_28873_28898[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28865 === (6))){
var inst_28829 = (state_28864[(7)]);
var inst_28850 = (inst_28829 > (0));
var state_28864__$1 = state_28864;
if(cljs.core.truth_(inst_28850)){
var statearr_28874_28899 = state_28864__$1;
(statearr_28874_28899[(1)] = (12));

} else {
var statearr_28875_28900 = state_28864__$1;
(statearr_28875_28900[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28865 === (3))){
var inst_28862 = (state_28864[(2)]);
var state_28864__$1 = state_28864;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28864__$1,inst_28862);
} else {
if((state_val_28865 === (12))){
var inst_28828 = (state_28864[(8)]);
var inst_28852 = cljs.core.vec.call(null,inst_28828);
var state_28864__$1 = state_28864;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28864__$1,(15),out,inst_28852);
} else {
if((state_val_28865 === (2))){
var state_28864__$1 = state_28864;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28864__$1,(4),ch);
} else {
if((state_val_28865 === (11))){
var inst_28844 = (state_28864[(2)]);
var inst_28845 = (new Array(n));
var inst_28828 = inst_28845;
var inst_28829 = (0);
var state_28864__$1 = (function (){var statearr_28876 = state_28864;
(statearr_28876[(10)] = inst_28844);

(statearr_28876[(7)] = inst_28829);

(statearr_28876[(8)] = inst_28828);

return statearr_28876;
})();
var statearr_28877_28901 = state_28864__$1;
(statearr_28877_28901[(2)] = null);

(statearr_28877_28901[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28865 === (9))){
var inst_28828 = (state_28864[(8)]);
var inst_28842 = cljs.core.vec.call(null,inst_28828);
var state_28864__$1 = state_28864;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28864__$1,(11),out,inst_28842);
} else {
if((state_val_28865 === (5))){
var inst_28837 = (state_28864[(11)]);
var inst_28829 = (state_28864[(7)]);
var inst_28828 = (state_28864[(8)]);
var inst_28832 = (state_28864[(9)]);
var inst_28836 = (inst_28828[inst_28829] = inst_28832);
var inst_28837__$1 = (inst_28829 + (1));
var inst_28838 = (inst_28837__$1 < n);
var state_28864__$1 = (function (){var statearr_28878 = state_28864;
(statearr_28878[(11)] = inst_28837__$1);

(statearr_28878[(12)] = inst_28836);

return statearr_28878;
})();
if(cljs.core.truth_(inst_28838)){
var statearr_28879_28902 = state_28864__$1;
(statearr_28879_28902[(1)] = (8));

} else {
var statearr_28880_28903 = state_28864__$1;
(statearr_28880_28903[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28865 === (14))){
var inst_28857 = (state_28864[(2)]);
var inst_28858 = cljs.core.async.close_BANG_.call(null,out);
var state_28864__$1 = (function (){var statearr_28882 = state_28864;
(statearr_28882[(13)] = inst_28857);

return statearr_28882;
})();
var statearr_28883_28904 = state_28864__$1;
(statearr_28883_28904[(2)] = inst_28858);

(statearr_28883_28904[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28865 === (10))){
var inst_28848 = (state_28864[(2)]);
var state_28864__$1 = state_28864;
var statearr_28884_28905 = state_28864__$1;
(statearr_28884_28905[(2)] = inst_28848);

(statearr_28884_28905[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28865 === (8))){
var inst_28837 = (state_28864[(11)]);
var inst_28828 = (state_28864[(8)]);
var tmp28881 = inst_28828;
var inst_28828__$1 = tmp28881;
var inst_28829 = inst_28837;
var state_28864__$1 = (function (){var statearr_28885 = state_28864;
(statearr_28885[(7)] = inst_28829);

(statearr_28885[(8)] = inst_28828__$1);

return statearr_28885;
})();
var statearr_28886_28906 = state_28864__$1;
(statearr_28886_28906[(2)] = null);

(statearr_28886_28906[(1)] = (2));


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
var cljs$core$async$state_machine__26970__auto__ = null;
var cljs$core$async$state_machine__26970__auto____0 = (function (){
var statearr_28887 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28887[(0)] = cljs$core$async$state_machine__26970__auto__);

(statearr_28887[(1)] = (1));

return statearr_28887;
});
var cljs$core$async$state_machine__26970__auto____1 = (function (state_28864){
while(true){
var ret_value__26971__auto__ = (function (){try{while(true){
var result__26972__auto__ = switch__26969__auto__.call(null,state_28864);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26972__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26972__auto__;
}
break;
}
}catch (e28888){if((e28888 instanceof Object)){
var ex__26973__auto__ = e28888;
var statearr_28889_28907 = state_28864;
(statearr_28889_28907[(5)] = ex__26973__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28864);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28888;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26971__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28908 = state_28864;
state_28864 = G__28908;
continue;
} else {
return ret_value__26971__auto__;
}
break;
}
});
cljs$core$async$state_machine__26970__auto__ = function(state_28864){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26970__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26970__auto____1.call(this,state_28864);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26970__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26970__auto____0;
cljs$core$async$state_machine__26970__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26970__auto____1;
return cljs$core$async$state_machine__26970__auto__;
})()
})();
var state__27066__auto__ = (function (){var statearr_28890 = f__27065__auto__.call(null);
(statearr_28890[(6)] = c__27064__auto___28892);

return statearr_28890;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27066__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__28910 = arguments.length;
switch (G__28910) {
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
var c__27064__auto___28980 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27065__auto__ = (function (){var switch__26969__auto__ = (function (state_28952){
var state_val_28953 = (state_28952[(1)]);
if((state_val_28953 === (7))){
var inst_28948 = (state_28952[(2)]);
var state_28952__$1 = state_28952;
var statearr_28954_28981 = state_28952__$1;
(statearr_28954_28981[(2)] = inst_28948);

(statearr_28954_28981[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28953 === (1))){
var inst_28911 = [];
var inst_28912 = inst_28911;
var inst_28913 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_28952__$1 = (function (){var statearr_28955 = state_28952;
(statearr_28955[(7)] = inst_28913);

(statearr_28955[(8)] = inst_28912);

return statearr_28955;
})();
var statearr_28956_28982 = state_28952__$1;
(statearr_28956_28982[(2)] = null);

(statearr_28956_28982[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28953 === (4))){
var inst_28916 = (state_28952[(9)]);
var inst_28916__$1 = (state_28952[(2)]);
var inst_28917 = (inst_28916__$1 == null);
var inst_28918 = cljs.core.not.call(null,inst_28917);
var state_28952__$1 = (function (){var statearr_28957 = state_28952;
(statearr_28957[(9)] = inst_28916__$1);

return statearr_28957;
})();
if(inst_28918){
var statearr_28958_28983 = state_28952__$1;
(statearr_28958_28983[(1)] = (5));

} else {
var statearr_28959_28984 = state_28952__$1;
(statearr_28959_28984[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28953 === (15))){
var inst_28942 = (state_28952[(2)]);
var state_28952__$1 = state_28952;
var statearr_28960_28985 = state_28952__$1;
(statearr_28960_28985[(2)] = inst_28942);

(statearr_28960_28985[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28953 === (13))){
var state_28952__$1 = state_28952;
var statearr_28961_28986 = state_28952__$1;
(statearr_28961_28986[(2)] = null);

(statearr_28961_28986[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28953 === (6))){
var inst_28912 = (state_28952[(8)]);
var inst_28937 = inst_28912.length;
var inst_28938 = (inst_28937 > (0));
var state_28952__$1 = state_28952;
if(cljs.core.truth_(inst_28938)){
var statearr_28962_28987 = state_28952__$1;
(statearr_28962_28987[(1)] = (12));

} else {
var statearr_28963_28988 = state_28952__$1;
(statearr_28963_28988[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28953 === (3))){
var inst_28950 = (state_28952[(2)]);
var state_28952__$1 = state_28952;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28952__$1,inst_28950);
} else {
if((state_val_28953 === (12))){
var inst_28912 = (state_28952[(8)]);
var inst_28940 = cljs.core.vec.call(null,inst_28912);
var state_28952__$1 = state_28952;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28952__$1,(15),out,inst_28940);
} else {
if((state_val_28953 === (2))){
var state_28952__$1 = state_28952;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28952__$1,(4),ch);
} else {
if((state_val_28953 === (11))){
var inst_28920 = (state_28952[(10)]);
var inst_28916 = (state_28952[(9)]);
var inst_28930 = (state_28952[(2)]);
var inst_28931 = [];
var inst_28932 = inst_28931.push(inst_28916);
var inst_28912 = inst_28931;
var inst_28913 = inst_28920;
var state_28952__$1 = (function (){var statearr_28964 = state_28952;
(statearr_28964[(7)] = inst_28913);

(statearr_28964[(8)] = inst_28912);

(statearr_28964[(11)] = inst_28932);

(statearr_28964[(12)] = inst_28930);

return statearr_28964;
})();
var statearr_28965_28989 = state_28952__$1;
(statearr_28965_28989[(2)] = null);

(statearr_28965_28989[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28953 === (9))){
var inst_28912 = (state_28952[(8)]);
var inst_28928 = cljs.core.vec.call(null,inst_28912);
var state_28952__$1 = state_28952;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28952__$1,(11),out,inst_28928);
} else {
if((state_val_28953 === (5))){
var inst_28913 = (state_28952[(7)]);
var inst_28920 = (state_28952[(10)]);
var inst_28916 = (state_28952[(9)]);
var inst_28920__$1 = f.call(null,inst_28916);
var inst_28921 = cljs.core._EQ_.call(null,inst_28920__$1,inst_28913);
var inst_28922 = cljs.core.keyword_identical_QMARK_.call(null,inst_28913,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_28923 = ((inst_28921) || (inst_28922));
var state_28952__$1 = (function (){var statearr_28966 = state_28952;
(statearr_28966[(10)] = inst_28920__$1);

return statearr_28966;
})();
if(cljs.core.truth_(inst_28923)){
var statearr_28967_28990 = state_28952__$1;
(statearr_28967_28990[(1)] = (8));

} else {
var statearr_28968_28991 = state_28952__$1;
(statearr_28968_28991[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28953 === (14))){
var inst_28945 = (state_28952[(2)]);
var inst_28946 = cljs.core.async.close_BANG_.call(null,out);
var state_28952__$1 = (function (){var statearr_28970 = state_28952;
(statearr_28970[(13)] = inst_28945);

return statearr_28970;
})();
var statearr_28971_28992 = state_28952__$1;
(statearr_28971_28992[(2)] = inst_28946);

(statearr_28971_28992[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28953 === (10))){
var inst_28935 = (state_28952[(2)]);
var state_28952__$1 = state_28952;
var statearr_28972_28993 = state_28952__$1;
(statearr_28972_28993[(2)] = inst_28935);

(statearr_28972_28993[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28953 === (8))){
var inst_28920 = (state_28952[(10)]);
var inst_28912 = (state_28952[(8)]);
var inst_28916 = (state_28952[(9)]);
var inst_28925 = inst_28912.push(inst_28916);
var tmp28969 = inst_28912;
var inst_28912__$1 = tmp28969;
var inst_28913 = inst_28920;
var state_28952__$1 = (function (){var statearr_28973 = state_28952;
(statearr_28973[(7)] = inst_28913);

(statearr_28973[(8)] = inst_28912__$1);

(statearr_28973[(14)] = inst_28925);

return statearr_28973;
})();
var statearr_28974_28994 = state_28952__$1;
(statearr_28974_28994[(2)] = null);

(statearr_28974_28994[(1)] = (2));


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
var cljs$core$async$state_machine__26970__auto__ = null;
var cljs$core$async$state_machine__26970__auto____0 = (function (){
var statearr_28975 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28975[(0)] = cljs$core$async$state_machine__26970__auto__);

(statearr_28975[(1)] = (1));

return statearr_28975;
});
var cljs$core$async$state_machine__26970__auto____1 = (function (state_28952){
while(true){
var ret_value__26971__auto__ = (function (){try{while(true){
var result__26972__auto__ = switch__26969__auto__.call(null,state_28952);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26972__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26972__auto__;
}
break;
}
}catch (e28976){if((e28976 instanceof Object)){
var ex__26973__auto__ = e28976;
var statearr_28977_28995 = state_28952;
(statearr_28977_28995[(5)] = ex__26973__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28952);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28976;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26971__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28996 = state_28952;
state_28952 = G__28996;
continue;
} else {
return ret_value__26971__auto__;
}
break;
}
});
cljs$core$async$state_machine__26970__auto__ = function(state_28952){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26970__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26970__auto____1.call(this,state_28952);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26970__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26970__auto____0;
cljs$core$async$state_machine__26970__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26970__auto____1;
return cljs$core$async$state_machine__26970__auto__;
})()
})();
var state__27066__auto__ = (function (){var statearr_28978 = f__27065__auto__.call(null);
(statearr_28978[(6)] = c__27064__auto___28980);

return statearr_28978;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27066__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=async.js.map?rel=1607132437698
