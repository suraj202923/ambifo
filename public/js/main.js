// Ambifo Three.js Banner Animation
(function() {
  function loadThreeJSBanner() {
    const container = document.getElementById('canvas-container');
    if (!container) {
      console.log('Canvas container not found, retrying...');
      setTimeout(loadThreeJSBanner, 100);
      return;
    }

    // Check if Three.js is available
    if (typeof THREE === 'undefined') {
      const script = document.createElement('script');
      script.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js';
      script.onload = () => {
        console.log('Three.js loaded from CDN');
        initBanner();
      };
      script.onerror = () => {
        console.error('Failed to load Three.js');
      };
      document.head.appendChild(script);
      return;
    }

    initBanner();

    function initBanner() {
      try {
        const width = container.clientWidth || window.innerWidth;
        const height = container.clientHeight || 600;

        // Scene setup
        const scene = new THREE.Scene();
        scene.background = new THREE.Color(0x3a3a3a);

        // Camera
        const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000);
        camera.position.z = 12;

        // Renderer
        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
        renderer.setSize(width, height);
        renderer.setPixelRatio(window.devicePixelRatio || 1);
        renderer.setClearColor(0x3a3a3a, 1);
        container.appendChild(renderer.domElement);

        // Clock for animations
        const clock = new THREE.Clock();

        // Add grid
        const gridHelper = new THREE.GridHelper(40, 40, 0x0fb8a9, 0x051d1f);
        gridHelper.position.y = -2;
        gridHelper.material.opacity = 0.15;
        gridHelper.material.transparent = true;
        scene.add(gridHelper);

        // Add particles
        const particleCount = 1000;
        const positions = new Float32Array(particleCount * 3);
        
        for (let i = 0; i < particleCount * 3; i += 3) {
          positions[i] = (Math.random() - 0.5) * 30;
          positions[i + 1] = Math.random() * 15;
          positions[i + 2] = (Math.random() - 0.5) * 20;
        }

        const geometry = new THREE.BufferGeometry();
        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

        const material = new THREE.PointsMaterial({
          color: 0x0fb8a9,
          size: 0.04,
          transparent: true,
          blending: THREE.AdditiveBlending
        });

        const points = new THREE.Points(geometry, material);
        scene.add(points);

        // Animation loop
        function animate() {
          requestAnimationFrame(animate);
          
          const time = clock.getElapsedTime();
          points.rotation.y = time * 0.02;
          material.opacity = 0.3 + Math.abs(Math.sin(time * 0.5)) * 0.7;

          renderer.render(scene, camera);
        }

        // Handle window resize
        window.addEventListener('resize', () => {
          const newWidth = container.clientWidth || window.innerWidth;
          const newHeight = container.clientHeight || 600;
          
          camera.aspect = newWidth / newHeight;
          camera.updateProjectionMatrix();
          renderer.setSize(newWidth, newHeight);
        });

        animate();
        console.log('Three.js banner successfully initialized!');
      } catch (error) {
        console.error('Error initializing Three.js banner:', error);
      }
    }
  }

  // Start when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadThreeJSBanner);
  } else {
    setTimeout(loadThreeJSBanner, 0);
  }
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

    // Handle dropdown items - close menu when clicking on actual navigation links (not dropdown toggle)
    document.querySelectorAll('.dropdown-item').forEach(item => {
      item.addEventListener('click', function() {
        navMenu.style.display = 'none';
      });
    });

    // Close menu when clicking on navigation links (not Resources dropdown)
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', function(e) {
        // Don't close menu if clicking on Resources dropdown toggle
        if (this.textContent.trim() !== 'Resources') {
          navMenu.style.display = 'none';
        } else {
          e.preventDefault();
        }
      });
    });

    // Ensure Consultancy always opens the services page.
    document.querySelectorAll('.nav-link').forEach(link => {
      if (link.textContent.trim() === 'Consultancy') {
        link.setAttribute('href', '/services');
        link.addEventListener('click', function() {
          window.location.href = '/services';
        });
      }
    });
  }

  // Dropdown menu handler for mobile/touch
  const dropdowns = document.querySelectorAll('.dropdown');
  dropdowns.forEach(dropdown => {
    const link = dropdown.querySelector('.nav-link');
    const menu = dropdown.querySelector('.dropdown-menu');
    
    if (link && menu) {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        // Toggle dropdown visibility on mobile
        if (window.innerWidth < 768) {
          const isHidden = menu.style.display === 'none' || !menu.style.display;
          dropdowns.forEach(d => {
            const m = d.querySelector('.dropdown-menu');
            if (m) m.style.display = 'none';
          });
          if (isHidden) {
            menu.style.display = 'block';
            menu.style.position = 'static';
          }
        }
      });
    }
  });

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
function showConsultationModal() {
  const modal = document.getElementById('consultationModal');
  if (modal) {
    modal.classList.add('show');
  }
}

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
  });
}

// Dropdown Menu Click Handler
document.addEventListener('DOMContentLoaded', function() {
  const dropdowns = document.querySelectorAll('.dropdown');
  
  dropdowns.forEach(dropdown => {
    const toggle = dropdown.querySelector('.nav-link');
    const menu = dropdown.querySelector('.dropdown-menu');
    
    if (toggle && menu) {
      // Click handler for dropdown toggle
      toggle.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        
        // Close other dropdowns
        dropdowns.forEach(d => {
          if (d !== dropdown) {
            d.classList.remove('active');
          }
        });
        
        // Toggle current dropdown
        dropdown.classList.toggle('active');
      });
      
      // Prevent menu from closing when clicking items (they navigate automatically)
      menu.addEventListener('click', function(e) {
        e.stopPropagation();
      });
    }
  });
  
  // Close dropdown when clicking outside
  document.addEventListener('click', function(e) {
    dropdowns.forEach(dropdown => {
      if (!dropdown.contains(e.target)) {
        dropdown.classList.remove('active');
      }
    });
  });
});

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
