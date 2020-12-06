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
var G__29213 = goog.object.get(goog.debugLoader_.dependencies_,path);
if((G__29213 == null)){
return null;
} else {
return goog.object.get(G__29213,"requires");
}
}):(function (path){
var G__29214 = goog.object.get(goog.dependencies_.requires,path);
if((G__29214 == null)){
return null;
} else {
return goog.object.getKeys(G__29214);
}
}));
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__29215_SHARP_){
return (!(figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__29215_SHARP_)));
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
var G__29216 = goog.object.get(goog.debugLoader_.dependencies_,path);
var G__29216__$1 = (((G__29216 == null))?null:goog.object.get(G__29216,"provides"));
if((G__29216__$1 == null)){
return null;
} else {
return cljs.core.set.call(null,G__29216__$1);
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
var seq__29217 = cljs.core.seq.call(null,provides);
var chunk__29218 = null;
var count__29219 = (0);
var i__29220 = (0);
while(true){
if((i__29220 < count__29219)){
var prov = cljs.core._nth.call(null,chunk__29218,i__29220);
var seq__29229_29241 = cljs.core.seq.call(null,requires);
var chunk__29230_29242 = null;
var count__29231_29243 = (0);
var i__29232_29244 = (0);
while(true){
if((i__29232_29244 < count__29231_29243)){
var req_29245 = cljs.core._nth.call(null,chunk__29230_29242,i__29232_29244);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29245,prov);


var G__29246 = seq__29229_29241;
var G__29247 = chunk__29230_29242;
var G__29248 = count__29231_29243;
var G__29249 = (i__29232_29244 + (1));
seq__29229_29241 = G__29246;
chunk__29230_29242 = G__29247;
count__29231_29243 = G__29248;
i__29232_29244 = G__29249;
continue;
} else {
var temp__5720__auto___29250 = cljs.core.seq.call(null,seq__29229_29241);
if(temp__5720__auto___29250){
var seq__29229_29251__$1 = temp__5720__auto___29250;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29229_29251__$1)){
var c__4556__auto___29252 = cljs.core.chunk_first.call(null,seq__29229_29251__$1);
var G__29253 = cljs.core.chunk_rest.call(null,seq__29229_29251__$1);
var G__29254 = c__4556__auto___29252;
var G__29255 = cljs.core.count.call(null,c__4556__auto___29252);
var G__29256 = (0);
seq__29229_29241 = G__29253;
chunk__29230_29242 = G__29254;
count__29231_29243 = G__29255;
i__29232_29244 = G__29256;
continue;
} else {
var req_29257 = cljs.core.first.call(null,seq__29229_29251__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29257,prov);


var G__29258 = cljs.core.next.call(null,seq__29229_29251__$1);
var G__29259 = null;
var G__29260 = (0);
var G__29261 = (0);
seq__29229_29241 = G__29258;
chunk__29230_29242 = G__29259;
count__29231_29243 = G__29260;
i__29232_29244 = G__29261;
continue;
}
} else {
}
}
break;
}


var G__29262 = seq__29217;
var G__29263 = chunk__29218;
var G__29264 = count__29219;
var G__29265 = (i__29220 + (1));
seq__29217 = G__29262;
chunk__29218 = G__29263;
count__29219 = G__29264;
i__29220 = G__29265;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__29217);
if(temp__5720__auto__){
var seq__29217__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29217__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__29217__$1);
var G__29266 = cljs.core.chunk_rest.call(null,seq__29217__$1);
var G__29267 = c__4556__auto__;
var G__29268 = cljs.core.count.call(null,c__4556__auto__);
var G__29269 = (0);
seq__29217 = G__29266;
chunk__29218 = G__29267;
count__29219 = G__29268;
i__29220 = G__29269;
continue;
} else {
var prov = cljs.core.first.call(null,seq__29217__$1);
var seq__29233_29270 = cljs.core.seq.call(null,requires);
var chunk__29234_29271 = null;
var count__29235_29272 = (0);
var i__29236_29273 = (0);
while(true){
if((i__29236_29273 < count__29235_29272)){
var req_29274 = cljs.core._nth.call(null,chunk__29234_29271,i__29236_29273);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29274,prov);


var G__29275 = seq__29233_29270;
var G__29276 = chunk__29234_29271;
var G__29277 = count__29235_29272;
var G__29278 = (i__29236_29273 + (1));
seq__29233_29270 = G__29275;
chunk__29234_29271 = G__29276;
count__29235_29272 = G__29277;
i__29236_29273 = G__29278;
continue;
} else {
var temp__5720__auto___29279__$1 = cljs.core.seq.call(null,seq__29233_29270);
if(temp__5720__auto___29279__$1){
var seq__29233_29280__$1 = temp__5720__auto___29279__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29233_29280__$1)){
var c__4556__auto___29281 = cljs.core.chunk_first.call(null,seq__29233_29280__$1);
var G__29282 = cljs.core.chunk_rest.call(null,seq__29233_29280__$1);
var G__29283 = c__4556__auto___29281;
var G__29284 = cljs.core.count.call(null,c__4556__auto___29281);
var G__29285 = (0);
seq__29233_29270 = G__29282;
chunk__29234_29271 = G__29283;
count__29235_29272 = G__29284;
i__29236_29273 = G__29285;
continue;
} else {
var req_29286 = cljs.core.first.call(null,seq__29233_29280__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29286,prov);


var G__29287 = cljs.core.next.call(null,seq__29233_29280__$1);
var G__29288 = null;
var G__29289 = (0);
var G__29290 = (0);
seq__29233_29270 = G__29287;
chunk__29234_29271 = G__29288;
count__29235_29272 = G__29289;
i__29236_29273 = G__29290;
continue;
}
} else {
}
}
break;
}


var G__29291 = cljs.core.next.call(null,seq__29217__$1);
var G__29292 = null;
var G__29293 = (0);
var G__29294 = (0);
seq__29217 = G__29291;
chunk__29218 = G__29292;
count__29219 = G__29293;
i__29220 = G__29294;
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
var seq__29237 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,path));
var chunk__29238 = null;
var count__29239 = (0);
var i__29240 = (0);
while(true){
if((i__29240 < count__29239)){
var prov = cljs.core._nth.call(null,chunk__29238,i__29240);
goog.object.forEach(deps,((function (seq__29237,chunk__29238,count__29239,i__29240,prov,requires){
return (function (___$1,req,___$2){
return figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req,prov);
});})(seq__29237,chunk__29238,count__29239,i__29240,prov,requires))
);


var G__29295 = seq__29237;
var G__29296 = chunk__29238;
var G__29297 = count__29239;
var G__29298 = (i__29240 + (1));
seq__29237 = G__29295;
chunk__29238 = G__29296;
count__29239 = G__29297;
i__29240 = G__29298;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__29237);
if(temp__5720__auto__){
var seq__29237__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29237__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__29237__$1);
var G__29299 = cljs.core.chunk_rest.call(null,seq__29237__$1);
var G__29300 = c__4556__auto__;
var G__29301 = cljs.core.count.call(null,c__4556__auto__);
var G__29302 = (0);
seq__29237 = G__29299;
chunk__29238 = G__29300;
count__29239 = G__29301;
i__29240 = G__29302;
continue;
} else {
var prov = cljs.core.first.call(null,seq__29237__$1);
goog.object.forEach(deps,((function (seq__29237,chunk__29238,count__29239,i__29240,prov,seq__29237__$1,temp__5720__auto__,requires){
return (function (___$1,req,___$2){
return figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req,prov);
});})(seq__29237,chunk__29238,count__29239,i__29240,prov,seq__29237__$1,temp__5720__auto__,requires))
);


var G__29303 = cljs.core.next.call(null,seq__29237__$1);
var G__29304 = null;
var G__29305 = (0);
var G__29306 = (0);
seq__29237 = G__29303;
chunk__29238 = G__29304;
count__29239 = G__29305;
i__29240 = G__29306;
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
return cljs.core.some.call(null,(function (p__29307){
var vec__29308 = p__29307;
var _ = cljs.core.nth.call(null,vec__29308,(0),null);
var v = cljs.core.nth.call(null,vec__29308,(1),null);
var and__4115__auto__ = v;
if(cljs.core.truth_(and__4115__auto__)){
return v.call(null,dep);
} else {
return and__4115__auto__;
}
}),cljs.core.filter.call(null,(function (p__29311){
var vec__29312 = p__29311;
var k = cljs.core.nth.call(null,vec__29312,(0),null);
var v = cljs.core.nth.call(null,vec__29312,(1),null);
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

var seq__29324_29332 = cljs.core.seq.call(null,deps);
var chunk__29325_29333 = null;
var count__29326_29334 = (0);
var i__29327_29335 = (0);
while(true){
if((i__29327_29335 < count__29326_29334)){
var dep_29336 = cljs.core._nth.call(null,chunk__29325_29333,i__29327_29335);
if(cljs.core.truth_((function (){var and__4115__auto__ = dep_29336;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_29336));
} else {
return and__4115__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_29336,(depth + (1)),state);
} else {
}


var G__29337 = seq__29324_29332;
var G__29338 = chunk__29325_29333;
var G__29339 = count__29326_29334;
var G__29340 = (i__29327_29335 + (1));
seq__29324_29332 = G__29337;
chunk__29325_29333 = G__29338;
count__29326_29334 = G__29339;
i__29327_29335 = G__29340;
continue;
} else {
var temp__5720__auto___29341 = cljs.core.seq.call(null,seq__29324_29332);
if(temp__5720__auto___29341){
var seq__29324_29342__$1 = temp__5720__auto___29341;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29324_29342__$1)){
var c__4556__auto___29343 = cljs.core.chunk_first.call(null,seq__29324_29342__$1);
var G__29344 = cljs.core.chunk_rest.call(null,seq__29324_29342__$1);
var G__29345 = c__4556__auto___29343;
var G__29346 = cljs.core.count.call(null,c__4556__auto___29343);
var G__29347 = (0);
seq__29324_29332 = G__29344;
chunk__29325_29333 = G__29345;
count__29326_29334 = G__29346;
i__29327_29335 = G__29347;
continue;
} else {
var dep_29348 = cljs.core.first.call(null,seq__29324_29342__$1);
if(cljs.core.truth_((function (){var and__4115__auto__ = dep_29348;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_29348));
} else {
return and__4115__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_29348,(depth + (1)),state);
} else {
}


var G__29349 = cljs.core.next.call(null,seq__29324_29342__$1);
var G__29350 = null;
var G__29351 = (0);
var G__29352 = (0);
seq__29324_29332 = G__29349;
chunk__29325_29333 = G__29350;
count__29326_29334 = G__29351;
i__29327_29335 = G__29352;
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
var elim_dups_STAR_ = (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__29328){
var vec__29329 = p__29328;
var seq__29330 = cljs.core.seq.call(null,vec__29329);
var first__29331 = cljs.core.first.call(null,seq__29330);
var seq__29330__$1 = cljs.core.next.call(null,seq__29330);
var x = first__29331;
var xs = seq__29330__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,(function (p1__29315_SHARP_){
return clojure.set.difference.call(null,p1__29315_SHARP_,x);
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
figwheel.client.file_reloading.resolve_ns = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?figwheel.client.file_reloading.name__GT_path:(function (p1__29353_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,p1__29353_SHARP_))].join('');
}));
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__29354 = cljs.core.seq.call(null,provides);
var chunk__29355 = null;
var count__29356 = (0);
var i__29357 = (0);
while(true){
if((i__29357 < count__29356)){
var prov = cljs.core._nth.call(null,chunk__29355,i__29357);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__29366_29374 = cljs.core.seq.call(null,requires);
var chunk__29367_29375 = null;
var count__29368_29376 = (0);
var i__29369_29377 = (0);
while(true){
if((i__29369_29377 < count__29368_29376)){
var req_29378 = cljs.core._nth.call(null,chunk__29367_29375,i__29369_29377);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29378,prov);


var G__29379 = seq__29366_29374;
var G__29380 = chunk__29367_29375;
var G__29381 = count__29368_29376;
var G__29382 = (i__29369_29377 + (1));
seq__29366_29374 = G__29379;
chunk__29367_29375 = G__29380;
count__29368_29376 = G__29381;
i__29369_29377 = G__29382;
continue;
} else {
var temp__5720__auto___29383 = cljs.core.seq.call(null,seq__29366_29374);
if(temp__5720__auto___29383){
var seq__29366_29384__$1 = temp__5720__auto___29383;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29366_29384__$1)){
var c__4556__auto___29385 = cljs.core.chunk_first.call(null,seq__29366_29384__$1);
var G__29386 = cljs.core.chunk_rest.call(null,seq__29366_29384__$1);
var G__29387 = c__4556__auto___29385;
var G__29388 = cljs.core.count.call(null,c__4556__auto___29385);
var G__29389 = (0);
seq__29366_29374 = G__29386;
chunk__29367_29375 = G__29387;
count__29368_29376 = G__29388;
i__29369_29377 = G__29389;
continue;
} else {
var req_29390 = cljs.core.first.call(null,seq__29366_29384__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29390,prov);


var G__29391 = cljs.core.next.call(null,seq__29366_29384__$1);
var G__29392 = null;
var G__29393 = (0);
var G__29394 = (0);
seq__29366_29374 = G__29391;
chunk__29367_29375 = G__29392;
count__29368_29376 = G__29393;
i__29369_29377 = G__29394;
continue;
}
} else {
}
}
break;
}


var G__29395 = seq__29354;
var G__29396 = chunk__29355;
var G__29397 = count__29356;
var G__29398 = (i__29357 + (1));
seq__29354 = G__29395;
chunk__29355 = G__29396;
count__29356 = G__29397;
i__29357 = G__29398;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__29354);
if(temp__5720__auto__){
var seq__29354__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29354__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__29354__$1);
var G__29399 = cljs.core.chunk_rest.call(null,seq__29354__$1);
var G__29400 = c__4556__auto__;
var G__29401 = cljs.core.count.call(null,c__4556__auto__);
var G__29402 = (0);
seq__29354 = G__29399;
chunk__29355 = G__29400;
count__29356 = G__29401;
i__29357 = G__29402;
continue;
} else {
var prov = cljs.core.first.call(null,seq__29354__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__29370_29403 = cljs.core.seq.call(null,requires);
var chunk__29371_29404 = null;
var count__29372_29405 = (0);
var i__29373_29406 = (0);
while(true){
if((i__29373_29406 < count__29372_29405)){
var req_29407 = cljs.core._nth.call(null,chunk__29371_29404,i__29373_29406);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29407,prov);


var G__29408 = seq__29370_29403;
var G__29409 = chunk__29371_29404;
var G__29410 = count__29372_29405;
var G__29411 = (i__29373_29406 + (1));
seq__29370_29403 = G__29408;
chunk__29371_29404 = G__29409;
count__29372_29405 = G__29410;
i__29373_29406 = G__29411;
continue;
} else {
var temp__5720__auto___29412__$1 = cljs.core.seq.call(null,seq__29370_29403);
if(temp__5720__auto___29412__$1){
var seq__29370_29413__$1 = temp__5720__auto___29412__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29370_29413__$1)){
var c__4556__auto___29414 = cljs.core.chunk_first.call(null,seq__29370_29413__$1);
var G__29415 = cljs.core.chunk_rest.call(null,seq__29370_29413__$1);
var G__29416 = c__4556__auto___29414;
var G__29417 = cljs.core.count.call(null,c__4556__auto___29414);
var G__29418 = (0);
seq__29370_29403 = G__29415;
chunk__29371_29404 = G__29416;
count__29372_29405 = G__29417;
i__29373_29406 = G__29418;
continue;
} else {
var req_29419 = cljs.core.first.call(null,seq__29370_29413__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29419,prov);


var G__29420 = cljs.core.next.call(null,seq__29370_29413__$1);
var G__29421 = null;
var G__29422 = (0);
var G__29423 = (0);
seq__29370_29403 = G__29420;
chunk__29371_29404 = G__29421;
count__29372_29405 = G__29422;
i__29373_29406 = G__29423;
continue;
}
} else {
}
}
break;
}


var G__29424 = cljs.core.next.call(null,seq__29354__$1);
var G__29425 = null;
var G__29426 = (0);
var G__29427 = (0);
seq__29354 = G__29424;
chunk__29355 = G__29425;
count__29356 = G__29426;
i__29357 = G__29427;
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
var seq__29428_29432 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__29429_29433 = null;
var count__29430_29434 = (0);
var i__29431_29435 = (0);
while(true){
if((i__29431_29435 < count__29430_29434)){
var ns_29436 = cljs.core._nth.call(null,chunk__29429_29433,i__29431_29435);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_29436);


var G__29437 = seq__29428_29432;
var G__29438 = chunk__29429_29433;
var G__29439 = count__29430_29434;
var G__29440 = (i__29431_29435 + (1));
seq__29428_29432 = G__29437;
chunk__29429_29433 = G__29438;
count__29430_29434 = G__29439;
i__29431_29435 = G__29440;
continue;
} else {
var temp__5720__auto___29441 = cljs.core.seq.call(null,seq__29428_29432);
if(temp__5720__auto___29441){
var seq__29428_29442__$1 = temp__5720__auto___29441;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29428_29442__$1)){
var c__4556__auto___29443 = cljs.core.chunk_first.call(null,seq__29428_29442__$1);
var G__29444 = cljs.core.chunk_rest.call(null,seq__29428_29442__$1);
var G__29445 = c__4556__auto___29443;
var G__29446 = cljs.core.count.call(null,c__4556__auto___29443);
var G__29447 = (0);
seq__29428_29432 = G__29444;
chunk__29429_29433 = G__29445;
count__29430_29434 = G__29446;
i__29431_29435 = G__29447;
continue;
} else {
var ns_29448 = cljs.core.first.call(null,seq__29428_29442__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_29448);


var G__29449 = cljs.core.next.call(null,seq__29428_29442__$1);
var G__29450 = null;
var G__29451 = (0);
var G__29452 = (0);
seq__29428_29432 = G__29449;
chunk__29429_29433 = G__29450;
count__29430_29434 = G__29451;
i__29431_29435 = G__29452;
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
var G__29453__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__29453 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29454__i = 0, G__29454__a = new Array(arguments.length -  0);
while (G__29454__i < G__29454__a.length) {G__29454__a[G__29454__i] = arguments[G__29454__i + 0]; ++G__29454__i;}
  args = new cljs.core.IndexedSeq(G__29454__a,0,null);
} 
return G__29453__delegate.call(this,args);};
G__29453.cljs$lang$maxFixedArity = 0;
G__29453.cljs$lang$applyTo = (function (arglist__29455){
var args = cljs.core.seq(arglist__29455);
return G__29453__delegate(args);
});
G__29453.cljs$core$IFn$_invoke$arity$variadic = G__29453__delegate;
return G__29453;
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
figwheel.client.file_reloading.gloader = (((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoad !== 'undefined'))?(function (p1__29456_SHARP_,p2__29457_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__29456_SHARP_)),p2__29457_SHARP_);
}):(((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.load !== 'undefined'))?(function (p1__29458_SHARP_,p2__29459_SHARP_){
return goog.net.jsloader.load(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__29458_SHARP_),p2__29459_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__29460 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__29460.addCallback((function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
}));

G__29460.addErrback((function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
}));

return G__29460;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e29461){if((e29461 instanceof Error)){
var e = e29461;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e29461;

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
}catch (e29462){if((e29462 instanceof Error)){
var e = e29462;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e29462;

}
}})());
});
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__29463 = cljs.core._EQ_;
var expr__29464 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__29463.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__29464))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__29463.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__29464))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__29463.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__29464))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return (function (a,b){
throw "Reload not defined for this platform";
});
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__29466,callback){
var map__29467 = p__29466;
var map__29467__$1 = (((((!((map__29467 == null))))?(((((map__29467.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29467.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29467):map__29467);
var file_msg = map__29467__$1;
var request_url = cljs.core.get.call(null,map__29467__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

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
figwheel.client.file_reloading.reloader_loop = (function (){var c__27259__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27260__auto__ = (function (){var switch__27164__auto__ = (function (state_29505){
var state_val_29506 = (state_29505[(1)]);
if((state_val_29506 === (7))){
var inst_29501 = (state_29505[(2)]);
var state_29505__$1 = state_29505;
var statearr_29507_29533 = state_29505__$1;
(statearr_29507_29533[(2)] = inst_29501);

(statearr_29507_29533[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29506 === (1))){
var state_29505__$1 = state_29505;
var statearr_29508_29534 = state_29505__$1;
(statearr_29508_29534[(2)] = null);

(statearr_29508_29534[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29506 === (4))){
var inst_29471 = (state_29505[(7)]);
var inst_29471__$1 = (state_29505[(2)]);
var state_29505__$1 = (function (){var statearr_29509 = state_29505;
(statearr_29509[(7)] = inst_29471__$1);

return statearr_29509;
})();
if(cljs.core.truth_(inst_29471__$1)){
var statearr_29510_29535 = state_29505__$1;
(statearr_29510_29535[(1)] = (5));

} else {
var statearr_29511_29536 = state_29505__$1;
(statearr_29511_29536[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29506 === (15))){
var inst_29486 = (state_29505[(8)]);
var inst_29484 = (state_29505[(9)]);
var inst_29488 = inst_29486.call(null,inst_29484);
var state_29505__$1 = state_29505;
var statearr_29512_29537 = state_29505__$1;
(statearr_29512_29537[(2)] = inst_29488);

(statearr_29512_29537[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29506 === (13))){
var inst_29495 = (state_29505[(2)]);
var state_29505__$1 = state_29505;
var statearr_29513_29538 = state_29505__$1;
(statearr_29513_29538[(2)] = inst_29495);

(statearr_29513_29538[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29506 === (6))){
var state_29505__$1 = state_29505;
var statearr_29514_29539 = state_29505__$1;
(statearr_29514_29539[(2)] = null);

(statearr_29514_29539[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29506 === (17))){
var inst_29492 = (state_29505[(2)]);
var state_29505__$1 = state_29505;
var statearr_29515_29540 = state_29505__$1;
(statearr_29515_29540[(2)] = inst_29492);

(statearr_29515_29540[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29506 === (3))){
var inst_29503 = (state_29505[(2)]);
var state_29505__$1 = state_29505;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29505__$1,inst_29503);
} else {
if((state_val_29506 === (12))){
var state_29505__$1 = state_29505;
var statearr_29516_29541 = state_29505__$1;
(statearr_29516_29541[(2)] = null);

(statearr_29516_29541[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29506 === (2))){
var state_29505__$1 = state_29505;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29505__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_29506 === (11))){
var inst_29476 = (state_29505[(10)]);
var inst_29482 = figwheel.client.file_reloading.blocking_load.call(null,inst_29476);
var state_29505__$1 = state_29505;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29505__$1,(14),inst_29482);
} else {
if((state_val_29506 === (9))){
var inst_29476 = (state_29505[(10)]);
var state_29505__$1 = state_29505;
if(cljs.core.truth_(inst_29476)){
var statearr_29517_29542 = state_29505__$1;
(statearr_29517_29542[(1)] = (11));

} else {
var statearr_29518_29543 = state_29505__$1;
(statearr_29518_29543[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29506 === (5))){
var inst_29477 = (state_29505[(11)]);
var inst_29471 = (state_29505[(7)]);
var inst_29476 = cljs.core.nth.call(null,inst_29471,(0),null);
var inst_29477__$1 = cljs.core.nth.call(null,inst_29471,(1),null);
var state_29505__$1 = (function (){var statearr_29519 = state_29505;
(statearr_29519[(11)] = inst_29477__$1);

(statearr_29519[(10)] = inst_29476);

return statearr_29519;
})();
if(cljs.core.truth_(inst_29477__$1)){
var statearr_29520_29544 = state_29505__$1;
(statearr_29520_29544[(1)] = (8));

} else {
var statearr_29521_29545 = state_29505__$1;
(statearr_29521_29545[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29506 === (14))){
var inst_29486 = (state_29505[(8)]);
var inst_29476 = (state_29505[(10)]);
var inst_29484 = (state_29505[(2)]);
var inst_29485 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_29486__$1 = cljs.core.get.call(null,inst_29485,inst_29476);
var state_29505__$1 = (function (){var statearr_29522 = state_29505;
(statearr_29522[(8)] = inst_29486__$1);

(statearr_29522[(9)] = inst_29484);

return statearr_29522;
})();
if(cljs.core.truth_(inst_29486__$1)){
var statearr_29523_29546 = state_29505__$1;
(statearr_29523_29546[(1)] = (15));

} else {
var statearr_29524_29547 = state_29505__$1;
(statearr_29524_29547[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29506 === (16))){
var inst_29484 = (state_29505[(9)]);
var inst_29490 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_29484);
var state_29505__$1 = state_29505;
var statearr_29525_29548 = state_29505__$1;
(statearr_29525_29548[(2)] = inst_29490);

(statearr_29525_29548[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29506 === (10))){
var inst_29497 = (state_29505[(2)]);
var state_29505__$1 = (function (){var statearr_29526 = state_29505;
(statearr_29526[(12)] = inst_29497);

return statearr_29526;
})();
var statearr_29527_29549 = state_29505__$1;
(statearr_29527_29549[(2)] = null);

(statearr_29527_29549[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29506 === (8))){
var inst_29477 = (state_29505[(11)]);
var inst_29479 = eval(inst_29477);
var state_29505__$1 = state_29505;
var statearr_29528_29550 = state_29505__$1;
(statearr_29528_29550[(2)] = inst_29479);

(statearr_29528_29550[(1)] = (10));


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
var figwheel$client$file_reloading$state_machine__27165__auto__ = null;
var figwheel$client$file_reloading$state_machine__27165__auto____0 = (function (){
var statearr_29529 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29529[(0)] = figwheel$client$file_reloading$state_machine__27165__auto__);

(statearr_29529[(1)] = (1));

return statearr_29529;
});
var figwheel$client$file_reloading$state_machine__27165__auto____1 = (function (state_29505){
while(true){
var ret_value__27166__auto__ = (function (){try{while(true){
var result__27167__auto__ = switch__27164__auto__.call(null,state_29505);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27167__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27167__auto__;
}
break;
}
}catch (e29530){if((e29530 instanceof Object)){
var ex__27168__auto__ = e29530;
var statearr_29531_29551 = state_29505;
(statearr_29531_29551[(5)] = ex__27168__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29505);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29530;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29552 = state_29505;
state_29505 = G__29552;
continue;
} else {
return ret_value__27166__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__27165__auto__ = function(state_29505){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__27165__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__27165__auto____1.call(this,state_29505);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__27165__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__27165__auto____0;
figwheel$client$file_reloading$state_machine__27165__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__27165__auto____1;
return figwheel$client$file_reloading$state_machine__27165__auto__;
})()
})();
var state__27261__auto__ = (function (){var statearr_29532 = f__27260__auto__.call(null);
(statearr_29532[(6)] = c__27259__auto__);

return statearr_29532;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27261__auto__);
}));

return c__27259__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__29554 = arguments.length;
switch (G__29554) {
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

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__29556,callback){
var map__29557 = p__29556;
var map__29557__$1 = (((((!((map__29557 == null))))?(((((map__29557.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29557.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29557):map__29557);
var file_msg = map__29557__$1;
var namespace = cljs.core.get.call(null,map__29557__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,(function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
}));

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__29559){
var map__29560 = p__29559;
var map__29560__$1 = (((((!((map__29560 == null))))?(((((map__29560.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29560.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29560):map__29560);
var file_msg = map__29560__$1;
var namespace = cljs.core.get.call(null,map__29560__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return (!((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null)));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__29562){
var map__29563 = p__29562;
var map__29563__$1 = (((((!((map__29563 == null))))?(((((map__29563.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29563.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29563):map__29563);
var file_msg = map__29563__$1;
var namespace = cljs.core.get.call(null,map__29563__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__29565,callback){
var map__29566 = p__29565;
var map__29566__$1 = (((((!((map__29566 == null))))?(((((map__29566.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29566.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29566):map__29566);
var file_msg = map__29566__$1;
var request_url = cljs.core.get.call(null,map__29566__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__29566__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__27259__auto___29616 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27260__auto__ = (function (){var switch__27164__auto__ = (function (state_29601){
var state_val_29602 = (state_29601[(1)]);
if((state_val_29602 === (1))){
var inst_29575 = cljs.core.seq.call(null,files);
var inst_29576 = cljs.core.first.call(null,inst_29575);
var inst_29577 = cljs.core.next.call(null,inst_29575);
var inst_29578 = files;
var state_29601__$1 = (function (){var statearr_29603 = state_29601;
(statearr_29603[(7)] = inst_29578);

(statearr_29603[(8)] = inst_29577);

(statearr_29603[(9)] = inst_29576);

return statearr_29603;
})();
var statearr_29604_29617 = state_29601__$1;
(statearr_29604_29617[(2)] = null);

(statearr_29604_29617[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29602 === (2))){
var inst_29578 = (state_29601[(7)]);
var inst_29584 = (state_29601[(10)]);
var inst_29583 = cljs.core.seq.call(null,inst_29578);
var inst_29584__$1 = cljs.core.first.call(null,inst_29583);
var inst_29585 = cljs.core.next.call(null,inst_29583);
var inst_29586 = (inst_29584__$1 == null);
var inst_29587 = cljs.core.not.call(null,inst_29586);
var state_29601__$1 = (function (){var statearr_29605 = state_29601;
(statearr_29605[(11)] = inst_29585);

(statearr_29605[(10)] = inst_29584__$1);

return statearr_29605;
})();
if(inst_29587){
var statearr_29606_29618 = state_29601__$1;
(statearr_29606_29618[(1)] = (4));

} else {
var statearr_29607_29619 = state_29601__$1;
(statearr_29607_29619[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29602 === (3))){
var inst_29599 = (state_29601[(2)]);
var state_29601__$1 = state_29601;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29601__$1,inst_29599);
} else {
if((state_val_29602 === (4))){
var inst_29584 = (state_29601[(10)]);
var inst_29589 = figwheel.client.file_reloading.reload_js_file.call(null,inst_29584);
var state_29601__$1 = state_29601;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29601__$1,(7),inst_29589);
} else {
if((state_val_29602 === (5))){
var inst_29595 = cljs.core.async.close_BANG_.call(null,out);
var state_29601__$1 = state_29601;
var statearr_29608_29620 = state_29601__$1;
(statearr_29608_29620[(2)] = inst_29595);

(statearr_29608_29620[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29602 === (6))){
var inst_29597 = (state_29601[(2)]);
var state_29601__$1 = state_29601;
var statearr_29609_29621 = state_29601__$1;
(statearr_29609_29621[(2)] = inst_29597);

(statearr_29609_29621[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29602 === (7))){
var inst_29585 = (state_29601[(11)]);
var inst_29591 = (state_29601[(2)]);
var inst_29592 = cljs.core.async.put_BANG_.call(null,out,inst_29591);
var inst_29578 = inst_29585;
var state_29601__$1 = (function (){var statearr_29610 = state_29601;
(statearr_29610[(12)] = inst_29592);

(statearr_29610[(7)] = inst_29578);

return statearr_29610;
})();
var statearr_29611_29622 = state_29601__$1;
(statearr_29611_29622[(2)] = null);

(statearr_29611_29622[(1)] = (2));


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
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__27165__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__27165__auto____0 = (function (){
var statearr_29612 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29612[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__27165__auto__);

(statearr_29612[(1)] = (1));

return statearr_29612;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__27165__auto____1 = (function (state_29601){
while(true){
var ret_value__27166__auto__ = (function (){try{while(true){
var result__27167__auto__ = switch__27164__auto__.call(null,state_29601);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27167__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27167__auto__;
}
break;
}
}catch (e29613){if((e29613 instanceof Object)){
var ex__27168__auto__ = e29613;
var statearr_29614_29623 = state_29601;
(statearr_29614_29623[(5)] = ex__27168__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29601);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29613;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29624 = state_29601;
state_29601 = G__29624;
continue;
} else {
return ret_value__27166__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__27165__auto__ = function(state_29601){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__27165__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__27165__auto____1.call(this,state_29601);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__27165__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__27165__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__27165__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__27165__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__27165__auto__;
})()
})();
var state__27261__auto__ = (function (){var statearr_29615 = f__27260__auto__.call(null);
(statearr_29615[(6)] = c__27259__auto___29616);

return statearr_29615;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27261__auto__);
}));


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__29625,opts){
var map__29626 = p__29625;
var map__29626__$1 = (((((!((map__29626 == null))))?(((((map__29626.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29626.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29626):map__29626);
var eval_body = cljs.core.get.call(null,map__29626__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__29626__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e29628){var e = e29628;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,(function (n){
var temp__5718__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__29629_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__29629_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__29630){
var vec__29631 = p__29630;
var k = cljs.core.nth.call(null,vec__29631,(0),null);
var v = cljs.core.nth.call(null,vec__29631,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__29634){
var vec__29635 = p__29634;
var k = cljs.core.nth.call(null,vec__29635,(0),null);
var v = cljs.core.nth.call(null,vec__29635,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__29641,p__29642){
var map__29643 = p__29641;
var map__29643__$1 = (((((!((map__29643 == null))))?(((((map__29643.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29643.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29643):map__29643);
var opts = map__29643__$1;
var before_jsload = cljs.core.get.call(null,map__29643__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__29643__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__29643__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__29644 = p__29642;
var map__29644__$1 = (((((!((map__29644 == null))))?(((((map__29644.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29644.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29644):map__29644);
var msg = map__29644__$1;
var files = cljs.core.get.call(null,map__29644__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__29644__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__29644__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__27259__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27260__auto__ = (function (){var switch__27164__auto__ = (function (state_29798){
var state_val_29799 = (state_29798[(1)]);
if((state_val_29799 === (7))){
var inst_29660 = (state_29798[(7)]);
var inst_29661 = (state_29798[(8)]);
var inst_29658 = (state_29798[(9)]);
var inst_29659 = (state_29798[(10)]);
var inst_29666 = cljs.core._nth.call(null,inst_29659,inst_29661);
var inst_29667 = figwheel.client.file_reloading.eval_body.call(null,inst_29666,opts);
var inst_29668 = (inst_29661 + (1));
var tmp29800 = inst_29660;
var tmp29801 = inst_29658;
var tmp29802 = inst_29659;
var inst_29658__$1 = tmp29801;
var inst_29659__$1 = tmp29802;
var inst_29660__$1 = tmp29800;
var inst_29661__$1 = inst_29668;
var state_29798__$1 = (function (){var statearr_29803 = state_29798;
(statearr_29803[(7)] = inst_29660__$1);

(statearr_29803[(8)] = inst_29661__$1);

(statearr_29803[(9)] = inst_29658__$1);

(statearr_29803[(11)] = inst_29667);

(statearr_29803[(10)] = inst_29659__$1);

return statearr_29803;
})();
var statearr_29804_29887 = state_29798__$1;
(statearr_29804_29887[(2)] = null);

(statearr_29804_29887[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29799 === (20))){
var inst_29701 = (state_29798[(12)]);
var inst_29709 = figwheel.client.file_reloading.sort_files.call(null,inst_29701);
var state_29798__$1 = state_29798;
var statearr_29805_29888 = state_29798__$1;
(statearr_29805_29888[(2)] = inst_29709);

(statearr_29805_29888[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29799 === (27))){
var state_29798__$1 = state_29798;
var statearr_29806_29889 = state_29798__$1;
(statearr_29806_29889[(2)] = null);

(statearr_29806_29889[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29799 === (1))){
var inst_29650 = (state_29798[(13)]);
var inst_29647 = before_jsload.call(null,files);
var inst_29648 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_29649 = (function (){return (function (p1__29638_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__29638_SHARP_);
});
})();
var inst_29650__$1 = cljs.core.filter.call(null,inst_29649,files);
var inst_29651 = cljs.core.not_empty.call(null,inst_29650__$1);
var state_29798__$1 = (function (){var statearr_29807 = state_29798;
(statearr_29807[(14)] = inst_29648);

(statearr_29807[(13)] = inst_29650__$1);

(statearr_29807[(15)] = inst_29647);

return statearr_29807;
})();
if(cljs.core.truth_(inst_29651)){
var statearr_29808_29890 = state_29798__$1;
(statearr_29808_29890[(1)] = (2));

} else {
var statearr_29809_29891 = state_29798__$1;
(statearr_29809_29891[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29799 === (24))){
var state_29798__$1 = state_29798;
var statearr_29810_29892 = state_29798__$1;
(statearr_29810_29892[(2)] = null);

(statearr_29810_29892[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29799 === (39))){
var inst_29751 = (state_29798[(16)]);
var state_29798__$1 = state_29798;
var statearr_29811_29893 = state_29798__$1;
(statearr_29811_29893[(2)] = inst_29751);

(statearr_29811_29893[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29799 === (46))){
var inst_29793 = (state_29798[(2)]);
var state_29798__$1 = state_29798;
var statearr_29812_29894 = state_29798__$1;
(statearr_29812_29894[(2)] = inst_29793);

(statearr_29812_29894[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29799 === (4))){
var inst_29695 = (state_29798[(2)]);
var inst_29696 = cljs.core.List.EMPTY;
var inst_29697 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_29696);
var inst_29698 = (function (){return (function (p1__29639_SHARP_){
var and__4115__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__29639_SHARP_);
if(cljs.core.truth_(and__4115__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__29639_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__29639_SHARP_))));
} else {
return and__4115__auto__;
}
});
})();
var inst_29699 = cljs.core.filter.call(null,inst_29698,files);
var inst_29700 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_29701 = cljs.core.concat.call(null,inst_29699,inst_29700);
var state_29798__$1 = (function (){var statearr_29813 = state_29798;
(statearr_29813[(12)] = inst_29701);

(statearr_29813[(17)] = inst_29697);

(statearr_29813[(18)] = inst_29695);

return statearr_29813;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_29814_29895 = state_29798__$1;
(statearr_29814_29895[(1)] = (16));

} else {
var statearr_29815_29896 = state_29798__$1;
(statearr_29815_29896[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29799 === (15))){
var inst_29685 = (state_29798[(2)]);
var state_29798__$1 = state_29798;
var statearr_29816_29897 = state_29798__$1;
(statearr_29816_29897[(2)] = inst_29685);

(statearr_29816_29897[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29799 === (21))){
var inst_29711 = (state_29798[(19)]);
var inst_29711__$1 = (state_29798[(2)]);
var inst_29712 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_29711__$1);
var state_29798__$1 = (function (){var statearr_29817 = state_29798;
(statearr_29817[(19)] = inst_29711__$1);

return statearr_29817;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29798__$1,(22),inst_29712);
} else {
if((state_val_29799 === (31))){
var inst_29796 = (state_29798[(2)]);
var state_29798__$1 = state_29798;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29798__$1,inst_29796);
} else {
if((state_val_29799 === (32))){
var inst_29751 = (state_29798[(16)]);
var inst_29756 = inst_29751.cljs$lang$protocol_mask$partition0$;
var inst_29757 = (inst_29756 & (64));
var inst_29758 = inst_29751.cljs$core$ISeq$;
var inst_29759 = (cljs.core.PROTOCOL_SENTINEL === inst_29758);
var inst_29760 = ((inst_29757) || (inst_29759));
var state_29798__$1 = state_29798;
if(cljs.core.truth_(inst_29760)){
var statearr_29818_29898 = state_29798__$1;
(statearr_29818_29898[(1)] = (35));

} else {
var statearr_29819_29899 = state_29798__$1;
(statearr_29819_29899[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29799 === (40))){
var inst_29773 = (state_29798[(20)]);
var inst_29772 = (state_29798[(2)]);
var inst_29773__$1 = cljs.core.get.call(null,inst_29772,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_29774 = cljs.core.get.call(null,inst_29772,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_29775 = cljs.core.not_empty.call(null,inst_29773__$1);
var state_29798__$1 = (function (){var statearr_29820 = state_29798;
(statearr_29820[(20)] = inst_29773__$1);

(statearr_29820[(21)] = inst_29774);

return statearr_29820;
})();
if(cljs.core.truth_(inst_29775)){
var statearr_29821_29900 = state_29798__$1;
(statearr_29821_29900[(1)] = (41));

} else {
var statearr_29822_29901 = state_29798__$1;
(statearr_29822_29901[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29799 === (33))){
var state_29798__$1 = state_29798;
var statearr_29823_29902 = state_29798__$1;
(statearr_29823_29902[(2)] = false);

(statearr_29823_29902[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29799 === (13))){
var inst_29671 = (state_29798[(22)]);
var inst_29675 = cljs.core.chunk_first.call(null,inst_29671);
var inst_29676 = cljs.core.chunk_rest.call(null,inst_29671);
var inst_29677 = cljs.core.count.call(null,inst_29675);
var inst_29658 = inst_29676;
var inst_29659 = inst_29675;
var inst_29660 = inst_29677;
var inst_29661 = (0);
var state_29798__$1 = (function (){var statearr_29824 = state_29798;
(statearr_29824[(7)] = inst_29660);

(statearr_29824[(8)] = inst_29661);

(statearr_29824[(9)] = inst_29658);

(statearr_29824[(10)] = inst_29659);

return statearr_29824;
})();
var statearr_29825_29903 = state_29798__$1;
(statearr_29825_29903[(2)] = null);

(statearr_29825_29903[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29799 === (22))){
var inst_29714 = (state_29798[(23)]);
var inst_29719 = (state_29798[(24)]);
var inst_29715 = (state_29798[(25)]);
var inst_29711 = (state_29798[(19)]);
var inst_29714__$1 = (state_29798[(2)]);
var inst_29715__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_29714__$1);
var inst_29716 = (function (){var all_files = inst_29711;
var res_SINGLEQUOTE_ = inst_29714__$1;
var res = inst_29715__$1;
return (function (p1__29640_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__29640_SHARP_));
});
})();
var inst_29717 = cljs.core.filter.call(null,inst_29716,inst_29714__$1);
var inst_29718 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_29719__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_29718);
var inst_29720 = cljs.core.not_empty.call(null,inst_29719__$1);
var state_29798__$1 = (function (){var statearr_29826 = state_29798;
(statearr_29826[(23)] = inst_29714__$1);

(statearr_29826[(24)] = inst_29719__$1);

(statearr_29826[(26)] = inst_29717);

(statearr_29826[(25)] = inst_29715__$1);

return statearr_29826;
})();
if(cljs.core.truth_(inst_29720)){
var statearr_29827_29904 = state_29798__$1;
(statearr_29827_29904[(1)] = (23));

} else {
var statearr_29828_29905 = state_29798__$1;
(statearr_29828_29905[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29799 === (36))){
var state_29798__$1 = state_29798;
var statearr_29829_29906 = state_29798__$1;
(statearr_29829_29906[(2)] = false);

(statearr_29829_29906[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29799 === (41))){
var inst_29773 = (state_29798[(20)]);
var inst_29777 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_29778 = cljs.core.map.call(null,inst_29777,inst_29773);
var inst_29779 = cljs.core.pr_str.call(null,inst_29778);
var inst_29780 = ["figwheel-no-load meta-data: ",inst_29779].join('');
var inst_29781 = figwheel.client.utils.log.call(null,inst_29780);
var state_29798__$1 = state_29798;
var statearr_29830_29907 = state_29798__$1;
(statearr_29830_29907[(2)] = inst_29781);

(statearr_29830_29907[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29799 === (43))){
var inst_29774 = (state_29798[(21)]);
var inst_29784 = (state_29798[(2)]);
var inst_29785 = cljs.core.not_empty.call(null,inst_29774);
var state_29798__$1 = (function (){var statearr_29831 = state_29798;
(statearr_29831[(27)] = inst_29784);

return statearr_29831;
})();
if(cljs.core.truth_(inst_29785)){
var statearr_29832_29908 = state_29798__$1;
(statearr_29832_29908[(1)] = (44));

} else {
var statearr_29833_29909 = state_29798__$1;
(statearr_29833_29909[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29799 === (29))){
var inst_29714 = (state_29798[(23)]);
var inst_29719 = (state_29798[(24)]);
var inst_29717 = (state_29798[(26)]);
var inst_29715 = (state_29798[(25)]);
var inst_29751 = (state_29798[(16)]);
var inst_29711 = (state_29798[(19)]);
var inst_29747 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_29750 = (function (){var all_files = inst_29711;
var res_SINGLEQUOTE_ = inst_29714;
var res = inst_29715;
var files_not_loaded = inst_29717;
var dependencies_that_loaded = inst_29719;
return (function (p__29749){
var map__29834 = p__29749;
var map__29834__$1 = (((((!((map__29834 == null))))?(((((map__29834.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29834.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29834):map__29834);
var namespace = cljs.core.get.call(null,map__29834__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
var inst_29751__$1 = cljs.core.group_by.call(null,inst_29750,inst_29717);
var inst_29753 = (inst_29751__$1 == null);
var inst_29754 = cljs.core.not.call(null,inst_29753);
var state_29798__$1 = (function (){var statearr_29836 = state_29798;
(statearr_29836[(16)] = inst_29751__$1);

(statearr_29836[(28)] = inst_29747);

return statearr_29836;
})();
if(inst_29754){
var statearr_29837_29910 = state_29798__$1;
(statearr_29837_29910[(1)] = (32));

} else {
var statearr_29838_29911 = state_29798__$1;
(statearr_29838_29911[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29799 === (44))){
var inst_29774 = (state_29798[(21)]);
var inst_29787 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_29774);
var inst_29788 = cljs.core.pr_str.call(null,inst_29787);
var inst_29789 = ["not required: ",inst_29788].join('');
var inst_29790 = figwheel.client.utils.log.call(null,inst_29789);
var state_29798__$1 = state_29798;
var statearr_29839_29912 = state_29798__$1;
(statearr_29839_29912[(2)] = inst_29790);

(statearr_29839_29912[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29799 === (6))){
var inst_29692 = (state_29798[(2)]);
var state_29798__$1 = state_29798;
var statearr_29840_29913 = state_29798__$1;
(statearr_29840_29913[(2)] = inst_29692);

(statearr_29840_29913[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29799 === (28))){
var inst_29717 = (state_29798[(26)]);
var inst_29744 = (state_29798[(2)]);
var inst_29745 = cljs.core.not_empty.call(null,inst_29717);
var state_29798__$1 = (function (){var statearr_29841 = state_29798;
(statearr_29841[(29)] = inst_29744);

return statearr_29841;
})();
if(cljs.core.truth_(inst_29745)){
var statearr_29842_29914 = state_29798__$1;
(statearr_29842_29914[(1)] = (29));

} else {
var statearr_29843_29915 = state_29798__$1;
(statearr_29843_29915[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29799 === (25))){
var inst_29715 = (state_29798[(25)]);
var inst_29731 = (state_29798[(2)]);
var inst_29732 = cljs.core.not_empty.call(null,inst_29715);
var state_29798__$1 = (function (){var statearr_29844 = state_29798;
(statearr_29844[(30)] = inst_29731);

return statearr_29844;
})();
if(cljs.core.truth_(inst_29732)){
var statearr_29845_29916 = state_29798__$1;
(statearr_29845_29916[(1)] = (26));

} else {
var statearr_29846_29917 = state_29798__$1;
(statearr_29846_29917[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29799 === (34))){
var inst_29767 = (state_29798[(2)]);
var state_29798__$1 = state_29798;
if(cljs.core.truth_(inst_29767)){
var statearr_29847_29918 = state_29798__$1;
(statearr_29847_29918[(1)] = (38));

} else {
var statearr_29848_29919 = state_29798__$1;
(statearr_29848_29919[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29799 === (17))){
var state_29798__$1 = state_29798;
var statearr_29849_29920 = state_29798__$1;
(statearr_29849_29920[(2)] = recompile_dependents);

(statearr_29849_29920[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29799 === (3))){
var state_29798__$1 = state_29798;
var statearr_29850_29921 = state_29798__$1;
(statearr_29850_29921[(2)] = null);

(statearr_29850_29921[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29799 === (12))){
var inst_29688 = (state_29798[(2)]);
var state_29798__$1 = state_29798;
var statearr_29851_29922 = state_29798__$1;
(statearr_29851_29922[(2)] = inst_29688);

(statearr_29851_29922[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29799 === (2))){
var inst_29650 = (state_29798[(13)]);
var inst_29657 = cljs.core.seq.call(null,inst_29650);
var inst_29658 = inst_29657;
var inst_29659 = null;
var inst_29660 = (0);
var inst_29661 = (0);
var state_29798__$1 = (function (){var statearr_29852 = state_29798;
(statearr_29852[(7)] = inst_29660);

(statearr_29852[(8)] = inst_29661);

(statearr_29852[(9)] = inst_29658);

(statearr_29852[(10)] = inst_29659);

return statearr_29852;
})();
var statearr_29853_29923 = state_29798__$1;
(statearr_29853_29923[(2)] = null);

(statearr_29853_29923[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29799 === (23))){
var inst_29714 = (state_29798[(23)]);
var inst_29719 = (state_29798[(24)]);
var inst_29717 = (state_29798[(26)]);
var inst_29715 = (state_29798[(25)]);
var inst_29711 = (state_29798[(19)]);
var inst_29722 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_29724 = (function (){var all_files = inst_29711;
var res_SINGLEQUOTE_ = inst_29714;
var res = inst_29715;
var files_not_loaded = inst_29717;
var dependencies_that_loaded = inst_29719;
return (function (p__29723){
var map__29854 = p__29723;
var map__29854__$1 = (((((!((map__29854 == null))))?(((((map__29854.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29854.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29854):map__29854);
var request_url = cljs.core.get.call(null,map__29854__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
})();
var inst_29725 = cljs.core.reverse.call(null,inst_29719);
var inst_29726 = cljs.core.map.call(null,inst_29724,inst_29725);
var inst_29727 = cljs.core.pr_str.call(null,inst_29726);
var inst_29728 = figwheel.client.utils.log.call(null,inst_29727);
var state_29798__$1 = (function (){var statearr_29856 = state_29798;
(statearr_29856[(31)] = inst_29722);

return statearr_29856;
})();
var statearr_29857_29924 = state_29798__$1;
(statearr_29857_29924[(2)] = inst_29728);

(statearr_29857_29924[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29799 === (35))){
var state_29798__$1 = state_29798;
var statearr_29858_29925 = state_29798__$1;
(statearr_29858_29925[(2)] = true);

(statearr_29858_29925[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29799 === (19))){
var inst_29701 = (state_29798[(12)]);
var inst_29707 = figwheel.client.file_reloading.expand_files.call(null,inst_29701);
var state_29798__$1 = state_29798;
var statearr_29859_29926 = state_29798__$1;
(statearr_29859_29926[(2)] = inst_29707);

(statearr_29859_29926[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29799 === (11))){
var state_29798__$1 = state_29798;
var statearr_29860_29927 = state_29798__$1;
(statearr_29860_29927[(2)] = null);

(statearr_29860_29927[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29799 === (9))){
var inst_29690 = (state_29798[(2)]);
var state_29798__$1 = state_29798;
var statearr_29861_29928 = state_29798__$1;
(statearr_29861_29928[(2)] = inst_29690);

(statearr_29861_29928[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29799 === (5))){
var inst_29660 = (state_29798[(7)]);
var inst_29661 = (state_29798[(8)]);
var inst_29663 = (inst_29661 < inst_29660);
var inst_29664 = inst_29663;
var state_29798__$1 = state_29798;
if(cljs.core.truth_(inst_29664)){
var statearr_29862_29929 = state_29798__$1;
(statearr_29862_29929[(1)] = (7));

} else {
var statearr_29863_29930 = state_29798__$1;
(statearr_29863_29930[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29799 === (14))){
var inst_29671 = (state_29798[(22)]);
var inst_29680 = cljs.core.first.call(null,inst_29671);
var inst_29681 = figwheel.client.file_reloading.eval_body.call(null,inst_29680,opts);
var inst_29682 = cljs.core.next.call(null,inst_29671);
var inst_29658 = inst_29682;
var inst_29659 = null;
var inst_29660 = (0);
var inst_29661 = (0);
var state_29798__$1 = (function (){var statearr_29864 = state_29798;
(statearr_29864[(7)] = inst_29660);

(statearr_29864[(8)] = inst_29661);

(statearr_29864[(9)] = inst_29658);

(statearr_29864[(32)] = inst_29681);

(statearr_29864[(10)] = inst_29659);

return statearr_29864;
})();
var statearr_29865_29931 = state_29798__$1;
(statearr_29865_29931[(2)] = null);

(statearr_29865_29931[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29799 === (45))){
var state_29798__$1 = state_29798;
var statearr_29866_29932 = state_29798__$1;
(statearr_29866_29932[(2)] = null);

(statearr_29866_29932[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29799 === (26))){
var inst_29714 = (state_29798[(23)]);
var inst_29719 = (state_29798[(24)]);
var inst_29717 = (state_29798[(26)]);
var inst_29715 = (state_29798[(25)]);
var inst_29711 = (state_29798[(19)]);
var inst_29734 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_29736 = (function (){var all_files = inst_29711;
var res_SINGLEQUOTE_ = inst_29714;
var res = inst_29715;
var files_not_loaded = inst_29717;
var dependencies_that_loaded = inst_29719;
return (function (p__29735){
var map__29867 = p__29735;
var map__29867__$1 = (((((!((map__29867 == null))))?(((((map__29867.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29867.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29867):map__29867);
var namespace = cljs.core.get.call(null,map__29867__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__29867__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
})();
var inst_29737 = cljs.core.map.call(null,inst_29736,inst_29715);
var inst_29738 = cljs.core.pr_str.call(null,inst_29737);
var inst_29739 = figwheel.client.utils.log.call(null,inst_29738);
var inst_29740 = (function (){var all_files = inst_29711;
var res_SINGLEQUOTE_ = inst_29714;
var res = inst_29715;
var files_not_loaded = inst_29717;
var dependencies_that_loaded = inst_29719;
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
})();
var inst_29741 = setTimeout(inst_29740,(10));
var state_29798__$1 = (function (){var statearr_29869 = state_29798;
(statearr_29869[(33)] = inst_29739);

(statearr_29869[(34)] = inst_29734);

return statearr_29869;
})();
var statearr_29870_29933 = state_29798__$1;
(statearr_29870_29933[(2)] = inst_29741);

(statearr_29870_29933[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29799 === (16))){
var state_29798__$1 = state_29798;
var statearr_29871_29934 = state_29798__$1;
(statearr_29871_29934[(2)] = reload_dependents);

(statearr_29871_29934[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29799 === (38))){
var inst_29751 = (state_29798[(16)]);
var inst_29769 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29751);
var state_29798__$1 = state_29798;
var statearr_29872_29935 = state_29798__$1;
(statearr_29872_29935[(2)] = inst_29769);

(statearr_29872_29935[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29799 === (30))){
var state_29798__$1 = state_29798;
var statearr_29873_29936 = state_29798__$1;
(statearr_29873_29936[(2)] = null);

(statearr_29873_29936[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29799 === (10))){
var inst_29671 = (state_29798[(22)]);
var inst_29673 = cljs.core.chunked_seq_QMARK_.call(null,inst_29671);
var state_29798__$1 = state_29798;
if(inst_29673){
var statearr_29874_29937 = state_29798__$1;
(statearr_29874_29937[(1)] = (13));

} else {
var statearr_29875_29938 = state_29798__$1;
(statearr_29875_29938[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29799 === (18))){
var inst_29705 = (state_29798[(2)]);
var state_29798__$1 = state_29798;
if(cljs.core.truth_(inst_29705)){
var statearr_29876_29939 = state_29798__$1;
(statearr_29876_29939[(1)] = (19));

} else {
var statearr_29877_29940 = state_29798__$1;
(statearr_29877_29940[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29799 === (42))){
var state_29798__$1 = state_29798;
var statearr_29878_29941 = state_29798__$1;
(statearr_29878_29941[(2)] = null);

(statearr_29878_29941[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29799 === (37))){
var inst_29764 = (state_29798[(2)]);
var state_29798__$1 = state_29798;
var statearr_29879_29942 = state_29798__$1;
(statearr_29879_29942[(2)] = inst_29764);

(statearr_29879_29942[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29799 === (8))){
var inst_29658 = (state_29798[(9)]);
var inst_29671 = (state_29798[(22)]);
var inst_29671__$1 = cljs.core.seq.call(null,inst_29658);
var state_29798__$1 = (function (){var statearr_29880 = state_29798;
(statearr_29880[(22)] = inst_29671__$1);

return statearr_29880;
})();
if(inst_29671__$1){
var statearr_29881_29943 = state_29798__$1;
(statearr_29881_29943[(1)] = (10));

} else {
var statearr_29882_29944 = state_29798__$1;
(statearr_29882_29944[(1)] = (11));

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
var figwheel$client$file_reloading$reload_js_files_$_state_machine__27165__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__27165__auto____0 = (function (){
var statearr_29883 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29883[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__27165__auto__);

(statearr_29883[(1)] = (1));

return statearr_29883;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__27165__auto____1 = (function (state_29798){
while(true){
var ret_value__27166__auto__ = (function (){try{while(true){
var result__27167__auto__ = switch__27164__auto__.call(null,state_29798);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27167__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27167__auto__;
}
break;
}
}catch (e29884){if((e29884 instanceof Object)){
var ex__27168__auto__ = e29884;
var statearr_29885_29945 = state_29798;
(statearr_29885_29945[(5)] = ex__27168__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29798);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29884;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29946 = state_29798;
state_29798 = G__29946;
continue;
} else {
return ret_value__27166__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__27165__auto__ = function(state_29798){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__27165__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__27165__auto____1.call(this,state_29798);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__27165__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__27165__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__27165__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__27165__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__27165__auto__;
})()
})();
var state__27261__auto__ = (function (){var statearr_29886 = f__27260__auto__.call(null);
(statearr_29886[(6)] = c__27259__auto__);

return statearr_29886;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27261__auto__);
}));

return c__27259__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__29949,link){
var map__29950 = p__29949;
var map__29950__$1 = (((((!((map__29950 == null))))?(((((map__29950.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29950.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29950):map__29950);
var file = cljs.core.get.call(null,map__29950__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5720__auto__ = link.href;
if(cljs.core.truth_(temp__5720__auto__)){
var link_href = temp__5720__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,(function (p1__29947_SHARP_,p2__29948_SHARP_){
if(cljs.core._EQ_.call(null,p1__29947_SHARP_,p2__29948_SHARP_)){
return p1__29947_SHARP_;
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
var temp__5720__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__29953){
var map__29954 = p__29953;
var map__29954__$1 = (((((!((map__29954 == null))))?(((((map__29954.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29954.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29954):map__29954);
var match_length = cljs.core.get.call(null,map__29954__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__29954__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__29952_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__29952_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__29956_SHARP_,p2__29957_SHARP_){
return cljs.core.assoc.call(null,p1__29956_SHARP_,cljs.core.get.call(null,p2__29957_SHARP_,key),p2__29957_SHARP_);
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
var loaded_f_datas_29958 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_29958);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_29958);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__29959,p__29960){
var map__29961 = p__29959;
var map__29961__$1 = (((((!((map__29961 == null))))?(((((map__29961.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29961.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29961):map__29961);
var on_cssload = cljs.core.get.call(null,map__29961__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__29962 = p__29960;
var map__29962__$1 = (((((!((map__29962 == null))))?(((((map__29962.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29962.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29962):map__29962);
var files_msg = map__29962__$1;
var files = cljs.core.get.call(null,map__29962__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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

//# sourceMappingURL=file_reloading.js.map?rel=1607206820169
