/** @type {import('next').NextConfig} */
const path = require('path')
const nextConfig = {
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
    images: {
        remotePatterns: [
            {
                hostname: 'testapi.siteweb.org.ua',
            },
            {
                hostname: 'images.testapi.siteweb.org.ua',
            },
        ],
    },
}

module.exports = nextConfig