import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { TabKey } from "../data"

const postsDir = path.join(process.cwd(), "src", "app", "blog", "posts")

export type PostMeta = {
  slug: string
  title: string
  description: string
  date: string
  category: string
  tab: TabKey
}

export type Post = PostMeta & {
  content: string
}

export const getAllPosts = (): Post[] => {
  if (!fs.existsSync(postsDir)) return []

  const fileNames = fs.readdirSync(postsDir).filter((f) => f.endsWith(".md"))

  return fileNames
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, "")
      const filePath = path.join(postsDir, fileName)
      const fileContents = fs.readFileSync(filePath, "utf8")
      const { content, data } = matter(fileContents)

      return {
        slug,
        content,
        title: data.title ?? "",
        description: data.description ?? "",
        date: data.date ?? "",
        category: data.category ?? "",
        tab: (data.tab ?? "ats") as TabKey,
      } satisfies Post
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export const getPostBySlug = (slug: string): Post | null => {
  const filePath = path.join(postsDir, `${slug}.md`)
  if (!fs.existsSync(filePath)) return null

  const fileContents = fs.readFileSync(filePath, "utf8")
  const { content, data } = matter(fileContents)

  return {
    slug,
    content,
    title: data.title ?? "",
    description: data.description ?? "",
    date: data.date ?? "",
    category: data.category ?? "",
    tab: (data.tab ?? "ats") as TabKey,
  }
}

export const getAllPostSlugs = (): string[] => {
  if (!fs.existsSync(postsDir)) return []
  return fs
    .readdirSync(postsDir)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""))
}
