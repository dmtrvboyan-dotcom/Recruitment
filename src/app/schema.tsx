export function OrganizationSchema() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Recruitment.bg",
        "url": "https://recruitment.bg",
        "logo": "https://recruitment.bg/uploaded/recr-logo.webp",
        "description": "Bulgaria's premier IT recruitment agency. We place software engineers, DevOps, AI/ML, and tech leaders for companies in Sofia, Plovdiv and across Europe.",
        "foundingDate": "2009",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Sofia",
            "addressCountry": "BG"
        },
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+359-876-449-229",
            "contactType": "customer service",
            "email": "office@recruitment.bg",
            "areaServed": ["BG", "EU"],
            "availableLanguage": ["English", "Bulgarian"]
        },
        "sameAs": [
            "https://bg.linkedin.com/company/recruitment-bg",
            "https://www.facebook.com/recruitment.bg.official/",
            "https://www.instagram.com/recruitment.bg/"
        ]
    }

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    )
}

export function LocalBusinessSchema() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://recruitment.bg/#localbusiness",
        "name": "Recruitment.bg",
        "image": "https://recruitment.bg/uploaded/recr-logo.webp",
        "url": "https://recruitment.bg",
        "telephone": "+359-876-449-229",
        "email": "office@recruitment.bg",
        "description": "IT recruitment agency in Sofia, Bulgaria. Specialising in executive search, IT headhunting, and tech talent placement across Bulgaria and Europe.",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Sofia",
            "addressRegion": "Sofia-City Province",
            "addressCountry": "BG"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 42.6977,
            "longitude": 23.3219
        },
        "openingHoursSpecification": [
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                "opens": "09:00",
                "closes": "18:00"
            }
        ],
        "priceRange": "$$",
        "currenciesAccepted": "BGN, EUR",
        "areaServed": {
            "@type": "Country",
            "name": "Bulgaria"
        },
        "hasMap": "https://maps.google.com/?q=Sofia,Bulgaria"
    }

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    )
}

export function WebsiteSchema() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Recruitment.bg",
        "url": "https://recruitment.bg",
        "description": "Bulgaria's #1 IT recruitment agency. Placing software engineers, DevOps, AI/ML, and tech leaders.",
        "potentialAction": {
            "@type": "SearchAction",
            "target": {
                "@type": "EntryPoint",
                "urlTemplate": "https://recruitment.bg/job-listings?q={search_term_string}"
            },
            "query-input": "required name=search_term_string"
        }
    }

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    )
}


export function HomepageFAQSchema() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "How do you handle data protection & legal?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We operate with full compliance to all relevant data protection regulations, including GDPR. Every step of our process is transparent, documented, and designed to protect both clients and candidates."
                }
            },
            {
                "@type": "Question",
                "name": "How quickly do you present candidates?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We typically present the first relevant candidates within a few days. Our proactive sourcing and pre-qualified talent pool allow us to move fast without compromising on relevance or fit."
                }
            },
            {
                "@type": "Question",
                "name": "How do you ensure candidate quality?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We focus on quality over quantity. Instead of forwarding stacks of CVs, we speak directly with candidates, assess their experience, motivation, and fit, and only introduce people who genuinely align with the role and your expectations."
                }
            },
            {
                "@type": "Question",
                "name": "What if the role is hard to fill?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "For challenging roles, we take a consultative approach. We analyze the brief, provide honest feedback, and adjust the strategy where needed. This might include refining requirements, repositioning the role, or exploring alternative talent pools — always with realistic expectations."
                }
            },
            {
                "@type": "Question",
                "name": "Do you provide a guarantee period?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, every successful hire comes with a guarantee period. If things don't work out during that time, we provide a replacement candidate at no additional cost — ensuring continuity and reducing your hiring risk."
                }
            },
            {
                "@type": "Question",
                "name": "What's your experience in IT recruitment?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "With over 15 years in IT recruitment, we bring deep market knowledge and a strong understanding of technical roles and trends. We speak the language of both clients and candidates, enabling us to accurately assess needs and match the right people to the right opportunities."
                }
            },
            {
                "@type": "Question",
                "name": "Is exclusivity part of your terms?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "No exclusivity required. You're free to work with one or multiple providers — we're confident in our ability to deliver value without locking you in."
                }
            },
            {
                "@type": "Question",
                "name": "How fast is your administrative process?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Our process is built for speed and simplicity. We minimize unnecessary steps, reduce back-and-forth, and keep communication direct."
                }
            }
        ]
    }

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    )
}


export function JobListingsSchema() {
    const jobs = [
        {
            "@context": "https://schema.org",
            "@type": "JobPosting",
            "title": "Frontend Web Developer — React & Next.js",
            "description": "We are looking for a Frontend Web Developer with strong React and Next.js skills to join a growing product team in Sofia. 2-5 years of experience required.",
            "identifier": {
                "@type": "PropertyValue",
                "name": "Recruitment.bg",
                "value": "job-001"
            },
            "datePosted": "2026-05-01",
            "validThrough": "2026-07-01",
            "employmentType": "FULL_TIME",
            "hiringOrganization": {
                "@type": "Organization",
                "name": "Recruitment.bg",
                "sameAs": "https://recruitment.bg",
                "logo": "https://recruitment.bg/uploaded/recr-logo.webp"
            },
            "jobLocation": {
                "@type": "Place",
                "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Sofia",
                    "addressCountry": "BG"
                }
            },
            "skills": "React, Next.js, TypeScript",
            "experienceRequirements": "2-5 years",
            "jobBenefits": "Competitive salary, flexible working, GDPR compliant hiring process"
        },
        {
            "@context": "https://schema.org",
            "@type": "JobPosting",
            "title": "Principal Developer — Full Stack",
            "description": "Senior Full Stack Developer with Java, Spring, and React experience. 5+ years required. B2B contract available.",
            "identifier": {
                "@type": "PropertyValue",
                "name": "Recruitment.bg",
                "value": "job-002"
            },
            "datePosted": "2026-05-01",
            "validThrough": "2026-07-01",
            "employmentType": "CONTRACTOR",
            "hiringOrganization": {
                "@type": "Organization",
                "name": "Recruitment.bg",
                "sameAs": "https://recruitment.bg",
                "logo": "https://recruitment.bg/uploaded/recr-logo.webp"
            },
            "jobLocation": {
                "@type": "Place",
                "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Sofia",
                    "addressCountry": "BG"
                }
            },
            "skills": "Java, Spring, React",
            "experienceRequirements": "5+ years"
        },
        {
            "@context": "https://schema.org",
            "@type": "JobPosting",
            "title": "Senior Frontend Engineer",
            "description": "Senior Frontend Engineer with Vue.js and Nuxt experience. Freelance contract. Based in Plovdiv or remote.",
            "identifier": {
                "@type": "PropertyValue",
                "name": "Recruitment.bg",
                "value": "job-003"
            },
            "datePosted": "2026-05-01",
            "validThrough": "2026-07-01",
            "employmentType": "CONTRACTOR",
            "hiringOrganization": {
                "@type": "Organization",
                "name": "Recruitment.bg",
                "sameAs": "https://recruitment.bg",
                "logo": "https://recruitment.bg/uploaded/recr-logo.webp"
            },
            "jobLocation": {
                "@type": "Place",
                "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Plovdiv",
                    "addressCountry": "BG"
                }
            },
            "skills": "Vue, Nuxt, TypeScript",
            "experienceRequirements": "2-5 years"
        },
        {
            "@context": "https://schema.org",
            "@type": "JobPosting",
            "title": "React Developer",
            "description": "React Developer with Three.js experience. Junior to mid level. Full-time role based in Sofia.",
            "identifier": {
                "@type": "PropertyValue",
                "name": "Recruitment.bg",
                "value": "job-004"
            },
            "datePosted": "2026-05-01",
            "validThrough": "2026-07-01",
            "employmentType": "FULL_TIME",
            "hiringOrganization": {
                "@type": "Organization",
                "name": "Recruitment.bg",
                "sameAs": "https://recruitment.bg",
                "logo": "https://recruitment.bg/uploaded/recr-logo.webp"
            },
            "jobLocation": {
                "@type": "Place",
                "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Sofia",
                    "addressCountry": "BG"
                }
            },
            "skills": "React, Three.js, TypeScript",
            "experienceRequirements": "1-2 years"
        },
        {
            "@context": "https://schema.org",
            "@type": "JobPosting",
            "title": "Backend Java Developer",
            "description": "Backend Java Developer with Spring Boot and PostgreSQL. 2-5 years experience. B2B contract in Sofia.",
            "identifier": {
                "@type": "PropertyValue",
                "name": "Recruitment.bg",
                "value": "job-005"
            },
            "datePosted": "2026-05-01",
            "validThrough": "2026-07-01",
            "employmentType": "CONTRACTOR",
            "hiringOrganization": {
                "@type": "Organization",
                "name": "Recruitment.bg",
                "sameAs": "https://recruitment.bg",
                "logo": "https://recruitment.bg/uploaded/recr-logo.webp"
            },
            "jobLocation": {
                "@type": "Place",
                "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Sofia",
                    "addressCountry": "BG"
                }
            },
            "skills": "Java, Spring Boot, PostgreSQL",
            "experienceRequirements": "2-5 years"
        },
        {
            "@context": "https://schema.org",
            "@type": "JobPosting",
            "title": "Full Stack .NET Developer",
            "description": "Full Stack Developer with C#, .NET and React skills. Freelance contract in Plovdiv. 5+ years required.",
            "identifier": {
                "@type": "PropertyValue",
                "name": "Recruitment.bg",
                "value": "job-006"
            },
            "datePosted": "2026-05-01",
            "validThrough": "2026-07-01",
            "employmentType": "CONTRACTOR",
            "hiringOrganization": {
                "@type": "Organization",
                "name": "Recruitment.bg",
                "sameAs": "https://recruitment.bg",
                "logo": "https://recruitment.bg/uploaded/recr-logo.webp"
            },
            "jobLocation": {
                "@type": "Place",
                "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Plovdiv",
                    "addressCountry": "BG"
                }
            },
            "skills": "C#, .NET, React",
            "experienceRequirements": "5+ years"
        }
    ]

    return (
        <>
            {jobs.map((job, i) => (
                <script
                    key={i}
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(job) }}
                />
            ))}
        </>
    )
}

export function AboutPageSchema() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "AboutPage",
        "name": "About Recruitment.bg",
        "url": "https://recruitment.bg/about",
        "description": "Meet the team behind Recruitment.bg — 15 specialist IT recruiters with 15+ years of experience placing tech talent across Bulgaria and Europe.",
        "mainEntity": {
            "@type": "Organization",
            "name": "Recruitment.bg",
            "url": "https://recruitment.bg",
            "employee": [
                {
                    "@type": "Person",
                    "name": "Veselin Raykov",
                    "jobTitle": "IT Recruiter",
                    "sameAs": "https://bg.linkedin.com/in/veselinraykovhr",
                    "worksFor": { "@type": "Organization", "name": "Recruitment.bg" }
                },
                {
                    "@type": "Person",
                    "name": "Diana Tosheva",
                    "jobTitle": "IT Recruiter",
                    "sameAs": "https://bg.linkedin.com/in/diana-tosheva-037144208",
                    "worksFor": { "@type": "Organization", "name": "Recruitment.bg" }
                },
                {
                    "@type": "Person",
                    "name": "Svetlana Manolova",
                    "jobTitle": "IT Recruiter",
                    "sameAs": "https://bg.linkedin.com/in/svetlana-manolova-62051b197",
                    "worksFor": { "@type": "Organization", "name": "Recruitment.bg" }
                },
                {
                    "@type": "Person",
                    "name": "Mirela Nikolova",
                    "jobTitle": "IT Recruiter",
                    "sameAs": "https://bg.linkedin.com/in/mirela-nikolova",
                    "worksFor": { "@type": "Organization", "name": "Recruitment.bg" }
                },
                {
                    "@type": "Person",
                    "name": "Silvia Markova",
                    "jobTitle": "IT Recruiter",
                    "sameAs": "https://bg.linkedin.com/in/silvia-markova-b98470233",
                    "worksFor": { "@type": "Organization", "name": "Recruitment.bg" }
                },
                {
                    "@type": "Person",
                    "name": "Irina Tojeva",
                    "jobTitle": "IT Recruiter",
                    "sameAs": "https://linkedin.com/in/irina-tojeva",
                    "worksFor": { "@type": "Organization", "name": "Recruitment.bg" }
                },
                {
                    "@type": "Person",
                    "name": "Victor Stefanov",
                    "jobTitle": "IT Recruiter",
                    "sameAs": "https://linkedin.com/in/victor-stefanov",
                    "worksFor": { "@type": "Organization", "name": "Recruitment.bg" }
                },
                {
                    "@type": "Person",
                    "name": "Gabriela Vejinova",
                    "jobTitle": "IT Recruiter",
                    "sameAs": "https://www.linkedin.com/in/gabriela-vezhinova-80886a371/",
                    "worksFor": { "@type": "Organization", "name": "Recruitment.bg" }
                },
                {
                    "@type": "Person",
                    "name": "Valentina Nikolova",
                    "jobTitle": "IT Recruiter",
                    "sameAs": "https://bg.linkedin.com/in/valentina-nikolova-958563215",
                    "worksFor": { "@type": "Organization", "name": "Recruitment.bg" }
                },
                {
                    "@type": "Person",
                    "name": "Gabriela Ignatova",
                    "jobTitle": "IT Recruiter",
                    "sameAs": "https://linkedin.com/in/gabriela-ignatova",
                    "worksFor": { "@type": "Organization", "name": "Recruitment.bg" }
                },
                {
                    "@type": "Person",
                    "name": "Andrea Miteva",
                    "jobTitle": "IT Recruiter",
                    "sameAs": "https://bg.linkedin.com/in/andrea-miteva-70b7ab366",
                    "worksFor": { "@type": "Organization", "name": "Recruitment.bg" }
                },
                {
                    "@type": "Person",
                    "name": "Kalin Motovilkov",
                    "jobTitle": "IT Recruiter",
                    "sameAs": "https://bg.linkedin.com/in/kalin-motovilkov",
                    "worksFor": { "@type": "Organization", "name": "Recruitment.bg" }
                },
                {
                    "@type": "Person",
                    "name": "Tania Danilenko",
                    "jobTitle": "IT Recruiter",
                    "sameAs": "https://bg.linkedin.com/in/tanya-danilenko-8221391a9",
                    "worksFor": { "@type": "Organization", "name": "Recruitment.bg" }
                },
                {
                    "@type": "Person",
                    "name": "Yulia Rapinchuk",
                    "jobTitle": "IT Recruiter",
                    "sameAs": "https://linkedin.com/in/yulia-rapinchuk",
                    "worksFor": { "@type": "Organization", "name": "Recruitment.bg" }
                },
                {
                    "@type": "Person",
                    "name": "Boyan Dimitrov",
                    "jobTitle": "IT Recruiter",
                    "worksFor": { "@type": "Organization", "name": "Recruitment.bg" }
                }
            ]
        }
    }

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    )
}

export function ATSSchema() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "Smart.R",
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "Web",
        "url": "https://recruitment.bg/applicant-tracking-system",
        "description": "AI-powered applicant tracking system built for modern recruitment teams. Automate workflows, track candidates, and hire faster. GDPR compliant. Available in BG, EN, DE, ES, RU.",
        "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "EUR",
            "description": "Free trial available"
        },
        "creator": {
            "@type": "Organization",
            "name": "Recruitment.bg",
            "url": "https://recruitment.bg"
        },
        "featureList": [
            "Candidate tracking",
            "Customizable workflows",
            "Team collaboration",
            "Analytics and reporting",
            "GDPR compliance",
            "AI insights",
            "Available in Bulgarian, English, German, Spanish, Russian"
        ]
    }

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    )
}


// ============================================================
// 8. src/app/contacts/page.tsx
// ContactPage schema — reinforces local presence
// and contact information for Google.
// ============================================================

export function ContactPageSchema() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "name": "Contact Recruitment.bg",
        "url": "https://recruitment.bg/contacts",
        "description": "Get in touch with Recruitment.bg — Bulgaria's leading IT recruitment agency. Book a free 30-minute intro call. Response within 24 hours.",
        "mainEntity": {
            "@type": "Organization",
            "name": "Recruitment.bg",
            "telephone": "+359-876-449-229",
            "email": "office@recruitment.bg",
            "address": {
                "@type": "PostalAddress",
                "addressLocality": "Sofia",
                "addressCountry": "BG"
            },
            "contactPoint": [
                {
                    "@type": "ContactPoint",
                    "telephone": "+359-876-449-229",
                    "contactType": "sales",
                    "availableLanguage": ["English", "Bulgarian"]
                },
                {
                    "@type": "ContactPoint",
                    "email": "office@recruitment.bg",
                    "contactType": "customer support"
                }
            ]
        }
    }

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    )
}

export function ProcessSchema() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": "How Recruitment.bg Hires IT Talent",
        "description": "Our 6-phase IT recruitment process covers briefing, targeted search, curated shortlist, interviews and offer — first candidates in 2–10 days.",
        "totalTime": "P10D",
        "step": [
            {
                "@type": "HowToStep",
                "position": 1,
                "name": "Discovery & Briefing",
                "text": "We deep dive into your hiring needs, company culture, and team dynamics to understand exactly who you need."
            },
            {
                "@type": "HowToStep",
                "position": 2,
                "name": "Targeted Search",
                "text": "We search our 31,000+ curated talent pool and conduct direct outreach to passive candidates matching your brief."
            },
            {
                "@type": "HowToStep",
                "position": 3,
                "name": "Candidate Assessment",
                "text": "We speak directly with candidates, assess their experience, motivation, and fit before presenting them to you."
            },
            {
                "@type": "HowToStep",
                "position": 4,
                "name": "Curated Shortlist",
                "text": "We present a quality shortlist — not a stack of CVs. Every candidate is pre-qualified and genuinely relevant."
            },
            {
                "@type": "HowToStep",
                "position": 5,
                "name": "Interview Coordination",
                "text": "We coordinate interviews, provide feedback, and keep both sides aligned throughout the process."
            },
            {
                "@type": "HowToStep",
                "position": 6,
                "name": "Offer & Onboarding",
                "text": "We support the offer stage and guarantee period, providing a replacement if needed at no additional cost."
            }
        ]
    }

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    )
}
