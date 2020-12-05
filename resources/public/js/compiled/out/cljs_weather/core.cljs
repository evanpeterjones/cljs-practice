(ns cljs-weather.core
  (:require [cljs-weather.utils :refer [with-width]]
            [cljs-weather.components.card :refer [card]]
            [reagent.core :refer [atom with-let]]
            [reagent.dom :as dom]
            [ajax.core :refer [GET]]))

(enable-console-print!)

(defonce app-state (atom {:title          "Encounters"
                          :sub-title "A Paranormal Experience"
                          :units          "imperial"
                          :postal-code    nil
                          :mobile?        false
                          :location-semantic nil
                          :x-loc          "No Location Information"
                          :y-loc          nil
                          :data-recieved? false
                          :weather        {:short-description  ""
                                           :full-description ""}
                          :temperatures   {:today    {:label "Today"
                                                      :value nil}
                                           :tomorrow {:label "Tomorrow"
                                                      :value nil}}}))

(defn title []
  [card ; how do I add parameters for certain visual things like width, etc? keywords?
   [:div
    [:h1 (:title @app-state)]
    [:p (:sub-title @app-state)]]])

(defn temperature [temp]
  [:div {:class "temperature"}
   [:h2 (:label temp)]
   [:div {:class "value"}
    (:value temp)]])

(defn postal-code []
  [:div {:class-name "postal-code"}
   [:h3 "Enter your postal code"]
   [:input {:type        "text"
            :placeholder "Postal Code"
            :value       (:postal-code @app-state)
            :on-change   #(swap! app-state assoc :postal-code (-> % .-target .-value))}]
   [:button "Go"]])

(defn get-location! [loc]
  "use javascript geolocation library to set coordinates"
  (if loc
    (do
                                        ;(js/alert loc.coords.latitude)ß
      (swap! app-state assoc :x-loc loc.coords.latitude)
      (swap! app-state assoc :y-loc loc.coords.longitude))
    (do
                                        ;(js/alert loc)
      (swap! app-state update-in :x-loc "No Location data")
      (swap! app-state update-in :y-loc "No Location data"))))

;;;;;; START OPENWEATHER API

(def api-url "http://api.openweathermap.org/data/2.5/forecast")

(defn handle-response! [resp]
  (let [today (get-in resp ["list" 0 "main" "temp"])
        tomorrow (get-in resp ["list" 8 "main" "temp"])
        location (get-in resp ["list" 0 "name"])
        s-desc (get-in resp ["list" 0 "weather" "main"])
        description (get-in resp ["list" 0 "weather" "description"])]
    (swap! app-state
           update-in [:temperatures :today :value] (constantly today))
    (swap! app-state
           update-in [:temperatures :tomorrow :value] (constantly tomorrow))
    (swap! app-state
           update-in [:location-semantic] (constantly location))
    (swap! app-state
           update-in [:weather :short-description] (constantly s-desc))
    (swap! app-state
           update-in [:weather :full-description])))

(defn get-forecast! []
  (GET api-url
       {:params (if (:postal-code @app-state)
                  {"zip" (:postal-code @app-state)
                   "appid" "3c612cd1a014cd6ce89c67d4cca25f39"
                   "units" (:units @app-state)}
                  {"lat"  (:x-loc @app-state)
                   "lon"   (:y-loc @app-state)
                   "appid" "3c612cd1a014cd6ce89c67d4cca25f39"
                   "units" (:units @app-state)})
        :handler handle-response!}))

;;;;;; END OPENWEATHER API

(defn location-info []
  [:div
   [:h1 (:x-loc @app-state)]
   [:h1 (:y-loc @app-state)]
   [:input {:type     "button"
            :value    "Get Location"
            :on-click #(.getCurrentPosition js/navigator.geolocation. get-location!)}]
   [:input {:type     "button"
            :value    "Get Weather Data"
            :on-click get-forecast!}]])

(defn get-election-data! []
  (GET "https://raw.githubusercontent.com/evanpeterjones/election_data/main/1976-2016-president.csv?token=AGJJIAUSUSG4N6N5PZNWYY27ZGFMI"
       ))

(defn election-data []
  )

(defn app []
  [:div {:class "app"}
   [title]
   [:div {:class "temperatures"}
    [location-info]
    (for [temp (vals (:temperatures @app-state))]
      ^{:key temp} (temperature temp))]
   [postal-code]])

(dom/render [app] (.getElementById js/document "app"))
