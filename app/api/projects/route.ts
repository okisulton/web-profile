import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/db';
import ProjectModel from '@/models/Project';

export async function GET() {
  try {
    await connectToDatabase();
    const projects = await ProjectModel.find({}).sort({ createdAt: -1 });
    
    return NextResponse.json({ projects });
  } catch (error) {
    console.error('Error fetching projects:', error);
    return NextResponse.json({ error: 'Failed to fetch projects' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    await connectToDatabase();
    
    const project = new ProjectModel(body);
    await project.save();
    
    return NextResponse.json({ success: true, project }, { status: 201 });
  } catch (error) {
    console.error('Error creating project:', error);
    return NextResponse.json({ error: 'Failed to create project' }, { status: 500 });
  }
}