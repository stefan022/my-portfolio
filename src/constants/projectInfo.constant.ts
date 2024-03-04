import { IProjectInfo } from "../typescript/interfaces/IProjectInfo";

const firstProjectInfo: IProjectInfo[] = [
	{
		id: 1,
		text: 'The internship project on the topic of "wallet" that we worked on at ENON solutions company. Technologies we used in the project include: Vue.js3, Pinia, MySQL, MarsENGINE, VueRouter, axios, moment, primeicons, swiper, vue3-toastify, faker-js, and CryptocurrencyLiveAPI.',
	},
	{
		id: 2,
		text: "Additionally, we implemented interceptors to streamline specific scenarios for the axios instance.",
	},
	{
		id: 3,
		text: "The application features permissions and session management, notifying users of expired sessions prompting reauthentication.",
	},
	{
		id: 4,
		text: 'The price of cryptocurrencies is in real-time and changes every few seconds, with the ability to buy, sell, and send to another user. We used faker-js to create "cards" for the purpose of our digital ATM in the application, through which you can deposit and withdraw your money.',
	},
	{
		id: 5,
		text: "You can view the history of all transactions, search them, sort them, and delete the entire history. There are also notifications you receive from the admin, when you submit requests for withdrawing money, extending the card, or renewing the card.",
	},
];

const secondProjectInfo: IProjectInfo[] = [
	{
		id: 1,
		text: "Spearheaded the end-to-end development of an innovative e-commerce application, leveraging a wide range of cutting-edge technologies, including: React, TypeScript, Redux-Toolkit, RTK Query, Tailwind, React Router, Firebase, Rapid API, React Icons, Full Calendar, React Spinner, React Toastify, React Beautiful DND, Moment.js, Numeral.js, Formik, Yup, React Paginate and React ApexCharts.",
	},
	{
		id: 2,
		text: "Utilized Redux Toolkit and RTK Query to efficiently manage the global state and handle asynchronous data fetching, facilitating real-time updates and caching for improved application performance.",
	},
	{
		id: 3,
		text: "Integrated Firebase as the backend solution, providing secure authentication (including Google account authentication as well) and real-time database capabilities to enable user interactions and seamless data synchronization.",
	},
	{
		id: 4,
		text: "Incorporated Rapid API to enrich the application with external data sources, enhancing the product offerings and providing a diverse range of options for users.",
	},
];

export { firstProjectInfo, secondProjectInfo };
