(ns cljs-weather.components.card
  (:require ;[cljs-weather.core :refer [app-state]]
   [cljs-weather.css :refer [font]]
            [reagent.core :refer [atom]]
            [reagent.dom :as dom]))

(def card-css {:box-shadow "0 8px 16px 0 rgba(0,0,0,.2)"
               :background-color "white"
               :color "grey"
               :font-family font
               :transition "0.3s"})

(def card-desktop {:padding "20px"})
(def card:hover {:box-shadow "0 8px 16px 0 rgba(255,255,255,.2)"})

(def container {:padding "2px 16px"
                :border-radius "10px"})

(defn card [& slot]
;; this needs to use desctructuring for a map so we can set css fields like card being full-width
  [:div
    (if (< js/window.innerWidth 500)
     [:div {:style (into {} [card-css container])}
      slot]
     [:div {:style (into {} [card-css card-desktop container])}
      slot])])
