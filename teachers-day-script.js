// Teachers' Day Interactive Website
// Features: Typing effect, modal popup, animations, and enhanced user experience

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all features when DOM is loaded
    initializeWebsite();
    
    // Initialize mobile optimizations
    initMobileOptimizations();
});

function initializeWebsite() {
    // Initialize typing effect for the main title
    initTypingEffect();
    
    // Initialize modal functionality
    initModal();
    
    // Initialize scroll animations
    initScrollAnimations();
    
    // Add extra particle effects
    enhanceParticleEffects();
    
    // Initialize confetti effect (for surprise button)
    initConfettiEffect();
    
    // Initialize dynamic quote generator
    initQuoteGenerator();
    
    // Initialize heart garden
    initHeartGarden();
    
    // Initialize magic wand
    initMagicWand();
    
    console.log('🎉 Teachers\' Day website initialized successfully!');
}

// Typing effect for the main title
function initTypingEffect() {
    const titleElement = document.getElementById('main-title');
    const originalText = titleElement.textContent;
    
    // Clear the text initially
    titleElement.textContent = '';
    titleElement.style.borderRight = '3px solid var(--gold-accent)';
    titleElement.style.animation = 'none'; // Stop the glow temporarily
    
    let charIndex = 0;
    const typingSpeed = 100;
    
    function typeCharacter() {
        if (charIndex < originalText.length) {
            titleElement.textContent += originalText.charAt(charIndex);
            charIndex++;
            setTimeout(typeCharacter, typingSpeed);
        } else {
            // Remove cursor and restore glow effect after typing is complete
            setTimeout(() => {
                titleElement.style.borderRight = 'none';
                titleElement.style.animation = 'titleGlow 2s ease-in-out infinite alternate';
            }, 500);
        }
    }
    
    // Start typing after a brief delay
    setTimeout(typeCharacter, 1000);
}

// Modal functionality
function initModal() {
    const surpriseBtn = document.getElementById('surprise-btn');
    const modalOverlay = document.getElementById('modal-overlay');
    const closeBtn = document.getElementById('close-btn');
    
    // Show modal when surprise button is clicked
    surpriseBtn.addEventListener('click', function() {
        showModal();
        createConfetti();
        playSuccessSound();
    });
    
    // Hide modal when close button is clicked
    closeBtn.addEventListener('click', function() {
        hideModal();
    });
    
    // Hide modal when clicking outside the modal content
    modalOverlay.addEventListener('click', function(e) {
        if (e.target === modalOverlay) {
            hideModal();
        }
    });
    
    // Hide modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modalOverlay.classList.contains('show')) {
            hideModal();
        }
    });
}

// Show modal with animation
function showModal() {
    const modalOverlay = document.getElementById('modal-overlay');
    const modal = document.getElementById('modal');
    
    modalOverlay.classList.add('show');
    
    // Add extra sparkle effect to modal heart
    const modalHeart = document.querySelector('.modal-heart');
    modalHeart.style.animation = 'heartBeat 0.8s ease-in-out infinite, sparkle 2s ease-in-out infinite';
}

// Hide modal with animation
function hideModal() {
    const modalOverlay = document.getElementById('modal-overlay');
    modalOverlay.classList.remove('show');
}

// Scroll animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Observe content card for scroll animations
    const contentCard = document.getElementById('content-card');
    if (contentCard) {
        observer.observe(contentCard);
    }
}

// Enhanced particle effects
function enhanceParticleEffects() {
    const particlesContainer = document.querySelector('.particles-container');
    
    // Create additional dynamic particles
    for (let i = 0; i < 6; i++) {
        setTimeout(() => {
            createDynamicParticle();
        }, i * 1000);
    }
    
    // Create particles periodically
    setInterval(() => {
        createDynamicParticle();
    }, 3000);
}

// Create dynamic particles
function createDynamicParticle() {
    const particlesContainer = document.querySelector('.particles-container');
    const particle = document.createElement('div');
    
    particle.className = 'dynamic-particle';
    particle.style.cssText = `
        position: absolute;
        width: ${Math.random() * 6 + 2}px;
        height: ${Math.random() * 6 + 2}px;
        background: var(--gold-accent);
        border-radius: 50%;
        left: ${Math.random() * 100}%;
        top: 100%;
        box-shadow: 0 0 10px var(--gold-accent);
        opacity: 0;
        animation: dynamicFloat ${Math.random() * 3 + 4}s ease-out forwards;
        z-index: 1;
    `;
    
    particlesContainer.appendChild(particle);
    
    // Remove particle after animation
    setTimeout(() => {
        if (particle.parentNode) {
            particle.parentNode.removeChild(particle);
        }
    }, 7000);
}

// Add CSS for dynamic particles
function addDynamicParticleCSS() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes dynamicFloat {
            0% {
                opacity: 0;
                transform: translateY(0) scale(0) rotate(0deg);
            }
            10% {
                opacity: 1;
            }
            90% {
                opacity: 0.8;
            }
            100% {
                opacity: 0;
                transform: translateY(-100vh) scale(1) rotate(360deg);
            }
        }
    `;
    document.head.appendChild(style);
}

// Initialize confetti effect
function initConfettiEffect() {
    addDynamicParticleCSS();
}

// Create confetti when surprise button is clicked
function createConfetti() {
    const colors = ['#FFD700', '#FFA500', '#FF69B4', '#87CEEB', '#98FB98', '#DDA0DD'];
    const confettiContainer = document.body;
    
    for (let i = 0; i < 30; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.style.cssText = `
                position: fixed;
                width: ${Math.random() * 10 + 5}px;
                height: ${Math.random() * 10 + 5}px;
                background: ${colors[Math.floor(Math.random() * colors.length)]};
                left: ${Math.random() * 100}%;
                top: -20px;
                z-index: 9999;
                border-radius: ${Math.random() > 0.5 ? '50%' : '0'};
                animation: confettiFall ${Math.random() * 2 + 3}s linear forwards;
                transform: rotate(${Math.random() * 360}deg);
            `;
            
            confettiContainer.appendChild(confetti);
            
            setTimeout(() => {
                if (confetti.parentNode) {
                    confetti.parentNode.removeChild(confetti);
                }
            }, 5000);
        }, i * 50);
    }
}

// Add confetti CSS animation
const confettiStyle = document.createElement('style');
confettiStyle.textContent = `
    @keyframes confettiFall {
        0% {
            transform: translateY(-20px) rotate(0deg);
            opacity: 1;
        }
        100% {
            transform: translateY(100vh) rotate(720deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(confettiStyle);

// Play success sound (using Web Audio API for cross-browser compatibility)
function playSuccessSound() {
    try {
        // Create audio context
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        
        // Create a simple success sound
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        // Configure the sound
        oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
        oscillator.frequency.setValueAtTime(1200, audioContext.currentTime + 0.1);
        oscillator.frequency.setValueAtTime(900, audioContext.currentTime + 0.2);
        
        gainNode.gain.setValueAtTime(0, audioContext.currentTime);
        gainNode.gain.setValueAtTime(0.3, audioContext.currentTime + 0.01);
        gainNode.gain.setValueAtTime(0, audioContext.currentTime + 0.3);
        
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.3);
    } catch (error) {
        console.log('Audio not supported, visual effects only');
    }
}

// Enhanced button interactions
function enhanceButtonInteractions() {
    const surpriseBtn = document.getElementById('surprise-btn');
    
    // Add ripple effect on click
    surpriseBtn.addEventListener('click', function(e) {
        const ripple = document.createElement('div');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            left: ${x}px;
            top: ${y}px;
            background: rgba(255, 255, 255, 0.6);
            border-radius: 50%;
            transform: scale(0);
            animation: ripple 0.6s linear forwards;
            pointer-events: none;
        `;
        
        this.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
}

// Add ripple CSS animation
const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
    @keyframes ripple {
        to {
            transform: scale(2);
            opacity: 0;
        }
    }
`;
document.head.appendChild(rippleStyle);

// Initialize enhanced interactions
setTimeout(() => {
    enhanceButtonInteractions();
}, 1000);

// Add mouse cursor effects
function addCursorEffects() {
    let mouseX = 0, mouseY = 0;
    
    document.addEventListener('mousemove', function(e) {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });
    
    // Create cursor trail particles
    setInterval(() => {
        if (Math.random() > 0.8) {
            createCursorParticle(mouseX, mouseY);
        }
    }, 100);
}

// Create cursor particle
function createCursorParticle(x, y) {
    const particle = document.createElement('div');
    particle.style.cssText = `
        position: fixed;
        width: 4px;
        height: 4px;
        background: var(--gold-accent);
        border-radius: 50%;
        left: ${x}px;
        top: ${y}px;
        z-index: 9998;
        pointer-events: none;
        animation: cursorParticleFade 1s ease-out forwards;
        box-shadow: 0 0 8px var(--gold-accent);
    `;
    
    document.body.appendChild(particle);
    
    setTimeout(() => {
        if (particle.parentNode) {
            particle.parentNode.removeChild(particle);
        }
    }, 1000);
}

// Add cursor particle CSS
const cursorParticleStyle = document.createElement('style');
cursorParticleStyle.textContent = `
    @keyframes cursorParticleFade {
        0% {
            opacity: 1;
            transform: scale(1);
        }
        100% {
            opacity: 0;
            transform: scale(0.5) translateY(-20px);
        }
    }
`;
document.head.appendChild(cursorParticleStyle);

// Initialize cursor effects
setTimeout(() => {
    addCursorEffects();
}, 2000);

// Performance optimization
function optimizePerformance() {
    // Use requestAnimationFrame for smooth animations
    let ticking = false;
    
    function updateAnimations() {
        // Update any time-based animations here
        ticking = false;
    }
    
    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(updateAnimations);
            ticking = true;
        }
    }
    
    // Throttle scroll events
    document.addEventListener('scroll', requestTick);
}

// Initialize performance optimizations
optimizePerformance();

// Add loading completion event
window.addEventListener('load', function() {
    // Add loaded class to body for any additional styling
    document.body.classList.add('loaded');
    
    // Trigger welcome animation
    setTimeout(() => {
        const heroContent = document.querySelector('.hero-content');
        if (heroContent) {
            heroContent.style.animation = 'none';
            heroContent.style.animation = 'welcomeAnimation 1s ease-out forwards';
        }
    }, 2000);
});

// Welcome animation CSS
const welcomeStyle = document.createElement('style');
welcomeStyle.textContent = `
    @keyframes welcomeAnimation {
        0% {
            transform: scale(1);
        }
        50% {
            transform: scale(1.05);
        }
        100% {
            transform: scale(1);
        }
    }
`;
document.head.appendChild(welcomeStyle);

// Error handling for better user experience
window.addEventListener('error', function(e) {
    console.log('Handled error gracefully:', e.message);
});

// Accessibility improvements
function improveAccessibility() {
    // Add keyboard navigation for modal
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Tab') {
            // Improve tab navigation
            const modal = document.getElementById('modal');
            if (modal && modal.closest('.modal-overlay').classList.contains('show')) {
                // Keep focus within modal
                const focusableElements = modal.querySelectorAll('button, [tabindex]');
                const firstElement = focusableElements[0];
                const lastElement = focusableElements[focusableElements.length - 1];
                
                if (e.shiftKey) {
                    if (document.activeElement === firstElement) {
                        lastElement.focus();
                        e.preventDefault();
                    }
                } else {
                    if (document.activeElement === lastElement) {
                        firstElement.focus();
                        e.preventDefault();
                    }
                }
            }
        }
    });
    
    // Add ARIA labels for better screen reader support
    const surpriseBtn = document.getElementById('surprise-btn');
    if (surpriseBtn) {
        surpriseBtn.setAttribute('aria-label', 'Click to see a special Teachers Day message');
    }
    
    const closeBtn = document.getElementById('close-btn');
    if (closeBtn) {
        closeBtn.setAttribute('aria-label', 'Close message popup');
    }
}

// Initialize accessibility improvements
setTimeout(improveAccessibility, 500);

// Dynamic Quote Generator
function initQuoteGenerator() {
    const quoteElement = document.getElementById('dynamic-quote');
    const newQuoteBtn = document.getElementById('new-quote-btn');
    
    const inspirationalQuotes = [
        "Teachers plant seeds of knowledge that bloom for a lifetime! 🌱✨",
        "Every student's success story begins with an amazing teacher! 📚💫",
        "You don't just teach subjects, you teach hearts and minds! ❤️🧠",
        "In a world of ordinary, teachers create extraordinary! 🌟🚀",
        "Your passion for teaching lights up countless futures! 🔥💡",
        "Teachers: The architects of tomorrow's dreams! 🏗️💭",
        "You make the impossible seem possible, every single day! ✨🌈",
        "Behind every great mind is an even greater teacher! 🎓💖",
        "Teachers turn 'I can't' into 'I did it!' with magic and love! 🪄💕",
        "You're not just changing lives, you're changing the world! 🌍🔄"
    ];
    
    let currentQuoteIndex = 0;
    
    function displayQuote(index) {
        quoteElement.classList.add('quote-fade-in');
        quoteElement.textContent = inspirationalQuotes[index];
        
        // Remove animation class after it completes
        setTimeout(() => {
            quoteElement.classList.remove('quote-fade-in');
        }, 800);
        
        // Create sparkles around the quote
        createQuoteSparkles();
    }
    
    // Display first quote after a delay
    setTimeout(() => {
        displayQuote(0);
    }, 1500);
    
    // Auto-change quotes every 5 seconds
    setInterval(() => {
        currentQuoteIndex = (currentQuoteIndex + 1) % inspirationalQuotes.length;
        displayQuote(currentQuoteIndex);
    }, 5000);
    
    // Manual quote change
    newQuoteBtn.addEventListener('click', function() {
        currentQuoteIndex = (currentQuoteIndex + 1) % inspirationalQuotes.length;
        displayQuote(currentQuoteIndex);
        
        // Button animation
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = '';
        }, 150);
        
        // Play success sound
        playQuoteSound();
        
        // Create confetti from button
        createButtonConfetti(this);
    });
}

// Heart Garden Interactive Feature
function initHeartGarden() {
    const gardenArea = document.getElementById('garden-area');
    const heartCounter = document.getElementById('heart-counter');
    
    if (!gardenArea || !heartCounter) return;
    
    // Click anywhere in garden to create hearts (desktop)
    gardenArea.addEventListener('click', function(e) {
        // Only handle if not mobile or if mobile touch handlers aren't active
        if (!document.body.classList.contains('mobile-device')) {
            createHeart(e.clientX, e.clientY);
            playGardenSound();
        }
    });
    
    // Auto-generate hearts occasionally
    setInterval(() => {
        if (Math.random() > 0.7) {
            const rect = gardenArea.getBoundingClientRect();
            const x = rect.left + Math.random() * rect.width;
            const y = rect.top + Math.random() * rect.height;
            createHeart(x, y);
        }
    }, 3000);
}

// Magic Wand Interactive Feature
function initMagicWand() {
    const magicWand = document.getElementById('magic-wand');
    const magicCanvas = document.getElementById('magic-canvas');
    let isWandActive = false;
    
    const magicEmojis = ['✨', '⭐', '🌟', '💫', '🔮', '🎆', '🎇', '🌈', '🦄', '🔥'];
    
    function createMagicSpark(x, y) {
        const spark = document.createElement('div');
        spark.className = 'magic-spark';
        spark.textContent = magicEmojis[Math.floor(Math.random() * magicEmojis.length)];
        
        // Random direction
        const deltaX = (Math.random() - 0.5) * 200;
        const deltaY = (Math.random() - 0.5) * 200;
        
        spark.style.cssText = `
            left: ${x}px;
            top: ${y}px;
            --deltaX: ${deltaX}px;
            --deltaY: ${deltaY}px;
        `;
        
        magicCanvas.appendChild(spark);
        
        // Remove after animation
        setTimeout(() => {
            if (spark.parentNode) {
                spark.parentNode.removeChild(spark);
            }
        }, 2000);
    }
    
    // Wand hover effects
    magicWand.addEventListener('mouseenter', function() {
        isWandActive = true;
        this.style.animation = 'wandFloat 0.5s ease-in-out infinite';
        
        // Create continuous sparks while hovering
        const sparkInterval = setInterval(() => {
            if (!isWandActive) {
                clearInterval(sparkInterval);
                return;
            }
            
            const rect = this.getBoundingClientRect();
            const x = rect.left + rect.width;
            const y = rect.top + rect.height / 2;
            
            createMagicSpark(x, y);
            playMagicSound();
        }, 200);
    });
    
    magicWand.addEventListener('mouseleave', function() {
        isWandActive = false;
        this.style.animation = 'wandFloat 3s ease-in-out infinite';
    });
    
    // Click for big magic effect
    magicWand.addEventListener('click', function() {
        const rect = this.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        // Create burst of magic
        for (let i = 0; i < 15; i++) {
            setTimeout(() => {
                createMagicSpark(centerX, centerY);
            }, i * 100);
        }
        
        // Play celebration sound
        playMagicCelebration();
        
        // Wand special animation
        this.style.transform = 'scale(1.5) rotate(360deg)';
        setTimeout(() => {
            this.style.transform = '';
        }, 600);
    });
}

// Create confetti from clicked bubble
function createBubbleConfetti(bubble) {
    const rect = bubble.getBoundingClientRect();
    const colors = ['#FFD700', '#FFA500', '#FF69B4', '#87CEEB'];
    
    for (let i = 0; i < 8; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.style.cssText = `
                position: fixed;
                width: 6px;
                height: 6px;
                background: ${colors[Math.floor(Math.random() * colors.length)]};
                left: ${rect.left + rect.width/2}px;
                top: ${rect.top + rect.height/2}px;
                z-index: 9999;
                border-radius: 50%;
                animation: bubbleConfettiFall ${Math.random() * 1 + 1.5}s ease-out forwards;
                transform: rotate(${Math.random() * 360}deg);
            `;
            
            document.body.appendChild(confetti);
            
            setTimeout(() => {
                if (confetti.parentNode) {
                    confetti.parentNode.removeChild(confetti);
                }
            }, 2500);
        }, i * 30);
    }
}

// Add bubble confetti CSS
const bubbleConfettiStyle = document.createElement('style');
bubbleConfettiStyle.textContent = `
    @keyframes bubbleConfettiFall {
        0% {
            transform: translate(0, 0) rotate(0deg) scale(1);
            opacity: 1;
        }
        100% {
            transform: translate(${Math.random() * 200 - 100}px, ${Math.random() * 100 + 50}px) rotate(720deg) scale(0.3);
            opacity: 0;
        }
    }
`;
document.head.appendChild(bubbleConfettiStyle);

// Second typewriter effect for the message
function initSecondTypewriter() {
    const typewriterElement = document.getElementById('typewriter-text');
    const messages = [
        "You make learning magical! ✨",
        "Thank you for inspiring us every day! 🌟",
        "Teachers like you change the world! 🌍",
        "Your wisdom lights up our minds! 💡",
        "We're grateful for all you do! 💖"
    ];
    
    let messageIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    
    function typeMessage() {
        const currentMessage = messages[messageIndex];
        
        if (!isDeleting) {
            // Typing
            typewriterElement.textContent = currentMessage.substring(0, charIndex + 1);
            charIndex++;
            
            if (charIndex === currentMessage.length) {
                setTimeout(() => {
                    isDeleting = true;
                }, 2000); // Pause before deleting
            }
        } else {
            // Deleting
            typewriterElement.textContent = currentMessage.substring(0, charIndex - 1);
            charIndex--;
            
            if (charIndex === 0) {
                isDeleting = false;
                messageIndex = (messageIndex + 1) % messages.length;
            }
        }
        
        const typingSpeed = isDeleting ? 50 : 100;
        setTimeout(typeMessage, typingSpeed);
    }
    
    // Start typing after a delay
    setTimeout(() => {
        typeMessage();
    }, 2000);
}

// Appreciation meter functionality
function initAppreciationMeter() {
    const meterFill = document.getElementById('meter-fill');
    const meterText = document.querySelector('.meter-text');
    
    // Start filling after a delay
    setTimeout(() => {
        meterFill.classList.add('filling');
        
        // Update text during filling
        const textUpdates = [
            { text: "Calculating awesome... 💫", time: 500 },
            { text: "Adding inspiration... ✨", time: 1000 },
            { text: "Measuring dedication... 💪", time: 1500 },
            { text: "Result: INFINITE! 🚀", time: 2500 },
            { text: "Teachers = ❤️❤️❤️❤️❤️", time: 3500 }
        ];
        
        textUpdates.forEach(update => {
            setTimeout(() => {
                meterText.textContent = update.text;
            }, update.time);
        });
        
        // Add celebration effect when complete
        setTimeout(() => {
            createMeterCelebration();
        }, 3000);
    }, 3000);
}

// Create celebration effect for meter
function createMeterCelebration() {
    const meterContainer = document.querySelector('.meter-container');
    const rect = meterContainer.getBoundingClientRect();
    
    for (let i = 0; i < 15; i++) {
        setTimeout(() => {
            const spark = document.createElement('div');
            spark.style.cssText = `
                position: fixed;
                width: 4px;
                height: 4px;
                background: var(--gold-accent);
                left: ${rect.left + Math.random() * rect.width}px;
                top: ${rect.top + rect.height/2}px;
                z-index: 9999;
                border-radius: 50%;
                animation: sparkFly ${Math.random() * 1 + 1}s ease-out forwards;
                box-shadow: 0 0 6px var(--gold-accent);
            `;
            
            document.body.appendChild(spark);
            
            setTimeout(() => {
                if (spark.parentNode) {
                    spark.parentNode.removeChild(spark);
                }
            }, 1500);
        }, i * 50);
    }
}

// Spark animation CSS
const sparkStyle = document.createElement('style');
sparkStyle.textContent = `
    @keyframes sparkFly {
        0% {
            transform: translate(0, 0) scale(1);
            opacity: 1;
        }
        100% {
            transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 60 - 30}px) scale(0);
            opacity: 0;
        }
    }
`;
document.head.appendChild(sparkStyle);

// Enhanced sound effects
function playBubbleSound(index) {
    try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        // Different frequencies for different bubbles
        const frequencies = [523, 587, 659, 698, 784, 880];
        oscillator.frequency.setValueAtTime(frequencies[index], audioContext.currentTime);
        
        gainNode.gain.setValueAtTime(0, audioContext.currentTime);
        gainNode.gain.setValueAtTime(0.2, audioContext.currentTime + 0.01);
        gainNode.gain.setValueAtTime(0, audioContext.currentTime + 0.2);
        
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.2);
    } catch (error) {
        console.log('Audio not supported');
    }
}

function playHoverSound() {
    try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.frequency.setValueAtTime(1200, audioContext.currentTime);
        oscillator.type = 'sine';
        
        gainNode.gain.setValueAtTime(0, audioContext.currentTime);
        gainNode.gain.setValueAtTime(0.1, audioContext.currentTime + 0.01);
        gainNode.gain.setValueAtTime(0, audioContext.currentTime + 0.1);
        
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.1);
    } catch (error) {
        // Silently handle audio errors
    }
}

// Enhanced scroll animations for interactive elements
function enhanceScrollAnimations() {
    const observerOptions = {
        threshold: 0.3,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target.classList.contains('word-bubbles')) {
                    // Animate bubbles one by one
                    const bubbles = entry.target.querySelectorAll('.word-bubble');
                    bubbles.forEach((bubble, index) => {
                        setTimeout(() => {
                            bubble.style.animation = `bubbleFloat 3s ease-in-out infinite, bounceIn 0.6s ease-out forwards`;
                            bubble.style.animationDelay = `${index * 0.1}s, ${index * 0.1}s`;
                        }, index * 100);
                    });
                }
            }
        });
    }, observerOptions);
    
    const wordBubblesContainer = document.querySelector('.word-bubbles');
    if (wordBubblesContainer) {
        observer.observe(wordBubblesContainer);
    }
}

// Bounce in animation CSS
const bounceInStyle = document.createElement('style');
bounceInStyle.textContent = `
    @keyframes bounceIn {
        0% {
            transform: scale(0) translateY(50px);
            opacity: 0;
        }
        50% {
            transform: scale(1.1) translateY(-10px);
            opacity: 0.8;
        }
        100% {
            transform: scale(1) translateY(0);
            opacity: 1;
        }
    }
`;
document.head.appendChild(bounceInStyle);

// Initialize enhanced scroll animations
setTimeout(() => {
    enhanceScrollAnimations();
}, 1000);

// Helper Functions for Effects

// Quote sparkles effect
function createQuoteSparkles() {
    const quoteContainer = document.querySelector('.quote-container');
    const rect = quoteContainer.getBoundingClientRect();
    
    for (let i = 0; i < 8; i++) {
        setTimeout(() => {
            const sparkle = document.createElement('div');
            sparkle.style.cssText = `
                position: fixed;
                width: 6px;
                height: 6px;
                background: var(--gold-accent);
                border-radius: 50%;
                left: ${rect.left + Math.random() * rect.width}px;
                top: ${rect.top + Math.random() * rect.height}px;
                z-index: 9999;
                animation: sparkleFloat 2s ease-out forwards;
                box-shadow: 0 0 10px var(--gold-accent);
            `;
            
            document.body.appendChild(sparkle);
            
            setTimeout(() => {
                if (sparkle.parentNode) {
                    sparkle.parentNode.removeChild(sparkle);
                }
            }, 2000);
        }, i * 100);
    }
}

// Button confetti effect
function createButtonConfetti(button) {
    const rect = button.getBoundingClientRect();
    const colors = ['#FF69B4', '#FFD700', '#87CEEB', '#98FB98', '#DDA0DD', '#FFA500'];
    
    for (let i = 0; i < 12; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.style.cssText = `
                position: fixed;
                width: 8px;
                height: 8px;
                background: ${colors[Math.floor(Math.random() * colors.length)]};
                left: ${rect.left + rect.width/2}px;
                top: ${rect.top + rect.height/2}px;
                z-index: 9999;
                border-radius: 50%;
                animation: confettiBurst ${Math.random() * 1 + 1.5}s ease-out forwards;
            `;
            
            document.body.appendChild(confetti);
            
            setTimeout(() => {
                if (confetti.parentNode) {
                    confetti.parentNode.removeChild(confetti);
                }
            }, 2500);
        }, i * 50);
    }
}

// Heart sparkles effect
function createHeartSparkles(heart) {
    const rect = heart.getBoundingClientRect();
    const sparkleEmojis = ['✨', '💫', '⭐', '🌟'];
    
    for (let i = 0; i < 6; i++) {
        setTimeout(() => {
            const sparkle = document.createElement('div');
            sparkle.textContent = sparkleEmojis[Math.floor(Math.random() * sparkleEmojis.length)];
            sparkle.style.cssText = `
                position: fixed;
                left: ${rect.left + rect.width/2}px;
                top: ${rect.top + rect.height/2}px;
                z-index: 9999;
                font-size: 16px;
                pointer-events: none;
                animation: heartSparkle 1.5s ease-out forwards;
            `;
            
            document.body.appendChild(sparkle);
            
            setTimeout(() => {
                if (sparkle.parentNode) {
                    sparkle.parentNode.removeChild(sparkle);
                }
            }, 1500);
        }, i * 100);
    }
}

// Heart celebration effect
function createHeartCelebration() {
    const heartEmojis = ['💖', '💕', '💗', '💓', '❤️'];
    
    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.textContent = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];
            heart.style.cssText = `
                position: fixed;
                left: ${Math.random() * window.innerWidth}px;
                top: -50px;
                z-index: 9999;
                font-size: ${Math.random() * 20 + 20}px;
                animation: heartRain ${Math.random() * 2 + 3}s linear forwards;
            `;
            
            document.body.appendChild(heart);
            
            setTimeout(() => {
                if (heart.parentNode) {
                    heart.parentNode.removeChild(heart);
                }
            }, 5000);
        }, i * 100);
    }
}

// Enhanced Sound Effects
function playQuoteSound() {
    try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.frequency.setValueAtTime(659, audioContext.currentTime); // E note
        oscillator.frequency.setValueAtTime(784, audioContext.currentTime + 0.1); // G note
        oscillator.frequency.setValueAtTime(988, audioContext.currentTime + 0.2); // B note
        
        gainNode.gain.setValueAtTime(0, audioContext.currentTime);
        gainNode.gain.setValueAtTime(0.2, audioContext.currentTime + 0.01);
        gainNode.gain.setValueAtTime(0, audioContext.currentTime + 0.3);
        
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.3);
    } catch (error) {
        console.log('Audio not supported');
    }
}

function playGardenSound() {
    try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.frequency.setValueAtTime(523, audioContext.currentTime); // C note
        oscillator.type = 'sine';
        
        gainNode.gain.setValueAtTime(0, audioContext.currentTime);
        gainNode.gain.setValueAtTime(0.15, audioContext.currentTime + 0.01);
        gainNode.gain.setValueAtTime(0, audioContext.currentTime + 0.2);
        
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.2);
    } catch (error) {
        // Silent failure
    }
}

function playHeartSound() {
    try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.frequency.setValueAtTime(698, audioContext.currentTime); // F note
        oscillator.type = 'triangle';
        
        gainNode.gain.setValueAtTime(0, audioContext.currentTime);
        gainNode.gain.setValueAtTime(0.1, audioContext.currentTime + 0.01);
        gainNode.gain.setValueAtTime(0, audioContext.currentTime + 0.15);
        
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.15);
    } catch (error) {
        // Silent failure
    }
}

function playMagicSound() {
    try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.frequency.setValueAtTime(1200, audioContext.currentTime);
        oscillator.frequency.setValueAtTime(1600, audioContext.currentTime + 0.05);
        oscillator.type = 'square';
        
        gainNode.gain.setValueAtTime(0, audioContext.currentTime);
        gainNode.gain.setValueAtTime(0.05, audioContext.currentTime + 0.01);
        gainNode.gain.setValueAtTime(0, audioContext.currentTime + 0.1);
        
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.1);
    } catch (error) {
        // Silent failure
    }
}

function playMagicCelebration() {
    try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        
        // Play ascending notes
        const notes = [523, 659, 784, 1047]; // C, E, G, C octave
        
        notes.forEach((freq, index) => {
            setTimeout(() => {
                const oscillator = audioContext.createOscillator();
                const gainNode = audioContext.createGain();
                
                oscillator.connect(gainNode);
                gainNode.connect(audioContext.destination);
                
                oscillator.frequency.setValueAtTime(freq, audioContext.currentTime);
                oscillator.type = 'triangle';
                
                gainNode.gain.setValueAtTime(0, audioContext.currentTime);
                gainNode.gain.setValueAtTime(0.2, audioContext.currentTime + 0.01);
                gainNode.gain.setValueAtTime(0, audioContext.currentTime + 0.2);
                
                oscillator.start(audioContext.currentTime);
                oscillator.stop(audioContext.currentTime + 0.2);
            }, index * 100);
        });
    } catch (error) {
        // Silent failure
    }
}

// Add CSS animations for new effects
const additionalAnimations = document.createElement('style');
additionalAnimations.textContent = `
    @keyframes sparkleFloat {
        0% {
            transform: translate(0, 0) scale(0) rotate(0deg);
            opacity: 1;
        }
        100% {
            transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px) scale(1) rotate(360deg);
            opacity: 0;
        }
    }
    
    @keyframes confettiBurst {
        0% {
            transform: translate(0, 0) rotate(0deg) scale(1);
            opacity: 1;
        }
        100% {
            transform: translate(${Math.random() * 300 - 150}px, ${Math.random() * 200 - 100}px) rotate(720deg) scale(0.3);
            opacity: 0;
        }
    }
    
    @keyframes heartSparkle {
        0% {
            transform: translate(0, 0) scale(0) rotate(0deg);
            opacity: 1;
        }
        100% {
            transform: translate(${Math.random() * 80 - 40}px, ${Math.random() * 80 - 40}px) scale(0.5) rotate(360deg);
            opacity: 0;
        }
    }
    
    @keyframes heartRain {
        0% {
            transform: translateY(-50px) rotate(0deg);
            opacity: 1;
        }
        100% {
            transform: translateY(calc(100vh + 50px)) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(additionalAnimations);

// Mobile Optimizations
function initMobileOptimizations() {
    // Detect if device is mobile
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || 
                     window.innerWidth <= 768;
    
    if (isMobile) {
        console.log('📱 Mobile device detected - optimizing experience...');
        
        // Add mobile-specific class to body
        document.body.classList.add('mobile-device');
        
        // Optimize touch interactions
        optimizeTouchInteractions();
        
        // Reduce particle effects for better performance
        optimizeParticleEffects();
        
        // Add mobile-specific event handlers
        addMobileTouchHandlers();
        
        // Optimize audio for mobile
        optimizeMobileAudio();
        
        console.log('✨ Mobile optimizations applied!');
    }
}

// Optimize touch interactions for mobile
function optimizeTouchInteractions() {
    // Add visual feedback for touch
    const touchElements = document.querySelectorAll('.garden-area, .magic-wand, .new-quote-btn');
    
    touchElements.forEach(element => {
        // Add touch start feedback
        element.addEventListener('touchstart', function() {
            this.style.transform = 'scale(0.98)';
            this.style.opacity = '0.9';
        });
        
        // Reset on touch end
        element.addEventListener('touchend', function() {
            setTimeout(() => {
                this.style.transform = '';
                this.style.opacity = '';
            }, 150);
        });
        
        // Reset on touch cancel
        element.addEventListener('touchcancel', function() {
            this.style.transform = '';
            this.style.opacity = '';
        });
    });
}

// Add mobile-specific touch handlers
function addMobileTouchHandlers() {
    const gardenArea = document.getElementById('garden-area');
    const magicWand = document.getElementById('magic-wand');
    
    // Enhanced garden touch handling
    if (gardenArea) {
        // Handle multiple touch points
        gardenArea.addEventListener('touchstart', function(e) {
            e.preventDefault(); // Prevent scrolling
            
            // Create hearts at all touch points
            for (let i = 0; i < e.touches.length; i++) {
                const touch = e.touches[i];
                const rect = this.getBoundingClientRect();
                const x = touch.clientX;
                const y = touch.clientY;
                
                // Only create hearts if touch is within the garden area
                if (x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom) {
                    setTimeout(() => {
                        createHeart(x, y);
                        playGardenSound();
                    }, i * 100); // Stagger multiple hearts
                }
            }
        });
        
        // Handle touch move for continuous heart creation
        let lastTouchTime = 0;
        gardenArea.addEventListener('touchmove', function(e) {
            e.preventDefault();
            const now = Date.now();
            
            // Throttle to prevent too many hearts
            if (now - lastTouchTime > 200) {
                const touch = e.touches[0];
                const rect = this.getBoundingClientRect();
                const x = touch.clientX;
                const y = touch.clientY;
                
                if (x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom) {
                    createHeart(x, y);
                    lastTouchTime = now;
                }
            }
        });
    }
    
    // Enhanced magic wand touch handling
    if (magicWand) {
        let touchStartTime = 0;
        
        magicWand.addEventListener('touchstart', function(e) {
            e.preventDefault();
            touchStartTime = Date.now();
            
            // Immediate visual feedback
            this.style.transform = 'scale(1.1) rotate(15deg)';
            
            // Start creating sparks
            const rect = this.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            
            createMagicSpark(centerX, centerY);
            playMagicSound();
        });
        
        magicWand.addEventListener('touchend', function(e) {
            e.preventDefault();
            const touchDuration = Date.now() - touchStartTime;
            
            // Long press creates big magic effect
            if (touchDuration > 500) {
                const rect = this.getBoundingClientRect();
                const centerX = rect.left + rect.width / 2;
                const centerY = rect.top + rect.height / 2;
                
                // Create burst of magic
                for (let i = 0; i < 10; i++) {
                    setTimeout(() => {
                        createMagicSpark(centerX, centerY);
                    }, i * 80);
                }
                
                playMagicCelebration();
            }
            
            // Reset visual state
            this.style.transform = '';
        });
    }
}

// Optimize particle effects for mobile performance
function optimizeParticleEffects() {
    // Reduce the number of particles for mobile
    const style = document.createElement('style');
    style.textContent = `
        @media (max-width: 768px) {
            .particle:nth-child(n+5) {
                display: none; /* Hide extra particles on mobile */
            }
            
            .floating-icon:nth-child(n+4) {
                display: none; /* Reduce floating icons */
            }
        }
        
        @media (max-width: 480px) {
            .particle:nth-child(n+3) {
                display: none; /* Even fewer particles on small screens */
            }
        }
    `;
    document.head.appendChild(style);
}

// Optimize audio for mobile devices
function optimizeMobileAudio() {
    // Mobile devices often require user interaction before audio can play
    let audioEnabled = false;
    
    function enableAudio() {
        if (!audioEnabled) {
            try {
                const audioContext = new (window.AudioContext || window.webkitAudioContext)();
                if (audioContext.state === 'suspended') {
                    audioContext.resume();
                }
                audioEnabled = true;
                console.log('🔊 Mobile audio enabled');
            } catch (error) {
                console.log('🔇 Mobile audio not available');
            }
        }
    }
    
    // Enable audio on first user interaction
    const enableAudioOnTouch = () => {
        enableAudio();
        document.removeEventListener('touchstart', enableAudioOnTouch);
        document.removeEventListener('click', enableAudioOnTouch);
    };
    
    document.addEventListener('touchstart', enableAudioOnTouch, { once: true });
    document.addEventListener('click', enableAudioOnTouch, { once: true });
}

// Enhanced heart garden for mobile
function createHeart(x, y) {
    const gardenArea = document.getElementById('garden-area');
    const heartCounter = document.getElementById('heart-counter');
    
    if (!gardenArea || !heartCounter) return;
    
    const heartEmojis = ['💖', '💕', '💗', '💓', '💘', '❤️', '🧡', '💛', '💚', '💙', '💜', '🤍'];
    let heartCount = parseInt(heartCounter.textContent) || 0;
    
    const heart = document.createElement('div');
    heart.className = 'garden-heart';
    heart.textContent = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];
    
    // Position the heart relative to the garden area
    const rect = gardenArea.getBoundingClientRect();
    heart.style.left = Math.max(0, Math.min(rect.width - 40, x - rect.left)) + 'px';
    heart.style.top = Math.max(0, Math.min(rect.height - 40, y - rect.top)) + 'px';
    
    // Add touch interaction to individual hearts
    heart.addEventListener('touchstart', function(e) {
        e.stopPropagation();
        e.preventDefault();
        
        this.style.animation = 'heartGrow 0.8s ease-out, heartBeat 1s ease-in-out infinite 0.8s';
        createHeartSparkles(this);
        playHeartSound();
    });
    
    // Also keep click for desktop compatibility
    heart.addEventListener('click', function(e) {
        e.stopPropagation();
        this.style.animation = 'heartGrow 0.8s ease-out, heartBeat 1s ease-in-out infinite 0.8s';
        createHeartSparkles(this);
        playHeartSound();
    });
    
    gardenArea.appendChild(heart);
    heartCount++;
    heartCounter.textContent = heartCount;
    
    // Remove heart after 30 seconds to prevent overcrowding
    setTimeout(() => {
        if (heart.parentNode) {
            heart.style.opacity = '0';
            heart.style.transform = 'scale(0)';
            setTimeout(() => {
                if (heart.parentNode) {
                    heart.parentNode.removeChild(heart);
                }
            }, 500);
        }
    }, 30000);
    
    // Special effects for milestones
    if (heartCount % 10 === 0) {
        createHeartCelebration();
    }
}

// Add mobile-specific CSS
const mobileStyles = document.createElement('style');
mobileStyles.textContent = `
    .mobile-device {
        /* Prevent bounce scrolling on iOS */
        -webkit-overflow-scrolling: touch;
        overscroll-behavior: contain;
    }
    
    .mobile-device .garden-area,
    .mobile-device .magic-wand,
    .mobile-device .new-quote-btn {
        /* Larger touch targets */
        min-height: 44px;
        transition: all 0.2s ease;
    }
    
    .mobile-device .garden-heart {
        /* Ensure hearts are easily tappable */
        min-width: 44px;
        min-height: 44px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    /* Prevent text selection on mobile */
    .mobile-device .garden-area,
    .mobile-device .magic-section,
    .mobile-device .quote-generator {
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        -webkit-tap-highlight-color: transparent;
    }
    
    /* Improve button accessibility on mobile */
    @media (max-width: 768px) {
        button, .garden-area, .magic-wand {
            min-height: 48px; /* iOS/Android recommendation */
        }
    }
`;
document.head.appendChild(mobileStyles);

console.log('🎨 Teachers\' Day website JavaScript loaded successfully!');
console.log('🎉 Amazing dynamic features activated!');
console.log('✨ Interactive magic ready to use!');
console.log('📱 Mobile optimizations ready!');
