require('dotenv').config()
/** @type {import('next').NextConfig} */
console.log("NEXT_PUBLIC_API_URL:", process.env.NEXT_PUBLIC_API_URL); 
const nextConfig = {
    output: 'standalone',
    env: {
        // Reference a variable that was defined in the .env file and make it available at Build Time
        NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
      },
}

module.exports = nextConfig
