"use client"

import { useLayoutEffect } from "react"

export default function ScrollToTop() {
  useLayoutEffect(() => {
    // 1. Отключаем память скролла браузера
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    // 2. Скроллим вверх немедленно
    window.scrollTo(0, 0);

    // 3. На всякий случай дублируем через микро-таймаут, 
    // чтобы "перебить" анимации Next.js
    const timer = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  return null
}