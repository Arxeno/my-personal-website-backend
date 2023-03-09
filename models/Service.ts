import { Schema, model } from 'mongoose';

interface IService {
  name: string;
  imageLink: string;
  alt: string;
}

const ServiceSchema = new Schema<IService>({
  name: { type: String, required: true },
  imageLink: { type: String, required: true },
  alt: { type: String, required: true },
});

const Service = model<IService>('service', ServiceSchema);

export default Service;
