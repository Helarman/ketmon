// @ts-check

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "http",
                hostname: "31.128.45.168:1337", // if your website has no www, drop it
            },
        ],
    },
}

module.exports = nextConfig