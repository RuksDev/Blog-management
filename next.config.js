
/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https', // Ensure the protocol is 'https'
                hostname: "images.pexels.com",
                
            }
        ]
    }
}

module.exports = nextConfig
