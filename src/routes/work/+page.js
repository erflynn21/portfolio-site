import { client } from '$lib/sanityClient'

export async function load() {
    const projects = await client.fetch(
        '*[_type == "project"] | { name, "mainImage": mainImage.asset->url, description, status, url, github}'
    );

    if (projects) {
        return {
            status: 200,
            body: {
                projects
            }
        }
    }

    return {
        status: 404,
    }
}