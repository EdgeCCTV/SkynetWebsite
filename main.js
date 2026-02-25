// ============================================
// SKYNET MONITORING — Main JavaScript
// ============================================

document.addEventListener('DOMContentLoaded', () => {

    // --- Theme Toggle ---
    const themeToggle = document.getElementById('themeToggle');
    const root = document.documentElement;

    // Check saved preference or default to light
    const savedTheme = localStorage.getItem('skynet-theme') || 'light';
    if (savedTheme === 'dark') {
        root.setAttribute('data-theme', 'dark');
    }

    themeToggle.addEventListener('click', () => {
        const isDark = root.getAttribute('data-theme') === 'dark';
        if (isDark) {
            root.removeAttribute('data-theme');
            localStorage.setItem('skynet-theme', 'light');
        } else {
            root.setAttribute('data-theme', 'dark');
            localStorage.setItem('skynet-theme', 'dark');
        }
    });

    // --- Mobile Menu Toggle ---
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');

    menuToggle.addEventListener('click', () => {
        const isOpen = navLinks.classList.toggle('open');
        menuToggle.classList.toggle('active');
        menuToggle.setAttribute('aria-expanded', isOpen);
        document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    // Close mobile menu on link click
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('open');
            menuToggle.classList.remove('active');
            menuToggle.setAttribute('aria-expanded', 'false');
            document.body.style.overflow = '';
        });
    });

    // --- Sticky Header ---
    const header = document.getElementById('header');
    const scrollThreshold = 60;

    function handleHeaderScroll() {
        if (window.scrollY > scrollThreshold) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }

    window.addEventListener('scroll', handleHeaderScroll, { passive: true });
    handleHeaderScroll(); // initial check

    // --- Active Nav Link on Scroll ---
    const sections = document.querySelectorAll('section[id]');
    const navItems = navLinks.querySelectorAll('a[href^="#"]');

    function highlightNav() {
        const scrollPos = window.scrollY + 120;

        sections.forEach(section => {
            const top = section.offsetTop;
            const height = section.offsetHeight;
            const id = section.getAttribute('id');

            if (scrollPos >= top && scrollPos < top + height) {
                navItems.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', highlightNav, { passive: true });

    // --- Scroll Reveal (Intersection Observer) ---
    const revealElements = document.querySelectorAll('.reveal');

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                // Stagger the animation for siblings
                const siblings = entry.target.parentElement.querySelectorAll('.reveal');
                let delay = 0;
                siblings.forEach((sib, i) => {
                    if (sib === entry.target) delay = i * 80;
                });

                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, delay);

                revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -20px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));

    // --- Smooth scroll for anchor links ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.scrollY - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // --- Contact Form Handling ---
    const contactForm = document.getElementById('contactForm');
    const formStatus = document.getElementById('formStatus');
    const submitBtn = document.getElementById('submitBtn');

    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            // Basic validation
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const phone = document.getElementById('phone').value.trim();

            if (!name || !email || !phone) {
                formStatus.textContent = 'Please fill in all required fields.';
                formStatus.className = 'form-status error';
                return;
            }

            // Submit via FormSubmit
            submitBtn.disabled = true;
            submitBtn.innerHTML = 'Sending...';

            try {
                const formData = new FormData(contactForm);
                const response = await fetch(contactForm.action, {
                    method: 'POST',
                    body: formData,
                    headers: { 'Accept': 'application/json' }
                });

                if (response.ok) {
                    formStatus.textContent = 'Thank you! We\'ll be in touch within 24 hours.';
                    formStatus.className = 'form-status success';
                    contactForm.reset();
                } else {
                    throw new Error('Form submission failed');
                }
            } catch (err) {
                // Fallback to mailto
                const subject = encodeURIComponent('Security Assessment Request from ' + name);
                const body = encodeURIComponent(
                    `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nCompany: ${document.getElementById('company').value}\nProperty Type: ${document.getElementById('property-type').value}\nMessage: ${document.getElementById('message').value}`
                );
                window.location.href = `mailto:sales@skynetmonitoring.com?subject=${subject}&body=${body}`;
                formStatus.textContent = 'Opening your email client...';
                formStatus.className = 'form-status success';
            }

            submitBtn.disabled = false;
            submitBtn.innerHTML = `Submit Assessment Request
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>`;
        });
    }

    // --- Animate stat numbers ---
    function animateCounter(element, target) {
        // Handle special non-numeric values
        if (target === '24/7') {
            element.textContent = '24/7';
            return;
        }

        const duration = 1500;
        const hasPercent = target.includes('%');
        const hasPlus = target.includes('+');
        const hasLessThan = target.includes('<');
        const hasSuffix = target.includes('s');

        const numericStr = target.replace(/[^0-9.]/g, '');
        const numericVal = parseFloat(numericStr);

        if (isNaN(numericVal)) {
            element.textContent = target;
            return;
        }

        const hasDecimal = numericStr.includes('.');
        const startTime = performance.now();

        function update(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic

            let current = eased * numericVal;
            let display;

            if (hasDecimal) {
                display = current.toFixed(1);
            } else {
                display = Math.floor(current).toString();
            }

            let prefix = hasLessThan ? '<' : '';
            let suffix = '';
            if (hasPercent) suffix = '%';
            if (hasPlus) suffix = '+';
            if (hasSuffix && !hasPercent && !hasPlus) suffix = 's';

            element.textContent = prefix + display + suffix;

            if (progress < 1) {
                requestAnimationFrame(update);
            } else {
                element.textContent = target; // ensure exact final value
            }
        }

        requestAnimationFrame(update);
    }

    // Observe stat cards for counter animation
    const statElements = document.querySelectorAll('.stat-card h3, .hero-stat h3');

    statElements.forEach(el => {
        // Store original value and set to placeholder
        el.dataset.target = el.textContent.trim();
    });

    const statObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target.dataset.target;
                if (target) {
                    animateCounter(entry.target, target);
                }
                statObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });

    statElements.forEach(el => statObserver.observe(el));

});
