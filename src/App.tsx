import { useState } from 'react';
import { MapPin, Navigation, Video, Menu, X, Radio, Gauge, Battery, Signal } from 'lucide-react';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [logoUrl, setLogoUrl] = useState('');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    setMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <nav className="fixed w-full bg-slate-900/95 backdrop-blur-sm border-b border-slate-700 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center overflow-hidden">
                {logoUrl ? (
                  <img src={logoUrl} alt="Logo" className="w-full h-full object-cover" />
                ) : (
                  <span className="text-white text-xs font-bold">LOGO</span>
                )}
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">Parakkum Thallika</h1>
                <p className="text-xs text-red-400">The Flying Saucer</p>
              </div>
            </div>

            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('home')} className={`transition-colors ${activeSection === 'home' ? 'text-red-400' : 'text-slate-300 hover:text-white'}`}>Home</button>
              <button onClick={() => scrollToSection('features')} className={`transition-colors ${activeSection === 'features' ? 'text-red-400' : 'text-slate-300 hover:text-white'}`}>Features</button>
              <button onClick={() => scrollToSection('operate')} className={`transition-colors ${activeSection === 'operate' ? 'text-red-400' : 'text-slate-300 hover:text-white'}`}>Operate</button>
              <button onClick={() => scrollToSection('tutorials')} className={`transition-colors ${activeSection === 'tutorials' ? 'text-red-400' : 'text-slate-300 hover:text-white'}`}>Tutorials</button>
              <button onClick={() => scrollToSection('about')} className={`transition-colors ${activeSection === 'about' ? 'text-red-400' : 'text-slate-300 hover:text-white'}`}>About</button>
            </div>

            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-white">
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-800 border-t border-slate-700">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button onClick={() => scrollToSection('home')} className="block w-full text-left px-3 py-2 text-slate-300 hover:bg-slate-700 hover:text-white rounded-md">Home</button>
              <button onClick={() => scrollToSection('features')} className="block w-full text-left px-3 py-2 text-slate-300 hover:bg-slate-700 hover:text-white rounded-md">Features</button>
              <button onClick={() => scrollToSection('operate')} className="block w-full text-left px-3 py-2 text-slate-300 hover:bg-slate-700 hover:text-white rounded-md">Operate</button>
              <button onClick={() => scrollToSection('tutorials')} className="block w-full text-left px-3 py-2 text-slate-300 hover:bg-slate-700 hover:text-white rounded-md">Tutorials</button>
              <button onClick={() => scrollToSection('about')} className="block w-full text-left px-3 py-2 text-slate-300 hover:bg-slate-700 hover:text-white rounded-md">About</button>
            </div>
          </div>
        )}
      </nav>

      <section id="home" className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Disaster Drone
            <span className="block bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">Management System</span>
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Advanced UAV command and control interface for emergency response operations.
            Manage multiple drones, monitor real-time telemetry, and coordinate rescue missions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => scrollToSection('operate')} className="bg-gradient-to-r from-red-500 to-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl hover:shadow-red-500/30 transition-all duration-300 transform hover:scale-105">
              Launch Control Panel
            </button>
            <button onClick={() => scrollToSection('tutorials')} className="bg-slate-800 text-white px-8 py-4 rounded-lg font-semibold border border-slate-600 hover:bg-slate-700 transition-all duration-300">
              Watch Tutorials
            </button>
          </div>
          <div className="mt-12 inline-flex items-center space-x-2 px-4 py-2 bg-amber-500/10 border border-amber-500/30 rounded-full">
            <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></div>
            <p className="text-amber-300 text-sm font-medium">Educational Prototype - Research Project</p>
          </div>
        </div>
      </section>

      <section id="features" className="py-20 px-4 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-4">Core Features</h2>
          <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">Complete drone management solution designed for disaster response and emergency operations</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate-900 border border-slate-700 rounded-xl p-6 hover:border-red-500 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/10">
              <div className="bg-gradient-to-br from-red-500 to-red-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Radio className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Real-Time Control</h3>
              <p className="text-slate-400">Direct drone operation with live telemetry and responsive command interface</p>
            </div>

            <div className="bg-slate-900 border border-slate-700 rounded-xl p-6 hover:border-red-500 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/10">
              <div className="bg-gradient-to-br from-red-500 to-red-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Location Management</h3>
              <p className="text-slate-400">Add and track multiple locations for coordinated emergency response</p>
            </div>

            <div className="bg-slate-900 border border-slate-700 rounded-xl p-6 hover:border-red-500 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/10">
              <div className="bg-gradient-to-br from-red-500 to-red-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Navigation className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Autopilot Mode</h3>
              <p className="text-slate-400">Automated flight paths with waypoint navigation and return-to-home</p>
            </div>

            <div className="bg-slate-900 border border-slate-700 rounded-xl p-6 hover:border-red-500 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/10">
              <div className="bg-gradient-to-br from-red-500 to-red-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Video className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Video Streaming</h3>
              <p className="text-slate-400">HD video feed from drone cameras for situational awareness</p>
            </div>
          </div>
        </div>
      </section>

      <section id="operate" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-4">Control Dashboard</h2>
          <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">Access the full command interface across multiple platforms</p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-xl p-8 hover:border-red-500 transition-all duration-300">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-white">Mobile Interface</h3>
                <div className="bg-red-500/20 px-3 py-1 rounded-full">
                  <span className="text-red-400 text-sm font-semibold">iOS & Android</span>
                </div>
              </div>
              <p className="text-slate-400 mb-6">Full-featured mobile control panel optimized for smartphones and tablets. Operate drones on-the-go during field operations.</p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-3">
                  <Signal className="w-5 h-5 text-red-400" />
                  <span className="text-slate-300">4G/5G connectivity</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Battery className="w-5 h-5 text-red-400" />
                  <span className="text-slate-300">Battery-optimized</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Gauge className="w-5 h-5 text-red-400" />
                  <span className="text-slate-300">Real-time telemetry</span>
                </div>
              </div>
              <a href="#" className="inline-block w-full bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-3 rounded-lg font-semibold text-center hover:shadow-lg hover:shadow-red-500/30 transition-all duration-300">
                Launch Mobile App
              </a>
            </div>

            <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-xl p-8 hover:border-red-500 transition-all duration-300">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-white">Desktop Console</h3>
                <div className="bg-red-500/20 px-3 py-1 rounded-full">
                  <span className="text-red-400 text-sm font-semibold">Windows & Mac</span>
                </div>
              </div>
              <p className="text-slate-400 mb-6">Advanced command center with multi-screen support and comprehensive mission planning tools for base operations.</p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-3">
                  <Signal className="w-5 h-5 text-red-400" />
                  <span className="text-slate-300">Multi-drone control</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Battery className="w-5 h-5 text-red-400" />
                  <span className="text-slate-300">Advanced analytics</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Gauge className="w-5 h-5 text-red-400" />
                  <span className="text-slate-300">Mission recording</span>
                </div>
              </div>
              <a href="#" className="inline-block w-full bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-3 rounded-lg font-semibold text-center hover:shadow-lg hover:shadow-red-500/30 transition-all duration-300">
                Open Desktop App
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="tutorials" className="py-20 px-4 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-4">Video Tutorials</h2>
          <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">Learn how to effectively operate the drone management system</p>

          <div className="grid md:grid-cols-3 gap-6">
            {['Getting Started', 'Flight Operations', 'Autopilot Setup'].map((title, index) => (
              <div key={index} className="bg-slate-900 border border-slate-700 rounded-xl overflow-hidden hover:border-red-500 transition-all duration-300 group">
                <div className="aspect-video bg-gradient-to-br from-slate-700 to-slate-800 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 cursor-pointer">
                      <Video className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
                  <p className="text-slate-400 mb-4">Comprehensive guide to {title.toLowerCase()} and best practices</p>
                  <div className="flex items-center text-red-400 text-sm font-medium">
                    <span>Watch Tutorial</span>
                    <span className="ml-2">→</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">About This Project</h2>
          <div className="bg-slate-800 border border-slate-700 rounded-xl p-8">
            <p className="text-slate-300 mb-6 text-lg leading-relaxed">
              Parakkum Thallika is an educational prototype developed by <span className="text-red-400 font-semibold">45-STUDIOS</span> to demonstrate advanced drone management capabilities for disaster response scenarios.
            </p>
            <p className="text-slate-400 mb-8 leading-relaxed">
              This user interface concept showcases how emergency services could coordinate multiple unmanned aerial vehicles during crisis situations, providing real-time situational awareness and operational control.
            </p>
            <div className="inline-flex items-center space-x-2 px-6 py-3 bg-amber-500/10 border border-amber-500/30 rounded-lg">
              <span className="text-amber-300 font-medium">For Educational Purposes Only</span>
            </div>
            <div className="mt-8 pt-8 border-t border-slate-700">
              <p className="text-slate-400">
                Created with <span className="text-red-400">♥</span> in <span className="text-red-400 font-semibold">India-Bharata</span>
              </p>
              <p className="text-slate-500 text-sm mt-2">© 2025 45-STUDIOS. Research & Development Project.</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 px-4 border-t border-slate-800">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-slate-500 text-sm mb-2">Parakkum Thallika - Disaster Drone Management System</p>
          <p className="text-slate-600 text-xs">Made by <a href="https://bolt.new" target="_blank" rel="noopener noreferrer" className="text-red-400 hover:text-red-300 transition-colors">bolt.new</a></p>
        </div>
      </footer>
    </div>
  );
}

export default App;
