$(function() {
    $('html').attr('data-bs-theme', '');

    const themeSwitcher = `
        <div class="theme-switcher">
            <button type="button" class="theme-switcher-button" data-bs-theme-value="light">
                <svg class="" fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24" style="color: currentcolor;"><circle cx="12" cy="12" r="5"></circle><path d="M12 1v2"></path><path d="M12 21v2"></path><path d="M4.22 4.22l1.42 1.42"></path><path d="M18.36 18.36l1.42 1.42"></path><path d="M1 12h2"></path><path d="M21 12h2"></path><path d="M4.22 19.78l1.42-1.42"></path><path d="M18.36 5.64l1.42-1.42"></path></svg>
                <span class="sr-only">Light</span>
            </button>
            <button type="button" class="theme-switcher-button" data-bs-theme-value="">
                <svg class="" fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24" style="color: currentcolor;"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><path d="M8 21h8"></path><path d="M12 17v4"></path></svg>
                <span class="sr-only">Auto</span>
            </button>
            <button type="button" class="theme-switcher-button" data-bs-theme-value="dark">
                <svg class="" fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24" style="color: currentcolor;"><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path></svg>
                <span class="sr-only">Dark</span>
            </button>
        </div>
    `;
    const $themeSwitcher = $(themeSwitcher);
    $('#logo').after($themeSwitcher.clone().addClass('small dark').attr('id', 'theme-switcher'));
    $('.new_win').closest('body').append($themeSwitcher.clone().addClass('small d-none'));

    const theme = localStorage.getItem('theme') || '';
    $(document).on('click change', '[data-bs-theme-value]', function(e) {
        const $this = $(this);
        const value = $this.data('bsThemeValue') || '';
        localStorage.setItem('theme', value);
        $('[data-bs-theme-value="' + value + '"]').addClass('active');
        $('[data-bs-theme-value!="' + value + '"]').removeClass('active');
        if (value) {
            $('html').attr('data-bs-theme', value);
        } else {
            $('html').attr('data-bs-theme', window.matchMedia("(prefers-color-scheme: dark)").matches ? 'dark' : 'light');
        }

        // Plugin
        const boots = $('html').attr('data-bs-theme');
        // jQueryUI
        if (boots === 'dark') {
            $('head').append($('<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/jquery-ui@1.13.2/dist/themes/ui-darkness/jquery-ui.min.css" data-boots-theme="jQueryUI">'));
        } else {
            $('[data-boots-theme]').remove();
        }
    });
    $('[data-bs-theme-value="' + theme + '"]').trigger('change');
});
