import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://poccash.vercel.app',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.5,
        },
        {
            url: 'https://poccash.vercel.app/about-us',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.5,
        }
    ]
}