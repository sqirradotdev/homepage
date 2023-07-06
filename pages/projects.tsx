import { useState } from "react"
import Image from "next/image"
import { ReactMarkdown } from "react-markdown/lib/react-markdown"

import Layout from "@/components/layout"
import { getProjectsData, ProjectInfo } from "@/lib/projects"

import styles from "@/styles/projects.module.css"

interface ProjectsProps {
  fetchedProjects: Array<ProjectInfo>
}

export async function getStaticProps(): Promise<{ props: ProjectsProps }> {
  return {
    props: {
      fetchedProjects: JSON.parse(JSON.stringify(getProjectsData()))
    }
  }
}

export default function Projects({ fetchedProjects }: ProjectsProps) {
  fetchedProjects.map((project) => {
    project.date = new Date(project.date as string)
  })

  fetchedProjects.sort((a, b) => {
    return a.date < b.date ? 1 : -1;
  });

  const [projects, setProjects] = useState<ProjectInfo[]>([...fetchedProjects])

  function sortProjects(type: "asc" | "desc") {
    let current = [...projects]
    current.sort((a, b) => {
      if (type === "asc") {
        return a.date > b.date ? 1 : -1;
      }

      return a.date < b.date ? 1 : -1;
    })
    setProjects(current)
  }

  function onSortSelectChange(a: any) {
    const type = a.target.value as "asc" | "desc"
    sortProjects(type)
  }

  return (
    <>
      <Layout page="projects">
        <div className={styles.sortDiv}>
          <select id="sort-select" onChange={onSortSelectChange}>
            <option value="desc">Date (Descending)</option>
            <option value="asc">Date (Ascending)</option>
          </select>
        </div>
        <div className={`${styles.projectList} ignoreFadeIn`}>
          {
            projects.map((project) => {
              return (
                <div className={`${styles.projectRow} ignoreFadeIn`} key={project.id}>
                  <div className="ignoreFadeIn">
                    <Image
                      src={`/img/projects/${project.hasImage ? project.id + ".png" : "unknown.svg"}`}
                      width={315}
                      height={250}
                      alt={`Project image for ${project.title}`}
                    />
                  </div>
                  <div className="ignoreFadeIn">
                    <h2 className={styles.projectTitle}>{project.title}</h2>
                    <div className={styles.projectInfo}>
                      <p>{(project.date as Date).toLocaleDateString("en", { dateStyle: "medium" })}</p>
                      <p>{project.type}</p>
                      <p>{project.status}</p>
                    </div>
                    <div className={`${styles.projectDesc} ignoreFadeIn`}>
                      <ReactMarkdown>
                        {project.content}
                      </ReactMarkdown>
                    </div>
                    <div className={`${styles.projectLinks} ignoreFadeIn`}>
                      <>
                        {Object.entries(project.links).map(([key, value]) => {
                          return (
                            <a href={value} target="_blank" key={key}>{key}</a>
                          )
                        })}
                      </>
                    </div>
                  </div>
                  {/* <ul>
                    <li><b>date:</b> {(project.date as Date).toLocaleDateString("en", { dateStyle: "medium" })}</li>
                    <li><b>type:</b> {project.type}</li>
                    <li><b>status:</b> {project.status}</li>
                    <li>
                      <b>links:</b>{" "}
                      <>
                        {
                          Object.entries(project.links).map(([key, value]) => {
                            return (
                              <a href={value} target="_blank" key={key}>{key}</a>
                            )
                          })
                        }
                      </>
                    </li>
                  </ul>
                  <ReactMarkdown>
                    {project.content}
                  </ReactMarkdown> */}
                </div>
              )
            })
          }
        </div>
      </Layout>
    </>
  )
}
