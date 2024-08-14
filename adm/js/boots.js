const themeSelect = `
    <div class="theme-select dropdown dropdown-menu-end">
        <button type="button" class="btn btn-outline-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" id="theme-select">
            <i class="bi-circle-half" id="theme-select-icon"></i>
            <span class="sr-only" id="theme-select-text">Auto</span>
        </button>
        <ul class="dropdown-menu p-1 rounded" aria-labelledby="theme-select-text">
            <li class="mt-0">
                <button type="button" class="dropdown-item rounded d-flex align-items-center active" data-bs-theme-value="auto" aria-pressed="true">
                    <i class="bi-circle-half" data-theme-pickup-icon></i>
                    <span class="mx-2" data-theme-pickup-text>Auto</span>
                    <i class="bi-check2 ms-auto d-none" data-theme-pickup-mark></i>
                </button>
            </li>
            <li class="mt-1">
                <button type="button" class="dropdown-item rounded d-flex align-items-center" data-bs-theme-value="light" aria-pressed="false">
                    <i class="bi-sun-fill" data-theme-pickup-icon></i>
                    <span class="mx-2" data-theme-pickup-text>Light</span>
                    <i class="bi-check2 ms-auto d-none" data-theme-pickup-mark></i>
                </button>
            </li>
            <li class="mt-1">
                <button type="button" class="dropdown-item rounded d-flex align-items-center" data-bs-theme-value="dark" aria-pressed="false">
                    <i class="bi-moon-stars" data-theme-pickup-icon></i>
                    <span class="mx-2" data-theme-pickup-text>Dark</span>
                    <i class="bi-check2 ms-auto d-none" data-theme-pickup-mark></i>
                </button>
            </li>
        </ul>
    </div>
`;
const themeSwitch = `
    <div class="theme-switch">
        <button type="button" class="theme-switch-button" data-bs-theme-value="light" aria-pressed="false">
            <svg class="" fill="none" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="32" height="32" style="color: currentcolor;"><circle cx="12" cy="12" r="5"></circle><path d="M12 1v2"></path><path d="M12 21v2"></path><path d="M4.22 4.22l1.42 1.42"></path><path d="M18.36 18.36l1.42 1.42"></path><path d="M1 12h2"></path><path d="M21 12h2"></path><path d="M4.22 19.78l1.42-1.42"></path><path d="M18.36 5.64l1.42-1.42"></path></svg>
            <span class="sr-only">Light</span>
        </button>
        <button type="button" class="theme-switch-button active" data-bs-theme-value="auto" aria-pressed="true">
            <svg class="" fill="none" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="32" height="32" style="color: currentcolor;"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><path d="M8 21h8"></path><path d="M12 17v4"></path></svg>
            <span class="sr-only">Auto</span>
        </button>
        <button type="button" class="theme-switch-button" data-bs-theme-value="dark" aria-pressed="false">
            <svg class="" fill="none" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="32" height="32" style="color: currentcolor;"><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path></svg>
            <span class="sr-only">Dark</span>
        </button>
    </div>
`;
const themeToggle = `
    <div class="theme-toggle">
        <button type="button" class="theme-toggle-button position-absolute d-none" data-bs-theme-value="light" aria-pressed="false">
            <svg class="" fill="none" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="32" height="32" style="color: currentcolor;"><circle cx="12" cy="12" r="5"></circle><path d="M12 1v2"></path><path d="M12 21v2"></path><path d="M4.22 4.22l1.42 1.42"></path><path d="M18.36 18.36l1.42 1.42"></path><path d="M1 12h2"></path><path d="M21 12h2"></path><path d="M4.22 19.78l1.42-1.42"></path><path d="M18.36 5.64l1.42-1.42"></path></svg>
            <span class="sr-only">Light</span>
        </button>
        <button type="button" class="theme-toggle-button position-relative invisible z-n1" data-bs-theme-value="auto" aria-pressed="false">
            <svg class="" fill="none" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="32" height="32" style="color: currentcolor;"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><path d="M8 21h8"></path><path d="M12 17v4"></path></svg>
            <span class="sr-only">Auto</span>
        </button>
        <button type="button" class="theme-toggle-button position-absolute d-none" data-bs-theme-value="dark" aria-pressed="false">
            <svg class="" fill="none" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="32" height="32" style="color: currentcolor;"><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path></svg>
            <span class="sr-only">Dark</span>
        </button>
    </div>
`;

(() => {
    'use strict'

    const getStoredTheme = () => localStorage.getItem('theme')
    const setStoredTheme = theme => localStorage.setItem('theme', theme)
    const getPreferredTheme = () => {
        const storedTheme = getStoredTheme()
        if (['light', 'dark'].includes(storedTheme)) {
            return storedTheme
        }
        return 'auto';
    }
    const setTheme = theme => {
        if (theme === 'auto') {
            document.documentElement.setAttribute('data-bs-theme', (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'))
        } else {
            document.documentElement.setAttribute('data-bs-theme', theme)
        }
    }

    setTheme(getPreferredTheme())

    const showActiveTheme = (theme, focus = false) => {
        // Theme Select
        const themeSelect = document.querySelector('.theme-select')
        if (themeSelect) {
            const themeSelectButton = document.querySelector('#theme-select')
            const themeSelectButtonText = document.querySelector('#theme-select-text')
            const themeSelectButtonIcon = document.querySelector('#theme-select-icon')
            const themeSelectActive = themeSelect.querySelector(`[data-bs-theme-value="${theme}"]`)
            const themeSelectActiveText = themeSelectActive.querySelector(`[data-theme-pickup-text]`)
            const themeSelectActiveMark = themeSelectActive.querySelector(`[data-theme-pickup-mark]`)
            const themeSelectActiveIcon = themeSelectActive.querySelector(`[data-theme-pickup-icon]`)
            themeSelect.querySelectorAll('[data-bs-theme-value]').forEach(element => {
                element.classList.remove('active')
                element.setAttribute('aria-pressed', 'false')
                element.querySelector(`[data-theme-pickup-mark]`).classList.add('d-none')
            })
            themeSelectActive.classList.add('active')
            themeSelectActive.setAttribute('aria-pressed', 'true')
            themeSelectActiveMark.classList.remove('d-none')
            themeSelectButtonIcon.classList.remove(themeSelectButtonIcon.getAttribute('class'))
            themeSelectButtonIcon.classList.add(themeSelectActiveIcon.getAttribute('class'))
            themeSelectButtonText.innerText = themeSelectActiveText.innerText
            const themeSelectLabel = `${themeSelectButtonText.textContent} (${themeSelectActive.dataset.bsThemeValue})`
            themeSelectButton.setAttribute('aria-label', themeSelectLabel)
            if (focus) {
                themeSelectButton.focus()
            }
        }

        // Theme Switch
        const themeSwitch = document.querySelector('.theme-switch')
        if (themeSwitch) {
            const themeSwitchActive = themeSwitch.querySelector(`[data-bs-theme-value="${theme}"]`)
            themeSwitch.querySelectorAll('[data-bs-theme-value]').forEach(element => {
                element.classList.remove('active')
                element.setAttribute('aria-pressed', 'false')
            })
            themeSwitchActive.classList.add('active')
            themeSwitchActive.setAttribute('aria-pressed', 'true')
            if (focus) {
                themeSwitch.focus()
            }
        }

        // Theme Toggle
        const themeToggle = document.querySelector('.theme-toggle')
        if (themeToggle) {
            const themeToggleActive = themeToggle.querySelector(`[data-bs-theme-value="${theme}"]`)
            themeToggle.querySelectorAll('[data-bs-theme-value]').forEach(element => {
                element.classList.remove('active')
                element.setAttribute('aria-pressed', 'false')
            })
            themeToggleActive.classList.add('active')
            themeToggleActive.setAttribute('aria-pressed', 'true')
            const themeToggleButtonDark  = themeToggle.querySelector(`[data-bs-theme-value="dark"]`);
            const themeToggleButtonLight = themeToggle.querySelector(`[data-bs-theme-value="light"]`);
            const later = ['light', 'dark'].includes(theme)
                ? (theme === 'light' ? 'dark' : 'light')
                : (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'light' : 'dark')
            switch (later) {
                case 'dark': 
                    themeToggleButtonLight.classList.add('d-none');
                    themeToggleButtonDark.classList.remove('d-none');
                    break;
                case 'light': 
                    themeToggleButtonDark.classList.add('d-none');
                    themeToggleButtonLight.classList.remove('d-none');
                    break;
            }
            if (focus) {
                themeToggle.focus()
            }
        }
    }

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
        const storedTheme = getStoredTheme()
        if (storedTheme !== 'light' && storedTheme !== 'dark') {
            setTheme(getPreferredTheme())
        }
    })

    window.addEventListener('DOMContentLoaded', () => {
        showActiveTheme(getPreferredTheme())
        document.querySelectorAll('[data-bs-theme-value]').forEach(toggle => {
            toggle.addEventListener('click', () => {
                const theme = toggle.getAttribute('data-bs-theme-value')
                setStoredTheme(theme)
                setTheme(theme)
                showActiveTheme(theme, true)
            })
        })
    })
})()

$(function() {
    // Change
    $('#logo').after(
        $(themeSwitch).clone().addClass(function() {
            const shape = $(this).attr('class');
            return `${shape}-small ${shape}-black`;
        })
    );
    $('.new_win').closest('body').append(
        $(themeSwitch).clone().addClass(function() {
            const shape = $(this).attr('class');
            return `${shape}-small d-none`;
        })
    );

    // Plugin
    $('[data-bs-theme-value]').on('click change', function() {
        const $this = $(this);
        const value = $this.data('bsThemeValue') || '';
        $('[data-theme-plugin]').remove();
        if (value === 'dark' || (value === 'auto' && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            // jQueryUI
            $('head').append($('<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/jquery-ui@1.13.2/dist/themes/ui-darkness/jquery-ui.min.css" data-theme-plugin="jQueryUI">'));
        }
    });
    setTimeout(() => {
        $('[data-bs-theme-value].active').trigger('change');
    }, 0);
});
