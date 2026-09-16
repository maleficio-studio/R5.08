import iconFacebook from "../assets/images/icon-facebook.svg";
import iconTwitter from "../assets/images/icon-twitter.svg";
import iconInstagram from "../assets/images/icon-instagram.svg";
import iconYoutube from "../assets/images/icon-youtube.svg";
import iconUp from "../assets/images/icon-up.svg";
import iconDown from "../assets/images/icon-down.svg";
import iconPlaceholder from "../assets/images/icon-placeholder.svg";

const platformIcons = {
  Facebook: iconFacebook,
  Twitter: iconTwitter,
  Instagram: iconInstagram,
  Youtube: iconYoutube,
  Up: iconUp,
  Down: iconDown,
};

export function getIcon(name) {
  if (!name) return iconPlaceholder;
  // Normalize: capitalize first letter so "facebook" matches "Facebook"
  const key = name.charAt(0).toUpperCase() + name.slice(1);
  return platformIcons[key] ?? iconPlaceholder;
}
