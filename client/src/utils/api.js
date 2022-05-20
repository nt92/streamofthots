import axios from 'axios';

export const baseURL = "http://localhost:4200"

export const getAllUpdates = async () => {
    const res = await axios.request({
        method: 'get',
        url: `${baseURL}/all_updates`,
        transformResponse: res => JSON.parse(res)
    })
    return res.data
}

export const getSomeUpdates = async (num, offset) => {
    const res = await axios.request({
        method: 'get',
        url: `${baseURL}/updates?num=${num}&offset=${offset}`,
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