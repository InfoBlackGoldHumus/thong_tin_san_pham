const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show')
        } else {
            entry.target.classList.remove('show')
        }
    })
})

const hiddenElements = document.querySelectorAll('.hidden');
const hiddenElementsLoiIch = document.querySelectorAll('.hidden-loi-ich');
hiddenElements.forEach(el => observer.observe(el));
hiddenElementsLoiIch.forEach(el => observer.observe(el));
