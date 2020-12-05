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
var G__29185 = goog.object.get(goog.debugLoader_.dependencies_,path);
if((G__29185 == null)){
return null;
} else {
return goog.object.get(G__29185,"requires");
}
}):(function (path){
var G__29186 = goog.object.get(goog.dependencies_.requires,path);
if((G__29186 == null)){
return null;
} else {
return goog.object.getKeys(G__29186);
}
}));
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__29187_SHARP_){
return (!(figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__29187_SHARP_)));
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
var G__29188 = goog.object.get(goog.debugLoader_.dependencies_,path);
var G__29188__$1 = (((G__29188 == null))?null:goog.object.get(G__29188,"provides"));
if((G__29188__$1 == null)){
return null;
} else {
return cljs.core.set.call(null,G__29188__$1);
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
var seq__29189 = cljs.core.seq.call(null,provides);
var chunk__29190 = null;
var count__29191 = (0);
var i__29192 = (0);
while(true){
if((i__29192 < count__29191)){
var prov = cljs.core._nth.call(null,chunk__29190,i__29192);
var seq__29201_29213 = cljs.core.seq.call(null,requires);
var chunk__29202_29214 = null;
var count__29203_29215 = (0);
var i__29204_29216 = (0);
while(true){
if((i__29204_29216 < count__29203_29215)){
var req_29217 = cljs.core._nth.call(null,chunk__29202_29214,i__29204_29216);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29217,prov);


var G__29218 = seq__29201_29213;
var G__29219 = chunk__29202_29214;
var G__29220 = count__29203_29215;
var G__29221 = (i__29204_29216 + (1));
seq__29201_29213 = G__29218;
chunk__29202_29214 = G__29219;
count__29203_29215 = G__29220;
i__29204_29216 = G__29221;
continue;
} else {
var temp__5720__auto___29222 = cljs.core.seq.call(null,seq__29201_29213);
if(temp__5720__auto___29222){
var seq__29201_29223__$1 = temp__5720__auto___29222;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29201_29223__$1)){
var c__4556__auto___29224 = cljs.core.chunk_first.call(null,seq__29201_29223__$1);
var G__29225 = cljs.core.chunk_rest.call(null,seq__29201_29223__$1);
var G__29226 = c__4556__auto___29224;
var G__29227 = cljs.core.count.call(null,c__4556__auto___29224);
var G__29228 = (0);
seq__29201_29213 = G__29225;
chunk__29202_29214 = G__29226;
count__29203_29215 = G__29227;
i__29204_29216 = G__29228;
continue;
} else {
var req_29229 = cljs.core.first.call(null,seq__29201_29223__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29229,prov);


var G__29230 = cljs.core.next.call(null,seq__29201_29223__$1);
var G__29231 = null;
var G__29232 = (0);
var G__29233 = (0);
seq__29201_29213 = G__29230;
chunk__29202_29214 = G__29231;
count__29203_29215 = G__29232;
i__29204_29216 = G__29233;
continue;
}
} else {
}
}
break;
}


var G__29234 = seq__29189;
var G__29235 = chunk__29190;
var G__29236 = count__29191;
var G__29237 = (i__29192 + (1));
seq__29189 = G__29234;
chunk__29190 = G__29235;
count__29191 = G__29236;
i__29192 = G__29237;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__29189);
if(temp__5720__auto__){
var seq__29189__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29189__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__29189__$1);
var G__29238 = cljs.core.chunk_rest.call(null,seq__29189__$1);
var G__29239 = c__4556__auto__;
var G__29240 = cljs.core.count.call(null,c__4556__auto__);
var G__29241 = (0);
seq__29189 = G__29238;
chunk__29190 = G__29239;
count__29191 = G__29240;
i__29192 = G__29241;
continue;
} else {
var prov = cljs.core.first.call(null,seq__29189__$1);
var seq__29205_29242 = cljs.core.seq.call(null,requires);
var chunk__29206_29243 = null;
var count__29207_29244 = (0);
var i__29208_29245 = (0);
while(true){
if((i__29208_29245 < count__29207_29244)){
var req_29246 = cljs.core._nth.call(null,chunk__29206_29243,i__29208_29245);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29246,prov);


var G__29247 = seq__29205_29242;
var G__29248 = chunk__29206_29243;
var G__29249 = count__29207_29244;
var G__29250 = (i__29208_29245 + (1));
seq__29205_29242 = G__29247;
chunk__29206_29243 = G__29248;
count__29207_29244 = G__29249;
i__29208_29245 = G__29250;
continue;
} else {
var temp__5720__auto___29251__$1 = cljs.core.seq.call(null,seq__29205_29242);
if(temp__5720__auto___29251__$1){
var seq__29205_29252__$1 = temp__5720__auto___29251__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29205_29252__$1)){
var c__4556__auto___29253 = cljs.core.chunk_first.call(null,seq__29205_29252__$1);
var G__29254 = cljs.core.chunk_rest.call(null,seq__29205_29252__$1);
var G__29255 = c__4556__auto___29253;
var G__29256 = cljs.core.count.call(null,c__4556__auto___29253);
var G__29257 = (0);
seq__29205_29242 = G__29254;
chunk__29206_29243 = G__29255;
count__29207_29244 = G__29256;
i__29208_29245 = G__29257;
continue;
} else {
var req_29258 = cljs.core.first.call(null,seq__29205_29252__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29258,prov);


var G__29259 = cljs.core.next.call(null,seq__29205_29252__$1);
var G__29260 = null;
var G__29261 = (0);
var G__29262 = (0);
seq__29205_29242 = G__29259;
chunk__29206_29243 = G__29260;
count__29207_29244 = G__29261;
i__29208_29245 = G__29262;
continue;
}
} else {
}
}
break;
}


var G__29263 = cljs.core.next.call(null,seq__29189__$1);
var G__29264 = null;
var G__29265 = (0);
var G__29266 = (0);
seq__29189 = G__29263;
chunk__29190 = G__29264;
count__29191 = G__29265;
i__29192 = G__29266;
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
var seq__29209 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,path));
var chunk__29210 = null;
var count__29211 = (0);
var i__29212 = (0);
while(true){
if((i__29212 < count__29211)){
var prov = cljs.core._nth.call(null,chunk__29210,i__29212);
goog.object.forEach(deps,((function (seq__29209,chunk__29210,count__29211,i__29212,prov,requires){
return (function (___$1,req,___$2){
return figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req,prov);
});})(seq__29209,chunk__29210,count__29211,i__29212,prov,requires))
);


var G__29267 = seq__29209;
var G__29268 = chunk__29210;
var G__29269 = count__29211;
var G__29270 = (i__29212 + (1));
seq__29209 = G__29267;
chunk__29210 = G__29268;
count__29211 = G__29269;
i__29212 = G__29270;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__29209);
if(temp__5720__auto__){
var seq__29209__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29209__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__29209__$1);
var G__29271 = cljs.core.chunk_rest.call(null,seq__29209__$1);
var G__29272 = c__4556__auto__;
var G__29273 = cljs.core.count.call(null,c__4556__auto__);
var G__29274 = (0);
seq__29209 = G__29271;
chunk__29210 = G__29272;
count__29211 = G__29273;
i__29212 = G__29274;
continue;
} else {
var prov = cljs.core.first.call(null,seq__29209__$1);
goog.object.forEach(deps,((function (seq__29209,chunk__29210,count__29211,i__29212,prov,seq__29209__$1,temp__5720__auto__,requires){
return (function (___$1,req,___$2){
return figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req,prov);
});})(seq__29209,chunk__29210,count__29211,i__29212,prov,seq__29209__$1,temp__5720__auto__,requires))
);


var G__29275 = cljs.core.next.call(null,seq__29209__$1);
var G__29276 = null;
var G__29277 = (0);
var G__29278 = (0);
seq__29209 = G__29275;
chunk__29210 = G__29276;
count__29211 = G__29277;
i__29212 = G__29278;
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
return cljs.core.some.call(null,(function (p__29279){
var vec__29280 = p__29279;
var _ = cljs.core.nth.call(null,vec__29280,(0),null);
var v = cljs.core.nth.call(null,vec__29280,(1),null);
var and__4115__auto__ = v;
if(cljs.core.truth_(and__4115__auto__)){
return v.call(null,dep);
} else {
return and__4115__auto__;
}
}),cljs.core.filter.call(null,(function (p__29283){
var vec__29284 = p__29283;
var k = cljs.core.nth.call(null,vec__29284,(0),null);
var v = cljs.core.nth.call(null,vec__29284,(1),null);
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

var seq__29296_29304 = cljs.core.seq.call(null,deps);
var chunk__29297_29305 = null;
var count__29298_29306 = (0);
var i__29299_29307 = (0);
while(true){
if((i__29299_29307 < count__29298_29306)){
var dep_29308 = cljs.core._nth.call(null,chunk__29297_29305,i__29299_29307);
if(cljs.core.truth_((function (){var and__4115__auto__ = dep_29308;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_29308));
} else {
return and__4115__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_29308,(depth + (1)),state);
} else {
}


var G__29309 = seq__29296_29304;
var G__29310 = chunk__29297_29305;
var G__29311 = count__29298_29306;
var G__29312 = (i__29299_29307 + (1));
seq__29296_29304 = G__29309;
chunk__29297_29305 = G__29310;
count__29298_29306 = G__29311;
i__29299_29307 = G__29312;
continue;
} else {
var temp__5720__auto___29313 = cljs.core.seq.call(null,seq__29296_29304);
if(temp__5720__auto___29313){
var seq__29296_29314__$1 = temp__5720__auto___29313;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29296_29314__$1)){
var c__4556__auto___29315 = cljs.core.chunk_first.call(null,seq__29296_29314__$1);
var G__29316 = cljs.core.chunk_rest.call(null,seq__29296_29314__$1);
var G__29317 = c__4556__auto___29315;
var G__29318 = cljs.core.count.call(null,c__4556__auto___29315);
var G__29319 = (0);
seq__29296_29304 = G__29316;
chunk__29297_29305 = G__29317;
count__29298_29306 = G__29318;
i__29299_29307 = G__29319;
continue;
} else {
var dep_29320 = cljs.core.first.call(null,seq__29296_29314__$1);
if(cljs.core.truth_((function (){var and__4115__auto__ = dep_29320;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_29320));
} else {
return and__4115__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_29320,(depth + (1)),state);
} else {
}


var G__29321 = cljs.core.next.call(null,seq__29296_29314__$1);
var G__29322 = null;
var G__29323 = (0);
var G__29324 = (0);
seq__29296_29304 = G__29321;
chunk__29297_29305 = G__29322;
count__29298_29306 = G__29323;
i__29299_29307 = G__29324;
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
var elim_dups_STAR_ = (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__29300){
var vec__29301 = p__29300;
var seq__29302 = cljs.core.seq.call(null,vec__29301);
var first__29303 = cljs.core.first.call(null,seq__29302);
var seq__29302__$1 = cljs.core.next.call(null,seq__29302);
var x = first__29303;
var xs = seq__29302__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,(function (p1__29287_SHARP_){
return clojure.set.difference.call(null,p1__29287_SHARP_,x);
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
figwheel.client.file_reloading.resolve_ns = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?figwheel.client.file_reloading.name__GT_path:(function (p1__29325_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,p1__29325_SHARP_))].join('');
}));
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__29326 = cljs.core.seq.call(null,provides);
var chunk__29327 = null;
var count__29328 = (0);
var i__29329 = (0);
while(true){
if((i__29329 < count__29328)){
var prov = cljs.core._nth.call(null,chunk__29327,i__29329);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__29338_29346 = cljs.core.seq.call(null,requires);
var chunk__29339_29347 = null;
var count__29340_29348 = (0);
var i__29341_29349 = (0);
while(true){
if((i__29341_29349 < count__29340_29348)){
var req_29350 = cljs.core._nth.call(null,chunk__29339_29347,i__29341_29349);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29350,prov);


var G__29351 = seq__29338_29346;
var G__29352 = chunk__29339_29347;
var G__29353 = count__29340_29348;
var G__29354 = (i__29341_29349 + (1));
seq__29338_29346 = G__29351;
chunk__29339_29347 = G__29352;
count__29340_29348 = G__29353;
i__29341_29349 = G__29354;
continue;
} else {
var temp__5720__auto___29355 = cljs.core.seq.call(null,seq__29338_29346);
if(temp__5720__auto___29355){
var seq__29338_29356__$1 = temp__5720__auto___29355;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29338_29356__$1)){
var c__4556__auto___29357 = cljs.core.chunk_first.call(null,seq__29338_29356__$1);
var G__29358 = cljs.core.chunk_rest.call(null,seq__29338_29356__$1);
var G__29359 = c__4556__auto___29357;
var G__29360 = cljs.core.count.call(null,c__4556__auto___29357);
var G__29361 = (0);
seq__29338_29346 = G__29358;
chunk__29339_29347 = G__29359;
count__29340_29348 = G__29360;
i__29341_29349 = G__29361;
continue;
} else {
var req_29362 = cljs.core.first.call(null,seq__29338_29356__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29362,prov);


var G__29363 = cljs.core.next.call(null,seq__29338_29356__$1);
var G__29364 = null;
var G__29365 = (0);
var G__29366 = (0);
seq__29338_29346 = G__29363;
chunk__29339_29347 = G__29364;
count__29340_29348 = G__29365;
i__29341_29349 = G__29366;
continue;
}
} else {
}
}
break;
}


var G__29367 = seq__29326;
var G__29368 = chunk__29327;
var G__29369 = count__29328;
var G__29370 = (i__29329 + (1));
seq__29326 = G__29367;
chunk__29327 = G__29368;
count__29328 = G__29369;
i__29329 = G__29370;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__29326);
if(temp__5720__auto__){
var seq__29326__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29326__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__29326__$1);
var G__29371 = cljs.core.chunk_rest.call(null,seq__29326__$1);
var G__29372 = c__4556__auto__;
var G__29373 = cljs.core.count.call(null,c__4556__auto__);
var G__29374 = (0);
seq__29326 = G__29371;
chunk__29327 = G__29372;
count__29328 = G__29373;
i__29329 = G__29374;
continue;
} else {
var prov = cljs.core.first.call(null,seq__29326__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__29342_29375 = cljs.core.seq.call(null,requires);
var chunk__29343_29376 = null;
var count__29344_29377 = (0);
var i__29345_29378 = (0);
while(true){
if((i__29345_29378 < count__29344_29377)){
var req_29379 = cljs.core._nth.call(null,chunk__29343_29376,i__29345_29378);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29379,prov);


var G__29380 = seq__29342_29375;
var G__29381 = chunk__29343_29376;
var G__29382 = count__29344_29377;
var G__29383 = (i__29345_29378 + (1));
seq__29342_29375 = G__29380;
chunk__29343_29376 = G__29381;
count__29344_29377 = G__29382;
i__29345_29378 = G__29383;
continue;
} else {
var temp__5720__auto___29384__$1 = cljs.core.seq.call(null,seq__29342_29375);
if(temp__5720__auto___29384__$1){
var seq__29342_29385__$1 = temp__5720__auto___29384__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29342_29385__$1)){
var c__4556__auto___29386 = cljs.core.chunk_first.call(null,seq__29342_29385__$1);
var G__29387 = cljs.core.chunk_rest.call(null,seq__29342_29385__$1);
var G__29388 = c__4556__auto___29386;
var G__29389 = cljs.core.count.call(null,c__4556__auto___29386);
var G__29390 = (0);
seq__29342_29375 = G__29387;
chunk__29343_29376 = G__29388;
count__29344_29377 = G__29389;
i__29345_29378 = G__29390;
continue;
} else {
var req_29391 = cljs.core.first.call(null,seq__29342_29385__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29391,prov);


var G__29392 = cljs.core.next.call(null,seq__29342_29385__$1);
var G__29393 = null;
var G__29394 = (0);
var G__29395 = (0);
seq__29342_29375 = G__29392;
chunk__29343_29376 = G__29393;
count__29344_29377 = G__29394;
i__29345_29378 = G__29395;
continue;
}
} else {
}
}
break;
}


var G__29396 = cljs.core.next.call(null,seq__29326__$1);
var G__29397 = null;
var G__29398 = (0);
var G__29399 = (0);
seq__29326 = G__29396;
chunk__29327 = G__29397;
count__29328 = G__29398;
i__29329 = G__29399;
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
var seq__29400_29404 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__29401_29405 = null;
var count__29402_29406 = (0);
var i__29403_29407 = (0);
while(true){
if((i__29403_29407 < count__29402_29406)){
var ns_29408 = cljs.core._nth.call(null,chunk__29401_29405,i__29403_29407);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_29408);


var G__29409 = seq__29400_29404;
var G__29410 = chunk__29401_29405;
var G__29411 = count__29402_29406;
var G__29412 = (i__29403_29407 + (1));
seq__29400_29404 = G__29409;
chunk__29401_29405 = G__29410;
count__29402_29406 = G__29411;
i__29403_29407 = G__29412;
continue;
} else {
var temp__5720__auto___29413 = cljs.core.seq.call(null,seq__29400_29404);
if(temp__5720__auto___29413){
var seq__29400_29414__$1 = temp__5720__auto___29413;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29400_29414__$1)){
var c__4556__auto___29415 = cljs.core.chunk_first.call(null,seq__29400_29414__$1);
var G__29416 = cljs.core.chunk_rest.call(null,seq__29400_29414__$1);
var G__29417 = c__4556__auto___29415;
var G__29418 = cljs.core.count.call(null,c__4556__auto___29415);
var G__29419 = (0);
seq__29400_29404 = G__29416;
chunk__29401_29405 = G__29417;
count__29402_29406 = G__29418;
i__29403_29407 = G__29419;
continue;
} else {
var ns_29420 = cljs.core.first.call(null,seq__29400_29414__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_29420);


var G__29421 = cljs.core.next.call(null,seq__29400_29414__$1);
var G__29422 = null;
var G__29423 = (0);
var G__29424 = (0);
seq__29400_29404 = G__29421;
chunk__29401_29405 = G__29422;
count__29402_29406 = G__29423;
i__29403_29407 = G__29424;
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
var G__29425__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__29425 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29426__i = 0, G__29426__a = new Array(arguments.length -  0);
while (G__29426__i < G__29426__a.length) {G__29426__a[G__29426__i] = arguments[G__29426__i + 0]; ++G__29426__i;}
  args = new cljs.core.IndexedSeq(G__29426__a,0,null);
} 
return G__29425__delegate.call(this,args);};
G__29425.cljs$lang$maxFixedArity = 0;
G__29425.cljs$lang$applyTo = (function (arglist__29427){
var args = cljs.core.seq(arglist__29427);
return G__29425__delegate(args);
});
G__29425.cljs$core$IFn$_invoke$arity$variadic = G__29425__delegate;
return G__29425;
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
figwheel.client.file_reloading.gloader = (((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoad !== 'undefined'))?(function (p1__29428_SHARP_,p2__29429_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__29428_SHARP_)),p2__29429_SHARP_);
}):(((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.load !== 'undefined'))?(function (p1__29430_SHARP_,p2__29431_SHARP_){
return goog.net.jsloader.load(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__29430_SHARP_),p2__29431_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__29432 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__29432.addCallback((function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
}));

G__29432.addErrback((function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
}));

return G__29432;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e29433){if((e29433 instanceof Error)){
var e = e29433;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e29433;

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
}catch (e29434){if((e29434 instanceof Error)){
var e = e29434;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e29434;

}
}})());
});
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__29435 = cljs.core._EQ_;
var expr__29436 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__29435.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__29436))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__29435.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__29436))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__29435.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__29436))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return (function (a,b){
throw "Reload not defined for this platform";
});
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__29438,callback){
var map__29439 = p__29438;
var map__29439__$1 = (((((!((map__29439 == null))))?(((((map__29439.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29439.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29439):map__29439);
var file_msg = map__29439__$1;
var request_url = cljs.core.get.call(null,map__29439__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

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
figwheel.client.file_reloading.reloader_loop = (function (){var c__27231__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27232__auto__ = (function (){var switch__27136__auto__ = (function (state_29477){
var state_val_29478 = (state_29477[(1)]);
if((state_val_29478 === (7))){
var inst_29473 = (state_29477[(2)]);
var state_29477__$1 = state_29477;
var statearr_29479_29505 = state_29477__$1;
(statearr_29479_29505[(2)] = inst_29473);

(statearr_29479_29505[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29478 === (1))){
var state_29477__$1 = state_29477;
var statearr_29480_29506 = state_29477__$1;
(statearr_29480_29506[(2)] = null);

(statearr_29480_29506[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29478 === (4))){
var inst_29443 = (state_29477[(7)]);
var inst_29443__$1 = (state_29477[(2)]);
var state_29477__$1 = (function (){var statearr_29481 = state_29477;
(statearr_29481[(7)] = inst_29443__$1);

return statearr_29481;
})();
if(cljs.core.truth_(inst_29443__$1)){
var statearr_29482_29507 = state_29477__$1;
(statearr_29482_29507[(1)] = (5));

} else {
var statearr_29483_29508 = state_29477__$1;
(statearr_29483_29508[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29478 === (15))){
var inst_29458 = (state_29477[(8)]);
var inst_29456 = (state_29477[(9)]);
var inst_29460 = inst_29458.call(null,inst_29456);
var state_29477__$1 = state_29477;
var statearr_29484_29509 = state_29477__$1;
(statearr_29484_29509[(2)] = inst_29460);

(statearr_29484_29509[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29478 === (13))){
var inst_29467 = (state_29477[(2)]);
var state_29477__$1 = state_29477;
var statearr_29485_29510 = state_29477__$1;
(statearr_29485_29510[(2)] = inst_29467);

(statearr_29485_29510[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29478 === (6))){
var state_29477__$1 = state_29477;
var statearr_29486_29511 = state_29477__$1;
(statearr_29486_29511[(2)] = null);

(statearr_29486_29511[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29478 === (17))){
var inst_29464 = (state_29477[(2)]);
var state_29477__$1 = state_29477;
var statearr_29487_29512 = state_29477__$1;
(statearr_29487_29512[(2)] = inst_29464);

(statearr_29487_29512[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29478 === (3))){
var inst_29475 = (state_29477[(2)]);
var state_29477__$1 = state_29477;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29477__$1,inst_29475);
} else {
if((state_val_29478 === (12))){
var state_29477__$1 = state_29477;
var statearr_29488_29513 = state_29477__$1;
(statearr_29488_29513[(2)] = null);

(statearr_29488_29513[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29478 === (2))){
var state_29477__$1 = state_29477;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29477__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_29478 === (11))){
var inst_29448 = (state_29477[(10)]);
var inst_29454 = figwheel.client.file_reloading.blocking_load.call(null,inst_29448);
var state_29477__$1 = state_29477;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29477__$1,(14),inst_29454);
} else {
if((state_val_29478 === (9))){
var inst_29448 = (state_29477[(10)]);
var state_29477__$1 = state_29477;
if(cljs.core.truth_(inst_29448)){
var statearr_29489_29514 = state_29477__$1;
(statearr_29489_29514[(1)] = (11));

} else {
var statearr_29490_29515 = state_29477__$1;
(statearr_29490_29515[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29478 === (5))){
var inst_29449 = (state_29477[(11)]);
var inst_29443 = (state_29477[(7)]);
var inst_29448 = cljs.core.nth.call(null,inst_29443,(0),null);
var inst_29449__$1 = cljs.core.nth.call(null,inst_29443,(1),null);
var state_29477__$1 = (function (){var statearr_29491 = state_29477;
(statearr_29491[(11)] = inst_29449__$1);

(statearr_29491[(10)] = inst_29448);

return statearr_29491;
})();
if(cljs.core.truth_(inst_29449__$1)){
var statearr_29492_29516 = state_29477__$1;
(statearr_29492_29516[(1)] = (8));

} else {
var statearr_29493_29517 = state_29477__$1;
(statearr_29493_29517[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29478 === (14))){
var inst_29458 = (state_29477[(8)]);
var inst_29448 = (state_29477[(10)]);
var inst_29456 = (state_29477[(2)]);
var inst_29457 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_29458__$1 = cljs.core.get.call(null,inst_29457,inst_29448);
var state_29477__$1 = (function (){var statearr_29494 = state_29477;
(statearr_29494[(8)] = inst_29458__$1);

(statearr_29494[(9)] = inst_29456);

return statearr_29494;
})();
if(cljs.core.truth_(inst_29458__$1)){
var statearr_29495_29518 = state_29477__$1;
(statearr_29495_29518[(1)] = (15));

} else {
var statearr_29496_29519 = state_29477__$1;
(statearr_29496_29519[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29478 === (16))){
var inst_29456 = (state_29477[(9)]);
var inst_29462 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_29456);
var state_29477__$1 = state_29477;
var statearr_29497_29520 = state_29477__$1;
(statearr_29497_29520[(2)] = inst_29462);

(statearr_29497_29520[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29478 === (10))){
var inst_29469 = (state_29477[(2)]);
var state_29477__$1 = (function (){var statearr_29498 = state_29477;
(statearr_29498[(12)] = inst_29469);

return statearr_29498;
})();
var statearr_29499_29521 = state_29477__$1;
(statearr_29499_29521[(2)] = null);

(statearr_29499_29521[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29478 === (8))){
var inst_29449 = (state_29477[(11)]);
var inst_29451 = eval(inst_29449);
var state_29477__$1 = state_29477;
var statearr_29500_29522 = state_29477__$1;
(statearr_29500_29522[(2)] = inst_29451);

(statearr_29500_29522[(1)] = (10));


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
var figwheel$client$file_reloading$state_machine__27137__auto__ = null;
var figwheel$client$file_reloading$state_machine__27137__auto____0 = (function (){
var statearr_29501 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29501[(0)] = figwheel$client$file_reloading$state_machine__27137__auto__);

(statearr_29501[(1)] = (1));

return statearr_29501;
});
var figwheel$client$file_reloading$state_machine__27137__auto____1 = (function (state_29477){
while(true){
var ret_value__27138__auto__ = (function (){try{while(true){
var result__27139__auto__ = switch__27136__auto__.call(null,state_29477);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27139__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27139__auto__;
}
break;
}
}catch (e29502){if((e29502 instanceof Object)){
var ex__27140__auto__ = e29502;
var statearr_29503_29523 = state_29477;
(statearr_29503_29523[(5)] = ex__27140__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29477);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29502;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27138__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29524 = state_29477;
state_29477 = G__29524;
continue;
} else {
return ret_value__27138__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__27137__auto__ = function(state_29477){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__27137__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__27137__auto____1.call(this,state_29477);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__27137__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__27137__auto____0;
figwheel$client$file_reloading$state_machine__27137__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__27137__auto____1;
return figwheel$client$file_reloading$state_machine__27137__auto__;
})()
})();
var state__27233__auto__ = (function (){var statearr_29504 = f__27232__auto__.call(null);
(statearr_29504[(6)] = c__27231__auto__);

return statearr_29504;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27233__auto__);
}));

return c__27231__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__29526 = arguments.length;
switch (G__29526) {
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

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__29528,callback){
var map__29529 = p__29528;
var map__29529__$1 = (((((!((map__29529 == null))))?(((((map__29529.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29529.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29529):map__29529);
var file_msg = map__29529__$1;
var namespace = cljs.core.get.call(null,map__29529__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,(function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
}));

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__29531){
var map__29532 = p__29531;
var map__29532__$1 = (((((!((map__29532 == null))))?(((((map__29532.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29532.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29532):map__29532);
var file_msg = map__29532__$1;
var namespace = cljs.core.get.call(null,map__29532__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return (!((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null)));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__29534){
var map__29535 = p__29534;
var map__29535__$1 = (((((!((map__29535 == null))))?(((((map__29535.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29535.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29535):map__29535);
var file_msg = map__29535__$1;
var namespace = cljs.core.get.call(null,map__29535__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__29537,callback){
var map__29538 = p__29537;
var map__29538__$1 = (((((!((map__29538 == null))))?(((((map__29538.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29538.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29538):map__29538);
var file_msg = map__29538__$1;
var request_url = cljs.core.get.call(null,map__29538__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__29538__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__27231__auto___29588 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27232__auto__ = (function (){var switch__27136__auto__ = (function (state_29573){
var state_val_29574 = (state_29573[(1)]);
if((state_val_29574 === (1))){
var inst_29547 = cljs.core.seq.call(null,files);
var inst_29548 = cljs.core.first.call(null,inst_29547);
var inst_29549 = cljs.core.next.call(null,inst_29547);
var inst_29550 = files;
var state_29573__$1 = (function (){var statearr_29575 = state_29573;
(statearr_29575[(7)] = inst_29550);

(statearr_29575[(8)] = inst_29549);

(statearr_29575[(9)] = inst_29548);

return statearr_29575;
})();
var statearr_29576_29589 = state_29573__$1;
(statearr_29576_29589[(2)] = null);

(statearr_29576_29589[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29574 === (2))){
var inst_29550 = (state_29573[(7)]);
var inst_29556 = (state_29573[(10)]);
var inst_29555 = cljs.core.seq.call(null,inst_29550);
var inst_29556__$1 = cljs.core.first.call(null,inst_29555);
var inst_29557 = cljs.core.next.call(null,inst_29555);
var inst_29558 = (inst_29556__$1 == null);
var inst_29559 = cljs.core.not.call(null,inst_29558);
var state_29573__$1 = (function (){var statearr_29577 = state_29573;
(statearr_29577[(11)] = inst_29557);

(statearr_29577[(10)] = inst_29556__$1);

return statearr_29577;
})();
if(inst_29559){
var statearr_29578_29590 = state_29573__$1;
(statearr_29578_29590[(1)] = (4));

} else {
var statearr_29579_29591 = state_29573__$1;
(statearr_29579_29591[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29574 === (3))){
var inst_29571 = (state_29573[(2)]);
var state_29573__$1 = state_29573;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29573__$1,inst_29571);
} else {
if((state_val_29574 === (4))){
var inst_29556 = (state_29573[(10)]);
var inst_29561 = figwheel.client.file_reloading.reload_js_file.call(null,inst_29556);
var state_29573__$1 = state_29573;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29573__$1,(7),inst_29561);
} else {
if((state_val_29574 === (5))){
var inst_29567 = cljs.core.async.close_BANG_.call(null,out);
var state_29573__$1 = state_29573;
var statearr_29580_29592 = state_29573__$1;
(statearr_29580_29592[(2)] = inst_29567);

(statearr_29580_29592[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29574 === (6))){
var inst_29569 = (state_29573[(2)]);
var state_29573__$1 = state_29573;
var statearr_29581_29593 = state_29573__$1;
(statearr_29581_29593[(2)] = inst_29569);

(statearr_29581_29593[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29574 === (7))){
var inst_29557 = (state_29573[(11)]);
var inst_29563 = (state_29573[(2)]);
var inst_29564 = cljs.core.async.put_BANG_.call(null,out,inst_29563);
var inst_29550 = inst_29557;
var state_29573__$1 = (function (){var statearr_29582 = state_29573;
(statearr_29582[(7)] = inst_29550);

(statearr_29582[(12)] = inst_29564);

return statearr_29582;
})();
var statearr_29583_29594 = state_29573__$1;
(statearr_29583_29594[(2)] = null);

(statearr_29583_29594[(1)] = (2));


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
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__27137__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__27137__auto____0 = (function (){
var statearr_29584 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29584[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__27137__auto__);

(statearr_29584[(1)] = (1));

return statearr_29584;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__27137__auto____1 = (function (state_29573){
while(true){
var ret_value__27138__auto__ = (function (){try{while(true){
var result__27139__auto__ = switch__27136__auto__.call(null,state_29573);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27139__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27139__auto__;
}
break;
}
}catch (e29585){if((e29585 instanceof Object)){
var ex__27140__auto__ = e29585;
var statearr_29586_29595 = state_29573;
(statearr_29586_29595[(5)] = ex__27140__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29573);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29585;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27138__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29596 = state_29573;
state_29573 = G__29596;
continue;
} else {
return ret_value__27138__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__27137__auto__ = function(state_29573){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__27137__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__27137__auto____1.call(this,state_29573);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__27137__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__27137__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__27137__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__27137__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__27137__auto__;
})()
})();
var state__27233__auto__ = (function (){var statearr_29587 = f__27232__auto__.call(null);
(statearr_29587[(6)] = c__27231__auto___29588);

return statearr_29587;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27233__auto__);
}));


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__29597,opts){
var map__29598 = p__29597;
var map__29598__$1 = (((((!((map__29598 == null))))?(((((map__29598.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29598.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29598):map__29598);
var eval_body = cljs.core.get.call(null,map__29598__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__29598__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e29600){var e = e29600;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,(function (n){
var temp__5718__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__29601_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__29601_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__29602){
var vec__29603 = p__29602;
var k = cljs.core.nth.call(null,vec__29603,(0),null);
var v = cljs.core.nth.call(null,vec__29603,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__29606){
var vec__29607 = p__29606;
var k = cljs.core.nth.call(null,vec__29607,(0),null);
var v = cljs.core.nth.call(null,vec__29607,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__29613,p__29614){
var map__29615 = p__29613;
var map__29615__$1 = (((((!((map__29615 == null))))?(((((map__29615.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29615.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29615):map__29615);
var opts = map__29615__$1;
var before_jsload = cljs.core.get.call(null,map__29615__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__29615__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__29615__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__29616 = p__29614;
var map__29616__$1 = (((((!((map__29616 == null))))?(((((map__29616.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29616.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29616):map__29616);
var msg = map__29616__$1;
var files = cljs.core.get.call(null,map__29616__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__29616__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__29616__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__27231__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27232__auto__ = (function (){var switch__27136__auto__ = (function (state_29770){
var state_val_29771 = (state_29770[(1)]);
if((state_val_29771 === (7))){
var inst_29632 = (state_29770[(7)]);
var inst_29630 = (state_29770[(8)]);
var inst_29633 = (state_29770[(9)]);
var inst_29631 = (state_29770[(10)]);
var inst_29638 = cljs.core._nth.call(null,inst_29631,inst_29633);
var inst_29639 = figwheel.client.file_reloading.eval_body.call(null,inst_29638,opts);
var inst_29640 = (inst_29633 + (1));
var tmp29772 = inst_29632;
var tmp29773 = inst_29630;
var tmp29774 = inst_29631;
var inst_29630__$1 = tmp29773;
var inst_29631__$1 = tmp29774;
var inst_29632__$1 = tmp29772;
var inst_29633__$1 = inst_29640;
var state_29770__$1 = (function (){var statearr_29775 = state_29770;
(statearr_29775[(7)] = inst_29632__$1);

(statearr_29775[(8)] = inst_29630__$1);

(statearr_29775[(11)] = inst_29639);

(statearr_29775[(9)] = inst_29633__$1);

(statearr_29775[(10)] = inst_29631__$1);

return statearr_29775;
})();
var statearr_29776_29859 = state_29770__$1;
(statearr_29776_29859[(2)] = null);

(statearr_29776_29859[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29771 === (20))){
var inst_29673 = (state_29770[(12)]);
var inst_29681 = figwheel.client.file_reloading.sort_files.call(null,inst_29673);
var state_29770__$1 = state_29770;
var statearr_29777_29860 = state_29770__$1;
(statearr_29777_29860[(2)] = inst_29681);

(statearr_29777_29860[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29771 === (27))){
var state_29770__$1 = state_29770;
var statearr_29778_29861 = state_29770__$1;
(statearr_29778_29861[(2)] = null);

(statearr_29778_29861[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29771 === (1))){
var inst_29622 = (state_29770[(13)]);
var inst_29619 = before_jsload.call(null,files);
var inst_29620 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_29621 = (function (){return (function (p1__29610_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__29610_SHARP_);
});
})();
var inst_29622__$1 = cljs.core.filter.call(null,inst_29621,files);
var inst_29623 = cljs.core.not_empty.call(null,inst_29622__$1);
var state_29770__$1 = (function (){var statearr_29779 = state_29770;
(statearr_29779[(14)] = inst_29620);

(statearr_29779[(15)] = inst_29619);

(statearr_29779[(13)] = inst_29622__$1);

return statearr_29779;
})();
if(cljs.core.truth_(inst_29623)){
var statearr_29780_29862 = state_29770__$1;
(statearr_29780_29862[(1)] = (2));

} else {
var statearr_29781_29863 = state_29770__$1;
(statearr_29781_29863[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29771 === (24))){
var state_29770__$1 = state_29770;
var statearr_29782_29864 = state_29770__$1;
(statearr_29782_29864[(2)] = null);

(statearr_29782_29864[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29771 === (39))){
var inst_29723 = (state_29770[(16)]);
var state_29770__$1 = state_29770;
var statearr_29783_29865 = state_29770__$1;
(statearr_29783_29865[(2)] = inst_29723);

(statearr_29783_29865[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29771 === (46))){
var inst_29765 = (state_29770[(2)]);
var state_29770__$1 = state_29770;
var statearr_29784_29866 = state_29770__$1;
(statearr_29784_29866[(2)] = inst_29765);

(statearr_29784_29866[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29771 === (4))){
var inst_29667 = (state_29770[(2)]);
var inst_29668 = cljs.core.List.EMPTY;
var inst_29669 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_29668);
var inst_29670 = (function (){return (function (p1__29611_SHARP_){
var and__4115__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__29611_SHARP_);
if(cljs.core.truth_(and__4115__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__29611_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__29611_SHARP_))));
} else {
return and__4115__auto__;
}
});
})();
var inst_29671 = cljs.core.filter.call(null,inst_29670,files);
var inst_29672 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_29673 = cljs.core.concat.call(null,inst_29671,inst_29672);
var state_29770__$1 = (function (){var statearr_29785 = state_29770;
(statearr_29785[(17)] = inst_29669);

(statearr_29785[(18)] = inst_29667);

(statearr_29785[(12)] = inst_29673);

return statearr_29785;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_29786_29867 = state_29770__$1;
(statearr_29786_29867[(1)] = (16));

} else {
var statearr_29787_29868 = state_29770__$1;
(statearr_29787_29868[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29771 === (15))){
var inst_29657 = (state_29770[(2)]);
var state_29770__$1 = state_29770;
var statearr_29788_29869 = state_29770__$1;
(statearr_29788_29869[(2)] = inst_29657);

(statearr_29788_29869[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29771 === (21))){
var inst_29683 = (state_29770[(19)]);
var inst_29683__$1 = (state_29770[(2)]);
var inst_29684 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_29683__$1);
var state_29770__$1 = (function (){var statearr_29789 = state_29770;
(statearr_29789[(19)] = inst_29683__$1);

return statearr_29789;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29770__$1,(22),inst_29684);
} else {
if((state_val_29771 === (31))){
var inst_29768 = (state_29770[(2)]);
var state_29770__$1 = state_29770;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29770__$1,inst_29768);
} else {
if((state_val_29771 === (32))){
var inst_29723 = (state_29770[(16)]);
var inst_29728 = inst_29723.cljs$lang$protocol_mask$partition0$;
var inst_29729 = (inst_29728 & (64));
var inst_29730 = inst_29723.cljs$core$ISeq$;
var inst_29731 = (cljs.core.PROTOCOL_SENTINEL === inst_29730);
var inst_29732 = ((inst_29729) || (inst_29731));
var state_29770__$1 = state_29770;
if(cljs.core.truth_(inst_29732)){
var statearr_29790_29870 = state_29770__$1;
(statearr_29790_29870[(1)] = (35));

} else {
var statearr_29791_29871 = state_29770__$1;
(statearr_29791_29871[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29771 === (40))){
var inst_29745 = (state_29770[(20)]);
var inst_29744 = (state_29770[(2)]);
var inst_29745__$1 = cljs.core.get.call(null,inst_29744,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_29746 = cljs.core.get.call(null,inst_29744,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_29747 = cljs.core.not_empty.call(null,inst_29745__$1);
var state_29770__$1 = (function (){var statearr_29792 = state_29770;
(statearr_29792[(21)] = inst_29746);

(statearr_29792[(20)] = inst_29745__$1);

return statearr_29792;
})();
if(cljs.core.truth_(inst_29747)){
var statearr_29793_29872 = state_29770__$1;
(statearr_29793_29872[(1)] = (41));

} else {
var statearr_29794_29873 = state_29770__$1;
(statearr_29794_29873[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29771 === (33))){
var state_29770__$1 = state_29770;
var statearr_29795_29874 = state_29770__$1;
(statearr_29795_29874[(2)] = false);

(statearr_29795_29874[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29771 === (13))){
var inst_29643 = (state_29770[(22)]);
var inst_29647 = cljs.core.chunk_first.call(null,inst_29643);
var inst_29648 = cljs.core.chunk_rest.call(null,inst_29643);
var inst_29649 = cljs.core.count.call(null,inst_29647);
var inst_29630 = inst_29648;
var inst_29631 = inst_29647;
var inst_29632 = inst_29649;
var inst_29633 = (0);
var state_29770__$1 = (function (){var statearr_29796 = state_29770;
(statearr_29796[(7)] = inst_29632);

(statearr_29796[(8)] = inst_29630);

(statearr_29796[(9)] = inst_29633);

(statearr_29796[(10)] = inst_29631);

return statearr_29796;
})();
var statearr_29797_29875 = state_29770__$1;
(statearr_29797_29875[(2)] = null);

(statearr_29797_29875[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29771 === (22))){
var inst_29687 = (state_29770[(23)]);
var inst_29683 = (state_29770[(19)]);
var inst_29686 = (state_29770[(24)]);
var inst_29691 = (state_29770[(25)]);
var inst_29686__$1 = (state_29770[(2)]);
var inst_29687__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_29686__$1);
var inst_29688 = (function (){var all_files = inst_29683;
var res_SINGLEQUOTE_ = inst_29686__$1;
var res = inst_29687__$1;
return (function (p1__29612_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__29612_SHARP_));
});
})();
var inst_29689 = cljs.core.filter.call(null,inst_29688,inst_29686__$1);
var inst_29690 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_29691__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_29690);
var inst_29692 = cljs.core.not_empty.call(null,inst_29691__$1);
var state_29770__$1 = (function (){var statearr_29798 = state_29770;
(statearr_29798[(23)] = inst_29687__$1);

(statearr_29798[(24)] = inst_29686__$1);

(statearr_29798[(26)] = inst_29689);

(statearr_29798[(25)] = inst_29691__$1);

return statearr_29798;
})();
if(cljs.core.truth_(inst_29692)){
var statearr_29799_29876 = state_29770__$1;
(statearr_29799_29876[(1)] = (23));

} else {
var statearr_29800_29877 = state_29770__$1;
(statearr_29800_29877[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29771 === (36))){
var state_29770__$1 = state_29770;
var statearr_29801_29878 = state_29770__$1;
(statearr_29801_29878[(2)] = false);

(statearr_29801_29878[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29771 === (41))){
var inst_29745 = (state_29770[(20)]);
var inst_29749 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_29750 = cljs.core.map.call(null,inst_29749,inst_29745);
var inst_29751 = cljs.core.pr_str.call(null,inst_29750);
var inst_29752 = ["figwheel-no-load meta-data: ",inst_29751].join('');
var inst_29753 = figwheel.client.utils.log.call(null,inst_29752);
var state_29770__$1 = state_29770;
var statearr_29802_29879 = state_29770__$1;
(statearr_29802_29879[(2)] = inst_29753);

(statearr_29802_29879[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29771 === (43))){
var inst_29746 = (state_29770[(21)]);
var inst_29756 = (state_29770[(2)]);
var inst_29757 = cljs.core.not_empty.call(null,inst_29746);
var state_29770__$1 = (function (){var statearr_29803 = state_29770;
(statearr_29803[(27)] = inst_29756);

return statearr_29803;
})();
if(cljs.core.truth_(inst_29757)){
var statearr_29804_29880 = state_29770__$1;
(statearr_29804_29880[(1)] = (44));

} else {
var statearr_29805_29881 = state_29770__$1;
(statearr_29805_29881[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29771 === (29))){
var inst_29723 = (state_29770[(16)]);
var inst_29687 = (state_29770[(23)]);
var inst_29683 = (state_29770[(19)]);
var inst_29686 = (state_29770[(24)]);
var inst_29689 = (state_29770[(26)]);
var inst_29691 = (state_29770[(25)]);
var inst_29719 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_29722 = (function (){var all_files = inst_29683;
var res_SINGLEQUOTE_ = inst_29686;
var res = inst_29687;
var files_not_loaded = inst_29689;
var dependencies_that_loaded = inst_29691;
return (function (p__29721){
var map__29806 = p__29721;
var map__29806__$1 = (((((!((map__29806 == null))))?(((((map__29806.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29806.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29806):map__29806);
var namespace = cljs.core.get.call(null,map__29806__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
var inst_29723__$1 = cljs.core.group_by.call(null,inst_29722,inst_29689);
var inst_29725 = (inst_29723__$1 == null);
var inst_29726 = cljs.core.not.call(null,inst_29725);
var state_29770__$1 = (function (){var statearr_29808 = state_29770;
(statearr_29808[(16)] = inst_29723__$1);

(statearr_29808[(28)] = inst_29719);

return statearr_29808;
})();
if(inst_29726){
var statearr_29809_29882 = state_29770__$1;
(statearr_29809_29882[(1)] = (32));

} else {
var statearr_29810_29883 = state_29770__$1;
(statearr_29810_29883[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29771 === (44))){
var inst_29746 = (state_29770[(21)]);
var inst_29759 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_29746);
var inst_29760 = cljs.core.pr_str.call(null,inst_29759);
var inst_29761 = ["not required: ",inst_29760].join('');
var inst_29762 = figwheel.client.utils.log.call(null,inst_29761);
var state_29770__$1 = state_29770;
var statearr_29811_29884 = state_29770__$1;
(statearr_29811_29884[(2)] = inst_29762);

(statearr_29811_29884[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29771 === (6))){
var inst_29664 = (state_29770[(2)]);
var state_29770__$1 = state_29770;
var statearr_29812_29885 = state_29770__$1;
(statearr_29812_29885[(2)] = inst_29664);

(statearr_29812_29885[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29771 === (28))){
var inst_29689 = (state_29770[(26)]);
var inst_29716 = (state_29770[(2)]);
var inst_29717 = cljs.core.not_empty.call(null,inst_29689);
var state_29770__$1 = (function (){var statearr_29813 = state_29770;
(statearr_29813[(29)] = inst_29716);

return statearr_29813;
})();
if(cljs.core.truth_(inst_29717)){
var statearr_29814_29886 = state_29770__$1;
(statearr_29814_29886[(1)] = (29));

} else {
var statearr_29815_29887 = state_29770__$1;
(statearr_29815_29887[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29771 === (25))){
var inst_29687 = (state_29770[(23)]);
var inst_29703 = (state_29770[(2)]);
var inst_29704 = cljs.core.not_empty.call(null,inst_29687);
var state_29770__$1 = (function (){var statearr_29816 = state_29770;
(statearr_29816[(30)] = inst_29703);

return statearr_29816;
})();
if(cljs.core.truth_(inst_29704)){
var statearr_29817_29888 = state_29770__$1;
(statearr_29817_29888[(1)] = (26));

} else {
var statearr_29818_29889 = state_29770__$1;
(statearr_29818_29889[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29771 === (34))){
var inst_29739 = (state_29770[(2)]);
var state_29770__$1 = state_29770;
if(cljs.core.truth_(inst_29739)){
var statearr_29819_29890 = state_29770__$1;
(statearr_29819_29890[(1)] = (38));

} else {
var statearr_29820_29891 = state_29770__$1;
(statearr_29820_29891[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29771 === (17))){
var state_29770__$1 = state_29770;
var statearr_29821_29892 = state_29770__$1;
(statearr_29821_29892[(2)] = recompile_dependents);

(statearr_29821_29892[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29771 === (3))){
var state_29770__$1 = state_29770;
var statearr_29822_29893 = state_29770__$1;
(statearr_29822_29893[(2)] = null);

(statearr_29822_29893[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29771 === (12))){
var inst_29660 = (state_29770[(2)]);
var state_29770__$1 = state_29770;
var statearr_29823_29894 = state_29770__$1;
(statearr_29823_29894[(2)] = inst_29660);

(statearr_29823_29894[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29771 === (2))){
var inst_29622 = (state_29770[(13)]);
var inst_29629 = cljs.core.seq.call(null,inst_29622);
var inst_29630 = inst_29629;
var inst_29631 = null;
var inst_29632 = (0);
var inst_29633 = (0);
var state_29770__$1 = (function (){var statearr_29824 = state_29770;
(statearr_29824[(7)] = inst_29632);

(statearr_29824[(8)] = inst_29630);

(statearr_29824[(9)] = inst_29633);

(statearr_29824[(10)] = inst_29631);

return statearr_29824;
})();
var statearr_29825_29895 = state_29770__$1;
(statearr_29825_29895[(2)] = null);

(statearr_29825_29895[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29771 === (23))){
var inst_29687 = (state_29770[(23)]);
var inst_29683 = (state_29770[(19)]);
var inst_29686 = (state_29770[(24)]);
var inst_29689 = (state_29770[(26)]);
var inst_29691 = (state_29770[(25)]);
var inst_29694 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_29696 = (function (){var all_files = inst_29683;
var res_SINGLEQUOTE_ = inst_29686;
var res = inst_29687;
var files_not_loaded = inst_29689;
var dependencies_that_loaded = inst_29691;
return (function (p__29695){
var map__29826 = p__29695;
var map__29826__$1 = (((((!((map__29826 == null))))?(((((map__29826.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29826.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29826):map__29826);
var request_url = cljs.core.get.call(null,map__29826__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
})();
var inst_29697 = cljs.core.reverse.call(null,inst_29691);
var inst_29698 = cljs.core.map.call(null,inst_29696,inst_29697);
var inst_29699 = cljs.core.pr_str.call(null,inst_29698);
var inst_29700 = figwheel.client.utils.log.call(null,inst_29699);
var state_29770__$1 = (function (){var statearr_29828 = state_29770;
(statearr_29828[(31)] = inst_29694);

return statearr_29828;
})();
var statearr_29829_29896 = state_29770__$1;
(statearr_29829_29896[(2)] = inst_29700);

(statearr_29829_29896[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29771 === (35))){
var state_29770__$1 = state_29770;
var statearr_29830_29897 = state_29770__$1;
(statearr_29830_29897[(2)] = true);

(statearr_29830_29897[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29771 === (19))){
var inst_29673 = (state_29770[(12)]);
var inst_29679 = figwheel.client.file_reloading.expand_files.call(null,inst_29673);
var state_29770__$1 = state_29770;
var statearr_29831_29898 = state_29770__$1;
(statearr_29831_29898[(2)] = inst_29679);

(statearr_29831_29898[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29771 === (11))){
var state_29770__$1 = state_29770;
var statearr_29832_29899 = state_29770__$1;
(statearr_29832_29899[(2)] = null);

(statearr_29832_29899[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29771 === (9))){
var inst_29662 = (state_29770[(2)]);
var state_29770__$1 = state_29770;
var statearr_29833_29900 = state_29770__$1;
(statearr_29833_29900[(2)] = inst_29662);

(statearr_29833_29900[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29771 === (5))){
var inst_29632 = (state_29770[(7)]);
var inst_29633 = (state_29770[(9)]);
var inst_29635 = (inst_29633 < inst_29632);
var inst_29636 = inst_29635;
var state_29770__$1 = state_29770;
if(cljs.core.truth_(inst_29636)){
var statearr_29834_29901 = state_29770__$1;
(statearr_29834_29901[(1)] = (7));

} else {
var statearr_29835_29902 = state_29770__$1;
(statearr_29835_29902[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29771 === (14))){
var inst_29643 = (state_29770[(22)]);
var inst_29652 = cljs.core.first.call(null,inst_29643);
var inst_29653 = figwheel.client.file_reloading.eval_body.call(null,inst_29652,opts);
var inst_29654 = cljs.core.next.call(null,inst_29643);
var inst_29630 = inst_29654;
var inst_29631 = null;
var inst_29632 = (0);
var inst_29633 = (0);
var state_29770__$1 = (function (){var statearr_29836 = state_29770;
(statearr_29836[(7)] = inst_29632);

(statearr_29836[(8)] = inst_29630);

(statearr_29836[(32)] = inst_29653);

(statearr_29836[(9)] = inst_29633);

(statearr_29836[(10)] = inst_29631);

return statearr_29836;
})();
var statearr_29837_29903 = state_29770__$1;
(statearr_29837_29903[(2)] = null);

(statearr_29837_29903[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29771 === (45))){
var state_29770__$1 = state_29770;
var statearr_29838_29904 = state_29770__$1;
(statearr_29838_29904[(2)] = null);

(statearr_29838_29904[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29771 === (26))){
var inst_29687 = (state_29770[(23)]);
var inst_29683 = (state_29770[(19)]);
var inst_29686 = (state_29770[(24)]);
var inst_29689 = (state_29770[(26)]);
var inst_29691 = (state_29770[(25)]);
var inst_29706 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_29708 = (function (){var all_files = inst_29683;
var res_SINGLEQUOTE_ = inst_29686;
var res = inst_29687;
var files_not_loaded = inst_29689;
var dependencies_that_loaded = inst_29691;
return (function (p__29707){
var map__29839 = p__29707;
var map__29839__$1 = (((((!((map__29839 == null))))?(((((map__29839.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29839.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29839):map__29839);
var namespace = cljs.core.get.call(null,map__29839__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__29839__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
})();
var inst_29709 = cljs.core.map.call(null,inst_29708,inst_29687);
var inst_29710 = cljs.core.pr_str.call(null,inst_29709);
var inst_29711 = figwheel.client.utils.log.call(null,inst_29710);
var inst_29712 = (function (){var all_files = inst_29683;
var res_SINGLEQUOTE_ = inst_29686;
var res = inst_29687;
var files_not_loaded = inst_29689;
var dependencies_that_loaded = inst_29691;
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
})();
var inst_29713 = setTimeout(inst_29712,(10));
var state_29770__$1 = (function (){var statearr_29841 = state_29770;
(statearr_29841[(33)] = inst_29706);

(statearr_29841[(34)] = inst_29711);

return statearr_29841;
})();
var statearr_29842_29905 = state_29770__$1;
(statearr_29842_29905[(2)] = inst_29713);

(statearr_29842_29905[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29771 === (16))){
var state_29770__$1 = state_29770;
var statearr_29843_29906 = state_29770__$1;
(statearr_29843_29906[(2)] = reload_dependents);

(statearr_29843_29906[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29771 === (38))){
var inst_29723 = (state_29770[(16)]);
var inst_29741 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29723);
var state_29770__$1 = state_29770;
var statearr_29844_29907 = state_29770__$1;
(statearr_29844_29907[(2)] = inst_29741);

(statearr_29844_29907[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29771 === (30))){
var state_29770__$1 = state_29770;
var statearr_29845_29908 = state_29770__$1;
(statearr_29845_29908[(2)] = null);

(statearr_29845_29908[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29771 === (10))){
var inst_29643 = (state_29770[(22)]);
var inst_29645 = cljs.core.chunked_seq_QMARK_.call(null,inst_29643);
var state_29770__$1 = state_29770;
if(inst_29645){
var statearr_29846_29909 = state_29770__$1;
(statearr_29846_29909[(1)] = (13));

} else {
var statearr_29847_29910 = state_29770__$1;
(statearr_29847_29910[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29771 === (18))){
var inst_29677 = (state_29770[(2)]);
var state_29770__$1 = state_29770;
if(cljs.core.truth_(inst_29677)){
var statearr_29848_29911 = state_29770__$1;
(statearr_29848_29911[(1)] = (19));

} else {
var statearr_29849_29912 = state_29770__$1;
(statearr_29849_29912[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29771 === (42))){
var state_29770__$1 = state_29770;
var statearr_29850_29913 = state_29770__$1;
(statearr_29850_29913[(2)] = null);

(statearr_29850_29913[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29771 === (37))){
var inst_29736 = (state_29770[(2)]);
var state_29770__$1 = state_29770;
var statearr_29851_29914 = state_29770__$1;
(statearr_29851_29914[(2)] = inst_29736);

(statearr_29851_29914[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29771 === (8))){
var inst_29630 = (state_29770[(8)]);
var inst_29643 = (state_29770[(22)]);
var inst_29643__$1 = cljs.core.seq.call(null,inst_29630);
var state_29770__$1 = (function (){var statearr_29852 = state_29770;
(statearr_29852[(22)] = inst_29643__$1);

return statearr_29852;
})();
if(inst_29643__$1){
var statearr_29853_29915 = state_29770__$1;
(statearr_29853_29915[(1)] = (10));

} else {
var statearr_29854_29916 = state_29770__$1;
(statearr_29854_29916[(1)] = (11));

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
var figwheel$client$file_reloading$reload_js_files_$_state_machine__27137__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__27137__auto____0 = (function (){
var statearr_29855 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29855[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__27137__auto__);

(statearr_29855[(1)] = (1));

return statearr_29855;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__27137__auto____1 = (function (state_29770){
while(true){
var ret_value__27138__auto__ = (function (){try{while(true){
var result__27139__auto__ = switch__27136__auto__.call(null,state_29770);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27139__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27139__auto__;
}
break;
}
}catch (e29856){if((e29856 instanceof Object)){
var ex__27140__auto__ = e29856;
var statearr_29857_29917 = state_29770;
(statearr_29857_29917[(5)] = ex__27140__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29770);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29856;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27138__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29918 = state_29770;
state_29770 = G__29918;
continue;
} else {
return ret_value__27138__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__27137__auto__ = function(state_29770){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__27137__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__27137__auto____1.call(this,state_29770);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__27137__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__27137__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__27137__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__27137__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__27137__auto__;
})()
})();
var state__27233__auto__ = (function (){var statearr_29858 = f__27232__auto__.call(null);
(statearr_29858[(6)] = c__27231__auto__);

return statearr_29858;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27233__auto__);
}));

return c__27231__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__29921,link){
var map__29922 = p__29921;
var map__29922__$1 = (((((!((map__29922 == null))))?(((((map__29922.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29922.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29922):map__29922);
var file = cljs.core.get.call(null,map__29922__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5720__auto__ = link.href;
if(cljs.core.truth_(temp__5720__auto__)){
var link_href = temp__5720__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,(function (p1__29919_SHARP_,p2__29920_SHARP_){
if(cljs.core._EQ_.call(null,p1__29919_SHARP_,p2__29920_SHARP_)){
return p1__29919_SHARP_;
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
var temp__5720__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__29925){
var map__29926 = p__29925;
var map__29926__$1 = (((((!((map__29926 == null))))?(((((map__29926.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29926.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29926):map__29926);
var match_length = cljs.core.get.call(null,map__29926__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__29926__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__29924_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__29924_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__29928_SHARP_,p2__29929_SHARP_){
return cljs.core.assoc.call(null,p1__29928_SHARP_,cljs.core.get.call(null,p2__29929_SHARP_,key),p2__29929_SHARP_);
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
var loaded_f_datas_29930 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_29930);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_29930);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__29931,p__29932){
var map__29933 = p__29931;
var map__29933__$1 = (((((!((map__29933 == null))))?(((((map__29933.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29933.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29933):map__29933);
var on_cssload = cljs.core.get.call(null,map__29933__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__29934 = p__29932;
var map__29934__$1 = (((((!((map__29934 == null))))?(((((map__29934.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29934.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29934):map__29934);
var files_msg = map__29934__$1;
var files = cljs.core.get.call(null,map__29934__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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

//# sourceMappingURL=file_reloading.js.map?rel=1605638685882
