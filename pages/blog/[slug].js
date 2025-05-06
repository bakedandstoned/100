import { useRouter } from 'next/router'

export default function BlogPost() {
  const router = useRouter()
  const { slug } = router.query

  return (
    <main>
      <h1>Viewing blog post: {slug}</h1>
      <p>This is a dynamic blog page. Replace this with your post content.</p>
    </main>
  )
}