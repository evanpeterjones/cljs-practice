// Compiled by ClojureScript 1.10.773 {:target :nodejs}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined')){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.debug_loader_QMARK_ = (function figwheel$client$file_reloading$debug_loader_QMARK_(){
return (!((goog.debugLoader_ == null)));
});
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__4126__auto__ = ((cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && ((((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string'))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372))));
if(or__4126__auto__){
return or__4126__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (ns){

return goog.debugLoader_.getPathFromDeps_(ns);
}):(function (ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
}));
figwheel.client.file_reloading.provided_QMARK_ = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (ns){
return goog.getObjectByName(ns);
}):(function (ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
}));
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(ns){
return ((cljs.core._EQ_.call(null,"goog",ns)) || (cljs.core._EQ_.call(null,"cljs.core",ns)) || (cljs.core._EQ_.call(null,"cljs.nodejs",ns)) || (goog.string.startsWith(ns,"clojure.")) || (goog.string.startsWith(ns,"goog.")));
});
figwheel.client.file_reloading.base_requires_for_ns_path = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (path){
var G__37339 = goog.object.get(goog.debugLoader_.dependencies_,path);
if((G__37339 == null)){
return null;
} else {
return goog.object.get(G__37339,"requires");
}
}):(function (path){
var G__37340 = goog.object.get(goog.dependencies_.requires,path);
if((G__37340 == null)){
return null;
} else {
return goog.object.getKeys(G__37340);
}
}));
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__37341_SHARP_){
return (!(figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__37341_SHARP_)));
}),figwheel.client.file_reloading.base_requires_for_ns_path.call(null,figwheel.client.file_reloading.name__GT_path.call(null,ns))));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependency_data !== 'undefined')){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (_,___$1){
return null;
}):(function (path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
}));
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (){
return null;
}):(function (){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,(function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
}));
}));
figwheel.client.file_reloading.path__GT_name = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (path){
var G__37342 = goog.object.get(goog.debugLoader_.dependencies_,path);
var G__37342__$1 = (((G__37342 == null))?null:goog.object.get(G__37342,"provides"));
if((G__37342__$1 == null)){
return null;
} else {
return cljs.core.set.call(null,G__37342__$1);
}
}):(function (path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
}));
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),parent_ns);
});
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (){
return goog.object.forEach(goog.object.filter(goog.debugLoader_.dependencies_,(function (dep,path,_){
return cljs.core.not.call(null,cljs.core.some.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_,goog.object.get(dep,"provides")));
})),(function (dep,path,_){
var provides = goog.object.get(dep,"provides");
var requires = goog.object.get(dep,"requires");
var seq__37343 = cljs.core.seq.call(null,provides);
var chunk__37344 = null;
var count__37345 = (0);
var i__37346 = (0);
while(true){
if((i__37346 < count__37345)){
var prov = cljs.core._nth.call(null,chunk__37344,i__37346);
var seq__37355_37367 = cljs.core.seq.call(null,requires);
var chunk__37356_37368 = null;
var count__37357_37369 = (0);
var i__37358_37370 = (0);
while(true){
if((i__37358_37370 < count__37357_37369)){
var req_37371 = cljs.core._nth.call(null,chunk__37356_37368,i__37358_37370);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_37371,prov);


var G__37372 = seq__37355_37367;
var G__37373 = chunk__37356_37368;
var G__37374 = count__37357_37369;
var G__37375 = (i__37358_37370 + (1));
seq__37355_37367 = G__37372;
chunk__37356_37368 = G__37373;
count__37357_37369 = G__37374;
i__37358_37370 = G__37375;
continue;
} else {
var temp__5720__auto___37376 = cljs.core.seq.call(null,seq__37355_37367);
if(temp__5720__auto___37376){
var seq__37355_37377__$1 = temp__5720__auto___37376;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37355_37377__$1)){
var c__4556__auto___37378 = cljs.core.chunk_first.call(null,seq__37355_37377__$1);
var G__37379 = cljs.core.chunk_rest.call(null,seq__37355_37377__$1);
var G__37380 = c__4556__auto___37378;
var G__37381 = cljs.core.count.call(null,c__4556__auto___37378);
var G__37382 = (0);
seq__37355_37367 = G__37379;
chunk__37356_37368 = G__37380;
count__37357_37369 = G__37381;
i__37358_37370 = G__37382;
continue;
} else {
var req_37383 = cljs.core.first.call(null,seq__37355_37377__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_37383,prov);


var G__37384 = cljs.core.next.call(null,seq__37355_37377__$1);
var G__37385 = null;
var G__37386 = (0);
var G__37387 = (0);
seq__37355_37367 = G__37384;
chunk__37356_37368 = G__37385;
count__37357_37369 = G__37386;
i__37358_37370 = G__37387;
continue;
}
} else {
}
}
break;
}


var G__37388 = seq__37343;
var G__37389 = chunk__37344;
var G__37390 = count__37345;
var G__37391 = (i__37346 + (1));
seq__37343 = G__37388;
chunk__37344 = G__37389;
count__37345 = G__37390;
i__37346 = G__37391;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__37343);
if(temp__5720__auto__){
var seq__37343__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37343__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__37343__$1);
var G__37392 = cljs.core.chunk_rest.call(null,seq__37343__$1);
var G__37393 = c__4556__auto__;
var G__37394 = cljs.core.count.call(null,c__4556__auto__);
var G__37395 = (0);
seq__37343 = G__37392;
chunk__37344 = G__37393;
count__37345 = G__37394;
i__37346 = G__37395;
continue;
} else {
var prov = cljs.core.first.call(null,seq__37343__$1);
var seq__37359_37396 = cljs.core.seq.call(null,requires);
var chunk__37360_37397 = null;
var count__37361_37398 = (0);
var i__37362_37399 = (0);
while(true){
if((i__37362_37399 < count__37361_37398)){
var req_37400 = cljs.core._nth.call(null,chunk__37360_37397,i__37362_37399);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_37400,prov);


var G__37401 = seq__37359_37396;
var G__37402 = chunk__37360_37397;
var G__37403 = count__37361_37398;
var G__37404 = (i__37362_37399 + (1));
seq__37359_37396 = G__37401;
chunk__37360_37397 = G__37402;
count__37361_37398 = G__37403;
i__37362_37399 = G__37404;
continue;
} else {
var temp__5720__auto___37405__$1 = cljs.core.seq.call(null,seq__37359_37396);
if(temp__5720__auto___37405__$1){
var seq__37359_37406__$1 = temp__5720__auto___37405__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37359_37406__$1)){
var c__4556__auto___37407 = cljs.core.chunk_first.call(null,seq__37359_37406__$1);
var G__37408 = cljs.core.chunk_rest.call(null,seq__37359_37406__$1);
var G__37409 = c__4556__auto___37407;
var G__37410 = cljs.core.count.call(null,c__4556__auto___37407);
var G__37411 = (0);
seq__37359_37396 = G__37408;
chunk__37360_37397 = G__37409;
count__37361_37398 = G__37410;
i__37362_37399 = G__37411;
continue;
} else {
var req_37412 = cljs.core.first.call(null,seq__37359_37406__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_37412,prov);


var G__37413 = cljs.core.next.call(null,seq__37359_37406__$1);
var G__37414 = null;
var G__37415 = (0);
var G__37416 = (0);
seq__37359_37396 = G__37413;
chunk__37360_37397 = G__37414;
count__37361_37398 = G__37415;
i__37362_37399 = G__37416;
continue;
}
} else {
}
}
break;
}


var G__37417 = cljs.core.next.call(null,seq__37343__$1);
var G__37418 = null;
var G__37419 = (0);
var G__37420 = (0);
seq__37343 = G__37417;
chunk__37344 = G__37418;
count__37345 = G__37419;
i__37346 = G__37420;
continue;
}
} else {
return null;
}
}
break;
}
}));
}):(function (){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,(function (deps,path,_){
var seq__37363 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,path));
var chunk__37364 = null;
var count__37365 = (0);
var i__37366 = (0);
while(true){
if((i__37366 < count__37365)){
var prov = cljs.core._nth.call(null,chunk__37364,i__37366);
goog.object.forEach(deps,((function (seq__37363,chunk__37364,count__37365,i__37366,prov,requires){
return (function (___$1,req,___$2){
return figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req,prov);
});})(seq__37363,chunk__37364,count__37365,i__37366,prov,requires))
);


var G__37421 = seq__37363;
var G__37422 = chunk__37364;
var G__37423 = count__37365;
var G__37424 = (i__37366 + (1));
seq__37363 = G__37421;
chunk__37364 = G__37422;
count__37365 = G__37423;
i__37366 = G__37424;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__37363);
if(temp__5720__auto__){
var seq__37363__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37363__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__37363__$1);
var G__37425 = cljs.core.chunk_rest.call(null,seq__37363__$1);
var G__37426 = c__4556__auto__;
var G__37427 = cljs.core.count.call(null,c__4556__auto__);
var G__37428 = (0);
seq__37363 = G__37425;
chunk__37364 = G__37426;
count__37365 = G__37427;
i__37366 = G__37428;
continue;
} else {
var prov = cljs.core.first.call(null,seq__37363__$1);
goog.object.forEach(deps,((function (seq__37363,chunk__37364,count__37365,i__37366,prov,seq__37363__$1,temp__5720__auto__,requires){
return (function (___$1,req,___$2){
return figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req,prov);
});})(seq__37363,chunk__37364,count__37365,i__37366,prov,seq__37363__$1,temp__5720__auto__,requires))
);


var G__37429 = cljs.core.next.call(null,seq__37363__$1);
var G__37430 = null;
var G__37431 = (0);
var G__37432 = (0);
seq__37363 = G__37429;
chunk__37364 = G__37430;
count__37365 = G__37431;
i__37366 = G__37432;
continue;
}
} else {
return null;
}
}
break;
}
}));
}));
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.in_upper_level_QMARK_ = (function figwheel$client$file_reloading$in_upper_level_QMARK_(topo_state,current_depth,dep){
return cljs.core.some.call(null,(function (p__37433){
var vec__37434 = p__37433;
var _ = cljs.core.nth.call(null,vec__37434,(0),null);
var v = cljs.core.nth.call(null,vec__37434,(1),null);
var and__4115__auto__ = v;
if(cljs.core.truth_(and__4115__auto__)){
return v.call(null,dep);
} else {
return and__4115__auto__;
}
}),cljs.core.filter.call(null,(function (p__37437){
var vec__37438 = p__37437;
var k = cljs.core.nth.call(null,vec__37438,(0),null);
var v = cljs.core.nth.call(null,vec__37438,(1),null);
return (k > current_depth);
}),topo_state));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});
var topo_sort_STAR_ = (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__37450_37458 = cljs.core.seq.call(null,deps);
var chunk__37451_37459 = null;
var count__37452_37460 = (0);
var i__37453_37461 = (0);
while(true){
if((i__37453_37461 < count__37452_37460)){
var dep_37462 = cljs.core._nth.call(null,chunk__37451_37459,i__37453_37461);
if(cljs.core.truth_((function (){var and__4115__auto__ = dep_37462;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_37462));
} else {
return and__4115__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_37462,(depth + (1)),state);
} else {
}


var G__37463 = seq__37450_37458;
var G__37464 = chunk__37451_37459;
var G__37465 = count__37452_37460;
var G__37466 = (i__37453_37461 + (1));
seq__37450_37458 = G__37463;
chunk__37451_37459 = G__37464;
count__37452_37460 = G__37465;
i__37453_37461 = G__37466;
continue;
} else {
var temp__5720__auto___37467 = cljs.core.seq.call(null,seq__37450_37458);
if(temp__5720__auto___37467){
var seq__37450_37468__$1 = temp__5720__auto___37467;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37450_37468__$1)){
var c__4556__auto___37469 = cljs.core.chunk_first.call(null,seq__37450_37468__$1);
var G__37470 = cljs.core.chunk_rest.call(null,seq__37450_37468__$1);
var G__37471 = c__4556__auto___37469;
var G__37472 = cljs.core.count.call(null,c__4556__auto___37469);
var G__37473 = (0);
seq__37450_37458 = G__37470;
chunk__37451_37459 = G__37471;
count__37452_37460 = G__37472;
i__37453_37461 = G__37473;
continue;
} else {
var dep_37474 = cljs.core.first.call(null,seq__37450_37468__$1);
if(cljs.core.truth_((function (){var and__4115__auto__ = dep_37474;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_37474));
} else {
return and__4115__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_37474,(depth + (1)),state);
} else {
}


var G__37475 = cljs.core.next.call(null,seq__37450_37468__$1);
var G__37476 = null;
var G__37477 = (0);
var G__37478 = (0);
seq__37450_37458 = G__37475;
chunk__37451_37459 = G__37476;
count__37452_37460 = G__37477;
i__37453_37461 = G__37478;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;
var elim_dups_STAR_ = (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__37454){
var vec__37455 = p__37454;
var seq__37456 = cljs.core.seq.call(null,vec__37455);
var first__37457 = cljs.core.first.call(null,seq__37456);
var seq__37456__$1 = cljs.core.next.call(null,seq__37456);
var x = first__37457;
var xs = seq__37456__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,(function (p1__37441_SHARP_){
return clojure.set.difference.call(null,p1__37441_SHARP_,x);
}),xs)));
}
});
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.debugLoader_.written_,path);

return goog.object.remove(goog.debugLoader_.written_,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
}):(function (ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
}));
figwheel.client.file_reloading.resolve_ns = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?figwheel.client.file_reloading.name__GT_path:(function (p1__37479_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,p1__37479_SHARP_))].join('');
}));
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__37480 = cljs.core.seq.call(null,provides);
var chunk__37481 = null;
var count__37482 = (0);
var i__37483 = (0);
while(true){
if((i__37483 < count__37482)){
var prov = cljs.core._nth.call(null,chunk__37481,i__37483);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__37492_37500 = cljs.core.seq.call(null,requires);
var chunk__37493_37501 = null;
var count__37494_37502 = (0);
var i__37495_37503 = (0);
while(true){
if((i__37495_37503 < count__37494_37502)){
var req_37504 = cljs.core._nth.call(null,chunk__37493_37501,i__37495_37503);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_37504,prov);


var G__37505 = seq__37492_37500;
var G__37506 = chunk__37493_37501;
var G__37507 = count__37494_37502;
var G__37508 = (i__37495_37503 + (1));
seq__37492_37500 = G__37505;
chunk__37493_37501 = G__37506;
count__37494_37502 = G__37507;
i__37495_37503 = G__37508;
continue;
} else {
var temp__5720__auto___37509 = cljs.core.seq.call(null,seq__37492_37500);
if(temp__5720__auto___37509){
var seq__37492_37510__$1 = temp__5720__auto___37509;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37492_37510__$1)){
var c__4556__auto___37511 = cljs.core.chunk_first.call(null,seq__37492_37510__$1);
var G__37512 = cljs.core.chunk_rest.call(null,seq__37492_37510__$1);
var G__37513 = c__4556__auto___37511;
var G__37514 = cljs.core.count.call(null,c__4556__auto___37511);
var G__37515 = (0);
seq__37492_37500 = G__37512;
chunk__37493_37501 = G__37513;
count__37494_37502 = G__37514;
i__37495_37503 = G__37515;
continue;
} else {
var req_37516 = cljs.core.first.call(null,seq__37492_37510__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_37516,prov);


var G__37517 = cljs.core.next.call(null,seq__37492_37510__$1);
var G__37518 = null;
var G__37519 = (0);
var G__37520 = (0);
seq__37492_37500 = G__37517;
chunk__37493_37501 = G__37518;
count__37494_37502 = G__37519;
i__37495_37503 = G__37520;
continue;
}
} else {
}
}
break;
}


var G__37521 = seq__37480;
var G__37522 = chunk__37481;
var G__37523 = count__37482;
var G__37524 = (i__37483 + (1));
seq__37480 = G__37521;
chunk__37481 = G__37522;
count__37482 = G__37523;
i__37483 = G__37524;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__37480);
if(temp__5720__auto__){
var seq__37480__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37480__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__37480__$1);
var G__37525 = cljs.core.chunk_rest.call(null,seq__37480__$1);
var G__37526 = c__4556__auto__;
var G__37527 = cljs.core.count.call(null,c__4556__auto__);
var G__37528 = (0);
seq__37480 = G__37525;
chunk__37481 = G__37526;
count__37482 = G__37527;
i__37483 = G__37528;
continue;
} else {
var prov = cljs.core.first.call(null,seq__37480__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__37496_37529 = cljs.core.seq.call(null,requires);
var chunk__37497_37530 = null;
var count__37498_37531 = (0);
var i__37499_37532 = (0);
while(true){
if((i__37499_37532 < count__37498_37531)){
var req_37533 = cljs.core._nth.call(null,chunk__37497_37530,i__37499_37532);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_37533,prov);


var G__37534 = seq__37496_37529;
var G__37535 = chunk__37497_37530;
var G__37536 = count__37498_37531;
var G__37537 = (i__37499_37532 + (1));
seq__37496_37529 = G__37534;
chunk__37497_37530 = G__37535;
count__37498_37531 = G__37536;
i__37499_37532 = G__37537;
continue;
} else {
var temp__5720__auto___37538__$1 = cljs.core.seq.call(null,seq__37496_37529);
if(temp__5720__auto___37538__$1){
var seq__37496_37539__$1 = temp__5720__auto___37538__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37496_37539__$1)){
var c__4556__auto___37540 = cljs.core.chunk_first.call(null,seq__37496_37539__$1);
var G__37541 = cljs.core.chunk_rest.call(null,seq__37496_37539__$1);
var G__37542 = c__4556__auto___37540;
var G__37543 = cljs.core.count.call(null,c__4556__auto___37540);
var G__37544 = (0);
seq__37496_37529 = G__37541;
chunk__37497_37530 = G__37542;
count__37498_37531 = G__37543;
i__37499_37532 = G__37544;
continue;
} else {
var req_37545 = cljs.core.first.call(null,seq__37496_37539__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_37545,prov);


var G__37546 = cljs.core.next.call(null,seq__37496_37539__$1);
var G__37547 = null;
var G__37548 = (0);
var G__37549 = (0);
seq__37496_37529 = G__37546;
chunk__37497_37530 = G__37547;
count__37498_37531 = G__37548;
i__37499_37532 = G__37549;
continue;
}
} else {
}
}
break;
}


var G__37550 = cljs.core.next.call(null,seq__37480__$1);
var G__37551 = null;
var G__37552 = (0);
var G__37553 = (0);
seq__37480 = G__37550;
chunk__37481 = G__37551;
count__37482 = G__37552;
i__37483 = G__37553;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
(goog.require = figwheel.client.file_reloading.figwheel_require);

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__37554_37558 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__37555_37559 = null;
var count__37556_37560 = (0);
var i__37557_37561 = (0);
while(true){
if((i__37557_37561 < count__37556_37560)){
var ns_37562 = cljs.core._nth.call(null,chunk__37555_37559,i__37557_37561);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_37562);


var G__37563 = seq__37554_37558;
var G__37564 = chunk__37555_37559;
var G__37565 = count__37556_37560;
var G__37566 = (i__37557_37561 + (1));
seq__37554_37558 = G__37563;
chunk__37555_37559 = G__37564;
count__37556_37560 = G__37565;
i__37557_37561 = G__37566;
continue;
} else {
var temp__5720__auto___37567 = cljs.core.seq.call(null,seq__37554_37558);
if(temp__5720__auto___37567){
var seq__37554_37568__$1 = temp__5720__auto___37567;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37554_37568__$1)){
var c__4556__auto___37569 = cljs.core.chunk_first.call(null,seq__37554_37568__$1);
var G__37570 = cljs.core.chunk_rest.call(null,seq__37554_37568__$1);
var G__37571 = c__4556__auto___37569;
var G__37572 = cljs.core.count.call(null,c__4556__auto___37569);
var G__37573 = (0);
seq__37554_37558 = G__37570;
chunk__37555_37559 = G__37571;
count__37556_37560 = G__37572;
i__37557_37561 = G__37573;
continue;
} else {
var ns_37574 = cljs.core.first.call(null,seq__37554_37568__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_37574);


var G__37575 = cljs.core.next.call(null,seq__37554_37568__$1);
var G__37576 = null;
var G__37577 = (0);
var G__37578 = (0);
seq__37554_37558 = G__37575;
chunk__37555_37559 = G__37576;
count__37556_37560 = G__37577;
i__37557_37561 = G__37578;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
(goog.require_figwheel_backup_ = (function (){var or__4126__auto__ = goog.require__;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return goog.require;
}
})());

(goog.isProvided_ = (function (name){
return false;
}));

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

(goog.addDependency_figwheel_backup_ = goog.addDependency);

(goog.addDependency = (function() { 
var G__37579__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__37579 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37580__i = 0, G__37580__a = new Array(arguments.length -  0);
while (G__37580__i < G__37580__a.length) {G__37580__a[G__37580__i] = arguments[G__37580__i + 0]; ++G__37580__i;}
  args = new cljs.core.IndexedSeq(G__37580__a,0,null);
} 
return G__37579__delegate.call(this,args);};
G__37579.cljs$lang$maxFixedArity = 0;
G__37579.cljs$lang$applyTo = (function (arglist__37581){
var args = cljs.core.seq(arglist__37581);
return G__37579__delegate(args);
});
G__37579.cljs$core$IFn$_invoke$arity$variadic = G__37579__delegate;
return G__37579;
})()
);

goog.constructNamespace_("cljs.user");

(goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload);

return (goog.require = figwheel.client.file_reloading.figwheel_require);
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined')){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = (((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoad !== 'undefined'))?(function (p1__37582_SHARP_,p2__37583_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__37582_SHARP_)),p2__37583_SHARP_);
}):(((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.load !== 'undefined'))?(function (p1__37584_SHARP_,p2__37585_SHARP_){
return goog.net.jsloader.load(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__37584_SHARP_),p2__37585_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__37586 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__37586.addCallback((function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
}));

G__37586.addErrback((function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
}));

return G__37586;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e37587){if((e37587 instanceof Error)){
var e = e37587;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e37587;

}
}})());
});
goog.exportSymbol('figwheel.client.file_reloading.worker_import_script', figwheel.client.file_reloading.worker_import_script);
figwheel.client.file_reloading.create_node_script_import_fn = (function figwheel$client$file_reloading$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,(function (v,k,o){
return goog.string.endsWith(k,util_pattern);
}));
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e37588){if((e37588 instanceof Error)){
var e = e37588;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e37588;

}
}})());
});
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__37589 = cljs.core._EQ_;
var expr__37590 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__37589.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__37590))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__37589.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__37590))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__37589.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__37590))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return (function (a,b){
throw "Reload not defined for this platform";
});
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__37592,callback){
var map__37593 = p__37592;
var map__37593__$1 = (((((!((map__37593 == null))))?(((((map__37593.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37593.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37593):map__37593);
var file_msg = map__37593__$1;
var request_url = cljs.core.get.call(null,map__37593__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__4126__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,(function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
}));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_chan !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined')){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined')){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),(function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
}));

return out;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reloader_loop !== 'undefined')){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__35214__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__35215__auto__ = (function (){var switch__35119__auto__ = (function (state_37631){
var state_val_37632 = (state_37631[(1)]);
if((state_val_37632 === (7))){
var inst_37627 = (state_37631[(2)]);
var state_37631__$1 = state_37631;
var statearr_37633_37659 = state_37631__$1;
(statearr_37633_37659[(2)] = inst_37627);

(statearr_37633_37659[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37632 === (1))){
var state_37631__$1 = state_37631;
var statearr_37634_37660 = state_37631__$1;
(statearr_37634_37660[(2)] = null);

(statearr_37634_37660[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37632 === (4))){
var inst_37597 = (state_37631[(7)]);
var inst_37597__$1 = (state_37631[(2)]);
var state_37631__$1 = (function (){var statearr_37635 = state_37631;
(statearr_37635[(7)] = inst_37597__$1);

return statearr_37635;
})();
if(cljs.core.truth_(inst_37597__$1)){
var statearr_37636_37661 = state_37631__$1;
(statearr_37636_37661[(1)] = (5));

} else {
var statearr_37637_37662 = state_37631__$1;
(statearr_37637_37662[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37632 === (15))){
var inst_37610 = (state_37631[(8)]);
var inst_37612 = (state_37631[(9)]);
var inst_37614 = inst_37612.call(null,inst_37610);
var state_37631__$1 = state_37631;
var statearr_37638_37663 = state_37631__$1;
(statearr_37638_37663[(2)] = inst_37614);

(statearr_37638_37663[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37632 === (13))){
var inst_37621 = (state_37631[(2)]);
var state_37631__$1 = state_37631;
var statearr_37639_37664 = state_37631__$1;
(statearr_37639_37664[(2)] = inst_37621);

(statearr_37639_37664[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37632 === (6))){
var state_37631__$1 = state_37631;
var statearr_37640_37665 = state_37631__$1;
(statearr_37640_37665[(2)] = null);

(statearr_37640_37665[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37632 === (17))){
var inst_37618 = (state_37631[(2)]);
var state_37631__$1 = state_37631;
var statearr_37641_37666 = state_37631__$1;
(statearr_37641_37666[(2)] = inst_37618);

(statearr_37641_37666[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37632 === (3))){
var inst_37629 = (state_37631[(2)]);
var state_37631__$1 = state_37631;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37631__$1,inst_37629);
} else {
if((state_val_37632 === (12))){
var state_37631__$1 = state_37631;
var statearr_37642_37667 = state_37631__$1;
(statearr_37642_37667[(2)] = null);

(statearr_37642_37667[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37632 === (2))){
var state_37631__$1 = state_37631;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37631__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_37632 === (11))){
var inst_37602 = (state_37631[(10)]);
var inst_37608 = figwheel.client.file_reloading.blocking_load.call(null,inst_37602);
var state_37631__$1 = state_37631;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37631__$1,(14),inst_37608);
} else {
if((state_val_37632 === (9))){
var inst_37602 = (state_37631[(10)]);
var state_37631__$1 = state_37631;
if(cljs.core.truth_(inst_37602)){
var statearr_37643_37668 = state_37631__$1;
(statearr_37643_37668[(1)] = (11));

} else {
var statearr_37644_37669 = state_37631__$1;
(statearr_37644_37669[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37632 === (5))){
var inst_37603 = (state_37631[(11)]);
var inst_37597 = (state_37631[(7)]);
var inst_37602 = cljs.core.nth.call(null,inst_37597,(0),null);
var inst_37603__$1 = cljs.core.nth.call(null,inst_37597,(1),null);
var state_37631__$1 = (function (){var statearr_37645 = state_37631;
(statearr_37645[(11)] = inst_37603__$1);

(statearr_37645[(10)] = inst_37602);

return statearr_37645;
})();
if(cljs.core.truth_(inst_37603__$1)){
var statearr_37646_37670 = state_37631__$1;
(statearr_37646_37670[(1)] = (8));

} else {
var statearr_37647_37671 = state_37631__$1;
(statearr_37647_37671[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37632 === (14))){
var inst_37602 = (state_37631[(10)]);
var inst_37612 = (state_37631[(9)]);
var inst_37610 = (state_37631[(2)]);
var inst_37611 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_37612__$1 = cljs.core.get.call(null,inst_37611,inst_37602);
var state_37631__$1 = (function (){var statearr_37648 = state_37631;
(statearr_37648[(8)] = inst_37610);

(statearr_37648[(9)] = inst_37612__$1);

return statearr_37648;
})();
if(cljs.core.truth_(inst_37612__$1)){
var statearr_37649_37672 = state_37631__$1;
(statearr_37649_37672[(1)] = (15));

} else {
var statearr_37650_37673 = state_37631__$1;
(statearr_37650_37673[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37632 === (16))){
var inst_37610 = (state_37631[(8)]);
var inst_37616 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_37610);
var state_37631__$1 = state_37631;
var statearr_37651_37674 = state_37631__$1;
(statearr_37651_37674[(2)] = inst_37616);

(statearr_37651_37674[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37632 === (10))){
var inst_37623 = (state_37631[(2)]);
var state_37631__$1 = (function (){var statearr_37652 = state_37631;
(statearr_37652[(12)] = inst_37623);

return statearr_37652;
})();
var statearr_37653_37675 = state_37631__$1;
(statearr_37653_37675[(2)] = null);

(statearr_37653_37675[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37632 === (8))){
var inst_37603 = (state_37631[(11)]);
var inst_37605 = eval(inst_37603);
var state_37631__$1 = state_37631;
var statearr_37654_37676 = state_37631__$1;
(statearr_37654_37676[(2)] = inst_37605);

(statearr_37654_37676[(1)] = (10));


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
var figwheel$client$file_reloading$state_machine__35120__auto__ = null;
var figwheel$client$file_reloading$state_machine__35120__auto____0 = (function (){
var statearr_37655 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37655[(0)] = figwheel$client$file_reloading$state_machine__35120__auto__);

(statearr_37655[(1)] = (1));

return statearr_37655;
});
var figwheel$client$file_reloading$state_machine__35120__auto____1 = (function (state_37631){
while(true){
var ret_value__35121__auto__ = (function (){try{while(true){
var result__35122__auto__ = switch__35119__auto__.call(null,state_37631);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35122__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35122__auto__;
}
break;
}
}catch (e37656){if((e37656 instanceof Object)){
var ex__35123__auto__ = e37656;
var statearr_37657_37677 = state_37631;
(statearr_37657_37677[(5)] = ex__35123__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37631);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37656;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35121__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37678 = state_37631;
state_37631 = G__37678;
continue;
} else {
return ret_value__35121__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__35120__auto__ = function(state_37631){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__35120__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__35120__auto____1.call(this,state_37631);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__35120__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__35120__auto____0;
figwheel$client$file_reloading$state_machine__35120__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__35120__auto____1;
return figwheel$client$file_reloading$state_machine__35120__auto__;
})()
})();
var state__35216__auto__ = (function (){var statearr_37658 = f__35215__auto__.call(null);
(statearr_37658[(6)] = c__35214__auto__);

return statearr_37658;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35216__auto__);
}));

return c__35214__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__37680 = arguments.length;
switch (G__37680) {
case 1:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.client.file_reloading.queued_file_reload.call(null,url,null);
}));

(figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,opt_source_text], null));
}));

(figwheel.client.file_reloading.queued_file_reload.cljs$lang$maxFixedArity = 2);

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__37682,callback){
var map__37683 = p__37682;
var map__37683__$1 = (((((!((map__37683 == null))))?(((((map__37683.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37683.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37683):map__37683);
var file_msg = map__37683__$1;
var namespace = cljs.core.get.call(null,map__37683__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,(function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
}));

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__37685){
var map__37686 = p__37685;
var map__37686__$1 = (((((!((map__37686 == null))))?(((((map__37686.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37686.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37686):map__37686);
var file_msg = map__37686__$1;
var namespace = cljs.core.get.call(null,map__37686__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return (!((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null)));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__37688){
var map__37689 = p__37688;
var map__37689__$1 = (((((!((map__37689 == null))))?(((((map__37689.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37689.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37689):map__37689);
var file_msg = map__37689__$1;
var namespace = cljs.core.get.call(null,map__37689__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if(cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg))){
var or__4126__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
var or__4126__auto____$2 = figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
if(cljs.core.truth_(or__4126__auto____$2)){
return or__4126__auto____$2;
} else {
return figwheel.client.file_reloading.ns_exists_QMARK_.call(null,namespace);
}
}
}
} else {
return false;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__37691,callback){
var map__37692 = p__37691;
var map__37692__$1 = (((((!((map__37692 == null))))?(((((map__37692.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37692.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37692):map__37692);
var file_msg = map__37692__$1;
var request_url = cljs.core.get.call(null,map__37692__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__37692__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,(function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
}));

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__35214__auto___37742 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__35215__auto__ = (function (){var switch__35119__auto__ = (function (state_37727){
var state_val_37728 = (state_37727[(1)]);
if((state_val_37728 === (1))){
var inst_37701 = cljs.core.seq.call(null,files);
var inst_37702 = cljs.core.first.call(null,inst_37701);
var inst_37703 = cljs.core.next.call(null,inst_37701);
var inst_37704 = files;
var state_37727__$1 = (function (){var statearr_37729 = state_37727;
(statearr_37729[(7)] = inst_37702);

(statearr_37729[(8)] = inst_37703);

(statearr_37729[(9)] = inst_37704);

return statearr_37729;
})();
var statearr_37730_37743 = state_37727__$1;
(statearr_37730_37743[(2)] = null);

(statearr_37730_37743[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37728 === (2))){
var inst_37710 = (state_37727[(10)]);
var inst_37704 = (state_37727[(9)]);
var inst_37709 = cljs.core.seq.call(null,inst_37704);
var inst_37710__$1 = cljs.core.first.call(null,inst_37709);
var inst_37711 = cljs.core.next.call(null,inst_37709);
var inst_37712 = (inst_37710__$1 == null);
var inst_37713 = cljs.core.not.call(null,inst_37712);
var state_37727__$1 = (function (){var statearr_37731 = state_37727;
(statearr_37731[(10)] = inst_37710__$1);

(statearr_37731[(11)] = inst_37711);

return statearr_37731;
})();
if(inst_37713){
var statearr_37732_37744 = state_37727__$1;
(statearr_37732_37744[(1)] = (4));

} else {
var statearr_37733_37745 = state_37727__$1;
(statearr_37733_37745[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37728 === (3))){
var inst_37725 = (state_37727[(2)]);
var state_37727__$1 = state_37727;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37727__$1,inst_37725);
} else {
if((state_val_37728 === (4))){
var inst_37710 = (state_37727[(10)]);
var inst_37715 = figwheel.client.file_reloading.reload_js_file.call(null,inst_37710);
var state_37727__$1 = state_37727;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37727__$1,(7),inst_37715);
} else {
if((state_val_37728 === (5))){
var inst_37721 = cljs.core.async.close_BANG_.call(null,out);
var state_37727__$1 = state_37727;
var statearr_37734_37746 = state_37727__$1;
(statearr_37734_37746[(2)] = inst_37721);

(statearr_37734_37746[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37728 === (6))){
var inst_37723 = (state_37727[(2)]);
var state_37727__$1 = state_37727;
var statearr_37735_37747 = state_37727__$1;
(statearr_37735_37747[(2)] = inst_37723);

(statearr_37735_37747[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37728 === (7))){
var inst_37711 = (state_37727[(11)]);
var inst_37717 = (state_37727[(2)]);
var inst_37718 = cljs.core.async.put_BANG_.call(null,out,inst_37717);
var inst_37704 = inst_37711;
var state_37727__$1 = (function (){var statearr_37736 = state_37727;
(statearr_37736[(12)] = inst_37718);

(statearr_37736[(9)] = inst_37704);

return statearr_37736;
})();
var statearr_37737_37748 = state_37727__$1;
(statearr_37737_37748[(2)] = null);

(statearr_37737_37748[(1)] = (2));


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
});
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__35120__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__35120__auto____0 = (function (){
var statearr_37738 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37738[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__35120__auto__);

(statearr_37738[(1)] = (1));

return statearr_37738;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__35120__auto____1 = (function (state_37727){
while(true){
var ret_value__35121__auto__ = (function (){try{while(true){
var result__35122__auto__ = switch__35119__auto__.call(null,state_37727);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35122__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35122__auto__;
}
break;
}
}catch (e37739){if((e37739 instanceof Object)){
var ex__35123__auto__ = e37739;
var statearr_37740_37749 = state_37727;
(statearr_37740_37749[(5)] = ex__35123__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37727);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37739;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35121__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37750 = state_37727;
state_37727 = G__37750;
continue;
} else {
return ret_value__35121__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__35120__auto__ = function(state_37727){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__35120__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__35120__auto____1.call(this,state_37727);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__35120__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__35120__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__35120__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__35120__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__35120__auto__;
})()
})();
var state__35216__auto__ = (function (){var statearr_37741 = f__35215__auto__.call(null);
(statearr_37741[(6)] = c__35214__auto___37742);

return statearr_37741;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35216__auto__);
}));


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__37751,opts){
var map__37752 = p__37751;
var map__37752__$1 = (((((!((map__37752 == null))))?(((((map__37752.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37752.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37752):map__37752);
var eval_body = cljs.core.get.call(null,map__37752__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__37752__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__4115__auto__ = eval_body;
if(cljs.core.truth_(and__4115__auto__)){
return typeof eval_body === 'string';
} else {
return and__4115__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e37754){var e = e37754;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,(function (n){
var temp__5718__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__37755_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__37755_SHARP_),n);
}),files));
if(cljs.core.truth_(temp__5718__auto__)){
var file_msg = temp__5718__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
}),deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__37756){
var vec__37757 = p__37756;
var k = cljs.core.nth.call(null,vec__37757,(0),null);
var v = cljs.core.nth.call(null,vec__37757,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__37760){
var vec__37761 = p__37760;
var k = cljs.core.nth.call(null,vec__37761,(0),null);
var v = cljs.core.nth.call(null,vec__37761,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__37767,p__37768){
var map__37769 = p__37767;
var map__37769__$1 = (((((!((map__37769 == null))))?(((((map__37769.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37769.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37769):map__37769);
var opts = map__37769__$1;
var before_jsload = cljs.core.get.call(null,map__37769__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__37769__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__37769__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__37770 = p__37768;
var map__37770__$1 = (((((!((map__37770 == null))))?(((((map__37770.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37770.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37770):map__37770);
var msg = map__37770__$1;
var files = cljs.core.get.call(null,map__37770__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__37770__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__37770__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__35214__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__35215__auto__ = (function (){var switch__35119__auto__ = (function (state_37924){
var state_val_37925 = (state_37924[(1)]);
if((state_val_37925 === (7))){
var inst_37786 = (state_37924[(7)]);
var inst_37784 = (state_37924[(8)]);
var inst_37787 = (state_37924[(9)]);
var inst_37785 = (state_37924[(10)]);
var inst_37792 = cljs.core._nth.call(null,inst_37785,inst_37787);
var inst_37793 = figwheel.client.file_reloading.eval_body.call(null,inst_37792,opts);
var inst_37794 = (inst_37787 + (1));
var tmp37926 = inst_37786;
var tmp37927 = inst_37784;
var tmp37928 = inst_37785;
var inst_37784__$1 = tmp37927;
var inst_37785__$1 = tmp37928;
var inst_37786__$1 = tmp37926;
var inst_37787__$1 = inst_37794;
var state_37924__$1 = (function (){var statearr_37929 = state_37924;
(statearr_37929[(7)] = inst_37786__$1);

(statearr_37929[(8)] = inst_37784__$1);

(statearr_37929[(9)] = inst_37787__$1);

(statearr_37929[(11)] = inst_37793);

(statearr_37929[(10)] = inst_37785__$1);

return statearr_37929;
})();
var statearr_37930_38013 = state_37924__$1;
(statearr_37930_38013[(2)] = null);

(statearr_37930_38013[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37925 === (20))){
var inst_37827 = (state_37924[(12)]);
var inst_37835 = figwheel.client.file_reloading.sort_files.call(null,inst_37827);
var state_37924__$1 = state_37924;
var statearr_37931_38014 = state_37924__$1;
(statearr_37931_38014[(2)] = inst_37835);

(statearr_37931_38014[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37925 === (27))){
var state_37924__$1 = state_37924;
var statearr_37932_38015 = state_37924__$1;
(statearr_37932_38015[(2)] = null);

(statearr_37932_38015[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37925 === (1))){
var inst_37776 = (state_37924[(13)]);
var inst_37773 = before_jsload.call(null,files);
var inst_37774 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_37775 = (function (){return (function (p1__37764_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__37764_SHARP_);
});
})();
var inst_37776__$1 = cljs.core.filter.call(null,inst_37775,files);
var inst_37777 = cljs.core.not_empty.call(null,inst_37776__$1);
var state_37924__$1 = (function (){var statearr_37933 = state_37924;
(statearr_37933[(14)] = inst_37773);

(statearr_37933[(13)] = inst_37776__$1);

(statearr_37933[(15)] = inst_37774);

return statearr_37933;
})();
if(cljs.core.truth_(inst_37777)){
var statearr_37934_38016 = state_37924__$1;
(statearr_37934_38016[(1)] = (2));

} else {
var statearr_37935_38017 = state_37924__$1;
(statearr_37935_38017[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37925 === (24))){
var state_37924__$1 = state_37924;
var statearr_37936_38018 = state_37924__$1;
(statearr_37936_38018[(2)] = null);

(statearr_37936_38018[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37925 === (39))){
var inst_37877 = (state_37924[(16)]);
var state_37924__$1 = state_37924;
var statearr_37937_38019 = state_37924__$1;
(statearr_37937_38019[(2)] = inst_37877);

(statearr_37937_38019[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37925 === (46))){
var inst_37919 = (state_37924[(2)]);
var state_37924__$1 = state_37924;
var statearr_37938_38020 = state_37924__$1;
(statearr_37938_38020[(2)] = inst_37919);

(statearr_37938_38020[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37925 === (4))){
var inst_37821 = (state_37924[(2)]);
var inst_37822 = cljs.core.List.EMPTY;
var inst_37823 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_37822);
var inst_37824 = (function (){return (function (p1__37765_SHARP_){
var and__4115__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__37765_SHARP_);
if(cljs.core.truth_(and__4115__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__37765_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__37765_SHARP_))));
} else {
return and__4115__auto__;
}
});
})();
var inst_37825 = cljs.core.filter.call(null,inst_37824,files);
var inst_37826 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_37827 = cljs.core.concat.call(null,inst_37825,inst_37826);
var state_37924__$1 = (function (){var statearr_37939 = state_37924;
(statearr_37939[(12)] = inst_37827);

(statearr_37939[(17)] = inst_37823);

(statearr_37939[(18)] = inst_37821);

return statearr_37939;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_37940_38021 = state_37924__$1;
(statearr_37940_38021[(1)] = (16));

} else {
var statearr_37941_38022 = state_37924__$1;
(statearr_37941_38022[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37925 === (15))){
var inst_37811 = (state_37924[(2)]);
var state_37924__$1 = state_37924;
var statearr_37942_38023 = state_37924__$1;
(statearr_37942_38023[(2)] = inst_37811);

(statearr_37942_38023[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37925 === (21))){
var inst_37837 = (state_37924[(19)]);
var inst_37837__$1 = (state_37924[(2)]);
var inst_37838 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_37837__$1);
var state_37924__$1 = (function (){var statearr_37943 = state_37924;
(statearr_37943[(19)] = inst_37837__$1);

return statearr_37943;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37924__$1,(22),inst_37838);
} else {
if((state_val_37925 === (31))){
var inst_37922 = (state_37924[(2)]);
var state_37924__$1 = state_37924;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37924__$1,inst_37922);
} else {
if((state_val_37925 === (32))){
var inst_37877 = (state_37924[(16)]);
var inst_37882 = inst_37877.cljs$lang$protocol_mask$partition0$;
var inst_37883 = (inst_37882 & (64));
var inst_37884 = inst_37877.cljs$core$ISeq$;
var inst_37885 = (cljs.core.PROTOCOL_SENTINEL === inst_37884);
var inst_37886 = ((inst_37883) || (inst_37885));
var state_37924__$1 = state_37924;
if(cljs.core.truth_(inst_37886)){
var statearr_37944_38024 = state_37924__$1;
(statearr_37944_38024[(1)] = (35));

} else {
var statearr_37945_38025 = state_37924__$1;
(statearr_37945_38025[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37925 === (40))){
var inst_37899 = (state_37924[(20)]);
var inst_37898 = (state_37924[(2)]);
var inst_37899__$1 = cljs.core.get.call(null,inst_37898,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_37900 = cljs.core.get.call(null,inst_37898,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_37901 = cljs.core.not_empty.call(null,inst_37899__$1);
var state_37924__$1 = (function (){var statearr_37946 = state_37924;
(statearr_37946[(21)] = inst_37900);

(statearr_37946[(20)] = inst_37899__$1);

return statearr_37946;
})();
if(cljs.core.truth_(inst_37901)){
var statearr_37947_38026 = state_37924__$1;
(statearr_37947_38026[(1)] = (41));

} else {
var statearr_37948_38027 = state_37924__$1;
(statearr_37948_38027[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37925 === (33))){
var state_37924__$1 = state_37924;
var statearr_37949_38028 = state_37924__$1;
(statearr_37949_38028[(2)] = false);

(statearr_37949_38028[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37925 === (13))){
var inst_37797 = (state_37924[(22)]);
var inst_37801 = cljs.core.chunk_first.call(null,inst_37797);
var inst_37802 = cljs.core.chunk_rest.call(null,inst_37797);
var inst_37803 = cljs.core.count.call(null,inst_37801);
var inst_37784 = inst_37802;
var inst_37785 = inst_37801;
var inst_37786 = inst_37803;
var inst_37787 = (0);
var state_37924__$1 = (function (){var statearr_37950 = state_37924;
(statearr_37950[(7)] = inst_37786);

(statearr_37950[(8)] = inst_37784);

(statearr_37950[(9)] = inst_37787);

(statearr_37950[(10)] = inst_37785);

return statearr_37950;
})();
var statearr_37951_38029 = state_37924__$1;
(statearr_37951_38029[(2)] = null);

(statearr_37951_38029[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37925 === (22))){
var inst_37841 = (state_37924[(23)]);
var inst_37840 = (state_37924[(24)]);
var inst_37845 = (state_37924[(25)]);
var inst_37837 = (state_37924[(19)]);
var inst_37840__$1 = (state_37924[(2)]);
var inst_37841__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_37840__$1);
var inst_37842 = (function (){var all_files = inst_37837;
var res_SINGLEQUOTE_ = inst_37840__$1;
var res = inst_37841__$1;
return (function (p1__37766_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__37766_SHARP_));
});
})();
var inst_37843 = cljs.core.filter.call(null,inst_37842,inst_37840__$1);
var inst_37844 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_37845__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_37844);
var inst_37846 = cljs.core.not_empty.call(null,inst_37845__$1);
var state_37924__$1 = (function (){var statearr_37952 = state_37924;
(statearr_37952[(23)] = inst_37841__$1);

(statearr_37952[(24)] = inst_37840__$1);

(statearr_37952[(25)] = inst_37845__$1);

(statearr_37952[(26)] = inst_37843);

return statearr_37952;
})();
if(cljs.core.truth_(inst_37846)){
var statearr_37953_38030 = state_37924__$1;
(statearr_37953_38030[(1)] = (23));

} else {
var statearr_37954_38031 = state_37924__$1;
(statearr_37954_38031[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37925 === (36))){
var state_37924__$1 = state_37924;
var statearr_37955_38032 = state_37924__$1;
(statearr_37955_38032[(2)] = false);

(statearr_37955_38032[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37925 === (41))){
var inst_37899 = (state_37924[(20)]);
var inst_37903 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_37904 = cljs.core.map.call(null,inst_37903,inst_37899);
var inst_37905 = cljs.core.pr_str.call(null,inst_37904);
var inst_37906 = ["figwheel-no-load meta-data: ",inst_37905].join('');
var inst_37907 = figwheel.client.utils.log.call(null,inst_37906);
var state_37924__$1 = state_37924;
var statearr_37956_38033 = state_37924__$1;
(statearr_37956_38033[(2)] = inst_37907);

(statearr_37956_38033[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37925 === (43))){
var inst_37900 = (state_37924[(21)]);
var inst_37910 = (state_37924[(2)]);
var inst_37911 = cljs.core.not_empty.call(null,inst_37900);
var state_37924__$1 = (function (){var statearr_37957 = state_37924;
(statearr_37957[(27)] = inst_37910);

return statearr_37957;
})();
if(cljs.core.truth_(inst_37911)){
var statearr_37958_38034 = state_37924__$1;
(statearr_37958_38034[(1)] = (44));

} else {
var statearr_37959_38035 = state_37924__$1;
(statearr_37959_38035[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37925 === (29))){
var inst_37841 = (state_37924[(23)]);
var inst_37840 = (state_37924[(24)]);
var inst_37877 = (state_37924[(16)]);
var inst_37845 = (state_37924[(25)]);
var inst_37837 = (state_37924[(19)]);
var inst_37843 = (state_37924[(26)]);
var inst_37873 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_37876 = (function (){var all_files = inst_37837;
var res_SINGLEQUOTE_ = inst_37840;
var res = inst_37841;
var files_not_loaded = inst_37843;
var dependencies_that_loaded = inst_37845;
return (function (p__37875){
var map__37960 = p__37875;
var map__37960__$1 = (((((!((map__37960 == null))))?(((((map__37960.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37960.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37960):map__37960);
var namespace = cljs.core.get.call(null,map__37960__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
})();
var inst_37877__$1 = cljs.core.group_by.call(null,inst_37876,inst_37843);
var inst_37879 = (inst_37877__$1 == null);
var inst_37880 = cljs.core.not.call(null,inst_37879);
var state_37924__$1 = (function (){var statearr_37962 = state_37924;
(statearr_37962[(28)] = inst_37873);

(statearr_37962[(16)] = inst_37877__$1);

return statearr_37962;
})();
if(inst_37880){
var statearr_37963_38036 = state_37924__$1;
(statearr_37963_38036[(1)] = (32));

} else {
var statearr_37964_38037 = state_37924__$1;
(statearr_37964_38037[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37925 === (44))){
var inst_37900 = (state_37924[(21)]);
var inst_37913 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_37900);
var inst_37914 = cljs.core.pr_str.call(null,inst_37913);
var inst_37915 = ["not required: ",inst_37914].join('');
var inst_37916 = figwheel.client.utils.log.call(null,inst_37915);
var state_37924__$1 = state_37924;
var statearr_37965_38038 = state_37924__$1;
(statearr_37965_38038[(2)] = inst_37916);

(statearr_37965_38038[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37925 === (6))){
var inst_37818 = (state_37924[(2)]);
var state_37924__$1 = state_37924;
var statearr_37966_38039 = state_37924__$1;
(statearr_37966_38039[(2)] = inst_37818);

(statearr_37966_38039[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37925 === (28))){
var inst_37843 = (state_37924[(26)]);
var inst_37870 = (state_37924[(2)]);
var inst_37871 = cljs.core.not_empty.call(null,inst_37843);
var state_37924__$1 = (function (){var statearr_37967 = state_37924;
(statearr_37967[(29)] = inst_37870);

return statearr_37967;
})();
if(cljs.core.truth_(inst_37871)){
var statearr_37968_38040 = state_37924__$1;
(statearr_37968_38040[(1)] = (29));

} else {
var statearr_37969_38041 = state_37924__$1;
(statearr_37969_38041[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37925 === (25))){
var inst_37841 = (state_37924[(23)]);
var inst_37857 = (state_37924[(2)]);
var inst_37858 = cljs.core.not_empty.call(null,inst_37841);
var state_37924__$1 = (function (){var statearr_37970 = state_37924;
(statearr_37970[(30)] = inst_37857);

return statearr_37970;
})();
if(cljs.core.truth_(inst_37858)){
var statearr_37971_38042 = state_37924__$1;
(statearr_37971_38042[(1)] = (26));

} else {
var statearr_37972_38043 = state_37924__$1;
(statearr_37972_38043[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37925 === (34))){
var inst_37893 = (state_37924[(2)]);
var state_37924__$1 = state_37924;
if(cljs.core.truth_(inst_37893)){
var statearr_37973_38044 = state_37924__$1;
(statearr_37973_38044[(1)] = (38));

} else {
var statearr_37974_38045 = state_37924__$1;
(statearr_37974_38045[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37925 === (17))){
var state_37924__$1 = state_37924;
var statearr_37975_38046 = state_37924__$1;
(statearr_37975_38046[(2)] = recompile_dependents);

(statearr_37975_38046[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37925 === (3))){
var state_37924__$1 = state_37924;
var statearr_37976_38047 = state_37924__$1;
(statearr_37976_38047[(2)] = null);

(statearr_37976_38047[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37925 === (12))){
var inst_37814 = (state_37924[(2)]);
var state_37924__$1 = state_37924;
var statearr_37977_38048 = state_37924__$1;
(statearr_37977_38048[(2)] = inst_37814);

(statearr_37977_38048[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37925 === (2))){
var inst_37776 = (state_37924[(13)]);
var inst_37783 = cljs.core.seq.call(null,inst_37776);
var inst_37784 = inst_37783;
var inst_37785 = null;
var inst_37786 = (0);
var inst_37787 = (0);
var state_37924__$1 = (function (){var statearr_37978 = state_37924;
(statearr_37978[(7)] = inst_37786);

(statearr_37978[(8)] = inst_37784);

(statearr_37978[(9)] = inst_37787);

(statearr_37978[(10)] = inst_37785);

return statearr_37978;
})();
var statearr_37979_38049 = state_37924__$1;
(statearr_37979_38049[(2)] = null);

(statearr_37979_38049[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37925 === (23))){
var inst_37841 = (state_37924[(23)]);
var inst_37840 = (state_37924[(24)]);
var inst_37845 = (state_37924[(25)]);
var inst_37837 = (state_37924[(19)]);
var inst_37843 = (state_37924[(26)]);
var inst_37848 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_37850 = (function (){var all_files = inst_37837;
var res_SINGLEQUOTE_ = inst_37840;
var res = inst_37841;
var files_not_loaded = inst_37843;
var dependencies_that_loaded = inst_37845;
return (function (p__37849){
var map__37980 = p__37849;
var map__37980__$1 = (((((!((map__37980 == null))))?(((((map__37980.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37980.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37980):map__37980);
var request_url = cljs.core.get.call(null,map__37980__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
})();
var inst_37851 = cljs.core.reverse.call(null,inst_37845);
var inst_37852 = cljs.core.map.call(null,inst_37850,inst_37851);
var inst_37853 = cljs.core.pr_str.call(null,inst_37852);
var inst_37854 = figwheel.client.utils.log.call(null,inst_37853);
var state_37924__$1 = (function (){var statearr_37982 = state_37924;
(statearr_37982[(31)] = inst_37848);

return statearr_37982;
})();
var statearr_37983_38050 = state_37924__$1;
(statearr_37983_38050[(2)] = inst_37854);

(statearr_37983_38050[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37925 === (35))){
var state_37924__$1 = state_37924;
var statearr_37984_38051 = state_37924__$1;
(statearr_37984_38051[(2)] = true);

(statearr_37984_38051[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37925 === (19))){
var inst_37827 = (state_37924[(12)]);
var inst_37833 = figwheel.client.file_reloading.expand_files.call(null,inst_37827);
var state_37924__$1 = state_37924;
var statearr_37985_38052 = state_37924__$1;
(statearr_37985_38052[(2)] = inst_37833);

(statearr_37985_38052[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37925 === (11))){
var state_37924__$1 = state_37924;
var statearr_37986_38053 = state_37924__$1;
(statearr_37986_38053[(2)] = null);

(statearr_37986_38053[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37925 === (9))){
var inst_37816 = (state_37924[(2)]);
var state_37924__$1 = state_37924;
var statearr_37987_38054 = state_37924__$1;
(statearr_37987_38054[(2)] = inst_37816);

(statearr_37987_38054[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37925 === (5))){
var inst_37786 = (state_37924[(7)]);
var inst_37787 = (state_37924[(9)]);
var inst_37789 = (inst_37787 < inst_37786);
var inst_37790 = inst_37789;
var state_37924__$1 = state_37924;
if(cljs.core.truth_(inst_37790)){
var statearr_37988_38055 = state_37924__$1;
(statearr_37988_38055[(1)] = (7));

} else {
var statearr_37989_38056 = state_37924__$1;
(statearr_37989_38056[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37925 === (14))){
var inst_37797 = (state_37924[(22)]);
var inst_37806 = cljs.core.first.call(null,inst_37797);
var inst_37807 = figwheel.client.file_reloading.eval_body.call(null,inst_37806,opts);
var inst_37808 = cljs.core.next.call(null,inst_37797);
var inst_37784 = inst_37808;
var inst_37785 = null;
var inst_37786 = (0);
var inst_37787 = (0);
var state_37924__$1 = (function (){var statearr_37990 = state_37924;
(statearr_37990[(7)] = inst_37786);

(statearr_37990[(32)] = inst_37807);

(statearr_37990[(8)] = inst_37784);

(statearr_37990[(9)] = inst_37787);

(statearr_37990[(10)] = inst_37785);

return statearr_37990;
})();
var statearr_37991_38057 = state_37924__$1;
(statearr_37991_38057[(2)] = null);

(statearr_37991_38057[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37925 === (45))){
var state_37924__$1 = state_37924;
var statearr_37992_38058 = state_37924__$1;
(statearr_37992_38058[(2)] = null);

(statearr_37992_38058[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37925 === (26))){
var inst_37841 = (state_37924[(23)]);
var inst_37840 = (state_37924[(24)]);
var inst_37845 = (state_37924[(25)]);
var inst_37837 = (state_37924[(19)]);
var inst_37843 = (state_37924[(26)]);
var inst_37860 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_37862 = (function (){var all_files = inst_37837;
var res_SINGLEQUOTE_ = inst_37840;
var res = inst_37841;
var files_not_loaded = inst_37843;
var dependencies_that_loaded = inst_37845;
return (function (p__37861){
var map__37993 = p__37861;
var map__37993__$1 = (((((!((map__37993 == null))))?(((((map__37993.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37993.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37993):map__37993);
var namespace = cljs.core.get.call(null,map__37993__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__37993__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
})();
var inst_37863 = cljs.core.map.call(null,inst_37862,inst_37841);
var inst_37864 = cljs.core.pr_str.call(null,inst_37863);
var inst_37865 = figwheel.client.utils.log.call(null,inst_37864);
var inst_37866 = (function (){var all_files = inst_37837;
var res_SINGLEQUOTE_ = inst_37840;
var res = inst_37841;
var files_not_loaded = inst_37843;
var dependencies_that_loaded = inst_37845;
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
})();
var inst_37867 = setTimeout(inst_37866,(10));
var state_37924__$1 = (function (){var statearr_37995 = state_37924;
(statearr_37995[(33)] = inst_37865);

(statearr_37995[(34)] = inst_37860);

return statearr_37995;
})();
var statearr_37996_38059 = state_37924__$1;
(statearr_37996_38059[(2)] = inst_37867);

(statearr_37996_38059[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37925 === (16))){
var state_37924__$1 = state_37924;
var statearr_37997_38060 = state_37924__$1;
(statearr_37997_38060[(2)] = reload_dependents);

(statearr_37997_38060[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37925 === (38))){
var inst_37877 = (state_37924[(16)]);
var inst_37895 = cljs.core.apply.call(null,cljs.core.hash_map,inst_37877);
var state_37924__$1 = state_37924;
var statearr_37998_38061 = state_37924__$1;
(statearr_37998_38061[(2)] = inst_37895);

(statearr_37998_38061[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37925 === (30))){
var state_37924__$1 = state_37924;
var statearr_37999_38062 = state_37924__$1;
(statearr_37999_38062[(2)] = null);

(statearr_37999_38062[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37925 === (10))){
var inst_37797 = (state_37924[(22)]);
var inst_37799 = cljs.core.chunked_seq_QMARK_.call(null,inst_37797);
var state_37924__$1 = state_37924;
if(inst_37799){
var statearr_38000_38063 = state_37924__$1;
(statearr_38000_38063[(1)] = (13));

} else {
var statearr_38001_38064 = state_37924__$1;
(statearr_38001_38064[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37925 === (18))){
var inst_37831 = (state_37924[(2)]);
var state_37924__$1 = state_37924;
if(cljs.core.truth_(inst_37831)){
var statearr_38002_38065 = state_37924__$1;
(statearr_38002_38065[(1)] = (19));

} else {
var statearr_38003_38066 = state_37924__$1;
(statearr_38003_38066[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37925 === (42))){
var state_37924__$1 = state_37924;
var statearr_38004_38067 = state_37924__$1;
(statearr_38004_38067[(2)] = null);

(statearr_38004_38067[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37925 === (37))){
var inst_37890 = (state_37924[(2)]);
var state_37924__$1 = state_37924;
var statearr_38005_38068 = state_37924__$1;
(statearr_38005_38068[(2)] = inst_37890);

(statearr_38005_38068[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37925 === (8))){
var inst_37797 = (state_37924[(22)]);
var inst_37784 = (state_37924[(8)]);
var inst_37797__$1 = cljs.core.seq.call(null,inst_37784);
var state_37924__$1 = (function (){var statearr_38006 = state_37924;
(statearr_38006[(22)] = inst_37797__$1);

return statearr_38006;
})();
if(inst_37797__$1){
var statearr_38007_38069 = state_37924__$1;
(statearr_38007_38069[(1)] = (10));

} else {
var statearr_38008_38070 = state_37924__$1;
(statearr_38008_38070[(1)] = (11));

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
}
});
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__35120__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__35120__auto____0 = (function (){
var statearr_38009 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38009[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__35120__auto__);

(statearr_38009[(1)] = (1));

return statearr_38009;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__35120__auto____1 = (function (state_37924){
while(true){
var ret_value__35121__auto__ = (function (){try{while(true){
var result__35122__auto__ = switch__35119__auto__.call(null,state_37924);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35122__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35122__auto__;
}
break;
}
}catch (e38010){if((e38010 instanceof Object)){
var ex__35123__auto__ = e38010;
var statearr_38011_38071 = state_37924;
(statearr_38011_38071[(5)] = ex__35123__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37924);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38010;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35121__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38072 = state_37924;
state_37924 = G__38072;
continue;
} else {
return ret_value__35121__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__35120__auto__ = function(state_37924){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__35120__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__35120__auto____1.call(this,state_37924);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__35120__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__35120__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__35120__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__35120__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__35120__auto__;
})()
})();
var state__35216__auto__ = (function (){var statearr_38012 = f__35215__auto__.call(null);
(statearr_38012[(6)] = c__35214__auto__);

return statearr_38012;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35216__auto__);
}));

return c__35214__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__38075,link){
var map__38076 = p__38075;
var map__38076__$1 = (((((!((map__38076 == null))))?(((((map__38076.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38076.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38076):map__38076);
var file = cljs.core.get.call(null,map__38076__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5720__auto__ = link.href;
if(cljs.core.truth_(temp__5720__auto__)){
var link_href = temp__5720__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,(function (p1__38073_SHARP_,p2__38074_SHARP_){
if(cljs.core._EQ_.call(null,p1__38073_SHARP_,p2__38074_SHARP_)){
return p1__38073_SHARP_;
} else {
return false;
}
}),cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = ((match).length);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),((figwheel.client.file_reloading.truncate_url.call(null,link_href)).length)], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__5720__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__38079){
var map__38080 = p__38079;
var map__38080__$1 = (((((!((map__38080 == null))))?(((((map__38080.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38080.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38080):map__38080);
var match_length = cljs.core.get.call(null,map__38080__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__38080__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__38078_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__38078_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__5720__auto__)){
var res = temp__5720__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
(clone.rel = "stylesheet");

(clone.media = link.media);

(clone.disabled = link.disabled);

(clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url));

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
(link.rel = "stylesheet");

(link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url));

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__38082_SHARP_,p2__38083_SHARP_){
return cljs.core.assoc.call(null,p1__38082_SHARP_,cljs.core.get.call(null,p2__38083_SHARP_,key),p2__38083_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout((function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
}),(300));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__5718__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__5718__auto__)){
var link = temp__5718__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),(function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
}));
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_38084 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_38084);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_38084);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__38085,p__38086){
var map__38087 = p__38085;
var map__38087__$1 = (((((!((map__38087 == null))))?(((((map__38087.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38087.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38087):map__38087);
var on_cssload = cljs.core.get.call(null,map__38087__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__38088 = p__38086;
var map__38088__$1 = (((((!((map__38088 == null))))?(((((map__38088.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38088.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38088):map__38088);
var files_msg = map__38088__$1;
var files = cljs.core.get.call(null,map__38088__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(figwheel.client.utils.html_env_QMARK_.call(null)){
var temp__5720__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__5720__auto__)){
var f_datas = temp__5720__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1607284885031
