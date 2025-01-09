import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Twitter, Linkedin, Mail } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const portfolioItems = [
    {
      title: "Brand Identity",
      image: "https://images.unsplash.com/photo-1541462608143-67571c6738dd?auto=format&fit=crop&q=80&w=800",
      category: "Branding"
    },
    {
      title: "Digital Art",
      image: "https://images.unsplash.com/photo-1634986666676-ec8fd927c23d?auto=format&fit=crop&q=80&w=800",
      category: "Illustration"
    },
    {
      title: "Web Design",
      image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&q=80&w=800",
      category: "UI/UX"
    },
    {
      title: "Print Design",
      image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=800",
      category: "Print"
    }
  ];

  return (
    <div className="bg-black min-h-screen text-white">
      {/* Navigation */}
      <nav className={`fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${
        scrolled ? 'top-4' : 'top-8'
      }`}>
        <div className="relative">
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center bg-gradient-to-r from-black/90 to-[#095f56]/90 backdrop-blur-sm rounded-full px-8 py-4 shadow-lg shadow-teal-500/10">
            <a href="#" className="text-2xl font-bold text-teal-500 mr-8">H.</a>
            {["Home", "Portfolio", "About", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="px-4 hover:text-teal-500 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button and Logo */}
          <div className="md:hidden flex items-center bg-gradient-to-r from-black/90 to-[#095f56]/90 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg shadow-teal-500/10">
            <a href="#" className="text-2xl font-bold text-teal-500 mr-4">H.</a>
            <button
              className="text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden absolute top-full left-1/2 -translate-x-1/2 mt-4 w-48 bg-gradient-to-r from-black/90 to-[#095f56]/90 backdrop-blur-sm rounded-2xl py-4 shadow-lg shadow-teal-500/10">
              {["Home", "Portfolio", "About", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block px-6 py-2 hover:bg-white/5 hover:text-teal-500 text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Rest of the components remain unchanged */}
      <section id="home" className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            HASKOURI
            <span className="text-teal-500">.</span>
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-400 mb-6">
            Digital Designer & Art Director
          </h2>
          <p className="max-w-2xl text-gray-300 leading-relaxed">
            Crafting meaningful digital experiences through thoughtful design and creative problem-solving. 
            With over 8 years of experience, I specialize in creating distinctive brand identities and 
            immersive digital interfaces.
          </p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section id="portfolio" className="py-20 px-6 bg-black/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">Featured Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {portfolioItems.map((item, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg aspect-video cursor-pointer"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="object-cover w-full h-full transform transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <div>
                    <h3 className="text-xl font-bold">{item.title}</h3>
                    <p className="text-teal-500">{item.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">Get in Touch</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <form className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-teal-500 transition-colors"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-teal-500 transition-colors"
                />
              </div>
              <div>
                <textarea
                  placeholder="Message"
                  rows={4}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-teal-500 transition-colors"
                ></textarea>
              </div>
              <button className="bg-teal-500 text-black px-8 py-3 rounded-lg font-semibold hover:bg-teal-400 transition-colors">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">© 2024 HASKOURI. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-teal-500 transition-colors">
              <Github size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-teal-500 transition-colors">
              <Twitter size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-teal-500 transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-teal-500 transition-colors">
              <Mail size={20} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;