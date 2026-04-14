/**
 * Cloudflare Worker - API handler and static file server
 */

// Route mappings for pages
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

export default {
  async fetch(request, env) {
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
          console.error('Contact form error:', err);
          return new Response(
            JSON.stringify({ success: false, message: 'Error processing request' }),
            { status: 500, headers: { 'Content-Type': 'application/json' } }
          );
        }
      }

      return new Response(
        JSON.stringify({ success: false, message: 'API endpoint not found' }),
        { status: 404, headers: { 'Content-Type': 'application/json' } }
      );
    }

    try {
      // Map route to HTML file
      const htmlFile = pageRoutes[pathname] || pathname;
      
      // Try to fetch the mapped route
      let response;
      try {
        const filePath = htmlFile.startsWith('/') ? htmlFile : '/' + htmlFile;
        response = await env.ASSETS.fetch(new Request(new URL(filePath, url)));
        
        if (response.status === 200) {
          return response;
        }
      } catch (err) {
        console.error(`Error fetching ${htmlFile}:`, err);
      }

      // Try direct path for static assets
      try {
        response = await env.ASSETS.fetch(request);
        if (response.status === 200) {
          return response;
        }
      } catch (err) {
        console.error(`Error fetching direct path:`, err);
      }

      // Return 404
      try {
        return await env.ASSETS.fetch(new Request(new URL('/404.html', url)));
      } catch (err) {
        return new Response('Not Found', { status: 404 });
      }
    } catch (err) {
      console.error('Worker error:', err);
      return new Response(`Worker Error: ${err.message}`, { status: 500 });
    }
  },
};
