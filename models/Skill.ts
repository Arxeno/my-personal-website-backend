import { Schema, model } from 'mongoose';

interface ISkill {
  name: string;
  imageLink: string;
  alt: string;
}

const SkillSchema = new Schema<ISkill>({
  name: { type: String, required: true },
  imageLink: { type: String, required: true },
  alt: { type: String, required: true },
});

const Skill = model<ISkill>('skill', SkillSchema);

export default Skill;
