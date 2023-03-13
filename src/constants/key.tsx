export default {
    IMG_KEY: 'url_img',
    IMG_URL: 'https://dog.ceo/api/breeds/image/random',
    CALCULATE_COUNT: 'count',
    CALCULATE_INIT: {
        formula: '',
        display: '0',
        clicked: ''
    },
    CALCULATE_KEYS: [
        'AC', '±', '%', '÷', 
        '7', '8', '9', 'x', 
        '4', '5', '6', '-',
        '1', '2', '3', '+', 
        '0', '.', '='
    ],
    SPECIAL_KEYS: {
        '÷': '/', 
        'x': '*'
    },
    USER_INIT: { email: '', password: '' },
    USER_REGIST_TMP: 'user_regist',
    USER_HANDLE_LOGIN: 'hanlde_login',
    IMAGE_INIT: {
        listImg: [
            { uri: '' },
            { uri: '' },
            { uri: '' },
            { uri: '' },
            { uri: '' },
            { uri: '' },
            { uri: '' },
            { uri: '' },
            { uri: '' }
        ],
        position: 0
    },
    IMAGE_SAVE: 'img_save',
    IMGAE_TIME: 10000,
    IMAGE_MAX_SHOW: 9
}