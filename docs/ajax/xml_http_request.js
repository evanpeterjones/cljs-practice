// Compiled by ClojureScript 1.10.773 {:target :nodejs}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('ajax.protocols');
goog.require('goog.string');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
return new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null).call(null,e.target.readyState);
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
return cljs.core.reduce.call(null,(function (headers,header_line){
if(goog.string.isEmptyOrWhitespace(header_line)){
return headers;
} else {
var key_value = goog.string.splitLimit(header_line,": ",(2));
return cljs.core.update.call(null,headers,(key_value[(0)]),ajax.xml_http_request.append,(key_value[(1)]));
}
}),cljs.core.PersistentArrayMap.EMPTY,header_str.split("\r\n"));
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
ajax.xml_http_request.xmlhttprequest = (((typeof goog !== 'undefined') && (typeof goog.global !== 'undefined') && (typeof goog.global.XMLHttpRequest !== 'undefined'))?goog.global.XMLHttpRequest:(((typeof require !== 'undefined'))?(function (){var req = require;
return req.call(null,"xmlhttprequest").XMLHttpRequest;
})():null));
(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__21952,handler){
var map__21953 = p__21952;
var map__21953__$1 = (((((!((map__21953 == null))))?(((((map__21953.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21953.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21953):map__21953);
var uri = cljs.core.get.call(null,map__21953__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__21953__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.call(null,map__21953__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.call(null,map__21953__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.call(null,map__21953__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.call(null,map__21953__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.call(null,map__21953__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
(this$__$1.withCredentials = with_credentials);

(this$__$1.onreadystatechange = (function (p1__21951_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state.call(null,p1__21951_SHARP_))){
return handler.call(null,this$__$1);
} else {
return null;
}
}));

this$__$1.open(method,uri,true);

(this$__$1.timeout = timeout);

var temp__5720__auto___21971 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__5720__auto___21971)){
var response_type_21972 = temp__5720__auto___21971;
(this$__$1.responseType = cljs.core.name.call(null,response_type_21972));
} else {
}

var seq__21955_21973 = cljs.core.seq.call(null,headers);
var chunk__21956_21974 = null;
var count__21957_21975 = (0);
var i__21958_21976 = (0);
while(true){
if((i__21958_21976 < count__21957_21975)){
var vec__21965_21977 = cljs.core._nth.call(null,chunk__21956_21974,i__21958_21976);
var k_21978 = cljs.core.nth.call(null,vec__21965_21977,(0),null);
var v_21979 = cljs.core.nth.call(null,vec__21965_21977,(1),null);
this$__$1.setRequestHeader(k_21978,v_21979);


var G__21980 = seq__21955_21973;
var G__21981 = chunk__21956_21974;
var G__21982 = count__21957_21975;
var G__21983 = (i__21958_21976 + (1));
seq__21955_21973 = G__21980;
chunk__21956_21974 = G__21981;
count__21957_21975 = G__21982;
i__21958_21976 = G__21983;
continue;
} else {
var temp__5720__auto___21984 = cljs.core.seq.call(null,seq__21955_21973);
if(temp__5720__auto___21984){
var seq__21955_21985__$1 = temp__5720__auto___21984;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21955_21985__$1)){
var c__4556__auto___21986 = cljs.core.chunk_first.call(null,seq__21955_21985__$1);
var G__21987 = cljs.core.chunk_rest.call(null,seq__21955_21985__$1);
var G__21988 = c__4556__auto___21986;
var G__21989 = cljs.core.count.call(null,c__4556__auto___21986);
var G__21990 = (0);
seq__21955_21973 = G__21987;
chunk__21956_21974 = G__21988;
count__21957_21975 = G__21989;
i__21958_21976 = G__21990;
continue;
} else {
var vec__21968_21991 = cljs.core.first.call(null,seq__21955_21985__$1);
var k_21992 = cljs.core.nth.call(null,vec__21968_21991,(0),null);
var v_21993 = cljs.core.nth.call(null,vec__21968_21991,(1),null);
this$__$1.setRequestHeader(k_21992,v_21993);


var G__21994 = cljs.core.next.call(null,seq__21955_21985__$1);
var G__21995 = null;
var G__21996 = (0);
var G__21997 = (0);
seq__21955_21973 = G__21994;
chunk__21956_21974 = G__21995;
count__21957_21975 = G__21996;
i__21958_21976 = G__21997;
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
return ajax.xml_http_request.process_headers.call(null,this$__$1.getAllResponseHeaders());
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.call(null,(0),this$__$1.readyState);
}));

//# sourceMappingURL=xml_http_request.js.map?rel=1607231743431
