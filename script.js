/*
resources:
1) Screen capture API - https://developer.mozilla.org/en-US/docs/Web/API/Screen_Capture_API/Using_Screen_Capture
2) Picture-In-Picture API - https://css-tricks.com/an-introduction-to-the-picture-in-picture-web-api/
*/

const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// Prompt to select media stream, pass to video element, then play

async function selectMediaStream() {
    //screen-capture API
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    }
    catch (err) {
        // Catch Error here
        console.log('Woops, error here:', err);
    }
}

button.addEventListener('click', async () => {
    // Disable Button
    button.disabled = true;

    // Start Picture in Picture
    await videoElement.requestPictureInPicture();

    // Reset btn
    button.disabled = false;
});

// On load

selectMediaStream();

