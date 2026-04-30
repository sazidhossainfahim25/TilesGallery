export async function getTiles() {
  const res = await fetch('http://127.0.0.1:5000/tiles', {
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error('Failed to fetch tiles');
  }

  return res.json();
}
