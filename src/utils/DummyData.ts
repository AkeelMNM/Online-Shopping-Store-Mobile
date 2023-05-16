import { Product } from '../types';

export const products: Product[] = [
	{
		id: 'prod-1',
		category: ['Men', 'Long Sleeve', 'Slim Fit'],
		title: 'Formal Dress Shirts Casual Long Sleeve Slim Fit',
		isBestSeller: true,
		variants: [
			{
				id: 'var-1123',
				size: 'XS',
				color: 'blue',
				price: '$25',
				stock: 0,
				discount: '$5',
				image: 'https://localhost:5000/public/images/Formal%20Dress%20Shirts%20Casual%20Long%20Sleeve%20Slim%20Fit%20-%20Blue.png',
			},
			{
				id: 'var-1',
				size: 'S',
				color: 'blue',
				price: '$25',
				stock: 165,
				discount: '$5',
				image: 'https://localhost:5000/public/images/Formal%20Dress%20Shirts%20Casual%20Long%20Sleeve%20Slim%20Fit%20-%20Blue.png',
			},
			{
				id: 'var-2',
				size: 'M',
				color: 'blue',
				price: '$25',
				stock: 183,
				discount: '$5',
				image: 'https://localhost:5000/public/images/Formal%20Dress%20Shirts%20Casual%20Long%20Sleeve%20Slim%20Fit%20-%20Blue.png',
			},
			{
				id: 'var-3',
				size: 'L',
				color: 'blue',
				price: '$25',
				stock: 125,
				discount: '$5',
				image: 'https://localhost:5000/public/images/Formal%20Dress%20Shirts%20Casual%20Long%20Sleeve%20Slim%20Fit%20-%20Blue.png',
			},
			{
				id: 'var-4',
				size: 'XS',
				color: 'black',
				price: '$25',
				stock: 267,
				discount: '$5',
				image: 'https://localhost:5000/public/images/Formal%20Dress%20Shirts%20Casual%20Long%20Sleeve%20Slim%20Fit%20-%20Black.png',
			},
			{
				id: 'var-5',
				size: 'M',
				color: 'black',
				price: '$25',
				stock: 123,
				discount: '$5',
				image: 'https://localhost:5000/public/images/Formal%20Dress%20Shirts%20Casual%20Long%20Sleeve%20Slim%20Fit%20-%20Black.png',
			},
			{
				id: 'var-6',
				size: 'XL',
				color: 'black',
				price: '$25',
				stock: 66,
				discount: '$5',
				image: 'https://localhost:5000/public/images/Formal%20Dress%20Shirts%20Casual%20Long%20Sleeve%20Slim%20Fit%20-%20Black.png',
			},
			{
				id: 'var-7',
				size: 'S',
				color: 'violet',
				price: '$25',
				stock: 99,
				discount: '$5',
				image: 'https://localhost:5000/public/images/Formal%20Dress%20Shirts%20Casual%20Long%20Sleeve%20Slim%20Fit%20-%20Violet.png',
			},
			{
				id: 'var-8',
				size: 'M',
				color: 'violet',
				price: '$25',
				stock: 154,
				discount: '$5',
				image: 'https://localhost:5000/public/images/Formal%20Dress%20Shirts%20Casual%20Long%20Sleeve%20Slim%20Fit%20-%20Violet.png',
			},
			{
				id: 'var-9',
				size: 'L',
				color: 'violet',
				price: '$25',
				stock: 153,
				discount: '$5',
				image: 'https://localhost:5000/public/images/Formal%20Dress%20Shirts%20Casual%20Long%20Sleeve%20Slim%20Fit%20-%20Violet.png',
			},
			{
				id: 'var-91',
				size: 'XL',
				color: 'violet',
				price: '$25',
				stock: 0,
				discount: '$5',
				image: 'https://localhost:5000/public/images/Formal%20Dress%20Shirts%20Casual%20Long%20Sleeve%20Slim%20Fit%20-%20Violet.png',
			},
		],
	},
	{
		id: 'prod-2',
		category: ['Unisex', 'Short Sleeve', 'Slim Fit'],
		title: 'Formal Dress Shirts Casual Short Sleeve Slim Fit',
		isBestSeller: false,
		variants: [
			{
				id: 'var-10',
				size: 'XS',
				color: 'blue',
				price: '$35',
				stock: 0,
				discount: '5%',
				image: 'https://localhost:5000/public/images/Formal%20Dress%20Shirts%20Casual%20Short%20Sleeve%20Slim%20Fit%20-%20Blue.png',
			},
			{
				id: 'var-101',
				size: 'S',
				color: 'blue',
				price: '$35',
				stock: 152,
				discount: '5%',
				image: 'https://localhost:5000/public/images/Formal%20Dress%20Shirts%20Casual%20Short%20Sleeve%20Slim%20Fit%20-%20Blue.png',
			},
			{
				id: 'var-11',
				size: 'M',
				color: 'blue',
				price: '$35',
				stock: 133,
				discount: '5%',
				image: 'https://localhost:5000/public/images/Formal%20Dress%20Shirts%20Casual%20Short%20Sleeve%20Slim%20Fit%20-%20Blue.png',
			},
			{
				id: 'var-12',
				size: 'XL',
				color: 'blue',
				price: '$35',
				stock: 55,
				discount: '5%',
				image: 'https://localhost:5000/public/images/Formal%20Dress%20Shirts%20Casual%20Short%20Sleeve%20Slim%20Fit%20-%20Blue.png',
			},
			{
				id: 'var-13',
				size: 'S',
				color: 'gray',
				price: '$35',
				stock: 55,
				discount: '0%',
				image: 'https://localhost:5000/public/images/Formal%20Dress%20Shirts%20Casual%20Short%20Sleeve%20Slim%20Fit%20-%20Gray.png',
			},
			{
				id: 'var-14',
				size: 'M',
				color: 'gray',
				price: '$35',
				stock: 167,
				discount: '5%',
				image: 'https://localhost:5000/public/images/Formal%20Dress%20Shirts%20Casual%20Short%20Sleeve%20Slim%20Fit%20-%20Gray.png',
			},
			{
				id: 'var-15',
				size: 'X',
				color: 'gray',
				price: '$35',
				stock: 176,
				discount: '5%',
				image: 'https://localhost:5000/public/images/Formal%20Dress%20Shirts%20Casual%20Short%20Sleeve%20Slim%20Fit%20-%20Gray.png',
			},
			{
				id: 'var-16',
				size: 'XL',
				color: 'gray',
				price: '$35',
				stock: 129,
				discount: '5%',
				image: 'https://localhost:5000/public/images/Formal%20Dress%20Shirts%20Casual%20Short%20Sleeve%20Slim%20Fit%20-%20Gray.png',
			},
		],
	},
	{
		id: 'prod-3',
		category: ['Unisex', 'Short', 'Slim Fit', 'Summer'],
		title: 'Soft Summer Short Slim Fit',
		isBestSeller: true,
		variants: [
			{
				id: 'var-17',
				size: 'S',
				color: 'gray',
				price: '$20',
				stock: 212,
				discount: '0%',
				image: 'https://localhost:5000/public/images/Soft%20Summer%20Short%20Slim%20Fit%20-%20Gray.png',
			},
			{
				id: 'var-18',
				size: 'M',
				color: 'gray',
				price: '$20',
				stock: 166,
				discount: '0%',
				image: 'https://localhost:5000/public/images/Soft%20Summer%20Short%20Slim%20Fit%20-%20Gray.png',
			},
			{
				id: 'var-19',
				size: 'L',
				color: 'gray',
				price: '$20',
				stock: 155,
				discount: '0%',
				image: 'https://localhost:5000/public/images/Soft%20Summer%20Short%20Slim%20Fit%20-%20Gray.png',
			},
			{
				id: 'var-20',
				size: 'S',
				color: 'pink',
				price: '$20',
				stock: 167,
				discount: '0%',
				image: 'https://localhost:5000/public/images/Soft%20Summer%20Short%20Slim%20Fit%20-%20Pink.png',
			},
			{
				id: 'var-21',
				size: 'M',
				color: 'pink',
				price: '$20',
				stock: 132,
				discount: '0%',
				image: 'https://localhost:5000/public/images/Soft%20Summer%20Short%20Slim%20Fit%20-%20Pink.png',
			},
		],
	},
	{
		id: 'prod-4',
		category: ['Women', 'Polo', 'Dress'],
		title: 'Icy Blue Polo Dress',
		isBestSeller: false,
		variants: [
			{
				id: 'var-22',
				size: 'S',
				color: 'blue',
				price: '$45',
				stock: 23,
				discount: '0%',
				image: 'https://localhost:5000/public/images/Icy%20Blue%20Polo%20Dress%20-%20Blue.png',
			},
			{
				id: 'var-23',
				size: 'M',
				color: 'blue',
				price: '$45',
				stock: 155,
				discount: '$5',
				image: 'https://localhost:5000/public/images/Icy%20Blue%20Polo%20Dress%20-%20Blue.png',
			},
			{
				id: 'var-24',
				size: 'L',
				color: 'blue',
				price: '$45',
				stock: 177,
				discount: '$10',
				image: 'https://localhost:5000/public/images/Icy%20Blue%20Polo%20Dress%20-%20Blue.png',
			},
		],
	},
	{
		id: 'prod-5',
		category: ['Women', 'Dress'],
		title: 'Tiered Wave Shirt Dress',
		isBestSeller: false,
		variants: [
			{
				id: 'var-25',
				size: 'S',
				color: 'navy & white',
				price: '$55',
				stock: 67,
				discount: '$5',
				image: 'https://localhost:5000/public/images/Tiered%20Wave%20Shirt%20Dress%20-%20Navy%20&%20White.png',
			},
			{
				id: 'var-26',
				size: 'M',
				color: 'navy & white',
				price: '$55',
				stock: 55,
				discount: '$5',
				image: 'https://localhost:5000/public/images/Tiered%20Wave%20Shirt%20Dress%20-%20Navy%20&%20White.png',
			},
			{
				id: 'var-27',
				size: 'L',
				color: 'navy & white',
				price: '$55',
				stock: 100,
				discount: '15%',
				image: 'https://localhost:5000/public/images/Tiered%20Wave%20Shirt%20Dress%20-%20Navy%20&%20White.png',
			},
		],
	},
];

export const productFilter = {
	gender: ['Men', 'Women', 'Unisex'],
	category: [
		'Long Sleeve',
		'Slim Fit',
		'Short Sleeve',
		'Short',
		'Summer',
		'Polo',
		'Dress',
	],
	trends: ['Best Seller', 'Hot This Month'],
};
