import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    return NextResponse.json(
      { message: 'API route is working!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Test API error:', error);
    return NextResponse.json(
      { error: 'Test API failed' },
      { status: 500 }
    );
  }
}

export async function GET(request) {
  return NextResponse.json(
    { message: 'GET request works!' },
    { status: 200 }
  );
}