import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

// GET handler to retrieve current Facebook feed data
export async function GET() {
  const filePath = path.join(process.cwd(), 'public/data/facebook.json');
  try {
    const fileData = fs.readFileSync(filePath, 'utf8');
    return NextResponse.json(JSON.parse(fileData));
  } catch (error: any) {
    return NextResponse.json({ error: 'Failed to read database file: ' + error.message }, { status: 500 });
  }
}

// POST handler to update Facebook feed data
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const filePath = path.join(process.cwd(), 'public/data/facebook.json');
    
    // Simple verification
    if (!body || !body.posts || !Array.isArray(body.posts)) {
      return NextResponse.json({ error: 'Invalid feed data structure' }, { status: 400 });
    }
    
    fs.writeFileSync(filePath, JSON.stringify(body, null, 2), 'utf8');
    return NextResponse.json({ success: true, message: 'Facebook feed updated successfully' });
  } catch (error: any) {
    return NextResponse.json({ error: 'Failed to write database file: ' + error.message }, { status: 500 });
  }
}
