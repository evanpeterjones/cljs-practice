// Compiled by ClojureScript 1.10.773 {:target :nodejs}
goog.provide('cognitect.transit');
goog.require('cljs.core');
goog.require('com.cognitect.transit');
goog.require('com.cognitect.transit.types');
goog.require('com.cognitect.transit.eq');
goog.require('goog.math.Long');
(cljs.core.UUID.prototype.cljs$core$IEquiv$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return (this$__$1.uuid === other.uuid);
} else {
if((other instanceof com.cognitect.transit.types.UUID)){
return (this$__$1.uuid === other.toString());
} else {
return false;

}
}
}));
(cljs.core.UUID.prototype.cljs$core$IComparable$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if((((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID)))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error(["Cannot compare ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$__$1)," to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(other)].join('')));
}
}));

(com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$ = cljs.core.PROTOCOL_SENTINEL);

(com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if((((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID)))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error(["Cannot compare ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$__$1)," to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(other)].join('')));
}
}));
(goog.math.Long.prototype.cljs$core$IEquiv$ = cljs.core.PROTOCOL_SENTINEL);

(goog.math.Long.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
}));

(com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$ = cljs.core.PROTOCOL_SENTINEL);

(com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return cljs.core._equiv.call(null,other,this$__$1);
} else {
return this$__$1.equiv(other);
}
}));

(com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$ = cljs.core.PROTOCOL_SENTINEL);

(com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
}));
(goog.math.Long.prototype.cljs$core$IHash$ = cljs.core.PROTOCOL_SENTINEL);

(goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode(this$__$1);
}));

(com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = cljs.core.PROTOCOL_SENTINEL);

(com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode(this$__$1);
}));

(com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$ = cljs.core.PROTOCOL_SENTINEL);

(com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode(this$__$1);
}));
(com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL);

(com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (uuid,writer,_){
var uuid__$1 = this;
return cljs.core._write.call(null,writer,["#uuid \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uuid__$1.toString()),"\""].join(''));
}));
cognitect.transit.opts_merge = (function cognitect$transit$opts_merge(a,b){
var seq__22001_22005 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));
var chunk__22002_22006 = null;
var count__22003_22007 = (0);
var i__22004_22008 = (0);
while(true){
if((i__22004_22008 < count__22003_22007)){
var k_22009 = cljs.core._nth.call(null,chunk__22002_22006,i__22004_22008);
var v_22010 = (b[k_22009]);
(a[k_22009] = v_22010);


var G__22011 = seq__22001_22005;
var G__22012 = chunk__22002_22006;
var G__22013 = count__22003_22007;
var G__22014 = (i__22004_22008 + (1));
seq__22001_22005 = G__22011;
chunk__22002_22006 = G__22012;
count__22003_22007 = G__22013;
i__22004_22008 = G__22014;
continue;
} else {
var temp__5720__auto___22015 = cljs.core.seq.call(null,seq__22001_22005);
if(temp__5720__auto___22015){
var seq__22001_22016__$1 = temp__5720__auto___22015;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22001_22016__$1)){
var c__4556__auto___22017 = cljs.core.chunk_first.call(null,seq__22001_22016__$1);
var G__22018 = cljs.core.chunk_rest.call(null,seq__22001_22016__$1);
var G__22019 = c__4556__auto___22017;
var G__22020 = cljs.core.count.call(null,c__4556__auto___22017);
var G__22021 = (0);
seq__22001_22005 = G__22018;
chunk__22002_22006 = G__22019;
count__22003_22007 = G__22020;
i__22004_22008 = G__22021;
continue;
} else {
var k_22022 = cljs.core.first.call(null,seq__22001_22016__$1);
var v_22023 = (b[k_22022]);
(a[k_22022] = v_22023);


var G__22024 = cljs.core.next.call(null,seq__22001_22016__$1);
var G__22025 = null;
var G__22026 = (0);
var G__22027 = (0);
seq__22001_22005 = G__22024;
chunk__22002_22006 = G__22025;
count__22003_22007 = G__22026;
i__22004_22008 = G__22027;
continue;
}
} else {
}
}
break;
}

return a;
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapBuilder = (function (){
});
(cognitect.transit.MapBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
}));

(cognitect.transit.MapBuilder.prototype.add = (function (m,k,v,node){
var self__ = this;
var _ = this;
return cljs.core.assoc_BANG_.call(null,m,k,v);
}));

(cognitect.transit.MapBuilder.prototype.finalize = (function (m,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,m);
}));

(cognitect.transit.MapBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentArrayMap.fromArray.call(null,arr,true,true);
}));

(cognitect.transit.MapBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(cognitect.transit.MapBuilder.cljs$lang$type = true);

(cognitect.transit.MapBuilder.cljs$lang$ctorStr = "cognitect.transit/MapBuilder");

(cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cognitect.transit/MapBuilder");
}));

/**
 * Positional factory function for cognitect.transit/MapBuilder.
 */
cognitect.transit.__GT_MapBuilder = (function cognitect$transit$__GT_MapBuilder(){
return (new cognitect.transit.MapBuilder());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorBuilder = (function (){
});
(cognitect.transit.VectorBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
}));

(cognitect.transit.VectorBuilder.prototype.add = (function (v,x,node){
var self__ = this;
var _ = this;
return cljs.core.conj_BANG_.call(null,v,x);
}));

(cognitect.transit.VectorBuilder.prototype.finalize = (function (v,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,v);
}));

(cognitect.transit.VectorBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentVector.fromArray.call(null,arr,true);
}));

(cognitect.transit.VectorBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(cognitect.transit.VectorBuilder.cljs$lang$type = true);

(cognitect.transit.VectorBuilder.cljs$lang$ctorStr = "cognitect.transit/VectorBuilder");

(cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cognitect.transit/VectorBuilder");
}));

/**
 * Positional factory function for cognitect.transit/VectorBuilder.
 */
cognitect.transit.__GT_VectorBuilder = (function cognitect$transit$__GT_VectorBuilder(){
return (new cognitect.transit.VectorBuilder());
});

/**
 * Return a transit reader. type may be either :json or :json-verbose.
 * opts may be a map optionally containing a :handlers entry. The value
 * of :handlers should be map from tag to a decoder function which returns
 * then in-memory representation of the semantic transit value.
 */
cognitect.transit.reader = (function cognitect$transit$reader(var_args){
var G__22029 = arguments.length;
switch (G__22029) {
case 1:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.reader.call(null,type,null);
}));

(cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
return com.cognitect.transit.reader(cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,({"handlers": cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, ["$",(function (v){
return cljs.core.symbol.call(null,v);
}),":",(function (v){
return cljs.core.keyword.call(null,v);
}),"set",(function (v){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,v);
}),"list",(function (v){
return cljs.core.into.call(null,cljs.core.List.EMPTY,v.reverse());
}),"cmap",(function (v){
var i = (0);
var ret = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i < v.length)){
var G__22031 = (i + (2));
var G__22032 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__22031;
ret = G__22032;
continue;
} else {
return cljs.core.persistent_BANG_.call(null,ret);
}
break;
}
})], null),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts))), "mapBuilder": (new cognitect.transit.MapBuilder()), "arrayBuilder": (new cognitect.transit.VectorBuilder()), "prefersStrings": false}),cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
}));

(cognitect.transit.reader.cljs$lang$maxFixedArity = 2);

/**
 * Read a transit encoded string into ClojureScript values given a 
 * transit reader.
 */
cognitect.transit.read = (function cognitect$transit$read(r,str){
return r.read(str);
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.KeywordHandler = (function (){
});
(cognitect.transit.KeywordHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return ":";
}));

(cognitect.transit.KeywordHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
}));

(cognitect.transit.KeywordHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
}));

(cognitect.transit.KeywordHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(cognitect.transit.KeywordHandler.cljs$lang$type = true);

(cognitect.transit.KeywordHandler.cljs$lang$ctorStr = "cognitect.transit/KeywordHandler");

(cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cognitect.transit/KeywordHandler");
}));

/**
 * Positional factory function for cognitect.transit/KeywordHandler.
 */
cognitect.transit.__GT_KeywordHandler = (function cognitect$transit$__GT_KeywordHandler(){
return (new cognitect.transit.KeywordHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SymbolHandler = (function (){
});
(cognitect.transit.SymbolHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "$";
}));

(cognitect.transit.SymbolHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.str;
}));

(cognitect.transit.SymbolHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.str;
}));

(cognitect.transit.SymbolHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(cognitect.transit.SymbolHandler.cljs$lang$type = true);

(cognitect.transit.SymbolHandler.cljs$lang$ctorStr = "cognitect.transit/SymbolHandler");

(cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cognitect.transit/SymbolHandler");
}));

/**
 * Positional factory function for cognitect.transit/SymbolHandler.
 */
cognitect.transit.__GT_SymbolHandler = (function cognitect$transit$__GT_SymbolHandler(){
return (new cognitect.transit.SymbolHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.ListHandler = (function (){
});
(cognitect.transit.ListHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "list";
}));

(cognitect.transit.ListHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__22033_22037 = cljs.core.seq.call(null,v);
var chunk__22034_22038 = null;
var count__22035_22039 = (0);
var i__22036_22040 = (0);
while(true){
if((i__22036_22040 < count__22035_22039)){
var x_22041 = cljs.core._nth.call(null,chunk__22034_22038,i__22036_22040);
ret.push(x_22041);


var G__22042 = seq__22033_22037;
var G__22043 = chunk__22034_22038;
var G__22044 = count__22035_22039;
var G__22045 = (i__22036_22040 + (1));
seq__22033_22037 = G__22042;
chunk__22034_22038 = G__22043;
count__22035_22039 = G__22044;
i__22036_22040 = G__22045;
continue;
} else {
var temp__5720__auto___22046 = cljs.core.seq.call(null,seq__22033_22037);
if(temp__5720__auto___22046){
var seq__22033_22047__$1 = temp__5720__auto___22046;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22033_22047__$1)){
var c__4556__auto___22048 = cljs.core.chunk_first.call(null,seq__22033_22047__$1);
var G__22049 = cljs.core.chunk_rest.call(null,seq__22033_22047__$1);
var G__22050 = c__4556__auto___22048;
var G__22051 = cljs.core.count.call(null,c__4556__auto___22048);
var G__22052 = (0);
seq__22033_22037 = G__22049;
chunk__22034_22038 = G__22050;
count__22035_22039 = G__22051;
i__22036_22040 = G__22052;
continue;
} else {
var x_22053 = cljs.core.first.call(null,seq__22033_22047__$1);
ret.push(x_22053);


var G__22054 = cljs.core.next.call(null,seq__22033_22047__$1);
var G__22055 = null;
var G__22056 = (0);
var G__22057 = (0);
seq__22033_22037 = G__22054;
chunk__22034_22038 = G__22055;
count__22035_22039 = G__22056;
i__22036_22040 = G__22057;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged("array",ret);
}));

(cognitect.transit.ListHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
}));

(cognitect.transit.ListHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(cognitect.transit.ListHandler.cljs$lang$type = true);

(cognitect.transit.ListHandler.cljs$lang$ctorStr = "cognitect.transit/ListHandler");

(cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cognitect.transit/ListHandler");
}));

/**
 * Positional factory function for cognitect.transit/ListHandler.
 */
cognitect.transit.__GT_ListHandler = (function cognitect$transit$__GT_ListHandler(){
return (new cognitect.transit.ListHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapHandler = (function (){
});
(cognitect.transit.MapHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "map";
}));

(cognitect.transit.MapHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v;
}));

(cognitect.transit.MapHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
}));

(cognitect.transit.MapHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(cognitect.transit.MapHandler.cljs$lang$type = true);

(cognitect.transit.MapHandler.cljs$lang$ctorStr = "cognitect.transit/MapHandler");

(cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cognitect.transit/MapHandler");
}));

/**
 * Positional factory function for cognitect.transit/MapHandler.
 */
cognitect.transit.__GT_MapHandler = (function cognitect$transit$__GT_MapHandler(){
return (new cognitect.transit.MapHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SetHandler = (function (){
});
(cognitect.transit.SetHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "set";
}));

(cognitect.transit.SetHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__22058_22062 = cljs.core.seq.call(null,v);
var chunk__22059_22063 = null;
var count__22060_22064 = (0);
var i__22061_22065 = (0);
while(true){
if((i__22061_22065 < count__22060_22064)){
var x_22066 = cljs.core._nth.call(null,chunk__22059_22063,i__22061_22065);
ret.push(x_22066);


var G__22067 = seq__22058_22062;
var G__22068 = chunk__22059_22063;
var G__22069 = count__22060_22064;
var G__22070 = (i__22061_22065 + (1));
seq__22058_22062 = G__22067;
chunk__22059_22063 = G__22068;
count__22060_22064 = G__22069;
i__22061_22065 = G__22070;
continue;
} else {
var temp__5720__auto___22071 = cljs.core.seq.call(null,seq__22058_22062);
if(temp__5720__auto___22071){
var seq__22058_22072__$1 = temp__5720__auto___22071;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22058_22072__$1)){
var c__4556__auto___22073 = cljs.core.chunk_first.call(null,seq__22058_22072__$1);
var G__22074 = cljs.core.chunk_rest.call(null,seq__22058_22072__$1);
var G__22075 = c__4556__auto___22073;
var G__22076 = cljs.core.count.call(null,c__4556__auto___22073);
var G__22077 = (0);
seq__22058_22062 = G__22074;
chunk__22059_22063 = G__22075;
count__22060_22064 = G__22076;
i__22061_22065 = G__22077;
continue;
} else {
var x_22078 = cljs.core.first.call(null,seq__22058_22072__$1);
ret.push(x_22078);


var G__22079 = cljs.core.next.call(null,seq__22058_22072__$1);
var G__22080 = null;
var G__22081 = (0);
var G__22082 = (0);
seq__22058_22062 = G__22079;
chunk__22059_22063 = G__22080;
count__22060_22064 = G__22081;
i__22061_22065 = G__22082;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged("array",ret);
}));

(cognitect.transit.SetHandler.prototype.stringRep = (function (){
var self__ = this;
var v = this;
return null;
}));

(cognitect.transit.SetHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(cognitect.transit.SetHandler.cljs$lang$type = true);

(cognitect.transit.SetHandler.cljs$lang$ctorStr = "cognitect.transit/SetHandler");

(cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cognitect.transit/SetHandler");
}));

/**
 * Positional factory function for cognitect.transit/SetHandler.
 */
cognitect.transit.__GT_SetHandler = (function cognitect$transit$__GT_SetHandler(){
return (new cognitect.transit.SetHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorHandler = (function (){
});
(cognitect.transit.VectorHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "array";
}));

(cognitect.transit.VectorHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__22083_22087 = cljs.core.seq.call(null,v);
var chunk__22084_22088 = null;
var count__22085_22089 = (0);
var i__22086_22090 = (0);
while(true){
if((i__22086_22090 < count__22085_22089)){
var x_22091 = cljs.core._nth.call(null,chunk__22084_22088,i__22086_22090);
ret.push(x_22091);


var G__22092 = seq__22083_22087;
var G__22093 = chunk__22084_22088;
var G__22094 = count__22085_22089;
var G__22095 = (i__22086_22090 + (1));
seq__22083_22087 = G__22092;
chunk__22084_22088 = G__22093;
count__22085_22089 = G__22094;
i__22086_22090 = G__22095;
continue;
} else {
var temp__5720__auto___22096 = cljs.core.seq.call(null,seq__22083_22087);
if(temp__5720__auto___22096){
var seq__22083_22097__$1 = temp__5720__auto___22096;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22083_22097__$1)){
var c__4556__auto___22098 = cljs.core.chunk_first.call(null,seq__22083_22097__$1);
var G__22099 = cljs.core.chunk_rest.call(null,seq__22083_22097__$1);
var G__22100 = c__4556__auto___22098;
var G__22101 = cljs.core.count.call(null,c__4556__auto___22098);
var G__22102 = (0);
seq__22083_22087 = G__22099;
chunk__22084_22088 = G__22100;
count__22085_22089 = G__22101;
i__22086_22090 = G__22102;
continue;
} else {
var x_22103 = cljs.core.first.call(null,seq__22083_22097__$1);
ret.push(x_22103);


var G__22104 = cljs.core.next.call(null,seq__22083_22097__$1);
var G__22105 = null;
var G__22106 = (0);
var G__22107 = (0);
seq__22083_22087 = G__22104;
chunk__22084_22088 = G__22105;
count__22085_22089 = G__22106;
i__22086_22090 = G__22107;
continue;
}
} else {
}
}
break;
}

return ret;
}));

(cognitect.transit.VectorHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
}));

(cognitect.transit.VectorHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(cognitect.transit.VectorHandler.cljs$lang$type = true);

(cognitect.transit.VectorHandler.cljs$lang$ctorStr = "cognitect.transit/VectorHandler");

(cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cognitect.transit/VectorHandler");
}));

/**
 * Positional factory function for cognitect.transit/VectorHandler.
 */
cognitect.transit.__GT_VectorHandler = (function cognitect$transit$__GT_VectorHandler(){
return (new cognitect.transit.VectorHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.UUIDHandler = (function (){
});
(cognitect.transit.UUIDHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "u";
}));

(cognitect.transit.UUIDHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.uuid;
}));

(cognitect.transit.UUIDHandler.prototype.stringRep = (function (v){
var self__ = this;
var this$ = this;
return this$.rep(v);
}));

(cognitect.transit.UUIDHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(cognitect.transit.UUIDHandler.cljs$lang$type = true);

(cognitect.transit.UUIDHandler.cljs$lang$ctorStr = "cognitect.transit/UUIDHandler");

(cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cognitect.transit/UUIDHandler");
}));

/**
 * Positional factory function for cognitect.transit/UUIDHandler.
 */
cognitect.transit.__GT_UUIDHandler = (function cognitect$transit$__GT_UUIDHandler(){
return (new cognitect.transit.UUIDHandler());
});

/**
 * Return a transit writer. type maybe either :json or :json-verbose.
 *   opts is a map containing a :handlers entry. :handlers is a map of
 *   type constructors to handler instances.
 */
cognitect.transit.writer = (function cognitect$transit$writer(var_args){
var G__22109 = arguments.length;
switch (G__22109) {
case 1:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.writer.call(null,type,null);
}));

(cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
var keyword_handler = (new cognitect.transit.KeywordHandler());
var symbol_handler = (new cognitect.transit.SymbolHandler());
var list_handler = (new cognitect.transit.ListHandler());
var map_handler = (new cognitect.transit.MapHandler());
var set_handler = (new cognitect.transit.SetHandler());
var vector_handler = (new cognitect.transit.VectorHandler());
var uuid_handler = (new cognitect.transit.UUIDHandler());
var handlers = cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.UUID,cljs.core.Range,cljs.core.PersistentTreeMapSeq],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,uuid_handler,list_handler,list_handler]),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts));
return com.cognitect.transit.writer(cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,({"objectBuilder": (function (m,kfn,vfn){
return cljs.core.reduce_kv.call(null,(function (obj,k,v){
var G__22110 = obj;
G__22110.push(kfn.call(null,k),vfn.call(null,v));

return G__22110;
}),["^ "],m);
}), "handlers": (function (){var x22111 = cljs.core.clone.call(null,handlers);
(x22111.forEach = (function (f){
var coll = this;
var seq__22112 = cljs.core.seq.call(null,coll);
var chunk__22113 = null;
var count__22114 = (0);
var i__22115 = (0);
while(true){
if((i__22115 < count__22114)){
var vec__22122 = cljs.core._nth.call(null,chunk__22113,i__22115);
var k = cljs.core.nth.call(null,vec__22122,(0),null);
var v = cljs.core.nth.call(null,vec__22122,(1),null);
f.call(null,v,k);


var G__22129 = seq__22112;
var G__22130 = chunk__22113;
var G__22131 = count__22114;
var G__22132 = (i__22115 + (1));
seq__22112 = G__22129;
chunk__22113 = G__22130;
count__22114 = G__22131;
i__22115 = G__22132;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__22112);
if(temp__5720__auto__){
var seq__22112__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22112__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__22112__$1);
var G__22133 = cljs.core.chunk_rest.call(null,seq__22112__$1);
var G__22134 = c__4556__auto__;
var G__22135 = cljs.core.count.call(null,c__4556__auto__);
var G__22136 = (0);
seq__22112 = G__22133;
chunk__22113 = G__22134;
count__22114 = G__22135;
i__22115 = G__22136;
continue;
} else {
var vec__22125 = cljs.core.first.call(null,seq__22112__$1);
var k = cljs.core.nth.call(null,vec__22125,(0),null);
var v = cljs.core.nth.call(null,vec__22125,(1),null);
f.call(null,v,k);


var G__22137 = cljs.core.next.call(null,seq__22112__$1);
var G__22138 = null;
var G__22139 = (0);
var G__22140 = (0);
seq__22112 = G__22137;
chunk__22113 = G__22138;
count__22114 = G__22139;
i__22115 = G__22140;
continue;
}
} else {
return null;
}
}
break;
}
}));

return x22111;
})(), "unpack": (function (x){
if((x instanceof cljs.core.PersistentArrayMap)){
return x.arr;
} else {
return false;
}
})}),cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
}));

(cognitect.transit.writer.cljs$lang$maxFixedArity = 2);

/**
 * Encode an object into a transit string given a transit writer.
 */
cognitect.transit.write = (function cognitect$transit$write(w,o){
return w.write(o);
});
/**
 * Construct a read handler. Implemented as identity, exists primarily
 * for API compatiblity with transit-clj
 */
cognitect.transit.read_handler = (function cognitect$transit$read_handler(from_rep){
return from_rep;
});
/**
 * Creates a transit write handler whose tag, rep,
 * stringRep, and verboseWriteHandler methods
 * invoke the provided fns.
 */
cognitect.transit.write_handler = (function cognitect$transit$write_handler(var_args){
var G__22142 = arguments.length;
switch (G__22142) {
case 2:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2 = (function (tag_fn,rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,null,null);
}));

(cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3 = (function (tag_fn,rep_fn,str_rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
}));

(cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
if((typeof cognitect !== 'undefined') && (typeof cognitect.transit !== 'undefined') && (typeof cognitect.transit.t_cognitect$transit22143 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cognitect.transit.Object}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cognitect.transit.t_cognitect$transit22143 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,meta22144){
this.tag_fn = tag_fn;
this.rep_fn = rep_fn;
this.str_rep_fn = str_rep_fn;
this.verbose_handler_fn = verbose_handler_fn;
this.meta22144 = meta22144;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cognitect.transit.t_cognitect$transit22143.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22145,meta22144__$1){
var self__ = this;
var _22145__$1 = this;
return (new cognitect.transit.t_cognitect$transit22143(self__.tag_fn,self__.rep_fn,self__.str_rep_fn,self__.verbose_handler_fn,meta22144__$1));
}));

(cognitect.transit.t_cognitect$transit22143.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22145){
var self__ = this;
var _22145__$1 = this;
return self__.meta22144;
}));

(cognitect.transit.t_cognitect$transit22143.prototype.tag = (function (o){
var self__ = this;
var _ = this;
return self__.tag_fn.call(null,o);
}));

(cognitect.transit.t_cognitect$transit22143.prototype.rep = (function (o){
var self__ = this;
var _ = this;
return self__.rep_fn.call(null,o);
}));

(cognitect.transit.t_cognitect$transit22143.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
return self__.str_rep_fn.call(null,o);
} else {
return null;
}
}));

(cognitect.transit.t_cognitect$transit22143.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return self__.verbose_handler_fn.call(null);
} else {
return null;
}
}));

(cognitect.transit.t_cognitect$transit22143.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag-fn","tag-fn",242055482,null),new cljs.core.Symbol(null,"rep-fn","rep-fn",-1724891035,null),new cljs.core.Symbol(null,"str-rep-fn","str-rep-fn",-1179615016,null),new cljs.core.Symbol(null,"verbose-handler-fn","verbose-handler-fn",547340594,null),new cljs.core.Symbol(null,"meta22144","meta22144",1166552822,null)], null);
}));

(cognitect.transit.t_cognitect$transit22143.cljs$lang$type = true);

(cognitect.transit.t_cognitect$transit22143.cljs$lang$ctorStr = "cognitect.transit/t_cognitect$transit22143");

(cognitect.transit.t_cognitect$transit22143.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cognitect.transit/t_cognitect$transit22143");
}));

/**
 * Positional factory function for cognitect.transit/t_cognitect$transit22143.
 */
cognitect.transit.__GT_t_cognitect$transit22143 = (function cognitect$transit$__GT_t_cognitect$transit22143(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta22144){
return (new cognitect.transit.t_cognitect$transit22143(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta22144));
});

}

return (new cognitect.transit.t_cognitect$transit22143(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,cljs.core.PersistentArrayMap.EMPTY));
}));

(cognitect.transit.write_handler.cljs$lang$maxFixedArity = 4);

/**
 * Construct a tagged value. tag must be a string and rep can
 * be any transit encodeable value.
 */
cognitect.transit.tagged_value = (function cognitect$transit$tagged_value(tag,rep){
return com.cognitect.transit.types.taggedValue(tag,rep);
});
/**
 * Returns true if x is a transit tagged value, false otherwise.
 */
cognitect.transit.tagged_value_QMARK_ = (function cognitect$transit$tagged_value_QMARK_(x){
return com.cognitect.transit.types.isTaggedValue(x);
});
/**
 * Construct a transit integer value. Returns JavaScript number if
 *   in the 53bit integer range, a goog.math.Long instance if above. s
 *   may be a string or a JavaScript number.
 */
cognitect.transit.integer = (function cognitect$transit$integer(s){
return com.cognitect.transit.types.intValue(s);
});
/**
 * Returns true if x is an integer value between the 53bit and 64bit
 *   range, false otherwise.
 */
cognitect.transit.integer_QMARK_ = (function cognitect$transit$integer_QMARK_(x){
return com.cognitect.transit.types.isInteger(x);
});
/**
 * Construct a big integer from a string.
 */
cognitect.transit.bigint = (function cognitect$transit$bigint(s){
return com.cognitect.transit.types.bigInteger(s);
});
/**
 * Returns true if x is a transit big integer value, false otherwise.
 */
cognitect.transit.bigint_QMARK_ = (function cognitect$transit$bigint_QMARK_(x){
return com.cognitect.transit.types.isBigInteger(x);
});
/**
 * Construct a big decimal from a string.
 */
cognitect.transit.bigdec = (function cognitect$transit$bigdec(s){
return com.cognitect.transit.types.bigDecimalValue(s);
});
/**
 * Returns true if x is a transit big decimal value, false otherwise.
 */
cognitect.transit.bigdec_QMARK_ = (function cognitect$transit$bigdec_QMARK_(x){
return com.cognitect.transit.types.isBigDecimal(x);
});
/**
 * Construct a URI from a string.
 */
cognitect.transit.uri = (function cognitect$transit$uri(s){
return com.cognitect.transit.types.uri(s);
});
/**
 * Returns true if x is a transit URI value, false otherwise.
 */
cognitect.transit.uri_QMARK_ = (function cognitect$transit$uri_QMARK_(x){
return com.cognitect.transit.types.isURI(x);
});
/**
 * Construct a UUID from a string.
 */
cognitect.transit.uuid = (function cognitect$transit$uuid(s){
return com.cognitect.transit.types.uuid(s);
});
/**
 * Returns true if x is a transit UUID value, false otherwise.
 */
cognitect.transit.uuid_QMARK_ = (function cognitect$transit$uuid_QMARK_(x){
var or__4126__auto__ = com.cognitect.transit.types.isUUID(x);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (x instanceof cljs.core.UUID);
}
});
/**
 * Construct a transit binary value. s should be base64 encoded
 * string.
 */
cognitect.transit.binary = (function cognitect$transit$binary(s){
return com.cognitect.transit.types.binary(s);
});
/**
 * Returns true if x is a transit binary value, false otherwise.
 */
cognitect.transit.binary_QMARK_ = (function cognitect$transit$binary_QMARK_(x){
return com.cognitect.transit.types.isBinary(x);
});
/**
 * Construct a quoted transit value. x should be a transit
 * encodeable value.
 */
cognitect.transit.quoted = (function cognitect$transit$quoted(x){
return com.cognitect.transit.types.quoted(x);
});
/**
 * Returns true if x is a transit quoted value, false otherwise.
 */
cognitect.transit.quoted_QMARK_ = (function cognitect$transit$quoted_QMARK_(x){
return com.cognitect.transit.types.isQuoted(x);
});
/**
 * Construct a transit link value. x should be an IMap instance
 * containing at a minimum the following keys: :href, :rel. It
 * may optionall include :name, :render, and :prompt. :href must
 * be a transit URI, all other values are strings, and :render must
 * be either :image or :link.
 */
cognitect.transit.link = (function cognitect$transit$link(x){
return com.cognitect.transit.types.link(x);
});
/**
 * Returns true if x a transit link value, false if otherwise.
 */
cognitect.transit.link_QMARK_ = (function cognitect$transit$link_QMARK_(x){
return com.cognitect.transit.types.isLink(x);
});

//# sourceMappingURL=transit.js.map?rel=1607284804302
