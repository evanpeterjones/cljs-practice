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

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__21619,handler){
var map__21620 = p__21619;
var map__21620__$1 = (((((!((map__21620 == null))))?(((((map__21620.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21620.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21620):map__21620);
var uri = cljs.core.get.call(null,map__21620__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__21620__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.call(null,map__21620__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.call(null,map__21620__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.call(null,map__21620__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.call(null,map__21620__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.call(null,map__21620__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
(this$__$1.withCredentials = with_credentials);

(this$__$1.onreadystatechange = (function (p1__21618_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state.call(null,p1__21618_SHARP_))){
return handler.call(null,this$__$1);
} else {
return null;
}
}));

this$__$1.open(method,uri,true);

(this$__$1.timeout = timeout);

var temp__5720__auto___21638 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__5720__auto___21638)){
var response_type_21639 = temp__5720__auto___21638;
(this$__$1.responseType = cljs.core.name.call(null,response_type_21639));
} else {
}

var seq__21622_21640 = cljs.core.seq.call(null,headers);
var chunk__21623_21641 = null;
var count__21624_21642 = (0);
var i__21625_21643 = (0);
while(true){
if((i__21625_21643 < count__21624_21642)){
var vec__21632_21644 = cljs.core._nth.call(null,chunk__21623_21641,i__21625_21643);
var k_21645 = cljs.core.nth.call(null,vec__21632_21644,(0),null);
var v_21646 = cljs.core.nth.call(null,vec__21632_21644,(1),null);
this$__$1.setRequestHeader(k_21645,v_21646);


var G__21647 = seq__21622_21640;
var G__21648 = chunk__21623_21641;
var G__21649 = count__21624_21642;
var G__21650 = (i__21625_21643 + (1));
seq__21622_21640 = G__21647;
chunk__21623_21641 = G__21648;
count__21624_21642 = G__21649;
i__21625_21643 = G__21650;
continue;
} else {
var temp__5720__auto___21651 = cljs.core.seq.call(null,seq__21622_21640);
if(temp__5720__auto___21651){
var seq__21622_21652__$1 = temp__5720__auto___21651;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21622_21652__$1)){
var c__4556__auto___21653 = cljs.core.chunk_first.call(null,seq__21622_21652__$1);
var G__21654 = cljs.core.chunk_rest.call(null,seq__21622_21652__$1);
var G__21655 = c__4556__auto___21653;
var G__21656 = cljs.core.count.call(null,c__4556__auto___21653);
var G__21657 = (0);
seq__21622_21640 = G__21654;
chunk__21623_21641 = G__21655;
count__21624_21642 = G__21656;
i__21625_21643 = G__21657;
continue;
} else {
var vec__21635_21658 = cljs.core.first.call(null,seq__21622_21652__$1);
var k_21659 = cljs.core.nth.call(null,vec__21635_21658,(0),null);
var v_21660 = cljs.core.nth.call(null,vec__21635_21658,(1),null);
this$__$1.setRequestHeader(k_21659,v_21660);


var G__21661 = cljs.core.next.call(null,seq__21622_21652__$1);
var G__21662 = null;
var G__21663 = (0);
var G__21664 = (0);
seq__21622_21640 = G__21661;
chunk__21623_21641 = G__21662;
count__21624_21642 = G__21663;
i__21625_21643 = G__21664;
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

//# sourceMappingURL=xml_http_request.js.map?rel=1607132426590
