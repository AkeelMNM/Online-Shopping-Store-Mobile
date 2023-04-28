import React from 'react';
import { View, StyleSheet, TextInput, Image } from 'react-native';
import SearchIcon from '../assets/images/Search.png';

type SearchBarProps = {
	onSearch: (searchTerm: string) => void;
};

const SearchBar = (props: SearchBarProps) => {
	const filterSearchResults = (
		searchTerm: string,
		onSearch: (searchTerm: string) => void,
	) => {
		try {
			onSearch(searchTerm);
		} catch (error) {
			console.log(error);
		}
	};

	// const getSearchBarColor = () => {
	// 	switch (props.searchBarType) {
	// 		case 'gray':
	// 			return { backgroundColor: COLORS.darkGray };
	// 		case 'white':
	// 			return { backgroundColor: COLORS.white };
	// 	}
	// };

	return (
		<View style={[styles.mainContainer]}>
			<Image source={SearchIcon} style={styles.searchIcon} />
			<TextInput
				style={styles.searchInput}
				placeholder="Search"
				placeholderTextColor={'#000000'}
				onChangeText={searchTerm => {
					filterSearchResults(searchTerm, props.onSearch);
				}}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	mainContainer: {
		paddingHorizontal: 10,
		flexDirection: 'row',
		borderRadius: 15,
		alignItems: 'center',
		minHeight: 50,
		width: '100%',
		backgroundColor: '#d3d3d3',
	},
	searchInput: {
		fontSize: 18,
		color: '#000000',
		paddingLeft: 5,
	},
	searchIcon: {
		width: 24,
		height: 24,
		tintColor: '#000000',
	},
});

export { SearchBar };
