import React, { useState, useEffect } from 'react';

export const TypingEffect = ({ strings, typeSpeed = 170, backSpeed = 80, backDelay = 1500, loop = true }) => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(typeSpeed);

  useEffect(() => {
    let timer;
    const handleType = () => {
      const i = loopNum % strings.length;
      const fullText = strings[i];

      setText(isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1));

      if (!isDeleting && text === fullText) {
        timer = setTimeout(() => setIsDeleting(true), backDelay);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }

      setTypingSpeed(isDeleting ? backSpeed : typeSpeed);
    };

    timer = setTimeout(handleType, typingSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, strings, typeSpeed, backSpeed, backDelay]);

  return <span>{text}</span>;
};

