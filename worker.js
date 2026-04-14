/**
 * Cloudflare Worker - Serves static files and handles API
 */

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const pathname = url.pathname;

    // Handle API endpoints
    if (pathname.startsWith('/api/contact') && request.method === 'POST') {
      try {
        const data = await request.json();
        const { name, email, subject, message } = data;

        if (!name || !email || !subject || !message) {
          return new Response(
            JSON.stringify({ success: false, message: 'All fields required' }),
            { status: 400, headers: { 'Content-Type': 'application/json' } }
          );
        }

        console.log('Contact form:', { name, email, subject, message });

        return new Response(
          JSON.stringify({ success: true, message: 'Message received!' }),
          { status: 200, headers: { 'Content-Type': 'application/json' } }
        );
      } catch (err) {
        console.error('Error:', err);
        return new Response(
          JSON.stringify({ success: false, message: 'Error processing request' }),
          { status: 500, headers: { 'Content-Type': 'application/json' } }
        );
      }
    }

    // Serve static files via ASSETS binding
    if (env.ASSETS) {
      return env.ASSETS.fetch(request);
    }

    return new Response('Not Found', { status: 404 });
  }
};
