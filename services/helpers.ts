import _ from "lodash"
import {REACT_APP_STORAGE_URL} from "../constants"
import {
    Photo as PhotoType,
    ContentItem as ContentItemType,
    Author as AuthorType,
} from "../types"

export type ListMeta = {
    maxCount: number
    pageCount: number
    totalCount: number
}

export const emptyMeta: ListMeta = {
    maxCount: 0,
    pageCount: 0,
    totalCount: 0,
}

export const preparePhoto = (photo: PhotoType) => {
    return {
        ...photo,
        url: photo.url ? `${REACT_APP_STORAGE_URL}/${photo.url}` : "",
    }
}

export const prepareContent = (content: Array<ContentItemType>) => {
    if (!content || !_.isArray(content)) {
        return []
    }

    return content.map((contentItem) => {
        return {
            ...contentItem,
            photos:
                contentItem.photos && _.isArray(contentItem.photos)
                    ? contentItem.photos.map(preparePhoto)
                    : [],
            isQuote: !!contentItem.isQuote,
            isStrong: !!contentItem.isStrong,
        }
    })
}

export const prepareAuthor = (author: AuthorType) => {
    return {
        ...author,
        photoPath: "",
    }
}

export const sendFormData = (data: any): FormData => {
    const sendData = new FormData()
    for (let key in data) {
        if (data[key]) {
            sendData.append(`${key}`, data[key])
        }
    }

    return sendData
}
