/**
 * Cloudflare Worker Entry Point
 * Serves static HTML files and handles API requests
 */

// Static file mappings
const staticRoutes = {
  '/': '/static/index.html',
  '/about': '/static/about.html',
  '/services': '/static/services.html',
  '/portfolio': '/static/portfolio.html',
  '/blog': '/static/blog.html',
  '/contact': '/static/contact.html',
  '/privacy-policy': '/static/privacy-policy.html',
  '/terms': '/static/terms.html',
  '/404': '/static/404.html',
};

export default {
  async fetch(request) {
    const url = new URL(request.url);
    const pathname = url.pathname;

    // Handle API requests
    if (pathname.startsWith('/api/')) {
      if (pathname === '/api/contact' && request.method === 'POST') {
        const data = await request.json();
        console.log('Contact form:', data);
        return new Response(
          JSON.stringify({ 
            success: true, 
            message: 'Message received! We will contact you soon.' 
          }),
          { 
            headers: { 'Content-Type': 'application/json' },
            status: 200
          }
        );
      }
    }

    // Route to static files
    const staticFile = staticRoutes[pathname];
    if (staticFile) {
      try {
        const response = await fetch(new Request(new URL(staticFile, request.url), request));
        return response;
      } catch (err) {
        return new Response('Not Found', { status: 404 });
      }
    }

    // Check if file exists in public folder
    try {
      const response = await fetch(new Request(pathname, request));
      if (response.status === 200) {
        return response;
      }
    } catch (err) {
      // File not found
    }

    // Return 404
    try {
      const response = await fetch(new Request('/static/404.html', request));
      return new Response(response.body, { status: 404, headers: response.headers });
    } catch (err) {
      return new Response('Not Found', { status: 404 });
    }
  },
};
