const backdrop = document.querySelector('.backdrop-hero');

export function openModal () {
    document.body.style.overflow = "hidden"
    window.addEventListener('keydown', onEscPress);
    backdrop.classList.remove('is-hidden');
}

export function closeModal () {
    document.body.style.overflow = ""
    window.removeEventListener('keydown', onEscPress);
    backdrop.classList.add('is-hidden');
}

export function onBackDropClick(e) {
    if(e.target === e.currentTarget) {
        closeModal();
    }
}

export function onEscPress(e) {
    const ESC_KEY_CODE = 'Escape';
    if(e.code === ESC_KEY_CODE) {
        closeModal()
    };
}