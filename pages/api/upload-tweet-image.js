import { getSupabaseAdmin } from "@/lib/supabaseAdmin";

export const config = {
  api: {
    bodyParser: {
      sizeLimit: "8mb",
    },
  },
};

const BUCKET =
  process.env.SUPABASE_TWEET_IMAGES_BUCKET || "tweet-images";
const MAX_BYTES = 5 * 1024 * 1024;

function parseDataUrl(dataUrl) {
  const match = /^data:([^;]+);base64,(.+)$/s.exec(dataUrl);
  if (!match) return null;
  return { mime: match[1], base64: match[2] };
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { postId, dataUrl } = req.body || {};
  if (!postId || typeof postId !== "string" || !dataUrl || typeof dataUrl !== "string") {
    return res.status(400).json({ message: "postId and dataUrl are required" });
  }

  const parsed = parseDataUrl(dataUrl);
  if (!parsed) {
    return res.status(400).json({ message: "Invalid data URL" });
  }

  let buffer;
  try {
    buffer = Buffer.from(parsed.base64, "base64");
  } catch {
    return res.status(400).json({ message: "Invalid base64 payload" });
  }

  if (buffer.length > MAX_BYTES) {
    return res.status(413).json({ message: "Image too large (max 5MB)" });
  }

  const ext =
    parsed.mime === "image/png"
      ? "png"
      : parsed.mime === "image/webp"
        ? "webp"
        : parsed.mime === "image/gif"
          ? "gif"
          : "jpg";
  const path = `${postId}.${ext}`;

  try {
    const supabase = getSupabaseAdmin();
    const { error: uploadError } = await supabase.storage
      .from(BUCKET)
      .upload(path, buffer, {
        contentType: parsed.mime,
        upsert: true,
      });

    if (uploadError) {
      console.error("Supabase upload error:", uploadError);
      return res.status(500).json({
        message: uploadError.message || "Upload failed",
      });
    }

    const { data: pub } = supabase.storage.from(BUCKET).getPublicUrl(path);
    return res.status(200).json({ publicUrl: pub.publicUrl });
  } catch (e) {
    console.error(e);
    return res.status(500).json({
      message: e.message || "Server error",
    });
  }
}
