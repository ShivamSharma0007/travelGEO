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
// https://embedsocial.com/api/pro_hashtag/23a800ca555ebfaa4ef2821784b18a54b85dce34
  return (
    <div
      className="embedsocial-hashtag"
      data-ref="23a800ca555ebfaa4ef2821784b18a54b85dce34"
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
