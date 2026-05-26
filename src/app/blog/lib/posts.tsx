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
  draft?: boolean
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
        draft: data.draft ?? false,
      } satisfies Post
    })
    .filter((post) => {
      if (process.env.NODE_ENV === "production") return post.draft !== true
      return true
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export const getPostBySlug = (slug: string): Post | null => {
  const filePath = path.join(postsDir, `${slug}.md`)
  if (!fs.existsSync(filePath)) return null

  const fileContents = fs.readFileSync(filePath, "utf8")
  const { content, data } = matter(fileContents)

  if (process.env.NODE_ENV === "production" && data.draft === true) return null

  return {
    slug,
    content,
    title: data.title ?? "",
    description: data.description ?? "",
    date: data.date ?? "",
    category: data.category ?? "",
    tab: (data.tab ?? "ats") as TabKey,
    draft: data.draft ?? false,
  }
}

export const getAllPostSlugs = (): string[] => {
  if (!fs.existsSync(postsDir)) return []

  return fs
    .readdirSync(postsDir)
    .filter((f) => f.endsWith(".md"))
    .filter((f) => {

      if (process.env.NODE_ENV !== "production") return true
      const filePath = path.join(postsDir, f)
      const { data } = matter(fs.readFileSync(filePath, "utf8"))
      return data.draft !== true
    })
    .map((f) => f.replace(/\.md$/, ""))
}