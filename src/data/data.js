import {
    faPhone,
    faEnvelope,
    faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";

export const CONTACT_INFO = [
    {
        icon: faPhone,
        title: "Phone",
        description: "Call us for any inquiries",
        contact: "+91 8252019123",
        link: "tel:+918252019123",
    },
    {
        icon: faEnvelope,
        title: "Email",
        description: "Send us your questions anytime",
        contact: "support@peakstreak.in",
        link: "mailto:support@peakstreak.in",
    },
    {
        icon: faMapMarkerAlt,
        title: "Location",
        description: "Visit our office",
        contact:
            "Block 1329 Kankarbagh, Patna, INDIA",
        link: "https://www.google.com/maps/place/H5X9%2B57W,+Patna,+Bihar,+India/@25.5979923,85.1656282,17z/data=!3m1!4b1!4m5!3m4!1s0x39f29937c52d4f05:0xb65273d4dfdfe2dc!8m2!3d25.5979875!4d85.1682031?hl=en&entry=ttu",
    },
];

import Logo from '../assets/logo.png';

export const COMPANY_NAME = "Peakstreak";
export const LOGO_ALT = "Company Logo";
export const LOGO = Logo;

export const NAV_LINKS = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
];

export const SCROLL_THRESHOLD = 50;

export const accordionData = [
    {
        id: 1,
        title: "What industries does Peakstreak specialize in ?",
        content: "Peakstreak specializes in food and grain supply chain management, IT services, and maintenance solutions. They connect sellers to distributors, provide legal and banking support, and offer custom website and application development to ensure seamless operations."
    },
    {
        id: 2,
        title: "What makes Peakstreak's team unique ?",
        content: "Peakstreak boasts a professional team with over 10 years of experience. They are known for their commitment to quality, efficiency, and customer satisfaction, providing 24/7 support and fair charges."
    },
    {
        id: 3,
        title: "How does Peakstreak support the food and grain industry ?",
        content: "Peakstreak acts as a trusted partner by connecting sellers to distributors and offering comprehensive support in legal processes and banking. This ensures a smooth and efficient supply chain for their clients"
    },
    {
        id: 4,
        title: "Can Peakstreak handle small projects ?",
        content: "Yes, Peakstreak is known for their attention to detail, even for small projects. They aim to deliver tailored solutions that address the unique challenges of each client, regardless of the project size."
    },
    {
        id: 5,
        title: "What IT services does Peakstreak offer ?",
        content: "Peakstreak offers custom website and application development tailored to client requirements, along with top-notch maintenance services to ensure seamless operations for businesses."
    }
];

export const fromTheCoachData = {
  description:
    "At Peakstreak Pvt. Ltd., we specialize in empowering businesses across diverse industries with tailored digital solutions, tender-based work, and financial support. We help clients optimize their operations by streamlining web development, supply chain management, and maintenance services. Our mission is to ensure business growth while minimizing risks and safeguarding capital. With a focus on sustainable strategies, Peakstreak is dedicated to helping businesses thrive and build a strong foundation for future success.",
  moreDescription: [
    "At Peakstreak Pvt. Ltd., we pride ourselves on offering a comprehensive range of services designed to support businesses across multiple sectors. Our company is built on the pillars of innovation, efficiency, and risk management, ensuring that every solution we provide is tailored to the unique needs of our clients. We operate in several key segments:",
    "Website and App Development: We deliver high-performance websites and mobile applications that are customized to meet the evolving needs of businesses. From responsive designs to CRM integration and SEO optimization, we ensure that our clients have a strong online presence that drives engagement and business growth.",
    "Tender-Based Projects: We manage and execute complex tender-based projects across both government and private sectors. Our expertise lies in handling all aspects, from bidding and documentation to project delivery, ensuring compliance with regulatory guidelines while maximizing client success.",
    "Food and Grains (Purchase and Supply): In this sector, Peakstreak ensures efficient procurement and supply of high-quality food and grains. Our streamlined supply chain management guarantees that businesses have access to the essential commodities they need to operate smoothly and meet their market demands.",
    "Maintenance Solutions: We provide reliable and effective maintenance services to help businesses maintain operational continuity. Our solutions are designed to prevent downtime, ensuring that our clients' infrastructure runs smoothly and efficiently.",
    "Business Loans for Entrepreneurs and Startups: At Peakstreak, we are dedicated to supporting small businesses and startups through tailored financial solutions. Our business loans are designed to provide the capital needed for growth, innovation, and expansion, ensuring that our clients can focus on their core operations without financial constraints.",
  ],
};