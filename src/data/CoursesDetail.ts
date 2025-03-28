import { LucideIcon, Network, Radar, Shield, ShieldAlert, ShieldCheck, SmartphoneIcon, Bug, ShieldOff, Search, Code, ClipboardCheck } from "lucide-react";

export interface Course {
    id: string;
    courseName: string;
    whoShouldTakeThisCourse: string[];
    prerequisites: string[];
    duration: string;
    modeOfLearning: string[];
    keyBenefits: string[];
    careerApplicability: { icon: LucideIcon; description: string }[];
    courseImgSrc: string;
    curriculum: string[];
}

const Courses: Course[] = [
    {
        id: "cybersecurity-fundamentals",
        courseName: "cybersecurity fundamentals",
        whoShouldTakeThisCourse: [
            "Beginners and students aspiring to enter the cybersecurity field",
            "IT professionals looking to enhance their security knowledge",
            "Small business owners and individuals interested in protecting personal data"
        ],
        prerequisites: ["Basic computer and internet literacy"],
        duration: "4 to 6 weeks",
        modeOfLearning: ["Online (self-paced/live instructor-led)", "Classroom training (select locations)"],
        keyBenefits: [
            "Solid foundation in cybersecurity principles",
            "Understanding of common threats and mitigation techniques",
            "Hands-on experience with real-world security tools"
        ],
        careerApplicability: [
            { icon: Shield, description: "Cybersecurity Analysts (Entry-Level)" },
            { icon: SmartphoneIcon, description: "IT Support & Network Administrators" },
            { icon: Radar, description: "SOC Analysts (Tier 1)" }
        ],
        courseImgSrc: "/cyber-fundamentals2.jpeg",
        curriculum: [
            "Introduction to Cybersecurity",
            "Common Cyber Threats and Attacks",
            "Security Policies and Best Practices",
            "Encryption and Data Protection",
            "Network Security Fundamentals",
            "Operating System Security Basics",
            "Incident Response and Risk Management",
            "Hands-on with Security Tools",
            "Case Studies of Cybersecurity Breaches",
            "Final Assessment and Certification Guidance"
        ]
    },
    {
        id: "ethical-hacking",
        courseName: "ethical hacking",
        whoShouldTakeThisCourse: [
            "Intermediate cybersecurity professionals",
            "Network administrators seeking security expertise",
            "IT professionals transitioning to security roles"
        ],
        prerequisites: [
            "Basic understanding of networking concepts",
            "Familiarity with operating systems",
            "Some programming knowledge preferred"
        ],
        duration: "8 to 12 weeks",
        modeOfLearning: ["Online (live instructor-led)", "Hybrid learning"],
        keyBenefits: [
            "Advanced security implementation skills",
            "Practical experience with enterprise security tools",
            "Industry-recognized certification preparation"
        ],
        careerApplicability: [
            { icon: ShieldAlert, description: "Security Engineer" },
            { icon: Network, description: "Network Security Specialist" },
            { icon: ShieldCheck, description: "Information Security Analyst" }
        ],
        courseImgSrc: "/ethical-hacking.jpeg",
        curriculum: [
            "Introduction to Ethical Hacking",
            "Footprinting and Reconnaissance",
            "Scanning Networks and Enumeration",
            "System Hacking Techniques",
            "Malware Analysis and Exploitation",
            "Sniffing and Social Engineering Attacks",
            "Denial of Service Attacks",
            "Session Hijacking and Web Server Hacking",
            "Wireless and Mobile Hacking",
            "Cryptography and Security Policies"
        ]
    },
    {
        id: "advanced-security-practices",
        courseName: "advanced security practices",
        whoShouldTakeThisCourse: [
            "Experienced IT professionals",
            "Security analysts seeking advancement",
            "Professionals interested in penetration testing"
        ],
        prerequisites: [
            "Strong networking fundamentals",
            "Basic scripting abilities",
            "Understanding of security concepts"
        ],
        duration: "12 to 16 weeks",
        modeOfLearning: ["Online (instructor-led)", "In-person training"],
        keyBenefits: [
            "Expert-level security assessment skills",
            "Real-world penetration testing experience",
            "Advanced threat hunting capabilities"
        ],
        careerApplicability: [
            { icon: Bug, description: "Penetration Tester" },
            { icon: ShieldOff, description: "Ethical Hacker" },
            { icon: Search, description: "Threat Hunter" }
        ],
        courseImgSrc: "/advance-security2.jpeg",
        curriculum: [
            "Advanced Network Security Strategies",
            "Threat Hunting and Intelligence",
            "Exploiting and Patch Management",
            "Cloud Security and Virtualization Risks",
            "Mobile and IoT Security Challenges",
            "Cryptography in Depth",
            "Security in DevOps (DevSecOps)",
            "Incident Response and Digital Forensics",
            "Security Compliance and Risk Management",
            "Final Project: Real-world Security Assessment"
        ]
    },
    {
        id: "certifications-training",
        courseName: "certifications training",
        whoShouldTakeThisCourse: [
            "Cybersecurity professionals seeking industry-recognized certifications",
            "IT managers and security officers looking to validate expertise",
            "Students aiming to boost their employability"
        ],
        prerequisites: ["Varies by certification (CEH, CISSP, CISM, etc.)"],
        duration: "4 to 12 weeks",
        modeOfLearning: ["Online (live sessions)", "Classroom training with exam simulations"],
        keyBenefits: [
            "Comprehensive exam preparation with mock tests",
            "Official study materials and expert mentorship",
            "Higher employability and salary prospects"
        ],
        careerApplicability: [
            { icon: ShieldAlert, description: "Cybersecurity Managers" },
            { icon: Network, description: "Security Architects" },
            { icon: ClipboardCheck, description: "Compliance Officers" }
        ],
        courseImgSrc: "/cyber-certification2.jpeg",
        curriculum: [
            "Introduction to Cybersecurity Certifications",
            "Deep Dive into CEH, CISSP, and CISM",
            "Risk Management and Compliance",
            "Security Auditing and Governance",
            "Network Security and Cryptography",
            "Incident Response and Forensics",
            "Mock Tests and Exam Strategies",
            "Case Studies and Real-world Scenarios",
            "Hands-on Practice with Security Tools",
            "Final Certification Readiness Assessment"
        ]
    },
    {
        id: "programming-for-security",
        courseName: "programming for security",
        whoShouldTakeThisCourse: [
            "Security engineers and automation specialists",
            "Developers interested in secure coding practices",
            "IT professionals looking to integrate security into software development"
        ],
        prerequisites: ["Basic programming knowledge (Python/Java preferred)"],
        duration: "6 weeks",
        modeOfLearning: ["Online (self-paced/live sessions)", "Classroom (weekend workshops)"],
        keyBenefits: [
            "Secure coding best practices",
            "Developing security tools with Python & Java",
            "Understanding of exploits and vulnerability research"
        ],
        careerApplicability: [
            { icon: Code, description: "Security Developers" },
            { icon: ShieldCheck, description: "DevSecOps Engineers" },
            { icon: Bug, description: "Application Security Analysts" }
        ],
        courseImgSrc: "/cyber-programming.jpeg",
        curriculum: [
            "Introduction to Secure Coding",
            "Common Security Vulnerabilities in Code",
            "Secure Web Development Practices",
            "Developing Security Tools with Python & Java",
            "Static and Dynamic Code Analysis",
            "Reverse Engineering and Malware Analysis",
            "Exploit Development and Mitigation",
            "Secure APIs and Authentication Mechanisms",
            "Application Security Testing Techniques",
            "Final Project: Secure Coding Challenge"
        ]
    }
];

export default Courses;
