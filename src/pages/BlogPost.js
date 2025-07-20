import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useParams, Link } from "react-router-dom";
import { FadeInSection } from "../components/FadeInSection";
import CallToAction from "./homes/CallToAction";
import {
  getPostById,
  formatFirebaseDate,
  formatReadingTime,
} from "../data/BlogPosts";
import { FiClock, FiCalendar, FiArrowRight, FiDownload } from "react-icons/fi";
import { FaYoutube } from "react-icons/fa";
import SEO from "../components/SEO/SEO";

export default function BlogPost() {
  const [t] = useTranslation("global");
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });

    // Fetch the post from Firebase
    const fetchPost = async () => {
      try {
        setLoading(true);
        setError(null);
        const foundPost = await getPostById(id);
        setPost(foundPost);
      } catch (err) {
        console.error("Error fetching post:", err);
        setError("Failed to load blog post");
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);
  console.log(post);

  // Show loading state
  if (loading) {
    return (
      <div
        style={{
          backgroundColor: "black",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          padding: "0px 24px",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <p style={{ fontSize: "18px" }}>Loading...</p>
        </div>
      </div>
    );
  }

  // Show error state
  if (error) {
    return (
      <div
        style={{
          backgroundColor: "black",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          padding: "0px 24px",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <p style={{ fontSize: "18px" }}>{error}</p>
          <Link
            to="/blog"
            style={{
              color: "rgba(59, 130, 246, 0.8)",
              textDecoration: "none",
              fontSize: "16px",
            }}
          >
            ← Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  // If post is not found, show a message
  if (!post) {
    return (
      <div
        style={{
          backgroundColor: "black",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          padding: "0px 24px",
        }}
      >
        <h1>{t("blog_post.not_found")}</h1>
      </div>
    );
  }

  // Get YouTube video ID from URL if it exists
  const getYoutubeVideoId = (url) => {
    if (!url) return null;
    const regExp =
      /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[7] && match[7].length === 11 ? match[7] : null;
  };

  const youtubeVideoId = post.youtube_url
    ? getYoutubeVideoId(post.youtube_url)
    : null;

  // Get the appropriate content from Firebase
  const content = post.content_in || post.content_en || "";

  const seo = t("seo.blog_post_1", { returnObjects: true });

  return (
    <>
      <SEO
        title={seo.title}
        description={seo.description}
        keywords={seo.keywords}
        robots={seo.robots}
        canonical={seo.canonical}
        schema={seo.schema}
      />
      <div
        style={{
          backgroundColor: "black",
          flexDirection: "column",
          color: "white",
        }}
        className="center-div"
      >
        <div
          style={{
            maxWidth: "800px",
            margin: "120px auto 40px",
            padding: "20px",
          }}
        >
          {/* Header */}
          <header style={{ marginBottom: "40px" }}>
            <Link
              to="/blog"
              style={{
                display: "flex",
                alignItems: "center",
                color: "rgba(255, 255, 255, 0.7)",
                marginBottom: "20px",
                textDecoration: "none",
                fontSize: "14px",
                gap: "8px",
              }}
            >
              <FiArrowRight
                style={{
                  transform: "rotate(180deg)",
                  width: "16px",
                  height: "16px",
                }}
              />
              {t("blog_post.back_to_blog")}
            </Link>

            <div
              style={{
                display: "inline-block",
                backgroundColor: "rgba(59, 130, 246, 0.8)",
                color: "white",
                padding: "4px 12px",
                borderRadius: "20px",
                fontSize: "14px",
                fontWeight: "600",
                marginBottom: "16px",
              }}
            >
              {post.label}
            </div>

            <h1
              style={{
                fontSize: "2.5rem",
                fontWeight: "700",
                marginBottom: "16px",
                color: "white",
                lineHeight: "1.2",
              }}
            >
              {post.name || post.title || "Untitled"}
            </h1>

            {/* YouTube Video Player */}
            {youtubeVideoId && (
              <div
                style={{
                  marginBottom: "24px",
                  borderRadius: "12px",
                  overflow: "hidden",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                  position: "relative",
                  paddingTop: "56.25%", // 16:9 Aspect Ratio
                }}
              >
                <iframe
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    border: "none",
                  }}
                  src={`https://www.youtube.com/embed/${youtubeVideoId}`}
                  title={post.name || post.title || "Blog Post"}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            )}

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "20px",
                paddingBottom: "24px",
                borderBottom: "2px solid rgba(255, 255, 255, 0.1)",
              }}
            >
              <div
                style={{ display: "flex", alignItems: "center", gap: "8px" }}
              >
                <FiCalendar
                  style={{
                    width: "16px",
                    height: "16px",
                    color: "rgba(255, 255, 255, 0.7)",
                  }}
                />
                <span
                  style={{
                    fontSize: "14px",
                    color: "rgba(255, 255, 255, 0.7)",
                  }}
                >
                  {post.created_at
                    ? formatFirebaseDate(post.created_at)
                    : t("blog_page.no_date")}
                </span>
              </div>
              {post.time_of_reading && (
                <div
                  style={{ display: "flex", alignItems: "center", gap: "8px" }}
                >
                  <FiClock
                    style={{
                      width: "16px",
                      height: "16px",
                      color: "rgba(255, 255, 255, 0.7)",
                    }}
                  />
                  <span
                    style={{
                      fontSize: "14px",
                      color: "rgba(255, 255, 255, 0.7)",
                    }}
                  >
                    {formatReadingTime(post.time_of_reading)}
                  </span>
                </div>
              )}
              {post.youtube_url && (
                <a
                  href={post.youtube_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    color: "#FF0000",
                    textDecoration: "none",
                  }}
                >
                  <FaYoutube
                    style={{
                      width: "16px",
                      height: "16px",
                    }}
                  />
                  <span
                    style={{
                      fontSize: "14px",
                      color: "rgba(255, 255, 255, 0.7)",
                    }}
                  >
                    YouTube
                  </span>
                </a>
              )}
            </div>
          </header>

          <FadeInSection>
            {/* JSON File Download Section with Thumbnail */}
            {post.file_thumbnail && post.file && (
              <div style={{ marginBottom: "40px" }}>
                <div
                  style={{
                    backgroundColor: "rgba(59, 130, 246, 0.1)",
                    border: "1px solid rgba(59, 130, 246, 0.3)",
                    borderRadius: "8px",
                    padding: "24px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <h4
                    style={{
                      fontSize: "1.1rem",
                      fontWeight: "600",
                      marginBottom: "16px",
                      color: "white",
                      textAlign: "center",
                    }}
                  >
                    Download the JSON Resource
                  </h4>

                  {/* File Thumbnail Image */}
                  <div
                    style={{
                      marginBottom: "20px",
                      borderRadius: "8px",
                      overflow: "hidden",
                      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                      maxWidth: "90%",
                      width: "100%",
                    }}
                  >
                    <img
                      src={post.file_thumbnail}
                      alt="File preview"
                      style={{
                        width: "100%",
                        height: "auto",
                        display: "block",
                      }}
                    />
                  </div>

                  <button
                    onClick={() => {
                      try {
                        const jsonContent = JSON.stringify(post.file, null, 2);
                        const blob = new Blob([jsonContent], {
                          type: "application/json",
                        });
                        const url = URL.createObjectURL(blob);
                        const link = document.createElement("a");
                        link.href = url;
                        link.download = `${post.name || "content"}.json`;
                        document.body.appendChild(link);
                        link.click();
                        document.body.removeChild(link);
                        URL.revokeObjectURL(url);
                      } catch (error) {
                        console.error("Error downloading JSON:", error);
                      }
                    }}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      backgroundColor: "rgba(59, 130, 246, 0.8)",
                      color: "white",
                      padding: "12px 20px",
                      borderRadius: "8px",
                      border: "none",
                      cursor: "pointer",
                      fontWeight: "500",
                      transition: "all 0.2s ease",
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.backgroundColor =
                        "rgba(59, 130, 246, 1)";
                      e.currentTarget.style.transform = "translateY(-2px)";
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.backgroundColor =
                        "rgba(59, 130, 246, 0.8)";
                      e.currentTarget.style.transform = "translateY(0)";
                    }}
                  >
                    <FiDownload style={{ width: "18px", height: "18px" }} />
                    Scarica JSON
                  </button>
                </div>
              </div>
            )}

            {/* Main Content - Rendered from HTML */}
            <div style={{ marginBottom: "40px" }}>
              <div
                className="html-content"
                dangerouslySetInnerHTML={{ __html: content }}
              />
            </div>

            {/* Tags */}
            {post.tags && post.tags.length > 0 && (
              <div style={{ marginBottom: "40px" }}>
                <h4
                  style={{
                    fontSize: "1rem",
                    fontWeight: "600",
                    marginBottom: "12px",
                    color: "white",
                  }}
                >
                  Tags:
                </h4>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "8px",
                  }}
                >
                  {post.tags.map((tag, index) => (
                    <span
                      key={index}
                      style={{
                        backgroundColor: "rgba(255, 255, 255, 0.1)",
                        color: "rgba(255, 255, 255, 0.8)",
                        padding: "4px 12px",
                        borderRadius: "16px",
                        fontSize: "14px",
                        fontWeight: "500",
                      }}
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Download Section (existing file download) */}
            {post.file && !post.file_thumbnail && (
              <div style={{ marginBottom: "40px" }}>
                <div
                  style={{
                    backgroundColor: "rgba(59, 130, 246, 0.1)",
                    border: "1px solid rgba(59, 130, 246, 0.3)",
                    borderRadius: "8px",
                    padding: "24px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <h4
                    style={{
                      fontSize: "1.1rem",
                      fontWeight: "600",
                      marginBottom: "16px",
                      color: "white",
                      textAlign: "center",
                    }}
                  >
                    Scarica la Risorsa
                  </h4>

                  <p
                    style={{
                      margin: "0 0 20px 0",
                      color: "rgba(255, 255, 255, 0.9)",
                      fontSize: "0.95rem",
                      textAlign: "center",
                      maxWidth: "90%",
                    }}
                  >
                    Accedi a materiale aggiuntivo scaricando il nostro file con
                    il codice completo della soluzione
                  </p>

                  <a
                    href={post.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      backgroundColor: "rgba(59, 130, 246, 0.8)",
                      color: "white",
                      padding: "12px 20px",
                      borderRadius: "8px",
                      textDecoration: "none",
                      fontWeight: "500",
                      transition: "all 0.2s ease",
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.backgroundColor =
                        "rgba(59, 130, 246, 1)";
                      e.currentTarget.style.transform = "translateY(-2px)";
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.backgroundColor =
                        "rgba(59, 130, 246, 0.8)";
                      e.currentTarget.style.transform = "translateY(0)";
                    }}
                  >
                    <FiDownload style={{ width: "18px", height: "18px" }} />
                    Scarica File
                  </a>
                </div>
              </div>
            )}
          </FadeInSection>
        </div>

        <FadeInSection>
          <CallToAction />
        </FadeInSection>
      </div>
    </>
  );
}
