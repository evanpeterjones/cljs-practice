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
var G__29221 = goog.object.get(goog.debugLoader_.dependencies_,path);
if((G__29221 == null)){
return null;
} else {
return goog.object.get(G__29221,"requires");
}
}):(function (path){
var G__29222 = goog.object.get(goog.dependencies_.requires,path);
if((G__29222 == null)){
return null;
} else {
return goog.object.getKeys(G__29222);
}
}));
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__29223_SHARP_){
return (!(figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__29223_SHARP_)));
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
var G__29224 = goog.object.get(goog.debugLoader_.dependencies_,path);
var G__29224__$1 = (((G__29224 == null))?null:goog.object.get(G__29224,"provides"));
if((G__29224__$1 == null)){
return null;
} else {
return cljs.core.set.call(null,G__29224__$1);
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
var seq__29225 = cljs.core.seq.call(null,provides);
var chunk__29226 = null;
var count__29227 = (0);
var i__29228 = (0);
while(true){
if((i__29228 < count__29227)){
var prov = cljs.core._nth.call(null,chunk__29226,i__29228);
var seq__29237_29249 = cljs.core.seq.call(null,requires);
var chunk__29238_29250 = null;
var count__29239_29251 = (0);
var i__29240_29252 = (0);
while(true){
if((i__29240_29252 < count__29239_29251)){
var req_29253 = cljs.core._nth.call(null,chunk__29238_29250,i__29240_29252);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29253,prov);


var G__29254 = seq__29237_29249;
var G__29255 = chunk__29238_29250;
var G__29256 = count__29239_29251;
var G__29257 = (i__29240_29252 + (1));
seq__29237_29249 = G__29254;
chunk__29238_29250 = G__29255;
count__29239_29251 = G__29256;
i__29240_29252 = G__29257;
continue;
} else {
var temp__5720__auto___29258 = cljs.core.seq.call(null,seq__29237_29249);
if(temp__5720__auto___29258){
var seq__29237_29259__$1 = temp__5720__auto___29258;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29237_29259__$1)){
var c__4556__auto___29260 = cljs.core.chunk_first.call(null,seq__29237_29259__$1);
var G__29261 = cljs.core.chunk_rest.call(null,seq__29237_29259__$1);
var G__29262 = c__4556__auto___29260;
var G__29263 = cljs.core.count.call(null,c__4556__auto___29260);
var G__29264 = (0);
seq__29237_29249 = G__29261;
chunk__29238_29250 = G__29262;
count__29239_29251 = G__29263;
i__29240_29252 = G__29264;
continue;
} else {
var req_29265 = cljs.core.first.call(null,seq__29237_29259__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29265,prov);


var G__29266 = cljs.core.next.call(null,seq__29237_29259__$1);
var G__29267 = null;
var G__29268 = (0);
var G__29269 = (0);
seq__29237_29249 = G__29266;
chunk__29238_29250 = G__29267;
count__29239_29251 = G__29268;
i__29240_29252 = G__29269;
continue;
}
} else {
}
}
break;
}


var G__29270 = seq__29225;
var G__29271 = chunk__29226;
var G__29272 = count__29227;
var G__29273 = (i__29228 + (1));
seq__29225 = G__29270;
chunk__29226 = G__29271;
count__29227 = G__29272;
i__29228 = G__29273;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__29225);
if(temp__5720__auto__){
var seq__29225__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29225__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__29225__$1);
var G__29274 = cljs.core.chunk_rest.call(null,seq__29225__$1);
var G__29275 = c__4556__auto__;
var G__29276 = cljs.core.count.call(null,c__4556__auto__);
var G__29277 = (0);
seq__29225 = G__29274;
chunk__29226 = G__29275;
count__29227 = G__29276;
i__29228 = G__29277;
continue;
} else {
var prov = cljs.core.first.call(null,seq__29225__$1);
var seq__29241_29278 = cljs.core.seq.call(null,requires);
var chunk__29242_29279 = null;
var count__29243_29280 = (0);
var i__29244_29281 = (0);
while(true){
if((i__29244_29281 < count__29243_29280)){
var req_29282 = cljs.core._nth.call(null,chunk__29242_29279,i__29244_29281);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29282,prov);


var G__29283 = seq__29241_29278;
var G__29284 = chunk__29242_29279;
var G__29285 = count__29243_29280;
var G__29286 = (i__29244_29281 + (1));
seq__29241_29278 = G__29283;
chunk__29242_29279 = G__29284;
count__29243_29280 = G__29285;
i__29244_29281 = G__29286;
continue;
} else {
var temp__5720__auto___29287__$1 = cljs.core.seq.call(null,seq__29241_29278);
if(temp__5720__auto___29287__$1){
var seq__29241_29288__$1 = temp__5720__auto___29287__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29241_29288__$1)){
var c__4556__auto___29289 = cljs.core.chunk_first.call(null,seq__29241_29288__$1);
var G__29290 = cljs.core.chunk_rest.call(null,seq__29241_29288__$1);
var G__29291 = c__4556__auto___29289;
var G__29292 = cljs.core.count.call(null,c__4556__auto___29289);
var G__29293 = (0);
seq__29241_29278 = G__29290;
chunk__29242_29279 = G__29291;
count__29243_29280 = G__29292;
i__29244_29281 = G__29293;
continue;
} else {
var req_29294 = cljs.core.first.call(null,seq__29241_29288__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29294,prov);


var G__29295 = cljs.core.next.call(null,seq__29241_29288__$1);
var G__29296 = null;
var G__29297 = (0);
var G__29298 = (0);
seq__29241_29278 = G__29295;
chunk__29242_29279 = G__29296;
count__29243_29280 = G__29297;
i__29244_29281 = G__29298;
continue;
}
} else {
}
}
break;
}


var G__29299 = cljs.core.next.call(null,seq__29225__$1);
var G__29300 = null;
var G__29301 = (0);
var G__29302 = (0);
seq__29225 = G__29299;
chunk__29226 = G__29300;
count__29227 = G__29301;
i__29228 = G__29302;
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
var seq__29245 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,path));
var chunk__29246 = null;
var count__29247 = (0);
var i__29248 = (0);
while(true){
if((i__29248 < count__29247)){
var prov = cljs.core._nth.call(null,chunk__29246,i__29248);
goog.object.forEach(deps,((function (seq__29245,chunk__29246,count__29247,i__29248,prov,requires){
return (function (___$1,req,___$2){
return figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req,prov);
});})(seq__29245,chunk__29246,count__29247,i__29248,prov,requires))
);


var G__29303 = seq__29245;
var G__29304 = chunk__29246;
var G__29305 = count__29247;
var G__29306 = (i__29248 + (1));
seq__29245 = G__29303;
chunk__29246 = G__29304;
count__29247 = G__29305;
i__29248 = G__29306;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__29245);
if(temp__5720__auto__){
var seq__29245__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29245__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__29245__$1);
var G__29307 = cljs.core.chunk_rest.call(null,seq__29245__$1);
var G__29308 = c__4556__auto__;
var G__29309 = cljs.core.count.call(null,c__4556__auto__);
var G__29310 = (0);
seq__29245 = G__29307;
chunk__29246 = G__29308;
count__29247 = G__29309;
i__29248 = G__29310;
continue;
} else {
var prov = cljs.core.first.call(null,seq__29245__$1);
goog.object.forEach(deps,((function (seq__29245,chunk__29246,count__29247,i__29248,prov,seq__29245__$1,temp__5720__auto__,requires){
return (function (___$1,req,___$2){
return figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req,prov);
});})(seq__29245,chunk__29246,count__29247,i__29248,prov,seq__29245__$1,temp__5720__auto__,requires))
);


var G__29311 = cljs.core.next.call(null,seq__29245__$1);
var G__29312 = null;
var G__29313 = (0);
var G__29314 = (0);
seq__29245 = G__29311;
chunk__29246 = G__29312;
count__29247 = G__29313;
i__29248 = G__29314;
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
return cljs.core.some.call(null,(function (p__29315){
var vec__29316 = p__29315;
var _ = cljs.core.nth.call(null,vec__29316,(0),null);
var v = cljs.core.nth.call(null,vec__29316,(1),null);
var and__4115__auto__ = v;
if(cljs.core.truth_(and__4115__auto__)){
return v.call(null,dep);
} else {
return and__4115__auto__;
}
}),cljs.core.filter.call(null,(function (p__29319){
var vec__29320 = p__29319;
var k = cljs.core.nth.call(null,vec__29320,(0),null);
var v = cljs.core.nth.call(null,vec__29320,(1),null);
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

var seq__29332_29340 = cljs.core.seq.call(null,deps);
var chunk__29333_29341 = null;
var count__29334_29342 = (0);
var i__29335_29343 = (0);
while(true){
if((i__29335_29343 < count__29334_29342)){
var dep_29344 = cljs.core._nth.call(null,chunk__29333_29341,i__29335_29343);
if(cljs.core.truth_((function (){var and__4115__auto__ = dep_29344;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_29344));
} else {
return and__4115__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_29344,(depth + (1)),state);
} else {
}


var G__29345 = seq__29332_29340;
var G__29346 = chunk__29333_29341;
var G__29347 = count__29334_29342;
var G__29348 = (i__29335_29343 + (1));
seq__29332_29340 = G__29345;
chunk__29333_29341 = G__29346;
count__29334_29342 = G__29347;
i__29335_29343 = G__29348;
continue;
} else {
var temp__5720__auto___29349 = cljs.core.seq.call(null,seq__29332_29340);
if(temp__5720__auto___29349){
var seq__29332_29350__$1 = temp__5720__auto___29349;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29332_29350__$1)){
var c__4556__auto___29351 = cljs.core.chunk_first.call(null,seq__29332_29350__$1);
var G__29352 = cljs.core.chunk_rest.call(null,seq__29332_29350__$1);
var G__29353 = c__4556__auto___29351;
var G__29354 = cljs.core.count.call(null,c__4556__auto___29351);
var G__29355 = (0);
seq__29332_29340 = G__29352;
chunk__29333_29341 = G__29353;
count__29334_29342 = G__29354;
i__29335_29343 = G__29355;
continue;
} else {
var dep_29356 = cljs.core.first.call(null,seq__29332_29350__$1);
if(cljs.core.truth_((function (){var and__4115__auto__ = dep_29356;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_29356));
} else {
return and__4115__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_29356,(depth + (1)),state);
} else {
}


var G__29357 = cljs.core.next.call(null,seq__29332_29350__$1);
var G__29358 = null;
var G__29359 = (0);
var G__29360 = (0);
seq__29332_29340 = G__29357;
chunk__29333_29341 = G__29358;
count__29334_29342 = G__29359;
i__29335_29343 = G__29360;
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
var elim_dups_STAR_ = (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__29336){
var vec__29337 = p__29336;
var seq__29338 = cljs.core.seq.call(null,vec__29337);
var first__29339 = cljs.core.first.call(null,seq__29338);
var seq__29338__$1 = cljs.core.next.call(null,seq__29338);
var x = first__29339;
var xs = seq__29338__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,(function (p1__29323_SHARP_){
return clojure.set.difference.call(null,p1__29323_SHARP_,x);
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
figwheel.client.file_reloading.resolve_ns = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?figwheel.client.file_reloading.name__GT_path:(function (p1__29361_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,p1__29361_SHARP_))].join('');
}));
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__29362 = cljs.core.seq.call(null,provides);
var chunk__29363 = null;
var count__29364 = (0);
var i__29365 = (0);
while(true){
if((i__29365 < count__29364)){
var prov = cljs.core._nth.call(null,chunk__29363,i__29365);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__29374_29382 = cljs.core.seq.call(null,requires);
var chunk__29375_29383 = null;
var count__29376_29384 = (0);
var i__29377_29385 = (0);
while(true){
if((i__29377_29385 < count__29376_29384)){
var req_29386 = cljs.core._nth.call(null,chunk__29375_29383,i__29377_29385);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29386,prov);


var G__29387 = seq__29374_29382;
var G__29388 = chunk__29375_29383;
var G__29389 = count__29376_29384;
var G__29390 = (i__29377_29385 + (1));
seq__29374_29382 = G__29387;
chunk__29375_29383 = G__29388;
count__29376_29384 = G__29389;
i__29377_29385 = G__29390;
continue;
} else {
var temp__5720__auto___29391 = cljs.core.seq.call(null,seq__29374_29382);
if(temp__5720__auto___29391){
var seq__29374_29392__$1 = temp__5720__auto___29391;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29374_29392__$1)){
var c__4556__auto___29393 = cljs.core.chunk_first.call(null,seq__29374_29392__$1);
var G__29394 = cljs.core.chunk_rest.call(null,seq__29374_29392__$1);
var G__29395 = c__4556__auto___29393;
var G__29396 = cljs.core.count.call(null,c__4556__auto___29393);
var G__29397 = (0);
seq__29374_29382 = G__29394;
chunk__29375_29383 = G__29395;
count__29376_29384 = G__29396;
i__29377_29385 = G__29397;
continue;
} else {
var req_29398 = cljs.core.first.call(null,seq__29374_29392__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29398,prov);


var G__29399 = cljs.core.next.call(null,seq__29374_29392__$1);
var G__29400 = null;
var G__29401 = (0);
var G__29402 = (0);
seq__29374_29382 = G__29399;
chunk__29375_29383 = G__29400;
count__29376_29384 = G__29401;
i__29377_29385 = G__29402;
continue;
}
} else {
}
}
break;
}


var G__29403 = seq__29362;
var G__29404 = chunk__29363;
var G__29405 = count__29364;
var G__29406 = (i__29365 + (1));
seq__29362 = G__29403;
chunk__29363 = G__29404;
count__29364 = G__29405;
i__29365 = G__29406;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__29362);
if(temp__5720__auto__){
var seq__29362__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29362__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__29362__$1);
var G__29407 = cljs.core.chunk_rest.call(null,seq__29362__$1);
var G__29408 = c__4556__auto__;
var G__29409 = cljs.core.count.call(null,c__4556__auto__);
var G__29410 = (0);
seq__29362 = G__29407;
chunk__29363 = G__29408;
count__29364 = G__29409;
i__29365 = G__29410;
continue;
} else {
var prov = cljs.core.first.call(null,seq__29362__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__29378_29411 = cljs.core.seq.call(null,requires);
var chunk__29379_29412 = null;
var count__29380_29413 = (0);
var i__29381_29414 = (0);
while(true){
if((i__29381_29414 < count__29380_29413)){
var req_29415 = cljs.core._nth.call(null,chunk__29379_29412,i__29381_29414);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29415,prov);


var G__29416 = seq__29378_29411;
var G__29417 = chunk__29379_29412;
var G__29418 = count__29380_29413;
var G__29419 = (i__29381_29414 + (1));
seq__29378_29411 = G__29416;
chunk__29379_29412 = G__29417;
count__29380_29413 = G__29418;
i__29381_29414 = G__29419;
continue;
} else {
var temp__5720__auto___29420__$1 = cljs.core.seq.call(null,seq__29378_29411);
if(temp__5720__auto___29420__$1){
var seq__29378_29421__$1 = temp__5720__auto___29420__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29378_29421__$1)){
var c__4556__auto___29422 = cljs.core.chunk_first.call(null,seq__29378_29421__$1);
var G__29423 = cljs.core.chunk_rest.call(null,seq__29378_29421__$1);
var G__29424 = c__4556__auto___29422;
var G__29425 = cljs.core.count.call(null,c__4556__auto___29422);
var G__29426 = (0);
seq__29378_29411 = G__29423;
chunk__29379_29412 = G__29424;
count__29380_29413 = G__29425;
i__29381_29414 = G__29426;
continue;
} else {
var req_29427 = cljs.core.first.call(null,seq__29378_29421__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29427,prov);


var G__29428 = cljs.core.next.call(null,seq__29378_29421__$1);
var G__29429 = null;
var G__29430 = (0);
var G__29431 = (0);
seq__29378_29411 = G__29428;
chunk__29379_29412 = G__29429;
count__29380_29413 = G__29430;
i__29381_29414 = G__29431;
continue;
}
} else {
}
}
break;
}


var G__29432 = cljs.core.next.call(null,seq__29362__$1);
var G__29433 = null;
var G__29434 = (0);
var G__29435 = (0);
seq__29362 = G__29432;
chunk__29363 = G__29433;
count__29364 = G__29434;
i__29365 = G__29435;
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
var seq__29436_29440 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__29437_29441 = null;
var count__29438_29442 = (0);
var i__29439_29443 = (0);
while(true){
if((i__29439_29443 < count__29438_29442)){
var ns_29444 = cljs.core._nth.call(null,chunk__29437_29441,i__29439_29443);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_29444);


var G__29445 = seq__29436_29440;
var G__29446 = chunk__29437_29441;
var G__29447 = count__29438_29442;
var G__29448 = (i__29439_29443 + (1));
seq__29436_29440 = G__29445;
chunk__29437_29441 = G__29446;
count__29438_29442 = G__29447;
i__29439_29443 = G__29448;
continue;
} else {
var temp__5720__auto___29449 = cljs.core.seq.call(null,seq__29436_29440);
if(temp__5720__auto___29449){
var seq__29436_29450__$1 = temp__5720__auto___29449;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29436_29450__$1)){
var c__4556__auto___29451 = cljs.core.chunk_first.call(null,seq__29436_29450__$1);
var G__29452 = cljs.core.chunk_rest.call(null,seq__29436_29450__$1);
var G__29453 = c__4556__auto___29451;
var G__29454 = cljs.core.count.call(null,c__4556__auto___29451);
var G__29455 = (0);
seq__29436_29440 = G__29452;
chunk__29437_29441 = G__29453;
count__29438_29442 = G__29454;
i__29439_29443 = G__29455;
continue;
} else {
var ns_29456 = cljs.core.first.call(null,seq__29436_29450__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_29456);


var G__29457 = cljs.core.next.call(null,seq__29436_29450__$1);
var G__29458 = null;
var G__29459 = (0);
var G__29460 = (0);
seq__29436_29440 = G__29457;
chunk__29437_29441 = G__29458;
count__29438_29442 = G__29459;
i__29439_29443 = G__29460;
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
var G__29461__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__29461 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29462__i = 0, G__29462__a = new Array(arguments.length -  0);
while (G__29462__i < G__29462__a.length) {G__29462__a[G__29462__i] = arguments[G__29462__i + 0]; ++G__29462__i;}
  args = new cljs.core.IndexedSeq(G__29462__a,0,null);
} 
return G__29461__delegate.call(this,args);};
G__29461.cljs$lang$maxFixedArity = 0;
G__29461.cljs$lang$applyTo = (function (arglist__29463){
var args = cljs.core.seq(arglist__29463);
return G__29461__delegate(args);
});
G__29461.cljs$core$IFn$_invoke$arity$variadic = G__29461__delegate;
return G__29461;
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
figwheel.client.file_reloading.gloader = (((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoad !== 'undefined'))?(function (p1__29464_SHARP_,p2__29465_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__29464_SHARP_)),p2__29465_SHARP_);
}):(((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.load !== 'undefined'))?(function (p1__29466_SHARP_,p2__29467_SHARP_){
return goog.net.jsloader.load(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__29466_SHARP_),p2__29467_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__29468 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__29468.addCallback((function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
}));

G__29468.addErrback((function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
}));

return G__29468;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e29469){if((e29469 instanceof Error)){
var e = e29469;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e29469;

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
}catch (e29470){if((e29470 instanceof Error)){
var e = e29470;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e29470;

}
}})());
});
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__29471 = cljs.core._EQ_;
var expr__29472 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__29471.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__29472))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__29471.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__29472))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__29471.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__29472))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return (function (a,b){
throw "Reload not defined for this platform";
});
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__29474,callback){
var map__29475 = p__29474;
var map__29475__$1 = (((((!((map__29475 == null))))?(((((map__29475.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29475.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29475):map__29475);
var file_msg = map__29475__$1;
var request_url = cljs.core.get.call(null,map__29475__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

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
figwheel.client.file_reloading.reloader_loop = (function (){var c__27267__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27268__auto__ = (function (){var switch__27172__auto__ = (function (state_29513){
var state_val_29514 = (state_29513[(1)]);
if((state_val_29514 === (7))){
var inst_29509 = (state_29513[(2)]);
var state_29513__$1 = state_29513;
var statearr_29515_29541 = state_29513__$1;
(statearr_29515_29541[(2)] = inst_29509);

(statearr_29515_29541[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29514 === (1))){
var state_29513__$1 = state_29513;
var statearr_29516_29542 = state_29513__$1;
(statearr_29516_29542[(2)] = null);

(statearr_29516_29542[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29514 === (4))){
var inst_29479 = (state_29513[(7)]);
var inst_29479__$1 = (state_29513[(2)]);
var state_29513__$1 = (function (){var statearr_29517 = state_29513;
(statearr_29517[(7)] = inst_29479__$1);

return statearr_29517;
})();
if(cljs.core.truth_(inst_29479__$1)){
var statearr_29518_29543 = state_29513__$1;
(statearr_29518_29543[(1)] = (5));

} else {
var statearr_29519_29544 = state_29513__$1;
(statearr_29519_29544[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29514 === (15))){
var inst_29492 = (state_29513[(8)]);
var inst_29494 = (state_29513[(9)]);
var inst_29496 = inst_29494.call(null,inst_29492);
var state_29513__$1 = state_29513;
var statearr_29520_29545 = state_29513__$1;
(statearr_29520_29545[(2)] = inst_29496);

(statearr_29520_29545[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29514 === (13))){
var inst_29503 = (state_29513[(2)]);
var state_29513__$1 = state_29513;
var statearr_29521_29546 = state_29513__$1;
(statearr_29521_29546[(2)] = inst_29503);

(statearr_29521_29546[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29514 === (6))){
var state_29513__$1 = state_29513;
var statearr_29522_29547 = state_29513__$1;
(statearr_29522_29547[(2)] = null);

(statearr_29522_29547[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29514 === (17))){
var inst_29500 = (state_29513[(2)]);
var state_29513__$1 = state_29513;
var statearr_29523_29548 = state_29513__$1;
(statearr_29523_29548[(2)] = inst_29500);

(statearr_29523_29548[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29514 === (3))){
var inst_29511 = (state_29513[(2)]);
var state_29513__$1 = state_29513;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29513__$1,inst_29511);
} else {
if((state_val_29514 === (12))){
var state_29513__$1 = state_29513;
var statearr_29524_29549 = state_29513__$1;
(statearr_29524_29549[(2)] = null);

(statearr_29524_29549[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29514 === (2))){
var state_29513__$1 = state_29513;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29513__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_29514 === (11))){
var inst_29484 = (state_29513[(10)]);
var inst_29490 = figwheel.client.file_reloading.blocking_load.call(null,inst_29484);
var state_29513__$1 = state_29513;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29513__$1,(14),inst_29490);
} else {
if((state_val_29514 === (9))){
var inst_29484 = (state_29513[(10)]);
var state_29513__$1 = state_29513;
if(cljs.core.truth_(inst_29484)){
var statearr_29525_29550 = state_29513__$1;
(statearr_29525_29550[(1)] = (11));

} else {
var statearr_29526_29551 = state_29513__$1;
(statearr_29526_29551[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29514 === (5))){
var inst_29479 = (state_29513[(7)]);
var inst_29485 = (state_29513[(11)]);
var inst_29484 = cljs.core.nth.call(null,inst_29479,(0),null);
var inst_29485__$1 = cljs.core.nth.call(null,inst_29479,(1),null);
var state_29513__$1 = (function (){var statearr_29527 = state_29513;
(statearr_29527[(10)] = inst_29484);

(statearr_29527[(11)] = inst_29485__$1);

return statearr_29527;
})();
if(cljs.core.truth_(inst_29485__$1)){
var statearr_29528_29552 = state_29513__$1;
(statearr_29528_29552[(1)] = (8));

} else {
var statearr_29529_29553 = state_29513__$1;
(statearr_29529_29553[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29514 === (14))){
var inst_29484 = (state_29513[(10)]);
var inst_29494 = (state_29513[(9)]);
var inst_29492 = (state_29513[(2)]);
var inst_29493 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_29494__$1 = cljs.core.get.call(null,inst_29493,inst_29484);
var state_29513__$1 = (function (){var statearr_29530 = state_29513;
(statearr_29530[(8)] = inst_29492);

(statearr_29530[(9)] = inst_29494__$1);

return statearr_29530;
})();
if(cljs.core.truth_(inst_29494__$1)){
var statearr_29531_29554 = state_29513__$1;
(statearr_29531_29554[(1)] = (15));

} else {
var statearr_29532_29555 = state_29513__$1;
(statearr_29532_29555[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29514 === (16))){
var inst_29492 = (state_29513[(8)]);
var inst_29498 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_29492);
var state_29513__$1 = state_29513;
var statearr_29533_29556 = state_29513__$1;
(statearr_29533_29556[(2)] = inst_29498);

(statearr_29533_29556[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29514 === (10))){
var inst_29505 = (state_29513[(2)]);
var state_29513__$1 = (function (){var statearr_29534 = state_29513;
(statearr_29534[(12)] = inst_29505);

return statearr_29534;
})();
var statearr_29535_29557 = state_29513__$1;
(statearr_29535_29557[(2)] = null);

(statearr_29535_29557[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29514 === (8))){
var inst_29485 = (state_29513[(11)]);
var inst_29487 = eval(inst_29485);
var state_29513__$1 = state_29513;
var statearr_29536_29558 = state_29513__$1;
(statearr_29536_29558[(2)] = inst_29487);

(statearr_29536_29558[(1)] = (10));


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
var figwheel$client$file_reloading$state_machine__27173__auto__ = null;
var figwheel$client$file_reloading$state_machine__27173__auto____0 = (function (){
var statearr_29537 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29537[(0)] = figwheel$client$file_reloading$state_machine__27173__auto__);

(statearr_29537[(1)] = (1));

return statearr_29537;
});
var figwheel$client$file_reloading$state_machine__27173__auto____1 = (function (state_29513){
while(true){
var ret_value__27174__auto__ = (function (){try{while(true){
var result__27175__auto__ = switch__27172__auto__.call(null,state_29513);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27175__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27175__auto__;
}
break;
}
}catch (e29538){if((e29538 instanceof Object)){
var ex__27176__auto__ = e29538;
var statearr_29539_29559 = state_29513;
(statearr_29539_29559[(5)] = ex__27176__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29513);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29538;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27174__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29560 = state_29513;
state_29513 = G__29560;
continue;
} else {
return ret_value__27174__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__27173__auto__ = function(state_29513){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__27173__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__27173__auto____1.call(this,state_29513);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__27173__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__27173__auto____0;
figwheel$client$file_reloading$state_machine__27173__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__27173__auto____1;
return figwheel$client$file_reloading$state_machine__27173__auto__;
})()
})();
var state__27269__auto__ = (function (){var statearr_29540 = f__27268__auto__.call(null);
(statearr_29540[(6)] = c__27267__auto__);

return statearr_29540;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27269__auto__);
}));

return c__27267__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__29562 = arguments.length;
switch (G__29562) {
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

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__29564,callback){
var map__29565 = p__29564;
var map__29565__$1 = (((((!((map__29565 == null))))?(((((map__29565.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29565.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29565):map__29565);
var file_msg = map__29565__$1;
var namespace = cljs.core.get.call(null,map__29565__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,(function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
}));

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__29567){
var map__29568 = p__29567;
var map__29568__$1 = (((((!((map__29568 == null))))?(((((map__29568.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29568.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29568):map__29568);
var file_msg = map__29568__$1;
var namespace = cljs.core.get.call(null,map__29568__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return (!((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null)));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__29570){
var map__29571 = p__29570;
var map__29571__$1 = (((((!((map__29571 == null))))?(((((map__29571.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29571.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29571):map__29571);
var file_msg = map__29571__$1;
var namespace = cljs.core.get.call(null,map__29571__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__29573,callback){
var map__29574 = p__29573;
var map__29574__$1 = (((((!((map__29574 == null))))?(((((map__29574.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29574.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29574):map__29574);
var file_msg = map__29574__$1;
var request_url = cljs.core.get.call(null,map__29574__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__29574__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__27267__auto___29624 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27268__auto__ = (function (){var switch__27172__auto__ = (function (state_29609){
var state_val_29610 = (state_29609[(1)]);
if((state_val_29610 === (1))){
var inst_29583 = cljs.core.seq.call(null,files);
var inst_29584 = cljs.core.first.call(null,inst_29583);
var inst_29585 = cljs.core.next.call(null,inst_29583);
var inst_29586 = files;
var state_29609__$1 = (function (){var statearr_29611 = state_29609;
(statearr_29611[(7)] = inst_29585);

(statearr_29611[(8)] = inst_29586);

(statearr_29611[(9)] = inst_29584);

return statearr_29611;
})();
var statearr_29612_29625 = state_29609__$1;
(statearr_29612_29625[(2)] = null);

(statearr_29612_29625[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29610 === (2))){
var inst_29592 = (state_29609[(10)]);
var inst_29586 = (state_29609[(8)]);
var inst_29591 = cljs.core.seq.call(null,inst_29586);
var inst_29592__$1 = cljs.core.first.call(null,inst_29591);
var inst_29593 = cljs.core.next.call(null,inst_29591);
var inst_29594 = (inst_29592__$1 == null);
var inst_29595 = cljs.core.not.call(null,inst_29594);
var state_29609__$1 = (function (){var statearr_29613 = state_29609;
(statearr_29613[(10)] = inst_29592__$1);

(statearr_29613[(11)] = inst_29593);

return statearr_29613;
})();
if(inst_29595){
var statearr_29614_29626 = state_29609__$1;
(statearr_29614_29626[(1)] = (4));

} else {
var statearr_29615_29627 = state_29609__$1;
(statearr_29615_29627[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29610 === (3))){
var inst_29607 = (state_29609[(2)]);
var state_29609__$1 = state_29609;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29609__$1,inst_29607);
} else {
if((state_val_29610 === (4))){
var inst_29592 = (state_29609[(10)]);
var inst_29597 = figwheel.client.file_reloading.reload_js_file.call(null,inst_29592);
var state_29609__$1 = state_29609;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29609__$1,(7),inst_29597);
} else {
if((state_val_29610 === (5))){
var inst_29603 = cljs.core.async.close_BANG_.call(null,out);
var state_29609__$1 = state_29609;
var statearr_29616_29628 = state_29609__$1;
(statearr_29616_29628[(2)] = inst_29603);

(statearr_29616_29628[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29610 === (6))){
var inst_29605 = (state_29609[(2)]);
var state_29609__$1 = state_29609;
var statearr_29617_29629 = state_29609__$1;
(statearr_29617_29629[(2)] = inst_29605);

(statearr_29617_29629[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29610 === (7))){
var inst_29593 = (state_29609[(11)]);
var inst_29599 = (state_29609[(2)]);
var inst_29600 = cljs.core.async.put_BANG_.call(null,out,inst_29599);
var inst_29586 = inst_29593;
var state_29609__$1 = (function (){var statearr_29618 = state_29609;
(statearr_29618[(8)] = inst_29586);

(statearr_29618[(12)] = inst_29600);

return statearr_29618;
})();
var statearr_29619_29630 = state_29609__$1;
(statearr_29619_29630[(2)] = null);

(statearr_29619_29630[(1)] = (2));


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
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__27173__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__27173__auto____0 = (function (){
var statearr_29620 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29620[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__27173__auto__);

(statearr_29620[(1)] = (1));

return statearr_29620;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__27173__auto____1 = (function (state_29609){
while(true){
var ret_value__27174__auto__ = (function (){try{while(true){
var result__27175__auto__ = switch__27172__auto__.call(null,state_29609);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27175__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27175__auto__;
}
break;
}
}catch (e29621){if((e29621 instanceof Object)){
var ex__27176__auto__ = e29621;
var statearr_29622_29631 = state_29609;
(statearr_29622_29631[(5)] = ex__27176__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29609);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29621;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27174__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29632 = state_29609;
state_29609 = G__29632;
continue;
} else {
return ret_value__27174__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__27173__auto__ = function(state_29609){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__27173__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__27173__auto____1.call(this,state_29609);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__27173__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__27173__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__27173__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__27173__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__27173__auto__;
})()
})();
var state__27269__auto__ = (function (){var statearr_29623 = f__27268__auto__.call(null);
(statearr_29623[(6)] = c__27267__auto___29624);

return statearr_29623;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27269__auto__);
}));


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__29633,opts){
var map__29634 = p__29633;
var map__29634__$1 = (((((!((map__29634 == null))))?(((((map__29634.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29634.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29634):map__29634);
var eval_body = cljs.core.get.call(null,map__29634__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__29634__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e29636){var e = e29636;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,(function (n){
var temp__5718__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__29637_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__29637_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__29638){
var vec__29639 = p__29638;
var k = cljs.core.nth.call(null,vec__29639,(0),null);
var v = cljs.core.nth.call(null,vec__29639,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__29642){
var vec__29643 = p__29642;
var k = cljs.core.nth.call(null,vec__29643,(0),null);
var v = cljs.core.nth.call(null,vec__29643,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__29649,p__29650){
var map__29651 = p__29649;
var map__29651__$1 = (((((!((map__29651 == null))))?(((((map__29651.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29651.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29651):map__29651);
var opts = map__29651__$1;
var before_jsload = cljs.core.get.call(null,map__29651__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__29651__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__29651__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__29652 = p__29650;
var map__29652__$1 = (((((!((map__29652 == null))))?(((((map__29652.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29652.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29652):map__29652);
var msg = map__29652__$1;
var files = cljs.core.get.call(null,map__29652__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__29652__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__29652__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__27267__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27268__auto__ = (function (){var switch__27172__auto__ = (function (state_29806){
var state_val_29807 = (state_29806[(1)]);
if((state_val_29807 === (7))){
var inst_29669 = (state_29806[(7)]);
var inst_29666 = (state_29806[(8)]);
var inst_29667 = (state_29806[(9)]);
var inst_29668 = (state_29806[(10)]);
var inst_29674 = cljs.core._nth.call(null,inst_29667,inst_29669);
var inst_29675 = figwheel.client.file_reloading.eval_body.call(null,inst_29674,opts);
var inst_29676 = (inst_29669 + (1));
var tmp29808 = inst_29666;
var tmp29809 = inst_29667;
var tmp29810 = inst_29668;
var inst_29666__$1 = tmp29808;
var inst_29667__$1 = tmp29809;
var inst_29668__$1 = tmp29810;
var inst_29669__$1 = inst_29676;
var state_29806__$1 = (function (){var statearr_29811 = state_29806;
(statearr_29811[(7)] = inst_29669__$1);

(statearr_29811[(11)] = inst_29675);

(statearr_29811[(8)] = inst_29666__$1);

(statearr_29811[(9)] = inst_29667__$1);

(statearr_29811[(10)] = inst_29668__$1);

return statearr_29811;
})();
var statearr_29812_29895 = state_29806__$1;
(statearr_29812_29895[(2)] = null);

(statearr_29812_29895[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29807 === (20))){
var inst_29709 = (state_29806[(12)]);
var inst_29717 = figwheel.client.file_reloading.sort_files.call(null,inst_29709);
var state_29806__$1 = state_29806;
var statearr_29813_29896 = state_29806__$1;
(statearr_29813_29896[(2)] = inst_29717);

(statearr_29813_29896[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29807 === (27))){
var state_29806__$1 = state_29806;
var statearr_29814_29897 = state_29806__$1;
(statearr_29814_29897[(2)] = null);

(statearr_29814_29897[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29807 === (1))){
var inst_29658 = (state_29806[(13)]);
var inst_29655 = before_jsload.call(null,files);
var inst_29656 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_29657 = (function (){return (function (p1__29646_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__29646_SHARP_);
});
})();
var inst_29658__$1 = cljs.core.filter.call(null,inst_29657,files);
var inst_29659 = cljs.core.not_empty.call(null,inst_29658__$1);
var state_29806__$1 = (function (){var statearr_29815 = state_29806;
(statearr_29815[(14)] = inst_29656);

(statearr_29815[(13)] = inst_29658__$1);

(statearr_29815[(15)] = inst_29655);

return statearr_29815;
})();
if(cljs.core.truth_(inst_29659)){
var statearr_29816_29898 = state_29806__$1;
(statearr_29816_29898[(1)] = (2));

} else {
var statearr_29817_29899 = state_29806__$1;
(statearr_29817_29899[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29807 === (24))){
var state_29806__$1 = state_29806;
var statearr_29818_29900 = state_29806__$1;
(statearr_29818_29900[(2)] = null);

(statearr_29818_29900[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29807 === (39))){
var inst_29759 = (state_29806[(16)]);
var state_29806__$1 = state_29806;
var statearr_29819_29901 = state_29806__$1;
(statearr_29819_29901[(2)] = inst_29759);

(statearr_29819_29901[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29807 === (46))){
var inst_29801 = (state_29806[(2)]);
var state_29806__$1 = state_29806;
var statearr_29820_29902 = state_29806__$1;
(statearr_29820_29902[(2)] = inst_29801);

(statearr_29820_29902[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29807 === (4))){
var inst_29703 = (state_29806[(2)]);
var inst_29704 = cljs.core.List.EMPTY;
var inst_29705 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_29704);
var inst_29706 = (function (){return (function (p1__29647_SHARP_){
var and__4115__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__29647_SHARP_);
if(cljs.core.truth_(and__4115__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__29647_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__29647_SHARP_))));
} else {
return and__4115__auto__;
}
});
})();
var inst_29707 = cljs.core.filter.call(null,inst_29706,files);
var inst_29708 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_29709 = cljs.core.concat.call(null,inst_29707,inst_29708);
var state_29806__$1 = (function (){var statearr_29821 = state_29806;
(statearr_29821[(17)] = inst_29703);

(statearr_29821[(12)] = inst_29709);

(statearr_29821[(18)] = inst_29705);

return statearr_29821;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_29822_29903 = state_29806__$1;
(statearr_29822_29903[(1)] = (16));

} else {
var statearr_29823_29904 = state_29806__$1;
(statearr_29823_29904[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29807 === (15))){
var inst_29693 = (state_29806[(2)]);
var state_29806__$1 = state_29806;
var statearr_29824_29905 = state_29806__$1;
(statearr_29824_29905[(2)] = inst_29693);

(statearr_29824_29905[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29807 === (21))){
var inst_29719 = (state_29806[(19)]);
var inst_29719__$1 = (state_29806[(2)]);
var inst_29720 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_29719__$1);
var state_29806__$1 = (function (){var statearr_29825 = state_29806;
(statearr_29825[(19)] = inst_29719__$1);

return statearr_29825;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29806__$1,(22),inst_29720);
} else {
if((state_val_29807 === (31))){
var inst_29804 = (state_29806[(2)]);
var state_29806__$1 = state_29806;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29806__$1,inst_29804);
} else {
if((state_val_29807 === (32))){
var inst_29759 = (state_29806[(16)]);
var inst_29764 = inst_29759.cljs$lang$protocol_mask$partition0$;
var inst_29765 = (inst_29764 & (64));
var inst_29766 = inst_29759.cljs$core$ISeq$;
var inst_29767 = (cljs.core.PROTOCOL_SENTINEL === inst_29766);
var inst_29768 = ((inst_29765) || (inst_29767));
var state_29806__$1 = state_29806;
if(cljs.core.truth_(inst_29768)){
var statearr_29826_29906 = state_29806__$1;
(statearr_29826_29906[(1)] = (35));

} else {
var statearr_29827_29907 = state_29806__$1;
(statearr_29827_29907[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29807 === (40))){
var inst_29781 = (state_29806[(20)]);
var inst_29780 = (state_29806[(2)]);
var inst_29781__$1 = cljs.core.get.call(null,inst_29780,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_29782 = cljs.core.get.call(null,inst_29780,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_29783 = cljs.core.not_empty.call(null,inst_29781__$1);
var state_29806__$1 = (function (){var statearr_29828 = state_29806;
(statearr_29828[(21)] = inst_29782);

(statearr_29828[(20)] = inst_29781__$1);

return statearr_29828;
})();
if(cljs.core.truth_(inst_29783)){
var statearr_29829_29908 = state_29806__$1;
(statearr_29829_29908[(1)] = (41));

} else {
var statearr_29830_29909 = state_29806__$1;
(statearr_29830_29909[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29807 === (33))){
var state_29806__$1 = state_29806;
var statearr_29831_29910 = state_29806__$1;
(statearr_29831_29910[(2)] = false);

(statearr_29831_29910[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29807 === (13))){
var inst_29679 = (state_29806[(22)]);
var inst_29683 = cljs.core.chunk_first.call(null,inst_29679);
var inst_29684 = cljs.core.chunk_rest.call(null,inst_29679);
var inst_29685 = cljs.core.count.call(null,inst_29683);
var inst_29666 = inst_29684;
var inst_29667 = inst_29683;
var inst_29668 = inst_29685;
var inst_29669 = (0);
var state_29806__$1 = (function (){var statearr_29832 = state_29806;
(statearr_29832[(7)] = inst_29669);

(statearr_29832[(8)] = inst_29666);

(statearr_29832[(9)] = inst_29667);

(statearr_29832[(10)] = inst_29668);

return statearr_29832;
})();
var statearr_29833_29911 = state_29806__$1;
(statearr_29833_29911[(2)] = null);

(statearr_29833_29911[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29807 === (22))){
var inst_29723 = (state_29806[(23)]);
var inst_29722 = (state_29806[(24)]);
var inst_29719 = (state_29806[(19)]);
var inst_29727 = (state_29806[(25)]);
var inst_29722__$1 = (state_29806[(2)]);
var inst_29723__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_29722__$1);
var inst_29724 = (function (){var all_files = inst_29719;
var res_SINGLEQUOTE_ = inst_29722__$1;
var res = inst_29723__$1;
return (function (p1__29648_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__29648_SHARP_));
});
})();
var inst_29725 = cljs.core.filter.call(null,inst_29724,inst_29722__$1);
var inst_29726 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_29727__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_29726);
var inst_29728 = cljs.core.not_empty.call(null,inst_29727__$1);
var state_29806__$1 = (function (){var statearr_29834 = state_29806;
(statearr_29834[(26)] = inst_29725);

(statearr_29834[(23)] = inst_29723__$1);

(statearr_29834[(24)] = inst_29722__$1);

(statearr_29834[(25)] = inst_29727__$1);

return statearr_29834;
})();
if(cljs.core.truth_(inst_29728)){
var statearr_29835_29912 = state_29806__$1;
(statearr_29835_29912[(1)] = (23));

} else {
var statearr_29836_29913 = state_29806__$1;
(statearr_29836_29913[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29807 === (36))){
var state_29806__$1 = state_29806;
var statearr_29837_29914 = state_29806__$1;
(statearr_29837_29914[(2)] = false);

(statearr_29837_29914[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29807 === (41))){
var inst_29781 = (state_29806[(20)]);
var inst_29785 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_29786 = cljs.core.map.call(null,inst_29785,inst_29781);
var inst_29787 = cljs.core.pr_str.call(null,inst_29786);
var inst_29788 = ["figwheel-no-load meta-data: ",inst_29787].join('');
var inst_29789 = figwheel.client.utils.log.call(null,inst_29788);
var state_29806__$1 = state_29806;
var statearr_29838_29915 = state_29806__$1;
(statearr_29838_29915[(2)] = inst_29789);

(statearr_29838_29915[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29807 === (43))){
var inst_29782 = (state_29806[(21)]);
var inst_29792 = (state_29806[(2)]);
var inst_29793 = cljs.core.not_empty.call(null,inst_29782);
var state_29806__$1 = (function (){var statearr_29839 = state_29806;
(statearr_29839[(27)] = inst_29792);

return statearr_29839;
})();
if(cljs.core.truth_(inst_29793)){
var statearr_29840_29916 = state_29806__$1;
(statearr_29840_29916[(1)] = (44));

} else {
var statearr_29841_29917 = state_29806__$1;
(statearr_29841_29917[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29807 === (29))){
var inst_29725 = (state_29806[(26)]);
var inst_29723 = (state_29806[(23)]);
var inst_29722 = (state_29806[(24)]);
var inst_29719 = (state_29806[(19)]);
var inst_29759 = (state_29806[(16)]);
var inst_29727 = (state_29806[(25)]);
var inst_29755 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_29758 = (function (){var all_files = inst_29719;
var res_SINGLEQUOTE_ = inst_29722;
var res = inst_29723;
var files_not_loaded = inst_29725;
var dependencies_that_loaded = inst_29727;
return (function (p__29757){
var map__29842 = p__29757;
var map__29842__$1 = (((((!((map__29842 == null))))?(((((map__29842.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29842.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29842):map__29842);
var namespace = cljs.core.get.call(null,map__29842__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
var inst_29759__$1 = cljs.core.group_by.call(null,inst_29758,inst_29725);
var inst_29761 = (inst_29759__$1 == null);
var inst_29762 = cljs.core.not.call(null,inst_29761);
var state_29806__$1 = (function (){var statearr_29844 = state_29806;
(statearr_29844[(28)] = inst_29755);

(statearr_29844[(16)] = inst_29759__$1);

return statearr_29844;
})();
if(inst_29762){
var statearr_29845_29918 = state_29806__$1;
(statearr_29845_29918[(1)] = (32));

} else {
var statearr_29846_29919 = state_29806__$1;
(statearr_29846_29919[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29807 === (44))){
var inst_29782 = (state_29806[(21)]);
var inst_29795 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_29782);
var inst_29796 = cljs.core.pr_str.call(null,inst_29795);
var inst_29797 = ["not required: ",inst_29796].join('');
var inst_29798 = figwheel.client.utils.log.call(null,inst_29797);
var state_29806__$1 = state_29806;
var statearr_29847_29920 = state_29806__$1;
(statearr_29847_29920[(2)] = inst_29798);

(statearr_29847_29920[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29807 === (6))){
var inst_29700 = (state_29806[(2)]);
var state_29806__$1 = state_29806;
var statearr_29848_29921 = state_29806__$1;
(statearr_29848_29921[(2)] = inst_29700);

(statearr_29848_29921[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29807 === (28))){
var inst_29725 = (state_29806[(26)]);
var inst_29752 = (state_29806[(2)]);
var inst_29753 = cljs.core.not_empty.call(null,inst_29725);
var state_29806__$1 = (function (){var statearr_29849 = state_29806;
(statearr_29849[(29)] = inst_29752);

return statearr_29849;
})();
if(cljs.core.truth_(inst_29753)){
var statearr_29850_29922 = state_29806__$1;
(statearr_29850_29922[(1)] = (29));

} else {
var statearr_29851_29923 = state_29806__$1;
(statearr_29851_29923[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29807 === (25))){
var inst_29723 = (state_29806[(23)]);
var inst_29739 = (state_29806[(2)]);
var inst_29740 = cljs.core.not_empty.call(null,inst_29723);
var state_29806__$1 = (function (){var statearr_29852 = state_29806;
(statearr_29852[(30)] = inst_29739);

return statearr_29852;
})();
if(cljs.core.truth_(inst_29740)){
var statearr_29853_29924 = state_29806__$1;
(statearr_29853_29924[(1)] = (26));

} else {
var statearr_29854_29925 = state_29806__$1;
(statearr_29854_29925[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29807 === (34))){
var inst_29775 = (state_29806[(2)]);
var state_29806__$1 = state_29806;
if(cljs.core.truth_(inst_29775)){
var statearr_29855_29926 = state_29806__$1;
(statearr_29855_29926[(1)] = (38));

} else {
var statearr_29856_29927 = state_29806__$1;
(statearr_29856_29927[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29807 === (17))){
var state_29806__$1 = state_29806;
var statearr_29857_29928 = state_29806__$1;
(statearr_29857_29928[(2)] = recompile_dependents);

(statearr_29857_29928[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29807 === (3))){
var state_29806__$1 = state_29806;
var statearr_29858_29929 = state_29806__$1;
(statearr_29858_29929[(2)] = null);

(statearr_29858_29929[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29807 === (12))){
var inst_29696 = (state_29806[(2)]);
var state_29806__$1 = state_29806;
var statearr_29859_29930 = state_29806__$1;
(statearr_29859_29930[(2)] = inst_29696);

(statearr_29859_29930[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29807 === (2))){
var inst_29658 = (state_29806[(13)]);
var inst_29665 = cljs.core.seq.call(null,inst_29658);
var inst_29666 = inst_29665;
var inst_29667 = null;
var inst_29668 = (0);
var inst_29669 = (0);
var state_29806__$1 = (function (){var statearr_29860 = state_29806;
(statearr_29860[(7)] = inst_29669);

(statearr_29860[(8)] = inst_29666);

(statearr_29860[(9)] = inst_29667);

(statearr_29860[(10)] = inst_29668);

return statearr_29860;
})();
var statearr_29861_29931 = state_29806__$1;
(statearr_29861_29931[(2)] = null);

(statearr_29861_29931[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29807 === (23))){
var inst_29725 = (state_29806[(26)]);
var inst_29723 = (state_29806[(23)]);
var inst_29722 = (state_29806[(24)]);
var inst_29719 = (state_29806[(19)]);
var inst_29727 = (state_29806[(25)]);
var inst_29730 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_29732 = (function (){var all_files = inst_29719;
var res_SINGLEQUOTE_ = inst_29722;
var res = inst_29723;
var files_not_loaded = inst_29725;
var dependencies_that_loaded = inst_29727;
return (function (p__29731){
var map__29862 = p__29731;
var map__29862__$1 = (((((!((map__29862 == null))))?(((((map__29862.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29862.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29862):map__29862);
var request_url = cljs.core.get.call(null,map__29862__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
})();
var inst_29733 = cljs.core.reverse.call(null,inst_29727);
var inst_29734 = cljs.core.map.call(null,inst_29732,inst_29733);
var inst_29735 = cljs.core.pr_str.call(null,inst_29734);
var inst_29736 = figwheel.client.utils.log.call(null,inst_29735);
var state_29806__$1 = (function (){var statearr_29864 = state_29806;
(statearr_29864[(31)] = inst_29730);

return statearr_29864;
})();
var statearr_29865_29932 = state_29806__$1;
(statearr_29865_29932[(2)] = inst_29736);

(statearr_29865_29932[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29807 === (35))){
var state_29806__$1 = state_29806;
var statearr_29866_29933 = state_29806__$1;
(statearr_29866_29933[(2)] = true);

(statearr_29866_29933[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29807 === (19))){
var inst_29709 = (state_29806[(12)]);
var inst_29715 = figwheel.client.file_reloading.expand_files.call(null,inst_29709);
var state_29806__$1 = state_29806;
var statearr_29867_29934 = state_29806__$1;
(statearr_29867_29934[(2)] = inst_29715);

(statearr_29867_29934[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29807 === (11))){
var state_29806__$1 = state_29806;
var statearr_29868_29935 = state_29806__$1;
(statearr_29868_29935[(2)] = null);

(statearr_29868_29935[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29807 === (9))){
var inst_29698 = (state_29806[(2)]);
var state_29806__$1 = state_29806;
var statearr_29869_29936 = state_29806__$1;
(statearr_29869_29936[(2)] = inst_29698);

(statearr_29869_29936[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29807 === (5))){
var inst_29669 = (state_29806[(7)]);
var inst_29668 = (state_29806[(10)]);
var inst_29671 = (inst_29669 < inst_29668);
var inst_29672 = inst_29671;
var state_29806__$1 = state_29806;
if(cljs.core.truth_(inst_29672)){
var statearr_29870_29937 = state_29806__$1;
(statearr_29870_29937[(1)] = (7));

} else {
var statearr_29871_29938 = state_29806__$1;
(statearr_29871_29938[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29807 === (14))){
var inst_29679 = (state_29806[(22)]);
var inst_29688 = cljs.core.first.call(null,inst_29679);
var inst_29689 = figwheel.client.file_reloading.eval_body.call(null,inst_29688,opts);
var inst_29690 = cljs.core.next.call(null,inst_29679);
var inst_29666 = inst_29690;
var inst_29667 = null;
var inst_29668 = (0);
var inst_29669 = (0);
var state_29806__$1 = (function (){var statearr_29872 = state_29806;
(statearr_29872[(7)] = inst_29669);

(statearr_29872[(8)] = inst_29666);

(statearr_29872[(9)] = inst_29667);

(statearr_29872[(10)] = inst_29668);

(statearr_29872[(32)] = inst_29689);

return statearr_29872;
})();
var statearr_29873_29939 = state_29806__$1;
(statearr_29873_29939[(2)] = null);

(statearr_29873_29939[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29807 === (45))){
var state_29806__$1 = state_29806;
var statearr_29874_29940 = state_29806__$1;
(statearr_29874_29940[(2)] = null);

(statearr_29874_29940[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29807 === (26))){
var inst_29725 = (state_29806[(26)]);
var inst_29723 = (state_29806[(23)]);
var inst_29722 = (state_29806[(24)]);
var inst_29719 = (state_29806[(19)]);
var inst_29727 = (state_29806[(25)]);
var inst_29742 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_29744 = (function (){var all_files = inst_29719;
var res_SINGLEQUOTE_ = inst_29722;
var res = inst_29723;
var files_not_loaded = inst_29725;
var dependencies_that_loaded = inst_29727;
return (function (p__29743){
var map__29875 = p__29743;
var map__29875__$1 = (((((!((map__29875 == null))))?(((((map__29875.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29875.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29875):map__29875);
var namespace = cljs.core.get.call(null,map__29875__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__29875__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
})();
var inst_29745 = cljs.core.map.call(null,inst_29744,inst_29723);
var inst_29746 = cljs.core.pr_str.call(null,inst_29745);
var inst_29747 = figwheel.client.utils.log.call(null,inst_29746);
var inst_29748 = (function (){var all_files = inst_29719;
var res_SINGLEQUOTE_ = inst_29722;
var res = inst_29723;
var files_not_loaded = inst_29725;
var dependencies_that_loaded = inst_29727;
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
})();
var inst_29749 = setTimeout(inst_29748,(10));
var state_29806__$1 = (function (){var statearr_29877 = state_29806;
(statearr_29877[(33)] = inst_29742);

(statearr_29877[(34)] = inst_29747);

return statearr_29877;
})();
var statearr_29878_29941 = state_29806__$1;
(statearr_29878_29941[(2)] = inst_29749);

(statearr_29878_29941[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29807 === (16))){
var state_29806__$1 = state_29806;
var statearr_29879_29942 = state_29806__$1;
(statearr_29879_29942[(2)] = reload_dependents);

(statearr_29879_29942[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29807 === (38))){
var inst_29759 = (state_29806[(16)]);
var inst_29777 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29759);
var state_29806__$1 = state_29806;
var statearr_29880_29943 = state_29806__$1;
(statearr_29880_29943[(2)] = inst_29777);

(statearr_29880_29943[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29807 === (30))){
var state_29806__$1 = state_29806;
var statearr_29881_29944 = state_29806__$1;
(statearr_29881_29944[(2)] = null);

(statearr_29881_29944[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29807 === (10))){
var inst_29679 = (state_29806[(22)]);
var inst_29681 = cljs.core.chunked_seq_QMARK_.call(null,inst_29679);
var state_29806__$1 = state_29806;
if(inst_29681){
var statearr_29882_29945 = state_29806__$1;
(statearr_29882_29945[(1)] = (13));

} else {
var statearr_29883_29946 = state_29806__$1;
(statearr_29883_29946[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29807 === (18))){
var inst_29713 = (state_29806[(2)]);
var state_29806__$1 = state_29806;
if(cljs.core.truth_(inst_29713)){
var statearr_29884_29947 = state_29806__$1;
(statearr_29884_29947[(1)] = (19));

} else {
var statearr_29885_29948 = state_29806__$1;
(statearr_29885_29948[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29807 === (42))){
var state_29806__$1 = state_29806;
var statearr_29886_29949 = state_29806__$1;
(statearr_29886_29949[(2)] = null);

(statearr_29886_29949[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29807 === (37))){
var inst_29772 = (state_29806[(2)]);
var state_29806__$1 = state_29806;
var statearr_29887_29950 = state_29806__$1;
(statearr_29887_29950[(2)] = inst_29772);

(statearr_29887_29950[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29807 === (8))){
var inst_29679 = (state_29806[(22)]);
var inst_29666 = (state_29806[(8)]);
var inst_29679__$1 = cljs.core.seq.call(null,inst_29666);
var state_29806__$1 = (function (){var statearr_29888 = state_29806;
(statearr_29888[(22)] = inst_29679__$1);

return statearr_29888;
})();
if(inst_29679__$1){
var statearr_29889_29951 = state_29806__$1;
(statearr_29889_29951[(1)] = (10));

} else {
var statearr_29890_29952 = state_29806__$1;
(statearr_29890_29952[(1)] = (11));

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
var figwheel$client$file_reloading$reload_js_files_$_state_machine__27173__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__27173__auto____0 = (function (){
var statearr_29891 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29891[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__27173__auto__);

(statearr_29891[(1)] = (1));

return statearr_29891;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__27173__auto____1 = (function (state_29806){
while(true){
var ret_value__27174__auto__ = (function (){try{while(true){
var result__27175__auto__ = switch__27172__auto__.call(null,state_29806);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27175__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27175__auto__;
}
break;
}
}catch (e29892){if((e29892 instanceof Object)){
var ex__27176__auto__ = e29892;
var statearr_29893_29953 = state_29806;
(statearr_29893_29953[(5)] = ex__27176__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29806);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29892;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27174__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29954 = state_29806;
state_29806 = G__29954;
continue;
} else {
return ret_value__27174__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__27173__auto__ = function(state_29806){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__27173__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__27173__auto____1.call(this,state_29806);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__27173__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__27173__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__27173__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__27173__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__27173__auto__;
})()
})();
var state__27269__auto__ = (function (){var statearr_29894 = f__27268__auto__.call(null);
(statearr_29894[(6)] = c__27267__auto__);

return statearr_29894;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27269__auto__);
}));

return c__27267__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__29957,link){
var map__29958 = p__29957;
var map__29958__$1 = (((((!((map__29958 == null))))?(((((map__29958.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29958.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29958):map__29958);
var file = cljs.core.get.call(null,map__29958__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5720__auto__ = link.href;
if(cljs.core.truth_(temp__5720__auto__)){
var link_href = temp__5720__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,(function (p1__29955_SHARP_,p2__29956_SHARP_){
if(cljs.core._EQ_.call(null,p1__29955_SHARP_,p2__29956_SHARP_)){
return p1__29955_SHARP_;
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
var temp__5720__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__29961){
var map__29962 = p__29961;
var map__29962__$1 = (((((!((map__29962 == null))))?(((((map__29962.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29962.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29962):map__29962);
var match_length = cljs.core.get.call(null,map__29962__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__29962__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__29960_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__29960_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__29964_SHARP_,p2__29965_SHARP_){
return cljs.core.assoc.call(null,p1__29964_SHARP_,cljs.core.get.call(null,p2__29965_SHARP_,key),p2__29965_SHARP_);
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
var loaded_f_datas_29966 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_29966);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_29966);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__29967,p__29968){
var map__29969 = p__29967;
var map__29969__$1 = (((((!((map__29969 == null))))?(((((map__29969.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29969.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29969):map__29969);
var on_cssload = cljs.core.get.call(null,map__29969__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__29970 = p__29968;
var map__29970__$1 = (((((!((map__29970 == null))))?(((((map__29970.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29970.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29970):map__29970);
var files_msg = map__29970__$1;
var files = cljs.core.get.call(null,map__29970__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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

//# sourceMappingURL=file_reloading.js.map?rel=1607231749417
