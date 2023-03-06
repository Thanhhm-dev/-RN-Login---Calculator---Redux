import CONST from '../../constants/key'

export const countAction = (dispatch: Function) => {
    return (data: any) => {
        dispatch({
            type: CONST.CALCULATE_COUNT,
            data
        })
    }
}