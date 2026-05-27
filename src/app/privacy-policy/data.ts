// src/app/(legal)/data.ts
// Shared data for both Privacy Policy and Terms of Service pages

export const privacyData = {
  meta: {
    lastUpdated: "May 2026",
    version: "2.1",
    effective: "01 June 2026",
  },
  stats: [
    { number: "01", value: "GDPR", label: "Fully Compliant" },
    { number: "02", value: "24h", label: "Data Request Response" },
    { number: "03", value: "EU", label: "Based Infrastructure" },
    { number: "04", value: "0", label: "Data Sold — Ever" },
  ],
  ticker: [
    "GDPR Compliant",
    "EU Law",
    "Zero Data Sales",
    "Candidate First",
    "CPDP Registered",
    "Encrypted Storage",
    "24h Response",
    "Right to Erasure",
  ],
  sections: [
    {
      id: "who-we-are",
      number: "01",
      tag: "Identity",
      title: "Who We Are",
      lead: "We are a Data Controller and Processor under GDPR.",
      content:
        "Recruitment.bg is a specialist IT recruitment agency registered and operating in the Republic of Bulgaria. We act as both a Data Controller and, where applicable, a Data Processor under the General Data Protection Regulation (GDPR). Our registered office is located in Sofia, Bulgaria. We can be reached at office@recruitment.bg or by calling +359 876 449 229. All data-related enquiries are handled by our Data Protection lead and responded to within 24 hours.",
      highlight: {
        label: "Data Controller",
        text: "Registered in Bulgaria · Subject to GDPR and Bulgarian PDPA",
      },
    },
    {
      id: "data-collected",
      number: "02",
      tag: "Collection",
      title: "What Data We Collect",
      lead: "Only what we need to deliver our recruitment service.",
      content:
        "For candidates: full name, email address, phone number, CV and work history, LinkedIn profile URL, skills, salary expectations, location preferences, and interview feedback. For client companies: company name, contact person details, job descriptions, and hiring requirements. For website visitors: analytics data including pages visited, time on site, browser type, and approximate location — collected via Google Analytics 4 cookies with your consent.",
      highlight: {
        label: "Our principle",
        text: "We collect the minimum necessary — nothing more, nothing less.",
      },
    },
    {
      id: "how-we-use",
      number: "03",
      tag: "Purpose",
      title: "How We Use Your Data",
      lead: "To match people with the right opportunities — nothing else.",
      content:
        "Candidate data is used to match you to relevant roles, communicate about opportunities, and represent you to client companies — always with your prior knowledge. Client data is used to understand hiring needs and fulfil our recruitment service. Website visitor data helps us improve site performance via Google Analytics 4. We never sell your personal data to third parties. We never use it for unsolicited marketing without your explicit consent.",
      highlight: {
        label: "Our commitment",
        text: "We never sell your data. We never will.",
      },
    },
    {
      id: "legal-basis",
      number: "04",
      tag: "Legal Basis",
      title: "Legal Basis for Processing",
      lead: "Four lawful grounds — all GDPR compliant.",
      content:
        "We process personal data under the following legal grounds: (a) Legitimate interest — to match candidates to roles and deliver recruitment services. (b) Contractual necessity — to fulfil our placement agreements with client companies. (c) Consent — where you have explicitly agreed to join our talent network or be contacted about future opportunities. (d) Legal obligation — where we are required to retain records under Bulgarian tax or employment law. You may withdraw consent at any time.",
      highlight: {
        label: "Your control",
        text: "You can withdraw consent at any time by contacting office@recruitment.bg.",
      },
    },
    {
      id: "storage",
      number: "05",
      tag: "Storage",
      title: "Data Storage & Retention",
      lead: "EU-based servers. 24-month candidate retention.",
      content:
        "Your data is stored securely within our Smart.R ATS platform, hosted on GDPR-compliant EU-based infrastructure. Candidate profiles are retained for up to 24 months from the date of last activity, then automatically deleted unless you request otherwise. Client company data is retained for the duration of our commercial relationship plus 7 years for legal and accounting purposes. All data at rest is encrypted. Access is restricted to authorised Recruitment.bg team members only.",
      highlight: {
        label: "Retention period",
        text: "24 months for candidates · 7 years for client records (legal requirement).",
      },
    },
    {
      id: "your-rights",
      number: "06",
      tag: "Your Rights",
      title: "Your Rights Under GDPR",
      lead: "Six rights. All enforceable. All responded to within 24 hours.",
      content:
        "You have the right to: Access — request a copy of all data we hold on you. Rectification — request correction of inaccurate data. Erasure — request full deletion at any time. Portability — receive your data in a machine-readable format. Restrict Processing — ask us to pause processing your data. Object — object to processing based on legitimate interest. To exercise any right, email office@recruitment.bg. We respond within 24 hours and resolve within 30 days as required by GDPR.",
      highlight: {
        label: "Supervisory authority",
        text: "You can lodge a complaint with CPDP — Bulgaria's data protection authority.",
      },
    },
    {
      id: "third-parties",
      number: "07",
      tag: "Sharing",
      title: "Third Parties & Data Sharing",
      lead: "Your CV is never shared without your knowledge.",
      content:
        "We share candidate data with client companies only when a role is relevant and only with your prior awareness. We never share your profile without informing you first. Third-party services we use: Google Analytics 4 (website analytics), Smart.R ATS (candidate management), and Calendly (meeting scheduling). All third-party processors are GDPR compliant and operate under signed data processing agreements with Recruitment.bg.",
      highlight: {
        label: "Our rule",
        text: "No CV is ever shared without you knowing about it first.",
      },
    },
    {
      id: "cookies",
      number: "08",
      tag: "Cookies",
      title: "Cookies & Tracking",
      lead: "Analytics only. No advertising. No retargeting.",
      content:
        "We use: Essential cookies — required for the site to function (session management, security). Analytics cookies — Google Analytics 4 tracks pages visited and traffic sources to help us improve the site. We do not use advertising cookies, retargeting pixels, or third-party tracking beyond GA4. You can opt out of analytics cookies at any time via your browser settings or using Google's Analytics Opt-out add-on.",
      highlight: {
        label: "No ad tracking",
        text: "We don't use advertising cookies or retargeting of any kind.",
      },
    },
    {
      id: "contact",
      number: "09",
      tag: "Contact",
      title: "Contact & Data Requests",
      lead: "Real people. Real responses. Within 24 hours.",
      content:
        "For privacy questions, data access requests, or complaints — contact our Data Protection lead at office@recruitment.bg or call +359 876 449 229. We respond within 24 hours and resolve all data requests within 30 days as required by GDPR. If you are unsatisfied with our response, you have the right to lodge a complaint with the Commission for Personal Data Protection (CPDP) — the Bulgarian supervisory authority.",
      highlight: {
        label: "Response guarantee",
        text: "24-hour acknowledgement · 30-day resolution — as required by GDPR.",
      },
    },
  ],
}

export const termsData = {
  meta: {
    lastUpdated: "May 2026",
    version: "3.0",
    effective: "01 June 2026",
  },
  stats: [
    { number: "01", value: "No Hire", label: "No Invoice — Ever" },
    { number: "02", value: "60–90d", label: "Free Replacement Guarantee" },
    { number: "03", value: "0", label: "Exclusivity Required" },
    { number: "04", value: "BG Law", label: "Courts of Sofia" },
  ],
  ticker: [
    "No Hire No Fee",
    "Free Replacement",
    "No Exclusivity",
    "Bulgarian Law",
    "30-Day Payment",
    "Transparent Fees",
    "Candidate Always Free",
    "7 Services Covered",
  ],
  sections: [
    {
      id: "acceptance",
      number: "01",
      tag: "Agreement",
      title: "Acceptance of Terms",
      lead: "Engaging our services means accepting these terms.",
      content:
        "By engaging Recruitment.bg — whether through our website, a signed agreement, or verbal instruction to begin a search — you agree to be bound by these Terms of Service. These terms apply to all client companies, candidates, and Smart.R ATS users. Recruitment.bg reserves the right to update these terms at any time. Continued use of our services after any update constitutes acceptance of the revised terms. The current version is always published at recruitment.bg/terms-of-service.",
      highlight: {
        label: "Always current",
        text: "The version at recruitment.bg/terms-of-service is always the governing version.",
      },
    },
    {
      id: "services",
      number: "02",
      tag: "Scope",
      title: "Services Provided",
      lead: "Seven distinct services — all governed by these terms.",
      content:
        "Recruitment.bg provides: (a) Permanent IT Recruitment — sourcing and placing full-time tech professionals. (b) Contract, Freelance & B2B Placement — flexible engagements for contractors. (c) Executive Search & Headhunting — confidential search for senior and leadership roles. (d) Employer of Record — employing staff on behalf of international companies. (e) IT Salary Benchmarking — compensation data and hiring insights. (f) IT Payroll & Compliance Advisory — supporting IT companies with employment compliance. (g) Smart.R ATS — our applicant tracking platform.",
      highlight: {
        label: "7 services",
        text: "All services are subject to these terms unless a separate written agreement is in place.",
      },
    },
    {
      id: "client-obligations",
      number: "03",
      tag: "Client",
      title: "Client Obligations",
      lead: "We ask for honest briefs and timely feedback.",
      content:
        "Client companies agree to: provide accurate and complete role briefs including responsibilities, requirements, and compensation range; give timely feedback on submitted candidates within 5 business days; inform Recruitment.bg immediately if a role is filled or cancelled; not contact candidates introduced by Recruitment.bg through any other channel without our knowledge; and treat all candidate introductions as confidential. Failure to meet these obligations may result in Recruitment.bg pausing the search without liability.",
      highlight: {
        label: "Feedback window",
        text: "5 business days for feedback on submitted candidates — this keeps the process moving.",
      },
    },
    {
      id: "fees",
      number: "04",
      tag: "Fees",
      title: "Placement Fees & Payment",
      lead: "No hire, no fee. No surprises.",
      content:
        "Fees are due only upon a successful placement, defined as the candidate's confirmed start date. Fee amounts are agreed in writing before commencing any search. If a client hires any candidate introduced by Recruitment.bg — directly, through a third party, or within 12 months of the introduction — the full placement fee is due. Payment is required within 30 days of invoice. Late payments incur interest at 2% per month. Disputes must be raised in writing within 14 days of invoice.",
      highlight: {
        label: "12-month rule",
        text: "If you hire someone we introduced within 12 months — through any route — the fee applies.",
      },
    },
    {
      id: "guarantee",
      number: "05",
      tag: "Guarantee",
      title: "Guarantee Period",
      lead: "60–90 days. Free replacement. No questions asked.",
      content:
        "Every successful permanent placement comes with a free replacement guarantee. If the placed candidate leaves or is let go within the agreed guarantee period (typically 60–90 days as stated in your agreement), Recruitment.bg will conduct a replacement search at no additional cost. Conditions: the placement fee must be paid in full; the role and responsibilities must not have materially changed; and the departure must not be due to redundancy or company restructuring. Does not apply to contract or freelance placements.",
      highlight: {
        label: "When it applies",
        text: "Permanent placements only · Fee paid in full · Role unchanged · Not a redundancy.",
      },
    },
    {
      id: "candidates",
      number: "06",
      tag: "Candidates",
      title: "Candidate Terms",
      lead: "Always free. Always confidential.",
      content:
        "Candidates agree to: provide truthful information about their experience, qualifications, and availability; not misrepresent their background at any stage; inform Recruitment.bg immediately if they accept an offer from any source while active in our process; and consent to their profile being shared with specific client companies as discussed. Recruitment.bg's services are always free for candidates. We never charge candidates placement fees, CV registration fees, or any other fee of any kind.",
      highlight: {
        label: "Zero cost to candidates",
        text: "We never charge candidates — not now, not ever, not for any reason.",
      },
    },
    {
      id: "ip",
      number: "07",
      tag: "IP",
      title: "Intellectual Property",
      lead: "Your data in Smart.R stays yours.",
      content:
        "All content on the Recruitment.bg website — text, design, graphics, and code — is the intellectual property of Recruitment.bg and may not be reproduced without written permission. Smart.R ATS software and all source code are the exclusive IP of Recruitment.bg. Client data entered into Smart.R remains the property of the client at all times. Candidate data submitted through our forms is processed as described in our Privacy Policy. Recruitment.bg may use anonymised placement data for market research and salary benchmarking.",
      highlight: {
        label: "Client data ownership",
        text: "Everything you put into Smart.R belongs to you — not us.",
      },
    },
    {
      id: "smartr",
      number: "08",
      tag: "Smart.R",
      title: "Smart.R ATS Terms",
      lead: "Daily backups. 30-day export window on termination.",
      content:
        "Smart.R ATS is provided as a software service. Users agree to use the platform lawfully and not to attempt to reverse-engineer, copy, or exploit the software. Recruitment.bg provides reasonable uptime and support but does not guarantee 100% availability. Data stored in Smart.R is backed up daily on EU-based infrastructure. Recruitment.bg may suspend access for non-payment or terms violation. Upon subscription termination, client data is available for export for 30 days, after which it is securely deleted.",
      highlight: {
        label: "On termination",
        text: "30-day export window · then secure deletion — no data held hostage.",
      },
    },
    {
      id: "liability",
      number: "09",
      tag: "Liability",
      title: "Limitation of Liability",
      lead: "Capped at 12 months of fees paid.",
      content:
        "Recruitment.bg's total liability arising from any claim under these terms shall not exceed the total fees paid by the client in the 12 months preceding the claim. We are not liable for: indirect or consequential losses; loss of profit or revenue; decisions made based on candidate information provided in good faith; or losses arising from a candidate's misrepresentation of their background. Nothing in these terms limits liability for fraud, gross negligence, or death and personal injury.",
      highlight: {
        label: "Hard cap",
        text: "Liability is capped at 12 months of fees paid — no exceptions beyond this.",
      },
    },
    {
      id: "governing-law",
      number: "10",
      tag: "Law",
      title: "Governing Law & Disputes",
      lead: "Bulgarian law. Courts of Sofia. Good faith first.",
      content:
        "These Terms are governed by the laws of the Republic of Bulgaria. In the event of a dispute, both parties agree to first attempt resolution through good-faith negotiation within 30 days. If unresolved, disputes shall be submitted to the exclusive jurisdiction of the courts of Sofia, Bulgaria. If any provision of these terms is found to be unenforceable, the remaining provisions continue in full force and effect.",
      highlight: {
        label: "Dispute resolution",
        text: "30 days of good-faith negotiation before any legal proceedings.",
      },
    },
  ],
}