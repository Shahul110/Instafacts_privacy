document.addEventListener('DOMContentLoaded', () => {
  const email = document.getElementById('email-link');
  if (email) {
    email.addEventListener('click', () => {
      console.info('User clicked the contact email link.');
    });
  }
});
