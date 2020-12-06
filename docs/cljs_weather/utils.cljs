(ns cljs-weather.utils
  (:require [reagent.core :refer [with-let]]))

(defn mobile? []
  (< js/window.innerWidth. 500))

(defmacro with-width [component]
  `(with-let [handler #(swap! app-state assoc
                             :mobile? (< js/window.innerWidth. 500))
             _ (.addEventListener js/document "resize" handler)]
    ~component))
