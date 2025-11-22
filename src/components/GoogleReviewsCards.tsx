import { useEffect } from "react";

export default function GoogleReviewWidget() {
  useEffect(() => {
    const scriptId = "EmbedSocialHashtagScript";

    // Prevent adding script multiple times
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = "https://embedsocial.com/cdn/ht.js";
      document.head.appendChild(script);
    }
  }, []);

  return (
    <div
      className="embedsocial-hashtag"
      data-ref="cab870f0000115ed61d4cce1c5b4c92e0ec14a32"
    >
      <a
        className="feed-powered-by-es feed-powered-by-es-feed-img es-widget-branding"
        href="https://embedsocial.com/blog/embed-google-reviews/"
        target="_blank"
        rel="noopener noreferrer"
        title="Embed Google reviews"
      >
        <img
          src="https://embedsocial.com/cdn/icon/embedsocial-logo.webp"
          alt="EmbedSocial"
        />
        <div className="es-widget-branding-text">Embed Google reviews</div>
      </a>
    </div>
  );
}
