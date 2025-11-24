"use client";

import {
  BlocksRenderer,
  type BlocksContent,
} from "@strapi/blocks-react-renderer";
import Link from "next/link";
import { getStrapiMedia } from "@/lib/strapi";

export default function RichTextRenderer({
  content,
}: {
  content: BlocksContent;
}) {
  if (!content) return null;

  return (
    <BlocksRenderer
      content={content}
      blocks={{
        // Custom renderer untuk gambar agar menggunakan URL lengkap
        image: ({ image }) => (
          <div className="my-8">
            <img
              src={getStrapiMedia(image.url) || ""}
              alt={image.alternativeText || "Activity Image"}
              className="rounded-lg shadow-md w-full h-auto"
            />
            {image.caption && (
              <p className="text-center text-sm text-muted-purple mt-2 italic">
                {image.caption}
              </p>
            )}
          </div>
        ),
        // Custom styling untuk link internal/eksternal
        link: ({ children, url }) => (
          <Link
            href={url}
            className="text-pale-rose hover:text-dark-purple underline decoration-2 underline-offset-4 transition-colors">
            {children}
          </Link>
        ),
      }}
    />
  );
}
