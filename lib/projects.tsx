import fs from "fs"
import path, { parse } from "path"
import matter from "gray-matter"

export interface ProjectInfo {
    id: string
    hasImage: boolean
    title: string
    date: Date | string
    content: string
}

const projectsDir = path.join(process.cwd(), "projects")
const imagesDir = path.join(process.cwd(), "public/img/projects")

export function getProjectsData(): Array<ProjectInfo> {
    function dateFromString(str: string): Date {
        let split = str.split("-").map((s) => { return parseInt(s)});
        return new Date(split[0], split[1] + 1, split[2]);
    }

    const fileNames = fs.readdirSync(projectsDir)
    const projectsData: Array<ProjectInfo> = fileNames.map((value, index, array) => {
        const id = value.replace(/\.md$/, "")
        const filePath = path.join(projectsDir, value)
        const fileContent = fs.readFileSync(filePath, 'utf8')
        
        const parsed = matter(fileContent)

        return {
            id,
            hasImage: fs.existsSync(path.join(imagesDir, `${id}.png`)),
            title: parsed.data.title,
            date: dateFromString(parsed.data.date as string),
            content: parsed.content
        }
    })

    return projectsData
}