const soundboard = document.getElementById('soundboard');

const audioFiles = [
    { name: 'Ah-ha', file: 'Audio/Ah-ha.mp3', description: '1.4 secs' },
    { name: 'Back of the net', file: 'Audio/back-of-the-net.mp3', description: '1.02     secs' },
    { name: 'Bang out of order', file: 'Audio/bangoutoforder.mp3', description: '1.38 secs' },
    { name: 'dan', file: 'Audio/dan.mp3', description: '0.5 secs' },
    { name: 'Email of the evening', file: 'Audio/emailoftheevening.mp3', description: '1.4 secs' },
    { name: 'Hello partridge', file: 'Audio/hellopartridge.mp3', description: '2.25 secs' },
    { name: 'I ate a scotch egg', file: 'Audio/iateascotchegg.mp3', description: '1.4 secs' },
    { name: 'Im confused', file: 'Audio/imconfused.mp3', description: '1.4 secs' },
];


audioFiles.forEach(({ name, file, description }, index) => {
    const button = document.createElement('button');
    button.textContent = name;
    button.className = 'button';

    // Set up event listeners to show/hide description on hover
    button.addEventListener('mouseover', () => {
        button.textContent = description; // Show description on hover
    });

    button.addEventListener('mouseout', () => {
        button.textContent = name; // Restore button text on mouseout
    });

    button.addEventListener('click', () => {
        const audio = new Audio(file);
        audio.play();
    });

    soundboard.appendChild(button);
});

