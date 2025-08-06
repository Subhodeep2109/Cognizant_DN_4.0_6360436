import React, { useState } from "react";
import BookDetails from "./BookDetails";
import BlogDetails from "./BlogDetails";
import CourseDetails from "./CourseDetails";

function App() {
  // 1. State with string
  const [page, setPage] = useState("book");

  // 2. Conditional variable
  let detailsComponent;
  if (page === "book") {
    detailsComponent = <BookDetails />;
  } else if (page === "blog") {
    detailsComponent = <BlogDetails />;
  } else if (page === "course") {
    detailsComponent = <CourseDetails />;
  }

  // 3. Using ternary operator and inline logical && rendering
  const showBlog = page === "blog" ? <BlogDetails /> : null;
  const showCourse = page === "course" && <CourseDetails />;

  // 4. Switch statement as a function
  function renderSection() {
    switch (page) {
      case "book":
        return <BookDetails />;
      case "blog":
        return <BlogDetails />;
      case "course":
        return <CourseDetails />;
      default:
        return <div>No details to show.</div>;
    }
  }

  return (
    <div style={{maxWidth: 600, margin: "40px auto", fontFamily: "sans-serif"}}>
      <h1>Blogger App</h1>
      <div style={{marginBottom: 16}}>
        <button onClick={() => setPage("book")}>Book Details</button>
        <button onClick={() => setPage("blog")} style={{marginLeft: 8}}>Blog Details</button>
        <button onClick={() => setPage("course")} style={{marginLeft: 8}}>Course Details</button>
      </div>
      <hr/>

      {/* Method 1: if-else variable */}
      <h3>-- Conditional Rendering: If-Else Variable --</h3>
      {detailsComponent}

      {/* Method 2: Ternary Operator */}
      <h3>-- Conditional Rendering: Ternary --</h3>
      {page === "book" ? <BookDetails /> : null}
      {showBlog}
      {showCourse}

      {/* Method 3: Logical && Operator */}
      <h3>-- Conditional Rendering: Logical && --</h3>
      {page === "book" && <BookDetails />}
      {page === "blog" && <BlogDetails />}
      {page === "course" && <CourseDetails />}

      {/* Method 4: Switch Statement Function */}
      <h3>-- Conditional Rendering: Switch Function --</h3>
      {renderSection()}
    </div>
  );
}

export default App;
