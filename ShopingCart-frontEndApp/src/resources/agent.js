import { APP_URL } from './constants/config';

const responseBody = res => res.data;

const requests = {
    del: url =>
        axios.del(APP_URL + 'api/web/' + url).then(responseBody),
    get: url =>
        axios.get(APP_URL + 'api/web/' + url).then(responseBody),
    put: (url, body) =>
        axios.put(APP_URL + 'api/web/' + url, body).then(responseBody),
    post: (url, body) =>
        axios.post(APP_URL + 'api/' + url, body).then(responseBody)
};

const Auth = {
    login: (email, password, remember, newPassword) =>
        requests.post('login', { email, password, remember, newPassword }),
    check: () =>
        requests.post('user'),
    change: (password,lock_time,attempts) =>
        requests.post('user_change', { password,lock_time,attempts }),
    loadOther: () =>
        requests.post('user_other'),
    changeOther: (lock_time,attempts) =>
        requests.post('user_other_new', { lock_time,attempts }),
};

/*const main = {
    getMainCat: () =>
        requests.post('get-main-cat'),
    geItemBytMainCat: (cat_id,keyword) =>
        requests.post('get-items-by-main-cat',{cat_id,keyword}),
};*/



export default {
    main
}
