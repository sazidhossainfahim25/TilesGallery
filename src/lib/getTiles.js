export async function getTiles() {
  const baseUrl = process.env.BETTER_AUTH_URL || 'https://tiles-gallery-beryl.vercel.app';

  try {
    const res = await fetch(`${baseUrl}/data.json`, {
      cache: 'no-store',
    });
    if (!res.ok) {
      console.error(`Fetch failed with status: ${res.status}`);
      return [];
    }
    const data = await res.json();
    return Array.isArray(data) ? data : data.tiles || [];
  } catch (error) {
    console.error('Fetch error:', error);
    return [];
  }
}
