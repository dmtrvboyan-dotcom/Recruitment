import { getAllPosts } from "./lib/posts"
import { HERO_DATA, TABS, TAB_CHIPS } from "./data"
import { BlogClient } from "./BlogClient"

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <BlogClient
      posts={posts}
      heroData={HERO_DATA}
      tabs={TABS}
      tabChips={TAB_CHIPS}
    />
  )
}
