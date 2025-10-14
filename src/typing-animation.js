// Text Typing Animation for Header
class TextTypeAnimation {
  constructor(element, options = {}) {
    this.element = element;
    this.texts = options.texts || ['Muhammad Navas'];
    this.typingSpeed = options.typingSpeed || 75;
    this.deletingSpeed = options.deletingSpeed || 50;
    this.pauseDuration = options.pauseDuration || 1500;
    this.showCursor = options.showCursor !== false;
    this.cursorCharacter = options.cursorCharacter || '|';
    this.loop = options.loop !== false;
    
    this.currentTextIndex = 0;
    this.currentCharIndex = 0;
    this.isDeleting = false;
    this.cursor = null;
    
    this.init();
  }
  
  init() {
    this.element.innerHTML = '';
    
    // Create text span
    this.textSpan = document.createElement('span');
    this.textSpan.className = 'typing-text';
    this.element.appendChild(this.textSpan);
    
    // Create cursor
    if (this.showCursor) {
      this.cursor = document.createElement('span');
      this.cursor.className = 'typing-cursor';
      this.cursor.textContent = this.cursorCharacter;
      this.element.appendChild(this.cursor);
      this.blinkCursor();
    }
    
    this.type();
  }
  
  blinkCursor() {
    setInterval(() => {
      if (this.cursor) {
        this.cursor.style.opacity = this.cursor.style.opacity === '0' ? '1' : '0';
      }
    }, 500);
  }
  
  type() {
    const currentText = this.texts[this.currentTextIndex];
    
    if (this.isDeleting) {
      this.textSpan.textContent = currentText.substring(0, this.currentCharIndex - 1);
      this.currentCharIndex--;
      
      if (this.currentCharIndex === 0) {
        this.isDeleting = false;
        this.currentTextIndex = (this.currentTextIndex + 1) % this.texts.length;
        
        if (this.currentTextIndex === 0 && !this.loop) {
          return;
        }
        
        setTimeout(() => this.type(), this.pauseDuration);
        return;
      }
      
      setTimeout(() => this.type(), this.deletingSpeed);
    } else {
      this.textSpan.textContent = currentText.substring(0, this.currentCharIndex + 1);
      this.currentCharIndex++;
      
      if (this.currentCharIndex === currentText.length) {
        if (this.texts.length > 1) {
          this.isDeleting = true;
          setTimeout(() => this.type(), this.pauseDuration);
        }
        return;
      }
      
      setTimeout(() => this.type(), this.typingSpeed);
    }
  }
}

// Initialize typing animation when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  const headerName = document.querySelector('.typing-name');
  if (headerName) {
    new TextTypeAnimation(headerName, {
      texts: ['Muhammad Navas', 'AI & ML Developer', 'Full-Stack Engineer'],
      typingSpeed: 75,
      deletingSpeed: 50,
      pauseDuration: 1500,
      showCursor: true,
      cursorCharacter: '|',
      loop: true
    });
  }
});
