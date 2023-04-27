import { useEffect, useState } from "react"
import Image from "next/image"
import { ReactMarkdown } from "react-markdown/lib/react-markdown"

import Layout from "@/components/layout"
import { getProjectsData, ProjectInfo } from "@/lib/projects"

import styles from "@/styles/projects.module.css"

interface ProjectsProps {
  projectList: Array<ProjectInfo>
}

export async function getStaticProps() {
  return {
    props: {
      projectList: JSON.parse(JSON.stringify(getProjectsData()))
    }
  }
}

export default function Projects({ projectList }: ProjectsProps) {
  projectList.map((project) => {
    project.date = new Date(project.date as string)
  })

  projectList.sort((a, b) => {
    return a.date < b.date ? 1 : -1;
  });

  const [projectListState, setProjectListState] = useState(new Array<ProjectInfo>())
  useEffect(() => {
    setProjectListState(projectList)
  }, [])

  function sortProjects(asc: boolean) {
    let current = [...projectListState]
    current.sort((a, b) => {
      if (asc) {
        return a.date > b.date ? 1 : -1;
      }

      return a.date < b.date ? 1 : -1;
    })
    setProjectListState(current)
  }

  function onSortSelectChange(a: any) {
    switch (a.target.value) {
      case "date-dsc":
        sortProjects(false);
        break;
      case "date-asc":
        sortProjects(true);
        break;
    }
  }

  return (
    <>
      <Layout page="projects">
        <div className={styles.sortDiv}>
          <select id="sort-select" onChange={onSortSelectChange}>
            <option value="date-dsc">Date (Descending)</option>
            <option value="date-asc">Date (Ascending)</option>
          </select>
        </div>
        <div className={`${styles.projectList} ignoreFadeIn`}>
          {
            projectListState.map((project) => {
              return (
                <div className={styles.projectRow} key={project.id}>
                  <h3>{project.title}</h3>
                  {
                    project.hasImage ? <Image src={`/img/projects/${project.id}.png`} width={315} height={250} alt="" /> : <></>
                  }
                  <ul>
                    <li><b>date:</b> {(project.date as Date).toLocaleDateString("en", { dateStyle: "medium" })}</li>
                    <li><b>type:</b> {project.type}</li>
                    <li><b>status:</b> {project.status}</li>
                    <li>
                      <b>status:</b>{" "}
                      <>
                        {
                          Object.entries(project.links).map(([key, value]) => {
                            return (
                              <a href={value} target="_blank">{key}</a>
                            )
                          })
                        }
                      </>
                    </li>
                  </ul>
                  <ReactMarkdown>
                    {project.content}
                  </ReactMarkdown>
                </div>
              )
            })
          }
        </div>
      </Layout>
    </>
  )
}
