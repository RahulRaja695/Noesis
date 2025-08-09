import { Project, TeamMember } from './types';
import Principle from './assets/Aravindh.jpeg';
import p01 from './assets/projects/1.png';
import p02 from './assets/projects/2.png';
import p03 from './assets/projects/3.png';
import p04 from './assets/projects/4.png';
import p05 from './assets/projects/5.png';
import p06 from './assets/projects/6.png';
import p07 from './assets/projects/7.png';
import p08 from './assets/projects/8.png';
import p09 from './assets/projects/9.png';
import p10 from './assets/projects/10.png';
import p11 from './assets/projects/11.png';
import p12 from './assets/projects/12.png';
import p13 from './assets/projects/13.png';
import p14 from './assets/projects/14.png';
import p15 from './assets/projects/15.png';
import p16 from './assets/projects/16.png';
import p17 from './assets/projects/17.png';
import p18 from './assets/projects/18.png';
import p19 from './assets/projects/19.png';
import p20 from './assets/projects/20.png';
import p21 from './assets/projects/21.png';
import p22 from './assets/projects/22.png';
import p23 from './assets/projects/23.png';


export const PROJECTS: Project[] = [
  {
    id: 'p1',
    title: 'p1',
    client: "Lakeside Pavilion",
    year: 2025,
    description: "An elegant lakeside structure...",
    imageUrls: [
      p01,
      p02,
      p03,
      p04,
      p05
    ],
    category: 'Architecture',
  },
  {
    id: 'p2',
    title: 'p2',
    client: "Mr & Mrs Sanja's Residence",
    year: 2025,
    description: "A contemporary residence that harmonizes with its natural surroundings, featuring open-plan living and sustainable materials. The design prioritizes light and space, creating a serene and inviting home.",
    imageUrls: [
      p06,
      p07,
      p08,
      p09,
      p10
    ],
    category: 'Architecture',
  },
  {
    id: 'p3',
    title: 'p3',
    client: "Lakeside Pavilion",
    year: 2024,
    description: "An elegant lakeside structure...",
    imageUrls: [
      p11,
      p12,
      p13,
      p14,
      p15
    ],
    category: 'Architecture',
  },
  {
    id: 'p4',
    title: 'p4',
    client: "Lakeside Pavilion",
    year: 2023,
    description: "An elegant lakeside structure...",
    imageUrls: [
      p16,
      p17,
      p18,
      p19,
      p20
    ],
    category: 'Architecture',
  },
  {
    id: 'p5',
    title: 'p5',
    client: "Lakeside Pavilion",
    year: 2022,
    description: "An elegant lakeside structure...",
    imageUrls: [
      p21,
      p22,
      p23
    ],
    category: 'Architecture',
  }
];


export const TEAM_MEMBERS: TeamMember[] = [
    {
        id: 1,
        name: 'C. Arvind Krishnan',
        role: 'Principal Architect',
        description: 'The principal architect and co-founder possesses a keen interest in design thinking and responsive designing. His vision helps to define spaces that are aesthetically pleasing and deeply connected to their context.',
        imageUrl: Principle,
    },
    {
        id: 2,
        name: 'R. Jayanth',
        role: 'Principal Architect',
        description: 'As another principal architect, He brings hands-on experience in sustainable architecture to the team. Having worked with numerous projects, he imbues all designs with a focus on sustainability, making each project unique and environmentally conscious.',
        imageUrl: 'https://picsum.photos/seed/person2/500/500?grayscale',
    }
];