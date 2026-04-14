/**
 * Cloudflare Worker - Serves static files and handles API
 */

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const pathname = url.pathname;

    try {
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

      // Map routes to HTML files
      const routeMap = {
        '/': '/index.html',
        '/about': '/about.html',
        '/services': '/services.html',
        '/portfolio': '/portfolio.html',
        '/blog': '/blog.html',
        '/contact': '/contact.html',
        '/privacy-policy': '/privacy-policy.html',
        '/terms': '/terms.html',
      };

      // Check if this is a mapped route
      const mappedPath = routeMap[pathname];
      if (mappedPath && env.ASSETS) {
        const assetRequest = new Request(new URL(mappedPath, url), request);
        const response = await env.ASSETS.fetch(assetRequest);
        if (response.status === 200) {
          return response;
        }
      }

      // Try to serve as-is (for static assets like css, js, images)
      if (env.ASSETS) {
        const response = await env.ASSETS.fetch(request);
        if (response.status === 200) {
          return response;
        }
      }

      // If nothing found, return 404
      if (env.ASSETS) {
        try {
          return await env.ASSETS.fetch(new Request(new URL('/404.html', url), request));
        } catch (err) {
          console.error('404 page error:', err);
        }
      }

      return new Response('Page Not Found', { status: 404 });
    } catch (err) {
      console.error('Worker exception:', err);
      return new Response(`Error: ${err.message}`, { status: 500 });
    }
  }
};
