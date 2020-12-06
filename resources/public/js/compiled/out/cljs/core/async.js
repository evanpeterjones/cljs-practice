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
var G__35274 = arguments.length;
switch (G__35274) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35275 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35275 = (function (f,blockable,meta35276){
this.f = f;
this.blockable = blockable;
this.meta35276 = meta35276;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35275.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35277,meta35276__$1){
var self__ = this;
var _35277__$1 = this;
return (new cljs.core.async.t_cljs$core$async35275(self__.f,self__.blockable,meta35276__$1));
}));

(cljs.core.async.t_cljs$core$async35275.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35277){
var self__ = this;
var _35277__$1 = this;
return self__.meta35276;
}));

(cljs.core.async.t_cljs$core$async35275.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35275.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async35275.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async35275.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async35275.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta35276","meta35276",1259757268,null)], null);
}));

(cljs.core.async.t_cljs$core$async35275.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35275.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35275");

(cljs.core.async.t_cljs$core$async35275.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async35275");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35275.
 */
cljs.core.async.__GT_t_cljs$core$async35275 = (function cljs$core$async$__GT_t_cljs$core$async35275(f__$1,blockable__$1,meta35276){
return (new cljs.core.async.t_cljs$core$async35275(f__$1,blockable__$1,meta35276));
});

}

return (new cljs.core.async.t_cljs$core$async35275(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__35281 = arguments.length;
switch (G__35281) {
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
var G__35284 = arguments.length;
switch (G__35284) {
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
var G__35287 = arguments.length;
switch (G__35287) {
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
var val_35289 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_35289);
} else {
cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,val_35289);
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
var G__35291 = arguments.length;
switch (G__35291) {
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
var n__4613__auto___35293 = n;
var x_35294 = (0);
while(true){
if((x_35294 < n__4613__auto___35293)){
(a[x_35294] = x_35294);

var G__35295 = (x_35294 + (1));
x_35294 = G__35295;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35296 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35296 = (function (flag,meta35297){
this.flag = flag;
this.meta35297 = meta35297;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35296.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35298,meta35297__$1){
var self__ = this;
var _35298__$1 = this;
return (new cljs.core.async.t_cljs$core$async35296(self__.flag,meta35297__$1));
}));

(cljs.core.async.t_cljs$core$async35296.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35298){
var self__ = this;
var _35298__$1 = this;
return self__.meta35297;
}));

(cljs.core.async.t_cljs$core$async35296.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35296.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async35296.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async35296.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async35296.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta35297","meta35297",-1617476572,null)], null);
}));

(cljs.core.async.t_cljs$core$async35296.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35296.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35296");

(cljs.core.async.t_cljs$core$async35296.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async35296");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35296.
 */
cljs.core.async.__GT_t_cljs$core$async35296 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async35296(flag__$1,meta35297){
return (new cljs.core.async.t_cljs$core$async35296(flag__$1,meta35297));
});

}

return (new cljs.core.async.t_cljs$core$async35296(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35299 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35299 = (function (flag,cb,meta35300){
this.flag = flag;
this.cb = cb;
this.meta35300 = meta35300;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35299.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35301,meta35300__$1){
var self__ = this;
var _35301__$1 = this;
return (new cljs.core.async.t_cljs$core$async35299(self__.flag,self__.cb,meta35300__$1));
}));

(cljs.core.async.t_cljs$core$async35299.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35301){
var self__ = this;
var _35301__$1 = this;
return self__.meta35300;
}));

(cljs.core.async.t_cljs$core$async35299.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35299.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async35299.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async35299.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async35299.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta35300","meta35300",1688392038,null)], null);
}));

(cljs.core.async.t_cljs$core$async35299.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35299.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35299");

(cljs.core.async.t_cljs$core$async35299.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async35299");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35299.
 */
cljs.core.async.__GT_t_cljs$core$async35299 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async35299(flag__$1,cb__$1,meta35300){
return (new cljs.core.async.t_cljs$core$async35299(flag__$1,cb__$1,meta35300));
});

}

return (new cljs.core.async.t_cljs$core$async35299(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__35302_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__35302_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__35303_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__35303_SHARP_,port], null));
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
var G__35304 = (i + (1));
i = G__35304;
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
var len__4736__auto___35310 = arguments.length;
var i__4737__auto___35311 = (0);
while(true){
if((i__4737__auto___35311 < len__4736__auto___35310)){
args__4742__auto__.push((arguments[i__4737__auto___35311]));

var G__35312 = (i__4737__auto___35311 + (1));
i__4737__auto___35311 = G__35312;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__35307){
var map__35308 = p__35307;
var map__35308__$1 = (((((!((map__35308 == null))))?(((((map__35308.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35308.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35308):map__35308);
var opts = map__35308__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq35305){
var G__35306 = cljs.core.first.call(null,seq35305);
var seq35305__$1 = cljs.core.next.call(null,seq35305);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35306,seq35305__$1);
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
var G__35314 = arguments.length;
switch (G__35314) {
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
var c__35214__auto___35360 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__35215__auto__ = (function (){var switch__35119__auto__ = (function (state_35338){
var state_val_35339 = (state_35338[(1)]);
if((state_val_35339 === (7))){
var inst_35334 = (state_35338[(2)]);
var state_35338__$1 = state_35338;
var statearr_35340_35361 = state_35338__$1;
(statearr_35340_35361[(2)] = inst_35334);

(statearr_35340_35361[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35339 === (1))){
var state_35338__$1 = state_35338;
var statearr_35341_35362 = state_35338__$1;
(statearr_35341_35362[(2)] = null);

(statearr_35341_35362[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35339 === (4))){
var inst_35317 = (state_35338[(7)]);
var inst_35317__$1 = (state_35338[(2)]);
var inst_35318 = (inst_35317__$1 == null);
var state_35338__$1 = (function (){var statearr_35342 = state_35338;
(statearr_35342[(7)] = inst_35317__$1);

return statearr_35342;
})();
if(cljs.core.truth_(inst_35318)){
var statearr_35343_35363 = state_35338__$1;
(statearr_35343_35363[(1)] = (5));

} else {
var statearr_35344_35364 = state_35338__$1;
(statearr_35344_35364[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35339 === (13))){
var state_35338__$1 = state_35338;
var statearr_35345_35365 = state_35338__$1;
(statearr_35345_35365[(2)] = null);

(statearr_35345_35365[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35339 === (6))){
var inst_35317 = (state_35338[(7)]);
var state_35338__$1 = state_35338;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35338__$1,(11),to,inst_35317);
} else {
if((state_val_35339 === (3))){
var inst_35336 = (state_35338[(2)]);
var state_35338__$1 = state_35338;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35338__$1,inst_35336);
} else {
if((state_val_35339 === (12))){
var state_35338__$1 = state_35338;
var statearr_35346_35366 = state_35338__$1;
(statearr_35346_35366[(2)] = null);

(statearr_35346_35366[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35339 === (2))){
var state_35338__$1 = state_35338;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35338__$1,(4),from);
} else {
if((state_val_35339 === (11))){
var inst_35327 = (state_35338[(2)]);
var state_35338__$1 = state_35338;
if(cljs.core.truth_(inst_35327)){
var statearr_35347_35367 = state_35338__$1;
(statearr_35347_35367[(1)] = (12));

} else {
var statearr_35348_35368 = state_35338__$1;
(statearr_35348_35368[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35339 === (9))){
var state_35338__$1 = state_35338;
var statearr_35349_35369 = state_35338__$1;
(statearr_35349_35369[(2)] = null);

(statearr_35349_35369[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35339 === (5))){
var state_35338__$1 = state_35338;
if(cljs.core.truth_(close_QMARK_)){
var statearr_35350_35370 = state_35338__$1;
(statearr_35350_35370[(1)] = (8));

} else {
var statearr_35351_35371 = state_35338__$1;
(statearr_35351_35371[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35339 === (14))){
var inst_35332 = (state_35338[(2)]);
var state_35338__$1 = state_35338;
var statearr_35352_35372 = state_35338__$1;
(statearr_35352_35372[(2)] = inst_35332);

(statearr_35352_35372[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35339 === (10))){
var inst_35324 = (state_35338[(2)]);
var state_35338__$1 = state_35338;
var statearr_35353_35373 = state_35338__$1;
(statearr_35353_35373[(2)] = inst_35324);

(statearr_35353_35373[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35339 === (8))){
var inst_35321 = cljs.core.async.close_BANG_.call(null,to);
var state_35338__$1 = state_35338;
var statearr_35354_35374 = state_35338__$1;
(statearr_35354_35374[(2)] = inst_35321);

(statearr_35354_35374[(1)] = (10));


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
var cljs$core$async$state_machine__35120__auto__ = null;
var cljs$core$async$state_machine__35120__auto____0 = (function (){
var statearr_35355 = [null,null,null,null,null,null,null,null];
(statearr_35355[(0)] = cljs$core$async$state_machine__35120__auto__);

(statearr_35355[(1)] = (1));

return statearr_35355;
});
var cljs$core$async$state_machine__35120__auto____1 = (function (state_35338){
while(true){
var ret_value__35121__auto__ = (function (){try{while(true){
var result__35122__auto__ = switch__35119__auto__.call(null,state_35338);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35122__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35122__auto__;
}
break;
}
}catch (e35356){if((e35356 instanceof Object)){
var ex__35123__auto__ = e35356;
var statearr_35357_35375 = state_35338;
(statearr_35357_35375[(5)] = ex__35123__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35338);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35356;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35121__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35376 = state_35338;
state_35338 = G__35376;
continue;
} else {
return ret_value__35121__auto__;
}
break;
}
});
cljs$core$async$state_machine__35120__auto__ = function(state_35338){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35120__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35120__auto____1.call(this,state_35338);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35120__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35120__auto____0;
cljs$core$async$state_machine__35120__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35120__auto____1;
return cljs$core$async$state_machine__35120__auto__;
})()
})();
var state__35216__auto__ = (function (){var statearr_35358 = f__35215__auto__.call(null);
(statearr_35358[(6)] = c__35214__auto___35360);

return statearr_35358;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35216__auto__);
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
var process = (function (p__35377){
var vec__35378 = p__35377;
var v = cljs.core.nth.call(null,vec__35378,(0),null);
var p = cljs.core.nth.call(null,vec__35378,(1),null);
var job = vec__35378;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__35214__auto___35549 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__35215__auto__ = (function (){var switch__35119__auto__ = (function (state_35385){
var state_val_35386 = (state_35385[(1)]);
if((state_val_35386 === (1))){
var state_35385__$1 = state_35385;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35385__$1,(2),res,v);
} else {
if((state_val_35386 === (2))){
var inst_35382 = (state_35385[(2)]);
var inst_35383 = cljs.core.async.close_BANG_.call(null,res);
var state_35385__$1 = (function (){var statearr_35387 = state_35385;
(statearr_35387[(7)] = inst_35382);

return statearr_35387;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35385__$1,inst_35383);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__35120__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__35120__auto____0 = (function (){
var statearr_35388 = [null,null,null,null,null,null,null,null];
(statearr_35388[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__35120__auto__);

(statearr_35388[(1)] = (1));

return statearr_35388;
});
var cljs$core$async$pipeline_STAR__$_state_machine__35120__auto____1 = (function (state_35385){
while(true){
var ret_value__35121__auto__ = (function (){try{while(true){
var result__35122__auto__ = switch__35119__auto__.call(null,state_35385);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35122__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35122__auto__;
}
break;
}
}catch (e35389){if((e35389 instanceof Object)){
var ex__35123__auto__ = e35389;
var statearr_35390_35550 = state_35385;
(statearr_35390_35550[(5)] = ex__35123__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35385);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35389;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35121__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35551 = state_35385;
state_35385 = G__35551;
continue;
} else {
return ret_value__35121__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__35120__auto__ = function(state_35385){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__35120__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__35120__auto____1.call(this,state_35385);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__35120__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__35120__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__35120__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__35120__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__35120__auto__;
})()
})();
var state__35216__auto__ = (function (){var statearr_35391 = f__35215__auto__.call(null);
(statearr_35391[(6)] = c__35214__auto___35549);

return statearr_35391;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35216__auto__);
}));


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});
var async = (function (p__35392){
var vec__35393 = p__35392;
var v = cljs.core.nth.call(null,vec__35393,(0),null);
var p = cljs.core.nth.call(null,vec__35393,(1),null);
var job = vec__35393;
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
var n__4613__auto___35552 = n;
var __35553 = (0);
while(true){
if((__35553 < n__4613__auto___35552)){
var G__35396_35554 = type;
var G__35396_35555__$1 = (((G__35396_35554 instanceof cljs.core.Keyword))?G__35396_35554.fqn:null);
switch (G__35396_35555__$1) {
case "compute":
var c__35214__auto___35557 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__35553,c__35214__auto___35557,G__35396_35554,G__35396_35555__$1,n__4613__auto___35552,jobs,results,process,async){
return (function (){
var f__35215__auto__ = (function (){var switch__35119__auto__ = ((function (__35553,c__35214__auto___35557,G__35396_35554,G__35396_35555__$1,n__4613__auto___35552,jobs,results,process,async){
return (function (state_35409){
var state_val_35410 = (state_35409[(1)]);
if((state_val_35410 === (1))){
var state_35409__$1 = state_35409;
var statearr_35411_35558 = state_35409__$1;
(statearr_35411_35558[(2)] = null);

(statearr_35411_35558[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35410 === (2))){
var state_35409__$1 = state_35409;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35409__$1,(4),jobs);
} else {
if((state_val_35410 === (3))){
var inst_35407 = (state_35409[(2)]);
var state_35409__$1 = state_35409;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35409__$1,inst_35407);
} else {
if((state_val_35410 === (4))){
var inst_35399 = (state_35409[(2)]);
var inst_35400 = process.call(null,inst_35399);
var state_35409__$1 = state_35409;
if(cljs.core.truth_(inst_35400)){
var statearr_35412_35559 = state_35409__$1;
(statearr_35412_35559[(1)] = (5));

} else {
var statearr_35413_35560 = state_35409__$1;
(statearr_35413_35560[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35410 === (5))){
var state_35409__$1 = state_35409;
var statearr_35414_35561 = state_35409__$1;
(statearr_35414_35561[(2)] = null);

(statearr_35414_35561[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35410 === (6))){
var state_35409__$1 = state_35409;
var statearr_35415_35562 = state_35409__$1;
(statearr_35415_35562[(2)] = null);

(statearr_35415_35562[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35410 === (7))){
var inst_35405 = (state_35409[(2)]);
var state_35409__$1 = state_35409;
var statearr_35416_35563 = state_35409__$1;
(statearr_35416_35563[(2)] = inst_35405);

(statearr_35416_35563[(1)] = (3));


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
});})(__35553,c__35214__auto___35557,G__35396_35554,G__35396_35555__$1,n__4613__auto___35552,jobs,results,process,async))
;
return ((function (__35553,switch__35119__auto__,c__35214__auto___35557,G__35396_35554,G__35396_35555__$1,n__4613__auto___35552,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__35120__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__35120__auto____0 = (function (){
var statearr_35417 = [null,null,null,null,null,null,null];
(statearr_35417[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__35120__auto__);

(statearr_35417[(1)] = (1));

return statearr_35417;
});
var cljs$core$async$pipeline_STAR__$_state_machine__35120__auto____1 = (function (state_35409){
while(true){
var ret_value__35121__auto__ = (function (){try{while(true){
var result__35122__auto__ = switch__35119__auto__.call(null,state_35409);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35122__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35122__auto__;
}
break;
}
}catch (e35418){if((e35418 instanceof Object)){
var ex__35123__auto__ = e35418;
var statearr_35419_35564 = state_35409;
(statearr_35419_35564[(5)] = ex__35123__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35409);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35418;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35121__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35565 = state_35409;
state_35409 = G__35565;
continue;
} else {
return ret_value__35121__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__35120__auto__ = function(state_35409){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__35120__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__35120__auto____1.call(this,state_35409);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__35120__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__35120__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__35120__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__35120__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__35120__auto__;
})()
;})(__35553,switch__35119__auto__,c__35214__auto___35557,G__35396_35554,G__35396_35555__$1,n__4613__auto___35552,jobs,results,process,async))
})();
var state__35216__auto__ = (function (){var statearr_35420 = f__35215__auto__.call(null);
(statearr_35420[(6)] = c__35214__auto___35557);

return statearr_35420;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35216__auto__);
});})(__35553,c__35214__auto___35557,G__35396_35554,G__35396_35555__$1,n__4613__auto___35552,jobs,results,process,async))
);


break;
case "async":
var c__35214__auto___35566 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__35553,c__35214__auto___35566,G__35396_35554,G__35396_35555__$1,n__4613__auto___35552,jobs,results,process,async){
return (function (){
var f__35215__auto__ = (function (){var switch__35119__auto__ = ((function (__35553,c__35214__auto___35566,G__35396_35554,G__35396_35555__$1,n__4613__auto___35552,jobs,results,process,async){
return (function (state_35433){
var state_val_35434 = (state_35433[(1)]);
if((state_val_35434 === (1))){
var state_35433__$1 = state_35433;
var statearr_35435_35567 = state_35433__$1;
(statearr_35435_35567[(2)] = null);

(statearr_35435_35567[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35434 === (2))){
var state_35433__$1 = state_35433;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35433__$1,(4),jobs);
} else {
if((state_val_35434 === (3))){
var inst_35431 = (state_35433[(2)]);
var state_35433__$1 = state_35433;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35433__$1,inst_35431);
} else {
if((state_val_35434 === (4))){
var inst_35423 = (state_35433[(2)]);
var inst_35424 = async.call(null,inst_35423);
var state_35433__$1 = state_35433;
if(cljs.core.truth_(inst_35424)){
var statearr_35436_35568 = state_35433__$1;
(statearr_35436_35568[(1)] = (5));

} else {
var statearr_35437_35569 = state_35433__$1;
(statearr_35437_35569[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35434 === (5))){
var state_35433__$1 = state_35433;
var statearr_35438_35570 = state_35433__$1;
(statearr_35438_35570[(2)] = null);

(statearr_35438_35570[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35434 === (6))){
var state_35433__$1 = state_35433;
var statearr_35439_35571 = state_35433__$1;
(statearr_35439_35571[(2)] = null);

(statearr_35439_35571[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35434 === (7))){
var inst_35429 = (state_35433[(2)]);
var state_35433__$1 = state_35433;
var statearr_35440_35572 = state_35433__$1;
(statearr_35440_35572[(2)] = inst_35429);

(statearr_35440_35572[(1)] = (3));


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
});})(__35553,c__35214__auto___35566,G__35396_35554,G__35396_35555__$1,n__4613__auto___35552,jobs,results,process,async))
;
return ((function (__35553,switch__35119__auto__,c__35214__auto___35566,G__35396_35554,G__35396_35555__$1,n__4613__auto___35552,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__35120__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__35120__auto____0 = (function (){
var statearr_35441 = [null,null,null,null,null,null,null];
(statearr_35441[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__35120__auto__);

(statearr_35441[(1)] = (1));

return statearr_35441;
});
var cljs$core$async$pipeline_STAR__$_state_machine__35120__auto____1 = (function (state_35433){
while(true){
var ret_value__35121__auto__ = (function (){try{while(true){
var result__35122__auto__ = switch__35119__auto__.call(null,state_35433);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35122__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35122__auto__;
}
break;
}
}catch (e35442){if((e35442 instanceof Object)){
var ex__35123__auto__ = e35442;
var statearr_35443_35573 = state_35433;
(statearr_35443_35573[(5)] = ex__35123__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35433);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35442;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35121__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35574 = state_35433;
state_35433 = G__35574;
continue;
} else {
return ret_value__35121__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__35120__auto__ = function(state_35433){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__35120__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__35120__auto____1.call(this,state_35433);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__35120__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__35120__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__35120__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__35120__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__35120__auto__;
})()
;})(__35553,switch__35119__auto__,c__35214__auto___35566,G__35396_35554,G__35396_35555__$1,n__4613__auto___35552,jobs,results,process,async))
})();
var state__35216__auto__ = (function (){var statearr_35444 = f__35215__auto__.call(null);
(statearr_35444[(6)] = c__35214__auto___35566);

return statearr_35444;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35216__auto__);
});})(__35553,c__35214__auto___35566,G__35396_35554,G__35396_35555__$1,n__4613__auto___35552,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35396_35555__$1)].join('')));

}

var G__35575 = (__35553 + (1));
__35553 = G__35575;
continue;
} else {
}
break;
}

var c__35214__auto___35576 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__35215__auto__ = (function (){var switch__35119__auto__ = (function (state_35466){
var state_val_35467 = (state_35466[(1)]);
if((state_val_35467 === (7))){
var inst_35462 = (state_35466[(2)]);
var state_35466__$1 = state_35466;
var statearr_35468_35577 = state_35466__$1;
(statearr_35468_35577[(2)] = inst_35462);

(statearr_35468_35577[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35467 === (1))){
var state_35466__$1 = state_35466;
var statearr_35469_35578 = state_35466__$1;
(statearr_35469_35578[(2)] = null);

(statearr_35469_35578[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35467 === (4))){
var inst_35447 = (state_35466[(7)]);
var inst_35447__$1 = (state_35466[(2)]);
var inst_35448 = (inst_35447__$1 == null);
var state_35466__$1 = (function (){var statearr_35470 = state_35466;
(statearr_35470[(7)] = inst_35447__$1);

return statearr_35470;
})();
if(cljs.core.truth_(inst_35448)){
var statearr_35471_35579 = state_35466__$1;
(statearr_35471_35579[(1)] = (5));

} else {
var statearr_35472_35580 = state_35466__$1;
(statearr_35472_35580[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35467 === (6))){
var inst_35452 = (state_35466[(8)]);
var inst_35447 = (state_35466[(7)]);
var inst_35452__$1 = cljs.core.async.chan.call(null,(1));
var inst_35453 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_35454 = [inst_35447,inst_35452__$1];
var inst_35455 = (new cljs.core.PersistentVector(null,2,(5),inst_35453,inst_35454,null));
var state_35466__$1 = (function (){var statearr_35473 = state_35466;
(statearr_35473[(8)] = inst_35452__$1);

return statearr_35473;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35466__$1,(8),jobs,inst_35455);
} else {
if((state_val_35467 === (3))){
var inst_35464 = (state_35466[(2)]);
var state_35466__$1 = state_35466;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35466__$1,inst_35464);
} else {
if((state_val_35467 === (2))){
var state_35466__$1 = state_35466;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35466__$1,(4),from);
} else {
if((state_val_35467 === (9))){
var inst_35459 = (state_35466[(2)]);
var state_35466__$1 = (function (){var statearr_35474 = state_35466;
(statearr_35474[(9)] = inst_35459);

return statearr_35474;
})();
var statearr_35475_35581 = state_35466__$1;
(statearr_35475_35581[(2)] = null);

(statearr_35475_35581[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35467 === (5))){
var inst_35450 = cljs.core.async.close_BANG_.call(null,jobs);
var state_35466__$1 = state_35466;
var statearr_35476_35582 = state_35466__$1;
(statearr_35476_35582[(2)] = inst_35450);

(statearr_35476_35582[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35467 === (8))){
var inst_35452 = (state_35466[(8)]);
var inst_35457 = (state_35466[(2)]);
var state_35466__$1 = (function (){var statearr_35477 = state_35466;
(statearr_35477[(10)] = inst_35457);

return statearr_35477;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35466__$1,(9),results,inst_35452);
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
var cljs$core$async$pipeline_STAR__$_state_machine__35120__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__35120__auto____0 = (function (){
var statearr_35478 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35478[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__35120__auto__);

(statearr_35478[(1)] = (1));

return statearr_35478;
});
var cljs$core$async$pipeline_STAR__$_state_machine__35120__auto____1 = (function (state_35466){
while(true){
var ret_value__35121__auto__ = (function (){try{while(true){
var result__35122__auto__ = switch__35119__auto__.call(null,state_35466);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35122__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35122__auto__;
}
break;
}
}catch (e35479){if((e35479 instanceof Object)){
var ex__35123__auto__ = e35479;
var statearr_35480_35583 = state_35466;
(statearr_35480_35583[(5)] = ex__35123__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35466);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35479;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35121__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35584 = state_35466;
state_35466 = G__35584;
continue;
} else {
return ret_value__35121__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__35120__auto__ = function(state_35466){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__35120__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__35120__auto____1.call(this,state_35466);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__35120__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__35120__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__35120__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__35120__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__35120__auto__;
})()
})();
var state__35216__auto__ = (function (){var statearr_35481 = f__35215__auto__.call(null);
(statearr_35481[(6)] = c__35214__auto___35576);

return statearr_35481;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35216__auto__);
}));


var c__35214__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__35215__auto__ = (function (){var switch__35119__auto__ = (function (state_35519){
var state_val_35520 = (state_35519[(1)]);
if((state_val_35520 === (7))){
var inst_35515 = (state_35519[(2)]);
var state_35519__$1 = state_35519;
var statearr_35521_35585 = state_35519__$1;
(statearr_35521_35585[(2)] = inst_35515);

(statearr_35521_35585[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35520 === (20))){
var state_35519__$1 = state_35519;
var statearr_35522_35586 = state_35519__$1;
(statearr_35522_35586[(2)] = null);

(statearr_35522_35586[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35520 === (1))){
var state_35519__$1 = state_35519;
var statearr_35523_35587 = state_35519__$1;
(statearr_35523_35587[(2)] = null);

(statearr_35523_35587[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35520 === (4))){
var inst_35484 = (state_35519[(7)]);
var inst_35484__$1 = (state_35519[(2)]);
var inst_35485 = (inst_35484__$1 == null);
var state_35519__$1 = (function (){var statearr_35524 = state_35519;
(statearr_35524[(7)] = inst_35484__$1);

return statearr_35524;
})();
if(cljs.core.truth_(inst_35485)){
var statearr_35525_35588 = state_35519__$1;
(statearr_35525_35588[(1)] = (5));

} else {
var statearr_35526_35589 = state_35519__$1;
(statearr_35526_35589[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35520 === (15))){
var inst_35497 = (state_35519[(8)]);
var state_35519__$1 = state_35519;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35519__$1,(18),to,inst_35497);
} else {
if((state_val_35520 === (21))){
var inst_35510 = (state_35519[(2)]);
var state_35519__$1 = state_35519;
var statearr_35527_35590 = state_35519__$1;
(statearr_35527_35590[(2)] = inst_35510);

(statearr_35527_35590[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35520 === (13))){
var inst_35512 = (state_35519[(2)]);
var state_35519__$1 = (function (){var statearr_35528 = state_35519;
(statearr_35528[(9)] = inst_35512);

return statearr_35528;
})();
var statearr_35529_35591 = state_35519__$1;
(statearr_35529_35591[(2)] = null);

(statearr_35529_35591[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35520 === (6))){
var inst_35484 = (state_35519[(7)]);
var state_35519__$1 = state_35519;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35519__$1,(11),inst_35484);
} else {
if((state_val_35520 === (17))){
var inst_35505 = (state_35519[(2)]);
var state_35519__$1 = state_35519;
if(cljs.core.truth_(inst_35505)){
var statearr_35530_35592 = state_35519__$1;
(statearr_35530_35592[(1)] = (19));

} else {
var statearr_35531_35593 = state_35519__$1;
(statearr_35531_35593[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35520 === (3))){
var inst_35517 = (state_35519[(2)]);
var state_35519__$1 = state_35519;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35519__$1,inst_35517);
} else {
if((state_val_35520 === (12))){
var inst_35494 = (state_35519[(10)]);
var state_35519__$1 = state_35519;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35519__$1,(14),inst_35494);
} else {
if((state_val_35520 === (2))){
var state_35519__$1 = state_35519;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35519__$1,(4),results);
} else {
if((state_val_35520 === (19))){
var state_35519__$1 = state_35519;
var statearr_35532_35594 = state_35519__$1;
(statearr_35532_35594[(2)] = null);

(statearr_35532_35594[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35520 === (11))){
var inst_35494 = (state_35519[(2)]);
var state_35519__$1 = (function (){var statearr_35533 = state_35519;
(statearr_35533[(10)] = inst_35494);

return statearr_35533;
})();
var statearr_35534_35595 = state_35519__$1;
(statearr_35534_35595[(2)] = null);

(statearr_35534_35595[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35520 === (9))){
var state_35519__$1 = state_35519;
var statearr_35535_35596 = state_35519__$1;
(statearr_35535_35596[(2)] = null);

(statearr_35535_35596[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35520 === (5))){
var state_35519__$1 = state_35519;
if(cljs.core.truth_(close_QMARK_)){
var statearr_35536_35597 = state_35519__$1;
(statearr_35536_35597[(1)] = (8));

} else {
var statearr_35537_35598 = state_35519__$1;
(statearr_35537_35598[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35520 === (14))){
var inst_35497 = (state_35519[(8)]);
var inst_35497__$1 = (state_35519[(2)]);
var inst_35498 = (inst_35497__$1 == null);
var inst_35499 = cljs.core.not.call(null,inst_35498);
var state_35519__$1 = (function (){var statearr_35538 = state_35519;
(statearr_35538[(8)] = inst_35497__$1);

return statearr_35538;
})();
if(inst_35499){
var statearr_35539_35599 = state_35519__$1;
(statearr_35539_35599[(1)] = (15));

} else {
var statearr_35540_35600 = state_35519__$1;
(statearr_35540_35600[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35520 === (16))){
var state_35519__$1 = state_35519;
var statearr_35541_35601 = state_35519__$1;
(statearr_35541_35601[(2)] = false);

(statearr_35541_35601[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35520 === (10))){
var inst_35491 = (state_35519[(2)]);
var state_35519__$1 = state_35519;
var statearr_35542_35602 = state_35519__$1;
(statearr_35542_35602[(2)] = inst_35491);

(statearr_35542_35602[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35520 === (18))){
var inst_35502 = (state_35519[(2)]);
var state_35519__$1 = state_35519;
var statearr_35543_35603 = state_35519__$1;
(statearr_35543_35603[(2)] = inst_35502);

(statearr_35543_35603[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35520 === (8))){
var inst_35488 = cljs.core.async.close_BANG_.call(null,to);
var state_35519__$1 = state_35519;
var statearr_35544_35604 = state_35519__$1;
(statearr_35544_35604[(2)] = inst_35488);

(statearr_35544_35604[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__35120__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__35120__auto____0 = (function (){
var statearr_35545 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35545[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__35120__auto__);

(statearr_35545[(1)] = (1));

return statearr_35545;
});
var cljs$core$async$pipeline_STAR__$_state_machine__35120__auto____1 = (function (state_35519){
while(true){
var ret_value__35121__auto__ = (function (){try{while(true){
var result__35122__auto__ = switch__35119__auto__.call(null,state_35519);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35122__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35122__auto__;
}
break;
}
}catch (e35546){if((e35546 instanceof Object)){
var ex__35123__auto__ = e35546;
var statearr_35547_35605 = state_35519;
(statearr_35547_35605[(5)] = ex__35123__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35519);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35546;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35121__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35606 = state_35519;
state_35519 = G__35606;
continue;
} else {
return ret_value__35121__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__35120__auto__ = function(state_35519){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__35120__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__35120__auto____1.call(this,state_35519);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__35120__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__35120__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__35120__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__35120__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__35120__auto__;
})()
})();
var state__35216__auto__ = (function (){var statearr_35548 = f__35215__auto__.call(null);
(statearr_35548[(6)] = c__35214__auto__);

return statearr_35548;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35216__auto__);
}));

return c__35214__auto__;
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
var G__35608 = arguments.length;
switch (G__35608) {
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
var G__35611 = arguments.length;
switch (G__35611) {
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
var G__35614 = arguments.length;
switch (G__35614) {
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
var c__35214__auto___35663 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__35215__auto__ = (function (){var switch__35119__auto__ = (function (state_35640){
var state_val_35641 = (state_35640[(1)]);
if((state_val_35641 === (7))){
var inst_35636 = (state_35640[(2)]);
var state_35640__$1 = state_35640;
var statearr_35642_35664 = state_35640__$1;
(statearr_35642_35664[(2)] = inst_35636);

(statearr_35642_35664[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35641 === (1))){
var state_35640__$1 = state_35640;
var statearr_35643_35665 = state_35640__$1;
(statearr_35643_35665[(2)] = null);

(statearr_35643_35665[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35641 === (4))){
var inst_35617 = (state_35640[(7)]);
var inst_35617__$1 = (state_35640[(2)]);
var inst_35618 = (inst_35617__$1 == null);
var state_35640__$1 = (function (){var statearr_35644 = state_35640;
(statearr_35644[(7)] = inst_35617__$1);

return statearr_35644;
})();
if(cljs.core.truth_(inst_35618)){
var statearr_35645_35666 = state_35640__$1;
(statearr_35645_35666[(1)] = (5));

} else {
var statearr_35646_35667 = state_35640__$1;
(statearr_35646_35667[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35641 === (13))){
var state_35640__$1 = state_35640;
var statearr_35647_35668 = state_35640__$1;
(statearr_35647_35668[(2)] = null);

(statearr_35647_35668[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35641 === (6))){
var inst_35617 = (state_35640[(7)]);
var inst_35623 = p.call(null,inst_35617);
var state_35640__$1 = state_35640;
if(cljs.core.truth_(inst_35623)){
var statearr_35648_35669 = state_35640__$1;
(statearr_35648_35669[(1)] = (9));

} else {
var statearr_35649_35670 = state_35640__$1;
(statearr_35649_35670[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35641 === (3))){
var inst_35638 = (state_35640[(2)]);
var state_35640__$1 = state_35640;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35640__$1,inst_35638);
} else {
if((state_val_35641 === (12))){
var state_35640__$1 = state_35640;
var statearr_35650_35671 = state_35640__$1;
(statearr_35650_35671[(2)] = null);

(statearr_35650_35671[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35641 === (2))){
var state_35640__$1 = state_35640;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35640__$1,(4),ch);
} else {
if((state_val_35641 === (11))){
var inst_35617 = (state_35640[(7)]);
var inst_35627 = (state_35640[(2)]);
var state_35640__$1 = state_35640;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35640__$1,(8),inst_35627,inst_35617);
} else {
if((state_val_35641 === (9))){
var state_35640__$1 = state_35640;
var statearr_35651_35672 = state_35640__$1;
(statearr_35651_35672[(2)] = tc);

(statearr_35651_35672[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35641 === (5))){
var inst_35620 = cljs.core.async.close_BANG_.call(null,tc);
var inst_35621 = cljs.core.async.close_BANG_.call(null,fc);
var state_35640__$1 = (function (){var statearr_35652 = state_35640;
(statearr_35652[(8)] = inst_35620);

return statearr_35652;
})();
var statearr_35653_35673 = state_35640__$1;
(statearr_35653_35673[(2)] = inst_35621);

(statearr_35653_35673[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35641 === (14))){
var inst_35634 = (state_35640[(2)]);
var state_35640__$1 = state_35640;
var statearr_35654_35674 = state_35640__$1;
(statearr_35654_35674[(2)] = inst_35634);

(statearr_35654_35674[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35641 === (10))){
var state_35640__$1 = state_35640;
var statearr_35655_35675 = state_35640__$1;
(statearr_35655_35675[(2)] = fc);

(statearr_35655_35675[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35641 === (8))){
var inst_35629 = (state_35640[(2)]);
var state_35640__$1 = state_35640;
if(cljs.core.truth_(inst_35629)){
var statearr_35656_35676 = state_35640__$1;
(statearr_35656_35676[(1)] = (12));

} else {
var statearr_35657_35677 = state_35640__$1;
(statearr_35657_35677[(1)] = (13));

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
var cljs$core$async$state_machine__35120__auto__ = null;
var cljs$core$async$state_machine__35120__auto____0 = (function (){
var statearr_35658 = [null,null,null,null,null,null,null,null,null];
(statearr_35658[(0)] = cljs$core$async$state_machine__35120__auto__);

(statearr_35658[(1)] = (1));

return statearr_35658;
});
var cljs$core$async$state_machine__35120__auto____1 = (function (state_35640){
while(true){
var ret_value__35121__auto__ = (function (){try{while(true){
var result__35122__auto__ = switch__35119__auto__.call(null,state_35640);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35122__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35122__auto__;
}
break;
}
}catch (e35659){if((e35659 instanceof Object)){
var ex__35123__auto__ = e35659;
var statearr_35660_35678 = state_35640;
(statearr_35660_35678[(5)] = ex__35123__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35640);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35659;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35121__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35679 = state_35640;
state_35640 = G__35679;
continue;
} else {
return ret_value__35121__auto__;
}
break;
}
});
cljs$core$async$state_machine__35120__auto__ = function(state_35640){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35120__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35120__auto____1.call(this,state_35640);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35120__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35120__auto____0;
cljs$core$async$state_machine__35120__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35120__auto____1;
return cljs$core$async$state_machine__35120__auto__;
})()
})();
var state__35216__auto__ = (function (){var statearr_35661 = f__35215__auto__.call(null);
(statearr_35661[(6)] = c__35214__auto___35663);

return statearr_35661;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35216__auto__);
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
var c__35214__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__35215__auto__ = (function (){var switch__35119__auto__ = (function (state_35700){
var state_val_35701 = (state_35700[(1)]);
if((state_val_35701 === (7))){
var inst_35696 = (state_35700[(2)]);
var state_35700__$1 = state_35700;
var statearr_35702_35720 = state_35700__$1;
(statearr_35702_35720[(2)] = inst_35696);

(statearr_35702_35720[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35701 === (1))){
var inst_35680 = init;
var state_35700__$1 = (function (){var statearr_35703 = state_35700;
(statearr_35703[(7)] = inst_35680);

return statearr_35703;
})();
var statearr_35704_35721 = state_35700__$1;
(statearr_35704_35721[(2)] = null);

(statearr_35704_35721[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35701 === (4))){
var inst_35683 = (state_35700[(8)]);
var inst_35683__$1 = (state_35700[(2)]);
var inst_35684 = (inst_35683__$1 == null);
var state_35700__$1 = (function (){var statearr_35705 = state_35700;
(statearr_35705[(8)] = inst_35683__$1);

return statearr_35705;
})();
if(cljs.core.truth_(inst_35684)){
var statearr_35706_35722 = state_35700__$1;
(statearr_35706_35722[(1)] = (5));

} else {
var statearr_35707_35723 = state_35700__$1;
(statearr_35707_35723[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35701 === (6))){
var inst_35683 = (state_35700[(8)]);
var inst_35687 = (state_35700[(9)]);
var inst_35680 = (state_35700[(7)]);
var inst_35687__$1 = f.call(null,inst_35680,inst_35683);
var inst_35688 = cljs.core.reduced_QMARK_.call(null,inst_35687__$1);
var state_35700__$1 = (function (){var statearr_35708 = state_35700;
(statearr_35708[(9)] = inst_35687__$1);

return statearr_35708;
})();
if(inst_35688){
var statearr_35709_35724 = state_35700__$1;
(statearr_35709_35724[(1)] = (8));

} else {
var statearr_35710_35725 = state_35700__$1;
(statearr_35710_35725[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35701 === (3))){
var inst_35698 = (state_35700[(2)]);
var state_35700__$1 = state_35700;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35700__$1,inst_35698);
} else {
if((state_val_35701 === (2))){
var state_35700__$1 = state_35700;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35700__$1,(4),ch);
} else {
if((state_val_35701 === (9))){
var inst_35687 = (state_35700[(9)]);
var inst_35680 = inst_35687;
var state_35700__$1 = (function (){var statearr_35711 = state_35700;
(statearr_35711[(7)] = inst_35680);

return statearr_35711;
})();
var statearr_35712_35726 = state_35700__$1;
(statearr_35712_35726[(2)] = null);

(statearr_35712_35726[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35701 === (5))){
var inst_35680 = (state_35700[(7)]);
var state_35700__$1 = state_35700;
var statearr_35713_35727 = state_35700__$1;
(statearr_35713_35727[(2)] = inst_35680);

(statearr_35713_35727[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35701 === (10))){
var inst_35694 = (state_35700[(2)]);
var state_35700__$1 = state_35700;
var statearr_35714_35728 = state_35700__$1;
(statearr_35714_35728[(2)] = inst_35694);

(statearr_35714_35728[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35701 === (8))){
var inst_35687 = (state_35700[(9)]);
var inst_35690 = cljs.core.deref.call(null,inst_35687);
var state_35700__$1 = state_35700;
var statearr_35715_35729 = state_35700__$1;
(statearr_35715_35729[(2)] = inst_35690);

(statearr_35715_35729[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__35120__auto__ = null;
var cljs$core$async$reduce_$_state_machine__35120__auto____0 = (function (){
var statearr_35716 = [null,null,null,null,null,null,null,null,null,null];
(statearr_35716[(0)] = cljs$core$async$reduce_$_state_machine__35120__auto__);

(statearr_35716[(1)] = (1));

return statearr_35716;
});
var cljs$core$async$reduce_$_state_machine__35120__auto____1 = (function (state_35700){
while(true){
var ret_value__35121__auto__ = (function (){try{while(true){
var result__35122__auto__ = switch__35119__auto__.call(null,state_35700);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35122__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35122__auto__;
}
break;
}
}catch (e35717){if((e35717 instanceof Object)){
var ex__35123__auto__ = e35717;
var statearr_35718_35730 = state_35700;
(statearr_35718_35730[(5)] = ex__35123__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35700);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35717;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35121__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35731 = state_35700;
state_35700 = G__35731;
continue;
} else {
return ret_value__35121__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__35120__auto__ = function(state_35700){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__35120__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__35120__auto____1.call(this,state_35700);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__35120__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__35120__auto____0;
cljs$core$async$reduce_$_state_machine__35120__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__35120__auto____1;
return cljs$core$async$reduce_$_state_machine__35120__auto__;
})()
})();
var state__35216__auto__ = (function (){var statearr_35719 = f__35215__auto__.call(null);
(statearr_35719[(6)] = c__35214__auto__);

return statearr_35719;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35216__auto__);
}));

return c__35214__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__35214__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__35215__auto__ = (function (){var switch__35119__auto__ = (function (state_35737){
var state_val_35738 = (state_35737[(1)]);
if((state_val_35738 === (1))){
var inst_35732 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_35737__$1 = state_35737;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35737__$1,(2),inst_35732);
} else {
if((state_val_35738 === (2))){
var inst_35734 = (state_35737[(2)]);
var inst_35735 = f__$1.call(null,inst_35734);
var state_35737__$1 = state_35737;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35737__$1,inst_35735);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__35120__auto__ = null;
var cljs$core$async$transduce_$_state_machine__35120__auto____0 = (function (){
var statearr_35739 = [null,null,null,null,null,null,null];
(statearr_35739[(0)] = cljs$core$async$transduce_$_state_machine__35120__auto__);

(statearr_35739[(1)] = (1));

return statearr_35739;
});
var cljs$core$async$transduce_$_state_machine__35120__auto____1 = (function (state_35737){
while(true){
var ret_value__35121__auto__ = (function (){try{while(true){
var result__35122__auto__ = switch__35119__auto__.call(null,state_35737);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35122__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35122__auto__;
}
break;
}
}catch (e35740){if((e35740 instanceof Object)){
var ex__35123__auto__ = e35740;
var statearr_35741_35743 = state_35737;
(statearr_35741_35743[(5)] = ex__35123__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35737);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35740;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35121__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35744 = state_35737;
state_35737 = G__35744;
continue;
} else {
return ret_value__35121__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__35120__auto__ = function(state_35737){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__35120__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__35120__auto____1.call(this,state_35737);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__35120__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__35120__auto____0;
cljs$core$async$transduce_$_state_machine__35120__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__35120__auto____1;
return cljs$core$async$transduce_$_state_machine__35120__auto__;
})()
})();
var state__35216__auto__ = (function (){var statearr_35742 = f__35215__auto__.call(null);
(statearr_35742[(6)] = c__35214__auto__);

return statearr_35742;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35216__auto__);
}));

return c__35214__auto__;
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
var G__35746 = arguments.length;
switch (G__35746) {
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
var c__35214__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__35215__auto__ = (function (){var switch__35119__auto__ = (function (state_35771){
var state_val_35772 = (state_35771[(1)]);
if((state_val_35772 === (7))){
var inst_35753 = (state_35771[(2)]);
var state_35771__$1 = state_35771;
var statearr_35773_35794 = state_35771__$1;
(statearr_35773_35794[(2)] = inst_35753);

(statearr_35773_35794[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35772 === (1))){
var inst_35747 = cljs.core.seq.call(null,coll);
var inst_35748 = inst_35747;
var state_35771__$1 = (function (){var statearr_35774 = state_35771;
(statearr_35774[(7)] = inst_35748);

return statearr_35774;
})();
var statearr_35775_35795 = state_35771__$1;
(statearr_35775_35795[(2)] = null);

(statearr_35775_35795[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35772 === (4))){
var inst_35748 = (state_35771[(7)]);
var inst_35751 = cljs.core.first.call(null,inst_35748);
var state_35771__$1 = state_35771;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35771__$1,(7),ch,inst_35751);
} else {
if((state_val_35772 === (13))){
var inst_35765 = (state_35771[(2)]);
var state_35771__$1 = state_35771;
var statearr_35776_35796 = state_35771__$1;
(statearr_35776_35796[(2)] = inst_35765);

(statearr_35776_35796[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35772 === (6))){
var inst_35756 = (state_35771[(2)]);
var state_35771__$1 = state_35771;
if(cljs.core.truth_(inst_35756)){
var statearr_35777_35797 = state_35771__$1;
(statearr_35777_35797[(1)] = (8));

} else {
var statearr_35778_35798 = state_35771__$1;
(statearr_35778_35798[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35772 === (3))){
var inst_35769 = (state_35771[(2)]);
var state_35771__$1 = state_35771;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35771__$1,inst_35769);
} else {
if((state_val_35772 === (12))){
var state_35771__$1 = state_35771;
var statearr_35779_35799 = state_35771__$1;
(statearr_35779_35799[(2)] = null);

(statearr_35779_35799[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35772 === (2))){
var inst_35748 = (state_35771[(7)]);
var state_35771__$1 = state_35771;
if(cljs.core.truth_(inst_35748)){
var statearr_35780_35800 = state_35771__$1;
(statearr_35780_35800[(1)] = (4));

} else {
var statearr_35781_35801 = state_35771__$1;
(statearr_35781_35801[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35772 === (11))){
var inst_35762 = cljs.core.async.close_BANG_.call(null,ch);
var state_35771__$1 = state_35771;
var statearr_35782_35802 = state_35771__$1;
(statearr_35782_35802[(2)] = inst_35762);

(statearr_35782_35802[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35772 === (9))){
var state_35771__$1 = state_35771;
if(cljs.core.truth_(close_QMARK_)){
var statearr_35783_35803 = state_35771__$1;
(statearr_35783_35803[(1)] = (11));

} else {
var statearr_35784_35804 = state_35771__$1;
(statearr_35784_35804[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35772 === (5))){
var inst_35748 = (state_35771[(7)]);
var state_35771__$1 = state_35771;
var statearr_35785_35805 = state_35771__$1;
(statearr_35785_35805[(2)] = inst_35748);

(statearr_35785_35805[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35772 === (10))){
var inst_35767 = (state_35771[(2)]);
var state_35771__$1 = state_35771;
var statearr_35786_35806 = state_35771__$1;
(statearr_35786_35806[(2)] = inst_35767);

(statearr_35786_35806[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35772 === (8))){
var inst_35748 = (state_35771[(7)]);
var inst_35758 = cljs.core.next.call(null,inst_35748);
var inst_35748__$1 = inst_35758;
var state_35771__$1 = (function (){var statearr_35787 = state_35771;
(statearr_35787[(7)] = inst_35748__$1);

return statearr_35787;
})();
var statearr_35788_35807 = state_35771__$1;
(statearr_35788_35807[(2)] = null);

(statearr_35788_35807[(1)] = (2));


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
var cljs$core$async$state_machine__35120__auto__ = null;
var cljs$core$async$state_machine__35120__auto____0 = (function (){
var statearr_35789 = [null,null,null,null,null,null,null,null];
(statearr_35789[(0)] = cljs$core$async$state_machine__35120__auto__);

(statearr_35789[(1)] = (1));

return statearr_35789;
});
var cljs$core$async$state_machine__35120__auto____1 = (function (state_35771){
while(true){
var ret_value__35121__auto__ = (function (){try{while(true){
var result__35122__auto__ = switch__35119__auto__.call(null,state_35771);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35122__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35122__auto__;
}
break;
}
}catch (e35790){if((e35790 instanceof Object)){
var ex__35123__auto__ = e35790;
var statearr_35791_35808 = state_35771;
(statearr_35791_35808[(5)] = ex__35123__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35771);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35790;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35121__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35809 = state_35771;
state_35771 = G__35809;
continue;
} else {
return ret_value__35121__auto__;
}
break;
}
});
cljs$core$async$state_machine__35120__auto__ = function(state_35771){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35120__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35120__auto____1.call(this,state_35771);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35120__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35120__auto____0;
cljs$core$async$state_machine__35120__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35120__auto____1;
return cljs$core$async$state_machine__35120__auto__;
})()
})();
var state__35216__auto__ = (function (){var statearr_35792 = f__35215__auto__.call(null);
(statearr_35792[(6)] = c__35214__auto__);

return statearr_35792;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35216__auto__);
}));

return c__35214__auto__;
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

var cljs$core$async$Mux$muxch_STAR_$dyn_35810 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_35810.call(null,_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_35811 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_35811.call(null,m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_35812 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_35812.call(null,m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_35813 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_35813.call(null,m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35814 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35814 = (function (ch,cs,meta35815){
this.ch = ch;
this.cs = cs;
this.meta35815 = meta35815;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35814.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35816,meta35815__$1){
var self__ = this;
var _35816__$1 = this;
return (new cljs.core.async.t_cljs$core$async35814(self__.ch,self__.cs,meta35815__$1));
}));

(cljs.core.async.t_cljs$core$async35814.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35816){
var self__ = this;
var _35816__$1 = this;
return self__.meta35815;
}));

(cljs.core.async.t_cljs$core$async35814.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35814.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async35814.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35814.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async35814.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async35814.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async35814.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta35815","meta35815",-1627404786,null)], null);
}));

(cljs.core.async.t_cljs$core$async35814.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35814.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35814");

(cljs.core.async.t_cljs$core$async35814.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async35814");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35814.
 */
cljs.core.async.__GT_t_cljs$core$async35814 = (function cljs$core$async$mult_$___GT_t_cljs$core$async35814(ch__$1,cs__$1,meta35815){
return (new cljs.core.async.t_cljs$core$async35814(ch__$1,cs__$1,meta35815));
});

}

return (new cljs.core.async.t_cljs$core$async35814(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__35214__auto___36036 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__35215__auto__ = (function (){var switch__35119__auto__ = (function (state_35951){
var state_val_35952 = (state_35951[(1)]);
if((state_val_35952 === (7))){
var inst_35947 = (state_35951[(2)]);
var state_35951__$1 = state_35951;
var statearr_35953_36037 = state_35951__$1;
(statearr_35953_36037[(2)] = inst_35947);

(statearr_35953_36037[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35952 === (20))){
var inst_35850 = (state_35951[(7)]);
var inst_35862 = cljs.core.first.call(null,inst_35850);
var inst_35863 = cljs.core.nth.call(null,inst_35862,(0),null);
var inst_35864 = cljs.core.nth.call(null,inst_35862,(1),null);
var state_35951__$1 = (function (){var statearr_35954 = state_35951;
(statearr_35954[(8)] = inst_35863);

return statearr_35954;
})();
if(cljs.core.truth_(inst_35864)){
var statearr_35955_36038 = state_35951__$1;
(statearr_35955_36038[(1)] = (22));

} else {
var statearr_35956_36039 = state_35951__$1;
(statearr_35956_36039[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35952 === (27))){
var inst_35892 = (state_35951[(9)]);
var inst_35819 = (state_35951[(10)]);
var inst_35894 = (state_35951[(11)]);
var inst_35899 = (state_35951[(12)]);
var inst_35899__$1 = cljs.core._nth.call(null,inst_35892,inst_35894);
var inst_35900 = cljs.core.async.put_BANG_.call(null,inst_35899__$1,inst_35819,done);
var state_35951__$1 = (function (){var statearr_35957 = state_35951;
(statearr_35957[(12)] = inst_35899__$1);

return statearr_35957;
})();
if(cljs.core.truth_(inst_35900)){
var statearr_35958_36040 = state_35951__$1;
(statearr_35958_36040[(1)] = (30));

} else {
var statearr_35959_36041 = state_35951__$1;
(statearr_35959_36041[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35952 === (1))){
var state_35951__$1 = state_35951;
var statearr_35960_36042 = state_35951__$1;
(statearr_35960_36042[(2)] = null);

(statearr_35960_36042[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35952 === (24))){
var inst_35850 = (state_35951[(7)]);
var inst_35869 = (state_35951[(2)]);
var inst_35870 = cljs.core.next.call(null,inst_35850);
var inst_35828 = inst_35870;
var inst_35829 = null;
var inst_35830 = (0);
var inst_35831 = (0);
var state_35951__$1 = (function (){var statearr_35961 = state_35951;
(statearr_35961[(13)] = inst_35829);

(statearr_35961[(14)] = inst_35831);

(statearr_35961[(15)] = inst_35869);

(statearr_35961[(16)] = inst_35828);

(statearr_35961[(17)] = inst_35830);

return statearr_35961;
})();
var statearr_35962_36043 = state_35951__$1;
(statearr_35962_36043[(2)] = null);

(statearr_35962_36043[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35952 === (39))){
var state_35951__$1 = state_35951;
var statearr_35966_36044 = state_35951__$1;
(statearr_35966_36044[(2)] = null);

(statearr_35966_36044[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35952 === (4))){
var inst_35819 = (state_35951[(10)]);
var inst_35819__$1 = (state_35951[(2)]);
var inst_35820 = (inst_35819__$1 == null);
var state_35951__$1 = (function (){var statearr_35967 = state_35951;
(statearr_35967[(10)] = inst_35819__$1);

return statearr_35967;
})();
if(cljs.core.truth_(inst_35820)){
var statearr_35968_36045 = state_35951__$1;
(statearr_35968_36045[(1)] = (5));

} else {
var statearr_35969_36046 = state_35951__$1;
(statearr_35969_36046[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35952 === (15))){
var inst_35829 = (state_35951[(13)]);
var inst_35831 = (state_35951[(14)]);
var inst_35828 = (state_35951[(16)]);
var inst_35830 = (state_35951[(17)]);
var inst_35846 = (state_35951[(2)]);
var inst_35847 = (inst_35831 + (1));
var tmp35963 = inst_35829;
var tmp35964 = inst_35828;
var tmp35965 = inst_35830;
var inst_35828__$1 = tmp35964;
var inst_35829__$1 = tmp35963;
var inst_35830__$1 = tmp35965;
var inst_35831__$1 = inst_35847;
var state_35951__$1 = (function (){var statearr_35970 = state_35951;
(statearr_35970[(13)] = inst_35829__$1);

(statearr_35970[(14)] = inst_35831__$1);

(statearr_35970[(16)] = inst_35828__$1);

(statearr_35970[(18)] = inst_35846);

(statearr_35970[(17)] = inst_35830__$1);

return statearr_35970;
})();
var statearr_35971_36047 = state_35951__$1;
(statearr_35971_36047[(2)] = null);

(statearr_35971_36047[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35952 === (21))){
var inst_35873 = (state_35951[(2)]);
var state_35951__$1 = state_35951;
var statearr_35975_36048 = state_35951__$1;
(statearr_35975_36048[(2)] = inst_35873);

(statearr_35975_36048[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35952 === (31))){
var inst_35899 = (state_35951[(12)]);
var inst_35903 = done.call(null,null);
var inst_35904 = cljs.core.async.untap_STAR_.call(null,m,inst_35899);
var state_35951__$1 = (function (){var statearr_35976 = state_35951;
(statearr_35976[(19)] = inst_35903);

return statearr_35976;
})();
var statearr_35977_36049 = state_35951__$1;
(statearr_35977_36049[(2)] = inst_35904);

(statearr_35977_36049[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35952 === (32))){
var inst_35892 = (state_35951[(9)]);
var inst_35891 = (state_35951[(20)]);
var inst_35893 = (state_35951[(21)]);
var inst_35894 = (state_35951[(11)]);
var inst_35906 = (state_35951[(2)]);
var inst_35907 = (inst_35894 + (1));
var tmp35972 = inst_35892;
var tmp35973 = inst_35891;
var tmp35974 = inst_35893;
var inst_35891__$1 = tmp35973;
var inst_35892__$1 = tmp35972;
var inst_35893__$1 = tmp35974;
var inst_35894__$1 = inst_35907;
var state_35951__$1 = (function (){var statearr_35978 = state_35951;
(statearr_35978[(9)] = inst_35892__$1);

(statearr_35978[(20)] = inst_35891__$1);

(statearr_35978[(22)] = inst_35906);

(statearr_35978[(21)] = inst_35893__$1);

(statearr_35978[(11)] = inst_35894__$1);

return statearr_35978;
})();
var statearr_35979_36050 = state_35951__$1;
(statearr_35979_36050[(2)] = null);

(statearr_35979_36050[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35952 === (40))){
var inst_35919 = (state_35951[(23)]);
var inst_35923 = done.call(null,null);
var inst_35924 = cljs.core.async.untap_STAR_.call(null,m,inst_35919);
var state_35951__$1 = (function (){var statearr_35980 = state_35951;
(statearr_35980[(24)] = inst_35923);

return statearr_35980;
})();
var statearr_35981_36051 = state_35951__$1;
(statearr_35981_36051[(2)] = inst_35924);

(statearr_35981_36051[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35952 === (33))){
var inst_35910 = (state_35951[(25)]);
var inst_35912 = cljs.core.chunked_seq_QMARK_.call(null,inst_35910);
var state_35951__$1 = state_35951;
if(inst_35912){
var statearr_35982_36052 = state_35951__$1;
(statearr_35982_36052[(1)] = (36));

} else {
var statearr_35983_36053 = state_35951__$1;
(statearr_35983_36053[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35952 === (13))){
var inst_35840 = (state_35951[(26)]);
var inst_35843 = cljs.core.async.close_BANG_.call(null,inst_35840);
var state_35951__$1 = state_35951;
var statearr_35984_36054 = state_35951__$1;
(statearr_35984_36054[(2)] = inst_35843);

(statearr_35984_36054[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35952 === (22))){
var inst_35863 = (state_35951[(8)]);
var inst_35866 = cljs.core.async.close_BANG_.call(null,inst_35863);
var state_35951__$1 = state_35951;
var statearr_35985_36055 = state_35951__$1;
(statearr_35985_36055[(2)] = inst_35866);

(statearr_35985_36055[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35952 === (36))){
var inst_35910 = (state_35951[(25)]);
var inst_35914 = cljs.core.chunk_first.call(null,inst_35910);
var inst_35915 = cljs.core.chunk_rest.call(null,inst_35910);
var inst_35916 = cljs.core.count.call(null,inst_35914);
var inst_35891 = inst_35915;
var inst_35892 = inst_35914;
var inst_35893 = inst_35916;
var inst_35894 = (0);
var state_35951__$1 = (function (){var statearr_35986 = state_35951;
(statearr_35986[(9)] = inst_35892);

(statearr_35986[(20)] = inst_35891);

(statearr_35986[(21)] = inst_35893);

(statearr_35986[(11)] = inst_35894);

return statearr_35986;
})();
var statearr_35987_36056 = state_35951__$1;
(statearr_35987_36056[(2)] = null);

(statearr_35987_36056[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35952 === (41))){
var inst_35910 = (state_35951[(25)]);
var inst_35926 = (state_35951[(2)]);
var inst_35927 = cljs.core.next.call(null,inst_35910);
var inst_35891 = inst_35927;
var inst_35892 = null;
var inst_35893 = (0);
var inst_35894 = (0);
var state_35951__$1 = (function (){var statearr_35988 = state_35951;
(statearr_35988[(9)] = inst_35892);

(statearr_35988[(27)] = inst_35926);

(statearr_35988[(20)] = inst_35891);

(statearr_35988[(21)] = inst_35893);

(statearr_35988[(11)] = inst_35894);

return statearr_35988;
})();
var statearr_35989_36057 = state_35951__$1;
(statearr_35989_36057[(2)] = null);

(statearr_35989_36057[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35952 === (43))){
var state_35951__$1 = state_35951;
var statearr_35990_36058 = state_35951__$1;
(statearr_35990_36058[(2)] = null);

(statearr_35990_36058[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35952 === (29))){
var inst_35935 = (state_35951[(2)]);
var state_35951__$1 = state_35951;
var statearr_35991_36059 = state_35951__$1;
(statearr_35991_36059[(2)] = inst_35935);

(statearr_35991_36059[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35952 === (44))){
var inst_35944 = (state_35951[(2)]);
var state_35951__$1 = (function (){var statearr_35992 = state_35951;
(statearr_35992[(28)] = inst_35944);

return statearr_35992;
})();
var statearr_35993_36060 = state_35951__$1;
(statearr_35993_36060[(2)] = null);

(statearr_35993_36060[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35952 === (6))){
var inst_35883 = (state_35951[(29)]);
var inst_35882 = cljs.core.deref.call(null,cs);
var inst_35883__$1 = cljs.core.keys.call(null,inst_35882);
var inst_35884 = cljs.core.count.call(null,inst_35883__$1);
var inst_35885 = cljs.core.reset_BANG_.call(null,dctr,inst_35884);
var inst_35890 = cljs.core.seq.call(null,inst_35883__$1);
var inst_35891 = inst_35890;
var inst_35892 = null;
var inst_35893 = (0);
var inst_35894 = (0);
var state_35951__$1 = (function (){var statearr_35994 = state_35951;
(statearr_35994[(9)] = inst_35892);

(statearr_35994[(29)] = inst_35883__$1);

(statearr_35994[(20)] = inst_35891);

(statearr_35994[(21)] = inst_35893);

(statearr_35994[(30)] = inst_35885);

(statearr_35994[(11)] = inst_35894);

return statearr_35994;
})();
var statearr_35995_36061 = state_35951__$1;
(statearr_35995_36061[(2)] = null);

(statearr_35995_36061[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35952 === (28))){
var inst_35891 = (state_35951[(20)]);
var inst_35910 = (state_35951[(25)]);
var inst_35910__$1 = cljs.core.seq.call(null,inst_35891);
var state_35951__$1 = (function (){var statearr_35996 = state_35951;
(statearr_35996[(25)] = inst_35910__$1);

return statearr_35996;
})();
if(inst_35910__$1){
var statearr_35997_36062 = state_35951__$1;
(statearr_35997_36062[(1)] = (33));

} else {
var statearr_35998_36063 = state_35951__$1;
(statearr_35998_36063[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35952 === (25))){
var inst_35893 = (state_35951[(21)]);
var inst_35894 = (state_35951[(11)]);
var inst_35896 = (inst_35894 < inst_35893);
var inst_35897 = inst_35896;
var state_35951__$1 = state_35951;
if(cljs.core.truth_(inst_35897)){
var statearr_35999_36064 = state_35951__$1;
(statearr_35999_36064[(1)] = (27));

} else {
var statearr_36000_36065 = state_35951__$1;
(statearr_36000_36065[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35952 === (34))){
var state_35951__$1 = state_35951;
var statearr_36001_36066 = state_35951__$1;
(statearr_36001_36066[(2)] = null);

(statearr_36001_36066[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35952 === (17))){
var state_35951__$1 = state_35951;
var statearr_36002_36067 = state_35951__$1;
(statearr_36002_36067[(2)] = null);

(statearr_36002_36067[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35952 === (3))){
var inst_35949 = (state_35951[(2)]);
var state_35951__$1 = state_35951;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35951__$1,inst_35949);
} else {
if((state_val_35952 === (12))){
var inst_35878 = (state_35951[(2)]);
var state_35951__$1 = state_35951;
var statearr_36003_36068 = state_35951__$1;
(statearr_36003_36068[(2)] = inst_35878);

(statearr_36003_36068[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35952 === (2))){
var state_35951__$1 = state_35951;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35951__$1,(4),ch);
} else {
if((state_val_35952 === (23))){
var state_35951__$1 = state_35951;
var statearr_36004_36069 = state_35951__$1;
(statearr_36004_36069[(2)] = null);

(statearr_36004_36069[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35952 === (35))){
var inst_35933 = (state_35951[(2)]);
var state_35951__$1 = state_35951;
var statearr_36005_36070 = state_35951__$1;
(statearr_36005_36070[(2)] = inst_35933);

(statearr_36005_36070[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35952 === (19))){
var inst_35850 = (state_35951[(7)]);
var inst_35854 = cljs.core.chunk_first.call(null,inst_35850);
var inst_35855 = cljs.core.chunk_rest.call(null,inst_35850);
var inst_35856 = cljs.core.count.call(null,inst_35854);
var inst_35828 = inst_35855;
var inst_35829 = inst_35854;
var inst_35830 = inst_35856;
var inst_35831 = (0);
var state_35951__$1 = (function (){var statearr_36006 = state_35951;
(statearr_36006[(13)] = inst_35829);

(statearr_36006[(14)] = inst_35831);

(statearr_36006[(16)] = inst_35828);

(statearr_36006[(17)] = inst_35830);

return statearr_36006;
})();
var statearr_36007_36071 = state_35951__$1;
(statearr_36007_36071[(2)] = null);

(statearr_36007_36071[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35952 === (11))){
var inst_35828 = (state_35951[(16)]);
var inst_35850 = (state_35951[(7)]);
var inst_35850__$1 = cljs.core.seq.call(null,inst_35828);
var state_35951__$1 = (function (){var statearr_36008 = state_35951;
(statearr_36008[(7)] = inst_35850__$1);

return statearr_36008;
})();
if(inst_35850__$1){
var statearr_36009_36072 = state_35951__$1;
(statearr_36009_36072[(1)] = (16));

} else {
var statearr_36010_36073 = state_35951__$1;
(statearr_36010_36073[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35952 === (9))){
var inst_35880 = (state_35951[(2)]);
var state_35951__$1 = state_35951;
var statearr_36011_36074 = state_35951__$1;
(statearr_36011_36074[(2)] = inst_35880);

(statearr_36011_36074[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35952 === (5))){
var inst_35826 = cljs.core.deref.call(null,cs);
var inst_35827 = cljs.core.seq.call(null,inst_35826);
var inst_35828 = inst_35827;
var inst_35829 = null;
var inst_35830 = (0);
var inst_35831 = (0);
var state_35951__$1 = (function (){var statearr_36012 = state_35951;
(statearr_36012[(13)] = inst_35829);

(statearr_36012[(14)] = inst_35831);

(statearr_36012[(16)] = inst_35828);

(statearr_36012[(17)] = inst_35830);

return statearr_36012;
})();
var statearr_36013_36075 = state_35951__$1;
(statearr_36013_36075[(2)] = null);

(statearr_36013_36075[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35952 === (14))){
var state_35951__$1 = state_35951;
var statearr_36014_36076 = state_35951__$1;
(statearr_36014_36076[(2)] = null);

(statearr_36014_36076[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35952 === (45))){
var inst_35941 = (state_35951[(2)]);
var state_35951__$1 = state_35951;
var statearr_36015_36077 = state_35951__$1;
(statearr_36015_36077[(2)] = inst_35941);

(statearr_36015_36077[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35952 === (26))){
var inst_35883 = (state_35951[(29)]);
var inst_35937 = (state_35951[(2)]);
var inst_35938 = cljs.core.seq.call(null,inst_35883);
var state_35951__$1 = (function (){var statearr_36016 = state_35951;
(statearr_36016[(31)] = inst_35937);

return statearr_36016;
})();
if(inst_35938){
var statearr_36017_36078 = state_35951__$1;
(statearr_36017_36078[(1)] = (42));

} else {
var statearr_36018_36079 = state_35951__$1;
(statearr_36018_36079[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35952 === (16))){
var inst_35850 = (state_35951[(7)]);
var inst_35852 = cljs.core.chunked_seq_QMARK_.call(null,inst_35850);
var state_35951__$1 = state_35951;
if(inst_35852){
var statearr_36019_36080 = state_35951__$1;
(statearr_36019_36080[(1)] = (19));

} else {
var statearr_36020_36081 = state_35951__$1;
(statearr_36020_36081[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35952 === (38))){
var inst_35930 = (state_35951[(2)]);
var state_35951__$1 = state_35951;
var statearr_36021_36082 = state_35951__$1;
(statearr_36021_36082[(2)] = inst_35930);

(statearr_36021_36082[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35952 === (30))){
var state_35951__$1 = state_35951;
var statearr_36022_36083 = state_35951__$1;
(statearr_36022_36083[(2)] = null);

(statearr_36022_36083[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35952 === (10))){
var inst_35829 = (state_35951[(13)]);
var inst_35831 = (state_35951[(14)]);
var inst_35839 = cljs.core._nth.call(null,inst_35829,inst_35831);
var inst_35840 = cljs.core.nth.call(null,inst_35839,(0),null);
var inst_35841 = cljs.core.nth.call(null,inst_35839,(1),null);
var state_35951__$1 = (function (){var statearr_36023 = state_35951;
(statearr_36023[(26)] = inst_35840);

return statearr_36023;
})();
if(cljs.core.truth_(inst_35841)){
var statearr_36024_36084 = state_35951__$1;
(statearr_36024_36084[(1)] = (13));

} else {
var statearr_36025_36085 = state_35951__$1;
(statearr_36025_36085[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35952 === (18))){
var inst_35876 = (state_35951[(2)]);
var state_35951__$1 = state_35951;
var statearr_36026_36086 = state_35951__$1;
(statearr_36026_36086[(2)] = inst_35876);

(statearr_36026_36086[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35952 === (42))){
var state_35951__$1 = state_35951;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35951__$1,(45),dchan);
} else {
if((state_val_35952 === (37))){
var inst_35819 = (state_35951[(10)]);
var inst_35919 = (state_35951[(23)]);
var inst_35910 = (state_35951[(25)]);
var inst_35919__$1 = cljs.core.first.call(null,inst_35910);
var inst_35920 = cljs.core.async.put_BANG_.call(null,inst_35919__$1,inst_35819,done);
var state_35951__$1 = (function (){var statearr_36027 = state_35951;
(statearr_36027[(23)] = inst_35919__$1);

return statearr_36027;
})();
if(cljs.core.truth_(inst_35920)){
var statearr_36028_36087 = state_35951__$1;
(statearr_36028_36087[(1)] = (39));

} else {
var statearr_36029_36088 = state_35951__$1;
(statearr_36029_36088[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35952 === (8))){
var inst_35831 = (state_35951[(14)]);
var inst_35830 = (state_35951[(17)]);
var inst_35833 = (inst_35831 < inst_35830);
var inst_35834 = inst_35833;
var state_35951__$1 = state_35951;
if(cljs.core.truth_(inst_35834)){
var statearr_36030_36089 = state_35951__$1;
(statearr_36030_36089[(1)] = (10));

} else {
var statearr_36031_36090 = state_35951__$1;
(statearr_36031_36090[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__35120__auto__ = null;
var cljs$core$async$mult_$_state_machine__35120__auto____0 = (function (){
var statearr_36032 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36032[(0)] = cljs$core$async$mult_$_state_machine__35120__auto__);

(statearr_36032[(1)] = (1));

return statearr_36032;
});
var cljs$core$async$mult_$_state_machine__35120__auto____1 = (function (state_35951){
while(true){
var ret_value__35121__auto__ = (function (){try{while(true){
var result__35122__auto__ = switch__35119__auto__.call(null,state_35951);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35122__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35122__auto__;
}
break;
}
}catch (e36033){if((e36033 instanceof Object)){
var ex__35123__auto__ = e36033;
var statearr_36034_36091 = state_35951;
(statearr_36034_36091[(5)] = ex__35123__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35951);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36033;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35121__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36092 = state_35951;
state_35951 = G__36092;
continue;
} else {
return ret_value__35121__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__35120__auto__ = function(state_35951){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__35120__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__35120__auto____1.call(this,state_35951);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__35120__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__35120__auto____0;
cljs$core$async$mult_$_state_machine__35120__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__35120__auto____1;
return cljs$core$async$mult_$_state_machine__35120__auto__;
})()
})();
var state__35216__auto__ = (function (){var statearr_36035 = f__35215__auto__.call(null);
(statearr_36035[(6)] = c__35214__auto___36036);

return statearr_36035;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35216__auto__);
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
var G__36094 = arguments.length;
switch (G__36094) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_36096 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_36096.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_36097 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_36097.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_36098 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_36098.call(null,m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_36099 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_36099.call(null,m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_36100 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_36100.call(null,m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___36111 = arguments.length;
var i__4737__auto___36112 = (0);
while(true){
if((i__4737__auto___36112 < len__4736__auto___36111)){
args__4742__auto__.push((arguments[i__4737__auto___36112]));

var G__36113 = (i__4737__auto___36112 + (1));
i__4737__auto___36112 = G__36113;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__36105){
var map__36106 = p__36105;
var map__36106__$1 = (((((!((map__36106 == null))))?(((((map__36106.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36106.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36106):map__36106);
var opts = map__36106__$1;
var statearr_36108_36114 = state;
(statearr_36108_36114[(1)] = cont_block);


var temp__5720__auto__ = cljs.core.async.do_alts.call(null,(function (val){
var statearr_36109_36115 = state;
(statearr_36109_36115[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
}),ports,opts);
if(cljs.core.truth_(temp__5720__auto__)){
var cb = temp__5720__auto__;
var statearr_36110_36116 = state;
(statearr_36110_36116[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq36101){
var G__36102 = cljs.core.first.call(null,seq36101);
var seq36101__$1 = cljs.core.next.call(null,seq36101);
var G__36103 = cljs.core.first.call(null,seq36101__$1);
var seq36101__$2 = cljs.core.next.call(null,seq36101__$1);
var G__36104 = cljs.core.first.call(null,seq36101__$2);
var seq36101__$3 = cljs.core.next.call(null,seq36101__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36102,G__36103,G__36104,seq36101__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36117 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36117 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta36118){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta36118 = meta36118;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36117.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36119,meta36118__$1){
var self__ = this;
var _36119__$1 = this;
return (new cljs.core.async.t_cljs$core$async36117(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta36118__$1));
}));

(cljs.core.async.t_cljs$core$async36117.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36119){
var self__ = this;
var _36119__$1 = this;
return self__.meta36118;
}));

(cljs.core.async.t_cljs$core$async36117.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36117.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async36117.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36117.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async36117.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async36117.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async36117.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async36117.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async36117.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta36118","meta36118",-153865952,null)], null);
}));

(cljs.core.async.t_cljs$core$async36117.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36117.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36117");

(cljs.core.async.t_cljs$core$async36117.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async36117");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36117.
 */
cljs.core.async.__GT_t_cljs$core$async36117 = (function cljs$core$async$mix_$___GT_t_cljs$core$async36117(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta36118){
return (new cljs.core.async.t_cljs$core$async36117(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta36118));
});

}

return (new cljs.core.async.t_cljs$core$async36117(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__35214__auto___36281 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__35215__auto__ = (function (){var switch__35119__auto__ = (function (state_36221){
var state_val_36222 = (state_36221[(1)]);
if((state_val_36222 === (7))){
var inst_36136 = (state_36221[(2)]);
var state_36221__$1 = state_36221;
var statearr_36223_36282 = state_36221__$1;
(statearr_36223_36282[(2)] = inst_36136);

(statearr_36223_36282[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36222 === (20))){
var inst_36148 = (state_36221[(7)]);
var state_36221__$1 = state_36221;
var statearr_36224_36283 = state_36221__$1;
(statearr_36224_36283[(2)] = inst_36148);

(statearr_36224_36283[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36222 === (27))){
var state_36221__$1 = state_36221;
var statearr_36225_36284 = state_36221__$1;
(statearr_36225_36284[(2)] = null);

(statearr_36225_36284[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36222 === (1))){
var inst_36123 = (state_36221[(8)]);
var inst_36123__$1 = calc_state.call(null);
var inst_36125 = (inst_36123__$1 == null);
var inst_36126 = cljs.core.not.call(null,inst_36125);
var state_36221__$1 = (function (){var statearr_36226 = state_36221;
(statearr_36226[(8)] = inst_36123__$1);

return statearr_36226;
})();
if(inst_36126){
var statearr_36227_36285 = state_36221__$1;
(statearr_36227_36285[(1)] = (2));

} else {
var statearr_36228_36286 = state_36221__$1;
(statearr_36228_36286[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36222 === (24))){
var inst_36181 = (state_36221[(9)]);
var inst_36195 = (state_36221[(10)]);
var inst_36172 = (state_36221[(11)]);
var inst_36195__$1 = inst_36172.call(null,inst_36181);
var state_36221__$1 = (function (){var statearr_36229 = state_36221;
(statearr_36229[(10)] = inst_36195__$1);

return statearr_36229;
})();
if(cljs.core.truth_(inst_36195__$1)){
var statearr_36230_36287 = state_36221__$1;
(statearr_36230_36287[(1)] = (29));

} else {
var statearr_36231_36288 = state_36221__$1;
(statearr_36231_36288[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36222 === (4))){
var inst_36139 = (state_36221[(2)]);
var state_36221__$1 = state_36221;
if(cljs.core.truth_(inst_36139)){
var statearr_36232_36289 = state_36221__$1;
(statearr_36232_36289[(1)] = (8));

} else {
var statearr_36233_36290 = state_36221__$1;
(statearr_36233_36290[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36222 === (15))){
var inst_36166 = (state_36221[(2)]);
var state_36221__$1 = state_36221;
if(cljs.core.truth_(inst_36166)){
var statearr_36234_36291 = state_36221__$1;
(statearr_36234_36291[(1)] = (19));

} else {
var statearr_36235_36292 = state_36221__$1;
(statearr_36235_36292[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36222 === (21))){
var inst_36171 = (state_36221[(12)]);
var inst_36171__$1 = (state_36221[(2)]);
var inst_36172 = cljs.core.get.call(null,inst_36171__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_36173 = cljs.core.get.call(null,inst_36171__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_36174 = cljs.core.get.call(null,inst_36171__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_36221__$1 = (function (){var statearr_36236 = state_36221;
(statearr_36236[(13)] = inst_36173);

(statearr_36236[(11)] = inst_36172);

(statearr_36236[(12)] = inst_36171__$1);

return statearr_36236;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_36221__$1,(22),inst_36174);
} else {
if((state_val_36222 === (31))){
var inst_36203 = (state_36221[(2)]);
var state_36221__$1 = state_36221;
if(cljs.core.truth_(inst_36203)){
var statearr_36237_36293 = state_36221__$1;
(statearr_36237_36293[(1)] = (32));

} else {
var statearr_36238_36294 = state_36221__$1;
(statearr_36238_36294[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36222 === (32))){
var inst_36180 = (state_36221[(14)]);
var state_36221__$1 = state_36221;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36221__$1,(35),out,inst_36180);
} else {
if((state_val_36222 === (33))){
var inst_36171 = (state_36221[(12)]);
var inst_36148 = inst_36171;
var state_36221__$1 = (function (){var statearr_36239 = state_36221;
(statearr_36239[(7)] = inst_36148);

return statearr_36239;
})();
var statearr_36240_36295 = state_36221__$1;
(statearr_36240_36295[(2)] = null);

(statearr_36240_36295[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36222 === (13))){
var inst_36148 = (state_36221[(7)]);
var inst_36155 = inst_36148.cljs$lang$protocol_mask$partition0$;
var inst_36156 = (inst_36155 & (64));
var inst_36157 = inst_36148.cljs$core$ISeq$;
var inst_36158 = (cljs.core.PROTOCOL_SENTINEL === inst_36157);
var inst_36159 = ((inst_36156) || (inst_36158));
var state_36221__$1 = state_36221;
if(cljs.core.truth_(inst_36159)){
var statearr_36241_36296 = state_36221__$1;
(statearr_36241_36296[(1)] = (16));

} else {
var statearr_36242_36297 = state_36221__$1;
(statearr_36242_36297[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36222 === (22))){
var inst_36181 = (state_36221[(9)]);
var inst_36180 = (state_36221[(14)]);
var inst_36179 = (state_36221[(2)]);
var inst_36180__$1 = cljs.core.nth.call(null,inst_36179,(0),null);
var inst_36181__$1 = cljs.core.nth.call(null,inst_36179,(1),null);
var inst_36182 = (inst_36180__$1 == null);
var inst_36183 = cljs.core._EQ_.call(null,inst_36181__$1,change);
var inst_36184 = ((inst_36182) || (inst_36183));
var state_36221__$1 = (function (){var statearr_36243 = state_36221;
(statearr_36243[(9)] = inst_36181__$1);

(statearr_36243[(14)] = inst_36180__$1);

return statearr_36243;
})();
if(cljs.core.truth_(inst_36184)){
var statearr_36244_36298 = state_36221__$1;
(statearr_36244_36298[(1)] = (23));

} else {
var statearr_36245_36299 = state_36221__$1;
(statearr_36245_36299[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36222 === (36))){
var inst_36171 = (state_36221[(12)]);
var inst_36148 = inst_36171;
var state_36221__$1 = (function (){var statearr_36246 = state_36221;
(statearr_36246[(7)] = inst_36148);

return statearr_36246;
})();
var statearr_36247_36300 = state_36221__$1;
(statearr_36247_36300[(2)] = null);

(statearr_36247_36300[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36222 === (29))){
var inst_36195 = (state_36221[(10)]);
var state_36221__$1 = state_36221;
var statearr_36248_36301 = state_36221__$1;
(statearr_36248_36301[(2)] = inst_36195);

(statearr_36248_36301[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36222 === (6))){
var state_36221__$1 = state_36221;
var statearr_36249_36302 = state_36221__$1;
(statearr_36249_36302[(2)] = false);

(statearr_36249_36302[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36222 === (28))){
var inst_36191 = (state_36221[(2)]);
var inst_36192 = calc_state.call(null);
var inst_36148 = inst_36192;
var state_36221__$1 = (function (){var statearr_36250 = state_36221;
(statearr_36250[(7)] = inst_36148);

(statearr_36250[(15)] = inst_36191);

return statearr_36250;
})();
var statearr_36251_36303 = state_36221__$1;
(statearr_36251_36303[(2)] = null);

(statearr_36251_36303[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36222 === (25))){
var inst_36217 = (state_36221[(2)]);
var state_36221__$1 = state_36221;
var statearr_36252_36304 = state_36221__$1;
(statearr_36252_36304[(2)] = inst_36217);

(statearr_36252_36304[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36222 === (34))){
var inst_36215 = (state_36221[(2)]);
var state_36221__$1 = state_36221;
var statearr_36253_36305 = state_36221__$1;
(statearr_36253_36305[(2)] = inst_36215);

(statearr_36253_36305[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36222 === (17))){
var state_36221__$1 = state_36221;
var statearr_36254_36306 = state_36221__$1;
(statearr_36254_36306[(2)] = false);

(statearr_36254_36306[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36222 === (3))){
var state_36221__$1 = state_36221;
var statearr_36255_36307 = state_36221__$1;
(statearr_36255_36307[(2)] = false);

(statearr_36255_36307[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36222 === (12))){
var inst_36219 = (state_36221[(2)]);
var state_36221__$1 = state_36221;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36221__$1,inst_36219);
} else {
if((state_val_36222 === (2))){
var inst_36123 = (state_36221[(8)]);
var inst_36128 = inst_36123.cljs$lang$protocol_mask$partition0$;
var inst_36129 = (inst_36128 & (64));
var inst_36130 = inst_36123.cljs$core$ISeq$;
var inst_36131 = (cljs.core.PROTOCOL_SENTINEL === inst_36130);
var inst_36132 = ((inst_36129) || (inst_36131));
var state_36221__$1 = state_36221;
if(cljs.core.truth_(inst_36132)){
var statearr_36256_36308 = state_36221__$1;
(statearr_36256_36308[(1)] = (5));

} else {
var statearr_36257_36309 = state_36221__$1;
(statearr_36257_36309[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36222 === (23))){
var inst_36180 = (state_36221[(14)]);
var inst_36186 = (inst_36180 == null);
var state_36221__$1 = state_36221;
if(cljs.core.truth_(inst_36186)){
var statearr_36258_36310 = state_36221__$1;
(statearr_36258_36310[(1)] = (26));

} else {
var statearr_36259_36311 = state_36221__$1;
(statearr_36259_36311[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36222 === (35))){
var inst_36206 = (state_36221[(2)]);
var state_36221__$1 = state_36221;
if(cljs.core.truth_(inst_36206)){
var statearr_36260_36312 = state_36221__$1;
(statearr_36260_36312[(1)] = (36));

} else {
var statearr_36261_36313 = state_36221__$1;
(statearr_36261_36313[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36222 === (19))){
var inst_36148 = (state_36221[(7)]);
var inst_36168 = cljs.core.apply.call(null,cljs.core.hash_map,inst_36148);
var state_36221__$1 = state_36221;
var statearr_36262_36314 = state_36221__$1;
(statearr_36262_36314[(2)] = inst_36168);

(statearr_36262_36314[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36222 === (11))){
var inst_36148 = (state_36221[(7)]);
var inst_36152 = (inst_36148 == null);
var inst_36153 = cljs.core.not.call(null,inst_36152);
var state_36221__$1 = state_36221;
if(inst_36153){
var statearr_36263_36315 = state_36221__$1;
(statearr_36263_36315[(1)] = (13));

} else {
var statearr_36264_36316 = state_36221__$1;
(statearr_36264_36316[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36222 === (9))){
var inst_36123 = (state_36221[(8)]);
var state_36221__$1 = state_36221;
var statearr_36265_36317 = state_36221__$1;
(statearr_36265_36317[(2)] = inst_36123);

(statearr_36265_36317[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36222 === (5))){
var state_36221__$1 = state_36221;
var statearr_36266_36318 = state_36221__$1;
(statearr_36266_36318[(2)] = true);

(statearr_36266_36318[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36222 === (14))){
var state_36221__$1 = state_36221;
var statearr_36267_36319 = state_36221__$1;
(statearr_36267_36319[(2)] = false);

(statearr_36267_36319[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36222 === (26))){
var inst_36181 = (state_36221[(9)]);
var inst_36188 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_36181);
var state_36221__$1 = state_36221;
var statearr_36268_36320 = state_36221__$1;
(statearr_36268_36320[(2)] = inst_36188);

(statearr_36268_36320[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36222 === (16))){
var state_36221__$1 = state_36221;
var statearr_36269_36321 = state_36221__$1;
(statearr_36269_36321[(2)] = true);

(statearr_36269_36321[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36222 === (38))){
var inst_36211 = (state_36221[(2)]);
var state_36221__$1 = state_36221;
var statearr_36270_36322 = state_36221__$1;
(statearr_36270_36322[(2)] = inst_36211);

(statearr_36270_36322[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36222 === (30))){
var inst_36181 = (state_36221[(9)]);
var inst_36173 = (state_36221[(13)]);
var inst_36172 = (state_36221[(11)]);
var inst_36198 = cljs.core.empty_QMARK_.call(null,inst_36172);
var inst_36199 = inst_36173.call(null,inst_36181);
var inst_36200 = cljs.core.not.call(null,inst_36199);
var inst_36201 = ((inst_36198) && (inst_36200));
var state_36221__$1 = state_36221;
var statearr_36271_36323 = state_36221__$1;
(statearr_36271_36323[(2)] = inst_36201);

(statearr_36271_36323[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36222 === (10))){
var inst_36123 = (state_36221[(8)]);
var inst_36144 = (state_36221[(2)]);
var inst_36145 = cljs.core.get.call(null,inst_36144,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_36146 = cljs.core.get.call(null,inst_36144,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_36147 = cljs.core.get.call(null,inst_36144,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_36148 = inst_36123;
var state_36221__$1 = (function (){var statearr_36272 = state_36221;
(statearr_36272[(16)] = inst_36147);

(statearr_36272[(17)] = inst_36146);

(statearr_36272[(7)] = inst_36148);

(statearr_36272[(18)] = inst_36145);

return statearr_36272;
})();
var statearr_36273_36324 = state_36221__$1;
(statearr_36273_36324[(2)] = null);

(statearr_36273_36324[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36222 === (18))){
var inst_36163 = (state_36221[(2)]);
var state_36221__$1 = state_36221;
var statearr_36274_36325 = state_36221__$1;
(statearr_36274_36325[(2)] = inst_36163);

(statearr_36274_36325[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36222 === (37))){
var state_36221__$1 = state_36221;
var statearr_36275_36326 = state_36221__$1;
(statearr_36275_36326[(2)] = null);

(statearr_36275_36326[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36222 === (8))){
var inst_36123 = (state_36221[(8)]);
var inst_36141 = cljs.core.apply.call(null,cljs.core.hash_map,inst_36123);
var state_36221__$1 = state_36221;
var statearr_36276_36327 = state_36221__$1;
(statearr_36276_36327[(2)] = inst_36141);

(statearr_36276_36327[(1)] = (10));


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
var cljs$core$async$mix_$_state_machine__35120__auto__ = null;
var cljs$core$async$mix_$_state_machine__35120__auto____0 = (function (){
var statearr_36277 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36277[(0)] = cljs$core$async$mix_$_state_machine__35120__auto__);

(statearr_36277[(1)] = (1));

return statearr_36277;
});
var cljs$core$async$mix_$_state_machine__35120__auto____1 = (function (state_36221){
while(true){
var ret_value__35121__auto__ = (function (){try{while(true){
var result__35122__auto__ = switch__35119__auto__.call(null,state_36221);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35122__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35122__auto__;
}
break;
}
}catch (e36278){if((e36278 instanceof Object)){
var ex__35123__auto__ = e36278;
var statearr_36279_36328 = state_36221;
(statearr_36279_36328[(5)] = ex__35123__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36221);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36278;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35121__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36329 = state_36221;
state_36221 = G__36329;
continue;
} else {
return ret_value__35121__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__35120__auto__ = function(state_36221){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__35120__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__35120__auto____1.call(this,state_36221);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__35120__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__35120__auto____0;
cljs$core$async$mix_$_state_machine__35120__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__35120__auto____1;
return cljs$core$async$mix_$_state_machine__35120__auto__;
})()
})();
var state__35216__auto__ = (function (){var statearr_36280 = f__35215__auto__.call(null);
(statearr_36280[(6)] = c__35214__auto___36281);

return statearr_36280;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35216__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_36332 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_36332.call(null,p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_36333 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_36333.call(null,p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_36334 = (function() {
var G__36335 = null;
var G__36335__1 = (function (p){
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
var G__36335__2 = (function (p,v){
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
G__36335 = function(p,v){
switch(arguments.length){
case 1:
return G__36335__1.call(this,p);
case 2:
return G__36335__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__36335.cljs$core$IFn$_invoke$arity$1 = G__36335__1;
G__36335.cljs$core$IFn$_invoke$arity$2 = G__36335__2;
return G__36335;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__36331 = arguments.length;
switch (G__36331) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_36334.call(null,p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_36334.call(null,p,v);
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
var G__36339 = arguments.length;
switch (G__36339) {
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
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,(function (p1__36337_SHARP_){
if(cljs.core.truth_(p1__36337_SHARP_.call(null,topic))){
return p1__36337_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__36337_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36340 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36340 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta36341){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta36341 = meta36341;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36340.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36342,meta36341__$1){
var self__ = this;
var _36342__$1 = this;
return (new cljs.core.async.t_cljs$core$async36340(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta36341__$1));
}));

(cljs.core.async.t_cljs$core$async36340.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36342){
var self__ = this;
var _36342__$1 = this;
return self__.meta36341;
}));

(cljs.core.async.t_cljs$core$async36340.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36340.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async36340.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36340.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async36340.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async36340.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async36340.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async36340.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta36341","meta36341",-1745304593,null)], null);
}));

(cljs.core.async.t_cljs$core$async36340.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36340.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36340");

(cljs.core.async.t_cljs$core$async36340.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async36340");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36340.
 */
cljs.core.async.__GT_t_cljs$core$async36340 = (function cljs$core$async$__GT_t_cljs$core$async36340(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta36341){
return (new cljs.core.async.t_cljs$core$async36340(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta36341));
});

}

return (new cljs.core.async.t_cljs$core$async36340(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__35214__auto___36460 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__35215__auto__ = (function (){var switch__35119__auto__ = (function (state_36414){
var state_val_36415 = (state_36414[(1)]);
if((state_val_36415 === (7))){
var inst_36410 = (state_36414[(2)]);
var state_36414__$1 = state_36414;
var statearr_36416_36461 = state_36414__$1;
(statearr_36416_36461[(2)] = inst_36410);

(statearr_36416_36461[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36415 === (20))){
var state_36414__$1 = state_36414;
var statearr_36417_36462 = state_36414__$1;
(statearr_36417_36462[(2)] = null);

(statearr_36417_36462[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36415 === (1))){
var state_36414__$1 = state_36414;
var statearr_36418_36463 = state_36414__$1;
(statearr_36418_36463[(2)] = null);

(statearr_36418_36463[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36415 === (24))){
var inst_36393 = (state_36414[(7)]);
var inst_36402 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_36393);
var state_36414__$1 = state_36414;
var statearr_36419_36464 = state_36414__$1;
(statearr_36419_36464[(2)] = inst_36402);

(statearr_36419_36464[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36415 === (4))){
var inst_36345 = (state_36414[(8)]);
var inst_36345__$1 = (state_36414[(2)]);
var inst_36346 = (inst_36345__$1 == null);
var state_36414__$1 = (function (){var statearr_36420 = state_36414;
(statearr_36420[(8)] = inst_36345__$1);

return statearr_36420;
})();
if(cljs.core.truth_(inst_36346)){
var statearr_36421_36465 = state_36414__$1;
(statearr_36421_36465[(1)] = (5));

} else {
var statearr_36422_36466 = state_36414__$1;
(statearr_36422_36466[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36415 === (15))){
var inst_36387 = (state_36414[(2)]);
var state_36414__$1 = state_36414;
var statearr_36423_36467 = state_36414__$1;
(statearr_36423_36467[(2)] = inst_36387);

(statearr_36423_36467[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36415 === (21))){
var inst_36407 = (state_36414[(2)]);
var state_36414__$1 = (function (){var statearr_36424 = state_36414;
(statearr_36424[(9)] = inst_36407);

return statearr_36424;
})();
var statearr_36425_36468 = state_36414__$1;
(statearr_36425_36468[(2)] = null);

(statearr_36425_36468[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36415 === (13))){
var inst_36369 = (state_36414[(10)]);
var inst_36371 = cljs.core.chunked_seq_QMARK_.call(null,inst_36369);
var state_36414__$1 = state_36414;
if(inst_36371){
var statearr_36426_36469 = state_36414__$1;
(statearr_36426_36469[(1)] = (16));

} else {
var statearr_36427_36470 = state_36414__$1;
(statearr_36427_36470[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36415 === (22))){
var inst_36399 = (state_36414[(2)]);
var state_36414__$1 = state_36414;
if(cljs.core.truth_(inst_36399)){
var statearr_36428_36471 = state_36414__$1;
(statearr_36428_36471[(1)] = (23));

} else {
var statearr_36429_36472 = state_36414__$1;
(statearr_36429_36472[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36415 === (6))){
var inst_36345 = (state_36414[(8)]);
var inst_36393 = (state_36414[(7)]);
var inst_36395 = (state_36414[(11)]);
var inst_36393__$1 = topic_fn.call(null,inst_36345);
var inst_36394 = cljs.core.deref.call(null,mults);
var inst_36395__$1 = cljs.core.get.call(null,inst_36394,inst_36393__$1);
var state_36414__$1 = (function (){var statearr_36430 = state_36414;
(statearr_36430[(7)] = inst_36393__$1);

(statearr_36430[(11)] = inst_36395__$1);

return statearr_36430;
})();
if(cljs.core.truth_(inst_36395__$1)){
var statearr_36431_36473 = state_36414__$1;
(statearr_36431_36473[(1)] = (19));

} else {
var statearr_36432_36474 = state_36414__$1;
(statearr_36432_36474[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36415 === (25))){
var inst_36404 = (state_36414[(2)]);
var state_36414__$1 = state_36414;
var statearr_36433_36475 = state_36414__$1;
(statearr_36433_36475[(2)] = inst_36404);

(statearr_36433_36475[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36415 === (17))){
var inst_36369 = (state_36414[(10)]);
var inst_36378 = cljs.core.first.call(null,inst_36369);
var inst_36379 = cljs.core.async.muxch_STAR_.call(null,inst_36378);
var inst_36380 = cljs.core.async.close_BANG_.call(null,inst_36379);
var inst_36381 = cljs.core.next.call(null,inst_36369);
var inst_36355 = inst_36381;
var inst_36356 = null;
var inst_36357 = (0);
var inst_36358 = (0);
var state_36414__$1 = (function (){var statearr_36434 = state_36414;
(statearr_36434[(12)] = inst_36357);

(statearr_36434[(13)] = inst_36356);

(statearr_36434[(14)] = inst_36358);

(statearr_36434[(15)] = inst_36355);

(statearr_36434[(16)] = inst_36380);

return statearr_36434;
})();
var statearr_36435_36476 = state_36414__$1;
(statearr_36435_36476[(2)] = null);

(statearr_36435_36476[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36415 === (3))){
var inst_36412 = (state_36414[(2)]);
var state_36414__$1 = state_36414;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36414__$1,inst_36412);
} else {
if((state_val_36415 === (12))){
var inst_36389 = (state_36414[(2)]);
var state_36414__$1 = state_36414;
var statearr_36436_36477 = state_36414__$1;
(statearr_36436_36477[(2)] = inst_36389);

(statearr_36436_36477[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36415 === (2))){
var state_36414__$1 = state_36414;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36414__$1,(4),ch);
} else {
if((state_val_36415 === (23))){
var state_36414__$1 = state_36414;
var statearr_36437_36478 = state_36414__$1;
(statearr_36437_36478[(2)] = null);

(statearr_36437_36478[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36415 === (19))){
var inst_36345 = (state_36414[(8)]);
var inst_36395 = (state_36414[(11)]);
var inst_36397 = cljs.core.async.muxch_STAR_.call(null,inst_36395);
var state_36414__$1 = state_36414;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36414__$1,(22),inst_36397,inst_36345);
} else {
if((state_val_36415 === (11))){
var inst_36369 = (state_36414[(10)]);
var inst_36355 = (state_36414[(15)]);
var inst_36369__$1 = cljs.core.seq.call(null,inst_36355);
var state_36414__$1 = (function (){var statearr_36438 = state_36414;
(statearr_36438[(10)] = inst_36369__$1);

return statearr_36438;
})();
if(inst_36369__$1){
var statearr_36439_36479 = state_36414__$1;
(statearr_36439_36479[(1)] = (13));

} else {
var statearr_36440_36480 = state_36414__$1;
(statearr_36440_36480[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36415 === (9))){
var inst_36391 = (state_36414[(2)]);
var state_36414__$1 = state_36414;
var statearr_36441_36481 = state_36414__$1;
(statearr_36441_36481[(2)] = inst_36391);

(statearr_36441_36481[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36415 === (5))){
var inst_36352 = cljs.core.deref.call(null,mults);
var inst_36353 = cljs.core.vals.call(null,inst_36352);
var inst_36354 = cljs.core.seq.call(null,inst_36353);
var inst_36355 = inst_36354;
var inst_36356 = null;
var inst_36357 = (0);
var inst_36358 = (0);
var state_36414__$1 = (function (){var statearr_36442 = state_36414;
(statearr_36442[(12)] = inst_36357);

(statearr_36442[(13)] = inst_36356);

(statearr_36442[(14)] = inst_36358);

(statearr_36442[(15)] = inst_36355);

return statearr_36442;
})();
var statearr_36443_36482 = state_36414__$1;
(statearr_36443_36482[(2)] = null);

(statearr_36443_36482[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36415 === (14))){
var state_36414__$1 = state_36414;
var statearr_36447_36483 = state_36414__$1;
(statearr_36447_36483[(2)] = null);

(statearr_36447_36483[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36415 === (16))){
var inst_36369 = (state_36414[(10)]);
var inst_36373 = cljs.core.chunk_first.call(null,inst_36369);
var inst_36374 = cljs.core.chunk_rest.call(null,inst_36369);
var inst_36375 = cljs.core.count.call(null,inst_36373);
var inst_36355 = inst_36374;
var inst_36356 = inst_36373;
var inst_36357 = inst_36375;
var inst_36358 = (0);
var state_36414__$1 = (function (){var statearr_36448 = state_36414;
(statearr_36448[(12)] = inst_36357);

(statearr_36448[(13)] = inst_36356);

(statearr_36448[(14)] = inst_36358);

(statearr_36448[(15)] = inst_36355);

return statearr_36448;
})();
var statearr_36449_36484 = state_36414__$1;
(statearr_36449_36484[(2)] = null);

(statearr_36449_36484[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36415 === (10))){
var inst_36357 = (state_36414[(12)]);
var inst_36356 = (state_36414[(13)]);
var inst_36358 = (state_36414[(14)]);
var inst_36355 = (state_36414[(15)]);
var inst_36363 = cljs.core._nth.call(null,inst_36356,inst_36358);
var inst_36364 = cljs.core.async.muxch_STAR_.call(null,inst_36363);
var inst_36365 = cljs.core.async.close_BANG_.call(null,inst_36364);
var inst_36366 = (inst_36358 + (1));
var tmp36444 = inst_36357;
var tmp36445 = inst_36356;
var tmp36446 = inst_36355;
var inst_36355__$1 = tmp36446;
var inst_36356__$1 = tmp36445;
var inst_36357__$1 = tmp36444;
var inst_36358__$1 = inst_36366;
var state_36414__$1 = (function (){var statearr_36450 = state_36414;
(statearr_36450[(12)] = inst_36357__$1);

(statearr_36450[(13)] = inst_36356__$1);

(statearr_36450[(14)] = inst_36358__$1);

(statearr_36450[(15)] = inst_36355__$1);

(statearr_36450[(17)] = inst_36365);

return statearr_36450;
})();
var statearr_36451_36485 = state_36414__$1;
(statearr_36451_36485[(2)] = null);

(statearr_36451_36485[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36415 === (18))){
var inst_36384 = (state_36414[(2)]);
var state_36414__$1 = state_36414;
var statearr_36452_36486 = state_36414__$1;
(statearr_36452_36486[(2)] = inst_36384);

(statearr_36452_36486[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36415 === (8))){
var inst_36357 = (state_36414[(12)]);
var inst_36358 = (state_36414[(14)]);
var inst_36360 = (inst_36358 < inst_36357);
var inst_36361 = inst_36360;
var state_36414__$1 = state_36414;
if(cljs.core.truth_(inst_36361)){
var statearr_36453_36487 = state_36414__$1;
(statearr_36453_36487[(1)] = (10));

} else {
var statearr_36454_36488 = state_36414__$1;
(statearr_36454_36488[(1)] = (11));

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
var cljs$core$async$state_machine__35120__auto__ = null;
var cljs$core$async$state_machine__35120__auto____0 = (function (){
var statearr_36455 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36455[(0)] = cljs$core$async$state_machine__35120__auto__);

(statearr_36455[(1)] = (1));

return statearr_36455;
});
var cljs$core$async$state_machine__35120__auto____1 = (function (state_36414){
while(true){
var ret_value__35121__auto__ = (function (){try{while(true){
var result__35122__auto__ = switch__35119__auto__.call(null,state_36414);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35122__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35122__auto__;
}
break;
}
}catch (e36456){if((e36456 instanceof Object)){
var ex__35123__auto__ = e36456;
var statearr_36457_36489 = state_36414;
(statearr_36457_36489[(5)] = ex__35123__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36414);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36456;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35121__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36490 = state_36414;
state_36414 = G__36490;
continue;
} else {
return ret_value__35121__auto__;
}
break;
}
});
cljs$core$async$state_machine__35120__auto__ = function(state_36414){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35120__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35120__auto____1.call(this,state_36414);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35120__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35120__auto____0;
cljs$core$async$state_machine__35120__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35120__auto____1;
return cljs$core$async$state_machine__35120__auto__;
})()
})();
var state__35216__auto__ = (function (){var statearr_36458 = f__35215__auto__.call(null);
(statearr_36458[(6)] = c__35214__auto___36460);

return statearr_36458;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35216__auto__);
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
var G__36492 = arguments.length;
switch (G__36492) {
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
var G__36495 = arguments.length;
switch (G__36495) {
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
var G__36498 = arguments.length;
switch (G__36498) {
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
var c__35214__auto___36565 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__35215__auto__ = (function (){var switch__35119__auto__ = (function (state_36537){
var state_val_36538 = (state_36537[(1)]);
if((state_val_36538 === (7))){
var state_36537__$1 = state_36537;
var statearr_36539_36566 = state_36537__$1;
(statearr_36539_36566[(2)] = null);

(statearr_36539_36566[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36538 === (1))){
var state_36537__$1 = state_36537;
var statearr_36540_36567 = state_36537__$1;
(statearr_36540_36567[(2)] = null);

(statearr_36540_36567[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36538 === (4))){
var inst_36501 = (state_36537[(7)]);
var inst_36503 = (inst_36501 < cnt);
var state_36537__$1 = state_36537;
if(cljs.core.truth_(inst_36503)){
var statearr_36541_36568 = state_36537__$1;
(statearr_36541_36568[(1)] = (6));

} else {
var statearr_36542_36569 = state_36537__$1;
(statearr_36542_36569[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36538 === (15))){
var inst_36533 = (state_36537[(2)]);
var state_36537__$1 = state_36537;
var statearr_36543_36570 = state_36537__$1;
(statearr_36543_36570[(2)] = inst_36533);

(statearr_36543_36570[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36538 === (13))){
var inst_36526 = cljs.core.async.close_BANG_.call(null,out);
var state_36537__$1 = state_36537;
var statearr_36544_36571 = state_36537__$1;
(statearr_36544_36571[(2)] = inst_36526);

(statearr_36544_36571[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36538 === (6))){
var state_36537__$1 = state_36537;
var statearr_36545_36572 = state_36537__$1;
(statearr_36545_36572[(2)] = null);

(statearr_36545_36572[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36538 === (3))){
var inst_36535 = (state_36537[(2)]);
var state_36537__$1 = state_36537;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36537__$1,inst_36535);
} else {
if((state_val_36538 === (12))){
var inst_36523 = (state_36537[(8)]);
var inst_36523__$1 = (state_36537[(2)]);
var inst_36524 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_36523__$1);
var state_36537__$1 = (function (){var statearr_36546 = state_36537;
(statearr_36546[(8)] = inst_36523__$1);

return statearr_36546;
})();
if(cljs.core.truth_(inst_36524)){
var statearr_36547_36573 = state_36537__$1;
(statearr_36547_36573[(1)] = (13));

} else {
var statearr_36548_36574 = state_36537__$1;
(statearr_36548_36574[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36538 === (2))){
var inst_36500 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_36501 = (0);
var state_36537__$1 = (function (){var statearr_36549 = state_36537;
(statearr_36549[(7)] = inst_36501);

(statearr_36549[(9)] = inst_36500);

return statearr_36549;
})();
var statearr_36550_36575 = state_36537__$1;
(statearr_36550_36575[(2)] = null);

(statearr_36550_36575[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36538 === (11))){
var inst_36501 = (state_36537[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_36537,(10),Object,null,(9));
var inst_36510 = chs__$1.call(null,inst_36501);
var inst_36511 = done.call(null,inst_36501);
var inst_36512 = cljs.core.async.take_BANG_.call(null,inst_36510,inst_36511);
var state_36537__$1 = state_36537;
var statearr_36551_36576 = state_36537__$1;
(statearr_36551_36576[(2)] = inst_36512);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36537__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36538 === (9))){
var inst_36501 = (state_36537[(7)]);
var inst_36514 = (state_36537[(2)]);
var inst_36515 = (inst_36501 + (1));
var inst_36501__$1 = inst_36515;
var state_36537__$1 = (function (){var statearr_36552 = state_36537;
(statearr_36552[(7)] = inst_36501__$1);

(statearr_36552[(10)] = inst_36514);

return statearr_36552;
})();
var statearr_36553_36577 = state_36537__$1;
(statearr_36553_36577[(2)] = null);

(statearr_36553_36577[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36538 === (5))){
var inst_36521 = (state_36537[(2)]);
var state_36537__$1 = (function (){var statearr_36554 = state_36537;
(statearr_36554[(11)] = inst_36521);

return statearr_36554;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36537__$1,(12),dchan);
} else {
if((state_val_36538 === (14))){
var inst_36523 = (state_36537[(8)]);
var inst_36528 = cljs.core.apply.call(null,f,inst_36523);
var state_36537__$1 = state_36537;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36537__$1,(16),out,inst_36528);
} else {
if((state_val_36538 === (16))){
var inst_36530 = (state_36537[(2)]);
var state_36537__$1 = (function (){var statearr_36555 = state_36537;
(statearr_36555[(12)] = inst_36530);

return statearr_36555;
})();
var statearr_36556_36578 = state_36537__$1;
(statearr_36556_36578[(2)] = null);

(statearr_36556_36578[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36538 === (10))){
var inst_36505 = (state_36537[(2)]);
var inst_36506 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_36537__$1 = (function (){var statearr_36557 = state_36537;
(statearr_36557[(13)] = inst_36505);

return statearr_36557;
})();
var statearr_36558_36579 = state_36537__$1;
(statearr_36558_36579[(2)] = inst_36506);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36537__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36538 === (8))){
var inst_36519 = (state_36537[(2)]);
var state_36537__$1 = state_36537;
var statearr_36559_36580 = state_36537__$1;
(statearr_36559_36580[(2)] = inst_36519);

(statearr_36559_36580[(1)] = (5));


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
var cljs$core$async$state_machine__35120__auto__ = null;
var cljs$core$async$state_machine__35120__auto____0 = (function (){
var statearr_36560 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36560[(0)] = cljs$core$async$state_machine__35120__auto__);

(statearr_36560[(1)] = (1));

return statearr_36560;
});
var cljs$core$async$state_machine__35120__auto____1 = (function (state_36537){
while(true){
var ret_value__35121__auto__ = (function (){try{while(true){
var result__35122__auto__ = switch__35119__auto__.call(null,state_36537);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35122__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35122__auto__;
}
break;
}
}catch (e36561){if((e36561 instanceof Object)){
var ex__35123__auto__ = e36561;
var statearr_36562_36581 = state_36537;
(statearr_36562_36581[(5)] = ex__35123__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36537);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36561;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35121__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36582 = state_36537;
state_36537 = G__36582;
continue;
} else {
return ret_value__35121__auto__;
}
break;
}
});
cljs$core$async$state_machine__35120__auto__ = function(state_36537){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35120__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35120__auto____1.call(this,state_36537);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35120__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35120__auto____0;
cljs$core$async$state_machine__35120__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35120__auto____1;
return cljs$core$async$state_machine__35120__auto__;
})()
})();
var state__35216__auto__ = (function (){var statearr_36563 = f__35215__auto__.call(null);
(statearr_36563[(6)] = c__35214__auto___36565);

return statearr_36563;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35216__auto__);
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
var G__36585 = arguments.length;
switch (G__36585) {
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
var c__35214__auto___36639 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__35215__auto__ = (function (){var switch__35119__auto__ = (function (state_36617){
var state_val_36618 = (state_36617[(1)]);
if((state_val_36618 === (7))){
var inst_36596 = (state_36617[(7)]);
var inst_36597 = (state_36617[(8)]);
var inst_36596__$1 = (state_36617[(2)]);
var inst_36597__$1 = cljs.core.nth.call(null,inst_36596__$1,(0),null);
var inst_36598 = cljs.core.nth.call(null,inst_36596__$1,(1),null);
var inst_36599 = (inst_36597__$1 == null);
var state_36617__$1 = (function (){var statearr_36619 = state_36617;
(statearr_36619[(9)] = inst_36598);

(statearr_36619[(7)] = inst_36596__$1);

(statearr_36619[(8)] = inst_36597__$1);

return statearr_36619;
})();
if(cljs.core.truth_(inst_36599)){
var statearr_36620_36640 = state_36617__$1;
(statearr_36620_36640[(1)] = (8));

} else {
var statearr_36621_36641 = state_36617__$1;
(statearr_36621_36641[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36618 === (1))){
var inst_36586 = cljs.core.vec.call(null,chs);
var inst_36587 = inst_36586;
var state_36617__$1 = (function (){var statearr_36622 = state_36617;
(statearr_36622[(10)] = inst_36587);

return statearr_36622;
})();
var statearr_36623_36642 = state_36617__$1;
(statearr_36623_36642[(2)] = null);

(statearr_36623_36642[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36618 === (4))){
var inst_36587 = (state_36617[(10)]);
var state_36617__$1 = state_36617;
return cljs.core.async.ioc_alts_BANG_.call(null,state_36617__$1,(7),inst_36587);
} else {
if((state_val_36618 === (6))){
var inst_36613 = (state_36617[(2)]);
var state_36617__$1 = state_36617;
var statearr_36624_36643 = state_36617__$1;
(statearr_36624_36643[(2)] = inst_36613);

(statearr_36624_36643[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36618 === (3))){
var inst_36615 = (state_36617[(2)]);
var state_36617__$1 = state_36617;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36617__$1,inst_36615);
} else {
if((state_val_36618 === (2))){
var inst_36587 = (state_36617[(10)]);
var inst_36589 = cljs.core.count.call(null,inst_36587);
var inst_36590 = (inst_36589 > (0));
var state_36617__$1 = state_36617;
if(cljs.core.truth_(inst_36590)){
var statearr_36626_36644 = state_36617__$1;
(statearr_36626_36644[(1)] = (4));

} else {
var statearr_36627_36645 = state_36617__$1;
(statearr_36627_36645[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36618 === (11))){
var inst_36587 = (state_36617[(10)]);
var inst_36606 = (state_36617[(2)]);
var tmp36625 = inst_36587;
var inst_36587__$1 = tmp36625;
var state_36617__$1 = (function (){var statearr_36628 = state_36617;
(statearr_36628[(11)] = inst_36606);

(statearr_36628[(10)] = inst_36587__$1);

return statearr_36628;
})();
var statearr_36629_36646 = state_36617__$1;
(statearr_36629_36646[(2)] = null);

(statearr_36629_36646[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36618 === (9))){
var inst_36597 = (state_36617[(8)]);
var state_36617__$1 = state_36617;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36617__$1,(11),out,inst_36597);
} else {
if((state_val_36618 === (5))){
var inst_36611 = cljs.core.async.close_BANG_.call(null,out);
var state_36617__$1 = state_36617;
var statearr_36630_36647 = state_36617__$1;
(statearr_36630_36647[(2)] = inst_36611);

(statearr_36630_36647[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36618 === (10))){
var inst_36609 = (state_36617[(2)]);
var state_36617__$1 = state_36617;
var statearr_36631_36648 = state_36617__$1;
(statearr_36631_36648[(2)] = inst_36609);

(statearr_36631_36648[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36618 === (8))){
var inst_36598 = (state_36617[(9)]);
var inst_36596 = (state_36617[(7)]);
var inst_36597 = (state_36617[(8)]);
var inst_36587 = (state_36617[(10)]);
var inst_36601 = (function (){var cs = inst_36587;
var vec__36592 = inst_36596;
var v = inst_36597;
var c = inst_36598;
return (function (p1__36583_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__36583_SHARP_);
});
})();
var inst_36602 = cljs.core.filterv.call(null,inst_36601,inst_36587);
var inst_36587__$1 = inst_36602;
var state_36617__$1 = (function (){var statearr_36632 = state_36617;
(statearr_36632[(10)] = inst_36587__$1);

return statearr_36632;
})();
var statearr_36633_36649 = state_36617__$1;
(statearr_36633_36649[(2)] = null);

(statearr_36633_36649[(1)] = (2));


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
var cljs$core$async$state_machine__35120__auto__ = null;
var cljs$core$async$state_machine__35120__auto____0 = (function (){
var statearr_36634 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36634[(0)] = cljs$core$async$state_machine__35120__auto__);

(statearr_36634[(1)] = (1));

return statearr_36634;
});
var cljs$core$async$state_machine__35120__auto____1 = (function (state_36617){
while(true){
var ret_value__35121__auto__ = (function (){try{while(true){
var result__35122__auto__ = switch__35119__auto__.call(null,state_36617);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35122__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35122__auto__;
}
break;
}
}catch (e36635){if((e36635 instanceof Object)){
var ex__35123__auto__ = e36635;
var statearr_36636_36650 = state_36617;
(statearr_36636_36650[(5)] = ex__35123__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36617);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36635;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35121__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36651 = state_36617;
state_36617 = G__36651;
continue;
} else {
return ret_value__35121__auto__;
}
break;
}
});
cljs$core$async$state_machine__35120__auto__ = function(state_36617){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35120__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35120__auto____1.call(this,state_36617);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35120__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35120__auto____0;
cljs$core$async$state_machine__35120__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35120__auto____1;
return cljs$core$async$state_machine__35120__auto__;
})()
})();
var state__35216__auto__ = (function (){var statearr_36637 = f__35215__auto__.call(null);
(statearr_36637[(6)] = c__35214__auto___36639);

return statearr_36637;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35216__auto__);
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
var G__36653 = arguments.length;
switch (G__36653) {
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
var c__35214__auto___36698 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__35215__auto__ = (function (){var switch__35119__auto__ = (function (state_36677){
var state_val_36678 = (state_36677[(1)]);
if((state_val_36678 === (7))){
var inst_36659 = (state_36677[(7)]);
var inst_36659__$1 = (state_36677[(2)]);
var inst_36660 = (inst_36659__$1 == null);
var inst_36661 = cljs.core.not.call(null,inst_36660);
var state_36677__$1 = (function (){var statearr_36679 = state_36677;
(statearr_36679[(7)] = inst_36659__$1);

return statearr_36679;
})();
if(inst_36661){
var statearr_36680_36699 = state_36677__$1;
(statearr_36680_36699[(1)] = (8));

} else {
var statearr_36681_36700 = state_36677__$1;
(statearr_36681_36700[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36678 === (1))){
var inst_36654 = (0);
var state_36677__$1 = (function (){var statearr_36682 = state_36677;
(statearr_36682[(8)] = inst_36654);

return statearr_36682;
})();
var statearr_36683_36701 = state_36677__$1;
(statearr_36683_36701[(2)] = null);

(statearr_36683_36701[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36678 === (4))){
var state_36677__$1 = state_36677;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36677__$1,(7),ch);
} else {
if((state_val_36678 === (6))){
var inst_36672 = (state_36677[(2)]);
var state_36677__$1 = state_36677;
var statearr_36684_36702 = state_36677__$1;
(statearr_36684_36702[(2)] = inst_36672);

(statearr_36684_36702[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36678 === (3))){
var inst_36674 = (state_36677[(2)]);
var inst_36675 = cljs.core.async.close_BANG_.call(null,out);
var state_36677__$1 = (function (){var statearr_36685 = state_36677;
(statearr_36685[(9)] = inst_36674);

return statearr_36685;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36677__$1,inst_36675);
} else {
if((state_val_36678 === (2))){
var inst_36654 = (state_36677[(8)]);
var inst_36656 = (inst_36654 < n);
var state_36677__$1 = state_36677;
if(cljs.core.truth_(inst_36656)){
var statearr_36686_36703 = state_36677__$1;
(statearr_36686_36703[(1)] = (4));

} else {
var statearr_36687_36704 = state_36677__$1;
(statearr_36687_36704[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36678 === (11))){
var inst_36654 = (state_36677[(8)]);
var inst_36664 = (state_36677[(2)]);
var inst_36665 = (inst_36654 + (1));
var inst_36654__$1 = inst_36665;
var state_36677__$1 = (function (){var statearr_36688 = state_36677;
(statearr_36688[(10)] = inst_36664);

(statearr_36688[(8)] = inst_36654__$1);

return statearr_36688;
})();
var statearr_36689_36705 = state_36677__$1;
(statearr_36689_36705[(2)] = null);

(statearr_36689_36705[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36678 === (9))){
var state_36677__$1 = state_36677;
var statearr_36690_36706 = state_36677__$1;
(statearr_36690_36706[(2)] = null);

(statearr_36690_36706[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36678 === (5))){
var state_36677__$1 = state_36677;
var statearr_36691_36707 = state_36677__$1;
(statearr_36691_36707[(2)] = null);

(statearr_36691_36707[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36678 === (10))){
var inst_36669 = (state_36677[(2)]);
var state_36677__$1 = state_36677;
var statearr_36692_36708 = state_36677__$1;
(statearr_36692_36708[(2)] = inst_36669);

(statearr_36692_36708[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36678 === (8))){
var inst_36659 = (state_36677[(7)]);
var state_36677__$1 = state_36677;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36677__$1,(11),out,inst_36659);
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
var cljs$core$async$state_machine__35120__auto__ = null;
var cljs$core$async$state_machine__35120__auto____0 = (function (){
var statearr_36693 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36693[(0)] = cljs$core$async$state_machine__35120__auto__);

(statearr_36693[(1)] = (1));

return statearr_36693;
});
var cljs$core$async$state_machine__35120__auto____1 = (function (state_36677){
while(true){
var ret_value__35121__auto__ = (function (){try{while(true){
var result__35122__auto__ = switch__35119__auto__.call(null,state_36677);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35122__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35122__auto__;
}
break;
}
}catch (e36694){if((e36694 instanceof Object)){
var ex__35123__auto__ = e36694;
var statearr_36695_36709 = state_36677;
(statearr_36695_36709[(5)] = ex__35123__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36677);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36694;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35121__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36710 = state_36677;
state_36677 = G__36710;
continue;
} else {
return ret_value__35121__auto__;
}
break;
}
});
cljs$core$async$state_machine__35120__auto__ = function(state_36677){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35120__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35120__auto____1.call(this,state_36677);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35120__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35120__auto____0;
cljs$core$async$state_machine__35120__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35120__auto____1;
return cljs$core$async$state_machine__35120__auto__;
})()
})();
var state__35216__auto__ = (function (){var statearr_36696 = f__35215__auto__.call(null);
(statearr_36696[(6)] = c__35214__auto___36698);

return statearr_36696;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35216__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36712 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36712 = (function (f,ch,meta36713){
this.f = f;
this.ch = ch;
this.meta36713 = meta36713;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36712.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36714,meta36713__$1){
var self__ = this;
var _36714__$1 = this;
return (new cljs.core.async.t_cljs$core$async36712(self__.f,self__.ch,meta36713__$1));
}));

(cljs.core.async.t_cljs$core$async36712.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36714){
var self__ = this;
var _36714__$1 = this;
return self__.meta36713;
}));

(cljs.core.async.t_cljs$core$async36712.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36712.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async36712.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async36712.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36712.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36715 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36715 = (function (f,ch,meta36713,_,fn1,meta36716){
this.f = f;
this.ch = ch;
this.meta36713 = meta36713;
this._ = _;
this.fn1 = fn1;
this.meta36716 = meta36716;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36715.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36717,meta36716__$1){
var self__ = this;
var _36717__$1 = this;
return (new cljs.core.async.t_cljs$core$async36715(self__.f,self__.ch,self__.meta36713,self__._,self__.fn1,meta36716__$1));
}));

(cljs.core.async.t_cljs$core$async36715.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36717){
var self__ = this;
var _36717__$1 = this;
return self__.meta36716;
}));

(cljs.core.async.t_cljs$core$async36715.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36715.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
}));

(cljs.core.async.t_cljs$core$async36715.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async36715.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return (function (p1__36711_SHARP_){
return f1.call(null,(((p1__36711_SHARP_ == null))?null:self__.f.call(null,p1__36711_SHARP_)));
});
}));

(cljs.core.async.t_cljs$core$async36715.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36713","meta36713",219250593,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async36712","cljs.core.async/t_cljs$core$async36712",137768779,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta36716","meta36716",-185601475,null)], null);
}));

(cljs.core.async.t_cljs$core$async36715.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36715.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36715");

(cljs.core.async.t_cljs$core$async36715.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async36715");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36715.
 */
cljs.core.async.__GT_t_cljs$core$async36715 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async36715(f__$1,ch__$1,meta36713__$1,___$2,fn1__$1,meta36716){
return (new cljs.core.async.t_cljs$core$async36715(f__$1,ch__$1,meta36713__$1,___$2,fn1__$1,meta36716));
});

}

return (new cljs.core.async.t_cljs$core$async36715(self__.f,self__.ch,self__.meta36713,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

(cljs.core.async.t_cljs$core$async36712.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36712.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async36712.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36713","meta36713",219250593,null)], null);
}));

(cljs.core.async.t_cljs$core$async36712.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36712.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36712");

(cljs.core.async.t_cljs$core$async36712.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async36712");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36712.
 */
cljs.core.async.__GT_t_cljs$core$async36712 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async36712(f__$1,ch__$1,meta36713){
return (new cljs.core.async.t_cljs$core$async36712(f__$1,ch__$1,meta36713));
});

}

return (new cljs.core.async.t_cljs$core$async36712(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36718 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36718 = (function (f,ch,meta36719){
this.f = f;
this.ch = ch;
this.meta36719 = meta36719;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36718.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36720,meta36719__$1){
var self__ = this;
var _36720__$1 = this;
return (new cljs.core.async.t_cljs$core$async36718(self__.f,self__.ch,meta36719__$1));
}));

(cljs.core.async.t_cljs$core$async36718.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36720){
var self__ = this;
var _36720__$1 = this;
return self__.meta36719;
}));

(cljs.core.async.t_cljs$core$async36718.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36718.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async36718.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36718.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async36718.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36718.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
}));

(cljs.core.async.t_cljs$core$async36718.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36719","meta36719",397075684,null)], null);
}));

(cljs.core.async.t_cljs$core$async36718.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36718.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36718");

(cljs.core.async.t_cljs$core$async36718.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async36718");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36718.
 */
cljs.core.async.__GT_t_cljs$core$async36718 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async36718(f__$1,ch__$1,meta36719){
return (new cljs.core.async.t_cljs$core$async36718(f__$1,ch__$1,meta36719));
});

}

return (new cljs.core.async.t_cljs$core$async36718(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36721 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36721 = (function (p,ch,meta36722){
this.p = p;
this.ch = ch;
this.meta36722 = meta36722;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36721.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36723,meta36722__$1){
var self__ = this;
var _36723__$1 = this;
return (new cljs.core.async.t_cljs$core$async36721(self__.p,self__.ch,meta36722__$1));
}));

(cljs.core.async.t_cljs$core$async36721.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36723){
var self__ = this;
var _36723__$1 = this;
return self__.meta36722;
}));

(cljs.core.async.t_cljs$core$async36721.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36721.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async36721.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async36721.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36721.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async36721.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36721.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async36721.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36722","meta36722",-1507631744,null)], null);
}));

(cljs.core.async.t_cljs$core$async36721.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36721.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36721");

(cljs.core.async.t_cljs$core$async36721.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async36721");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36721.
 */
cljs.core.async.__GT_t_cljs$core$async36721 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async36721(p__$1,ch__$1,meta36722){
return (new cljs.core.async.t_cljs$core$async36721(p__$1,ch__$1,meta36722));
});

}

return (new cljs.core.async.t_cljs$core$async36721(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__36725 = arguments.length;
switch (G__36725) {
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
var c__35214__auto___36765 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__35215__auto__ = (function (){var switch__35119__auto__ = (function (state_36746){
var state_val_36747 = (state_36746[(1)]);
if((state_val_36747 === (7))){
var inst_36742 = (state_36746[(2)]);
var state_36746__$1 = state_36746;
var statearr_36748_36766 = state_36746__$1;
(statearr_36748_36766[(2)] = inst_36742);

(statearr_36748_36766[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36747 === (1))){
var state_36746__$1 = state_36746;
var statearr_36749_36767 = state_36746__$1;
(statearr_36749_36767[(2)] = null);

(statearr_36749_36767[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36747 === (4))){
var inst_36728 = (state_36746[(7)]);
var inst_36728__$1 = (state_36746[(2)]);
var inst_36729 = (inst_36728__$1 == null);
var state_36746__$1 = (function (){var statearr_36750 = state_36746;
(statearr_36750[(7)] = inst_36728__$1);

return statearr_36750;
})();
if(cljs.core.truth_(inst_36729)){
var statearr_36751_36768 = state_36746__$1;
(statearr_36751_36768[(1)] = (5));

} else {
var statearr_36752_36769 = state_36746__$1;
(statearr_36752_36769[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36747 === (6))){
var inst_36728 = (state_36746[(7)]);
var inst_36733 = p.call(null,inst_36728);
var state_36746__$1 = state_36746;
if(cljs.core.truth_(inst_36733)){
var statearr_36753_36770 = state_36746__$1;
(statearr_36753_36770[(1)] = (8));

} else {
var statearr_36754_36771 = state_36746__$1;
(statearr_36754_36771[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36747 === (3))){
var inst_36744 = (state_36746[(2)]);
var state_36746__$1 = state_36746;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36746__$1,inst_36744);
} else {
if((state_val_36747 === (2))){
var state_36746__$1 = state_36746;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36746__$1,(4),ch);
} else {
if((state_val_36747 === (11))){
var inst_36736 = (state_36746[(2)]);
var state_36746__$1 = state_36746;
var statearr_36755_36772 = state_36746__$1;
(statearr_36755_36772[(2)] = inst_36736);

(statearr_36755_36772[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36747 === (9))){
var state_36746__$1 = state_36746;
var statearr_36756_36773 = state_36746__$1;
(statearr_36756_36773[(2)] = null);

(statearr_36756_36773[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36747 === (5))){
var inst_36731 = cljs.core.async.close_BANG_.call(null,out);
var state_36746__$1 = state_36746;
var statearr_36757_36774 = state_36746__$1;
(statearr_36757_36774[(2)] = inst_36731);

(statearr_36757_36774[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36747 === (10))){
var inst_36739 = (state_36746[(2)]);
var state_36746__$1 = (function (){var statearr_36758 = state_36746;
(statearr_36758[(8)] = inst_36739);

return statearr_36758;
})();
var statearr_36759_36775 = state_36746__$1;
(statearr_36759_36775[(2)] = null);

(statearr_36759_36775[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36747 === (8))){
var inst_36728 = (state_36746[(7)]);
var state_36746__$1 = state_36746;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36746__$1,(11),out,inst_36728);
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
var cljs$core$async$state_machine__35120__auto__ = null;
var cljs$core$async$state_machine__35120__auto____0 = (function (){
var statearr_36760 = [null,null,null,null,null,null,null,null,null];
(statearr_36760[(0)] = cljs$core$async$state_machine__35120__auto__);

(statearr_36760[(1)] = (1));

return statearr_36760;
});
var cljs$core$async$state_machine__35120__auto____1 = (function (state_36746){
while(true){
var ret_value__35121__auto__ = (function (){try{while(true){
var result__35122__auto__ = switch__35119__auto__.call(null,state_36746);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35122__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35122__auto__;
}
break;
}
}catch (e36761){if((e36761 instanceof Object)){
var ex__35123__auto__ = e36761;
var statearr_36762_36776 = state_36746;
(statearr_36762_36776[(5)] = ex__35123__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36746);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36761;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35121__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36777 = state_36746;
state_36746 = G__36777;
continue;
} else {
return ret_value__35121__auto__;
}
break;
}
});
cljs$core$async$state_machine__35120__auto__ = function(state_36746){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35120__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35120__auto____1.call(this,state_36746);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35120__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35120__auto____0;
cljs$core$async$state_machine__35120__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35120__auto____1;
return cljs$core$async$state_machine__35120__auto__;
})()
})();
var state__35216__auto__ = (function (){var statearr_36763 = f__35215__auto__.call(null);
(statearr_36763[(6)] = c__35214__auto___36765);

return statearr_36763;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35216__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__36779 = arguments.length;
switch (G__36779) {
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
var c__35214__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__35215__auto__ = (function (){var switch__35119__auto__ = (function (state_36842){
var state_val_36843 = (state_36842[(1)]);
if((state_val_36843 === (7))){
var inst_36838 = (state_36842[(2)]);
var state_36842__$1 = state_36842;
var statearr_36844_36882 = state_36842__$1;
(statearr_36844_36882[(2)] = inst_36838);

(statearr_36844_36882[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36843 === (20))){
var inst_36808 = (state_36842[(7)]);
var inst_36819 = (state_36842[(2)]);
var inst_36820 = cljs.core.next.call(null,inst_36808);
var inst_36794 = inst_36820;
var inst_36795 = null;
var inst_36796 = (0);
var inst_36797 = (0);
var state_36842__$1 = (function (){var statearr_36845 = state_36842;
(statearr_36845[(8)] = inst_36796);

(statearr_36845[(9)] = inst_36794);

(statearr_36845[(10)] = inst_36797);

(statearr_36845[(11)] = inst_36819);

(statearr_36845[(12)] = inst_36795);

return statearr_36845;
})();
var statearr_36846_36883 = state_36842__$1;
(statearr_36846_36883[(2)] = null);

(statearr_36846_36883[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36843 === (1))){
var state_36842__$1 = state_36842;
var statearr_36847_36884 = state_36842__$1;
(statearr_36847_36884[(2)] = null);

(statearr_36847_36884[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36843 === (4))){
var inst_36783 = (state_36842[(13)]);
var inst_36783__$1 = (state_36842[(2)]);
var inst_36784 = (inst_36783__$1 == null);
var state_36842__$1 = (function (){var statearr_36848 = state_36842;
(statearr_36848[(13)] = inst_36783__$1);

return statearr_36848;
})();
if(cljs.core.truth_(inst_36784)){
var statearr_36849_36885 = state_36842__$1;
(statearr_36849_36885[(1)] = (5));

} else {
var statearr_36850_36886 = state_36842__$1;
(statearr_36850_36886[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36843 === (15))){
var state_36842__$1 = state_36842;
var statearr_36854_36887 = state_36842__$1;
(statearr_36854_36887[(2)] = null);

(statearr_36854_36887[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36843 === (21))){
var state_36842__$1 = state_36842;
var statearr_36855_36888 = state_36842__$1;
(statearr_36855_36888[(2)] = null);

(statearr_36855_36888[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36843 === (13))){
var inst_36796 = (state_36842[(8)]);
var inst_36794 = (state_36842[(9)]);
var inst_36797 = (state_36842[(10)]);
var inst_36795 = (state_36842[(12)]);
var inst_36804 = (state_36842[(2)]);
var inst_36805 = (inst_36797 + (1));
var tmp36851 = inst_36796;
var tmp36852 = inst_36794;
var tmp36853 = inst_36795;
var inst_36794__$1 = tmp36852;
var inst_36795__$1 = tmp36853;
var inst_36796__$1 = tmp36851;
var inst_36797__$1 = inst_36805;
var state_36842__$1 = (function (){var statearr_36856 = state_36842;
(statearr_36856[(8)] = inst_36796__$1);

(statearr_36856[(9)] = inst_36794__$1);

(statearr_36856[(10)] = inst_36797__$1);

(statearr_36856[(14)] = inst_36804);

(statearr_36856[(12)] = inst_36795__$1);

return statearr_36856;
})();
var statearr_36857_36889 = state_36842__$1;
(statearr_36857_36889[(2)] = null);

(statearr_36857_36889[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36843 === (22))){
var state_36842__$1 = state_36842;
var statearr_36858_36890 = state_36842__$1;
(statearr_36858_36890[(2)] = null);

(statearr_36858_36890[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36843 === (6))){
var inst_36783 = (state_36842[(13)]);
var inst_36792 = f.call(null,inst_36783);
var inst_36793 = cljs.core.seq.call(null,inst_36792);
var inst_36794 = inst_36793;
var inst_36795 = null;
var inst_36796 = (0);
var inst_36797 = (0);
var state_36842__$1 = (function (){var statearr_36859 = state_36842;
(statearr_36859[(8)] = inst_36796);

(statearr_36859[(9)] = inst_36794);

(statearr_36859[(10)] = inst_36797);

(statearr_36859[(12)] = inst_36795);

return statearr_36859;
})();
var statearr_36860_36891 = state_36842__$1;
(statearr_36860_36891[(2)] = null);

(statearr_36860_36891[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36843 === (17))){
var inst_36808 = (state_36842[(7)]);
var inst_36812 = cljs.core.chunk_first.call(null,inst_36808);
var inst_36813 = cljs.core.chunk_rest.call(null,inst_36808);
var inst_36814 = cljs.core.count.call(null,inst_36812);
var inst_36794 = inst_36813;
var inst_36795 = inst_36812;
var inst_36796 = inst_36814;
var inst_36797 = (0);
var state_36842__$1 = (function (){var statearr_36861 = state_36842;
(statearr_36861[(8)] = inst_36796);

(statearr_36861[(9)] = inst_36794);

(statearr_36861[(10)] = inst_36797);

(statearr_36861[(12)] = inst_36795);

return statearr_36861;
})();
var statearr_36862_36892 = state_36842__$1;
(statearr_36862_36892[(2)] = null);

(statearr_36862_36892[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36843 === (3))){
var inst_36840 = (state_36842[(2)]);
var state_36842__$1 = state_36842;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36842__$1,inst_36840);
} else {
if((state_val_36843 === (12))){
var inst_36828 = (state_36842[(2)]);
var state_36842__$1 = state_36842;
var statearr_36863_36893 = state_36842__$1;
(statearr_36863_36893[(2)] = inst_36828);

(statearr_36863_36893[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36843 === (2))){
var state_36842__$1 = state_36842;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36842__$1,(4),in$);
} else {
if((state_val_36843 === (23))){
var inst_36836 = (state_36842[(2)]);
var state_36842__$1 = state_36842;
var statearr_36864_36894 = state_36842__$1;
(statearr_36864_36894[(2)] = inst_36836);

(statearr_36864_36894[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36843 === (19))){
var inst_36823 = (state_36842[(2)]);
var state_36842__$1 = state_36842;
var statearr_36865_36895 = state_36842__$1;
(statearr_36865_36895[(2)] = inst_36823);

(statearr_36865_36895[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36843 === (11))){
var inst_36794 = (state_36842[(9)]);
var inst_36808 = (state_36842[(7)]);
var inst_36808__$1 = cljs.core.seq.call(null,inst_36794);
var state_36842__$1 = (function (){var statearr_36866 = state_36842;
(statearr_36866[(7)] = inst_36808__$1);

return statearr_36866;
})();
if(inst_36808__$1){
var statearr_36867_36896 = state_36842__$1;
(statearr_36867_36896[(1)] = (14));

} else {
var statearr_36868_36897 = state_36842__$1;
(statearr_36868_36897[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36843 === (9))){
var inst_36830 = (state_36842[(2)]);
var inst_36831 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_36842__$1 = (function (){var statearr_36869 = state_36842;
(statearr_36869[(15)] = inst_36830);

return statearr_36869;
})();
if(cljs.core.truth_(inst_36831)){
var statearr_36870_36898 = state_36842__$1;
(statearr_36870_36898[(1)] = (21));

} else {
var statearr_36871_36899 = state_36842__$1;
(statearr_36871_36899[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36843 === (5))){
var inst_36786 = cljs.core.async.close_BANG_.call(null,out);
var state_36842__$1 = state_36842;
var statearr_36872_36900 = state_36842__$1;
(statearr_36872_36900[(2)] = inst_36786);

(statearr_36872_36900[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36843 === (14))){
var inst_36808 = (state_36842[(7)]);
var inst_36810 = cljs.core.chunked_seq_QMARK_.call(null,inst_36808);
var state_36842__$1 = state_36842;
if(inst_36810){
var statearr_36873_36901 = state_36842__$1;
(statearr_36873_36901[(1)] = (17));

} else {
var statearr_36874_36902 = state_36842__$1;
(statearr_36874_36902[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36843 === (16))){
var inst_36826 = (state_36842[(2)]);
var state_36842__$1 = state_36842;
var statearr_36875_36903 = state_36842__$1;
(statearr_36875_36903[(2)] = inst_36826);

(statearr_36875_36903[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36843 === (10))){
var inst_36797 = (state_36842[(10)]);
var inst_36795 = (state_36842[(12)]);
var inst_36802 = cljs.core._nth.call(null,inst_36795,inst_36797);
var state_36842__$1 = state_36842;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36842__$1,(13),out,inst_36802);
} else {
if((state_val_36843 === (18))){
var inst_36808 = (state_36842[(7)]);
var inst_36817 = cljs.core.first.call(null,inst_36808);
var state_36842__$1 = state_36842;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36842__$1,(20),out,inst_36817);
} else {
if((state_val_36843 === (8))){
var inst_36796 = (state_36842[(8)]);
var inst_36797 = (state_36842[(10)]);
var inst_36799 = (inst_36797 < inst_36796);
var inst_36800 = inst_36799;
var state_36842__$1 = state_36842;
if(cljs.core.truth_(inst_36800)){
var statearr_36876_36904 = state_36842__$1;
(statearr_36876_36904[(1)] = (10));

} else {
var statearr_36877_36905 = state_36842__$1;
(statearr_36877_36905[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__35120__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__35120__auto____0 = (function (){
var statearr_36878 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36878[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__35120__auto__);

(statearr_36878[(1)] = (1));

return statearr_36878;
});
var cljs$core$async$mapcat_STAR__$_state_machine__35120__auto____1 = (function (state_36842){
while(true){
var ret_value__35121__auto__ = (function (){try{while(true){
var result__35122__auto__ = switch__35119__auto__.call(null,state_36842);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35122__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35122__auto__;
}
break;
}
}catch (e36879){if((e36879 instanceof Object)){
var ex__35123__auto__ = e36879;
var statearr_36880_36906 = state_36842;
(statearr_36880_36906[(5)] = ex__35123__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36842);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36879;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35121__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36907 = state_36842;
state_36842 = G__36907;
continue;
} else {
return ret_value__35121__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__35120__auto__ = function(state_36842){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__35120__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__35120__auto____1.call(this,state_36842);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__35120__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__35120__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__35120__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__35120__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__35120__auto__;
})()
})();
var state__35216__auto__ = (function (){var statearr_36881 = f__35215__auto__.call(null);
(statearr_36881[(6)] = c__35214__auto__);

return statearr_36881;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35216__auto__);
}));

return c__35214__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__36909 = arguments.length;
switch (G__36909) {
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
var G__36912 = arguments.length;
switch (G__36912) {
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
var G__36915 = arguments.length;
switch (G__36915) {
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
var c__35214__auto___36962 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__35215__auto__ = (function (){var switch__35119__auto__ = (function (state_36939){
var state_val_36940 = (state_36939[(1)]);
if((state_val_36940 === (7))){
var inst_36934 = (state_36939[(2)]);
var state_36939__$1 = state_36939;
var statearr_36941_36963 = state_36939__$1;
(statearr_36941_36963[(2)] = inst_36934);

(statearr_36941_36963[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36940 === (1))){
var inst_36916 = null;
var state_36939__$1 = (function (){var statearr_36942 = state_36939;
(statearr_36942[(7)] = inst_36916);

return statearr_36942;
})();
var statearr_36943_36964 = state_36939__$1;
(statearr_36943_36964[(2)] = null);

(statearr_36943_36964[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36940 === (4))){
var inst_36919 = (state_36939[(8)]);
var inst_36919__$1 = (state_36939[(2)]);
var inst_36920 = (inst_36919__$1 == null);
var inst_36921 = cljs.core.not.call(null,inst_36920);
var state_36939__$1 = (function (){var statearr_36944 = state_36939;
(statearr_36944[(8)] = inst_36919__$1);

return statearr_36944;
})();
if(inst_36921){
var statearr_36945_36965 = state_36939__$1;
(statearr_36945_36965[(1)] = (5));

} else {
var statearr_36946_36966 = state_36939__$1;
(statearr_36946_36966[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36940 === (6))){
var state_36939__$1 = state_36939;
var statearr_36947_36967 = state_36939__$1;
(statearr_36947_36967[(2)] = null);

(statearr_36947_36967[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36940 === (3))){
var inst_36936 = (state_36939[(2)]);
var inst_36937 = cljs.core.async.close_BANG_.call(null,out);
var state_36939__$1 = (function (){var statearr_36948 = state_36939;
(statearr_36948[(9)] = inst_36936);

return statearr_36948;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36939__$1,inst_36937);
} else {
if((state_val_36940 === (2))){
var state_36939__$1 = state_36939;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36939__$1,(4),ch);
} else {
if((state_val_36940 === (11))){
var inst_36919 = (state_36939[(8)]);
var inst_36928 = (state_36939[(2)]);
var inst_36916 = inst_36919;
var state_36939__$1 = (function (){var statearr_36949 = state_36939;
(statearr_36949[(7)] = inst_36916);

(statearr_36949[(10)] = inst_36928);

return statearr_36949;
})();
var statearr_36950_36968 = state_36939__$1;
(statearr_36950_36968[(2)] = null);

(statearr_36950_36968[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36940 === (9))){
var inst_36919 = (state_36939[(8)]);
var state_36939__$1 = state_36939;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36939__$1,(11),out,inst_36919);
} else {
if((state_val_36940 === (5))){
var inst_36916 = (state_36939[(7)]);
var inst_36919 = (state_36939[(8)]);
var inst_36923 = cljs.core._EQ_.call(null,inst_36919,inst_36916);
var state_36939__$1 = state_36939;
if(inst_36923){
var statearr_36952_36969 = state_36939__$1;
(statearr_36952_36969[(1)] = (8));

} else {
var statearr_36953_36970 = state_36939__$1;
(statearr_36953_36970[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36940 === (10))){
var inst_36931 = (state_36939[(2)]);
var state_36939__$1 = state_36939;
var statearr_36954_36971 = state_36939__$1;
(statearr_36954_36971[(2)] = inst_36931);

(statearr_36954_36971[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36940 === (8))){
var inst_36916 = (state_36939[(7)]);
var tmp36951 = inst_36916;
var inst_36916__$1 = tmp36951;
var state_36939__$1 = (function (){var statearr_36955 = state_36939;
(statearr_36955[(7)] = inst_36916__$1);

return statearr_36955;
})();
var statearr_36956_36972 = state_36939__$1;
(statearr_36956_36972[(2)] = null);

(statearr_36956_36972[(1)] = (2));


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
var cljs$core$async$state_machine__35120__auto__ = null;
var cljs$core$async$state_machine__35120__auto____0 = (function (){
var statearr_36957 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36957[(0)] = cljs$core$async$state_machine__35120__auto__);

(statearr_36957[(1)] = (1));

return statearr_36957;
});
var cljs$core$async$state_machine__35120__auto____1 = (function (state_36939){
while(true){
var ret_value__35121__auto__ = (function (){try{while(true){
var result__35122__auto__ = switch__35119__auto__.call(null,state_36939);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35122__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35122__auto__;
}
break;
}
}catch (e36958){if((e36958 instanceof Object)){
var ex__35123__auto__ = e36958;
var statearr_36959_36973 = state_36939;
(statearr_36959_36973[(5)] = ex__35123__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36939);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36958;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35121__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36974 = state_36939;
state_36939 = G__36974;
continue;
} else {
return ret_value__35121__auto__;
}
break;
}
});
cljs$core$async$state_machine__35120__auto__ = function(state_36939){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35120__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35120__auto____1.call(this,state_36939);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35120__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35120__auto____0;
cljs$core$async$state_machine__35120__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35120__auto____1;
return cljs$core$async$state_machine__35120__auto__;
})()
})();
var state__35216__auto__ = (function (){var statearr_36960 = f__35215__auto__.call(null);
(statearr_36960[(6)] = c__35214__auto___36962);

return statearr_36960;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35216__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__36976 = arguments.length;
switch (G__36976) {
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
var c__35214__auto___37042 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__35215__auto__ = (function (){var switch__35119__auto__ = (function (state_37014){
var state_val_37015 = (state_37014[(1)]);
if((state_val_37015 === (7))){
var inst_37010 = (state_37014[(2)]);
var state_37014__$1 = state_37014;
var statearr_37016_37043 = state_37014__$1;
(statearr_37016_37043[(2)] = inst_37010);

(statearr_37016_37043[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37015 === (1))){
var inst_36977 = (new Array(n));
var inst_36978 = inst_36977;
var inst_36979 = (0);
var state_37014__$1 = (function (){var statearr_37017 = state_37014;
(statearr_37017[(7)] = inst_36978);

(statearr_37017[(8)] = inst_36979);

return statearr_37017;
})();
var statearr_37018_37044 = state_37014__$1;
(statearr_37018_37044[(2)] = null);

(statearr_37018_37044[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37015 === (4))){
var inst_36982 = (state_37014[(9)]);
var inst_36982__$1 = (state_37014[(2)]);
var inst_36983 = (inst_36982__$1 == null);
var inst_36984 = cljs.core.not.call(null,inst_36983);
var state_37014__$1 = (function (){var statearr_37019 = state_37014;
(statearr_37019[(9)] = inst_36982__$1);

return statearr_37019;
})();
if(inst_36984){
var statearr_37020_37045 = state_37014__$1;
(statearr_37020_37045[(1)] = (5));

} else {
var statearr_37021_37046 = state_37014__$1;
(statearr_37021_37046[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37015 === (15))){
var inst_37004 = (state_37014[(2)]);
var state_37014__$1 = state_37014;
var statearr_37022_37047 = state_37014__$1;
(statearr_37022_37047[(2)] = inst_37004);

(statearr_37022_37047[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37015 === (13))){
var state_37014__$1 = state_37014;
var statearr_37023_37048 = state_37014__$1;
(statearr_37023_37048[(2)] = null);

(statearr_37023_37048[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37015 === (6))){
var inst_36979 = (state_37014[(8)]);
var inst_37000 = (inst_36979 > (0));
var state_37014__$1 = state_37014;
if(cljs.core.truth_(inst_37000)){
var statearr_37024_37049 = state_37014__$1;
(statearr_37024_37049[(1)] = (12));

} else {
var statearr_37025_37050 = state_37014__$1;
(statearr_37025_37050[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37015 === (3))){
var inst_37012 = (state_37014[(2)]);
var state_37014__$1 = state_37014;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37014__$1,inst_37012);
} else {
if((state_val_37015 === (12))){
var inst_36978 = (state_37014[(7)]);
var inst_37002 = cljs.core.vec.call(null,inst_36978);
var state_37014__$1 = state_37014;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37014__$1,(15),out,inst_37002);
} else {
if((state_val_37015 === (2))){
var state_37014__$1 = state_37014;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37014__$1,(4),ch);
} else {
if((state_val_37015 === (11))){
var inst_36994 = (state_37014[(2)]);
var inst_36995 = (new Array(n));
var inst_36978 = inst_36995;
var inst_36979 = (0);
var state_37014__$1 = (function (){var statearr_37026 = state_37014;
(statearr_37026[(7)] = inst_36978);

(statearr_37026[(10)] = inst_36994);

(statearr_37026[(8)] = inst_36979);

return statearr_37026;
})();
var statearr_37027_37051 = state_37014__$1;
(statearr_37027_37051[(2)] = null);

(statearr_37027_37051[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37015 === (9))){
var inst_36978 = (state_37014[(7)]);
var inst_36992 = cljs.core.vec.call(null,inst_36978);
var state_37014__$1 = state_37014;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37014__$1,(11),out,inst_36992);
} else {
if((state_val_37015 === (5))){
var inst_36978 = (state_37014[(7)]);
var inst_36982 = (state_37014[(9)]);
var inst_36987 = (state_37014[(11)]);
var inst_36979 = (state_37014[(8)]);
var inst_36986 = (inst_36978[inst_36979] = inst_36982);
var inst_36987__$1 = (inst_36979 + (1));
var inst_36988 = (inst_36987__$1 < n);
var state_37014__$1 = (function (){var statearr_37028 = state_37014;
(statearr_37028[(11)] = inst_36987__$1);

(statearr_37028[(12)] = inst_36986);

return statearr_37028;
})();
if(cljs.core.truth_(inst_36988)){
var statearr_37029_37052 = state_37014__$1;
(statearr_37029_37052[(1)] = (8));

} else {
var statearr_37030_37053 = state_37014__$1;
(statearr_37030_37053[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37015 === (14))){
var inst_37007 = (state_37014[(2)]);
var inst_37008 = cljs.core.async.close_BANG_.call(null,out);
var state_37014__$1 = (function (){var statearr_37032 = state_37014;
(statearr_37032[(13)] = inst_37007);

return statearr_37032;
})();
var statearr_37033_37054 = state_37014__$1;
(statearr_37033_37054[(2)] = inst_37008);

(statearr_37033_37054[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37015 === (10))){
var inst_36998 = (state_37014[(2)]);
var state_37014__$1 = state_37014;
var statearr_37034_37055 = state_37014__$1;
(statearr_37034_37055[(2)] = inst_36998);

(statearr_37034_37055[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37015 === (8))){
var inst_36978 = (state_37014[(7)]);
var inst_36987 = (state_37014[(11)]);
var tmp37031 = inst_36978;
var inst_36978__$1 = tmp37031;
var inst_36979 = inst_36987;
var state_37014__$1 = (function (){var statearr_37035 = state_37014;
(statearr_37035[(7)] = inst_36978__$1);

(statearr_37035[(8)] = inst_36979);

return statearr_37035;
})();
var statearr_37036_37056 = state_37014__$1;
(statearr_37036_37056[(2)] = null);

(statearr_37036_37056[(1)] = (2));


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
var cljs$core$async$state_machine__35120__auto__ = null;
var cljs$core$async$state_machine__35120__auto____0 = (function (){
var statearr_37037 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37037[(0)] = cljs$core$async$state_machine__35120__auto__);

(statearr_37037[(1)] = (1));

return statearr_37037;
});
var cljs$core$async$state_machine__35120__auto____1 = (function (state_37014){
while(true){
var ret_value__35121__auto__ = (function (){try{while(true){
var result__35122__auto__ = switch__35119__auto__.call(null,state_37014);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35122__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35122__auto__;
}
break;
}
}catch (e37038){if((e37038 instanceof Object)){
var ex__35123__auto__ = e37038;
var statearr_37039_37057 = state_37014;
(statearr_37039_37057[(5)] = ex__35123__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37014);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37038;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35121__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37058 = state_37014;
state_37014 = G__37058;
continue;
} else {
return ret_value__35121__auto__;
}
break;
}
});
cljs$core$async$state_machine__35120__auto__ = function(state_37014){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35120__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35120__auto____1.call(this,state_37014);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35120__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35120__auto____0;
cljs$core$async$state_machine__35120__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35120__auto____1;
return cljs$core$async$state_machine__35120__auto__;
})()
})();
var state__35216__auto__ = (function (){var statearr_37040 = f__35215__auto__.call(null);
(statearr_37040[(6)] = c__35214__auto___37042);

return statearr_37040;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35216__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__37060 = arguments.length;
switch (G__37060) {
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
var c__35214__auto___37130 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__35215__auto__ = (function (){var switch__35119__auto__ = (function (state_37102){
var state_val_37103 = (state_37102[(1)]);
if((state_val_37103 === (7))){
var inst_37098 = (state_37102[(2)]);
var state_37102__$1 = state_37102;
var statearr_37104_37131 = state_37102__$1;
(statearr_37104_37131[(2)] = inst_37098);

(statearr_37104_37131[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37103 === (1))){
var inst_37061 = [];
var inst_37062 = inst_37061;
var inst_37063 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_37102__$1 = (function (){var statearr_37105 = state_37102;
(statearr_37105[(7)] = inst_37062);

(statearr_37105[(8)] = inst_37063);

return statearr_37105;
})();
var statearr_37106_37132 = state_37102__$1;
(statearr_37106_37132[(2)] = null);

(statearr_37106_37132[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37103 === (4))){
var inst_37066 = (state_37102[(9)]);
var inst_37066__$1 = (state_37102[(2)]);
var inst_37067 = (inst_37066__$1 == null);
var inst_37068 = cljs.core.not.call(null,inst_37067);
var state_37102__$1 = (function (){var statearr_37107 = state_37102;
(statearr_37107[(9)] = inst_37066__$1);

return statearr_37107;
})();
if(inst_37068){
var statearr_37108_37133 = state_37102__$1;
(statearr_37108_37133[(1)] = (5));

} else {
var statearr_37109_37134 = state_37102__$1;
(statearr_37109_37134[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37103 === (15))){
var inst_37092 = (state_37102[(2)]);
var state_37102__$1 = state_37102;
var statearr_37110_37135 = state_37102__$1;
(statearr_37110_37135[(2)] = inst_37092);

(statearr_37110_37135[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37103 === (13))){
var state_37102__$1 = state_37102;
var statearr_37111_37136 = state_37102__$1;
(statearr_37111_37136[(2)] = null);

(statearr_37111_37136[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37103 === (6))){
var inst_37062 = (state_37102[(7)]);
var inst_37087 = inst_37062.length;
var inst_37088 = (inst_37087 > (0));
var state_37102__$1 = state_37102;
if(cljs.core.truth_(inst_37088)){
var statearr_37112_37137 = state_37102__$1;
(statearr_37112_37137[(1)] = (12));

} else {
var statearr_37113_37138 = state_37102__$1;
(statearr_37113_37138[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37103 === (3))){
var inst_37100 = (state_37102[(2)]);
var state_37102__$1 = state_37102;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37102__$1,inst_37100);
} else {
if((state_val_37103 === (12))){
var inst_37062 = (state_37102[(7)]);
var inst_37090 = cljs.core.vec.call(null,inst_37062);
var state_37102__$1 = state_37102;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37102__$1,(15),out,inst_37090);
} else {
if((state_val_37103 === (2))){
var state_37102__$1 = state_37102;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37102__$1,(4),ch);
} else {
if((state_val_37103 === (11))){
var inst_37070 = (state_37102[(10)]);
var inst_37066 = (state_37102[(9)]);
var inst_37080 = (state_37102[(2)]);
var inst_37081 = [];
var inst_37082 = inst_37081.push(inst_37066);
var inst_37062 = inst_37081;
var inst_37063 = inst_37070;
var state_37102__$1 = (function (){var statearr_37114 = state_37102;
(statearr_37114[(7)] = inst_37062);

(statearr_37114[(8)] = inst_37063);

(statearr_37114[(11)] = inst_37082);

(statearr_37114[(12)] = inst_37080);

return statearr_37114;
})();
var statearr_37115_37139 = state_37102__$1;
(statearr_37115_37139[(2)] = null);

(statearr_37115_37139[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37103 === (9))){
var inst_37062 = (state_37102[(7)]);
var inst_37078 = cljs.core.vec.call(null,inst_37062);
var state_37102__$1 = state_37102;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37102__$1,(11),out,inst_37078);
} else {
if((state_val_37103 === (5))){
var inst_37063 = (state_37102[(8)]);
var inst_37070 = (state_37102[(10)]);
var inst_37066 = (state_37102[(9)]);
var inst_37070__$1 = f.call(null,inst_37066);
var inst_37071 = cljs.core._EQ_.call(null,inst_37070__$1,inst_37063);
var inst_37072 = cljs.core.keyword_identical_QMARK_.call(null,inst_37063,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_37073 = ((inst_37071) || (inst_37072));
var state_37102__$1 = (function (){var statearr_37116 = state_37102;
(statearr_37116[(10)] = inst_37070__$1);

return statearr_37116;
})();
if(cljs.core.truth_(inst_37073)){
var statearr_37117_37140 = state_37102__$1;
(statearr_37117_37140[(1)] = (8));

} else {
var statearr_37118_37141 = state_37102__$1;
(statearr_37118_37141[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37103 === (14))){
var inst_37095 = (state_37102[(2)]);
var inst_37096 = cljs.core.async.close_BANG_.call(null,out);
var state_37102__$1 = (function (){var statearr_37120 = state_37102;
(statearr_37120[(13)] = inst_37095);

return statearr_37120;
})();
var statearr_37121_37142 = state_37102__$1;
(statearr_37121_37142[(2)] = inst_37096);

(statearr_37121_37142[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37103 === (10))){
var inst_37085 = (state_37102[(2)]);
var state_37102__$1 = state_37102;
var statearr_37122_37143 = state_37102__$1;
(statearr_37122_37143[(2)] = inst_37085);

(statearr_37122_37143[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37103 === (8))){
var inst_37062 = (state_37102[(7)]);
var inst_37070 = (state_37102[(10)]);
var inst_37066 = (state_37102[(9)]);
var inst_37075 = inst_37062.push(inst_37066);
var tmp37119 = inst_37062;
var inst_37062__$1 = tmp37119;
var inst_37063 = inst_37070;
var state_37102__$1 = (function (){var statearr_37123 = state_37102;
(statearr_37123[(7)] = inst_37062__$1);

(statearr_37123[(8)] = inst_37063);

(statearr_37123[(14)] = inst_37075);

return statearr_37123;
})();
var statearr_37124_37144 = state_37102__$1;
(statearr_37124_37144[(2)] = null);

(statearr_37124_37144[(1)] = (2));


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
var cljs$core$async$state_machine__35120__auto__ = null;
var cljs$core$async$state_machine__35120__auto____0 = (function (){
var statearr_37125 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37125[(0)] = cljs$core$async$state_machine__35120__auto__);

(statearr_37125[(1)] = (1));

return statearr_37125;
});
var cljs$core$async$state_machine__35120__auto____1 = (function (state_37102){
while(true){
var ret_value__35121__auto__ = (function (){try{while(true){
var result__35122__auto__ = switch__35119__auto__.call(null,state_37102);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35122__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35122__auto__;
}
break;
}
}catch (e37126){if((e37126 instanceof Object)){
var ex__35123__auto__ = e37126;
var statearr_37127_37145 = state_37102;
(statearr_37127_37145[(5)] = ex__35123__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37102);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37126;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35121__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37146 = state_37102;
state_37102 = G__37146;
continue;
} else {
return ret_value__35121__auto__;
}
break;
}
});
cljs$core$async$state_machine__35120__auto__ = function(state_37102){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35120__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35120__auto____1.call(this,state_37102);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35120__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35120__auto____0;
cljs$core$async$state_machine__35120__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35120__auto____1;
return cljs$core$async$state_machine__35120__auto__;
})()
})();
var state__35216__auto__ = (function (){var statearr_37128 = f__35215__auto__.call(null);
(statearr_37128[(6)] = c__35214__auto___37130);

return statearr_37128;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35216__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=async.js.map?rel=1607284884139
