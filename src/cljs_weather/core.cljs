(ns cljs-weather.core
  (:require-macros [hiccups.core :refer [html defhtml]])
  (:require [cljs-weather.utils :refer [with-width]]
            [cljs-weather.components.card :refer [card styled-card]]
            [cljs-weather.weather :refer [get-forecast! get-location!]]
            [reagent.core :as r]
            [reagent.dom :as rd]
            [alandipert.storage-atom :refer [local-storage]]
            [clojure.string :as str]))

(def view (-> (r/atom "Home") (local-storage :view)))

(defn set-view! [component]
  (reset! view component)
  (js/console.log (str "Changing to " component " : " @view)))

(defonce app-state
   (-> {:title      "Clear as Day"
        :sub-title   "get to enjoy the night life"
        :description "When a city full of unsuspecting people wake up in a world of darkness, how do they cope?"
        :mobile?     false}
         atom))

(defonce listen-links [{:name "Apple Podcasts" :img-resource "img/apple.png" :url "https://podcasts.apple.com/us/podcast/encounters-a-paranormal-experience/id1407471024"}
                       {:name "Spotify" :img-resource "" :url "https://open.spotify.com/show/0bcymnpw8brMosTC32Wn8h?si=nUkKOpjZS2GZANDpCQX4zQ"}
                       {:name "Google Podcasts" :img-resource "img/google-podcasts.png" :url "https://www.google.com/podcasts?feed=aHR0cDovL2VuY291bnRlcnN0aGVwb2RjYXN0LmxpYnN5bi5jb20vcnNz"}
                       {:name "Youtube" :img-resource "" :url "https://www.youtube.com/channel/UCo6wYpnquR6OwWR5CM9ODDw"}
                       {:name "Stitcher" :img-resource "" :url "https://www.stitcher.com/show/encounters-a-paranormal-experience"}
                       {:name "TuneIn" :img-resource "" :url "https://tunein.com/podcasts/Storytelling-Podcasts/Encounters-A-Paranormal-Experience-p1174861/"}])

(defonce social-links [{:name "Facebook" :img-resource "" :url "https://www.facebook.com/encountersthepodcast/"}
                       {:name "Tumblr" :img-resource "" :url ""}
                       {:name "RSS" :img-resource "" :url "http://encountersthepodcast.libsyn.com/rss"}
                       {:name "Patreon" :img-resource "" :url ""}
                       {:name "Email Us" :img-resource "" :url "mailto:encountersthepodcast@gmail.com"}])

(defn link [{:keys [name img-resource url]}]
  [:div.grid-container
   [:div.links
    ;[:img {:src img-resource}]
    [:a {:href url} name]]])

(defn routing-button [name]
  [:button {:on-click #(set-view! name)} name])

(defn horizontal-div [& b]
  "create a horizontal div of components"
  (let [keyw (->> b count (/ 12) js/Math.floor (str "col-xs-") keyword)
        fixed (map (fn [x] [keyw x]) b)]
    `[:div.container-fluid
      [:div.row ~@fixed]]))

(defn navbar [views]
  (let [{:keys [title]} @app-state]
    [card
     [:h1 (clojure.string/upper-case title)]
     (map routing-button views)]))

(defn side-bar []
  [card (map link listen-links) (map link social-links)])

(defn hdr [text]
  [:h2 (str/upper-case text)])

;; views

(defn home []
  [:div
   [card
    [hdr "now playing"]
    [:p (:sub-title @app-state)]
    [:p (:description @app-state)]
    [:iframe {:style {:border "solid 1px #e4edf2;"}
              :src "https://www.stitcher.com/embed/235470"
              :width "220" :height "150" :frameborder "0" :scrolling "no"}]]])

(defn characters [] [card [hdr "Characters"]])
(defn episodes [] [card [hdr "Episodes"]])
(defn blog [] (styled-card {:height "100%"} [hdr "Blog"]
                    [:iframe {:src "https://relaxidaisical.blogspot.com/"
                              :width "100%" :height "50%"
                              :frameborder "0" :scrolling "yes"}]))

(defn app []
  (let [views {"Home" [home]
               "Episodes" [episodes]
               "Characters" [characters]
               "Blog" [blog]}]
    (fn []
      [:div
       [:div {:style {:float "left"
                      :width "30%"}}
        [navbar (keys views)]
        [side-bar]]
       [:div {:style {:float "right"
                      :width "70%"}}
        (get views @view)]])))

(rd/render [app] (.-body js/document))
