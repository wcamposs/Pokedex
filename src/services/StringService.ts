const StringService = {
    getIdFromUrl(url: String) {
        const newSlicedUrl = url.slice(0, -1);
		const urlId = newSlicedUrl.split('/').pop();

        return urlId;
    }
};

export default StringService;