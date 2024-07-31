"use client";

import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    const typewriterElement = document.getElementById('aktypewriter');
    const texts = [
      "ARAVINDHAKUMAR G",
      "Freelance Web Developer",
      "WordPress Fullstack Developer",
      "Shopify Developer"
    ];
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
      const currentText = texts[textIndex];
      if (isDeleting) {
        charIndex--;
      } else {
        charIndex++;
      }

      typewriterElement.textContent = currentText.substring(0, charIndex);

      if (!isDeleting && charIndex === currentText.length) {
        isDeleting = true;
        setTimeout(type, 1500); // Pause before deleting
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
        setTimeout(type, 500); // Pause before typing next text
      } else {
        setTimeout(type, isDeleting ? 50 : 150); // Adjust typing speed
      }
    }

    type(); // Start the typewriter effect

  }, []);

  return (
    <>
      <section>
        <div className="px-4 py-5 my-5 text-center">
          <span className="text-sm-bold color-gray-600"> Hello Everyone!</span>
          <div className="space20"></div>
          <h1 className="display-5 fw-bold text-body-emphasis">
            <span>I'm</span>
            <div className="Typewriter" id="aktypewriter"></div>
          </h1>
          <div className="space36"></div>
          <div className="gradient-text">Technologies worked on</div>
          <div className="tags">
            <div className="taglist">
              <div className="tag">WordPress</div>
              <div className="tag">WooCommerce</div>
              <div className="tag">Shopify</div>
              <div className="tag">WIX</div>
            </div>
            <div className="taglist">
              <div className="tag">Bootstrap</div>
              <div className="tag">HTML/CSS/JS</div>
              <div className="tag">WordPress PHP</div>
              <div className="tag">Shopify Liquid/JSON</div>
            </div>
            <div className="taglist">
              <div className="tag">AWS</div>
              <div className="tag">Digital Ocean</div>
              <div className="tag">SSL/Web Security</div>
            </div>
          </div>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <button type="button" className="btn btn-primary btn-lg px-4 gap-3">About Me</button>
            <button type="button" className="btn btn-outline-secondary btn-lg px-4">Contact</button>
          </div>
        </div>
      </section>
    </>
  );
}