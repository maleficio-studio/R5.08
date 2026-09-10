import iconFacebook from '../assets/images/icon-facebook.svg';
import iconTwitter from '../assets/images/icon-twitter.svg';
import iconInstagram from '../assets/images/icon-instagram.svg';
import iconYoutube from '../assets/images/icon-youtube.svg';

const socialmediaData = [
  {
    id: 1,
    name: "Facebook",
    image: iconFacebook,
    username: "@nathanf",
    followers: "1987",
    today: "12",
  },
  {
    id: 2,
    name: "Twitter",
    image: iconTwitter,
    username: "@nathanf",
    followers: "1044",
    today: "99",
  },
  {
    id: 3,
    name: "Instagram",
    image: iconInstagram,
    username: "@realnathanf",
    followers: "11k",
    today: "1099",
  },
  {
    id: 4,
    name: "Youtube",
    image: iconYoutube,
    username: "Nathan F",
    followers: "8239",
    today: "144",
  },
];

const socialmediaoverviewData = [
  {
    id: 1,
    name: "Page Views",
    platform: "Facebook",
    image: iconFacebook,
    data: "87",
    percent: "+3%",
  },
  {
    id: 2,
    name: "Likes",
    platform: "Facebook",
    image: iconFacebook,
    data: "52",
    percent: "-2%",
  },
  {
    id: 3,
    name: "Likes",
    platform: "Instagram",
    image: iconInstagram,
    data: "5462",
    percent: "+2257%",
  },
  {
    id: 4,
    name: "Profile Views",
    platform: "Instagram",
    image: iconInstagram,
    data: "52366",
    percent: "+1375%",
  },
  {
    id: 5,
    name: "Retweets",
    platform: "Twitter",
    image: iconTwitter,
    data: "117",
    percent: "+303%",
  },
  {
    id: 6,
    name: "Likes",
    platform: "Twitter",
    image: iconTwitter,
    data: "507",
    percent: "+553%",
  },
  {
    id: 7,
    name: "Likes",
    platform: "YouTube",
    image: iconYoutube,
    data: "107",
    percent: "-19%",
  },
  {
    id: 8,
    name: "Total Views",
    platform: "YouTube",
    image: iconYoutube,
    data: "1407",
    percent: "-12%",
  },
];

export { socialmediaData, socialmediaoverviewData };
