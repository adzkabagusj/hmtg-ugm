import { revalidatePath, revalidateTag } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

/**
 * Endpoint untuk On-Demand Revalidation.
 * Bisa dipanggil dari Strapi Webhook saat ada perubahan konten.
 * Contoh URL: /api/revalidate?secret=TOKEN_ANDA
 */
export async function POST(request: NextRequest) {
    const secret = request.nextUrl.searchParams.get("secret");

    // Pastikan secret cocok untuk keamanan
    if (secret !== process.env.REVALIDATION_TOKEN) {
        return NextResponse.json({ message: "Invalid secret" }, { status: 401 });
    }

    try {
        // Revalidate semua path (layout) atau gunakan revalidateTag jika Anda menambahkannya di fetch
        revalidatePath("/", "layout");

        // Jika Anda ingin lebih spesifik, bisa parsing body dari Strapi webhook
        // untuk revalidate path tertentu saja.

        return NextResponse.json({
            revalidated: true,
            now: Date.now(),
            message: "Cache cleared successfully"
        });
    } catch (err) {
        console.error("Revalidation error:", err);
        return NextResponse.json({ message: "Error revalidating" }, { status: 500 });
    }
}

// Handler GET untuk testing di browser (opsional, sebaiknya hanya POST untuk webhook)
export async function GET(request: NextRequest) {
    return POST(request);
}
