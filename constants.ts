
import { Project, TeamMember } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'p1',
    title: 'p1',
    client: "Lakeside Pavilion",
    year: 2024,
    description: "An elegant lakeside structure...",
    imageUrls: [
      './assets/projects/1.png',
      './assets/projects/2.png',
      './assets/projects/3.png',
      './assets/projects/4.png',
      './assets/projects/5.png',
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
      './assets/projects/6.png',
      './assets/projects/7.png',
      './assets/projects/8.png',
      './assets/projects/9.png',
      './assets/projects/10.png',
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
      './assets/projects/11.png',
      './assets/projects/12.png',
      './assets/projects/13.png',
      './assets/projects/14.png',
      './assets/projects/15.png',
    ],
    category: 'Architecture',
  },
  {
    id: 'p4',
    title: 'p4',
    client: "Lakeside Pavilion",
    year: 2024,
    description: "An elegant lakeside structure...",
    imageUrls: [
      './assets/projects/16.png',
      './assets/projects/17.png',
      './assets/projects/18.png',
      './assets/projects/19.png',
      './assets/projects/20.png',
    ],
    category: 'Architecture',
  },
  {
    id: 'p5',
    title: 'p5',
    client: "Lakeside Pavilion",
    year: 2024,
    description: "An elegant lakeside structure...",
    imageUrls: [
      './assets/projects/21.png',
      './assets/projects/22.png',
      './assets/projects/23.png',
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
        imageUrl: 'https://picsum.photos/seed/person1/500/500?grayscale',
    },
    {
        id: 2,
        name: 'R. Jayanth',
        role: 'Principal Architect',
        description: 'As another principal architect, He brings hands-on experience in sustainable architecture to the team. Having worked with numerous projects, he imbues all designs with a focus on sustainability, making each project unique and environmentally conscious.',
        imageUrl: 'https://picsum.photos/seed/person2/500/500?grayscale',
    }
];