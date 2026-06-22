const API_BASE = import.meta.env.VITE_API_URL || '';

export async function sendContactMessage(payload) {
  const response = await fetch(`${API_BASE}/api/contact`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(data.error || 'Failed to send message.');
  }

  return data;
}
