import { View } from 'react-native';
import Svg, { Rect, Line } from "react-native-svg"

const AddIcon = () => {
    return (
        <View>
            <Svg width="24" height="24">
                <Rect width="24" height="24" fill="white" />
                <Rect x="3" y="3" width="18" height="18" rx="5" stroke="black" strokeWidth="1.8" />
                <Line x1="12.1" y1="6.9" x2="12.1" y2="17.1" stroke="black" strokeWidth="1.8" strokeLinecap="round" />
                <Line x1="6.9" y1="11.8" x2="17.1" y2="11.8" stroke="black" strokeWidth="1.8" strokeLinecap="round" />
            </Svg>
        </View>
    )
}

export default AddIcon