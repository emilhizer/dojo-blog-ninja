import { useState, useEffect } from 'react'
import BlogList from '../Components/BlogList'

function Home() {

  // const [blogs, setBlogs] = useState([
  //   { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
  //   { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
  //   { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
  // ])
  const [blogs, setBlogs] = useState(null)
  const [isPending, setIsPending] = useState(true)

  // useEffect() runs every time the screen / DOM is rendered
  // So be careful not to (or if you need to) change state in here
  //  because changing state will cause the screen to re-render...
  //  ...infinite loop!
  useEffect(() => {
    // set artificial "internet api delay" of 1000ms
    setTimeout(() => {
      fetch('http://localhost:8000/blogs')
      .then(res => {
        return res.json()
      })
      .then(data => {
        console.log(data)
        setBlogs(data)
        setIsPending(false)
      })
    }, 1000)
  }, [])
  // ^^^ this array added at the end of useEffect
  //  is the "dependency" array
  //  only the states identified in this array will cause useEffect to fire again
  // Therefore an empty array means that *nothing* will cause useEffect to fire again

  // function handleDelete(id) {
  //   const newBlogs = blogs.filter(blog => blog.id !== id)
  //   setBlogs(newBlogs)
  // }

  return (
    <div className="home">
      {/*
          The variable "blogs" is null at first ms of start...
          Therefore, we can't render <BlogList /> until blogs is non-null;
          However, we can use the "truthiness" of blogs being null with "&&"
          because JS evaluates the left-half of && first, and if not strictly true
          (and null counts as "falsy"), then JS stops evaluating
          ...but if blogs is not-null (truthy)
          then JS evalates (runs) the object *after* the && operator
          Therefore we can use: "blogs && <Bloglist />" to keep <Bloglist />
          from running until blogs is non-null
          This is shorthand for "blogs === null ? null : <BlogList />"
      */}
      {isPending && <div>Loading...</div>}
      { blogs &&
        <BlogList
          blogs={blogs}
          title="All Blogs!"
        />
      }
    </div>

  )
}

export default Home