
import { Timeline, JourneyMap } from "@/types";

export const mockTimelines: Timeline[] = [
  {
    id: "timeline-1",
    title: "Project Alpha Launch",
    description: "The journey of our flagship product from concept to launch",
    events: [
      {
        id: "event-1",
        title: "Initial Concept",
        date: "2023-01-15",
        description: "Team brainstorming session resulted in the initial concept for Project Alpha.",
        category: "planning"
      },
      {
        id: "event-2",
        title: "Prototype Development",
        date: "2023-03-10",
        description: "Engineering team completed the first functional prototype ahead of schedule.",
        category: "development"
      },
      {
        id: "event-3",
        title: "User Testing",
        date: "2023-05-22",
        description: "Conducted extensive user testing with focus groups, identifying key improvements.",
        category: "testing"
      },
      {
        id: "event-4",
        title: "Final Revisions",
        date: "2023-07-05",
        description: "Implemented feedback and finalized the product design.",
        category: "development"
      },
      {
        id: "event-5",
        title: "Market Launch",
        date: "2023-08-30",
        description: "Successfully launched Project Alpha, exceeding initial adoption targets by 27%.",
        category: "milestone"
      }
    ],
    createdAt: "2023-01-10",
    updatedAt: "2023-09-05"
  },
  {
    id: "timeline-2",
    title: "Team Expansion 2023",
    description: "Growth and integration of new team members",
    events: [
      {
        id: "event-1",
        title: "Needs Assessment",
        date: "2023-02-05",
        description: "Identified key skill gaps and hiring needs for the upcoming year.",
        category: "planning"
      },
      {
        id: "event-2",
        title: "Recruitment Drive",
        date: "2023-04-10",
        description: "Launched targeted recruitment campaign resulting in over 200 applications.",
        category: "recruitment"
      },
      {
        id: "event-3",
        title: "First Wave Onboarding",
        date: "2023-06-15",
        description: "Successfully onboarded first group of 5 new team members.",
        category: "milestone"
      },
      {
        id: "event-4",
        title: "Team Integration Workshop",
        date: "2023-07-20",
        description: "Conducted a 2-day workshop to align goals and build team cohesion.",
        category: "development"
      },
      {
        id: "event-5",
        title: "Performance Review",
        date: "2023-10-10",
        description: "Quarterly review showed 15% increase in team productivity post-expansion.",
        category: "milestone"
      }
    ],
    createdAt: "2023-01-25",
    updatedAt: "2023-10-15"
  }
];

export const mockJourneyMaps: JourneyMap[] = [
  {
    id: "journey-1",
    title: "Customer Support Process Improvement",
    description: "How our team transformed the customer support experience",
    steps: [
      {
        id: "step-1",
        title: "Problem Identification",
        description: "Analysis of customer feedback revealed 62% of complaints related to response time.",
        phase: "discover"
      },
      {
        id: "step-2",
        title: "Solution Brainstorming",
        description: "Team workshop generated 15 potential solutions to improve response efficiency.",
        phase: "define"
      },
      {
        id: "step-3",
        title: "Implementation Strategy",
        description: "Developed a multi-phase implementation plan with clear KPIs for success measurement.",
        phase: "develop"
      },
      {
        id: "step-4",
        title: "Tech Stack Upgrade",
        description: "Integrated new ticketing system with automated routing and priority assignment.",
        phase: "deliver"
      },
      {
        id: "step-5",
        title: "Team Training",
        description: "Comprehensive training program for all support team members on new processes.",
        phase: "deliver"
      },
      {
        id: "step-6",
        title: "Results Measurement",
        description: "Achieved 47% reduction in average response time and 35% increase in satisfaction scores.",
        phase: "results"
      }
    ],
    createdAt: "2023-03-15",
    updatedAt: "2023-09-20"
  },
  {
    id: "journey-2",
    title: "New Feature Development Process",
    description: "The journey from idea to successful feature launch",
    steps: [
      {
        id: "step-1",
        title: "User Need Identification",
        description: "User research and analytics revealed opportunity for new collaboration feature.",
        phase: "discover"
      },
      {
        id: "step-2",
        title: "Competitive Analysis",
        description: "Analyzed 8 competitor products to identify market gaps and opportunities.",
        phase: "discover"
      },
      {
        id: "step-3",
        title: "Feature Specification",
        description: "Developed detailed spec document outlining requirements and success metrics.",
        phase: "define"
      },
      {
        id: "step-4",
        title: "Prototype Development",
        description: "Created interactive prototype and conducted 3 rounds of user testing.",
        phase: "develop"
      },
      {
        id: "step-5",
        title: "Engineering Implementation",
        description: "Built the feature with 95% test coverage and no critical bugs at launch.",
        phase: "deliver"
      },
      {
        id: "step-6",
        title: "Market Launch",
        description: "Phased rollout to 10,000 users in first week with detailed feedback collection.",
        phase: "deliver"
      },
      {
        id: "step-7",
        title: "Impact Assessment",
        description: "Feature increased daily active usage by 22% and received positive NPS scores.",
        phase: "results"
      }
    ],
    createdAt: "2023-05-08",
    updatedAt: "2023-11-12"
  }
];
