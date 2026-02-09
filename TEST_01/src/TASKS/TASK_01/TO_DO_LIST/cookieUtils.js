/**
 * Sets a cookie with the given name, value, and expiration in days.
 * @param {string} name - The name of the cookie.
 * @param {string} value - The value to store.
 * @param {number} days - Number of days until the cookie expires.
 */
export const setCookie = (name, value, days = 7) => {
    let expires = "";
    if (days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (encodeURIComponent(value) || "") + expires + "; path=/";
};

/**
 * Gets the value of a cookie by name.
 * @param {string} name - The name of the cookie.
 * @returns {string|null} - The value of the cookie or null if not found.
 */
export const getCookie = (name) => {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return decodeURIComponent(c.substring(nameEQ.length, c.length));
    }
    return null;
};

/**
 * Deletes a cookie by setting its expiration date to the past.
 * @param {string} name - The name of the cookie.
 */
export const deleteCookie = (name) => {
    document.cookie = name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
};
