// import { useState, useEffect } from 'react'
import BlogList from '../Components/BlogList'
import useFetch from '../Hooks/useFetch'

function Home() {

  // const [blogs, setBlogs] = useState([
  //   { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
  //   { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
  //   { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
  // ])

  // Moved States: blog, isPending, error to useFectch custom hook
  // Note: I'm not sure i like the blog's state being inside of useFetch
  //  I think I'd prefer that state to be here or in a model/data controller
  //  ...but maybe this is the correct way to do this???
  const {data: blogs, isPending, error} = useFetch('http://localhost:8000/blogs')

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
      {error && <div>Error: {error}</div>}
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