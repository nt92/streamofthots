import axios from 'axios';

export const baseURL = "http://localhost:4200"

export const getSomeUpdatesSearch = async (num, offset, search) => {
    const res = await axios.request({
        method: 'get',
        url: `${baseURL}/updates_search?num=${num}&offset=${offset}&search=${search}`,
        transformResponse: res => JSON.parse(res)
    })
    return res.data
}

export const getSomeUpdatesSearchCount = async (num, offset, search) => {
    const res = await axios.request({
        method: 'get',
        url: `${baseURL}/updates_search_count?num=${num}&offset=${offset}&search=${search}`,
        transformResponse: res => JSON.parse(res)
    })
    return res.data
}

export const getUpdateByTimestamp = async (timestamp) => {
    const res = await axios.request({
        method: 'get',
        url: `${baseURL}/update_by_timestamp?timestamp=${timestamp}`,
        transformResponse: res => JSON.parse(res)
    })
    return res.data
}

export const createUpdate = async (timestamp, title, updateText) => {
    const body = {
        timestamp: timestamp,
        title: title,
        updateText: updateText
    }
    const res = await axios.request({
        method: 'post',
        url: `${baseURL}/create`,
        data: body,
        transformResponse: res => JSON.parse(res)
    })
    return res.data
}

export const deleteUpdate = async (timestamp) => {
    const res = await axios.request({
        method: 'delete',
        url: `${baseURL}/delete?timestamp=${timestamp}`,
        transformResponse: res => JSON.parse(res)
    })
    return res.data
}