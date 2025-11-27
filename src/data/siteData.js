import arVrRoboticsImage from '../assets/ar_vr_robotics.png';
import Ariful from '../assets/Ariful.png';
import Article from '../assets/Article19.png';
import Ayumu from '../assets/Ayumu.png';
import Babu from '../assets/BABU.png';
import bdFlag from '../assets/Bangladesh.png';
import BArmy from '../assets/BArmy.png';
import bdNavyLogo from '../assets/bd_navy.png';
import BengleGroup from '../assets/Benglal_Group.png';
import Bkash from '../assets/Bkash.png';
import BMS from '../assets/BMS.png';
import bsbkLogo from '../assets/bsbk.png';
import CCA from '../assets/CCA.png';
import Circle from '../assets/Circle.png';
import CooperTech from '../assets/CooperTech.png';
import customSolutionImage from '../assets/custom_solution.png';
import Formula1 from '../assets/Formula1.png';
import Freelancing from '../assets/Freelacing.png';
import FuWang from '../assets/FU_Wang.png';
import GrameenPhone from '../assets/GrameenPhone.png';
import gtclLogo from '../assets/gtcl.png';
import highwaysDeptLogo from '../assets/highways_dept.png';
import HiTech from '../assets/HITECH.png';
import Huntsman from '../assets/Huntsman.png';
import ICT from '../assets/ICT.png';
import ictDivisionLogo from '../assets/ict_division.png';
import jpFlag from '../assets/Japan.png';
import JRF from '../assets/JRF.png';
import kentaKatoImage from '../assets/Kenta Kato.png';
import KHOZ from '../assets/Khoj.png';
import kinyiaIshiiImage from '../assets/Kinya Ishii.png';
import Logo from '../assets/logo.png';
import MadeInBangla from '../assets/MadeInBangla.png';
import malligaSubramaniumImage from '../assets/Malliga Subramanium.png';
import Maritime from '../assets/Maritime.png';
import Nippon from '../assets/Nippon.png';
import Nirod from '../assets/Nirod.png';
import OxyData from '../assets/Oxydata.png';
import PremierLeasing from '../assets/Primier_Leasing.png';
import Prostuti from '../assets/Prostuti.png';
import Quiz from '../assets/Quiz.png';
import RayDaud from '../assets/Ray_Daud.png';
import Robi from '../assets/Robi.png';
import Sahera from '../assets/Sahera.png';
import Siemens from '../assets/Simens.png';
import skillMigrationImage from '../assets/skill_migration.png';
import sobjantaImage from '../assets/sobjanta.png';
import TKG from '../assets/TKGERP.png';
import UN from '../assets/UN.png';
import UNDP from '../assets/UNDP.png';
import usaFlag from '../assets/USA.png';
import Zinat from '../assets/Zinat.png';
import Zubayer from '../assets/Zubayer.png';

const partnersPageData = {
    hero: {
        title: 'Our Partners & Clients',
        subtitle:
            'Trusted by leading government institutions, international organizations, and commercial enterprises worldwide'
    }
};

const govtInstitutionalPartners = [
    {
        id: 'ict',
        title: 'ICT Division',
        image: ictDivisionLogo
    },
    {
        id: 'cca',
        title: 'CCA',
        image: CCA
    },
    {
        id: 'bd-army',
        title: 'Bangladesh Army',
        image: BArmy
    },
    {
        id: 'maritime-academy',
        title: 'Maritime Academy',
        image: Maritime
    },
    {
        id: 'highways-dept',
        title: 'Bangladesh Highways Department',
        image: highwaysDeptLogo
    },
    {
        id: 'bd-navy',
        title: 'Bangladesh Navy',
        image: bdNavyLogo
    },
    {
        id: 'gtcl',
        title: 'Gas Transmission Company Limited',
        image: gtclLogo
    },
    {
        id: 'bsbk',
        title: 'BSBK',
        image: bsbkLogo
    }
];

const internationalPartners = [
    {
        id: 'siemens',
        title: 'SIEMENS',
        image: Siemens
    },
    {
        id: 'un',
        title: 'United Nations',
        image: UN
    },
    {
        id: 'undp',
        title: 'UNDP',
        image: UNDP
    },
    {
        id: 'hitech',
        title: 'Bangladesh Hi-Tech Park Authority',
        image: HiTech
    },
    {
        id: 'oxydata',
        title: 'OxyData',
        image: OxyData
    },
    {
        id: 'article19',
        title: 'ARTICLE19',
        image: Article
    },
    {
        id: 'jrf',
        title: 'JRF',
        image: JRF
    },
    {
        id: 'formula1',
        title: 'Formula 1',
        image: Formula1
    },
    {
        id: 'coppertech',
        title: 'Coppertech',
        image: CooperTech
    },
    {
        id: 'circle',
        title: 'Circle',
        image: Circle
    }
];

const commercialPartners = [
    {
        id: 'grameenphone',
        title: 'Grameenphone',
        image: GrameenPhone
    },
    {
        id: 'robi',
        title: 'Robi',
        image: Robi
    },
    {
        id: 'bkash',
        title: 'bKash',
        image: Bkash
    },
    {
        id: 'bengal-group',
        title: 'Bengal Group of Industries',
        image: BengleGroup
    },
    {
        id: 'huntsman',
        title: 'HUNTSMAN',
        image: Huntsman
    },
    {
        id: 'premier-leasing',
        title: 'Premier Leasing & Finance',
        image: PremierLeasing
    },
    {
        id: 'nippon-express',
        title: 'Nippon Express',
        image: Nippon
    },
    {
        id: 'fu-wang',
        title: 'Fu-Wang',
        image: FuWang
    }
];
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
const aboutTKGData = {
    mainTitle: 'About TechKnow Gram',
    tagline:
        'Leading technology company with 25+ years of expertise in AI, IoT, and enterprise solutions',

    // Who We Are সেকশন
    whoWeAre: {
        title: 'Who We Are',
        paragraphs: [
            'TechKnowGram is a leading technology company based in Bangladesh, specializing in providing customized web and embedded solutions across various domains, including ERP, AI, IoT, ML Data Analytics, Robotics, AR, VR Applications, Gaming, and Animation.',
            'Renowned globally for our expertise in the USA, EU, and Japanese ICT markets, where we have been active for over 25 years with combined professional experience.',
            'TechKnowGram Limited is proud to hold ISO 9001, ISO 14001, and ISO/IEC 27001 certifications and is committed to delivering innovative solutions to clients.'
        ],
        bulletPoints: [
            'ISO 9001, ISO 14001, ISO/IEC 27001 Certified',
            '25+ Years of Combined Experience',
            'Global Presence Across 3 Continents.'
        ]
    },

    stats: [
        { number: '25+', label: 'Years of Experience' },
        { number: '100+', label: 'Global Clients' },
        { number: '120+', label: 'Projects Completed' },
        { number: '55+', label: 'Team Members' }
    ]
};

const leadingBoardData = {
    title: 'TechKnowGram Leading Board',
    members: [
        {
            name: 'AKM Ahmedul Islam BABU',
            designation: 'Founder & CEO',
            bio: 'AKM Ahmedul Islam BABU is the Founder, Managing Director, and CEO of TechKnowGram Ltd and Sobjanta Al, boasting over 28 years of experience in BPO, outsourcing, and the software industry across the USA and Japanese markets. As an ICT pioneer, he has held prominent roles at multinational companies such as NIIT, Metrocomia South Asia, BJIT, SEBPO, Divine IT, and AtomAP. Since 1997, he has been actively involved with the Bangladesh Association of Software and Information Services (BASIS), where he served as Director and currently leads the BASIS Japan Desk.',
            isFeatured: true,
            image: Babu
        },
        { name: 'Sahera Islam', designation: 'Chairman', isFeatured: false, image: Sahera },
        {
            name: 'AKM Ahmedul Islam',
            designation: 'Managing Director & CEO',
            isFeatured: false,
            image: Babu
        },
        { name: 'Zinat Humaira Khanam', designation: 'Director', isFeatured: false, image: Zinat },
        { name: 'Ayumu Takahashi', designation: 'Director', isFeatured: false, image: Ayumu },
        { name: 'Md. Ariful Alam', designation: 'Director', isFeatured: false, image: Ariful },
        { name: 'Nirod Barua', designation: 'Director', isFeatured: false, image: Nirod }
    ],
    advisors: [
        { name: 'Dr. Mahmud Zubayer', designation: 'Advisor', image: Zubayer },
        { name: 'Ray Daud', designation: 'Advisor', image: RayDaud },
        { name: 'Jean-Marc Pelletier', designation: 'Advisor' }
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
    aboutSection: aboutSectionData,

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
            flag: bdFlag,
            name: 'TechKnowGram Ltd.',
            address:
                'Suite 6B, House 8A/10, Doreen Tower, Road 13, Dhanmondi, Dhaka 1209, BANGLADESH',
            phone: '+880 2233 11511',
            email: 'info@techknowgram.com'
        },
        {
            id: 'loc2',
            flag: jpFlag,
            name: '合同会社',
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
    ],
    about: aboutTKGData,
    leadingboardData: leadingBoardData,
    partnerPageData: partnersPageData,
    govtInstitutionalPartner: govtInstitutionalPartners,
    internationalPartner: internationalPartners,
    commercialPartner: commercialPartners
};

siteData.footerData = {
    company: siteData.company,
    companyLocations: siteData.companyLocations
};

siteData.contactInfoData = {
    header: {
        title: 'Get in Touch',
        subtitle:
            "Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible."
    },
    phone: {
        title: 'Phone',
        numbers: [
            { country: 'Bangladesh', number: siteData.companyLocations[0].phone },
            { country: 'Japan', number: siteData.companyLocations[1].phone },
            { country: 'USA', number: siteData.companyLocations[2].phone }
        ]
    },

    email: {
        title: 'Email',
        addresses: [
            siteData.companyLocations[0].email,
            siteData.companyLocations[1].email,
            siteData.companyLocations[2].email
        ]
    },
    hours: {
        title: 'Business Hours',
        schedule: [
            'Monday-Friday: 9:00 AM - 6:00 PM',
            'Saturday: 10:00 AM - 4:00 PM',
            'Sunday: Closed'
        ]
    }
};

siteData.officeData = {
    offices: siteData.companyLocations
};

siteData.footerData = {
    company: siteData.company,
    companyLocations: siteData.companyLocations
};

export default siteData;
