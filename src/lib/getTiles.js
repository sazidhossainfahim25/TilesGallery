export async function getTiles() {
  try {
    const res = await fetch('/data.json', {
      cache: 'no-store',
    });

    if (!res.ok) return [];

    const data = await res.json();

    return Array.isArray(data) ? data : data?.tiles || [];
  } catch (error) {
    return [];
  }
}
