import type {NextConfig} from 'next'
const config:NextConfig={devIndicators:false,experimental:{cpus:2},distDir:process.env.NODE_ENV==='development'?'.next-dev':'.next'}
export default config
