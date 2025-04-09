import security_photo from "@/assets/images/Security_photo.png";
import getStarted from "@/assets/images/get-started.png";
import waterApp from "@/assets/images/Water and app.png";
import waterPeople from "@/assets/images/water people.png";
import person from "@/assets/icons/person.png";
import mail from "@/assets/icons/mail.png";
import lock from "@/assets/icons/lock.png";
import check from "@/assets/icons/check.png";
import statement from "@/assets/icons/statement.png";
import home from "@/assets/icons/home.png";
import pay from "@/assets/icons/pay.png";
import calculator from "@/assets/icons/calculator.png";
import logout from "@/assets/icons/logout.png";
import google from "@/assets/icons/google.png";

export const icons = {
  person,
  mail,
  lock,
  logout,
  calculator,
  google,
  home,
  statement,
  pay,
  check,
};

export const images = {
  security_photo,
  getStarted,
  waterApp,
  waterPeople,
};

export const onboarding = [
  {
    id: "1",
    title: "Easily Pay Your Water Bills",
    description:
      "Track your water usage and stay on top of payments with ease.",
    image: images.waterApp,
  },
  {
    id: "2",
    title: "Simplified Service Charges",
    description:
      "Quickly handle your service fees, keeping your estate in top shape.",
    // Description 1: "Pay for estate services like security, cleaning, and maintenance in a few clicks."
    // Description 3: "Conveniently pay service charges for a safer, cleaner, and better community
    image: images.security_photo,
  },
  {
    id: "3",
    title: "Water Payment Model Benefits",
    description:
      "Benefit from a model that helps you manage water costs more effectively",
    image: images.waterPeople,
  },
];
