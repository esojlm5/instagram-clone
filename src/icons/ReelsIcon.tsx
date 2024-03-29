import { View } from 'react-native';
import Svg, { Path } from "react-native-svg"

const ReelsIcon = () => {
    return (
        <View>
            <Svg width="21" height="21">
                <Path fillRule="evenodd" clipRule="evenodd" d="M16 1.8H5C3.23269 1.8 1.8 3.23269 1.8 5V16C1.8 17.7673 3.23269 19.2 5 19.2H16C17.7673 19.2 19.2 17.7673 19.2 16V5C19.2 3.23269 17.7673 1.8 16 1.8ZM5 0C2.23858 0 0 2.23858 0 5V16C0 18.7614 2.23858 21 5 21H16C18.7614 21 21 18.7614 21 16V5C21 2.23858 18.7614 0 16 0H5Z" fill="black" />
                <Path fillRule="evenodd" clipRule="evenodd" d="M20 7H1V5.2H20V7Z" fill="black" />
                <Path fillRule="evenodd" clipRule="evenodd" d="M8 6L4 0.999996L5.57349 0.125839L9.57349 5.12584L8 6Z" fill="black" />
                <Path fillRule="evenodd" clipRule="evenodd" d="M14.5 6L10.5 0.999996L12.0735 0.125839L16.0735 5.12584L14.5 6Z" fill="black" />
                <Path d="M13.75 12.067C14.0833 12.2594 14.0833 12.7406 13.75 12.933L8.5 15.9641C8.16667 16.1565 7.75 15.916 7.75 15.5311L7.75 9.46891C7.75 9.08401 8.16667 8.84345 8.5 9.0359L13.75 12.067Z" fill="black" />
            </Svg>
        </View>
    )
}

export default ReelsIcon