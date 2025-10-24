import { Github, Linkedin, Mail, Facebook, Award, BookOpen, Briefcase, Code, Trophy, ExternalLink, GraduationCap, School, Building2, Youtube } from 'lucide-react';

function App() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
              Ahmed Zubayer
            </h1>
            <div className="hidden md:flex gap-6">
              {['About', 'Education', 'Experience', 'Projects', 'Achievements', 'Skills', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-slate-600 hover:text-slate-900 transition-colors font-medium"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6 inline-block">
            <img
              src="/Ahmed_Zubayer.png"
              alt="Ahmed Zubayer"
              className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-slate-200 shadow-lg"
            />
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-4 text-slate-900">
            Ahmed Zubayer
          </h2>
          <p className="text-xl md:text-2xl text-slate-600 mb-6">
            B.Sc. Student in Industrial and Production Engineering, BUET
          </p>
          <p className="text-lg text-slate-500 mb-8 max-w-2xl mx-auto">
            Passionate problem solver with a track record in olympiads,
            science competitions, and innovative projects.
          </p>
          <div className="flex gap-4 justify-center">
            <a href="#contact" className="bg-slate-900 text-white px-8 py-3 rounded-lg hover:bg-slate-800 transition-colors font-medium">
              Get In Touch
            </a>
            <a href="#" className="border-2 border-slate-900 text-slate-900 px-8 py-3 rounded-lg hover:bg-slate-900 hover:text-white transition-colors font-medium inline-block">
              Download CV
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold mb-8 text-slate-900 flex items-center gap-3">
            <div className="w-1 h-8 bg-slate-900 rounded"></div>
            About Me
          </h3>
          <div className="text-lg text-slate-600 space-y-4 leading-relaxed">
            <p>
              I'm Ahmed Zubayer, currently pursuing my Bachelor's degree in Industrial and Production Engineering
              at Bangladesh University of Engineering and Technology (BUET). My academic journey has been
              marked by consistent excellence and a deep curiosity for science, mathematics, and technology.
            </p>
            <p>
              As a student of IPE at BUET, I see every problem as an opportunity for process improvement.
              My core strength lies in bridging theoretical engineering concepts with practical execution—from
              architecting the logic to applying systems analysis. I don't wait for formal roles; I actively seek challenges.
            </p>
            <p>
              From competing in olympiads to developing innovative projects,
              I thrive on challenges that push me to learn and grow. Currently focused on building a strong foundation
              in Operations Research, I am eager to contribute where creativity and analytical discipline are needed
              to deliver efficient, impactful results.
            </p>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold mb-12 text-slate-900 flex items-center gap-3">
            <BookOpen className="text-slate-900" size={32} />
            Education
          </h3>
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-6">
                <div className="bg-slate-100 p-4 rounded-xl flex-shrink-0">
                  <GraduationCap className="text-slate-700" size={40} />
                </div>
                <div className="flex-grow">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="text-2xl font-bold text-slate-900">
                        Bangladesh University of Engineering and Technology (BUET)
                      </h4>
                      <p className="text-slate-600 mt-1">B.Sc. in Industrial and Production Engineering</p>
                    </div>
                    <span className="text-slate-500 font-medium">Present</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-6">
                <div className="bg-blue-100 p-4 rounded-xl flex-shrink-0">
                  <Building2 className="text-blue-700" size={40} />
                </div>
                <div className="flex-grow">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="text-2xl font-bold text-slate-900">Notre Dame College</h4>
                      <p className="text-slate-600 mt-1">Higher Secondary Certificate (HSC)</p>
                    </div>
                    <span className="text-slate-500 font-medium">2023</span>
                  </div>
                  <div className="inline-block bg-emerald-50 text-emerald-700 px-4 py-2 rounded-lg font-semibold">
                    GPA 5.00
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-6">
                <div className="bg-emerald-100 p-4 rounded-xl flex-shrink-0">
                  <School className="text-emerald-700" size={40} />
                </div>
                <div className="flex-grow">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="text-2xl font-bold text-slate-900">Dhaka Residential Model College</h4>
                      <p className="text-slate-600 mt-1">Secondary School Certificate (SSC)</p>
                    </div>
                    <span className="text-slate-500 font-medium">2021</span>
                  </div>
                  <div className="inline-block bg-emerald-50 text-emerald-700 px-4 py-2 rounded-lg font-semibold">
                    GPA 5.00
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold mb-12 text-slate-900 flex items-center gap-3">
            <Briefcase className="text-slate-900" size={32} />
            Experience
          </h3>
          <div className="space-y-6">
            <div className="border-l-4 border-slate-900 pl-6 py-2">
              <h4 className="text-xl font-bold text-slate-900 mb-2">Private Tutor</h4>
              <p className="text-slate-600 mb-3">SSC & HSC Students • Present</p>
              <p className="text-slate-700">
                Providing personalized tutoring to secondary and higher secondary students, helping them
                excel in their academic pursuits through tailored teaching methods and continuous support.
              </p>
            </div>

            <div className="border-l-4 border-slate-900 pl-6 py-2">
              <h4 className="text-xl font-bold text-slate-900 mb-2">Volunteer - DRMC Math Club</h4>
              <p className="text-slate-600 mb-3">Dhaka Residential Model College • Previous</p>
              <p className="text-slate-700">
                Prepared olympiad and quiz questions for students, and actively participated in weekly workshops
                to promote mathematical thinking and problem-solving skills. Organized math competitions and
                events to foster a culture of analytical excellence.
              </p>
            </div>

            <div className="border-l-4 border-slate-900 pl-6 py-2">
              <h4 className="text-xl font-bold text-slate-900 mb-2">Content Creator - CREATION TUBE</h4>
              <p className="text-slate-600 mb-3">YouTube • Previous</p>
              <p className="text-slate-700">
                Built and managed a YouTube channel that grew to 1.25K subscribers, creating educational
                and engaging content focused on science, technology, and creative projects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold mb-12 text-slate-900 flex items-center gap-3">
            <Code className="text-slate-900" size={32} />
            Projects
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="flex items-start justify-between mb-4">
                <h4 className="text-xl font-bold text-slate-900">Cricket Guessing Game</h4>
                <Code size={24} className="text-slate-600" />
              </div>
              <p className="text-slate-600 mb-4">
                Developed a fully-functional text-based cricket simulation game in C++ with custom animations
                on the console screen, demonstrating creativity in game logic and user experience.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm font-medium">C++</span>
                <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm font-medium">Game Dev</span>
                <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm font-medium">Console</span>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="flex items-start justify-between mb-4">
                <h4 className="text-xl font-bold text-slate-900">Science Fair Projects</h4>
                <Trophy size={24} className="text-slate-600" />
              </div>
              <p className="text-slate-600 mb-4">
                Multiple award-winning projects showcased at various science fairs and project display
                competitions, focusing on innovative solutions and scientific inquiry.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm font-medium">Innovation</span>
                <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm font-medium">Research</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold mb-12 text-slate-900 flex items-center gap-3">
            <Trophy className="text-slate-900" size={32} />
            Achievements
          </h3>
          <div className="space-y-4">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-l-4 border-amber-500 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <Award className="text-amber-600 flex-shrink-0" size={28} />
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">
                    National Winner - Bangladesh Climate Science Olympiad
                  </h4>
                  <p className="text-slate-600 mb-1">2021</p>
                  <p className="text-slate-700">
                    Achieved national recognition by winning the Bangladesh Climate Science Olympiad,
                    demonstrating expertise in climate science and environmental awareness.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 border-l-4 border-slate-500 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <Trophy className="text-slate-600 flex-shrink-0" size={28} />
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">
                    Multiple Science Olympiad Wins
                  </h4>
                  <p className="text-slate-600 mb-1">School Years</p>
                  <p className="text-slate-700">
                    Consistently performed well in various science olympiads throughout school,
                    showcasing strong analytical and problem-solving abilities.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 border-l-4 border-slate-500 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <Award className="text-slate-600 flex-shrink-0" size={28} />
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">
                    Project Display Competition Awards
                  </h4>
                  <p className="text-slate-600 mb-1">Multiple Years</p>
                  <p className="text-slate-700">
                    Won several project display competitions, demonstrating ability to conceptualize,
                    develop, and present innovative solutions effectively.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-emerald-50 border-l-4 border-emerald-500 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <BookOpen className="text-emerald-600 flex-shrink-0" size={28} />
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">
                    Perfect GPA - SSC & HSC
                  </h4>
                  <p className="text-slate-600 mb-1">2021 & 2023</p>
                  <p className="text-slate-700">
                    Achieved GPA 5.00 in both SSC and HSC examinations, reflecting consistent academic excellence
                    and dedication to learning.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold mb-12 text-slate-900 flex items-center gap-3">
            <Code className="text-slate-900" size={32} />
            Skills
          </h3>
          <div className="flex flex-wrap gap-3 justify-center">
            <span className="bg-slate-900 text-white px-5 py-3 rounded-lg font-medium">Problem Solving</span>
            <span className="bg-slate-800 text-white px-5 py-3 rounded-lg font-medium">Systems Analysis</span>
            <span className="bg-slate-800 text-white px-5 py-3 rounded-lg font-medium">Operations Research</span>
            <span className="bg-slate-700 text-white px-5 py-3 rounded-lg font-medium">Process Improvement</span>
            <span className="bg-slate-700 text-white px-5 py-3 rounded-lg font-medium">C++</span>
            <span className="bg-slate-600 text-white px-5 py-3 rounded-lg font-medium">Teaching</span>
            <span className="bg-slate-600 text-white px-5 py-3 rounded-lg font-medium">Project Management</span>
            <span className="bg-slate-500 text-white px-5 py-3 rounded-lg font-medium">Content Creation</span>
            <span className="bg-slate-500 text-white px-5 py-3 rounded-lg font-medium">Analytical Thinking</span>
          </div>
        </div>
      </section>

      {/* Contact & Social Links */}
      <section id="contact" className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-3 text-slate-900">Let's Connect</h3>
          <p className="text-slate-600 mb-8 font-medium">Find me across the socials @thisiszubayer</p>
          <p className="text-lg text-slate-600 mb-12 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, or just having a chat
            about technology and innovation.
          </p>
          <div className="flex justify-center gap-6 flex-wrap">
            <a
              href="mailto:thisiszubayer@gmail.com"
              className="flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-lg hover:bg-slate-800 transition-colors font-medium"
            >
              <Mail size={20} />
              Email
            </a>
            <a
              href="https://www.facebook.com/thisiszubayer"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              <Facebook size={20} />
              Facebook
            </a>
            <a
              href="https://x.com/thisiszubayer"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-lg hover:bg-slate-800 transition-colors font-medium"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
              X (Twitter)
            </a>
            <a
              href="https://github.com/thisiszubayer"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-slate-800 text-white px-6 py-3 rounded-lg hover:bg-slate-700 transition-colors font-medium"
            >
              <Github size={20} />
              GitHub
            </a>
            <a
              href="https://www.youtube.com/@CREATIONTUBE"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors font-medium"
            >
              <Youtube size={20} />
              YouTube
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-slate-900 text-white text-center">
        <p className="text-slate-300">© 2025 Ahmed Zubayer. All rights reserved.</p>
        <p className="text-slate-400 mt-2">Built with passion and dedication</p>
      </footer>
    </div>
  );
}

export default App;
