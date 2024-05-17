import { url } from "inspector";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
  const formData = await req.formData();
  const file = formData.get("image") as File;
  console.log(file);
  console.log(file.name);

  const response = NextResponse.json(
    JSON.stringify({
      message: "file uploaded",
      url: "https://images.unsplash.com/photo-1546074177-ffdda98d214f",
    })
  );
  return response;
}
