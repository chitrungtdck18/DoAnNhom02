import React, { useEffect, useState, useRef } from "react";
import { View, Dimensions, ScrollView } from "react-native";
import { Colors } from "../../Utils/Color";
import { styles } from "./styles";
import DotIcon from '../../Icons/Dot';

const { width } = Dimensions.get('window');

export default function Slider({
    data,
    isAuto,
    item,
    isBanner,
    dotColor,
    dotIndexColor
}) {
    const [sliderState, setSliderState] = useState({ currentPage: 0 });
    const [isDrag, setIsDrag] = useState(false);
    const scrollRef = useRef();

    const setSliderPage = (event) => {
        const { currentPage } = sliderState;
        const { x } = event.nativeEvent.contentOffset;
        const indexOfNextScreen = Math.round(x / width);

        if (indexOfNextScreen !== currentPage) {
            setSliderState({
                ...sliderState,
                currentPage: indexOfNextScreen,
            })
        }
    };

    let intervalID;
    useEffect(() => {
        if (isAuto) {
            let total_count = data.length;
            let count_increment = 1;
            if (!isDrag) {
                intervalID = setInterval(() => {
                    scrollRef.current?.scrollTo({
                        x: width * count_increment,
                        y: 0,
                        animated: true,
                    });
                    count_increment++;
                    if (count_increment == total_count) {
                        count_increment = 0;
                    }
                }, 4000);
            }
            return () => clearInterval(intervalID)
        }
    }, [data, isDrag]);

    const { currentPage: pageIndex } = sliderState;

    return (
        <View>
            <ScrollView
                ref={scrollRef}
                horizontal={true}
                scrollEventThrottle={16}
                pagingEnabled={true}
                showsHorizontalScrollIndicator={false}
                onScroll={(event) => {
                    setSliderPage(event);
                }}
                onScrollBeginDrag={(event) => {
                    setIsDrag(true)
                }}
            >
                {data.map((value, i) =>
                    <View key={i} >
                        {item(value)}
                    </View>
                )}
            </ScrollView>
            {/* <View style={isBanner ? styles.paginationWrapperBanner : styles.paginationWrapper}>
                {Array.from(Array(data.length).keys()).map((key, index) => (
                    <View style={styles.dotView} key={index} >
                        <DotIcon
                            color={
                                pageIndex === index
                                    ? dotIndexColor
                                    : dotColor}
                        />
                    </View>
                ))}
            </View> */}
        </View>
    );
}
