import {  } from "./types";
import { RoutesMap } from "./utils/route";

export const API_PREFIX = ""
export const REACT_APP_API_URL = ""
export const REACT_APP_STORAGE_URL = ""
export const landFolder = `./assets/images`

export const endpoints: RoutesMap = {
    // Ad
    getAdRandom: `/ad/random`,

    // Events
    getEvents: `/events/list`,
    getEventsItem: `/events/get/:id`,

    // Events reviews
    getEventsReviews: `/events-reviews/list`,

    // News
    getNews: `/news/list`,
    getNewsItem: `/news/get/:id`,

    // Places
    getPlaces: `/places/list`,
    getPlacesItem: `/places/get/:id`,

    // Places reviews
    getPlacesReviews: `/places-reviews/list`,

    // Places types
    getPlacesTypes: `/places-types/list`,

    // Articles categories
    getArticlesCategories: `/articles-categories/list`,

    // Articles
    getArticles: `/articles/list`,
    getArticle: `/articles/get/:id`,

    // Special projects
    specialProjects: `/special-projects/list`,
    specialProjectsItem: `/special-projects/get/:id`,

    // City

    getCity: "/city/list",
    getAdress: "/city",
    getCityId: "/city/get",

    // Application

    postApplicationAfisha: "/requests/add",
}

// Ссылки на соцсети для навигации и футера

export const VK_URL = ""
export const INSTAGRAM_URL = ""
export const OK_URL = ""
export const TELEGRAM = ""
export const DADATA =
    ""
export const DADATA_TOKEN = ""
