const BASE_URL = 'https://elearningportal-56538109f664.herokuapp.com/'

export const URLS = {
    CHECK: BASE_URL + 'auth/check',
    REGISTER: BASE_URL + 'auth/register',
    LOGIN: BASE_URL + 'auth/login',
    USERDETAILS: BASE_URL + "auth/user-details",
    CHANGE_USER_DETAILS: BASE_URL + "auth/change-details",
    SIGNOUT: BASE_URL + 'auth/signout',
    GETOTP: BASE_URL + 'auth/request-otp',
    RESETPASSWORD: BASE_URL + 'auth/reset-password',
    CHANGEPASSWORD: BASE_URL + 'auth/change-password',
    SAVENEWCOURSE: BASE_URL + 'courses/saved/',
    CHECKSAVED: BASE_URL+ 'courses/checksaved/',
    REMOVEDSAVED: BASE_URL + 'courses/saved/',
    SAVEDCOURSES: BASE_URL + 'courses/saved',
    GETCOURSEBYID: BASE_URL + 'courses/get/',
    BUYCOURSE: BASE_URL  + 'courses/bought-courses/',
    CHECKBOUGHT: BASE_URL + 'courses/checkbought/',
    BOUGHTCOURSES: BASE_URL + 'courses/bought-courses',
    FEATURED: BASE_URL + 'courses/featured',
    COURSES: BASE_URL + 'courses/search',
    ADDREVIEW: BASE_URL + 'courses/reviews/',
    DELETEREVIEW: BASE_URL + 'courses/reviews/',
    VERIFYREVIEW: BASE_URL + 'courses/'
}