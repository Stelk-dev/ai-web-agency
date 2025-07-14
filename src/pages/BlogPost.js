import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useParams, Link } from "react-router-dom";
import { FadeInSection } from "../components/FadeInSection";
import CallToAction from "./homes/CallToAction";
import { getPostById, formatDate } from "../data/BlogPosts";
import {
  FiClock,
  FiUser,
  FiCalendar,
  FiCode,
  FiDatabase,
  FiMail,
  FiArrowRight,
  FiDownload,
} from "react-icons/fi";
import { FaYoutube } from "react-icons/fa";

export default function BlogPost() {
  const [t] = useTranslation("global");
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });

    // Find the post with the given ID
    // Convert id from string to number to match the type in blogPosts
    const foundPost = getPostById(Number(id));
    setPost(foundPost);
  }, [id]);

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

  const youtubeVideoId = post.youtubeUrl
    ? getYoutubeVideoId(post.youtubeUrl)
    : null;

  // Map icons to components
  const getIconComponent = (iconName) => {
    switch (iconName) {
      case "FiCode":
        return <FiCode />;
      case "FiDatabase":
        return <FiDatabase />;
      case "FiMail":
        return <FiMail />;
      default:
        return <FiArrowRight />;
    }
  };

  return (
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
            {post.category}
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
            {post.title}
          </h1>

          <h2
            style={{
              fontSize: "1.25rem",
              fontWeight: "400",
              color: "rgba(255, 255, 255, 0.7)",
              marginBottom: "24px",
            }}
          >
            {post.subtitle}
          </h2>

          {/* YouTube Video Player */}
          {youtubeVideoId && (
            <div
              style={{
                marginBottom: "24px",
                borderRadius: "12px",
                overflow: "hidden",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                position: "relative",
                paddingTop: "56.25%" // 16:9 Aspect Ratio
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
                title={post.title}
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
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <FiUser
                style={{
                  width: "16px",
                  height: "16px",
                  color: "rgba(255, 255, 255, 0.7)",
                }}
              />
              <span
                style={{ fontSize: "14px", color: "rgba(255, 255, 255, 0.7)" }}
              >
                {post.author}
              </span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <FiCalendar
                style={{
                  width: "16px",
                  height: "16px",
                  color: "rgba(255, 255, 255, 0.7)",
                }}
              />
              <span
                style={{ fontSize: "14px", color: "rgba(255, 255, 255, 0.7)" }}
              >
                {post.date ? formatDate(post.date) : t("blog_page.no_date")}
              </span>
            </div>
            {post.readTime && (
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
                  {post.readTime} lettura
                </span>
              </div>
            )}
            {post.youtubeUrl && (
              <a
                href={post.youtubeUrl}
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
          {/* Process Steps */}
          {post.steps && post.steps.length > 0 && (
            <div
              style={{
                backgroundColor: "rgba(20, 20, 20, 0.7)",
                padding: "30px",
                borderRadius: "12px",
                marginBottom: "40px",
                backdropFilter: "blur(5px)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
              }}
            >
              <h3
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "600",
                  marginBottom: "24px",
                  color: "white",
                  textAlign: "center",
                }}
              >
                Il Processo in {post.steps.length} Passaggi
              </h3>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  gap: "20px",
                  position: "relative",
                  flexWrap: "wrap",
                }}
              >
                {post.steps.map((step, index) => (
                  <div
                    key={index}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      textAlign: "center",
                      flex: "1",
                      minWidth: "150px",
                      position: "relative",
                    }}
                  >
                    <div
                      style={{
                        width: "60px",
                        height: "60px",
                        backgroundColor: "rgba(59, 130, 246, 0.8)",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginBottom: "16px",
                        color: "white",
                        fontSize: "24px",
                      }}
                    >
                      {getIconComponent(step.icon)}
                    </div>
                    <h4
                      style={{
                        fontSize: "1rem",
                        fontWeight: "600",
                        marginBottom: "8px",
                        color: "white",
                      }}
                    >
                      {step.title}
                    </h4>
                    <p
                      style={{
                        fontSize: "14px",
                        color: "rgba(255, 255, 255, 0.7)",
                        margin: "0",
                      }}
                    >
                      {step.description}
                    </p>
                    {index < post.steps.length - 1 && (
                      <div
                        style={{
                          position: "absolute",
                          right: "-12px",
                          top: "30px",
                          color: "rgba(255, 255, 255, 0.3)",
                          transform: "translateX(0)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          zIndex: 10,
                        }}
                        className="arrow-container"
                      >
                        <FiArrowRight
                          style={{ width: "24px", height: "24px" }}
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Introduction */}
          <div style={{ marginBottom: "40px" }}>
            <p
              style={{
                fontSize: "1.125rem",
                color: "rgba(255, 255, 255, 0.9)",
                marginBottom: "24px",
                fontWeight: "400",
                lineHeight: "1.6",
              }}
            >
              {post.content.introduction}
            </p>

            {post.content.callout && (
              <div
                style={{
                  backgroundColor: "rgba(59, 130, 246, 0.1)",
                  border: "1px solid rgba(59, 130, 246, 0.3)",
                  borderRadius: "8px",
                  padding: "20px",
                  marginBottom: "32px",
                }}
              >
                <p
                  style={{
                    margin: "0",
                    color: "rgba(59, 130, 246, 0.9)",
                    fontSize: "1rem",
                  }}
                >
                  {post.content.callout}
                </p>
              </div>
            )}
          </div>

          {/* Content Sections */}
          <div style={{ marginBottom: "40px" }}>
            {post.content.sections.map((section, index) => (
              <section key={index} style={{ marginBottom: "32px" }}>
                <h3
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: "600",
                    marginBottom: "16px",
                    color: "white",
                  }}
                >
                  {section.title}
                </h3>
                <p
                  style={{
                    fontSize: "1rem",
                    color: "rgba(255, 255, 255, 0.9)",
                    marginBottom: "20px",
                    lineHeight: "1.6",
                  }}
                >
                  {section.content}
                </p>
              </section>
            ))}
          </div>

          {/* Code Example */}
          {post.content.codeExample && (
            <div style={{ marginBottom: "40px" }}>
              <h3
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "600",
                  marginBottom: "16px",
                  color: "white",
                }}
              >
                Esempio di Codice
              </h3>

              <div
                style={{
                  backgroundColor: "#1F2937",
                  borderRadius: "8px",
                  padding: "20px",
                  overflow: "auto",
                }}
              >
                <pre
                  style={{
                    margin: "0",
                    color: "#E5E7EB",
                    fontSize: "14px",
                    fontFamily: "Monaco, Menlo, 'Ubuntu Mono', monospace",
                    overflowX: "auto",
                  }}
                >
                  <code>{post.content.codeExample}</code>
                </pre>
              </div>
            </div>
          )}

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
          
          {/* Download Section */}
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
              
              {post.image && post.image.fileImage && (
                <div
                  style={{
                    width: "100%",
                    maxWidth: "500px",
                    marginBottom: "20px",
                    borderRadius: "6px",
                    overflow: "hidden",
                    border: "1px solid rgba(59, 130, 246, 0.5)",
                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
                  }}
                >
                  <img
                    src={post.image.fileImage}
                    alt="Risorsa scaricabile"
                    style={{
                      width: "100%",
                      height: "auto",
                      display: "block",
                    }}
                  />
                </div>
              )}
              
              <p
                style={{
                  margin: "0 0 20px 0",
                  color: "rgba(255, 255, 255, 0.9)",
                  fontSize: "0.95rem",
                  textAlign: "center",
                  maxWidth: "90%",
                }}
              >
                Accedi a materiale aggiuntivo scaricando il nostro file con il codice completo della soluzione
              </p>
              
              <a
                href="https://drive.google.com/file/d/16cNP_F5va9A89bL2fFjmk_V6RxwUFxEy/view?usp=drive_link"
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
                  e.currentTarget.style.backgroundColor = "rgba(59, 130, 246, 1)";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = "rgba(59, 130, 246, 0.8)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <FiDownload style={{ width: "18px", height: "18px" }} />
                Scarica File
              </a>
            </div>
          </div>

          {/* Conclusion */}
          {post.content.conclusion && (
            <div
              style={{
                backgroundColor: "rgba(5, 150, 105, 0.1)",
                border: "1px solid rgba(5, 150, 105, 0.3)",
                borderRadius: "8px",
                padding: "24px",
                marginBottom: "40px",
              }}
            >
              <h3
                style={{
                  fontSize: "1.25rem",
                  fontWeight: "600",
                  marginBottom: "12px",
                  color: "rgba(5, 150, 105, 1)",
                }}
              >
                Conclusione: Efficienza a Portata di Click
              </h3>
              <p
                style={{
                  margin: "0",
                  color: "rgba(5, 150, 105, 0.9)",
                  fontSize: "1rem",
                  lineHeight: "1.6",
                }}
              >
                {post.content.conclusion}
              </p>
            </div>
          )}

          {/* Download Link section removed as we have a dedicated download section with fileImage */}

          {/* Footer */}
          {post.content.footer && (
            <footer
              style={{
                textAlign: "center",
                paddingTop: "24px",
                borderTop: "1px solid rgba(255, 255, 255, 0.1)",
              }}
            >
              <p
                style={{
                  color: "rgba(255, 255, 255, 0.7)",
                  fontSize: "14px",
                  margin: "0",
                }}
              >
                {post.content.footer}
              </p>
            </footer>
          )}
        </FadeInSection>
      </div>

      <FadeInSection>
        <CallToAction />
      </FadeInSection>
    </div>
  );
}
