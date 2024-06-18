import studySectionJsA from "../../public/certificates/study-section-js-a.webp";
import studySectionJsE from "../../public/certificates/study-section-js-e.webp";
import studySectionJsF from "../../public/certificates/study-section-js-f.webp";
import testdomJs from "../../public/certificates/testdom-js.webp";
import udemyAngular15 from "../../public/certificates/udemy-angular-15.webp";
import udemyAngularTestingMc from "../../public/certificates/udemy-angular-testing-masterclass.webp";
import udemyAngular from "../../public/certificates/udemy-angular.webp";
import udemyCssMaster from "../../public/certificates/udemy-css-master.webp";
import udemyJsAdvanced from "../../public/certificates/udemy-js-advanced.webp";
import udemyRxjs from "../../public/certificates/udemy-rxjs.webp";
import angularIntermediate from "../../public/certificates/angular-intermediate-certificate.webp";
import reactIntermediate from "../../public/certificates/react-frontend-developer-certificate.webp";
import jsIntermediate from "../../public/certificates/javascript-intermediate-certificate.webp";

export const certificates = [
  {
    img: angularIntermediate,
    platform: "HackerRank",
    title: "Angular",
    date: "10.06.2024",
  },
  {
    img: reactIntermediate,
    platform: "HackerRank",
    title: "Frontend Developer (React)",
    date: "10.06.2024",
  },
  {
    img: jsIntermediate,
    platform: "HackerRank",
    title: "JavaScript",
    date: "10.06.2024",
  },
  {
    img: testdomJs,
    platform: "TESTDOM",
    title: "JavaScript",
    date: "18.04.2023",
  },
  {
    img: studySectionJsA,
    platform: "Study Section",
    title: "JavaScript Programming (Advanced)",
    date: "16.04.2023",
  },
  {
    img: studySectionJsE,
    platform: "Study Section",
    title: "JavaScript Programming (Expert)",
    date: "16.04.2023",
  },
  {
    img: studySectionJsF,
    platform: "Study Section",
    title: "JavaScript Programming (Foundation)",
    date: "16.04.2023",
  },
  {
    img: udemyAngular,
    platform: "Udemy",
    title: "Angular - The Complite Guide",
    date: "16.04.2023",
  },
  {
    img: udemyAngular15,
    platform: "Udemy",
    title: "Reactive Angular Course",
    date: "21.04.2023",
  },
  {
    img: udemyAngularTestingMc,
    platform: "Udemy",
    title: "Angular Testing Masterclass",
    date: "16.04.2023",
  },
  {
    img: udemyCssMaster,
    platform: "Udemy",
    title: "Become a CSS master",
    date: "16.04.2023",
  },
  {
    img: udemyJsAdvanced,
    platform: "Udemy",
    title: "JavaScript: The Advanced concepts",
    date: "25.04.2023",
  },
  {
    img: udemyRxjs,
    platform: "Udemy",
    title: "RxJS in Practice",
    date: "20.04.2023",
  },
].sort((a, b) => {
  const dateA = new Date(a.date.split(".").reverse().join("-"));
  const dateB = new Date(b.date.split(".").reverse().join("-"));
  return dateB.getTime() - dateA.getTime(); // For descending order
});

export type Certificate = (typeof certificates)[0];
