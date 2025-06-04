import { Blog } from '../types/blog';
import Link from 'next/link';
import styles from './BlogCard.module.css'

const BlogCard = ({ title, summary, date }: { title: string; summary: string; date: string }) => {
  return (
    <div className={styles.card}>
      <h2>{title}</h2>
      <p>{summary}</p>
      <small>{date}</small>
    </div>
  )
}

export default BlogCard
