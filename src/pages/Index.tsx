import profileImg from "@/assets/profile.jpg";
import { Mail, Phone, MapPin, Github, GraduationCap, Briefcase, Award, Globe, Star, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.5, ease: "easeOut" as const } }),
};

const Section = ({ title, icon: Icon, children, defaultOpen = true }: { title: string; icon: React.ElementType; children: React.ReactNode; defaultOpen?: boolean }) => {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <section className="mb-10">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-3 mb-5 w-full group cursor-pointer"
      >
        <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
          <Icon className="w-5 h-5 text-primary" />
        </div>
        <h2 className="text-xl font-bold text-[hsl(var(--cv-heading))] tracking-tight">{title}</h2>
        <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.25 }} className="ml-auto">
          <ChevronDown className="w-5 h-5 text-muted-foreground" />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

const TimelineItem = ({ title, org, period, children }: { title: string; org?: string; period: string; children?: React.ReactNode }) => (
  <motion.div
    className="relative pl-6 pb-6 last:pb-0 border-l-2 border-[hsl(var(--cv-timeline))] group"
    initial={{ opacity: 0, x: -12 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, margin: "-40px" }}
    transition={{ duration: 0.4 }}
  >
    <div className="absolute -left-[7px] top-1 w-3 h-3 rounded-full bg-primary border-2 border-card group-hover:scale-150 transition-transform duration-200" />
    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1">
      <h3 className="font-semibold text-foreground">{title}{org && <span className="text-[hsl(var(--cv-subheading))]">, {org}</span>}</h3>
      <span className="text-sm text-muted-foreground whitespace-nowrap">{period}</span>
    </div>
    {children && <p className="text-muted-foreground text-sm leading-relaxed mt-1">{children}</p>}
  </motion.div>
);

const SkillBadge = ({ children, index }: { children: React.ReactNode; index: number }) => (
  <motion.span
    className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-accent text-accent-foreground cursor-default hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
    custom={index}
    variants={fadeUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
  >
    {children}
  </motion.span>
);

const Index = () => {
  return (
    <div className="min-h-screen bg-background py-8 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <motion.header
          className="bg-card rounded-2xl p-6 sm:p-8 shadow-sm border border-border mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start">
            <motion.img
              src={profileImg}
              alt="Olof Ljunggren"
              className="w-28 h-28 rounded-2xl object-cover shadow-md hover:shadow-xl transition-shadow duration-300"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
            <div className="text-center sm:text-left flex-1">
              <h1 className="text-3xl font-extrabold text-foreground tracking-tight">Olof Ljunggren</h1>
              <p className="text-[hsl(var(--cv-subheading))] font-medium mt-1">MSc Student in Applied Physics and Electrical Engineering</p>
              <div className="flex flex-wrap justify-center sm:justify-start gap-x-5 gap-y-2 mt-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4" />Linköping, Sweden</span>
                <a href="tel:+46734400134" className="flex items-center gap-1.5 hover:text-primary transition-colors"><Phone className="w-4 h-4" />+46 73 440 0134</a>
                <a href="mailto:oloflj.linkoping@gmail.com" className="flex items-center gap-1.5 hover:text-primary transition-colors"><Mail className="w-4 h-4" />oloflj.linkoping@gmail.com</a>
                <a href="https://github.com/" className="flex items-center gap-1.5 hover:text-primary transition-colors"><Github className="w-4 h-4" />GitHub</a>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-border">
            <p className="text-muted-foreground leading-relaxed">
              Fifth-year master student specializing in Signal and Image Processing. Passionate about math and solving problems through programming, with strong experience in Git, MATLAB, Python, and C++. Also familiar with C, Rust, Bash, and JavaScript.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 mt-4">
            {["Python", "MATLAB", "C++", "Rust", "C", "Git", "Bash", "JavaScript", "Django"].map((s, i) => (
              <SkillBadge key={s} index={i}>{s}</SkillBadge>
            ))}
          </div>
        </motion.header>

        <motion.div
          className="bg-card rounded-2xl p-6 sm:p-8 shadow-sm border border-border"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Strengths & Languages */}
          <div className="grid sm:grid-cols-2 gap-8 mb-10">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <Star className="w-5 h-5 text-primary" />
                <h2 className="font-bold text-[hsl(var(--cv-heading))]">Strengths</h2>
              </div>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Ability to adapt to a team</li>
                <li>• Analytical thinking skills</li>
                <li>• Organizational skills</li>
                <li>• Problem solving</li>
              </ul>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-3">
                <Globe className="w-5 h-5 text-primary" />
                <h2 className="font-bold text-[hsl(var(--cv-heading))]">Languages</h2>
              </div>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Swedish</li>
                <li>• English</li>
                <li>• German</li>
              </ul>
            </div>
          </div>

          <Section title="Employment History" icon={Briefcase}>
          <TimelineItem title="Systems Engineer" org="Xamera (Saab Dynamics AB)" period="Aug 2025 – Present">
          Consultant at Saab through Xamera talent program. Working with Business Unit Missile Systems developement and systems engineering.
            </TimelineItem>
            <TimelineItem title="Master Thesis" org="Maxar" period="Jan 2025 – Jun 2025">
              Work with monocular depth estimation to potentially improve satellite imagery 3D.
            </TimelineItem>
            <TimelineItem title="Teacher Assistant TSDT18" org="LiU" period="Oct 2024 – Dec 2024">
              Teacher assistant in the third-year course Signals and Systems. Responsible for explaining signal processing to undergraduate students and evaluating their lab work.
            </TimelineItem>
            <TimelineItem title="Summer Internship" org="Maxar" period="Jun 2024 – Aug 2024">
              Worked with Ground Control Points for 3D precision evaluation. Found suitable images and matched them with survey data points using scripts and manual processing.
            </TimelineItem>
            <TimelineItem title="Map Manager" org="Linköpings OK" period="Feb 2021 – Present">
              Maintaining and updating orienteering maps, supplying club members with map files, and planning future map projects and events.
            </TimelineItem>
            <TimelineItem title="Orienteering Cartographer" org="Linköping" period="Jun 2020 – Present">
              Drawing orienteering maps for private business, including municipal project HittaUt, school maps, and non-profitable work within the orienteering club.
            </TimelineItem>
            <TimelineItem title="Web Developer" org="Y-section Web Committee" period="Aug 2022 – Jun 2023">
              Worked ~4 hours/week on the Y-section website with backend and frontend development in Django, HTML, and JS.
            </TimelineItem>
            <TimelineItem title="Event Manager" org="Y-section Business Committee" period="Aug 2021 – Jun 2022">
              Planned lunch lectures and evening activities at companies, including ideation, company contact, and event execution.
            </TimelineItem>
          </Section>

          <Section title="Education" icon={GraduationCap}>
            <TimelineItem title="MSc Applied Physics & Electrical Engineering" org="Linköpings universitet" period="Aug 2020 – Jun 2025">
              Master specialization in Signal and Image Processing. Completed a Bachelor in electronics with GUI/network programming in Python and I/O programming in C. Selected for the elite orienteering training group.
            </TimelineItem>
            <TimelineItem title="Exchange Studies" org="NTNU, Trondheim" period="Aug 2023 – Jun 2024">
              Signal processing, machine learning, robotics, and computer vision. Also undertook a self-study doctoral-level course in signal estimation theory.
            </TimelineItem>
            <TimelineItem title="Information & Media Technology" org="Eksjö Gymnasium" period="Aug 2017 – Jun 2020">
              RIG Eksjö — one of three national orienteering educations in Sweden. Combined elite training with studies in the Technical programme. First C++ and Python projects.
            </TimelineItem>
          </Section>

          <Section title="Awards" icon={Award}>
            <TimelineItem title="Qualcomm 2024 Scholarship" org="Linköpings universitet" period="Jan 2025">
              Scholarship for excellent academic results and funding for the 2025 IEEE CVPR conference in Nashville.
            </TimelineItem>
          </Section>
        </motion.div>

        <footer className="text-center text-xs text-muted-foreground mt-6 pb-4">
          © {new Date().getFullYear()} Olof Ljunggren
        </footer>
      </div>
    </div>
  );
};

export default Index;
