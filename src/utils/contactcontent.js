import email from "../assets/email.svg";
import phone from "../assets/phone.svg";
import Location from "../assets/location.svg";

// New Social Imports
import facebook from "../assets/facebook.svg";
import LinkedIn from "../assets/linkedIn.svg";
import Telegram from "../assets/Telegram.svg";
import Github from "../assets/Github.svg";

export const CONTACT_INFO = [
  {
    id: 1,
    label: "Email",
    value: "puthearithkeng7@gmail.com",
    icon: email,
  },
  {
    id: 2,
    label: "Phone",
    value: "+855 16336915",
    icon: phone,
  },
  {
    id: 3,
    label: "Location",
    value: "Phnom Penh, Cambodia",
    icon: Location,
  }
];

export const SOCIAL_LINKS = [
  { id: 1, name: "LinkedIn", url: "https://www.linkedin.com/in/keng-puthearith-08aa862b5?utm_source=share_via&utm_content=profile&utm_medium=member_android", icon: LinkedIn },
  { id: 2, name: "Github", url: "https://github.com/Kengpu", icon: Github },
  { id: 3, name: "Facebook", url: "https://www.facebook.com/XLR8KH", icon: facebook },
  { id: 4, name: "Telegram", url: "https://t.me/KP_11229292", icon: Telegram }
];