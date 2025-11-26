// central site data (you can later replace with fetch from API)
import arVrRoboticsImage from '../assets/ar_vr_robotics.png';
import bdFlag from '../assets/Bangladesh.png'; // আপনার ইমেজ পাথ ঠিক করে দেবেন
import BArmy from '../assets/BArmy.png';
import BMS from '../assets/BMS.png';
import CCA from '../assets/CCA.png';
import customSolutionImage from '../assets/custom_solution.png';
import Freelancing from '../assets/Freelacing.png';
import ICT from '../assets/ICT.png';
import jpFlag from '../assets/Japan.png';
import kentaKatoImage from '../assets/Kenta Kato.png';
import KHOZ from '../assets/Khoj.png';
import kinyiaIshiiImage from '../assets/Kinya Ishii.png';
import Logo from '../assets/logo.png';
import MadeInBangla from '../assets/MadeInBangla.png';
import malligaSubramaniumImage from '../assets/Malliga Subramanium.png';
import Maritime from '../assets/Maritime.png';
import Prostuti from '../assets/Prostuti.png';
import Quiz from '../assets/Quiz.png';
import skillMigrationImage from '../assets/skill_migration.png';
import sobjantaImage from '../assets/sobjanta.png';
import TKG from '../assets/TKGERP.png';
import UN from '../assets/UN.png';
import usaFlag from '../assets/USA.png';

const aboutSectionData = {
    title: 'About TechKnowGram',
    p1: 'TechKnowGram is a leading technology company based in Bangladesh, specializing in providing customized web and embedded solutions across various domains. With expertise in ERP, AI, IoT, ML, Data Analytics, Robotics, AR, VR Applications, Gaming, and Animation.',
    p2: "Renowned globally for expertise in USA, EU, and Japanese ICT markets with 25+ years of combined professional experience. ISO 9001, ISO 14001, and ISO/IEC 27001 certified, we're committed to delivering innovative solutions to clients.",

    stats: [
        { title: 'Global Presence', value: 'Offices in Bangladesh, Japan, and USA' },
        { title: 'Experience', value: '25+ years of combined expertise' },
        { title: 'Certifications', value: 'ISO 9001, ISO 14001, ISO/IEC 27001' },
        { title: 'Team', value: '55+ talented professionals' }
    ],

    buttons: [
        { label: 'Download Portfolio', type: 'primary' },
        { label: 'View Brochure', type: 'secondary' }
    ]
};
const siteData = {
    company: {
        name: 'TechKnowGram Ltd.',
        logoImage: Logo,
        description: 'A leading technology company providing AI, IoT and software solutions.',
        tagline: 'AI & IoT Solutions for Enterprise',
        phone: '+880 2233 11511',
        email: 'info@techknowgram.com',
        address: 'Suite 6B, House 8A/10, Doreen Tower, Road 13, Dhanmondi, Dhaka 1209'
    },
    hero: {
        title: 'AI & IoT Solutions for Enterprise',
        subtitle:
            '25+ years of expertise delivering customized web, embedded solutions, and AI-powered applications.Trusted by 100+ clients globally across USA, EU, and Japan.'
    },
    govtPartners: [
        {
            id: 1,
            title: 'ICT Division',
            image: ICT
        },
        {
            id: 2,
            title: 'CCA',
            image: CCA
        },
        {
            id: 3,
            title: 'Bangladesh Army',
            image: BArmy
        },
        {
            id: 4,
            title: 'Maritime Cluster',
            image: UN
        },
        {
            id: 5,
            title: 'United Nations',
            image: Maritime
        }
    ],
    products: [
        {
            id: 'p1',
            image: sobjantaImage,
            title: 'Sobjanta.ai',
            description:
                'Sobjanta.ai is a Generative AI-Based Personal Assistant. It also known as a conversational AI or chatbot trained to be informative and comprehensive.',
            link: '#sobjanta'
        },
        {
            id: 'p2',
            image: TKG,
            title: 'TKG ERP',
            description:
                'TechknowGram Limited offers its own Enterprise Resource Planning solution called TKG ERP, which can be tailored to meet the unique needs of any business entity.',
            link: '#TKG ERP'
        },
        {
            id: 'p3',
            image: MadeInBangla,
            title: 'MadeInBangladesh.info',
            description:
                'Made In Bangladesh aims to bridge the gap between local producers and international consumers by offering a curated selection of high-quality, authentic Bangladeshi good.',
            link: '#MadeInBangla'
        },
        {
            id: 'p4',
            image: Freelancing,
            title: 'FREELANCING',
            description:
                'Our mission is to empower freelancers by providing a robust platform where they can showcase their skills, connect with clients, and build sustainable careers.',
            link: '#Freelancing'
        },
        {
            id: 'p5',
            image: Quiz,
            title: 'QuizWin',
            description:
                'QuizWin is an interactive quiz platform for knowledge enthusiasts, as its name implies.We offer a range of quiz events that users can participate in and potentially win prizes.',
            link: '#QuizWin'
        },
        {
            id: 'p6',
            image: Prostuti,
            title: 'Prostuti',
            description:
                'TechKnowGram has created Prostuti,an exam management platform for institutes to administer exams. The platform was designed with the goal of automating the exam process,',
            link: '#Prostuti'
        },
        {
            id: 'p7',
            image: BMS,
            title: 'BMS',
            description:
                'Optimize Your Journey with Bangladesh`s Premier Road and Bridge Management by RHD Discover the excellence of Bangladesh`s Roads and Highways Department (RHD),',
            link: '#bms'
        },
        {
            id: 'p8',
            image: KHOZ,
            title: 'KHOZ',
            description:
                'Introducing KHOZ: Revolutionizing Indoor Navigation with IoT Technology KHOZ is a cutting-edge indoor navigation system that leverages IoT technology to deliver precise.',
            link: '#khoz'
        }
    ],
    testimonials: [
        {
            id: 1,
            image: kinyiaIshiiImage,
            person: 'Kinya Ishii',
            role: 'CEO',
            text: 'Ahmedul and TechKnowGram worked for us for quite some time. The whole team of Ahmedul became solution provider. They presented a remarkable positive attitude. All the work was done in a short span of time and the team achieved the impossible.'
        },
        {
            id: 2,
            image: malligaSubramaniumImage,
            person: 'Malliga Subramanium',
            role: 'Chairman',
            text: 'Ahmeduls team provided fast and flexible service with considerable expertise. Their unique approach to assessing feedback helped me solve my problem. Ahmed, their leader, is highly regarded for his unwavering commitment to justice.'
        },
        {
            id: 3,
            image: kentaKatoImage,
            person: 'Kenta Kato',
            role: 'CEO',
            text: 'Ahmedul delivered our work quickly and provided designs that attracted both our clients and partners, while also eliminating the need for a business analyst. They offer a complete solution for all client requirements, making them a valuable asset for any customer.'
        }
    ],
    about: aboutSectionData,
    productServices: [
        {
            id: 'ps1',
            image: sobjantaImage,
            title: 'Chatbot',
            description:
                'The Sobjanta AI Chatbot is a versatile and intelligent digital assistant, tailored to enhance customer engagement and optimize business operations. By utilizing',
            link: '#chatbot'
        },
        {
            id: 'ps2',
            image: customSolutionImage,
            title: 'Custom Solution',
            description:
                'Analysts & Developers of TechKnowGram Limited love creating application and tools to solve your specific business issues but, our first job, as creative',
            link: '#custom'
        },
        {
            id: 'ps3',
            image: skillMigrationImage,
            title: 'Skill Migration',
            description:
                'Skill Migration Education Investment to Japan, Malaysia for Bangladeshi personnel to Japan, Malaysia & Canada. We have 1000+ Japanese Known',
            link: '#skill'
        },
        {
            id: 'ps4',
            image: arVrRoboticsImage,
            title: 'AI AR VR Robotics',
            description:
                'TechKnowGram is a realising different kind of AI, IOT, AR, VR, Big Data, Application & Solutions to meet the demands of 4Th 4IR Industrial Revolutions 4IR for IQ',
            link: '#arvr'
        }
    ],
    companyLocations: [
        {
            id: 'loc1',
            flag: bdFlag, // পতাকার ইমেজ
            name: 'TechKnowGram Ltd.',
            address:
                'Suite 6B, House 8A/10, Doreen Tower, Road 13, Dhanmondi, Dhaka 1209, BANGLADESH',
            phone: '+880 2233 11511',
            email: 'info@techknowgram.com'
        },
        {
            id: 'loc2',
            flag: jpFlag,
            name: '合同会社', // জাপানিজ নাম
            address: 'Oyamadaji, Setagaya-ku, Tokyo 1-10-4, JAPAN',
            phone: '+81 (0)3 1234 5678',
            email: 'japan@techknowgram.com'
        },
        {
            id: 'loc3',
            flag: usaFlag,
            name: 'TechKnowGram LLC',
            address: '1209 Mountain Road PL NE, STE R, Albuquerque, NM 87110, USA',
            phone: '+1 (332) 252 8369',
            email: 'usa@techknowgram.com'
        }
    ]
};

siteData.footerData = {
    company: siteData.company,
    companyLocations: siteData.companyLocations
};

export default siteData;
