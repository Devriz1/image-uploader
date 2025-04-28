const imageInput = document.getElementById('imageInput');
const preview = document.getElementById('preview');

imageInput.addEventListener('change', function() {
  const file = this.files[0];

  if (file) {
    const reader = new FileReader();

    reader.addEventListener('load', function() {
      preview.innerHTML = `<img src="${this.result}" alt="Uploaded Image">`;
    });

    reader.readAsDataURL(file);
  } else {
    preview.innerHTML = `<p>No image selected</p>`;
  }
});
