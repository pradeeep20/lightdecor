import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

type ImageMeta = {
  src: string;
  filename: string;
  sequence: number;
};

const IMAGE_DIR = path.join(process.cwd(), "public", "images", "recent-work");
const SUPPORTED_EXTENSIONS = [".jpg", ".jpeg", ".png", ".webp", ".gif"];

export async function GET() {
  try {
    const files = await fs.readdir(IMAGE_DIR);

    const images: ImageMeta[] = files
      .filter((file) =>
        SUPPORTED_EXTENSIONS.some((ext) => file.toLowerCase().endsWith(ext))
      )
      .map((filename) => {
        const sequenceMatch = filename.match(/(\d+)/g);
        const sequence = sequenceMatch
          ? Number(sequenceMatch[sequenceMatch.length - 1])
          : 0;

        return {
          filename,
          sequence: Number.isFinite(sequence) ? sequence : 0,
          src: `/images/recent-work/${filename}`,
        };
      })
      .sort((a, b) => b.sequence - a.sequence);

    return NextResponse.json({ images });
  } catch (error) {
    console.error("[recent-work] Failed to read directory", error);
    return NextResponse.json(
      { images: [], error: "Unable to load recent work images." },
      { status: 500 }
    );
  }
}


