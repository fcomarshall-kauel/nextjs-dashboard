import { NextResponse } from "next/server"; 

const userData = {
    "user_id": 1,
    "avatar": "https://models.readyplayer.me/6525cbc42537ec63d99e3abb.glb",
    "nombre": "Waldo",
    "ap_paterno": "Lagos",
    "avatar_tipo_id": 1
  };


export async function GET() {
    return NextResponse.json(userData)
    
}


// Mock function to validate username and password
async function validateCredentials(username: string, password: string): Promise<boolean> {
    // Replace with actual validation logic
    return username === 'test' && password === 'test123';
  }
  
  
  export async function POST(req: Request) {
    // Parse the request body to get username and password
    const { username, password } = await req.json();
    
    // Validate the credentials
    if (await validateCredentials(username, password)) {
      // Define the user data to return
 
      // Return a JSON response with the user data
      return NextResponse.json(userData);
    } else {
      // If the credentials are invalid, return a 401 Unauthorized status
      return new Response('Unauthorized', { status: 401 });
    }
  }