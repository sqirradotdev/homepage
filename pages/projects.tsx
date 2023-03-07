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
  getProjectsData()
  return {
    props: {
      projectList: JSON.parse(JSON.stringify(getProjectsData()))
    }
  }
}

export default function Projects({ projectList }: ProjectsProps) {
  projectList.map((value, index, array) => {
    value.date = new Date(value.date as string)
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
        <div className={`${styles.projectList} ignoreAnim`}>
          {
            projectListState.map((value, index, array) => {
              return (
                <div className={styles.projectRow} key={value.id}>
                  <h3>{value.title}</h3>
                  <Image src={`/img/projects/${value.id}.png`} width={315} height={250} alt="" />
                  <ul>
                    <li><b>date:</b> {(value.date as Date).toLocaleDateString()}</li>
                    <li><b>type:</b> game</li>
                    <li><b>status:</b> finished</li>
                    <li><b>links:</b> <a href="#">itch.io</a></li>
                  </ul>
                  <ReactMarkdown>
                    {value.content}
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
