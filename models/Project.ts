import { Schema, model } from 'mongoose';

interface Technology {
  tech: string;
  bgColor: null | string;
  fontColor: null | string;
}

interface IProject {
  title: string;
  websiteLink: string;
  image: string;
  colors: string[];
  fontColor: null | string;
  isGradient: boolean;
  description: string;
  technologies: Technology[];
}

const ProjectSchema = new Schema<IProject>({});

const Project = model<IProject>('project', ProjectSchema);

export default Project;
