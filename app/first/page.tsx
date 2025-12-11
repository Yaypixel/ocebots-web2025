"use client"

import NavMenu from "@/components/ui/complete-menu";
import ProgramCard, { StatCard, TimelineItem } from "@/components/ui/cards";
import ScrollReveal from "@/components/ui/reveal-on-scroll";
import { FlickeringGrid } from "@/components/ui/shadcn-io/flickering-grid";
import { Lightbulb, Users, Trophy, Target, Rocket, Globe } from "lucide-react";

export default function FirstPage() {
  return (
    <>
      <NavMenu />
      <div className="relative min-h-screen w-full bg-blue-300 overflow-x-hidden">
        <FlickeringGrid
          className="z-0 absolute inset-0 size-full"
          squareSize={4}
          gridGap={6}
          color="#63b3ed"
          maxOpacity={0.4}
          flickerChance={0.1}
        />

        <div className="relative z-10">
          {/* Hero Section */}
          <ScrollReveal>
            <div className="container mx-auto px-4 py-12 md:py-20">
              <div className="text-center">
                <h1 className="outfit-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white mb-6">
                  What is FIRST?
                </h1>
                <p className="outfit-body text-lg sm:text-xl md:text-2xl text-white/90 max-w-4xl mx-auto">
                  For Inspiration and Recognition of Science and Technology
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Main Content */}
          <div className="container mx-auto px-4 pb-12">
            {/* Introduction */}
            <ScrollReveal>
              <div className="bg-white/95 backdrop-blur rounded-lg p-6 md:p-10 mb-8 shadow-2xl">
                <h2 className="outfit-heading text-4xl md:text-5xl text-blue-600 mb-6">
                  About FIRST
                </h2>
                <div className="space-y-4 text-gray-800">
                  <p className="text-lg md:text-xl leading-relaxed">
                    <span className="font-bold text-blue-600">FIRST</span> (For Inspiration and Recognition of Science and Technology)
                    is a global robotics organization founded by inventor Dean Kamen in 1989. FIRST's mission is to inspire young people
                    to be science and technology leaders by engaging them in exciting mentor-based programs that build science,
                    engineering, and technology skills.
                  </p>
                  <p className="text-lg md:text-xl leading-relaxed">
                    Through hands-on robotics challenges, students develop critical thinking, problem-solving, teamwork, and
                    communication skills while working alongside professional mentors. FIRST promotes "Coopertition®" – a unique
                    combination of cooperation and competition that encourages teams to help each other even while competing.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Add core values here eventually */}

            {/* Programs Overview */}
            <ScrollReveal>
              <div className="bg-white/95 backdrop-blur rounded-lg p-6 md:p-10 mb-8 shadow-2xl">
                <h2 className="outfit-heading text-4xl md:text-5xl text-blue-600 mb-8">
                  FIRST Programs
                </h2>
                <div className="space-y-6">
                  <ProgramCard
                    title="FIRST® LEGO® League Challenge"
                    ageGroup="Ages 9-16"
                    description="Students research a real-world problem and develop a solution, while also designing, building, and programming a LEGO robot to complete missions on a themed playing field."
                    bgColor="bg-yellow-100"
                    accentColor="text-yellow-600"
                  />
                  <ProgramCard
                    title="FIRST® Tech Challenge"
                    ageGroup="Ages 12-18"
                    description="Teams design, build, and program robots to compete in an alliance format against other teams. Robots are built from a reusable platform, powered by Android technology."
                    bgColor="bg-orange-100"
                    accentColor="text-orange-600"
                  />
                  <ProgramCard
                    title="FIRST® Robotics Competition"
                    ageGroup="Ages 14-18"
                    description="Teams of high school students work with professional mentors to design, build, and program industrial-size robots to compete in a fast-paced field game."
                    bgColor="bg-blue-100"
                    accentColor="text-blue-600"
                    highlight={true}
                  />
                </div>
              </div>
            </ScrollReveal>

            {/* FRC Specific */}
            <ScrollReveal>
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg p-6 md:p-10 mb-8 shadow-2xl">
                <h2 className="outfit-heading text-4xl md:text-5xl text-white mb-6">
                  FIRST Robotics Competition (FRC)
                </h2>
                <div className="space-y-4 text-white/95">
                  <p className="text-lg md:text-xl leading-relaxed">
                    The FIRST Robotics Competition is the ultimate sport for the mind. High school students have just six weeks
                    to build and program a robot weighing up to 125 lbs to compete in a themed game against other teams.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    <StatCard number="3,800+" label="Teams Worldwide" />
                    <StatCard number="100,000+" label="Students Participate" />
                    <StatCard number="65+" label="Regional Events" />
                    <StatCard number="1" label="World Championship" />
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Competition Season */}
            <ScrollReveal>
              <div className="bg-white/95 backdrop-blur rounded-lg p-6 md:p-10 mb-8 shadow-2xl">
                <h2 className="outfit-heading text-4xl md:text-5xl text-blue-600 mb-6">
                  Competition Season Timeline
                </h2>
                <div className="space-y-4">
                  <TimelineItem
                    phase="Kickoff"
                    time="Early January"
                    description="The game is revealed! Teams receive the rules and begin strategizing."
                  />
                  <TimelineItem
                    phase="Build Season"
                    time="6 Weeks"
                    description="Teams design, prototype, build, and program their robot while learning new skills."
                  />
                  <TimelineItem
                    phase="Regional Competitions"
                    time="March - April"
                    description="Teams compete at regional events to qualify for championships and win awards."
                  />
                  <TimelineItem
                    phase="World Championship"
                    time="April"
                    description="Top teams from around the world compete in Houston or Detroit for the world title."
                  />
                </div>
              </div>
            </ScrollReveal>

            {/* Call to Action */}
            <ScrollReveal>
              <div className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 rounded-lg p-8 md:p-12 text-center shadow-2xl">
                <h2 className="outfit-heading text-4xl md:text-5xl text-white mb-4">
                  Join the Movement
                </h2>
                <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                  FIRST is more than robots. It's about building confidence, knowledge, and life skills that will help
                  students succeed in whatever path they choose.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/about"
                    className="px-8 py-4 bg-white text-blue-600 rounded-lg font-bold text-lg hover:bg-blue-50 transition-colors duration-200 shadow-lg"
                  >
                    Learn About Ocebots
                  </a>
                  <a
                    href="https://www.firstinspires.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-4 bg-blue-700 text-white rounded-lg font-bold text-lg hover:bg-blue-800 transition-colors duration-200 shadow-lg"
                  >
                    Visit FIRST Official Site
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <div className="h-12 md:h-20"></div>
        </div>
      </div>
    </>
  );
}
