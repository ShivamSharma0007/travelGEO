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

//   https://embedsocial.com/api/pro_hashtag/{place_this_id_in_data-ref}

  return (
    <div
      className="embedsocial-hashtag"
      data-ref="e087ad14083f19e4cff6084ec1bc4e8fc3aa776f"
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
