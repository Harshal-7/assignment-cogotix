import axios from "axios";
import { NextResponse } from "next/server";

const API_BASE_URL = "https://rickandmortyapi.com/api";

export async function GET(request: Request) {
  try {
    // Get the page from the URL search params
    const { searchParams } = new URL(request.url);
    const page = searchParams.get("page") || "1";

    const response = await axios.get(`${API_BASE_URL}/character?page=${page}`);
    return NextResponse.json(response.data);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Failed to fetch characters" },
      { status: 500 }
    );
  }
}
