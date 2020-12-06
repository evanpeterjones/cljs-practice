(ns cljs-weather.weather
  (:require [ajax.core :refer [GET]]))

(def api-url "http://api.openweathermap.org/data/2.5/forecast")

(defn get-location! [loc state]
  "use javascript geolocation library to set coordinates"
  (if loc
    (do
      (swap! state assoc :x-loc loc.coords.latitude)
      (swap! state assoc :y-loc loc.coords.longitude))
    (do
      (swap! state update-in :x-loc "No Location data")
      (swap! state update-in :y-loc "No Location data"))))

(defn handle-response! [resp app-state]
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
7           update-in [:weather :short-description] (constantly s-desc))
    (swap! app-state
           update-in [:weather :full-description])))

(defn get-forecast! [app-state]
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

