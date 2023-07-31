function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }

  const dynamicText = document.querySelector(".title span");
  const words = ["Julian Zurkinden"];
  
  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  
  const typeEffect = () => {
    const currentWord = words[wordIndex];
    const currentChar = isDeleting
      ? currentWord.substring(0, charIndex - 1)
      : currentWord.substring(0, charIndex + 1);
  
    dynamicText.textContent = currentChar;
  
    if (!isDeleting && charIndex <= currentWord.length) {
      charIndex++;
      setTimeout(typeEffect, 200);
    } else if (isDeleting && charIndex >= 0) {
      charIndex--;
      setTimeout(typeEffect, 100);
    } else {
      isDeleting = !isDeleting;
      wordIndex = (wordIndex + 1) % words.length;
      setTimeout(typeEffect, 1200);
    }
  };
  
  typeEffect();
