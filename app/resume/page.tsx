import {
  Header,
  Heading,
  IconGithub,
  IconLinkedin,
  IconMail,
  IconMobile,
  SocialMediaLinks,
} from "@/components";
import { ibmPlexMono } from "@/styles/fonts";
import cx from "classnames";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lewis Nixon Resume 2025",
  description: "Read and download Lewis' resume here",
  openGraph: {
    title: "Lewis Nixon's Resume - The Loosley Typed Blog",
    description: "Read and download Lewis' resume here",
  },
};

export default async function ResumePage() {
  return (
    <div className="container mx-auto px-5 pb-6 print:p-0">
      <Header activeLink={Header.links.RESUME} />
      <div className="flex flex-col gap-4">
        <Heading
          className="print:hidden"
          level={Heading.levels.h1}
          value="Resume"
        />

        <div className="max-w-4xl border border-neutral-400 rounded-lg overflow-hidden leading-normal tracking-wide mb-4 print:border-0 print:w-full">
          <header className="bg-gradient-to-br from-primary to-secondary p-4 pt-8 md:p-8 pb-4 md:pb-4 print:pt-0">
            <Heading
              className="text-lime-500"
              level={Heading.levels.h2}
              value="Lewis Nixon"
            />
            <p className="text-lg mb-6">
              Lead Frontend Engineer & Product Developer
            </p>
            <div className="flex flex-col md:grid md:grid-cols-2 print:grid print:grid-cols-2 justify-center gap-4 md:gap-x-6 text-sm md:text-base">
              <div className="md:col-span-1 print:col-span-1 flex items-center gap-2">
                <IconLinkedin className="size-6" />
                <a
                  href="https://www.linkedin.com/in/lewisnixon/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  linkedin.com/in/lewisnixon
                </a>
              </div>
              <div className="md:col-span-1 print:col-span-1 flex items-center gap-2">
                <IconGithub className="size-6" />
                <a
                  href="https://github.com/kojinkai"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  github.com/kojinkai
                </a>
              </div>

              <div className="md:col-span-1 print:col-span-1 items-center gap-2 hidden print:flex">
                <IconMail className="size-6" />
                <span>lewis.c.nixon@protonmail.com</span>
              </div>

              <div className="md:col-span-1 print:col-span-1 items-center gap-2 hidden print:flex">
                <IconMobile className="size-6" />

                <span>+447815 052533</span>
              </div>
            </div>
          </header>

          <div className="p-4 md:p-8 flex flex-col gap-8">
            {/* Profile Section */}
            <section className="print-section order-1">
              <div className="relative mb-5">
                <Heading
                  className="pb-2 border-b-2 border-neutral-400"
                  level={Heading.levels.h3}
                  value="Profile"
                />
                <div className="absolute bottom-0 left-0 w-16 h-0.5 bg-lime-500"></div>
              </div>
              <p className="text-lg leading-relaxed prose-neutral dark:prose-invert">
                Dedicated and technically strong lead-level frontend engineer
                with over 14 years of experience building scalable, data-driven
                applications. I excel at balancing quality output with
                sustainable delivery pace while leading development teams and
                driving technical decision-making around data models and API
                design. Currently developing expertise in data analytics and
                product management to drive empirical product decisions within
                collaborative, growth-focused product teams.
              </p>
            </section>

            {/* Skills Section */}
            <section className="print-section order-3 print:order-2">
              <div className="relative mb-5">
                <Heading
                  className="pb-2 border-b-2 border-neutral-400"
                  level={Heading.levels.h3}
                  value="Technical Skills"
                />
                <div className="absolute bottom-0 left-0 w-16 h-0.5 bg-lime-500"></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 print:flex print:flex-col gap-4">
                <div className="rounded-lg border border-neutral-400">
                  <div className="p-5 rounded-lg border-l-4 border-lime-500 h-full print-border">
                    <Heading
                      className="mb-3 text-lime-500"
                      level={Heading.levels.h4}
                      value="Frontend Technologies"
                    />
                    <div className="flex flex-wrap gap-2">
                      <span className="border border-neutral-400 px-3 py-1 rounded-full text-sm font-medium">
                        React
                      </span>
                      <span className="border border-neutral-400 px-3 py-1 rounded-full text-sm font-medium">
                        TypeScript
                      </span>
                      <span className="border border-neutral-400 px-3 py-1 rounded-full text-sm font-medium">
                        Next.js
                      </span>
                      <span className="border border-neutral-400 px-3 py-1 rounded-full text-sm font-medium">
                        Angular
                      </span>
                      <span className="border border-neutral-400 px-3 py-1 rounded-full text-sm font-medium">
                        Tailwind CSS
                      </span>
                      <span className="border border-neutral-400 px-3 py-1 rounded-full text-sm font-medium">
                        Headless UI
                      </span>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg border border-neutral-400">
                  <div className="p-5 rounded-lg border-l-4 border-lime-500 h-full print-border">
                    <Heading
                      className="mb-3 text-lime-500"
                      level={Heading.levels.h4}
                      value="Workflow"
                    />
                    <div className="flex flex-wrap gap-2">
                      <span className="border border-neutral-400 px-3 py-1 rounded-full text-sm font-medium">
                        Jest/Vitest
                      </span>
                      <span className="border border-neutral-400 px-3 py-1 rounded-full text-sm font-medium">
                        Git Flow
                      </span>
                      <span className="border border-neutral-400 px-3 py-1 rounded-full text-sm font-medium">
                        Docker
                      </span>
                      <span className="border border-neutral-400 px-3 py-1 rounded-full text-sm font-medium">
                        Cypress
                      </span>
                      <span className="border border-neutral-400 px-3 py-1 rounded-full text-sm font-medium">
                        CI/CD
                      </span>
                      <span className="border border-neutral-400 px-3 py-1 rounded-full text-sm font-medium">
                        TDD
                      </span>
                      <span className="border border-neutral-400 px-3 py-1 rounded-full text-sm font-medium">
                        Sentry
                      </span>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg border border-neutral-400">
                  <div className="p-5 rounded-lg border-l-4 border-lime-500 h-full print-border">
                    <Heading
                      className="mb-3 text-lime-500"
                      level={Heading.levels.h4}
                      value="Backend & Data"
                    />
                    <div className="flex flex-wrap gap-2">
                      <span className="border border-neutral-400 px-3 py-1 rounded-full text-sm font-medium">
                        Node.js
                      </span>
                      <span className="border border-neutral-400 px-3 py-1 rounded-full text-sm font-medium">
                        Python
                      </span>
                      <span className="border border-neutral-400 px-3 py-1 rounded-full text-sm font-medium">
                        Django
                      </span>
                      <span className="border border-neutral-400 px-3 py-1 rounded-full text-sm font-medium">
                        GraphQL
                      </span>
                      <span className="border border-neutral-400 px-3 py-1 rounded-full text-sm font-medium">
                        REST APIs
                      </span>
                      <span className="border border-neutral-400 px-3 py-1 rounded-full text-sm font-medium">
                        SQL
                      </span>
                      <span className="border border-neutral-400 px-3 py-1 rounded-full text-sm font-medium">
                        Time-series Data
                      </span>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg border border-neutral-400">
                  <div className="p-5 rounded-lg border-l-4 border-lime-500 h-full print-border">
                    <Heading
                      className="mb-3 text-lime-500"
                      level={Heading.levels.h4}
                      value="Leadership & Product"
                    />
                    <div className="flex flex-wrap gap-2">
                      <span className="border border-neutral-400 px-3 py-1 rounded-full text-sm font-medium">
                        Scrum, Kanban
                      </span>
                      <span className="border border-neutral-400 px-3 py-1 rounded-full text-sm font-medium">
                        Data Analytics
                      </span>
                      <span className="border border-neutral-400 px-3 py-1 rounded-full text-sm font-medium">
                        Product Management
                      </span>
                      <span className="border border-neutral-400 px-3 py-1 rounded-full text-sm font-medium">
                        UX Design
                      </span>
                      <span className="border border-neutral-400 px-3 py-1 rounded-full text-sm font-medium">
                        Design Systems
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Experience Section */}
            <section className=" print-section order-2 print:order-3">
              <div className="relative mb-5">
                <Heading
                  className="pb-2 border-b-2 border-neutral-400"
                  level={Heading.levels.h3}
                  value="Professional Experience"
                />
                <div className="absolute bottom-0 left-0 w-16 h-0.5 bg-lime-500"></div>
              </div>

              <div className="mb-7 pb-6 border-b border-neutral-400 job-item">
                <div className="flex justify-between items-baseline mb-2 gap-2">
                  <h3 className="text-lg font-semibold">
                    Frontend Lead, UX/Product
                  </h3>
                  <span className="font-medium text-sm md:text-base">
                    Aug 2023 - Present
                  </span>
                </div>
                <div
                  className={cx(
                    ibmPlexMono.className,
                    "text-lg font-medium mb-3 text-lime-500"
                  )}
                >
                  CQuel Sustainability, Remote (UK)
                </div>
                <p className="leading-relaxed">
                  Leading frontend development at an early-stage startup
                  developing a marketplace and tendering platform for net zero
                  projects in commercial real estate. Contributing across the
                  full technology stack including TypeScript development,
                  Python/Django backend work, data modeling, and product
                  management. Developing strong data analytics skills to inform
                  product strategy and business model exploration. Built
                  mobile-first NextJS application with Headless UI, Tailwind
                  CSS, and ViTest. Set up AWS infrastructure and implemented
                  monitoring with Sentry for error tracking and performance
                  optimization. Leading user feedback analysis to drive growth
                  and evolve the startup into a sustainable business.
                </p>
              </div>

              <div className="mb-7 pb-6 border-b border-neutral-400 job-item">
                <div className="flex justify-between items-baseline mb-2 gap-2">
                  <h3 className="text-lg font-semibold">
                    Senior Software Engineer, UI/UX
                  </h3>
                  <span className="font-medium text-sm md:text-base">
                    Jan 2020 - Aug 2023
                  </span>
                </div>
                <div
                  className={cx(
                    ibmPlexMono.className,
                    "text-lg font-medium mb-3 text-lime-500"
                  )}
                >
                  CrateDB, Berlin
                </div>
                <p className="leading-relaxed">
                  Led frontend development for CrateDB&apos;s SaaS offering, a
                  complex time-series database platform. Drove significant UX
                  and visual design improvements including optimized deployment
                  flows, trial cluster implementation, Stripe payment
                  integration, and data ingestion features. Championed improved
                  team workflows for feature design and planning while ensuring
                  clear acceptance criteria. Created positive team culture while
                  maintaining high standards of collaboration and product
                  delivery. Gained expertise with Grafana, SQL, Kubernetes,
                  time-series data, and implemented comprehensive monitoring
                  using Sentry for application health tracking.
                </p>
              </div>

              <div className="mb-7 pb-6 border-b border-neutral-400 job-item">
                <div className="flex justify-between items-baseline mb-2 gap-2">
                  <h3 className="text-lg font-semibold">Senior UI Developer</h3>
                  <span className="font-medium text-sm md:text-base">
                    Mar 2018 - Dec 2019
                  </span>
                </div>
                <div
                  className={cx(
                    ibmPlexMono.className,
                    "text-lg font-medium mb-3 text-lime-500"
                  )}
                >
                  Edenspiekermann, Berlin
                </div>
                <p className="leading-relaxed">
                  Developed highly dynamic React + Redux and Angular TypeScript
                  applications for prestigious clients in content creation and
                  publishing. Built scalable, well-tested applications while
                  advancing GraphQL expertise and content strategy skills.
                  Provided coaching and mentorship to junior developers on Git
                  workflows and best practices. Collaborated with talented
                  product managers to break complex features into manageable
                  stories, set realistic scopes, and measure progress
                  effectively.
                </p>
              </div>

              <div className="mb-0 job-item">
                <div className="flex justify-between items-baseline mb-2 gap-2">
                  <h3 className="text-lg font-semibold">
                    Contract Frontend Developer
                  </h3>
                  <span className="font-medium text-sm md:text-base">
                    Jan 2016 - Sept 2017
                  </span>
                </div>
                <div
                  className={cx(
                    ibmPlexMono.className,
                    "text-lg font-medium mb-3 text-lime-500"
                  )}
                >
                  HSBC Digital, London
                </div>
                <p className="leading-relaxed">
                  Key developer responsible for scalable, well-tested Angular
                  applications within large-scale enterprise programs. Led agile
                  transformation initiatives and established TDD standards for
                  offshore development teams. Designed branching and release
                  workflows while scaling to 5 development teams. Collaborated
                  with cross-functional teams including design, QA, and
                  accessibility experts to deliver polished, guideline-compliant
                  UIs. Presented progress to management and sibling scrum teams,
                  gaining valuable experience in large-scale scrum delivery.
                </p>
              </div>
            </section>

            {/* Education Section */}
            <section className=" print-section order-4">
              <div className="relative mb-5">
                <Heading
                  className="pb-2 border-b-2 border-neutral-400"
                  level={Heading.levels.h3}
                  value="Education & Certifications"
                />

                <div className="absolute bottom-0 left-0 w-16 h-0.5 bg-lime-500"></div>
              </div>
              <div className="space-y-4">
                <div className="rounded-lg border border-neutral-400">
                  <div className="p-4 rounded-lg border-l-4 border-lime-500">
                    <Heading
                      className="mb-1 text-lime-500"
                      displayAs={Heading.levels.h5}
                      level={Heading.levels.h4}
                      value="Google UX Professional Certificate"
                    />

                    <div className="font-medium mb-1">
                      Google (Coursera Course)
                    </div>
                    <div className="text-sm">2023</div>
                  </div>
                </div>

                <div className="rounded-lg border border-neutral-400">
                  <div className="p-4 rounded-lg border-l-4 border-lime-500">
                    <Heading
                      className="mb-1 text-lime-500"
                      displayAs={Heading.levels.h5}
                      level={Heading.levels.h4}
                      value="BA (Hons) Humanities and Social Studies, 2:1"
                    />
                    <div className="font-medium mb-1">
                      Leeds Beckett University
                    </div>
                    <div className="text-sm">2001 - 2004</div>
                  </div>
                </div>

                <div className="rounded-lg border border-neutral-400">
                  <div className="p-4 rounded-lg border-l-4 border-lime-500">
                    <Heading
                      className="mb-1 text-lime-500"
                      displayAs={Heading.levels.h5}
                      level={Heading.levels.h4}
                      value="Advanced GNVQ Graphic Design"
                    />
                    <div className="font-medium mb-1">
                      West Cheshire College of Art
                    </div>
                    <div className="text-sm">1999 - 2001</div>
                  </div>
                </div>
              </div>
            </section>

            {/* Interests Section */}
            <section className="order-5 print-section">
              <div className="relative mb-5">
                <Heading
                  className="pb-2 border-b-2 border-neutral-400"
                  level={Heading.levels.h3}
                  value="Interests & Personal Development"
                />
                <div className="absolute bottom-0 left-0 w-16 h-0.5 bg-lime-500"></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 print:flex print:flex-col gap-4">
                <div className="rounded-lg border border-neutral-400">
                  <div className="p-4 rounded-lg border-l-4 border-lime-500 h-full">
                    <Heading
                      className="mb-2 text-lime-500"
                      displayAs={Heading.levels.h5}
                      level={Heading.levels.h4}
                      value="Music & Technology"
                    />

                    <div className="text-sm leading-relaxed">
                      Lifelong music enthusiast exploring music technology,
                      creating music with drum machines, guitar playing, and
                      vinyl record collecting.
                    </div>
                  </div>
                </div>

                <div className="rounded-lg border border-neutral-400">
                  <div className="p-4 rounded-lg border-l-4 border-lime-500 h-full">
                    <Heading
                      className="mb-2 text-lime-500"
                      displayAs={Heading.levels.h5}
                      level={Heading.levels.h4}
                      value="Visual Arts & Design"
                    />
                    <div className="text-sm leading-relaxed">
                      Passionate about pen and ink drawing with formal training
                      through online and in-person classes, complementing my
                      design and UX skills.
                    </div>
                  </div>
                </div>

                <div className="rounded-lg border border-neutral-400">
                  <div className="p-4 rounded-lg border-l-4 border-lime-500 h-full">
                    <Heading
                      className="mb-2 text-lime-500"
                      displayAs={Heading.levels.h5}
                      level={Heading.levels.h4}
                      value="Home & Interior Design"
                    />
                    <div className="text-sm leading-relaxed">
                      A homeowner developing interior design skills through
                      hands-on renovation projects.
                    </div>
                  </div>
                </div>

                <div className="rounded-lg border border-neutral-400">
                  <div className="p-4 rounded-lg border-l-4 border-lime-500 h-full">
                    <Heading
                      className="mb-2 text-lime-500"
                      displayAs={Heading.levels.h5}
                      level={Heading.levels.h4}
                      value="Active Lifestyle"
                    />
                    <div className="text-sm leading-relaxed">
                      Maintaining energy & physical and mental well-being
                      through regular yoga practice and trail running in local
                      hills.
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>

        <SocialMediaLinks />
      </div>
    </div>
  );
}
