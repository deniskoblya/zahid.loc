<?php get_header(); ?>

<div class="container container-main-page">
	<div class="row relative">
		<div class="col-xs-12">
			<?php //$kyivstar_option = get_field('kyivstar_option', 'options');
			//$header_message_title_option = get_field('header_message_title_option', 'options'); ?>
			<!-- <div class="tel-dropdown-room tel-dropdown">
				<span><?php //echo esc_html($header_message_title_option); ?></span>
				<div class="contacts">
					<?php //if ($kyivstar_option) : ?>
						<span>
							<span class="icon" style="background-image: url(<?php //echo TRAVEL_URI; ?>/img/kievstar.png);"></span>
							<a href="tel:+<?php //echo $kyivstar_option ?>"><?php //echo $kyivstar_option ?></a>
						</span>
					<?php //endif; ?>
				</div>
			</div> -->
	
		</div>
		<aside class="col-md-3 col-sm-4 col-xs-12"><?php get_sidebar(); ?>
		
		</aside>
		<main class="col-md-9 col-sm-8 col-xs-12">
		<article>
			
				<div class="flex-d">
				    <h1 class="h1 text-center"><?php echo get_the_title(); ?></h1>
				    <?php travel_breadcrumbs(); ?>
				</div>
			
			<div class="empty-lg-20 empty-xs-15"></div>
			<?php
			$id_video = get_field('video_id');
			$slider = get_field('slider');
			?>
			<div class="row">
				<div class="col-lg-7 col-xs-12">
					<?php if ($slider) { ?>
						<div class="swipers-wrapper">
							<div class="swiper-container swiper-control-top" data-slides-per-view="1" data-space-between="0" data-auto-height="1" data-breakpoints="1" data-parallax="1" data-xs-slides="1" data-sm-slides="1" data-md-slides="1">
								<span></span>
								<span></span>
								<span></span>
								<span></span>
								<div class="swiper-button-prev"></div>
								<div class="swiper-button-next"></div>
								<div class="swiper-wrapper gallery">
									<?php foreach ($slider as $key => $slide) { ?>
										<div class="swiper-slide">
											<div class="img-box " data-swiper-parallax="30%" style="transform: translate3d(0%, 0px, 0px); transition-duration: 0ms;"></div>
											<div class="full-size"><img src="<?php echo $slide['url']; ?>" alt="<?php echo esc_attr($slide['alt']); ?>" title="<?php echo esc_attr($slide['title']); ?>" class="single-room-slider-img foobox"></div>
											
											
										</div>
									<?php } ?>
								</div>
								<?php if ($id_video) { ?>
									<div data-scroll="#video-<?php echo sanitize_title($id_video); ?>" class="button video-button"><?php _e('Watch the video', 'travel'); ?></div>
								<?php } ?>
							</div>
							<div class="swiper-container swiper-control-bottom" data-slides-per-view="4" data-breakpoints="1" data-md-slides="4" data-sm-slides="4" data-xs-slides="2" data-space-between="12">
								<div class="swiper-wrapper">
									<?php foreach ($slider as $key => $slide) { ?>
										<div class="swiper-slide <?php echo $key == 0 ? 'active' : ''; ?>">
											<div class="img-box" style="background-image: url(<?php echo $slide['url']; ?>);"></div>
											<div class="control-top-slider full-size"></div>
										</div>
									<?php } ?>

								</div>
							</div>
						</div>
					<?php } ?>
				</div>
				<div class="col-lg-5 col-xs-12">
					<div class="item-info">
						<div class="row">
							<?php
							$phone_title = get_field('reservation_title', 'option');
							$phones = get_field('reservation_phones', 'option');
							if ($phones) { ?>
								<div class="col-lg-12 col-sm-6 col-xs-12 text-center-xs">
									<p class="h5"><?php echo esc_html($phone_title); ?></p>
									<div class="contacts">
										<?php foreach ($phones as $phone) {
												$type = $phone['operator'];
												$phone = $phone['phone_number'];
												if (empty($phone) || $type == 5 || $type == 6) continue; ?>
											<span>
												<span class="icon" style="background-image: url(<?php echo TRAVEL_URI; ?>/img/tel.svg);"></span>
												<a href="tel:+<?php echo travel_get_num_only($phone); ?>"><?php echo $phone; ?></a>
											</span>
										<?php } ?>
									</div>
									<span id="btn_room" class="button open-popup" data-rel="5"><?php _e('Book now', 'travel'); ?></span>
									<div class="empty-lg-30 empty-md-0 empty-xs-15"></div>
									<hr>
								</div>
							<?php }

							$price = get_field('price');
							$price_title = get_field('price_title');
							$address = get_field('address');
							$address_title = get_field('address_title');

							if ($price || $address) { ?>
								<div class="col-lg-12 col-sm-6 col-xs-12">
									<div class="empty-lg-30 empty-md-0 empty-xs-15"></div>
									<div class="contacts info">

										<?php if ($address) { ?>
											<span>
												<span class="icon" style="background-image: url(<?php echo TRAVEL_URI ?>/img/placeholder.svg);"></span>
												<span><?php echo esc_html($address_title); ?></span>
												<span class="single_room_address"><?php echo esc_html($address); ?></span>
											</span>
										<?php }

											if ($price) { ?>
											<span>
												<span class="icon" style="background-image: url(<?php echo TRAVEL_URI ?>/img/pocket.png);"></span>
												<?php if ($price_title) echo '<span>' . $price_title . '</span>'; ?>
												<span><?php echo esc_html($price); ?></span>
											</span>
										<?php } ?>
									</div>
								</div>
							<?php } ?>
						</div>
						<?php echo single_rating($post->ID, 'vote-block', false); ?>
					</div>
				</div>
			</div>

			<?php if (get_field('enable_message')) {
				$message = get_field('message'); ?>
				<div class="white-box proposal-box">
					<div class="simple-text text-center"><?php echo esc_html($message); ?></div>
				</div>
			<?php } ?>

			<?php $sanatorium_tabs = get_field('sanatorium_content');

			if ($sanatorium_tabs) { ?>
				<div class="empty-lg-40 empty-xs-30"></div>
				<div class="tab-wrapper">
					<div class="nav-tab item-tabs">
						<?php foreach ($sanatorium_tabs as $key => $tabs) {
								$type_tab = empty($tabs['type_tab']) ? 'custom' : $tabs['type_tab'];
								$title = $tabs['tab_title_sanatorium'];
								if (empty($title)) continue;

								if ($type_tab === 'custom') { ?>
								<div class="nav-tab-item <?php echo ($key == 0) ? 'active' : ''; ?>" id="tab-custom-<?php echo $key; ?>">
									<span class="h6"><?php echo esc_html($title); ?></span>
								</div>
							<?php } elseif ($type_tab === 'review') { ?>
								<a href="#reviews" class="nav-tab-item not-a-tab" id="tab-reviews-<?php echo $key; ?>">
									<span class="h6"><?php echo esc_html($title); ?></span>
								</a>
							<?php } elseif ($type_tab === 'faq') { ?>
								<a href="#faq" class="nav-tab-item not-a-tab" id="tab-faq">
									<span class="h6"><?php echo esc_html($title); ?></span>
								</a>
						<?php }
							} ?>
					</div>

					<div class="tabs-content item-tabs">
						<?php foreach ($sanatorium_tabs as $key => $tabs) {
								$type_tab = $tabs['type_tab'];
								$title = $tabs['tab_title_sanatorium'];
								if (empty($title)) continue;
								if ($type_tab !== 'custom') continue;
								$content = $tabs['tab_content_sanatorium'];
								if (empty($content)) {
									echo '<div class="tab-info"></div>';
									continue;
								} ?>
							<section class="tab-info <?php echo ($key == 0) ? 'active' : ''; ?>">
								<?php foreach ($content as $key => $item) {
											$layout = $item['acf_fc_layout'];

											if ($layout === 'title_sanatorium') {
												$title = $item['text'];
												if (empty($title)) continue; ?>
										<div class="empty-lg-20 empty-xs-15"></div>
										<div class="text-center">
											<h2 class="h2"><?php echo esc_html($title); ?></h2>
										</div>
										<div class="empty-lg-20 empty-xs-15"></div>
									<?php } elseif ($layout === 'text_content_sanatorium') {
													$text = $item['text_sanatorium'];
													if (empty($text)) continue; ?>
										<div class="white-box">
											<div class="simple-text">
												<?php echo wp_kses_post($text); ?>
											</div>
										</div>
									<?php } elseif ($layout === 'title_text') {
													$title = $item['title'];
													$text = $item['text'];
													if (empty($title) &&  empty($text)) continue; ?>
										<div class="white-box">
											<?php if ($title) { ?>
												<div class="text-center">
													<h4 class="h3"><?php echo esc_html($title); ?></h4>
												</div>
											<?php }

															if ($text) { ?>
												<div class="simple-text">
													<?php echo wp_kses_post($text); ?>
												</div>
											<?php } ?>
										</div>
									<?php } elseif ($layout === 'acordeon') {
													$acordeons = $item['acordeon'];
													if (empty($acordeons)) continue; ?>
										<div class="empty-lg-20 empty-xs-15"></div>
										<div>
											<?php foreach ($acordeons as $acordeon) {
																$title = $acordeon['title'];
																$content = $acordeon['content'];
																if (empty($title) || empty($content)) continue; ?>
												<div class="accordeon">
													<div class="accordeon-title">
														<span class="h5"><?php echo esc_html($title); ?></span>
														<span></span>
													</div>
													<div class="accordeon-toggle">
														<div class="white-box">
															<div class="simple-text">
																<?php echo wp_kses_post($content); ?>
															</div>
														</div>
													</div>
												</div>
											<?php } ?>
										</div>
										<div class="empty-lg-20"></div>
									<?php } elseif ($layout === 'room_sanatorium') {

													$name = $item['name'];
													$haracteristics = $item['haracteristics'];
													$slider = $item['gallery_sanatorium'];
                                                    
													if (empty($name) &&  empty($haracteristics) && empty($slider)) continue; ?>
													
										<div class="room white-box">
											<div class="row">
												<?php if ($slider) { ?>
													<div class="col-lg-4 col-xs-12">
														<div class="swipers-wrapper gallery">
															<div class="swiper-container swiper-control-top" data-slides-per-view="1" data-space-between="0" data-auto-height="1" data-parallax="1">
																<span></span>
																<span></span>
																<span></span>
																<span></span>
																<div class="swiper-button-prev"></div>
																<div class="swiper-button-next"></div>
																<div class="swiper-wrapper gallery">
																
																	<?php foreach ($slider as $slide) { ?>
																	    
																		<div class="swiper-slide">	
                                                                            <div class="img-box" data-swiper-parallax="30%" style="transition-duration: 0ms;"></div>
																				<div class="full-size">
																				    <img src="<?php echo $slide['url']; ?>" alt="<?php echo esc_attr($slide['alt']); ?>" title="<?php echo esc_attr($slide['title']); ?>" class="single_room_rooms fooboxs">
																				</div>
																			
																		</div>
																	<?php } ?>
																</div>
															</div>

															<div class="swiper-container swiper-control-bottom" data-slides-per-view="2" data-breakpoints="1" data-md-direction="vertical" data-sm-direction="vertical" data-xs-direction="horizontal" data-space-between="12" data-pagination-type="fraction">
																<div class="swiper-wrapper">
																	<?php foreach ($slider as $key => $slide) { ?>
																		<div class="swiper-slide <?php echo ($key == 0) ? 'active' : ''; ?>">
																			<div class="img-box" style="background-image: url(<?php echo $slide['url']; ?>);"></div>
																			<div class="control-top-slider full-size"></div>
																		</div>
																	<?php } ?>
																</div>
																<div class="swiper-pagination"></div>
															</div>
														</div>
													</div>
												<?php }

																if ($name || $haracteristics) { ?>
													<div class="col-lg-8 col-xs-12">
														<h3 class="h3"><?php echo $name; ?></h3>
														<div class="empty-lg-20 empty-xs-15"></div>
														<?php if ($haracteristics) {
																				foreach ($haracteristics as $haracteristic) {
																					$icon = $haracteristic['icon'];
																					$name = $haracteristic['name'];
																					$value = $haracteristic['value'];
																					if (empty($name) && empty($value)) continue;

																					$icon_url = TRAVEL_URI . '/';;
																					$default_name = '';
																					if ($icon === 'bed') {
																						$icon_url .= 'img/services/bed.svg';
																						$default_name .= esc_html__('Основні місця:', 'travel');
																					} elseif ($icon === 'add_plase') {
																						$icon_url .= 'img/services/add-user.svg';
																						$default_name .= esc_html__('Додаткові місця:', 'travel');
																					} elseif ($icon === 'rooms') {
																						$icon_url .= 'img/services/room.svg';
																						$default_name .= esc_html__('Кімнати:', 'travel');
																					} elseif ($icon === 'complectation') {
																						$icon_url .= 'img/services/star-green.svg';
																						$default_name .= esc_html__('Комплектація номера:', 'travel');
																					} elseif ($icon === 'sanvuz') {
																						$icon_url .= 'img/services/bath.svg';
																						$default_name .= esc_html__('Санвузол:', 'travel');
																					} elseif ($icon === 'balkon') {
																						$icon_url .= 'img/services/house.svg';
																						$default_name .= esc_html__('Балкон:', 'travel');
																					} elseif ($icon === 'space') {
																						$icon_url .= 'img/services/frame.svg';
																						$default_name .= esc_html__('Площа номера:', 'travel');
																					} elseif ($icon === 'note') {
																						$icon_url .= 'img/services/notes.svg';
																						$default_name .= esc_html__('Примітка', 'travel');
																					} ?>
																<div class="room-info">
																	<span class="h4">
																		<span class="icon" style="background-image: url(<?php echo $icon_url; ?>);"></span><span class="simple-text"><?php echo esc_html($default_name); ?></span>
																		<!-- <//?php echo travel_mb_ucfirst(mb_strtolower($name)); ?> -->
																	</span>
																	<span class="simple-text"><?php echo travel_mb_ucfirst(mb_strtolower($name)); ?></span>
																</div>
														<?php }
																			} ?>
													</div>
												<?php } ?>
											</div>
										</div>
									<?php } elseif ($layout === 'table') {
													$head = $item['head'];
													$content = $item['content'];
													if (empty($head) && empty($content)) continue; ?>
										<div class="overflow-auto">
											<table class="extra_table">
												<?php if ($head) { ?>
													<thead>
														<tr>
															<?php
																				$cols = 0;
																				$childs_html = '';
																				foreach ($head as $key => $item) {
																					$subtitles = $item['subtitle'];
																					$text = $item['text'];
																					if (empty($text)) continue;

																					$tag = 'rowspan="2"';
																					$has_childs = false;
																					if ($subtitles) {
																						$count = 0;
																						foreach ($subtitles as $key => $subtitle) {
																							$text_sub = $subtitle['text'];
																							if (empty($text_sub)) continue;
																							$count++;
																							$cols++;
																							$has_childs = true;
																							$childs_html .= '<th>' . esc_html($text_sub) . '</th>';
																						}
																						if ($count != 0) $tag = 'colspan="' . $count . '"';
																					}
																					if (!$has_childs) $cols++;
																					echo '<th ' . $tag . '>' . $text . '</th>';
																				} ?>
														</tr>
														<?php if (!empty($childs_html)) { ?>
															<tr>
																<?php echo $childs_html; ?>
															</tr>
														<?php } ?>
													</thead>
												<?php }

																if ($content) { ?>
													<tbody>
														<?php foreach ($content as $table_item) {
																				$layout_table = $table_item['acf_fc_layout'];
																				if ($layout_table === 'separator') {
																					$text = $table_item['text']; ?>
																<tr>
																	<td colspan="<?php echo $cols; ?>" class="separator"><?php echo esc_html($text); ?></td>
																</tr>
															<?php } elseif ($layout_table === 'table') {
																						$table = $table_item['table'];
																						if (empty($table['body'])) continue;

																						foreach ($table as $key_row => $row) {
																							if (empty($row)) continue;
																							foreach ($row as $key_tr => $tr) {
																								if (empty($tr)) continue;
																								echo '<tr>';
																								foreach ($tr as $key_td => $td) {
																									$td = $td['c'];
																									echo '<td>' . esc_html($td) . '</td>';
																								}
																								echo '</tr>';
																							}
																						}
																					} ?>
														<?php } ?>
													</tbody>
												<?php } ?>
											</table>
										</div>
									<?php } elseif ($layout === 'tabs') {
													$sanatorium_tabs = $item['sanatorium_tabs'];
													if (empty($sanatorium_tabs)) continue; ?>
										<div class="price-tabs-wrapper">
											<div class="price-nav">
												<?php foreach ($sanatorium_tabs as $tab_key => $sanatorium_tab) {
																	$title = $sanatorium_tab['title'];
																	if (empty($title)) continue;  ?>
													<div class="price-tab <?php echo ($tab_key == 0) ? 'active' : ''; ?>">
														<span class="h6"><?php echo esc_html($title); ?></span>
													</div>
												<?php } ?>
											</div>

											<div class="price-tabs-content">
												<?php foreach ($sanatorium_tabs as $tab_key => $sanatorium_tab) {
																	$title = $sanatorium_tab['title'];
																	$content = $sanatorium_tab['content'];
																	if (empty($title)) continue; ?>
													<div class="price-tab-info <?php echo ($tab_key == 0) ? 'active' : ''; ?>">
														<?php foreach ($content as $key => $item) {
																				$layout = $item['acf_fc_layout'];

																				if ($layout === 'title') {
																					$title = $item['title'];
																					if (empty($title)) continue; ?>
																<div class="empty-lg-20 empty-xs-15"></div>
																<div class="text-center">
																	<h2 class="h2"><?php echo esc_html($title); ?></h2>
																</div>
																<div class="empty-lg-20 empty-xs-15"></div>
															<?php } elseif ($layout === 'text') {
																						$text = $item['text'];
																						if (empty($text)) continue; ?>
																<div class="white-box">
																	<div class="simple-text">
																		<?php echo wp_kses_post($text); ?>
																	</div>
																</div>
															<?php } elseif ($layout === 'title_text') {
																						$title = $item['title'];
																						$text = $item['text'];
																						if (empty($title) &&  empty($text)) continue; ?>
																<div class="white-box">
																	<?php if ($title) { ?>
																		<div class="text-center">
																			<p class="h3"><?php echo esc_html($title); ?></p>
																		</div>
																	<?php }

																								if ($text) { ?>
																		<div class="empty-lg-20 empty-xs-15"></div>
																		<div class="simple-text">
																			<?php echo wp_kses_post($text); ?>
																		</div>
																	<?php } ?>
																</div>
															<?php } elseif ($layout === 'acordeon') {
																						$acordeons = $item['acordeon'];
																						if (empty($acordeons)) continue; ?>
																<div class="empty-lg-20 empty-xs-15"></div>
																<div>
																	<?php foreach ($acordeons as $acordeon) {
																									$title = $acordeon['title'];
																									$content = $acordeon['content'];
																									if (empty($title) || empty($content)) continue; ?>
																		<div class="accordeon">
																			<div class="accordeon-title">
																				<span class="h5"><?php echo esc_html($title); ?></span>
																				<span></span>
																			</div>
																			<div class="accordeon-toggle">
																				<div class="white-box">
																					<div class="simple-text">
																						<?php echo wp_kses_post($content); ?>
																					</div>
																				</div>
																			</div>
																		</div>
																	<?php } ?>
																</div>
																<div class="empty-lg-20"></div>
															<?php } elseif ($layout === 'room_sanatorium') {
																						$rooms = $item['rooms'];

																						if (empty($rooms)) continue; ?>
																<?php foreach ($rooms as $room) {
																								$name = $room['name'];
																								$haracteristics = $room['haracteristics'];
																								$slider = $room['gallery_sanatorium'];
																								if (empty($name) &&  empty($haracteristics) && empty($slider)) continue; ?>
																	<div class="room white-box">
																		<div class="row">
																			<?php if ($slider) { ?>
																				<div class="col-lg-4 col-xs-12">
																					<div class="swipers-wrapper gallery">
																						<div class="swiper-container swiper-control-top" data-slides-per-view="1" data-space-between="0" data-auto-height="1" data-parallax="1">
																							<span></span>
																							<span></span>
																							<span></span>
																							<span></span>
																							<div class="swiper-button-prev"></div>
																							<div class="swiper-button-next"></div>
																							<div class="swiper-wrapper gallery">
																								<?php foreach ($slider as $slide) { ?>
																									<div class="swiper-slide">
																										<div class="img-box" data-swiper-parallax="30%"></div>
																										<a href="<?php echo $slide['url']; ?>" class="full-size">
																											<img src="<?php echo $slide['url']; ?>" alt="<?php echo esc_attr($slide['alt']); ?>" title="<?php echo esc_attr($slide['title']); ?>" class="single-room-slider-img">
																										</a>
																									</div>
																								<?php } ?>
																							</div>
																						</div>

																						<div class="swiper-container swiper-control-bottom" data-slides-per-view="2" data-breakpoints="1" data-md-direction="vertical" data-sm-direction="vertical" data-xs-direction="horizontal" data-space-between="12" data-pagination-type="fraction">
																							<div class="swiper-wrapper">
																								<?php foreach ($slider as $key => $slide) { ?>
																									<div class="swiper-slide <?php echo ($key == 0) ? 'active' : ''; ?>">
																										<div class="img-box" style="background-image: url(<?php echo $slide['url']; ?>);"></div>
																										<div class="control-top-slider full-size"></div>
																									</div>
																								<?php } ?>
																							</div>
																							<div class="swiper-pagination"></div>
																						</div>
																					</div>
																				</div>
																			<?php }

																											if ($name || $haracteristics) { ?>
																				<div class="col-lg-8 col-xs-12">
																					<h3 class="h3"><?php echo $name; ?></h3>
																					<div class="empty-lg-20 empty-xs-15"></div>
																					<?php if ($haracteristics) {
																															foreach ($haracteristics as $haracteristic) {
																																$icon = $haracteristic['icon'];
																																$name = $haracteristic['name'];
																																$value = $haracteristic['value'];

																																if (empty($name) || empty($value)) continue;

																																$icon_url = TRAVEL_URI . '/';;
																																if ($icon === 'bed') {
																																	$icon_url .= 'img/bed.png';
																																} elseif ($icon === 'add_plase') {
																																	$icon_url .= 'img/add-user.png';
																																} elseif ($icon === 'rooms') {
																																	$icon_url .= 'img/room.png';
																																} elseif ($icon === 'complectation') {
																																	$icon_url .= 'img/star-green.png';
																																} elseif ($icon === 'sanvuz') {
																																	$icon_url .= 'img/bath.png';
																																} elseif ($icon === 'balkon') {
																																	$icon_url .= 'img/house.png';
																																} elseif ($icon === 'space') {
																																	$icon_url .= 'img/space.png';
																																} elseif ($icon === 'note') {
																																	$icon_url .= 'img/notes.png';
																																} ?>
																							<div class="room-info">
																								<span class="h4">
																									<span class="icon" style="background-image: url(<?php echo $icon_url; ?>);"></span>
																									<?php echo travel_mb_ucfirst(mb_strtolower($name)); ?>
																								</span>
																							</div>
																					<?php }
																														} ?>
																				</div>
																			<?php } ?>
																		</div>
																	</div>
																<?php } ?>

															<?php } elseif ($layout === 'table') {
																						$head = $item['head'];
																						$content = $item['content'];
																						if (empty($head) && empty($content)) continue; ?>
																<div class="overflow-auto">
																	<table>
																		<?php if ($head) { ?>
																			<thead>
																				<tr>
																					<?php
																													$cols = 0;
																													$childs_html = '';
																													foreach ($head as $key => $item) {
																														$subtitles = $item['subtitle'];
																														$text = $item['text'];
																														if (empty($text)) continue;

																														$tag = 'rowspan="2"';
																														$has_childs = false;
																														if ($subtitles) {
																															$count = 0;
																															foreach ($subtitles as $key => $subtitle) {
																																$text_sub = $subtitle['text'];
																																if (empty($text_sub)) continue;
																																$count++;
																																$cols++;
																																$has_childs = true;
																																$childs_html .= '<th>' . esc_html($text_sub) . '</th>';
																															}
																															if ($count != 0) $tag = 'colspan="' . $count . '"';
																														}
																														if (!$has_childs) $cols++;
																														echo '<th ' . $tag . '>' . $text . '</th>';
																													} ?>
																				</tr>
																				<?php if (!empty($childs_html)) { ?>
																					<tr>
																						<?php echo $childs_html; ?>
																					</tr>
																				<?php } ?>
																			</thead>
																		<?php }

																									if ($content) { ?>
																			<tbody>
																				<?php foreach ($content as $table_item) {
																													$layout_table = $table_item['acf_fc_layout'];
																													if ($layout_table === 'separator') {
																														$text = $table_item['text']; ?>
																						<tr>
																							<td colspan="<?php echo $cols; ?>" class="separator"><?php echo esc_html($text); ?></td>
																						</tr>
																					<?php } elseif ($layout_table === 'table') {
																															$table = $table_item['table'];
																															if (empty($table['body'])) continue;

																															foreach ($table as $key_row => $row) {
																																if (empty($row)) continue;
																																foreach ($row as $key_tr => $tr) {
																																	if (empty($tr)) continue;
																																	echo '<tr>';
																																	foreach ($tr as $key_td => $td) {
																																		$td = $td['c'];
																																		echo '<td>' . esc_html($td) . '</td>';
																																	}
																																	echo '</tr>';
																																}
																															}
																														} ?>
																				<?php } ?>
																			</tbody>
																		<?php } ?>
																	</table>
																</div>
															<?php } elseif ($layout === 'tabs') {
																						$sanatorium_tabs = $item['sanatorium_tabs'];
																						if (empty($sanatorium_tabs)) continue; ?>
																<div class="price-tabs-wrapper">
																	<div class="price-nav">
																		<?php foreach ($sanatorium_tabs as $tab_key => $sanatorium_tab) {
																										$title = $sanatorium_tab['title'];
																										if (empty($title)) continue;  ?>
																			<div class="price-tab <?php echo ($tab_key == 0) ? 'active' : ''; ?>">
																				<span class="h6"><?php echo esc_html($title); ?></span>
																			</div>
																		<?php } ?>
																	</div>

																	<div class="price-tabs-content">
																		<?php foreach ($sanatorium_tabs as $tab_key => $sanatorium_tab) {
																										$title = $sanatorium_tab['title'];
																										if (empty($title)) continue; ?>
																			<div class="price-tab-info <?php echo ($tab_key == 0) ? 'active' : ''; ?>">

																			</div>
																		<?php } ?>
																	</div>
																</div>
															<?php } ?>

														<?php } ?>
													</div>
												<?php } ?>
											</div>
										</div>
									<?php } ?>

								<?php } ?>
							</section>

						<?php } ?>
					</div>
				</div>
				<?php
					$faq_hide = get_field('faq_hide');
					$faq = get_field('faq');
					$content_title = $faq['content_title'];
					$content = $faq['content'];
					if ($content && !$faq_hide) { ?>
					<div class="empty-lg-20 empty-xs-0"></div>
					<div class="empty-lg-20 empty-xs-15"></div>
					<div class="row" id="faq">
						<div class="col-lg-10 col-lg-offset-1 col-xs-12">
							<?php if ($content_title) { ?>
								<div class="text-center">
									<h2 class="h2"><?php echo esc_html($content_title); ?></h2>
								</div>
								<div class="empty-lg-20 empty-xs-15"></div>
							<?php } ?>
							<div>
								<?php foreach ($content as $accordeon) {
											$title = $accordeon['title'];
											$content = $accordeon['content'];
											if (empty($title) || empty($content)) continue; ?>
									<div class="accordeon">
										<div class="accordeon-title">
											<span class="h5"><?php echo esc_html($title); ?></span>
											<span></span>
										</div>
										<div class="accordeon-toggle" style="display: none;">
											<div class="white-box">
												<div class="simple-text">
													<?php echo wp_kses_post($content); ?>
												</div>
											</div>
										</div>
									</div>
								<?php } ?>
							</div>
						</div>
					</div>
				<?php }

					if ($id_video) { ?>
					<div class="empty-lg-20 empty-xs-15" id="video-<?php echo sanitize_title($id_video); ?>"></div>
					<?php
							$video_title = get_field('video_title');
							if ($video_title) { ?>
						<div class="text-center">
							<h2 class="h2"><?php echo esc_html($video_title); ?></h2>
						</div>
					<?php } ?>
					<div class="empty-lg-20 empty-xs-15"></div>
					<div class="row">
						<div class="col-lg-10 col-lg-offset-1 col-xs-12">
							<div class="simple-text">
							<!-- <div class="youtube-video-place embed-responsive embed-responsive-4by3 " data-yt-url="https://www.youtube.com/embed/<?php echo $id_video; ?>">
							<img src="<?php echo TRAVEL_URI ?>/img/tri_syna_i_dochka_4_shodnica_01.jpg" async class="play-youtube-video">
							</div> -->

								<div>
									<iframe rel="preload" src="https://www.youtube.com/embed/<?php echo $id_video; ?>" allowfullscreen></iframe>
								</div>
							</div>
							<div class="empty-lg-20 empty-xs-15"></div>
						</div>
					</div>
					<?php }
						$sanatoriums = get_field('sanatoriums');
						if ($sanatoriums) {
							$sanatoriums_title = get_field('sanatoriums_title');
							if ($sanatoriums_title) { ?>
						<div class="empty-lg-20 empty-xs-15"></div>
						<div class="text-center">
							<h3 class="h2"><?php echo $sanatoriums_title; ?></h3>
						</div>
						<div class="empty-lg-20 empty-xs-15"></div>
					<?php } ?>
					<div class="swiper-container items-slider related-sanatoriums" data-slides-per-view="3" data-breakpoints="1" data-space-between="30" data-loop="1" data-md-slides="2" data-sm-slides="2" data-xs-slides="2">
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<div class="swiper-button-prev"></div>
						<div class="swiper-button-next"></div>
						<div class="swiper-wrapper">
							<?php foreach ($sanatoriums as $sanatorium) { ?>
								<div class="swiper-slide">
									<div class="sanatorium-item type-2">
										<div class="overflow-hidden">
											<div class="img-box" style="background-image: url(<?php echo get_the_post_thumbnail_url($sanatorium); ?>);"></div>
											<?php
														$price = get_field('price', $sanatorium);
														echo ($price ? '<span>' . $price . '</span>' : '');
														?>
										</div>
										<div class="text-block text-center">
											<a href="<?php echo get_permalink($sanatorium); ?>" class="h5"><?php echo get_the_title($sanatorium); ?></a>
											<?php echo single_rating($sanatorium, 'disabled', false); ?>
										</div>
										<a href="<?php echo get_permalink($sanatorium); ?>" class="full-size"></a>
									</div>
								</div>
							<?php } ?>
						</div>
					</div>
					<div class="empty-lg-20 empty-xs-15"></div>
				<?php }

					comments_template();
					?>
		</article>
		</main>
	<?php } ?>
	<div class="empty-lg-0 empty-sm-0 empty-xs-30"></div>
	</div>
</div>

<?php get_footer();
