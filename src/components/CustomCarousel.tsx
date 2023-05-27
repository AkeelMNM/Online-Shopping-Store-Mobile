import React, { useState } from 'react';
import {
	View,
	StyleSheet,
	Image,
	PanResponderGestureState,
} from 'react-native';
import GestureRecognizer from 'react-native-swipe-gestures';

type CustomCarouselProps = {
	data: string[];
};

const CustomCarousel = ({ data }: CustomCarouselProps): JSX.Element => {
	const [activeIndex, setActiveIndex] = useState(0);

	const config = {
		velocityThreshold: 0.2,
		directionalOffsetThreshold: 40,
	};

	const onSwipeLeft = (_gestureState: PanResponderGestureState) => {
		console.log('ww');
		setActiveIndex(activeIndex === data.length - 1 ? 0 : activeIndex + 1);
	};

	const onSwipeRight = (_gestureState: PanResponderGestureState) => {
		setActiveIndex(activeIndex === 0 ? data.length - 1 : activeIndex - 1);
	};

	return (
		<GestureRecognizer
			onSwipeLeft={state => onSwipeLeft(state)}
			onSwipeRight={state => onSwipeRight(state)}
			config={config}
			style={styles.swipeContainer}>
			<Image
				resizeMode="contain"
				source={{ uri: data[activeIndex] }}
				style={styles.logo}
			/>
			<View style={styles.circleContainer}>
				{data &&
					data.map((item: string, index: number) => {
						if (index === activeIndex) {
							return (
								<View
									style={[styles.circle, styles.circleActive]}
									key={index}
								/>
							);
						} else {
							return <View style={styles.circle} key={index} />;
						}
					})}
			</View>
		</GestureRecognizer>
	);
};

const styles = StyleSheet.create({
	logo: {
		flex: 1,
		width: '50%',
	},
	textContainer: {
		alignItems: 'center',
		marginBottom: 20,
	},
	textHeader: {
		marginBottom: 40,
		textAlign: 'center',
	},
	textBody: {
		marginBottom: 20,
		textAlign: 'center',
	},
	circle: {
		width: 10,
		height: 10,
		borderRadius: 100 / 2,
		marginHorizontal: 5,
		backgroundColor: 'gray',
	},
	circleActive: {
		backgroundColor: 'black',
	},
	circleContainer: {
		flexDirection: 'row',
		justifyContent: 'center',
	},
	swipeContainer: {
		flex: 1,
		justifyContent: 'space-between',
		alignItems: 'center',
		elevation: 5,
		backgroundColor: '#eceff1',
		paddingBottom: 10,
		borderRadius: 30,
	},
});

export { CustomCarousel };
