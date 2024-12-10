'use client'
import Image from 'next/image'
import { Mail, Phone, MapPin, Globe, Github, Linkedin } from 'lucide-react'

function WorkExperience({ title, company, period, responsibilities }: { title: string; company: string; period: string; responsibilities: string[] }) {
  return (
    <div className="work-experience print:keep-together mb-8">
      <div className="print:keep-together">
        <h4 className="text-lg font-semibold mb-1">{title}</h4>
        <p className="text-sm text-gray-600 mb-2">{company} | {period}</p>
        <ul className="list-disc pl-5 text-sm text-gray-700 space-y-2 marker:text-gray-500">
          {responsibilities.map((resp, index) => (
            <li key={index} className="pl-1">
              {resp}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

function Section({ title, children, className = "" }: { title: string; children: React.ReactNode; className?: string }) {
  return (
    <section className={`print:keep-together mb-6 ${className}`}>
      <h3 className="text-xl font-bold mb-3 text-blue-800 print:text-black">{title}</h3>
      <div className="print:keep-together">
        {children}
      </div>
    </section>
  )
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

        <div className="bg-white shadow-2xl rounded-lg overflow-hidden print:shadow-none print:rounded-none">
          <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8 print:bg-blue-700 print:bg-none print:py-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold print:text-black">HUM SOPHA</h1>
                <h2 className="text-xl mt-2 print:text-black">Web Developer</h2>
              </div>
              <Image
                src="/Sopha.JPG"
                alt="Profile"
                width={130}
                height={130}
                className="rounded-full border-4 border-white print:border-2"
              />
            </div>
            <div className="mt-4 flex flex-wrap gap-4 text-sm print:text-black">
              <ContactInfo icon={<Mail size={16} />} text="sopha.humm@gmail.com" />
              <ContactInfo icon={<Phone size={16} />} text="015-607-950" />
              <ContactInfo icon={<MapPin size={16} />} text="Somkol sal II, Beng Topun, Mean Chey, Phnom penh" />
              <ContactInfo icon={<Globe size={16} />} text="https://sophahum.vercel.app" link="https://sophahum.vercel.app" />
              <ContactInfo icon={<Github size={16} />} text="GitHub" link="https://github.com/yourusername" />
              <ContactInfo icon={<Linkedin size={16} />} text="LinkedIn" link="https://linkedin.com/in/yourusername" />
            </div>
          </header>

          <main className="p-8 print:p-6">
            <Section title="Professional Summary">
              <p className="text-sm text-gray-700">
                Dedicated Web developer with over 4 years of professional experience at Peth Yoeung Co., Ltd. Progressed from intern to web developer, demonstrating strong leadership with learning and technical skills. Expertise in developing and building web applications, maintaining web applications, optimizing code for performance, and implementing new features. Proven track record of successfully integrating complex systems, such as API payments with banks, and mentoring junior developers.
              </p>
            </Section>

            <Section title="Work Experience">
              <div className="space-y-6 print:keep-together">
                <WorkExperience
                  title="Web Developer"
                  company="Peth Yoeung Co., Ltd"
                  period="December 2023 - Present"
                  responsibilities={[
                    "Lead and manage web development projects, collaborating with cross-functional teams to ensure timely delivery of high-quality applications",
                    "Spearhead code optimization initiatives, resulting in a 30% improvement in application performance and responsiveness",
                    "Design and implement new features based on user feedback, enhancing overall user experience and satisfaction",
                    "Successfully integrated API payment systems with multiple banks, streamlining financial transactions and improving system efficiency",
                    "Mentor junior developers, conduct code reviews, and facilitate knowledge sharing sessions to elevate team skills and productivity"
                  ]}
                />
                <WorkExperience
                  title="Junior Web Developer"
                  company="Peth Yoeung Co., Ltd"
                  period="June 2021 - December 2023"
                  responsibilities={[
                    "Developed and maintained web applications using Laravel, JavaScript, and PostgreSQL, ensuring robust and scalable solutions",
                    "Collaborated closely with senior developers to implement complex features and resolve critical issues in a timely manner",
                    "Actively participated in code reviews, contributing to the improvement of development processes and code quality standards",
                    "Assisted in the successful migration of legacy systems to modern web technologies, improving system performance and maintainability",
                    "Implemented responsive design principles, ensuring optimal user experience across various devices and screen sizes"
                  ]}
                />
              </div>
            </Section>

            <Section title="Projects">
              <ul className="list-disc pl-5 text-sm text-gray-700 space-y-2 marker:text-gray-500">
                <li>
                  Developed a full-stack e-commerce application using Laravel, Vue.js, and PostgreSQL. This project involved designing the database schema, implementing the API, and creating the front-end user interface.
                </li>
                <li>
                  Built a responsive web application for a non-profit organization using React.js, Node.js, and MongoDB. This project involved working with a team to design, develop, and deploy the application.
                </li>
                <li>
                  Created a web application for managing tasks using Next.js, and PostgreSQL. This project involved implementing features such as user authentication, task management, and reporting.
                </li>
              </ul>
            </Section>

            <Section title="Skills">
              <div className="grid grid-cols-2 gap-6">
                <SkillCategory
                  title="Front-End"
                  skills={["HTML5", "CSS3", "JavaScript ES6", "React.js", "Vue.js", "Next.js", "Nuxt.js", "Astro.js", "Tailwind CSS"]}
                />
                <SkillCategory
                  title="Back-End"
                  skills={["Node.js", "PHP (Laravel)", "PostgreSQL", "MySQL", "Docker", "Linux OS"]}
                />
              </div>
            </Section>

            <Section title="Education">
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
                <li>Hard Work Certificate - Awarded for successfully completing an urgent project overnight</li>
                <li>3-Year Service Recognition - Awarded for dedicated service at Peth Yoeung Co., Ltd (2023)</li>
                <li>Web Development Professional Certificate - Awarded upon completion of internship at Peth Yoeung Co., Ltd (2021)</li>
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
          </main>
        </div>
      </div>
    </div>
  )
}

function ContactInfo({ icon, text, link }: { icon: React.ReactNode; text: string; link?: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="flex-shrink-0">{icon}</span>
      {link ? (
        <a href={link} target="_blank" rel="noopener noreferrer" className="hover:underline">
          {text}
        </a>
      ) : (
        <span>{text}</span>
      )}
    </div>
  )
}


function SkillCategory({ title, skills }: { title: string; skills: string[] }) {
  return (
    <div className="print:break-inside-avoid">
      <h4 className="text-base font-semibold mb-2">{title}</h4>
      <ul className="list-disc pl-5 text-sm text-gray-700 space-y-2 marker:text-gray-500">
        {skills.map((skill, index) => (
          <li key={index} className="pl-1">{skill}</li>
        ))}
      </ul>
    </div>
  )
}

function Education({ degree, school, period }: { degree: string; school: string; period: string }) {
  return (
    <div className="mb-3 print:break-inside-avoid">
      <h4 className="text-base font-semibold">{degree}</h4>
      <p className="text-sm text-gray-600">{school} | {period}</p>
    </div>
  )
}
