let currentSection = 0 // Индекс текущей секции
const sections = document.querySelectorAll('section') // Получаем все секции

function scrollToNextSection() {
	if (currentSection < sections.length - 1) {
		currentSection++ // Переходим к следующей секции
		sections[currentSection].scrollIntoView({
			behavior: 'smooth' // Плавный скролл
		})
	}
}

setInterval(scrollToNextSection, 6000)