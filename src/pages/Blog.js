import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { FadeInSection } from "../components/FadeInSection";
import CallToAction from "./homes/CallToAction";
import SpaceGradientBackground from "../views/FullSkyView";
import { getAllPosts, formatFirebaseDate } from "../data/BlogPosts";
import { FiClock, FiCalendar, FiArrowRight } from "react-icons/fi";
import { FaYoutube } from "react-icons/fa";
import SEO from "../components/SEO/SEO";

export default function Blog() {
  const [t] = useTranslation("global");
  const seo = t("seo.blog", { returnObjects: true });
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });

    // Fetch blog posts from Firebase
    const fetchPosts = async () => {
      try {
        setLoading(true);
        setError(null);
        const posts = await getAllPosts();
        console.log("Fetched blog posts:", posts);
        setBlogPosts(posts);
      } catch (err) {
        console.error("Error fetching posts:", err);
        setError("Failed to load blog posts");
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

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
        }}
        className="center-div"
      >
        {/* Background */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: "50%",
            transform: "translateX(-50%)",
            width: "85%",
            height: "85%",
          }}
        >
          <SpaceGradientBackground
            starsNumber={15}
            glowingStarsNumber={14}
            backgroundColorBlack={true}
          />
        </div>

        {/* Content */}
        <div
          style={{
            height: "80vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            color: "white",
            padding: "0px 24px",
          }}
        >
          <div
            style={{
              width: "100%",
              position: "relative",
              zIndex: 10,
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              maxWidth: "800px",
            }}
          >
            <h1
              style={{ fontWeight: "600", fontSize: "60px", lineHeight: "1.2" }}
            >
              {t("blog_page.title")}
            </h1>
            <p style={{ margin: "0px", padding: "0px" }}>
              {t("blog_page.description")}
            </p>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <FadeInSection>
          <div
            className="blog-grid-container"
            style={{
              padding: "40px 20px",
              maxWidth: "1200px",
              margin: "0 auto",
              color: "white",
            }}
          >
            {loading ? (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  minHeight: "400px",
                }}
              >
                <p style={{ fontSize: "18px" }}>Loading blog posts...</p>
              </div>
            ) : error ? (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  minHeight: "400px",
                  textAlign: "center",
                }}
              >
                <div>
                  <p style={{ fontSize: "18px", marginBottom: "10px" }}>
                    {error}
                  </p>
                  <button
                    onClick={() => window.location.reload()}
                    style={{
                      backgroundColor: "rgba(59, 130, 246, 0.8)",
                      color: "white",
                      border: "none",
                      padding: "10px 20px",
                      borderRadius: "8px",
                      cursor: "pointer",
                    }}
                  >
                    Try Again
                  </button>
                </div>
              </div>
            ) : (
              <div className="blog-grid blog-grid-3x3">
                {blogPosts.length > 0 ? (
                  blogPosts.map((post) => (
                    <div key={post.id}>
                      <Link
                        to={`/blog/${post.id}`}
                        style={{ textDecoration: "none" }}
                      >
                        <div
                          className="blog-card"
                          style={{
                            background: "rgba(20, 20, 20, 0.7)",
                            borderRadius: "10px",
                            overflow: "hidden",
                            transition: "transform 0.3s ease",
                            cursor: "pointer",
                            backdropFilter: "blur(5px)",
                            border: "1px solid rgba(255, 255, 255, 0.1)",
                          }}
                          onMouseOver={(e) =>
                            (e.currentTarget.style.transform =
                              "translateY(-5px)")
                          }
                          onMouseOut={(e) =>
                            (e.currentTarget.style.transform = "translateY(0)")
                          }
                        >
                          {/* Card content remains the same */}
                          <div
                            style={{
                              height: "200px",
                              background: "#333",
                              position: "relative",
                              overflow: "hidden",
                            }}
                          >
                            {post.thumbnail ? (
                              <img
                                src={post.thumbnail}
                                alt={post.name || post.title}
                                style={{
                                  width: "100%",
                                  height: "100%",
                                  objectFit: "cover",
                                }}
                              />
                            ) : (
                              <div
                                style={{
                                  position: "absolute",
                                  top: 0,
                                  left: 0,
                                  right: 0,
                                  bottom: 0,
                                  background:
                                    "linear-gradient(135deg, #6366f1, #8b5cf6)",
                                }}
                              ></div>
                            )}
                            {post.label && (
                              <div
                                style={{
                                  position: "absolute",
                                  top: "15px",
                                  left: "15px",
                                  backgroundColor: "rgba(59, 130, 246, 0.8)",
                                  color: "white",
                                  padding: "4px 12px",
                                  borderRadius: "20px",
                                  fontSize: "14px",
                                  fontWeight: "600",
                                }}
                              >
                                {post.label}
                              </div>
                            )}
                          </div>
                          <div style={{ padding: "20px" }}>
                            <h3
                              style={{
                                marginTop: "10px",
                                fontSize: "1.5rem",
                                fontWeight: "600",
                                lineHeight: "1.2",
                                color: "#ffffff",
                              }}
                            >
                              {post.name || post.title || "Untitled"}
                            </h3>
                            <div
                              style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "16px",
                                marginBottom: "15px",
                              }}
                            >
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  gap: "6px",
                                }}
                              >
                                <FiCalendar
                                  style={{
                                    width: "14px",
                                    height: "14px",
                                    color: "rgba(255,255,255,0.7)",
                                  }}
                                />
                                <span
                                  style={{
                                    fontSize: "0.8rem",
                                    color: "rgba(255,255,255,0.7)",
                                  }}
                                >
                                  {post.displayDate ||
                                    (post.created_at
                                      ? formatFirebaseDate(post.created_at)
                                      : t("blog_page.no_date"))}
                                </span>
                              </div>
                              {post.time_of_reading && (
                                <div
                                  style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "6px",
                                  }}
                                >
                                  <FiClock
                                    style={{
                                      width: "14px",
                                      height: "14px",
                                      color: "rgba(255,255,255,0.7)",
                                    }}
                                  />
                                  <span
                                    style={{
                                      fontSize: "0.8rem",
                                      color: "rgba(255,255,255,0.7)",
                                    }}
                                  >
                                    {post.time_of_reading} min lettura
                                  </span>
                                </div>
                              )}
                            </div>
                            <div
                              style={{
                                marginTop: "20px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                              }}
                            >
                              <button
                                style={{
                                  background: "none",
                                  color: "#6366f1",
                                  border: "none",
                                  padding: "8px 0",
                                  cursor: "pointer",
                                  fontSize: "0.9rem",
                                  fontWeight: "bold",
                                  display: "flex",
                                  alignItems: "center",
                                  gap: "5px",
                                }}
                              >
                                {t("blog_page.read_more")} <FiArrowRight />
                              </button>
                              {post.youtube_url && (
                                <a
                                  href={post.youtube_url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  style={{
                                    background: "none",
                                    color: "#FF0000",
                                    border: "none",
                                    padding: "8px 0",
                                    cursor: "pointer",
                                    fontSize: "0.9rem",
                                    fontWeight: "bold",
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "5px",
                                    textDecoration: "none",
                                  }}
                                >
                                  <FaYoutube style={{ fontSize: "1.1rem" }} />{" "}
                                  Watch on YouTube
                                </a>
                              )}
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))
                ) : (
                  <div
                    style={{
                      gridColumn: "1 / -1",
                      textAlign: "center",
                      padding: "40px",
                    }}
                  >
                    <p style={{ fontSize: "18px" }}>No blog posts available</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </FadeInSection>

        <FadeInSection>
          <CallToAction />
        </FadeInSection>
      </div>
    </>
  );
}
