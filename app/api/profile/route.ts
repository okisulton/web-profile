import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/db';
import ProfileModel from '@/models/Profile';

export async function GET() {
  try {
    await connectToDatabase();
    // There should be only one profile, but we'll get the latest one in case there are multiple
    const profile = await ProfileModel.findOne({}).sort({ updatedAt: -1 });
    
    if (!profile) {
      return NextResponse.json({ error: 'Profile not found' }, { status: 404 });
    }
    
    return NextResponse.json({ profile });
  } catch (error) {
    console.error('Error fetching profile:', error);
    return NextResponse.json({ error: 'Failed to fetch profile' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    await connectToDatabase();
    
    // Find the current profile or create a new one
    const existingProfile = await ProfileModel.findOne({});
    
    if (existingProfile) {
      // Update existing profile
      Object.assign(existingProfile, body);
      await existingProfile.save();
      return NextResponse.json({ success: true, profile: existingProfile });
    } else {
      // Create new profile
      const profile = new ProfileModel(body);
      await profile.save();
      return NextResponse.json({ success: true, profile }, { status: 201 });
    }
  } catch (error) {
    console.error('Error updating profile:', error);
    return NextResponse.json({ error: 'Failed to update profile' }, { status: 500 });
  }
}