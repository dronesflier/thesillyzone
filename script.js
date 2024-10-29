function updateCounter() {
    // Use a fixed date as seed (this ensures consistency between reloads)
    const baseDate = new Date('2024-10-10').getTime();
    const now = Date.now();

    // Get seconds elapsed since base date
    const elapsedSeconds = Math.floor((now - baseDate) / 1000);

    // Make it tick up more sporadically by multiplying by 7
    // (any prime number would work well here)
    const result = elapsedSeconds * 7;

    document.getElementById('counting').textContent = ("bodies collected: ~" + result);
}

// Update every second
updateCounter();
setInterval(updateCounter, 1000);

document.getElementById('openPopup').addEventListener('click', function () {
    document.getElementById('popup').style.display = 'block';
});

document.getElementById('closePopup').addEventListener('click', function () {
    document.getElementById('popup').style.display = 'none';
});

document.getElementById('reallyyButton').addEventListener('click', function () {
    alert("contact[at]skysyrup.dev, then. be exceptionally funny and it may get added.")
});

window.onload = function () {
    if (isMobile()) {
        alert("this website was NOT designed for mobile use. here be dragons. get a desktop nerd")
    }
}

function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}