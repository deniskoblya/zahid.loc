<?php if (!defined('ABSPATH')) exit;

if (get_field('tab_panel_enable')) {

	$tabs = $tabs_content = '';
	if (have_rows('content')) {
		$i = 0;
		while (have_rows('content')) {
			the_row();
			if (get_row_layout() == 'page_tab') {
				$title = get_sub_field('tab_title');
				$tab = get_sub_field('tab_content');
				if ($title && $tab) {
					$tabs .= '<div class="nav-tab-item ' . ($i == 0 ?  'active' : '') . '" id="other-tab-' . $i . '" >';
					$tabs .= '<span class="h6">' . esc_html($title) . '</span>';
					$tabs .= '</div>';

					$tabs_content .= '<div class="tab-info ' . ($i == 0 ?  'active' : '') . '">';
					foreach ($tab as $item) {
						if ($item['acf_fc_layout'] === 'title') {
							if (!empty($item['text'])) {
								$tabs_content .= '<div class="text-center">';
								$tabs_content .= '<h2 class="h3">' . esc_html($item['text']) . '</h2>';
								$tabs_content .= '</div>';
							}
						} elseif ($item['acf_fc_layout'] === 'text_content') {
							if (!empty($item['text'])) {
								$tabs_content .= '<div class="simple-text check-list">';
								$tabs_content .= wp_kses_post($item['text']);
								$tabs_content .= '</div>';
							}
						} elseif ($item['acf_fc_layout'] === 'images') {
							if (!empty($item['images'])) {
								$class = (count($item['images']) <= 2) ? 'col-sm-6' : 'col-sm-4';

								$tabs_content .= '<div class="simple-image">';
								$tabs_content .= '<div class="row">';
								foreach ($item['images'] as  $image) {
									$tabs_content .= '<div class="' . $class . ' col-xs-12">';
									$tabs_content .= '<img class="resp-img" src="' . $image['url'] . '" alt="' . esc_attr($image['alt']) . '" title="' . esc_attr($image['title']) . '">';
									$tabs_content .= '</div>';
								}
								$tabs_content .= '</div>';
								$tabs_content .= '</div>';
							}
						} elseif ($item['acf_fc_layout'] === 'spase') {
							$tabs_content .= '<div class="empty-lg-20 empty-xs-15"></div>';
						} elseif ($item['acf_fc_layout'] === 'separator') {
							$tabs_content .= '<div class="empty-lg-40 empty-md-30 empty-xs-15"></div><hr><div class="empty-lg-40 empty-md-30 empty-xs-15"></div>';
						} elseif ($item['acf_fc_layout'] === 'faq') {
							if (!empty($item['content'])) {
								//$tabs_content .= '<div class="empty-lg-20 empty-xs-15"></div>';
								$tabs_content .= '<div class="row" id="faq">';
								$tabs_content .= '<div class="col-lg-10 col-lg-offset-1 col-xs-12">';
								foreach ($item['content'] as $item_faq) {
									$tabs_content .= '<div class="accordeon">';
									$tabs_content .= '<div class="accordeon-title">';
									$tabs_content .= '<span class="h5">' . esc_html($item_faq['title']) . '</span><span></span>';
									$tabs_content .= '</div>'; //accordeon-title
									$tabs_content .= '<div class="accordeon-toggle" style="display: none;">';
									$tabs_content .= '<div class="white-box">';
									$tabs_content .= '<div class="simple-text">' . $item_faq['text'] . '</div>';
									$tabs_content .= '</div>'; //white-box
									$tabs_content .= '</div>'; //accordeon-toggle
									$tabs_content .= '</div>'; //accordeon
								}
								$tabs_content .= '</div>'; //#faq
								$tabs_content .= '</div>'; //col-lg-10
							}
						}
					}
					$tabs_content .= '</div>';

					$i++;
				}
			}
		}
	}
	if ($tabs_content) {
		echo '<div class="tab-wrapper"><div class="nav-tab">' . $tabs . '</div><div class="tabs-content">' . $tabs_content . '</div></div>';
	}
}
/*if(get_field('tab_rating_enable')){
	single_rating(get_the_ID(),'vote-block with-bg');
}*/
