/**
 * Cloudflare Worker - API handler and routing
 */

export default {
  async fetch(request) {
    const url = new URL(request.url);
    const pathname = url.pathname;

    // Handle API endpoints
    if (pathname.startsWith('/api/')) {
      if (pathname === '/api/contact' && request.method === 'POST') {
        try {
          const data = await request.json();
          const { name, email, subject, message } = data;

          if (!name || !email || !subject || !message) {
            return new Response(
              JSON.stringify({ success: false, message: 'All fields required' }),
              { status: 400, headers: { 'Content-Type': 'application/json' } }
            );
          }

          console.log('Contact:', { name, email, subject, message });

          return new Response(
            JSON.stringify({ success: true, message: 'Message received!' }),
            { status: 200, headers: { 'Content-Type': 'application/json' } }
          );
        } catch (err) {
          return new Response(
            JSON.stringify({ success: false, message: 'Error' }),
            { status: 500, headers: { 'Content-Type': 'application/json' } }
          );
        }
      }

      return new Response(
        JSON.stringify({ success: false, message: 'Not found' }),
        { status: 404, headers: { 'Content-Type': 'application/json' } }
      );
    }

    return new Response('Not found', { status: 404 });
  },
};
