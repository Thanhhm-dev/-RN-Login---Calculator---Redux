import { useState, useEffect } from 'react'
import { Text } from 'react-native'
import Style from './style'
import CONST from '../../constants/key'

const countDown = (props: any) => {
    const [count, setCount] = useState(10)
    
    useEffect(() => {
        const interVal = setInterval(() => {
            setCount(count => { return (count > 0) ? count - 1 : 0 })
        }, 1000)
        if (props.position == CONST.IMAGE_MAX_SHOW) {
            clearInterval(interVal)
        }
    }, [props.position])

    return (
        <Text style={Style.countDow}>{ count }</Text>
    );
}

export default countDown