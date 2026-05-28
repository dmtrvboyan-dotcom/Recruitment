import { Suspense } from "react"
import { getAllPosts } from "./lib/posts"
import { HERO_DATA, TABS, TAB_CHIPS } from "./data"
import { BlogClient } from "./BlogClient"
import { BackToTop } from "@/components/navigation/back-to-top"

export default function BlogPage() {
  const posts = getAllPosts()

  return (

    <Suspense fallback={null}>
      <BlogClient
        posts={posts}
        heroData={HERO_DATA}
        tabs={TABS}
        tabChips={TAB_CHIPS}
      />

      <BackToTop hideOnMobile />
    </Suspense>

  )
}

