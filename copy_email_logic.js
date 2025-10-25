// --- CONFIGURATION ---
const EMAIL_ADDRESS = 'thisiszubayer@gmail.com';
const NOTIFICATION_DURATION = 3000; // 3 seconds

// --- NOTIFICATION HANDLER ---
function showNotification(message) {
    const container = document.getElementById('copy-notification');
    const messageSpan = document.getElementById('notification-message');

    if (!container || !messageSpan) {
        // If elements are missing, fail silently but log error
        console.error("Copy-to-Clipboard: Notification UI elements not found.");
        return;
    }

    messageSpan.textContent = message;
    
    // 1. Show notification
    container.classList.add('notification-active');

    // 2. Hide after duration
    setTimeout(() => {
        container.classList.remove('notification-active');
    }, NOTIFICATION_DURATION);
}

// --- CORE COPY FUNCTION ---
/**
 * Copies the configured email address to the clipboard.
 * We use document.execCommand('copy') for better compatibility in sandboxed iFrames.
 */
function copyEmailToClipboard(event) {
    // Prevent the default action (opening the mailto link)
    if (event) {
        event.preventDefault();
    }
    
    let success = false;
    try {
        // Create a temporary, hidden textarea element
        const tempElement = document.createElement('textarea');
        tempElement.value = EMAIL_ADDRESS;
        
        // Style to make it invisible and off-screen
        tempElement.style.position = 'fixed'; // Use fixed for better placement certainty
        tempElement.style.top = '0';
        tempElement.style.left = '-9999px';
        document.body.appendChild(tempElement);
        
        // Select and copy the text
        tempElement.select();
        document.execCommand('copy');
        
        document.body.removeChild(tempElement);
        success = true;
    } catch (err) {
        console.error('Copy to clipboard failed:', err);
    }

    if (success) {
        showNotification(`${EMAIL_ADDRESS} copied! 📋`);
    } else {
        // Fallback (rarely triggered, but good practice)
        showNotification('Copy failed. Please copy the email manually.');
    }
}

// --- INITIALIZATION ---
// We must wait for the React component to render the <a> tag before we can attach the listener.
window.addEventListener('load', () => {
    // Target the <a> element using its unique href attribute
    const emailLink = document.querySelector(`a[href="mailto:${EMAIL_ADDRESS}"]`);

    if (emailLink) {
        // Overwrite the default behavior with our copy function
        emailLink.addEventListener('click', copyEmailToClipboard);
        console.log(`Copy-to-Clipboard: Function attached to email link (${EMAIL_ADDRESS}).`);
    } else {
        console.warn('Copy-to-Clipboard: Could not find the target email link element.');
    }
});
