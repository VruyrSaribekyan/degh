export type Photo = {
    id: number
    url: string
}

export type Author = {
    id: number
    fullName: string
    city: string
    eventsCategories: Array<EventCategory>
    placesTypes: Array<PlaceType>
    photoPath: string
}

export type NewsCategory = {
    id: number
    name: string
}

export type Place = {
    id: number
    name: string
    address: string
    email: string
    contacts: Array<Contact>
    url: string
    longitude: number
    latitude: number
    typeId: number
    createdAt: string | null
    updatedAt: string | null
    published: boolean
    schedule: Array<ScheduleItem>
    isTop: boolean
    description: string
    totalRating: number
    totalRatingCount: number
    ratings: Rating
    content: Array<ContentItem>
    phoneNumber: string
    photos: Array<Photo>
    placesTypes: PlaceType
    socialNetworks: Array<SocialNetwork>
    isFavorite: boolean
    rating: number
}

export type Rating = {
    "1": number
    "2": number
    "3": number
    "4": number
    "5": number
}

export type PlaceType = {
    id: number
    name: string
    description: string
}

export type SocialNetwork = {
    id: number
    name: string
    photo: Photo
    link: string
    socialId: number
}

export type ScheduleItem = [string, string]

export type PlaceReview = {
    id: number
    placeId: number
    userId: number
    rating: number
    title: string
    published: boolean
    content: string
    createdAt: string | null
    updatedAt: string | null
    placeName: string
    userName: string
    userPhoto: string | null
}

export type News = {
    id: number
    authorId: number
    author: Author
    categoryId: number
    category: NewsCategory
    placeId: number
    place: Place
    name: string
    description: string
    content: Array<ContentItem>
    published: boolean
    viewsCount: number
    publishedAt: string | null
    createdAt: Date
    updatedAt: Date
    photos: Array<Photo>
    previews: Array<Photo>
    isFavorite: boolean
}

export type Contact = {
    type: string
    value: string
}

export type Article = {
    id: number
    articleAuthor: string
    authorId: number
    categoryId: number
    name: string
    content: Array<ContentItem>
    published: boolean
    viewsCount: number
    createdAt: string | null
    updatedAt: string | null
    publishedAt: string | null
    description: string
    photos: Array<Photo>
    previews: Array<Photo>
    isFavorite: boolean
    author: Author
    category: ArticleCategory
}

export type ArticleCategory = {
    id: number
    name: string
    description: string
}

export type EventsReviewsType = {
    id: number
    eventId: number
    userId: number
    rating: number
    content: string
    published: number
    title: string
    createdAt: string
    updatedAt: string
}

export type Event = {
    id: number
    placeId: number
    place: Place
    categoryId: number
    category: EventCategory
    name: string
    description: string
    details: string
    content: Array<ContentItem>
    price: number
    priceMin: number
    priceMax: number
    viewsCount: number
    youtubeLink: string
    buyTicketLink: string
    startAt: string | null
    endAt: string | null
    published: boolean
    pushkinCard: boolean
    publishedAt: string | null
    createdAt: string | null
    updatedAt: string | null
    isFavorite: boolean
    photos: Array<Photo>
    previews: Array<Photo>
    seances: Array<Seance>
    interestingFacts: Array<InterestingFact>
    reviewsTotalRating: number
    reviewsTotalCount: number
    actors: Array<Actor>
    registrationOpened: number
}

export type EventCategory = {
    id: number
    name: string
    description: string | null
}

export type Seance = {
    eventId: number
    startAt: string
    endAt: string
}

export type InterestingFact = {
    id: number
    eventId: number
    description: number
    createdAt: string
    updatedAt: string
}

export type Actor = {
    role: string
    actors: string
}

export type ContentItem = {
    id: number
    text: string
    photos: Array<Photo>
    isQuote: boolean
    isStrong: boolean
    fontSize?: number
}

export type SpecialProject = {
    id: number
    title: string
    description: string
    content: Array<ContentItem>
    photos: Array<Photo>
    links: Array<SpecialProjectLink>
    published: boolean
    isFavorite: boolean
    createdAt: string | null
    updatedAt: string | null
}

export type SpecialProjectLink = {
    name: string
    link: string
}

export enum AdPhotoType {
    Mobile = 0,
    Web = 1,
}

export type AdPhoto = Photo & {
    type: AdPhotoType
}

export type Ad = {
    id: number
    title: string
    description: string
    link: string
    published: boolean
    viewsCount: number
    createdAt: string | null
    updatedAt: string | null
    photos: Array<AdPhoto>
}
export type CitiType = {
    id: number
    name: string
    createdAt: string
    updatedAt: string
}

export type AdressType = {
    value: string
    unrestricted_value: string
    data: object
}
