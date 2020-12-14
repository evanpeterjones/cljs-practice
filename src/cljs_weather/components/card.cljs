(ns cljs-weather.components.card
  (:require [cljs-weather.css :refer [font]]
            [reagent.core :refer [atom]]
            [reagent.dom :as dom]))

(def card-css {:box-shadow "0 8px 16px 0 rgba(0,0,0,.2)"
               :font-family font
               :transition "0.3s"})

(def card-desktop {:padding "20px"})

(defn card [& slot]
  ;; this needs to use desctructuring for a map so we can set css fields like card being full-width
  (if (< js/window.innerWidth 500)
    [:div.container {:style (into {} [card-css])}
     slot]
    [:div.container {:style (into {} [card-css card-desktop])}
     slot]))

(defn styled-card [style & slot]
  ;; this needs to use desctructuring for a map so we can set css fields like card being full-width
  (if (< js/window.innerWidth 500)
    [:div.container {:style (into {} [style card-css])}
     slot]
    [:div.container {:style (into {} [style card-css card-desktop])}
     slot]))
