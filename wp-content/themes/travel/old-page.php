<?php get_header(); ?>
<section>
	<div class="container">
		<div class="row">
			<div class="sidebar col-md-3 col-xs-12">
				<?php
				$description = get_field('description');
				$list 	     = get_field('catalog_sanatorium');

				if (have_rows('site_sidebar')) {
					while (have_rows('site_sidebar')) {
						the_row();
						$sidebar_title = get_sub_field('sidebar_title');
						$left_sidebar  = get_sub_field('page_left_sidebar');
						echo '<div class="custom-menu">';
						if ($sidebar_title) { ?>
							<div class="custom-menu-title">
								<a href="<?php echo esc_url(get_permalink($sidebar_title)); ?>"><?php echo get_the_title($sidebar_title); ?></a>
								<span><img src="<?php echo TRAVEL_URI; ?>/fonts/angle-arrow-down.svg" alt="angle-arrow-down" title="<?php echo esc_attr($sidebar_title); ?>"></span>
							</div>
						<?php }
								if ($left_sidebar) { ?>
							<ul>
								<?php foreach ($left_sidebar as $menu_item) {
												$sidebar_room_title = get_field('sidebar_room_title', $menu_item); ?>
									<li><a href="<?php the_permalink($menu_item); ?>"><?php echo ($sidebar_room_title ? $sidebar_room_title : get_the_title($menu_item)); ?></a></li>
								<?php } ?>
							</ul>
				<?php }
						echo '</div>';
					}
				}
				?>
			</div>
			<div class="col-md-9 col-xs-12">
				<?php
				$enable_page_title = get_field('enable_page_title');
				if ($enable_page_title == true) { ?>
					<div class="simple-item style-2 text-center">
						<h1 class="h1 title main-title"><?php the_title(); ?></h1>
					</div>
				<?php }
				travel_breadcrumbs();
				$slides = get_field('slider');
				if ($slides) { ?>
					<div class="swiper-container custom-slider arrow-closest" data-space-between="0" data-effect="1" data-slides-per-view="1" data-autoplay="5000" data-loop="1">
						<div class="swiper-button-prev"><i></i></div>
						<div class="swiper-button-next"><i></i></div>
						<div class="swiper-wrapper">
							<?php foreach ($slides as $slide) { ?>
								<div class="swiper-slide">
									<img class="resp-img full-img" src="<?php echo esc_url($slide['url']); ?>" alt="<?php echo esc_attr($slide['alt']); ?>" title="<?php echo esc_attr($slide['title']); ?>">
								</div>
							<?php } ?>
						</div>
						<div class="swiper-pagination"></div>
					</div>
					<div class="empty-lg-35 empty-xs-30"></div>
					<?php }
					if ($list) {
						if ($description) { ?>
						<div class="desc-block type-2">
							<div class="simple-item style-2 text-left">
								<h1 class="h1 title main-title"><?php the_title(); ?></h1>
								<div class="empty-lg-20"></div>
								<div class="simple-text description">
									<?php echo wp_kses_post($description); ?>
								</div>
							</div>
						</div>
						<div class="empty-lg-30"></div>
					<?php }
					}
					if ($list) { ?>
					<div class="row catalogue">
						<?php $args = array(
								'post_type' => 'room',
								'post__in'  => $list,
								'orderby'   => 'post__in',
								'posts_per_page' => -1
							);
							$query = new WP_query($args);
							if ($query->have_posts()) :
								while ($query->have_posts()) :
									$query->the_post();
									?>
								<div class="col-md-4 col-sm-6 col-xs-12">
									<div class="sanatorium-item type-2">
										<div class="img-box hover-zoom">
											<a href="<?php the_permalink(); ?>">
												<img class="resp-img full-img" src="<?php the_post_thumbnail_url(); ?>" alt="<?php travel_the_post_thumbnail_alt(); ?>" title="<?php travel_the_post_thumbnail_title(); ?>">
											</a>
										</div>
										<div class="text-block text-center">
											<div class="h4 caption"><?php the_title(); ?></div>
											<div class="ratings">
												<?php //single_rating(); ?>
											</div>
											<div class="empty-xs-0 empty-lg-10"></div>
											<?php
														$price = get_field('price');
														if ($price) { ?>
												<div class="room-price">
													<span class="amount">
														<?php echo esc_attr($price); ?>
													</span>
												</div>
											<?php } ?>
											<a href="<?php the_permalink(); ?>" class="reserve button style-4">
												<?php _e('To book', 'travel'); ?>
											</a>
										</div>
									</div>
								</div>
						<?php endwhile;
								wp_reset_postdata();
							endif; ?>
					</div>
				<?php } ?>
				<div class="desc-block">
					<?php
					if (empty($list)) {
						if ($description) { ?>
							<div class="simple-text description">
								<?php echo wp_kses_post($description); ?>
							</div>
							<div class="empty-lg-35 empty-xs-30"></div>
					<?php }
					} ?>
					<div class="tab-wrapper">
						<div class="row">
							<div class="col-xs-12">
								<?php
								$tab_panel_enable = get_field('tab_panel_enable');
								if ($tab_panel_enable == true) { ?>
									<div class="empty-lg-25"></div>
									<div class="tab-nav-wrapper style-2">
										<div class="nav-tab">
											<?php
												$i = 0;
												if (have_rows('content')) :
													while (have_rows('content')) : the_row();
														if (get_row_layout() == 'page_tab') :
															$tab_title = get_sub_field('tab_title');
															$i++; ?>
														<div class="nav-tab-item <?php echo ($i == 1 ? 'active' : ''); ?>">
															<div class="nav-tab-item-caption">
																<?php echo esc_html($tab_title); ?>
															</div>
														</div>
											<?php
														endif;
													endwhile;
												endif;
												?>
										</div>
									</div>
								<?php }
								?>
								<div class="tabs-content">
									<?php
									$i = 0;
									if (have_rows('content')) :
										while (have_rows('content')) : the_row();
											if (get_row_layout() == 'page_tab') {
												$tab_title = get_sub_field('tab_title');
												$i++; ?>
												<div class="tab-info <?php echo ($i == 1 ? 'active' : ''); ?>">
													<div class="simple-item style-2">
														<?php
																	if (have_rows('tab_content')) :
																		while (have_rows('tab_content')) : the_row();
																			if (get_row_layout() == 'title') {
																				$title = get_sub_field('text');
																				if ($title) { ?>
																		<h2 class="h2 title main-title">
																			<?php echo esc_html($title); ?>
																		</h2>
																	<?php }
																						} elseif (get_row_layout() == 'text_content') {
																							$text = get_sub_field('text');
																							if ($text) { ?>
																		<div class="divider"></div>
																		<div class="simple-text">
																			<?php echo wp_kses_post($text); ?>
																		</div>
																	<?php }
																						} elseif (get_row_layout() == 'images_content') {
																							$images = get_sub_field('images');
																							if ($images) { ?>
																		<div class="simple-image">
																			<div class="row">
																				<?php foreach ($images as $image) { ?>
																					<div class="col-sm-4 col-xs-12">
																						<img class="resp-img" src="<?php echo esc_url($image['url']); ?>" alt="<?php echo esc_attr($image['alt']); ?>" title="<?php echo esc_attr($image['title']); ?>">
																					</div>
																				<?php } ?>
																			</div>
																		</div>
														<?php }
																			};
																		endwhile;
																	endif;
																	?>
													</div>
													<div class="rating">
													</div>
												</div>
												<?php
														} elseif (get_row_layout() == 'page_map') {
															$map 		  = get_sub_field('map');
															$marker_title = get_sub_field('marker_title');
															$map_search   = get_sub_field('map_search');
															if ($map) { ?>
													<div class="empty-lg-35 empty-xs-30"></div>
													<div class="row">
														<div class="col-xs-12">
															<?php if ($map_search) {
																				wp_enqueue_script('googleapisL');
																				wp_enqueue_script('travel-infobox_packed');
																				wp_enqueue_script('travel-map-contact'); ?>
																<div class="map-block">
																	<div class="map-input-wrapper">
																		<div class="input-map">
																			<input class="map-input input-field" id="searchTextField" placeholder="<?php _e('Point of departure', 'travel'); ?>">
																		</div>
																		<div class="input-map hidden">
																			<div class="map-input marker-click input-field" data-lat="<?php echo $map['lat']; ?>" data-lng="<?php echo $map['lng']; ?>"><?php echo $marker_title; ?></div>
																		</div>
																		<div class="map-input data"></div>
																		<div class="clear-route"></div>
																	</div>
																	<div class="map-full" id="map-canvas" data-close="<?php echo TRAVEL_URI; ?>/img/close2.png"></div>
																	<div class="hidden">
																		<a class="marker-main" data-lat="<?php echo $map['lat']; ?>" data-lng="<?php echo $map['lng']; ?>" data-image="<?php echo TRAVEL_URI; ?>/img/marker.png" data-string="<?php echo $marker_title; ?>" href="#"></a>
																	</div>
																</div>
															<?php } else {
																				wp_enqueue_script('googleapis');
																				wp_enqueue_script('travel-map'); ?>
																<div id="map-canvas" class="map-block" data-lat="<?php echo esc_attr($map['lat']); ?>" data-lng="<?php echo esc_attr($map['lng']); ?>" data-zoom="14"></div>
																<div class="addresses-block">
																	<a data-lat="<?php echo esc_attr($map['lat']); ?>" data-lng="<?php echo esc_attr($map['lng']); ?>" data-marker="<?php echo TRAVEL_URI; ?>/img/marker.png" data-string="<?php echo $marker_title; ?>"></a>
																</div>
															<?php } ?>
														</div>
														<div class="clear empty-lg-15 empty-xs-0"></div>
													</div>
												<?php }
														} elseif (get_row_layout() == 'page_contacts') {
															$text   = get_sub_field('text');
															$table  = get_sub_field('page_table');
															$reservation_block = get_field('reservation_phones', 'option');
															$social = get_sub_field('page_social');
															if ($text) { ?>
													<div class="empty-lg-15 empty-xs-0"></div>
													<div class="simple-text md">
														<?php echo wp_kses_post($text); ?>
													</div>
												<?php } ?>
												<div class="empty-lg-30 empty-xs-20"></div>
												<div class="row">
													<?php
																if ($table) { ?>
														<div class="col-md-8 col-xs-12">
															<div class="contact-table">
																<table>
																	<?php if ($table['header']) { ?>
																		<thead>
																			<tr>
																				<?php foreach ($table['header'] as $th) {
																										echo '<th>' . $th['c'] . '</th>';
																									} ?>
																			</tr>
																		</thead>
																	<?php } ?>
																	<tbody>
																		<?php foreach ($table['body'] as $tr) {
																							echo '<tr>';
																							foreach ($tr as $td) {
																								echo '<td>' . $td['c'] . '</td>';
																							}
																							echo '</tr>';
																						}
																						?>
																	</tbody>
																</table>
																<div class="empty-sm-30"></div>
															</div>
														</div>
													<?php }
																if ($reservation_block) { ?>
														<div class="col-md-4 col-xs-12">
															<div class="row">
																<div class="col-md-12 col-sm-6 phones-block">
																	<div class="simple-item style-2">
																		<?php
																						$reservation_title = get_field('reservation_title', 'option');
																						if ($reservation_title) { ?>
																			<div class="simple-text text-center">
																				<h2 class="h3 title">
																					<?php echo esc_html($reservation_title); ?>
																				</h2>
																			</div>
																		<?php } ?>
																		<div class="empty-lg-15"></div>
																		<ul class="tel style-3">
																			<?php
																							foreach ($reservation_block as $phone) {
																								if ($phone['operator'] == 1 && $phone['phone_number']) { ?>
																					<li>
																						<img src="<?php echo TRAVEL_URI; ?>/img/lifecell-icon.jpg" alt="lifecell" title="<?php _e('Lifecell', 'travel'); ?>">
																						<a href="tel:+<?php echo esc_attr(preg_replace('![^0-9]+!', '', $phone['phone_number'])); ?>" rel="nofollow"><?php echo esc_html($phone['phone_number']); ?></a>
																					</li>
																				<?php } elseif ($phone['operator'] == 2 && $phone['phone_number']) { ?>
																					<li>
																						<img src="<?php echo TRAVEL_URI; ?>/img/kievstar-icon.jpg" alt="kievstar" title="<?php _e('Kievstar', 'travel'); ?>">
																						<a href="tel:+<?php echo esc_attr(preg_replace('![^0-9]+!', '', $phone['phone_number'])); ?>" rel="nofollow"><?php echo esc_html($phone['phone_number']); ?></a>
																					</li>
																				<?php } elseif ($phone['operator'] == 3 && $phone['phone_number']) { ?>
																					<li>
																						<img src="<?php echo TRAVEL_URI; ?>/img/vodafone-icon.jpg" alt="vodafone" title="<?php _e('Vodafone', 'travel'); ?>">
																						<a href="tel:+<?php echo esc_attr(preg_replace('![^0-9]+!', '', $phone['phone_number'])); ?>" rel="nofollow"><?php echo esc_html($phone['phone_number']); ?></a>
																					</li>
																				<?php } elseif ($phone['operator'] == 4 && $phone['phone_number']) { ?>
																					<li>
																						<img src="<?php echo TRAVEL_URI; ?>/img/phone-icon.png" alt="phone" title="<?php _e('Phone', 'travel'); ?>">
																						<a href="tel:+<?php echo esc_attr(preg_replace('![^0-9]+!', '', $phone['phone_number'])); ?>" rel="nofollow"><?php echo esc_html($phone['phone_number']); ?></a>
																					</li>
																				<?php } elseif ($phone['operator'] == 5 && $phone['phone_number']) { ?>
																					<li>
																						<img src="<?php echo TRAVEL_URI; ?>/img/skype-icon.png" alt="skype" title="<?php _e('Skype', 'travel'); ?>">
																						<a href="skype:<?php echo esc_attr($phone['phone_number']); ?>" rel="nofollow">ZahidTravel</a>
																					</li>
																				<?php } elseif ($phone['operator'] == 6 && $phone['phone_number']) { ?>
																					<li>
																						<img src="<?php echo TRAVEL_URI; ?>/img/email-icon.png" alt="email" title="<?php _e('Email', 'travel'); ?>">
																						<a href="mailto:<?php echo esc_attr($phone['phone_number']); ?>" rel="nofollow"><?php echo esc_html($phone['phone_number']); ?></a>
																					</li>
																				<?php } ?>
																			<?php } ?>
																		</ul>
																	</div>
																	<div class="empty-lg-30 empty-sm-0 empty-xs-20"></div>
																</div>
																<div class="col-md-12 col-sm-6">
																	<div class="simple-item style-2">
																		<?php
																						$social_title = get_field('social_title_option', 'option');
																						if ($social_title) { ?>
																			<div class="simple-text text-center">
																				<h2 class="h3 title">
																					<?php echo esc_html($social_title); ?>
																				</h2>
																			</div>
																		<?php }
																						if ($social == true) { ?>
																			<div class="empty-lg-15"></div>
																			<ul class="social-icons style-2">
																				<?php get_template_part('template-parts/social'); ?>
																			</ul>
																		<?php } ?>
																	</div>
																</div>
															</div>
														</div>
													<?php } ?>
												</div>
									<?php }
										endwhile;
									endif;
									?>
								</div>
							</div>
						</div>
					</div>
					<?php if (get_field('tab_rating_enable')) { ?>
						<div class="empty-lg-10 empty-xs-20"></div>
						<div class="ratings">
							<?php
								$rating = rating();
								echo $rating['html'];
								?>
						</div>
						<div class="empty-lg-10 empty-xs-5"></div>
					<?php } ?>
				</div>
			</div>
		</div>
	</div>
</section>
<div class="empty-lg-70 empty-sm-50 empty-xs-30"></div>

<?php get_footer();
