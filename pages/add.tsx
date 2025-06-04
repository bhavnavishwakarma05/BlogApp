'use client'

import React from 'react'
import BlogForm from '@/components/BlogForm'
import { useRouter } from 'next/navigation'
import { v4 as uuidv4 } from 'uuid'

const AddBlogPage: React.FC = () => {
  const router = useRouter()

  const handleAddBlog = (blog: { title: string; content: string; date: string }) => {
    const newBlog = { id: uuidv4(), ...blog }
    const existingBlogs = JSON.parse(localStorage.getItem('blogs') || '[]')
    existingBlogs.push(newBlog)
    localStorage.setItem('blogs', JSON.stringify(existingBlogs))
    router.push('/')
  }

  return (
    <div>
      <h1>Add Blog</h1>
      <BlogForm onAddBlog={handleAddBlog} />
    </div>
  )
}

export default AddBlogPage
