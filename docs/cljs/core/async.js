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
var G__27327 = arguments.length;
switch (G__27327) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27328 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27328 = (function (f,blockable,meta27329){
this.f = f;
this.blockable = blockable;
this.meta27329 = meta27329;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async27328.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27330,meta27329__$1){
var self__ = this;
var _27330__$1 = this;
return (new cljs.core.async.t_cljs$core$async27328(self__.f,self__.blockable,meta27329__$1));
}));

(cljs.core.async.t_cljs$core$async27328.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27330){
var self__ = this;
var _27330__$1 = this;
return self__.meta27329;
}));

(cljs.core.async.t_cljs$core$async27328.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27328.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async27328.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async27328.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async27328.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta27329","meta27329",-323074310,null)], null);
}));

(cljs.core.async.t_cljs$core$async27328.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async27328.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27328");

(cljs.core.async.t_cljs$core$async27328.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async27328");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27328.
 */
cljs.core.async.__GT_t_cljs$core$async27328 = (function cljs$core$async$__GT_t_cljs$core$async27328(f__$1,blockable__$1,meta27329){
return (new cljs.core.async.t_cljs$core$async27328(f__$1,blockable__$1,meta27329));
});

}

return (new cljs.core.async.t_cljs$core$async27328(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__27334 = arguments.length;
switch (G__27334) {
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
var G__27337 = arguments.length;
switch (G__27337) {
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
var G__27340 = arguments.length;
switch (G__27340) {
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
var val_27342 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_27342);
} else {
cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,val_27342);
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
var G__27344 = arguments.length;
switch (G__27344) {
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
var n__4613__auto___27346 = n;
var x_27347 = (0);
while(true){
if((x_27347 < n__4613__auto___27346)){
(a[x_27347] = x_27347);

var G__27348 = (x_27347 + (1));
x_27347 = G__27348;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27349 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27349 = (function (flag,meta27350){
this.flag = flag;
this.meta27350 = meta27350;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async27349.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27351,meta27350__$1){
var self__ = this;
var _27351__$1 = this;
return (new cljs.core.async.t_cljs$core$async27349(self__.flag,meta27350__$1));
}));

(cljs.core.async.t_cljs$core$async27349.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27351){
var self__ = this;
var _27351__$1 = this;
return self__.meta27350;
}));

(cljs.core.async.t_cljs$core$async27349.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27349.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async27349.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async27349.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async27349.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta27350","meta27350",-241267608,null)], null);
}));

(cljs.core.async.t_cljs$core$async27349.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async27349.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27349");

(cljs.core.async.t_cljs$core$async27349.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async27349");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27349.
 */
cljs.core.async.__GT_t_cljs$core$async27349 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async27349(flag__$1,meta27350){
return (new cljs.core.async.t_cljs$core$async27349(flag__$1,meta27350));
});

}

return (new cljs.core.async.t_cljs$core$async27349(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27352 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27352 = (function (flag,cb,meta27353){
this.flag = flag;
this.cb = cb;
this.meta27353 = meta27353;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async27352.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27354,meta27353__$1){
var self__ = this;
var _27354__$1 = this;
return (new cljs.core.async.t_cljs$core$async27352(self__.flag,self__.cb,meta27353__$1));
}));

(cljs.core.async.t_cljs$core$async27352.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27354){
var self__ = this;
var _27354__$1 = this;
return self__.meta27353;
}));

(cljs.core.async.t_cljs$core$async27352.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27352.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async27352.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async27352.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async27352.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta27353","meta27353",749560415,null)], null);
}));

(cljs.core.async.t_cljs$core$async27352.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async27352.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27352");

(cljs.core.async.t_cljs$core$async27352.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async27352");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27352.
 */
cljs.core.async.__GT_t_cljs$core$async27352 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async27352(flag__$1,cb__$1,meta27353){
return (new cljs.core.async.t_cljs$core$async27352(flag__$1,cb__$1,meta27353));
});

}

return (new cljs.core.async.t_cljs$core$async27352(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__27355_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27355_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__27356_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27356_SHARP_,port], null));
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
var G__27357 = (i + (1));
i = G__27357;
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
var len__4736__auto___27363 = arguments.length;
var i__4737__auto___27364 = (0);
while(true){
if((i__4737__auto___27364 < len__4736__auto___27363)){
args__4742__auto__.push((arguments[i__4737__auto___27364]));

var G__27365 = (i__4737__auto___27364 + (1));
i__4737__auto___27364 = G__27365;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__27360){
var map__27361 = p__27360;
var map__27361__$1 = (((((!((map__27361 == null))))?(((((map__27361.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27361.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27361):map__27361);
var opts = map__27361__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq27358){
var G__27359 = cljs.core.first.call(null,seq27358);
var seq27358__$1 = cljs.core.next.call(null,seq27358);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27359,seq27358__$1);
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
var G__27367 = arguments.length;
switch (G__27367) {
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
var c__27267__auto___27413 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27268__auto__ = (function (){var switch__27172__auto__ = (function (state_27391){
var state_val_27392 = (state_27391[(1)]);
if((state_val_27392 === (7))){
var inst_27387 = (state_27391[(2)]);
var state_27391__$1 = state_27391;
var statearr_27393_27414 = state_27391__$1;
(statearr_27393_27414[(2)] = inst_27387);

(statearr_27393_27414[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27392 === (1))){
var state_27391__$1 = state_27391;
var statearr_27394_27415 = state_27391__$1;
(statearr_27394_27415[(2)] = null);

(statearr_27394_27415[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27392 === (4))){
var inst_27370 = (state_27391[(7)]);
var inst_27370__$1 = (state_27391[(2)]);
var inst_27371 = (inst_27370__$1 == null);
var state_27391__$1 = (function (){var statearr_27395 = state_27391;
(statearr_27395[(7)] = inst_27370__$1);

return statearr_27395;
})();
if(cljs.core.truth_(inst_27371)){
var statearr_27396_27416 = state_27391__$1;
(statearr_27396_27416[(1)] = (5));

} else {
var statearr_27397_27417 = state_27391__$1;
(statearr_27397_27417[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27392 === (13))){
var state_27391__$1 = state_27391;
var statearr_27398_27418 = state_27391__$1;
(statearr_27398_27418[(2)] = null);

(statearr_27398_27418[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27392 === (6))){
var inst_27370 = (state_27391[(7)]);
var state_27391__$1 = state_27391;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27391__$1,(11),to,inst_27370);
} else {
if((state_val_27392 === (3))){
var inst_27389 = (state_27391[(2)]);
var state_27391__$1 = state_27391;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27391__$1,inst_27389);
} else {
if((state_val_27392 === (12))){
var state_27391__$1 = state_27391;
var statearr_27399_27419 = state_27391__$1;
(statearr_27399_27419[(2)] = null);

(statearr_27399_27419[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27392 === (2))){
var state_27391__$1 = state_27391;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27391__$1,(4),from);
} else {
if((state_val_27392 === (11))){
var inst_27380 = (state_27391[(2)]);
var state_27391__$1 = state_27391;
if(cljs.core.truth_(inst_27380)){
var statearr_27400_27420 = state_27391__$1;
(statearr_27400_27420[(1)] = (12));

} else {
var statearr_27401_27421 = state_27391__$1;
(statearr_27401_27421[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27392 === (9))){
var state_27391__$1 = state_27391;
var statearr_27402_27422 = state_27391__$1;
(statearr_27402_27422[(2)] = null);

(statearr_27402_27422[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27392 === (5))){
var state_27391__$1 = state_27391;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27403_27423 = state_27391__$1;
(statearr_27403_27423[(1)] = (8));

} else {
var statearr_27404_27424 = state_27391__$1;
(statearr_27404_27424[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27392 === (14))){
var inst_27385 = (state_27391[(2)]);
var state_27391__$1 = state_27391;
var statearr_27405_27425 = state_27391__$1;
(statearr_27405_27425[(2)] = inst_27385);

(statearr_27405_27425[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27392 === (10))){
var inst_27377 = (state_27391[(2)]);
var state_27391__$1 = state_27391;
var statearr_27406_27426 = state_27391__$1;
(statearr_27406_27426[(2)] = inst_27377);

(statearr_27406_27426[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27392 === (8))){
var inst_27374 = cljs.core.async.close_BANG_.call(null,to);
var state_27391__$1 = state_27391;
var statearr_27407_27427 = state_27391__$1;
(statearr_27407_27427[(2)] = inst_27374);

(statearr_27407_27427[(1)] = (10));


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
var cljs$core$async$state_machine__27173__auto__ = null;
var cljs$core$async$state_machine__27173__auto____0 = (function (){
var statearr_27408 = [null,null,null,null,null,null,null,null];
(statearr_27408[(0)] = cljs$core$async$state_machine__27173__auto__);

(statearr_27408[(1)] = (1));

return statearr_27408;
});
var cljs$core$async$state_machine__27173__auto____1 = (function (state_27391){
while(true){
var ret_value__27174__auto__ = (function (){try{while(true){
var result__27175__auto__ = switch__27172__auto__.call(null,state_27391);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27175__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27175__auto__;
}
break;
}
}catch (e27409){if((e27409 instanceof Object)){
var ex__27176__auto__ = e27409;
var statearr_27410_27428 = state_27391;
(statearr_27410_27428[(5)] = ex__27176__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27391);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27409;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27174__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27429 = state_27391;
state_27391 = G__27429;
continue;
} else {
return ret_value__27174__auto__;
}
break;
}
});
cljs$core$async$state_machine__27173__auto__ = function(state_27391){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27173__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27173__auto____1.call(this,state_27391);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27173__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27173__auto____0;
cljs$core$async$state_machine__27173__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27173__auto____1;
return cljs$core$async$state_machine__27173__auto__;
})()
})();
var state__27269__auto__ = (function (){var statearr_27411 = f__27268__auto__.call(null);
(statearr_27411[(6)] = c__27267__auto___27413);

return statearr_27411;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27269__auto__);
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
var process = (function (p__27430){
var vec__27431 = p__27430;
var v = cljs.core.nth.call(null,vec__27431,(0),null);
var p = cljs.core.nth.call(null,vec__27431,(1),null);
var job = vec__27431;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__27267__auto___27602 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27268__auto__ = (function (){var switch__27172__auto__ = (function (state_27438){
var state_val_27439 = (state_27438[(1)]);
if((state_val_27439 === (1))){
var state_27438__$1 = state_27438;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27438__$1,(2),res,v);
} else {
if((state_val_27439 === (2))){
var inst_27435 = (state_27438[(2)]);
var inst_27436 = cljs.core.async.close_BANG_.call(null,res);
var state_27438__$1 = (function (){var statearr_27440 = state_27438;
(statearr_27440[(7)] = inst_27435);

return statearr_27440;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27438__$1,inst_27436);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27173__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27173__auto____0 = (function (){
var statearr_27441 = [null,null,null,null,null,null,null,null];
(statearr_27441[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27173__auto__);

(statearr_27441[(1)] = (1));

return statearr_27441;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27173__auto____1 = (function (state_27438){
while(true){
var ret_value__27174__auto__ = (function (){try{while(true){
var result__27175__auto__ = switch__27172__auto__.call(null,state_27438);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27175__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27175__auto__;
}
break;
}
}catch (e27442){if((e27442 instanceof Object)){
var ex__27176__auto__ = e27442;
var statearr_27443_27603 = state_27438;
(statearr_27443_27603[(5)] = ex__27176__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27438);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27442;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27174__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27604 = state_27438;
state_27438 = G__27604;
continue;
} else {
return ret_value__27174__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27173__auto__ = function(state_27438){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27173__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27173__auto____1.call(this,state_27438);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27173__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27173__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27173__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27173__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27173__auto__;
})()
})();
var state__27269__auto__ = (function (){var statearr_27444 = f__27268__auto__.call(null);
(statearr_27444[(6)] = c__27267__auto___27602);

return statearr_27444;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27269__auto__);
}));


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});
var async = (function (p__27445){
var vec__27446 = p__27445;
var v = cljs.core.nth.call(null,vec__27446,(0),null);
var p = cljs.core.nth.call(null,vec__27446,(1),null);
var job = vec__27446;
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
var n__4613__auto___27605 = n;
var __27606 = (0);
while(true){
if((__27606 < n__4613__auto___27605)){
var G__27449_27607 = type;
var G__27449_27608__$1 = (((G__27449_27607 instanceof cljs.core.Keyword))?G__27449_27607.fqn:null);
switch (G__27449_27608__$1) {
case "compute":
var c__27267__auto___27610 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__27606,c__27267__auto___27610,G__27449_27607,G__27449_27608__$1,n__4613__auto___27605,jobs,results,process,async){
return (function (){
var f__27268__auto__ = (function (){var switch__27172__auto__ = ((function (__27606,c__27267__auto___27610,G__27449_27607,G__27449_27608__$1,n__4613__auto___27605,jobs,results,process,async){
return (function (state_27462){
var state_val_27463 = (state_27462[(1)]);
if((state_val_27463 === (1))){
var state_27462__$1 = state_27462;
var statearr_27464_27611 = state_27462__$1;
(statearr_27464_27611[(2)] = null);

(statearr_27464_27611[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27463 === (2))){
var state_27462__$1 = state_27462;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27462__$1,(4),jobs);
} else {
if((state_val_27463 === (3))){
var inst_27460 = (state_27462[(2)]);
var state_27462__$1 = state_27462;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27462__$1,inst_27460);
} else {
if((state_val_27463 === (4))){
var inst_27452 = (state_27462[(2)]);
var inst_27453 = process.call(null,inst_27452);
var state_27462__$1 = state_27462;
if(cljs.core.truth_(inst_27453)){
var statearr_27465_27612 = state_27462__$1;
(statearr_27465_27612[(1)] = (5));

} else {
var statearr_27466_27613 = state_27462__$1;
(statearr_27466_27613[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27463 === (5))){
var state_27462__$1 = state_27462;
var statearr_27467_27614 = state_27462__$1;
(statearr_27467_27614[(2)] = null);

(statearr_27467_27614[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27463 === (6))){
var state_27462__$1 = state_27462;
var statearr_27468_27615 = state_27462__$1;
(statearr_27468_27615[(2)] = null);

(statearr_27468_27615[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27463 === (7))){
var inst_27458 = (state_27462[(2)]);
var state_27462__$1 = state_27462;
var statearr_27469_27616 = state_27462__$1;
(statearr_27469_27616[(2)] = inst_27458);

(statearr_27469_27616[(1)] = (3));


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
});})(__27606,c__27267__auto___27610,G__27449_27607,G__27449_27608__$1,n__4613__auto___27605,jobs,results,process,async))
;
return ((function (__27606,switch__27172__auto__,c__27267__auto___27610,G__27449_27607,G__27449_27608__$1,n__4613__auto___27605,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27173__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27173__auto____0 = (function (){
var statearr_27470 = [null,null,null,null,null,null,null];
(statearr_27470[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27173__auto__);

(statearr_27470[(1)] = (1));

return statearr_27470;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27173__auto____1 = (function (state_27462){
while(true){
var ret_value__27174__auto__ = (function (){try{while(true){
var result__27175__auto__ = switch__27172__auto__.call(null,state_27462);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27175__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27175__auto__;
}
break;
}
}catch (e27471){if((e27471 instanceof Object)){
var ex__27176__auto__ = e27471;
var statearr_27472_27617 = state_27462;
(statearr_27472_27617[(5)] = ex__27176__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27462);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27471;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27174__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27618 = state_27462;
state_27462 = G__27618;
continue;
} else {
return ret_value__27174__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27173__auto__ = function(state_27462){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27173__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27173__auto____1.call(this,state_27462);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27173__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27173__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27173__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27173__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27173__auto__;
})()
;})(__27606,switch__27172__auto__,c__27267__auto___27610,G__27449_27607,G__27449_27608__$1,n__4613__auto___27605,jobs,results,process,async))
})();
var state__27269__auto__ = (function (){var statearr_27473 = f__27268__auto__.call(null);
(statearr_27473[(6)] = c__27267__auto___27610);

return statearr_27473;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27269__auto__);
});})(__27606,c__27267__auto___27610,G__27449_27607,G__27449_27608__$1,n__4613__auto___27605,jobs,results,process,async))
);


break;
case "async":
var c__27267__auto___27619 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__27606,c__27267__auto___27619,G__27449_27607,G__27449_27608__$1,n__4613__auto___27605,jobs,results,process,async){
return (function (){
var f__27268__auto__ = (function (){var switch__27172__auto__ = ((function (__27606,c__27267__auto___27619,G__27449_27607,G__27449_27608__$1,n__4613__auto___27605,jobs,results,process,async){
return (function (state_27486){
var state_val_27487 = (state_27486[(1)]);
if((state_val_27487 === (1))){
var state_27486__$1 = state_27486;
var statearr_27488_27620 = state_27486__$1;
(statearr_27488_27620[(2)] = null);

(statearr_27488_27620[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27487 === (2))){
var state_27486__$1 = state_27486;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27486__$1,(4),jobs);
} else {
if((state_val_27487 === (3))){
var inst_27484 = (state_27486[(2)]);
var state_27486__$1 = state_27486;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27486__$1,inst_27484);
} else {
if((state_val_27487 === (4))){
var inst_27476 = (state_27486[(2)]);
var inst_27477 = async.call(null,inst_27476);
var state_27486__$1 = state_27486;
if(cljs.core.truth_(inst_27477)){
var statearr_27489_27621 = state_27486__$1;
(statearr_27489_27621[(1)] = (5));

} else {
var statearr_27490_27622 = state_27486__$1;
(statearr_27490_27622[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27487 === (5))){
var state_27486__$1 = state_27486;
var statearr_27491_27623 = state_27486__$1;
(statearr_27491_27623[(2)] = null);

(statearr_27491_27623[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27487 === (6))){
var state_27486__$1 = state_27486;
var statearr_27492_27624 = state_27486__$1;
(statearr_27492_27624[(2)] = null);

(statearr_27492_27624[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27487 === (7))){
var inst_27482 = (state_27486[(2)]);
var state_27486__$1 = state_27486;
var statearr_27493_27625 = state_27486__$1;
(statearr_27493_27625[(2)] = inst_27482);

(statearr_27493_27625[(1)] = (3));


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
});})(__27606,c__27267__auto___27619,G__27449_27607,G__27449_27608__$1,n__4613__auto___27605,jobs,results,process,async))
;
return ((function (__27606,switch__27172__auto__,c__27267__auto___27619,G__27449_27607,G__27449_27608__$1,n__4613__auto___27605,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27173__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27173__auto____0 = (function (){
var statearr_27494 = [null,null,null,null,null,null,null];
(statearr_27494[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27173__auto__);

(statearr_27494[(1)] = (1));

return statearr_27494;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27173__auto____1 = (function (state_27486){
while(true){
var ret_value__27174__auto__ = (function (){try{while(true){
var result__27175__auto__ = switch__27172__auto__.call(null,state_27486);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27175__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27175__auto__;
}
break;
}
}catch (e27495){if((e27495 instanceof Object)){
var ex__27176__auto__ = e27495;
var statearr_27496_27626 = state_27486;
(statearr_27496_27626[(5)] = ex__27176__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27486);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27495;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27174__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27627 = state_27486;
state_27486 = G__27627;
continue;
} else {
return ret_value__27174__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27173__auto__ = function(state_27486){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27173__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27173__auto____1.call(this,state_27486);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27173__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27173__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27173__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27173__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27173__auto__;
})()
;})(__27606,switch__27172__auto__,c__27267__auto___27619,G__27449_27607,G__27449_27608__$1,n__4613__auto___27605,jobs,results,process,async))
})();
var state__27269__auto__ = (function (){var statearr_27497 = f__27268__auto__.call(null);
(statearr_27497[(6)] = c__27267__auto___27619);

return statearr_27497;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27269__auto__);
});})(__27606,c__27267__auto___27619,G__27449_27607,G__27449_27608__$1,n__4613__auto___27605,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27449_27608__$1)].join('')));

}

var G__27628 = (__27606 + (1));
__27606 = G__27628;
continue;
} else {
}
break;
}

var c__27267__auto___27629 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27268__auto__ = (function (){var switch__27172__auto__ = (function (state_27519){
var state_val_27520 = (state_27519[(1)]);
if((state_val_27520 === (7))){
var inst_27515 = (state_27519[(2)]);
var state_27519__$1 = state_27519;
var statearr_27521_27630 = state_27519__$1;
(statearr_27521_27630[(2)] = inst_27515);

(statearr_27521_27630[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27520 === (1))){
var state_27519__$1 = state_27519;
var statearr_27522_27631 = state_27519__$1;
(statearr_27522_27631[(2)] = null);

(statearr_27522_27631[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27520 === (4))){
var inst_27500 = (state_27519[(7)]);
var inst_27500__$1 = (state_27519[(2)]);
var inst_27501 = (inst_27500__$1 == null);
var state_27519__$1 = (function (){var statearr_27523 = state_27519;
(statearr_27523[(7)] = inst_27500__$1);

return statearr_27523;
})();
if(cljs.core.truth_(inst_27501)){
var statearr_27524_27632 = state_27519__$1;
(statearr_27524_27632[(1)] = (5));

} else {
var statearr_27525_27633 = state_27519__$1;
(statearr_27525_27633[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27520 === (6))){
var inst_27500 = (state_27519[(7)]);
var inst_27505 = (state_27519[(8)]);
var inst_27505__$1 = cljs.core.async.chan.call(null,(1));
var inst_27506 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27507 = [inst_27500,inst_27505__$1];
var inst_27508 = (new cljs.core.PersistentVector(null,2,(5),inst_27506,inst_27507,null));
var state_27519__$1 = (function (){var statearr_27526 = state_27519;
(statearr_27526[(8)] = inst_27505__$1);

return statearr_27526;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27519__$1,(8),jobs,inst_27508);
} else {
if((state_val_27520 === (3))){
var inst_27517 = (state_27519[(2)]);
var state_27519__$1 = state_27519;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27519__$1,inst_27517);
} else {
if((state_val_27520 === (2))){
var state_27519__$1 = state_27519;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27519__$1,(4),from);
} else {
if((state_val_27520 === (9))){
var inst_27512 = (state_27519[(2)]);
var state_27519__$1 = (function (){var statearr_27527 = state_27519;
(statearr_27527[(9)] = inst_27512);

return statearr_27527;
})();
var statearr_27528_27634 = state_27519__$1;
(statearr_27528_27634[(2)] = null);

(statearr_27528_27634[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27520 === (5))){
var inst_27503 = cljs.core.async.close_BANG_.call(null,jobs);
var state_27519__$1 = state_27519;
var statearr_27529_27635 = state_27519__$1;
(statearr_27529_27635[(2)] = inst_27503);

(statearr_27529_27635[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27520 === (8))){
var inst_27505 = (state_27519[(8)]);
var inst_27510 = (state_27519[(2)]);
var state_27519__$1 = (function (){var statearr_27530 = state_27519;
(statearr_27530[(10)] = inst_27510);

return statearr_27530;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27519__$1,(9),results,inst_27505);
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
var cljs$core$async$pipeline_STAR__$_state_machine__27173__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27173__auto____0 = (function (){
var statearr_27531 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27531[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27173__auto__);

(statearr_27531[(1)] = (1));

return statearr_27531;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27173__auto____1 = (function (state_27519){
while(true){
var ret_value__27174__auto__ = (function (){try{while(true){
var result__27175__auto__ = switch__27172__auto__.call(null,state_27519);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27175__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27175__auto__;
}
break;
}
}catch (e27532){if((e27532 instanceof Object)){
var ex__27176__auto__ = e27532;
var statearr_27533_27636 = state_27519;
(statearr_27533_27636[(5)] = ex__27176__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27519);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27532;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27174__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27637 = state_27519;
state_27519 = G__27637;
continue;
} else {
return ret_value__27174__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27173__auto__ = function(state_27519){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27173__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27173__auto____1.call(this,state_27519);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27173__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27173__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27173__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27173__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27173__auto__;
})()
})();
var state__27269__auto__ = (function (){var statearr_27534 = f__27268__auto__.call(null);
(statearr_27534[(6)] = c__27267__auto___27629);

return statearr_27534;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27269__auto__);
}));


var c__27267__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27268__auto__ = (function (){var switch__27172__auto__ = (function (state_27572){
var state_val_27573 = (state_27572[(1)]);
if((state_val_27573 === (7))){
var inst_27568 = (state_27572[(2)]);
var state_27572__$1 = state_27572;
var statearr_27574_27638 = state_27572__$1;
(statearr_27574_27638[(2)] = inst_27568);

(statearr_27574_27638[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27573 === (20))){
var state_27572__$1 = state_27572;
var statearr_27575_27639 = state_27572__$1;
(statearr_27575_27639[(2)] = null);

(statearr_27575_27639[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27573 === (1))){
var state_27572__$1 = state_27572;
var statearr_27576_27640 = state_27572__$1;
(statearr_27576_27640[(2)] = null);

(statearr_27576_27640[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27573 === (4))){
var inst_27537 = (state_27572[(7)]);
var inst_27537__$1 = (state_27572[(2)]);
var inst_27538 = (inst_27537__$1 == null);
var state_27572__$1 = (function (){var statearr_27577 = state_27572;
(statearr_27577[(7)] = inst_27537__$1);

return statearr_27577;
})();
if(cljs.core.truth_(inst_27538)){
var statearr_27578_27641 = state_27572__$1;
(statearr_27578_27641[(1)] = (5));

} else {
var statearr_27579_27642 = state_27572__$1;
(statearr_27579_27642[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27573 === (15))){
var inst_27550 = (state_27572[(8)]);
var state_27572__$1 = state_27572;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27572__$1,(18),to,inst_27550);
} else {
if((state_val_27573 === (21))){
var inst_27563 = (state_27572[(2)]);
var state_27572__$1 = state_27572;
var statearr_27580_27643 = state_27572__$1;
(statearr_27580_27643[(2)] = inst_27563);

(statearr_27580_27643[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27573 === (13))){
var inst_27565 = (state_27572[(2)]);
var state_27572__$1 = (function (){var statearr_27581 = state_27572;
(statearr_27581[(9)] = inst_27565);

return statearr_27581;
})();
var statearr_27582_27644 = state_27572__$1;
(statearr_27582_27644[(2)] = null);

(statearr_27582_27644[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27573 === (6))){
var inst_27537 = (state_27572[(7)]);
var state_27572__$1 = state_27572;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27572__$1,(11),inst_27537);
} else {
if((state_val_27573 === (17))){
var inst_27558 = (state_27572[(2)]);
var state_27572__$1 = state_27572;
if(cljs.core.truth_(inst_27558)){
var statearr_27583_27645 = state_27572__$1;
(statearr_27583_27645[(1)] = (19));

} else {
var statearr_27584_27646 = state_27572__$1;
(statearr_27584_27646[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27573 === (3))){
var inst_27570 = (state_27572[(2)]);
var state_27572__$1 = state_27572;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27572__$1,inst_27570);
} else {
if((state_val_27573 === (12))){
var inst_27547 = (state_27572[(10)]);
var state_27572__$1 = state_27572;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27572__$1,(14),inst_27547);
} else {
if((state_val_27573 === (2))){
var state_27572__$1 = state_27572;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27572__$1,(4),results);
} else {
if((state_val_27573 === (19))){
var state_27572__$1 = state_27572;
var statearr_27585_27647 = state_27572__$1;
(statearr_27585_27647[(2)] = null);

(statearr_27585_27647[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27573 === (11))){
var inst_27547 = (state_27572[(2)]);
var state_27572__$1 = (function (){var statearr_27586 = state_27572;
(statearr_27586[(10)] = inst_27547);

return statearr_27586;
})();
var statearr_27587_27648 = state_27572__$1;
(statearr_27587_27648[(2)] = null);

(statearr_27587_27648[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27573 === (9))){
var state_27572__$1 = state_27572;
var statearr_27588_27649 = state_27572__$1;
(statearr_27588_27649[(2)] = null);

(statearr_27588_27649[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27573 === (5))){
var state_27572__$1 = state_27572;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27589_27650 = state_27572__$1;
(statearr_27589_27650[(1)] = (8));

} else {
var statearr_27590_27651 = state_27572__$1;
(statearr_27590_27651[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27573 === (14))){
var inst_27550 = (state_27572[(8)]);
var inst_27550__$1 = (state_27572[(2)]);
var inst_27551 = (inst_27550__$1 == null);
var inst_27552 = cljs.core.not.call(null,inst_27551);
var state_27572__$1 = (function (){var statearr_27591 = state_27572;
(statearr_27591[(8)] = inst_27550__$1);

return statearr_27591;
})();
if(inst_27552){
var statearr_27592_27652 = state_27572__$1;
(statearr_27592_27652[(1)] = (15));

} else {
var statearr_27593_27653 = state_27572__$1;
(statearr_27593_27653[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27573 === (16))){
var state_27572__$1 = state_27572;
var statearr_27594_27654 = state_27572__$1;
(statearr_27594_27654[(2)] = false);

(statearr_27594_27654[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27573 === (10))){
var inst_27544 = (state_27572[(2)]);
var state_27572__$1 = state_27572;
var statearr_27595_27655 = state_27572__$1;
(statearr_27595_27655[(2)] = inst_27544);

(statearr_27595_27655[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27573 === (18))){
var inst_27555 = (state_27572[(2)]);
var state_27572__$1 = state_27572;
var statearr_27596_27656 = state_27572__$1;
(statearr_27596_27656[(2)] = inst_27555);

(statearr_27596_27656[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27573 === (8))){
var inst_27541 = cljs.core.async.close_BANG_.call(null,to);
var state_27572__$1 = state_27572;
var statearr_27597_27657 = state_27572__$1;
(statearr_27597_27657[(2)] = inst_27541);

(statearr_27597_27657[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__27173__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27173__auto____0 = (function (){
var statearr_27598 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27598[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27173__auto__);

(statearr_27598[(1)] = (1));

return statearr_27598;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27173__auto____1 = (function (state_27572){
while(true){
var ret_value__27174__auto__ = (function (){try{while(true){
var result__27175__auto__ = switch__27172__auto__.call(null,state_27572);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27175__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27175__auto__;
}
break;
}
}catch (e27599){if((e27599 instanceof Object)){
var ex__27176__auto__ = e27599;
var statearr_27600_27658 = state_27572;
(statearr_27600_27658[(5)] = ex__27176__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27572);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27599;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27174__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27659 = state_27572;
state_27572 = G__27659;
continue;
} else {
return ret_value__27174__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27173__auto__ = function(state_27572){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27173__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27173__auto____1.call(this,state_27572);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27173__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27173__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27173__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27173__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27173__auto__;
})()
})();
var state__27269__auto__ = (function (){var statearr_27601 = f__27268__auto__.call(null);
(statearr_27601[(6)] = c__27267__auto__);

return statearr_27601;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27269__auto__);
}));

return c__27267__auto__;
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
var G__27661 = arguments.length;
switch (G__27661) {
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
var G__27664 = arguments.length;
switch (G__27664) {
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
var G__27667 = arguments.length;
switch (G__27667) {
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
var c__27267__auto___27716 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27268__auto__ = (function (){var switch__27172__auto__ = (function (state_27693){
var state_val_27694 = (state_27693[(1)]);
if((state_val_27694 === (7))){
var inst_27689 = (state_27693[(2)]);
var state_27693__$1 = state_27693;
var statearr_27695_27717 = state_27693__$1;
(statearr_27695_27717[(2)] = inst_27689);

(statearr_27695_27717[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27694 === (1))){
var state_27693__$1 = state_27693;
var statearr_27696_27718 = state_27693__$1;
(statearr_27696_27718[(2)] = null);

(statearr_27696_27718[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27694 === (4))){
var inst_27670 = (state_27693[(7)]);
var inst_27670__$1 = (state_27693[(2)]);
var inst_27671 = (inst_27670__$1 == null);
var state_27693__$1 = (function (){var statearr_27697 = state_27693;
(statearr_27697[(7)] = inst_27670__$1);

return statearr_27697;
})();
if(cljs.core.truth_(inst_27671)){
var statearr_27698_27719 = state_27693__$1;
(statearr_27698_27719[(1)] = (5));

} else {
var statearr_27699_27720 = state_27693__$1;
(statearr_27699_27720[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27694 === (13))){
var state_27693__$1 = state_27693;
var statearr_27700_27721 = state_27693__$1;
(statearr_27700_27721[(2)] = null);

(statearr_27700_27721[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27694 === (6))){
var inst_27670 = (state_27693[(7)]);
var inst_27676 = p.call(null,inst_27670);
var state_27693__$1 = state_27693;
if(cljs.core.truth_(inst_27676)){
var statearr_27701_27722 = state_27693__$1;
(statearr_27701_27722[(1)] = (9));

} else {
var statearr_27702_27723 = state_27693__$1;
(statearr_27702_27723[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27694 === (3))){
var inst_27691 = (state_27693[(2)]);
var state_27693__$1 = state_27693;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27693__$1,inst_27691);
} else {
if((state_val_27694 === (12))){
var state_27693__$1 = state_27693;
var statearr_27703_27724 = state_27693__$1;
(statearr_27703_27724[(2)] = null);

(statearr_27703_27724[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27694 === (2))){
var state_27693__$1 = state_27693;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27693__$1,(4),ch);
} else {
if((state_val_27694 === (11))){
var inst_27670 = (state_27693[(7)]);
var inst_27680 = (state_27693[(2)]);
var state_27693__$1 = state_27693;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27693__$1,(8),inst_27680,inst_27670);
} else {
if((state_val_27694 === (9))){
var state_27693__$1 = state_27693;
var statearr_27704_27725 = state_27693__$1;
(statearr_27704_27725[(2)] = tc);

(statearr_27704_27725[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27694 === (5))){
var inst_27673 = cljs.core.async.close_BANG_.call(null,tc);
var inst_27674 = cljs.core.async.close_BANG_.call(null,fc);
var state_27693__$1 = (function (){var statearr_27705 = state_27693;
(statearr_27705[(8)] = inst_27673);

return statearr_27705;
})();
var statearr_27706_27726 = state_27693__$1;
(statearr_27706_27726[(2)] = inst_27674);

(statearr_27706_27726[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27694 === (14))){
var inst_27687 = (state_27693[(2)]);
var state_27693__$1 = state_27693;
var statearr_27707_27727 = state_27693__$1;
(statearr_27707_27727[(2)] = inst_27687);

(statearr_27707_27727[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27694 === (10))){
var state_27693__$1 = state_27693;
var statearr_27708_27728 = state_27693__$1;
(statearr_27708_27728[(2)] = fc);

(statearr_27708_27728[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27694 === (8))){
var inst_27682 = (state_27693[(2)]);
var state_27693__$1 = state_27693;
if(cljs.core.truth_(inst_27682)){
var statearr_27709_27729 = state_27693__$1;
(statearr_27709_27729[(1)] = (12));

} else {
var statearr_27710_27730 = state_27693__$1;
(statearr_27710_27730[(1)] = (13));

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
var cljs$core$async$state_machine__27173__auto__ = null;
var cljs$core$async$state_machine__27173__auto____0 = (function (){
var statearr_27711 = [null,null,null,null,null,null,null,null,null];
(statearr_27711[(0)] = cljs$core$async$state_machine__27173__auto__);

(statearr_27711[(1)] = (1));

return statearr_27711;
});
var cljs$core$async$state_machine__27173__auto____1 = (function (state_27693){
while(true){
var ret_value__27174__auto__ = (function (){try{while(true){
var result__27175__auto__ = switch__27172__auto__.call(null,state_27693);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27175__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27175__auto__;
}
break;
}
}catch (e27712){if((e27712 instanceof Object)){
var ex__27176__auto__ = e27712;
var statearr_27713_27731 = state_27693;
(statearr_27713_27731[(5)] = ex__27176__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27693);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27712;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27174__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27732 = state_27693;
state_27693 = G__27732;
continue;
} else {
return ret_value__27174__auto__;
}
break;
}
});
cljs$core$async$state_machine__27173__auto__ = function(state_27693){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27173__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27173__auto____1.call(this,state_27693);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27173__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27173__auto____0;
cljs$core$async$state_machine__27173__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27173__auto____1;
return cljs$core$async$state_machine__27173__auto__;
})()
})();
var state__27269__auto__ = (function (){var statearr_27714 = f__27268__auto__.call(null);
(statearr_27714[(6)] = c__27267__auto___27716);

return statearr_27714;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27269__auto__);
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
var c__27267__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27268__auto__ = (function (){var switch__27172__auto__ = (function (state_27753){
var state_val_27754 = (state_27753[(1)]);
if((state_val_27754 === (7))){
var inst_27749 = (state_27753[(2)]);
var state_27753__$1 = state_27753;
var statearr_27755_27773 = state_27753__$1;
(statearr_27755_27773[(2)] = inst_27749);

(statearr_27755_27773[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27754 === (1))){
var inst_27733 = init;
var state_27753__$1 = (function (){var statearr_27756 = state_27753;
(statearr_27756[(7)] = inst_27733);

return statearr_27756;
})();
var statearr_27757_27774 = state_27753__$1;
(statearr_27757_27774[(2)] = null);

(statearr_27757_27774[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27754 === (4))){
var inst_27736 = (state_27753[(8)]);
var inst_27736__$1 = (state_27753[(2)]);
var inst_27737 = (inst_27736__$1 == null);
var state_27753__$1 = (function (){var statearr_27758 = state_27753;
(statearr_27758[(8)] = inst_27736__$1);

return statearr_27758;
})();
if(cljs.core.truth_(inst_27737)){
var statearr_27759_27775 = state_27753__$1;
(statearr_27759_27775[(1)] = (5));

} else {
var statearr_27760_27776 = state_27753__$1;
(statearr_27760_27776[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27754 === (6))){
var inst_27736 = (state_27753[(8)]);
var inst_27733 = (state_27753[(7)]);
var inst_27740 = (state_27753[(9)]);
var inst_27740__$1 = f.call(null,inst_27733,inst_27736);
var inst_27741 = cljs.core.reduced_QMARK_.call(null,inst_27740__$1);
var state_27753__$1 = (function (){var statearr_27761 = state_27753;
(statearr_27761[(9)] = inst_27740__$1);

return statearr_27761;
})();
if(inst_27741){
var statearr_27762_27777 = state_27753__$1;
(statearr_27762_27777[(1)] = (8));

} else {
var statearr_27763_27778 = state_27753__$1;
(statearr_27763_27778[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27754 === (3))){
var inst_27751 = (state_27753[(2)]);
var state_27753__$1 = state_27753;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27753__$1,inst_27751);
} else {
if((state_val_27754 === (2))){
var state_27753__$1 = state_27753;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27753__$1,(4),ch);
} else {
if((state_val_27754 === (9))){
var inst_27740 = (state_27753[(9)]);
var inst_27733 = inst_27740;
var state_27753__$1 = (function (){var statearr_27764 = state_27753;
(statearr_27764[(7)] = inst_27733);

return statearr_27764;
})();
var statearr_27765_27779 = state_27753__$1;
(statearr_27765_27779[(2)] = null);

(statearr_27765_27779[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27754 === (5))){
var inst_27733 = (state_27753[(7)]);
var state_27753__$1 = state_27753;
var statearr_27766_27780 = state_27753__$1;
(statearr_27766_27780[(2)] = inst_27733);

(statearr_27766_27780[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27754 === (10))){
var inst_27747 = (state_27753[(2)]);
var state_27753__$1 = state_27753;
var statearr_27767_27781 = state_27753__$1;
(statearr_27767_27781[(2)] = inst_27747);

(statearr_27767_27781[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27754 === (8))){
var inst_27740 = (state_27753[(9)]);
var inst_27743 = cljs.core.deref.call(null,inst_27740);
var state_27753__$1 = state_27753;
var statearr_27768_27782 = state_27753__$1;
(statearr_27768_27782[(2)] = inst_27743);

(statearr_27768_27782[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__27173__auto__ = null;
var cljs$core$async$reduce_$_state_machine__27173__auto____0 = (function (){
var statearr_27769 = [null,null,null,null,null,null,null,null,null,null];
(statearr_27769[(0)] = cljs$core$async$reduce_$_state_machine__27173__auto__);

(statearr_27769[(1)] = (1));

return statearr_27769;
});
var cljs$core$async$reduce_$_state_machine__27173__auto____1 = (function (state_27753){
while(true){
var ret_value__27174__auto__ = (function (){try{while(true){
var result__27175__auto__ = switch__27172__auto__.call(null,state_27753);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27175__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27175__auto__;
}
break;
}
}catch (e27770){if((e27770 instanceof Object)){
var ex__27176__auto__ = e27770;
var statearr_27771_27783 = state_27753;
(statearr_27771_27783[(5)] = ex__27176__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27753);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27770;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27174__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27784 = state_27753;
state_27753 = G__27784;
continue;
} else {
return ret_value__27174__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__27173__auto__ = function(state_27753){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__27173__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__27173__auto____1.call(this,state_27753);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__27173__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__27173__auto____0;
cljs$core$async$reduce_$_state_machine__27173__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__27173__auto____1;
return cljs$core$async$reduce_$_state_machine__27173__auto__;
})()
})();
var state__27269__auto__ = (function (){var statearr_27772 = f__27268__auto__.call(null);
(statearr_27772[(6)] = c__27267__auto__);

return statearr_27772;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27269__auto__);
}));

return c__27267__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__27267__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27268__auto__ = (function (){var switch__27172__auto__ = (function (state_27790){
var state_val_27791 = (state_27790[(1)]);
if((state_val_27791 === (1))){
var inst_27785 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_27790__$1 = state_27790;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27790__$1,(2),inst_27785);
} else {
if((state_val_27791 === (2))){
var inst_27787 = (state_27790[(2)]);
var inst_27788 = f__$1.call(null,inst_27787);
var state_27790__$1 = state_27790;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27790__$1,inst_27788);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__27173__auto__ = null;
var cljs$core$async$transduce_$_state_machine__27173__auto____0 = (function (){
var statearr_27792 = [null,null,null,null,null,null,null];
(statearr_27792[(0)] = cljs$core$async$transduce_$_state_machine__27173__auto__);

(statearr_27792[(1)] = (1));

return statearr_27792;
});
var cljs$core$async$transduce_$_state_machine__27173__auto____1 = (function (state_27790){
while(true){
var ret_value__27174__auto__ = (function (){try{while(true){
var result__27175__auto__ = switch__27172__auto__.call(null,state_27790);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27175__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27175__auto__;
}
break;
}
}catch (e27793){if((e27793 instanceof Object)){
var ex__27176__auto__ = e27793;
var statearr_27794_27796 = state_27790;
(statearr_27794_27796[(5)] = ex__27176__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27790);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27793;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27174__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27797 = state_27790;
state_27790 = G__27797;
continue;
} else {
return ret_value__27174__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__27173__auto__ = function(state_27790){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__27173__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__27173__auto____1.call(this,state_27790);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__27173__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__27173__auto____0;
cljs$core$async$transduce_$_state_machine__27173__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__27173__auto____1;
return cljs$core$async$transduce_$_state_machine__27173__auto__;
})()
})();
var state__27269__auto__ = (function (){var statearr_27795 = f__27268__auto__.call(null);
(statearr_27795[(6)] = c__27267__auto__);

return statearr_27795;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27269__auto__);
}));

return c__27267__auto__;
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
var G__27799 = arguments.length;
switch (G__27799) {
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
var c__27267__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27268__auto__ = (function (){var switch__27172__auto__ = (function (state_27824){
var state_val_27825 = (state_27824[(1)]);
if((state_val_27825 === (7))){
var inst_27806 = (state_27824[(2)]);
var state_27824__$1 = state_27824;
var statearr_27826_27847 = state_27824__$1;
(statearr_27826_27847[(2)] = inst_27806);

(statearr_27826_27847[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27825 === (1))){
var inst_27800 = cljs.core.seq.call(null,coll);
var inst_27801 = inst_27800;
var state_27824__$1 = (function (){var statearr_27827 = state_27824;
(statearr_27827[(7)] = inst_27801);

return statearr_27827;
})();
var statearr_27828_27848 = state_27824__$1;
(statearr_27828_27848[(2)] = null);

(statearr_27828_27848[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27825 === (4))){
var inst_27801 = (state_27824[(7)]);
var inst_27804 = cljs.core.first.call(null,inst_27801);
var state_27824__$1 = state_27824;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27824__$1,(7),ch,inst_27804);
} else {
if((state_val_27825 === (13))){
var inst_27818 = (state_27824[(2)]);
var state_27824__$1 = state_27824;
var statearr_27829_27849 = state_27824__$1;
(statearr_27829_27849[(2)] = inst_27818);

(statearr_27829_27849[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27825 === (6))){
var inst_27809 = (state_27824[(2)]);
var state_27824__$1 = state_27824;
if(cljs.core.truth_(inst_27809)){
var statearr_27830_27850 = state_27824__$1;
(statearr_27830_27850[(1)] = (8));

} else {
var statearr_27831_27851 = state_27824__$1;
(statearr_27831_27851[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27825 === (3))){
var inst_27822 = (state_27824[(2)]);
var state_27824__$1 = state_27824;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27824__$1,inst_27822);
} else {
if((state_val_27825 === (12))){
var state_27824__$1 = state_27824;
var statearr_27832_27852 = state_27824__$1;
(statearr_27832_27852[(2)] = null);

(statearr_27832_27852[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27825 === (2))){
var inst_27801 = (state_27824[(7)]);
var state_27824__$1 = state_27824;
if(cljs.core.truth_(inst_27801)){
var statearr_27833_27853 = state_27824__$1;
(statearr_27833_27853[(1)] = (4));

} else {
var statearr_27834_27854 = state_27824__$1;
(statearr_27834_27854[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27825 === (11))){
var inst_27815 = cljs.core.async.close_BANG_.call(null,ch);
var state_27824__$1 = state_27824;
var statearr_27835_27855 = state_27824__$1;
(statearr_27835_27855[(2)] = inst_27815);

(statearr_27835_27855[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27825 === (9))){
var state_27824__$1 = state_27824;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27836_27856 = state_27824__$1;
(statearr_27836_27856[(1)] = (11));

} else {
var statearr_27837_27857 = state_27824__$1;
(statearr_27837_27857[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27825 === (5))){
var inst_27801 = (state_27824[(7)]);
var state_27824__$1 = state_27824;
var statearr_27838_27858 = state_27824__$1;
(statearr_27838_27858[(2)] = inst_27801);

(statearr_27838_27858[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27825 === (10))){
var inst_27820 = (state_27824[(2)]);
var state_27824__$1 = state_27824;
var statearr_27839_27859 = state_27824__$1;
(statearr_27839_27859[(2)] = inst_27820);

(statearr_27839_27859[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27825 === (8))){
var inst_27801 = (state_27824[(7)]);
var inst_27811 = cljs.core.next.call(null,inst_27801);
var inst_27801__$1 = inst_27811;
var state_27824__$1 = (function (){var statearr_27840 = state_27824;
(statearr_27840[(7)] = inst_27801__$1);

return statearr_27840;
})();
var statearr_27841_27860 = state_27824__$1;
(statearr_27841_27860[(2)] = null);

(statearr_27841_27860[(1)] = (2));


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
var cljs$core$async$state_machine__27173__auto__ = null;
var cljs$core$async$state_machine__27173__auto____0 = (function (){
var statearr_27842 = [null,null,null,null,null,null,null,null];
(statearr_27842[(0)] = cljs$core$async$state_machine__27173__auto__);

(statearr_27842[(1)] = (1));

return statearr_27842;
});
var cljs$core$async$state_machine__27173__auto____1 = (function (state_27824){
while(true){
var ret_value__27174__auto__ = (function (){try{while(true){
var result__27175__auto__ = switch__27172__auto__.call(null,state_27824);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27175__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27175__auto__;
}
break;
}
}catch (e27843){if((e27843 instanceof Object)){
var ex__27176__auto__ = e27843;
var statearr_27844_27861 = state_27824;
(statearr_27844_27861[(5)] = ex__27176__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27824);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27843;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27174__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27862 = state_27824;
state_27824 = G__27862;
continue;
} else {
return ret_value__27174__auto__;
}
break;
}
});
cljs$core$async$state_machine__27173__auto__ = function(state_27824){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27173__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27173__auto____1.call(this,state_27824);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27173__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27173__auto____0;
cljs$core$async$state_machine__27173__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27173__auto____1;
return cljs$core$async$state_machine__27173__auto__;
})()
})();
var state__27269__auto__ = (function (){var statearr_27845 = f__27268__auto__.call(null);
(statearr_27845[(6)] = c__27267__auto__);

return statearr_27845;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27269__auto__);
}));

return c__27267__auto__;
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

var cljs$core$async$Mux$muxch_STAR_$dyn_27863 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_27863.call(null,_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_27864 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_27864.call(null,m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_27865 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_27865.call(null,m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_27866 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_27866.call(null,m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27867 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27867 = (function (ch,cs,meta27868){
this.ch = ch;
this.cs = cs;
this.meta27868 = meta27868;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async27867.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27869,meta27868__$1){
var self__ = this;
var _27869__$1 = this;
return (new cljs.core.async.t_cljs$core$async27867(self__.ch,self__.cs,meta27868__$1));
}));

(cljs.core.async.t_cljs$core$async27867.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27869){
var self__ = this;
var _27869__$1 = this;
return self__.meta27868;
}));

(cljs.core.async.t_cljs$core$async27867.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27867.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async27867.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27867.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async27867.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async27867.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async27867.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta27868","meta27868",-1290527113,null)], null);
}));

(cljs.core.async.t_cljs$core$async27867.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async27867.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27867");

(cljs.core.async.t_cljs$core$async27867.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async27867");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27867.
 */
cljs.core.async.__GT_t_cljs$core$async27867 = (function cljs$core$async$mult_$___GT_t_cljs$core$async27867(ch__$1,cs__$1,meta27868){
return (new cljs.core.async.t_cljs$core$async27867(ch__$1,cs__$1,meta27868));
});

}

return (new cljs.core.async.t_cljs$core$async27867(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__27267__auto___28089 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27268__auto__ = (function (){var switch__27172__auto__ = (function (state_28004){
var state_val_28005 = (state_28004[(1)]);
if((state_val_28005 === (7))){
var inst_28000 = (state_28004[(2)]);
var state_28004__$1 = state_28004;
var statearr_28006_28090 = state_28004__$1;
(statearr_28006_28090[(2)] = inst_28000);

(statearr_28006_28090[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28005 === (20))){
var inst_27903 = (state_28004[(7)]);
var inst_27915 = cljs.core.first.call(null,inst_27903);
var inst_27916 = cljs.core.nth.call(null,inst_27915,(0),null);
var inst_27917 = cljs.core.nth.call(null,inst_27915,(1),null);
var state_28004__$1 = (function (){var statearr_28007 = state_28004;
(statearr_28007[(8)] = inst_27916);

return statearr_28007;
})();
if(cljs.core.truth_(inst_27917)){
var statearr_28008_28091 = state_28004__$1;
(statearr_28008_28091[(1)] = (22));

} else {
var statearr_28009_28092 = state_28004__$1;
(statearr_28009_28092[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28005 === (27))){
var inst_27952 = (state_28004[(9)]);
var inst_27872 = (state_28004[(10)]);
var inst_27945 = (state_28004[(11)]);
var inst_27947 = (state_28004[(12)]);
var inst_27952__$1 = cljs.core._nth.call(null,inst_27945,inst_27947);
var inst_27953 = cljs.core.async.put_BANG_.call(null,inst_27952__$1,inst_27872,done);
var state_28004__$1 = (function (){var statearr_28010 = state_28004;
(statearr_28010[(9)] = inst_27952__$1);

return statearr_28010;
})();
if(cljs.core.truth_(inst_27953)){
var statearr_28011_28093 = state_28004__$1;
(statearr_28011_28093[(1)] = (30));

} else {
var statearr_28012_28094 = state_28004__$1;
(statearr_28012_28094[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28005 === (1))){
var state_28004__$1 = state_28004;
var statearr_28013_28095 = state_28004__$1;
(statearr_28013_28095[(2)] = null);

(statearr_28013_28095[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28005 === (24))){
var inst_27903 = (state_28004[(7)]);
var inst_27922 = (state_28004[(2)]);
var inst_27923 = cljs.core.next.call(null,inst_27903);
var inst_27881 = inst_27923;
var inst_27882 = null;
var inst_27883 = (0);
var inst_27884 = (0);
var state_28004__$1 = (function (){var statearr_28014 = state_28004;
(statearr_28014[(13)] = inst_27882);

(statearr_28014[(14)] = inst_27881);

(statearr_28014[(15)] = inst_27922);

(statearr_28014[(16)] = inst_27884);

(statearr_28014[(17)] = inst_27883);

return statearr_28014;
})();
var statearr_28015_28096 = state_28004__$1;
(statearr_28015_28096[(2)] = null);

(statearr_28015_28096[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28005 === (39))){
var state_28004__$1 = state_28004;
var statearr_28019_28097 = state_28004__$1;
(statearr_28019_28097[(2)] = null);

(statearr_28019_28097[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28005 === (4))){
var inst_27872 = (state_28004[(10)]);
var inst_27872__$1 = (state_28004[(2)]);
var inst_27873 = (inst_27872__$1 == null);
var state_28004__$1 = (function (){var statearr_28020 = state_28004;
(statearr_28020[(10)] = inst_27872__$1);

return statearr_28020;
})();
if(cljs.core.truth_(inst_27873)){
var statearr_28021_28098 = state_28004__$1;
(statearr_28021_28098[(1)] = (5));

} else {
var statearr_28022_28099 = state_28004__$1;
(statearr_28022_28099[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28005 === (15))){
var inst_27882 = (state_28004[(13)]);
var inst_27881 = (state_28004[(14)]);
var inst_27884 = (state_28004[(16)]);
var inst_27883 = (state_28004[(17)]);
var inst_27899 = (state_28004[(2)]);
var inst_27900 = (inst_27884 + (1));
var tmp28016 = inst_27882;
var tmp28017 = inst_27881;
var tmp28018 = inst_27883;
var inst_27881__$1 = tmp28017;
var inst_27882__$1 = tmp28016;
var inst_27883__$1 = tmp28018;
var inst_27884__$1 = inst_27900;
var state_28004__$1 = (function (){var statearr_28023 = state_28004;
(statearr_28023[(13)] = inst_27882__$1);

(statearr_28023[(14)] = inst_27881__$1);

(statearr_28023[(16)] = inst_27884__$1);

(statearr_28023[(17)] = inst_27883__$1);

(statearr_28023[(18)] = inst_27899);

return statearr_28023;
})();
var statearr_28024_28100 = state_28004__$1;
(statearr_28024_28100[(2)] = null);

(statearr_28024_28100[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28005 === (21))){
var inst_27926 = (state_28004[(2)]);
var state_28004__$1 = state_28004;
var statearr_28028_28101 = state_28004__$1;
(statearr_28028_28101[(2)] = inst_27926);

(statearr_28028_28101[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28005 === (31))){
var inst_27952 = (state_28004[(9)]);
var inst_27956 = done.call(null,null);
var inst_27957 = cljs.core.async.untap_STAR_.call(null,m,inst_27952);
var state_28004__$1 = (function (){var statearr_28029 = state_28004;
(statearr_28029[(19)] = inst_27956);

return statearr_28029;
})();
var statearr_28030_28102 = state_28004__$1;
(statearr_28030_28102[(2)] = inst_27957);

(statearr_28030_28102[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28005 === (32))){
var inst_27944 = (state_28004[(20)]);
var inst_27946 = (state_28004[(21)]);
var inst_27945 = (state_28004[(11)]);
var inst_27947 = (state_28004[(12)]);
var inst_27959 = (state_28004[(2)]);
var inst_27960 = (inst_27947 + (1));
var tmp28025 = inst_27944;
var tmp28026 = inst_27946;
var tmp28027 = inst_27945;
var inst_27944__$1 = tmp28025;
var inst_27945__$1 = tmp28027;
var inst_27946__$1 = tmp28026;
var inst_27947__$1 = inst_27960;
var state_28004__$1 = (function (){var statearr_28031 = state_28004;
(statearr_28031[(20)] = inst_27944__$1);

(statearr_28031[(22)] = inst_27959);

(statearr_28031[(21)] = inst_27946__$1);

(statearr_28031[(11)] = inst_27945__$1);

(statearr_28031[(12)] = inst_27947__$1);

return statearr_28031;
})();
var statearr_28032_28103 = state_28004__$1;
(statearr_28032_28103[(2)] = null);

(statearr_28032_28103[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28005 === (40))){
var inst_27972 = (state_28004[(23)]);
var inst_27976 = done.call(null,null);
var inst_27977 = cljs.core.async.untap_STAR_.call(null,m,inst_27972);
var state_28004__$1 = (function (){var statearr_28033 = state_28004;
(statearr_28033[(24)] = inst_27976);

return statearr_28033;
})();
var statearr_28034_28104 = state_28004__$1;
(statearr_28034_28104[(2)] = inst_27977);

(statearr_28034_28104[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28005 === (33))){
var inst_27963 = (state_28004[(25)]);
var inst_27965 = cljs.core.chunked_seq_QMARK_.call(null,inst_27963);
var state_28004__$1 = state_28004;
if(inst_27965){
var statearr_28035_28105 = state_28004__$1;
(statearr_28035_28105[(1)] = (36));

} else {
var statearr_28036_28106 = state_28004__$1;
(statearr_28036_28106[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28005 === (13))){
var inst_27893 = (state_28004[(26)]);
var inst_27896 = cljs.core.async.close_BANG_.call(null,inst_27893);
var state_28004__$1 = state_28004;
var statearr_28037_28107 = state_28004__$1;
(statearr_28037_28107[(2)] = inst_27896);

(statearr_28037_28107[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28005 === (22))){
var inst_27916 = (state_28004[(8)]);
var inst_27919 = cljs.core.async.close_BANG_.call(null,inst_27916);
var state_28004__$1 = state_28004;
var statearr_28038_28108 = state_28004__$1;
(statearr_28038_28108[(2)] = inst_27919);

(statearr_28038_28108[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28005 === (36))){
var inst_27963 = (state_28004[(25)]);
var inst_27967 = cljs.core.chunk_first.call(null,inst_27963);
var inst_27968 = cljs.core.chunk_rest.call(null,inst_27963);
var inst_27969 = cljs.core.count.call(null,inst_27967);
var inst_27944 = inst_27968;
var inst_27945 = inst_27967;
var inst_27946 = inst_27969;
var inst_27947 = (0);
var state_28004__$1 = (function (){var statearr_28039 = state_28004;
(statearr_28039[(20)] = inst_27944);

(statearr_28039[(21)] = inst_27946);

(statearr_28039[(11)] = inst_27945);

(statearr_28039[(12)] = inst_27947);

return statearr_28039;
})();
var statearr_28040_28109 = state_28004__$1;
(statearr_28040_28109[(2)] = null);

(statearr_28040_28109[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28005 === (41))){
var inst_27963 = (state_28004[(25)]);
var inst_27979 = (state_28004[(2)]);
var inst_27980 = cljs.core.next.call(null,inst_27963);
var inst_27944 = inst_27980;
var inst_27945 = null;
var inst_27946 = (0);
var inst_27947 = (0);
var state_28004__$1 = (function (){var statearr_28041 = state_28004;
(statearr_28041[(20)] = inst_27944);

(statearr_28041[(27)] = inst_27979);

(statearr_28041[(21)] = inst_27946);

(statearr_28041[(11)] = inst_27945);

(statearr_28041[(12)] = inst_27947);

return statearr_28041;
})();
var statearr_28042_28110 = state_28004__$1;
(statearr_28042_28110[(2)] = null);

(statearr_28042_28110[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28005 === (43))){
var state_28004__$1 = state_28004;
var statearr_28043_28111 = state_28004__$1;
(statearr_28043_28111[(2)] = null);

(statearr_28043_28111[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28005 === (29))){
var inst_27988 = (state_28004[(2)]);
var state_28004__$1 = state_28004;
var statearr_28044_28112 = state_28004__$1;
(statearr_28044_28112[(2)] = inst_27988);

(statearr_28044_28112[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28005 === (44))){
var inst_27997 = (state_28004[(2)]);
var state_28004__$1 = (function (){var statearr_28045 = state_28004;
(statearr_28045[(28)] = inst_27997);

return statearr_28045;
})();
var statearr_28046_28113 = state_28004__$1;
(statearr_28046_28113[(2)] = null);

(statearr_28046_28113[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28005 === (6))){
var inst_27936 = (state_28004[(29)]);
var inst_27935 = cljs.core.deref.call(null,cs);
var inst_27936__$1 = cljs.core.keys.call(null,inst_27935);
var inst_27937 = cljs.core.count.call(null,inst_27936__$1);
var inst_27938 = cljs.core.reset_BANG_.call(null,dctr,inst_27937);
var inst_27943 = cljs.core.seq.call(null,inst_27936__$1);
var inst_27944 = inst_27943;
var inst_27945 = null;
var inst_27946 = (0);
var inst_27947 = (0);
var state_28004__$1 = (function (){var statearr_28047 = state_28004;
(statearr_28047[(20)] = inst_27944);

(statearr_28047[(29)] = inst_27936__$1);

(statearr_28047[(21)] = inst_27946);

(statearr_28047[(30)] = inst_27938);

(statearr_28047[(11)] = inst_27945);

(statearr_28047[(12)] = inst_27947);

return statearr_28047;
})();
var statearr_28048_28114 = state_28004__$1;
(statearr_28048_28114[(2)] = null);

(statearr_28048_28114[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28005 === (28))){
var inst_27944 = (state_28004[(20)]);
var inst_27963 = (state_28004[(25)]);
var inst_27963__$1 = cljs.core.seq.call(null,inst_27944);
var state_28004__$1 = (function (){var statearr_28049 = state_28004;
(statearr_28049[(25)] = inst_27963__$1);

return statearr_28049;
})();
if(inst_27963__$1){
var statearr_28050_28115 = state_28004__$1;
(statearr_28050_28115[(1)] = (33));

} else {
var statearr_28051_28116 = state_28004__$1;
(statearr_28051_28116[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28005 === (25))){
var inst_27946 = (state_28004[(21)]);
var inst_27947 = (state_28004[(12)]);
var inst_27949 = (inst_27947 < inst_27946);
var inst_27950 = inst_27949;
var state_28004__$1 = state_28004;
if(cljs.core.truth_(inst_27950)){
var statearr_28052_28117 = state_28004__$1;
(statearr_28052_28117[(1)] = (27));

} else {
var statearr_28053_28118 = state_28004__$1;
(statearr_28053_28118[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28005 === (34))){
var state_28004__$1 = state_28004;
var statearr_28054_28119 = state_28004__$1;
(statearr_28054_28119[(2)] = null);

(statearr_28054_28119[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28005 === (17))){
var state_28004__$1 = state_28004;
var statearr_28055_28120 = state_28004__$1;
(statearr_28055_28120[(2)] = null);

(statearr_28055_28120[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28005 === (3))){
var inst_28002 = (state_28004[(2)]);
var state_28004__$1 = state_28004;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28004__$1,inst_28002);
} else {
if((state_val_28005 === (12))){
var inst_27931 = (state_28004[(2)]);
var state_28004__$1 = state_28004;
var statearr_28056_28121 = state_28004__$1;
(statearr_28056_28121[(2)] = inst_27931);

(statearr_28056_28121[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28005 === (2))){
var state_28004__$1 = state_28004;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28004__$1,(4),ch);
} else {
if((state_val_28005 === (23))){
var state_28004__$1 = state_28004;
var statearr_28057_28122 = state_28004__$1;
(statearr_28057_28122[(2)] = null);

(statearr_28057_28122[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28005 === (35))){
var inst_27986 = (state_28004[(2)]);
var state_28004__$1 = state_28004;
var statearr_28058_28123 = state_28004__$1;
(statearr_28058_28123[(2)] = inst_27986);

(statearr_28058_28123[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28005 === (19))){
var inst_27903 = (state_28004[(7)]);
var inst_27907 = cljs.core.chunk_first.call(null,inst_27903);
var inst_27908 = cljs.core.chunk_rest.call(null,inst_27903);
var inst_27909 = cljs.core.count.call(null,inst_27907);
var inst_27881 = inst_27908;
var inst_27882 = inst_27907;
var inst_27883 = inst_27909;
var inst_27884 = (0);
var state_28004__$1 = (function (){var statearr_28059 = state_28004;
(statearr_28059[(13)] = inst_27882);

(statearr_28059[(14)] = inst_27881);

(statearr_28059[(16)] = inst_27884);

(statearr_28059[(17)] = inst_27883);

return statearr_28059;
})();
var statearr_28060_28124 = state_28004__$1;
(statearr_28060_28124[(2)] = null);

(statearr_28060_28124[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28005 === (11))){
var inst_27881 = (state_28004[(14)]);
var inst_27903 = (state_28004[(7)]);
var inst_27903__$1 = cljs.core.seq.call(null,inst_27881);
var state_28004__$1 = (function (){var statearr_28061 = state_28004;
(statearr_28061[(7)] = inst_27903__$1);

return statearr_28061;
})();
if(inst_27903__$1){
var statearr_28062_28125 = state_28004__$1;
(statearr_28062_28125[(1)] = (16));

} else {
var statearr_28063_28126 = state_28004__$1;
(statearr_28063_28126[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28005 === (9))){
var inst_27933 = (state_28004[(2)]);
var state_28004__$1 = state_28004;
var statearr_28064_28127 = state_28004__$1;
(statearr_28064_28127[(2)] = inst_27933);

(statearr_28064_28127[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28005 === (5))){
var inst_27879 = cljs.core.deref.call(null,cs);
var inst_27880 = cljs.core.seq.call(null,inst_27879);
var inst_27881 = inst_27880;
var inst_27882 = null;
var inst_27883 = (0);
var inst_27884 = (0);
var state_28004__$1 = (function (){var statearr_28065 = state_28004;
(statearr_28065[(13)] = inst_27882);

(statearr_28065[(14)] = inst_27881);

(statearr_28065[(16)] = inst_27884);

(statearr_28065[(17)] = inst_27883);

return statearr_28065;
})();
var statearr_28066_28128 = state_28004__$1;
(statearr_28066_28128[(2)] = null);

(statearr_28066_28128[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28005 === (14))){
var state_28004__$1 = state_28004;
var statearr_28067_28129 = state_28004__$1;
(statearr_28067_28129[(2)] = null);

(statearr_28067_28129[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28005 === (45))){
var inst_27994 = (state_28004[(2)]);
var state_28004__$1 = state_28004;
var statearr_28068_28130 = state_28004__$1;
(statearr_28068_28130[(2)] = inst_27994);

(statearr_28068_28130[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28005 === (26))){
var inst_27936 = (state_28004[(29)]);
var inst_27990 = (state_28004[(2)]);
var inst_27991 = cljs.core.seq.call(null,inst_27936);
var state_28004__$1 = (function (){var statearr_28069 = state_28004;
(statearr_28069[(31)] = inst_27990);

return statearr_28069;
})();
if(inst_27991){
var statearr_28070_28131 = state_28004__$1;
(statearr_28070_28131[(1)] = (42));

} else {
var statearr_28071_28132 = state_28004__$1;
(statearr_28071_28132[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28005 === (16))){
var inst_27903 = (state_28004[(7)]);
var inst_27905 = cljs.core.chunked_seq_QMARK_.call(null,inst_27903);
var state_28004__$1 = state_28004;
if(inst_27905){
var statearr_28072_28133 = state_28004__$1;
(statearr_28072_28133[(1)] = (19));

} else {
var statearr_28073_28134 = state_28004__$1;
(statearr_28073_28134[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28005 === (38))){
var inst_27983 = (state_28004[(2)]);
var state_28004__$1 = state_28004;
var statearr_28074_28135 = state_28004__$1;
(statearr_28074_28135[(2)] = inst_27983);

(statearr_28074_28135[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28005 === (30))){
var state_28004__$1 = state_28004;
var statearr_28075_28136 = state_28004__$1;
(statearr_28075_28136[(2)] = null);

(statearr_28075_28136[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28005 === (10))){
var inst_27882 = (state_28004[(13)]);
var inst_27884 = (state_28004[(16)]);
var inst_27892 = cljs.core._nth.call(null,inst_27882,inst_27884);
var inst_27893 = cljs.core.nth.call(null,inst_27892,(0),null);
var inst_27894 = cljs.core.nth.call(null,inst_27892,(1),null);
var state_28004__$1 = (function (){var statearr_28076 = state_28004;
(statearr_28076[(26)] = inst_27893);

return statearr_28076;
})();
if(cljs.core.truth_(inst_27894)){
var statearr_28077_28137 = state_28004__$1;
(statearr_28077_28137[(1)] = (13));

} else {
var statearr_28078_28138 = state_28004__$1;
(statearr_28078_28138[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28005 === (18))){
var inst_27929 = (state_28004[(2)]);
var state_28004__$1 = state_28004;
var statearr_28079_28139 = state_28004__$1;
(statearr_28079_28139[(2)] = inst_27929);

(statearr_28079_28139[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28005 === (42))){
var state_28004__$1 = state_28004;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28004__$1,(45),dchan);
} else {
if((state_val_28005 === (37))){
var inst_27972 = (state_28004[(23)]);
var inst_27872 = (state_28004[(10)]);
var inst_27963 = (state_28004[(25)]);
var inst_27972__$1 = cljs.core.first.call(null,inst_27963);
var inst_27973 = cljs.core.async.put_BANG_.call(null,inst_27972__$1,inst_27872,done);
var state_28004__$1 = (function (){var statearr_28080 = state_28004;
(statearr_28080[(23)] = inst_27972__$1);

return statearr_28080;
})();
if(cljs.core.truth_(inst_27973)){
var statearr_28081_28140 = state_28004__$1;
(statearr_28081_28140[(1)] = (39));

} else {
var statearr_28082_28141 = state_28004__$1;
(statearr_28082_28141[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28005 === (8))){
var inst_27884 = (state_28004[(16)]);
var inst_27883 = (state_28004[(17)]);
var inst_27886 = (inst_27884 < inst_27883);
var inst_27887 = inst_27886;
var state_28004__$1 = state_28004;
if(cljs.core.truth_(inst_27887)){
var statearr_28083_28142 = state_28004__$1;
(statearr_28083_28142[(1)] = (10));

} else {
var statearr_28084_28143 = state_28004__$1;
(statearr_28084_28143[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__27173__auto__ = null;
var cljs$core$async$mult_$_state_machine__27173__auto____0 = (function (){
var statearr_28085 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28085[(0)] = cljs$core$async$mult_$_state_machine__27173__auto__);

(statearr_28085[(1)] = (1));

return statearr_28085;
});
var cljs$core$async$mult_$_state_machine__27173__auto____1 = (function (state_28004){
while(true){
var ret_value__27174__auto__ = (function (){try{while(true){
var result__27175__auto__ = switch__27172__auto__.call(null,state_28004);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27175__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27175__auto__;
}
break;
}
}catch (e28086){if((e28086 instanceof Object)){
var ex__27176__auto__ = e28086;
var statearr_28087_28144 = state_28004;
(statearr_28087_28144[(5)] = ex__27176__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28004);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28086;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27174__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28145 = state_28004;
state_28004 = G__28145;
continue;
} else {
return ret_value__27174__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__27173__auto__ = function(state_28004){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__27173__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__27173__auto____1.call(this,state_28004);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__27173__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__27173__auto____0;
cljs$core$async$mult_$_state_machine__27173__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__27173__auto____1;
return cljs$core$async$mult_$_state_machine__27173__auto__;
})()
})();
var state__27269__auto__ = (function (){var statearr_28088 = f__27268__auto__.call(null);
(statearr_28088[(6)] = c__27267__auto___28089);

return statearr_28088;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27269__auto__);
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
var G__28147 = arguments.length;
switch (G__28147) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_28149 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_28149.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_28150 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_28150.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_28151 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_28151.call(null,m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_28152 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_28152.call(null,m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_28153 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_28153.call(null,m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___28164 = arguments.length;
var i__4737__auto___28165 = (0);
while(true){
if((i__4737__auto___28165 < len__4736__auto___28164)){
args__4742__auto__.push((arguments[i__4737__auto___28165]));

var G__28166 = (i__4737__auto___28165 + (1));
i__4737__auto___28165 = G__28166;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__28158){
var map__28159 = p__28158;
var map__28159__$1 = (((((!((map__28159 == null))))?(((((map__28159.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28159.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28159):map__28159);
var opts = map__28159__$1;
var statearr_28161_28167 = state;
(statearr_28161_28167[(1)] = cont_block);


var temp__5720__auto__ = cljs.core.async.do_alts.call(null,(function (val){
var statearr_28162_28168 = state;
(statearr_28162_28168[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
}),ports,opts);
if(cljs.core.truth_(temp__5720__auto__)){
var cb = temp__5720__auto__;
var statearr_28163_28169 = state;
(statearr_28163_28169[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq28154){
var G__28155 = cljs.core.first.call(null,seq28154);
var seq28154__$1 = cljs.core.next.call(null,seq28154);
var G__28156 = cljs.core.first.call(null,seq28154__$1);
var seq28154__$2 = cljs.core.next.call(null,seq28154__$1);
var G__28157 = cljs.core.first.call(null,seq28154__$2);
var seq28154__$3 = cljs.core.next.call(null,seq28154__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28155,G__28156,G__28157,seq28154__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28170 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28170 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta28171){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta28171 = meta28171;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async28170.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28172,meta28171__$1){
var self__ = this;
var _28172__$1 = this;
return (new cljs.core.async.t_cljs$core$async28170(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta28171__$1));
}));

(cljs.core.async.t_cljs$core$async28170.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28172){
var self__ = this;
var _28172__$1 = this;
return self__.meta28171;
}));

(cljs.core.async.t_cljs$core$async28170.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28170.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async28170.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28170.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async28170.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async28170.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async28170.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async28170.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async28170.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta28171","meta28171",154949277,null)], null);
}));

(cljs.core.async.t_cljs$core$async28170.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async28170.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28170");

(cljs.core.async.t_cljs$core$async28170.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async28170");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28170.
 */
cljs.core.async.__GT_t_cljs$core$async28170 = (function cljs$core$async$mix_$___GT_t_cljs$core$async28170(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta28171){
return (new cljs.core.async.t_cljs$core$async28170(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta28171));
});

}

return (new cljs.core.async.t_cljs$core$async28170(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__27267__auto___28334 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27268__auto__ = (function (){var switch__27172__auto__ = (function (state_28274){
var state_val_28275 = (state_28274[(1)]);
if((state_val_28275 === (7))){
var inst_28189 = (state_28274[(2)]);
var state_28274__$1 = state_28274;
var statearr_28276_28335 = state_28274__$1;
(statearr_28276_28335[(2)] = inst_28189);

(statearr_28276_28335[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28275 === (20))){
var inst_28201 = (state_28274[(7)]);
var state_28274__$1 = state_28274;
var statearr_28277_28336 = state_28274__$1;
(statearr_28277_28336[(2)] = inst_28201);

(statearr_28277_28336[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28275 === (27))){
var state_28274__$1 = state_28274;
var statearr_28278_28337 = state_28274__$1;
(statearr_28278_28337[(2)] = null);

(statearr_28278_28337[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28275 === (1))){
var inst_28176 = (state_28274[(8)]);
var inst_28176__$1 = calc_state.call(null);
var inst_28178 = (inst_28176__$1 == null);
var inst_28179 = cljs.core.not.call(null,inst_28178);
var state_28274__$1 = (function (){var statearr_28279 = state_28274;
(statearr_28279[(8)] = inst_28176__$1);

return statearr_28279;
})();
if(inst_28179){
var statearr_28280_28338 = state_28274__$1;
(statearr_28280_28338[(1)] = (2));

} else {
var statearr_28281_28339 = state_28274__$1;
(statearr_28281_28339[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28275 === (24))){
var inst_28234 = (state_28274[(9)]);
var inst_28225 = (state_28274[(10)]);
var inst_28248 = (state_28274[(11)]);
var inst_28248__$1 = inst_28225.call(null,inst_28234);
var state_28274__$1 = (function (){var statearr_28282 = state_28274;
(statearr_28282[(11)] = inst_28248__$1);

return statearr_28282;
})();
if(cljs.core.truth_(inst_28248__$1)){
var statearr_28283_28340 = state_28274__$1;
(statearr_28283_28340[(1)] = (29));

} else {
var statearr_28284_28341 = state_28274__$1;
(statearr_28284_28341[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28275 === (4))){
var inst_28192 = (state_28274[(2)]);
var state_28274__$1 = state_28274;
if(cljs.core.truth_(inst_28192)){
var statearr_28285_28342 = state_28274__$1;
(statearr_28285_28342[(1)] = (8));

} else {
var statearr_28286_28343 = state_28274__$1;
(statearr_28286_28343[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28275 === (15))){
var inst_28219 = (state_28274[(2)]);
var state_28274__$1 = state_28274;
if(cljs.core.truth_(inst_28219)){
var statearr_28287_28344 = state_28274__$1;
(statearr_28287_28344[(1)] = (19));

} else {
var statearr_28288_28345 = state_28274__$1;
(statearr_28288_28345[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28275 === (21))){
var inst_28224 = (state_28274[(12)]);
var inst_28224__$1 = (state_28274[(2)]);
var inst_28225 = cljs.core.get.call(null,inst_28224__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_28226 = cljs.core.get.call(null,inst_28224__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_28227 = cljs.core.get.call(null,inst_28224__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_28274__$1 = (function (){var statearr_28289 = state_28274;
(statearr_28289[(12)] = inst_28224__$1);

(statearr_28289[(10)] = inst_28225);

(statearr_28289[(13)] = inst_28226);

return statearr_28289;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_28274__$1,(22),inst_28227);
} else {
if((state_val_28275 === (31))){
var inst_28256 = (state_28274[(2)]);
var state_28274__$1 = state_28274;
if(cljs.core.truth_(inst_28256)){
var statearr_28290_28346 = state_28274__$1;
(statearr_28290_28346[(1)] = (32));

} else {
var statearr_28291_28347 = state_28274__$1;
(statearr_28291_28347[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28275 === (32))){
var inst_28233 = (state_28274[(14)]);
var state_28274__$1 = state_28274;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28274__$1,(35),out,inst_28233);
} else {
if((state_val_28275 === (33))){
var inst_28224 = (state_28274[(12)]);
var inst_28201 = inst_28224;
var state_28274__$1 = (function (){var statearr_28292 = state_28274;
(statearr_28292[(7)] = inst_28201);

return statearr_28292;
})();
var statearr_28293_28348 = state_28274__$1;
(statearr_28293_28348[(2)] = null);

(statearr_28293_28348[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28275 === (13))){
var inst_28201 = (state_28274[(7)]);
var inst_28208 = inst_28201.cljs$lang$protocol_mask$partition0$;
var inst_28209 = (inst_28208 & (64));
var inst_28210 = inst_28201.cljs$core$ISeq$;
var inst_28211 = (cljs.core.PROTOCOL_SENTINEL === inst_28210);
var inst_28212 = ((inst_28209) || (inst_28211));
var state_28274__$1 = state_28274;
if(cljs.core.truth_(inst_28212)){
var statearr_28294_28349 = state_28274__$1;
(statearr_28294_28349[(1)] = (16));

} else {
var statearr_28295_28350 = state_28274__$1;
(statearr_28295_28350[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28275 === (22))){
var inst_28234 = (state_28274[(9)]);
var inst_28233 = (state_28274[(14)]);
var inst_28232 = (state_28274[(2)]);
var inst_28233__$1 = cljs.core.nth.call(null,inst_28232,(0),null);
var inst_28234__$1 = cljs.core.nth.call(null,inst_28232,(1),null);
var inst_28235 = (inst_28233__$1 == null);
var inst_28236 = cljs.core._EQ_.call(null,inst_28234__$1,change);
var inst_28237 = ((inst_28235) || (inst_28236));
var state_28274__$1 = (function (){var statearr_28296 = state_28274;
(statearr_28296[(9)] = inst_28234__$1);

(statearr_28296[(14)] = inst_28233__$1);

return statearr_28296;
})();
if(cljs.core.truth_(inst_28237)){
var statearr_28297_28351 = state_28274__$1;
(statearr_28297_28351[(1)] = (23));

} else {
var statearr_28298_28352 = state_28274__$1;
(statearr_28298_28352[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28275 === (36))){
var inst_28224 = (state_28274[(12)]);
var inst_28201 = inst_28224;
var state_28274__$1 = (function (){var statearr_28299 = state_28274;
(statearr_28299[(7)] = inst_28201);

return statearr_28299;
})();
var statearr_28300_28353 = state_28274__$1;
(statearr_28300_28353[(2)] = null);

(statearr_28300_28353[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28275 === (29))){
var inst_28248 = (state_28274[(11)]);
var state_28274__$1 = state_28274;
var statearr_28301_28354 = state_28274__$1;
(statearr_28301_28354[(2)] = inst_28248);

(statearr_28301_28354[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28275 === (6))){
var state_28274__$1 = state_28274;
var statearr_28302_28355 = state_28274__$1;
(statearr_28302_28355[(2)] = false);

(statearr_28302_28355[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28275 === (28))){
var inst_28244 = (state_28274[(2)]);
var inst_28245 = calc_state.call(null);
var inst_28201 = inst_28245;
var state_28274__$1 = (function (){var statearr_28303 = state_28274;
(statearr_28303[(15)] = inst_28244);

(statearr_28303[(7)] = inst_28201);

return statearr_28303;
})();
var statearr_28304_28356 = state_28274__$1;
(statearr_28304_28356[(2)] = null);

(statearr_28304_28356[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28275 === (25))){
var inst_28270 = (state_28274[(2)]);
var state_28274__$1 = state_28274;
var statearr_28305_28357 = state_28274__$1;
(statearr_28305_28357[(2)] = inst_28270);

(statearr_28305_28357[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28275 === (34))){
var inst_28268 = (state_28274[(2)]);
var state_28274__$1 = state_28274;
var statearr_28306_28358 = state_28274__$1;
(statearr_28306_28358[(2)] = inst_28268);

(statearr_28306_28358[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28275 === (17))){
var state_28274__$1 = state_28274;
var statearr_28307_28359 = state_28274__$1;
(statearr_28307_28359[(2)] = false);

(statearr_28307_28359[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28275 === (3))){
var state_28274__$1 = state_28274;
var statearr_28308_28360 = state_28274__$1;
(statearr_28308_28360[(2)] = false);

(statearr_28308_28360[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28275 === (12))){
var inst_28272 = (state_28274[(2)]);
var state_28274__$1 = state_28274;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28274__$1,inst_28272);
} else {
if((state_val_28275 === (2))){
var inst_28176 = (state_28274[(8)]);
var inst_28181 = inst_28176.cljs$lang$protocol_mask$partition0$;
var inst_28182 = (inst_28181 & (64));
var inst_28183 = inst_28176.cljs$core$ISeq$;
var inst_28184 = (cljs.core.PROTOCOL_SENTINEL === inst_28183);
var inst_28185 = ((inst_28182) || (inst_28184));
var state_28274__$1 = state_28274;
if(cljs.core.truth_(inst_28185)){
var statearr_28309_28361 = state_28274__$1;
(statearr_28309_28361[(1)] = (5));

} else {
var statearr_28310_28362 = state_28274__$1;
(statearr_28310_28362[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28275 === (23))){
var inst_28233 = (state_28274[(14)]);
var inst_28239 = (inst_28233 == null);
var state_28274__$1 = state_28274;
if(cljs.core.truth_(inst_28239)){
var statearr_28311_28363 = state_28274__$1;
(statearr_28311_28363[(1)] = (26));

} else {
var statearr_28312_28364 = state_28274__$1;
(statearr_28312_28364[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28275 === (35))){
var inst_28259 = (state_28274[(2)]);
var state_28274__$1 = state_28274;
if(cljs.core.truth_(inst_28259)){
var statearr_28313_28365 = state_28274__$1;
(statearr_28313_28365[(1)] = (36));

} else {
var statearr_28314_28366 = state_28274__$1;
(statearr_28314_28366[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28275 === (19))){
var inst_28201 = (state_28274[(7)]);
var inst_28221 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28201);
var state_28274__$1 = state_28274;
var statearr_28315_28367 = state_28274__$1;
(statearr_28315_28367[(2)] = inst_28221);

(statearr_28315_28367[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28275 === (11))){
var inst_28201 = (state_28274[(7)]);
var inst_28205 = (inst_28201 == null);
var inst_28206 = cljs.core.not.call(null,inst_28205);
var state_28274__$1 = state_28274;
if(inst_28206){
var statearr_28316_28368 = state_28274__$1;
(statearr_28316_28368[(1)] = (13));

} else {
var statearr_28317_28369 = state_28274__$1;
(statearr_28317_28369[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28275 === (9))){
var inst_28176 = (state_28274[(8)]);
var state_28274__$1 = state_28274;
var statearr_28318_28370 = state_28274__$1;
(statearr_28318_28370[(2)] = inst_28176);

(statearr_28318_28370[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28275 === (5))){
var state_28274__$1 = state_28274;
var statearr_28319_28371 = state_28274__$1;
(statearr_28319_28371[(2)] = true);

(statearr_28319_28371[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28275 === (14))){
var state_28274__$1 = state_28274;
var statearr_28320_28372 = state_28274__$1;
(statearr_28320_28372[(2)] = false);

(statearr_28320_28372[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28275 === (26))){
var inst_28234 = (state_28274[(9)]);
var inst_28241 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_28234);
var state_28274__$1 = state_28274;
var statearr_28321_28373 = state_28274__$1;
(statearr_28321_28373[(2)] = inst_28241);

(statearr_28321_28373[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28275 === (16))){
var state_28274__$1 = state_28274;
var statearr_28322_28374 = state_28274__$1;
(statearr_28322_28374[(2)] = true);

(statearr_28322_28374[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28275 === (38))){
var inst_28264 = (state_28274[(2)]);
var state_28274__$1 = state_28274;
var statearr_28323_28375 = state_28274__$1;
(statearr_28323_28375[(2)] = inst_28264);

(statearr_28323_28375[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28275 === (30))){
var inst_28234 = (state_28274[(9)]);
var inst_28225 = (state_28274[(10)]);
var inst_28226 = (state_28274[(13)]);
var inst_28251 = cljs.core.empty_QMARK_.call(null,inst_28225);
var inst_28252 = inst_28226.call(null,inst_28234);
var inst_28253 = cljs.core.not.call(null,inst_28252);
var inst_28254 = ((inst_28251) && (inst_28253));
var state_28274__$1 = state_28274;
var statearr_28324_28376 = state_28274__$1;
(statearr_28324_28376[(2)] = inst_28254);

(statearr_28324_28376[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28275 === (10))){
var inst_28176 = (state_28274[(8)]);
var inst_28197 = (state_28274[(2)]);
var inst_28198 = cljs.core.get.call(null,inst_28197,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_28199 = cljs.core.get.call(null,inst_28197,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_28200 = cljs.core.get.call(null,inst_28197,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_28201 = inst_28176;
var state_28274__$1 = (function (){var statearr_28325 = state_28274;
(statearr_28325[(16)] = inst_28199);

(statearr_28325[(17)] = inst_28200);

(statearr_28325[(7)] = inst_28201);

(statearr_28325[(18)] = inst_28198);

return statearr_28325;
})();
var statearr_28326_28377 = state_28274__$1;
(statearr_28326_28377[(2)] = null);

(statearr_28326_28377[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28275 === (18))){
var inst_28216 = (state_28274[(2)]);
var state_28274__$1 = state_28274;
var statearr_28327_28378 = state_28274__$1;
(statearr_28327_28378[(2)] = inst_28216);

(statearr_28327_28378[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28275 === (37))){
var state_28274__$1 = state_28274;
var statearr_28328_28379 = state_28274__$1;
(statearr_28328_28379[(2)] = null);

(statearr_28328_28379[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28275 === (8))){
var inst_28176 = (state_28274[(8)]);
var inst_28194 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28176);
var state_28274__$1 = state_28274;
var statearr_28329_28380 = state_28274__$1;
(statearr_28329_28380[(2)] = inst_28194);

(statearr_28329_28380[(1)] = (10));


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
var cljs$core$async$mix_$_state_machine__27173__auto__ = null;
var cljs$core$async$mix_$_state_machine__27173__auto____0 = (function (){
var statearr_28330 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28330[(0)] = cljs$core$async$mix_$_state_machine__27173__auto__);

(statearr_28330[(1)] = (1));

return statearr_28330;
});
var cljs$core$async$mix_$_state_machine__27173__auto____1 = (function (state_28274){
while(true){
var ret_value__27174__auto__ = (function (){try{while(true){
var result__27175__auto__ = switch__27172__auto__.call(null,state_28274);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27175__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27175__auto__;
}
break;
}
}catch (e28331){if((e28331 instanceof Object)){
var ex__27176__auto__ = e28331;
var statearr_28332_28381 = state_28274;
(statearr_28332_28381[(5)] = ex__27176__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28274);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28331;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27174__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28382 = state_28274;
state_28274 = G__28382;
continue;
} else {
return ret_value__27174__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__27173__auto__ = function(state_28274){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__27173__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__27173__auto____1.call(this,state_28274);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__27173__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__27173__auto____0;
cljs$core$async$mix_$_state_machine__27173__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__27173__auto____1;
return cljs$core$async$mix_$_state_machine__27173__auto__;
})()
})();
var state__27269__auto__ = (function (){var statearr_28333 = f__27268__auto__.call(null);
(statearr_28333[(6)] = c__27267__auto___28334);

return statearr_28333;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27269__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_28385 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_28385.call(null,p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_28386 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_28386.call(null,p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_28387 = (function() {
var G__28388 = null;
var G__28388__1 = (function (p){
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
var G__28388__2 = (function (p,v){
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
G__28388 = function(p,v){
switch(arguments.length){
case 1:
return G__28388__1.call(this,p);
case 2:
return G__28388__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__28388.cljs$core$IFn$_invoke$arity$1 = G__28388__1;
G__28388.cljs$core$IFn$_invoke$arity$2 = G__28388__2;
return G__28388;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__28384 = arguments.length;
switch (G__28384) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_28387.call(null,p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_28387.call(null,p,v);
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
var G__28392 = arguments.length;
switch (G__28392) {
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
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,(function (p1__28390_SHARP_){
if(cljs.core.truth_(p1__28390_SHARP_.call(null,topic))){
return p1__28390_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__28390_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28393 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28393 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta28394){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta28394 = meta28394;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async28393.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28395,meta28394__$1){
var self__ = this;
var _28395__$1 = this;
return (new cljs.core.async.t_cljs$core$async28393(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta28394__$1));
}));

(cljs.core.async.t_cljs$core$async28393.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28395){
var self__ = this;
var _28395__$1 = this;
return self__.meta28394;
}));

(cljs.core.async.t_cljs$core$async28393.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28393.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async28393.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28393.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async28393.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async28393.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async28393.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async28393.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta28394","meta28394",-609032296,null)], null);
}));

(cljs.core.async.t_cljs$core$async28393.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async28393.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28393");

(cljs.core.async.t_cljs$core$async28393.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async28393");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28393.
 */
cljs.core.async.__GT_t_cljs$core$async28393 = (function cljs$core$async$__GT_t_cljs$core$async28393(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta28394){
return (new cljs.core.async.t_cljs$core$async28393(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta28394));
});

}

return (new cljs.core.async.t_cljs$core$async28393(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__27267__auto___28513 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27268__auto__ = (function (){var switch__27172__auto__ = (function (state_28467){
var state_val_28468 = (state_28467[(1)]);
if((state_val_28468 === (7))){
var inst_28463 = (state_28467[(2)]);
var state_28467__$1 = state_28467;
var statearr_28469_28514 = state_28467__$1;
(statearr_28469_28514[(2)] = inst_28463);

(statearr_28469_28514[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28468 === (20))){
var state_28467__$1 = state_28467;
var statearr_28470_28515 = state_28467__$1;
(statearr_28470_28515[(2)] = null);

(statearr_28470_28515[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28468 === (1))){
var state_28467__$1 = state_28467;
var statearr_28471_28516 = state_28467__$1;
(statearr_28471_28516[(2)] = null);

(statearr_28471_28516[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28468 === (24))){
var inst_28446 = (state_28467[(7)]);
var inst_28455 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_28446);
var state_28467__$1 = state_28467;
var statearr_28472_28517 = state_28467__$1;
(statearr_28472_28517[(2)] = inst_28455);

(statearr_28472_28517[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28468 === (4))){
var inst_28398 = (state_28467[(8)]);
var inst_28398__$1 = (state_28467[(2)]);
var inst_28399 = (inst_28398__$1 == null);
var state_28467__$1 = (function (){var statearr_28473 = state_28467;
(statearr_28473[(8)] = inst_28398__$1);

return statearr_28473;
})();
if(cljs.core.truth_(inst_28399)){
var statearr_28474_28518 = state_28467__$1;
(statearr_28474_28518[(1)] = (5));

} else {
var statearr_28475_28519 = state_28467__$1;
(statearr_28475_28519[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28468 === (15))){
var inst_28440 = (state_28467[(2)]);
var state_28467__$1 = state_28467;
var statearr_28476_28520 = state_28467__$1;
(statearr_28476_28520[(2)] = inst_28440);

(statearr_28476_28520[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28468 === (21))){
var inst_28460 = (state_28467[(2)]);
var state_28467__$1 = (function (){var statearr_28477 = state_28467;
(statearr_28477[(9)] = inst_28460);

return statearr_28477;
})();
var statearr_28478_28521 = state_28467__$1;
(statearr_28478_28521[(2)] = null);

(statearr_28478_28521[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28468 === (13))){
var inst_28422 = (state_28467[(10)]);
var inst_28424 = cljs.core.chunked_seq_QMARK_.call(null,inst_28422);
var state_28467__$1 = state_28467;
if(inst_28424){
var statearr_28479_28522 = state_28467__$1;
(statearr_28479_28522[(1)] = (16));

} else {
var statearr_28480_28523 = state_28467__$1;
(statearr_28480_28523[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28468 === (22))){
var inst_28452 = (state_28467[(2)]);
var state_28467__$1 = state_28467;
if(cljs.core.truth_(inst_28452)){
var statearr_28481_28524 = state_28467__$1;
(statearr_28481_28524[(1)] = (23));

} else {
var statearr_28482_28525 = state_28467__$1;
(statearr_28482_28525[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28468 === (6))){
var inst_28398 = (state_28467[(8)]);
var inst_28446 = (state_28467[(7)]);
var inst_28448 = (state_28467[(11)]);
var inst_28446__$1 = topic_fn.call(null,inst_28398);
var inst_28447 = cljs.core.deref.call(null,mults);
var inst_28448__$1 = cljs.core.get.call(null,inst_28447,inst_28446__$1);
var state_28467__$1 = (function (){var statearr_28483 = state_28467;
(statearr_28483[(7)] = inst_28446__$1);

(statearr_28483[(11)] = inst_28448__$1);

return statearr_28483;
})();
if(cljs.core.truth_(inst_28448__$1)){
var statearr_28484_28526 = state_28467__$1;
(statearr_28484_28526[(1)] = (19));

} else {
var statearr_28485_28527 = state_28467__$1;
(statearr_28485_28527[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28468 === (25))){
var inst_28457 = (state_28467[(2)]);
var state_28467__$1 = state_28467;
var statearr_28486_28528 = state_28467__$1;
(statearr_28486_28528[(2)] = inst_28457);

(statearr_28486_28528[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28468 === (17))){
var inst_28422 = (state_28467[(10)]);
var inst_28431 = cljs.core.first.call(null,inst_28422);
var inst_28432 = cljs.core.async.muxch_STAR_.call(null,inst_28431);
var inst_28433 = cljs.core.async.close_BANG_.call(null,inst_28432);
var inst_28434 = cljs.core.next.call(null,inst_28422);
var inst_28408 = inst_28434;
var inst_28409 = null;
var inst_28410 = (0);
var inst_28411 = (0);
var state_28467__$1 = (function (){var statearr_28487 = state_28467;
(statearr_28487[(12)] = inst_28409);

(statearr_28487[(13)] = inst_28433);

(statearr_28487[(14)] = inst_28411);

(statearr_28487[(15)] = inst_28408);

(statearr_28487[(16)] = inst_28410);

return statearr_28487;
})();
var statearr_28488_28529 = state_28467__$1;
(statearr_28488_28529[(2)] = null);

(statearr_28488_28529[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28468 === (3))){
var inst_28465 = (state_28467[(2)]);
var state_28467__$1 = state_28467;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28467__$1,inst_28465);
} else {
if((state_val_28468 === (12))){
var inst_28442 = (state_28467[(2)]);
var state_28467__$1 = state_28467;
var statearr_28489_28530 = state_28467__$1;
(statearr_28489_28530[(2)] = inst_28442);

(statearr_28489_28530[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28468 === (2))){
var state_28467__$1 = state_28467;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28467__$1,(4),ch);
} else {
if((state_val_28468 === (23))){
var state_28467__$1 = state_28467;
var statearr_28490_28531 = state_28467__$1;
(statearr_28490_28531[(2)] = null);

(statearr_28490_28531[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28468 === (19))){
var inst_28398 = (state_28467[(8)]);
var inst_28448 = (state_28467[(11)]);
var inst_28450 = cljs.core.async.muxch_STAR_.call(null,inst_28448);
var state_28467__$1 = state_28467;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28467__$1,(22),inst_28450,inst_28398);
} else {
if((state_val_28468 === (11))){
var inst_28422 = (state_28467[(10)]);
var inst_28408 = (state_28467[(15)]);
var inst_28422__$1 = cljs.core.seq.call(null,inst_28408);
var state_28467__$1 = (function (){var statearr_28491 = state_28467;
(statearr_28491[(10)] = inst_28422__$1);

return statearr_28491;
})();
if(inst_28422__$1){
var statearr_28492_28532 = state_28467__$1;
(statearr_28492_28532[(1)] = (13));

} else {
var statearr_28493_28533 = state_28467__$1;
(statearr_28493_28533[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28468 === (9))){
var inst_28444 = (state_28467[(2)]);
var state_28467__$1 = state_28467;
var statearr_28494_28534 = state_28467__$1;
(statearr_28494_28534[(2)] = inst_28444);

(statearr_28494_28534[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28468 === (5))){
var inst_28405 = cljs.core.deref.call(null,mults);
var inst_28406 = cljs.core.vals.call(null,inst_28405);
var inst_28407 = cljs.core.seq.call(null,inst_28406);
var inst_28408 = inst_28407;
var inst_28409 = null;
var inst_28410 = (0);
var inst_28411 = (0);
var state_28467__$1 = (function (){var statearr_28495 = state_28467;
(statearr_28495[(12)] = inst_28409);

(statearr_28495[(14)] = inst_28411);

(statearr_28495[(15)] = inst_28408);

(statearr_28495[(16)] = inst_28410);

return statearr_28495;
})();
var statearr_28496_28535 = state_28467__$1;
(statearr_28496_28535[(2)] = null);

(statearr_28496_28535[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28468 === (14))){
var state_28467__$1 = state_28467;
var statearr_28500_28536 = state_28467__$1;
(statearr_28500_28536[(2)] = null);

(statearr_28500_28536[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28468 === (16))){
var inst_28422 = (state_28467[(10)]);
var inst_28426 = cljs.core.chunk_first.call(null,inst_28422);
var inst_28427 = cljs.core.chunk_rest.call(null,inst_28422);
var inst_28428 = cljs.core.count.call(null,inst_28426);
var inst_28408 = inst_28427;
var inst_28409 = inst_28426;
var inst_28410 = inst_28428;
var inst_28411 = (0);
var state_28467__$1 = (function (){var statearr_28501 = state_28467;
(statearr_28501[(12)] = inst_28409);

(statearr_28501[(14)] = inst_28411);

(statearr_28501[(15)] = inst_28408);

(statearr_28501[(16)] = inst_28410);

return statearr_28501;
})();
var statearr_28502_28537 = state_28467__$1;
(statearr_28502_28537[(2)] = null);

(statearr_28502_28537[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28468 === (10))){
var inst_28409 = (state_28467[(12)]);
var inst_28411 = (state_28467[(14)]);
var inst_28408 = (state_28467[(15)]);
var inst_28410 = (state_28467[(16)]);
var inst_28416 = cljs.core._nth.call(null,inst_28409,inst_28411);
var inst_28417 = cljs.core.async.muxch_STAR_.call(null,inst_28416);
var inst_28418 = cljs.core.async.close_BANG_.call(null,inst_28417);
var inst_28419 = (inst_28411 + (1));
var tmp28497 = inst_28409;
var tmp28498 = inst_28408;
var tmp28499 = inst_28410;
var inst_28408__$1 = tmp28498;
var inst_28409__$1 = tmp28497;
var inst_28410__$1 = tmp28499;
var inst_28411__$1 = inst_28419;
var state_28467__$1 = (function (){var statearr_28503 = state_28467;
(statearr_28503[(12)] = inst_28409__$1);

(statearr_28503[(17)] = inst_28418);

(statearr_28503[(14)] = inst_28411__$1);

(statearr_28503[(15)] = inst_28408__$1);

(statearr_28503[(16)] = inst_28410__$1);

return statearr_28503;
})();
var statearr_28504_28538 = state_28467__$1;
(statearr_28504_28538[(2)] = null);

(statearr_28504_28538[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28468 === (18))){
var inst_28437 = (state_28467[(2)]);
var state_28467__$1 = state_28467;
var statearr_28505_28539 = state_28467__$1;
(statearr_28505_28539[(2)] = inst_28437);

(statearr_28505_28539[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28468 === (8))){
var inst_28411 = (state_28467[(14)]);
var inst_28410 = (state_28467[(16)]);
var inst_28413 = (inst_28411 < inst_28410);
var inst_28414 = inst_28413;
var state_28467__$1 = state_28467;
if(cljs.core.truth_(inst_28414)){
var statearr_28506_28540 = state_28467__$1;
(statearr_28506_28540[(1)] = (10));

} else {
var statearr_28507_28541 = state_28467__$1;
(statearr_28507_28541[(1)] = (11));

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
var cljs$core$async$state_machine__27173__auto__ = null;
var cljs$core$async$state_machine__27173__auto____0 = (function (){
var statearr_28508 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28508[(0)] = cljs$core$async$state_machine__27173__auto__);

(statearr_28508[(1)] = (1));

return statearr_28508;
});
var cljs$core$async$state_machine__27173__auto____1 = (function (state_28467){
while(true){
var ret_value__27174__auto__ = (function (){try{while(true){
var result__27175__auto__ = switch__27172__auto__.call(null,state_28467);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27175__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27175__auto__;
}
break;
}
}catch (e28509){if((e28509 instanceof Object)){
var ex__27176__auto__ = e28509;
var statearr_28510_28542 = state_28467;
(statearr_28510_28542[(5)] = ex__27176__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28467);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28509;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27174__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28543 = state_28467;
state_28467 = G__28543;
continue;
} else {
return ret_value__27174__auto__;
}
break;
}
});
cljs$core$async$state_machine__27173__auto__ = function(state_28467){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27173__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27173__auto____1.call(this,state_28467);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27173__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27173__auto____0;
cljs$core$async$state_machine__27173__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27173__auto____1;
return cljs$core$async$state_machine__27173__auto__;
})()
})();
var state__27269__auto__ = (function (){var statearr_28511 = f__27268__auto__.call(null);
(statearr_28511[(6)] = c__27267__auto___28513);

return statearr_28511;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27269__auto__);
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
var G__28545 = arguments.length;
switch (G__28545) {
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
var G__28548 = arguments.length;
switch (G__28548) {
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
var G__28551 = arguments.length;
switch (G__28551) {
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
var c__27267__auto___28618 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27268__auto__ = (function (){var switch__27172__auto__ = (function (state_28590){
var state_val_28591 = (state_28590[(1)]);
if((state_val_28591 === (7))){
var state_28590__$1 = state_28590;
var statearr_28592_28619 = state_28590__$1;
(statearr_28592_28619[(2)] = null);

(statearr_28592_28619[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28591 === (1))){
var state_28590__$1 = state_28590;
var statearr_28593_28620 = state_28590__$1;
(statearr_28593_28620[(2)] = null);

(statearr_28593_28620[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28591 === (4))){
var inst_28554 = (state_28590[(7)]);
var inst_28556 = (inst_28554 < cnt);
var state_28590__$1 = state_28590;
if(cljs.core.truth_(inst_28556)){
var statearr_28594_28621 = state_28590__$1;
(statearr_28594_28621[(1)] = (6));

} else {
var statearr_28595_28622 = state_28590__$1;
(statearr_28595_28622[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28591 === (15))){
var inst_28586 = (state_28590[(2)]);
var state_28590__$1 = state_28590;
var statearr_28596_28623 = state_28590__$1;
(statearr_28596_28623[(2)] = inst_28586);

(statearr_28596_28623[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28591 === (13))){
var inst_28579 = cljs.core.async.close_BANG_.call(null,out);
var state_28590__$1 = state_28590;
var statearr_28597_28624 = state_28590__$1;
(statearr_28597_28624[(2)] = inst_28579);

(statearr_28597_28624[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28591 === (6))){
var state_28590__$1 = state_28590;
var statearr_28598_28625 = state_28590__$1;
(statearr_28598_28625[(2)] = null);

(statearr_28598_28625[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28591 === (3))){
var inst_28588 = (state_28590[(2)]);
var state_28590__$1 = state_28590;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28590__$1,inst_28588);
} else {
if((state_val_28591 === (12))){
var inst_28576 = (state_28590[(8)]);
var inst_28576__$1 = (state_28590[(2)]);
var inst_28577 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_28576__$1);
var state_28590__$1 = (function (){var statearr_28599 = state_28590;
(statearr_28599[(8)] = inst_28576__$1);

return statearr_28599;
})();
if(cljs.core.truth_(inst_28577)){
var statearr_28600_28626 = state_28590__$1;
(statearr_28600_28626[(1)] = (13));

} else {
var statearr_28601_28627 = state_28590__$1;
(statearr_28601_28627[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28591 === (2))){
var inst_28553 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_28554 = (0);
var state_28590__$1 = (function (){var statearr_28602 = state_28590;
(statearr_28602[(7)] = inst_28554);

(statearr_28602[(9)] = inst_28553);

return statearr_28602;
})();
var statearr_28603_28628 = state_28590__$1;
(statearr_28603_28628[(2)] = null);

(statearr_28603_28628[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28591 === (11))){
var inst_28554 = (state_28590[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_28590,(10),Object,null,(9));
var inst_28563 = chs__$1.call(null,inst_28554);
var inst_28564 = done.call(null,inst_28554);
var inst_28565 = cljs.core.async.take_BANG_.call(null,inst_28563,inst_28564);
var state_28590__$1 = state_28590;
var statearr_28604_28629 = state_28590__$1;
(statearr_28604_28629[(2)] = inst_28565);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28590__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28591 === (9))){
var inst_28554 = (state_28590[(7)]);
var inst_28567 = (state_28590[(2)]);
var inst_28568 = (inst_28554 + (1));
var inst_28554__$1 = inst_28568;
var state_28590__$1 = (function (){var statearr_28605 = state_28590;
(statearr_28605[(7)] = inst_28554__$1);

(statearr_28605[(10)] = inst_28567);

return statearr_28605;
})();
var statearr_28606_28630 = state_28590__$1;
(statearr_28606_28630[(2)] = null);

(statearr_28606_28630[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28591 === (5))){
var inst_28574 = (state_28590[(2)]);
var state_28590__$1 = (function (){var statearr_28607 = state_28590;
(statearr_28607[(11)] = inst_28574);

return statearr_28607;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28590__$1,(12),dchan);
} else {
if((state_val_28591 === (14))){
var inst_28576 = (state_28590[(8)]);
var inst_28581 = cljs.core.apply.call(null,f,inst_28576);
var state_28590__$1 = state_28590;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28590__$1,(16),out,inst_28581);
} else {
if((state_val_28591 === (16))){
var inst_28583 = (state_28590[(2)]);
var state_28590__$1 = (function (){var statearr_28608 = state_28590;
(statearr_28608[(12)] = inst_28583);

return statearr_28608;
})();
var statearr_28609_28631 = state_28590__$1;
(statearr_28609_28631[(2)] = null);

(statearr_28609_28631[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28591 === (10))){
var inst_28558 = (state_28590[(2)]);
var inst_28559 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_28590__$1 = (function (){var statearr_28610 = state_28590;
(statearr_28610[(13)] = inst_28558);

return statearr_28610;
})();
var statearr_28611_28632 = state_28590__$1;
(statearr_28611_28632[(2)] = inst_28559);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28590__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28591 === (8))){
var inst_28572 = (state_28590[(2)]);
var state_28590__$1 = state_28590;
var statearr_28612_28633 = state_28590__$1;
(statearr_28612_28633[(2)] = inst_28572);

(statearr_28612_28633[(1)] = (5));


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
var cljs$core$async$state_machine__27173__auto__ = null;
var cljs$core$async$state_machine__27173__auto____0 = (function (){
var statearr_28613 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28613[(0)] = cljs$core$async$state_machine__27173__auto__);

(statearr_28613[(1)] = (1));

return statearr_28613;
});
var cljs$core$async$state_machine__27173__auto____1 = (function (state_28590){
while(true){
var ret_value__27174__auto__ = (function (){try{while(true){
var result__27175__auto__ = switch__27172__auto__.call(null,state_28590);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27175__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27175__auto__;
}
break;
}
}catch (e28614){if((e28614 instanceof Object)){
var ex__27176__auto__ = e28614;
var statearr_28615_28634 = state_28590;
(statearr_28615_28634[(5)] = ex__27176__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28590);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28614;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27174__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28635 = state_28590;
state_28590 = G__28635;
continue;
} else {
return ret_value__27174__auto__;
}
break;
}
});
cljs$core$async$state_machine__27173__auto__ = function(state_28590){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27173__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27173__auto____1.call(this,state_28590);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27173__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27173__auto____0;
cljs$core$async$state_machine__27173__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27173__auto____1;
return cljs$core$async$state_machine__27173__auto__;
})()
})();
var state__27269__auto__ = (function (){var statearr_28616 = f__27268__auto__.call(null);
(statearr_28616[(6)] = c__27267__auto___28618);

return statearr_28616;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27269__auto__);
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
var G__28638 = arguments.length;
switch (G__28638) {
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
var c__27267__auto___28692 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27268__auto__ = (function (){var switch__27172__auto__ = (function (state_28670){
var state_val_28671 = (state_28670[(1)]);
if((state_val_28671 === (7))){
var inst_28650 = (state_28670[(7)]);
var inst_28649 = (state_28670[(8)]);
var inst_28649__$1 = (state_28670[(2)]);
var inst_28650__$1 = cljs.core.nth.call(null,inst_28649__$1,(0),null);
var inst_28651 = cljs.core.nth.call(null,inst_28649__$1,(1),null);
var inst_28652 = (inst_28650__$1 == null);
var state_28670__$1 = (function (){var statearr_28672 = state_28670;
(statearr_28672[(7)] = inst_28650__$1);

(statearr_28672[(8)] = inst_28649__$1);

(statearr_28672[(9)] = inst_28651);

return statearr_28672;
})();
if(cljs.core.truth_(inst_28652)){
var statearr_28673_28693 = state_28670__$1;
(statearr_28673_28693[(1)] = (8));

} else {
var statearr_28674_28694 = state_28670__$1;
(statearr_28674_28694[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28671 === (1))){
var inst_28639 = cljs.core.vec.call(null,chs);
var inst_28640 = inst_28639;
var state_28670__$1 = (function (){var statearr_28675 = state_28670;
(statearr_28675[(10)] = inst_28640);

return statearr_28675;
})();
var statearr_28676_28695 = state_28670__$1;
(statearr_28676_28695[(2)] = null);

(statearr_28676_28695[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28671 === (4))){
var inst_28640 = (state_28670[(10)]);
var state_28670__$1 = state_28670;
return cljs.core.async.ioc_alts_BANG_.call(null,state_28670__$1,(7),inst_28640);
} else {
if((state_val_28671 === (6))){
var inst_28666 = (state_28670[(2)]);
var state_28670__$1 = state_28670;
var statearr_28677_28696 = state_28670__$1;
(statearr_28677_28696[(2)] = inst_28666);

(statearr_28677_28696[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28671 === (3))){
var inst_28668 = (state_28670[(2)]);
var state_28670__$1 = state_28670;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28670__$1,inst_28668);
} else {
if((state_val_28671 === (2))){
var inst_28640 = (state_28670[(10)]);
var inst_28642 = cljs.core.count.call(null,inst_28640);
var inst_28643 = (inst_28642 > (0));
var state_28670__$1 = state_28670;
if(cljs.core.truth_(inst_28643)){
var statearr_28679_28697 = state_28670__$1;
(statearr_28679_28697[(1)] = (4));

} else {
var statearr_28680_28698 = state_28670__$1;
(statearr_28680_28698[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28671 === (11))){
var inst_28640 = (state_28670[(10)]);
var inst_28659 = (state_28670[(2)]);
var tmp28678 = inst_28640;
var inst_28640__$1 = tmp28678;
var state_28670__$1 = (function (){var statearr_28681 = state_28670;
(statearr_28681[(11)] = inst_28659);

(statearr_28681[(10)] = inst_28640__$1);

return statearr_28681;
})();
var statearr_28682_28699 = state_28670__$1;
(statearr_28682_28699[(2)] = null);

(statearr_28682_28699[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28671 === (9))){
var inst_28650 = (state_28670[(7)]);
var state_28670__$1 = state_28670;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28670__$1,(11),out,inst_28650);
} else {
if((state_val_28671 === (5))){
var inst_28664 = cljs.core.async.close_BANG_.call(null,out);
var state_28670__$1 = state_28670;
var statearr_28683_28700 = state_28670__$1;
(statearr_28683_28700[(2)] = inst_28664);

(statearr_28683_28700[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28671 === (10))){
var inst_28662 = (state_28670[(2)]);
var state_28670__$1 = state_28670;
var statearr_28684_28701 = state_28670__$1;
(statearr_28684_28701[(2)] = inst_28662);

(statearr_28684_28701[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28671 === (8))){
var inst_28640 = (state_28670[(10)]);
var inst_28650 = (state_28670[(7)]);
var inst_28649 = (state_28670[(8)]);
var inst_28651 = (state_28670[(9)]);
var inst_28654 = (function (){var cs = inst_28640;
var vec__28645 = inst_28649;
var v = inst_28650;
var c = inst_28651;
return (function (p1__28636_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__28636_SHARP_);
});
})();
var inst_28655 = cljs.core.filterv.call(null,inst_28654,inst_28640);
var inst_28640__$1 = inst_28655;
var state_28670__$1 = (function (){var statearr_28685 = state_28670;
(statearr_28685[(10)] = inst_28640__$1);

return statearr_28685;
})();
var statearr_28686_28702 = state_28670__$1;
(statearr_28686_28702[(2)] = null);

(statearr_28686_28702[(1)] = (2));


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
var cljs$core$async$state_machine__27173__auto__ = null;
var cljs$core$async$state_machine__27173__auto____0 = (function (){
var statearr_28687 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28687[(0)] = cljs$core$async$state_machine__27173__auto__);

(statearr_28687[(1)] = (1));

return statearr_28687;
});
var cljs$core$async$state_machine__27173__auto____1 = (function (state_28670){
while(true){
var ret_value__27174__auto__ = (function (){try{while(true){
var result__27175__auto__ = switch__27172__auto__.call(null,state_28670);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27175__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27175__auto__;
}
break;
}
}catch (e28688){if((e28688 instanceof Object)){
var ex__27176__auto__ = e28688;
var statearr_28689_28703 = state_28670;
(statearr_28689_28703[(5)] = ex__27176__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28670);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28688;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27174__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28704 = state_28670;
state_28670 = G__28704;
continue;
} else {
return ret_value__27174__auto__;
}
break;
}
});
cljs$core$async$state_machine__27173__auto__ = function(state_28670){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27173__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27173__auto____1.call(this,state_28670);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27173__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27173__auto____0;
cljs$core$async$state_machine__27173__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27173__auto____1;
return cljs$core$async$state_machine__27173__auto__;
})()
})();
var state__27269__auto__ = (function (){var statearr_28690 = f__27268__auto__.call(null);
(statearr_28690[(6)] = c__27267__auto___28692);

return statearr_28690;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27269__auto__);
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
var G__28706 = arguments.length;
switch (G__28706) {
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
var c__27267__auto___28751 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27268__auto__ = (function (){var switch__27172__auto__ = (function (state_28730){
var state_val_28731 = (state_28730[(1)]);
if((state_val_28731 === (7))){
var inst_28712 = (state_28730[(7)]);
var inst_28712__$1 = (state_28730[(2)]);
var inst_28713 = (inst_28712__$1 == null);
var inst_28714 = cljs.core.not.call(null,inst_28713);
var state_28730__$1 = (function (){var statearr_28732 = state_28730;
(statearr_28732[(7)] = inst_28712__$1);

return statearr_28732;
})();
if(inst_28714){
var statearr_28733_28752 = state_28730__$1;
(statearr_28733_28752[(1)] = (8));

} else {
var statearr_28734_28753 = state_28730__$1;
(statearr_28734_28753[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28731 === (1))){
var inst_28707 = (0);
var state_28730__$1 = (function (){var statearr_28735 = state_28730;
(statearr_28735[(8)] = inst_28707);

return statearr_28735;
})();
var statearr_28736_28754 = state_28730__$1;
(statearr_28736_28754[(2)] = null);

(statearr_28736_28754[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28731 === (4))){
var state_28730__$1 = state_28730;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28730__$1,(7),ch);
} else {
if((state_val_28731 === (6))){
var inst_28725 = (state_28730[(2)]);
var state_28730__$1 = state_28730;
var statearr_28737_28755 = state_28730__$1;
(statearr_28737_28755[(2)] = inst_28725);

(statearr_28737_28755[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28731 === (3))){
var inst_28727 = (state_28730[(2)]);
var inst_28728 = cljs.core.async.close_BANG_.call(null,out);
var state_28730__$1 = (function (){var statearr_28738 = state_28730;
(statearr_28738[(9)] = inst_28727);

return statearr_28738;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28730__$1,inst_28728);
} else {
if((state_val_28731 === (2))){
var inst_28707 = (state_28730[(8)]);
var inst_28709 = (inst_28707 < n);
var state_28730__$1 = state_28730;
if(cljs.core.truth_(inst_28709)){
var statearr_28739_28756 = state_28730__$1;
(statearr_28739_28756[(1)] = (4));

} else {
var statearr_28740_28757 = state_28730__$1;
(statearr_28740_28757[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28731 === (11))){
var inst_28707 = (state_28730[(8)]);
var inst_28717 = (state_28730[(2)]);
var inst_28718 = (inst_28707 + (1));
var inst_28707__$1 = inst_28718;
var state_28730__$1 = (function (){var statearr_28741 = state_28730;
(statearr_28741[(8)] = inst_28707__$1);

(statearr_28741[(10)] = inst_28717);

return statearr_28741;
})();
var statearr_28742_28758 = state_28730__$1;
(statearr_28742_28758[(2)] = null);

(statearr_28742_28758[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28731 === (9))){
var state_28730__$1 = state_28730;
var statearr_28743_28759 = state_28730__$1;
(statearr_28743_28759[(2)] = null);

(statearr_28743_28759[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28731 === (5))){
var state_28730__$1 = state_28730;
var statearr_28744_28760 = state_28730__$1;
(statearr_28744_28760[(2)] = null);

(statearr_28744_28760[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28731 === (10))){
var inst_28722 = (state_28730[(2)]);
var state_28730__$1 = state_28730;
var statearr_28745_28761 = state_28730__$1;
(statearr_28745_28761[(2)] = inst_28722);

(statearr_28745_28761[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28731 === (8))){
var inst_28712 = (state_28730[(7)]);
var state_28730__$1 = state_28730;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28730__$1,(11),out,inst_28712);
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
var cljs$core$async$state_machine__27173__auto__ = null;
var cljs$core$async$state_machine__27173__auto____0 = (function (){
var statearr_28746 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28746[(0)] = cljs$core$async$state_machine__27173__auto__);

(statearr_28746[(1)] = (1));

return statearr_28746;
});
var cljs$core$async$state_machine__27173__auto____1 = (function (state_28730){
while(true){
var ret_value__27174__auto__ = (function (){try{while(true){
var result__27175__auto__ = switch__27172__auto__.call(null,state_28730);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27175__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27175__auto__;
}
break;
}
}catch (e28747){if((e28747 instanceof Object)){
var ex__27176__auto__ = e28747;
var statearr_28748_28762 = state_28730;
(statearr_28748_28762[(5)] = ex__27176__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28730);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28747;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27174__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28763 = state_28730;
state_28730 = G__28763;
continue;
} else {
return ret_value__27174__auto__;
}
break;
}
});
cljs$core$async$state_machine__27173__auto__ = function(state_28730){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27173__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27173__auto____1.call(this,state_28730);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27173__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27173__auto____0;
cljs$core$async$state_machine__27173__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27173__auto____1;
return cljs$core$async$state_machine__27173__auto__;
})()
})();
var state__27269__auto__ = (function (){var statearr_28749 = f__27268__auto__.call(null);
(statearr_28749[(6)] = c__27267__auto___28751);

return statearr_28749;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27269__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28765 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28765 = (function (f,ch,meta28766){
this.f = f;
this.ch = ch;
this.meta28766 = meta28766;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async28765.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28767,meta28766__$1){
var self__ = this;
var _28767__$1 = this;
return (new cljs.core.async.t_cljs$core$async28765(self__.f,self__.ch,meta28766__$1));
}));

(cljs.core.async.t_cljs$core$async28765.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28767){
var self__ = this;
var _28767__$1 = this;
return self__.meta28766;
}));

(cljs.core.async.t_cljs$core$async28765.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28765.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async28765.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async28765.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28765.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28768 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28768 = (function (f,ch,meta28766,_,fn1,meta28769){
this.f = f;
this.ch = ch;
this.meta28766 = meta28766;
this._ = _;
this.fn1 = fn1;
this.meta28769 = meta28769;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async28768.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28770,meta28769__$1){
var self__ = this;
var _28770__$1 = this;
return (new cljs.core.async.t_cljs$core$async28768(self__.f,self__.ch,self__.meta28766,self__._,self__.fn1,meta28769__$1));
}));

(cljs.core.async.t_cljs$core$async28768.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28770){
var self__ = this;
var _28770__$1 = this;
return self__.meta28769;
}));

(cljs.core.async.t_cljs$core$async28768.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28768.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
}));

(cljs.core.async.t_cljs$core$async28768.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async28768.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return (function (p1__28764_SHARP_){
return f1.call(null,(((p1__28764_SHARP_ == null))?null:self__.f.call(null,p1__28764_SHARP_)));
});
}));

(cljs.core.async.t_cljs$core$async28768.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28766","meta28766",-1626433090,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async28765","cljs.core.async/t_cljs$core$async28765",-2024423296,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta28769","meta28769",-1257535857,null)], null);
}));

(cljs.core.async.t_cljs$core$async28768.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async28768.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28768");

(cljs.core.async.t_cljs$core$async28768.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async28768");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28768.
 */
cljs.core.async.__GT_t_cljs$core$async28768 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async28768(f__$1,ch__$1,meta28766__$1,___$2,fn1__$1,meta28769){
return (new cljs.core.async.t_cljs$core$async28768(f__$1,ch__$1,meta28766__$1,___$2,fn1__$1,meta28769));
});

}

return (new cljs.core.async.t_cljs$core$async28768(self__.f,self__.ch,self__.meta28766,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

(cljs.core.async.t_cljs$core$async28765.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28765.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async28765.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28766","meta28766",-1626433090,null)], null);
}));

(cljs.core.async.t_cljs$core$async28765.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async28765.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28765");

(cljs.core.async.t_cljs$core$async28765.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async28765");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28765.
 */
cljs.core.async.__GT_t_cljs$core$async28765 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async28765(f__$1,ch__$1,meta28766){
return (new cljs.core.async.t_cljs$core$async28765(f__$1,ch__$1,meta28766));
});

}

return (new cljs.core.async.t_cljs$core$async28765(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28771 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28771 = (function (f,ch,meta28772){
this.f = f;
this.ch = ch;
this.meta28772 = meta28772;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async28771.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28773,meta28772__$1){
var self__ = this;
var _28773__$1 = this;
return (new cljs.core.async.t_cljs$core$async28771(self__.f,self__.ch,meta28772__$1));
}));

(cljs.core.async.t_cljs$core$async28771.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28773){
var self__ = this;
var _28773__$1 = this;
return self__.meta28772;
}));

(cljs.core.async.t_cljs$core$async28771.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28771.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async28771.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28771.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async28771.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28771.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
}));

(cljs.core.async.t_cljs$core$async28771.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28772","meta28772",-1195463578,null)], null);
}));

(cljs.core.async.t_cljs$core$async28771.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async28771.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28771");

(cljs.core.async.t_cljs$core$async28771.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async28771");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28771.
 */
cljs.core.async.__GT_t_cljs$core$async28771 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async28771(f__$1,ch__$1,meta28772){
return (new cljs.core.async.t_cljs$core$async28771(f__$1,ch__$1,meta28772));
});

}

return (new cljs.core.async.t_cljs$core$async28771(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28774 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28774 = (function (p,ch,meta28775){
this.p = p;
this.ch = ch;
this.meta28775 = meta28775;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async28774.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28776,meta28775__$1){
var self__ = this;
var _28776__$1 = this;
return (new cljs.core.async.t_cljs$core$async28774(self__.p,self__.ch,meta28775__$1));
}));

(cljs.core.async.t_cljs$core$async28774.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28776){
var self__ = this;
var _28776__$1 = this;
return self__.meta28775;
}));

(cljs.core.async.t_cljs$core$async28774.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28774.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async28774.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async28774.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28774.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async28774.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28774.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async28774.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28775","meta28775",-962542064,null)], null);
}));

(cljs.core.async.t_cljs$core$async28774.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async28774.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28774");

(cljs.core.async.t_cljs$core$async28774.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async28774");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28774.
 */
cljs.core.async.__GT_t_cljs$core$async28774 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async28774(p__$1,ch__$1,meta28775){
return (new cljs.core.async.t_cljs$core$async28774(p__$1,ch__$1,meta28775));
});

}

return (new cljs.core.async.t_cljs$core$async28774(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__28778 = arguments.length;
switch (G__28778) {
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
var c__27267__auto___28818 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27268__auto__ = (function (){var switch__27172__auto__ = (function (state_28799){
var state_val_28800 = (state_28799[(1)]);
if((state_val_28800 === (7))){
var inst_28795 = (state_28799[(2)]);
var state_28799__$1 = state_28799;
var statearr_28801_28819 = state_28799__$1;
(statearr_28801_28819[(2)] = inst_28795);

(statearr_28801_28819[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28800 === (1))){
var state_28799__$1 = state_28799;
var statearr_28802_28820 = state_28799__$1;
(statearr_28802_28820[(2)] = null);

(statearr_28802_28820[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28800 === (4))){
var inst_28781 = (state_28799[(7)]);
var inst_28781__$1 = (state_28799[(2)]);
var inst_28782 = (inst_28781__$1 == null);
var state_28799__$1 = (function (){var statearr_28803 = state_28799;
(statearr_28803[(7)] = inst_28781__$1);

return statearr_28803;
})();
if(cljs.core.truth_(inst_28782)){
var statearr_28804_28821 = state_28799__$1;
(statearr_28804_28821[(1)] = (5));

} else {
var statearr_28805_28822 = state_28799__$1;
(statearr_28805_28822[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28800 === (6))){
var inst_28781 = (state_28799[(7)]);
var inst_28786 = p.call(null,inst_28781);
var state_28799__$1 = state_28799;
if(cljs.core.truth_(inst_28786)){
var statearr_28806_28823 = state_28799__$1;
(statearr_28806_28823[(1)] = (8));

} else {
var statearr_28807_28824 = state_28799__$1;
(statearr_28807_28824[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28800 === (3))){
var inst_28797 = (state_28799[(2)]);
var state_28799__$1 = state_28799;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28799__$1,inst_28797);
} else {
if((state_val_28800 === (2))){
var state_28799__$1 = state_28799;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28799__$1,(4),ch);
} else {
if((state_val_28800 === (11))){
var inst_28789 = (state_28799[(2)]);
var state_28799__$1 = state_28799;
var statearr_28808_28825 = state_28799__$1;
(statearr_28808_28825[(2)] = inst_28789);

(statearr_28808_28825[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28800 === (9))){
var state_28799__$1 = state_28799;
var statearr_28809_28826 = state_28799__$1;
(statearr_28809_28826[(2)] = null);

(statearr_28809_28826[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28800 === (5))){
var inst_28784 = cljs.core.async.close_BANG_.call(null,out);
var state_28799__$1 = state_28799;
var statearr_28810_28827 = state_28799__$1;
(statearr_28810_28827[(2)] = inst_28784);

(statearr_28810_28827[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28800 === (10))){
var inst_28792 = (state_28799[(2)]);
var state_28799__$1 = (function (){var statearr_28811 = state_28799;
(statearr_28811[(8)] = inst_28792);

return statearr_28811;
})();
var statearr_28812_28828 = state_28799__$1;
(statearr_28812_28828[(2)] = null);

(statearr_28812_28828[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28800 === (8))){
var inst_28781 = (state_28799[(7)]);
var state_28799__$1 = state_28799;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28799__$1,(11),out,inst_28781);
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
var cljs$core$async$state_machine__27173__auto__ = null;
var cljs$core$async$state_machine__27173__auto____0 = (function (){
var statearr_28813 = [null,null,null,null,null,null,null,null,null];
(statearr_28813[(0)] = cljs$core$async$state_machine__27173__auto__);

(statearr_28813[(1)] = (1));

return statearr_28813;
});
var cljs$core$async$state_machine__27173__auto____1 = (function (state_28799){
while(true){
var ret_value__27174__auto__ = (function (){try{while(true){
var result__27175__auto__ = switch__27172__auto__.call(null,state_28799);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27175__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27175__auto__;
}
break;
}
}catch (e28814){if((e28814 instanceof Object)){
var ex__27176__auto__ = e28814;
var statearr_28815_28829 = state_28799;
(statearr_28815_28829[(5)] = ex__27176__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28799);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28814;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27174__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28830 = state_28799;
state_28799 = G__28830;
continue;
} else {
return ret_value__27174__auto__;
}
break;
}
});
cljs$core$async$state_machine__27173__auto__ = function(state_28799){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27173__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27173__auto____1.call(this,state_28799);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27173__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27173__auto____0;
cljs$core$async$state_machine__27173__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27173__auto____1;
return cljs$core$async$state_machine__27173__auto__;
})()
})();
var state__27269__auto__ = (function (){var statearr_28816 = f__27268__auto__.call(null);
(statearr_28816[(6)] = c__27267__auto___28818);

return statearr_28816;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27269__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__28832 = arguments.length;
switch (G__28832) {
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
var c__27267__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27268__auto__ = (function (){var switch__27172__auto__ = (function (state_28895){
var state_val_28896 = (state_28895[(1)]);
if((state_val_28896 === (7))){
var inst_28891 = (state_28895[(2)]);
var state_28895__$1 = state_28895;
var statearr_28897_28935 = state_28895__$1;
(statearr_28897_28935[(2)] = inst_28891);

(statearr_28897_28935[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28896 === (20))){
var inst_28861 = (state_28895[(7)]);
var inst_28872 = (state_28895[(2)]);
var inst_28873 = cljs.core.next.call(null,inst_28861);
var inst_28847 = inst_28873;
var inst_28848 = null;
var inst_28849 = (0);
var inst_28850 = (0);
var state_28895__$1 = (function (){var statearr_28898 = state_28895;
(statearr_28898[(8)] = inst_28872);

(statearr_28898[(9)] = inst_28849);

(statearr_28898[(10)] = inst_28848);

(statearr_28898[(11)] = inst_28850);

(statearr_28898[(12)] = inst_28847);

return statearr_28898;
})();
var statearr_28899_28936 = state_28895__$1;
(statearr_28899_28936[(2)] = null);

(statearr_28899_28936[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28896 === (1))){
var state_28895__$1 = state_28895;
var statearr_28900_28937 = state_28895__$1;
(statearr_28900_28937[(2)] = null);

(statearr_28900_28937[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28896 === (4))){
var inst_28836 = (state_28895[(13)]);
var inst_28836__$1 = (state_28895[(2)]);
var inst_28837 = (inst_28836__$1 == null);
var state_28895__$1 = (function (){var statearr_28901 = state_28895;
(statearr_28901[(13)] = inst_28836__$1);

return statearr_28901;
})();
if(cljs.core.truth_(inst_28837)){
var statearr_28902_28938 = state_28895__$1;
(statearr_28902_28938[(1)] = (5));

} else {
var statearr_28903_28939 = state_28895__$1;
(statearr_28903_28939[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28896 === (15))){
var state_28895__$1 = state_28895;
var statearr_28907_28940 = state_28895__$1;
(statearr_28907_28940[(2)] = null);

(statearr_28907_28940[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28896 === (21))){
var state_28895__$1 = state_28895;
var statearr_28908_28941 = state_28895__$1;
(statearr_28908_28941[(2)] = null);

(statearr_28908_28941[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28896 === (13))){
var inst_28849 = (state_28895[(9)]);
var inst_28848 = (state_28895[(10)]);
var inst_28850 = (state_28895[(11)]);
var inst_28847 = (state_28895[(12)]);
var inst_28857 = (state_28895[(2)]);
var inst_28858 = (inst_28850 + (1));
var tmp28904 = inst_28849;
var tmp28905 = inst_28848;
var tmp28906 = inst_28847;
var inst_28847__$1 = tmp28906;
var inst_28848__$1 = tmp28905;
var inst_28849__$1 = tmp28904;
var inst_28850__$1 = inst_28858;
var state_28895__$1 = (function (){var statearr_28909 = state_28895;
(statearr_28909[(9)] = inst_28849__$1);

(statearr_28909[(10)] = inst_28848__$1);

(statearr_28909[(11)] = inst_28850__$1);

(statearr_28909[(14)] = inst_28857);

(statearr_28909[(12)] = inst_28847__$1);

return statearr_28909;
})();
var statearr_28910_28942 = state_28895__$1;
(statearr_28910_28942[(2)] = null);

(statearr_28910_28942[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28896 === (22))){
var state_28895__$1 = state_28895;
var statearr_28911_28943 = state_28895__$1;
(statearr_28911_28943[(2)] = null);

(statearr_28911_28943[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28896 === (6))){
var inst_28836 = (state_28895[(13)]);
var inst_28845 = f.call(null,inst_28836);
var inst_28846 = cljs.core.seq.call(null,inst_28845);
var inst_28847 = inst_28846;
var inst_28848 = null;
var inst_28849 = (0);
var inst_28850 = (0);
var state_28895__$1 = (function (){var statearr_28912 = state_28895;
(statearr_28912[(9)] = inst_28849);

(statearr_28912[(10)] = inst_28848);

(statearr_28912[(11)] = inst_28850);

(statearr_28912[(12)] = inst_28847);

return statearr_28912;
})();
var statearr_28913_28944 = state_28895__$1;
(statearr_28913_28944[(2)] = null);

(statearr_28913_28944[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28896 === (17))){
var inst_28861 = (state_28895[(7)]);
var inst_28865 = cljs.core.chunk_first.call(null,inst_28861);
var inst_28866 = cljs.core.chunk_rest.call(null,inst_28861);
var inst_28867 = cljs.core.count.call(null,inst_28865);
var inst_28847 = inst_28866;
var inst_28848 = inst_28865;
var inst_28849 = inst_28867;
var inst_28850 = (0);
var state_28895__$1 = (function (){var statearr_28914 = state_28895;
(statearr_28914[(9)] = inst_28849);

(statearr_28914[(10)] = inst_28848);

(statearr_28914[(11)] = inst_28850);

(statearr_28914[(12)] = inst_28847);

return statearr_28914;
})();
var statearr_28915_28945 = state_28895__$1;
(statearr_28915_28945[(2)] = null);

(statearr_28915_28945[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28896 === (3))){
var inst_28893 = (state_28895[(2)]);
var state_28895__$1 = state_28895;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28895__$1,inst_28893);
} else {
if((state_val_28896 === (12))){
var inst_28881 = (state_28895[(2)]);
var state_28895__$1 = state_28895;
var statearr_28916_28946 = state_28895__$1;
(statearr_28916_28946[(2)] = inst_28881);

(statearr_28916_28946[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28896 === (2))){
var state_28895__$1 = state_28895;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28895__$1,(4),in$);
} else {
if((state_val_28896 === (23))){
var inst_28889 = (state_28895[(2)]);
var state_28895__$1 = state_28895;
var statearr_28917_28947 = state_28895__$1;
(statearr_28917_28947[(2)] = inst_28889);

(statearr_28917_28947[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28896 === (19))){
var inst_28876 = (state_28895[(2)]);
var state_28895__$1 = state_28895;
var statearr_28918_28948 = state_28895__$1;
(statearr_28918_28948[(2)] = inst_28876);

(statearr_28918_28948[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28896 === (11))){
var inst_28847 = (state_28895[(12)]);
var inst_28861 = (state_28895[(7)]);
var inst_28861__$1 = cljs.core.seq.call(null,inst_28847);
var state_28895__$1 = (function (){var statearr_28919 = state_28895;
(statearr_28919[(7)] = inst_28861__$1);

return statearr_28919;
})();
if(inst_28861__$1){
var statearr_28920_28949 = state_28895__$1;
(statearr_28920_28949[(1)] = (14));

} else {
var statearr_28921_28950 = state_28895__$1;
(statearr_28921_28950[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28896 === (9))){
var inst_28883 = (state_28895[(2)]);
var inst_28884 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_28895__$1 = (function (){var statearr_28922 = state_28895;
(statearr_28922[(15)] = inst_28883);

return statearr_28922;
})();
if(cljs.core.truth_(inst_28884)){
var statearr_28923_28951 = state_28895__$1;
(statearr_28923_28951[(1)] = (21));

} else {
var statearr_28924_28952 = state_28895__$1;
(statearr_28924_28952[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28896 === (5))){
var inst_28839 = cljs.core.async.close_BANG_.call(null,out);
var state_28895__$1 = state_28895;
var statearr_28925_28953 = state_28895__$1;
(statearr_28925_28953[(2)] = inst_28839);

(statearr_28925_28953[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28896 === (14))){
var inst_28861 = (state_28895[(7)]);
var inst_28863 = cljs.core.chunked_seq_QMARK_.call(null,inst_28861);
var state_28895__$1 = state_28895;
if(inst_28863){
var statearr_28926_28954 = state_28895__$1;
(statearr_28926_28954[(1)] = (17));

} else {
var statearr_28927_28955 = state_28895__$1;
(statearr_28927_28955[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28896 === (16))){
var inst_28879 = (state_28895[(2)]);
var state_28895__$1 = state_28895;
var statearr_28928_28956 = state_28895__$1;
(statearr_28928_28956[(2)] = inst_28879);

(statearr_28928_28956[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28896 === (10))){
var inst_28848 = (state_28895[(10)]);
var inst_28850 = (state_28895[(11)]);
var inst_28855 = cljs.core._nth.call(null,inst_28848,inst_28850);
var state_28895__$1 = state_28895;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28895__$1,(13),out,inst_28855);
} else {
if((state_val_28896 === (18))){
var inst_28861 = (state_28895[(7)]);
var inst_28870 = cljs.core.first.call(null,inst_28861);
var state_28895__$1 = state_28895;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28895__$1,(20),out,inst_28870);
} else {
if((state_val_28896 === (8))){
var inst_28849 = (state_28895[(9)]);
var inst_28850 = (state_28895[(11)]);
var inst_28852 = (inst_28850 < inst_28849);
var inst_28853 = inst_28852;
var state_28895__$1 = state_28895;
if(cljs.core.truth_(inst_28853)){
var statearr_28929_28957 = state_28895__$1;
(statearr_28929_28957[(1)] = (10));

} else {
var statearr_28930_28958 = state_28895__$1;
(statearr_28930_28958[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__27173__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__27173__auto____0 = (function (){
var statearr_28931 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28931[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__27173__auto__);

(statearr_28931[(1)] = (1));

return statearr_28931;
});
var cljs$core$async$mapcat_STAR__$_state_machine__27173__auto____1 = (function (state_28895){
while(true){
var ret_value__27174__auto__ = (function (){try{while(true){
var result__27175__auto__ = switch__27172__auto__.call(null,state_28895);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27175__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27175__auto__;
}
break;
}
}catch (e28932){if((e28932 instanceof Object)){
var ex__27176__auto__ = e28932;
var statearr_28933_28959 = state_28895;
(statearr_28933_28959[(5)] = ex__27176__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28895);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28932;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27174__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28960 = state_28895;
state_28895 = G__28960;
continue;
} else {
return ret_value__27174__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__27173__auto__ = function(state_28895){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__27173__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__27173__auto____1.call(this,state_28895);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__27173__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__27173__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__27173__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__27173__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__27173__auto__;
})()
})();
var state__27269__auto__ = (function (){var statearr_28934 = f__27268__auto__.call(null);
(statearr_28934[(6)] = c__27267__auto__);

return statearr_28934;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27269__auto__);
}));

return c__27267__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__28962 = arguments.length;
switch (G__28962) {
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
var G__28965 = arguments.length;
switch (G__28965) {
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
var G__28968 = arguments.length;
switch (G__28968) {
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
var c__27267__auto___29015 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27268__auto__ = (function (){var switch__27172__auto__ = (function (state_28992){
var state_val_28993 = (state_28992[(1)]);
if((state_val_28993 === (7))){
var inst_28987 = (state_28992[(2)]);
var state_28992__$1 = state_28992;
var statearr_28994_29016 = state_28992__$1;
(statearr_28994_29016[(2)] = inst_28987);

(statearr_28994_29016[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28993 === (1))){
var inst_28969 = null;
var state_28992__$1 = (function (){var statearr_28995 = state_28992;
(statearr_28995[(7)] = inst_28969);

return statearr_28995;
})();
var statearr_28996_29017 = state_28992__$1;
(statearr_28996_29017[(2)] = null);

(statearr_28996_29017[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28993 === (4))){
var inst_28972 = (state_28992[(8)]);
var inst_28972__$1 = (state_28992[(2)]);
var inst_28973 = (inst_28972__$1 == null);
var inst_28974 = cljs.core.not.call(null,inst_28973);
var state_28992__$1 = (function (){var statearr_28997 = state_28992;
(statearr_28997[(8)] = inst_28972__$1);

return statearr_28997;
})();
if(inst_28974){
var statearr_28998_29018 = state_28992__$1;
(statearr_28998_29018[(1)] = (5));

} else {
var statearr_28999_29019 = state_28992__$1;
(statearr_28999_29019[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28993 === (6))){
var state_28992__$1 = state_28992;
var statearr_29000_29020 = state_28992__$1;
(statearr_29000_29020[(2)] = null);

(statearr_29000_29020[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28993 === (3))){
var inst_28989 = (state_28992[(2)]);
var inst_28990 = cljs.core.async.close_BANG_.call(null,out);
var state_28992__$1 = (function (){var statearr_29001 = state_28992;
(statearr_29001[(9)] = inst_28989);

return statearr_29001;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28992__$1,inst_28990);
} else {
if((state_val_28993 === (2))){
var state_28992__$1 = state_28992;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28992__$1,(4),ch);
} else {
if((state_val_28993 === (11))){
var inst_28972 = (state_28992[(8)]);
var inst_28981 = (state_28992[(2)]);
var inst_28969 = inst_28972;
var state_28992__$1 = (function (){var statearr_29002 = state_28992;
(statearr_29002[(7)] = inst_28969);

(statearr_29002[(10)] = inst_28981);

return statearr_29002;
})();
var statearr_29003_29021 = state_28992__$1;
(statearr_29003_29021[(2)] = null);

(statearr_29003_29021[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28993 === (9))){
var inst_28972 = (state_28992[(8)]);
var state_28992__$1 = state_28992;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28992__$1,(11),out,inst_28972);
} else {
if((state_val_28993 === (5))){
var inst_28969 = (state_28992[(7)]);
var inst_28972 = (state_28992[(8)]);
var inst_28976 = cljs.core._EQ_.call(null,inst_28972,inst_28969);
var state_28992__$1 = state_28992;
if(inst_28976){
var statearr_29005_29022 = state_28992__$1;
(statearr_29005_29022[(1)] = (8));

} else {
var statearr_29006_29023 = state_28992__$1;
(statearr_29006_29023[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28993 === (10))){
var inst_28984 = (state_28992[(2)]);
var state_28992__$1 = state_28992;
var statearr_29007_29024 = state_28992__$1;
(statearr_29007_29024[(2)] = inst_28984);

(statearr_29007_29024[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28993 === (8))){
var inst_28969 = (state_28992[(7)]);
var tmp29004 = inst_28969;
var inst_28969__$1 = tmp29004;
var state_28992__$1 = (function (){var statearr_29008 = state_28992;
(statearr_29008[(7)] = inst_28969__$1);

return statearr_29008;
})();
var statearr_29009_29025 = state_28992__$1;
(statearr_29009_29025[(2)] = null);

(statearr_29009_29025[(1)] = (2));


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
var cljs$core$async$state_machine__27173__auto__ = null;
var cljs$core$async$state_machine__27173__auto____0 = (function (){
var statearr_29010 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29010[(0)] = cljs$core$async$state_machine__27173__auto__);

(statearr_29010[(1)] = (1));

return statearr_29010;
});
var cljs$core$async$state_machine__27173__auto____1 = (function (state_28992){
while(true){
var ret_value__27174__auto__ = (function (){try{while(true){
var result__27175__auto__ = switch__27172__auto__.call(null,state_28992);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27175__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27175__auto__;
}
break;
}
}catch (e29011){if((e29011 instanceof Object)){
var ex__27176__auto__ = e29011;
var statearr_29012_29026 = state_28992;
(statearr_29012_29026[(5)] = ex__27176__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28992);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29011;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27174__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29027 = state_28992;
state_28992 = G__29027;
continue;
} else {
return ret_value__27174__auto__;
}
break;
}
});
cljs$core$async$state_machine__27173__auto__ = function(state_28992){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27173__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27173__auto____1.call(this,state_28992);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27173__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27173__auto____0;
cljs$core$async$state_machine__27173__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27173__auto____1;
return cljs$core$async$state_machine__27173__auto__;
})()
})();
var state__27269__auto__ = (function (){var statearr_29013 = f__27268__auto__.call(null);
(statearr_29013[(6)] = c__27267__auto___29015);

return statearr_29013;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27269__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__29029 = arguments.length;
switch (G__29029) {
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
var c__27267__auto___29095 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27268__auto__ = (function (){var switch__27172__auto__ = (function (state_29067){
var state_val_29068 = (state_29067[(1)]);
if((state_val_29068 === (7))){
var inst_29063 = (state_29067[(2)]);
var state_29067__$1 = state_29067;
var statearr_29069_29096 = state_29067__$1;
(statearr_29069_29096[(2)] = inst_29063);

(statearr_29069_29096[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29068 === (1))){
var inst_29030 = (new Array(n));
var inst_29031 = inst_29030;
var inst_29032 = (0);
var state_29067__$1 = (function (){var statearr_29070 = state_29067;
(statearr_29070[(7)] = inst_29031);

(statearr_29070[(8)] = inst_29032);

return statearr_29070;
})();
var statearr_29071_29097 = state_29067__$1;
(statearr_29071_29097[(2)] = null);

(statearr_29071_29097[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29068 === (4))){
var inst_29035 = (state_29067[(9)]);
var inst_29035__$1 = (state_29067[(2)]);
var inst_29036 = (inst_29035__$1 == null);
var inst_29037 = cljs.core.not.call(null,inst_29036);
var state_29067__$1 = (function (){var statearr_29072 = state_29067;
(statearr_29072[(9)] = inst_29035__$1);

return statearr_29072;
})();
if(inst_29037){
var statearr_29073_29098 = state_29067__$1;
(statearr_29073_29098[(1)] = (5));

} else {
var statearr_29074_29099 = state_29067__$1;
(statearr_29074_29099[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29068 === (15))){
var inst_29057 = (state_29067[(2)]);
var state_29067__$1 = state_29067;
var statearr_29075_29100 = state_29067__$1;
(statearr_29075_29100[(2)] = inst_29057);

(statearr_29075_29100[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29068 === (13))){
var state_29067__$1 = state_29067;
var statearr_29076_29101 = state_29067__$1;
(statearr_29076_29101[(2)] = null);

(statearr_29076_29101[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29068 === (6))){
var inst_29032 = (state_29067[(8)]);
var inst_29053 = (inst_29032 > (0));
var state_29067__$1 = state_29067;
if(cljs.core.truth_(inst_29053)){
var statearr_29077_29102 = state_29067__$1;
(statearr_29077_29102[(1)] = (12));

} else {
var statearr_29078_29103 = state_29067__$1;
(statearr_29078_29103[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29068 === (3))){
var inst_29065 = (state_29067[(2)]);
var state_29067__$1 = state_29067;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29067__$1,inst_29065);
} else {
if((state_val_29068 === (12))){
var inst_29031 = (state_29067[(7)]);
var inst_29055 = cljs.core.vec.call(null,inst_29031);
var state_29067__$1 = state_29067;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29067__$1,(15),out,inst_29055);
} else {
if((state_val_29068 === (2))){
var state_29067__$1 = state_29067;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29067__$1,(4),ch);
} else {
if((state_val_29068 === (11))){
var inst_29047 = (state_29067[(2)]);
var inst_29048 = (new Array(n));
var inst_29031 = inst_29048;
var inst_29032 = (0);
var state_29067__$1 = (function (){var statearr_29079 = state_29067;
(statearr_29079[(7)] = inst_29031);

(statearr_29079[(10)] = inst_29047);

(statearr_29079[(8)] = inst_29032);

return statearr_29079;
})();
var statearr_29080_29104 = state_29067__$1;
(statearr_29080_29104[(2)] = null);

(statearr_29080_29104[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29068 === (9))){
var inst_29031 = (state_29067[(7)]);
var inst_29045 = cljs.core.vec.call(null,inst_29031);
var state_29067__$1 = state_29067;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29067__$1,(11),out,inst_29045);
} else {
if((state_val_29068 === (5))){
var inst_29035 = (state_29067[(9)]);
var inst_29031 = (state_29067[(7)]);
var inst_29040 = (state_29067[(11)]);
var inst_29032 = (state_29067[(8)]);
var inst_29039 = (inst_29031[inst_29032] = inst_29035);
var inst_29040__$1 = (inst_29032 + (1));
var inst_29041 = (inst_29040__$1 < n);
var state_29067__$1 = (function (){var statearr_29081 = state_29067;
(statearr_29081[(12)] = inst_29039);

(statearr_29081[(11)] = inst_29040__$1);

return statearr_29081;
})();
if(cljs.core.truth_(inst_29041)){
var statearr_29082_29105 = state_29067__$1;
(statearr_29082_29105[(1)] = (8));

} else {
var statearr_29083_29106 = state_29067__$1;
(statearr_29083_29106[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29068 === (14))){
var inst_29060 = (state_29067[(2)]);
var inst_29061 = cljs.core.async.close_BANG_.call(null,out);
var state_29067__$1 = (function (){var statearr_29085 = state_29067;
(statearr_29085[(13)] = inst_29060);

return statearr_29085;
})();
var statearr_29086_29107 = state_29067__$1;
(statearr_29086_29107[(2)] = inst_29061);

(statearr_29086_29107[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29068 === (10))){
var inst_29051 = (state_29067[(2)]);
var state_29067__$1 = state_29067;
var statearr_29087_29108 = state_29067__$1;
(statearr_29087_29108[(2)] = inst_29051);

(statearr_29087_29108[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29068 === (8))){
var inst_29031 = (state_29067[(7)]);
var inst_29040 = (state_29067[(11)]);
var tmp29084 = inst_29031;
var inst_29031__$1 = tmp29084;
var inst_29032 = inst_29040;
var state_29067__$1 = (function (){var statearr_29088 = state_29067;
(statearr_29088[(7)] = inst_29031__$1);

(statearr_29088[(8)] = inst_29032);

return statearr_29088;
})();
var statearr_29089_29109 = state_29067__$1;
(statearr_29089_29109[(2)] = null);

(statearr_29089_29109[(1)] = (2));


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
var cljs$core$async$state_machine__27173__auto__ = null;
var cljs$core$async$state_machine__27173__auto____0 = (function (){
var statearr_29090 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29090[(0)] = cljs$core$async$state_machine__27173__auto__);

(statearr_29090[(1)] = (1));

return statearr_29090;
});
var cljs$core$async$state_machine__27173__auto____1 = (function (state_29067){
while(true){
var ret_value__27174__auto__ = (function (){try{while(true){
var result__27175__auto__ = switch__27172__auto__.call(null,state_29067);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27175__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27175__auto__;
}
break;
}
}catch (e29091){if((e29091 instanceof Object)){
var ex__27176__auto__ = e29091;
var statearr_29092_29110 = state_29067;
(statearr_29092_29110[(5)] = ex__27176__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29067);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29091;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27174__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29111 = state_29067;
state_29067 = G__29111;
continue;
} else {
return ret_value__27174__auto__;
}
break;
}
});
cljs$core$async$state_machine__27173__auto__ = function(state_29067){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27173__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27173__auto____1.call(this,state_29067);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27173__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27173__auto____0;
cljs$core$async$state_machine__27173__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27173__auto____1;
return cljs$core$async$state_machine__27173__auto__;
})()
})();
var state__27269__auto__ = (function (){var statearr_29093 = f__27268__auto__.call(null);
(statearr_29093[(6)] = c__27267__auto___29095);

return statearr_29093;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27269__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__29113 = arguments.length;
switch (G__29113) {
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
var c__27267__auto___29183 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27268__auto__ = (function (){var switch__27172__auto__ = (function (state_29155){
var state_val_29156 = (state_29155[(1)]);
if((state_val_29156 === (7))){
var inst_29151 = (state_29155[(2)]);
var state_29155__$1 = state_29155;
var statearr_29157_29184 = state_29155__$1;
(statearr_29157_29184[(2)] = inst_29151);

(statearr_29157_29184[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29156 === (1))){
var inst_29114 = [];
var inst_29115 = inst_29114;
var inst_29116 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_29155__$1 = (function (){var statearr_29158 = state_29155;
(statearr_29158[(7)] = inst_29116);

(statearr_29158[(8)] = inst_29115);

return statearr_29158;
})();
var statearr_29159_29185 = state_29155__$1;
(statearr_29159_29185[(2)] = null);

(statearr_29159_29185[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29156 === (4))){
var inst_29119 = (state_29155[(9)]);
var inst_29119__$1 = (state_29155[(2)]);
var inst_29120 = (inst_29119__$1 == null);
var inst_29121 = cljs.core.not.call(null,inst_29120);
var state_29155__$1 = (function (){var statearr_29160 = state_29155;
(statearr_29160[(9)] = inst_29119__$1);

return statearr_29160;
})();
if(inst_29121){
var statearr_29161_29186 = state_29155__$1;
(statearr_29161_29186[(1)] = (5));

} else {
var statearr_29162_29187 = state_29155__$1;
(statearr_29162_29187[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29156 === (15))){
var inst_29145 = (state_29155[(2)]);
var state_29155__$1 = state_29155;
var statearr_29163_29188 = state_29155__$1;
(statearr_29163_29188[(2)] = inst_29145);

(statearr_29163_29188[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29156 === (13))){
var state_29155__$1 = state_29155;
var statearr_29164_29189 = state_29155__$1;
(statearr_29164_29189[(2)] = null);

(statearr_29164_29189[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29156 === (6))){
var inst_29115 = (state_29155[(8)]);
var inst_29140 = inst_29115.length;
var inst_29141 = (inst_29140 > (0));
var state_29155__$1 = state_29155;
if(cljs.core.truth_(inst_29141)){
var statearr_29165_29190 = state_29155__$1;
(statearr_29165_29190[(1)] = (12));

} else {
var statearr_29166_29191 = state_29155__$1;
(statearr_29166_29191[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29156 === (3))){
var inst_29153 = (state_29155[(2)]);
var state_29155__$1 = state_29155;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29155__$1,inst_29153);
} else {
if((state_val_29156 === (12))){
var inst_29115 = (state_29155[(8)]);
var inst_29143 = cljs.core.vec.call(null,inst_29115);
var state_29155__$1 = state_29155;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29155__$1,(15),out,inst_29143);
} else {
if((state_val_29156 === (2))){
var state_29155__$1 = state_29155;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29155__$1,(4),ch);
} else {
if((state_val_29156 === (11))){
var inst_29123 = (state_29155[(10)]);
var inst_29119 = (state_29155[(9)]);
var inst_29133 = (state_29155[(2)]);
var inst_29134 = [];
var inst_29135 = inst_29134.push(inst_29119);
var inst_29115 = inst_29134;
var inst_29116 = inst_29123;
var state_29155__$1 = (function (){var statearr_29167 = state_29155;
(statearr_29167[(7)] = inst_29116);

(statearr_29167[(11)] = inst_29133);

(statearr_29167[(8)] = inst_29115);

(statearr_29167[(12)] = inst_29135);

return statearr_29167;
})();
var statearr_29168_29192 = state_29155__$1;
(statearr_29168_29192[(2)] = null);

(statearr_29168_29192[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29156 === (9))){
var inst_29115 = (state_29155[(8)]);
var inst_29131 = cljs.core.vec.call(null,inst_29115);
var state_29155__$1 = state_29155;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29155__$1,(11),out,inst_29131);
} else {
if((state_val_29156 === (5))){
var inst_29123 = (state_29155[(10)]);
var inst_29116 = (state_29155[(7)]);
var inst_29119 = (state_29155[(9)]);
var inst_29123__$1 = f.call(null,inst_29119);
var inst_29124 = cljs.core._EQ_.call(null,inst_29123__$1,inst_29116);
var inst_29125 = cljs.core.keyword_identical_QMARK_.call(null,inst_29116,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_29126 = ((inst_29124) || (inst_29125));
var state_29155__$1 = (function (){var statearr_29169 = state_29155;
(statearr_29169[(10)] = inst_29123__$1);

return statearr_29169;
})();
if(cljs.core.truth_(inst_29126)){
var statearr_29170_29193 = state_29155__$1;
(statearr_29170_29193[(1)] = (8));

} else {
var statearr_29171_29194 = state_29155__$1;
(statearr_29171_29194[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29156 === (14))){
var inst_29148 = (state_29155[(2)]);
var inst_29149 = cljs.core.async.close_BANG_.call(null,out);
var state_29155__$1 = (function (){var statearr_29173 = state_29155;
(statearr_29173[(13)] = inst_29148);

return statearr_29173;
})();
var statearr_29174_29195 = state_29155__$1;
(statearr_29174_29195[(2)] = inst_29149);

(statearr_29174_29195[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29156 === (10))){
var inst_29138 = (state_29155[(2)]);
var state_29155__$1 = state_29155;
var statearr_29175_29196 = state_29155__$1;
(statearr_29175_29196[(2)] = inst_29138);

(statearr_29175_29196[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29156 === (8))){
var inst_29123 = (state_29155[(10)]);
var inst_29119 = (state_29155[(9)]);
var inst_29115 = (state_29155[(8)]);
var inst_29128 = inst_29115.push(inst_29119);
var tmp29172 = inst_29115;
var inst_29115__$1 = tmp29172;
var inst_29116 = inst_29123;
var state_29155__$1 = (function (){var statearr_29176 = state_29155;
(statearr_29176[(7)] = inst_29116);

(statearr_29176[(14)] = inst_29128);

(statearr_29176[(8)] = inst_29115__$1);

return statearr_29176;
})();
var statearr_29177_29197 = state_29155__$1;
(statearr_29177_29197[(2)] = null);

(statearr_29177_29197[(1)] = (2));


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
var cljs$core$async$state_machine__27173__auto__ = null;
var cljs$core$async$state_machine__27173__auto____0 = (function (){
var statearr_29178 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29178[(0)] = cljs$core$async$state_machine__27173__auto__);

(statearr_29178[(1)] = (1));

return statearr_29178;
});
var cljs$core$async$state_machine__27173__auto____1 = (function (state_29155){
while(true){
var ret_value__27174__auto__ = (function (){try{while(true){
var result__27175__auto__ = switch__27172__auto__.call(null,state_29155);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27175__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27175__auto__;
}
break;
}
}catch (e29179){if((e29179 instanceof Object)){
var ex__27176__auto__ = e29179;
var statearr_29180_29198 = state_29155;
(statearr_29180_29198[(5)] = ex__27176__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29155);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29179;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27174__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29199 = state_29155;
state_29155 = G__29199;
continue;
} else {
return ret_value__27174__auto__;
}
break;
}
});
cljs$core$async$state_machine__27173__auto__ = function(state_29155){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27173__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27173__auto____1.call(this,state_29155);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27173__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27173__auto____0;
cljs$core$async$state_machine__27173__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27173__auto____1;
return cljs$core$async$state_machine__27173__auto__;
})()
})();
var state__27269__auto__ = (function (){var statearr_29181 = f__27268__auto__.call(null);
(statearr_29181[(6)] = c__27267__auto___29183);

return statearr_29181;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27269__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=async.js.map?rel=1607231749023
