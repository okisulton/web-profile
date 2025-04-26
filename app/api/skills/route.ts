import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/db';
import SkillModel from '@/models/Skill';

export async function GET() {
  try {
    await connectToDatabase();
    const skills = await SkillModel.find({}).sort({ category: 1, level: -1 });
    
    return NextResponse.json({ skills });
  } catch (error) {
    console.error('Error fetching skills:', error);
    return NextResponse.json({ error: 'Failed to fetch skills' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    await connectToDatabase();
    
    const skill = new SkillModel(body);
    await skill.save();
    
    return NextResponse.json({ success: true, skill }, { status: 201 });
  } catch (error) {
    console.error('Error creating skill:', error);
    return NextResponse.json({ error: 'Failed to create skill' }, { status: 500 });
  }
}