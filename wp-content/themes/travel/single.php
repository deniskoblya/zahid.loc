<?php get_header();

	if(have_posts()){
		while(have_posts()){ the_post();
			global $post; ?>
			<section>
				<div class="container">
					<div class="row">
						<div class="col-xs-12"><?php travel_breadcrumbs(); ?></div>
						<div class="col-md-3 col-sm-4 col-xs-12"><?php get_sidebar(); ?></div>
						<div class="col-md-9 col-sm-8 col-xs-12">
							<div class="text-center">
								<h1 class="h1"><?php the_title(); ?></h1>
								<div class="empty-lg-20 empty-xs-15"></div>
							</div>
							<?php
								echo single_rating($post->ID,'vote-block');

								$tabs = get_field('tabs');
								if($tabs){ ?>
									<div class="post-content-list">
										<p class="h5"><?php _e('Content:','travel'); ?></p>
										<div class="empty-lg-15 empty-xs-15"></div>
										<div class="simple-text">
											<ul>
												<?php
													foreach($tabs as $key => $tab){
														if(!empty($tab['title'])){ ?>
															<li><a href="#section-<?php echo $key; ?>"><?php echo $tab['title']; ?></a></li>
													<?php }
													}
												?>
											</ul>
										</div>
									</div>
							<?php } ?>
							<div class="empty-lg-40 empty-xs-15"></div>
							<?php
								$image = get_field('image');
								if($image){ ?>
									<div class="border-radius">
										<img src="<?php echo $image['url']; ?>" alt="<?php echo esc_attr($image['alt'] ); ?>" title="<?php echo esc_attr($image['title'] ); ?>">
									</div>
							<?php } ?>
							<div class="empty-lg-40 empty-xs-15"></div>
							<?php if($tabs){ ?>
								<div class="post-content">
									<?php
										foreach($tabs as $key => $tab){
											if(!empty($tab['content'])){ ?>
												<div id="section-<?php echo $key; ?>">
													<?php 
														if($key != 0) echo '<hr>';
													
														foreach($tab['content'] as $item){
															$layout = $item['acf_fc_layout'];
															if($layout == 'text'){
																if(!empty($item['text'])){ ?>
																	<div class="simple-text md"><?php echo wp_kses_post($item['text']); ?></div>
																<?php }
															} elseif ($layout == 'images'){
																if(!empty($item['images'])){
																	$count = count($item['images']);
																	$class = ($count <= 2) ? 'col-sm-6' : 'col-sm-4'; ?>
																	<div class="simple-image">
																		<div class="row">
																			<?php foreach($item['images'] as $image){ ?>
																				<div class="<?php echo $class; ?> col-xs-12">
																					<img class="resp-img" src="<?php echo $image['url']; ?>" alt="<?php echo esc_attr($image['alt'] ); ?>" title="<?php echo esc_attr($image['title'] ); ?>">
																				</div>
																			<?php } ?>
																		</div>
																	</div>
																<?php }
															} elseif ($layout == 'title'){
																if(!empty($item['title'])){ ?>
																	<div class="text-center">
																		<h2 class="h3"><?php echo esc_html($item['title']); ?></h2>
																	</div>
																<?php }
															} elseif ($layout == 'space'){
																echo '<div class="empty-lg-40 empty-md-30 empty-xs-15"></div>';
															}elseif ($layout == 'big_space'){
																echo '<div class="empty-lg-40 empty-xs-15"></div>';
															}
														}
													?>
												</div>
										<?php }
										}
									?>
								</div>
							<?php } ?>
							<div class="empty-lg-0 empty-sm-0 empty-xs-30"></div>
							<?php get_sidebar('mobile'); ?>
						</div>
					</div>
				</div>
			</section>
		<?php }
		if($post->post_type == 'new'){
			$schema = travel_schema_blog_post($post->ID,'NewsArticle');
			if($schema){
				$schema['@context'] = 'http://schema.org/';
				echo '<script type="application/ld+json">'.json_encode($schema,JSON_UNESCAPED_UNICODE).'</script>';
			}
		}
	}

get_footer();