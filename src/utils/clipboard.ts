/**
 * Safe clipboard helper for sandboxed iframes & modern web browsers.
 * Handles permission denials, document focus restrictions, and legacy fallbacks gracefully.
 */
export const copyToClipboard = async (text: string): Promise<boolean> => {
  if (!text) return false;

  // Attempt standard navigator.clipboard API
  try {
    if (typeof navigator !== 'undefined' && navigator.clipboard && typeof navigator.clipboard.writeText === 'function') {
      await navigator.clipboard.writeText(text);
      return true;
    }
  } catch (err) {
    // In iframes without clipboard-write permissions or when window isn't focused, writeText rejects
    console.debug('navigator.clipboard.writeText unavailable or rejected:', err);
  }

  // Fallback to hidden textarea with execCommand('copy')
  try {
    if (typeof document !== 'undefined') {
      const textarea = document.createElement('textarea');
      textarea.value = text;
      textarea.setAttribute('readonly', '');
      textarea.style.position = 'fixed';
      textarea.style.left = '-9999px';
      textarea.style.top = '0';
      textarea.style.opacity = '0';
      document.body.appendChild(textarea);
      textarea.focus();
      textarea.select();
      const success = document.execCommand('copy');
      document.body.removeChild(textarea);
      return success;
    }
  } catch (err) {
    console.warn('Fallback document.execCommand copy failed:', err);
  }

  return false;
};
