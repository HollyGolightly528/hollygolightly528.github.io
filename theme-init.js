// Run before styles load so the saved palette is applied without a light flash.
(() => {
 let theme = 'dark';
 try { const saved = localStorage.getItem('tc-theme'); if (saved === 'light' || saved === 'dark') theme = saved; } catch (_) {}
 document.documentElement.dataset.theme = theme;
})();
