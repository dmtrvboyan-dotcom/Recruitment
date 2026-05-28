
export type Locale = "en" | "bg"

export type LegalBlock =
  | { type: "paragraph"; text: string }
  | { type: "subheading"; text: string }
  | { type: "list"; items: string[] }
  | { type: "note"; text: string }

export type LegalSection = {
  id: string
  title: string
  blocks: LegalBlock[]
}

export type LegalDocument = {
  eyebrow: string
  title: string
  lastUpdatedLabel: string
  lastUpdated: string
  intro: string
  tocLabel: string
  cta: { text: string; buttonLabel: string; href: string }
  sections: LegalSection[]
}

export type LegalContent = Record<Locale, LegalDocument>

export const CONTENT: LegalContent = {
  // ─── ENGLISH ───────────────────────────────────────────────────────────────
  en: {
    eyebrow: "Legal",
    title: "Privacy Policy",
    lastUpdatedLabel: "Last updated",
    lastUpdated: "[TO BE FILLED: date of publication]",
    tocLabel: "Contents",
    intro:
      "This Privacy Policy explains how Recruitment.bg collects, uses, stores and protects your personal data when you visit our website, apply for a role, or use our recruitment and staffing services. We are committed to processing your data lawfully, fairly and transparently in accordance with the EU General Data Protection Regulation (GDPR) and the Bulgarian Personal Data Protection Act.",
    cta: {
      text: "Questions about how we handle your data, or want to exercise your rights? Get in touch and we will respond as soon as possible.",
      buttonLabel: "Contact us",
      href: "/contacts",
    },
    sections: [
      {
        id: "controller",
        title: "1. Who we are (Data Controller)",
        blocks: [
          {
            type: "paragraph",
            text: "Recruitment.bg is operated by [TO BE FILLED: full registered company name] EOOD, a single-member limited liability company registered in the Commercial Register of the Bulgarian Registry Agency. We act as the controller of the personal data described in this Policy.",
          },
          {
            type: "list",
            items: [
              "Legal name: [TO BE FILLED: full registered company name] EOOD",
              "UIC (ЕИК): [TO BE FILLED: UIC number]",
              "Registered office: [TO BE FILLED: registered office address]",
              "Represented by: Veselin Raykov, Manager",
              "Employment Agency licence: No. [TO BE FILLED: licence number] dated [TO BE FILLED: licence date]",
              "Website: https://recruitment.bg",
            ],
          },
          { type: "subheading", text: "How to contact us about your data" },
          {
            type: "list",
            items: [
              "Email: veselin.raykov@recruitment.bg",
              "Data protection enquiries: [TO BE FILLED: data protection / privacy email]",
              "Phone: [TO BE FILLED: phone number]",
              "Postal address for requests: [TO BE FILLED: postal address]",
              "Data Protection Officer (if appointed): [TO BE FILLED: DPO name and contact, or remove if no DPO]",
            ],
          },
        ],
      },
      {
        id: "definitions",
        title: "2. Definitions",
        blocks: [
          {
            type: "list",
            items: [
              "Personal data — any information relating to an identified or identifiable individual.",
              "Processing — any operation performed on personal data, such as collection, storage, use, disclosure or deletion.",
              "Controller — the party that determines the purposes and means of processing; in this Policy, that is us.",
              "Processor — a third party that processes personal data on our behalf and under our instructions.",
              "Data subject — the individual to whom the personal data relates (you).",
              "GDPR — Regulation (EU) 2016/679.",
            ],
          },
        ],
      },
      {
        id: "data-we-collect",
        title: "3. Personal data we collect",
        blocks: [
          {
            type: "paragraph",
            text: "Depending on how you interact with us, we may collect the following categories of personal data:",
          },
          { type: "subheading", text: "Candidates and job seekers" },
          {
            type: "list",
            items: [
              "Identity and contact details: full name, email address, phone number, and where provided, postal address.",
              "Professional information: CV/resume, education and qualifications, language skills, employment history and previous employers, references, certificates, and career preferences.",
              "Eligibility information: nationality and work permit details, where relevant to a role.",
              "Application metadata: the role applied for, source platform, dates and correspondence exchanged with us.",
            ],
          },
          { type: "subheading", text: "Clients, partners and website visitors" },
          {
            type: "list",
            items: [
              "Business contact details of representatives of employer-clients and partners.",
              "Information you submit through our contact or enquiry forms.",
              "Technical and usage data: IP address, device and browser type, and information collected via cookies and analytics (see Section 9).",
            ],
          },
          { type: "subheading", text: "Workers placed under temporary-employment arrangements" },
          {
            type: "paragraph",
            text: "Where we act as a temporary-employment provider and you become our employee for assignment to a user undertaking, we additionally process the data required to administer the employment relationship, which may include: personal identification number (ЕГН) or equivalent, date of birth, bank account details, medical fitness certificate, and a criminal record certificate where this is required by law for the specific role. [TO BE FILLED: confirm or adjust the exact categories your temporary-employment operations require.]",
          },
          {
            type: "note",
            text: "We do not intentionally collect special categories of personal data (such as data revealing racial or ethnic origin, political opinions, religious beliefs, health, or sexual orientation). Please do not include such information in your CV or application unless specifically and lawfully requested.",
          },
        ],
      },
      {
        id: "how-we-collect",
        title: "4. How we collect your data",
        blocks: [
          { type: "paragraph", text: "We collect personal data through the following channels:" },
          {
            type: "list",
            items: [
              "Directly from you — via our website forms, by email or phone, or in the course of interviews and conversations.",
              "Job and professional platforms — including dev.bg, jobs.bg, LinkedIn, and [TO BE FILLED: any other platforms you source from, e.g. zaplata.bg, rabota.bg], as well as CVs you submit or make available to us.",
              "Referrals — when a partner or business contact recommends you for a role.",
              "Publicly available sources — such as professional networking profiles and public registers, where relevant to recruitment.",
              "Automatically — through cookies and analytics technologies when you use our website (see Section 9).",
            ],
          },
        ],
      },
      {
        id: "purposes",
        title: "5. Why we process your data",
        blocks: [
          {
            type: "list",
            items: [
              "To provide recruitment and mediation services — assessing suitability, matching candidates to roles, and presenting candidates to clients.",
              "To administer temporary-employment assignments where applicable.",
              "To communicate with you about applications, opportunities and requests.",
              "To comply with our legal and regulatory obligations, including reporting duties to the Employment Agency.",
              "To manage accounting, invoicing and financial records.",
              "To operate, secure and improve our website, including analytics.",
              "To send you job alerts or marketing communications where you have agreed to receive them (see Section 10).",
            ],
          },
        ],
      },
      {
        id: "legal-bases",
        title: "6. Legal bases for processing",
        blocks: [
          {
            type: "paragraph",
            text: "We rely on one or more of the following legal bases under Article 6 GDPR:",
          },
          {
            type: "list",
            items: [
              "Performance of a contract, or taking steps at your request before entering into one — e.g. providing you with recruitment services.",
              "Compliance with a legal obligation — e.g. statutory reporting, employment-law and accounting requirements.",
              "Our legitimate interests — e.g. matching candidates to roles, improving our services, securing our website, and preventing fraud, provided these are not overridden by your rights.",
              "Your consent — e.g. for direct marketing, retaining your data beyond a selection process, or transferring data outside the EEA where consent is the applicable basis. You may withdraw consent at any time.",
            ],
          },
        ],
      },
      {
        id: "temporary-employment",
        title: "7. Temporary employment",
        blocks: [
          {
            type: "paragraph",
            text: "We are registered to provide temporary employment, meaning we may employ you and assign you to work for a user undertaking (client). In this capacity we process the additional employment data described in Section 3 to fulfil our duties as your employer and to meet statutory obligations under the Bulgarian Labour Code and related legislation.",
          },
          {
            type: "paragraph",
            text: "[TO BE FILLED: describe any specifics of your temporary-employment operations, e.g. which user undertakings or sectors, or remove this paragraph if not yet applicable.]",
          },
        ],
      },
      {
        id: "automated-decisions",
        title: "8. Automated decision-making and AI",
        blocks: [
          {
            type: "note",
            text: "We do not use automated decision-making or profiling that produces legal or similarly significant effects, and we do not use AI-powered voice agents or automated scoring to evaluate candidates. Decisions about your application are made by our recruiters.",
          },
        ],
      },
      {
        id: "cookies",
        title: "9. Cookies and analytics",
        blocks: [
          {
            type: "paragraph",
            text: "Our website uses cookies and similar technologies, including Google Analytics, to understand how visitors use the site and to improve its performance and content. Analytics data is generally collected on the basis of your consent, which you can manage through our cookie banner.",
          },
          {
            type: "paragraph",
            text: "Google Analytics is provided by Google. For details of how Google processes data, see Google's privacy policy. You can find more information in our Cookie Policy: [TO BE FILLED: link to Cookie Policy, e.g. https://recruitment.bg/cookies].",
          },
        ],
      },
      {
        id: "marketing",
        title: "10. Direct marketing",
        blocks: [
          {
            type: "paragraph",
            text: "Where you have given your consent, we may send you newsletters, job alerts and other marketing communications relevant to you. You can opt out at any time using the unsubscribe link in any message, or by contacting us. Withdrawing consent does not affect processing carried out before the withdrawal.",
          },
        ],
      },
      {
        id: "sharing",
        title: "11. Who we share your data with",
        blocks: [
          {
            type: "paragraph",
            text: "We do not sell your personal data. We may share it, to the minimum extent necessary, with:",
          },
          {
            type: "list",
            items: [
              "Employer-clients — where we present you as a candidate, we share the relevant parts of your profile so they can assess your suitability.",
              "User undertakings — where you are assigned under a temporary-employment arrangement.",
              "Service providers (processors) — such as IT, hosting, email, analytics, accounting and legal providers, who act on our instructions under appropriate data-processing agreements.",
              "Public authorities — where we are legally required to disclose data, or to protect our rights, prevent fraud, or in connection with a corporate transaction.",
            ],
          },
        ],
      },
      {
        id: "international-transfers",
        title: "12. International data transfers",
        blocks: [
          {
            type: "paragraph",
            text: "Some of our service providers may process data outside the European Economic Area (EEA). [TO BE FILLED: list the providers/tools that transfer data outside the EEA, e.g. Google Analytics, email or hosting providers, or state that no such transfers take place.] Where transfers occur, we ensure an adequate level of protection through an adequacy decision or appropriate safeguards such as the European Commission's Standard Contractual Clauses.",
          },
        ],
      },
      {
        id: "retention",
        title: "13. How long we keep your data",
        blocks: [
          {
            type: "paragraph",
            text: "We retain personal data only for as long as necessary for the purposes for which it was collected, or as required by law. Our standard retention periods are:",
          },
          {
            type: "list",
            items: [
              "Candidate data: [TO BE FILLED: default — up to 3 years from your last interaction with us, or longer where you have consented]. Confirm with legal.",
              "Temporary-employment and payroll records: retained for the statutory periods (up to 50 years for payroll records, in line with social-security and accounting requirements).",
              "Accounting and tax records: up to 10 years, as required by Bulgarian law.",
              "Marketing data: until you withdraw your consent.",
              "Website and analytics data: [TO BE FILLED: retention period for analytics, e.g. as configured in Google Analytics].",
            ],
          },
          {
            type: "paragraph",
            text: "When a retention period expires and there is no legal basis to continue processing, we securely delete or anonymise your data.",
          },
        ],
      },
      {
        id: "security",
        title: "14. How we protect your data",
        blocks: [
          {
            type: "paragraph",
            text: "We apply appropriate technical and organisational measures to protect your personal data against accidental or unlawful destruction, loss, alteration, unauthorised disclosure or access. These include access controls, encryption where appropriate, secure storage, staff confidentiality obligations and ongoing training. No transmission over the internet can be guaranteed as fully secure, but we work continuously to safeguard your information.",
          },
        ],
      },
      {
        id: "your-rights",
        title: "15. Your rights",
        blocks: [
          {
            type: "paragraph",
            text: "Under the GDPR, you have the following rights in relation to your personal data:",
          },
          {
            type: "list",
            items: [
              "Right of access — to obtain confirmation of, and a copy of, the data we hold about you.",
              "Right to rectification — to have inaccurate or incomplete data corrected.",
              "Right to erasure — to request deletion of your data (the 'right to be forgotten'), subject to legal exceptions.",
              "Right to restriction — to limit how we process your data in certain circumstances.",
              "Right to data portability — to receive your data in a structured, machine-readable format and transfer it to another controller.",
              "Right to object — to processing based on legitimate interests, including direct marketing.",
              "Right to withdraw consent — at any time, where processing is based on consent.",
              "Right to lodge a complaint — with the supervisory authority (see Section 16).",
            ],
          },
          {
            type: "paragraph",
            text: "To exercise any of these rights, contact us using the details in Section 1. We will respond within the timeframes required by law.",
          },
        ],
      },
      {
        id: "supervisory-authority",
        title: "16. Supervisory authority",
        blocks: [
          {
            type: "paragraph",
            text: "If you believe your data protection rights have been infringed, you have the right to lodge a complaint with the Bulgarian supervisory authority:",
          },
          {
            type: "list",
            items: [
              "Commission for Personal Data Protection (CPDP)",
              "Address: 2 Prof. Tsvetan Lazarov Blvd, Sofia 1592, Bulgaria",
              "Phone: +359 2 915 3580",
              "Email: kzld@cpdp.bg",
              "Website: www.cpdp.bg",
            ],
          },
        ],
      },
      {
        id: "changes",
        title: "17. Changes to this Policy",
        blocks: [
          {
            type: "paragraph",
            text: "We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. The 'last updated' date at the top of this page will indicate when the latest revision took effect. We encourage you to review this page periodically.",
          },
        ],
      },
    ],
  },

  // ─── БЪЛГАРСКИ ───────────────────────────────────────────────────────────────
  bg: {
    eyebrow: "Правна информация",
    title: "Политика за поверителност",
    lastUpdatedLabel: "Последна актуализация",
    lastUpdated: "[ЗА ПОПЪЛВАНЕ: дата на публикуване]",
    tocLabel: "Съдържание",
    intro:
      "Тази Политика за поверителност обяснява как Recruitment.bg събира, използва, съхранява и защитава Вашите лични данни, когато посещавате нашия уебсайт, кандидатствате за позиция или ползвате нашите услуги по подбор и осигуряване на персонал. Ангажирани сме да обработваме данните Ви законосъобразно, добросъвестно и прозрачно в съответствие с Общия регламент относно защитата на данните (GDPR) и Закона за защита на личните данни.",
    cta: {
      text: "Имате въпроси за това как обработваме данните Ви или искате да упражните правата си? Свържете се с нас и ще Ви отговорим във възможно най-кратък срок.",
      buttonLabel: "Свържете се с нас",
      href: "/contacts",
    },
    sections: [
      {
        id: "controller",
        title: "1. Кои сме ние (Администратор на лични данни)",
        blocks: [
          {
            type: "paragraph",
            text: "Recruitment.bg се управлява от „[ЗА ПОПЪЛВАНЕ: пълно регистрирано наименование на дружеството]“ ЕООД — еднолично дружество с ограничена отговорност, вписано в Търговския регистър към Агенцията по вписванията. Действаме като администратор на личните данни, описани в тази Политика.",
          },
          {
            type: "list",
            items: [
              "Наименование: „[ЗА ПОПЪЛВАНЕ: пълно регистрирано наименование]“ ЕООД",
              "ЕИК: [ЗА ПОПЪЛВАНЕ: ЕИК]",
              "Седалище и адрес на управление: [ЗА ПОПЪЛВАНЕ: адрес на управление]",
              "Представлявано от: Веселин Райков, управител",
              "Удостоверение за посредническа дейност (Агенция по заетостта): № [ЗА ПОПЪЛВАНЕ: номер] от [ЗА ПОПЪЛВАНЕ: дата]",
              "Уебсайт: https://recruitment.bg",
            ],
          },
          { type: "subheading", text: "Как да се свържете с нас относно данните си" },
          {
            type: "list",
            items: [
              "Имейл: veselin.raykov@recruitment.bg",
              "Запитвания за защита на данните: [ЗА ПОПЪЛВАНЕ: имейл за защита на личните данни]",
              "Телефон: [ЗА ПОПЪЛВАНЕ: телефонен номер]",
              "Пощенски адрес за заявления: [ЗА ПОПЪЛВАНЕ: пощенски адрес]",
              "Длъжностно лице по защита на данните (ако е определено): [ЗА ПОПЪЛВАНЕ: име и контакт на ДЛЗД, или премахнете, ако няма]",
            ],
          },
        ],
      },
      {
        id: "definitions",
        title: "2. Определения",
        blocks: [
          {
            type: "list",
            items: [
              "Лични данни — всяка информация, свързана с идентифицирано или подлежащо на идентифициране физическо лице.",
              "Обработване — всяка операция с лични данни, като събиране, съхранение, използване, разкриване или изтриване.",
              "Администратор — лицето, което определя целите и средствата за обработване; в тази Политика това сме ние.",
              "Обработващ — трето лице, което обработва лични данни от наше име и по наши указания.",
              "Субект на данните — физическото лице, за което се отнасят личните данни (Вие).",
              "GDPR — Регламент (ЕС) 2016/679.",
            ],
          },
        ],
      },
      {
        id: "data-we-collect",
        title: "3. Какви лични данни събираме",
        blocks: [
          {
            type: "paragraph",
            text: "В зависимост от това как взаимодействате с нас, можем да събираме следните категории лични данни:",
          },
          { type: "subheading", text: "Кандидати и търсещи работа" },
          {
            type: "list",
            items: [
              "Идентификационни и контактни данни: име, имейл адрес, телефонен номер и, когато е предоставен, пощенски адрес.",
              "Професионална информация: автобиография (CV), образование и квалификации, езикови умения, трудов стаж и предходни работодатели, препоръки, сертификати и предпочитания за развитие.",
              "Данни за допустимост: гражданство и разрешение за работа, когато са относими към позицията.",
              "Метаданни за кандидатурата: позицията, за която кандидатствате, платформа-източник, дати и кореспонденция с нас.",
            ],
          },
          { type: "subheading", text: "Клиенти, партньори и посетители на сайта" },
          {
            type: "list",
            items: [
              "Служебни данни за контакт на представители на клиенти-работодатели и партньори.",
              "Информация, която изпращате чрез нашите форми за контакт или запитване.",
              "Технически данни и данни за използване: IP адрес, тип устройство и браузър, както и информация, събирана чрез бисквитки и анализи (вижте Раздел 9).",
            ],
          },
          { type: "subheading", text: "Лица, наети чрез предоставяне на временна работа" },
          {
            type: "paragraph",
            text: "Когато действаме като предприятие, осигуряващо временна работа, и Вие станете наш служител за изпълнение на работа при предприятие ползвател, допълнително обработваме данните, необходими за администриране на трудовото правоотношение, които може да включват: единен граждански номер (ЕГН) или еквивалент, дата на раждане, банкова сметка, документ за медицинска годност и свидетелство за съдимост, когато това се изисква по закон за конкретната длъжност. [ЗА ПОПЪЛВАНЕ: потвърдете или коригирайте точните категории, които изисква Вашата дейност по временна работа.]",
          },
          {
            type: "note",
            text: "Не събираме умишлено специални категории лични данни (като данни за расов или етнически произход, политически възгледи, религиозни убеждения, здравословно състояние или сексуална ориентация). Моля, не включвайте такава информация в автобиографията или кандидатурата си, освен ако изрично и законосъобразно не е поискана.",
          },
        ],
      },
      {
        id: "how-we-collect",
        title: "4. Как събираме данните Ви",
        blocks: [
          { type: "paragraph", text: "Събираме лични данни чрез следните канали:" },
          {
            type: "list",
            items: [
              "Директно от Вас — чрез формите на нашия уебсайт, по имейл или телефон, или в хода на интервюта и разговори.",
              "Платформи за работа и професионални мрежи — включително dev.bg, jobs.bg, LinkedIn и [ЗА ПОПЪЛВАНЕ: други платформи, които ползвате, напр. zaplata.bg, rabota.bg], както и автобиографии, които ни изпращате или предоставяте.",
              "Препоръки — когато партньор или бизнес контакт Ви препоръча за позиция.",
              "Публично достъпни източници — като профили в професионални мрежи и публични регистри, когато са относими към подбора.",
              "Автоматично — чрез бисквитки и аналитични технологии, когато използвате нашия уебсайт (вижте Раздел 9).",
            ],
          },
        ],
      },
      {
        id: "purposes",
        title: "5. Защо обработваме данните Ви",
        blocks: [
          {
            type: "list",
            items: [
              "За да предоставяме услуги по подбор и посредничество — оценка на пригодност, съпоставяне на кандидати с позиции и представяне на кандидати пред клиенти.",
              "За администриране на назначения по временна работа, когато е приложимо.",
              "За да комуникираме с Вас относно кандидатури, възможности и заявки.",
              "За спазване на нашите законови и регулаторни задължения, включително задължения за отчитане пред Агенцията по заетостта.",
              "За управление на счетоводството, фактурирането и финансовата отчетност.",
              "За поддръжка, защита и подобряване на нашия уебсайт, включително анализи.",
              "За да Ви изпращаме известия за работа или маркетингови съобщения, когато сте се съгласили да ги получавате (вижте Раздел 10).",
            ],
          },
        ],
      },
      {
        id: "legal-bases",
        title: "6. Правни основания за обработване",
        blocks: [
          {
            type: "paragraph",
            text: "Основаваме се на едно или повече от следните правни основания съгласно чл. 6 от GDPR:",
          },
          {
            type: "list",
            items: [
              "Изпълнение на договор или предприемане на стъпки по Ваше искане преди сключването му — напр. предоставяне на услуги по подбор.",
              "Спазване на законово задължение — напр. законоустановена отчетност, изисквания на трудовото и счетоводното законодателство.",
              "Нашите легитимни интереси — напр. съпоставяне на кандидати с позиции, подобряване на услугите, защита на сайта и предотвратяване на измами, доколкото не се преодоляват от Вашите права.",
              "Вашето съгласие — напр. за директен маркетинг, съхранение на данните Ви след приключване на подбор или трансфер на данни извън ЕИП, когато съгласието е приложимото основание. Можете да оттеглите съгласието си по всяко време.",
            ],
          },
        ],
      },
      {
        id: "temporary-employment",
        title: "7. Временна работа",
        blocks: [
          {
            type: "paragraph",
            text: "Регистрирани сме да осигуряваме временна работа, което означава, че можем да Ви наемем и да Ви изпратим да работите за предприятие ползвател (клиент). В това си качество обработваме допълнителните данни за трудовото правоотношение, описани в Раздел 3, за да изпълняваме задълженията си като Ваш работодател и да спазваме изискванията на Кодекса на труда и свързаното законодателство.",
          },
          {
            type: "paragraph",
            text: "[ЗА ПОПЪЛВАНЕ: опишете спецификите на дейността Ви по временна работа, напр. кои предприятия ползватели или сектори, или премахнете този абзац, ако все още не е приложим.]",
          },
        ],
      },
      {
        id: "automated-decisions",
        title: "8. Автоматизирано вземане на решения и ИИ",
        blocks: [
          {
            type: "note",
            text: "Не използваме автоматизирано вземане на решения или профилиране, които пораждат правни или подобни значими последици, и не използваме гласови агенти с изкуствен интелект или автоматизирано оценяване на кандидати. Решенията относно Вашата кандидатура се вземат от нашите консултанти по подбор.",
          },
        ],
      },
      {
        id: "cookies",
        title: "9. Бисквитки и анализи",
        blocks: [
          {
            type: "paragraph",
            text: "Нашият уебсайт използва бисквитки и подобни технологии, включително Google Analytics, за да разберем как посетителите използват сайта и да подобряваме неговата работа и съдържание. Аналитичните данни обикновено се събират на основание Вашето съгласие, което можете да управлявате чрез банера за бисквитки.",
          },
          {
            type: "paragraph",
            text: "Google Analytics се предоставя от Google. За подробности как Google обработва данни вижте политиката за поверителност на Google. Повече информация ще намерите в нашата Политика за бисквитките: [ЗА ПОПЪЛВАНЕ: връзка към Политиката за бисквитките, напр. https://recruitment.bg/cookies].",
          },
        ],
      },
      {
        id: "marketing",
        title: "10. Директен маркетинг",
        blocks: [
          {
            type: "paragraph",
            text: "Когато сте дали съгласието си, можем да Ви изпращаме бюлетини, известия за работа и други релевантни маркетингови съобщения. Можете да се откажете по всяко време чрез връзката за отписване във всяко съобщение или като се свържете с нас. Оттеглянето на съгласието не засяга обработването, извършено преди оттеглянето.",
          },
        ],
      },
      {
        id: "sharing",
        title: "11. С кого споделяме данните Ви",
        blocks: [
          {
            type: "paragraph",
            text: "Не продаваме Вашите лични данни. Можем да ги споделяме в минимално необходимия обем със:",
          },
          {
            type: "list",
            items: [
              "Клиенти-работодатели — когато Ви представяме като кандидат, споделяме относимите части от Вашия профил, за да преценят пригодността Ви.",
              "Предприятия ползватели — когато сте назначени по схема за временна работа.",
              "Доставчици на услуги (обработващи) — напр. ИТ, хостинг, имейл, анализи, счетоводни и правни доставчици, които действат по наши указания въз основа на договори за обработване.",
              "Държавни органи — когато сме законово задължени да разкрием данни, или за защита на нашите права, предотвратяване на измами или във връзка с корпоративна сделка.",
            ],
          },
        ],
      },
      {
        id: "international-transfers",
        title: "12. Международни трансфери на данни",
        blocks: [
          {
            type: "paragraph",
            text: "Някои от нашите доставчици на услуги може да обработват данни извън Европейското икономическо пространство (ЕИП). [ЗА ПОПЪЛВАНЕ: посочете доставчиците/инструментите, които прехвърлят данни извън ЕИП, напр. Google Analytics, имейл или хостинг доставчици, или посочете, че няма такива трансфери.] Когато се извършват трансфери, осигуряваме адекватно ниво на защита чрез решение за адекватност или подходящи гаранции като Стандартните договорни клаузи на Европейската комисия.",
          },
        ],
      },
      {
        id: "retention",
        title: "13. Колко дълго съхраняваме данните Ви",
        blocks: [
          {
            type: "paragraph",
            text: "Съхраняваме лични данни само толкова дълго, колкото е необходимо за целите, за които са събрани, или както изисква законът. Стандартните ни срокове за съхранение са:",
          },
          {
            type: "list",
            items: [
              "Данни на кандидати: [ЗА ПОПЪЛВАНЕ: по подразбиране — до 3 години от последното Ви взаимодействие с нас, или по-дълго при дадено съгласие]. Да се потвърди от юрист.",
              "Документи за временна работа и заплати: съхраняват се за законоустановените срокове (до 50 години за ведомости за заплати, съгласно изискванията за социално осигуряване и счетоводство).",
              "Счетоводни и данъчни документи: до 10 години, съгласно българското законодателство.",
              "Маркетингови данни: до оттегляне на съгласието Ви.",
              "Данни от уебсайта и анализите: [ЗА ПОПЪЛВАНЕ: срок за анализите, напр. съгласно конфигурацията в Google Analytics].",
            ],
          },
          {
            type: "paragraph",
            text: "Когато срокът за съхранение изтече и няма правно основание за продължаване на обработването, ние сигурно изтриваме или анонимизираме данните Ви.",
          },
        ],
      },
      {
        id: "security",
        title: "14. Как защитаваме данните Ви",
        blocks: [
          {
            type: "paragraph",
            text: "Прилагаме подходящи технически и организационни мерки за защита на Вашите лични данни срещу случайно или незаконно унищожаване, загуба, промяна, неразрешено разкриване или достъп. Те включват контрол на достъпа, криптиране където е подходящо, сигурно съхранение, задължения за конфиденциалност на служителите и текущо обучение. Никое предаване по интернет не може да бъде гарантирано като напълно сигурно, но работим непрекъснато за защитата на Вашата информация.",
          },
        ],
      },
      {
        id: "your-rights",
        title: "15. Вашите права",
        blocks: [
          {
            type: "paragraph",
            text: "Съгласно GDPR имате следните права по отношение на личните си данни:",
          },
          {
            type: "list",
            items: [
              "Право на достъп — да получите потвърждение и копие на данните, които съхраняваме за Вас.",
              "Право на коригиране — да поискате поправка на неточни или непълни данни.",
              "Право на изтриване — да поискате заличаване на данните си („правото да бъдеш забравен“), при спазване на законовите изключения.",
              "Право на ограничаване — да ограничите обработването при определени обстоятелства.",
              "Право на преносимост — да получите данните си в структуриран, машинночетим формат и да ги прехвърлите на друг администратор.",
              "Право на възражение — срещу обработване, основано на легитимни интереси, включително директен маркетинг.",
              "Право да оттеглите съгласието си — по всяко време, когато обработването се основава на съгласие.",
              "Право на жалба — до надзорния орган (вижте Раздел 16).",
            ],
          },
          {
            type: "paragraph",
            text: "За да упражните някое от тези права, свържете се с нас чрез данните в Раздел 1. Ще отговорим в сроковете, изисквани от закона.",
          },
        ],
      },
      {
        id: "supervisory-authority",
        title: "16. Надзорен орган",
        blocks: [
          {
            type: "paragraph",
            text: "Ако смятате, че правата Ви за защита на данните са нарушени, имате право да подадете жалба до българския надзорен орган:",
          },
          {
            type: "list",
            items: [
              "Комисия за защита на личните данни (КЗЛД)",
              "Адрес: бул. „Проф. Цветан Лазаров“ № 2, София 1592, България",
              "Телефон: +359 2 915 3580",
              "Имейл: kzld@cpdp.bg",
              "Уебсайт: www.cpdp.bg",
            ],
          },
        ],
      },
      {
        id: "changes",
        title: "17. Промени в тази Политика",
        blocks: [
          {
            type: "paragraph",
            text: "Можем да актуализираме тази Политика за поверителност периодично, за да отразим промени в практиките ни или в правните изисквания. Датата на „последна актуализация“ в горната част на страницата показва кога е влязла в сила последната редакция. Препоръчваме Ви да преглеждате тази страница периодично.",
          },
        ],
      },
    ],
  },
}
