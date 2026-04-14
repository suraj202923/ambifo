/**
 * Cloudflare Worker - Servers static files and API
 */

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const pathname = url.pathname;

    // Handle API endpoints
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
          JSON.stringify({ success: false, message: 'Error processing' }),
          { status: 500, headers: { 'Content-Type': 'application/json' } }
        );
      }
    }

    // Serve static files (including pages)
    if (env.ASSETS) {
      const response = await env.ASSETS.fetch(request);
      
      // If 404 on a path, try index.html for client-side routing
      if (response.status === 404 && !pathname.includes('.')) {
        const indexUrl = new URL(pathname.endsWith('/') ? pathname + 'index.html' : pathname + '.html', url);
        const indexResponse = await env.ASSETS.fetch(new Request(indexUrl, request));
        if (indexResponse.status === 200) {
          return indexResponse;
        }
      }
      
      return response;
    }

    return new Response('Not Found', { status: 404 });
  }
};
