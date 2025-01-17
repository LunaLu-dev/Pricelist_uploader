document.getElementById('uploadForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData();
    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0];

    const renamedFile = new File([file], 'balls.pdf', {
        type: file.type,
        lastModified: file.lastModified,
    });

    formData.append('file', renamedFile);

    try {
        const response = await fetch('http://localhost:3000/upload', {
            method: 'POST',
            body: formData
        });

        const result = await response.json();
        console.log('Upload successful:', result);
        alert('File uploaded successfully!');
    } catch (error) {
        console.error('Upload failed:', error);
        alert('Upload failed!');
    }
});