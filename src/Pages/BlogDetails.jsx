import React from "react";
import { useParams } from "react-router-dom";

const blogPosts = {
  "1": { title: "Effective Online Learning", content: "Full article about online learning..." },
  "2": { title: "How to use Music in Education", content: "Full article about using music in education..." },
  "3": { title: "Future of AI in Learning", content: "Full article about AI in education..." },
};

const BlogDetails = () => {
  const { id } = useParams();
  const post = blogPosts[id] || { title: "Post Not Found", content: "This blog post does not exist." };

  return (
    <section className="py-16 text-center">
      <h2 className="text-3xl font-bold">{post.title}</h2>
      <p className="text-gray-600 max-w-4xl mx-auto mt-4">{post.content}</p>
    </section>
  );
};

export default BlogDetails;
