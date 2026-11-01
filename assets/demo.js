document.querySelectorAll('[data-demo-open]').forEach(button => {
  const dialog = document.getElementById('demo-dialog');
  const video = dialog?.querySelector('video');
  if (!dialog || !video) return;
  button.addEventListener('click', () => {
    dialog.showModal();
    video.currentTime = 0;
    video.play().catch(() => {});
  });
  dialog.querySelector('[data-demo-close]').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
  dialog.addEventListener('close', () => { video.pause(); video.currentTime = 0; });
});