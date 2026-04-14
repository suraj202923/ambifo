/**
 * Cloudflare Worker - Serves static files and API
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

    // Map routes to HTML files
    let assetPath = pathname;
    const pageRoutes = {
      '/': '/index.html',
      '/about': '/about.html',
      '/services': '/services.html',
      '/portfolio': '/portfolio.html',
      '/blog': '/blog.html',
      '/contact': '/contact.html',
      '/privacy-policy': '/privacy-policy.html',
      '/terms': '/terms.html',
    };

    if (pageRoutes[pathname]) {
      assetPath = pageRoutes[pathname];
    }

    // Serve static files (HTML, CSS, JS, images, etc.)
    if (env.ASSETS) {
      const response = await env.ASSETS.fetch(new Request(new URL(assetPath, url)));
      if (response.status === 200) {
        return response;
      }
    }

    return new Response('Not Found', { status: 404 });
  }
};
