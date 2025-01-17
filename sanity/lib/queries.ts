import {defineQuery} from "groq";

export const STARTUP_QUERY = defineQuery(`
*[_type == "startup" && defined(slug.current) && !defined($search) || title match $search || category match $search || author -> name match $search] | order(_createdAt desc) {
    _id, title, slug, _createdAt, author, category, image, author-> {_id, name, image, bio}
}`)

