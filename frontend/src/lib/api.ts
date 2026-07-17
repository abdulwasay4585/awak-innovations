const API_URL = process.env.NEXT_PUBLIC_API_URL || '';

export async function submitContactForm(data: {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  message: string;
}) {
  const res = await fetch(`${API_URL}/api/contact`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!res.ok) {
    const err = await res.json().catch(() => ({ error: 'Unknown error' }));
    throw new Error(err.error || 'Failed to submit');
  }
  return res.json();
}

export async function subscribeNewsletter(email: string) {
  const res = await fetch(`${API_URL}/api/newsletter`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email }),
  });
  if (!res.ok) {
    const err = await res.json().catch(() => ({ error: 'Unknown error' }));
    throw new Error(err.error || 'Failed to subscribe');
  }
  return res.json();
}
