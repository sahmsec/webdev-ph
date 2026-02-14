const sections = document.querySelectorAll('section');

for (const section of sections) {
    console.log(section);

    section.style.backgroundColor = 'lightblue';
    section.style.padding = '20px';
    section.style.color = 'darkgreen';
    section.style.borderRadius = '10px';
    section.style.maxWidth = '50%';
    section.style.textAlign = 'center';
    section.style.listStyle = 'none';
    section.style.margin = '20px auto';
    section.style.border = '2px solid darkgreen';

    const listItems = section.querySelectorAll('li');
    for (const li of listItems) {
        li.style.listStyle = 'none';
    }

}

// Alternatively, you can add a class to the sections and style them in CSS:

// for (const section of sections) {
//     section.classList.add('my-section');
// }