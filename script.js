/**
 * META IT SCHOOL — ANDIJON
 * Zamonaviy Vanilla JavaScript Skripti
 * Hech qanday uchinchi tomon kutubxonalarisiz 100% sof JS
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  /* ==========================================================================
     1. KURSLARNING TO'LIQ MA'LUMOTLAR BAZASI
     ========================================================================== */
  const COURSES_DATABASE = {
    robotics: {
      id: 'robotics',
      title: 'Robototexnika va Mexatronika',
      badge: 'Robototexnika',
      discountPrice: '480 000 so\'m / oy',
      oldPrice: '750 000 so\'m',
      duration: '4–6 oy',
      schedule: 'Haftada 3 kun, 2 soatdan',
      ageLimit: '7 yoshdan boshlab barcha qiziquvchilar',
      desc: 'Andijondagi META IT SCHOOL ning eng sevimli kurslaridan biri. O\'quvchilar elektronika, sensorlar, motorlar va mikrokontrollerlar (Arduino) bilan ishlaydi. Real yuradigan, to\'siqlarni aylanib o\'tadigan, chiziq bo\'ylab harakatlanuvchi robotlar yasashni va ularni C++ asosida dasturlashni o\'rganadi.',
      syllabus: [
        'Elektronika asoslari: qarshiliklar, diodlar, mikrosxemalar',
        'Lego Mindstorms to\'plamlari bilan mexanika va konstruksiya',
        'Arduino platformasi va datchiklar (masofa, harorat, yorug\'lik)',
        'C/C++ tilida mikrokontrollerlarni dasturlash',
        'IoT (Aqlli uy) elementlari va simsiz boshqaruv loyihalari',
        'Yakuniy musobaqa va individual robot loyihasi himoyasi'
      ],
      features: [
        '100% amaliy jihozlar markaz tomonidan taqdim etiladi',
        'Xalqaro va viloyat musobaqalariga tayyorgarlik',
        'Robototexnika sertifikati'
      ]
    },
    frontend: {
      id: 'frontend',
      title: 'Frontend Web Dasturlash',
      badge: 'Dasturlash',
      discountPrice: '480 000 so\'m / oy',
      oldPrice: '850 000 so\'m',
      duration: '6 oy',
      schedule: 'Haftada 3 kun, 2 soatdan',
      ageLimit: '12 yoshdan boshlab',
      desc: 'Brauzerda ko\'rinadigan barcha go\'zallik, animatsiya va interfeyslarni noldan yaratish kursi. Zamonaviy HTML5, CSS3, JavaScript (ES6+) chuqur o\'rgatiladi, so\'ngra React.js kutubxonasida murakkab SPA veb-ilovalar ishlab chiqiladi.',
      syllabus: [
        'HTML5 semantikasi, zamonaviy CSS3 (Flexbox, Grid, Glassmorphism)',
        'Responsive Web Design (barcha mobil va planshetlarga moslash)',
        'JavaScript Core & ES6+: DOM manipulyatsiyasi, Eventlar, Asinxronlik (Async/Await, Fetch API)',
        'Git va GitHub bilan jamoaviy ishlash',
        'React.js: Komponentlar, Props, State, Hooks (useState, useEffect), Router',
        'Portfolio uchun kamida 4 ta yirik real amaliy veb-sayt'
      ],
      features: [
        'Junior Frontend Developer darajasiga chiqish',
        'GitHub portfolioni professional darajaga keltirish',
        'Amaliyot va bitiruv sertifikati'
      ]
    },
    backend: {
      id: 'backend',
      title: 'Backend Dasturlash (Python)',
      badge: 'Dasturlash',
      discountPrice: '480 000 so\'m / oy',
      oldPrice: '850 000 so\'m',
      duration: '6 oy',
      schedule: 'Haftada 3 kun, 2 soatdan',
      ageLimit: '14 yoshdan boshlab',
      desc: 'Veb-saytlar va ilovalarning "miyasi" — server, ma\'lumotlar bazasi va biznes-mantiqni yaratish. Python tili dunyodagi eng ommabop va qulay dasturlash tillaridan biridir. Django va PostgreSQL orqali xavfsiz va tezkor tizimlar yaratishni o\'rganasiz.',
      syllabus: [
        'Python asoslari: sintaksis, ma\'lumot turlari, funksiyalar va OOP (Obyektga yo\'naltirilgan dasturlash)',
        'Algoritmlar va ma\'lumotlar tuzilmalari',
        'Relyatsion ma\'lumotlar bazalari: SQL va PostgreSQL',
        'Django va Django REST Framework (DRF): RESTful API yaratish',
        'Avtorizatsiya, JWT tokenlar, xavfsizlik va caching',
        'Telegram botlar yaratish va serverga (Linux VPS) loyihani yuklash'
      ],
      features: [
        'Kuchli algoritmik fikrlash va arxitektura',
        'Real Telegram botlar va API loyihalar',
        'Karyera markazi tomonidan rezyume tayyorlash'
      ]
    },
    cyber: {
      id: 'cyber',
      title: 'Kiberxavfsizlik (Cyber Security)',
      badge: 'Xavfsizlik',
      discountPrice: '480 000 so\'m / oy',
      oldPrice: '900 000 so\'m',
      duration: '5 oy',
      schedule: 'Haftada 3 kun, 2 soatdan',
      ageLimit: '14 yoshdan boshlab',
      desc: 'Zamonaviy dunyoda eng yuqori maosh to\'lanadigan sohalardan biri. Tarmoqlar, operatsion tizimlar (Linux), serverlarni kiberhujumlardan himoya qilish, tizimdagi teshiklar (zaifliklar)ni topish va ularni to\'g\'rilash asoslari o\'rgatiladi.',
      syllabus: [
        'Kompyuter tarmoqlari: OSI modeli, TCP/IP, DNS, DHCP, marshrutlash',
        'Linux operatsion tizimi (Ubuntu, Kali Linux) terminali va boshqaruvi',
        'Kriptografiya asoslari va shifrlash protokollari (SSL/TLS, SSH)',
        'Veb-zaifliklar (OWASP Top 10): SQL Injection, XSS, CSRF tahlili',
        'Tarmoq xavfsizligi auditi va monitoring vositalari (Wireshark, Nmap)',
        'Axborot xavfsizligi etikasi va himoya strategiyalari'
      ],
      features: [
        'Real virtual laboratoriyalarda amaliy sinovlar',
        'Xavfsizlik bo\'yicha xalqaro sertifikat imtihonlariga tayyorgarlik',
        'META IT SCHOOL rasmiy sertifikati'
      ]
    },
    basic: {
      id: 'basic',
      title: 'Kompyuter Savodxonligi (Foundation)',
      badge: 'Asoslar',
      discountPrice: '480 000 so\'m / oy',
      oldPrice: '600 000 so\'m',
      duration: '2 oy',
      schedule: 'Haftada 3 kun, 1.5 soatdan',
      ageLimit: 'Barcha yoshdagilar uchun',
      desc: 'Kompyuter bilan endigina tanishayotgan yoki ofis dasturlarida professional darajada ishlashni xohlovchilar uchun ideal kurs. Darslar davomida klaviaturada ko\'rmasdan tez yozish, matnlar, jadvallar va taqdimotlar bilan ishlash mukammal o\'rgatiladi.',
      syllabus: [
        'Kompyuter tuzilishi, Windows 11 operatsion tizimida erkin ishlash',
        'O\'n barmoqli tez yozish trenajyori (Blind Typing)',
        'Microsoft Word: rasmiy hujjatlar, shartnomalar va hisobotlar tayyorlash',
        'Microsoft Excel: jadvallar, formulalar, funksiyalar va diagrammalar',
        'Microsoft PowerPoint: chiroyli va zamonaviy taqdimotlar tayyorlash',
        'Internet xavfsizligi, elektron pochta, Google Drive va bulutli xizmatlar'
      ],
      features: [
        'Tez va tushunarli amaliy metodika',
        'Ofis ishlari uchun 100% tayyor amaliy bilim',
        'Kurs yakunida maxsus sertifikat'
      ]
    }
  };

  /* ==========================================================================
     2. NAVBAR SCROLL VA MOBIL MENYU BOSHQARUVI
     ========================================================================== */
  const navbar = document.getElementById('navbar');
  const burgerBtn = document.getElementById('burgerBtn');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-link');

  // Scroll hodisasi — Header blur va soya
  const handleScrollNavbar = () => {
    if (window.scrollY > 30) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };
  window.addEventListener('scroll', handleScrollNavbar, { passive: true });
  handleScrollNavbar();

  // Mobil burger menyuni ochish / yopish
  const toggleMobileMenu = () => {
    const isOpen = navMenu.classList.toggle('open');
    burgerBtn.classList.toggle('active', isOpen);
    burgerBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    document.body.style.overflow = isOpen ? 'hidden' : '';
  };

  const closeMobileMenu = () => {
    if (navMenu.classList.contains('open')) {
      navMenu.classList.remove('open');
      burgerBtn.classList.remove('active');
      burgerBtn.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }
  };

  burgerBtn.addEventListener('click', toggleMobileMenu);

  // Havola bosilganda mobil menyuni yopish
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      closeMobileMenu();
    });
  });

  // Scrollspy: qaysi bo'limda turganini ko'rsatish
  const sections = document.querySelectorAll('section[id], header[id]');
  const observeScrollSpy = () => {
    const scrollPosition = window.scrollY + 120;
    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');
      if (scrollPosition >= top && scrollPosition < top + height) {
        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  };
  window.addEventListener('scroll', observeScrollSpy, { passive: true });

  /* ==========================================================================
     3. KURSLAR KATEGORIYASI BO'YICHA FILTRLASH
     ========================================================================== */
  const filterBtns = document.querySelectorAll('.filter-btn');
  const courseCards = document.querySelectorAll('.course-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      courseCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filterValue === 'all' || category === filterValue) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 20);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(20px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 250);
        }
      });
    });
  });

  /* ==========================================================================
     4. FAQ ACCORDION FUNKSIYASI
     ========================================================================== */
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');

    questionBtn.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      // Boshqa barcha ochiq akkordeonlarni yopish
      faqItems.forEach(otherItem => {
        if (otherItem !== item && otherItem.classList.contains('active')) {
          otherItem.classList.remove('active');
          otherItem.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
          otherItem.querySelector('.faq-answer').style.maxHeight = null;
        }
      });

      // Joriy elementni ochish yoki yopish
      if (isActive) {
        item.classList.remove('active');
        questionBtn.setAttribute('aria-expanded', 'false');
        answer.style.maxHeight = null;
      } else {
        item.classList.add('active');
        questionBtn.setAttribute('aria-expanded', 'true');
        answer.style.maxHeight = answer.scrollHeight + 'px';
      }
    });
  });

  /* ==========================================================================
     5. AKSIYA COUNTDOWN TAYMERI
     ========================================================================== */
  const tDays = document.getElementById('tDays');
  const tHours = document.getElementById('tHours');
  const tMins = document.getElementById('tMins');
  const tSecs = document.getElementById('tSecs');

  // Bugungi kundan boshlab 8 kunlik dinamik aksiya muddati
  let targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 8);
  targetDate.setHours(23, 59, 59);

  const updateCountdown = () => {
    const now = new Date().getTime();
    const distance = targetDate.getTime() - now;

    if (distance <= 0) {
      // Muddati tugaganda qaytadan yangi 7 kunlik tsikl boshlash
      targetDate = new Date();
      targetDate.setDate(targetDate.getDate() + 7);
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    if (tDays) tDays.textContent = String(days).padStart(2, '0');
    if (tHours) tHours.textContent = String(hours).padStart(2, '0');
    if (tMins) tMins.textContent = String(minutes).padStart(2, '0');
    if (tSecs) tSecs.textContent = String(seconds).padStart(2, '0');
  };

  updateCountdown();
  setInterval(updateCountdown, 1000);

  /* ==========================================================================
     6. JONLI STATISTIKA COUNTER (INTERSECTION OBSERVER)
     ========================================================================== */
  const counters = document.querySelectorAll('.counter');
  let countersStarted = false;

  const runCounterAnimation = () => {
    counters.forEach(counter => {
      const target = +counter.getAttribute('data-target');
      let current = 0;
      const increment = Math.ceil(target / 45); // Silliq sanash tezligi

      const updateCount = () => {
        current += increment;
        if (current < target) {
          counter.textContent = current;
          requestAnimationFrame(updateCount);
        } else {
          counter.textContent = target;
        }
      };
      updateCount();
    });
  };

  const statsSection = document.querySelector('.stats-section');
  if (statsSection) {
    const statsObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !countersStarted) {
          countersStarted = true;
          runCounterAnimation();
        }
      });
    }, { threshold: 0.3 });

    statsObserver.observe(statsSection);
  }

  /* ==========================================================================
     7. SCROLL ANIMATSIYALARI (INTERSECTION OBSERVER)
     ========================================================================== */
  const animateElements = document.querySelectorAll('[data-animate]');

  const animationObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const delay = el.getAttribute('data-delay') || 0;
        setTimeout(() => {
          el.classList.add('animated');
        }, delay);
        animationObserver.unobserve(el);
      }
    });
  }, { threshold: 0.15 });

  animateElements.forEach(el => animationObserver.observe(el));

  /* ==========================================================================
     8. TOAST BILDIRISHNOMA TIZIMI
     ========================================================================== */
  const toastContainer = document.getElementById('toastContainer');

  const showToast = (message, type = 'success') => {
    if (!toastContainer) return;

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;

    const icon = type === 'success' ? '✅' : '⚠️';

    toast.innerHTML = `
      <span class="toast-icon">${icon}</span>
      <div class="toast-content">${message}</div>
    `;

    toastContainer.appendChild(toast);

    setTimeout(() => {
      toast.style.animation = 'toastOut 0.35s forwards';
      setTimeout(() => {
        if (toast.parentNode) {
          toast.parentNode.removeChild(toast);
        }
      }, 350);
    }, 4500);
  };

  /* ==========================================================================
     9. MODAL OYNALAR BOSHQARUVI
     ========================================================================== */
  // Kurs batafsil modali
  const courseModal = document.getElementById('courseModal');
  const courseModalContent = document.getElementById('courseModalContent');
  const closeCourseModalBtn = document.getElementById('closeCourseModalBtn');

  // Tezkor ro'yxatdan o'tish modali
  const quickEnrollModal = document.getElementById('quickEnrollModal');
  const closeEnrollModalBtn = document.getElementById('closeEnrollModalBtn');
  const quickModalCourseTitle = document.getElementById('quickModalCourseTitle');
  const quickDisplayCourseName = document.getElementById('quickDisplayCourseName');
  const quickSelectedCourse = document.getElementById('quickSelectedCourse');

  // Kurs tafsilotlarini modalda ochish
  const openCourseDetailModal = (courseId) => {
    const course = COURSES_DATABASE[courseId];
    if (!course) return;

    courseModalContent.innerHTML = `
      <div class="modal-detail-header mb-4">
        <span class="badge-fire mb-2">🔥 OYLIK TO'LOV: ${course.discountPrice}</span>
        <h2 class="text-2xl font-bold text-white mb-2" style="font-size: 1.6rem; color: #f8fafc; margin-top: 8px;">${course.title}</h2>
        <p class="text-muted" style="color: #94a3b8; font-size: 0.95rem; line-height: 1.6;">${course.desc}</p>
      </div>

      <div class="modal-detail-meta" style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08); border-radius: 12px; padding: 16px; margin-bottom: 20px;">
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 12px; font-size: 0.88rem;">
          <div>⏱️ Davomiyligi: <strong style="color:#fff;">${course.duration}</strong></div>
          <div>📅 Darslar: <strong style="color:#fff;">${course.schedule}</strong></div>
          <div>🎯 Yoshi: <strong style="color:#fff;">${course.ageLimit}</strong></div>
          <div>💰 Narx: <strong style="color:#38bdf8;">${course.discountPrice}</strong> <del style="color:#64748b; font-size: 0.8rem;">${course.oldPrice}</del></div>
        </div>
      </div>

      <h4 style="font-size: 1.1rem; font-weight: 700; color: #fff; margin-bottom: 12px;">Kurs davomida nimalarni o'rganasiz:</h4>
      <ul style="display: flex; flex-direction: column; gap: 8px; margin-bottom: 24px;">
        ${course.syllabus.map(item => `
          <li style="display: flex; align-items: flex-start; gap: 10px; font-size: 0.9rem; color: #cbd5e1;">
            <span style="color: #10b981; font-weight: 700;">✓</span>
            <span>${item}</span>
          </li>
        `).join('')}
      </ul>

      <div style="display: flex; gap: 12px; justify-content: flex-end; flex-wrap: wrap;">
        <button class="btn btn-secondary modal-cancel-btn" style="padding: 10px 20px;">Yopish</button>
        <button class="btn btn-primary modal-action-enroll-btn" data-course-title="${course.title}" style="padding: 10px 24px;">
          <span>Shu kursga yozilish</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
        </button>
      </div>
    `;

    courseModal.classList.add('open');
    document.body.style.overflow = 'hidden';

    // Ichki tugmalar
    const cancelBtn = courseModalContent.querySelector('.modal-cancel-btn');
    const enrollFromModalBtn = courseModalContent.querySelector('.modal-action-enroll-btn');

    cancelBtn?.addEventListener('click', closeAllModals);
    enrollFromModalBtn?.addEventListener('click', () => {
      closeAllModals();
      openQuickEnrollModal(course.title);
    });
  };

  // Tezkor ro'yxatdan o'tish modalini ochish
  const openQuickEnrollModal = (courseName = 'Frontend Web Dasturlash') => {
    quickModalCourseTitle.textContent = `${courseName} kursiga yozilish`;
    quickDisplayCourseName.textContent = courseName;
    quickSelectedCourse.value = courseName;

    // Asosiy formadagi selektni ham moslab qo'yish
    const mainCourseSelect = document.getElementById('courseSelect');
    if (mainCourseSelect) {
      for (let option of mainCourseSelect.options) {
        if (option.value.toLowerCase().includes(courseName.toLowerCase()) || courseName.toLowerCase().includes(option.value.toLowerCase())) {
          mainCourseSelect.value = option.value;
          break;
        }
      }
    }

    quickEnrollModal.classList.add('open');
    document.body.style.overflow = 'hidden';
  };

  const closeAllModals = () => {
    courseModal.classList.remove('open');
    quickEnrollModal.classList.remove('open');
    document.body.style.overflow = '';
  };

  // Batafsil tugmalari hodisasi
  document.querySelectorAll('.view-course-detail-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const courseId = btn.getAttribute('data-course-id');
      openCourseDetailModal(courseId);
    });
  });

  // Ro'yxatdan o'tish tugmalari hodisasi
  document.querySelectorAll('.open-enroll-modal-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const courseName = btn.getAttribute('data-course') || 'Barcha kurslar';
      openQuickEnrollModal(courseName);
    });
  });

  // Modal yopish tugmalari
  closeCourseModalBtn?.addEventListener('click', closeAllModals);
  closeEnrollModalBtn?.addEventListener('click', closeAllModals);

  // Tashqi qorong'i fonga bosganda yopish
  [courseModal, quickEnrollModal].forEach(modal => {
    modal?.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeAllModals();
      }
    });
  });

  // ESC tugmasi bosilganda yopish
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeAllModals();
      closeMobileMenu();
    }
  });

  /* ==========================================================================
     10. TELEFON RAQAM FORMATLASH (MASK)
     ========================================================================== */
  const formatPhoneNumber = (input) => {
    input.addEventListener('input', (e) => {
      let value = input.value.replace(/\D/g, ''); // Faqat raqamlar
      if (value.startsWith('998')) {
        value = value.substring(3);
      }

      // Maksimum 9 ta raqam (93 830 44 88)
      value = value.substring(0, 9);

      let formatted = '+998';
      if (value.length > 0) {
        formatted += ' (' + value.substring(0, 2);
      }
      if (value.length >= 2) {
        formatted += ') ';
      }
      if (value.length > 2) {
        formatted += value.substring(2, 5);
      }
      if (value.length >= 5) {
        formatted += '-';
      }
      if (value.length > 5) {
        formatted += value.substring(5, 7);
      }
      if (value.length >= 7) {
        formatted += '-';
      }
      if (value.length > 7) {
        formatted += value.substring(7, 9);
      }

      input.value = formatted;
    });

    input.addEventListener('focus', () => {
      if (!input.value.trim()) {
        input.value = '+998 ';
      }
    });

    input.addEventListener('blur', () => {
      if (input.value.trim() === '+998' || input.value.trim() === '+998 ') {
        input.value = '';
      }
    });
  };

  const phoneInputMain = document.getElementById('phoneInput');
  const quickPhoneInput = document.getElementById('quickPhone');
  if (phoneInputMain) formatPhoneNumber(phoneInputMain);
  if (quickPhoneInput) formatPhoneNumber(quickPhoneInput);

  /* ==========================================================================
     11. FORMA VALIDATSIYASI VA YUBORISH
     ========================================================================== */
  // Asosiy formani yuborish
  const enrollmentForm = document.getElementById('enrollmentForm');
  const fullName = document.getElementById('fullName');
  const courseSelect = document.getElementById('courseSelect');
  const nameError = document.getElementById('nameError');
  const phoneError = document.getElementById('phoneError');
  const courseError = document.getElementById('courseError');
  const submitFormBtn = document.getElementById('submitFormBtn');

  const validatePhone = (value) => {
    const digitsOnly = value.replace(/\D/g, '');
    return digitsOnly.length === 12; // 998 + 9 ta raqam
  };

  enrollmentForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    let isValid = true;

    // Ism tekshiruvi
    if (!fullName.value.trim() || fullName.value.trim().length < 3) {
      nameError.textContent = 'Iltimos, to\'liq ismingizni kiriting (kamida 3 belgi).';
      fullName.style.borderColor = 'var(--danger)';
      isValid = false;
    } else {
      nameError.textContent = '';
      fullName.style.borderColor = 'rgba(255, 255, 255, 0.12)';
    }

    // Telefon tekshiruvi
    if (!validatePhone(phoneInputMain.value)) {
      phoneError.textContent = 'Iltimos, to\'g\'ri telefon raqam kiriting: +998 (__) ___-__-__';
      phoneInputMain.style.borderColor = 'var(--danger)';
      isValid = false;
    } else {
      phoneError.textContent = '';
      phoneInputMain.style.borderColor = 'rgba(255, 255, 255, 0.12)';
    }

    // Kurs tekshiruvi
    if (!courseSelect.value) {
      courseError.textContent = 'Iltimos, ro\'yxatdan o\'tmoqchi bo\'lgan kursingizni tanlang.';
      courseSelect.style.borderColor = 'var(--danger)';
      isValid = false;
    } else {
      courseError.textContent = '';
      courseSelect.style.borderColor = 'rgba(255, 255, 255, 0.12)';
    }

    if (isValid) {
      submitFormBtn.disabled = true;
      submitFormBtn.innerHTML = `
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="animation: spin 1s linear infinite;"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg>
        <span>Yuborilmoqda...</span>
      `;

      // Simulyatsiya qilingan yuborish
      setTimeout(() => {
        submitFormBtn.disabled = false;
        submitFormBtn.innerHTML = `
          <span>Arizani yuborish (480 000 so'm chegirma bilan)</span>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
        `;

        showToast(`Rahmat, ${fullName.value}! Arizangiz qabul qilindi. Tez orada menejerimiz bog'lanadi.`, 'success');
        enrollmentForm.reset();
      }, 1000);
    }
  });

  // Tezkor modal formani yuborish
  const quickEnrollForm = document.getElementById('quickEnrollForm');
  const quickName = document.getElementById('quickName');
  const quickNameError = document.getElementById('quickNameError');
  const quickPhoneError = document.getElementById('quickPhoneError');
  const quickSubmitBtn = document.getElementById('quickSubmitBtn');

  quickEnrollForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    let isValid = true;

    if (!quickName.value.trim() || quickName.value.trim().length < 3) {
      quickNameError.textContent = 'Iltimos, ismingizni kiriting.';
      quickName.style.borderColor = 'var(--danger)';
      isValid = false;
    } else {
      quickNameError.textContent = '';
      quickName.style.borderColor = 'rgba(255, 255, 255, 0.12)';
    }

    if (!validatePhone(quickPhoneInput.value)) {
      quickPhoneError.textContent = 'Telefon raqamingizni to\'liq kiriting.';
      quickPhoneInput.style.borderColor = 'var(--danger)';
      isValid = false;
    } else {
      quickPhoneError.textContent = '';
      quickPhoneInput.style.borderColor = 'rgba(255, 255, 255, 0.12)';
    }

    if (isValid) {
      quickSubmitBtn.disabled = true;
      quickSubmitBtn.innerHTML = `<span>Yuborilmoqda...</span>`;

      setTimeout(() => {
        quickSubmitBtn.disabled = false;
        quickSubmitBtn.innerHTML = `
          <span>Arizani tasdiqlash</span>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
        `;

        const applicantName = quickName.value;
        const applicantCourse = quickSelectedCourse.value || 'IT Kursi';

        closeAllModals();
        quickEnrollForm.reset();

        showToast(`Qabul qilindi! ${applicantName}, siz "${applicantCourse}" kursiga 480 000 so'm aksiya narxida ro'yxatga olindingiz!`, 'success');
      }, 900);
    }
  });

  /* ==========================================================================
     12. BACK TO TOP TUGMASI
     ========================================================================== */
  const backToTopBtn = document.getElementById('backToTopBtn');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      backToTopBtn?.classList.add('visible');
    } else {
      backToTopBtn?.classList.remove('visible');
    }
  }, { passive: true });

  backToTopBtn?.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  /* ==========================================================================
     13. KONFISOZ SOZLAMA: CONSOLE LOG SALOM
     ========================================================================== */
  console.log(
    '%c META IT SCHOOL %c Andijon shahar, Leninskiy ko\'chasi | Tel: (93) 830-44-88 ',
    'background: #6366f1; color: #fff; font-size: 14px; font-weight: bold; border-radius: 4px 0 0 4px; padding: 4px 8px;',
    'background: #06b6d4; color: #000; font-size: 14px; font-weight: bold; border-radius: 0 4px 4px 0; padding: 4px 8px;'
  );
});
