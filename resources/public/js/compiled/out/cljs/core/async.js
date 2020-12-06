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
var G__27319 = arguments.length;
switch (G__27319) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27320 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27320 = (function (f,blockable,meta27321){
this.f = f;
this.blockable = blockable;
this.meta27321 = meta27321;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async27320.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27322,meta27321__$1){
var self__ = this;
var _27322__$1 = this;
return (new cljs.core.async.t_cljs$core$async27320(self__.f,self__.blockable,meta27321__$1));
}));

(cljs.core.async.t_cljs$core$async27320.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27322){
var self__ = this;
var _27322__$1 = this;
return self__.meta27321;
}));

(cljs.core.async.t_cljs$core$async27320.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27320.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async27320.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async27320.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async27320.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta27321","meta27321",232545390,null)], null);
}));

(cljs.core.async.t_cljs$core$async27320.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async27320.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27320");

(cljs.core.async.t_cljs$core$async27320.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async27320");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27320.
 */
cljs.core.async.__GT_t_cljs$core$async27320 = (function cljs$core$async$__GT_t_cljs$core$async27320(f__$1,blockable__$1,meta27321){
return (new cljs.core.async.t_cljs$core$async27320(f__$1,blockable__$1,meta27321));
});

}

return (new cljs.core.async.t_cljs$core$async27320(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__27326 = arguments.length;
switch (G__27326) {
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
var G__27329 = arguments.length;
switch (G__27329) {
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
var G__27332 = arguments.length;
switch (G__27332) {
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
var val_27334 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_27334);
} else {
cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,val_27334);
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
var G__27336 = arguments.length;
switch (G__27336) {
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
var n__4613__auto___27338 = n;
var x_27339 = (0);
while(true){
if((x_27339 < n__4613__auto___27338)){
(a[x_27339] = x_27339);

var G__27340 = (x_27339 + (1));
x_27339 = G__27340;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27341 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27341 = (function (flag,meta27342){
this.flag = flag;
this.meta27342 = meta27342;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async27341.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27343,meta27342__$1){
var self__ = this;
var _27343__$1 = this;
return (new cljs.core.async.t_cljs$core$async27341(self__.flag,meta27342__$1));
}));

(cljs.core.async.t_cljs$core$async27341.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27343){
var self__ = this;
var _27343__$1 = this;
return self__.meta27342;
}));

(cljs.core.async.t_cljs$core$async27341.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27341.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async27341.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async27341.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async27341.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta27342","meta27342",-1852460400,null)], null);
}));

(cljs.core.async.t_cljs$core$async27341.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async27341.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27341");

(cljs.core.async.t_cljs$core$async27341.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async27341");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27341.
 */
cljs.core.async.__GT_t_cljs$core$async27341 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async27341(flag__$1,meta27342){
return (new cljs.core.async.t_cljs$core$async27341(flag__$1,meta27342));
});

}

return (new cljs.core.async.t_cljs$core$async27341(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27344 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27344 = (function (flag,cb,meta27345){
this.flag = flag;
this.cb = cb;
this.meta27345 = meta27345;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async27344.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27346,meta27345__$1){
var self__ = this;
var _27346__$1 = this;
return (new cljs.core.async.t_cljs$core$async27344(self__.flag,self__.cb,meta27345__$1));
}));

(cljs.core.async.t_cljs$core$async27344.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27346){
var self__ = this;
var _27346__$1 = this;
return self__.meta27345;
}));

(cljs.core.async.t_cljs$core$async27344.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27344.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async27344.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async27344.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async27344.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta27345","meta27345",1434809872,null)], null);
}));

(cljs.core.async.t_cljs$core$async27344.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async27344.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27344");

(cljs.core.async.t_cljs$core$async27344.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async27344");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27344.
 */
cljs.core.async.__GT_t_cljs$core$async27344 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async27344(flag__$1,cb__$1,meta27345){
return (new cljs.core.async.t_cljs$core$async27344(flag__$1,cb__$1,meta27345));
});

}

return (new cljs.core.async.t_cljs$core$async27344(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__27347_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27347_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__27348_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27348_SHARP_,port], null));
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
var G__27349 = (i + (1));
i = G__27349;
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
var len__4736__auto___27355 = arguments.length;
var i__4737__auto___27356 = (0);
while(true){
if((i__4737__auto___27356 < len__4736__auto___27355)){
args__4742__auto__.push((arguments[i__4737__auto___27356]));

var G__27357 = (i__4737__auto___27356 + (1));
i__4737__auto___27356 = G__27357;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__27352){
var map__27353 = p__27352;
var map__27353__$1 = (((((!((map__27353 == null))))?(((((map__27353.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27353.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27353):map__27353);
var opts = map__27353__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq27350){
var G__27351 = cljs.core.first.call(null,seq27350);
var seq27350__$1 = cljs.core.next.call(null,seq27350);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27351,seq27350__$1);
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
var G__27359 = arguments.length;
switch (G__27359) {
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
var c__27259__auto___27405 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27260__auto__ = (function (){var switch__27164__auto__ = (function (state_27383){
var state_val_27384 = (state_27383[(1)]);
if((state_val_27384 === (7))){
var inst_27379 = (state_27383[(2)]);
var state_27383__$1 = state_27383;
var statearr_27385_27406 = state_27383__$1;
(statearr_27385_27406[(2)] = inst_27379);

(statearr_27385_27406[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27384 === (1))){
var state_27383__$1 = state_27383;
var statearr_27386_27407 = state_27383__$1;
(statearr_27386_27407[(2)] = null);

(statearr_27386_27407[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27384 === (4))){
var inst_27362 = (state_27383[(7)]);
var inst_27362__$1 = (state_27383[(2)]);
var inst_27363 = (inst_27362__$1 == null);
var state_27383__$1 = (function (){var statearr_27387 = state_27383;
(statearr_27387[(7)] = inst_27362__$1);

return statearr_27387;
})();
if(cljs.core.truth_(inst_27363)){
var statearr_27388_27408 = state_27383__$1;
(statearr_27388_27408[(1)] = (5));

} else {
var statearr_27389_27409 = state_27383__$1;
(statearr_27389_27409[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27384 === (13))){
var state_27383__$1 = state_27383;
var statearr_27390_27410 = state_27383__$1;
(statearr_27390_27410[(2)] = null);

(statearr_27390_27410[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27384 === (6))){
var inst_27362 = (state_27383[(7)]);
var state_27383__$1 = state_27383;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27383__$1,(11),to,inst_27362);
} else {
if((state_val_27384 === (3))){
var inst_27381 = (state_27383[(2)]);
var state_27383__$1 = state_27383;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27383__$1,inst_27381);
} else {
if((state_val_27384 === (12))){
var state_27383__$1 = state_27383;
var statearr_27391_27411 = state_27383__$1;
(statearr_27391_27411[(2)] = null);

(statearr_27391_27411[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27384 === (2))){
var state_27383__$1 = state_27383;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27383__$1,(4),from);
} else {
if((state_val_27384 === (11))){
var inst_27372 = (state_27383[(2)]);
var state_27383__$1 = state_27383;
if(cljs.core.truth_(inst_27372)){
var statearr_27392_27412 = state_27383__$1;
(statearr_27392_27412[(1)] = (12));

} else {
var statearr_27393_27413 = state_27383__$1;
(statearr_27393_27413[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27384 === (9))){
var state_27383__$1 = state_27383;
var statearr_27394_27414 = state_27383__$1;
(statearr_27394_27414[(2)] = null);

(statearr_27394_27414[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27384 === (5))){
var state_27383__$1 = state_27383;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27395_27415 = state_27383__$1;
(statearr_27395_27415[(1)] = (8));

} else {
var statearr_27396_27416 = state_27383__$1;
(statearr_27396_27416[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27384 === (14))){
var inst_27377 = (state_27383[(2)]);
var state_27383__$1 = state_27383;
var statearr_27397_27417 = state_27383__$1;
(statearr_27397_27417[(2)] = inst_27377);

(statearr_27397_27417[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27384 === (10))){
var inst_27369 = (state_27383[(2)]);
var state_27383__$1 = state_27383;
var statearr_27398_27418 = state_27383__$1;
(statearr_27398_27418[(2)] = inst_27369);

(statearr_27398_27418[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27384 === (8))){
var inst_27366 = cljs.core.async.close_BANG_.call(null,to);
var state_27383__$1 = state_27383;
var statearr_27399_27419 = state_27383__$1;
(statearr_27399_27419[(2)] = inst_27366);

(statearr_27399_27419[(1)] = (10));


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
var cljs$core$async$state_machine__27165__auto__ = null;
var cljs$core$async$state_machine__27165__auto____0 = (function (){
var statearr_27400 = [null,null,null,null,null,null,null,null];
(statearr_27400[(0)] = cljs$core$async$state_machine__27165__auto__);

(statearr_27400[(1)] = (1));

return statearr_27400;
});
var cljs$core$async$state_machine__27165__auto____1 = (function (state_27383){
while(true){
var ret_value__27166__auto__ = (function (){try{while(true){
var result__27167__auto__ = switch__27164__auto__.call(null,state_27383);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27167__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27167__auto__;
}
break;
}
}catch (e27401){if((e27401 instanceof Object)){
var ex__27168__auto__ = e27401;
var statearr_27402_27420 = state_27383;
(statearr_27402_27420[(5)] = ex__27168__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27383);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27401;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27421 = state_27383;
state_27383 = G__27421;
continue;
} else {
return ret_value__27166__auto__;
}
break;
}
});
cljs$core$async$state_machine__27165__auto__ = function(state_27383){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27165__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27165__auto____1.call(this,state_27383);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27165__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27165__auto____0;
cljs$core$async$state_machine__27165__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27165__auto____1;
return cljs$core$async$state_machine__27165__auto__;
})()
})();
var state__27261__auto__ = (function (){var statearr_27403 = f__27260__auto__.call(null);
(statearr_27403[(6)] = c__27259__auto___27405);

return statearr_27403;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27261__auto__);
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
var process = (function (p__27422){
var vec__27423 = p__27422;
var v = cljs.core.nth.call(null,vec__27423,(0),null);
var p = cljs.core.nth.call(null,vec__27423,(1),null);
var job = vec__27423;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__27259__auto___27594 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27260__auto__ = (function (){var switch__27164__auto__ = (function (state_27430){
var state_val_27431 = (state_27430[(1)]);
if((state_val_27431 === (1))){
var state_27430__$1 = state_27430;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27430__$1,(2),res,v);
} else {
if((state_val_27431 === (2))){
var inst_27427 = (state_27430[(2)]);
var inst_27428 = cljs.core.async.close_BANG_.call(null,res);
var state_27430__$1 = (function (){var statearr_27432 = state_27430;
(statearr_27432[(7)] = inst_27427);

return statearr_27432;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27430__$1,inst_27428);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27165__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27165__auto____0 = (function (){
var statearr_27433 = [null,null,null,null,null,null,null,null];
(statearr_27433[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27165__auto__);

(statearr_27433[(1)] = (1));

return statearr_27433;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27165__auto____1 = (function (state_27430){
while(true){
var ret_value__27166__auto__ = (function (){try{while(true){
var result__27167__auto__ = switch__27164__auto__.call(null,state_27430);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27167__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27167__auto__;
}
break;
}
}catch (e27434){if((e27434 instanceof Object)){
var ex__27168__auto__ = e27434;
var statearr_27435_27595 = state_27430;
(statearr_27435_27595[(5)] = ex__27168__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27430);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27434;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27596 = state_27430;
state_27430 = G__27596;
continue;
} else {
return ret_value__27166__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27165__auto__ = function(state_27430){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27165__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27165__auto____1.call(this,state_27430);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27165__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27165__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27165__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27165__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27165__auto__;
})()
})();
var state__27261__auto__ = (function (){var statearr_27436 = f__27260__auto__.call(null);
(statearr_27436[(6)] = c__27259__auto___27594);

return statearr_27436;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27261__auto__);
}));


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});
var async = (function (p__27437){
var vec__27438 = p__27437;
var v = cljs.core.nth.call(null,vec__27438,(0),null);
var p = cljs.core.nth.call(null,vec__27438,(1),null);
var job = vec__27438;
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
var n__4613__auto___27597 = n;
var __27598 = (0);
while(true){
if((__27598 < n__4613__auto___27597)){
var G__27441_27599 = type;
var G__27441_27600__$1 = (((G__27441_27599 instanceof cljs.core.Keyword))?G__27441_27599.fqn:null);
switch (G__27441_27600__$1) {
case "compute":
var c__27259__auto___27602 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__27598,c__27259__auto___27602,G__27441_27599,G__27441_27600__$1,n__4613__auto___27597,jobs,results,process,async){
return (function (){
var f__27260__auto__ = (function (){var switch__27164__auto__ = ((function (__27598,c__27259__auto___27602,G__27441_27599,G__27441_27600__$1,n__4613__auto___27597,jobs,results,process,async){
return (function (state_27454){
var state_val_27455 = (state_27454[(1)]);
if((state_val_27455 === (1))){
var state_27454__$1 = state_27454;
var statearr_27456_27603 = state_27454__$1;
(statearr_27456_27603[(2)] = null);

(statearr_27456_27603[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27455 === (2))){
var state_27454__$1 = state_27454;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27454__$1,(4),jobs);
} else {
if((state_val_27455 === (3))){
var inst_27452 = (state_27454[(2)]);
var state_27454__$1 = state_27454;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27454__$1,inst_27452);
} else {
if((state_val_27455 === (4))){
var inst_27444 = (state_27454[(2)]);
var inst_27445 = process.call(null,inst_27444);
var state_27454__$1 = state_27454;
if(cljs.core.truth_(inst_27445)){
var statearr_27457_27604 = state_27454__$1;
(statearr_27457_27604[(1)] = (5));

} else {
var statearr_27458_27605 = state_27454__$1;
(statearr_27458_27605[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27455 === (5))){
var state_27454__$1 = state_27454;
var statearr_27459_27606 = state_27454__$1;
(statearr_27459_27606[(2)] = null);

(statearr_27459_27606[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27455 === (6))){
var state_27454__$1 = state_27454;
var statearr_27460_27607 = state_27454__$1;
(statearr_27460_27607[(2)] = null);

(statearr_27460_27607[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27455 === (7))){
var inst_27450 = (state_27454[(2)]);
var state_27454__$1 = state_27454;
var statearr_27461_27608 = state_27454__$1;
(statearr_27461_27608[(2)] = inst_27450);

(statearr_27461_27608[(1)] = (3));


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
});})(__27598,c__27259__auto___27602,G__27441_27599,G__27441_27600__$1,n__4613__auto___27597,jobs,results,process,async))
;
return ((function (__27598,switch__27164__auto__,c__27259__auto___27602,G__27441_27599,G__27441_27600__$1,n__4613__auto___27597,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27165__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27165__auto____0 = (function (){
var statearr_27462 = [null,null,null,null,null,null,null];
(statearr_27462[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27165__auto__);

(statearr_27462[(1)] = (1));

return statearr_27462;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27165__auto____1 = (function (state_27454){
while(true){
var ret_value__27166__auto__ = (function (){try{while(true){
var result__27167__auto__ = switch__27164__auto__.call(null,state_27454);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27167__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27167__auto__;
}
break;
}
}catch (e27463){if((e27463 instanceof Object)){
var ex__27168__auto__ = e27463;
var statearr_27464_27609 = state_27454;
(statearr_27464_27609[(5)] = ex__27168__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27454);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27463;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27610 = state_27454;
state_27454 = G__27610;
continue;
} else {
return ret_value__27166__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27165__auto__ = function(state_27454){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27165__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27165__auto____1.call(this,state_27454);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27165__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27165__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27165__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27165__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27165__auto__;
})()
;})(__27598,switch__27164__auto__,c__27259__auto___27602,G__27441_27599,G__27441_27600__$1,n__4613__auto___27597,jobs,results,process,async))
})();
var state__27261__auto__ = (function (){var statearr_27465 = f__27260__auto__.call(null);
(statearr_27465[(6)] = c__27259__auto___27602);

return statearr_27465;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27261__auto__);
});})(__27598,c__27259__auto___27602,G__27441_27599,G__27441_27600__$1,n__4613__auto___27597,jobs,results,process,async))
);


break;
case "async":
var c__27259__auto___27611 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__27598,c__27259__auto___27611,G__27441_27599,G__27441_27600__$1,n__4613__auto___27597,jobs,results,process,async){
return (function (){
var f__27260__auto__ = (function (){var switch__27164__auto__ = ((function (__27598,c__27259__auto___27611,G__27441_27599,G__27441_27600__$1,n__4613__auto___27597,jobs,results,process,async){
return (function (state_27478){
var state_val_27479 = (state_27478[(1)]);
if((state_val_27479 === (1))){
var state_27478__$1 = state_27478;
var statearr_27480_27612 = state_27478__$1;
(statearr_27480_27612[(2)] = null);

(statearr_27480_27612[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27479 === (2))){
var state_27478__$1 = state_27478;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27478__$1,(4),jobs);
} else {
if((state_val_27479 === (3))){
var inst_27476 = (state_27478[(2)]);
var state_27478__$1 = state_27478;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27478__$1,inst_27476);
} else {
if((state_val_27479 === (4))){
var inst_27468 = (state_27478[(2)]);
var inst_27469 = async.call(null,inst_27468);
var state_27478__$1 = state_27478;
if(cljs.core.truth_(inst_27469)){
var statearr_27481_27613 = state_27478__$1;
(statearr_27481_27613[(1)] = (5));

} else {
var statearr_27482_27614 = state_27478__$1;
(statearr_27482_27614[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27479 === (5))){
var state_27478__$1 = state_27478;
var statearr_27483_27615 = state_27478__$1;
(statearr_27483_27615[(2)] = null);

(statearr_27483_27615[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27479 === (6))){
var state_27478__$1 = state_27478;
var statearr_27484_27616 = state_27478__$1;
(statearr_27484_27616[(2)] = null);

(statearr_27484_27616[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27479 === (7))){
var inst_27474 = (state_27478[(2)]);
var state_27478__$1 = state_27478;
var statearr_27485_27617 = state_27478__$1;
(statearr_27485_27617[(2)] = inst_27474);

(statearr_27485_27617[(1)] = (3));


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
});})(__27598,c__27259__auto___27611,G__27441_27599,G__27441_27600__$1,n__4613__auto___27597,jobs,results,process,async))
;
return ((function (__27598,switch__27164__auto__,c__27259__auto___27611,G__27441_27599,G__27441_27600__$1,n__4613__auto___27597,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27165__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27165__auto____0 = (function (){
var statearr_27486 = [null,null,null,null,null,null,null];
(statearr_27486[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27165__auto__);

(statearr_27486[(1)] = (1));

return statearr_27486;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27165__auto____1 = (function (state_27478){
while(true){
var ret_value__27166__auto__ = (function (){try{while(true){
var result__27167__auto__ = switch__27164__auto__.call(null,state_27478);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27167__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27167__auto__;
}
break;
}
}catch (e27487){if((e27487 instanceof Object)){
var ex__27168__auto__ = e27487;
var statearr_27488_27618 = state_27478;
(statearr_27488_27618[(5)] = ex__27168__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27478);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27487;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27619 = state_27478;
state_27478 = G__27619;
continue;
} else {
return ret_value__27166__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27165__auto__ = function(state_27478){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27165__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27165__auto____1.call(this,state_27478);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27165__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27165__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27165__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27165__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27165__auto__;
})()
;})(__27598,switch__27164__auto__,c__27259__auto___27611,G__27441_27599,G__27441_27600__$1,n__4613__auto___27597,jobs,results,process,async))
})();
var state__27261__auto__ = (function (){var statearr_27489 = f__27260__auto__.call(null);
(statearr_27489[(6)] = c__27259__auto___27611);

return statearr_27489;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27261__auto__);
});})(__27598,c__27259__auto___27611,G__27441_27599,G__27441_27600__$1,n__4613__auto___27597,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27441_27600__$1)].join('')));

}

var G__27620 = (__27598 + (1));
__27598 = G__27620;
continue;
} else {
}
break;
}

var c__27259__auto___27621 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27260__auto__ = (function (){var switch__27164__auto__ = (function (state_27511){
var state_val_27512 = (state_27511[(1)]);
if((state_val_27512 === (7))){
var inst_27507 = (state_27511[(2)]);
var state_27511__$1 = state_27511;
var statearr_27513_27622 = state_27511__$1;
(statearr_27513_27622[(2)] = inst_27507);

(statearr_27513_27622[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27512 === (1))){
var state_27511__$1 = state_27511;
var statearr_27514_27623 = state_27511__$1;
(statearr_27514_27623[(2)] = null);

(statearr_27514_27623[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27512 === (4))){
var inst_27492 = (state_27511[(7)]);
var inst_27492__$1 = (state_27511[(2)]);
var inst_27493 = (inst_27492__$1 == null);
var state_27511__$1 = (function (){var statearr_27515 = state_27511;
(statearr_27515[(7)] = inst_27492__$1);

return statearr_27515;
})();
if(cljs.core.truth_(inst_27493)){
var statearr_27516_27624 = state_27511__$1;
(statearr_27516_27624[(1)] = (5));

} else {
var statearr_27517_27625 = state_27511__$1;
(statearr_27517_27625[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27512 === (6))){
var inst_27497 = (state_27511[(8)]);
var inst_27492 = (state_27511[(7)]);
var inst_27497__$1 = cljs.core.async.chan.call(null,(1));
var inst_27498 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27499 = [inst_27492,inst_27497__$1];
var inst_27500 = (new cljs.core.PersistentVector(null,2,(5),inst_27498,inst_27499,null));
var state_27511__$1 = (function (){var statearr_27518 = state_27511;
(statearr_27518[(8)] = inst_27497__$1);

return statearr_27518;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27511__$1,(8),jobs,inst_27500);
} else {
if((state_val_27512 === (3))){
var inst_27509 = (state_27511[(2)]);
var state_27511__$1 = state_27511;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27511__$1,inst_27509);
} else {
if((state_val_27512 === (2))){
var state_27511__$1 = state_27511;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27511__$1,(4),from);
} else {
if((state_val_27512 === (9))){
var inst_27504 = (state_27511[(2)]);
var state_27511__$1 = (function (){var statearr_27519 = state_27511;
(statearr_27519[(9)] = inst_27504);

return statearr_27519;
})();
var statearr_27520_27626 = state_27511__$1;
(statearr_27520_27626[(2)] = null);

(statearr_27520_27626[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27512 === (5))){
var inst_27495 = cljs.core.async.close_BANG_.call(null,jobs);
var state_27511__$1 = state_27511;
var statearr_27521_27627 = state_27511__$1;
(statearr_27521_27627[(2)] = inst_27495);

(statearr_27521_27627[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27512 === (8))){
var inst_27497 = (state_27511[(8)]);
var inst_27502 = (state_27511[(2)]);
var state_27511__$1 = (function (){var statearr_27522 = state_27511;
(statearr_27522[(10)] = inst_27502);

return statearr_27522;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27511__$1,(9),results,inst_27497);
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
var cljs$core$async$pipeline_STAR__$_state_machine__27165__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27165__auto____0 = (function (){
var statearr_27523 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27523[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27165__auto__);

(statearr_27523[(1)] = (1));

return statearr_27523;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27165__auto____1 = (function (state_27511){
while(true){
var ret_value__27166__auto__ = (function (){try{while(true){
var result__27167__auto__ = switch__27164__auto__.call(null,state_27511);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27167__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27167__auto__;
}
break;
}
}catch (e27524){if((e27524 instanceof Object)){
var ex__27168__auto__ = e27524;
var statearr_27525_27628 = state_27511;
(statearr_27525_27628[(5)] = ex__27168__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27511);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27524;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27629 = state_27511;
state_27511 = G__27629;
continue;
} else {
return ret_value__27166__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27165__auto__ = function(state_27511){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27165__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27165__auto____1.call(this,state_27511);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27165__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27165__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27165__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27165__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27165__auto__;
})()
})();
var state__27261__auto__ = (function (){var statearr_27526 = f__27260__auto__.call(null);
(statearr_27526[(6)] = c__27259__auto___27621);

return statearr_27526;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27261__auto__);
}));


var c__27259__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27260__auto__ = (function (){var switch__27164__auto__ = (function (state_27564){
var state_val_27565 = (state_27564[(1)]);
if((state_val_27565 === (7))){
var inst_27560 = (state_27564[(2)]);
var state_27564__$1 = state_27564;
var statearr_27566_27630 = state_27564__$1;
(statearr_27566_27630[(2)] = inst_27560);

(statearr_27566_27630[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27565 === (20))){
var state_27564__$1 = state_27564;
var statearr_27567_27631 = state_27564__$1;
(statearr_27567_27631[(2)] = null);

(statearr_27567_27631[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27565 === (1))){
var state_27564__$1 = state_27564;
var statearr_27568_27632 = state_27564__$1;
(statearr_27568_27632[(2)] = null);

(statearr_27568_27632[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27565 === (4))){
var inst_27529 = (state_27564[(7)]);
var inst_27529__$1 = (state_27564[(2)]);
var inst_27530 = (inst_27529__$1 == null);
var state_27564__$1 = (function (){var statearr_27569 = state_27564;
(statearr_27569[(7)] = inst_27529__$1);

return statearr_27569;
})();
if(cljs.core.truth_(inst_27530)){
var statearr_27570_27633 = state_27564__$1;
(statearr_27570_27633[(1)] = (5));

} else {
var statearr_27571_27634 = state_27564__$1;
(statearr_27571_27634[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27565 === (15))){
var inst_27542 = (state_27564[(8)]);
var state_27564__$1 = state_27564;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27564__$1,(18),to,inst_27542);
} else {
if((state_val_27565 === (21))){
var inst_27555 = (state_27564[(2)]);
var state_27564__$1 = state_27564;
var statearr_27572_27635 = state_27564__$1;
(statearr_27572_27635[(2)] = inst_27555);

(statearr_27572_27635[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27565 === (13))){
var inst_27557 = (state_27564[(2)]);
var state_27564__$1 = (function (){var statearr_27573 = state_27564;
(statearr_27573[(9)] = inst_27557);

return statearr_27573;
})();
var statearr_27574_27636 = state_27564__$1;
(statearr_27574_27636[(2)] = null);

(statearr_27574_27636[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27565 === (6))){
var inst_27529 = (state_27564[(7)]);
var state_27564__$1 = state_27564;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27564__$1,(11),inst_27529);
} else {
if((state_val_27565 === (17))){
var inst_27550 = (state_27564[(2)]);
var state_27564__$1 = state_27564;
if(cljs.core.truth_(inst_27550)){
var statearr_27575_27637 = state_27564__$1;
(statearr_27575_27637[(1)] = (19));

} else {
var statearr_27576_27638 = state_27564__$1;
(statearr_27576_27638[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27565 === (3))){
var inst_27562 = (state_27564[(2)]);
var state_27564__$1 = state_27564;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27564__$1,inst_27562);
} else {
if((state_val_27565 === (12))){
var inst_27539 = (state_27564[(10)]);
var state_27564__$1 = state_27564;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27564__$1,(14),inst_27539);
} else {
if((state_val_27565 === (2))){
var state_27564__$1 = state_27564;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27564__$1,(4),results);
} else {
if((state_val_27565 === (19))){
var state_27564__$1 = state_27564;
var statearr_27577_27639 = state_27564__$1;
(statearr_27577_27639[(2)] = null);

(statearr_27577_27639[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27565 === (11))){
var inst_27539 = (state_27564[(2)]);
var state_27564__$1 = (function (){var statearr_27578 = state_27564;
(statearr_27578[(10)] = inst_27539);

return statearr_27578;
})();
var statearr_27579_27640 = state_27564__$1;
(statearr_27579_27640[(2)] = null);

(statearr_27579_27640[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27565 === (9))){
var state_27564__$1 = state_27564;
var statearr_27580_27641 = state_27564__$1;
(statearr_27580_27641[(2)] = null);

(statearr_27580_27641[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27565 === (5))){
var state_27564__$1 = state_27564;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27581_27642 = state_27564__$1;
(statearr_27581_27642[(1)] = (8));

} else {
var statearr_27582_27643 = state_27564__$1;
(statearr_27582_27643[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27565 === (14))){
var inst_27542 = (state_27564[(8)]);
var inst_27542__$1 = (state_27564[(2)]);
var inst_27543 = (inst_27542__$1 == null);
var inst_27544 = cljs.core.not.call(null,inst_27543);
var state_27564__$1 = (function (){var statearr_27583 = state_27564;
(statearr_27583[(8)] = inst_27542__$1);

return statearr_27583;
})();
if(inst_27544){
var statearr_27584_27644 = state_27564__$1;
(statearr_27584_27644[(1)] = (15));

} else {
var statearr_27585_27645 = state_27564__$1;
(statearr_27585_27645[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27565 === (16))){
var state_27564__$1 = state_27564;
var statearr_27586_27646 = state_27564__$1;
(statearr_27586_27646[(2)] = false);

(statearr_27586_27646[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27565 === (10))){
var inst_27536 = (state_27564[(2)]);
var state_27564__$1 = state_27564;
var statearr_27587_27647 = state_27564__$1;
(statearr_27587_27647[(2)] = inst_27536);

(statearr_27587_27647[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27565 === (18))){
var inst_27547 = (state_27564[(2)]);
var state_27564__$1 = state_27564;
var statearr_27588_27648 = state_27564__$1;
(statearr_27588_27648[(2)] = inst_27547);

(statearr_27588_27648[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27565 === (8))){
var inst_27533 = cljs.core.async.close_BANG_.call(null,to);
var state_27564__$1 = state_27564;
var statearr_27589_27649 = state_27564__$1;
(statearr_27589_27649[(2)] = inst_27533);

(statearr_27589_27649[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__27165__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27165__auto____0 = (function (){
var statearr_27590 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27590[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27165__auto__);

(statearr_27590[(1)] = (1));

return statearr_27590;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27165__auto____1 = (function (state_27564){
while(true){
var ret_value__27166__auto__ = (function (){try{while(true){
var result__27167__auto__ = switch__27164__auto__.call(null,state_27564);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27167__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27167__auto__;
}
break;
}
}catch (e27591){if((e27591 instanceof Object)){
var ex__27168__auto__ = e27591;
var statearr_27592_27650 = state_27564;
(statearr_27592_27650[(5)] = ex__27168__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27564);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27591;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27651 = state_27564;
state_27564 = G__27651;
continue;
} else {
return ret_value__27166__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27165__auto__ = function(state_27564){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27165__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27165__auto____1.call(this,state_27564);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27165__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27165__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27165__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27165__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27165__auto__;
})()
})();
var state__27261__auto__ = (function (){var statearr_27593 = f__27260__auto__.call(null);
(statearr_27593[(6)] = c__27259__auto__);

return statearr_27593;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27261__auto__);
}));

return c__27259__auto__;
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
var G__27653 = arguments.length;
switch (G__27653) {
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
var G__27656 = arguments.length;
switch (G__27656) {
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
var G__27659 = arguments.length;
switch (G__27659) {
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
var c__27259__auto___27708 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27260__auto__ = (function (){var switch__27164__auto__ = (function (state_27685){
var state_val_27686 = (state_27685[(1)]);
if((state_val_27686 === (7))){
var inst_27681 = (state_27685[(2)]);
var state_27685__$1 = state_27685;
var statearr_27687_27709 = state_27685__$1;
(statearr_27687_27709[(2)] = inst_27681);

(statearr_27687_27709[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27686 === (1))){
var state_27685__$1 = state_27685;
var statearr_27688_27710 = state_27685__$1;
(statearr_27688_27710[(2)] = null);

(statearr_27688_27710[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27686 === (4))){
var inst_27662 = (state_27685[(7)]);
var inst_27662__$1 = (state_27685[(2)]);
var inst_27663 = (inst_27662__$1 == null);
var state_27685__$1 = (function (){var statearr_27689 = state_27685;
(statearr_27689[(7)] = inst_27662__$1);

return statearr_27689;
})();
if(cljs.core.truth_(inst_27663)){
var statearr_27690_27711 = state_27685__$1;
(statearr_27690_27711[(1)] = (5));

} else {
var statearr_27691_27712 = state_27685__$1;
(statearr_27691_27712[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27686 === (13))){
var state_27685__$1 = state_27685;
var statearr_27692_27713 = state_27685__$1;
(statearr_27692_27713[(2)] = null);

(statearr_27692_27713[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27686 === (6))){
var inst_27662 = (state_27685[(7)]);
var inst_27668 = p.call(null,inst_27662);
var state_27685__$1 = state_27685;
if(cljs.core.truth_(inst_27668)){
var statearr_27693_27714 = state_27685__$1;
(statearr_27693_27714[(1)] = (9));

} else {
var statearr_27694_27715 = state_27685__$1;
(statearr_27694_27715[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27686 === (3))){
var inst_27683 = (state_27685[(2)]);
var state_27685__$1 = state_27685;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27685__$1,inst_27683);
} else {
if((state_val_27686 === (12))){
var state_27685__$1 = state_27685;
var statearr_27695_27716 = state_27685__$1;
(statearr_27695_27716[(2)] = null);

(statearr_27695_27716[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27686 === (2))){
var state_27685__$1 = state_27685;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27685__$1,(4),ch);
} else {
if((state_val_27686 === (11))){
var inst_27662 = (state_27685[(7)]);
var inst_27672 = (state_27685[(2)]);
var state_27685__$1 = state_27685;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27685__$1,(8),inst_27672,inst_27662);
} else {
if((state_val_27686 === (9))){
var state_27685__$1 = state_27685;
var statearr_27696_27717 = state_27685__$1;
(statearr_27696_27717[(2)] = tc);

(statearr_27696_27717[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27686 === (5))){
var inst_27665 = cljs.core.async.close_BANG_.call(null,tc);
var inst_27666 = cljs.core.async.close_BANG_.call(null,fc);
var state_27685__$1 = (function (){var statearr_27697 = state_27685;
(statearr_27697[(8)] = inst_27665);

return statearr_27697;
})();
var statearr_27698_27718 = state_27685__$1;
(statearr_27698_27718[(2)] = inst_27666);

(statearr_27698_27718[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27686 === (14))){
var inst_27679 = (state_27685[(2)]);
var state_27685__$1 = state_27685;
var statearr_27699_27719 = state_27685__$1;
(statearr_27699_27719[(2)] = inst_27679);

(statearr_27699_27719[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27686 === (10))){
var state_27685__$1 = state_27685;
var statearr_27700_27720 = state_27685__$1;
(statearr_27700_27720[(2)] = fc);

(statearr_27700_27720[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27686 === (8))){
var inst_27674 = (state_27685[(2)]);
var state_27685__$1 = state_27685;
if(cljs.core.truth_(inst_27674)){
var statearr_27701_27721 = state_27685__$1;
(statearr_27701_27721[(1)] = (12));

} else {
var statearr_27702_27722 = state_27685__$1;
(statearr_27702_27722[(1)] = (13));

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
var cljs$core$async$state_machine__27165__auto__ = null;
var cljs$core$async$state_machine__27165__auto____0 = (function (){
var statearr_27703 = [null,null,null,null,null,null,null,null,null];
(statearr_27703[(0)] = cljs$core$async$state_machine__27165__auto__);

(statearr_27703[(1)] = (1));

return statearr_27703;
});
var cljs$core$async$state_machine__27165__auto____1 = (function (state_27685){
while(true){
var ret_value__27166__auto__ = (function (){try{while(true){
var result__27167__auto__ = switch__27164__auto__.call(null,state_27685);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27167__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27167__auto__;
}
break;
}
}catch (e27704){if((e27704 instanceof Object)){
var ex__27168__auto__ = e27704;
var statearr_27705_27723 = state_27685;
(statearr_27705_27723[(5)] = ex__27168__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27685);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27704;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27724 = state_27685;
state_27685 = G__27724;
continue;
} else {
return ret_value__27166__auto__;
}
break;
}
});
cljs$core$async$state_machine__27165__auto__ = function(state_27685){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27165__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27165__auto____1.call(this,state_27685);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27165__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27165__auto____0;
cljs$core$async$state_machine__27165__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27165__auto____1;
return cljs$core$async$state_machine__27165__auto__;
})()
})();
var state__27261__auto__ = (function (){var statearr_27706 = f__27260__auto__.call(null);
(statearr_27706[(6)] = c__27259__auto___27708);

return statearr_27706;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27261__auto__);
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
var c__27259__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27260__auto__ = (function (){var switch__27164__auto__ = (function (state_27745){
var state_val_27746 = (state_27745[(1)]);
if((state_val_27746 === (7))){
var inst_27741 = (state_27745[(2)]);
var state_27745__$1 = state_27745;
var statearr_27747_27765 = state_27745__$1;
(statearr_27747_27765[(2)] = inst_27741);

(statearr_27747_27765[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27746 === (1))){
var inst_27725 = init;
var state_27745__$1 = (function (){var statearr_27748 = state_27745;
(statearr_27748[(7)] = inst_27725);

return statearr_27748;
})();
var statearr_27749_27766 = state_27745__$1;
(statearr_27749_27766[(2)] = null);

(statearr_27749_27766[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27746 === (4))){
var inst_27728 = (state_27745[(8)]);
var inst_27728__$1 = (state_27745[(2)]);
var inst_27729 = (inst_27728__$1 == null);
var state_27745__$1 = (function (){var statearr_27750 = state_27745;
(statearr_27750[(8)] = inst_27728__$1);

return statearr_27750;
})();
if(cljs.core.truth_(inst_27729)){
var statearr_27751_27767 = state_27745__$1;
(statearr_27751_27767[(1)] = (5));

} else {
var statearr_27752_27768 = state_27745__$1;
(statearr_27752_27768[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27746 === (6))){
var inst_27725 = (state_27745[(7)]);
var inst_27728 = (state_27745[(8)]);
var inst_27732 = (state_27745[(9)]);
var inst_27732__$1 = f.call(null,inst_27725,inst_27728);
var inst_27733 = cljs.core.reduced_QMARK_.call(null,inst_27732__$1);
var state_27745__$1 = (function (){var statearr_27753 = state_27745;
(statearr_27753[(9)] = inst_27732__$1);

return statearr_27753;
})();
if(inst_27733){
var statearr_27754_27769 = state_27745__$1;
(statearr_27754_27769[(1)] = (8));

} else {
var statearr_27755_27770 = state_27745__$1;
(statearr_27755_27770[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27746 === (3))){
var inst_27743 = (state_27745[(2)]);
var state_27745__$1 = state_27745;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27745__$1,inst_27743);
} else {
if((state_val_27746 === (2))){
var state_27745__$1 = state_27745;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27745__$1,(4),ch);
} else {
if((state_val_27746 === (9))){
var inst_27732 = (state_27745[(9)]);
var inst_27725 = inst_27732;
var state_27745__$1 = (function (){var statearr_27756 = state_27745;
(statearr_27756[(7)] = inst_27725);

return statearr_27756;
})();
var statearr_27757_27771 = state_27745__$1;
(statearr_27757_27771[(2)] = null);

(statearr_27757_27771[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27746 === (5))){
var inst_27725 = (state_27745[(7)]);
var state_27745__$1 = state_27745;
var statearr_27758_27772 = state_27745__$1;
(statearr_27758_27772[(2)] = inst_27725);

(statearr_27758_27772[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27746 === (10))){
var inst_27739 = (state_27745[(2)]);
var state_27745__$1 = state_27745;
var statearr_27759_27773 = state_27745__$1;
(statearr_27759_27773[(2)] = inst_27739);

(statearr_27759_27773[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27746 === (8))){
var inst_27732 = (state_27745[(9)]);
var inst_27735 = cljs.core.deref.call(null,inst_27732);
var state_27745__$1 = state_27745;
var statearr_27760_27774 = state_27745__$1;
(statearr_27760_27774[(2)] = inst_27735);

(statearr_27760_27774[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__27165__auto__ = null;
var cljs$core$async$reduce_$_state_machine__27165__auto____0 = (function (){
var statearr_27761 = [null,null,null,null,null,null,null,null,null,null];
(statearr_27761[(0)] = cljs$core$async$reduce_$_state_machine__27165__auto__);

(statearr_27761[(1)] = (1));

return statearr_27761;
});
var cljs$core$async$reduce_$_state_machine__27165__auto____1 = (function (state_27745){
while(true){
var ret_value__27166__auto__ = (function (){try{while(true){
var result__27167__auto__ = switch__27164__auto__.call(null,state_27745);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27167__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27167__auto__;
}
break;
}
}catch (e27762){if((e27762 instanceof Object)){
var ex__27168__auto__ = e27762;
var statearr_27763_27775 = state_27745;
(statearr_27763_27775[(5)] = ex__27168__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27745);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27762;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27776 = state_27745;
state_27745 = G__27776;
continue;
} else {
return ret_value__27166__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__27165__auto__ = function(state_27745){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__27165__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__27165__auto____1.call(this,state_27745);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__27165__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__27165__auto____0;
cljs$core$async$reduce_$_state_machine__27165__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__27165__auto____1;
return cljs$core$async$reduce_$_state_machine__27165__auto__;
})()
})();
var state__27261__auto__ = (function (){var statearr_27764 = f__27260__auto__.call(null);
(statearr_27764[(6)] = c__27259__auto__);

return statearr_27764;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27261__auto__);
}));

return c__27259__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__27259__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27260__auto__ = (function (){var switch__27164__auto__ = (function (state_27782){
var state_val_27783 = (state_27782[(1)]);
if((state_val_27783 === (1))){
var inst_27777 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_27782__$1 = state_27782;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27782__$1,(2),inst_27777);
} else {
if((state_val_27783 === (2))){
var inst_27779 = (state_27782[(2)]);
var inst_27780 = f__$1.call(null,inst_27779);
var state_27782__$1 = state_27782;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27782__$1,inst_27780);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__27165__auto__ = null;
var cljs$core$async$transduce_$_state_machine__27165__auto____0 = (function (){
var statearr_27784 = [null,null,null,null,null,null,null];
(statearr_27784[(0)] = cljs$core$async$transduce_$_state_machine__27165__auto__);

(statearr_27784[(1)] = (1));

return statearr_27784;
});
var cljs$core$async$transduce_$_state_machine__27165__auto____1 = (function (state_27782){
while(true){
var ret_value__27166__auto__ = (function (){try{while(true){
var result__27167__auto__ = switch__27164__auto__.call(null,state_27782);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27167__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27167__auto__;
}
break;
}
}catch (e27785){if((e27785 instanceof Object)){
var ex__27168__auto__ = e27785;
var statearr_27786_27788 = state_27782;
(statearr_27786_27788[(5)] = ex__27168__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27782);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27785;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27789 = state_27782;
state_27782 = G__27789;
continue;
} else {
return ret_value__27166__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__27165__auto__ = function(state_27782){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__27165__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__27165__auto____1.call(this,state_27782);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__27165__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__27165__auto____0;
cljs$core$async$transduce_$_state_machine__27165__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__27165__auto____1;
return cljs$core$async$transduce_$_state_machine__27165__auto__;
})()
})();
var state__27261__auto__ = (function (){var statearr_27787 = f__27260__auto__.call(null);
(statearr_27787[(6)] = c__27259__auto__);

return statearr_27787;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27261__auto__);
}));

return c__27259__auto__;
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
var G__27791 = arguments.length;
switch (G__27791) {
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
var c__27259__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27260__auto__ = (function (){var switch__27164__auto__ = (function (state_27816){
var state_val_27817 = (state_27816[(1)]);
if((state_val_27817 === (7))){
var inst_27798 = (state_27816[(2)]);
var state_27816__$1 = state_27816;
var statearr_27818_27839 = state_27816__$1;
(statearr_27818_27839[(2)] = inst_27798);

(statearr_27818_27839[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27817 === (1))){
var inst_27792 = cljs.core.seq.call(null,coll);
var inst_27793 = inst_27792;
var state_27816__$1 = (function (){var statearr_27819 = state_27816;
(statearr_27819[(7)] = inst_27793);

return statearr_27819;
})();
var statearr_27820_27840 = state_27816__$1;
(statearr_27820_27840[(2)] = null);

(statearr_27820_27840[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27817 === (4))){
var inst_27793 = (state_27816[(7)]);
var inst_27796 = cljs.core.first.call(null,inst_27793);
var state_27816__$1 = state_27816;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27816__$1,(7),ch,inst_27796);
} else {
if((state_val_27817 === (13))){
var inst_27810 = (state_27816[(2)]);
var state_27816__$1 = state_27816;
var statearr_27821_27841 = state_27816__$1;
(statearr_27821_27841[(2)] = inst_27810);

(statearr_27821_27841[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27817 === (6))){
var inst_27801 = (state_27816[(2)]);
var state_27816__$1 = state_27816;
if(cljs.core.truth_(inst_27801)){
var statearr_27822_27842 = state_27816__$1;
(statearr_27822_27842[(1)] = (8));

} else {
var statearr_27823_27843 = state_27816__$1;
(statearr_27823_27843[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27817 === (3))){
var inst_27814 = (state_27816[(2)]);
var state_27816__$1 = state_27816;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27816__$1,inst_27814);
} else {
if((state_val_27817 === (12))){
var state_27816__$1 = state_27816;
var statearr_27824_27844 = state_27816__$1;
(statearr_27824_27844[(2)] = null);

(statearr_27824_27844[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27817 === (2))){
var inst_27793 = (state_27816[(7)]);
var state_27816__$1 = state_27816;
if(cljs.core.truth_(inst_27793)){
var statearr_27825_27845 = state_27816__$1;
(statearr_27825_27845[(1)] = (4));

} else {
var statearr_27826_27846 = state_27816__$1;
(statearr_27826_27846[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27817 === (11))){
var inst_27807 = cljs.core.async.close_BANG_.call(null,ch);
var state_27816__$1 = state_27816;
var statearr_27827_27847 = state_27816__$1;
(statearr_27827_27847[(2)] = inst_27807);

(statearr_27827_27847[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27817 === (9))){
var state_27816__$1 = state_27816;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27828_27848 = state_27816__$1;
(statearr_27828_27848[(1)] = (11));

} else {
var statearr_27829_27849 = state_27816__$1;
(statearr_27829_27849[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27817 === (5))){
var inst_27793 = (state_27816[(7)]);
var state_27816__$1 = state_27816;
var statearr_27830_27850 = state_27816__$1;
(statearr_27830_27850[(2)] = inst_27793);

(statearr_27830_27850[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27817 === (10))){
var inst_27812 = (state_27816[(2)]);
var state_27816__$1 = state_27816;
var statearr_27831_27851 = state_27816__$1;
(statearr_27831_27851[(2)] = inst_27812);

(statearr_27831_27851[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27817 === (8))){
var inst_27793 = (state_27816[(7)]);
var inst_27803 = cljs.core.next.call(null,inst_27793);
var inst_27793__$1 = inst_27803;
var state_27816__$1 = (function (){var statearr_27832 = state_27816;
(statearr_27832[(7)] = inst_27793__$1);

return statearr_27832;
})();
var statearr_27833_27852 = state_27816__$1;
(statearr_27833_27852[(2)] = null);

(statearr_27833_27852[(1)] = (2));


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
var cljs$core$async$state_machine__27165__auto__ = null;
var cljs$core$async$state_machine__27165__auto____0 = (function (){
var statearr_27834 = [null,null,null,null,null,null,null,null];
(statearr_27834[(0)] = cljs$core$async$state_machine__27165__auto__);

(statearr_27834[(1)] = (1));

return statearr_27834;
});
var cljs$core$async$state_machine__27165__auto____1 = (function (state_27816){
while(true){
var ret_value__27166__auto__ = (function (){try{while(true){
var result__27167__auto__ = switch__27164__auto__.call(null,state_27816);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27167__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27167__auto__;
}
break;
}
}catch (e27835){if((e27835 instanceof Object)){
var ex__27168__auto__ = e27835;
var statearr_27836_27853 = state_27816;
(statearr_27836_27853[(5)] = ex__27168__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27816);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27835;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27854 = state_27816;
state_27816 = G__27854;
continue;
} else {
return ret_value__27166__auto__;
}
break;
}
});
cljs$core$async$state_machine__27165__auto__ = function(state_27816){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27165__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27165__auto____1.call(this,state_27816);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27165__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27165__auto____0;
cljs$core$async$state_machine__27165__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27165__auto____1;
return cljs$core$async$state_machine__27165__auto__;
})()
})();
var state__27261__auto__ = (function (){var statearr_27837 = f__27260__auto__.call(null);
(statearr_27837[(6)] = c__27259__auto__);

return statearr_27837;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27261__auto__);
}));

return c__27259__auto__;
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

var cljs$core$async$Mux$muxch_STAR_$dyn_27855 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_27855.call(null,_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_27856 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_27856.call(null,m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_27857 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_27857.call(null,m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_27858 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_27858.call(null,m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27859 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27859 = (function (ch,cs,meta27860){
this.ch = ch;
this.cs = cs;
this.meta27860 = meta27860;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async27859.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27861,meta27860__$1){
var self__ = this;
var _27861__$1 = this;
return (new cljs.core.async.t_cljs$core$async27859(self__.ch,self__.cs,meta27860__$1));
}));

(cljs.core.async.t_cljs$core$async27859.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27861){
var self__ = this;
var _27861__$1 = this;
return self__.meta27860;
}));

(cljs.core.async.t_cljs$core$async27859.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27859.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async27859.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27859.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async27859.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async27859.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async27859.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta27860","meta27860",-640482517,null)], null);
}));

(cljs.core.async.t_cljs$core$async27859.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async27859.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27859");

(cljs.core.async.t_cljs$core$async27859.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async27859");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27859.
 */
cljs.core.async.__GT_t_cljs$core$async27859 = (function cljs$core$async$mult_$___GT_t_cljs$core$async27859(ch__$1,cs__$1,meta27860){
return (new cljs.core.async.t_cljs$core$async27859(ch__$1,cs__$1,meta27860));
});

}

return (new cljs.core.async.t_cljs$core$async27859(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__27259__auto___28081 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27260__auto__ = (function (){var switch__27164__auto__ = (function (state_27996){
var state_val_27997 = (state_27996[(1)]);
if((state_val_27997 === (7))){
var inst_27992 = (state_27996[(2)]);
var state_27996__$1 = state_27996;
var statearr_27998_28082 = state_27996__$1;
(statearr_27998_28082[(2)] = inst_27992);

(statearr_27998_28082[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27997 === (20))){
var inst_27895 = (state_27996[(7)]);
var inst_27907 = cljs.core.first.call(null,inst_27895);
var inst_27908 = cljs.core.nth.call(null,inst_27907,(0),null);
var inst_27909 = cljs.core.nth.call(null,inst_27907,(1),null);
var state_27996__$1 = (function (){var statearr_27999 = state_27996;
(statearr_27999[(8)] = inst_27908);

return statearr_27999;
})();
if(cljs.core.truth_(inst_27909)){
var statearr_28000_28083 = state_27996__$1;
(statearr_28000_28083[(1)] = (22));

} else {
var statearr_28001_28084 = state_27996__$1;
(statearr_28001_28084[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27997 === (27))){
var inst_27864 = (state_27996[(9)]);
var inst_27939 = (state_27996[(10)]);
var inst_27937 = (state_27996[(11)]);
var inst_27944 = (state_27996[(12)]);
var inst_27944__$1 = cljs.core._nth.call(null,inst_27937,inst_27939);
var inst_27945 = cljs.core.async.put_BANG_.call(null,inst_27944__$1,inst_27864,done);
var state_27996__$1 = (function (){var statearr_28002 = state_27996;
(statearr_28002[(12)] = inst_27944__$1);

return statearr_28002;
})();
if(cljs.core.truth_(inst_27945)){
var statearr_28003_28085 = state_27996__$1;
(statearr_28003_28085[(1)] = (30));

} else {
var statearr_28004_28086 = state_27996__$1;
(statearr_28004_28086[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27997 === (1))){
var state_27996__$1 = state_27996;
var statearr_28005_28087 = state_27996__$1;
(statearr_28005_28087[(2)] = null);

(statearr_28005_28087[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27997 === (24))){
var inst_27895 = (state_27996[(7)]);
var inst_27914 = (state_27996[(2)]);
var inst_27915 = cljs.core.next.call(null,inst_27895);
var inst_27873 = inst_27915;
var inst_27874 = null;
var inst_27875 = (0);
var inst_27876 = (0);
var state_27996__$1 = (function (){var statearr_28006 = state_27996;
(statearr_28006[(13)] = inst_27874);

(statearr_28006[(14)] = inst_27875);

(statearr_28006[(15)] = inst_27914);

(statearr_28006[(16)] = inst_27873);

(statearr_28006[(17)] = inst_27876);

return statearr_28006;
})();
var statearr_28007_28088 = state_27996__$1;
(statearr_28007_28088[(2)] = null);

(statearr_28007_28088[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27997 === (39))){
var state_27996__$1 = state_27996;
var statearr_28011_28089 = state_27996__$1;
(statearr_28011_28089[(2)] = null);

(statearr_28011_28089[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27997 === (4))){
var inst_27864 = (state_27996[(9)]);
var inst_27864__$1 = (state_27996[(2)]);
var inst_27865 = (inst_27864__$1 == null);
var state_27996__$1 = (function (){var statearr_28012 = state_27996;
(statearr_28012[(9)] = inst_27864__$1);

return statearr_28012;
})();
if(cljs.core.truth_(inst_27865)){
var statearr_28013_28090 = state_27996__$1;
(statearr_28013_28090[(1)] = (5));

} else {
var statearr_28014_28091 = state_27996__$1;
(statearr_28014_28091[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27997 === (15))){
var inst_27874 = (state_27996[(13)]);
var inst_27875 = (state_27996[(14)]);
var inst_27873 = (state_27996[(16)]);
var inst_27876 = (state_27996[(17)]);
var inst_27891 = (state_27996[(2)]);
var inst_27892 = (inst_27876 + (1));
var tmp28008 = inst_27874;
var tmp28009 = inst_27875;
var tmp28010 = inst_27873;
var inst_27873__$1 = tmp28010;
var inst_27874__$1 = tmp28008;
var inst_27875__$1 = tmp28009;
var inst_27876__$1 = inst_27892;
var state_27996__$1 = (function (){var statearr_28015 = state_27996;
(statearr_28015[(13)] = inst_27874__$1);

(statearr_28015[(14)] = inst_27875__$1);

(statearr_28015[(16)] = inst_27873__$1);

(statearr_28015[(17)] = inst_27876__$1);

(statearr_28015[(18)] = inst_27891);

return statearr_28015;
})();
var statearr_28016_28092 = state_27996__$1;
(statearr_28016_28092[(2)] = null);

(statearr_28016_28092[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27997 === (21))){
var inst_27918 = (state_27996[(2)]);
var state_27996__$1 = state_27996;
var statearr_28020_28093 = state_27996__$1;
(statearr_28020_28093[(2)] = inst_27918);

(statearr_28020_28093[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27997 === (31))){
var inst_27944 = (state_27996[(12)]);
var inst_27948 = done.call(null,null);
var inst_27949 = cljs.core.async.untap_STAR_.call(null,m,inst_27944);
var state_27996__$1 = (function (){var statearr_28021 = state_27996;
(statearr_28021[(19)] = inst_27948);

return statearr_28021;
})();
var statearr_28022_28094 = state_27996__$1;
(statearr_28022_28094[(2)] = inst_27949);

(statearr_28022_28094[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27997 === (32))){
var inst_27939 = (state_27996[(10)]);
var inst_27937 = (state_27996[(11)]);
var inst_27936 = (state_27996[(20)]);
var inst_27938 = (state_27996[(21)]);
var inst_27951 = (state_27996[(2)]);
var inst_27952 = (inst_27939 + (1));
var tmp28017 = inst_27937;
var tmp28018 = inst_27936;
var tmp28019 = inst_27938;
var inst_27936__$1 = tmp28018;
var inst_27937__$1 = tmp28017;
var inst_27938__$1 = tmp28019;
var inst_27939__$1 = inst_27952;
var state_27996__$1 = (function (){var statearr_28023 = state_27996;
(statearr_28023[(22)] = inst_27951);

(statearr_28023[(10)] = inst_27939__$1);

(statearr_28023[(11)] = inst_27937__$1);

(statearr_28023[(20)] = inst_27936__$1);

(statearr_28023[(21)] = inst_27938__$1);

return statearr_28023;
})();
var statearr_28024_28095 = state_27996__$1;
(statearr_28024_28095[(2)] = null);

(statearr_28024_28095[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27997 === (40))){
var inst_27964 = (state_27996[(23)]);
var inst_27968 = done.call(null,null);
var inst_27969 = cljs.core.async.untap_STAR_.call(null,m,inst_27964);
var state_27996__$1 = (function (){var statearr_28025 = state_27996;
(statearr_28025[(24)] = inst_27968);

return statearr_28025;
})();
var statearr_28026_28096 = state_27996__$1;
(statearr_28026_28096[(2)] = inst_27969);

(statearr_28026_28096[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27997 === (33))){
var inst_27955 = (state_27996[(25)]);
var inst_27957 = cljs.core.chunked_seq_QMARK_.call(null,inst_27955);
var state_27996__$1 = state_27996;
if(inst_27957){
var statearr_28027_28097 = state_27996__$1;
(statearr_28027_28097[(1)] = (36));

} else {
var statearr_28028_28098 = state_27996__$1;
(statearr_28028_28098[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27997 === (13))){
var inst_27885 = (state_27996[(26)]);
var inst_27888 = cljs.core.async.close_BANG_.call(null,inst_27885);
var state_27996__$1 = state_27996;
var statearr_28029_28099 = state_27996__$1;
(statearr_28029_28099[(2)] = inst_27888);

(statearr_28029_28099[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27997 === (22))){
var inst_27908 = (state_27996[(8)]);
var inst_27911 = cljs.core.async.close_BANG_.call(null,inst_27908);
var state_27996__$1 = state_27996;
var statearr_28030_28100 = state_27996__$1;
(statearr_28030_28100[(2)] = inst_27911);

(statearr_28030_28100[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27997 === (36))){
var inst_27955 = (state_27996[(25)]);
var inst_27959 = cljs.core.chunk_first.call(null,inst_27955);
var inst_27960 = cljs.core.chunk_rest.call(null,inst_27955);
var inst_27961 = cljs.core.count.call(null,inst_27959);
var inst_27936 = inst_27960;
var inst_27937 = inst_27959;
var inst_27938 = inst_27961;
var inst_27939 = (0);
var state_27996__$1 = (function (){var statearr_28031 = state_27996;
(statearr_28031[(10)] = inst_27939);

(statearr_28031[(11)] = inst_27937);

(statearr_28031[(20)] = inst_27936);

(statearr_28031[(21)] = inst_27938);

return statearr_28031;
})();
var statearr_28032_28101 = state_27996__$1;
(statearr_28032_28101[(2)] = null);

(statearr_28032_28101[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27997 === (41))){
var inst_27955 = (state_27996[(25)]);
var inst_27971 = (state_27996[(2)]);
var inst_27972 = cljs.core.next.call(null,inst_27955);
var inst_27936 = inst_27972;
var inst_27937 = null;
var inst_27938 = (0);
var inst_27939 = (0);
var state_27996__$1 = (function (){var statearr_28033 = state_27996;
(statearr_28033[(10)] = inst_27939);

(statearr_28033[(11)] = inst_27937);

(statearr_28033[(27)] = inst_27971);

(statearr_28033[(20)] = inst_27936);

(statearr_28033[(21)] = inst_27938);

return statearr_28033;
})();
var statearr_28034_28102 = state_27996__$1;
(statearr_28034_28102[(2)] = null);

(statearr_28034_28102[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27997 === (43))){
var state_27996__$1 = state_27996;
var statearr_28035_28103 = state_27996__$1;
(statearr_28035_28103[(2)] = null);

(statearr_28035_28103[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27997 === (29))){
var inst_27980 = (state_27996[(2)]);
var state_27996__$1 = state_27996;
var statearr_28036_28104 = state_27996__$1;
(statearr_28036_28104[(2)] = inst_27980);

(statearr_28036_28104[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27997 === (44))){
var inst_27989 = (state_27996[(2)]);
var state_27996__$1 = (function (){var statearr_28037 = state_27996;
(statearr_28037[(28)] = inst_27989);

return statearr_28037;
})();
var statearr_28038_28105 = state_27996__$1;
(statearr_28038_28105[(2)] = null);

(statearr_28038_28105[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27997 === (6))){
var inst_27928 = (state_27996[(29)]);
var inst_27927 = cljs.core.deref.call(null,cs);
var inst_27928__$1 = cljs.core.keys.call(null,inst_27927);
var inst_27929 = cljs.core.count.call(null,inst_27928__$1);
var inst_27930 = cljs.core.reset_BANG_.call(null,dctr,inst_27929);
var inst_27935 = cljs.core.seq.call(null,inst_27928__$1);
var inst_27936 = inst_27935;
var inst_27937 = null;
var inst_27938 = (0);
var inst_27939 = (0);
var state_27996__$1 = (function (){var statearr_28039 = state_27996;
(statearr_28039[(10)] = inst_27939);

(statearr_28039[(29)] = inst_27928__$1);

(statearr_28039[(11)] = inst_27937);

(statearr_28039[(20)] = inst_27936);

(statearr_28039[(21)] = inst_27938);

(statearr_28039[(30)] = inst_27930);

return statearr_28039;
})();
var statearr_28040_28106 = state_27996__$1;
(statearr_28040_28106[(2)] = null);

(statearr_28040_28106[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27997 === (28))){
var inst_27955 = (state_27996[(25)]);
var inst_27936 = (state_27996[(20)]);
var inst_27955__$1 = cljs.core.seq.call(null,inst_27936);
var state_27996__$1 = (function (){var statearr_28041 = state_27996;
(statearr_28041[(25)] = inst_27955__$1);

return statearr_28041;
})();
if(inst_27955__$1){
var statearr_28042_28107 = state_27996__$1;
(statearr_28042_28107[(1)] = (33));

} else {
var statearr_28043_28108 = state_27996__$1;
(statearr_28043_28108[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27997 === (25))){
var inst_27939 = (state_27996[(10)]);
var inst_27938 = (state_27996[(21)]);
var inst_27941 = (inst_27939 < inst_27938);
var inst_27942 = inst_27941;
var state_27996__$1 = state_27996;
if(cljs.core.truth_(inst_27942)){
var statearr_28044_28109 = state_27996__$1;
(statearr_28044_28109[(1)] = (27));

} else {
var statearr_28045_28110 = state_27996__$1;
(statearr_28045_28110[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27997 === (34))){
var state_27996__$1 = state_27996;
var statearr_28046_28111 = state_27996__$1;
(statearr_28046_28111[(2)] = null);

(statearr_28046_28111[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27997 === (17))){
var state_27996__$1 = state_27996;
var statearr_28047_28112 = state_27996__$1;
(statearr_28047_28112[(2)] = null);

(statearr_28047_28112[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27997 === (3))){
var inst_27994 = (state_27996[(2)]);
var state_27996__$1 = state_27996;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27996__$1,inst_27994);
} else {
if((state_val_27997 === (12))){
var inst_27923 = (state_27996[(2)]);
var state_27996__$1 = state_27996;
var statearr_28048_28113 = state_27996__$1;
(statearr_28048_28113[(2)] = inst_27923);

(statearr_28048_28113[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27997 === (2))){
var state_27996__$1 = state_27996;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27996__$1,(4),ch);
} else {
if((state_val_27997 === (23))){
var state_27996__$1 = state_27996;
var statearr_28049_28114 = state_27996__$1;
(statearr_28049_28114[(2)] = null);

(statearr_28049_28114[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27997 === (35))){
var inst_27978 = (state_27996[(2)]);
var state_27996__$1 = state_27996;
var statearr_28050_28115 = state_27996__$1;
(statearr_28050_28115[(2)] = inst_27978);

(statearr_28050_28115[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27997 === (19))){
var inst_27895 = (state_27996[(7)]);
var inst_27899 = cljs.core.chunk_first.call(null,inst_27895);
var inst_27900 = cljs.core.chunk_rest.call(null,inst_27895);
var inst_27901 = cljs.core.count.call(null,inst_27899);
var inst_27873 = inst_27900;
var inst_27874 = inst_27899;
var inst_27875 = inst_27901;
var inst_27876 = (0);
var state_27996__$1 = (function (){var statearr_28051 = state_27996;
(statearr_28051[(13)] = inst_27874);

(statearr_28051[(14)] = inst_27875);

(statearr_28051[(16)] = inst_27873);

(statearr_28051[(17)] = inst_27876);

return statearr_28051;
})();
var statearr_28052_28116 = state_27996__$1;
(statearr_28052_28116[(2)] = null);

(statearr_28052_28116[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27997 === (11))){
var inst_27895 = (state_27996[(7)]);
var inst_27873 = (state_27996[(16)]);
var inst_27895__$1 = cljs.core.seq.call(null,inst_27873);
var state_27996__$1 = (function (){var statearr_28053 = state_27996;
(statearr_28053[(7)] = inst_27895__$1);

return statearr_28053;
})();
if(inst_27895__$1){
var statearr_28054_28117 = state_27996__$1;
(statearr_28054_28117[(1)] = (16));

} else {
var statearr_28055_28118 = state_27996__$1;
(statearr_28055_28118[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27997 === (9))){
var inst_27925 = (state_27996[(2)]);
var state_27996__$1 = state_27996;
var statearr_28056_28119 = state_27996__$1;
(statearr_28056_28119[(2)] = inst_27925);

(statearr_28056_28119[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27997 === (5))){
var inst_27871 = cljs.core.deref.call(null,cs);
var inst_27872 = cljs.core.seq.call(null,inst_27871);
var inst_27873 = inst_27872;
var inst_27874 = null;
var inst_27875 = (0);
var inst_27876 = (0);
var state_27996__$1 = (function (){var statearr_28057 = state_27996;
(statearr_28057[(13)] = inst_27874);

(statearr_28057[(14)] = inst_27875);

(statearr_28057[(16)] = inst_27873);

(statearr_28057[(17)] = inst_27876);

return statearr_28057;
})();
var statearr_28058_28120 = state_27996__$1;
(statearr_28058_28120[(2)] = null);

(statearr_28058_28120[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27997 === (14))){
var state_27996__$1 = state_27996;
var statearr_28059_28121 = state_27996__$1;
(statearr_28059_28121[(2)] = null);

(statearr_28059_28121[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27997 === (45))){
var inst_27986 = (state_27996[(2)]);
var state_27996__$1 = state_27996;
var statearr_28060_28122 = state_27996__$1;
(statearr_28060_28122[(2)] = inst_27986);

(statearr_28060_28122[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27997 === (26))){
var inst_27928 = (state_27996[(29)]);
var inst_27982 = (state_27996[(2)]);
var inst_27983 = cljs.core.seq.call(null,inst_27928);
var state_27996__$1 = (function (){var statearr_28061 = state_27996;
(statearr_28061[(31)] = inst_27982);

return statearr_28061;
})();
if(inst_27983){
var statearr_28062_28123 = state_27996__$1;
(statearr_28062_28123[(1)] = (42));

} else {
var statearr_28063_28124 = state_27996__$1;
(statearr_28063_28124[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27997 === (16))){
var inst_27895 = (state_27996[(7)]);
var inst_27897 = cljs.core.chunked_seq_QMARK_.call(null,inst_27895);
var state_27996__$1 = state_27996;
if(inst_27897){
var statearr_28064_28125 = state_27996__$1;
(statearr_28064_28125[(1)] = (19));

} else {
var statearr_28065_28126 = state_27996__$1;
(statearr_28065_28126[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27997 === (38))){
var inst_27975 = (state_27996[(2)]);
var state_27996__$1 = state_27996;
var statearr_28066_28127 = state_27996__$1;
(statearr_28066_28127[(2)] = inst_27975);

(statearr_28066_28127[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27997 === (30))){
var state_27996__$1 = state_27996;
var statearr_28067_28128 = state_27996__$1;
(statearr_28067_28128[(2)] = null);

(statearr_28067_28128[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27997 === (10))){
var inst_27874 = (state_27996[(13)]);
var inst_27876 = (state_27996[(17)]);
var inst_27884 = cljs.core._nth.call(null,inst_27874,inst_27876);
var inst_27885 = cljs.core.nth.call(null,inst_27884,(0),null);
var inst_27886 = cljs.core.nth.call(null,inst_27884,(1),null);
var state_27996__$1 = (function (){var statearr_28068 = state_27996;
(statearr_28068[(26)] = inst_27885);

return statearr_28068;
})();
if(cljs.core.truth_(inst_27886)){
var statearr_28069_28129 = state_27996__$1;
(statearr_28069_28129[(1)] = (13));

} else {
var statearr_28070_28130 = state_27996__$1;
(statearr_28070_28130[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27997 === (18))){
var inst_27921 = (state_27996[(2)]);
var state_27996__$1 = state_27996;
var statearr_28071_28131 = state_27996__$1;
(statearr_28071_28131[(2)] = inst_27921);

(statearr_28071_28131[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27997 === (42))){
var state_27996__$1 = state_27996;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27996__$1,(45),dchan);
} else {
if((state_val_27997 === (37))){
var inst_27955 = (state_27996[(25)]);
var inst_27864 = (state_27996[(9)]);
var inst_27964 = (state_27996[(23)]);
var inst_27964__$1 = cljs.core.first.call(null,inst_27955);
var inst_27965 = cljs.core.async.put_BANG_.call(null,inst_27964__$1,inst_27864,done);
var state_27996__$1 = (function (){var statearr_28072 = state_27996;
(statearr_28072[(23)] = inst_27964__$1);

return statearr_28072;
})();
if(cljs.core.truth_(inst_27965)){
var statearr_28073_28132 = state_27996__$1;
(statearr_28073_28132[(1)] = (39));

} else {
var statearr_28074_28133 = state_27996__$1;
(statearr_28074_28133[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27997 === (8))){
var inst_27875 = (state_27996[(14)]);
var inst_27876 = (state_27996[(17)]);
var inst_27878 = (inst_27876 < inst_27875);
var inst_27879 = inst_27878;
var state_27996__$1 = state_27996;
if(cljs.core.truth_(inst_27879)){
var statearr_28075_28134 = state_27996__$1;
(statearr_28075_28134[(1)] = (10));

} else {
var statearr_28076_28135 = state_27996__$1;
(statearr_28076_28135[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__27165__auto__ = null;
var cljs$core$async$mult_$_state_machine__27165__auto____0 = (function (){
var statearr_28077 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28077[(0)] = cljs$core$async$mult_$_state_machine__27165__auto__);

(statearr_28077[(1)] = (1));

return statearr_28077;
});
var cljs$core$async$mult_$_state_machine__27165__auto____1 = (function (state_27996){
while(true){
var ret_value__27166__auto__ = (function (){try{while(true){
var result__27167__auto__ = switch__27164__auto__.call(null,state_27996);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27167__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27167__auto__;
}
break;
}
}catch (e28078){if((e28078 instanceof Object)){
var ex__27168__auto__ = e28078;
var statearr_28079_28136 = state_27996;
(statearr_28079_28136[(5)] = ex__27168__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27996);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28078;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28137 = state_27996;
state_27996 = G__28137;
continue;
} else {
return ret_value__27166__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__27165__auto__ = function(state_27996){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__27165__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__27165__auto____1.call(this,state_27996);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__27165__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__27165__auto____0;
cljs$core$async$mult_$_state_machine__27165__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__27165__auto____1;
return cljs$core$async$mult_$_state_machine__27165__auto__;
})()
})();
var state__27261__auto__ = (function (){var statearr_28080 = f__27260__auto__.call(null);
(statearr_28080[(6)] = c__27259__auto___28081);

return statearr_28080;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27261__auto__);
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
var G__28139 = arguments.length;
switch (G__28139) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_28141 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_28141.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_28142 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_28142.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_28143 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_28143.call(null,m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_28144 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_28144.call(null,m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_28145 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_28145.call(null,m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___28156 = arguments.length;
var i__4737__auto___28157 = (0);
while(true){
if((i__4737__auto___28157 < len__4736__auto___28156)){
args__4742__auto__.push((arguments[i__4737__auto___28157]));

var G__28158 = (i__4737__auto___28157 + (1));
i__4737__auto___28157 = G__28158;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__28150){
var map__28151 = p__28150;
var map__28151__$1 = (((((!((map__28151 == null))))?(((((map__28151.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28151.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28151):map__28151);
var opts = map__28151__$1;
var statearr_28153_28159 = state;
(statearr_28153_28159[(1)] = cont_block);


var temp__5720__auto__ = cljs.core.async.do_alts.call(null,(function (val){
var statearr_28154_28160 = state;
(statearr_28154_28160[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
}),ports,opts);
if(cljs.core.truth_(temp__5720__auto__)){
var cb = temp__5720__auto__;
var statearr_28155_28161 = state;
(statearr_28155_28161[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq28146){
var G__28147 = cljs.core.first.call(null,seq28146);
var seq28146__$1 = cljs.core.next.call(null,seq28146);
var G__28148 = cljs.core.first.call(null,seq28146__$1);
var seq28146__$2 = cljs.core.next.call(null,seq28146__$1);
var G__28149 = cljs.core.first.call(null,seq28146__$2);
var seq28146__$3 = cljs.core.next.call(null,seq28146__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28147,G__28148,G__28149,seq28146__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28162 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28162 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta28163){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta28163 = meta28163;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async28162.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28164,meta28163__$1){
var self__ = this;
var _28164__$1 = this;
return (new cljs.core.async.t_cljs$core$async28162(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta28163__$1));
}));

(cljs.core.async.t_cljs$core$async28162.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28164){
var self__ = this;
var _28164__$1 = this;
return self__.meta28163;
}));

(cljs.core.async.t_cljs$core$async28162.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28162.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async28162.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28162.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async28162.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async28162.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async28162.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async28162.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async28162.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta28163","meta28163",1055034454,null)], null);
}));

(cljs.core.async.t_cljs$core$async28162.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async28162.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28162");

(cljs.core.async.t_cljs$core$async28162.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async28162");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28162.
 */
cljs.core.async.__GT_t_cljs$core$async28162 = (function cljs$core$async$mix_$___GT_t_cljs$core$async28162(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta28163){
return (new cljs.core.async.t_cljs$core$async28162(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta28163));
});

}

return (new cljs.core.async.t_cljs$core$async28162(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__27259__auto___28326 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27260__auto__ = (function (){var switch__27164__auto__ = (function (state_28266){
var state_val_28267 = (state_28266[(1)]);
if((state_val_28267 === (7))){
var inst_28181 = (state_28266[(2)]);
var state_28266__$1 = state_28266;
var statearr_28268_28327 = state_28266__$1;
(statearr_28268_28327[(2)] = inst_28181);

(statearr_28268_28327[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28267 === (20))){
var inst_28193 = (state_28266[(7)]);
var state_28266__$1 = state_28266;
var statearr_28269_28328 = state_28266__$1;
(statearr_28269_28328[(2)] = inst_28193);

(statearr_28269_28328[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28267 === (27))){
var state_28266__$1 = state_28266;
var statearr_28270_28329 = state_28266__$1;
(statearr_28270_28329[(2)] = null);

(statearr_28270_28329[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28267 === (1))){
var inst_28168 = (state_28266[(8)]);
var inst_28168__$1 = calc_state.call(null);
var inst_28170 = (inst_28168__$1 == null);
var inst_28171 = cljs.core.not.call(null,inst_28170);
var state_28266__$1 = (function (){var statearr_28271 = state_28266;
(statearr_28271[(8)] = inst_28168__$1);

return statearr_28271;
})();
if(inst_28171){
var statearr_28272_28330 = state_28266__$1;
(statearr_28272_28330[(1)] = (2));

} else {
var statearr_28273_28331 = state_28266__$1;
(statearr_28273_28331[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28267 === (24))){
var inst_28217 = (state_28266[(9)]);
var inst_28240 = (state_28266[(10)]);
var inst_28226 = (state_28266[(11)]);
var inst_28240__$1 = inst_28217.call(null,inst_28226);
var state_28266__$1 = (function (){var statearr_28274 = state_28266;
(statearr_28274[(10)] = inst_28240__$1);

return statearr_28274;
})();
if(cljs.core.truth_(inst_28240__$1)){
var statearr_28275_28332 = state_28266__$1;
(statearr_28275_28332[(1)] = (29));

} else {
var statearr_28276_28333 = state_28266__$1;
(statearr_28276_28333[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28267 === (4))){
var inst_28184 = (state_28266[(2)]);
var state_28266__$1 = state_28266;
if(cljs.core.truth_(inst_28184)){
var statearr_28277_28334 = state_28266__$1;
(statearr_28277_28334[(1)] = (8));

} else {
var statearr_28278_28335 = state_28266__$1;
(statearr_28278_28335[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28267 === (15))){
var inst_28211 = (state_28266[(2)]);
var state_28266__$1 = state_28266;
if(cljs.core.truth_(inst_28211)){
var statearr_28279_28336 = state_28266__$1;
(statearr_28279_28336[(1)] = (19));

} else {
var statearr_28280_28337 = state_28266__$1;
(statearr_28280_28337[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28267 === (21))){
var inst_28216 = (state_28266[(12)]);
var inst_28216__$1 = (state_28266[(2)]);
var inst_28217 = cljs.core.get.call(null,inst_28216__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_28218 = cljs.core.get.call(null,inst_28216__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_28219 = cljs.core.get.call(null,inst_28216__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_28266__$1 = (function (){var statearr_28281 = state_28266;
(statearr_28281[(13)] = inst_28218);

(statearr_28281[(9)] = inst_28217);

(statearr_28281[(12)] = inst_28216__$1);

return statearr_28281;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_28266__$1,(22),inst_28219);
} else {
if((state_val_28267 === (31))){
var inst_28248 = (state_28266[(2)]);
var state_28266__$1 = state_28266;
if(cljs.core.truth_(inst_28248)){
var statearr_28282_28338 = state_28266__$1;
(statearr_28282_28338[(1)] = (32));

} else {
var statearr_28283_28339 = state_28266__$1;
(statearr_28283_28339[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28267 === (32))){
var inst_28225 = (state_28266[(14)]);
var state_28266__$1 = state_28266;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28266__$1,(35),out,inst_28225);
} else {
if((state_val_28267 === (33))){
var inst_28216 = (state_28266[(12)]);
var inst_28193 = inst_28216;
var state_28266__$1 = (function (){var statearr_28284 = state_28266;
(statearr_28284[(7)] = inst_28193);

return statearr_28284;
})();
var statearr_28285_28340 = state_28266__$1;
(statearr_28285_28340[(2)] = null);

(statearr_28285_28340[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28267 === (13))){
var inst_28193 = (state_28266[(7)]);
var inst_28200 = inst_28193.cljs$lang$protocol_mask$partition0$;
var inst_28201 = (inst_28200 & (64));
var inst_28202 = inst_28193.cljs$core$ISeq$;
var inst_28203 = (cljs.core.PROTOCOL_SENTINEL === inst_28202);
var inst_28204 = ((inst_28201) || (inst_28203));
var state_28266__$1 = state_28266;
if(cljs.core.truth_(inst_28204)){
var statearr_28286_28341 = state_28266__$1;
(statearr_28286_28341[(1)] = (16));

} else {
var statearr_28287_28342 = state_28266__$1;
(statearr_28287_28342[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28267 === (22))){
var inst_28225 = (state_28266[(14)]);
var inst_28226 = (state_28266[(11)]);
var inst_28224 = (state_28266[(2)]);
var inst_28225__$1 = cljs.core.nth.call(null,inst_28224,(0),null);
var inst_28226__$1 = cljs.core.nth.call(null,inst_28224,(1),null);
var inst_28227 = (inst_28225__$1 == null);
var inst_28228 = cljs.core._EQ_.call(null,inst_28226__$1,change);
var inst_28229 = ((inst_28227) || (inst_28228));
var state_28266__$1 = (function (){var statearr_28288 = state_28266;
(statearr_28288[(14)] = inst_28225__$1);

(statearr_28288[(11)] = inst_28226__$1);

return statearr_28288;
})();
if(cljs.core.truth_(inst_28229)){
var statearr_28289_28343 = state_28266__$1;
(statearr_28289_28343[(1)] = (23));

} else {
var statearr_28290_28344 = state_28266__$1;
(statearr_28290_28344[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28267 === (36))){
var inst_28216 = (state_28266[(12)]);
var inst_28193 = inst_28216;
var state_28266__$1 = (function (){var statearr_28291 = state_28266;
(statearr_28291[(7)] = inst_28193);

return statearr_28291;
})();
var statearr_28292_28345 = state_28266__$1;
(statearr_28292_28345[(2)] = null);

(statearr_28292_28345[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28267 === (29))){
var inst_28240 = (state_28266[(10)]);
var state_28266__$1 = state_28266;
var statearr_28293_28346 = state_28266__$1;
(statearr_28293_28346[(2)] = inst_28240);

(statearr_28293_28346[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28267 === (6))){
var state_28266__$1 = state_28266;
var statearr_28294_28347 = state_28266__$1;
(statearr_28294_28347[(2)] = false);

(statearr_28294_28347[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28267 === (28))){
var inst_28236 = (state_28266[(2)]);
var inst_28237 = calc_state.call(null);
var inst_28193 = inst_28237;
var state_28266__$1 = (function (){var statearr_28295 = state_28266;
(statearr_28295[(7)] = inst_28193);

(statearr_28295[(15)] = inst_28236);

return statearr_28295;
})();
var statearr_28296_28348 = state_28266__$1;
(statearr_28296_28348[(2)] = null);

(statearr_28296_28348[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28267 === (25))){
var inst_28262 = (state_28266[(2)]);
var state_28266__$1 = state_28266;
var statearr_28297_28349 = state_28266__$1;
(statearr_28297_28349[(2)] = inst_28262);

(statearr_28297_28349[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28267 === (34))){
var inst_28260 = (state_28266[(2)]);
var state_28266__$1 = state_28266;
var statearr_28298_28350 = state_28266__$1;
(statearr_28298_28350[(2)] = inst_28260);

(statearr_28298_28350[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28267 === (17))){
var state_28266__$1 = state_28266;
var statearr_28299_28351 = state_28266__$1;
(statearr_28299_28351[(2)] = false);

(statearr_28299_28351[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28267 === (3))){
var state_28266__$1 = state_28266;
var statearr_28300_28352 = state_28266__$1;
(statearr_28300_28352[(2)] = false);

(statearr_28300_28352[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28267 === (12))){
var inst_28264 = (state_28266[(2)]);
var state_28266__$1 = state_28266;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28266__$1,inst_28264);
} else {
if((state_val_28267 === (2))){
var inst_28168 = (state_28266[(8)]);
var inst_28173 = inst_28168.cljs$lang$protocol_mask$partition0$;
var inst_28174 = (inst_28173 & (64));
var inst_28175 = inst_28168.cljs$core$ISeq$;
var inst_28176 = (cljs.core.PROTOCOL_SENTINEL === inst_28175);
var inst_28177 = ((inst_28174) || (inst_28176));
var state_28266__$1 = state_28266;
if(cljs.core.truth_(inst_28177)){
var statearr_28301_28353 = state_28266__$1;
(statearr_28301_28353[(1)] = (5));

} else {
var statearr_28302_28354 = state_28266__$1;
(statearr_28302_28354[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28267 === (23))){
var inst_28225 = (state_28266[(14)]);
var inst_28231 = (inst_28225 == null);
var state_28266__$1 = state_28266;
if(cljs.core.truth_(inst_28231)){
var statearr_28303_28355 = state_28266__$1;
(statearr_28303_28355[(1)] = (26));

} else {
var statearr_28304_28356 = state_28266__$1;
(statearr_28304_28356[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28267 === (35))){
var inst_28251 = (state_28266[(2)]);
var state_28266__$1 = state_28266;
if(cljs.core.truth_(inst_28251)){
var statearr_28305_28357 = state_28266__$1;
(statearr_28305_28357[(1)] = (36));

} else {
var statearr_28306_28358 = state_28266__$1;
(statearr_28306_28358[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28267 === (19))){
var inst_28193 = (state_28266[(7)]);
var inst_28213 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28193);
var state_28266__$1 = state_28266;
var statearr_28307_28359 = state_28266__$1;
(statearr_28307_28359[(2)] = inst_28213);

(statearr_28307_28359[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28267 === (11))){
var inst_28193 = (state_28266[(7)]);
var inst_28197 = (inst_28193 == null);
var inst_28198 = cljs.core.not.call(null,inst_28197);
var state_28266__$1 = state_28266;
if(inst_28198){
var statearr_28308_28360 = state_28266__$1;
(statearr_28308_28360[(1)] = (13));

} else {
var statearr_28309_28361 = state_28266__$1;
(statearr_28309_28361[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28267 === (9))){
var inst_28168 = (state_28266[(8)]);
var state_28266__$1 = state_28266;
var statearr_28310_28362 = state_28266__$1;
(statearr_28310_28362[(2)] = inst_28168);

(statearr_28310_28362[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28267 === (5))){
var state_28266__$1 = state_28266;
var statearr_28311_28363 = state_28266__$1;
(statearr_28311_28363[(2)] = true);

(statearr_28311_28363[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28267 === (14))){
var state_28266__$1 = state_28266;
var statearr_28312_28364 = state_28266__$1;
(statearr_28312_28364[(2)] = false);

(statearr_28312_28364[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28267 === (26))){
var inst_28226 = (state_28266[(11)]);
var inst_28233 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_28226);
var state_28266__$1 = state_28266;
var statearr_28313_28365 = state_28266__$1;
(statearr_28313_28365[(2)] = inst_28233);

(statearr_28313_28365[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28267 === (16))){
var state_28266__$1 = state_28266;
var statearr_28314_28366 = state_28266__$1;
(statearr_28314_28366[(2)] = true);

(statearr_28314_28366[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28267 === (38))){
var inst_28256 = (state_28266[(2)]);
var state_28266__$1 = state_28266;
var statearr_28315_28367 = state_28266__$1;
(statearr_28315_28367[(2)] = inst_28256);

(statearr_28315_28367[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28267 === (30))){
var inst_28218 = (state_28266[(13)]);
var inst_28217 = (state_28266[(9)]);
var inst_28226 = (state_28266[(11)]);
var inst_28243 = cljs.core.empty_QMARK_.call(null,inst_28217);
var inst_28244 = inst_28218.call(null,inst_28226);
var inst_28245 = cljs.core.not.call(null,inst_28244);
var inst_28246 = ((inst_28243) && (inst_28245));
var state_28266__$1 = state_28266;
var statearr_28316_28368 = state_28266__$1;
(statearr_28316_28368[(2)] = inst_28246);

(statearr_28316_28368[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28267 === (10))){
var inst_28168 = (state_28266[(8)]);
var inst_28189 = (state_28266[(2)]);
var inst_28190 = cljs.core.get.call(null,inst_28189,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_28191 = cljs.core.get.call(null,inst_28189,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_28192 = cljs.core.get.call(null,inst_28189,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_28193 = inst_28168;
var state_28266__$1 = (function (){var statearr_28317 = state_28266;
(statearr_28317[(7)] = inst_28193);

(statearr_28317[(16)] = inst_28191);

(statearr_28317[(17)] = inst_28190);

(statearr_28317[(18)] = inst_28192);

return statearr_28317;
})();
var statearr_28318_28369 = state_28266__$1;
(statearr_28318_28369[(2)] = null);

(statearr_28318_28369[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28267 === (18))){
var inst_28208 = (state_28266[(2)]);
var state_28266__$1 = state_28266;
var statearr_28319_28370 = state_28266__$1;
(statearr_28319_28370[(2)] = inst_28208);

(statearr_28319_28370[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28267 === (37))){
var state_28266__$1 = state_28266;
var statearr_28320_28371 = state_28266__$1;
(statearr_28320_28371[(2)] = null);

(statearr_28320_28371[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28267 === (8))){
var inst_28168 = (state_28266[(8)]);
var inst_28186 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28168);
var state_28266__$1 = state_28266;
var statearr_28321_28372 = state_28266__$1;
(statearr_28321_28372[(2)] = inst_28186);

(statearr_28321_28372[(1)] = (10));


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
var cljs$core$async$mix_$_state_machine__27165__auto__ = null;
var cljs$core$async$mix_$_state_machine__27165__auto____0 = (function (){
var statearr_28322 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28322[(0)] = cljs$core$async$mix_$_state_machine__27165__auto__);

(statearr_28322[(1)] = (1));

return statearr_28322;
});
var cljs$core$async$mix_$_state_machine__27165__auto____1 = (function (state_28266){
while(true){
var ret_value__27166__auto__ = (function (){try{while(true){
var result__27167__auto__ = switch__27164__auto__.call(null,state_28266);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27167__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27167__auto__;
}
break;
}
}catch (e28323){if((e28323 instanceof Object)){
var ex__27168__auto__ = e28323;
var statearr_28324_28373 = state_28266;
(statearr_28324_28373[(5)] = ex__27168__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28266);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28323;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28374 = state_28266;
state_28266 = G__28374;
continue;
} else {
return ret_value__27166__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__27165__auto__ = function(state_28266){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__27165__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__27165__auto____1.call(this,state_28266);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__27165__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__27165__auto____0;
cljs$core$async$mix_$_state_machine__27165__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__27165__auto____1;
return cljs$core$async$mix_$_state_machine__27165__auto__;
})()
})();
var state__27261__auto__ = (function (){var statearr_28325 = f__27260__auto__.call(null);
(statearr_28325[(6)] = c__27259__auto___28326);

return statearr_28325;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27261__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_28377 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_28377.call(null,p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_28378 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_28378.call(null,p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_28379 = (function() {
var G__28380 = null;
var G__28380__1 = (function (p){
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
var G__28380__2 = (function (p,v){
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
G__28380 = function(p,v){
switch(arguments.length){
case 1:
return G__28380__1.call(this,p);
case 2:
return G__28380__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__28380.cljs$core$IFn$_invoke$arity$1 = G__28380__1;
G__28380.cljs$core$IFn$_invoke$arity$2 = G__28380__2;
return G__28380;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__28376 = arguments.length;
switch (G__28376) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_28379.call(null,p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_28379.call(null,p,v);
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
var G__28384 = arguments.length;
switch (G__28384) {
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
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,(function (p1__28382_SHARP_){
if(cljs.core.truth_(p1__28382_SHARP_.call(null,topic))){
return p1__28382_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__28382_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28385 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28385 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta28386){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta28386 = meta28386;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async28385.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28387,meta28386__$1){
var self__ = this;
var _28387__$1 = this;
return (new cljs.core.async.t_cljs$core$async28385(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta28386__$1));
}));

(cljs.core.async.t_cljs$core$async28385.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28387){
var self__ = this;
var _28387__$1 = this;
return self__.meta28386;
}));

(cljs.core.async.t_cljs$core$async28385.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28385.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async28385.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28385.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async28385.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async28385.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async28385.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async28385.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta28386","meta28386",-903570741,null)], null);
}));

(cljs.core.async.t_cljs$core$async28385.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async28385.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28385");

(cljs.core.async.t_cljs$core$async28385.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async28385");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28385.
 */
cljs.core.async.__GT_t_cljs$core$async28385 = (function cljs$core$async$__GT_t_cljs$core$async28385(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta28386){
return (new cljs.core.async.t_cljs$core$async28385(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta28386));
});

}

return (new cljs.core.async.t_cljs$core$async28385(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__27259__auto___28505 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27260__auto__ = (function (){var switch__27164__auto__ = (function (state_28459){
var state_val_28460 = (state_28459[(1)]);
if((state_val_28460 === (7))){
var inst_28455 = (state_28459[(2)]);
var state_28459__$1 = state_28459;
var statearr_28461_28506 = state_28459__$1;
(statearr_28461_28506[(2)] = inst_28455);

(statearr_28461_28506[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28460 === (20))){
var state_28459__$1 = state_28459;
var statearr_28462_28507 = state_28459__$1;
(statearr_28462_28507[(2)] = null);

(statearr_28462_28507[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28460 === (1))){
var state_28459__$1 = state_28459;
var statearr_28463_28508 = state_28459__$1;
(statearr_28463_28508[(2)] = null);

(statearr_28463_28508[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28460 === (24))){
var inst_28438 = (state_28459[(7)]);
var inst_28447 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_28438);
var state_28459__$1 = state_28459;
var statearr_28464_28509 = state_28459__$1;
(statearr_28464_28509[(2)] = inst_28447);

(statearr_28464_28509[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28460 === (4))){
var inst_28390 = (state_28459[(8)]);
var inst_28390__$1 = (state_28459[(2)]);
var inst_28391 = (inst_28390__$1 == null);
var state_28459__$1 = (function (){var statearr_28465 = state_28459;
(statearr_28465[(8)] = inst_28390__$1);

return statearr_28465;
})();
if(cljs.core.truth_(inst_28391)){
var statearr_28466_28510 = state_28459__$1;
(statearr_28466_28510[(1)] = (5));

} else {
var statearr_28467_28511 = state_28459__$1;
(statearr_28467_28511[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28460 === (15))){
var inst_28432 = (state_28459[(2)]);
var state_28459__$1 = state_28459;
var statearr_28468_28512 = state_28459__$1;
(statearr_28468_28512[(2)] = inst_28432);

(statearr_28468_28512[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28460 === (21))){
var inst_28452 = (state_28459[(2)]);
var state_28459__$1 = (function (){var statearr_28469 = state_28459;
(statearr_28469[(9)] = inst_28452);

return statearr_28469;
})();
var statearr_28470_28513 = state_28459__$1;
(statearr_28470_28513[(2)] = null);

(statearr_28470_28513[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28460 === (13))){
var inst_28414 = (state_28459[(10)]);
var inst_28416 = cljs.core.chunked_seq_QMARK_.call(null,inst_28414);
var state_28459__$1 = state_28459;
if(inst_28416){
var statearr_28471_28514 = state_28459__$1;
(statearr_28471_28514[(1)] = (16));

} else {
var statearr_28472_28515 = state_28459__$1;
(statearr_28472_28515[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28460 === (22))){
var inst_28444 = (state_28459[(2)]);
var state_28459__$1 = state_28459;
if(cljs.core.truth_(inst_28444)){
var statearr_28473_28516 = state_28459__$1;
(statearr_28473_28516[(1)] = (23));

} else {
var statearr_28474_28517 = state_28459__$1;
(statearr_28474_28517[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28460 === (6))){
var inst_28440 = (state_28459[(11)]);
var inst_28438 = (state_28459[(7)]);
var inst_28390 = (state_28459[(8)]);
var inst_28438__$1 = topic_fn.call(null,inst_28390);
var inst_28439 = cljs.core.deref.call(null,mults);
var inst_28440__$1 = cljs.core.get.call(null,inst_28439,inst_28438__$1);
var state_28459__$1 = (function (){var statearr_28475 = state_28459;
(statearr_28475[(11)] = inst_28440__$1);

(statearr_28475[(7)] = inst_28438__$1);

return statearr_28475;
})();
if(cljs.core.truth_(inst_28440__$1)){
var statearr_28476_28518 = state_28459__$1;
(statearr_28476_28518[(1)] = (19));

} else {
var statearr_28477_28519 = state_28459__$1;
(statearr_28477_28519[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28460 === (25))){
var inst_28449 = (state_28459[(2)]);
var state_28459__$1 = state_28459;
var statearr_28478_28520 = state_28459__$1;
(statearr_28478_28520[(2)] = inst_28449);

(statearr_28478_28520[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28460 === (17))){
var inst_28414 = (state_28459[(10)]);
var inst_28423 = cljs.core.first.call(null,inst_28414);
var inst_28424 = cljs.core.async.muxch_STAR_.call(null,inst_28423);
var inst_28425 = cljs.core.async.close_BANG_.call(null,inst_28424);
var inst_28426 = cljs.core.next.call(null,inst_28414);
var inst_28400 = inst_28426;
var inst_28401 = null;
var inst_28402 = (0);
var inst_28403 = (0);
var state_28459__$1 = (function (){var statearr_28479 = state_28459;
(statearr_28479[(12)] = inst_28402);

(statearr_28479[(13)] = inst_28425);

(statearr_28479[(14)] = inst_28403);

(statearr_28479[(15)] = inst_28401);

(statearr_28479[(16)] = inst_28400);

return statearr_28479;
})();
var statearr_28480_28521 = state_28459__$1;
(statearr_28480_28521[(2)] = null);

(statearr_28480_28521[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28460 === (3))){
var inst_28457 = (state_28459[(2)]);
var state_28459__$1 = state_28459;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28459__$1,inst_28457);
} else {
if((state_val_28460 === (12))){
var inst_28434 = (state_28459[(2)]);
var state_28459__$1 = state_28459;
var statearr_28481_28522 = state_28459__$1;
(statearr_28481_28522[(2)] = inst_28434);

(statearr_28481_28522[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28460 === (2))){
var state_28459__$1 = state_28459;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28459__$1,(4),ch);
} else {
if((state_val_28460 === (23))){
var state_28459__$1 = state_28459;
var statearr_28482_28523 = state_28459__$1;
(statearr_28482_28523[(2)] = null);

(statearr_28482_28523[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28460 === (19))){
var inst_28440 = (state_28459[(11)]);
var inst_28390 = (state_28459[(8)]);
var inst_28442 = cljs.core.async.muxch_STAR_.call(null,inst_28440);
var state_28459__$1 = state_28459;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28459__$1,(22),inst_28442,inst_28390);
} else {
if((state_val_28460 === (11))){
var inst_28414 = (state_28459[(10)]);
var inst_28400 = (state_28459[(16)]);
var inst_28414__$1 = cljs.core.seq.call(null,inst_28400);
var state_28459__$1 = (function (){var statearr_28483 = state_28459;
(statearr_28483[(10)] = inst_28414__$1);

return statearr_28483;
})();
if(inst_28414__$1){
var statearr_28484_28524 = state_28459__$1;
(statearr_28484_28524[(1)] = (13));

} else {
var statearr_28485_28525 = state_28459__$1;
(statearr_28485_28525[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28460 === (9))){
var inst_28436 = (state_28459[(2)]);
var state_28459__$1 = state_28459;
var statearr_28486_28526 = state_28459__$1;
(statearr_28486_28526[(2)] = inst_28436);

(statearr_28486_28526[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28460 === (5))){
var inst_28397 = cljs.core.deref.call(null,mults);
var inst_28398 = cljs.core.vals.call(null,inst_28397);
var inst_28399 = cljs.core.seq.call(null,inst_28398);
var inst_28400 = inst_28399;
var inst_28401 = null;
var inst_28402 = (0);
var inst_28403 = (0);
var state_28459__$1 = (function (){var statearr_28487 = state_28459;
(statearr_28487[(12)] = inst_28402);

(statearr_28487[(14)] = inst_28403);

(statearr_28487[(15)] = inst_28401);

(statearr_28487[(16)] = inst_28400);

return statearr_28487;
})();
var statearr_28488_28527 = state_28459__$1;
(statearr_28488_28527[(2)] = null);

(statearr_28488_28527[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28460 === (14))){
var state_28459__$1 = state_28459;
var statearr_28492_28528 = state_28459__$1;
(statearr_28492_28528[(2)] = null);

(statearr_28492_28528[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28460 === (16))){
var inst_28414 = (state_28459[(10)]);
var inst_28418 = cljs.core.chunk_first.call(null,inst_28414);
var inst_28419 = cljs.core.chunk_rest.call(null,inst_28414);
var inst_28420 = cljs.core.count.call(null,inst_28418);
var inst_28400 = inst_28419;
var inst_28401 = inst_28418;
var inst_28402 = inst_28420;
var inst_28403 = (0);
var state_28459__$1 = (function (){var statearr_28493 = state_28459;
(statearr_28493[(12)] = inst_28402);

(statearr_28493[(14)] = inst_28403);

(statearr_28493[(15)] = inst_28401);

(statearr_28493[(16)] = inst_28400);

return statearr_28493;
})();
var statearr_28494_28529 = state_28459__$1;
(statearr_28494_28529[(2)] = null);

(statearr_28494_28529[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28460 === (10))){
var inst_28402 = (state_28459[(12)]);
var inst_28403 = (state_28459[(14)]);
var inst_28401 = (state_28459[(15)]);
var inst_28400 = (state_28459[(16)]);
var inst_28408 = cljs.core._nth.call(null,inst_28401,inst_28403);
var inst_28409 = cljs.core.async.muxch_STAR_.call(null,inst_28408);
var inst_28410 = cljs.core.async.close_BANG_.call(null,inst_28409);
var inst_28411 = (inst_28403 + (1));
var tmp28489 = inst_28402;
var tmp28490 = inst_28401;
var tmp28491 = inst_28400;
var inst_28400__$1 = tmp28491;
var inst_28401__$1 = tmp28490;
var inst_28402__$1 = tmp28489;
var inst_28403__$1 = inst_28411;
var state_28459__$1 = (function (){var statearr_28495 = state_28459;
(statearr_28495[(12)] = inst_28402__$1);

(statearr_28495[(14)] = inst_28403__$1);

(statearr_28495[(15)] = inst_28401__$1);

(statearr_28495[(16)] = inst_28400__$1);

(statearr_28495[(17)] = inst_28410);

return statearr_28495;
})();
var statearr_28496_28530 = state_28459__$1;
(statearr_28496_28530[(2)] = null);

(statearr_28496_28530[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28460 === (18))){
var inst_28429 = (state_28459[(2)]);
var state_28459__$1 = state_28459;
var statearr_28497_28531 = state_28459__$1;
(statearr_28497_28531[(2)] = inst_28429);

(statearr_28497_28531[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28460 === (8))){
var inst_28402 = (state_28459[(12)]);
var inst_28403 = (state_28459[(14)]);
var inst_28405 = (inst_28403 < inst_28402);
var inst_28406 = inst_28405;
var state_28459__$1 = state_28459;
if(cljs.core.truth_(inst_28406)){
var statearr_28498_28532 = state_28459__$1;
(statearr_28498_28532[(1)] = (10));

} else {
var statearr_28499_28533 = state_28459__$1;
(statearr_28499_28533[(1)] = (11));

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
var cljs$core$async$state_machine__27165__auto__ = null;
var cljs$core$async$state_machine__27165__auto____0 = (function (){
var statearr_28500 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28500[(0)] = cljs$core$async$state_machine__27165__auto__);

(statearr_28500[(1)] = (1));

return statearr_28500;
});
var cljs$core$async$state_machine__27165__auto____1 = (function (state_28459){
while(true){
var ret_value__27166__auto__ = (function (){try{while(true){
var result__27167__auto__ = switch__27164__auto__.call(null,state_28459);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27167__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27167__auto__;
}
break;
}
}catch (e28501){if((e28501 instanceof Object)){
var ex__27168__auto__ = e28501;
var statearr_28502_28534 = state_28459;
(statearr_28502_28534[(5)] = ex__27168__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28459);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28501;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28535 = state_28459;
state_28459 = G__28535;
continue;
} else {
return ret_value__27166__auto__;
}
break;
}
});
cljs$core$async$state_machine__27165__auto__ = function(state_28459){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27165__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27165__auto____1.call(this,state_28459);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27165__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27165__auto____0;
cljs$core$async$state_machine__27165__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27165__auto____1;
return cljs$core$async$state_machine__27165__auto__;
})()
})();
var state__27261__auto__ = (function (){var statearr_28503 = f__27260__auto__.call(null);
(statearr_28503[(6)] = c__27259__auto___28505);

return statearr_28503;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27261__auto__);
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
var G__28537 = arguments.length;
switch (G__28537) {
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
var G__28540 = arguments.length;
switch (G__28540) {
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
var G__28543 = arguments.length;
switch (G__28543) {
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
var c__27259__auto___28610 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27260__auto__ = (function (){var switch__27164__auto__ = (function (state_28582){
var state_val_28583 = (state_28582[(1)]);
if((state_val_28583 === (7))){
var state_28582__$1 = state_28582;
var statearr_28584_28611 = state_28582__$1;
(statearr_28584_28611[(2)] = null);

(statearr_28584_28611[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28583 === (1))){
var state_28582__$1 = state_28582;
var statearr_28585_28612 = state_28582__$1;
(statearr_28585_28612[(2)] = null);

(statearr_28585_28612[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28583 === (4))){
var inst_28546 = (state_28582[(7)]);
var inst_28548 = (inst_28546 < cnt);
var state_28582__$1 = state_28582;
if(cljs.core.truth_(inst_28548)){
var statearr_28586_28613 = state_28582__$1;
(statearr_28586_28613[(1)] = (6));

} else {
var statearr_28587_28614 = state_28582__$1;
(statearr_28587_28614[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28583 === (15))){
var inst_28578 = (state_28582[(2)]);
var state_28582__$1 = state_28582;
var statearr_28588_28615 = state_28582__$1;
(statearr_28588_28615[(2)] = inst_28578);

(statearr_28588_28615[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28583 === (13))){
var inst_28571 = cljs.core.async.close_BANG_.call(null,out);
var state_28582__$1 = state_28582;
var statearr_28589_28616 = state_28582__$1;
(statearr_28589_28616[(2)] = inst_28571);

(statearr_28589_28616[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28583 === (6))){
var state_28582__$1 = state_28582;
var statearr_28590_28617 = state_28582__$1;
(statearr_28590_28617[(2)] = null);

(statearr_28590_28617[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28583 === (3))){
var inst_28580 = (state_28582[(2)]);
var state_28582__$1 = state_28582;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28582__$1,inst_28580);
} else {
if((state_val_28583 === (12))){
var inst_28568 = (state_28582[(8)]);
var inst_28568__$1 = (state_28582[(2)]);
var inst_28569 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_28568__$1);
var state_28582__$1 = (function (){var statearr_28591 = state_28582;
(statearr_28591[(8)] = inst_28568__$1);

return statearr_28591;
})();
if(cljs.core.truth_(inst_28569)){
var statearr_28592_28618 = state_28582__$1;
(statearr_28592_28618[(1)] = (13));

} else {
var statearr_28593_28619 = state_28582__$1;
(statearr_28593_28619[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28583 === (2))){
var inst_28545 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_28546 = (0);
var state_28582__$1 = (function (){var statearr_28594 = state_28582;
(statearr_28594[(9)] = inst_28545);

(statearr_28594[(7)] = inst_28546);

return statearr_28594;
})();
var statearr_28595_28620 = state_28582__$1;
(statearr_28595_28620[(2)] = null);

(statearr_28595_28620[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28583 === (11))){
var inst_28546 = (state_28582[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_28582,(10),Object,null,(9));
var inst_28555 = chs__$1.call(null,inst_28546);
var inst_28556 = done.call(null,inst_28546);
var inst_28557 = cljs.core.async.take_BANG_.call(null,inst_28555,inst_28556);
var state_28582__$1 = state_28582;
var statearr_28596_28621 = state_28582__$1;
(statearr_28596_28621[(2)] = inst_28557);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28582__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28583 === (9))){
var inst_28546 = (state_28582[(7)]);
var inst_28559 = (state_28582[(2)]);
var inst_28560 = (inst_28546 + (1));
var inst_28546__$1 = inst_28560;
var state_28582__$1 = (function (){var statearr_28597 = state_28582;
(statearr_28597[(7)] = inst_28546__$1);

(statearr_28597[(10)] = inst_28559);

return statearr_28597;
})();
var statearr_28598_28622 = state_28582__$1;
(statearr_28598_28622[(2)] = null);

(statearr_28598_28622[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28583 === (5))){
var inst_28566 = (state_28582[(2)]);
var state_28582__$1 = (function (){var statearr_28599 = state_28582;
(statearr_28599[(11)] = inst_28566);

return statearr_28599;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28582__$1,(12),dchan);
} else {
if((state_val_28583 === (14))){
var inst_28568 = (state_28582[(8)]);
var inst_28573 = cljs.core.apply.call(null,f,inst_28568);
var state_28582__$1 = state_28582;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28582__$1,(16),out,inst_28573);
} else {
if((state_val_28583 === (16))){
var inst_28575 = (state_28582[(2)]);
var state_28582__$1 = (function (){var statearr_28600 = state_28582;
(statearr_28600[(12)] = inst_28575);

return statearr_28600;
})();
var statearr_28601_28623 = state_28582__$1;
(statearr_28601_28623[(2)] = null);

(statearr_28601_28623[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28583 === (10))){
var inst_28550 = (state_28582[(2)]);
var inst_28551 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_28582__$1 = (function (){var statearr_28602 = state_28582;
(statearr_28602[(13)] = inst_28550);

return statearr_28602;
})();
var statearr_28603_28624 = state_28582__$1;
(statearr_28603_28624[(2)] = inst_28551);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28582__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28583 === (8))){
var inst_28564 = (state_28582[(2)]);
var state_28582__$1 = state_28582;
var statearr_28604_28625 = state_28582__$1;
(statearr_28604_28625[(2)] = inst_28564);

(statearr_28604_28625[(1)] = (5));


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
var cljs$core$async$state_machine__27165__auto__ = null;
var cljs$core$async$state_machine__27165__auto____0 = (function (){
var statearr_28605 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28605[(0)] = cljs$core$async$state_machine__27165__auto__);

(statearr_28605[(1)] = (1));

return statearr_28605;
});
var cljs$core$async$state_machine__27165__auto____1 = (function (state_28582){
while(true){
var ret_value__27166__auto__ = (function (){try{while(true){
var result__27167__auto__ = switch__27164__auto__.call(null,state_28582);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27167__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27167__auto__;
}
break;
}
}catch (e28606){if((e28606 instanceof Object)){
var ex__27168__auto__ = e28606;
var statearr_28607_28626 = state_28582;
(statearr_28607_28626[(5)] = ex__27168__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28582);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28606;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28627 = state_28582;
state_28582 = G__28627;
continue;
} else {
return ret_value__27166__auto__;
}
break;
}
});
cljs$core$async$state_machine__27165__auto__ = function(state_28582){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27165__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27165__auto____1.call(this,state_28582);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27165__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27165__auto____0;
cljs$core$async$state_machine__27165__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27165__auto____1;
return cljs$core$async$state_machine__27165__auto__;
})()
})();
var state__27261__auto__ = (function (){var statearr_28608 = f__27260__auto__.call(null);
(statearr_28608[(6)] = c__27259__auto___28610);

return statearr_28608;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27261__auto__);
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
var G__28630 = arguments.length;
switch (G__28630) {
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
var c__27259__auto___28684 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27260__auto__ = (function (){var switch__27164__auto__ = (function (state_28662){
var state_val_28663 = (state_28662[(1)]);
if((state_val_28663 === (7))){
var inst_28642 = (state_28662[(7)]);
var inst_28641 = (state_28662[(8)]);
var inst_28641__$1 = (state_28662[(2)]);
var inst_28642__$1 = cljs.core.nth.call(null,inst_28641__$1,(0),null);
var inst_28643 = cljs.core.nth.call(null,inst_28641__$1,(1),null);
var inst_28644 = (inst_28642__$1 == null);
var state_28662__$1 = (function (){var statearr_28664 = state_28662;
(statearr_28664[(7)] = inst_28642__$1);

(statearr_28664[(9)] = inst_28643);

(statearr_28664[(8)] = inst_28641__$1);

return statearr_28664;
})();
if(cljs.core.truth_(inst_28644)){
var statearr_28665_28685 = state_28662__$1;
(statearr_28665_28685[(1)] = (8));

} else {
var statearr_28666_28686 = state_28662__$1;
(statearr_28666_28686[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28663 === (1))){
var inst_28631 = cljs.core.vec.call(null,chs);
var inst_28632 = inst_28631;
var state_28662__$1 = (function (){var statearr_28667 = state_28662;
(statearr_28667[(10)] = inst_28632);

return statearr_28667;
})();
var statearr_28668_28687 = state_28662__$1;
(statearr_28668_28687[(2)] = null);

(statearr_28668_28687[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28663 === (4))){
var inst_28632 = (state_28662[(10)]);
var state_28662__$1 = state_28662;
return cljs.core.async.ioc_alts_BANG_.call(null,state_28662__$1,(7),inst_28632);
} else {
if((state_val_28663 === (6))){
var inst_28658 = (state_28662[(2)]);
var state_28662__$1 = state_28662;
var statearr_28669_28688 = state_28662__$1;
(statearr_28669_28688[(2)] = inst_28658);

(statearr_28669_28688[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28663 === (3))){
var inst_28660 = (state_28662[(2)]);
var state_28662__$1 = state_28662;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28662__$1,inst_28660);
} else {
if((state_val_28663 === (2))){
var inst_28632 = (state_28662[(10)]);
var inst_28634 = cljs.core.count.call(null,inst_28632);
var inst_28635 = (inst_28634 > (0));
var state_28662__$1 = state_28662;
if(cljs.core.truth_(inst_28635)){
var statearr_28671_28689 = state_28662__$1;
(statearr_28671_28689[(1)] = (4));

} else {
var statearr_28672_28690 = state_28662__$1;
(statearr_28672_28690[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28663 === (11))){
var inst_28632 = (state_28662[(10)]);
var inst_28651 = (state_28662[(2)]);
var tmp28670 = inst_28632;
var inst_28632__$1 = tmp28670;
var state_28662__$1 = (function (){var statearr_28673 = state_28662;
(statearr_28673[(10)] = inst_28632__$1);

(statearr_28673[(11)] = inst_28651);

return statearr_28673;
})();
var statearr_28674_28691 = state_28662__$1;
(statearr_28674_28691[(2)] = null);

(statearr_28674_28691[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28663 === (9))){
var inst_28642 = (state_28662[(7)]);
var state_28662__$1 = state_28662;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28662__$1,(11),out,inst_28642);
} else {
if((state_val_28663 === (5))){
var inst_28656 = cljs.core.async.close_BANG_.call(null,out);
var state_28662__$1 = state_28662;
var statearr_28675_28692 = state_28662__$1;
(statearr_28675_28692[(2)] = inst_28656);

(statearr_28675_28692[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28663 === (10))){
var inst_28654 = (state_28662[(2)]);
var state_28662__$1 = state_28662;
var statearr_28676_28693 = state_28662__$1;
(statearr_28676_28693[(2)] = inst_28654);

(statearr_28676_28693[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28663 === (8))){
var inst_28642 = (state_28662[(7)]);
var inst_28643 = (state_28662[(9)]);
var inst_28632 = (state_28662[(10)]);
var inst_28641 = (state_28662[(8)]);
var inst_28646 = (function (){var cs = inst_28632;
var vec__28637 = inst_28641;
var v = inst_28642;
var c = inst_28643;
return (function (p1__28628_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__28628_SHARP_);
});
})();
var inst_28647 = cljs.core.filterv.call(null,inst_28646,inst_28632);
var inst_28632__$1 = inst_28647;
var state_28662__$1 = (function (){var statearr_28677 = state_28662;
(statearr_28677[(10)] = inst_28632__$1);

return statearr_28677;
})();
var statearr_28678_28694 = state_28662__$1;
(statearr_28678_28694[(2)] = null);

(statearr_28678_28694[(1)] = (2));


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
var cljs$core$async$state_machine__27165__auto__ = null;
var cljs$core$async$state_machine__27165__auto____0 = (function (){
var statearr_28679 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28679[(0)] = cljs$core$async$state_machine__27165__auto__);

(statearr_28679[(1)] = (1));

return statearr_28679;
});
var cljs$core$async$state_machine__27165__auto____1 = (function (state_28662){
while(true){
var ret_value__27166__auto__ = (function (){try{while(true){
var result__27167__auto__ = switch__27164__auto__.call(null,state_28662);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27167__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27167__auto__;
}
break;
}
}catch (e28680){if((e28680 instanceof Object)){
var ex__27168__auto__ = e28680;
var statearr_28681_28695 = state_28662;
(statearr_28681_28695[(5)] = ex__27168__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28662);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28680;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28696 = state_28662;
state_28662 = G__28696;
continue;
} else {
return ret_value__27166__auto__;
}
break;
}
});
cljs$core$async$state_machine__27165__auto__ = function(state_28662){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27165__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27165__auto____1.call(this,state_28662);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27165__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27165__auto____0;
cljs$core$async$state_machine__27165__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27165__auto____1;
return cljs$core$async$state_machine__27165__auto__;
})()
})();
var state__27261__auto__ = (function (){var statearr_28682 = f__27260__auto__.call(null);
(statearr_28682[(6)] = c__27259__auto___28684);

return statearr_28682;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27261__auto__);
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
var G__28698 = arguments.length;
switch (G__28698) {
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
var c__27259__auto___28743 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27260__auto__ = (function (){var switch__27164__auto__ = (function (state_28722){
var state_val_28723 = (state_28722[(1)]);
if((state_val_28723 === (7))){
var inst_28704 = (state_28722[(7)]);
var inst_28704__$1 = (state_28722[(2)]);
var inst_28705 = (inst_28704__$1 == null);
var inst_28706 = cljs.core.not.call(null,inst_28705);
var state_28722__$1 = (function (){var statearr_28724 = state_28722;
(statearr_28724[(7)] = inst_28704__$1);

return statearr_28724;
})();
if(inst_28706){
var statearr_28725_28744 = state_28722__$1;
(statearr_28725_28744[(1)] = (8));

} else {
var statearr_28726_28745 = state_28722__$1;
(statearr_28726_28745[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28723 === (1))){
var inst_28699 = (0);
var state_28722__$1 = (function (){var statearr_28727 = state_28722;
(statearr_28727[(8)] = inst_28699);

return statearr_28727;
})();
var statearr_28728_28746 = state_28722__$1;
(statearr_28728_28746[(2)] = null);

(statearr_28728_28746[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28723 === (4))){
var state_28722__$1 = state_28722;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28722__$1,(7),ch);
} else {
if((state_val_28723 === (6))){
var inst_28717 = (state_28722[(2)]);
var state_28722__$1 = state_28722;
var statearr_28729_28747 = state_28722__$1;
(statearr_28729_28747[(2)] = inst_28717);

(statearr_28729_28747[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28723 === (3))){
var inst_28719 = (state_28722[(2)]);
var inst_28720 = cljs.core.async.close_BANG_.call(null,out);
var state_28722__$1 = (function (){var statearr_28730 = state_28722;
(statearr_28730[(9)] = inst_28719);

return statearr_28730;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28722__$1,inst_28720);
} else {
if((state_val_28723 === (2))){
var inst_28699 = (state_28722[(8)]);
var inst_28701 = (inst_28699 < n);
var state_28722__$1 = state_28722;
if(cljs.core.truth_(inst_28701)){
var statearr_28731_28748 = state_28722__$1;
(statearr_28731_28748[(1)] = (4));

} else {
var statearr_28732_28749 = state_28722__$1;
(statearr_28732_28749[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28723 === (11))){
var inst_28699 = (state_28722[(8)]);
var inst_28709 = (state_28722[(2)]);
var inst_28710 = (inst_28699 + (1));
var inst_28699__$1 = inst_28710;
var state_28722__$1 = (function (){var statearr_28733 = state_28722;
(statearr_28733[(10)] = inst_28709);

(statearr_28733[(8)] = inst_28699__$1);

return statearr_28733;
})();
var statearr_28734_28750 = state_28722__$1;
(statearr_28734_28750[(2)] = null);

(statearr_28734_28750[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28723 === (9))){
var state_28722__$1 = state_28722;
var statearr_28735_28751 = state_28722__$1;
(statearr_28735_28751[(2)] = null);

(statearr_28735_28751[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28723 === (5))){
var state_28722__$1 = state_28722;
var statearr_28736_28752 = state_28722__$1;
(statearr_28736_28752[(2)] = null);

(statearr_28736_28752[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28723 === (10))){
var inst_28714 = (state_28722[(2)]);
var state_28722__$1 = state_28722;
var statearr_28737_28753 = state_28722__$1;
(statearr_28737_28753[(2)] = inst_28714);

(statearr_28737_28753[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28723 === (8))){
var inst_28704 = (state_28722[(7)]);
var state_28722__$1 = state_28722;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28722__$1,(11),out,inst_28704);
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
var cljs$core$async$state_machine__27165__auto__ = null;
var cljs$core$async$state_machine__27165__auto____0 = (function (){
var statearr_28738 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28738[(0)] = cljs$core$async$state_machine__27165__auto__);

(statearr_28738[(1)] = (1));

return statearr_28738;
});
var cljs$core$async$state_machine__27165__auto____1 = (function (state_28722){
while(true){
var ret_value__27166__auto__ = (function (){try{while(true){
var result__27167__auto__ = switch__27164__auto__.call(null,state_28722);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27167__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27167__auto__;
}
break;
}
}catch (e28739){if((e28739 instanceof Object)){
var ex__27168__auto__ = e28739;
var statearr_28740_28754 = state_28722;
(statearr_28740_28754[(5)] = ex__27168__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28722);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28739;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28755 = state_28722;
state_28722 = G__28755;
continue;
} else {
return ret_value__27166__auto__;
}
break;
}
});
cljs$core$async$state_machine__27165__auto__ = function(state_28722){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27165__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27165__auto____1.call(this,state_28722);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27165__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27165__auto____0;
cljs$core$async$state_machine__27165__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27165__auto____1;
return cljs$core$async$state_machine__27165__auto__;
})()
})();
var state__27261__auto__ = (function (){var statearr_28741 = f__27260__auto__.call(null);
(statearr_28741[(6)] = c__27259__auto___28743);

return statearr_28741;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27261__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28757 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28757 = (function (f,ch,meta28758){
this.f = f;
this.ch = ch;
this.meta28758 = meta28758;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async28757.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28759,meta28758__$1){
var self__ = this;
var _28759__$1 = this;
return (new cljs.core.async.t_cljs$core$async28757(self__.f,self__.ch,meta28758__$1));
}));

(cljs.core.async.t_cljs$core$async28757.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28759){
var self__ = this;
var _28759__$1 = this;
return self__.meta28758;
}));

(cljs.core.async.t_cljs$core$async28757.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28757.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async28757.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async28757.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28757.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28760 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28760 = (function (f,ch,meta28758,_,fn1,meta28761){
this.f = f;
this.ch = ch;
this.meta28758 = meta28758;
this._ = _;
this.fn1 = fn1;
this.meta28761 = meta28761;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async28760.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28762,meta28761__$1){
var self__ = this;
var _28762__$1 = this;
return (new cljs.core.async.t_cljs$core$async28760(self__.f,self__.ch,self__.meta28758,self__._,self__.fn1,meta28761__$1));
}));

(cljs.core.async.t_cljs$core$async28760.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28762){
var self__ = this;
var _28762__$1 = this;
return self__.meta28761;
}));

(cljs.core.async.t_cljs$core$async28760.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28760.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
}));

(cljs.core.async.t_cljs$core$async28760.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async28760.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return (function (p1__28756_SHARP_){
return f1.call(null,(((p1__28756_SHARP_ == null))?null:self__.f.call(null,p1__28756_SHARP_)));
});
}));

(cljs.core.async.t_cljs$core$async28760.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28758","meta28758",1202138674,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async28757","cljs.core.async/t_cljs$core$async28757",1283002774,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta28761","meta28761",1334853803,null)], null);
}));

(cljs.core.async.t_cljs$core$async28760.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async28760.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28760");

(cljs.core.async.t_cljs$core$async28760.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async28760");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28760.
 */
cljs.core.async.__GT_t_cljs$core$async28760 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async28760(f__$1,ch__$1,meta28758__$1,___$2,fn1__$1,meta28761){
return (new cljs.core.async.t_cljs$core$async28760(f__$1,ch__$1,meta28758__$1,___$2,fn1__$1,meta28761));
});

}

return (new cljs.core.async.t_cljs$core$async28760(self__.f,self__.ch,self__.meta28758,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

(cljs.core.async.t_cljs$core$async28757.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28757.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async28757.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28758","meta28758",1202138674,null)], null);
}));

(cljs.core.async.t_cljs$core$async28757.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async28757.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28757");

(cljs.core.async.t_cljs$core$async28757.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async28757");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28757.
 */
cljs.core.async.__GT_t_cljs$core$async28757 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async28757(f__$1,ch__$1,meta28758){
return (new cljs.core.async.t_cljs$core$async28757(f__$1,ch__$1,meta28758));
});

}

return (new cljs.core.async.t_cljs$core$async28757(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28763 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28763 = (function (f,ch,meta28764){
this.f = f;
this.ch = ch;
this.meta28764 = meta28764;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async28763.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28765,meta28764__$1){
var self__ = this;
var _28765__$1 = this;
return (new cljs.core.async.t_cljs$core$async28763(self__.f,self__.ch,meta28764__$1));
}));

(cljs.core.async.t_cljs$core$async28763.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28765){
var self__ = this;
var _28765__$1 = this;
return self__.meta28764;
}));

(cljs.core.async.t_cljs$core$async28763.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28763.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async28763.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28763.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async28763.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28763.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
}));

(cljs.core.async.t_cljs$core$async28763.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28764","meta28764",247249738,null)], null);
}));

(cljs.core.async.t_cljs$core$async28763.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async28763.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28763");

(cljs.core.async.t_cljs$core$async28763.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async28763");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28763.
 */
cljs.core.async.__GT_t_cljs$core$async28763 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async28763(f__$1,ch__$1,meta28764){
return (new cljs.core.async.t_cljs$core$async28763(f__$1,ch__$1,meta28764));
});

}

return (new cljs.core.async.t_cljs$core$async28763(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28766 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28766 = (function (p,ch,meta28767){
this.p = p;
this.ch = ch;
this.meta28767 = meta28767;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async28766.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28768,meta28767__$1){
var self__ = this;
var _28768__$1 = this;
return (new cljs.core.async.t_cljs$core$async28766(self__.p,self__.ch,meta28767__$1));
}));

(cljs.core.async.t_cljs$core$async28766.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28768){
var self__ = this;
var _28768__$1 = this;
return self__.meta28767;
}));

(cljs.core.async.t_cljs$core$async28766.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28766.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async28766.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async28766.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28766.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async28766.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28766.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async28766.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28767","meta28767",-305174276,null)], null);
}));

(cljs.core.async.t_cljs$core$async28766.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async28766.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28766");

(cljs.core.async.t_cljs$core$async28766.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async28766");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28766.
 */
cljs.core.async.__GT_t_cljs$core$async28766 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async28766(p__$1,ch__$1,meta28767){
return (new cljs.core.async.t_cljs$core$async28766(p__$1,ch__$1,meta28767));
});

}

return (new cljs.core.async.t_cljs$core$async28766(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__28770 = arguments.length;
switch (G__28770) {
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
var c__27259__auto___28810 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27260__auto__ = (function (){var switch__27164__auto__ = (function (state_28791){
var state_val_28792 = (state_28791[(1)]);
if((state_val_28792 === (7))){
var inst_28787 = (state_28791[(2)]);
var state_28791__$1 = state_28791;
var statearr_28793_28811 = state_28791__$1;
(statearr_28793_28811[(2)] = inst_28787);

(statearr_28793_28811[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28792 === (1))){
var state_28791__$1 = state_28791;
var statearr_28794_28812 = state_28791__$1;
(statearr_28794_28812[(2)] = null);

(statearr_28794_28812[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28792 === (4))){
var inst_28773 = (state_28791[(7)]);
var inst_28773__$1 = (state_28791[(2)]);
var inst_28774 = (inst_28773__$1 == null);
var state_28791__$1 = (function (){var statearr_28795 = state_28791;
(statearr_28795[(7)] = inst_28773__$1);

return statearr_28795;
})();
if(cljs.core.truth_(inst_28774)){
var statearr_28796_28813 = state_28791__$1;
(statearr_28796_28813[(1)] = (5));

} else {
var statearr_28797_28814 = state_28791__$1;
(statearr_28797_28814[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28792 === (6))){
var inst_28773 = (state_28791[(7)]);
var inst_28778 = p.call(null,inst_28773);
var state_28791__$1 = state_28791;
if(cljs.core.truth_(inst_28778)){
var statearr_28798_28815 = state_28791__$1;
(statearr_28798_28815[(1)] = (8));

} else {
var statearr_28799_28816 = state_28791__$1;
(statearr_28799_28816[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28792 === (3))){
var inst_28789 = (state_28791[(2)]);
var state_28791__$1 = state_28791;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28791__$1,inst_28789);
} else {
if((state_val_28792 === (2))){
var state_28791__$1 = state_28791;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28791__$1,(4),ch);
} else {
if((state_val_28792 === (11))){
var inst_28781 = (state_28791[(2)]);
var state_28791__$1 = state_28791;
var statearr_28800_28817 = state_28791__$1;
(statearr_28800_28817[(2)] = inst_28781);

(statearr_28800_28817[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28792 === (9))){
var state_28791__$1 = state_28791;
var statearr_28801_28818 = state_28791__$1;
(statearr_28801_28818[(2)] = null);

(statearr_28801_28818[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28792 === (5))){
var inst_28776 = cljs.core.async.close_BANG_.call(null,out);
var state_28791__$1 = state_28791;
var statearr_28802_28819 = state_28791__$1;
(statearr_28802_28819[(2)] = inst_28776);

(statearr_28802_28819[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28792 === (10))){
var inst_28784 = (state_28791[(2)]);
var state_28791__$1 = (function (){var statearr_28803 = state_28791;
(statearr_28803[(8)] = inst_28784);

return statearr_28803;
})();
var statearr_28804_28820 = state_28791__$1;
(statearr_28804_28820[(2)] = null);

(statearr_28804_28820[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28792 === (8))){
var inst_28773 = (state_28791[(7)]);
var state_28791__$1 = state_28791;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28791__$1,(11),out,inst_28773);
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
var cljs$core$async$state_machine__27165__auto__ = null;
var cljs$core$async$state_machine__27165__auto____0 = (function (){
var statearr_28805 = [null,null,null,null,null,null,null,null,null];
(statearr_28805[(0)] = cljs$core$async$state_machine__27165__auto__);

(statearr_28805[(1)] = (1));

return statearr_28805;
});
var cljs$core$async$state_machine__27165__auto____1 = (function (state_28791){
while(true){
var ret_value__27166__auto__ = (function (){try{while(true){
var result__27167__auto__ = switch__27164__auto__.call(null,state_28791);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27167__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27167__auto__;
}
break;
}
}catch (e28806){if((e28806 instanceof Object)){
var ex__27168__auto__ = e28806;
var statearr_28807_28821 = state_28791;
(statearr_28807_28821[(5)] = ex__27168__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28791);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28806;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28822 = state_28791;
state_28791 = G__28822;
continue;
} else {
return ret_value__27166__auto__;
}
break;
}
});
cljs$core$async$state_machine__27165__auto__ = function(state_28791){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27165__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27165__auto____1.call(this,state_28791);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27165__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27165__auto____0;
cljs$core$async$state_machine__27165__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27165__auto____1;
return cljs$core$async$state_machine__27165__auto__;
})()
})();
var state__27261__auto__ = (function (){var statearr_28808 = f__27260__auto__.call(null);
(statearr_28808[(6)] = c__27259__auto___28810);

return statearr_28808;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27261__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__28824 = arguments.length;
switch (G__28824) {
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
var c__27259__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27260__auto__ = (function (){var switch__27164__auto__ = (function (state_28887){
var state_val_28888 = (state_28887[(1)]);
if((state_val_28888 === (7))){
var inst_28883 = (state_28887[(2)]);
var state_28887__$1 = state_28887;
var statearr_28889_28927 = state_28887__$1;
(statearr_28889_28927[(2)] = inst_28883);

(statearr_28889_28927[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28888 === (20))){
var inst_28853 = (state_28887[(7)]);
var inst_28864 = (state_28887[(2)]);
var inst_28865 = cljs.core.next.call(null,inst_28853);
var inst_28839 = inst_28865;
var inst_28840 = null;
var inst_28841 = (0);
var inst_28842 = (0);
var state_28887__$1 = (function (){var statearr_28890 = state_28887;
(statearr_28890[(8)] = inst_28864);

(statearr_28890[(9)] = inst_28842);

(statearr_28890[(10)] = inst_28839);

(statearr_28890[(11)] = inst_28840);

(statearr_28890[(12)] = inst_28841);

return statearr_28890;
})();
var statearr_28891_28928 = state_28887__$1;
(statearr_28891_28928[(2)] = null);

(statearr_28891_28928[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28888 === (1))){
var state_28887__$1 = state_28887;
var statearr_28892_28929 = state_28887__$1;
(statearr_28892_28929[(2)] = null);

(statearr_28892_28929[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28888 === (4))){
var inst_28828 = (state_28887[(13)]);
var inst_28828__$1 = (state_28887[(2)]);
var inst_28829 = (inst_28828__$1 == null);
var state_28887__$1 = (function (){var statearr_28893 = state_28887;
(statearr_28893[(13)] = inst_28828__$1);

return statearr_28893;
})();
if(cljs.core.truth_(inst_28829)){
var statearr_28894_28930 = state_28887__$1;
(statearr_28894_28930[(1)] = (5));

} else {
var statearr_28895_28931 = state_28887__$1;
(statearr_28895_28931[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28888 === (15))){
var state_28887__$1 = state_28887;
var statearr_28899_28932 = state_28887__$1;
(statearr_28899_28932[(2)] = null);

(statearr_28899_28932[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28888 === (21))){
var state_28887__$1 = state_28887;
var statearr_28900_28933 = state_28887__$1;
(statearr_28900_28933[(2)] = null);

(statearr_28900_28933[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28888 === (13))){
var inst_28842 = (state_28887[(9)]);
var inst_28839 = (state_28887[(10)]);
var inst_28840 = (state_28887[(11)]);
var inst_28841 = (state_28887[(12)]);
var inst_28849 = (state_28887[(2)]);
var inst_28850 = (inst_28842 + (1));
var tmp28896 = inst_28839;
var tmp28897 = inst_28840;
var tmp28898 = inst_28841;
var inst_28839__$1 = tmp28896;
var inst_28840__$1 = tmp28897;
var inst_28841__$1 = tmp28898;
var inst_28842__$1 = inst_28850;
var state_28887__$1 = (function (){var statearr_28901 = state_28887;
(statearr_28901[(14)] = inst_28849);

(statearr_28901[(9)] = inst_28842__$1);

(statearr_28901[(10)] = inst_28839__$1);

(statearr_28901[(11)] = inst_28840__$1);

(statearr_28901[(12)] = inst_28841__$1);

return statearr_28901;
})();
var statearr_28902_28934 = state_28887__$1;
(statearr_28902_28934[(2)] = null);

(statearr_28902_28934[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28888 === (22))){
var state_28887__$1 = state_28887;
var statearr_28903_28935 = state_28887__$1;
(statearr_28903_28935[(2)] = null);

(statearr_28903_28935[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28888 === (6))){
var inst_28828 = (state_28887[(13)]);
var inst_28837 = f.call(null,inst_28828);
var inst_28838 = cljs.core.seq.call(null,inst_28837);
var inst_28839 = inst_28838;
var inst_28840 = null;
var inst_28841 = (0);
var inst_28842 = (0);
var state_28887__$1 = (function (){var statearr_28904 = state_28887;
(statearr_28904[(9)] = inst_28842);

(statearr_28904[(10)] = inst_28839);

(statearr_28904[(11)] = inst_28840);

(statearr_28904[(12)] = inst_28841);

return statearr_28904;
})();
var statearr_28905_28936 = state_28887__$1;
(statearr_28905_28936[(2)] = null);

(statearr_28905_28936[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28888 === (17))){
var inst_28853 = (state_28887[(7)]);
var inst_28857 = cljs.core.chunk_first.call(null,inst_28853);
var inst_28858 = cljs.core.chunk_rest.call(null,inst_28853);
var inst_28859 = cljs.core.count.call(null,inst_28857);
var inst_28839 = inst_28858;
var inst_28840 = inst_28857;
var inst_28841 = inst_28859;
var inst_28842 = (0);
var state_28887__$1 = (function (){var statearr_28906 = state_28887;
(statearr_28906[(9)] = inst_28842);

(statearr_28906[(10)] = inst_28839);

(statearr_28906[(11)] = inst_28840);

(statearr_28906[(12)] = inst_28841);

return statearr_28906;
})();
var statearr_28907_28937 = state_28887__$1;
(statearr_28907_28937[(2)] = null);

(statearr_28907_28937[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28888 === (3))){
var inst_28885 = (state_28887[(2)]);
var state_28887__$1 = state_28887;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28887__$1,inst_28885);
} else {
if((state_val_28888 === (12))){
var inst_28873 = (state_28887[(2)]);
var state_28887__$1 = state_28887;
var statearr_28908_28938 = state_28887__$1;
(statearr_28908_28938[(2)] = inst_28873);

(statearr_28908_28938[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28888 === (2))){
var state_28887__$1 = state_28887;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28887__$1,(4),in$);
} else {
if((state_val_28888 === (23))){
var inst_28881 = (state_28887[(2)]);
var state_28887__$1 = state_28887;
var statearr_28909_28939 = state_28887__$1;
(statearr_28909_28939[(2)] = inst_28881);

(statearr_28909_28939[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28888 === (19))){
var inst_28868 = (state_28887[(2)]);
var state_28887__$1 = state_28887;
var statearr_28910_28940 = state_28887__$1;
(statearr_28910_28940[(2)] = inst_28868);

(statearr_28910_28940[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28888 === (11))){
var inst_28839 = (state_28887[(10)]);
var inst_28853 = (state_28887[(7)]);
var inst_28853__$1 = cljs.core.seq.call(null,inst_28839);
var state_28887__$1 = (function (){var statearr_28911 = state_28887;
(statearr_28911[(7)] = inst_28853__$1);

return statearr_28911;
})();
if(inst_28853__$1){
var statearr_28912_28941 = state_28887__$1;
(statearr_28912_28941[(1)] = (14));

} else {
var statearr_28913_28942 = state_28887__$1;
(statearr_28913_28942[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28888 === (9))){
var inst_28875 = (state_28887[(2)]);
var inst_28876 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_28887__$1 = (function (){var statearr_28914 = state_28887;
(statearr_28914[(15)] = inst_28875);

return statearr_28914;
})();
if(cljs.core.truth_(inst_28876)){
var statearr_28915_28943 = state_28887__$1;
(statearr_28915_28943[(1)] = (21));

} else {
var statearr_28916_28944 = state_28887__$1;
(statearr_28916_28944[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28888 === (5))){
var inst_28831 = cljs.core.async.close_BANG_.call(null,out);
var state_28887__$1 = state_28887;
var statearr_28917_28945 = state_28887__$1;
(statearr_28917_28945[(2)] = inst_28831);

(statearr_28917_28945[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28888 === (14))){
var inst_28853 = (state_28887[(7)]);
var inst_28855 = cljs.core.chunked_seq_QMARK_.call(null,inst_28853);
var state_28887__$1 = state_28887;
if(inst_28855){
var statearr_28918_28946 = state_28887__$1;
(statearr_28918_28946[(1)] = (17));

} else {
var statearr_28919_28947 = state_28887__$1;
(statearr_28919_28947[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28888 === (16))){
var inst_28871 = (state_28887[(2)]);
var state_28887__$1 = state_28887;
var statearr_28920_28948 = state_28887__$1;
(statearr_28920_28948[(2)] = inst_28871);

(statearr_28920_28948[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28888 === (10))){
var inst_28842 = (state_28887[(9)]);
var inst_28840 = (state_28887[(11)]);
var inst_28847 = cljs.core._nth.call(null,inst_28840,inst_28842);
var state_28887__$1 = state_28887;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28887__$1,(13),out,inst_28847);
} else {
if((state_val_28888 === (18))){
var inst_28853 = (state_28887[(7)]);
var inst_28862 = cljs.core.first.call(null,inst_28853);
var state_28887__$1 = state_28887;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28887__$1,(20),out,inst_28862);
} else {
if((state_val_28888 === (8))){
var inst_28842 = (state_28887[(9)]);
var inst_28841 = (state_28887[(12)]);
var inst_28844 = (inst_28842 < inst_28841);
var inst_28845 = inst_28844;
var state_28887__$1 = state_28887;
if(cljs.core.truth_(inst_28845)){
var statearr_28921_28949 = state_28887__$1;
(statearr_28921_28949[(1)] = (10));

} else {
var statearr_28922_28950 = state_28887__$1;
(statearr_28922_28950[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__27165__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__27165__auto____0 = (function (){
var statearr_28923 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28923[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__27165__auto__);

(statearr_28923[(1)] = (1));

return statearr_28923;
});
var cljs$core$async$mapcat_STAR__$_state_machine__27165__auto____1 = (function (state_28887){
while(true){
var ret_value__27166__auto__ = (function (){try{while(true){
var result__27167__auto__ = switch__27164__auto__.call(null,state_28887);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27167__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27167__auto__;
}
break;
}
}catch (e28924){if((e28924 instanceof Object)){
var ex__27168__auto__ = e28924;
var statearr_28925_28951 = state_28887;
(statearr_28925_28951[(5)] = ex__27168__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28887);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28924;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28952 = state_28887;
state_28887 = G__28952;
continue;
} else {
return ret_value__27166__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__27165__auto__ = function(state_28887){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__27165__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__27165__auto____1.call(this,state_28887);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__27165__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__27165__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__27165__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__27165__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__27165__auto__;
})()
})();
var state__27261__auto__ = (function (){var statearr_28926 = f__27260__auto__.call(null);
(statearr_28926[(6)] = c__27259__auto__);

return statearr_28926;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27261__auto__);
}));

return c__27259__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__28954 = arguments.length;
switch (G__28954) {
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
var G__28957 = arguments.length;
switch (G__28957) {
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
var G__28960 = arguments.length;
switch (G__28960) {
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
var c__27259__auto___29007 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27260__auto__ = (function (){var switch__27164__auto__ = (function (state_28984){
var state_val_28985 = (state_28984[(1)]);
if((state_val_28985 === (7))){
var inst_28979 = (state_28984[(2)]);
var state_28984__$1 = state_28984;
var statearr_28986_29008 = state_28984__$1;
(statearr_28986_29008[(2)] = inst_28979);

(statearr_28986_29008[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28985 === (1))){
var inst_28961 = null;
var state_28984__$1 = (function (){var statearr_28987 = state_28984;
(statearr_28987[(7)] = inst_28961);

return statearr_28987;
})();
var statearr_28988_29009 = state_28984__$1;
(statearr_28988_29009[(2)] = null);

(statearr_28988_29009[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28985 === (4))){
var inst_28964 = (state_28984[(8)]);
var inst_28964__$1 = (state_28984[(2)]);
var inst_28965 = (inst_28964__$1 == null);
var inst_28966 = cljs.core.not.call(null,inst_28965);
var state_28984__$1 = (function (){var statearr_28989 = state_28984;
(statearr_28989[(8)] = inst_28964__$1);

return statearr_28989;
})();
if(inst_28966){
var statearr_28990_29010 = state_28984__$1;
(statearr_28990_29010[(1)] = (5));

} else {
var statearr_28991_29011 = state_28984__$1;
(statearr_28991_29011[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28985 === (6))){
var state_28984__$1 = state_28984;
var statearr_28992_29012 = state_28984__$1;
(statearr_28992_29012[(2)] = null);

(statearr_28992_29012[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28985 === (3))){
var inst_28981 = (state_28984[(2)]);
var inst_28982 = cljs.core.async.close_BANG_.call(null,out);
var state_28984__$1 = (function (){var statearr_28993 = state_28984;
(statearr_28993[(9)] = inst_28981);

return statearr_28993;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28984__$1,inst_28982);
} else {
if((state_val_28985 === (2))){
var state_28984__$1 = state_28984;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28984__$1,(4),ch);
} else {
if((state_val_28985 === (11))){
var inst_28964 = (state_28984[(8)]);
var inst_28973 = (state_28984[(2)]);
var inst_28961 = inst_28964;
var state_28984__$1 = (function (){var statearr_28994 = state_28984;
(statearr_28994[(10)] = inst_28973);

(statearr_28994[(7)] = inst_28961);

return statearr_28994;
})();
var statearr_28995_29013 = state_28984__$1;
(statearr_28995_29013[(2)] = null);

(statearr_28995_29013[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28985 === (9))){
var inst_28964 = (state_28984[(8)]);
var state_28984__$1 = state_28984;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28984__$1,(11),out,inst_28964);
} else {
if((state_val_28985 === (5))){
var inst_28964 = (state_28984[(8)]);
var inst_28961 = (state_28984[(7)]);
var inst_28968 = cljs.core._EQ_.call(null,inst_28964,inst_28961);
var state_28984__$1 = state_28984;
if(inst_28968){
var statearr_28997_29014 = state_28984__$1;
(statearr_28997_29014[(1)] = (8));

} else {
var statearr_28998_29015 = state_28984__$1;
(statearr_28998_29015[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28985 === (10))){
var inst_28976 = (state_28984[(2)]);
var state_28984__$1 = state_28984;
var statearr_28999_29016 = state_28984__$1;
(statearr_28999_29016[(2)] = inst_28976);

(statearr_28999_29016[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28985 === (8))){
var inst_28961 = (state_28984[(7)]);
var tmp28996 = inst_28961;
var inst_28961__$1 = tmp28996;
var state_28984__$1 = (function (){var statearr_29000 = state_28984;
(statearr_29000[(7)] = inst_28961__$1);

return statearr_29000;
})();
var statearr_29001_29017 = state_28984__$1;
(statearr_29001_29017[(2)] = null);

(statearr_29001_29017[(1)] = (2));


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
var cljs$core$async$state_machine__27165__auto__ = null;
var cljs$core$async$state_machine__27165__auto____0 = (function (){
var statearr_29002 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29002[(0)] = cljs$core$async$state_machine__27165__auto__);

(statearr_29002[(1)] = (1));

return statearr_29002;
});
var cljs$core$async$state_machine__27165__auto____1 = (function (state_28984){
while(true){
var ret_value__27166__auto__ = (function (){try{while(true){
var result__27167__auto__ = switch__27164__auto__.call(null,state_28984);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27167__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27167__auto__;
}
break;
}
}catch (e29003){if((e29003 instanceof Object)){
var ex__27168__auto__ = e29003;
var statearr_29004_29018 = state_28984;
(statearr_29004_29018[(5)] = ex__27168__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28984);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29003;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29019 = state_28984;
state_28984 = G__29019;
continue;
} else {
return ret_value__27166__auto__;
}
break;
}
});
cljs$core$async$state_machine__27165__auto__ = function(state_28984){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27165__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27165__auto____1.call(this,state_28984);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27165__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27165__auto____0;
cljs$core$async$state_machine__27165__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27165__auto____1;
return cljs$core$async$state_machine__27165__auto__;
})()
})();
var state__27261__auto__ = (function (){var statearr_29005 = f__27260__auto__.call(null);
(statearr_29005[(6)] = c__27259__auto___29007);

return statearr_29005;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27261__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__29021 = arguments.length;
switch (G__29021) {
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
var c__27259__auto___29087 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27260__auto__ = (function (){var switch__27164__auto__ = (function (state_29059){
var state_val_29060 = (state_29059[(1)]);
if((state_val_29060 === (7))){
var inst_29055 = (state_29059[(2)]);
var state_29059__$1 = state_29059;
var statearr_29061_29088 = state_29059__$1;
(statearr_29061_29088[(2)] = inst_29055);

(statearr_29061_29088[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29060 === (1))){
var inst_29022 = (new Array(n));
var inst_29023 = inst_29022;
var inst_29024 = (0);
var state_29059__$1 = (function (){var statearr_29062 = state_29059;
(statearr_29062[(7)] = inst_29024);

(statearr_29062[(8)] = inst_29023);

return statearr_29062;
})();
var statearr_29063_29089 = state_29059__$1;
(statearr_29063_29089[(2)] = null);

(statearr_29063_29089[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29060 === (4))){
var inst_29027 = (state_29059[(9)]);
var inst_29027__$1 = (state_29059[(2)]);
var inst_29028 = (inst_29027__$1 == null);
var inst_29029 = cljs.core.not.call(null,inst_29028);
var state_29059__$1 = (function (){var statearr_29064 = state_29059;
(statearr_29064[(9)] = inst_29027__$1);

return statearr_29064;
})();
if(inst_29029){
var statearr_29065_29090 = state_29059__$1;
(statearr_29065_29090[(1)] = (5));

} else {
var statearr_29066_29091 = state_29059__$1;
(statearr_29066_29091[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29060 === (15))){
var inst_29049 = (state_29059[(2)]);
var state_29059__$1 = state_29059;
var statearr_29067_29092 = state_29059__$1;
(statearr_29067_29092[(2)] = inst_29049);

(statearr_29067_29092[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29060 === (13))){
var state_29059__$1 = state_29059;
var statearr_29068_29093 = state_29059__$1;
(statearr_29068_29093[(2)] = null);

(statearr_29068_29093[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29060 === (6))){
var inst_29024 = (state_29059[(7)]);
var inst_29045 = (inst_29024 > (0));
var state_29059__$1 = state_29059;
if(cljs.core.truth_(inst_29045)){
var statearr_29069_29094 = state_29059__$1;
(statearr_29069_29094[(1)] = (12));

} else {
var statearr_29070_29095 = state_29059__$1;
(statearr_29070_29095[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29060 === (3))){
var inst_29057 = (state_29059[(2)]);
var state_29059__$1 = state_29059;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29059__$1,inst_29057);
} else {
if((state_val_29060 === (12))){
var inst_29023 = (state_29059[(8)]);
var inst_29047 = cljs.core.vec.call(null,inst_29023);
var state_29059__$1 = state_29059;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29059__$1,(15),out,inst_29047);
} else {
if((state_val_29060 === (2))){
var state_29059__$1 = state_29059;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29059__$1,(4),ch);
} else {
if((state_val_29060 === (11))){
var inst_29039 = (state_29059[(2)]);
var inst_29040 = (new Array(n));
var inst_29023 = inst_29040;
var inst_29024 = (0);
var state_29059__$1 = (function (){var statearr_29071 = state_29059;
(statearr_29071[(7)] = inst_29024);

(statearr_29071[(10)] = inst_29039);

(statearr_29071[(8)] = inst_29023);

return statearr_29071;
})();
var statearr_29072_29096 = state_29059__$1;
(statearr_29072_29096[(2)] = null);

(statearr_29072_29096[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29060 === (9))){
var inst_29023 = (state_29059[(8)]);
var inst_29037 = cljs.core.vec.call(null,inst_29023);
var state_29059__$1 = state_29059;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29059__$1,(11),out,inst_29037);
} else {
if((state_val_29060 === (5))){
var inst_29024 = (state_29059[(7)]);
var inst_29027 = (state_29059[(9)]);
var inst_29032 = (state_29059[(11)]);
var inst_29023 = (state_29059[(8)]);
var inst_29031 = (inst_29023[inst_29024] = inst_29027);
var inst_29032__$1 = (inst_29024 + (1));
var inst_29033 = (inst_29032__$1 < n);
var state_29059__$1 = (function (){var statearr_29073 = state_29059;
(statearr_29073[(12)] = inst_29031);

(statearr_29073[(11)] = inst_29032__$1);

return statearr_29073;
})();
if(cljs.core.truth_(inst_29033)){
var statearr_29074_29097 = state_29059__$1;
(statearr_29074_29097[(1)] = (8));

} else {
var statearr_29075_29098 = state_29059__$1;
(statearr_29075_29098[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29060 === (14))){
var inst_29052 = (state_29059[(2)]);
var inst_29053 = cljs.core.async.close_BANG_.call(null,out);
var state_29059__$1 = (function (){var statearr_29077 = state_29059;
(statearr_29077[(13)] = inst_29052);

return statearr_29077;
})();
var statearr_29078_29099 = state_29059__$1;
(statearr_29078_29099[(2)] = inst_29053);

(statearr_29078_29099[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29060 === (10))){
var inst_29043 = (state_29059[(2)]);
var state_29059__$1 = state_29059;
var statearr_29079_29100 = state_29059__$1;
(statearr_29079_29100[(2)] = inst_29043);

(statearr_29079_29100[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29060 === (8))){
var inst_29032 = (state_29059[(11)]);
var inst_29023 = (state_29059[(8)]);
var tmp29076 = inst_29023;
var inst_29023__$1 = tmp29076;
var inst_29024 = inst_29032;
var state_29059__$1 = (function (){var statearr_29080 = state_29059;
(statearr_29080[(7)] = inst_29024);

(statearr_29080[(8)] = inst_29023__$1);

return statearr_29080;
})();
var statearr_29081_29101 = state_29059__$1;
(statearr_29081_29101[(2)] = null);

(statearr_29081_29101[(1)] = (2));


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
var cljs$core$async$state_machine__27165__auto__ = null;
var cljs$core$async$state_machine__27165__auto____0 = (function (){
var statearr_29082 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29082[(0)] = cljs$core$async$state_machine__27165__auto__);

(statearr_29082[(1)] = (1));

return statearr_29082;
});
var cljs$core$async$state_machine__27165__auto____1 = (function (state_29059){
while(true){
var ret_value__27166__auto__ = (function (){try{while(true){
var result__27167__auto__ = switch__27164__auto__.call(null,state_29059);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27167__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27167__auto__;
}
break;
}
}catch (e29083){if((e29083 instanceof Object)){
var ex__27168__auto__ = e29083;
var statearr_29084_29102 = state_29059;
(statearr_29084_29102[(5)] = ex__27168__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29059);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29083;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29103 = state_29059;
state_29059 = G__29103;
continue;
} else {
return ret_value__27166__auto__;
}
break;
}
});
cljs$core$async$state_machine__27165__auto__ = function(state_29059){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27165__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27165__auto____1.call(this,state_29059);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27165__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27165__auto____0;
cljs$core$async$state_machine__27165__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27165__auto____1;
return cljs$core$async$state_machine__27165__auto__;
})()
})();
var state__27261__auto__ = (function (){var statearr_29085 = f__27260__auto__.call(null);
(statearr_29085[(6)] = c__27259__auto___29087);

return statearr_29085;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27261__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__29105 = arguments.length;
switch (G__29105) {
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
var c__27259__auto___29175 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27260__auto__ = (function (){var switch__27164__auto__ = (function (state_29147){
var state_val_29148 = (state_29147[(1)]);
if((state_val_29148 === (7))){
var inst_29143 = (state_29147[(2)]);
var state_29147__$1 = state_29147;
var statearr_29149_29176 = state_29147__$1;
(statearr_29149_29176[(2)] = inst_29143);

(statearr_29149_29176[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29148 === (1))){
var inst_29106 = [];
var inst_29107 = inst_29106;
var inst_29108 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_29147__$1 = (function (){var statearr_29150 = state_29147;
(statearr_29150[(7)] = inst_29107);

(statearr_29150[(8)] = inst_29108);

return statearr_29150;
})();
var statearr_29151_29177 = state_29147__$1;
(statearr_29151_29177[(2)] = null);

(statearr_29151_29177[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29148 === (4))){
var inst_29111 = (state_29147[(9)]);
var inst_29111__$1 = (state_29147[(2)]);
var inst_29112 = (inst_29111__$1 == null);
var inst_29113 = cljs.core.not.call(null,inst_29112);
var state_29147__$1 = (function (){var statearr_29152 = state_29147;
(statearr_29152[(9)] = inst_29111__$1);

return statearr_29152;
})();
if(inst_29113){
var statearr_29153_29178 = state_29147__$1;
(statearr_29153_29178[(1)] = (5));

} else {
var statearr_29154_29179 = state_29147__$1;
(statearr_29154_29179[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29148 === (15))){
var inst_29137 = (state_29147[(2)]);
var state_29147__$1 = state_29147;
var statearr_29155_29180 = state_29147__$1;
(statearr_29155_29180[(2)] = inst_29137);

(statearr_29155_29180[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29148 === (13))){
var state_29147__$1 = state_29147;
var statearr_29156_29181 = state_29147__$1;
(statearr_29156_29181[(2)] = null);

(statearr_29156_29181[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29148 === (6))){
var inst_29107 = (state_29147[(7)]);
var inst_29132 = inst_29107.length;
var inst_29133 = (inst_29132 > (0));
var state_29147__$1 = state_29147;
if(cljs.core.truth_(inst_29133)){
var statearr_29157_29182 = state_29147__$1;
(statearr_29157_29182[(1)] = (12));

} else {
var statearr_29158_29183 = state_29147__$1;
(statearr_29158_29183[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29148 === (3))){
var inst_29145 = (state_29147[(2)]);
var state_29147__$1 = state_29147;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29147__$1,inst_29145);
} else {
if((state_val_29148 === (12))){
var inst_29107 = (state_29147[(7)]);
var inst_29135 = cljs.core.vec.call(null,inst_29107);
var state_29147__$1 = state_29147;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29147__$1,(15),out,inst_29135);
} else {
if((state_val_29148 === (2))){
var state_29147__$1 = state_29147;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29147__$1,(4),ch);
} else {
if((state_val_29148 === (11))){
var inst_29115 = (state_29147[(10)]);
var inst_29111 = (state_29147[(9)]);
var inst_29125 = (state_29147[(2)]);
var inst_29126 = [];
var inst_29127 = inst_29126.push(inst_29111);
var inst_29107 = inst_29126;
var inst_29108 = inst_29115;
var state_29147__$1 = (function (){var statearr_29159 = state_29147;
(statearr_29159[(11)] = inst_29127);

(statearr_29159[(7)] = inst_29107);

(statearr_29159[(8)] = inst_29108);

(statearr_29159[(12)] = inst_29125);

return statearr_29159;
})();
var statearr_29160_29184 = state_29147__$1;
(statearr_29160_29184[(2)] = null);

(statearr_29160_29184[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29148 === (9))){
var inst_29107 = (state_29147[(7)]);
var inst_29123 = cljs.core.vec.call(null,inst_29107);
var state_29147__$1 = state_29147;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29147__$1,(11),out,inst_29123);
} else {
if((state_val_29148 === (5))){
var inst_29115 = (state_29147[(10)]);
var inst_29108 = (state_29147[(8)]);
var inst_29111 = (state_29147[(9)]);
var inst_29115__$1 = f.call(null,inst_29111);
var inst_29116 = cljs.core._EQ_.call(null,inst_29115__$1,inst_29108);
var inst_29117 = cljs.core.keyword_identical_QMARK_.call(null,inst_29108,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_29118 = ((inst_29116) || (inst_29117));
var state_29147__$1 = (function (){var statearr_29161 = state_29147;
(statearr_29161[(10)] = inst_29115__$1);

return statearr_29161;
})();
if(cljs.core.truth_(inst_29118)){
var statearr_29162_29185 = state_29147__$1;
(statearr_29162_29185[(1)] = (8));

} else {
var statearr_29163_29186 = state_29147__$1;
(statearr_29163_29186[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29148 === (14))){
var inst_29140 = (state_29147[(2)]);
var inst_29141 = cljs.core.async.close_BANG_.call(null,out);
var state_29147__$1 = (function (){var statearr_29165 = state_29147;
(statearr_29165[(13)] = inst_29140);

return statearr_29165;
})();
var statearr_29166_29187 = state_29147__$1;
(statearr_29166_29187[(2)] = inst_29141);

(statearr_29166_29187[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29148 === (10))){
var inst_29130 = (state_29147[(2)]);
var state_29147__$1 = state_29147;
var statearr_29167_29188 = state_29147__$1;
(statearr_29167_29188[(2)] = inst_29130);

(statearr_29167_29188[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29148 === (8))){
var inst_29107 = (state_29147[(7)]);
var inst_29115 = (state_29147[(10)]);
var inst_29111 = (state_29147[(9)]);
var inst_29120 = inst_29107.push(inst_29111);
var tmp29164 = inst_29107;
var inst_29107__$1 = tmp29164;
var inst_29108 = inst_29115;
var state_29147__$1 = (function (){var statearr_29168 = state_29147;
(statearr_29168[(7)] = inst_29107__$1);

(statearr_29168[(8)] = inst_29108);

(statearr_29168[(14)] = inst_29120);

return statearr_29168;
})();
var statearr_29169_29189 = state_29147__$1;
(statearr_29169_29189[(2)] = null);

(statearr_29169_29189[(1)] = (2));


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
var cljs$core$async$state_machine__27165__auto__ = null;
var cljs$core$async$state_machine__27165__auto____0 = (function (){
var statearr_29170 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29170[(0)] = cljs$core$async$state_machine__27165__auto__);

(statearr_29170[(1)] = (1));

return statearr_29170;
});
var cljs$core$async$state_machine__27165__auto____1 = (function (state_29147){
while(true){
var ret_value__27166__auto__ = (function (){try{while(true){
var result__27167__auto__ = switch__27164__auto__.call(null,state_29147);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27167__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27167__auto__;
}
break;
}
}catch (e29171){if((e29171 instanceof Object)){
var ex__27168__auto__ = e29171;
var statearr_29172_29190 = state_29147;
(statearr_29172_29190[(5)] = ex__27168__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29147);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29171;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29191 = state_29147;
state_29147 = G__29191;
continue;
} else {
return ret_value__27166__auto__;
}
break;
}
});
cljs$core$async$state_machine__27165__auto__ = function(state_29147){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27165__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27165__auto____1.call(this,state_29147);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27165__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27165__auto____0;
cljs$core$async$state_machine__27165__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27165__auto____1;
return cljs$core$async$state_machine__27165__auto__;
})()
})();
var state__27261__auto__ = (function (){var statearr_29173 = f__27260__auto__.call(null);
(statearr_29173[(6)] = c__27259__auto___29175);

return statearr_29173;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27261__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=async.js.map?rel=1607206819808
