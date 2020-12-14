// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('cljs_weather.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs_weather.utils');
goog.require('cljs_weather.components.card');
goog.require('cljs_weather.weather');
goog.require('reagent.core');
goog.require('reagent.dom');
goog.require('alandipert.storage_atom');
goog.require('clojure.string');
cljs_weather.core.view = alandipert.storage_atom.local_storage(reagent.core.atom.cljs$core$IFn$_invoke$arity$1("Home"),cljs.core.cst$kw$view);
cljs_weather.core.set_view_BANG_ = (function cljs_weather$core$set_view_BANG_(component){
cljs.core.reset_BANG_(cljs_weather.core.view,component);

return console.log(["Changing to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(component)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs_weather.core.view))].join(''));
});
if((typeof cljs_weather !== 'undefined') && (typeof cljs_weather.core !== 'undefined') && (typeof cljs_weather.core.app_state !== 'undefined')){
} else {
cljs_weather.core.app_state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$title,"Clear as Day",cljs.core.cst$kw$sub_DASH_title,"get to enjoy the night life",cljs.core.cst$kw$description,"When a city full of unsuspecting people wake up in a world of darkness, how do they cope?",cljs.core.cst$kw$mobile_QMARK_,false], null));
}
if((typeof cljs_weather !== 'undefined') && (typeof cljs_weather.core !== 'undefined') && (typeof cljs_weather.core.listen_links !== 'undefined')){
} else {
cljs_weather.core.listen_links = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,"Apple Podcasts",cljs.core.cst$kw$img_DASH_resource,"img/apple.png",cljs.core.cst$kw$url,"https://podcasts.apple.com/us/podcast/encounters-a-paranormal-experience/id1407471024"], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,"Spotify",cljs.core.cst$kw$img_DASH_resource,"",cljs.core.cst$kw$url,"https://open.spotify.com/show/0bcymnpw8brMosTC32Wn8h?si=nUkKOpjZS2GZANDpCQX4zQ"], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,"Google Podcasts",cljs.core.cst$kw$img_DASH_resource,"img/google-podcasts.png",cljs.core.cst$kw$url,"https://www.google.com/podcasts?feed=aHR0cDovL2VuY291bnRlcnN0aGVwb2RjYXN0LmxpYnN5bi5jb20vcnNz"], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,"Youtube",cljs.core.cst$kw$img_DASH_resource,"",cljs.core.cst$kw$url,"https://www.youtube.com/channel/UCo6wYpnquR6OwWR5CM9ODDw"], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,"Stitcher",cljs.core.cst$kw$img_DASH_resource,"",cljs.core.cst$kw$url,"https://www.stitcher.com/show/encounters-a-paranormal-experience"], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,"TuneIn",cljs.core.cst$kw$img_DASH_resource,"",cljs.core.cst$kw$url,"https://tunein.com/podcasts/Storytelling-Podcasts/Encounters-A-Paranormal-Experience-p1174861/"], null)], null);
}
if((typeof cljs_weather !== 'undefined') && (typeof cljs_weather.core !== 'undefined') && (typeof cljs_weather.core.social_links !== 'undefined')){
} else {
cljs_weather.core.social_links = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,"Facebook",cljs.core.cst$kw$img_DASH_resource,"",cljs.core.cst$kw$url,"https://www.facebook.com/encountersthepodcast/"], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,"Tumblr",cljs.core.cst$kw$img_DASH_resource,"",cljs.core.cst$kw$url,""], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,"RSS",cljs.core.cst$kw$img_DASH_resource,"",cljs.core.cst$kw$url,"http://encountersthepodcast.libsyn.com/rss"], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,"Patreon",cljs.core.cst$kw$img_DASH_resource,"",cljs.core.cst$kw$url,""], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,"Email Us",cljs.core.cst$kw$img_DASH_resource,"",cljs.core.cst$kw$url,"mailto:encountersthepodcast@gmail.com"], null)], null);
}
cljs_weather.core.link = (function cljs_weather$core$link(p__27408){
var map__27409 = p__27408;
var map__27409__$1 = (((((!((map__27409 == null))))?(((((map__27409.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27409.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27409):map__27409);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27409__$1,cljs.core.cst$kw$name);
var img_resource = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27409__$1,cljs.core.cst$kw$img_DASH_resource);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27409__$1,cljs.core.cst$kw$url);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$grid_DASH_container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$links,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,url], null),name], null)], null)], null);
});
cljs_weather.core.routing_button = (function cljs_weather$core$routing_button(name){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,(function (){
return cljs_weather.core.set_view_BANG_(name);
})], null),name], null);
});
cljs_weather.core.horizontal_div = (function cljs_weather$core$horizontal_div(var_args){
var args__4742__auto__ = [];
var len__4736__auto___27412 = arguments.length;
var i__4737__auto___27413 = (0);
while(true){
if((i__4737__auto___27413 < len__4736__auto___27412)){
args__4742__auto__.push((arguments[i__4737__auto___27413]));

var G__27414 = (i__4737__auto___27413 + (1));
i__4737__auto___27413 = G__27414;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return cljs_weather.core.horizontal_div.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(cljs_weather.core.horizontal_div.cljs$core$IFn$_invoke$arity$variadic = (function (b){

var keyw = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(["col-xs-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(Math.floor(((12) / cljs.core.count(b))))].join(''));
var fixed = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (x){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [keyw,x], null);
}),b);
return cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$kw$div$container_DASH_fluid,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$kw$div$row,null,(1),null)),fixed)))),null,(1),null))))));
}));

(cljs_weather.core.horizontal_div.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(cljs_weather.core.horizontal_div.cljs$lang$applyTo = (function (seq27411){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27411));
}));

cljs_weather.core.navbar = (function cljs_weather$core$navbar(views){
var map__27415 = cljs.core.deref(cljs_weather.core.app_state);
var map__27415__$1 = (((((!((map__27415 == null))))?(((((map__27415.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27415.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27415):map__27415);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27415__$1,cljs.core.cst$kw$title);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_weather.components.card.card,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h1,clojure.string.upper_case(title)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs_weather.core.routing_button,views)], null);
});
cljs_weather.core.side_bar = (function cljs_weather$core$side_bar(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_weather.components.card.card,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs_weather.core.link,cljs_weather.core.listen_links),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs_weather.core.link,cljs_weather.core.social_links)], null);
});
cljs_weather.core.hdr = (function cljs_weather$core$hdr(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h2,clojure.string.upper_case(text)], null);
});
cljs_weather.core.home = (function cljs_weather$core$home(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_weather.components.card.card,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_weather.core.hdr,"now playing"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,cljs.core.cst$kw$sub_DASH_title.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs_weather.core.app_state))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,cljs.core.cst$kw$description.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs_weather.core.app_state))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$iframe,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$border,"solid 1px #e4edf2;"], null),cljs.core.cst$kw$src,"https://www.stitcher.com/embed/235470",cljs.core.cst$kw$width,"220",cljs.core.cst$kw$height,"150",cljs.core.cst$kw$frameborder,"0",cljs.core.cst$kw$scrolling,"no"], null)], null)], null)], null);
});
cljs_weather.core.characters = (function cljs_weather$core$characters(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_weather.components.card.card,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_weather.core.hdr,"Characters"], null)], null);
});
cljs_weather.core.episodes = (function cljs_weather$core$episodes(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_weather.components.card.card,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_weather.core.hdr,"Episodes"], null)], null);
});
cljs_weather.core.blog = (function cljs_weather$core$blog(){
return cljs_weather.components.card.styled_card.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$height,"100%"], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_weather.core.hdr,"Blog"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$iframe,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$src,"https://relaxidaisical.blogspot.com/",cljs.core.cst$kw$width,"100%",cljs.core.cst$kw$height,"50%",cljs.core.cst$kw$frameborder,"0",cljs.core.cst$kw$scrolling,"yes"], null)], null)], 0));
});
cljs_weather.core.app = (function cljs_weather$core$app(){
var views = new cljs.core.PersistentArrayMap(null, 4, ["Home",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_weather.core.home], null),"Episodes",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_weather.core.episodes], null),"Characters",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_weather.core.characters], null),"Blog",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_weather.core.blog], null)], null);
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$float,"left",cljs.core.cst$kw$width,"30%"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_weather.core.navbar,cljs.core.keys(views)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_weather.core.side_bar], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$float,"right",cljs.core.cst$kw$width,"70%"], null)], null),cljs.core.get.cljs$core$IFn$_invoke$arity$2(views,cljs.core.deref(cljs_weather.core.view))], null)], null);
});
});
reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_weather.core.app], null),document.body);
