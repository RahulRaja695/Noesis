
export type ProjectCategory = 'Architecture' | 'Interior Design' | 'Community Projects' | 'Landscapes';


export type Project = {
  id: string;
  title: string;
  client: string;
  year: number;
  description: string;
  imageUrls: string[]; // Change from imageUrl to imageUrls
  category: 'Architecture' | 'Interior Design';
};


export interface TeamMember {
  id: number;
  name: string;
  role: string;
  description: string;
  imageUrl: string;
}
