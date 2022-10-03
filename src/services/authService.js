import axios from '../api/axios'

const END_POINTS = {
    SIGN_UP: 'Member/register',
    LOG_IN: 'Member/login',
    LOGGED_MEMBER: 'Member/loggedMember',
    CHANGE_PASSWORD: 'Member/changePassword',
}

export const signUpApi = (data) => {
    return axios.post(END_POINTS.SIGN_UP, data)
}

export const logInApi = (data) => {
    return axios.post(END_POINTS.LOG_IN, data)
}


export const loggedMemberApi = () => {
    return axios.get(END_POINTS.LOGGED_MEMBER)
}

export const changePasswordApi = (data) => {
    return axios.post(END_POINTS.CHANGE_PASSWORD, null, {params:data})
}