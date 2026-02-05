document.addEventListener('DOMContentLoaded', () => {
    const modal = document.querySelector('.backdrop');
    const openBtns = document.querySelectorAll('.modal-btn-open');
    const closeBtn = document.querySelector('.modal-btn-close');

    if (!modal || !closeBtn || !openBtns.length === 0) {
        console.warn('Modal elements not found');
        return;
    }

    const openModal = () => {
        modal.classList.remove('is-hidden');
        document.addEventListener('keydown', onEscPress);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        modal.classList.add('is-hidden');
        document.removeEventListener('keydown', onEscPress);
        document.body.style.overflow = '';
    };

    const onEscPress = (e) => {
        if (e.key === 'Escape') {
            closeModal();
        }
    };

    openBtns.forEach(btn => {
        btn.addEventListener('click', openModal);
    });

    closeBtn.addEventListener('click', closeModal);

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
});
