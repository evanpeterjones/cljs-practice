(ns cljs-weather.core
  (:require-macros [hiccups.core :as hiccups :refer [html defhtml]])
  (:require [cljs-weather.utils :refer [with-width]]
            [cljs-weather.components.card :refer [card]]
            [cljs-weather.weather :refer [get-forecast! get-location!]]
            [reagent.core :as r]
            [reagent.dom :as rd]
            ;[hiccups.runtime :as hiccupsrt]
            [alandipert.storage-atom :refer [local-storage]]))

(enable-console-print!)

(defonce listen-links [{:name "Apple Podcasts" :img-resource "img/apple.png" :url "https://podcasts.apple.com/us/podcast/encounters-a-paranormal-experience/id1407471024"}
                       {:name "Spotify" :img-resource "" :url "https://open.spotify.com/show/0bcymnpw8brMosTC32Wn8h?si=nUkKOpjZS2GZANDpCQX4zQ"}
                       {:name "Google Podcasts" :img-resource "img/google-podcasts.png" :url "https://www.google.com/podcasts?feed=aHR0cDovL2VuY291bnRlcnN0aGVwb2RjYXN0LmxpYnN5bi5jb20vcnNz"}
                       {:name "Youtube" :img-resource "" :url "https://www.youtube.com/channel/UCo6wYpnquR6OwWR5CM9ODDw"}
                       {:name "Stitcher" :img-resource "" :url "https://www.stitcher.com/show/encounters-a-paranormal-experience"}
                       {:name "TuneIn" :img-resource "" :url "https://tunein.com/podcasts/Storytelling-Podcasts/Encounters-A-Paranormal-Experience-p1174861/"}])

(defonce social-links [{:name "Facebook" :img-resource "" :url "https://www.facebook.com/encountersthepodcast/"}
                       {:name "Tumblr" :img-resource "" :url ""}
                       {:name "RSS" :img-resource "" :url "http://encountersthepodcast.libsyn.com/rss"}
                       {:name "Email Us" :img-resource "" :url "mailto:encountersthepodcast@gmail.com"}])

(defn links [link-list]
  [:div.grid-container
   (for [link link-list]
     [:div.links
      [:img {:src (:img-resource link)}]
      [:a {:href (:url link)} (:name link)]])])

(defonce app-state                                          ;;this is persisted to local-storage so the application remembers you when you come back
         (-> {:title       "Encounters"
              :sub-title   "A Paranormal Experience"
              :description "A Paranormal / Supernatural discussion between Amanda and Dakota. We seek to unravel the unexplained and unknown. Join us weekly as we step into the shadows to bring a little light on the unknown. Welcome to the discussion."
              :x-loc nil
              :y-loc nil
            :mobile?     false}
             atom
             (local-storage :app-state)))

(defonce current (atom :home))
(declare set-view!)

(defn temperature [temp]
  [:div.left
   [:div.temperature
    [:h2 (:label temp)]
    [:div.value
     (:value temp)]]])

(defn postal-code [code change]
  [:div.postal-code
   [:h3 "Enter your postal code"]
   [:input {:type        "text"
            :placeholder "Postal Code"
            :value code
            :on-change change}]
   [:button "Go"]])

(defn navbar []
  [:div.navbar
   [card
     [:img.title {:src "title.png"}]
    [:div.container-fluid
          [:div.row
           [:div.col-xs-3
            [:input {:value "Zip Code" :type "button" :on-click #(set-view! :zip-code)}]]
           [:div.col-xs-3
            [:input {:type "button" :value "Hosts" :on-click #(js/alert "test")}]]
           [:div.col-xs-3
            [:button {:on-click #(js/alert "test")} "Home"]]]]]])

(defn location-info [state]
  [:div
   [:h1 (:x-loc @state)]
   [:h1 (:y-loc @state)]
   [:input {:type     "button"
            :value    "Get Location"
            :on-click #(.getCurrentPosition js/navigator.geolocation.
                                            (fn [x] (get-location! x app-state)))}]])

(defn app []
   [:div.app
    [navbar]
    [:div#body
     (location-info app-state)
     (links social-links)
     (links listen-links)]])

(def views {:zip-code nil
            :home app})

(defn set-view! [component]
  (swap! current (fn [x] component)))

(comment 
(-> js/document
    (.getElementById "app")
    (.-innerHTML)
    (set! (html (() views)))))

(rd/render [(@current views)] (.-body js/document))
