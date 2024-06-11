import studySectionJsA from "@/images/certificates/study-section-js-a.webp";
import studySectionJsE from "@/images/certificates/study-section-js-e.webp";
import studySectionJsF from "@/images/certificates/study-section-js-f.webp";
import testdomJs from "@/images/certificates/testdom-js.webp";
import udemyAngular15 from "@/images/certificates/udemy-angular-15.webp";
import udemyAngularTestingMc from "@/images/certificates/udemy-angular-testing-masterclass.webp";
import udemyAngular from "@/images/certificates/udemy-angular.webp";
import udemyCssMaster from "@/images/certificates/udemy-css-master.webp";
import udemyJsAdvanced from "@/images/certificates/udemy-js-advanced.webp";
import udemyRxjs from "@/images/certificates/udemy-rxjs.webp";
import angularIntermediate from "@/images/certificates/angular-intermediate-certificate.webp";
import reactIntermediate from "@/images/certificates/react-frontend-developer-certificate.webp";
import jsIntermediate from "@/images/certificates/javascript-intermediate-certificate.webp";

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
  //   {
  //     img: jsIntermediate,
  //     platform: "HackerRank",
  //     title: "JavaScript (Intermediate)",
  //     date: "10.06.2024",
  //   },
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
];

export type Certificate = (typeof certificates)[0];
