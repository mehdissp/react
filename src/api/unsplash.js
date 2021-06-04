import axios from 'axios';


export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers: {
        authorization: 'Client-ID OvwFnJezZH8gObQt7qbnhxl487pftfxRxj_XCHAz4sI'
    },
})