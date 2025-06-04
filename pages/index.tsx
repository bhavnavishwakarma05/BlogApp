import { useEffect, useState } from 'react'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

type Blog = {
  id: string
  title: string
  summary: string
  date: string
}

export default function Home() {
  const [blogs, setBlogs] = useState<Blog[]>([])

  useEffect(() => {
    const fetchBlogs = async () => {
      const res = await fetch('/blogs.json')
      const data = await res.json()
      setBlogs(data)
    }

    fetchBlogs()
  }, [])

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Blog Listing</h1>
      <Link href="/add">
        <button className={styles.addButton}>Add New Blog</button>
      </Link>

      <div className={styles.blogList}>
        {blogs.map((blog) => (
          <div key={blog.id} className={styles.card}>
            <h2>{blog.title}</h2>
            <p>{blog.summary}</p>
            <small>{blog.date}</small>
          </div>
        ))}
      </div>
    </div>
  )
}
