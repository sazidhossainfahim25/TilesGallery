export async function getTiles() {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://tiles-gallery-beryl.vercel.app';

  try {
    const res = await fetch(`${baseUrl}/data.json`, {
      cache: 'no-store',
    });
    if (!res.ok) {
      return [];
    }
    const data = await res.json();
    return Array.isArray(data) ? data : data.tiles || [];
  } catch (error) {
    return [];
  }
}
