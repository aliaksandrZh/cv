import studySectionJsA from "/certificates/study-section-js-a.webp";
import studySectionJsE from "/certificates/study-section-js-e.webp";
import studySectionJsF from "/certificates/study-section-js-f.webp";
import testdomJs from "/certificates/testdom-js.webp";
import udemyAngular15 from "/certificates/udemy-angular-15.webp";
import udemyAngularTestingMc from "/certificates/udemy-angular-testing-masterclass.webp";
import udemyAngular from "/certificates/udemy-angular.webp";
import udemyCssMaster from "/certificates/udemy-css-master.webp";
import udemyJsAdvanced from "/certificates/udemy-js-advanced.webp";
import udemyRxjs from "/certificates/udemy-rxjs.webp";
import angularIntermediate from "/certificates/angular-intermediate-certificate.webp";
import reactIntermediate from "/certificates/react-frontend-developer-certificate.webp";
import jsIntermediate from "/certificates/javascript-intermediate-certificate.webp";
import tsWizardErrorSolving from "/certificates/ts-wizard-error-solving.webp";
import tsWizardZodWorkshop from "/certificates/ts-wizard-zod-workshop.webp";
import udemyDSABootcamp from "/certificates/udemy-bootcamp-DSA.webp";
import udemyTailWind from "/certificates/udemy-tailwind.webp";

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
  {
    img: tsWizardErrorSolving,
    platform: "Total Typescript",
    title: "Solving TypeScript errors",
    date: "17.05.2024",
  },
  {
    img: tsWizardZodWorkshop,
    platform: "Total Typescript",
    title: "Zod",
    date: "17.05.2024",
  },
  {
    img: udemyDSABootcamp,
    platform: "Udemy",
    title: "Algorithms + Data Structures",
    date: "22.06.2024",
  },
  {
    img: udemyTailWind,
    platform: "Udemy",
    title: "Tailwind CSS from scratch",
    date: "19.06.2024",
  },
].sort((a, b) => {
  const dateA = new Date(a.date.split(".").reverse().join("-"));
  const dateB = new Date(b.date.split(".").reverse().join("-"));
  return dateB.getTime() - dateA.getTime(); // For descending order
});

export type Certificate = (typeof certificates)[0];
