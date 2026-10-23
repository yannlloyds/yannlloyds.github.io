const menuToggle = document.querySelector("#menu-icon");
const navbar = document.querySelector("#primary-navigation");
const header = document.querySelector(".header");
const backToTop = document.querySelector(".back-to-top");
const currentYear = document.querySelector("#current-year");
const navigationLinks = [...document.querySelectorAll(".navbar a")];
const sections = [...document.querySelectorAll("main section[id]")];
const languageToggle = document.querySelector("#language-toggle");
const originalTextNodes = new WeakMap();
const languageTranslations = {
    "Home": "Beranda",
    "Computer Science Student": "Mahasiswa Ilmu Komputer",
    "Hi, It's": "Halo, saya",
    "Welcome to": "Selamat datang di",
    "My Portofolio Website": "Website Portofolio Saya",
    "Computer Science Student | Computer Networks | Frontend Web Development": "Mahasiswa Ilmu Komputer | Jaringan Komputer | Pengembangan Web Frontend",
    "Send an Email": "Kirim Email",
    "View CV": "Lihat CV",
    "About": "Tentang",
    "Me": "Saya",
    "My journey in the digital world began during vocational high school as a self taught learner. Over time, I have developed skills in coding, computer networking, Internet of Things (IoT), and interface design through various projects and hands-on experience.": "Perjalanan saya di dunia digital dimulai saat SMK sebagai pembelajar mandiri. Seiring waktu, saya mengembangkan keterampilan pemrograman, jaringan komputer, Internet of Things (IoT), dan desain antarmuka melalui berbagai proyek dan pengalaman langsung.",
    "I am capable of developing simple systems, creating design prototypes, and implementing IoT solutions. By combining technical skills with creativity, I focus on building solutions that are effective, efficient, and user-friendly.": "Saya mampu mengembangkan sistem sederhana, membuat prototipe desain, dan menerapkan solusi IoT. Dengan memadukan keterampilan teknis dan kreativitas, saya berfokus membangun solusi yang efektif, efisien, dan mudah digunakan.",
    "Read More": "Selengkapnya",
    "Projects": "Proyek",
    "A simple food ordering website that allows users to browse menus and place orders easily.": "Website pemesanan makanan sederhana yang memungkinkan pengguna melihat menu dan memesan dengan mudah.",
    "Web development": "Pengembangan web",
    "Microcontroller": "Mikrokontroler",
    "Creating a simple project using the Huna MRT microcontroller based kit, incorporating a servo motor, sensors, and an automatic control system.": "Membuat proyek sederhana menggunakan kit mikrokontroler Huna MRT yang dilengkapi motor servo, sensor, dan sistem kendali otomatis.",
    "IoT & hardware": "IoT & perangkat keras",
    "Create a prototype project of Targaz Mobile APP using figma to view course schedules and task lists": "Membuat prototipe aplikasi Targaz Mobile menggunakan Figma untuk melihat jadwal kuliah dan daftar tugas.",
    "UI prototype": "Prototipe UI",
    "Library Information System": "Sistem Informasi Perpustakaan",
    "A web application for managing library books, members, loans, and reports.": "Aplikasi web untuk mengelola data buku, anggota, peminjaman, dan laporan perpustakaan.",
    "My": "Sertifikat",
    "Certificate": "Sertifikat",
    "Certificate of Digital Literacy by Kominfo": "Sertifikat Literasi Digital dari Kominfo",
    "Participated in the Digital Literacy Program by Kominfo, covering topics such as digital skills, cybersecurity awareness, and responsible use of technology.": "Mengikuti Program Literasi Digital dari Kominfo yang membahas keterampilan digital, kesadaran keamanan siber, dan penggunaan teknologi secara bertanggung jawab.",
    "View Certificate": "Lihat Sertifikat",
    "AI & Digital Literacy Webinar - Kominfo x Microsoft": "Webinar AI & Literasi Digital - Kominfo x Microsoft",
    "Participated in a digital literacy webinar discussing the impact of AI on digital talent, organized by Kominfo in collaboration with Microsoft.": "Mengikuti webinar literasi digital yang membahas dampak AI terhadap talenta digital, diselenggarakan oleh Kominfo bersama Microsoft.",
    "C++ Programming Course - Dilesin Academy": "Kursus Pemrograman C++ - Dilesin Academy",
    "Enhanced programming skills through intensiv C++ training, emphasizing logical thinking and real world problem solving.": "Meningkatkan keterampilan pemrograman melalui pelatihan intensif C++ yang menekankan pemikiran logis dan pemecahan masalah nyata.",
    "Network Analys Competency Certification - BNSP": "Sertifikasi Kompetensi Analis Jaringan - BNSP",
    "Certified as a Network Analyst by BNSP, demonstrating competence in network analysis, configuration, and troubleshooting based on national standards.": "Bersertifikat Analis Jaringan dari BNSP, dengan kompetensi analisis, konfigurasi, dan pemecahan masalah jaringan sesuai standar nasional.",
    "IoT & Robotics Instructor Intern - PT. Racer Robotic Indonesia": "Magang Instruktur IoT & Robotika - PT. Racer Robotic Indonesia",
    "Guided students in learning IoT, Arduino, and basic robotics through interactive and practical sessions during the internship program.": "Membimbing siswa mempelajari IoT, Arduino, dan dasar robotika melalui sesi praktik interaktif selama program magang.",
    "About Me": "Tentang Saya",
    "Contact": "Kontak",
    "All rights reserved.": "Hak cipta dilindungi.",
    "Contact Me": "Hubungi Saya",
    "Select language": "Pilih bahasa",
    "Open navigation menu": "Buka menu navigasi",
    "Close navigation menu": "Tutup menu navigasi",
    "Main navigation": "Navigasi utama",
    "Certificate gallery": "Galeri sertifikat",
    "Previous certificates": "Sertifikat sebelumnya",
    "Next certificates": "Sertifikat berikutnya",
    "Project gallery": "Galeri proyek",
    "Previous projects": "Proyek sebelumnya",
    "Next projects": "Proyek berikutnya",
    "Back to top": "Kembali ke atas",
    "Portrait of Dhasya Adrian Maulana": "Foto Dhasya Adrian Maulana",
    "Dhasya Adrian Maulana": "Dhasya Adrian Maulana",
    "Preview of the Warung Nusantara food ordering website": "Pratinjau website pemesanan Warung Nusantara",
    "Huna MRT microcontroller project with sensors and servo motor": "Proyek mikrokontroler Huna MRT dengan sensor dan motor servo",
    "Preview of the Targaz mobile app prototype": "Pratinjau prototipe aplikasi Targaz",
    "Preview of the library information system web application": "Pratinjau aplikasi web sistem informasi perpustakaan",
    "Kominfo Digital Literacy certificate": "Sertifikat Literasi Digital Kominfo",
    "Kominfo and Microsoft AI and Digital Literacy webinar certificate": "Sertifikat webinar AI dan Literasi Digital Kominfo dan Microsoft",
    "Dilesin Academy C++ programming course certificate": "Sertifikat kursus pemrograman C++ Dilesin Academy",
    "BNSP Network Analyst competency certificate": "Sertifikat kompetensi Analis Jaringan BNSP",
    "Racer Robotic Indonesia IoT and robotics internship certificate": "Sertifikat magang IoT dan robotika Racer Robotic Indonesia",
    "Personal portfolio of Dhasya Adrian Maulana, a computer science student interested in networks, IoT, and frontend development.": "Portofolio pribadi Dhasya Adrian Maulana, mahasiswa ilmu komputer yang tertarik pada jaringan, IoT, dan pengembangan frontend."
};
const translations = {
    en: {},
    id: languageTranslations
};

Object.entries(languageTranslations).forEach(([english, indonesian]) => {
    translations.en[english] = english;
    translations.en[indonesian] = english;
    translations.id[english] = indonesian;
    translations.id[indonesian] = indonesian;
});

const translatePage = (language) => {
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    let textNode;

    while ((textNode = walker.nextNode())) {
        const text = textNode.nodeValue;
        const content = text.trim();
        if (!originalTextNodes.has(textNode)) originalTextNodes.set(textNode, content);

        const original = originalTextNodes.get(textNode);
        const isNavigationCertificate = original === "Certificate" && textNode.parentElement.closest(".navbar");
        const isCertificateHeading = original === "Certificate" && textNode.parentElement.closest(".certificate .heading");
        const translated = isNavigationCertificate
            ? language === "id" ? "Sertifikat" : original
            : isCertificateHeading
                ? language === "id" ? "Saya" : original
                : translations[language]?.[original] ?? original;
        if (!translated) continue;

        const start = text.match(/^\s*/)?.[0] ?? "";
        const end = text.match(/\s*$/)?.[0] ?? "";
        textNode.nodeValue = `${start}${translated}${end}`;
    }

    document.querySelectorAll("[aria-label]").forEach((element) => {
        const label = element.getAttribute("aria-label");
        const translated = translations[language]?.[label];
        if (translated) element.setAttribute("aria-label", translated);
    });

    document.querySelectorAll("img[alt]").forEach((image) => {
        const alt = image.getAttribute("alt");
        const translated = translations[language]?.[alt];
        if (translated) image.setAttribute("alt", translated);
    });

    document.documentElement.lang = language;
    document.title = language === "id"
        ? "Dhasya Adrian Maulana | Portofolio"
        : "Dhasya Adrian Maulana | Portfolio";

    const description = document.querySelector('meta[name="description"]');
    if (description) {
        description.content = language === "id"
            ? languageTranslations["Personal portfolio of Dhasya Adrian Maulana, a computer science student interested in networks, IoT, and frontend development."]
            : "Personal portfolio of Dhasya Adrian Maulana, a computer science student interested in networks, IoT, and frontend development.";
    }
};

languageToggle?.addEventListener("click", () => {
    const language = document.documentElement.lang === "id" ? "en" : "id";
    translatePage(language);
    languageToggle.classList.toggle("is-indonesian", language === "id");
    languageToggle.classList.remove("is-spinning");
    languageToggle.querySelector(".language-toggle__label").textContent = language.toUpperCase();
    languageToggle.setAttribute("aria-pressed", String(language === "id"));
    languageToggle.setAttribute("aria-label", language === "id" ? "Switch to English" : "Switch to Indonesian");

    if (prefersReducedMotion) return;

    void languageToggle.offsetWidth;
    languageToggle.classList.add("is-spinning");
    languageToggle.addEventListener("animationend", () => {
        languageToggle.classList.remove("is-spinning");
    }, { once: true });
});

const contentTargets = {
    "#home": ".home",
    "#about": ".about-content h2",
    "#projects": ".projects .heading",
    "#certificate": ".certificate .heading"
};
const targetOffsets = {
    "#about": 64
};

const scrollToContent = (hash) => {
    const selector = contentTargets[hash];
    const target = selector ? document.querySelector(selector) : null;
    if (!target) return;

    const headerOffset = header?.getBoundingClientRect().height ?? 0;
    const top = target.getBoundingClientRect().top + window.scrollY - headerOffset - 12 - (targetOffsets[hash] ?? 0);
    window.scrollTo({ top, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
};

document.querySelectorAll('a[href^="#"]').forEach((link) => {
    const hash = link.getAttribute("href");
    if (!contentTargets[hash]) return;

    link.addEventListener("click", (event) => {
        event.preventDefault();
        if (window.location.hash !== hash) window.history.pushState(null, "", hash);
        scrollToContent(hash);
    });
});

window.addEventListener("popstate", () => scrollToContent(window.location.hash || "#home"));

const closeMenu = () => {
    if (!menuToggle || !navbar) return;

    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation menu");
    menuToggle.querySelector("i")?.classList.replace("bx-x", "bx-menu-alt-right");
    navbar.classList.remove("active");
};

if (menuToggle && navbar) {
    menuToggle.addEventListener("click", () => {
        const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";

        menuToggle.setAttribute("aria-expanded", String(!isExpanded));
        menuToggle.setAttribute("aria-label", isExpanded ? "Open navigation menu" : "Close navigation menu");
        menuToggle.querySelector("i")?.classList.toggle("bx-menu-alt-right", isExpanded);
        menuToggle.querySelector("i")?.classList.toggle("bx-x", !isExpanded);
        navbar.classList.toggle("active", !isExpanded);
    });

    navigationLinks.forEach((link) => link.addEventListener("click", closeMenu));

    document.addEventListener("click", (event) => {
        if (!navbar.contains(event.target) && !menuToggle.contains(event.target)) closeMenu();
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") closeMenu();
    });
}

const updateScrollState = () => {
    const isScrolled = window.scrollY > 24;
    header?.classList.toggle("is-scrolled", isScrolled);
    backToTop?.classList.toggle("is-visible", window.scrollY > 500);
};

updateScrollState();
window.addEventListener("scroll", updateScrollState, { passive: true });

if (currentYear) currentYear.textContent = String(new Date().getFullYear());

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const initializeMarquee = ({ marqueeSelector, trackSelector, setSelector, direction }) => {
    const marquee = document.querySelector(marqueeSelector);
    const track = marquee?.querySelector(trackSelector);
    const set = track?.querySelector(setSelector);
    if (!marquee || !track || !set) return;

    const duplicateSet = set.cloneNode(true);
    duplicateSet.setAttribute("aria-hidden", "true");
    duplicateSet.querySelectorAll("a, button").forEach((control) => control.setAttribute("tabindex", "-1"));
    track.append(duplicateSet);
    track.classList.add("is-running");

    let position = 0;
    let targetPosition = 0;
    let cycleWidth = 0;
    let lastFrame = 0;
    let frameId = 0;
    let isInViewport = false;
    let isPageVisible = !document.hidden;

    const wrapPosition = (value) => ((value % cycleWidth) + cycleWidth) % cycleWidth;
    const scheduleFrame = () => {
        if (frameId || !isInViewport || !isPageVisible) return;
        frameId = requestAnimationFrame(renderFrame);
    };

    const moveByCard = (direction) => {
        const firstCard = set.querySelector(".project-card, .certificate-card");
        if (!firstCard || !cycleWidth) return;

        const gap = Number.parseFloat(getComputedStyle(set).columnGap) || 0;
        const distance = firstCard.getBoundingClientRect().width + gap;
        targetPosition = wrapPosition(targetPosition + direction * distance);
        scheduleFrame();
    };

    const measureCycle = () => {
        cycleWidth = set.getBoundingClientRect().width;
        if (!cycleWidth) return;
        position = wrapPosition(position);
        targetPosition = wrapPosition(targetPosition);
        scheduleFrame();
    };

    const renderFrame = (time) => {
        frameId = 0;
        if (!isInViewport || !isPageVisible) return;

        const deltaTime = lastFrame ? Math.min((time - lastFrame) / 1000, 0.05) : 0;
        lastFrame = time;

        if (!prefersReducedMotion) {
            targetPosition = wrapPosition(targetPosition + direction * 24 * deltaTime);
        }

        if (cycleWidth) {
            if (prefersReducedMotion) {
                position = targetPosition;
            } else {
                const difference = ((targetPosition - position + cycleWidth / 2) % cycleWidth + cycleWidth) % cycleWidth - cycleWidth / 2;
                position = wrapPosition(position + difference * Math.min(1, deltaTime * 7));
            }
            track.style.transform = `translate3d(${-position}px, 0, 0)`;
        }

        if (!prefersReducedMotion) scheduleFrame();
    };

    marquee.querySelectorAll(".certificate-nav").forEach((button) => {
        button.addEventListener("click", () => {
            moveByCard(button.classList.contains("certificate-nav--next") ? 1 : -1);
        });
    });

    marquee.addEventListener("wheel", (event) => {
        const horizontalDelta = event.deltaX || (event.shiftKey ? event.deltaY : 0);
        if (Math.abs(horizontalDelta) < 1) return;

        event.preventDefault();
        targetPosition = wrapPosition(targetPosition + horizontalDelta);
        scheduleFrame();
    }, { passive: false });

    new ResizeObserver(measureCycle).observe(set);
    new IntersectionObserver(([entry]) => {
        isInViewport = entry.isIntersecting;
        lastFrame = 0;
        if (isInViewport) {
            scheduleFrame();
        } else if (frameId) {
            cancelAnimationFrame(frameId);
            frameId = 0;
        }
    }).observe(marquee);
    document.addEventListener("visibilitychange", () => {
        isPageVisible = !document.hidden;
        lastFrame = 0;
        if (isPageVisible) {
            scheduleFrame();
        } else if (frameId) {
            cancelAnimationFrame(frameId);
            frameId = 0;
        }
    });
    measureCycle();
};

initializeMarquee({
    marqueeSelector: ".certificate-marquee",
    trackSelector: ".certificate-track",
    setSelector: ".certificate-box",
    direction: 1
});
initializeMarquee({
    marqueeSelector: ".project-marquee",
    trackSelector: ".project-track",
    setSelector: ".projects-box",
    direction: -1
});

const revealElements = document.querySelectorAll(
    ".home-content, .home-img, .about-img, .about-content, .project-card, .certificate-card"
);

if (!prefersReducedMotion && "IntersectionObserver" in window) {
    document.body.classList.add("has-reveal");
    const visibleRevealElements = [...revealElements].filter((element) => !element.closest('[aria-hidden="true"]'));

    const revealObserver = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;

                entry.target.classList.add("is-visible");
                observer.unobserve(entry.target);
            });
        },
        { threshold: 0.12 }
    );

    visibleRevealElements.forEach((element, index) => {
        element.classList.add("reveal");
        if (element.matches(".project-card, .certificate-card")) {
            element.style.animationDelay = `${(index % 3) * 80}ms`;
        }
        revealObserver.observe(element);
    });
}

if ("IntersectionObserver" in window && sections.length && navigationLinks.length) {
    const sectionObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;

                navigationLinks.forEach((link) => {
                    const isCurrent = link.getAttribute("href") === `#${entry.target.id}`;
                    link.classList.toggle("active", isCurrent);
                    if (isCurrent) link.setAttribute("aria-current", "location");
                    else link.removeAttribute("aria-current");
                });
            });
        },
        { rootMargin: "-35% 0px -55% 0px" }
    );

    sections.forEach((section) => sectionObserver.observe(section));
}
