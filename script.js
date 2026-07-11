// Quotes Rotating Pool with Synced Authors
const quotes = [
  { text: '"My God, a whole moment of happiness! Is that too little for the whole of a man\'s life?"', author: '— Fyodor Dostoevsky, White Nights' },
  { text: '"Pain and suffering are always inevitable for a large intelligence and a deep heart."', author: '— Fyodor Dostoevsky, Crime and Punishment' },
  { text: '"I am a dreamer; I have so little real life."', author: '— Fyodor Dostoevsky, White Nights' },
  { text: '"What is hell? I maintain that it is the suffering of being unable to love."', author: '— Fyodor Dostoevsky, The Brothers Karamazov' },
  { text: '"The darker the night, the brighter the stars."', author: '— Fyodor Dostoevsky' }
];

let currentQuote = 0;
const quoteElement = document.querySelector(".quote");
const authorElement = document.querySelector(".author");

// Fade cycle for hero quote and author together
setInterval(() => {
  if (quoteElement && authorElement) {
    quoteElement.style.opacity = "0";
    authorElement.style.opacity = "0";

    setTimeout(() => {
      currentQuote = (currentQuote + 1) % quotes.length;
      quoteElement.textContent = quotes[currentQuote].text;
      authorElement.textContent = quotes[currentQuote].author;

      quoteElement.style.opacity = "1";
      authorElement.style.opacity = "0.8";
    }, 500);
  }
}, 6000);


// Typewriter Effect for Main Title
const title = document.querySelector("h1");
if (title) {
  const originalText = title.textContent;
  title.textContent = "";
  let charIndex = 0;

  function typeWriter() {
    if (charIndex < originalText.length) {
      title.textContent += originalText.charAt(charIndex);
      charIndex++;
      setTimeout(typeWriter, 120);
    }
  }
  typeWriter();
}


// Intersection Observer to Reveal Sections on Scroll
const sections = document.querySelectorAll("section");
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, {
  threshold: 0.1
});

sections.forEach(section => {
  observer.observe(section);
});


// Dynamic Navigation Active State Highlight
const navLinks = document.querySelectorAll("nav a");
window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 150) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((a) => {
    a.classList.remove("active");
    if (a.getAttribute("href").includes(current)) {
      a.classList.add("active");
    }
  });
});


// Floating Aesthetic Particles Environment
for (let i = 0; i < 40; i++) {
  const particle = document.createElement("div");
  particle.classList.add("particle");
  particle.style.left = Math.random() * 100 + "%";
  particle.style.animationDuration = (8 + Math.random() * 12) + "s";
  particle.style.animationDelay = Math.random() * 5 + "s";
  document.body.appendChild(particle);
}