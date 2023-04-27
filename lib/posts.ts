import fs from "fs"
import path from "path"
import matter from "gray-matter"

export interface PostInfo {
    id: string
    title: string
    summary: string
    date: Date | string
}

export interface Post {
    postInfo: PostInfo,
    content: string
}

const postsDir = path.join(process.cwd(), "posts")

export function getPostInfoList(): Array<PostInfo> {
    const fileNames = fs.readdirSync(postsDir)
    const postsData: Array<PostInfo> = fileNames.map((name) => {
        const id = name.replace(/\.md$/, "")
        const filePath = path.join(postsDir, name)
        const fileContent = fs.readFileSync(filePath, 'utf8')
        const parsed = matter(fileContent)

        return {
            id,
            title: parsed.data.title,
            summary: parsed.data.summary,
            date: new Date(parseInt(parsed.data.date) * 1000)
        }
    })

    return postsData
}

export function getPostDataFromId(id: string): Post | null {
    const filePath = path.join(postsDir, `${id}.md`)
    if (fs.existsSync(filePath)) {
        const fileContent = fs.readFileSync(filePath, 'utf8')
        const parsed = matter(fileContent)

        return {
            postInfo: {
                id,
                title: parsed.data.title,
                summary: parsed.data.summary,
                date: new Date(parseInt(parsed.data.date) * 1000)
            },
            content: parsed.content
        }
    }

    return null
}
