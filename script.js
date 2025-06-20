// Newsletter form handler
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("newsletter-form");
  const response = document.getElementById("response-message");
  const backToTopBtn = document.getElementById("backToTop");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = document.getElementById("email").value;
      response.textContent = `Thank you for subscribing, ${email}!`;
      response.style.color = "#4b2e2e";
      form.reset();
    });
  }

  // Show/hide back to top button
  window.onscroll = () => {
    if (window.scrollY > 200) {
      backToTopBtn.style.display = "block";
    } else {
      backToTopBtn.style.display = "none";
    }
  };

  backToTopBtn.onclick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
});
function openLightbox(imgSrc, captionText) {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const caption = document.querySelector(".lightbox-caption");

  lightbox.style.display = "flex";
  lightboxImg.src = `images/${imgSrc}`;
  caption.textContent = captionText;
}

function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}
// Contact Form Validation
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");
  const response = document.getElementById("form-response");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = form.name.value.trim();
      const email = form.email.value.trim();
      const type = form.type.value;
      const message = form.message.value.trim();

      let valid = true;

      // Clear all error messages
      document.querySelectorAll(".error-message").forEach(el => el.textContent = "");

      if (!name) {
        document.getElementById("name-error").textContent = "Name is required.";
        valid = false;
      }

      if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
        document.getElementById("email-error").textContent = "Valid email required.";
        valid = false;
      }

      if (!type) {
        document.getElementById("type-error").textContent = "Select a message type.";
        valid = false;
      }

      if (!message) {
        document.getElementById("message-error").textContent = "Message cannot be empty.";
        valid = false;
      }

      if (valid) {
        response.textContent = `Thank you, ${name}! Your message has been received.`;
        form.reset();
      } else {
        response.textContent = "";
      }
    });
  }
});
// This script generates a sitemap XML string based on your page list.
// In real sites, sitemap.xml is static or generated server-side.

const pages = [
  { loc: 'https://yourwebsite.com/index.html', lastmod: '2025-06-19', changefreq: 'monthly', priority: '1.0' },
  { loc: 'https://yourwebsite.com/about.html', lastmod: '2025-06-19', changefreq: 'yearly', priority: '0.8' },
  { loc: 'https://yourwebsite.com/menu.html', lastmod: '2025-06-19', changefreq: 'monthly', priority: '0.9' },
  { loc: 'https://yourwebsite.com/events.html', lastmod: '2025-06-19', changefreq: 'weekly', priority: '0.7' },
  { loc: 'https://yourwebsite.com/contact.html', lastmod: '2025-06-19', changefreq: 'yearly', priority: '0.5' },
  { loc: 'https://yourwebsite.com/enquiry.html', lastmod: '2025-06-19', changefreq: 'yearly', priority: '0.5' },
];

function generateSitemap(pages) {
  const header = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;
  const footer = `</urlset>`;
  const urls = pages.map(page => 
    `  <url>\n    <loc>${page.loc}</loc>\n    <lastmod>${page.lastmod}</lastmod>\n    <changefreq>${page.changefreq}</changefreq>\n    <priority>${page.priority}</priority>\n  </url>`
  ).join('\n');
  return header + urls + '\n' + footer;
}

console.log(generateSitemap(pages));
