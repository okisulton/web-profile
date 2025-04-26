import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/db';
import MessageModel from '@/models/Message';

export async function GET() {
  try {
    await connectToDatabase();
    const messages = await MessageModel.find({}).sort({ createdAt: -1 });
    
    return NextResponse.json({ messages });
  } catch (error) {
    console.error('Error fetching messages:', error);
    return NextResponse.json({ error: 'Failed to fetch messages' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    await connectToDatabase();
    
    const message = new MessageModel(body);
    await message.save();
    
    return NextResponse.json({ success: true, message }, { status: 201 });
  } catch (error) {
    console.error('Error sending message:', error);
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 });
  }
}