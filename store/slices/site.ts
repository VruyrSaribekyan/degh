import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import {News as NewsType} from '../../types'

import { RootState } from '../index'

export const initialState = {
    version: false, // Состояние версии
    news: [] as Array<NewsType>,
    cityId: ''
}


export const loadNews = createAsyncThunk('site/loadNews', async () => {
    const limit = 10
    let offset = 0
    
    let news: Array<NewsType> = []
    
    return news
})



export const siteSlice = createSlice({
    name: 'site',
    initialState,
    reducers: {
        setVersion: (state, action:PayloadAction<boolean>) => {
            state.version = action.payload
        },
        setCityId: (state, action:PayloadAction<string>) => {
            state.cityId = action.payload
        }
    },
    extraReducers: (builder) => {

        builder.addCase(loadNews.fulfilled, (state, action) => {
            state.news = action.payload
        })
    },
})

export const {
    setVersion,
    setCityId
} = siteSlice.actions

export const selectVersion = (state: RootState) => state.site.version
export const selectNews = (state: RootState) => state.site.news

export default siteSlice.reducer



// export default siteSlice.reducer
