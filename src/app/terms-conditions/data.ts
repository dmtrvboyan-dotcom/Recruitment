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
    title: "Terms & Conditions",
    lastUpdatedLabel: "Last updated",
    lastUpdated: "[TO BE FILLED: date of publication]",
    tocLabel: "Contents",
    intro:
      "These Terms & Conditions govern your access to and use of the Recruitment.bg website and the recruitment and staffing services we provide. By using our website or engaging our services, you agree to these Terms. Please read them carefully.",
    cta: {
      text: "Questions about these Terms or about working with us? We're happy to talk it through.",
      buttonLabel: "Get in touch",
      href: "/contacts",
    },
    sections: [
      {
        id: "introduction",
        title: "1. Introduction and acceptance",
        blocks: [
          {
            type: "paragraph",
            text: "These Terms & Conditions (the 'Terms') apply to the website https://recruitment.bg (the 'Website') and to the services offered through it. By accessing the Website or using our services, you accept these Terms in full. If you do not agree with them, please do not use the Website or our services.",
          },
        ],
      },
      {
        id: "about-us",
        title: "2. About us",
        blocks: [
          {
            type: "paragraph",
            text: "The Website is operated by [TO BE FILLED: full registered company name] EOOD, a company registered in the Commercial Register of the Bulgarian Registry Agency.",
          },
          {
            type: "list",
            items: [
              "Legal name: [TO BE FILLED: full registered company name] EOOD",
              "UIC (ЕИК): [TO BE FILLED: UIC number]",
              "Registered office: [TO BE FILLED: registered office address]",
              "Represented by: Veselin Raykov, Manager",
              "Employment Agency licence: No. [TO BE FILLED: licence number] dated [TO BE FILLED: licence date]",
              "Email: veselin.raykov@recruitment.bg",
            ],
          },
        ],
      },
      {
        id: "definitions",
        title: "3. Definitions",
        blocks: [
          {
            type: "list",
            items: [
              "We / us / the Company — [TO BE FILLED: full registered company name] EOOD, operating as Recruitment.bg.",
              "Website — https://recruitment.bg and all its pages and content.",
              "Client — an employer or organisation that engages us to source and present candidates.",
              "Candidate — an individual seeking employment through our services.",
              "Services — our recruitment, mediation and temporary-employment services.",
              "User / you — any visitor to the Website or recipient of our Services.",
            ],
          },
        ],
      },
      {
        id: "use-of-website",
        title: "4. Use of the Website",
        blocks: [
          {
            type: "paragraph",
            text: "The Website provides information about our Services and allows you to contact us and submit enquiries or applications. The information on the Website is provided for general purposes and does not constitute a binding offer unless expressly agreed in writing.",
          },
          { type: "paragraph", text: "You agree to use the Website lawfully and not to:" },
          {
            type: "list",
            items: [
              "submit false, misleading or unlawful information;",
              "attempt to gain unauthorised access to the Website or its systems;",
              "use the Website in a way that could damage, disable or impair it, or interfere with other users;",
              "upload or transmit malicious code, or use automated means to scrape or harvest data without our permission.",
            ],
          },
          {
            type: "paragraph",
            text: "If you create an account or receive login credentials, you are responsible for keeping them confidential and for activity carried out under them.",
          },
        ],
      },
      {
        id: "services",
        title: "5. Our services",
        blocks: [
          {
            type: "paragraph",
            text: "We provide IT and technology recruitment services — sourcing, assessing and presenting candidates to Clients — and, where applicable, temporary-employment services as a registered provider. We carry out our Services with professional care, but we do not guarantee that any particular vacancy will be filled, that any candidate will be placed, or that any placement will achieve a specific outcome.",
          },
        ],
      },
      {
        id: "terms-for-clients",
        title: "6. Terms for clients",
        blocks: [
          {
            type: "paragraph",
            text: "Where you engage us as a Client, the following apply alongside any individually signed agreement between us:",
          },
          {
            type: "note",
            text: "No hire, no invoice. Our placement fee is due only upon a successful placement. If a process needs to start over, so do we — at no extra cost.",
          },
          {
            type: "list",
            items: [
              "Fees: [TO BE FILLED: describe your fee structure, e.g. percentage of annual gross salary, fixed fee, or temporary-employment charge rates].",
              "Payment terms: [TO BE FILLED: invoicing and payment terms, e.g. due within X days of placement].",
              "Replacement / guarantee period: [TO BE FILLED: describe any guarantee, e.g. free replacement if the candidate leaves within X months, or remove if not offered].",
              "A 'successful placement' means [TO BE FILLED: define, e.g. a candidate introduced by us accepts an offer and commences employment].",
            ],
          },
          {
            type: "paragraph",
            text: "The specific commercial terms of each engagement are set out in a separate written agreement, which prevails over this Section in case of conflict.",
          },
        ],
      },
      {
        id: "terms-for-candidates",
        title: "7. Terms for candidates",
        blocks: [
          {
            type: "paragraph",
            text: "Our services to candidates are provided free of charge. By applying or submitting your details, you confirm that the information you provide is accurate and complete, and that you are entitled to work in the relevant jurisdiction. We will handle your personal data in accordance with our Privacy Policy.",
          },
          {
            type: "paragraph",
            text: "We present candidates to Clients based on the criteria of each role. We cannot guarantee interviews, offers or placements, and decisions ultimately rest with the Client.",
          },
        ],
      },
      {
        id: "intellectual-property",
        title: "8. Intellectual property",
        blocks: [
          {
            type: "paragraph",
            text: "All content on the Website — including text, graphics, logos, the 'Recruitment.bg' brand, layout and design — is owned by or licensed to us and is protected by intellectual property laws. You may view and use the Website for its intended purpose, but you may not copy, reproduce, distribute or create derivative works from its content without our prior written consent.",
          },
        ],
      },
      {
        id: "third-party-links",
        title: "9. Third-party links",
        blocks: [
          {
            type: "paragraph",
            text: "The Website may contain links to third-party websites, including job platforms and social networks. These are provided for convenience only. We do not control and are not responsible for the content, policies or practices of any third-party site, and accessing them is at your own risk.",
          },
        ],
      },
      {
        id: "liability",
        title: "10. Disclaimers and limitation of liability",
        blocks: [
          {
            type: "paragraph",
            text: "The Website and its content are provided 'as is'. To the fullest extent permitted by law, we exclude liability for any indirect or consequential loss arising from the use of, or inability to use, the Website, and for any errors or omissions in its content.",
          },
          {
            type: "paragraph",
            text: "Nothing in these Terms limits or excludes any liability that cannot be limited or excluded under applicable Bulgarian law. [TO BE FILLED: confirm any additional liability terms or caps you wish to include, after legal review.]",
          },
        ],
      },
      {
        id: "availability",
        title: "11. Availability of the Website",
        blocks: [
          {
            type: "paragraph",
            text: "We aim to keep the Website available and up to date, but we do not guarantee uninterrupted access. The Website may be unavailable from time to time for maintenance or for reasons beyond our control, and we are not liable for any resulting unavailability.",
          },
        ],
      },
      {
        id: "privacy",
        title: "12. Personal data",
        blocks: [
          {
            type: "paragraph",
            text: "Our collection and use of personal data is governed by our Privacy Policy, which forms part of these Terms. Please review it to understand how we process your data: https://recruitment.bg/privacy-policy.",
          },
        ],
      },
      {
        id: "changes",
        title: "13. Changes to these Terms",
        blocks: [
          {
            type: "paragraph",
            text: "We may update these Terms from time to time. Any changes take effect when published on this page, and the 'last updated' date will be amended accordingly. Your continued use of the Website after changes are published constitutes acceptance of the updated Terms.",
          },
        ],
      },
      {
        id: "governing-law",
        title: "14. Governing law and jurisdiction",
        blocks: [
          {
            type: "paragraph",
            text: "These Terms are governed by the laws of the Republic of Bulgaria. Any disputes arising in connection with the Website or our Services that cannot be resolved amicably shall be referred to the competent Bulgarian courts.",
          },
        ],
      },
      {
        id: "contact",
        title: "15. Contact",
        blocks: [
          { type: "paragraph", text: "For any questions about these Terms, please contact us:" },
          {
            type: "list",
            items: [
              "Email: veselin.raykov@recruitment.bg",
              "Phone: [TO BE FILLED: phone number]",
              "Address: [TO BE FILLED: contact / postal address]",
            ],
          },
        ],
      },
    ],
  },

  // ─── БЪЛГАРСКИ ───────────────────────────────────────────────────────────────
  bg: {
    eyebrow: "Правна информация",
    title: "Общи условия",
    lastUpdatedLabel: "Последна актуализация",
    lastUpdated: "[ЗА ПОПЪЛВАНЕ: дата на публикуване]",
    tocLabel: "Съдържание",
    intro:
      "Тези Общи условия уреждат достъпа Ви до и използването на уебсайта Recruitment.bg, както и услугите по подбор и осигуряване на персонал, които предоставяме. Като използвате нашия уебсайт или ангажирате услугите ни, Вие приемате тези условия. Моля, прочетете ги внимателно.",
    cta: {
      text: "Имате въпроси относно тези Общи условия или относно работата с нас? С удоволствие ще ги обсъдим.",
      buttonLabel: "Свържете се с нас",
      href: "/contacts",
    },
    sections: [
      {
        id: "introduction",
        title: "1. Въведение и приемане",
        blocks: [
          {
            type: "paragraph",
            text: "Тези Общи условия („Условията“) се прилагат към уебсайта https://recruitment.bg („Уебсайтът“) и към услугите, предлагани чрез него. С достъпа до Уебсайта или използването на услугите ни Вие приемате изцяло тези Условия. Ако не сте съгласни с тях, моля, не използвайте Уебсайта или услугите ни.",
          },
        ],
      },
      {
        id: "about-us",
        title: "2. За нас",
        blocks: [
          {
            type: "paragraph",
            text: "Уебсайтът се управлява от „[ЗА ПОПЪЛВАНЕ: пълно регистрирано наименование]“ ЕООД — дружество, вписано в Търговския регистър към Агенцията по вписванията.",
          },
          {
            type: "list",
            items: [
              "Наименование: „[ЗА ПОПЪЛВАНЕ: пълно регистрирано наименование]“ ЕООД",
              "ЕИК: [ЗА ПОПЪЛВАНЕ: ЕИК]",
              "Седалище и адрес на управление: [ЗА ПОПЪЛВАНЕ: адрес на управление]",
              "Представлявано от: Веселин Райков, управител",
              "Удостоверение за посредническа дейност (Агенция по заетостта): № [ЗА ПОПЪЛВАНЕ: номер] от [ЗА ПОПЪЛВАНЕ: дата]",
              "Имейл: veselin.raykov@recruitment.bg",
            ],
          },
        ],
      },
      {
        id: "definitions",
        title: "3. Определения",
        blocks: [
          {
            type: "list",
            items: [
              "Ние / нас / Дружеството — „[ЗА ПОПЪЛВАНЕ: пълно регистрирано наименование]“ ЕООД, опериращо като Recruitment.bg.",
              "Уебсайт — https://recruitment.bg и всички негови страници и съдържание.",
              "Клиент — работодател или организация, която ни ангажира да намерим и представим кандидати.",
              "Кандидат — физическо лице, което търси работа чрез нашите услуги.",
              "Услуги — нашите услуги по подбор, посредничество и осигуряване на временна работа.",
              "Потребител / Вие — всеки посетител на Уебсайта или получател на нашите Услуги.",
            ],
          },
        ],
      },
      {
        id: "use-of-website",
        title: "4. Използване на Уебсайта",
        blocks: [
          {
            type: "paragraph",
            text: "Уебсайтът предоставя информация за нашите Услуги и Ви позволява да се свържете с нас и да изпращате запитвания или кандидатури. Информацията на Уебсайта е с общ характер и не представлява обвързваща оферта, освен ако изрично не е уговорено писмено.",
          },
          { type: "paragraph", text: "Вие се съгласявате да използвате Уебсайта законосъобразно и да не:" },
          {
            type: "list",
            items: [
              "предоставяте невярна, подвеждаща или незаконна информация;",
              "правите опити за неоторизиран достъп до Уебсайта или системите му;",
              "използвате Уебсайта по начин, който може да го повреди, изключи или влоши, или да попречи на други потребители;",
              "качвате или предавате зловреден код, или да използвате автоматизирани средства за извличане на данни без наше разрешение.",
            ],
          },
          {
            type: "paragraph",
            text: "Ако създадете акаунт или получите данни за вход, Вие отговаряте за тяхната поверителност и за действията, извършени чрез тях.",
          },
        ],
      },
      {
        id: "services",
        title: "5. Нашите услуги",
        blocks: [
          {
            type: "paragraph",
            text: "Предоставяме услуги по подбор в сферата на ИТ и технологиите — намиране, оценка и представяне на кандидати пред Клиенти — и, когато е приложимо, услуги по осигуряване на временна работа като регистрирано предприятие. Изпълняваме Услугите си с професионална грижа, но не гарантираме, че конкретна позиция ще бъде заета, че даден кандидат ще бъде назначен или че дадено назначение ще постигне определен резултат.",
          },
        ],
      },
      {
        id: "terms-for-clients",
        title: "6. Условия за клиенти",
        blocks: [
          {
            type: "paragraph",
            text: "Когато ни ангажирате като Клиент, се прилага следното заедно с всеки индивидуално подписан договор между нас:",
          },
          {
            type: "note",
            text: "Няма назначение — няма фактура. Нашето възнаграждение за подбор се дължи само при успешно назначение. Ако даден процес трябва да започне отначало, ние също го правим — без допълнително заплащане.",
          },
          {
            type: "list",
            items: [
              "Възнаграждение: [ЗА ПОПЪЛВАНЕ: опишете структурата на възнаграждението, напр. процент от годишната брутна заплата, фиксирана такса или ставки за временна работа].",
              "Условия на плащане: [ЗА ПОПЪЛВАНЕ: условия за фактуриране и плащане, напр. в срок от Х дни от назначението].",
              "Гаранционен срок / замяна: [ЗА ПОПЪЛВАНЕ: опишете гаранцията, напр. безплатна замяна, ако кандидатът напусне в рамките на Х месеца, или премахнете, ако не се предлага].",
              "„Успешно назначение“ означава [ЗА ПОПЪЛВАНЕ: дефинирайте, напр. кандидат, представен от нас, приеме оферта и започне работа].",
            ],
          },
          {
            type: "paragraph",
            text: "Конкретните търговски условия на всеки ангажимент се уреждат в отделен писмен договор, който има предимство пред този Раздел при противоречие.",
          },
        ],
      },
      {
        id: "terms-for-candidates",
        title: "7. Условия за кандидати",
        blocks: [
          {
            type: "paragraph",
            text: "Услугите ни към кандидатите се предоставят безплатно. С кандидатстването или изпращането на данните си Вие потвърждавате, че предоставената информация е вярна и пълна и че имате право да работите в съответната юрисдикция. Ще обработваме личните Ви данни в съответствие с нашата Политика за поверителност.",
          },
          {
            type: "paragraph",
            text: "Представяме кандидати пред Клиенти въз основа на критериите за всяка позиция. Не можем да гарантираме интервюта, оферти или назначения, като решенията в крайна сметка зависят от Клиента.",
          },
        ],
      },
      {
        id: "intellectual-property",
        title: "8. Интелектуална собственост",
        blocks: [
          {
            type: "paragraph",
            text: "Цялото съдържание на Уебсайта — включително текст, графики, лого, марката „Recruitment.bg“, оформление и дизайн — е наша собственост или ни е лицензирано и е защитено от законите за интелектуална собственост. Можете да разглеждате и използвате Уебсайта по предназначение, но не можете да копирате, възпроизвеждате, разпространявате или създавате производни произведения от съдържанието му без предварителното ни писмено съгласие.",
          },
        ],
      },
      {
        id: "third-party-links",
        title: "9. Връзки към трети страни",
        blocks: [
          {
            type: "paragraph",
            text: "Уебсайтът може да съдържа връзки към уебсайтове на трети страни, включително платформи за работа и социални мрежи. Те се предоставят единствено за удобство. Ние не контролираме и не носим отговорност за съдържанието, политиките или практиките на сайтове на трети страни, като достъпът до тях е на Ваш собствен риск.",
          },
        ],
      },
      {
        id: "liability",
        title: "10. Отказ от отговорност и ограничаване на отговорността",
        blocks: [
          {
            type: "paragraph",
            text: "Уебсайтът и неговото съдържание се предоставят „във вида, в който са“. В максималната степен, позволена от закона, изключваме отговорност за всякакви косвени или последващи вреди, произтичащи от използването или невъзможността за използване на Уебсайта, както и за грешки или пропуски в съдържанието му.",
          },
          {
            type: "paragraph",
            text: "Нищо в тези Условия не ограничава или изключва отговорност, която не може да бъде ограничена или изключена съгласно приложимото българско право. [ЗА ПОПЪЛВАНЕ: потвърдете допълнителни клаузи или ограничения на отговорността след правен преглед.]",
          },
        ],
      },
      {
        id: "availability",
        title: "11. Достъпност на Уебсайта",
        blocks: [
          {
            type: "paragraph",
            text: "Стремим се да поддържаме Уебсайта достъпен и актуален, но не гарантираме непрекъснат достъп. Уебсайтът може да бъде временно недостъпен за поддръжка или по причини извън нашия контрол, като не носим отговорност за произтичаща от това недостъпност.",
          },
        ],
      },
      {
        id: "privacy",
        title: "12. Лични данни",
        blocks: [
          {
            type: "paragraph",
            text: "Събирането и използването на лични данни се урежда от нашата Политика за поверителност, която е част от тези Условия. Моля, прегледайте я, за да разберете как обработваме данните Ви: https://recruitment.bg/privacy-policy.",
          },
        ],
      },
      {
        id: "changes",
        title: "13. Промени в тези Условия",
        blocks: [
          {
            type: "paragraph",
            text: "Можем да актуализираме тези Условия периодично. Всички промени влизат в сила при публикуването им на тази страница, като датата на „последна актуализация“ се променя съответно. Продължаването на използването на Уебсайта след публикуване на промените представлява приемане на актуализираните Условия.",
          },
        ],
      },
      {
        id: "governing-law",
        title: "14. Приложимо право и юрисдикция",
        blocks: [
          {
            type: "paragraph",
            text: "Тези Условия се уреждат от законите на Република България. Всички спорове, възникнали във връзка с Уебсайта или нашите Услуги, които не могат да бъдат решени по взаимно съгласие, се отнасят до компетентните български съдилища.",
          },
        ],
      },
      {
        id: "contact",
        title: "15. Контакт",
        blocks: [
          { type: "paragraph", text: "За въпроси относно тези Условия, моля, свържете се с нас:" },
          {
            type: "list",
            items: [
              "Имейл: veselin.raykov@recruitment.bg",
              "Телефон: [ЗА ПОПЪЛВАНЕ: телефонен номер]",
              "Адрес: [ЗА ПОПЪЛВАНЕ: адрес за контакт]",
            ],
          },
        ],
      },
    ],
  },
}
