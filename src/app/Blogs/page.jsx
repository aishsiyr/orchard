"use client";

import React, { useEffect, useState } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { initializeApp } from "firebase/app";
// Changed: Import the correct remark-html plugin
import { remark } from "remark";
import remarkHtml from "remark-html";
import { firebaseConfig } from "@/config/firebase";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const colRef = collection(db, "Blog");

// Changed: Ensure the function is async and process markdown correctly
const TomatoHH = async (data) => {
  const processedContent = await remark().use(remarkHtml).process(data);
  const contentHtml = String(processedContent); // Ensure it's converted to a string
  return contentHtml;
};

const Blog = () => {
  const [blogData, setBlogData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [expandedBlogId, setExpandedBlogId] = useState(null);
  const [contentHtml, setContentHtml] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const querySnapshot = await getDocs(colRef);
        const docs = querySnapshot.docs.map((doc) => {
          const data = doc.data();
          return {
            id: doc.id,
            Title: data.Title || "No title available",
            // Changed: Corrected field name to match markdown example
            Description: data.description || "No description available",
          };
        });
        setBlogData(docs);
      } catch (error) {
        console.error("Error fetching blogs:", error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleTitleClick = async (id, description) => {
    if (id === expandedBlogId) {
      setExpandedBlogId(null);
    } else {
      setExpandedBlogId(id);
      if (!contentHtml[id]) {
        const htmlContent = await TomatoHH(description);
        setContentHtml((prev) => ({ ...prev, [id]: htmlContent }));
      }
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Blog</h1>
      {blogData.length === 0 ? (
        <p>No blog entries found.</p>
      ) : (
        blogData.map((blog) => (
          <div key={blog.id} className="mb-6">
            <h2
              onClick={() => handleTitleClick(blog.id, blog.Description)}
              className="text-xl font-semibold cursor-pointer"
            >
              {blog.Title}
            </h2>
            {expandedBlogId === blog.id && (
              <div className="mt-2">
                <div className="prose prose-lg max-w-none">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: contentHtml[blog.id] || "Loading...",
                    }}
                  />
                </div>
              </div>
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default Blog;
