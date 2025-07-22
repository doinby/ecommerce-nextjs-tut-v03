export function getKeyId(string: string) {
	const keyId = string
		.replace(/[^a-zA-Z0-9 ]/g, '') // removes all special characters
		.split(' ')
		.join('-')
		.toLowerCase();
	return keyId;
}
