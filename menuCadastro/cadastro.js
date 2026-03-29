function openModal(id) {
    document.getElementById(id).classList.add('active');
    document.body.style.overflow = 'hidden';
}

function clearModal(id) {
    const overlay = document.getElementById(id);
    overlay.querySelectorAll('input, textarea').forEach(el => el.value = '');
    overlay.querySelectorAll('input[type="radio"]').forEach(el => el.checked = false);
}

function closeModal(id) {
    clearModal(id);
    const overlay = document.getElementById(id);
    const box = overlay.querySelector('.modal-box');
    box.style.transform = 'translateY(16px) scale(0.97)';
    box.style.opacity = '0';
    overlay.style.opacity = '0';
    setTimeout(() => {
        overlay.classList.remove('active');
        overlay.style.opacity = '';
        box.style.transform = '';
        box.style.opacity = '';
        document.body.style.overflow = '';
    }, 280);
}

function closeOnBackdrop(e, id) {
    if (e.target === e.currentTarget) closeModal(id);
}

document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
        document.querySelectorAll('.modal-overlay.active').forEach(m => closeModal(m.id));
    }
});
