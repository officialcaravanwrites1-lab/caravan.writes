document.addEventListener('DOMContentLoaded', function() {
    
    // Get all content sections
    const homeSection = document.getElementById('home');
    const trendingContent = document.getElementById('trending-content');
    const contactContent = document.getElementById('contact-content');
    const aboutContent = document.getElementById('about-content');
    const testimonialsSection = document.getElementById('testimonials');
    const navLinks = document.querySelectorAll('.hotbar nav ul li a');

    // Get all navigation tabs and the new CTA button
    const trendingTab = document.getElementById('trending-tab');
    const contactTab = document.getElementById('contact-tab');
    const aboutTab = document.getElementById('about-tab'); 
    const homeTab = document.querySelector('.hotbar nav ul li a[href="#home"]');
    const ctaStrategyLink = document.getElementById('cta-strategy-link');


    // Function to hide all main sections
    function hideAllSections() {
        homeSection.classList.add('hidden');
        trendingContent.classList.add('hidden');
        contactContent.classList.add('hidden');
        aboutContent.classList.add('hidden');
        testimonialsSection.classList.add('hidden');
    }

    // Function to handle tab activation
    function activateTab(tabElement, sectionsToShow) {
        // Remove 'active' class from all nav links
        navLinks.forEach(link => link.classList.remove('active'));
        
        // Logic to correctly highlight the hotbar tab based on click source
        if (tabElement.id === 'cta-strategy-link') {
            aboutTab.classList.add('active'); // CTA link highlights the "Expertise" tab
        } else {
            tabElement.classList.add('active'); // Standard nav click highlights itself
        }

        // Hide all content sections first
        hideAllSections();

        // Show the required sections
        sectionsToShow.forEach(section => section.classList.remove('hidden'));
    }

    // --- Tab Event Listeners ---

    // 1. Home Tab Click (Shows Home Hero and Testimonials)
    homeTab.addEventListener('click', function(e) {
        e.preventDefault();
        activateTab(this, [homeSection, testimonialsSection]);
    });

    // 2. Business Insights Tab Click
    trendingTab.addEventListener('click', function(e) {
        e.preventDefault();
        activateTab(this, [trendingContent]);
    });

    // 3. Contact Tab Click
    contactTab.addEventListener('click', function(e) {
        e.preventDefault();
        activateTab(this, [contactContent]);
    });
    
    // 4. Expertise Tab Click
    aboutTab.addEventListener('click', function(e) {
        e.preventDefault();
        activateTab(this, [aboutContent]);
    });

    // 5. "View Our Services" CTA Click 
    ctaStrategyLink.addEventListener('click', function(e) {
        e.preventDefault();
        // Directs to the Expertise/About section
        activateTab(this, [aboutContent]); 
    });


    // Initial load: ensure Home and Testimonials are visible
    activateTab(homeTab, [homeSection, testimonialsSection]);
});