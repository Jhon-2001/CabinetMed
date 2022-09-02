const baseUrl = process.env.BASE_URL;

export const postData = async (url, post) => {
	const res = await fetch(`${baseUrl}/api/${url}`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(post),
	});

	const data = await res.json();
	return data;
};
export const getData = async (url) => {
	const res = await fetch(`${baseUrl}/api/${url}`, {
		method: "GET",
	});

	const data = await res.json();
	return data;
};
