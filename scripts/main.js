document.addEventListener('DOMContentLoaded', () => {
    const userPrefersDark = window.matchMedia('(prefers-color-scheme: dark)');

    document.body.classList.toggle('dark-mode', userPrefersDark.matches);

    userPrefersDark.addEventListener('change', (event) => {
        document.body.classList.toggle('dark-mode', event.matches);
    });

    const text = "Hello, World!";
    const typedTextElement = document.getElementById("typed-text");
    const typingSpeed = 210;

    let index = 0;

    function typeLetter() {
        if (index < text.length) {
            typedTextElement.textContent += text.charAt(index);
            index++;
            setTimeout(typeLetter, typingSpeed);
        }
    }

    typeLetter();
});