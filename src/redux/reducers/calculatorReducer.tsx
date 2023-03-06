import CONST from '../../constants/key'

const calculateReducer = (state = CONST.CALCULATE_INIT, action: {type: string, data: any}) => {
    switch (action.type) {
        case CONST.CALCULATE_COUNT:
            let formula = state.formula
            let display = state.display

            if (formula.toString().slice(-1).match(/[\*\/+-]/)?.length && ['+', '-', 'x', '÷'].indexOf(action.data) != -1) {
                formula = formula.slice(0, -1);
            }
            
            if (action.data == '=') {
                if (!formula.toString().slice(-1).match( /[0-9.]/)?.length) {
                    return CONST.CALCULATE_INIT;
                }
                formula = eval(formula);
                display = parseFloat(formula).toString()
            } else {
                if (!isNaN(action.data)) {
                    display = formula.toString().slice(-1).match( /[0-9.]/) ? display + action.data : action.data
                }
                if (action.data == '±') {
                    if (formula == '') {
                        return state;
                    }
                    formula = eval(formula + (formula.slice(-1).match( /[0-9.]/) ? '*-1' : '+-'));
                    display = formula;
                } else if (action.data == '%') {
                    if (formula == '') {
                        return state;
                    }
                    formula = eval(eval(formula) + '/100');
                    display = parseFloat(formula).toString()
                } else {
                    if (action.data == '.') {
                        display = display + '.'
                    }
                    let str;
                    switch (action.data) {
                        case '÷':
                            str = '/'
                            break;
                        case 'x':
                            str = '*'
                            break;
                        default:
                            str = action.data
                    }
                    formula = formula + str
                }
            }
            if (action.data == 'AC') {
                formula = '';
                display = '0';
            }
            return {
                ...state,
                formula: formula,
                display: display,
                clicked: action.data
            };
        default:
            return state
    }
}

export default calculateReducer