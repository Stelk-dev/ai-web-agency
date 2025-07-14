import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { FadeInSection } from "../components/FadeInSection";
import CallToAction from "./homes/CallToAction";
import SpaceGradientBackground from "../views/FullSkyView";
import { getAllPosts, formatDate } from "../data/BlogPosts";
import { FiClock, FiUser, FiCalendar, FiArrowRight } from "react-icons/fi";

export default function Blog() {
  const [t] = useTranslation("global");
  const blogPosts = getAllPosts();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, []);

  return (
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
          <div
            className="blog-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(350px, 1fr))",
              gap: "30px",
              justifyContent: "center",
            }}
          >
            {blogPosts.length > 0
              ? blogPosts.map((post) => (
                  <div key={post.id}>
                    <Link 
                      to={`/blog/${post.id}`}
                      style={{ textDecoration: 'none' }}
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
                          (e.currentTarget.style.transform = "translateY(-5px)")
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
                          {post.image && post.image.type === "gradient" ? (
                            <>
                              <div
                                style={{
                                  position: "absolute",
                                  top: 0,
                                  left: 0,
                                  right: 0,
                                  bottom: 0,
                                  background: `linear-gradient(135deg, ${post.image.colors[0]}, ${post.image.colors[1]})`,
                                  opacity: 0.3,
                                }}
                                className="gradient-background"
                              ></div>
                              {post.image.hoverImage && (
                                <div
                                  style={{
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    right: 0,
                                    bottom: 0,
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                  }}
                                  className="image-container"
                                >
                                  <img
                                    src={post.image.hoverImage}
                                    alt={post.title}
                                    style={{
                                      width: "100%",
                                      height: "100%",
                                      objectFit: "cover",
                                    }}
                                  />
                                </div>
                              )}
                            </>
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
                          {post.category && (
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
                              {post.category}
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
                            {post.title}
                          </h3>
                          {post.subtitle && (
                            <h4
                              style={{
                                fontSize: "1rem",
                                fontWeight: "400",
                                color: "rgba(255,255,255,0.7)",
                                marginTop: "5px",
                                marginBottom: "15px",
                              }}
                            >
                              {post.subtitle}
                            </h4>
                          )}
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
                              <FiUser
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
                                {post.author}
                              </span>
                            </div>
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
                                {post.date
                                  ? formatDate(post.date)
                                  : t("blog_page.no_date")}
                              </span>
                            </div>
                            {post.readTime && (
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
                                  {post.readTime} lettura
                                </span>
                              </div>
                            )}
                          </div>
                          <p style={{ 
                            fontSize: "1rem", 
                            lineHeight: "1.5",
                            color: "rgba(255, 255, 255, 0.9)"
                          }}>
                            {post.excerpt}
                          </p>
                          <div
                            style={{
                              marginTop: "20px",
                              display: "flex",
                              alignItems: "center",
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
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))
              : // Display placeholder cards when there are no blog posts
                Array.from({ length: 6 }).map((_, index) => (
                  <div key={index}>
                    <div
                      className="blog-card placeholder"
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
                        (e.currentTarget.style.transform = "translateY(-5px)")
                      }
                      onMouseOut={(e) =>
                        (e.currentTarget.style.transform = "translateY(0)")
                      }
                    >
                      <div
                        style={{
                          height: "200px",
                          background: "#333",
                          position: "relative",
                        }}
                      >
                        <div
                          style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            background: `linear-gradient(135deg, #6366f1, #8b5cf6)`,
                          }}
                        ></div>
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
                          {t("blog_page.sample_category")}
                        </div>
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
                          {t("blog_page.sample_title")} {index + 1}
                        </h3>
                        <h4
                          style={{
                            fontSize: "1rem",
                            fontWeight: "400",
                            color: "rgba(255,255,255,0.7)",
                            marginTop: "5px",
                            marginBottom: "15px",
                          }}
                        >
                          {t("blog_page.sample_subtitle")}
                        </h4>
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
                            <FiUser
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
                              {t("blog_page.sample_author")}
                            </span>
                          </div>
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
                              July {10 + index}, 2025
                            </span>
                          </div>
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
                              5 min lettura
                            </span>
                          </div>
                        </div>
                        <p style={{ 
                          fontSize: "1rem", 
                          lineHeight: "1.5",
                          color: "rgba(255, 255, 255, 0.9)"
                        }}>
                          {t("blog_page.sample_excerpt")}
                        </p>
                        <div
                          style={{
                            marginTop: "20px",
                            display: "flex",
                            alignItems: "center",
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
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
          </div>
        </div>
      </FadeInSection>

      <FadeInSection>
        <CallToAction />
      </FadeInSection>
    </div>
  );
}
