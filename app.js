// Объект с переводами
const translations = {
    en: {
      "welcome-message": "Welcome!"
    },
    fr: {
      "welcome-message": "Bienvenue!"
    }
  };
  
  // Функция для переключения языка
  function switchLanguage(lang) {
    // Получаем все элементы, которые нужно переводить
    const elements = document.querySelectorAll("[data-translate]");
  
    // Проходимся по каждому элементу
    elements.forEach(function(element) {
      // Получаем ключ перевода для этого элемента
      const key = element.getAttribute("data-translate");
  
      // Если перевод для этого ключа существует на выбранном языке
      if (translations[lang][key]) {
        // Заменяем содержимое элемента на перевод
        element.textContent = translations[lang][key];
      }
    });
  }
  
