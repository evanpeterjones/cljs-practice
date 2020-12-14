// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('ajax.protocols');
goog.require('goog.string');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
var G__26236 = e.target.readyState;
var fexpr__26235 = new cljs.core.PersistentArrayMap(null, 6, [(0),cljs.core.cst$kw$not_DASH_initialized,(1),cljs.core.cst$kw$connection_DASH_established,(2),cljs.core.cst$kw$request_DASH_received,(3),cljs.core.cst$kw$processing_DASH_request,(4),cljs.core.cst$kw$response_DASH_ready,cljs.core.cst$kw$cljs$analyzer_SLASH_analyzed,true], null);
return (fexpr__26235.cljs$core$IFn$_invoke$arity$1 ? fexpr__26235.cljs$core$IFn$_invoke$arity$1(G__26236) : fexpr__26235.call(null,G__26236));
});
ajax.xml_http_request.append = (function ajax$xml_http_request$append(current,next){
if(cljs.core.truth_(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(next)].join('');
} else {
return next;
}
});
ajax.xml_http_request.process_headers = (function ajax$xml_http_request$process_headers(header_str){
if(cljs.core.truth_(header_str)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (headers,header_line){
if(goog.string.isEmptyOrWhitespace(header_line)){
return headers;
} else {
var key_value = goog.string.splitLimit(header_line,": ",(2));
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(headers,(key_value[(0)]),ajax.xml_http_request.append,(key_value[(1)]));
}
}),cljs.core.PersistentArrayMap.EMPTY,header_str.split("\r\n"));
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
ajax.xml_http_request.xmlhttprequest = (((typeof goog !== 'undefined') && (typeof goog.global !== 'undefined') && (typeof goog.global.XMLHttpRequest !== 'undefined'))?goog.global.XMLHttpRequest:(((typeof require !== 'undefined'))?(function (){var req = require;
return (req.cljs$core$IFn$_invoke$arity$1 ? req.cljs$core$IFn$_invoke$arity$1("xmlhttprequest") : req.call(null,"xmlhttprequest")).XMLHttpRequest;
})():null));
(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__26238,handler){
var map__26239 = p__26238;
var map__26239__$1 = (((((!((map__26239 == null))))?(((((map__26239.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26239.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26239):map__26239);
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26239__$1,cljs.core.cst$kw$uri);
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26239__$1,cljs.core.cst$kw$method);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26239__$1,cljs.core.cst$kw$body);
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26239__$1,cljs.core.cst$kw$headers);
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__26239__$1,cljs.core.cst$kw$timeout,(0));
var with_credentials = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__26239__$1,cljs.core.cst$kw$with_DASH_credentials,false);
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26239__$1,cljs.core.cst$kw$response_DASH_format);
var this$__$1 = this;
(this$__$1.withCredentials = with_credentials);

(this$__$1.onreadystatechange = (function (p1__26237_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$response_DASH_ready,ajax.xml_http_request.ready_state(p1__26237_SHARP_))){
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(this$__$1) : handler.call(null,this$__$1));
} else {
return null;
}
}));

this$__$1.open(method,uri,true);

(this$__$1.timeout = timeout);

var temp__5720__auto___26257 = cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__5720__auto___26257)){
var response_type_26258 = temp__5720__auto___26257;
(this$__$1.responseType = cljs.core.name(response_type_26258));
} else {
}

var seq__26241_26259 = cljs.core.seq(headers);
var chunk__26242_26260 = null;
var count__26243_26261 = (0);
var i__26244_26262 = (0);
while(true){
if((i__26244_26262 < count__26243_26261)){
var vec__26251_26263 = chunk__26242_26260.cljs$core$IIndexed$_nth$arity$2(null,i__26244_26262);
var k_26264 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26251_26263,(0),null);
var v_26265 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26251_26263,(1),null);
this$__$1.setRequestHeader(k_26264,v_26265);


var G__26266 = seq__26241_26259;
var G__26267 = chunk__26242_26260;
var G__26268 = count__26243_26261;
var G__26269 = (i__26244_26262 + (1));
seq__26241_26259 = G__26266;
chunk__26242_26260 = G__26267;
count__26243_26261 = G__26268;
i__26244_26262 = G__26269;
continue;
} else {
var temp__5720__auto___26270 = cljs.core.seq(seq__26241_26259);
if(temp__5720__auto___26270){
var seq__26241_26271__$1 = temp__5720__auto___26270;
if(cljs.core.chunked_seq_QMARK_(seq__26241_26271__$1)){
var c__4556__auto___26272 = cljs.core.chunk_first(seq__26241_26271__$1);
var G__26273 = cljs.core.chunk_rest(seq__26241_26271__$1);
var G__26274 = c__4556__auto___26272;
var G__26275 = cljs.core.count(c__4556__auto___26272);
var G__26276 = (0);
seq__26241_26259 = G__26273;
chunk__26242_26260 = G__26274;
count__26243_26261 = G__26275;
i__26244_26262 = G__26276;
continue;
} else {
var vec__26254_26277 = cljs.core.first(seq__26241_26271__$1);
var k_26278 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26254_26277,(0),null);
var v_26279 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26254_26277,(1),null);
this$__$1.setRequestHeader(k_26278,v_26279);


var G__26280 = cljs.core.next(seq__26241_26271__$1);
var G__26281 = null;
var G__26282 = (0);
var G__26283 = (0);
seq__26241_26259 = G__26280;
chunk__26242_26260 = G__26281;
count__26243_26261 = G__26282;
i__26244_26262 = G__26283;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__4126__auto__ = body;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})());

return this$__$1;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_all_headers$arity$1 = (function (this$){
var this$__$1 = this;
return ajax.xml_http_request.process_headers(this$__$1.getAllResponseHeaders());
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),this$__$1.readyState);
}));
