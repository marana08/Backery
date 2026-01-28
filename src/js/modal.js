document.addEventListener('DOMContentLoaded', () => {
    const modalRefs = {
        modal: document.querySelector('.backdrop'),
        openBtns: document.querySelectorAll('.modal-btn-open'),
        closeBtn: document.querySelector('.modal-btn-close'),
    };

    if (!modalRefs.modal || !modalRefs.closeBtn) return;

    const openModal = () => {
        modalRefs.modal.classList.remove('is-hidden');
        document.addEventListener('keydown', onEscPress);
    };

    const closeModal = () => {
        modalRefs.modal.classList.add('is-hidden');
        document.removeEventListener('keydown', onEscPress);
    };

    const onEscPress = (e) => {
        if (e.key === 'Escape') closeModal();
    };

    modalRefs.openBtns.forEach(btn =>
        btn.addEventListener('click', openModal)
    );

    modalRefs.closeBtn.addEventListener('click', closeModal);

    modalRefs.modal.addEventListener('click', (e) => {
        if (e.target === modalRefs.modal) closeModal();
    });
});
