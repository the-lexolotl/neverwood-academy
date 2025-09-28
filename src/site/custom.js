document.addEventListener("DOMContentLoaded", () => {
  // Handle MetaBind-like buttons
  document.querySelectorAll("[data-metabind-button]").forEach(btn => {
    btn.addEventListener("click", () => {
      alert(`Button clicked: ${btn.dataset.metabindButton}`);
      // you can expand this: save to localStorage, toggle classes, etc.
    });
  });

  // Handle MetaBind-like inputs
  document.querySelectorAll("[data-metabind-input]").forEach(input => {
    input.addEventListener("input", e => {
      console.log(`Input changed: ${e.target.value}`);
      // again, expand: sync to localStorage, update DOM, etc.
    });
  });
});
