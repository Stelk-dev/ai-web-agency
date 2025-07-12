import React, { useEffect, useState } from "react";
import { useAllCases } from "../../UseCases";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FadeInSection } from "../../components/FadeInSection";
import CallToAction from "../homes/CallToAction";

export default function UseCasePage() {
  const loc = useLocation();
  const [t] = useTranslation("global");
  const allCases = useAllCases();
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 1300);
  const [isWideEnough, setIsWideEnough] = useState(window.innerWidth > 1300);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });

    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 1000);
      setIsWideEnough(window.innerWidth > 1300);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const caseData = allCases.find((item) => item.route === loc.pathname);

  const CopyRow = ({ title, description }) => {
    return (
      <div>
        <h3
          style={{
            color: "white",
            fontWeight: "500",
            fontSize: "32px",
            margin: "16px 0px",
          }}
        >
          {title}
        </h3>
        <p
          style={{
            color: "#FFFFFFCC",
            fontSize: "16px",
            lineHeight: "1.8rem",
            maxWidth: "700px",
          }}
        >
          {description}
        </p>
      </div>
    );
  };

  return (
    <div
      style={{
        padding: "32px",
        marginTop: "64px",
        display: "flex",
        gap: "32px",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          borderRadius: "32px",
          background: "linear-gradient(to right,rgb(18, 24, 54), #18266833)",
          display: "flex",
          flexDirection: isLargeScreen ? "row" : "column",
          alignItems: "center",
          justifyContent: "space-between",
          flex: 1,
          textAlign: isLargeScreen ? "left" : "center",
          overflow: "hidden",
          gap: isLargeScreen ? "32px" : "0",
        }}
      >
        {/* Text - On left for large screens */}
        {isLargeScreen && (
          <div
            style={{
              color: "white",
              padding: "32px",
              flex: "1",
              maxWidth: "50%",
              margin: "0px 32px",
              order: 1,
            }}
          >
            <h1
              style={{
                fontSize: "44px",
                fontWeight: "500",
                lineHeight: "3.2rem",
              }}
            >
              {caseData.titleFull}
            </h1>
            <p
              style={{
                fontSize: "16px",
                color: "#FFFFFFCC",
                lineHeight: "1.8rem",
              }}
            >
              {caseData.description}
            </p>
          </div>
        )}

        {/* Image - On right for large screens */}
        <div
          style={{
            width: isLargeScreen ? "50%" : "100%",
            height: isLargeScreen ? "500px" : "300px",
            order: isLargeScreen ? 2 : 1,
          }}
        >
          <img
            src={caseData.image}
            alt={`showcase`}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </div>

        {/* Text - Below for small screens */}
        {!isLargeScreen && (
          <div
            style={{
              color: "white",
              padding: "32px",
              flex: 1,
              maxWidth: "700px",
              margin: "0px 32px",
              order: 2,
            }}
          >
            <h1
              style={{
                fontSize: "44px",
                fontWeight: "500",
                lineHeight: "3.2rem",
              }}
            >
              {caseData.titleFull}
            </h1>
            <p
              style={{
                fontSize: "16px",
                color: "#FFFFFFCC",
                lineHeight: "1.8rem",
              }}
            >
              {caseData.description}
            </p>
          </div>
        )}
      </div>

      {/* Review */}
      {caseData.reviewer && (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "24px",
              borderRadius: "32px",
              padding: "24px 24px",
              maxWidth: "600px",
              border: "1px solid #f7f7f733",
              width: "100%",
            }}
          >
            {/* Avatar */}
            <img
              src={caseData.reviewer.reviewerImage}
              alt="Reviewer"
              style={{
                borderRadius: "100%",
                width: "50px",
                height: "50px",
                backgroundColor: "#CCC",
              }}
            />

            {/* Texts */}
            <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
              <div style={{ color: "#ffe234", fontSize: "18px" }}>
                ★ ★ ★ ★ ★
              </div>

              <h3 style={{ color: "white", fontWeight: "500", margin: "0px" }}>
                {caseData.reviewer.name}
              </h3>
              <p
                style={{ color: "#FFFFFFCC", fontSize: "12px", margin: "0px" }}
              >
                {caseData.reviewer.review}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Side-by-side layout for Inside and Copies when screen is wide enough */}
      <div
        style={{
          display: "flex",
          gap: "32px",
          flexDirection: isWideEnough ? "row-reverse" : "column",
        }}
      >
        {/* Inside */}
        <div
          style={{
            borderRadius: "32px",
            border: "1px solid #f7f7f733",
            padding: "12px 24px",
            flex: 0.95,
            height: "fit-content",
          }}
        >
          <h3
            style={{
              color: "white",
              fontWeight: "500",
              fontSize: "32px",
              margin: "16px 0px",
            }}
          >
            {caseData.title}
          </h3>

          {/* Detail rows */}
          {caseData.info.map((detail, index) => (
            <div
              key={index}
              style={{
                borderTop: "1px solid #f7f7f733",
                padding: "16px 2px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                fontSize: "14px",
                gap: "24px",
              }}
            >
              <div style={{ color: "#FFFFFF99" }}>{detail.label}</div>

              {detail.isLink ? (
                <a
                  href={detail.value}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "#8f94ff",
                    textDecoration: "none",
                    fontWeight: "500",
                  }}
                >
                  {detail.value}
                </a>
              ) : (
                <div
                  style={{
                    color: "white",
                    fontWeight: "500",
                    textAlign: "right",
                  }}
                >
                  {detail.value}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Copies */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            flex: 1,
          }}
        >
          <CopyRow
            title={t("use_case_page.the_problem")}
            description={
              "Crypto Insiders' existing infrastructure struggled to handle the demands of live updates, especially during high-traffic market surges, risking delays and outages. To stay ahead, they needed a fast, reliable, and scalable solution that could meet the expectations of their growing audience."
            }
          />
          <CopyRow
            title={t("use_case_page.the_solution")}
            description={
              "Our mission was to create a future-proof system that delivered real-time coin data seamlessly to Crypto Insiders' visitors. We focused on engineering a solution that prioritized speed, reliability, and scalability—ensuring the platform could meet today's demands and handle tomorrow's growth"
            }
          />
          <CopyRow
            title={t("use_case_page.the_result")}
            description={
              "We engineered a high-performance data delivery system tailored to Crypto Insiders' needs. At the heart of the solution is a dedicated ingestion server that aggregates and verifies coin pricing data, ensuring every update is accurate and reliable. Paired with a dedicated caching layer, the system delivers blazing-fast response times under 200 milliseconds, keeping millions of visitors informed without missing a beat.\n\nTo guarantee the platform's resilience, we stress-tested the architecture to handle surges during volatile market events. The result? A scalable, future-proof system that supports Crypto Insiders' rapid growth, ensuring their audience enjoys a seamless experience—every time they visit."
            }
          />
        </div>
      </div>

      <FadeInSection>
        <CallToAction />
      </FadeInSection>
    </div>
  );
}
