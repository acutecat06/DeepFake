function handleDragOver(event) {
    event.preventDefault();
  }
  
  function handleDrop(event) {
    event.preventDefault();
    const files = event.dataTransfer.files;
    if (files && files.length > 0) {
      console.log("File dropped:", files[0].name);
    }
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    const uploadArea = document.getElementById("uploadArea");
    const fileInput = document.getElementById("fileInput");
    const startAnalysisBtn = document.getElementById("startAnalysisBtn");
  
    uploadArea.addEventListener("click", () => {
      fileInput.click();
    });
  
    fileInput.addEventListener("change", (event) => {
      const file = event.target.files[0];
      if (file) {
        console.log("File selected:", file.name);
      }
    });
  
    startAnalysisBtn.addEventListener("click", () => {
      alert("Starting analysis... (Demo)");
    });
  });
  