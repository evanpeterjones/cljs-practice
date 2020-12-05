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
var G__29189 = goog.object.get(goog.debugLoader_.dependencies_,path);
if((G__29189 == null)){
return null;
} else {
return goog.object.get(G__29189,"requires");
}
}):(function (path){
var G__29190 = goog.object.get(goog.dependencies_.requires,path);
if((G__29190 == null)){
return null;
} else {
return goog.object.getKeys(G__29190);
}
}));
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__29191_SHARP_){
return (!(figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__29191_SHARP_)));
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
var G__29192 = goog.object.get(goog.debugLoader_.dependencies_,path);
var G__29192__$1 = (((G__29192 == null))?null:goog.object.get(G__29192,"provides"));
if((G__29192__$1 == null)){
return null;
} else {
return cljs.core.set.call(null,G__29192__$1);
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
var seq__29193 = cljs.core.seq.call(null,provides);
var chunk__29194 = null;
var count__29195 = (0);
var i__29196 = (0);
while(true){
if((i__29196 < count__29195)){
var prov = cljs.core._nth.call(null,chunk__29194,i__29196);
var seq__29205_29217 = cljs.core.seq.call(null,requires);
var chunk__29206_29218 = null;
var count__29207_29219 = (0);
var i__29208_29220 = (0);
while(true){
if((i__29208_29220 < count__29207_29219)){
var req_29221 = cljs.core._nth.call(null,chunk__29206_29218,i__29208_29220);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29221,prov);


var G__29222 = seq__29205_29217;
var G__29223 = chunk__29206_29218;
var G__29224 = count__29207_29219;
var G__29225 = (i__29208_29220 + (1));
seq__29205_29217 = G__29222;
chunk__29206_29218 = G__29223;
count__29207_29219 = G__29224;
i__29208_29220 = G__29225;
continue;
} else {
var temp__5720__auto___29226 = cljs.core.seq.call(null,seq__29205_29217);
if(temp__5720__auto___29226){
var seq__29205_29227__$1 = temp__5720__auto___29226;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29205_29227__$1)){
var c__4556__auto___29228 = cljs.core.chunk_first.call(null,seq__29205_29227__$1);
var G__29229 = cljs.core.chunk_rest.call(null,seq__29205_29227__$1);
var G__29230 = c__4556__auto___29228;
var G__29231 = cljs.core.count.call(null,c__4556__auto___29228);
var G__29232 = (0);
seq__29205_29217 = G__29229;
chunk__29206_29218 = G__29230;
count__29207_29219 = G__29231;
i__29208_29220 = G__29232;
continue;
} else {
var req_29233 = cljs.core.first.call(null,seq__29205_29227__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29233,prov);


var G__29234 = cljs.core.next.call(null,seq__29205_29227__$1);
var G__29235 = null;
var G__29236 = (0);
var G__29237 = (0);
seq__29205_29217 = G__29234;
chunk__29206_29218 = G__29235;
count__29207_29219 = G__29236;
i__29208_29220 = G__29237;
continue;
}
} else {
}
}
break;
}


var G__29238 = seq__29193;
var G__29239 = chunk__29194;
var G__29240 = count__29195;
var G__29241 = (i__29196 + (1));
seq__29193 = G__29238;
chunk__29194 = G__29239;
count__29195 = G__29240;
i__29196 = G__29241;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__29193);
if(temp__5720__auto__){
var seq__29193__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29193__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__29193__$1);
var G__29242 = cljs.core.chunk_rest.call(null,seq__29193__$1);
var G__29243 = c__4556__auto__;
var G__29244 = cljs.core.count.call(null,c__4556__auto__);
var G__29245 = (0);
seq__29193 = G__29242;
chunk__29194 = G__29243;
count__29195 = G__29244;
i__29196 = G__29245;
continue;
} else {
var prov = cljs.core.first.call(null,seq__29193__$1);
var seq__29209_29246 = cljs.core.seq.call(null,requires);
var chunk__29210_29247 = null;
var count__29211_29248 = (0);
var i__29212_29249 = (0);
while(true){
if((i__29212_29249 < count__29211_29248)){
var req_29250 = cljs.core._nth.call(null,chunk__29210_29247,i__29212_29249);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29250,prov);


var G__29251 = seq__29209_29246;
var G__29252 = chunk__29210_29247;
var G__29253 = count__29211_29248;
var G__29254 = (i__29212_29249 + (1));
seq__29209_29246 = G__29251;
chunk__29210_29247 = G__29252;
count__29211_29248 = G__29253;
i__29212_29249 = G__29254;
continue;
} else {
var temp__5720__auto___29255__$1 = cljs.core.seq.call(null,seq__29209_29246);
if(temp__5720__auto___29255__$1){
var seq__29209_29256__$1 = temp__5720__auto___29255__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29209_29256__$1)){
var c__4556__auto___29257 = cljs.core.chunk_first.call(null,seq__29209_29256__$1);
var G__29258 = cljs.core.chunk_rest.call(null,seq__29209_29256__$1);
var G__29259 = c__4556__auto___29257;
var G__29260 = cljs.core.count.call(null,c__4556__auto___29257);
var G__29261 = (0);
seq__29209_29246 = G__29258;
chunk__29210_29247 = G__29259;
count__29211_29248 = G__29260;
i__29212_29249 = G__29261;
continue;
} else {
var req_29262 = cljs.core.first.call(null,seq__29209_29256__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29262,prov);


var G__29263 = cljs.core.next.call(null,seq__29209_29256__$1);
var G__29264 = null;
var G__29265 = (0);
var G__29266 = (0);
seq__29209_29246 = G__29263;
chunk__29210_29247 = G__29264;
count__29211_29248 = G__29265;
i__29212_29249 = G__29266;
continue;
}
} else {
}
}
break;
}


var G__29267 = cljs.core.next.call(null,seq__29193__$1);
var G__29268 = null;
var G__29269 = (0);
var G__29270 = (0);
seq__29193 = G__29267;
chunk__29194 = G__29268;
count__29195 = G__29269;
i__29196 = G__29270;
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
var seq__29213 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,path));
var chunk__29214 = null;
var count__29215 = (0);
var i__29216 = (0);
while(true){
if((i__29216 < count__29215)){
var prov = cljs.core._nth.call(null,chunk__29214,i__29216);
goog.object.forEach(deps,((function (seq__29213,chunk__29214,count__29215,i__29216,prov,requires){
return (function (___$1,req,___$2){
return figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req,prov);
});})(seq__29213,chunk__29214,count__29215,i__29216,prov,requires))
);


var G__29271 = seq__29213;
var G__29272 = chunk__29214;
var G__29273 = count__29215;
var G__29274 = (i__29216 + (1));
seq__29213 = G__29271;
chunk__29214 = G__29272;
count__29215 = G__29273;
i__29216 = G__29274;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__29213);
if(temp__5720__auto__){
var seq__29213__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29213__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__29213__$1);
var G__29275 = cljs.core.chunk_rest.call(null,seq__29213__$1);
var G__29276 = c__4556__auto__;
var G__29277 = cljs.core.count.call(null,c__4556__auto__);
var G__29278 = (0);
seq__29213 = G__29275;
chunk__29214 = G__29276;
count__29215 = G__29277;
i__29216 = G__29278;
continue;
} else {
var prov = cljs.core.first.call(null,seq__29213__$1);
goog.object.forEach(deps,((function (seq__29213,chunk__29214,count__29215,i__29216,prov,seq__29213__$1,temp__5720__auto__,requires){
return (function (___$1,req,___$2){
return figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req,prov);
});})(seq__29213,chunk__29214,count__29215,i__29216,prov,seq__29213__$1,temp__5720__auto__,requires))
);


var G__29279 = cljs.core.next.call(null,seq__29213__$1);
var G__29280 = null;
var G__29281 = (0);
var G__29282 = (0);
seq__29213 = G__29279;
chunk__29214 = G__29280;
count__29215 = G__29281;
i__29216 = G__29282;
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
return cljs.core.some.call(null,(function (p__29283){
var vec__29284 = p__29283;
var _ = cljs.core.nth.call(null,vec__29284,(0),null);
var v = cljs.core.nth.call(null,vec__29284,(1),null);
var and__4115__auto__ = v;
if(cljs.core.truth_(and__4115__auto__)){
return v.call(null,dep);
} else {
return and__4115__auto__;
}
}),cljs.core.filter.call(null,(function (p__29287){
var vec__29288 = p__29287;
var k = cljs.core.nth.call(null,vec__29288,(0),null);
var v = cljs.core.nth.call(null,vec__29288,(1),null);
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

var seq__29300_29308 = cljs.core.seq.call(null,deps);
var chunk__29301_29309 = null;
var count__29302_29310 = (0);
var i__29303_29311 = (0);
while(true){
if((i__29303_29311 < count__29302_29310)){
var dep_29312 = cljs.core._nth.call(null,chunk__29301_29309,i__29303_29311);
if(cljs.core.truth_((function (){var and__4115__auto__ = dep_29312;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_29312));
} else {
return and__4115__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_29312,(depth + (1)),state);
} else {
}


var G__29313 = seq__29300_29308;
var G__29314 = chunk__29301_29309;
var G__29315 = count__29302_29310;
var G__29316 = (i__29303_29311 + (1));
seq__29300_29308 = G__29313;
chunk__29301_29309 = G__29314;
count__29302_29310 = G__29315;
i__29303_29311 = G__29316;
continue;
} else {
var temp__5720__auto___29317 = cljs.core.seq.call(null,seq__29300_29308);
if(temp__5720__auto___29317){
var seq__29300_29318__$1 = temp__5720__auto___29317;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29300_29318__$1)){
var c__4556__auto___29319 = cljs.core.chunk_first.call(null,seq__29300_29318__$1);
var G__29320 = cljs.core.chunk_rest.call(null,seq__29300_29318__$1);
var G__29321 = c__4556__auto___29319;
var G__29322 = cljs.core.count.call(null,c__4556__auto___29319);
var G__29323 = (0);
seq__29300_29308 = G__29320;
chunk__29301_29309 = G__29321;
count__29302_29310 = G__29322;
i__29303_29311 = G__29323;
continue;
} else {
var dep_29324 = cljs.core.first.call(null,seq__29300_29318__$1);
if(cljs.core.truth_((function (){var and__4115__auto__ = dep_29324;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_29324));
} else {
return and__4115__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_29324,(depth + (1)),state);
} else {
}


var G__29325 = cljs.core.next.call(null,seq__29300_29318__$1);
var G__29326 = null;
var G__29327 = (0);
var G__29328 = (0);
seq__29300_29308 = G__29325;
chunk__29301_29309 = G__29326;
count__29302_29310 = G__29327;
i__29303_29311 = G__29328;
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
var elim_dups_STAR_ = (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__29304){
var vec__29305 = p__29304;
var seq__29306 = cljs.core.seq.call(null,vec__29305);
var first__29307 = cljs.core.first.call(null,seq__29306);
var seq__29306__$1 = cljs.core.next.call(null,seq__29306);
var x = first__29307;
var xs = seq__29306__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,(function (p1__29291_SHARP_){
return clojure.set.difference.call(null,p1__29291_SHARP_,x);
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
figwheel.client.file_reloading.resolve_ns = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?figwheel.client.file_reloading.name__GT_path:(function (p1__29329_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,p1__29329_SHARP_))].join('');
}));
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__29330 = cljs.core.seq.call(null,provides);
var chunk__29331 = null;
var count__29332 = (0);
var i__29333 = (0);
while(true){
if((i__29333 < count__29332)){
var prov = cljs.core._nth.call(null,chunk__29331,i__29333);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__29342_29350 = cljs.core.seq.call(null,requires);
var chunk__29343_29351 = null;
var count__29344_29352 = (0);
var i__29345_29353 = (0);
while(true){
if((i__29345_29353 < count__29344_29352)){
var req_29354 = cljs.core._nth.call(null,chunk__29343_29351,i__29345_29353);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29354,prov);


var G__29355 = seq__29342_29350;
var G__29356 = chunk__29343_29351;
var G__29357 = count__29344_29352;
var G__29358 = (i__29345_29353 + (1));
seq__29342_29350 = G__29355;
chunk__29343_29351 = G__29356;
count__29344_29352 = G__29357;
i__29345_29353 = G__29358;
continue;
} else {
var temp__5720__auto___29359 = cljs.core.seq.call(null,seq__29342_29350);
if(temp__5720__auto___29359){
var seq__29342_29360__$1 = temp__5720__auto___29359;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29342_29360__$1)){
var c__4556__auto___29361 = cljs.core.chunk_first.call(null,seq__29342_29360__$1);
var G__29362 = cljs.core.chunk_rest.call(null,seq__29342_29360__$1);
var G__29363 = c__4556__auto___29361;
var G__29364 = cljs.core.count.call(null,c__4556__auto___29361);
var G__29365 = (0);
seq__29342_29350 = G__29362;
chunk__29343_29351 = G__29363;
count__29344_29352 = G__29364;
i__29345_29353 = G__29365;
continue;
} else {
var req_29366 = cljs.core.first.call(null,seq__29342_29360__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29366,prov);


var G__29367 = cljs.core.next.call(null,seq__29342_29360__$1);
var G__29368 = null;
var G__29369 = (0);
var G__29370 = (0);
seq__29342_29350 = G__29367;
chunk__29343_29351 = G__29368;
count__29344_29352 = G__29369;
i__29345_29353 = G__29370;
continue;
}
} else {
}
}
break;
}


var G__29371 = seq__29330;
var G__29372 = chunk__29331;
var G__29373 = count__29332;
var G__29374 = (i__29333 + (1));
seq__29330 = G__29371;
chunk__29331 = G__29372;
count__29332 = G__29373;
i__29333 = G__29374;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__29330);
if(temp__5720__auto__){
var seq__29330__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29330__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__29330__$1);
var G__29375 = cljs.core.chunk_rest.call(null,seq__29330__$1);
var G__29376 = c__4556__auto__;
var G__29377 = cljs.core.count.call(null,c__4556__auto__);
var G__29378 = (0);
seq__29330 = G__29375;
chunk__29331 = G__29376;
count__29332 = G__29377;
i__29333 = G__29378;
continue;
} else {
var prov = cljs.core.first.call(null,seq__29330__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__29346_29379 = cljs.core.seq.call(null,requires);
var chunk__29347_29380 = null;
var count__29348_29381 = (0);
var i__29349_29382 = (0);
while(true){
if((i__29349_29382 < count__29348_29381)){
var req_29383 = cljs.core._nth.call(null,chunk__29347_29380,i__29349_29382);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29383,prov);


var G__29384 = seq__29346_29379;
var G__29385 = chunk__29347_29380;
var G__29386 = count__29348_29381;
var G__29387 = (i__29349_29382 + (1));
seq__29346_29379 = G__29384;
chunk__29347_29380 = G__29385;
count__29348_29381 = G__29386;
i__29349_29382 = G__29387;
continue;
} else {
var temp__5720__auto___29388__$1 = cljs.core.seq.call(null,seq__29346_29379);
if(temp__5720__auto___29388__$1){
var seq__29346_29389__$1 = temp__5720__auto___29388__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29346_29389__$1)){
var c__4556__auto___29390 = cljs.core.chunk_first.call(null,seq__29346_29389__$1);
var G__29391 = cljs.core.chunk_rest.call(null,seq__29346_29389__$1);
var G__29392 = c__4556__auto___29390;
var G__29393 = cljs.core.count.call(null,c__4556__auto___29390);
var G__29394 = (0);
seq__29346_29379 = G__29391;
chunk__29347_29380 = G__29392;
count__29348_29381 = G__29393;
i__29349_29382 = G__29394;
continue;
} else {
var req_29395 = cljs.core.first.call(null,seq__29346_29389__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29395,prov);


var G__29396 = cljs.core.next.call(null,seq__29346_29389__$1);
var G__29397 = null;
var G__29398 = (0);
var G__29399 = (0);
seq__29346_29379 = G__29396;
chunk__29347_29380 = G__29397;
count__29348_29381 = G__29398;
i__29349_29382 = G__29399;
continue;
}
} else {
}
}
break;
}


var G__29400 = cljs.core.next.call(null,seq__29330__$1);
var G__29401 = null;
var G__29402 = (0);
var G__29403 = (0);
seq__29330 = G__29400;
chunk__29331 = G__29401;
count__29332 = G__29402;
i__29333 = G__29403;
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
var seq__29404_29408 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__29405_29409 = null;
var count__29406_29410 = (0);
var i__29407_29411 = (0);
while(true){
if((i__29407_29411 < count__29406_29410)){
var ns_29412 = cljs.core._nth.call(null,chunk__29405_29409,i__29407_29411);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_29412);


var G__29413 = seq__29404_29408;
var G__29414 = chunk__29405_29409;
var G__29415 = count__29406_29410;
var G__29416 = (i__29407_29411 + (1));
seq__29404_29408 = G__29413;
chunk__29405_29409 = G__29414;
count__29406_29410 = G__29415;
i__29407_29411 = G__29416;
continue;
} else {
var temp__5720__auto___29417 = cljs.core.seq.call(null,seq__29404_29408);
if(temp__5720__auto___29417){
var seq__29404_29418__$1 = temp__5720__auto___29417;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29404_29418__$1)){
var c__4556__auto___29419 = cljs.core.chunk_first.call(null,seq__29404_29418__$1);
var G__29420 = cljs.core.chunk_rest.call(null,seq__29404_29418__$1);
var G__29421 = c__4556__auto___29419;
var G__29422 = cljs.core.count.call(null,c__4556__auto___29419);
var G__29423 = (0);
seq__29404_29408 = G__29420;
chunk__29405_29409 = G__29421;
count__29406_29410 = G__29422;
i__29407_29411 = G__29423;
continue;
} else {
var ns_29424 = cljs.core.first.call(null,seq__29404_29418__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_29424);


var G__29425 = cljs.core.next.call(null,seq__29404_29418__$1);
var G__29426 = null;
var G__29427 = (0);
var G__29428 = (0);
seq__29404_29408 = G__29425;
chunk__29405_29409 = G__29426;
count__29406_29410 = G__29427;
i__29407_29411 = G__29428;
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
var G__29429__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__29429 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29430__i = 0, G__29430__a = new Array(arguments.length -  0);
while (G__29430__i < G__29430__a.length) {G__29430__a[G__29430__i] = arguments[G__29430__i + 0]; ++G__29430__i;}
  args = new cljs.core.IndexedSeq(G__29430__a,0,null);
} 
return G__29429__delegate.call(this,args);};
G__29429.cljs$lang$maxFixedArity = 0;
G__29429.cljs$lang$applyTo = (function (arglist__29431){
var args = cljs.core.seq(arglist__29431);
return G__29429__delegate(args);
});
G__29429.cljs$core$IFn$_invoke$arity$variadic = G__29429__delegate;
return G__29429;
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
figwheel.client.file_reloading.gloader = (((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoad !== 'undefined'))?(function (p1__29432_SHARP_,p2__29433_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__29432_SHARP_)),p2__29433_SHARP_);
}):(((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.load !== 'undefined'))?(function (p1__29434_SHARP_,p2__29435_SHARP_){
return goog.net.jsloader.load(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__29434_SHARP_),p2__29435_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__29436 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__29436.addCallback((function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
}));

G__29436.addErrback((function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
}));

return G__29436;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e29437){if((e29437 instanceof Error)){
var e = e29437;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e29437;

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
}catch (e29438){if((e29438 instanceof Error)){
var e = e29438;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e29438;

}
}})());
});
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__29439 = cljs.core._EQ_;
var expr__29440 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__29439.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__29440))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__29439.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__29440))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__29439.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__29440))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return (function (a,b){
throw "Reload not defined for this platform";
});
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__29442,callback){
var map__29443 = p__29442;
var map__29443__$1 = (((((!((map__29443 == null))))?(((((map__29443.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29443.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29443):map__29443);
var file_msg = map__29443__$1;
var request_url = cljs.core.get.call(null,map__29443__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

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
figwheel.client.file_reloading.reloader_loop = (function (){var c__27064__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27065__auto__ = (function (){var switch__26969__auto__ = (function (state_29481){
var state_val_29482 = (state_29481[(1)]);
if((state_val_29482 === (7))){
var inst_29477 = (state_29481[(2)]);
var state_29481__$1 = state_29481;
var statearr_29483_29509 = state_29481__$1;
(statearr_29483_29509[(2)] = inst_29477);

(statearr_29483_29509[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29482 === (1))){
var state_29481__$1 = state_29481;
var statearr_29484_29510 = state_29481__$1;
(statearr_29484_29510[(2)] = null);

(statearr_29484_29510[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29482 === (4))){
var inst_29447 = (state_29481[(7)]);
var inst_29447__$1 = (state_29481[(2)]);
var state_29481__$1 = (function (){var statearr_29485 = state_29481;
(statearr_29485[(7)] = inst_29447__$1);

return statearr_29485;
})();
if(cljs.core.truth_(inst_29447__$1)){
var statearr_29486_29511 = state_29481__$1;
(statearr_29486_29511[(1)] = (5));

} else {
var statearr_29487_29512 = state_29481__$1;
(statearr_29487_29512[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29482 === (15))){
var inst_29462 = (state_29481[(8)]);
var inst_29460 = (state_29481[(9)]);
var inst_29464 = inst_29462.call(null,inst_29460);
var state_29481__$1 = state_29481;
var statearr_29488_29513 = state_29481__$1;
(statearr_29488_29513[(2)] = inst_29464);

(statearr_29488_29513[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29482 === (13))){
var inst_29471 = (state_29481[(2)]);
var state_29481__$1 = state_29481;
var statearr_29489_29514 = state_29481__$1;
(statearr_29489_29514[(2)] = inst_29471);

(statearr_29489_29514[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29482 === (6))){
var state_29481__$1 = state_29481;
var statearr_29490_29515 = state_29481__$1;
(statearr_29490_29515[(2)] = null);

(statearr_29490_29515[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29482 === (17))){
var inst_29468 = (state_29481[(2)]);
var state_29481__$1 = state_29481;
var statearr_29491_29516 = state_29481__$1;
(statearr_29491_29516[(2)] = inst_29468);

(statearr_29491_29516[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29482 === (3))){
var inst_29479 = (state_29481[(2)]);
var state_29481__$1 = state_29481;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29481__$1,inst_29479);
} else {
if((state_val_29482 === (12))){
var state_29481__$1 = state_29481;
var statearr_29492_29517 = state_29481__$1;
(statearr_29492_29517[(2)] = null);

(statearr_29492_29517[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29482 === (2))){
var state_29481__$1 = state_29481;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29481__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_29482 === (11))){
var inst_29452 = (state_29481[(10)]);
var inst_29458 = figwheel.client.file_reloading.blocking_load.call(null,inst_29452);
var state_29481__$1 = state_29481;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29481__$1,(14),inst_29458);
} else {
if((state_val_29482 === (9))){
var inst_29452 = (state_29481[(10)]);
var state_29481__$1 = state_29481;
if(cljs.core.truth_(inst_29452)){
var statearr_29493_29518 = state_29481__$1;
(statearr_29493_29518[(1)] = (11));

} else {
var statearr_29494_29519 = state_29481__$1;
(statearr_29494_29519[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29482 === (5))){
var inst_29453 = (state_29481[(11)]);
var inst_29447 = (state_29481[(7)]);
var inst_29452 = cljs.core.nth.call(null,inst_29447,(0),null);
var inst_29453__$1 = cljs.core.nth.call(null,inst_29447,(1),null);
var state_29481__$1 = (function (){var statearr_29495 = state_29481;
(statearr_29495[(11)] = inst_29453__$1);

(statearr_29495[(10)] = inst_29452);

return statearr_29495;
})();
if(cljs.core.truth_(inst_29453__$1)){
var statearr_29496_29520 = state_29481__$1;
(statearr_29496_29520[(1)] = (8));

} else {
var statearr_29497_29521 = state_29481__$1;
(statearr_29497_29521[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29482 === (14))){
var inst_29462 = (state_29481[(8)]);
var inst_29452 = (state_29481[(10)]);
var inst_29460 = (state_29481[(2)]);
var inst_29461 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_29462__$1 = cljs.core.get.call(null,inst_29461,inst_29452);
var state_29481__$1 = (function (){var statearr_29498 = state_29481;
(statearr_29498[(8)] = inst_29462__$1);

(statearr_29498[(9)] = inst_29460);

return statearr_29498;
})();
if(cljs.core.truth_(inst_29462__$1)){
var statearr_29499_29522 = state_29481__$1;
(statearr_29499_29522[(1)] = (15));

} else {
var statearr_29500_29523 = state_29481__$1;
(statearr_29500_29523[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29482 === (16))){
var inst_29460 = (state_29481[(9)]);
var inst_29466 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_29460);
var state_29481__$1 = state_29481;
var statearr_29501_29524 = state_29481__$1;
(statearr_29501_29524[(2)] = inst_29466);

(statearr_29501_29524[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29482 === (10))){
var inst_29473 = (state_29481[(2)]);
var state_29481__$1 = (function (){var statearr_29502 = state_29481;
(statearr_29502[(12)] = inst_29473);

return statearr_29502;
})();
var statearr_29503_29525 = state_29481__$1;
(statearr_29503_29525[(2)] = null);

(statearr_29503_29525[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29482 === (8))){
var inst_29453 = (state_29481[(11)]);
var inst_29455 = eval(inst_29453);
var state_29481__$1 = state_29481;
var statearr_29504_29526 = state_29481__$1;
(statearr_29504_29526[(2)] = inst_29455);

(statearr_29504_29526[(1)] = (10));


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
var figwheel$client$file_reloading$state_machine__26970__auto__ = null;
var figwheel$client$file_reloading$state_machine__26970__auto____0 = (function (){
var statearr_29505 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29505[(0)] = figwheel$client$file_reloading$state_machine__26970__auto__);

(statearr_29505[(1)] = (1));

return statearr_29505;
});
var figwheel$client$file_reloading$state_machine__26970__auto____1 = (function (state_29481){
while(true){
var ret_value__26971__auto__ = (function (){try{while(true){
var result__26972__auto__ = switch__26969__auto__.call(null,state_29481);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26972__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26972__auto__;
}
break;
}
}catch (e29506){if((e29506 instanceof Object)){
var ex__26973__auto__ = e29506;
var statearr_29507_29527 = state_29481;
(statearr_29507_29527[(5)] = ex__26973__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29481);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29506;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26971__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29528 = state_29481;
state_29481 = G__29528;
continue;
} else {
return ret_value__26971__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__26970__auto__ = function(state_29481){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__26970__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__26970__auto____1.call(this,state_29481);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__26970__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__26970__auto____0;
figwheel$client$file_reloading$state_machine__26970__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__26970__auto____1;
return figwheel$client$file_reloading$state_machine__26970__auto__;
})()
})();
var state__27066__auto__ = (function (){var statearr_29508 = f__27065__auto__.call(null);
(statearr_29508[(6)] = c__27064__auto__);

return statearr_29508;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27066__auto__);
}));

return c__27064__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__29530 = arguments.length;
switch (G__29530) {
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

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__29532,callback){
var map__29533 = p__29532;
var map__29533__$1 = (((((!((map__29533 == null))))?(((((map__29533.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29533.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29533):map__29533);
var file_msg = map__29533__$1;
var namespace = cljs.core.get.call(null,map__29533__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,(function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
}));

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__29535){
var map__29536 = p__29535;
var map__29536__$1 = (((((!((map__29536 == null))))?(((((map__29536.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29536.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29536):map__29536);
var file_msg = map__29536__$1;
var namespace = cljs.core.get.call(null,map__29536__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return (!((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null)));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__29538){
var map__29539 = p__29538;
var map__29539__$1 = (((((!((map__29539 == null))))?(((((map__29539.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29539.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29539):map__29539);
var file_msg = map__29539__$1;
var namespace = cljs.core.get.call(null,map__29539__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__29541,callback){
var map__29542 = p__29541;
var map__29542__$1 = (((((!((map__29542 == null))))?(((((map__29542.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29542.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29542):map__29542);
var file_msg = map__29542__$1;
var request_url = cljs.core.get.call(null,map__29542__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__29542__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__27064__auto___29592 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27065__auto__ = (function (){var switch__26969__auto__ = (function (state_29577){
var state_val_29578 = (state_29577[(1)]);
if((state_val_29578 === (1))){
var inst_29551 = cljs.core.seq.call(null,files);
var inst_29552 = cljs.core.first.call(null,inst_29551);
var inst_29553 = cljs.core.next.call(null,inst_29551);
var inst_29554 = files;
var state_29577__$1 = (function (){var statearr_29579 = state_29577;
(statearr_29579[(7)] = inst_29552);

(statearr_29579[(8)] = inst_29554);

(statearr_29579[(9)] = inst_29553);

return statearr_29579;
})();
var statearr_29580_29593 = state_29577__$1;
(statearr_29580_29593[(2)] = null);

(statearr_29580_29593[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29578 === (2))){
var inst_29554 = (state_29577[(8)]);
var inst_29560 = (state_29577[(10)]);
var inst_29559 = cljs.core.seq.call(null,inst_29554);
var inst_29560__$1 = cljs.core.first.call(null,inst_29559);
var inst_29561 = cljs.core.next.call(null,inst_29559);
var inst_29562 = (inst_29560__$1 == null);
var inst_29563 = cljs.core.not.call(null,inst_29562);
var state_29577__$1 = (function (){var statearr_29581 = state_29577;
(statearr_29581[(10)] = inst_29560__$1);

(statearr_29581[(11)] = inst_29561);

return statearr_29581;
})();
if(inst_29563){
var statearr_29582_29594 = state_29577__$1;
(statearr_29582_29594[(1)] = (4));

} else {
var statearr_29583_29595 = state_29577__$1;
(statearr_29583_29595[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29578 === (3))){
var inst_29575 = (state_29577[(2)]);
var state_29577__$1 = state_29577;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29577__$1,inst_29575);
} else {
if((state_val_29578 === (4))){
var inst_29560 = (state_29577[(10)]);
var inst_29565 = figwheel.client.file_reloading.reload_js_file.call(null,inst_29560);
var state_29577__$1 = state_29577;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29577__$1,(7),inst_29565);
} else {
if((state_val_29578 === (5))){
var inst_29571 = cljs.core.async.close_BANG_.call(null,out);
var state_29577__$1 = state_29577;
var statearr_29584_29596 = state_29577__$1;
(statearr_29584_29596[(2)] = inst_29571);

(statearr_29584_29596[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29578 === (6))){
var inst_29573 = (state_29577[(2)]);
var state_29577__$1 = state_29577;
var statearr_29585_29597 = state_29577__$1;
(statearr_29585_29597[(2)] = inst_29573);

(statearr_29585_29597[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29578 === (7))){
var inst_29561 = (state_29577[(11)]);
var inst_29567 = (state_29577[(2)]);
var inst_29568 = cljs.core.async.put_BANG_.call(null,out,inst_29567);
var inst_29554 = inst_29561;
var state_29577__$1 = (function (){var statearr_29586 = state_29577;
(statearr_29586[(8)] = inst_29554);

(statearr_29586[(12)] = inst_29568);

return statearr_29586;
})();
var statearr_29587_29598 = state_29577__$1;
(statearr_29587_29598[(2)] = null);

(statearr_29587_29598[(1)] = (2));


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
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__26970__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__26970__auto____0 = (function (){
var statearr_29588 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29588[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__26970__auto__);

(statearr_29588[(1)] = (1));

return statearr_29588;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__26970__auto____1 = (function (state_29577){
while(true){
var ret_value__26971__auto__ = (function (){try{while(true){
var result__26972__auto__ = switch__26969__auto__.call(null,state_29577);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26972__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26972__auto__;
}
break;
}
}catch (e29589){if((e29589 instanceof Object)){
var ex__26973__auto__ = e29589;
var statearr_29590_29599 = state_29577;
(statearr_29590_29599[(5)] = ex__26973__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29577);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29589;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26971__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29600 = state_29577;
state_29577 = G__29600;
continue;
} else {
return ret_value__26971__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__26970__auto__ = function(state_29577){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__26970__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__26970__auto____1.call(this,state_29577);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__26970__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__26970__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__26970__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__26970__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__26970__auto__;
})()
})();
var state__27066__auto__ = (function (){var statearr_29591 = f__27065__auto__.call(null);
(statearr_29591[(6)] = c__27064__auto___29592);

return statearr_29591;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27066__auto__);
}));


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__29601,opts){
var map__29602 = p__29601;
var map__29602__$1 = (((((!((map__29602 == null))))?(((((map__29602.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29602.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29602):map__29602);
var eval_body = cljs.core.get.call(null,map__29602__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__29602__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e29604){var e = e29604;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,(function (n){
var temp__5718__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__29605_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__29605_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__29606){
var vec__29607 = p__29606;
var k = cljs.core.nth.call(null,vec__29607,(0),null);
var v = cljs.core.nth.call(null,vec__29607,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__29610){
var vec__29611 = p__29610;
var k = cljs.core.nth.call(null,vec__29611,(0),null);
var v = cljs.core.nth.call(null,vec__29611,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__29617,p__29618){
var map__29619 = p__29617;
var map__29619__$1 = (((((!((map__29619 == null))))?(((((map__29619.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29619.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29619):map__29619);
var opts = map__29619__$1;
var before_jsload = cljs.core.get.call(null,map__29619__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__29619__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__29619__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__29620 = p__29618;
var map__29620__$1 = (((((!((map__29620 == null))))?(((((map__29620.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29620.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29620):map__29620);
var msg = map__29620__$1;
var files = cljs.core.get.call(null,map__29620__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__29620__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__29620__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__27064__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27065__auto__ = (function (){var switch__26969__auto__ = (function (state_29774){
var state_val_29775 = (state_29774[(1)]);
if((state_val_29775 === (7))){
var inst_29635 = (state_29774[(7)]);
var inst_29636 = (state_29774[(8)]);
var inst_29637 = (state_29774[(9)]);
var inst_29634 = (state_29774[(10)]);
var inst_29642 = cljs.core._nth.call(null,inst_29635,inst_29637);
var inst_29643 = figwheel.client.file_reloading.eval_body.call(null,inst_29642,opts);
var inst_29644 = (inst_29637 + (1));
var tmp29776 = inst_29635;
var tmp29777 = inst_29636;
var tmp29778 = inst_29634;
var inst_29634__$1 = tmp29778;
var inst_29635__$1 = tmp29776;
var inst_29636__$1 = tmp29777;
var inst_29637__$1 = inst_29644;
var state_29774__$1 = (function (){var statearr_29779 = state_29774;
(statearr_29779[(7)] = inst_29635__$1);

(statearr_29779[(8)] = inst_29636__$1);

(statearr_29779[(9)] = inst_29637__$1);

(statearr_29779[(11)] = inst_29643);

(statearr_29779[(10)] = inst_29634__$1);

return statearr_29779;
})();
var statearr_29780_29863 = state_29774__$1;
(statearr_29780_29863[(2)] = null);

(statearr_29780_29863[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29775 === (20))){
var inst_29677 = (state_29774[(12)]);
var inst_29685 = figwheel.client.file_reloading.sort_files.call(null,inst_29677);
var state_29774__$1 = state_29774;
var statearr_29781_29864 = state_29774__$1;
(statearr_29781_29864[(2)] = inst_29685);

(statearr_29781_29864[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29775 === (27))){
var state_29774__$1 = state_29774;
var statearr_29782_29865 = state_29774__$1;
(statearr_29782_29865[(2)] = null);

(statearr_29782_29865[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29775 === (1))){
var inst_29626 = (state_29774[(13)]);
var inst_29623 = before_jsload.call(null,files);
var inst_29624 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_29625 = (function (){return (function (p1__29614_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__29614_SHARP_);
});
})();
var inst_29626__$1 = cljs.core.filter.call(null,inst_29625,files);
var inst_29627 = cljs.core.not_empty.call(null,inst_29626__$1);
var state_29774__$1 = (function (){var statearr_29783 = state_29774;
(statearr_29783[(14)] = inst_29623);

(statearr_29783[(15)] = inst_29624);

(statearr_29783[(13)] = inst_29626__$1);

return statearr_29783;
})();
if(cljs.core.truth_(inst_29627)){
var statearr_29784_29866 = state_29774__$1;
(statearr_29784_29866[(1)] = (2));

} else {
var statearr_29785_29867 = state_29774__$1;
(statearr_29785_29867[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29775 === (24))){
var state_29774__$1 = state_29774;
var statearr_29786_29868 = state_29774__$1;
(statearr_29786_29868[(2)] = null);

(statearr_29786_29868[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29775 === (39))){
var inst_29727 = (state_29774[(16)]);
var state_29774__$1 = state_29774;
var statearr_29787_29869 = state_29774__$1;
(statearr_29787_29869[(2)] = inst_29727);

(statearr_29787_29869[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29775 === (46))){
var inst_29769 = (state_29774[(2)]);
var state_29774__$1 = state_29774;
var statearr_29788_29870 = state_29774__$1;
(statearr_29788_29870[(2)] = inst_29769);

(statearr_29788_29870[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29775 === (4))){
var inst_29671 = (state_29774[(2)]);
var inst_29672 = cljs.core.List.EMPTY;
var inst_29673 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_29672);
var inst_29674 = (function (){return (function (p1__29615_SHARP_){
var and__4115__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__29615_SHARP_);
if(cljs.core.truth_(and__4115__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__29615_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__29615_SHARP_))));
} else {
return and__4115__auto__;
}
});
})();
var inst_29675 = cljs.core.filter.call(null,inst_29674,files);
var inst_29676 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_29677 = cljs.core.concat.call(null,inst_29675,inst_29676);
var state_29774__$1 = (function (){var statearr_29789 = state_29774;
(statearr_29789[(12)] = inst_29677);

(statearr_29789[(17)] = inst_29671);

(statearr_29789[(18)] = inst_29673);

return statearr_29789;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_29790_29871 = state_29774__$1;
(statearr_29790_29871[(1)] = (16));

} else {
var statearr_29791_29872 = state_29774__$1;
(statearr_29791_29872[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29775 === (15))){
var inst_29661 = (state_29774[(2)]);
var state_29774__$1 = state_29774;
var statearr_29792_29873 = state_29774__$1;
(statearr_29792_29873[(2)] = inst_29661);

(statearr_29792_29873[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29775 === (21))){
var inst_29687 = (state_29774[(19)]);
var inst_29687__$1 = (state_29774[(2)]);
var inst_29688 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_29687__$1);
var state_29774__$1 = (function (){var statearr_29793 = state_29774;
(statearr_29793[(19)] = inst_29687__$1);

return statearr_29793;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29774__$1,(22),inst_29688);
} else {
if((state_val_29775 === (31))){
var inst_29772 = (state_29774[(2)]);
var state_29774__$1 = state_29774;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29774__$1,inst_29772);
} else {
if((state_val_29775 === (32))){
var inst_29727 = (state_29774[(16)]);
var inst_29732 = inst_29727.cljs$lang$protocol_mask$partition0$;
var inst_29733 = (inst_29732 & (64));
var inst_29734 = inst_29727.cljs$core$ISeq$;
var inst_29735 = (cljs.core.PROTOCOL_SENTINEL === inst_29734);
var inst_29736 = ((inst_29733) || (inst_29735));
var state_29774__$1 = state_29774;
if(cljs.core.truth_(inst_29736)){
var statearr_29794_29874 = state_29774__$1;
(statearr_29794_29874[(1)] = (35));

} else {
var statearr_29795_29875 = state_29774__$1;
(statearr_29795_29875[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29775 === (40))){
var inst_29749 = (state_29774[(20)]);
var inst_29748 = (state_29774[(2)]);
var inst_29749__$1 = cljs.core.get.call(null,inst_29748,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_29750 = cljs.core.get.call(null,inst_29748,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_29751 = cljs.core.not_empty.call(null,inst_29749__$1);
var state_29774__$1 = (function (){var statearr_29796 = state_29774;
(statearr_29796[(20)] = inst_29749__$1);

(statearr_29796[(21)] = inst_29750);

return statearr_29796;
})();
if(cljs.core.truth_(inst_29751)){
var statearr_29797_29876 = state_29774__$1;
(statearr_29797_29876[(1)] = (41));

} else {
var statearr_29798_29877 = state_29774__$1;
(statearr_29798_29877[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29775 === (33))){
var state_29774__$1 = state_29774;
var statearr_29799_29878 = state_29774__$1;
(statearr_29799_29878[(2)] = false);

(statearr_29799_29878[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29775 === (13))){
var inst_29647 = (state_29774[(22)]);
var inst_29651 = cljs.core.chunk_first.call(null,inst_29647);
var inst_29652 = cljs.core.chunk_rest.call(null,inst_29647);
var inst_29653 = cljs.core.count.call(null,inst_29651);
var inst_29634 = inst_29652;
var inst_29635 = inst_29651;
var inst_29636 = inst_29653;
var inst_29637 = (0);
var state_29774__$1 = (function (){var statearr_29800 = state_29774;
(statearr_29800[(7)] = inst_29635);

(statearr_29800[(8)] = inst_29636);

(statearr_29800[(9)] = inst_29637);

(statearr_29800[(10)] = inst_29634);

return statearr_29800;
})();
var statearr_29801_29879 = state_29774__$1;
(statearr_29801_29879[(2)] = null);

(statearr_29801_29879[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29775 === (22))){
var inst_29687 = (state_29774[(19)]);
var inst_29695 = (state_29774[(23)]);
var inst_29690 = (state_29774[(24)]);
var inst_29691 = (state_29774[(25)]);
var inst_29690__$1 = (state_29774[(2)]);
var inst_29691__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_29690__$1);
var inst_29692 = (function (){var all_files = inst_29687;
var res_SINGLEQUOTE_ = inst_29690__$1;
var res = inst_29691__$1;
return (function (p1__29616_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__29616_SHARP_));
});
})();
var inst_29693 = cljs.core.filter.call(null,inst_29692,inst_29690__$1);
var inst_29694 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_29695__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_29694);
var inst_29696 = cljs.core.not_empty.call(null,inst_29695__$1);
var state_29774__$1 = (function (){var statearr_29802 = state_29774;
(statearr_29802[(26)] = inst_29693);

(statearr_29802[(23)] = inst_29695__$1);

(statearr_29802[(24)] = inst_29690__$1);

(statearr_29802[(25)] = inst_29691__$1);

return statearr_29802;
})();
if(cljs.core.truth_(inst_29696)){
var statearr_29803_29880 = state_29774__$1;
(statearr_29803_29880[(1)] = (23));

} else {
var statearr_29804_29881 = state_29774__$1;
(statearr_29804_29881[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29775 === (36))){
var state_29774__$1 = state_29774;
var statearr_29805_29882 = state_29774__$1;
(statearr_29805_29882[(2)] = false);

(statearr_29805_29882[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29775 === (41))){
var inst_29749 = (state_29774[(20)]);
var inst_29753 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_29754 = cljs.core.map.call(null,inst_29753,inst_29749);
var inst_29755 = cljs.core.pr_str.call(null,inst_29754);
var inst_29756 = ["figwheel-no-load meta-data: ",inst_29755].join('');
var inst_29757 = figwheel.client.utils.log.call(null,inst_29756);
var state_29774__$1 = state_29774;
var statearr_29806_29883 = state_29774__$1;
(statearr_29806_29883[(2)] = inst_29757);

(statearr_29806_29883[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29775 === (43))){
var inst_29750 = (state_29774[(21)]);
var inst_29760 = (state_29774[(2)]);
var inst_29761 = cljs.core.not_empty.call(null,inst_29750);
var state_29774__$1 = (function (){var statearr_29807 = state_29774;
(statearr_29807[(27)] = inst_29760);

return statearr_29807;
})();
if(cljs.core.truth_(inst_29761)){
var statearr_29808_29884 = state_29774__$1;
(statearr_29808_29884[(1)] = (44));

} else {
var statearr_29809_29885 = state_29774__$1;
(statearr_29809_29885[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29775 === (29))){
var inst_29687 = (state_29774[(19)]);
var inst_29693 = (state_29774[(26)]);
var inst_29727 = (state_29774[(16)]);
var inst_29695 = (state_29774[(23)]);
var inst_29690 = (state_29774[(24)]);
var inst_29691 = (state_29774[(25)]);
var inst_29723 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_29726 = (function (){var all_files = inst_29687;
var res_SINGLEQUOTE_ = inst_29690;
var res = inst_29691;
var files_not_loaded = inst_29693;
var dependencies_that_loaded = inst_29695;
return (function (p__29725){
var map__29810 = p__29725;
var map__29810__$1 = (((((!((map__29810 == null))))?(((((map__29810.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29810.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29810):map__29810);
var namespace = cljs.core.get.call(null,map__29810__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
var inst_29727__$1 = cljs.core.group_by.call(null,inst_29726,inst_29693);
var inst_29729 = (inst_29727__$1 == null);
var inst_29730 = cljs.core.not.call(null,inst_29729);
var state_29774__$1 = (function (){var statearr_29812 = state_29774;
(statearr_29812[(28)] = inst_29723);

(statearr_29812[(16)] = inst_29727__$1);

return statearr_29812;
})();
if(inst_29730){
var statearr_29813_29886 = state_29774__$1;
(statearr_29813_29886[(1)] = (32));

} else {
var statearr_29814_29887 = state_29774__$1;
(statearr_29814_29887[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29775 === (44))){
var inst_29750 = (state_29774[(21)]);
var inst_29763 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_29750);
var inst_29764 = cljs.core.pr_str.call(null,inst_29763);
var inst_29765 = ["not required: ",inst_29764].join('');
var inst_29766 = figwheel.client.utils.log.call(null,inst_29765);
var state_29774__$1 = state_29774;
var statearr_29815_29888 = state_29774__$1;
(statearr_29815_29888[(2)] = inst_29766);

(statearr_29815_29888[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29775 === (6))){
var inst_29668 = (state_29774[(2)]);
var state_29774__$1 = state_29774;
var statearr_29816_29889 = state_29774__$1;
(statearr_29816_29889[(2)] = inst_29668);

(statearr_29816_29889[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29775 === (28))){
var inst_29693 = (state_29774[(26)]);
var inst_29720 = (state_29774[(2)]);
var inst_29721 = cljs.core.not_empty.call(null,inst_29693);
var state_29774__$1 = (function (){var statearr_29817 = state_29774;
(statearr_29817[(29)] = inst_29720);

return statearr_29817;
})();
if(cljs.core.truth_(inst_29721)){
var statearr_29818_29890 = state_29774__$1;
(statearr_29818_29890[(1)] = (29));

} else {
var statearr_29819_29891 = state_29774__$1;
(statearr_29819_29891[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29775 === (25))){
var inst_29691 = (state_29774[(25)]);
var inst_29707 = (state_29774[(2)]);
var inst_29708 = cljs.core.not_empty.call(null,inst_29691);
var state_29774__$1 = (function (){var statearr_29820 = state_29774;
(statearr_29820[(30)] = inst_29707);

return statearr_29820;
})();
if(cljs.core.truth_(inst_29708)){
var statearr_29821_29892 = state_29774__$1;
(statearr_29821_29892[(1)] = (26));

} else {
var statearr_29822_29893 = state_29774__$1;
(statearr_29822_29893[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29775 === (34))){
var inst_29743 = (state_29774[(2)]);
var state_29774__$1 = state_29774;
if(cljs.core.truth_(inst_29743)){
var statearr_29823_29894 = state_29774__$1;
(statearr_29823_29894[(1)] = (38));

} else {
var statearr_29824_29895 = state_29774__$1;
(statearr_29824_29895[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29775 === (17))){
var state_29774__$1 = state_29774;
var statearr_29825_29896 = state_29774__$1;
(statearr_29825_29896[(2)] = recompile_dependents);

(statearr_29825_29896[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29775 === (3))){
var state_29774__$1 = state_29774;
var statearr_29826_29897 = state_29774__$1;
(statearr_29826_29897[(2)] = null);

(statearr_29826_29897[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29775 === (12))){
var inst_29664 = (state_29774[(2)]);
var state_29774__$1 = state_29774;
var statearr_29827_29898 = state_29774__$1;
(statearr_29827_29898[(2)] = inst_29664);

(statearr_29827_29898[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29775 === (2))){
var inst_29626 = (state_29774[(13)]);
var inst_29633 = cljs.core.seq.call(null,inst_29626);
var inst_29634 = inst_29633;
var inst_29635 = null;
var inst_29636 = (0);
var inst_29637 = (0);
var state_29774__$1 = (function (){var statearr_29828 = state_29774;
(statearr_29828[(7)] = inst_29635);

(statearr_29828[(8)] = inst_29636);

(statearr_29828[(9)] = inst_29637);

(statearr_29828[(10)] = inst_29634);

return statearr_29828;
})();
var statearr_29829_29899 = state_29774__$1;
(statearr_29829_29899[(2)] = null);

(statearr_29829_29899[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29775 === (23))){
var inst_29687 = (state_29774[(19)]);
var inst_29693 = (state_29774[(26)]);
var inst_29695 = (state_29774[(23)]);
var inst_29690 = (state_29774[(24)]);
var inst_29691 = (state_29774[(25)]);
var inst_29698 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_29700 = (function (){var all_files = inst_29687;
var res_SINGLEQUOTE_ = inst_29690;
var res = inst_29691;
var files_not_loaded = inst_29693;
var dependencies_that_loaded = inst_29695;
return (function (p__29699){
var map__29830 = p__29699;
var map__29830__$1 = (((((!((map__29830 == null))))?(((((map__29830.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29830.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29830):map__29830);
var request_url = cljs.core.get.call(null,map__29830__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
})();
var inst_29701 = cljs.core.reverse.call(null,inst_29695);
var inst_29702 = cljs.core.map.call(null,inst_29700,inst_29701);
var inst_29703 = cljs.core.pr_str.call(null,inst_29702);
var inst_29704 = figwheel.client.utils.log.call(null,inst_29703);
var state_29774__$1 = (function (){var statearr_29832 = state_29774;
(statearr_29832[(31)] = inst_29698);

return statearr_29832;
})();
var statearr_29833_29900 = state_29774__$1;
(statearr_29833_29900[(2)] = inst_29704);

(statearr_29833_29900[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29775 === (35))){
var state_29774__$1 = state_29774;
var statearr_29834_29901 = state_29774__$1;
(statearr_29834_29901[(2)] = true);

(statearr_29834_29901[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29775 === (19))){
var inst_29677 = (state_29774[(12)]);
var inst_29683 = figwheel.client.file_reloading.expand_files.call(null,inst_29677);
var state_29774__$1 = state_29774;
var statearr_29835_29902 = state_29774__$1;
(statearr_29835_29902[(2)] = inst_29683);

(statearr_29835_29902[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29775 === (11))){
var state_29774__$1 = state_29774;
var statearr_29836_29903 = state_29774__$1;
(statearr_29836_29903[(2)] = null);

(statearr_29836_29903[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29775 === (9))){
var inst_29666 = (state_29774[(2)]);
var state_29774__$1 = state_29774;
var statearr_29837_29904 = state_29774__$1;
(statearr_29837_29904[(2)] = inst_29666);

(statearr_29837_29904[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29775 === (5))){
var inst_29636 = (state_29774[(8)]);
var inst_29637 = (state_29774[(9)]);
var inst_29639 = (inst_29637 < inst_29636);
var inst_29640 = inst_29639;
var state_29774__$1 = state_29774;
if(cljs.core.truth_(inst_29640)){
var statearr_29838_29905 = state_29774__$1;
(statearr_29838_29905[(1)] = (7));

} else {
var statearr_29839_29906 = state_29774__$1;
(statearr_29839_29906[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29775 === (14))){
var inst_29647 = (state_29774[(22)]);
var inst_29656 = cljs.core.first.call(null,inst_29647);
var inst_29657 = figwheel.client.file_reloading.eval_body.call(null,inst_29656,opts);
var inst_29658 = cljs.core.next.call(null,inst_29647);
var inst_29634 = inst_29658;
var inst_29635 = null;
var inst_29636 = (0);
var inst_29637 = (0);
var state_29774__$1 = (function (){var statearr_29840 = state_29774;
(statearr_29840[(7)] = inst_29635);

(statearr_29840[(32)] = inst_29657);

(statearr_29840[(8)] = inst_29636);

(statearr_29840[(9)] = inst_29637);

(statearr_29840[(10)] = inst_29634);

return statearr_29840;
})();
var statearr_29841_29907 = state_29774__$1;
(statearr_29841_29907[(2)] = null);

(statearr_29841_29907[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29775 === (45))){
var state_29774__$1 = state_29774;
var statearr_29842_29908 = state_29774__$1;
(statearr_29842_29908[(2)] = null);

(statearr_29842_29908[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29775 === (26))){
var inst_29687 = (state_29774[(19)]);
var inst_29693 = (state_29774[(26)]);
var inst_29695 = (state_29774[(23)]);
var inst_29690 = (state_29774[(24)]);
var inst_29691 = (state_29774[(25)]);
var inst_29710 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_29712 = (function (){var all_files = inst_29687;
var res_SINGLEQUOTE_ = inst_29690;
var res = inst_29691;
var files_not_loaded = inst_29693;
var dependencies_that_loaded = inst_29695;
return (function (p__29711){
var map__29843 = p__29711;
var map__29843__$1 = (((((!((map__29843 == null))))?(((((map__29843.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29843.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29843):map__29843);
var namespace = cljs.core.get.call(null,map__29843__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__29843__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
})();
var inst_29713 = cljs.core.map.call(null,inst_29712,inst_29691);
var inst_29714 = cljs.core.pr_str.call(null,inst_29713);
var inst_29715 = figwheel.client.utils.log.call(null,inst_29714);
var inst_29716 = (function (){var all_files = inst_29687;
var res_SINGLEQUOTE_ = inst_29690;
var res = inst_29691;
var files_not_loaded = inst_29693;
var dependencies_that_loaded = inst_29695;
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
})();
var inst_29717 = setTimeout(inst_29716,(10));
var state_29774__$1 = (function (){var statearr_29845 = state_29774;
(statearr_29845[(33)] = inst_29715);

(statearr_29845[(34)] = inst_29710);

return statearr_29845;
})();
var statearr_29846_29909 = state_29774__$1;
(statearr_29846_29909[(2)] = inst_29717);

(statearr_29846_29909[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29775 === (16))){
var state_29774__$1 = state_29774;
var statearr_29847_29910 = state_29774__$1;
(statearr_29847_29910[(2)] = reload_dependents);

(statearr_29847_29910[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29775 === (38))){
var inst_29727 = (state_29774[(16)]);
var inst_29745 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29727);
var state_29774__$1 = state_29774;
var statearr_29848_29911 = state_29774__$1;
(statearr_29848_29911[(2)] = inst_29745);

(statearr_29848_29911[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29775 === (30))){
var state_29774__$1 = state_29774;
var statearr_29849_29912 = state_29774__$1;
(statearr_29849_29912[(2)] = null);

(statearr_29849_29912[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29775 === (10))){
var inst_29647 = (state_29774[(22)]);
var inst_29649 = cljs.core.chunked_seq_QMARK_.call(null,inst_29647);
var state_29774__$1 = state_29774;
if(inst_29649){
var statearr_29850_29913 = state_29774__$1;
(statearr_29850_29913[(1)] = (13));

} else {
var statearr_29851_29914 = state_29774__$1;
(statearr_29851_29914[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29775 === (18))){
var inst_29681 = (state_29774[(2)]);
var state_29774__$1 = state_29774;
if(cljs.core.truth_(inst_29681)){
var statearr_29852_29915 = state_29774__$1;
(statearr_29852_29915[(1)] = (19));

} else {
var statearr_29853_29916 = state_29774__$1;
(statearr_29853_29916[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29775 === (42))){
var state_29774__$1 = state_29774;
var statearr_29854_29917 = state_29774__$1;
(statearr_29854_29917[(2)] = null);

(statearr_29854_29917[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29775 === (37))){
var inst_29740 = (state_29774[(2)]);
var state_29774__$1 = state_29774;
var statearr_29855_29918 = state_29774__$1;
(statearr_29855_29918[(2)] = inst_29740);

(statearr_29855_29918[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29775 === (8))){
var inst_29647 = (state_29774[(22)]);
var inst_29634 = (state_29774[(10)]);
var inst_29647__$1 = cljs.core.seq.call(null,inst_29634);
var state_29774__$1 = (function (){var statearr_29856 = state_29774;
(statearr_29856[(22)] = inst_29647__$1);

return statearr_29856;
})();
if(inst_29647__$1){
var statearr_29857_29919 = state_29774__$1;
(statearr_29857_29919[(1)] = (10));

} else {
var statearr_29858_29920 = state_29774__$1;
(statearr_29858_29920[(1)] = (11));

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
var figwheel$client$file_reloading$reload_js_files_$_state_machine__26970__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__26970__auto____0 = (function (){
var statearr_29859 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29859[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__26970__auto__);

(statearr_29859[(1)] = (1));

return statearr_29859;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__26970__auto____1 = (function (state_29774){
while(true){
var ret_value__26971__auto__ = (function (){try{while(true){
var result__26972__auto__ = switch__26969__auto__.call(null,state_29774);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26972__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26972__auto__;
}
break;
}
}catch (e29860){if((e29860 instanceof Object)){
var ex__26973__auto__ = e29860;
var statearr_29861_29921 = state_29774;
(statearr_29861_29921[(5)] = ex__26973__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29774);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29860;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26971__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29922 = state_29774;
state_29774 = G__29922;
continue;
} else {
return ret_value__26971__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__26970__auto__ = function(state_29774){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__26970__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__26970__auto____1.call(this,state_29774);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__26970__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__26970__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__26970__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__26970__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__26970__auto__;
})()
})();
var state__27066__auto__ = (function (){var statearr_29862 = f__27065__auto__.call(null);
(statearr_29862[(6)] = c__27064__auto__);

return statearr_29862;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27066__auto__);
}));

return c__27064__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__29925,link){
var map__29926 = p__29925;
var map__29926__$1 = (((((!((map__29926 == null))))?(((((map__29926.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29926.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29926):map__29926);
var file = cljs.core.get.call(null,map__29926__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5720__auto__ = link.href;
if(cljs.core.truth_(temp__5720__auto__)){
var link_href = temp__5720__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,(function (p1__29923_SHARP_,p2__29924_SHARP_){
if(cljs.core._EQ_.call(null,p1__29923_SHARP_,p2__29924_SHARP_)){
return p1__29923_SHARP_;
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
var temp__5720__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__29929){
var map__29930 = p__29929;
var map__29930__$1 = (((((!((map__29930 == null))))?(((((map__29930.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29930.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29930):map__29930);
var match_length = cljs.core.get.call(null,map__29930__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__29930__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__29928_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__29928_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__29932_SHARP_,p2__29933_SHARP_){
return cljs.core.assoc.call(null,p1__29932_SHARP_,cljs.core.get.call(null,p2__29933_SHARP_,key),p2__29933_SHARP_);
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
var loaded_f_datas_29934 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_29934);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_29934);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__29935,p__29936){
var map__29937 = p__29935;
var map__29937__$1 = (((((!((map__29937 == null))))?(((((map__29937.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29937.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29937):map__29937);
var on_cssload = cljs.core.get.call(null,map__29937__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__29938 = p__29936;
var map__29938__$1 = (((((!((map__29938 == null))))?(((((map__29938.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29938.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29938):map__29938);
var files_msg = map__29938__$1;
var files = cljs.core.get.call(null,map__29938__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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

//# sourceMappingURL=file_reloading.js.map?rel=1607132438675
