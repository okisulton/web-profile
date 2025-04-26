import mongoose, { Schema, Document } from 'mongoose';

export interface IProfile extends Document {
  name: string;
  tagline: string;
  bio: string;
  photo: string;
  birthDate: Date;
  location: string;
  education: string;
  certifications: string[];
  achievements: string[];
  socialLinks: {
    github?: string;
    linkedin?: string;
    twitter?: string;
    instagram?: string;
    website?: string;
  };
  createdAt: Date;
  updatedAt: Date;
}

const ProfileSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    tagline: { type: String, required: true },
    bio: { type: String, required: true },
    photo: { type: String, required: true },
    birthDate: { type: Date },
    location: { type: String },
    education: { type: String },
    certifications: { type: [String], default: [] },
    achievements: { type: [String], default: [] },
    socialLinks: {
      github: { type: String },
      linkedin: { type: String },
      twitter: { type: String },
      instagram: { type: String },
      website: { type: String },
    },
  },
  { timestamps: true }
);

export default mongoose.models.Profile || mongoose.model<IProfile>('Profile', ProfileSchema);