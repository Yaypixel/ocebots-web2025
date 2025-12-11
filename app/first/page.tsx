"use client";

import { memo } from "react";
import NavMenu from "@/components/ui/complete-menu";
import ProgramCard, { StatCard, TimelineItem } from "@/components/ui/cards";
import ScrollReveal from "@/components/ui/reveal-on-scroll";
import { FlickeringGrid } from "@/components/ui/shadcn-io/flickering-grid";

const programs = [
  {
    title: "FIRST® LEGO® League Challenge",
    ageGroup: "Ages 9-16",
    description:
      "Students research a real-world problem and develop a solution, while also designing, building, and programming a LEGO robot to complete missions on a themed playing field.",
    bgColor: "bg-yellow-100",
    accentColor: "text-yellow-600",
  },
  {
    title: "FIRST® Tech Challenge",
    ageGroup: "Ages 12-18",
    description:
      "Teams design, build, and program robots to compete in an alliance format against other teams. Robots are built from a reusable platform, powered by Android technology.",
    bgColor: "bg-orange-100",
    accentColor: "text-orange-600",
  },
  {
    title: "FIRST® Robotics Competition",
    ageGroup: "Ages 14-18",
    description:
      "Teams of high school students work with professional mentors to design, build, and program industrial-size robots to compete in a fast-paced field game.",
    bgColor: "bg-blue-100",
    accentColor: "text-blue-600",
    highlight: true,
  },
];

const frStats = [
  { number: "3,800+", label: "Teams Worldwide" },
  { number: "100,000+", label: "Students Participate" },
  { number: "65+", label: "Regional Events" },
  { number: "1", label: "World Championship" },
];

const timeline = [
  {
    phase: "Kickoff",
    time: "Early January",
    description: "The game is revealed! Teams receive the rules and begin strategizing.",
  },
  {
    phase: "Build Season",
    time: "6 Weeks",
    description:
      "Teams design, prototype, build, and program their robot while learning new skills.",
  },
  {
    phase: "Regional Competitions",
    time: "March - April",
    description:
      "Teams compete at regional events to qualify for championships and win awards.",
  },
  {
    phase: "World Championship",
    time: "April",
    description:
      "Top teams from around the world compete in Houston or Detroit for the world title.",
  },
];

function FirstPage() {
  return (
    <>
      <NavMenu />

      <div className="relative min-h-screen w-full bg-blue-300 overflow-x-hidden">
        <FlickeringGrid
          className="absolute inset-0 z-0"
          squareSize={4}
          gridGap={6}
          color="#63b3ed"
          maxOpacity={0.4}
          flickerChance={0.1}
        />

        <div className="relative z-10">

          {/* Hero */}
          <ScrollReveal>
            <section className="container mx-auto px-4 py-20 text-center">
              <h1 className="outfit-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white mb-6">
                What is FIRST?
              </h1>
              <p className="outfit-body text-lg sm:text-xl md:text-2xl text-white/90 max-w-4xl mx-auto">
                For Inspiration and Recognition of Science and Technology
              </p>
            </section>
          </ScrollReveal>

          {/* About FIRST */}
          <ScrollReveal>
            <section className="container mx-auto px-4 pb-12">
              <div className="bg-white/95 backdrop-blur rounded-xl p-10 shadow-2xl">
                <h2 className="outfit-heading text-4xl md:text-5xl text-blue-600 mb-6">
                  About FIRST
                </h2>
                <div className="space-y-4 text-gray-800 text-lg md:text-xl leading-relaxed">
                  <p>
                    <span className="font-bold text-blue-600">FIRST</span> is a global robotics organization founded in
                    1989. Its mission is to inspire young people to become science and technology leaders.
                  </p>
                  <p>
                    Students develop critical thinking, teamwork, communication, and engineering skills through exciting
                    robotics challenges and real-world mentorship.
                  </p>
                </div>
              </div>
            </section>
          </ScrollReveal>

          {/* Programs */}
          <ScrollReveal>
            <section className="container mx-auto px-4 pb-12">
              <div className="bg-white/95 backdrop-blur rounded-xl p-10 shadow-2xl">
                <h2 className="outfit-heading text-4xl md:text-5xl text-blue-600 mb-8">
                  FIRST Programs
                </h2>
                <div className="space-y-6">
                  {programs.map((p) => (
                    <ProgramCard key={p.title} {...p} />
                  ))}
                </div>
              </div>
            </section>
          </ScrollReveal>

          {/* FRC Section */}
          <ScrollReveal>
            <section className="container mx-auto px-4 pb-12">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-10 shadow-2xl text-white">
                <h2 className="outfit-heading text-4xl md:text-5xl mb-6">
                  FIRST Robotics Competition (FRC)
                </h2>
                <p className="text-lg md:text-xl leading-relaxed mb-8">
                  The ultimate sport for the mind — students have six weeks to build a 125 lb robot for competitive play.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {frStats.map((s) => (
                    <StatCard key={s.label} number={s.number} label={s.label} />
                  ))}
                </div>
              </div>
            </section>
          </ScrollReveal>

          {/* Timeline */}
          <ScrollReveal>
            <section className="container mx-auto px-4 pb-12">
              <div className="bg-white/95 backdrop-blur rounded-xl p-10 shadow-2xl">
                <h2 className="outfit-heading text-4xl md:text-5xl text-blue-600 mb-6">
                  Competition Season Timeline
                </h2>

                <div className="space-y-4">
                  {timeline.map((t) => (
                    <TimelineItem key={t.phase} {...t} />
                  ))}
                </div>
              </div>
            </section>
          </ScrollReveal>

          {/* Call to Action */}
          <ScrollReveal>
            <section className="container mx-auto px-4 pb-12">
              <div className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 rounded-xl p-12 text-center shadow-2xl">
                <h2 className="outfit-heading text-4xl md:text-5xl text-white mb-4">
                  Join the Movement
                </h2>
                <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                  FIRST is more than robots — it’s about building confidence, leadership, and life skills.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/about"
                    className="px-8 py-4 bg-white text-blue-600 rounded-lg font-bold text-lg shadow-lg hover:bg-blue-50"
                  >
                    Learn About Ocebots
                  </a>
                  <a
                    href="https://www.firstinspires.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-4 bg-blue-700 text-white rounded-lg font-bold text-lg shadow-lg hover:bg-blue-800"
                  >
                    Visit FIRST Official Site
                  </a>
                </div>
              </div>
            </section>
          </ScrollReveal>

          <div className="h-20" />
        </div>
      </div>
    </>
  );
}

export default memo(FirstPage);
