import { getAllPosts } from "./lib/posts"
import { HERO_DATA, TABS, TAB_CHIPS } from "./data"
import { BlogClient } from "./BlogClient"
import { BackToTop } from "@/components/navigation/back-top-top"

export default function BlogPage() {
  const posts = getAllPosts()

  return (

    <>
      <BlogClient
        posts={posts}
        heroData={HERO_DATA}
        tabs={TABS}
        tabChips={TAB_CHIPS}
      />

      <BackToTop hideOnMobile />
    </>
  )
}

