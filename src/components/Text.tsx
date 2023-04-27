import React from 'react';
import { Text as Txt, StyleSheet } from 'react-native';

type TextProps = {
	type?: string;
	color?: string;
	style?: Object;
	children: React.ReactNode;
};

const Text = (props: TextProps): JSX.Element => {
	const getTextType = (type: string) => {
		switch (type) {
			case 'title':
				return [styles.titleText];
			case 'body':
				return [styles.bodyText];
			case 'label':
				return [styles.labelText];
		}
	};

	const getTextColor = (color: string): Object => {
		switch (color) {
			case 'white':
				return { color: 'white' };
			case 'gray':
				return { color: 'gray' };
			case 'red':
				return { color: 'red' };
			case 'green':
				return { color: 'green' };
			default:
				return { color: 'black' };
		}
	};

	return (
		<Txt
			{...props}
			allowFontScaling={true}
			style={[
				styles.text,
				props.style,
				getTextType(props.type || ''),
				getTextColor(props.color || ''),
			]}>
			{props.children}
		</Txt>
	);
};

const styles = StyleSheet.create({
	text: {
		fontFamily: 'NotoSerif-Italic',
	},
	titleText: {
		fontSize: 26,
	},
	bodyText: {
		fontSize: 22,
	},
	labelText: {
		fontSize: 18,
	},
});

export { Text };
