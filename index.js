document.getElementById('uploadForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData();
    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0];
    let name = document.getElementById("category").value + '-' + document.getElementById("subcategory").value + '-' + document.getElementById("brand").value;

    const renamedFile = new File([file], name, {
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


function UpdateFileName() {
    const fileInput = document.getElementById('fileInput');
    const fileName = document.getElementById('fileName');

    console.log("CHANGE");
    const file = fileInput.files[0];
    if (file) {
        console.log(file);
        console.log(file.name);
        fileName.innerText = file.name;
    }
}