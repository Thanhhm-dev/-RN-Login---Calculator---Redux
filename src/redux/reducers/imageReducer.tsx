import CONST from '../../constants/key'

const imageReducer = (state = CONST.IMAGE_INIT, action: { type: string, data: any }) => {
    switch (action.type) {
        case CONST.IMAGE_SAVE:
            const tmp = {...state}
            tmp.listImg[tmp.position] = { uri: action.data.message }
            return {
                ...state,
                position: state.position + 1
            }
        case 'demo':
            // let tmp = [...state.listImg]
            // tmp[0] = { uri: action.data.message }
            // // tmp.position = tmp.position + 1
            // console.log(tmp)
            // return {
            //     ...state,
            //     listImg: tmp
            // }
            break;
        default:
            return state;
    }
}

export default imageReducer