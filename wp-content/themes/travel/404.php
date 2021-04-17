<?php 
global $wp_query;
if(!empty($wp_query -> query_vars['page'] )){
wp_safe_redirect( home_url($wp_query -> query_vars['name']), 301 );
exit;
}
get_header(); 

//file_put_contents(__DIR__. '/test1.php', var_export($wp_query, true));?>

	<div class="container">
		<div class="row">
			<div class="col-xs-12">
				<div class="empty-lg-20"></div>
			</div>
			<div class="col-md-3 col-sm-4 col-xs-12"><?php get_sidebar(); ?></div>
			<div class="col-md-9 col-sm-8 col-xs-12">
				<div class="error">
					<?php 
						$logo = get_field('logo_404','options');
						if($logo){ ?>
							<a href="<?php echo home_url('/'); ?>" class="logo">
								<img src="<?php echo $logo['url']; ?>" alt="<?php echo esc_attr($logo['alt'] ); ?>" title="<?php echo esc_attr($logo['title'] ); ?>">
							</a>
					<?php } ?>
					<div class="empty-lg-40 empty-xs-15"></div>
					<span><?php the_field('title_404','options'); ?></span>
					<div class="empty-lg-40 empty-xs-15"></div>
					<?php
						$link_text_404 = get_field('link_text_404', 'options');
						$text_404 = get_field('text_404', 'options');
					?>
					<h1><?php echo $text_404; ?> <a id="back_to_home" href="<?php echo home_url('/'); ?>"><?php echo $link_text_404; ?></a></h1>
				</div>
				<div class="empty-lg-35 empty-sm-25 empty-xs-15"></div>
				<hr>
				<div class="empty-lg-35 empty-sm-25 empty-xs-15"></div>
				<?php 
					$title_sanatorium = get_field('title_sanatorium', 'options');
					if($title_sanatorium){ ?>
						<div class="text-center">
							<h2 class="h2"><?php echo $title_sanatorium; ?></h2>
							<div class="empty-lg-40 empty-xs-15"></div>
						</div>
				<?php }
					$sanatorium_404 = get_field('sanatorium_404', 'options');
					if($sanatorium_404){ ?>
						<div class="row">
							<?php
								foreach($sanatorium_404 as $sanatorium){
									$img_url = wp_get_attachment_url( get_post_thumbnail_id($sanatorium), 'thumbnail' );
									$link = get_permalink($sanatorium); 
									$title = get_the_title($sanatorium); ?>
									<div class="col-lg-4 col-xs-6">
										<div class="sanatorium-item">
											<div class="img-box" style="background-image: url(<?php echo $img_url; ?>);"></div>
											<div class="text-block">
												<h3 class="h5 light"><?php echo esc_html($title); ?></h3>
											</div>
											<a href="<?php echo $link; ?>" class="full-size"></a>
										</div>
									</div>
							<?php } ?>
						</div>
				<?php } ?>
				<div class="empty-lg-0 empty-sm-0 empty-xs-30"></div>
				<?php echo get_sidebar('mobile'); ?>
			</div>
		</div>
	</div>

<?php get_footer();