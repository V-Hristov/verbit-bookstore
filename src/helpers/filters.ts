type BookFilterType = {
	label: string;
	value: string;
	data: {
		author: string;
	};
};

export const bookSearchFilter = (option: BookFilterType, rawInput: string) => {
	const words = rawInput.split(' ').map((word) => word.toLowerCase());
	const optionTitle = option?.label?.toLowerCase();
	const optionAuthor = option?.data?.author?.toLowerCase();

	return words.every(
		(word) => optionTitle?.includes(word) || optionAuthor?.includes(word),
	);
};
