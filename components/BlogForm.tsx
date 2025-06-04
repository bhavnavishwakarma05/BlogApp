// components/BlogForm.tsx
import React, { useState } from 'react'
import styles from './BlogForm.module.css'

type Blog = {
  title: string
  content: string
  date: string
}

type Props = {
  onAddBlog: (blog: Blog) => void
}

const BlogForm: React.FC<Props> = ({ onAddBlog }) => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [date, setDate] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onAddBlog({ title, content, date })
    setTitle('')
    setContent('')
    setDate('')
  }

  return (
    <form onSubmit={handleSubmit} className={styles.formContainer}>
      <input
        className={styles.inputField}
        type="text"
        value={title}
        onChange={e => setTitle(e.target.value)}
        placeholder="Blog Title"
        required
      />
      <textarea
        className={styles.textArea}
        value={content}
        onChange={e => setContent(e.target.value)}
        placeholder="Blog Content"
        required
      />
      <input
        className={styles.dateInput}
        type="date"
        value={date}
        onChange={e => setDate(e.target.value)}
        required
      />
      <button type="submit" className={styles.submitButton}>
        Add Blog
      </button>
    </form>
  )
}

export default BlogForm
