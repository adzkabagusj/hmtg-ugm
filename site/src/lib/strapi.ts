import qs from "qs";

// Helper untuk mendapatkan URL API
export function getStrapiURL() {
  return process.env.NEXT_PUBLIC_STRAPI_API_URL ?? "http://localhost:1337";
}

// Helper untuk membuat URL gambar lengkap
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
      next: { revalidate: 3600 }, // Revalidate tiap 1 jam (ISR) - Diubah dari 60 detik untuk menghemat API call
      headers: {
        "Content-Type": "application/json",
      },
      ...options,
    };

    // Build request URL dengan qs
    // encodeValuesOnly: true membuat URL lebih bersih namun tetap valid untuk Strapi
    const queryString = qs.stringify(urlParamsObject, {
      encodeValuesOnly: true,
    });

    const requestUrl = `${getStrapiURL()}/api${path}${
      queryString ? `?${queryString}` : ""
    }`;

    // Trigger API call
    const response = await fetch(requestUrl, mergedOptions);

    // Handle jika response tidak OK (misal 404 atau 500)
    if (!response.ok) {
      console.error(
        `Error fetching API: ${response.status} ${response.statusText}`
      );
      return null; // Return null agar komponen pemanggil bisa handle error
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Fetch API Error:", error);
    return null; // Return null jika error agar tidak crash
  }
}
