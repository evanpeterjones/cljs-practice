(ns cljs-weather.core
  (:require [cljs-weather.utils :refer [with-width]]
            [cljs-weather.components.card :refer [card]]
            [cljs-weather.weather :refer [get-forecast! get-location!]]
            [alandipert.storage-atom :refer [local-storage]]
            [reagent.core :refer [atom with-let]]
            [reagent.dom :as dom]))

(enable-console-print!)

(defonce listen-links [{:name "Apple Podcasts" :img-resource "img/apple.png" :url "https://podcasts.apple.com/us/podcast/encounters-a-paranormal-experience/id1407471024"}
                       {:name "Google Podcasts" :img-resource "img/google-podcasts.png" :url "https://www.google.com/podcasts?feed=aHR0cDovL2VuY291bnRlcnN0aGVwb2RjYXN0LmxpYnN5bi5jb20vcnNz"}
                       {:name "Stitcher" :img-resource "" :url "https://www.stitcher.com/show/encounters-a-paranormal-experience"}
                       {:name "TuneIn" :img-resource "" :url "https://tunein.com/podcasts/Storytelling-Podcasts/Encounters-A-Paranormal-Experience-p1174861/"}])

(defonce social-links [{:name "Facebook" :img-resource "" :url "https://www.facebook.com/encountersthepodcast/"}
                       {:name "Tumblr" :img-resource "" :url ""}
                       {:name "RSS" :img-resource "" :url "http://encountersthepodcast.libsyn.com/rss"}
                       {:name "Email Us" :img-resource "" :url "mailto:encountersthepodcast@gmail.com"}])

(defn links [link-list]
  (for [link link-list]
    [:div.grid-container
      ^{:key link} [:p "test"]]))

(defonce app-state ;;this is persisted to local-storage so the application remembers you when you come back
  (->  {:title          "Encounters"
        :sub-title "A Paranormal Experience"
        :description "A Paranormal / Supernatural discussion between Amanda and Dakota. We seek to unravel the unexplained and unknown. Join us weekly as we step into the shadows to bring a little light on the unknown. Welcome to the discussion."

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
                                    :value nil}}}
       atom
       (local-storage :app-state)))


                                        ;(add-watch app-state :x-loc #(js/console.log (str "yo: " %4)))

(defn title [app-name & sub-title]
  (card
   [:h1 app-name]
   [:img.title {:src "title.png"}]))

(defn temperature [temp]
  [:div.left
   [:div.temperature
    [:h2 (:label temp)]
    [:div.value
     (:value temp)]]])

(defn postal-code [state]
  [:div.postal-code
   [:h3 "Enter your postal code"]
   [:input {:type        "text"
            :placeholder "Postal Code"
            :value       (:postal-code @state)
            :on-change   #(swap! state assoc :postal-code (-> % .-target .-value))}]
   [:button "Go"]])

(defn location-info [state]
  [:div
   [:h1 (:x-loc @state)]
   [:h1 (:y-loc @state)]
   [:input {:type     "button"
            :value    "Get Location"
            :on-click #(.getCurrentPosition js/navigator.geolocation.
                                            (fn [x] (get-location! x app-state)))}]
   [:input {:type     "button"
            :value    "Get Weather Data"
            :on-click #(get-forecast! app-state)}]])

(defn app []
  [:div.app
   [title (:postal-code @app-state) (:sub-title @app-state)]
   [links social-links]
   [:div.temperatures
    [location-info app-state]
    (for [temp (vals (:temperatures @app-state))]
      ^{:key temp} (temperature temp))]
   [postal-code app-state]])

(dom/render [app] (.getElementById js/document "app"))
