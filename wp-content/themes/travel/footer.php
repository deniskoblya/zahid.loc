<?php if (!defined('ABSPATH')) exit; ?>
<div class="empty-lg-70 empty-sm-50 empty-xs-30"></div>
</div>
<footer>
    <div class="bg-dark">
        <div class="container">
            <div class="row">
                <div class="col-md-9 col-sm-8 col-xs-12">
                    <?php
					$header_message_title_option = get_field('header_message_title_option', 'options');
					echo ($header_message_title_option ? '<p>' . $header_message_title_option . '</p>' : '');
					?>
                    <div class="contacts light">
                        <?php
						$lifecell_option = get_field('lifecell_option', 'options');
						$kyivstar_option = get_field('kyivstar_option', 'options');
						$vodafone_option = get_field('vodafone_option', 'options');
						$stationar_option = get_field('stationar_option', 'options');
						$phones = [$lifecell_option, $kyivstar_option, $vodafone_option, $stationar_option];

						foreach ($phones as $key => $phone) {
							if ($phone) {
								if ($key == 0) $icon = 'lifecell.png';
								else if ($key == 1) $icon = 'kievstar.png';
								else if ($key == 2) $icon = 'vodafone.png';
								else if ($key == 3) $icon = 'telephone.svg';
								echo '<span><span class="icon" style="background-image: url(' . TRAVEL_URI . '/img/' . $icon . ');"></span>';
								echo '<a href="tel:' . travel_get_num_only($kyivstar_option) . '">' . $kyivstar_option . '</a></span>';
							}
						}
						$header_contacts_option = get_field('header_contacts_option', 'options');
						if ($header_contacts_option) {
							foreach ($header_contacts_option as $contact) {
								if (!empty($contact['value'])) { ?>
                        <span><span class="icon" style="background-image: url(<?php echo ($contact['type'] === 'skype' ? TRAVEL_URI . '/img/skype.svg' : TRAVEL_URI . '/img/email.svg'); ?>);"></span><a href="<?php echo ($contact['type'] === 'skype' ? 'skype:' : 'mailto:') . $contact['value'] ?>" rel="nofollow"><?php echo esc_html($contact['text']); ?></a></span>
                        <?php }
							}
						}
						?>
                    </div>
                </div>
                <div class="col-md-3 col-sm-4 col-xs-12">
                    <?php
					$header_social_title_option = get_field('header_social_title_option', 'options');
					echo ($header_social_title_option ? '<p>' . $header_social_title_option . '</p>' : '');
					?>
                    <div class="social light">
                        <?php
						$header_social_site_option = get_field('header_social_site_option', 'options');
						if ($header_social_site_option) {
							foreach ($header_social_site_option as $social) {
								if (!empty($social['link'])) {
									if ($social['type'] === 'facebook') { ?>
                        <a href="<?php echo esc_url($social['link']); ?>" target="_blank" rel="noopener">
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="470.513px" height="470.513px" viewBox="0 0 470.513 470.513">
                                <path d="M271.521 154.17v-40.541c0-6.086.28-10.8.849-14.13.567-3.335 1.857-6.615 3.859-9.853 1.999-3.236 5.236-5.47 9.706-6.708 4.476-1.24 10.424-1.858 17.85-1.858h40.539V0h-64.809c-37.5 0-64.433 8.897-80.803 26.691-16.368 17.798-24.551 44.014-24.551 78.658v48.82h-48.542v81.086h48.539v235.256h97.362V235.256h64.805l8.566-81.086h-73.37z" />
                            </svg>
                        </a>
                        <?php } elseif ($social['type'] === 'twitter') { ?>
                        <a href="<?php echo esc_url($social['link']); ?>" target="_blank" rel="noopener">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
                            </svg>
                        </a>
                        <?php } elseif ($social['type'] === 'youtube') { ?>
                        <a href="<?php echo esc_url($social['link']); ?>" target="_blank" rel="noopener">
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="96.875px" height="96.875px" viewBox="0 0 96.875 96.875">
                                <path d="M95.201 25.538c-1.186-5.152-5.4-8.953-10.473-9.52-12.013-1.341-24.172-1.348-36.275-1.341-12.105-.007-24.266 0-36.279 1.341-5.07.567-9.281 4.368-10.467 9.52C.019 32.875 0 40.884 0 48.438 0 55.992 0 64 1.688 71.336c1.184 5.151 5.396 8.952 10.469 9.52 12.012 1.342 24.172 1.349 36.277 1.342 12.107.007 24.264 0 36.275-1.342 5.07-.567 9.285-4.368 10.471-9.52 1.689-7.337 1.695-15.345 1.695-22.898 0-7.554.014-15.563-1.674-22.9zM35.936 63.474V31.437c10.267 5.357 20.466 10.678 30.798 16.068-10.3 5.342-20.504 10.631-30.798 15.969z" />
                            </svg>
                        </a>
                        <?php } elseif ($social['type'] === 'instagram') { ?>
                        <a href="<?php echo esc_url($social['link']); ?>" target="_blank" rel="noopener">
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 512 512">
                                <path d="M352 0H160C71.648 0 0 71.648 0 160v192c0 88.352 71.648 160 160 160h192c88.352 0 160-71.648 160-160V160C512 71.648 440.352 0 352 0zm112 352c0 61.76-50.24 112-112 112H160c-61.76 0-112-50.24-112-112V160C48 98.24 98.24 48 160 48h192c61.76 0 112 50.24 112 112v192z" />
                                <path d="M256 128c-70.688 0-128 57.312-128 128s57.312 128 128 128 128-57.312 128-128-57.312-128-128-128zm0 208c-44.096 0-80-35.904-80-80 0-44.128 35.904-80 80-80s80 35.872 80 80c0 44.096-35.904 80-80 80z" />
                                <circle cx="393.6" cy="118.4" r="17.056" />
                            </svg>
                        </a>
                        <?php }
								}
							}
						}
						?>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <?php
			$copyright_option = get_field('copyright_option', 'options');
			if ($copyright_option) { ?>
            <div class="text-center-xs col-sm-5 col-xs-12">
                <span class="copy"><?php echo $copyright_option; ?></span>
            </div>
            <?php }
			/*if($privacy_policy_page_id){ ?>
            <div class="col-md-4 col-xs-12 text-center">
                <a href="<?php echo get_permalink( $privacy_policy_page_id ); ?>" class="simple-article small"><?php echo get_the_title($privacy_policy_page_id); ?></a>
                <div class="space-sm-15"></div>
            </div>
            <?php }*/ ?>
            <div class="text-right text-center-xs col-sm-7 col-xs-12">
                <div class="privacy-policy">
                    <?php
					$privacy_policy_page_id = get_option('wp_page_for_privacy_policy');
					$footer_link_option = get_field('footer_link_option', 'options');
					$footer_link_option_url = get_field('footer_link_option_url', 'options');
					if ($privacy_policy_page_id) {
						echo '<a href="' . get_permalink($privacy_policy_page_id) . '">' . get_the_title($privacy_policy_page_id) . '</a> <br><span>| </span>';
					}
					if ($footer_link_option && $footer_link_option_url) {
						echo '<a href="' . $footer_link_option_url . '" ' . (get_field('footer_link_option_target', 'options') ? 'target="_blank"' : '') . '>' . $footer_link_option . '</a>';
					}
					?>
                </div>
            </div>
        </div>
    </div>
</footer>

<?php
get_template_part('template-parts/popups');
wp_footer();
?>


<script>
   
</script>

<script>
        (function(w, d, s, l, i) {
            w[l] = w[l] || [];
            w[l].push({
                'gtm.start': new Date().getTime(),
                event: 'gtm.js'
            });

            var f = d.getElementsByTagName(s)[0],
                j = d.createElement(s),
                dl = l != 'dataLayer' ? '&l=' + l : '';
            j.async = true;
            j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
            f.parentNode.insertBefore(j, f);
        })(window, document, 'script', 'dataLayer', 'GTM-5P7XGWD');

    </script>
    <script data-skip-moving="true">
        (function(w, d, u) {
            var s = d.createElement('script');
            s.async = 1;
            s.src = u + '?' + (Date.now() / 60000 | 0);
            var h = d.getElementsByTagName('script')[0];
            h.parentNode.insertBefore(s, h);
        })(window, document, 'https://cdn.bitrix24.ua/b6476485/crm/site_button/loader_1_5yskfp.js');

    </script>
</body>

</html>
