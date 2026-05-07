/**
 * Specialized recruitment section data
 */

export interface TechCategory {
  id: string
  icon: string // lucide icon name or emoji fallback
  categoryLabel: string
  title: string
  subtitle: string
  techs: string[]
  howWeSource: string[]
  whatYouGet: string[]
  stat1Value: string
  stat1Label: string
  stat2Value: string
  stat2Label: string
}

export const TECHNOLOGY_PILLS: string[] = [
  "Java",
  "JavaScript",
  "Python",
  ".NET",
  "C++",
  "Data",
  "PHP",
  "iOS",
  "Android",
  "Project",
  "Product",
  "Delivery Managers", 
  "and more"
]

export const TECH_CATEGORIES: TechCategory[] = [
  {
    id: "software-engineers",
    icon: "code-2",
    categoryLabel: "ENGINEERING",
    title: "Software Engineers & Developers",
    subtitle: "Hire React, Node.js, Java, .NET and full-stack developers",
    techs: ["React", "Node.js", "Java", ".NET", "Vue", "Angular", "TypeScript"],
    howWeSource: [
      "Pre-screened across frontend, backend & full-stack",
      "Matched to your tech stack and team culture",
      "Available for contract or permanent roles",
    ],
    whatYouGet: [
      "Pre-vetted software engineers",
      "Candidates ready to interview",
      "Fast delivery — CVs in 3–5 days",
      "Adaptable hiring models",
    ],
    stat1Value: "300+",
    stat1Label: "Engineers Placed",
    stat2Value: "3–5 days",
    stat2Label: "Avg. Time to First CV",
  },
  {
    id: "devops",
    icon: "cloud",
    categoryLabel: "INFRASTRUCTURE",
    title: "DevOps, Cloud & Platform Engineers",
    subtitle: "Hire AWS, Azure, Kubernetes and Platform Engineers",
    techs: ["AWS", "Azure", "Kubernetes", "Terraform", "CI/CD"],
    howWeSource: [
      "Access to our network of cloud & DevOps specialists",
      "Rigorous screening based on your technical requirements",
      "Interview coordination and candidate management",
      "Support with offer, negotiation and onboarding",
    ],
    whatYouGet: [
      "Shortlisted, pre-qualified engineers",
      "AWS, Azure & Kubernetes experts",
      "Fast turnaround - candidates in 4-8 business days",
      "Flexible contract & permanent hiring solutions",
    ],
    stat1Value: "100+",
    stat1Label: "Engineers Placed",
    stat2Value: "4–8 days",
    stat2Label: "Avg. Time to First CV",
  },
  {
    id: "qa-security",
    icon: "shield-check",
    categoryLabel: "QUALITY & SECURITY",
    title: "QA, Automation & Security",
    subtitle: "Hire Selenium, Cypress, and Security Professionals",
    techs: ["Selenium", "Cypress", "QA Automation", "DevSecOps", "Manual Testing"],
    howWeSource: [
      "Sourced from QA, automation & AppSec communities",
      "Screened on relevant tools (Selenium, Cypress, OWASP",
      "Experience reviewed across real-world testing environments",
      "Matched to your product stage and release processes",
    ],
    whatYouGet: [
      "QA engineers across manual, automation & security layers",
      "Engineers familiar with CI/CD, shift-left practices & DevSecOps",
      "CVs delivered in 4-8 business days",
      "Suitable for contract, project or long-term roles",
    ],
    stat1Value: "100+",
    stat1Label: "Engineers Placed",
    stat2Value: "4–8 days",
    stat2Label: "Avg. Time to First CV",
  },
  {
    id: "data",
    icon: "database",
    categoryLabel: "DATA",
    title: "Data Engineering & BI",
    subtitle: "Hire SQL, Power BI, Tableau and Data Engineers",
    techs: ["SQL", "Power BI", "Tableau", "Snowflake", "Spark", "BigQuery", "Airflow", "Data Warehousing"],
    howWeSource: [
      "Access to data engineering & analytics talent networks",
      "Screened on pipeline design, SQL & data modelling",
      "Experience reviewed across modern data stacks (Snowflake, BigQuery, Spark)",
      "Aligned with your data maturity & team structure",
    ],
    whatYouGet: [
      "Data engineers building scalable pipelines & infrastructure",
      "BI specialists across Power BI, Tableau & SQL",
      "CVs delivered in 5-9 business days",
      "Candidates placed across startups, scaleups & enterprise teams",
    ],
    stat1Value: "50+",
    stat1Label: "Engineers Placed",
    stat2Value: "5-9 days",
    stat2Label: "Avg. Time to First CV",
  },
  {
    id: "ai-ml",
    icon: "brain-circuit",
    categoryLabel: "AI / ML",
    title: "AI / ML Engineers",
    subtitle: "Hire Python, TensorFlow, PyTorch and ML Engineers",
    techs: ["Python", "TensorFlow", "PyTorch", "Deep Learning", "LLMs"],
     howWeSource: [
      "Sourced from ML communities, research networks & niche platforms",
      "Screened on applied ML experience, not just theory",
      "Experience reviewed across production ML systems & MLOps",
      "Matched to your Al product stage and use case",
    ],
    whatYouGet: [
      "Engineers with hands-on ML product experience",
      "Coverage across NLP, computer vision, LLMs & classical ML",
      "CVs delivered in 5-10 business days",
      "Suitable for R&D teams and production-focused environments",
    ],
    stat1Value: "50+",
    stat1Label: "Engineers Placed",
    stat2Value: "5-10 days",
    stat2Label: "Avg. Time to First CV",
  },
  {
    id: "design",
    icon: "pen-tool",
    categoryLabel: "DESIGN",
    title: "UI/UX & Product Design",
    subtitle: "Hire Figma, Sketch, Adobe XD and product designers",
    techs: ["Figma", "Sketch", "Adobe XD", "InVision", "Prototyping"],
    howWeSource: [
      "Discovered via Dribbble, Behance & design meetups",
      "Portfolio reviewed for UX thinking & visual craft",
      "Assessed on end-to-end product design process",
      "Matched to your brand, product stage & team style",
    ],
    whatYouGet: [
      "Designers who balance aesthetics with usability",
      "Figma-first talent across web, app & systems design",
      "CVs delivered in 3–7 business days",
      "From early-stage discovery to design system scale",
    ],
    stat1Value: "30+",
    stat1Label: "Designers Placed",
    stat2Value: "3–7 days",
    stat2Label: "Avg. Time to First CV",
  },
  {
    id: "mobile",
    icon: "smartphone",
    categoryLabel: "MOBILE",
    title: "Mobile Development",
    subtitle: "Hire iOS, Android, Swift and React Native Developers",
    techs: ["iOS", "Android", "React Native", "Kotlin", "Swift", "Flutter"],
    howWeSource: [
      "Sourced from iOS, Android & cross-platform communities",
      "Screened on real app delivery and production experience",
      "Experience reviewed across performance, integrations & APis",
      "Matched to your product roadmap and platform priorities",
    ],
    whatYouGet: [
      "Native & cross-platform mobile developers",
      "Coverage across Swift, Kotlin, Flutter & React Native",
      "CVs delivered in 4-8 business days",
      "Experience across both consumer apps & enterprise products",
    ],
    stat1Value: "30+",
    stat1Label: "Developers Placed",
    stat2Value: "4-8 days",
    stat2Label: "Avg. Time to First CV",
  },
  {
    id: "leadership",
    icon: "crown",
    categoryLabel: "LEADERSHIP Management",
    title: "Engineering Leadership",
    subtitle: "Hire CTOs, VP Engineering, Tech Leads and Delivery Managers",
    techs: ["CTO", "VP Engineering", "Tech Lead", "Engineering Manager", ""],
    howWeSource: [
      "Identified through senior networks, referrals & leadership pipelines",
      "Screened on team leadership, hiring & delivery experience",
      "Experience reviewed across scaling teams and org design",
      "Matched to your company stage and growth goals",
    ],
    whatYouGet: [
      "Engineering leaders who can build, lead and scale teams",
      "Coverage across CTOs, VPs, Tech Leads & Delivery Managers",
      "CVs delivered in 6-10 business days",
      "Options for permanent hires or fractional leadership",
    ],
    stat1Value: "25+",
    stat1Label: "Leaders Placed",
    stat2Value: "6-10 days",
    stat2Label: "Avg. Time to First CV",
  },
]
