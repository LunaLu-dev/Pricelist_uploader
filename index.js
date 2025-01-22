document.addEventListener('DOMContentLoaded', function() {
    const uploadForm = document.getElementById('uploadForm');
    if (!uploadForm) {
        console.error('Form not found');
        return;
    }

    uploadForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        console.log("Form submitted");

        const formData = new FormData();
        const fileInput = document.getElementById('fileInput');
        const file = fileInput.files[0];
        let name = document.getElementById("category").value + '-' +
            document.getElementById("subcategory").value + '-' +
            document.getElementById("brand").value + ".pdf";

        console.log("Selected file:", file);
        console.log("New filename:", name);

        const renamedFile = new File([file], name, {
            type: file.type,
            lastModified: file.lastModified,
        });

        formData.append('file', renamedFile);

        try {
            const response = await fetch('http://192.168.1.69:7001/upload', {
                method: 'POST',
                body: formData
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const result = await response.json();
            console.log('Upload successful:', result);
            alert('File uploaded successfully!');
        } catch (error) {
            console.error('Upload failed:', error);
            alert('Upload failed!');
        }
    });
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