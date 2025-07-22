export function getKeyId(string: string) {
	const keyId = string.split(' ').join('-').toLowerCase();
	return keyId;
}
