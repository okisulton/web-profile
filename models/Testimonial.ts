import mongoose, { Schema, Document } from 'mongoose';

export interface ITestimonial extends Document {
  name: string;
  position: string;
  company: string;
  image: string;
  quote: string;
  featured: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const TestimonialSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    position: { type: String, required: true },
    company: { type: String, required: true },
    image: { type: String, required: true },
    quote: { type: String, required: true },
    featured: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export default mongoose.models.Testimonial || mongoose.model<ITestimonial>('Testimonial', TestimonialSchema);