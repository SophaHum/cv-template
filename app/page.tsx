"use client";
import Image from "next/image";
import { Mail, Phone, MapPin, Globe, Github, Linkedin } from "lucide-react";

function WorkExperience({
  title,
  company,
  period,
  responsibilities,
}: {
  title: string;
  company: string;
  period: string;
  responsibilities: string[];
}) {
  return (
    <div className="work-experience print:keep-together mb-6 print:mb-2 hover:bg-gray-50 p-4 rounded-lg transition-colors print:hover:bg-transparent print:p-0">
      <h3 className="text-xl font-semibold text-gray-900 print:text-[14px]">
        {title}
      </h3>
      <div className="text-base text-blue-600 print:text-[12px] mb-2 font-medium">
        {company} | {period}
      </div>
      <ul className="list-disc pl-5 text-base text-gray-700 space-y-2 marker:text-blue-500 print:text-[12px] print:space-y-0.5 print:marker:text-gray-500">
        {responsibilities.map((resp, index) => (
          <li key={index} className="pl-1">
            {resp}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Section({
  title,
  children,
  className = "",
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={`${className} mb-8 print:mb-2`}>
      <h2 className="text-2xl font-bold text-blue-900 mb-4 print:text-base print:mb-1 print:text-gray-900">
        {title}
      </h2>
      <div className="print:mt-1">{children}</div>
    </section>
  );
}

export default function CV() {
  return (
    <div className="min-h-screen p-4 flex justify-center items-center bg-gray-100 print:bg-white print:p-0">
      <div className="w-full max-w-[210mm]">
        <button
          onClick={() => window.print()}
          className="mb-4 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300 ease-in-out print:hidden"
        >
          Download CV as PDF
        </button>

        <div className="max-w-4xl mx-auto p-8 print:p-0 bg-white shadow-xl rounded-xl print:shadow-none print:rounded-none">
          <div className="print:min-h-0">
            <div className="bg-gradient-to-r from-blue-700 to-blue-900 text-white p-8 rounded-xl print:rounded-none print:p-4 shadow-lg print:shadow-none">
              <div className="flex items-center gap-6 print:gap-4">
                <div className="relative w-32 h-32 print:w-20 print:h-20 rounded-full overflow-hidden border-4 border-white/30 shadow-xl print:shadow-none print:border-2">
                  <Image
                    src="/Sopha.JPG"
                    alt="Profile"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h1 className="text-4xl print:text-3xl font-bold mb-2 print:mb-0">
                    HUM SOPHA
                  </h1>
                  <p className="text-2xl print:text-xl text-blue-200 font-medium">
                    Web Developer
                  </p>
                </div>
              </div>
              <div className="mt-6 print:mt-3 flex flex-wrap gap-4 print:gap-2 text-sm print:text-[12px]">
                <ContactInfo
                  icon={<Mail className="w-5 h-5 print:w-4 print:h-4" />}
                  text="sopha.humm@gmail.com"
                />
                <ContactInfo
                  icon={<Phone className="w-5 h-5 print:w-4 print:h-4" />}
                  text="015-607-950"
                />
                <ContactInfo
                  icon={<MapPin className="w-5 h-5 print:w-4 print:h-4" />}
                  text="Somkol sal II, Beng Topun, Mean Chey, Phnom penh"
                />
                <ContactInfo
                  icon={<Globe className="w-5 h-5 print:w-4 print:h-4" />}
                  text="https://hum-sopha.vercel.app"
                  link="https://hum-sopha.vercel.app"
                />
                <ContactInfo
                  icon={<Github className="w-5 h-5 print:w-4 print:h-4" />}
                  text="GitHub"
                  link="https://github.com/SophaHum"
                />
                <ContactInfo
                  icon={<Linkedin className="w-5 h-5 print:w-4 print:h-4" />}
                  text="LinkedIn"
                  link="https://www.linkedin.com/in/sopha-hum-b288a419a"
                />
              </div>
            </div>

            <div className="p-8 print:p-0 print:mt-2">
              <Section title="Professional Summary">
                <p className="text-base print:text-[12px] text-gray-700 leading-relaxed">
                  Results-driven Web Developer with over 4 years of experience
                  at Peth Yoeung Co., Ltd, demonstrating progressive growth from
                  intern to full-fledged developer. Proven expertise in
                  developing and maintaining high-performance web applications,
                  with a strong focus on code optimization and feature
                  implementation. Distinguished track record in systems
                  integration, particularly in implementing secure payment
                  gateways with banking institutions. Demonstrated leadership
                  through successful mentorship of junior developers or
                  internships. and significant contributions to the
                  organization&apos;s growth and success.
                </p>
              </Section>

              <Section
                title="Professional Experience"
                className="print:break-inside-avoid"
              >
                <div className="space-y-4">
                  <WorkExperience
                    title="Web Developer"
                    company="Peth Yoeung Co., Ltd"
                    period="December 2023 - Present"
                    responsibilities={[
                      "Lead the development and optimization of enterprise-level web applications using modern JavaScript frameworks and Laravel",
                      "Spearhead the implementation of secure payment gateway integrations with multiple banking institutions",
                      "Mentor junior developers and conduct regular code reviews to maintain high code quality standards",
                      "Drive technical architecture decisions and implement best practices for scalable application development",
                      "Collaborate with cross-functional teams to deliver innovative solutions that enhance user experience",
                      "Responsible for the complexity and flexibility of the client's issues and ensure the development of web applications with high performance and scalability",
                    ]}
                  />
                  <WorkExperience
                    title="Junior Web Developer"
                    company="Peth Yoeung Co., Ltd"
                    period="May 2021 - December 2023"
                    responsibilities={[
                      "Engineered robust web applications utilizing Laravel, JavaScript, and PostgreSQL, ensuring scalability and performance",
                      "Partnered with senior developers to implement complex features and resolve critical issues efficiently",
                      "Led code review initiatives, contributing significantly to improved development processes and code quality",
                      "Successfully executed the migration of legacy systems to modern web technologies, resulting in enhanced performance",
                      "Implemented responsive design principles, optimizing user experience across all devices and platforms",
                    ]}
                  />
                  <WorkExperience
                    title="Web Development Intern"
                    company="Peth Yoeung Co., Ltd"
                    period="December 2020 - May 2021"
                    responsibilities={[
                      "Developed web applications using HTML, CSS, JavaScript, and Laravel(PHP) under senior developer mentorship",
                      "Designed and implemented responsive user interfaces that enhanced overall project usability",
                      "Implemented industry best practices in web development, version control, and collaborative coding",
                      "Actively contributed to team discussions and problem-solving sessions with innovative solutions",
                      "Mastered Git version control workflows and collaborative development practices",
                      "Gained practical experience in Agile methodologies and project management tools",
                    ]}
                  />
                </div>
              </Section>

              <Section
                title="Personal Projects"
                className="print:break-inside-avoid page-break-before-auto"
              >
                <ul className="list-disc pl-5 text-sm text-gray-700 space-y-2 marker:text-gray-500">
                  <li>
                    <span className="font-medium">User Management Application</span>
                    <p>A full-stack application using Go for the backend API and Next.js for the frontend. Implemented secure user authentication, role-based access control, and CRUD operations. Features include user profile management, admin dashboard, and API rate limiting.</p>
                  </li>
                  <li>
                    <span className="font-medium">Real-time Chat Application</span>
                    <p>Built a modern chat application using Laravel and Vue.js with WebSocket integration. Implemented features including real-time message delivery, user authentication, message history, and real-time notifications. Designed with responsive UI for seamless communication across devices.</p>
                  </li>
                  <li>
                    <span className="font-medium">Point-Of-Sale System</span>
                    <p>Created a modern POS system using Laravel and Vue.js. Implemented features for inventory management, sales tracking, receipt generation, and real-time reporting. Designed responsive UI.</p>
                  </li>
                  <li>
                    <span className="font-medium">E-commerce Platform with Microservices</span>
                    <p>Developed a scalable e-commerce platform using microservices architecture. Built with Node.js, Docker, and Kubernetes. Implemented services for product catalog, shopping cart, payment processing, and order management. Integrated with Stripe for payments and Redis for caching.</p>
                  </li>
                  <li>
                    <span className="font-medium">Basic DevOps Learning Project</span>
                    <p>Built a simple but effective CI/CD pipeline using GitHub Actions for automation. Containerized a Node.js application using Docker, implemented basic monitoring with Prometheus and Grafana. Used Docker Compose for local development and testing. Focused on learning core DevOps concepts including containerization, continuous integration, and basic monitoring.</p>
                  </li>
                </ul>
              </Section>

              <Section
                title="Skills"
                className="print:break-inside-avoid page-break-before-auto"
              >
                <div className="grid grid-cols-3 gap-6">
                  <SkillCategory
                    title="Front-End"
                    skills={[
                      "HTML5",
                      "CSS3",
                      "Tailwind CSS",
                      "JavaScript ES6",
                      "TypeScript",
                      "React.js",
                      "Vue.js",
                      "Next.js",
                      "Nuxt.js",
                      "Astro.js",
                    ]}
                  />
                  <SkillCategory
                    title="Back-End"
                    skills={[
                      "Node.js",
                      "PHP",
                      "Golang",
                      "Python",
                      "Java",
                      "C#",
                      "PostgreSQL",
                      "MySQL",
                    ]}
                  />
                  <SkillCategory
                    title="DevOps"
                    skills={[
                      "Linux OS",
                      "Git",
                      "GitHub",
                      "Docker",
                      "Jenkins",
                      "Ansible",
                      "Kubernetes",
                      "Grafana",
                      "AWS",
                      "Vercel",
                    ]}
                  />
                </div>
              </Section>

              <Section
                title="Education"
                className="print:break-inside-avoid page-break-before-auto"
              >
                <Education
                  degree="Bachelor of Science in Software Engineering"
                  school="Royal University of Phnom Penh"
                  period="2017 - 2021"
                />
                <Education
                  degree="English Language (Level 1)"
                  school="Australian Centre for Education (ACE)"
                  period="2018 - 2019"
                />
              </Section>

              <Section title="Achievements">
                <ul className="list-disc pl-5 text-sm text-gray-700 space-y-2 marker:text-gray-500">
                  <li>
                    Hard Work Certificate - Awarded for successfully completing
                    an urgent project overnight
                  </li>
                  <li>
                    3-Year Service Recognition - Awarded for dedicated service
                    at Peth Yoeung Co., Ltd (2023)
                  </li>
                  <li>
                    Web Development Professional Certificate - Awarded upon
                    completion of internship at Peth Yoeung Co., Ltd (2021)
                  </li>
                </ul>
              </Section>

              <Section title="Languages">
                <ul className="list-disc pl-5 text-sm text-gray-700 space-y-2 marker:text-gray-500">
                  <li>Khmer (Native)</li>
                  <li>English (Professional working proficiency)</li>
                </ul>
              </Section>

              <Section title="References">
                <p className="text-sm text-gray-700">Available upon request.</p>
              </Section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ContactInfo({
  icon,
  text,
  link,
}: {
  icon: React.ReactNode;
  text: string;
  link?: string;
}) {
  const content = (
    <div className="flex items-center gap-2 hover:text-blue-200 transition-colors">
      {icon}
      <span>{text}</span>
    </div>
  );

  return link ? (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-blue-200 transition-colors"
    >
      {content}
    </a>
  ) : (
    content
  );
}

function SkillCategory({ title, skills }: { title: string; skills: string[] }) {
  return (
    <div className="print:break-inside-avoid bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition-colors print:bg-transparent print:p-0 print:hover:bg-transparent">
      <h3 className="text-lg font-semibold text-blue-900 mb-3 print:text-[14px] print:text-gray-900 print:mb-1">
        {title}
      </h3>
      <ul className="space-y-1.5 print:space-y-0.5">
        {skills.map((skill, index) => (
          <li key={index} className="text-base text-gray-700 print:text-[12px]">
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Education({
  degree,
  school,
  period,
}: {
  degree: string;
  school: string;
  period: string;
}) {
  return (
    <div className="mb-4 last:mb-0 hover:bg-gray-50 p-4 rounded-lg transition-colors print:hover:bg-transparent print:p-0">
      <h3 className="text-lg font-semibold text-gray-900 print:text-[14px]">
        {degree}
      </h3>
      <p className="text-base text-blue-600 print:text-[12px] mb-1 font-medium">
        {school}
      </p>
      <p className="text-base text-gray-600 print:text-[12px]">{period}</p>
    </div>
  );
}
