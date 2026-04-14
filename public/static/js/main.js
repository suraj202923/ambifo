// Ambifo Premium Three.js Banner with Post-Processing
(function() {
  // Dynamically load Three.js with addons
  const script = document.createElement('script');
  script.type = 'importmap';
  script.textContent = JSON.stringify({
    imports: {
      three: "https://unpkg.com/three@0.160.0/build/three.module.js",
      "three/addons/": "https://unpkg.com/three@0.160.0/examples/jsm/"
    }
  });
  document.head.appendChild(script);

  // Wait for DOM and then load Three.js
  Promise.all([
    import('https://unpkg.com/three@0.160.0/build/three.module.js'),
    import('https://unpkg.com/three@0.160.0/examples/jsm/postprocessing/EffectComposer.js'),
    import('https://unpkg.com/three@0.160.0/examples/jsm/postprocessing/RenderPass.js'),
    import('https://unpkg.com/three@0.160.0/examples/jsm/postprocessing/UnrealBloomPass.js')
  ]).then(([THREE, EffectComposer, RenderPass, UnrealBloomPass]) => {
    const container = document.getElementById('canvas-container');
    if (!container) return;

    // Force container styling - CRITICAL
    container.setAttribute('style', 'display: block !important; width: 100% !important; height: 100% !important; background-color: #3a3a3a !important; background-image: none !important; position: absolute; top: 0; left: 0; z-index: 5;');

    let scene, camera, renderer, composer, clock;
    let particles;

    function init() {
      // Get container dimensions
      const width = container.clientWidth || window.innerWidth;
      const height = container.clientHeight || 900;

      // 1. Scene & Camera
      scene = new THREE.Scene();
      scene.background = new THREE.Color(0x3a3a3a);
      scene.fog = null;
      camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000);
      camera.position.set(0, 2, 12);

      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false, preserveDrawingBuffer: true });
      renderer.setSize(width, height);
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.toneMapping = THREE.ReinhardToneMapping;
      renderer.setClearColor(0x3a3a3a, 1);
      renderer.autoClear = true;
      renderer.autoClearColor = true;
      
      const canvas = renderer.domElement;
      canvas.setAttribute('style', 'display: block !important; width: 100% !important; height: 100% !important; background-color: #3a3a3a !important;');
      container.appendChild(canvas);

      clock = new THREE.Clock();

      // 2. Post-Processing (Cinematic Bloom/Glow)
      const renderScene = new RenderPass.RenderPass(scene, camera);
      renderScene.clearColor = new THREE.Color(0x3a3a3a);
      renderScene.clearAlpha = 1.0;
      
      const bloomPass = new UnrealBloomPass.UnrealBloomPass(
        new THREE.Vector2(width, height),
        1.5,
        0.4,
        0.85
      );
      bloomPass.threshold = 0.2;
      bloomPass.strength = 1.2;
      bloomPass.radius = 1.0;

      composer = new EffectComposer.EffectComposer(renderer);
      composer.addPass(renderScene);
      composer.addPass(bloomPass);
      
      // CRITICAL: Set clear color for both renderer and pass
      renderer.setClearColor(0x3a3a3a, 1);
      renderScene.clearColor = new THREE.Color(0x3a3a3a);
      renderScene.clearAlpha = 1.0;

      // 3. Cinematic Grid
      const gridHelper = new THREE.GridHelper(40, 40, 0x0fb8a9, 0x051d1f);
      gridHelper.position.y = -2;
      gridHelper.material.opacity = 0.15;
      gridHelper.material.transparent = true;
      scene.add(gridHelper);

      // 4. Blinking Particles (The Ambient Data)
      const pCount = 1000;
      const pGeo = new THREE.BufferGeometry();
      const pPos = new Float32Array(pCount * 3);
      for (let i = 0; i < pCount; i++) {
        pPos[i * 3] = (Math.random() - 0.5) * 30;
        pPos[i * 3 + 1] = Math.random() * 15;
        pPos[i * 3 + 2] = (Math.random() - 0.5) * 20;
      }
      pGeo.setAttribute('position', new THREE.BufferAttribute(pPos, 3));
      const pMat = new THREE.PointsMaterial({
        color: 0x0fb8a9,
        size: 0.04,
        transparent: true,
        blending: THREE.AdditiveBlending
      });
      particles = new THREE.Points(pGeo, pMat);
      scene.add(particles);

      // 5. Rising Data Bars (Removed - User Request)
      // Bars removed to focus on particles and grid
    }

    function animate() {
      requestAnimationFrame(animate);
      const t = clock.getElapsedTime();

      // Animate particles
      particles.material.opacity = 0.3 + Math.abs(Math.sin(t * 0.5)) * 0.7;
      particles.rotation.y = t * 0.02;

      // CRITICAL: Force dark grey every single frame
      renderer.setClearColor(0x3a3a3a, 1);
      renderer.clear(true, true, true);
      
      composer.render();
    }

    window.addEventListener('resize', () => {
      const width = container.clientWidth || window.innerWidth;
      const height = container.clientHeight || 900;
      
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
      composer.setSize(width, height);
    });

    init();
    animate();
    
    // CRITICAL: Lock background color permanently
    const lockBackgroundColor = () => {
      try {
        const hero = document.querySelector('.hero');
        const container = document.getElementById('canvas-container');
        
        if (hero) {
          hero.style.backgroundColor = '#3a3a3a';
          hero.style.backgroundImage = 'linear-gradient(135deg, #3a3a3a 0%, #2a2a2a 100%)';
        }
        
        if (container) {
          container.style.backgroundColor = '#3a3a3a';
          container.style.backgroundImage = 'none';
        }
        
        if (renderer && renderer.domElement) {
          renderer.domElement.style.backgroundColor = '#3a3a3a';
          renderer.setClearColor(0x3a3a3a, 1);
        }
      } catch(e) {}
    };
    
    // Run immediately and every 100ms
    lockBackgroundColor();
    setInterval(lockBackgroundColor, 100);
    
    // Also lock on visibility change
    document.addEventListener('visibilitychange', lockBackgroundColor);
    window.addEventListener('focus', lockBackgroundColor);
    window.addEventListener('load', lockBackgroundColor);
    document.addEventListener('DOMContentLoaded', lockBackgroundColor);
  }).catch(error => {
    console.error('Failed to load Three.js premium banner:', error);
  });
})();

// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');

  if (hamburger) {
    hamburger.addEventListener('click', function() {
      navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
      
      // Mobile menu styling
      if (navMenu.style.display === 'flex') {
        navMenu.style.position = 'absolute';
        navMenu.style.top = '70px';
        navMenu.style.left = '0';
        navMenu.style.right = '0';
        navMenu.style.flexDirection = 'column';
        navMenu.style.backgroundColor = 'white';
        navMenu.style.width = '100%';
        navMenu.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
        navMenu.style.padding = '20px 0';
        navMenu.style.gap = '0';
        
        document.querySelectorAll('.nav-menu li').forEach(li => {
          li.style.width = '100%';
        });
        
        document.querySelectorAll('.nav-link').forEach(link => {
          link.style.display = 'block';
          link.style.padding = '12px 20px';
        });
      }
    });

    // Close menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', function() {
        navMenu.style.display = 'none';
      });
    });
  }

  // Update active nav link on page load
  updateActiveNavLink();
  
  // Update active nav link on scroll
  window.addEventListener('scroll', updateActiveNavLink);
});

function updateActiveNavLink() {
  const currentPath = window.location.pathname;
  
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
  
  // Special case for home
  if (currentPath === '/') {
    const homeLink = document.querySelector('a[href="/"]');
    if (homeLink) {
      homeLink.classList.add('active');
    }
  }
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Animation on scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

document.querySelectorAll('.feature-card, .service-card, .team-card, .blog-card, .portfolio-item').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});

// Form validation
function validateForm() {
  const email = document.getElementById('email');
  if (email && !isValidEmail(email.value)) {
    alert('Please enter a valid email address');
    return false;
  }
  return true;
}

function isValidEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

// Add year to footer
document.addEventListener('DOMContentLoaded', function() {
  const currentYear = new Date().getFullYear();
  const footerYear = document.querySelector('.footer-bottom p');
  if (footerYear && footerYear.textContent.includes('2024')) {
    footerYear.textContent = footerYear.textContent.replace('2024', currentYear.toString());
  }
  
  // Initialize consultation modal - show after 5 seconds
  setTimeout(function() {
    const modal = document.getElementById('consultationModal');
    if (modal) {
      modal.classList.add('show');
    }
  }, 5000);
});

// Consultation Modal Functions
function closeConsultationModal() {
  const modal = document.getElementById('consultationModal');
  if (modal) {
    modal.classList.remove('show');
    // Reset form
    const form = document.getElementById('consultationForm');
    if (form) form.reset();
    const successMsg = document.getElementById('successMessage');
    if (successMsg) successMsg.style.display = 'none';
  }
}

function handleConsultationSubmit(event) {
  event.preventDefault();
  
  const fullName = document.getElementById('fullName').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const company = document.getElementById('company').value;
  const service = document.getElementById('service').value;
  
  // Validate required fields
  if (!fullName || !email || !phone || !service) {
    alert('Please fill in all required fields');
    return;
  }
  
  // Validate email
  if (!isValidEmail(email)) {
    alert('Please enter a valid email address');
    return;
  }
  
  // Change button to loading state
  const submitBtn = document.querySelector('.btn-submit');
  const originalText = submitBtn.textContent;
  submitBtn.textContent = 'Submitting...';
  submitBtn.disabled = true;
  
  // Prepare consultation data
  const consultationData = {
    fullName: fullName,
    email: email,
    phone: phone,
    company: company,
    service: service
  };
  
  // Send to Cloudflare Worker API
  fetch('/api/consultation', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(consultationData)
  })
  .then(response => response.json())
  .then(data => {
    if (data.success) {
      console.log('Consultation saved:', data.id);
      
      // Show success message
      const form = document.getElementById('consultationForm');
      const successMsg = document.getElementById('successMessage');
      
      if (form) form.style.display = 'none';
      if (successMsg) successMsg.style.display = 'block';
      
      // Reset button
      submitBtn.textContent = originalText;
      submitBtn.disabled = false;
      
      // Auto-close after 3 seconds
      setTimeout(function() {
        closeConsultationModal();
      }, 3000);
    } else {
      throw new Error(data.message || 'Failed to submit');
    }
  })
  .catch(error => {
    console.error('Error:', error);
    alert('Error submitting consultation. Please try again.');
    
    // Reset button
    submitBtn.textContent = originalText;
    submitBtn.disabled = false;
  });
  
  // TODO: Replace with actual API endpoint
  // fetch('/api/consultation', {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify(consultationData)
  // })
  // .then(response => response.json())
  // .then(data => {
  //   if (data.success) {
  //     // Show success message
  //   }
  // })
  // .catch(error => console.error('Error:', error));
}

// Close modal when clicking on overlay
document.addEventListener('DOMContentLoaded', function() {
  const modal = document.getElementById('consultationModal');
  if (modal) {
    modal.addEventListener('click', function(e) {
      if (e.target === modal) {
        closeConsultationModal();
      }
    });
  }
});
