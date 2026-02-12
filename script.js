// --- 1. THEME INITIALIZATION ---
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') {
    document.body.classList.add('light-mode');
}

// Get case2-img if it exists (Safety check)
const case2Img = document.getElementById('case2-img');

// Initial Theme Check for Image
if (savedTheme === 'light') {
    if(case2Img) case2Img.src = 'images/undisplayed-black.svg';
} else {
    if(case2Img) case2Img.src = 'images/undisplayed.svg';
}

let currentLang = localStorage.getItem('lang') || 'en';

// --- 2. TRANSLATION CONFIGURATION ---
const translations = {
    en: {
        nav_about: "About",
        nav_work: "Work",
        nav_contact: "Contact",
        hero_tagline: "Crafting digital experiences with punch, precision, and purpose.",
        about_title: "About Me.",
        about_bio: "Hi, I'm a 23 year old Graphic Designer and student at the University of West Attica. I specialize in Branding, UI Design, and visual identity. My focus is on delivering creative solutions that combine aesthetics with functionality, bringing unique ideas to life.",
        cert_title: "Certifications",
        section_cases: "Selected Cases",
        section_posters: "Poster Archive",
        section_apparel: "Apparel Design",
        
        // Buttons & Labels
        btn_view_case: "View Full Case (+)",
        btn_close_case: "Close Case (-)",
        label_challenge: "The Challenge:",
        label_solution: "The Solution:",
        footer_lets_work: "Let's work together.",
        footer_email: "mpougaikostas3@hotmail.com",

        // CASE 1
        case1_intro: "Creation of a Visual Identity and UI elements for a fitness and wellness application. The name \"POH\" (Flow) alludes to movement, breath, and continuity.",
        case1_challenge: "To visualize \"Flow\" without using generic fitness tropes. The key constraint was creating a symbol that retains high legibility and character when scaled down as a mobile App Icon.",
        case1_solution: "A minimal \"P\" monogram combining geometric structure with a fluid curve. The high-contrast design and blue-violet gradient ensure the icon remains distinct and recognizable even on crowded mobile screens.",

        // CASE 2
        case2_intro: "Evolution of a personal brand identity. Moving from illustrative distortion to structural clarity, this project introduces a cohesive system designed for longevity and cross-platform versatility.",
        case2_challenge: "To execute a strategic rebranding that moves away from the previous retro, distorted aesthetic which felt \"dated\" and limited in application. The goal was to establish a timeless and versatile visual system that better reflects the professional adaptability required in modern graphic design contexts.",
        case2_solution: "I developed a minimalist geometric wordmark and a responsive \"U\" monogram, both constructed on a precise grid system to ensure balance and consistency. The high-contrast color palette (Vibrant Orange & Dark Navy) combined with clean typography (Asty Cf) creates a bold, professional identity that is easily adaptable across various digital and print mediums.",

        // CASE 3
        case3_intro: "To design a commemorative art book celebrating the centennial of legendary Greek composers Mikis Theodorakis and Manos Hatzidakis.",
        case3_challenge: "To design a commemorative art book celebrating the centennial of legendary Greek composers Mikis Theodorakis and Manos Hatzidakis. The core objective was to visualize the auditory experience of \"Entechno\" (Art Music) for a younger audience, avoiding a traditional, \"dated\" historical aesthetic. The challenge lay in translating lyrical rhythm into visual form while maintaining readability within a complex layout system.",
        case3_solution: "I conceptualized a \"hybrid artbook\" that functions as both a literary archive and a visual experience.<br><br>" +
                        "<ul class='custom-list'>" + 
                        "<li><strong>Visual Rhythm:</strong> I utilized concrete poetry techniques, transforming lyrics into typographic shapes that mimic the tempo and melody of the songs.</li>" + 
                        "<li><strong>Grid & Typography:</strong> A strict 8-column grid provides structure, juxtaposed with expressive, hand-made collages. I paired the geometric Futura typeface (modernity) with a Typewriter font (evoking the songwriting process) to create textural contrast.</li>" + 
                        "<li><strong>Print Production:</strong> The design features gatefold pages (expanding sheets) to reveal large-scale illustrations and an exposed spine binding, emphasizing the book as a constructed, tactile object.</li>" + 
                        "</ul>"
    },
    gr: {
        nav_about: "Σχετικα",
        nav_work: "Εργα",
        nav_contact: "Επικοινωνια",
        hero_tagline: "Δημιουργία ψηφιακών εμπειριών με ακρίβεια και σκοπό.",
        about_title: "Σχετικά με εμένα.",
        about_bio: "Γεια σας, είμαι 23 ετών, Γραφίστας και Φοιτητής στο Πανεπιστήμιο Δυτικής Αττικής (ΠΑΔΑ). Εξειδικεύομαι στο Branding, το UI Design και την Οπτική Ταυτότητα (Visual Identity). Στόχος μου είναι να προσφέρω δημιουργικές λύσεις που συνδυάζουν την αισθητική με τη λειτουργικότητα, μετατρέποντας μοναδικές ιδέες σε πραγματικότητα.",
        cert_title: "Πιστοποιήσεις",
        section_cases: "Επιλεγμένα Έργα",
        section_posters: "Αρχείο Αφισών",
        section_apparel: "Σχεδιασμός Γραφικών Ρούχων",
        
        // Buttons & Labels
        btn_view_case: "Προβολή Έργου (+)",
        btn_close_case: "Κλείσιμο (-)",
        label_challenge: "Η Πρόκληση:",
        label_solution: "Η Λύση:",
        footer_lets_work: "Ας συνεργαστούμε.",
        footer_email: "mpougaikostas3@hotmail.com",

        // CASE 1
        case1_intro: "Δημιουργία οπτικής ταυτότητας (Visual Identity) και UI στοιχείων για μια εφαρμογή ευεξίας και γυμναστικής. Το όνομα \"POH\" (Ροή) παραπέμπει στην κίνηση, την αναπνοή και τη συνέχεια.",
        case1_challenge: "Η οπτικοποίηση της \"Ροής\" χωρίς τη χρήση συνηθισμένων κλισέ fitness. Ο βασικός περιορισμός ήταν η δημιουργία ενός συμβόλου που διατηρεί υψηλή αναγνωσιμότητα και χαρακτήρα όταν μικραίνει ως App Icon κινητού.",
        case1_solution: "Ένα μινιμαλιστικό μονόγραμμα \"P\" που συνδυάζει γεωμετρική δομή με μια ρευστή καμπύλη. Ο σχεδιασμός υψηλής αντίθεσης και η μπλε-ιώδης διαβάθμιση εξασφαλίζουν ότι το εικονίδιο παραμένει ευδιάκριτο και αναγνωρίσιμο ακόμα και σε γεμάτες οθόνες κινητών.",

        // CASE 2
        case2_intro: "Εξέλιξη μιας προσωπικής εταιρικής ταυτότητας. Μεταβαίνοντας από τη ρετρό παραμόρφωση στη δομική καθαρότητα, αυτό το έργο εισάγει ένα συνεκτικό οπτικό σύστημα σχεδιασμένο για μακροζωία και ευελιξία σε πολλαπλές πλατφόρμες.",
        case2_challenge: "Η υλοποίηση ενός στρατηγικού rebranding για την απομάκρυνση από την προηγούμενη ρετρό, παραμορφωμένη αισθητική που έδειχνε \"παρωχημένη\" και με περιορισμένη εφαρμογή. Ο στόχος ήταν η καθιέρωση ενός διαχρονικού και ευέλικτου οπτικού συστήματος που αντικατοπτρίζει καλύτερα την επαγγελματική προσαρμοστικότητα που απαιτείται στο σύγχρονο graphic design.",
        case2_solution: "Ανέπτυξα ένα μινιμαλιστικό γεωμετρικό λογότυπο (wordmark) και ένα προσαρμόσιμο μονόγραμμα \"U\", κατασκευασμένα αμφότερα σε ένα ακριβές σύστημα πλέγματος (grid) για την εξασφάλιση ισορροπίας και συνέπειας. Η χρωματική παλέτα υψηλής αντίθεσης (Ζωηρό Πορτοκαλί & Σκούρο Ναυτικό Μπλε) σε συνδυασμό με την καθαρή τυπογραφία (Asty Cf) δημιουργούν μια τολμηρή, επαγγελματική ταυτότητα που προσαρμόζεται εύκολα σε διάφορα ψηφιακά και έντυπα μέσα.",

        // CASE 3
        case3_intro: "Σχεδιασμός επετειακού λευκώματος για τα 100 χρόνια από τη γέννηση των Μίκη Θεοδωράκη και Μάνου Χατζιδάκι.",
        case3_challenge: "Ο σχεδιασμός ενός επετειακού λευκώματος τέχνης για τον εορτασμό των 100 χρόνων από τη γέννηση των Μίκη Θεοδωράκη και Μάνου Χατζιδάκι. Ο βασικός στόχος ήταν η οπτικοποίηση της ακουστικής εμπειρίας του \"Έντεχνου\" για ένα νεότερο κοινό, αποφεύγοντας μια παραδοσιακή, \"παρωχημένη\" ιστορική αισθητική. Η δυσκολία έγκειτο στη μετάφραση του λυρικού ρυθμού σε οπτική φόρμα, διατηρώντας παράλληλα την αναγνωσιμότητα μέσα σε ένα σύνθετο σύστημα διάταξης.",
        case3_solution: "Συνέλαβα την ιδέα ενός \"υβριδικού artbook\" που λειτουργεί τόσο ως λογοτεχνικό αρχείο όσο και ως οπτική εμπειρία." +
                        "<ul class='custom-list'>" + 
                        "<li><strong>Οπτικός Ρυθμός:</strong> Χρησιμοποίησα τεχνικές συγκεκριμένης ποίησης, μετατρέποντας τους στίχους σε τυπογραφικά σχήματα που μιμούνται τον ρυθμό και τη μελωδία των τραγουδιών.</li>" + 
                        "<li><strong>Πλέγμα & Τυπογραφία:</strong> Ένα αυστηρό οκτάστηλο πλέγμα παρέχει τη δομή , σε αντίστιξη με τα εκφραστικά, χειροποίητα κολάζ. Συνδύασα τη γεωμετρική γραμματοσειρά Futura (μοντερνισμός) με μια γραμματοσειρά Γραφομηχανής (παραπέμποντας στη δημιουργική διαδικασία του στίχου) για να δημιουργήσω υφική αντίθεση.</li>" + 
                        "<li><strong>Παραγωγή:</strong> Ο σχεδιασμός περιλαμβάνει αναδιπλούμενα φύλλα που αποκαλύπτουν εικονογραφήσεις μεγάλης κλίμακας και βιβλιοδεσία με εμφανή ράχη, τονίζοντας το βιβλίο ως ένα κατασκευασμένο, απτικό αντικείμενο.</li>" + 
                        "</ul>"
    }
};

// --- 3. BOOT ANIMATION ---
const loader = document.getElementById('loader-wrapper');
const video = document.getElementById('intro-video');

if (savedTheme === 'light' && video) {
    const source = video.querySelector('source');
    if (source) {
        source.src = 'images/intro-light.mp4'; 
        video.load(); 
    }
}

window.onbeforeunload = function () { window.scrollTo(0, 0); }
document.body.classList.add('loading');

if (video) {
    video.play().catch(error => {
        console.log("Autoplay prevented:", error);
        finishBootSequence();
    });
    video.addEventListener('ended', () => { finishBootSequence(); });
} else {
    finishBootSequence();
}

function finishBootSequence() {
    if(loader) {
        loader.classList.add('loader-hidden');
        setTimeout(() => { loader.style.display = 'none'; }, 1000);
    }
    document.body.classList.remove('loading');
}

// --- 4. RGB SPLIT CURSOR ---
const red = document.getElementById('c-red');
const green = document.getElementById('c-green');
const blue = document.getElementById('c-blue');

const cursors = [
    { el: red,   x: 0, y: 0, speed: 0.25 }, // Fast
    { el: green, x: 0, y: 0, speed: 0.15 }, // Medium
    { el: blue,  x: 0, y: 0, speed: 0.10 }  // Slow (Draggy)
];

let mouseX = 0;
let mouseY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function animateCursor() {
    cursors.forEach(c => {
        // Physics Lag for each channel
        c.x += (mouseX - c.x) * c.speed;
        c.y += (mouseY - c.y) * c.speed;
        
        c.el.style.left = c.x + 'px';
        c.el.style.top = c.y + 'px';
    });

    requestAnimationFrame(animateCursor);
}
animateCursor();

// Hover Effects for Cursor
const triggers = document.querySelectorAll('.hover-trigger, .lb-control, .lb-close-btn, #close-cert, #theme-toggle, #back-to-top, #lang-toggle, .hamburger, .mq-btn, .grid-item');

triggers.forEach(trigger => {
    trigger.addEventListener('mouseenter', () => {
        cursors.forEach(c => c.el.classList.add('hovered'));
    });
    
    trigger.addEventListener('mouseleave', () => {
        cursors.forEach(c => c.el.classList.remove('hovered'));
    });
});

// --- 5. SCROLL OBSERVER ---
const observerOptions = { threshold: 0.1 };
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);
document.querySelectorAll('.reveal').forEach(el => { observer.observe(el); });

// --- 6. ACCORDION LOGIC ---
const expandBtns = document.querySelectorAll('.expand-btn');
expandBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const content = e.target.nextElementSibling;
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
            btn.innerText = translations[currentLang]['btn_view_case'];
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
            btn.innerText = translations[currentLang]['btn_close_case'];
        }
    });
});

// --- 7. NAV & HAMBURGER ---
const logo = document.getElementById('site-logo');
const nav = document.getElementById('site-nav');
const navBar = document.querySelector('nav');
const backToTopBtn = document.getElementById('back-to-top');
const hamburgerBtn = document.getElementById('hamburger-btn');

window.addEventListener('scroll', () => {
    // Only apply for mobile or if the smooth scroll is NOT active
    // For desktop smooth scroll, we use the internal loop variable
    if (window.innerWidth <= 768) {
        if (document.body.classList.contains('modal-open')) return;

        const scrollY = window.scrollY;
        
        if (scrollY > 50) {
            logo.classList.add('nav-hidden');
            if (hamburgerBtn) hamburgerBtn.classList.add('nav-hidden');
        } else {
            logo.classList.remove('nav-hidden');
            if (hamburgerBtn) hamburgerBtn.classList.remove('nav-hidden');
        }
    }
}, { passive: true });

// DESKTOP: We will update the navbar inside the smooth scroll loop

if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
        // Smooth scroll specific reset
        targetScroll = 0;
        window.scrollTo({ top: 0, behavior: 'smooth' }); // For mobile
    });
}

const navLinksContainer = document.querySelector('.nav-links');
const navLinksItems = document.querySelectorAll('.nav-item');

if (hamburgerBtn) {
    hamburgerBtn.addEventListener('click', () => {
        hamburgerBtn.classList.toggle('active');
        navLinksContainer.classList.toggle('active');
        document.body.classList.toggle('modal-open'); 
        navBar.classList.toggle('menu-active');
    });
}

navLinksItems.forEach(link => {
    link.addEventListener('click', (e) => {
        // Intercept click for smooth scroll on desktop
        if(window.innerWidth > 768) {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetEl = document.getElementById(targetId);
            if(targetEl) {
                // Get offset top relative to body
                const box = targetEl.getBoundingClientRect();
                const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                // Update target for smooth scroll loop
                targetScroll = box.top + scrollTop - 100; // -100 for header offset
            }
        } else {
            // Mobile behavior
            hamburgerBtn.classList.remove('active');
            navLinksContainer.classList.remove('active');
            document.body.classList.remove('modal-open');
            navBar.classList.remove('menu-active');
        }
    });
});

// --- 8. INFINITE MARQUEE (ORIGINAL MOMENTUM SCROLL) ---
const marqueeTrack = document.getElementById('marquee-track');
const mqLeft = document.getElementById('mq-left');
const mqRight = document.getElementById('mq-right');
const posterMarquee = document.getElementById('poster-marquee');

let scrollPos = 0;
let speed = 1; // Constant base speed
let momentum = 0; 
let isHoveringMarquee = false;

if (marqueeTrack) {
    // Clone items for infinite loop
    const items = marqueeTrack.innerHTML;
    marqueeTrack.innerHTML += items; 

    function animateMarquee() {
        if (window.innerWidth <= 768) {
            requestAnimationFrame(animateMarquee);
            return;
        }

        // 1. Friction (Slows down the momentum smoothly)
        momentum *= 0.95; 

        // 2. Calculate Velocity (Base Speed + Momentum)
        // If hovering, we stop the base speed so you can look at the poster,
        // but we maintain momentum so it doesn't "slam" to a halt instantly.
        let currentSpeed = (isHoveringMarquee ? 0 : speed) + momentum;
        scrollPos -= currentSpeed;
        
        // 3. Infinite Loop Reset
        const maxScroll = marqueeTrack.scrollWidth / 2;
        if (Math.abs(scrollPos) >= maxScroll) {
            scrollPos = 0;
        } else if (scrollPos > 0) {
            scrollPos = -maxScroll;
        }
        
        // Apply Transform (Simple X translation, no scale/zoom)
        marqueeTrack.style.transform = `translateX(${scrollPos}px)`;
        
        requestAnimationFrame(animateMarquee);
    }
    
    requestAnimationFrame(animateMarquee);

    // CONTROLS
    // Gentle push (60) instead of a huge jump
    if(mqLeft) {
        mqLeft.addEventListener('click', () => { 
            momentum -= 60; 
        });
    }
    if(mqRight) {
        mqRight.addEventListener('click', () => { 
            momentum += 60; 
        });
    }
}

// --- SMOOTH SCROLL VARIABLES ---
const scrollContainer = document.getElementById('scroll-container');
let currentScroll = 0;
let targetScroll = 0;
let stopScrollUpdate = false; // Flag to pause scroll when modal opens

// --- 9. LIGHTBOX (SAFE VERSION) ---
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxCaption = document.getElementById('lightbox-caption'); 
const lbPrev = document.getElementById('lb-prev');
const lbNext = document.getElementById('lb-next');
const lbClose = document.getElementById('lb-close');

let currentPlaylist = []; 
let currentIndex = 0;

document.body.addEventListener('click', (e) => {
    if (e.target.classList.contains('lightbox-trigger')) {
        e.stopPropagation();
        
        // PAUSE SCROLL
        stopScrollUpdate = true;
        document.body.classList.add('modal-open'); 
        
        const img = e.target;
        const parentGallery = img.closest('.masonry-grid') || 
                              img.closest('.masonry-grid-apparel') || 
                              img.closest('.cs-mini-gallery') ||
                              img.closest('.marquee-track');

        if (parentGallery) {
            currentPlaylist = Array.from(parentGallery.querySelectorAll('.lightbox-trigger'));
            currentIndex = currentPlaylist.indexOf(img);
            updateLightboxImage();
            lightbox.classList.add('active');
        }
    }
});

function updateLightboxImage() {
    if (!currentPlaylist.length) return;
    const currentImg = currentPlaylist[currentIndex];
    lightboxImg.src = currentImg.src;
    const captionText = currentImg.getAttribute('data-caption');
    if (lightboxCaption) {
        if (captionText) {
            lightboxCaption.innerText = captionText;
            lightboxCaption.style.display = 'block';
        } else {
            lightboxCaption.style.display = 'none';
        }
    }
}

function showNext() {
    if (currentPlaylist.length === 0) return;
    currentIndex++;
    if (currentIndex >= currentPlaylist.length) currentIndex = 0;
    updateLightboxImage();
}

function showPrev() {
    if (currentPlaylist.length === 0) return;
    currentIndex--;
    if (currentIndex < 0) currentIndex = currentPlaylist.length - 1;
    updateLightboxImage();
}

function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.classList.remove('modal-open');
    
    // RESTORE SCROLL
    stopScrollUpdate = false;
    window.scrollTo(0, targetScroll); // Force browser back to correct spot
}

if (lbNext) lbNext.addEventListener('click', (e) => { e.stopPropagation(); showNext(); });
if (lbPrev) lbPrev.addEventListener('click', (e) => { e.stopPropagation(); showPrev(); });
if (lbClose) lbClose.addEventListener('click', (e) => { e.stopPropagation(); closeLightbox(); });
if (lightbox) {
    lightbox.addEventListener('click', (e) => {
        if (e.target !== lightboxImg && e.target !== lbNext && e.target !== lbPrev && e.target !== lightboxCaption) {
            closeLightbox();
        }
    });
}
document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('active')) return;
    if (e.key === 'ArrowRight') showNext();
    if (e.key === 'ArrowLeft') showPrev();
    if (e.key === 'Escape') closeLightbox();
});

// --- 10. CERTIFICATES ---
const certBtns = document.querySelectorAll('.cert-btn');
const certOverlay = document.getElementById('cert-overlay');
const certDisplayImg = document.getElementById('cert-display-img');
const closeCertBtn = document.getElementById('close-cert');
const certBackdrop = document.querySelector('.cert-backdrop');

certBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const imgPath = btn.getAttribute('data-img');
        if(imgPath) {
            certDisplayImg.src = imgPath;
            
            // PAUSE SCROLL
            stopScrollUpdate = true;
            certOverlay.classList.add('active');
            document.body.classList.add('modal-open');
        }
    });
});

function closeCertOverlay() {
    certOverlay.classList.remove('active');
    document.body.classList.remove('modal-open');
    
    // RESTORE SCROLL
    stopScrollUpdate = false;
    window.scrollTo(0, targetScroll);
}

if(closeCertBtn) closeCertBtn.addEventListener('click', closeCertOverlay);
if(certBackdrop) certBackdrop.addEventListener('click', closeCertOverlay);

// --- 11. THEME & LANG BUTTONS ---
const themeToggle = document.getElementById('theme-toggle');
const langToggle = document.getElementById('lang-toggle');
const translatableElements = document.querySelectorAll('[data-lang]');

updateLanguage(currentLang);
if (langToggle) langToggle.innerText = currentLang === 'en' ? 'GR' : 'EN';

if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('light-mode');
        const newTheme = document.body.classList.contains('light-mode') ? 'light' : 'dark';
        localStorage.setItem('theme', newTheme);
        if(case2Img) {
            if (newTheme === 'light') case2Img.src = 'images/undisplayed-black.svg';
            else case2Img.src = 'images/undisplayed.svg';
        }
    });
}

if (langToggle) {
    langToggle.addEventListener('click', () => {
        currentLang = currentLang === 'en' ? 'gr' : 'en';
        langToggle.innerText = currentLang === 'en' ? 'GR' : 'EN';
        updateLanguage(currentLang);
        localStorage.setItem('lang', currentLang);
    });
}

function updateLanguage(lang) {
    translatableElements.forEach(el => {
        const key = el.getAttribute('data-lang');
        if (translations[lang][key]) {
            if (el.classList.contains('expand-btn')) {
                if (!el.nextElementSibling.style.maxHeight) el.innerText = translations[lang]['btn_view_case'];
                else el.innerText = translations[lang]['btn_close_case'];
            } else {
                el.innerHTML = translations[lang][key];
            }
        }
    });
}

// --- 12. 3D TILT EFFECT FOR POSTERS (STABILIZED) ---
const posterItems = document.querySelectorAll('.marquee-item');
posterItems.forEach(item => {
    const img = item.querySelector('img');
    if(!img) return; 
    item.addEventListener('mousemove', (e) => {
        isHoveringMarquee = true; 
        const rect = item.getBoundingClientRect();
        const x = e.clientX - rect.left; 
        const y = e.clientY - rect.top;  
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * -15; 
        const rotateY = ((x - centerX) / centerX) * 15;
        img.style.transition = 'none'; 
        img.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
    });
    item.addEventListener('mouseleave', () => {
        isHoveringMarquee = false; 
        img.style.transition = 'transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)';
        img.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
    });
});

// --- 13. APPAREL INSPECTION EFFECT (Pan on Hover) ---
const apparelItems = document.querySelectorAll('.grid-item');
apparelItems.forEach(item => {
    const img = item.querySelector('img');
    item.addEventListener('mousemove', (e) => {
        const rect = item.getBoundingClientRect();
        const xPos = ((e.clientX - rect.left) / rect.width) * 100;
        const yPos = ((e.clientY - rect.top) / rect.height) * 100;
        img.style.transformOrigin = `${xPos}% ${yPos}%`;
        img.style.transform = 'scale(1.5)';
    });
    item.addEventListener('mouseleave', () => {
        img.style.transform = 'scale(1)';
        setTimeout(() => { img.style.transformOrigin = 'center center'; }, 400); 
    });
});

// --- 14. SMOOTH SCROLL (PHYSICS INERTIA) ---
if (scrollContainer) {
    const ease = 0.07; 

    // Set height of body to match container height
    function setHeight() {
        if(window.innerWidth > 768) {
            document.body.style.height = `${scrollContainer.getBoundingClientRect().height}px`;
        } else {
            document.body.style.height = 'auto';
        }
    }
    window.addEventListener('resize', setHeight);
    window.addEventListener('load', setHeight);
    const resizeObserver = new ResizeObserver(() => setHeight());
    resizeObserver.observe(scrollContainer);
    setHeight();

    // Listen to native scroll
    window.addEventListener('scroll', () => {
        // If modal is open, IGNORE reset to 0
        if(!stopScrollUpdate) {
            targetScroll = window.scrollY;
        }
    });

    // Handle Nav Links
    const navLinksItems = document.querySelectorAll('.nav-item');
    navLinksItems.forEach(link => {
        link.addEventListener('click', (e) => {
            if(window.innerWidth > 768) {
                e.preventDefault();
                const targetId = link.getAttribute('href').substring(1);
                const targetEl = document.getElementById(targetId);
                if(targetEl) {
                    // Update native scroll, let the listener catch it
                    const box = targetEl.getBoundingClientRect();
                    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                    const finalPos = box.top + scrollTop - 100;
                    window.scrollTo({ top: finalPos, behavior: 'auto' });
                }
            } else {
                const hamburgerBtn = document.getElementById('hamburger-btn');
                const navLinksContainer = document.querySelector('.nav-links');
                hamburgerBtn.classList.remove('active');
                navLinksContainer.classList.remove('active');
                document.body.classList.remove('modal-open');
                navBar.classList.remove('menu-active');
            }
        });
    });

    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'auto' });
        });
    }

    // Animation Loop
    function smoothScroll() {
        if (window.innerWidth > 768) {
            currentScroll += (targetScroll - currentScroll) * ease;
            let roundedScroll = Math.round(currentScroll * 100) / 100;
            
            scrollContainer.style.transform = `translate3d(0, -${roundedScroll}px, 0)`;
            
            if (roundedScroll > 50) navBar.classList.add('desktop-scrolled');
            else navBar.classList.remove('desktop-scrolled');
            
            if (backToTopBtn) {
                if (roundedScroll > 500) backToTopBtn.classList.add('visible');
                else backToTopBtn.classList.remove('visible');
            }
        } else {
            scrollContainer.style.transform = 'none';
        }
        requestAnimationFrame(smoothScroll);
    }
    
    smoothScroll();
}

// --- 15. DATA DECODER TEXT EFFECT ---
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// Select elements to apply the effect to (Nav Links and Section Titles)
// We exclude h1 because it contains <br> tags which this effect would break
const scrambleElements = document.querySelectorAll('.nav-item, .section-title, .expand-btn');

scrambleElements.forEach(element => {
    // 1. Save the original text so we can restore it
    element.dataset.value = element.innerText;

    element.addEventListener('mouseenter', event => {
        let iteration = 0;
        
        // Clear any existing timer to prevent glitches
        clearInterval(element.dataset.interval);
        
        element.dataset.interval = setInterval(() => {
            event.target.innerText = event.target.innerText
                .split("")
                .map((letter, index) => {
                    // If the index is "solved", return the real letter
                    if(index < iteration) {
                        return event.target.dataset.value[index];
                    }
                    // Otherwise return a random letter
                    return letters[Math.floor(Math.random() * 26)];
                })
                .join("");
            
            // Stop condition
            if(iteration >= event.target.dataset.value.length){ 
                clearInterval(element.dataset.interval);
            }
            
            // Speed of resolution (Higher denominator = Slower)
            iteration += 1 / 3; 
        }, 30); // Speed of frame updates
    });
});