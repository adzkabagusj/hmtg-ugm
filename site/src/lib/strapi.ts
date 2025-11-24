// Helper untuk mendapatkan URL API
export function getStrapiURL() {
  return process.env.NEXT_PUBLIC_STRAPI_API_URL ?? "http://localhost:1337";
}

// Helper untuk membuat URL gambar lengkap (karena Strapi kadang memberi relative path)
export function getStrapiMedia(url: string | null) {
  if (url == null) {
    return null;
  }
  if (url.startsWith("data:")) {
    return url;
  }
  if (url.startsWith("http") || url.startsWith("//")) {
    return url;
  }
  return `${getStrapiURL()}${url}`;
}

// Helper Fetcher Generic
export async function fetchAPI(
  path: string,
  urlParamsObject = {},
  options = {}
) {
  try {
    // Merge default and user options
    const mergedOptions = {
      next: { revalidate: 60 }, // Revalidate tiap 60 detik (ISR)
      headers: {
        "Content-Type": "application/json",
      },
      ...options,
    };

    // Build request URL
    const queryString = new URLSearchParams(urlParamsObject).toString();
    const requestUrl = `${getStrapiURL()}/api${path}${
      queryString ? `?${queryString}` : ""
    }`;

    // Trigger API call
    const response = await fetch(requestUrl, mergedOptions);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return null; // Return null jika error agar tidak crash
  }
}
