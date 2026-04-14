/**
 * Cloudflare Worker - Serves static files and API
 */

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const pathname = url.pathname;

    // Handle consultation form submission
    if (pathname === '/api/consultation' && request.method === 'POST') {
      try {
        const data = await request.json();
        const { fullName, email, phone, company, service } = data;

        // Validate required fields
        if (!fullName || !email || !phone || !service) {
          return new Response(
            JSON.stringify({ success: false, message: 'Missing required fields' }),
            { status: 400, headers: { 'Content-Type': 'application/json' } }
          );
        }

        // Create unique ID and timestamp
        const consultationId = `consultation_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
        const timestamp = new Date().toISOString();

        // Store in KV
        const consultationData = {
          id: consultationId,
          fullName,
          email,
          phone,
          company: company || 'Not provided',
          service,
          timestamp,
          status: 'pending'
        };

        // Use ambifo KV binding
        if (env.ambifo) {
          await env.ambifo.put(
            consultationId,
            JSON.stringify(consultationData),
            { expirationTtl: 2592000 } // 30 days
          );
        }

        console.log('Consultation received:', consultationData);

        return new Response(
          JSON.stringify({ 
            success: true, 
            message: 'Thank you! We will contact you within 24 hours.',
            id: consultationId
          }),
          { status: 200, headers: { 'Content-Type': 'application/json' } }
        );
      } catch (err) {
        console.error('Error:', err);
        return new Response(
          JSON.stringify({ success: false, message: 'Error processing enquiry' }),
          { status: 500, headers: { 'Content-Type': 'application/json' } }
        );
      }
    }

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
      '/cloud-migration': '/cloud-migration.html',
      '/cloud-devops': '/cloud-devops.html',
      '/cloud-security': '/cloud-security.html',
      '/cloud-finops': '/cloud-finops.html',
      '/managed-cloud': '/managed-cloud.html',
      '/ai-ml': '/ai-ml.html',
    };

    if (pageRoutes[pathname]) {
      assetPath = pageRoutes[pathname];
    }

    // Determine cache headers based on file type
    const cacheHeaders = {
      'html': 'public, max-age=3600', // 1 hour for HTML
      'css': 'public, max-age=31536000, immutable', // 1 year for CSS
      'js': 'public, max-age=31536000, immutable', // 1 year for JS
      'jpg': 'public, max-age=31536000, immutable',
      'jpeg': 'public, max-age=31536000, immutable',
      'png': 'public, max-age=31536000, immutable',
      'gif': 'public, max-age=31536000, immutable',
      'svg': 'public, max-age=31536000, immutable',
      'webp': 'public, max-age=31536000, immutable',
      'woff': 'public, max-age=31536000, immutable',
      'woff2': 'public, max-age=31536000, immutable',
    };

    // Get file extension for cache control
    const ext = pathname.split('.').pop().toLowerCase();
    const cacheControl = cacheHeaders[ext] || 'public, max-age=3600';

    // Serve static files (HTML, CSS, JS, images, etc.)
    if (env.ASSETS) {
      const response = await env.ASSETS.fetch(new Request(new URL(assetPath, url)));
      if (response.status === 200) {
        // Create new response with cache headers
        const newHeaders = new Headers(response.headers);
        newHeaders.set('Cache-Control', cacheControl);
        newHeaders.set('X-Content-Type-Options', 'nosniff');
        newHeaders.set('X-Frame-Options', 'SAMEORIGIN');
        newHeaders.set('X-XSS-Protection', '1; mode=block');
        
        return new Response(response.body, {
          status: response.status,
          statusText: response.statusText,
          headers: newHeaders,
        });
      }
    }

    return new Response('Not Found', { status: 404 });
  }
};
