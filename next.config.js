/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,

	env: {
		BASE_URL: "http://localhost:3000/",
		MONGODB_URL:
			"mongodb+srv://ripanionut:ripanionut@cluster1.aeufk.mongodb.net/CabinetMedical?retryWrites=true&w=majority",
	},
};

module.exports = nextConfig;
