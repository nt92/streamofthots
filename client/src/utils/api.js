import axios from 'axios';

const getBaseURL = () => {
    const prodServer = process.env.REACT_APP_PROD_IP;
    switch (process.env.REACT_APP_ENV) {
        case 'development':
            return 'http://localhost:4200'
        case 'production':
            return prodServer
        default:
            return ''
    }
}

export const baseURL = getBaseURL();

export const getSomeUpdatesSearch = async (num, offset, search) => {
    const res = await axios.request({
        method: 'get',
        url: `${baseURL}/updates_search?num=${num}&offset=${offset}&search=${search}`,
        transformResponse: res => JSON.parse(res)
    })
    return res.data
}

export const getSomeUpdatesSearchCount = async (search) => {
    const res = await axios.request({
        method: 'get',
        url: `${baseURL}/updates_search_count?search=${search}`,
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
