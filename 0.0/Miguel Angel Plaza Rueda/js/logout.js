document.getElementById('logoutBtn').addEventListener('click', async () => {
  await clearLoginStatus();
  window.location.reload();
});
