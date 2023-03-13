import CONST from '../../constants/key'

export const saveUriAction = (dispatch: Function) => {
    return (data: any) => {
        dispatch({
            type: CONST.IMAGE_SAVE,
            data
        })
    }
}