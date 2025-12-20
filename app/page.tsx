"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  Zap,
  Bot,
  Rocket,
  Target,
  GitBranch,
  ArrowRight,
  Check,
  Sparkles,
  Users,
  ChevronRight,
  Mail,
  Linkedin,
  Twitter,
  Menu,
  X,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Home() {
  const [email, setEmail] = useState("")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gray-950 text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-950/80 backdrop-blur-xl border-b border-gray-800/50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold tracking-[0.2em] text-white"
            >
              RETROSPXT
            </motion.div>

            {/* Desktop Nav */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="hidden md:flex items-center gap-8"
            >
              <a href="#workshop" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">
                Workshop
              </a>
              <a href="#bootcamp" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">
                Bootcamp
              </a>
              <a
                href="#blueprint"
                className="px-5 py-2.5 bg-gradient-to-r from-blue-600 to-green-600 rounded-full text-sm font-semibold hover:from-blue-500 hover:to-green-500 transition-all shadow-lg shadow-blue-500/25"
              >
                Free Blueprint
              </a>
            </motion.div>

            {/* Mobile Menu Button */}
            <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              className="md:hidden py-4 space-y-4"
            >
              <a href="#workshop" className="block text-gray-400 hover:text-white transition-colors">
                Workshop
              </a>
              <a href="#bootcamp" className="block text-gray-400 hover:text-white transition-colors">
                Bootcamp
              </a>
              <a href="#blueprint" className="block text-blue-400 hover:text-blue-300 transition-colors">
                Free Blueprint
              </a>
            </motion.div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-6 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[128px]" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-green-600/20 rounded-full blur-[128px]" />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-800/50 border border-gray-700/50 text-sm text-gray-300 mb-8"
          >
            <Sparkles className="w-4 h-4 text-green-400" />
            <span>AI Education for Solopreneurs</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold leading-tight mb-6"
          >
            <span className="text-white">Stop Renting AI.</span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-green-400 to-blue-400 bg-clip-text text-transparent">
              Start Building Assets.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed"
          >
            The comprehensive system for solopreneurs to build, deploy, and own AI agents that generate revenue.
            <span className="text-gray-300"> Stop paying for custom dev—learn to ship your own tools in days.</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
          >
            <a href="#workshop">
              <Button className="px-8 py-6 text-lg font-semibold bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 rounded-xl shadow-xl shadow-blue-500/30 transition-all hover:shadow-blue-500/40 hover:scale-105">
                Build Your First Agent
                <Rocket className="w-5 h-5 ml-2" />
              </Button>
            </a>
            <a href="#bootcamp">
              <Button
                variant="outline"
                className="px-8 py-6 text-lg font-semibold border-2 border-gray-700 hover:border-green-500 rounded-xl bg-transparent hover:bg-green-500/10 transition-all text-white"
              >
                Master The System
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-sm text-gray-500 flex items-center justify-center gap-2"
          >
            <Check className="w-4 h-4 text-green-500" />
            No theory. No "prompt engineering" fluff. You leave with a deployed system.
          </motion.p>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-12 px-6 border-y border-gray-800/50 bg-gray-900/30">
        <div className="max-w-6xl mx-auto">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-gray-500 text-sm uppercase tracking-widest mb-6"
          >
            Trusted by builders who have automated:
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap items-center justify-center gap-4 md:gap-8"
          >
            {["Lead Gen", "Client Onboarding", "Content Ops", "Support", "Internal QA"].map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-800/30 border border-gray-800"
              >
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-green-500" />
                <span className="text-gray-300 font-medium">{item}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Choose Your Path Section */}
      <section id="workshop" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Choose Your Path</h2>
            <p className="text-xl text-gray-400">Two ways to start building AI assets</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Workshop Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-blue-600/0 rounded-3xl blur-xl group-hover:blur-2xl transition-all" />
              <div className="relative bg-gray-900 border border-gray-800 rounded-3xl p-8 hover:border-blue-500/50 transition-all h-full">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
                  <Zap className="w-4 h-4" />
                  Quick Start
                </div>

                <h3 className="text-3xl font-bold mb-2">Build Fast</h3>
                <p className="text-blue-400 font-semibold mb-4">The Workshop</p>
                <p className="text-gray-400 mb-8">For beginners wanting a quick win.</p>

                <div className="space-y-4 mb-8">
                  {["One session", "One working agent", "V1 Prototype"].map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center">
                        <Check className="w-4 h-4 text-blue-400" />
                      </div>
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button className="w-full py-6 text-lg font-semibold bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 rounded-xl mb-4">
                  See Workshop Details
                  <ChevronRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </motion.div>

            {/* Bootcamp Card */}
            <motion.div
              id="bootcamp"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-green-600/0 rounded-3xl blur-xl group-hover:blur-2xl transition-all" />
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-green-600 to-blue-600 rounded-full text-sm font-semibold z-10">
                Most Popular
              </div>
              <div className="relative bg-gray-900 border-2 border-green-500/50 rounded-3xl p-8 hover:border-green-500 transition-all h-full">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-medium mb-6">
                  <Bot className="w-4 h-4" />
                  Full System
                </div>

                <h3 className="text-3xl font-bold mb-2">Learn + Build</h3>
                <p className="text-green-400 font-semibold mb-4">The Bootcamp</p>
                <p className="text-gray-400 mb-8">For serious builders creating assets.</p>

                <div className="space-y-4 mb-8">
                  {["6 weeks", "Complete system mastery", "Scalable product"].map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center">
                        <Check className="w-4 h-4 text-green-400" />
                      </div>
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button className="w-full py-6 text-lg font-semibold bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-500 hover:to-blue-500 rounded-xl mb-4 shadow-xl shadow-green-500/20">
                  Apply for Bootcamp
                  <ChevronRight className="w-5 h-5 ml-2" />
                </Button>

                <p className="text-sm text-gray-500 text-center flex items-center justify-center gap-2">
                  <Users className="w-4 h-4 text-green-400" />
                  Cohort based. Limited seats.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Method Section */}
      <section className="py-24 px-6 bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">The Retrospxt Method</h2>
            <p className="text-xl text-gray-400">Four steps from idea to deployed AI agent</p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                icon: Target,
                title: "Pick a Workflow",
                desc: "Identify the bottleneck",
                color: "blue",
              },
              {
                step: "02",
                icon: GitBranch,
                title: "Define Inputs/Outputs",
                desc: 'The "Blueprint" Phase',
                color: "green",
              },
              {
                step: "03",
                icon: Zap,
                title: "Connect the Stack",
                desc: "Airtable + Make + LLM",
                color: "blue",
              },
              {
                step: "04",
                icon: Rocket,
                title: "Ship & Refine",
                desc: "Version control for ops",
                color: "green",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative group"
              >
                <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-gray-700 transition-all h-full">
                  <div
                    className={`text-6xl font-bold bg-gradient-to-r ${item.color === "blue" ? "from-blue-600/20 to-blue-600/5" : "from-green-600/20 to-green-600/5"} bg-clip-text text-transparent mb-4`}
                  >
                    {item.step}
                  </div>
                  <div
                    className={`w-12 h-12 rounded-xl ${item.color === "blue" ? "bg-blue-500/10" : "bg-green-500/10"} flex items-center justify-center mb-4`}
                  >
                    <item.icon className={`w-6 h-6 ${item.color === "blue" ? "text-blue-400" : "text-green-400"}`} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-500">{item.desc}</p>
                </div>

                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                    <ChevronRight className="w-6 h-6 text-gray-700" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Magnet Section */}
      <section id="blueprint" className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-green-600/10 to-blue-600/10" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-500/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />

        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-semibold mb-6">
              <Sparkles className="w-4 h-4" />
              FREE RESOURCE
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6">The Agent Blueprint Kit</h2>

            <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
              Don't write code until you have a spec. Get the exact template I use to scope
              <span className="text-white font-semibold"> $5k agents in 10 minutes</span>. Includes a video walkthrough.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-xl mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-14 px-6 bg-gray-900 border-gray-700 rounded-xl text-white placeholder:text-gray-500 focus:border-blue-500 focus:ring-blue-500/20"
              />
              <Button className="h-14 px-8 text-lg font-semibold bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 rounded-xl whitespace-nowrap shadow-xl shadow-green-500/20">
                <Mail className="w-5 h-5 mr-2" />
                Send Me The Kit
              </Button>
            </div>

            <p className="text-sm text-gray-600 mt-4">No spam. Unsubscribe anytime.</p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-gray-800/50">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold tracking-[0.15em] text-white">RETROSPXT</span>
              <span className="text-gray-600">© 2025</span>
            </div>

            <div className="flex items-center gap-6">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-colors"
              >
                <Linkedin className="w-5 h-5 text-gray-400" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-colors"
              >
                <Twitter className="w-5 h-5 text-gray-400" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-colors"
              >
                <Mail className="w-5 h-5 text-gray-400" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
