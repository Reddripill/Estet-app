export function priceConvertion(price: string): string {
	const arr = [];
	const reverseStr = price.split('').reverse().join('');
	for (let i = 1; Math.ceil(reverseStr.length / 3) >= i; i++) {
		const reverseStrPart = reverseStr.slice(3 * (i - 1), 3 * i);
		arr.push(reverseStrPart.split('').reverse().join(''))
	}
	console.log(arr);
	return arr.reverse().join('.');
}