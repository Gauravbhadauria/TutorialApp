import { Text, View } from "react-native"
import Animated, { useAnimatedStyle, useSharedValue, withDelay, withSpring, withTiming } from "react-native-reanimated"

const AnimationDemo = () => {
    const animatedValueX = useSharedValue(100)
    const animatedWidth = useSharedValue(100)
    const animatedHeight = useSharedValue(100)
    const animatedRadius = useSharedValue(0)


    const animatedstyle = useAnimatedStyle(() => {
        return {
            width: animatedWidth.value,
            height: animatedHeight.value,
            borderRadius: animatedRadius.value,
            transform: [{ translateX: animatedValueX.value }]
        }
    })
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Animated.View style={[{ width: 100, height: 100, backgroundColor: 'red' }, animatedstyle]}>
            </Animated.View>
            <Text style={{ padding: 10, borderWidth: 1, marginTop: 30 }}
                onPress={() => {
                    if (animatedWidth.value == 100) {
                        animatedWidth.value = withDelay(1000, withSpring(200))
                        animatedHeight.value = withDelay(1000, withSpring(200))
                        animatedRadius.value = withDelay(1000, withSpring(100))
                        animatedValueX.value = withDelay(1000, withSpring(-100))
                    } else {
                        animatedValueX.value = withDelay(1000, withSpring(100))
                        animatedWidth.value = withDelay(1000, withSpring(100))
                        animatedHeight.value = withDelay(1000, withSpring(100))
                        animatedRadius.value = withDelay(1000, withSpring(0))

                    }

                }}>Start Animation</Text>

        </View>
    )
}

export default AnimationDemo

//animated reference 
// we can create animated reference with help of useAnimated
//useSharedValue


//animation style 
//animation methods 

//we can change style dynamically using animated methods 

