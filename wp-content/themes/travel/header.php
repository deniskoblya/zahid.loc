<?php if (!defined('ABSPATH')) exit;
$blog_url = get_bloginfo('url');
$blog_url_ru = str_replace('/ua', '', $blog_url);
$page_url = $_SERVER['REQUEST_URI'];
$page_url_res = str_replace('/ua', '', $page_url); ?>
<!DOCTYPE html>
<html <?php echo str_replace('ru-RU', 'ru', get_language_attributes('html')); ?>>

<head>
    <meta name="yandex-verification" content="7b6dbaf8bf39f91f" />
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="profile" href="https://gmpg.org/xfn/11">
    <?php $favicon = get_field('favicon_option', 'options'); ?>
    <link rel="shortcut icon" href="<?php echo ($favicon ? $favicon : TRAVEL_URI . '/img/favicon.ico'); ?>" />

    <link hreflang="ru" href="<?php echo $blog_url_ru . $page_url_res; ?>" rel="alternate" />
    <link hreflang="uk" href="<?php echo $blog_url_ru . '/ua' . $page_url_res; ?>" rel="alternate" />
    <?php if (false) { ?>
    <link hreflang="uk" href="<?php echo $blog_url . $page_url_res; ?>" rel="alternate" /><?php } ?>

    <?php if (is_home()) echo '<link rel="canonical" href="' . get_permalink(get_option('page_for_posts')) . '">';
	elseif (is_page_template('page-news.php')) echo '<link rel="canonical" href="' . get_home_url() . '/news">'; ?>


    <?php wp_head(); ?>

    <style>
        #menu-item-9345,
        #menu-item-8828 {
            pointer-events: none;
        }

    </style>

</head>

<body <?php body_class(); ?>>
    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5P7XGWD" height="0" width="0" style="display: none; visibility: hidden;"></iframe></noscript>
    <?php /* ?>
    <div id="loader-wrapper" style="position: fixed; left:0; top:0; width: 100%; height: 100%; z-index: 1000; background: #fff;">
        <div class="loader" style="width: 150px; height: 10px; overflow: hidden; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);">
            <span style="display: block; height:100%; width:100%; position: absolute; background-color: #00b100;"></span>
        </div>
    </div>
    <?php */ ?>
    <header>
        <div class="container">
            <div class="top">
                <?php
				$logo = get_field('logo_option', 'options');
				if ($logo) { ?>
                <a href="<?php echo home_url('/'); ?>" id="logo"><img src="<?php echo $logo['url']; ?>" alt="<?php echo esc_attr($logo['alt']); ?>" title="<?php echo esc_attr($logo['title']); ?>"></a>
                <?php } ?>
                <div class="left">
                    <?php
					$switcher =  get_lang_switcher();
					echo $switcher;
					?>
                    <nav>
                        <div id="close-menu" class="button-close"><span></span><span></span></div>
                        <?php
						echo $switcher;

						$socials = get_field('header_social_option', 'options');
						if ($socials) { ?>
                        <div class="messengers">
                            <?php
								foreach ($socials as $key => $link) {
									if (!empty($link['link'])) {
										$start_position = strpos($link['link'], 'href="') + 6;
										$finish_position = strpos($link['link'], '"', $start_position);
										$key_count = $finish_position - $start_position;
										$finish_link = substr($link['link'], $start_position, $key_count);
										if ($link['type'] === 'telegram') { ?>
                            <a href="<?php echo $finish_link; ?>">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                                    <path fill="#0087cb" d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm121.8 169.9l-40.7 191.8c-3 13.6-11.1 16.9-22.4 10.5l-62-45.7-29.9 28.8c-3.3 3.3-6.1 6.1-12.5 6.1l4.4-63.1 114.9-103.8c5-4.4-1.1-6.9-7.7-2.5l-142 89.4-61.2-19.1c-13.3-4.2-13.6-13.3 2.8-19.7l239.1-92.2c11.1-4 20.8 2.7 17.2 19.5z"></path>
                                </svg>
                            </a>
                            <?php } elseif ($link['type'] === 'whatsapp') { ?>
                            <a href="<?php echo $finish_link; ?>">
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;">
                                    <path fill="#00a82d" d="M256.064 0h-.128C114.784 0 0 114.816 0 256c0 56 18.048 107.904 48.736 150.048l-31.904 95.104 98.4-31.456C155.712 496.512 204 512 256.064 512 397.216 512 512 397.152 512 256S397.216 0 256.064 0zm148.96 361.504c-6.176 17.44-30.688 31.904-50.24 36.128-13.376 2.848-30.848 5.12-89.664-19.264-75.232-31.168-123.68-107.616-127.456-112.576-3.616-4.96-30.4-40.48-30.4-77.216s18.656-54.624 26.176-62.304c6.176-6.304 16.384-9.184 26.176-9.184 3.168 0 6.016.16 8.576.288 7.52.32 11.296.768 16.256 12.64 6.176 14.88 21.216 51.616 23.008 55.392 1.824 3.776 3.648 8.896 1.088 13.856-2.4 5.12-4.512 7.392-8.288 11.744-3.776 4.352-7.36 7.68-11.136 12.352-3.456 4.064-7.36 8.416-3.008 15.936 4.352 7.36 19.392 31.904 41.536 51.616 28.576 25.44 51.744 33.568 60.032 37.024 6.176 2.56 13.536 1.952 18.048-2.848 5.728-6.176 12.8-16.416 20-26.496 5.12-7.232 11.584-8.128 18.368-5.568 6.912 2.4 43.488 20.48 51.008 24.224 7.52 3.776 12.48 5.568 14.304 8.736 1.792 3.168 1.792 18.048-4.384 35.52z" />
                                </svg>
                            </a>
                            <?php } elseif ($link['type'] === 'viber') { ?>
                            <a href="<?php echo $finish_link; ?>">
                                <svg height="512pt" viewBox="-21 0 511 512" width="512pt" xmlns="http://www.w3.org/2000/svg">
                                    <path fill="#7b519c" d="M251.906 289.27c-5.855 5.859-15.351 5.859-21.21 0l-68.165-68.165a15.003 15.003 0 0 1-4.394-10.605c0-3.98 1.582-7.793 4.394-10.61l12.117-12.113-35.59-35.59-29.156 29.157c-9.812 9.812-9.808 25.777 0 35.59l124.965 124.972c4.723 4.723 11.043 7.32 17.797 7.32 6.754 0 13.074-2.601 17.797-7.324l29.156-29.152-35.59-35.594zm0 0" />
                                    <path fill="#7b519c" d="M468.984 180.71c0-48.089-18.843-93.417-53.07-127.64C381.691 18.848 336.364 0 288.277 0H181.203h-.004C133.117 0 87.79 18.848 53.57 53.066 19.348 87.29.5 132.621.5 180.707v84.164c0 37.238 11.36 73.063 32.852 103.598 18.96 26.937 44.46 47.976 74.191 61.32v48.344c0 24.996 13.996 33.863 25.98 33.867 8.563 0 17.13-4.227 25.465-12.559l53.856-53.863h75.437c48.086 0 93.414-18.848 127.637-53.07 34.223-34.223 53.07-79.551 53.07-127.637zM331.438 323.356l-39.766 39.762c-10.39 10.39-24.242 16.106-39.008 16.106-14.766 0-28.617-5.72-39.008-16.106L88.687 238.145c-21.503-21.512-21.503-56.508 0-78.016l39.766-39.762a14.98 14.98 0 0 1 10.606-4.394c3.976 0 7.793 1.578 10.605 4.394l56.805 56.805a14.999 14.999 0 0 1-.004 21.21l-12.113 12.114 46.953 46.953 12.117-12.117c5.86-5.855 15.355-5.855 21.21.004l56.805 56.805a14.986 14.986 0 0 1 4.395 10.605c0 3.98-1.578 7.797-4.395 10.61zM223.382 145.621c0-8.281 6.715-15 15-15 51.972 0 94.258 42.281 94.258 94.25 0 8.285-6.715 15-15 15-8.282 0-15-6.715-15-15 0-35.426-28.825-64.25-64.258-64.25-8.285 0-15-6.715-15-15zm158.52 94.258c-8.286 0-15-6.719-15-15 .003-34.332-13.368-66.606-37.641-90.883-24.278-24.273-56.551-37.644-90.883-37.644-8.281 0-15-6.715-15-15 0-8.282 6.719-15 15-15 42.344 0 82.152 16.492 112.094 46.433 29.945 29.942 46.433 69.75 46.43 112.094 0 8.281-6.716 15-15 15zm0 0" />
                                </svg>
                            </a>
                            <?php }
									}
								}
								?>
                        </div>
                        <?php }

						$lifecell_option = get_field('lifecell_option', 'options');
						$kyivstar_option = get_field('kyivstar_option', 'options');
						$vodafone_option = get_field('vodafone_option', 'options');
						$stationar_option = get_field('stationar_option', 'options');
						$phones = [$lifecell_option, $vodafone_option, $stationar_option];
						if ($phones) {
							$first_phone = $all_phone = '';
							foreach ($phones as $phone) {
								if ($phone) {
									if (!$first_phone) $first_phone = '<a class="firstphone" href="tel:+' . travel_get_num_only($kyivstar_option) . '">' . $kyivstar_option . '</a>';

									$all_phone .= '<a href="tel:+' . travel_get_num_only($phone) . '">' . $phone . '</a>';
								}
							}
							if ($all_phone) { ?>
                        <div class="tel">
                            <?php echo $first_phone; ?>
                            <span></span>
                            <div><?php echo $all_phone; ?></div>
                        </div>
                        <?php }
						}
						?>
                        <br>
                        <?php
						$header_call_option = get_field('header_call_option', 'options');
						echo ($header_call_option ? '<span class="button open-popup" data-rel="1">' . $header_call_option . '</span>' : '');

						wp_nav_menu(array(
							'container' => 'ul',
							'menu_class' => '',
							'theme_location' => 'top_menu',
							'walker' => new Travel_Primary_Menu_Walker_Nav_Menu()
						));

						$header_contacts_option = get_field('header_contacts_option', 'options');
						if ($header_contacts_option) { ?>
                        <div class="contacts">
                            <?php
								foreach ($header_contacts_option as $key => $contact) {
									if (!empty($contact['value'])) { ?>
                            <span><span class="icon" style="background-image: url(<?php echo ($contact['type'] === 'skype' ? TRAVEL_URI . '/img/skype.svg' : TRAVEL_URI . '/img/email.svg'); ?>);"></span><a href="<?php echo ($contact['type'] === 'skype' ? 'skype:' : 'mailto:') . $contact['value'] ?>" id="contacts-<?php echo $key ?>" rel="nofollow"><?php echo esc_html($contact['text']); ?></a></span>
                            <?php }
								}
								?>
                        </div>
                        <?php }

						$header_social_site_option = get_field('header_social_site_option', 'options');
						$header_social_title_option = get_field('header_social_title_option', 'options');
						if ($header_social_site_option) { ?>
                        <div class="social">
                            <?php
								echo ($header_social_title_option ? '<span>' . esc_html($header_social_title_option) . '</span>' : '');

								foreach ($header_social_site_option as $key => $social) {
									if (!empty($social['link'])) {
										if ($social['type'] === 'facebook') { ?>
                            <a href="<?php echo esc_url($social['link']); ?>" id="social-facebook-<?php echo $key; ?>" target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="470.513px" height="470.513px" viewBox="0 0 470.513 470.513">
                                    <path d="M271.521 154.17v-40.541c0-6.086.28-10.8.849-14.13.567-3.335 1.857-6.615 3.859-9.853 1.999-3.236 5.236-5.47 9.706-6.708 4.476-1.24 10.424-1.858 17.85-1.858h40.539V0h-64.809c-37.5 0-64.433 8.897-80.803 26.691-16.368 17.798-24.551 44.014-24.551 78.658v48.82h-48.542v81.086h48.539v235.256h97.362V235.256h64.805l8.566-81.086h-73.37z" />
                                </svg>
                            </a>
                            <?php } elseif ($social['type'] === 'twitter') { ?>
                            <a href="<?php echo esc_url($social['link']); ?>" id="social-twitter-<?php echo $key; ?>" target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
                                </svg>
                            </a>
                            <?php } elseif ($social['type'] === 'youtube') { ?>
                            <a href="<?php echo esc_url($social['link']); ?>" id="social-youtube-<?php echo $key; ?>" target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="96.875px" height="96.875px" viewBox="0 0 96.875 96.875">
                                    <path d="M95.201 25.538c-1.186-5.152-5.4-8.953-10.473-9.52-12.013-1.341-24.172-1.348-36.275-1.341-12.105-.007-24.266 0-36.279 1.341-5.07.567-9.281 4.368-10.467 9.52C.019 32.875 0 40.884 0 48.438 0 55.992 0 64 1.688 71.336c1.184 5.151 5.396 8.952 10.469 9.52 12.012 1.342 24.172 1.349 36.277 1.342 12.107.007 24.264 0 36.275-1.342 5.07-.567 9.285-4.368 10.471-9.52 1.689-7.337 1.695-15.345 1.695-22.898 0-7.554.014-15.563-1.674-22.9zM35.936 63.474V31.437c10.267 5.357 20.466 10.678 30.798 16.068-10.3 5.342-20.504 10.631-30.798 15.969z" />
                                </svg>
                            </a>
                            <?php } elseif ($social['type'] === 'instagram') { ?>
                            <a href="<?php echo esc_url($social['link']); ?>" id="social-instagram-<?php echo $key; ?>" target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 512 512">
                                    <path d="M352 0H160C71.648 0 0 71.648 0 160v192c0 88.352 71.648 160 160 160h192c88.352 0 160-71.648 160-160V160C512 71.648 440.352 0 352 0zm112 352c0 61.76-50.24 112-112 112H160c-61.76 0-112-50.24-112-112V160C48 98.24 98.24 48 160 48h192c61.76 0 112 50.24 112 112v192z" />
                                    <path d="M256 128c-70.688 0-128 57.312-128 128s57.312 128 128 128 128-57.312 128-128-57.312-128-128-128zm0 208c-44.096 0-80-35.904-80-80 0-44.128 35.904-80 80-80s80 35.872 80 80c0 44.096-35.904 80-80 80z" />
                                    <circle cx="393.6" cy="118.4" r="17.056" />
                                </svg>
                            </a>
                            <?php }
									}
								}
								?>
                        </div>
                        <?php } ?>
                    </nav>
                </div>
                <div class="right">
                    <?php if ($socials) { ?>
                    <div class="messengers">
                        <?php
							foreach ($socials as $key => $link) {
								if (!empty($link['link'])) {
									$start_position = strpos($link['link'], 'href="') + 6;
									$finish_position = strpos($link['link'], '"', $start_position);
									$key_count = $finish_position - $start_position;
									$finish_link = substr($link['link'], $start_position, $key_count);
									if ($link['type'] === 'telegram') { ?>
                        <a href="<?php echo $finish_link; ?>">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                                <path fill="#0087cb" d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm121.8 169.9l-40.7 191.8c-3 13.6-11.1 16.9-22.4 10.5l-62-45.7-29.9 28.8c-3.3 3.3-6.1 6.1-12.5 6.1l4.4-63.1 114.9-103.8c5-4.4-1.1-6.9-7.7-2.5l-142 89.4-61.2-19.1c-13.3-4.2-13.6-13.3 2.8-19.7l239.1-92.2c11.1-4 20.8 2.7 17.2 19.5z"></path>
                            </svg>
                        </a>
                        <?php } elseif ($link['type'] === 'whatsapp') { ?>
                        <a href="<?php echo $finish_link; ?>">
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;">
                                <path fill="#00a82d" d="M256.064 0h-.128C114.784 0 0 114.816 0 256c0 56 18.048 107.904 48.736 150.048l-31.904 95.104 98.4-31.456C155.712 496.512 204 512 256.064 512 397.216 512 512 397.152 512 256S397.216 0 256.064 0zm148.96 361.504c-6.176 17.44-30.688 31.904-50.24 36.128-13.376 2.848-30.848 5.12-89.664-19.264-75.232-31.168-123.68-107.616-127.456-112.576-3.616-4.96-30.4-40.48-30.4-77.216s18.656-54.624 26.176-62.304c6.176-6.304 16.384-9.184 26.176-9.184 3.168 0 6.016.16 8.576.288 7.52.32 11.296.768 16.256 12.64 6.176 14.88 21.216 51.616 23.008 55.392 1.824 3.776 3.648 8.896 1.088 13.856-2.4 5.12-4.512 7.392-8.288 11.744-3.776 4.352-7.36 7.68-11.136 12.352-3.456 4.064-7.36 8.416-3.008 15.936 4.352 7.36 19.392 31.904 41.536 51.616 28.576 25.44 51.744 33.568 60.032 37.024 6.176 2.56 13.536 1.952 18.048-2.848 5.728-6.176 12.8-16.416 20-26.496 5.12-7.232 11.584-8.128 18.368-5.568 6.912 2.4 43.488 20.48 51.008 24.224 7.52 3.776 12.48 5.568 14.304 8.736 1.792 3.168 1.792 18.048-4.384 35.52z" />
                            </svg>
                        </a>
                        <?php } elseif ($link['type'] === 'viber') { ?>
                        <a href="<?php echo $finish_link; ?>">
                            <svg height="512pt" viewBox="-21 0 511 512" width="512pt" xmlns="http://www.w3.org/2000/svg">
                                <path fill="#7b519c" d="M251.906 289.27c-5.855 5.859-15.351 5.859-21.21 0l-68.165-68.165a15.003 15.003 0 0 1-4.394-10.605c0-3.98 1.582-7.793 4.394-10.61l12.117-12.113-35.59-35.59-29.156 29.157c-9.812 9.812-9.808 25.777 0 35.59l124.965 124.972c4.723 4.723 11.043 7.32 17.797 7.32 6.754 0 13.074-2.601 17.797-7.324l29.156-29.152-35.59-35.594zm0 0" />
                                <path fill="#7b519c" d="M468.984 180.71c0-48.089-18.843-93.417-53.07-127.64C381.691 18.848 336.364 0 288.277 0H181.203h-.004C133.117 0 87.79 18.848 53.57 53.066 19.348 87.29.5 132.621.5 180.707v84.164c0 37.238 11.36 73.063 32.852 103.598 18.96 26.937 44.46 47.976 74.191 61.32v48.344c0 24.996 13.996 33.863 25.98 33.867 8.563 0 17.13-4.227 25.465-12.559l53.856-53.863h75.437c48.086 0 93.414-18.848 127.637-53.07 34.223-34.223 53.07-79.551 53.07-127.637zM331.438 323.356l-39.766 39.762c-10.39 10.39-24.242 16.106-39.008 16.106-14.766 0-28.617-5.72-39.008-16.106L88.687 238.145c-21.503-21.512-21.503-56.508 0-78.016l39.766-39.762a14.98 14.98 0 0 1 10.606-4.394c3.976 0 7.793 1.578 10.605 4.394l56.805 56.805a14.999 14.999 0 0 1-.004 21.21l-12.113 12.114 46.953 46.953 12.117-12.117c5.86-5.855 15.355-5.855 21.21.004l56.805 56.805a14.986 14.986 0 0 1 4.395 10.605c0 3.98-1.578 7.797-4.395 10.61zM223.382 145.621c0-8.281 6.715-15 15-15 51.972 0 94.258 42.281 94.258 94.25 0 8.285-6.715 15-15 15-8.282 0-15-6.715-15-15 0-35.426-28.825-64.25-64.258-64.25-8.285 0-15-6.715-15-15zm158.52 94.258c-8.286 0-15-6.719-15-15 .003-34.332-13.368-66.606-37.641-90.883-24.278-24.273-56.551-37.644-90.883-37.644-8.281 0-15-6.715-15-15 0-8.282 6.719-15 15-15 42.344 0 82.152 16.492 112.094 46.433 29.945 29.942 46.433 69.75 46.43 112.094 0 8.281-6.716 15-15 15zm0 0" />
                            </svg>
                        </a>
                        <?php }
								}
							}
							?>
                    </div>
                    <?php }
					if ($phones && !empty($all_phone)) { ?>
                    <div class="tel">
                        <?php echo $first_phone; ?>
                        <span></span>
                        <div><?php echo $all_phone; ?></div>
                    </div>
                    <?php }
					if ($header_call_option) echo '<span class="button open-popup" data-rel="1" id="btn_header_1">' . $header_call_option . '</span>';
					?>
                </div>
                <div id="burger"><span></span><span></span><span></span></div>
                <div id="tel-button" style="background-image: url(<?php echo TRAVEL_URI; ?>/img/phonenew.svg);"></div>
            </div>
            <div class="bottom">
                <?php
				wp_nav_menu(array(
					'container' => 'ul',
					'menu_class' => '',
					'theme_location' => 'bot_menu',
					'walker' => new Travel_Primary_Menu_Walker_Nav_Menu()
				));
				?>
            </div>
        </div>
        <div class="tel-dropdown">
            <div id="close-tel" class="button-close">
                <span></span>
                <span></span>
            </div>
            <?php
			$header_message_title_option = get_field('header_message_title_option', 'options');
			echo ($header_message_title_option ? '<span>' . esc_html($header_message_title_option) . '</span>' : '');

			if ($socials) { ?>
            <div class="messengers">
                <?php
					foreach ($socials as $link) {
						if (!empty($link['link'])) {
							$start_position = strpos($link['link'], 'href="') + 6;
							$finish_position = strpos($link['link'], '"', $start_position);
							$key_count = $finish_position - $start_position;
							$finish_link = substr($link['link'], $start_position, $key_count);
							if ($link['type'] === 'telegram') { ?>
                <a href="<?php echo $finish_link; ?>">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                        <path fill="#0087cb" d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm121.8 169.9l-40.7 191.8c-3 13.6-11.1 16.9-22.4 10.5l-62-45.7-29.9 28.8c-3.3 3.3-6.1 6.1-12.5 6.1l4.4-63.1 114.9-103.8c5-4.4-1.1-6.9-7.7-2.5l-142 89.4-61.2-19.1c-13.3-4.2-13.6-13.3 2.8-19.7l239.1-92.2c11.1-4 20.8 2.7 17.2 19.5z"></path>
                    </svg>
                </a>
                <?php } elseif ($link['type'] === 'whatsapp') { ?>
                <a href="<?php echo $finish_link; ?>">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;">
                        <path fill="#00a82d" d="M256.064 0h-.128C114.784 0 0 114.816 0 256c0 56 18.048 107.904 48.736 150.048l-31.904 95.104 98.4-31.456C155.712 496.512 204 512 256.064 512 397.216 512 512 397.152 512 256S397.216 0 256.064 0zm148.96 361.504c-6.176 17.44-30.688 31.904-50.24 36.128-13.376 2.848-30.848 5.12-89.664-19.264-75.232-31.168-123.68-107.616-127.456-112.576-3.616-4.96-30.4-40.48-30.4-77.216s18.656-54.624 26.176-62.304c6.176-6.304 16.384-9.184 26.176-9.184 3.168 0 6.016.16 8.576.288 7.52.32 11.296.768 16.256 12.64 6.176 14.88 21.216 51.616 23.008 55.392 1.824 3.776 3.648 8.896 1.088 13.856-2.4 5.12-4.512 7.392-8.288 11.744-3.776 4.352-7.36 7.68-11.136 12.352-3.456 4.064-7.36 8.416-3.008 15.936 4.352 7.36 19.392 31.904 41.536 51.616 28.576 25.44 51.744 33.568 60.032 37.024 6.176 2.56 13.536 1.952 18.048-2.848 5.728-6.176 12.8-16.416 20-26.496 5.12-7.232 11.584-8.128 18.368-5.568 6.912 2.4 43.488 20.48 51.008 24.224 7.52 3.776 12.48 5.568 14.304 8.736 1.792 3.168 1.792 18.048-4.384 35.52z" />
                    </svg>
                </a>
                <?php } elseif ($link['type'] === 'viber') { ?>
                <a href="<?php echo $finish_link; ?>">
                    <svg height="512pt" viewBox="-21 0 511 512" width="512pt" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#7b519c" d="M251.906 289.27c-5.855 5.859-15.351 5.859-21.21 0l-68.165-68.165a15.003 15.003 0 0 1-4.394-10.605c0-3.98 1.582-7.793 4.394-10.61l12.117-12.113-35.59-35.59-29.156 29.157c-9.812 9.812-9.808 25.777 0 35.59l124.965 124.972c4.723 4.723 11.043 7.32 17.797 7.32 6.754 0 13.074-2.601 17.797-7.324l29.156-29.152-35.59-35.594zm0 0" />
                        <path fill="#7b519c" d="M468.984 180.71c0-48.089-18.843-93.417-53.07-127.64C381.691 18.848 336.364 0 288.277 0H181.203h-.004C133.117 0 87.79 18.848 53.57 53.066 19.348 87.29.5 132.621.5 180.707v84.164c0 37.238 11.36 73.063 32.852 103.598 18.96 26.937 44.46 47.976 74.191 61.32v48.344c0 24.996 13.996 33.863 25.98 33.867 8.563 0 17.13-4.227 25.465-12.559l53.856-53.863h75.437c48.086 0 93.414-18.848 127.637-53.07 34.223-34.223 53.07-79.551 53.07-127.637zM331.438 323.356l-39.766 39.762c-10.39 10.39-24.242 16.106-39.008 16.106-14.766 0-28.617-5.72-39.008-16.106L88.687 238.145c-21.503-21.512-21.503-56.508 0-78.016l39.766-39.762a14.98 14.98 0 0 1 10.606-4.394c3.976 0 7.793 1.578 10.605 4.394l56.805 56.805a14.999 14.999 0 0 1-.004 21.21l-12.113 12.114 46.953 46.953 12.117-12.117c5.86-5.855 15.355-5.855 21.21.004l56.805 56.805a14.986 14.986 0 0 1 4.395 10.605c0 3.98-1.578 7.797-4.395 10.61zM223.382 145.621c0-8.281 6.715-15 15-15 51.972 0 94.258 42.281 94.258 94.25 0 8.285-6.715 15-15 15-8.282 0-15-6.715-15-15 0-35.426-28.825-64.25-64.258-64.25-8.285 0-15-6.715-15-15zm158.52 94.258c-8.286 0-15-6.719-15-15 .003-34.332-13.368-66.606-37.641-90.883-24.278-24.273-56.551-37.644-90.883-37.644-8.281 0-15-6.715-15-15 0-8.282 6.719-15 15-15 42.344 0 82.152 16.492 112.094 46.433 29.945 29.942 46.433 69.75 46.43 112.094 0 8.281-6.716 15-15 15zm0 0" />
                    </svg>
                </a>
                <?php }
						}
					}
					?>
            </div>
            <?php }

			$phones = [$kyivstar_option, $lifecell_option, $vodafone_option, $stationar_option];
			if ($phones) { ?>
            <div class="contacts">
                <?php
					foreach ($phones as $key => $phone) {
						if ($phone) {
							if ($key == 0) $icon = 'kiev.png';
							else if ($key == 1) $icon = 'life.png';
							else if ($key == 2) $icon = 'voda.png';
							else if ($key == 3) $icon = 'telep.png';
							echo '<span><span class="icon" style="background-image: url(' . TRAVEL_URI . '/img/' . $icon . ');"></span>';
							echo '<a href="tel:+' . travel_get_num_only($phone) . '">' . $phone . '</a></span>';
						}
					}
					?>
            </div>
            <?php }
			echo ($header_call_option ? '<span class="button open-popup" data-rel="1" id="btn_header_2">' . $header_call_option . '</span>' : '');
			?>
        </div>
    </header>
    <div id="content-block" class="overflow-content">
