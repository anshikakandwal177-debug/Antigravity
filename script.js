/* ============================================================
   Anshika Portfolio JavaScript
   Interactive components, theme toggle, SQL lab tabs & modals
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Theme Toggle (Dark / Light)
  const themeToggle = document.getElementById('themeToggle');
  const savedTheme = localStorage.getItem('anshika_theme') || 'dark';

  if (savedTheme === 'light') {
    document.body.classList.remove('dark-theme');
    document.body.classList.add('light-theme');
  } else {
    document.body.classList.remove('light-theme');
    document.body.classList.add('dark-theme');
  }

  themeToggle.addEventListener('click', () => {
    if (document.body.classList.contains('dark-theme')) {
      document.body.classList.remove('dark-theme');
      document.body.classList.add('light-theme');
      localStorage.setItem('anshika_theme', 'light');
    } else {
      document.body.classList.remove('light-theme');
      document.body.classList.add('dark-theme');
      localStorage.setItem('anshika_theme', 'dark');
    }
  });

  // 2. Mobile Menu Toggle
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const navLinks = document.getElementById('navLinks');

  if (mobileMenuBtn && navLinks) {
    mobileMenuBtn.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });

    // Close menu when a link is clicked
    navLinks.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
      });
    });
  }

  // 3. Project Filtering
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Set active button
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const categories = card.getAttribute('data-category').split(' ');
        if (filterValue === 'all' || categories.includes(filterValue)) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // 4. SQL Lab Showcase Tabs
  const sqlTabBtns = document.querySelectorAll('.sql-tab-btn');
  const sqlTabPanels = document.querySelectorAll('.sql-tab-panel');

  sqlTabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      sqlTabBtns.forEach(b => b.classList.remove('active'));
      sqlTabPanels.forEach(panel => panel.classList.remove('active'));

      btn.classList.add('active');
      const targetId = btn.getAttribute('data-tab');
      const targetPanel = document.getElementById(targetId);
      if (targetPanel) {
        targetPanel.classList.add('active');
      }
    });
  });

  // 5. Copy Code Snippet
  const copyBtns = document.querySelectorAll('.copy-code-btn');
  copyBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-target');
      const codeElement = document.getElementById(targetId);
      if (!codeElement) return;

      const codeText = codeElement.innerText;
      navigator.clipboard.writeText(codeText).then(() => {
        const span = btn.querySelector('span');
        const originalText = span.innerText;
        span.innerText = 'Copied!';
        btn.style.borderColor = 'var(--accent-emerald)';

        setTimeout(() => {
          span.innerText = originalText;
          btn.style.borderColor = '';
        }, 2000);
      });
    });
  });

  // 6. Copy Email with Toast
  const copyEmailBtn = document.getElementById('copyEmailBtn');
  const userEmail = document.getElementById('userEmail');
  const toast = document.getElementById('toast');

  function showToast(message) {
    if (!toast) return;
    toast.innerText = message;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 2800);
  }

  if (copyEmailBtn && userEmail) {
    copyEmailBtn.addEventListener('click', () => {
      const email = userEmail.innerText.trim();
      navigator.clipboard.writeText(email).then(() => {
        showToast('Email copied to clipboard!');
      }).catch(() => {
        showToast('Email: ' + email);
      });
    });
  }

  // 7. Modals for Project Deep Dives
  const openModalBtns = document.querySelectorAll('.open-modal-btn');
  const closeButtons = document.querySelectorAll('[data-close]');
  const modals = document.querySelectorAll('.modal');

  openModalBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const modalId = btn.getAttribute('data-modal');
      const modal = document.getElementById(modalId);
      if (modal) {
        modal.classList.add('open');
      }
    });
  });

  closeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const modal = btn.closest('.modal');
      if (modal) {
        modal.classList.remove('open');
      }
    });
  });

  // Close modal when clicking outside dialog
  window.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) {
      e.target.classList.remove('open');
    }
  });

  // Close modal with ESC key
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      modals.forEach(m => m.classList.remove('open'));
    }
  });

  // 8. Navigation Active Link on Scroll
  const sections = document.querySelectorAll('section[id]');
  const navLinkItems = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let current = '';
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 120;
      const sectionId = section.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        current = sectionId;
      }
    });

    navLinkItems.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
});
