// Compiled by ClojureScript 1.10.773 {:target :nodejs}
goog.provide('devtools.formatters.budgeting');
goog.require('cljs.core');
goog.require('devtools.formatters.templating');
goog.require('devtools.formatters.state');
goog.require('devtools.formatters.helpers');
goog.require('devtools.formatters.markup');
devtools.formatters.budgeting.header_expander_depth_cost = (2);
devtools.formatters.budgeting.over_budget_values = (((typeof WeakSet !== 'undefined'))?(new WeakSet()):cljs.core.volatile_BANG_.call(null,cljs.core.PersistentHashSet.EMPTY));
devtools.formatters.budgeting.add_over_budget_value_BANG_ = (function devtools$formatters$budgeting$add_over_budget_value_BANG_(value){
if(cljs.core.volatile_QMARK_.call(null,devtools.formatters.budgeting.over_budget_values)){
return cljs.core.vreset_BANG_.call(null,devtools.formatters.budgeting.over_budget_values,cljs.core.conj.call(null,cljs.core.deref.call(null,devtools.formatters.budgeting.over_budget_values),value));
} else {
var o__32461__auto__ = devtools.formatters.budgeting.over_budget_values;
return (o__32461__auto__["add"]).call(o__32461__auto__,value);
}
});
devtools.formatters.budgeting.delete_over_budget_value_BANG_ = (function devtools$formatters$budgeting$delete_over_budget_value_BANG_(value){
if(cljs.core.volatile_QMARK_.call(null,devtools.formatters.budgeting.over_budget_values)){
return cljs.core.vreset_BANG_.call(null,devtools.formatters.budgeting.over_budget_values,cljs.core.disj.call(null,cljs.core.deref.call(null,devtools.formatters.budgeting.over_budget_values),value));
} else {
var o__32461__auto__ = devtools.formatters.budgeting.over_budget_values;
return (o__32461__auto__["delete"]).call(o__32461__auto__,value);
}
});
devtools.formatters.budgeting.has_over_budget_value_QMARK_ = (function devtools$formatters$budgeting$has_over_budget_value_QMARK_(value){
if(cljs.core.volatile_QMARK_.call(null,devtools.formatters.budgeting.over_budget_values)){
return cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,devtools.formatters.budgeting.over_budget_values),value);
} else {
var o__32461__auto__ = devtools.formatters.budgeting.over_budget_values;
return (o__32461__auto__["has"]).call(o__32461__auto__,value);
}
});
devtools.formatters.budgeting.object_reference_QMARK_ = (function devtools$formatters$budgeting$object_reference_QMARK_(json_ml){
return cljs.core._EQ_.call(null,cljs.core.first.call(null,json_ml),"object");
});
devtools.formatters.budgeting.determine_depth = (function devtools$formatters$budgeting$determine_depth(json_ml){
if(cljs.core.array_QMARK_.call(null,json_ml)){
return (cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,devtools.formatters.budgeting.determine_depth,json_ml)) + (1));
} else {
return (0);
}
});
devtools.formatters.budgeting.has_any_object_reference_QMARK_ = (function devtools$formatters$budgeting$has_any_object_reference_QMARK_(json_ml){
if(cljs.core.array_QMARK_.call(null,json_ml)){
if(devtools.formatters.budgeting.object_reference_QMARK_.call(null,json_ml)){
return true;
} else {
return cljs.core.some.call(null,devtools.formatters.budgeting.has_any_object_reference_QMARK_,json_ml);
}
} else {
return null;
}
});
devtools.formatters.budgeting.transfer_remaining_depth_budget_BANG_ = (function devtools$formatters$budgeting$transfer_remaining_depth_budget_BANG_(object_reference,depth_budget){
if((!((depth_budget < (0))))){
} else {
throw (new Error("Assert failed: (not (neg? depth-budget))"));
}

var data = cljs.core.second.call(null,object_reference);
var _ = ((cljs.core.object_QMARK_.call(null,data))?null:(function(){throw (new Error("Assert failed: (object? data)"))})());
var config = (data["config"]);
var G__33182 = data;
var target__32466__auto__ = G__33182;
if(cljs.core.truth_(target__32466__auto__)){
} else {
throw (new Error(["Assert failed: ",["unable to locate object path ",null," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__33182)].join(''),"\n","target__32466__auto__"].join('')));
}

(target__32466__auto__["config"] = devtools.formatters.state.set_depth_budget.call(null,config,depth_budget));

return G__33182;
});
devtools.formatters.budgeting.distribute_budget_BANG_ = (function devtools$formatters$budgeting$distribute_budget_BANG_(json_ml,depth_budget){
if((!((depth_budget < (0))))){
} else {
throw (new Error("Assert failed: (not (neg? depth-budget))"));
}

if(cljs.core.array_QMARK_.call(null,json_ml)){
var new_depth_budget_33187 = (depth_budget - (1));
if(devtools.formatters.budgeting.object_reference_QMARK_.call(null,json_ml)){
devtools.formatters.budgeting.transfer_remaining_depth_budget_BANG_.call(null,json_ml,new_depth_budget_33187);
} else {
var seq__33183_33188 = cljs.core.seq.call(null,json_ml);
var chunk__33184_33189 = null;
var count__33185_33190 = (0);
var i__33186_33191 = (0);
while(true){
if((i__33186_33191 < count__33185_33190)){
var item_33192 = cljs.core._nth.call(null,chunk__33184_33189,i__33186_33191);
devtools.formatters.budgeting.distribute_budget_BANG_.call(null,item_33192,new_depth_budget_33187);


var G__33193 = seq__33183_33188;
var G__33194 = chunk__33184_33189;
var G__33195 = count__33185_33190;
var G__33196 = (i__33186_33191 + (1));
seq__33183_33188 = G__33193;
chunk__33184_33189 = G__33194;
count__33185_33190 = G__33195;
i__33186_33191 = G__33196;
continue;
} else {
var temp__5720__auto___33197 = cljs.core.seq.call(null,seq__33183_33188);
if(temp__5720__auto___33197){
var seq__33183_33198__$1 = temp__5720__auto___33197;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33183_33198__$1)){
var c__4556__auto___33199 = cljs.core.chunk_first.call(null,seq__33183_33198__$1);
var G__33200 = cljs.core.chunk_rest.call(null,seq__33183_33198__$1);
var G__33201 = c__4556__auto___33199;
var G__33202 = cljs.core.count.call(null,c__4556__auto___33199);
var G__33203 = (0);
seq__33183_33188 = G__33200;
chunk__33184_33189 = G__33201;
count__33185_33190 = G__33202;
i__33186_33191 = G__33203;
continue;
} else {
var item_33204 = cljs.core.first.call(null,seq__33183_33198__$1);
devtools.formatters.budgeting.distribute_budget_BANG_.call(null,item_33204,new_depth_budget_33187);


var G__33205 = cljs.core.next.call(null,seq__33183_33198__$1);
var G__33206 = null;
var G__33207 = (0);
var G__33208 = (0);
seq__33183_33188 = G__33205;
chunk__33184_33189 = G__33206;
count__33185_33190 = G__33207;
i__33186_33191 = G__33208;
continue;
}
} else {
}
}
break;
}
}
} else {
}

return json_ml;
});
devtools.formatters.budgeting.was_over_budget_QMARK__BANG_ = (function devtools$formatters$budgeting$was_over_budget_QMARK__BANG_(value){
if(cljs.core.truth_(devtools.formatters.budgeting.has_over_budget_value_QMARK_.call(null,value))){
devtools.formatters.budgeting.delete_over_budget_value_BANG_.call(null,value);

return true;
} else {
return null;
}
});
devtools.formatters.budgeting.alter_json_ml_to_fit_in_remaining_budget_BANG_ = (function devtools$formatters$budgeting$alter_json_ml_to_fit_in_remaining_budget_BANG_(value,json_ml){
var temp__5718__auto__ = devtools.formatters.helpers.pref.call(null,new cljs.core.Keyword(null,"initial-hierarchy-depth-budget","initial-hierarchy-depth-budget",-482715807));
if(cljs.core.truth_(temp__5718__auto__)){
var initial_hierarchy_depth_budget = temp__5718__auto__;
var remaining_depth_budget = (function (){var or__4126__auto__ = devtools.formatters.state.get_depth_budget.call(null);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (initial_hierarchy_depth_budget - (1));
}
})();
var depth = devtools.formatters.budgeting.determine_depth.call(null,json_ml);
var final_QMARK_ = cljs.core.not.call(null,devtools.formatters.budgeting.has_any_object_reference_QMARK_.call(null,json_ml));
var needed_depth = ((final_QMARK_)?depth:(depth + devtools.formatters.budgeting.header_expander_depth_cost));
if((remaining_depth_budget >= needed_depth)){
return devtools.formatters.budgeting.distribute_budget_BANG_.call(null,json_ml,remaining_depth_budget);
} else {
var expander_ml = devtools.formatters.templating.render_markup.call(null,devtools.formatters.markup._LT_header_expander_GT_.call(null,value));
devtools.formatters.budgeting.add_over_budget_value_BANG_.call(null,value);

return expander_ml;
}
} else {
return json_ml;
}
});

//# sourceMappingURL=budgeting.js.map?rel=1607284881486
