<?php
if (!defined('_GNUBOARD_')) exit; // 개별 페이지 접근 불가

add_event('admin_common', 'admin_boots', 10, 5);
function admin_boots() {
    if (!file_exists(G5_PATH.'/favicon.ico')) {
        add_stylesheet('<link rel="shortcut icon" href="https://www.w3.org/favicon.ico">');
    }
    add_stylesheet('<link rel="preconnect" href="https://fonts.googleapis.com">');
    add_stylesheet('<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>');
    add_stylesheet('<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR&family=Noto+Serif+KR&family=Roboto+Mono&display=swap">', 10);
    add_stylesheet('<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/pretendard@1.3.9/dist/web/static/pretendard.min.css?ver=latest">', 10);
    add_stylesheet('<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css?ver=latest">', 10);
    add_stylesheet('<link rel="stylesheet" href="'.G5_ADMIN_URL.'/css/boots.css?ver='.filemtime(G5_ADMIN_PATH.'/css/boots.css').'">', 10);
    add_javascript('<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js?ver=latest"></script>', 10);
    add_javascript('<script src="'.G5_ADMIN_URL.'/js/boots.js?ver='.filemtime(G5_ADMIN_PATH.'/js/boots.js').'"></script>', 10);
}
