import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const projects = [
  {
    id: "TaskRival",
    slug: "taskrival",
    title: "TaskRival.",
    role: "Product Owner & Product Manager",
    description: "A gamified productivity platform designed to help remote teams and individuals stay accountable, organized, and motivated through task management and reward systems.",
    duration: "June 2025",
    technologies: ["React", "Next.js", "Supabase", "Agile", "v0", "openAI API", "AI-assisted development", "Low-code tools"],
    images: ["/TaskRival-1.jpg", "/TaskRival-2.jpg", "/TaskRival-3.jpg", "/TaskRival-4.jpg"],
    overview: "TaskRival is a lightweight productivity platform that blends task management with a gamified reward system, encouraging users to complete daily goals and track progress with built-in incentives. Developed as a solo product initiative, the project aimed to address growing productivity fatigue and accountability gaps among distributed teams.",
    aim: "Build a functional MVP to validate the product concept. Introduce an innovative reward system to enhance task completion rates. Make productivity fun and habit-forming using gamification. Ensure the platform was flexible enough for both individual users and remote teams.",
    roleDetails: "As the Product Owner and Manager, I led the end-to-end development and launch of the MVP, wearing multiple hats across strategy, design, development direction, and user feedback loops. My focus was on building a value-driven product fast, using AI-assisted tools to streamline execution.",
    process: "I conceptualized and scoped TaskRival based on research into remote team challenges and user motivation drivers. Designed the product architecture and workflows using AI-assisted tools like ChatGPT and low-code builders (I used v0 and Cursor). Established Agile iteration cycles, allowing weekly feature testing based on early feedback from test users. Collected and integrated user insights using feedback forms and analytics to drive MVP enhancements.",
    challenges: "Initial user drop-offs during onboarding and difficulty in prioritizing features for solo development.",
    solutions: "Refined onboarding flow by introducing tooltips and a task walkthrough, reducing drop-offs by 35%. Created a MoSCoW prioritization matrix and backlog grooming process to focus only on high-impact features for MVP.",
    achievements: "MVP launched in 2 months, built using AI agents, and no-code tools. 200 users acquired in Month 1, with high retention from early adopters. User feedback rated the reward system as the most motivating feature, mentioned in 70% of feedback submissions. Built a repeatable feedback → design → deploy loop, enabling faster iteration and more user-driven decisions."
  },
  {
    id: "PawnDex",
    slug: "pawndex",
    title: "PawnDex - Trade Simulator",
    role: "Technical Project Manager & Product Strategist",
    description: "A blockchain-based paper trading platform designed to help users learn trading strategies and gain experience without risking real funds.",
    duration: "July 2025",
    technologies: ["AI-Powered Development", "UX Pilot", "v0 (Vercel)", "Strategic Prompting", "Agile/Scrum", "Lean Startup", "Design Thinking", "Web3", "Blockchain"],
    images: ["/Tradesimulator-1.jpg", "/Tradesimulator-2.jpg", "/Tradesimulator-3.jpg", "/Tradesimulator-4.jpg", "/Tradesimulator-5.jpg"],
    overview: "PawnDex is a blockchain-based trading simulation platform designed to help users, especially Web3 newcomers, learn trading strategies and gain hands-on experience without risking real assets. The product simulates a real-world memecoin trading environment, combining education with gamified experimentation.",
    aim: "Translate a non-technical vision into a working product. Validate product-market fit through an interactive, realistic trading simulation. Enable user learning without financial exposure. Prepare client for fundraising with an investor-ready product demo.",
    roleDetails: "As the Technical Project Manager & Product Strategist, I led the transformation of an abstract blockchain product vision into a fully functional prototype. I coordinated strategic planning, rapid prototyping, and stakeholder engagement to deliver a working product.",
    process: "Conducted structured discovery sessions to break down abstract concepts into tangible user flows and MVP features. Developed a full product roadmap with prioritized features and validation milestones. Implemented Agile sprint cycles and lean iteration for maximum speed and feedback integration. Facilitated product discovery sessions with stakeholders to clarify requirements and scope. Delivered a fully functional prototype using AI agents and rapid frontend tools.",
    challenges: "Abstract vision with no clear feature set or roadmap from the client. Risk of miscommunication in Web3 terminology between stakeholders and technical requirements. Need to deliver a working prototype in extremely compressed timeline. Balancing rapid development with maintainable code architecture.",
    solutions: "Facilitated structured discovery sessions and broke the concept down into tangible user flows, MVP features, and prioritized backlog. Acted as translator, turning complex smart contract logic into simple business concepts and vice versa. Used AI-powered development stack for rapid prototyping while maintaining code quality. Implemented scalable component architecture for maintainability and future development.",
    achievements: "Delivered a fully interactive prototype in under 9 hours, a process that normally takes 3-4 weeks. Eliminated 2-3 weeks of onboarding time for future developers through working-code documentation. Received direct client feedback: 'Overly amazed' by the delivery speed and clarity of the prototype. Prototype helped validate core product assumptions, confirming investor interest and stakeholder buy-in. Positioned client for fundraising with a pitch-ready, clickable demo that conveyed product utility instantly."
  },
  {
    id: "PRD: FlashCare App",
    slug: "flashcare-app",
    title: "FlashCare",
    role: "Product Manager",
    description: "A mobile-first telemedicine platform designed to connect individuals in rural and underserved areas with volunteer doctors.",
    duration: "April 2025",
    technologies: ["Product Discovery", "PRD Development", "Figma", "Google Docs", "User Research", "HealthTech", "AI Integration", "Mobile-First Design"],
    images: ["/Flashcare.jpg", "/Flashcare-2.jpg"],
    overview: "FlashCare is a mobile-first telemedicine platform designed to connect individuals in rural and underserved areas with volunteer doctors for free virtual consultations. The initiative aimed to bridge healthcare access gaps by leveraging AI, real-time communication, and local-language support, making critical health services more accessible to patients with limited infrastructure, resources, or digital literacy.",
    aim: "Enable real-time video/audio consultations optimized for low-bandwidth networks. Provide AI-driven symptom triage for early assessments and reduced hospital strain. Ensure accessibility through voice navigation, offline support, and local language options. Establish infrastructure for digital prescriptions, EHRs, and emergency referrals. Build a modular, scalable platform for future expansion.",
    roleDetails: "I served as the Product Manager, taking full ownership of the discovery and requirements definition process. I transformed a high-level concept into a comprehensive, investor-ready PRD that prioritized usability, scalability, and medical compliance.",
    process: "Defined product vision and scope through collaborative ideation and health sector research. Conducted user persona analysis to map pain points for rural patients, volunteer doctors, and medical facilities. Translated conceptual ideas into tangible user stories and journeys using Figma and Google Docs. Authored comprehensive PRD covering functional & non-functional requirements, MVP scope, user flow, and architecture considerations. Developed detailed use case system for AI triage, doctor-patient interaction, and emergency escalation. Created Figma-based user flow diagram outlining end-to-end journey of patients and doctors.",
    challenges: "Addressing connectivity issues in rural areas with limited internet infrastructure. Ensuring user privacy and data security compliance with healthcare regulations. Creating intuitive interfaces for users with varying technical literacy levels. Balancing comprehensive features with app performance and accessibility. Building trust in AI-driven healthcare solutions in rural communities.",
    solutions: "Designed mobile-first architecture with offline-first capabilities for areas with poor connectivity. Implemented strong encryption and HIPAA-compliant data handling protocols. Created icon-based navigation with voice prompts and audio content for accessibility. Integrated local language support with voice-guided features for non-text-based interactions. Proposed modular design for scalable platform expansion and future features.",
    achievements: "Delivered comprehensive PRD that served as foundation for development, investor presentations, and stakeholder onboarding. Defined clear MVP feature set, saving future development team estimated 4-6 weeks of discovery and planning. Built trust and alignment across internal stakeholders by grounding vision in user-centric documentation. Positioned product to attract partnerships with NGOs, local health providers, and government health initiatives. Created structured 9-month roadmap from discovery to post-launch iteration.",
    Links: [
      
      { title: "Figma Flow Diagram", content: "View User Flow.", link: "https://www.figma.com/board/nfkbnHl5kgqneeEUJivvP7/FlashCare-%F0%9F%93%B1%F0%9F%9A%91?node-id=0-1&p=f" },
      { title: "Download Full FlashCare PRD", content: "Download Full FlashCare PRD (PDF).", link: "https://drive.google.com/file/d/1xJ2-j5MNKBIZ04gsxbklvw1XrMkX4KLK/view?usp=drive_link" }
    ]
  },
  {
    id: "POS-Padi",
    slug: "pos-padi",
    title: "POS-Padi",
    role: "Product Manager",
    description: "A web-based business management tool built for POS agents and business owners to manage their operations, prevent fraud, and improve financial visibility.",
    duration: "March 2025 - May 2025",
    technologies: ["Product Discovery", "PRD Development", "Figma", "Google Docs", "Agile", "MoSCoW", "Lean UX", "Fintech", "User Research"],
    images: ["/pos-padi-1.jpg", "/pos-padi-2.jpg", "/pos-padi-3.jpg", "/pos-padi-4.jpg"],
    overview: "POS-Padi is a centralized POS management platform designed to help POS agents, aggregators, and business owners monitor terminals, prevent fraud, manage finances, and resolve transaction disputes. Built for the fast-growing informal financial economy in Nigeria, it addresses operational risks like cash shortages, fraud, and limited visibility across multiple agents and terminals.",
    aim: "Reduce financial loss from unresolved disputes and unmonitored transactions. Provide agents and business owners with real-time visibility into business performance. Prevent fraud through proactive alerting and activity monitoring. Streamline onboarding and terminal management for aggregators. Enable access to nearby liquidity sources via a verified supplier network.",
    roleDetails: "As a Product Management Intern, I actively led the product discovery and MVP scoping process for the project, resulting in a complete Product Requirements Document (PRD) that aligned the team around measurable goals. I supported and facilitated daily and weekly planning sessions across design and development teams, translated business goals into user stories and technical requirements, and collaborated closely with team leads to resolve blockers and ensure progress.",
    process: "Conducted interviews with POS agents and aggregators to understand workflow pain points. Mapped user personas and customer journeys to inform the MVP design. Defined features based on business impact, usability, and launch viability. Prioritized core MVP features based on impact on fraud prevention, customer satisfaction, and operational clarity. Translated discovery insights into clearly scoped epics, user stories, and measurable success metrics. Scoped a lean web-based MVP that reduced build complexity and allowed for faster time-to-market.",
    challenges: "Technical ambiguity around third-party POS terminal API integration. Multiple conflicting stakeholder priorities across operations and tech. Complexity in multi-agent transaction data visibility. Balancing comprehensive features with ease of use for non-technical users. Ensuring data security and compliance with financial regulations.",
    solutions: "Defined modular architecture to decouple MVP features from external dependencies. Applied MoSCoW prioritization and facilitated alignment workshops to define a realistic MVP. Designed role-based dashboard with filtering by agent, terminal, and transaction type. Built modular payment integrations that support multiple providers and easy switching. Created customizable dashboards and workflows that adapt to different business types.",
    achievements: "Delivered a full MVP PRD in under 3 weeks, ready for design and engineering. Aligned a multi-disciplinary team around clearly scoped milestones and feature definitions. Defined success metrics that project 50% reduction in unresolved disputes via structured reporting system, 70% detection of suspicious activities using smart alerts and fraud rules, 90% onboarding success for new agents with simplified workflows, 85% user satisfaction from pilot agents due to financial tracking and real-time notifications, and 75% successful cash requests through integrated supplier network during pilot testing.",
    Links: [
      { title: "Visit POS-Padi", content: "View Live Website.", link: "https://pospadi.com.ng" }
    ]
  },
  {
    id: "Pawndora",
    slug: "pawndora",
    title: "Pawndora - Website Development",
    role: "Product Manager & Team Lead",
    description: "Design and development of a responsive website.",
    duration: "Dec 2024 - Jan 2025",
    technologies: ["Website Development", "AI Integration", "MVP Delivery", "Scrum", "Gemini API", "Responsive Design", "Web3", "Generative AI"],
    images: ["/pawndora.jpg", "/pawndora-2.jpg", "/pawndora-3.jpg", "/pawndora-4.jpg"],
    overview: "The project involved developing and launching a public-facing website featuring a responsive landing page and a natural language generative AI chatbot powered by the Gemini API. The core goal was to create a fast, engaging, and functional platform that would allow the client to begin onboarding users and showcasing the platform's capabilities, even before the full simulation trading experience was ready.",
    aim: "Deliver a responsive, production-ready MVP website within 1 month. Integrate a functional generative AI chatbot using Gemini API. Ensure smooth collaboration across design, development, and blockchain expertise. Provide the client with a scalable foundation for onboarding and marketing.",
    roleDetails: "As the Project Manager & Team Lead, I led a remote cross-functional team consisting of frontend and backend web developers, UI/UX product designer, and blockchain developer (Web3 Subject Matter Expert). We worked in structured weekly sprints using the Scrum framework, with clearly defined goals, sprint demos, and client-facing updates.",
    process: "Defined and prioritized requirements using the MoSCoW method, ensuring that critical functionality (AI chatbot, responsive UI, and content flow) was delivered first. Scoped the MVP timeline and milestones to align with the client's go-to-market goals. Led sprint planning, stand-ups, demos, and retrospectives. Ensured that tasks were aligned with sprint goals and tracked to completion. Actively removed blockers and unblocked developers to maintain team velocity. Maintained a consistent feedback loop through sprint reviews and progress check-ins. Shared live demos and design updates weekly to reinforce transparency and build trust. Coordinated backend and frontend alignment for the successful deployment of a Gemini API-powered AI chatbot.",
    challenges: "Coordinating a remote, cross-functional team across time zones. Rapid integration of a new generative AI model within MVP timeline. Managing expectations around evolving scope while protecting MVP delivery timelines.",
    solutions: "Introduced structured Scrum routines, async updates, and clear sprint documentation to maintain alignment. Facilitated technical alignment between frontend and backend teams early. Created fallback plans in case of API failure or latency issues. Managed expectations around evolving scope while protecting MVP delivery timelines.",
    achievements: "MVP delivered on schedule within 1 month, meeting all priority feature requirements. Fully functional AI chatbot using Gemini API deployed and accessible on the live site. Responsive website launched across desktop, tablet, and mobile formats. Enabled the client to begin onboarding users early, even before core product build-out. Client reported high satisfaction with sprint execution, visibility, and team communication. Led the end-to-end execution of a functional AI-powered MVP website in just 4 weeks. Coordinated a multi-disciplinary team to deliver technical and UX excellence. Established a repeatable sprint framework that the client has adopted for future phases. Built trust and momentum that enabled early-stage user onboarding and demo readiness."
  },
  {
    id: "StepGain",
    slug: "stepgain",
    title: "StepGain",
    role: "Product Manager",
    description: "A fitness tracking application with in-app wallet feature, that rewards users for daily physical activity, encouraging healthy habits through gamification.",
    duration: "2022 - 2023",
    technologies: ["Product Strategy", "UX Planning", "Prototype Delivery", "Figma", "Agile", "User Research", "HealthTech", "Fitness", "Lifestyle"],
    images: ["/stepgain.jpg", "/stepgain-2.jpg"],
    overview: "StepGain is a mobile fitness tracking app designed to motivate users of all ages and backgrounds to live a more active lifestyle, regardless of access to gyms or fitness programs. The app encourages users to walk, jog, or run and rewards them for every step taken. I led the planning, design, and prototyping of the MVP, collaborating closely with a mobile app developer and a product designer. While the product was not fully deployed, our work resulted in a high-fidelity prototype that clearly articulated the product's core value and was ready for user testing and investment conversations.",
    aim: "Promote fitness and health in an inclusive, accessible way. Encourage physical activity by rewarding users for everyday movement. Remove traditional fitness barriers through simplicity and gamification. Deliver a working prototype that reflects core functionality and user experience.",
    roleDetails: "As the Product Manager, I managed a cross-functional team from ideation through design and prototype delivery, ensuring alignment on goals, feature scope, and user-centered design. I led the end-to-end product strategy, user research, and prototype development, collaborating closely with a product designer and a mobile app developer.",
    process: "Defined the product vision and goals focused on inclusive fitness, habit-building, and rewards. Identified key user personas based on lifestyle, motivation level, and fitness accessibility. Translated fitness motivation psychology into actionable product features. Prioritized core features (step tracking, real-time feedback, reward dashboard) using a value-impact matrix. Scoped an MVP that could deliver a complete fitness-feedback-reward loop while remaining lightweight and scalable. Focused on a gamified UX approach that combined clarity, motivation, and daily satisfaction. Guided the product designer through user flows, wireframes, and high-fidelity screens. Worked with the developer to align technical feasibility with the product vision. Ensured all components reflected accessibility, responsiveness, and reward-driven interaction.",
    challenges: "Building a rewarding user experience without overcomplicating the MVP. Another challenge was designing for a wide user base across ages and tech comfort levels.",
    solutions: "Simplified the reward system to focus on points per step with visual feedback loops. Prioritized minimal UI, large icons, and progressive onboarding. Focused on core features that delivered a complete fitness-feedback-reward loop while remaining lightweight and scalable. Mapped reward system logic to 3 levels of motivational triggers, backed by behavioral psychology.",
    achievements: "Delivered a functional prototype in under 6 weeks, covering 100% of core user flows. Reduced projected development complexity by 30% through lean MVP scoping. Achieved 100% alignment between design and development handoff with no iteration delays. Mapped reward system logic to 3 levels of motivational triggers, backed by behavioral psychology. Increased perceived product readiness among stakeholders by >80%, based on feedback post-prototype demo."
  },
];

export function generateStaticParams() {
  return projects.map((project) => ({ id: project.slug }));
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = projects.find((p) => p.slug === id);
  if (!project) return notFound();

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <main className="flex-1 pt-16">
        {/* Project Summary Bar */}
        <div className="w-full bg-amber-50 border-b border-amber-200 py-6 px-4 md:px-12 flex flex-col md:flex-row md:items-center md:justify-between gap-4 shadow-sm">
          <div className="flex-1">
            <h1 className="text-2xl md:text-3xl font-bold text-black font-serif mb-1">{project.title}</h1>
            <p className="text-md text-slate-700 font-serif mb-1">{project.description}</p>
          </div>
          <div className="flex items-center text-md text-amber-800 font-serif font-semibold">
            <Calendar className="h-5 w-5 mr-2" />
            {project.duration}
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 py-12">
          {/* Hero Image Section */}
          {project.images && project.images.length > 0 && (
            <section className="mb-12">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <Image 
                  src={project.images[0]} 
                  alt={`${project.title} - Hero Image`} 
                  width={1200} 
                  height={600} 
                  className="w-full h-96 md:h-[500px] object-cover" 
                />
              </div>
            </section>
          )}

          {/* Blog-style text sections */}
          <div className="space-y-12">
            {/* Overview Section */}
            <section>
              <h2 className="text-2xl font-bold text-black mb-6 font-serif">Overview</h2>
              <p className="text-lg leading-relaxed text-slate-800">{project.overview}</p>
            </section>

            {/* Aim & Role Section */}
            <section>
              <h2 className="text-2xl font-bold text-black mb-6 font-serif">Aim & Role</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-black mb-2">Objectives</h3>
                  <ul className="list-disc pl-6 space-y-2 text-lg leading-relaxed text-slate-800">
                    {project.aim.split('. ').filter(item => item.trim()).map((item, idx) => (
                      <li key={idx}>{item.trim()}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-black mb-2">My Role</h3>
                  <p className="text-lg leading-relaxed text-slate-800">{project.roleDetails}</p>
                </div>
              </div>
            </section>

            {/* Process Section */}
            <section>
              <h2 className="text-2xl font-bold text-black mb-6 font-serif">Process & Methodology</h2>
              <ul className="list-disc pl-6 space-y-2 text-lg leading-relaxed text-slate-800">
                {project.process.split('. ').filter(item => item.trim()).map((item, idx) => (
                  <li key={idx}>{item.trim()}</li>
                ))}
              </ul>
            </section>

            {/* Process Image */}
            {project.images && project.images.length > 1 && (
              <section className="my-12">
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <Image 
                    src={project.images[1]} 
                    alt={`${project.title} - Process Image`} 
                    width={1200} 
                    height={600} 
                    className="w-full h-96 md:h-[500px] object-contain bg-gray-50" 
                  />
                </div>
              </section>
            )}

            {/* Challenges & Solutions Section */}
            <section>
              <h2 className="text-2xl font-bold text-black mb-6 font-serif">Challenges & Solutions</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-black mb-2">Challenges Faced</h3>
                  <ul className="list-disc pl-6 space-y-2 text-lg leading-relaxed text-slate-800">
                    {project.challenges.split('. ').filter(item => item.trim()).map((item, idx) => (
                      <li key={idx}>{item.trim()}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-black mb-2">Solutions Implemented</h3>
                  <ul className="list-disc pl-6 space-y-2 text-lg leading-relaxed text-slate-800">
                    {project.solutions.split('. ').filter(item => item.trim()).map((item, idx) => (
                      <li key={idx}>{item.trim()}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* Solutions Image */}
            {project.images && project.images.length > 2 && (
              <section className="my-12">
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <Image 
                    src={project.images[2]} 
                    alt={`${project.title} - Solutions Image`} 
                    width={1200} 
                    height={600} 
                    className="w-full h-96 md:h-[500px] object-contain bg-gray-50" 
                  />
                </div>
              </section>
            )}

            {/* Image Gallery Section */}
            {project.images && project.images.length > 3 && (
              <section>
                <h2 className="text-2xl font-bold text-black mb-6 font-serif">Project Gallery</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {project.images.slice(3, 9).map((image, idx) => (
                    <div key={idx} className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-gray-50">
                      <Image 
                        src={image} 
                        alt={`${project.title} - Image ${idx + 4}`} 
                        width={400} 
                        height={300} 
                        className="w-full h-64 object-contain hover:scale-105 transition-transform duration-300" 
                      />
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Achievements Section */}
            <section>
              <h2 className="text-2xl font-bold text-black mb-6 font-serif">Outcomes & Impact</h2>
              <ul className="list-disc pl-6 space-y-2 text-lg leading-relaxed text-slate-800">
                {project.achievements.split('. ').filter(item => item.trim()).map((item, idx) => (
                  <li key={idx}>{item.trim()}</li>
                ))}
              </ul>
            </section>

            {/* Case Studies Section */}
            {project.caseStudies && project.caseStudies.length > 0 && (
              <section>
                <h2 className="text-2xl font-bold text-black mb-6 font-serif">Case Studies</h2>
                <div className="space-y-4">
                  {project.caseStudies.map((cs, idx) => (
                    <div key={idx} className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-500">
                      <h3 className="text-lg font-semibold text-black mb-2">{cs.title}</h3>
                      <p className="text-slate-800">{cs.content}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Links Section */}
            {project.Links && project.Links.length > 0 && (
              <section>
                <h2 className="text-2xl font-bold text-black mb-6 font-serif">Resources</h2>
                <div className="space-y-4">
                  {project.Links.map((link, idx) => (
                    <div key={idx} className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-500">
                      <h3 className="text-lg font-semibold text-black mb-2">{link.title}</h3>
                      <a 
                        href={link.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-amber-700 hover:text-amber-900 underline font-medium"
                      >
                        {link.content}
                      </a>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
} 