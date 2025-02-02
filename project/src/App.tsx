import { useState, useEffect } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { Github, Linkedin, Code2, Download, ExternalLink } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { projects, education, achievements, experience } from './data';
import naman from './assets/naman.jpg';
import { Footer } from './components/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    // Check if there's a saved theme preference in localStorage
    const savedTheme = localStorage.getItem('theme');
    // Return true for dark mode if saved as 'dark' or if no preference (default to dark)
    return savedTheme ? savedTheme === 'dark' : true;
  });

  useEffect(() => {
    // Update the DOM and localStorage when theme changes
    if (darkMode) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`min-h-screen ${
      darkMode 
        ? 'bg-[#0a192f] text-gray-300' 
        : 'bg-white text-black'
    }`}>
      <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center px-8 md:px-24 max-w-7xl mx-auto pt-24">
        <div className="grid md:grid-cols-2 gap-12 items-center w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4 order-2 md:order-1"
          >
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className={`font-mono text-lg ${
                darkMode ? 'text-[#64ffda]' : 'text-blue-600'
              }`}
            >
              Hi, my name is
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className={`text-5xl md:text-7xl font-bold ${
                darkMode ? 'text-[#ccd6f6]' : 'text-black'
              }`}
            >
              Naman Verma.
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className={`text-4xl md:text-6xl font-bold ${
                darkMode ? 'text-[#8892b0]' : 'text-black/80'
              }`}
            >
              I build things for the web.
            </motion.h2>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="max-w-xl"
            >
              <TypeAnimation
                sequence={[
                  'MERN Stack Developer',
                  2000,
                  'Frontend Specialist',
                  2000,
                  'Aspiring Software Engineer',
                  2000,
                ]}
                wrapper="div"
                repeat={Infinity}
                className={`text-xl ${
                  darkMode ? 'text-[#64ffda]' : 'text-blue-600'
                }`}
              />
              <p className={`mt-4 text-lg ${
                darkMode ? 'text-[#8892b0]' : 'text-black/80'
              }`}>
                I'm a 3rd year engineering student specializing in building exceptional digital experiences.
                Currently, I'm focused on building accessible, human-centered products.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex space-x-6 mt-8"
            >
              <a
                href="/your-cv.pdf"
                className={`px-6 py-3 border rounded transition-colors duration-300 flex items-center gap-2 ${
                  darkMode 
                    ? 'border-[#64ffda] text-[#64ffda] hover:bg-[#64ffda]/10' 
                    : 'border-blue-600 text-blue-600 hover:bg-blue-50'
                }`}
              >
                <Download className="w-4 h-4" /> Resume
              </a>
              <div className="flex space-x-6">
                <a
                  href="https://github.com/namanverma001"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`transition-colors duration-300 ${
                    darkMode 
                      ? 'text-[#8892b0] hover:text-[#64ffda]' 
                      : 'text-black/70 hover:text-blue-600'
                  }`}
                >
                  <Github className="w-6 h-6" />
                </a>
                <a
                  href="https://www.linkedin.com/in/naman-verma-824baa257/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`transition-colors duration-300 ${
                    darkMode 
                      ? 'text-[#8892b0] hover:text-[#64ffda]' 
                      : 'text-black/70 hover:text-blue-600'
                  }`}
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a
                  href="https://leetcode.com/namanverma01"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`transition-colors duration-300 ${
                    darkMode 
                      ? 'text-[#8892b0] hover:text-[#64ffda]' 
                      : 'text-black/70 hover:text-blue-600'
                  }`}
                >
                  <Code2 className="w-6 h-6" />
                </a>
              </div>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="order-1 md:order-2"
          >
            <div className="relative group">
              <img
                src={naman}
                alt="Naman Verma"
                className="rounded-full w-72 h-72 mx-auto object-cover"
              />
              <div className="absolute inset-0 border-2 border-[#64ffda] rounded-full translate-x-4 translate-y-4 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-8 md:px-24 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-3xl"
        >
          <h2 className={`text-3xl font-bold mb-8 ${darkMode ? 'text-[#ccd6f6]' : 'text-black'}`}>About Me</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 text-[#8892b0] space-y-4">
              <p>
                Hello! My name is Naman Verma, and I enjoy creating things that live on the internet.
                My interest in web development started back in 2022 when I decided to try building my first website.
                That simple portfolio site taught me a lot about HTML, CSS, and JavaScript, sparking my passion for development!
              </p>
              <p>
                I am currently a BTech student and a MERN stack developer.
                I specialize in building exceptional digital experiences, focusing on accessibility and human-centered design.
                I enjoy transforming ideas into functional and visually appealing solutions.
              </p>
              <p>
                I am passionate about honing my skills, exploring new technologies, and contributing to meaningful projects in the field of web development.
              </p>

              <p>Here are a few technologies I've been working with recently:</p>
              <ul className="grid grid-cols-2 gap-2 text-sm">
                {['JavaScript', 'React', 'Node.js', 'Tailwind CSS', 'MongoDB', 'Express JS'].map((tech) => (
                  <li key={tech} className="flex items-center gap-2">
                    <span className={`${
                      darkMode ? 'text-[#64ffda]' : 'text-blue-600'
                    }`}>▹</span> {tech}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative group">
              <div className="relative z-10">
                <img
                  src={naman}
                  alt="Naman Verma"
                  className="rounded"
                />
                <div className="absolute inset-0 border-2 border-[#64ffda] rounded translate-x-4 translate-y-4 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300"></div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-8 md:px-24 max-w-7xl mx-auto">
        <div className="max-w-3xl">
          <h2 className={`text-3xl font-bold mb-8 ${darkMode ? 'text-[#ccd6f6]' : 'text-black'}`}>Education</h2>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={`p-6 rounded border ${
                  darkMode 
                    ? 'border-[#233554] hover:border-[#64ffda] bg-[#112240]/50' 
                    : 'border-blue-100 hover:border-blue-500 bg-white shadow-sm'
                } transition-colors duration-300`}
              >
                <h3 className="text-xl font-bold text-[#ccd6f6]">{edu.degree}</h3>
                <p className="text-[#8892b0]">{edu.institution}</p>
                <p className="text-[#8892b0]">{edu.year}</p>
                <p className="text-[#64ffda]">{edu.score}</p>
                {edu.details?.marks && (
                  <ul className="list-disc list-inside text-[#64ffda]">
                    {Object.entries(edu.details.marks).map(([subject, mark]) => (
                      <li key={subject}>
                        {subject}: {mark}
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-8 md:px-24 max-w-7xl mx-auto">
        <div className="max-w-3xl">
          <h2 className={`text-3xl font-bold mb-8 ${darkMode ? 'text-[#ccd6f6]' : 'text-black'}`}>Experience</h2>
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={`p-6 rounded border ${
                  darkMode 
                    ? 'border-[#233554] hover:border-[#64ffda] bg-[#112240]/50' 
                    : 'border-blue-100 hover:border-blue-500 bg-white shadow-sm'
                } transition-colors duration-300`}
              >
                <h3 className="text-xl font-bold text-[#ccd6f6]">{exp.role}</h3>
                <p className="text-[#8892b0]">{exp.company}</p>
                <p className="text-[#8892b0]">{exp.duration}</p>
                <p className="text-[#8892b0]">{exp.Location}</p>
                <ul className="list-disc list-inside text-[#64ffda] mt-4 space-y-1">
                  {exp.responsibilities.map((resp, i) => (
                    <li key={i}>{resp}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Projects Section */}
      <section id="projects" className="py-20 px-8 md:px-24 max-w-7xl mx-auto">
        <h2 className={`text-3xl font-bold mb-12 ${darkMode ? 'text-[#ccd6f6]' : 'text-black'}`}>Projects</h2>
        <div className="space-y-24">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative grid md:grid-cols-2 gap-8"
            >
              <div className={`relative ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                <div className="relative group">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="rounded w-full h-full object-cover brightness-50 group-hover:brightness-100 transition-all duration-300"
                  />
                  <div className="absolute inset-0 bg-[#64ffda]/20 group-hover:opacity-0 transition-opacity duration-300"></div>
                </div>
              </div>
              <div className={`${index % 2 === 0 ? 'md:order-2 md:text-right' : 'md:order-1'}`}>
                <p className="text-[#64ffda] font-mono mb-2">Featured Project</p>
                <h3 className={`text-2xl font-bold ${darkMode ? 'text-[#ccd6f6]' : 'text-black'} mb-4`}>{project.title}</h3>
                <div className={`bg-opacity-90 backdrop-blur-sm rounded shadow-xl mb-4 ${
                  darkMode ? 'bg-[#112240]' : 'bg-white'
                }`}>
                  <p className={`${
                    darkMode ? 'text-[#8892b0]' : 'text-black/80'
                  }`}>{project.description}</p>
                </div>
                <div className={`flex flex-wrap gap-4 mb-8 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                  {project.technologies.map((tech) => (
                    <span key={tech} className={`font-mono text-sm ${
                      darkMode ? 'text-[#8892b0]' : 'text-blue-600'
                    }`}>
                      {tech}
                    </span>
                  ))}
                </div>
                <div className={`flex gap-6 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${
                      darkMode 
                        ? 'text-[#8892b0] hover:text-[#64ffda]' 
                        : 'text-black/70 hover:text-blue-600'
                    } transition-colors duration-300`}
                  >
                    <Github className="w-6 h-6" />
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${
                      darkMode 
                        ? 'text-[#8892b0] hover:text-[#64ffda]' 
                        : 'text-black/70 hover:text-blue-600'
                    } transition-colors duration-300`}
                  >
                    <ExternalLink className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20 px-8 md:px-24 max-w-7xl mx-auto">
        <h2 className={`text-3xl font-bold mb-12 ${darkMode ? 'text-[#ccd6f6]' : 'text-black'}`}>Achievements</h2>
        <div className="max-w-3xl space-y-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={`p-6 rounded border ${
                darkMode 
                  ? 'border-[#233554] hover:border-[#64ffda] bg-[#112240]/50' 
                  : 'border-blue-100 hover:border-blue-500 bg-white shadow-sm'
              } transition-colors duration-300`}
            >
              <h3 className="text-xl font-bold text-[#ccd6f6] mb-2">{achievement.title}</h3>
              <p className="text-[#8892b0]">{achievement.description}</p>
              <p className="text-[#64ffda] mt-2 font-mono">{achievement.date}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Add Footer at the bottom */}
      <Footer darkMode={darkMode} />
    </div>
  );
}

export default App;