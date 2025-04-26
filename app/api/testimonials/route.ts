import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/db';
import TestimonialModel from '@/models/Testimonial';

export async function GET() {
  try {
    await connectToDatabase();
    const testimonials = await TestimonialModel.find({}).sort({ createdAt: -1 });
    
    return NextResponse.json({ testimonials });
  } catch (error) {
    console.error('Error fetching testimonials:', error);
    return NextResponse.json({ error: 'Failed to fetch testimonials' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    await connectToDatabase();
    
    const testimonial = new TestimonialModel(body);
    await testimonial.save();
    
    return NextResponse.json({ success: true, testimonial }, { status: 201 });
  } catch (error) {
    console.error('Error creating testimonial:', error);
    return NextResponse.json({ error: 'Failed to create testimonial' }, { status: 500 });
  }
}