<?php 
/**
 * Template Name: Institution Page
 */
if(!defined('ABSPATH')) exit; get_header(); ?>
<div class="container">
	<div class="row">
		<div class="col-xs-12">
			<?php travel_breadcrumbs(); ?>
		</div>

		<div class="col-md-3 col-sm-4 col-xs-12">
			<?php get_sidebar(); ?>
		</div>

		<div class="col-md-9 col-sm-8 col-xs-12">
			<?php if (get_field('enable_page_title')){ ?>
				<div class="text-center">
					<h1 class="h1"><?php echo get_the_title(); ?></h1>
					<div class="empty-lg-20 empty-xs-15"></div>
				</div>
			<?php }

			$text = get_field('text');
			if ($text){ ?>
				<div class="white-box">
					<div class="simple-text">
						<?php echo wp_kses_post($text); ?>
					</div>
				</div>
				<div class="empty-lg-40 empty-xs-15"></div>
			<?php }

			$stuffs = get_field('stuffs');

			if ($stuffs){ ?>
				<div class="row">

					<?php foreach ($stuffs as $stuff){
						$img_url = wp_get_attachment_url( get_post_thumbnail_id($stuff), 'thumbnail' );
						$link = get_permalink($stuff); ?>
						<div class="col-lg-4 col-sm-6 col-xs-12">
							<div class="sanatorium-item type-2">
								<div class="overflow-hidden">
									<div class="img-box" style="background-image: url(<?php echo $img_url; ?>);"></div>
									<span><?php echo get_field('price', $stuff); ?></span>
								</div>
								<div class="text-block text-center">
									<p class="h5"><?php echo get_the_title($stuff); ?></p>
									<?php //echo single_rating($stuff); ?>
									<a href="<?php echo $link; ?>" class="button"><?php _e('book now', 'travel'); ?></a>
								</div>
								<a href="<?php echo $link; ?>" class="full-size"></a>
							</div>
						</div>
					<?php } ?>
<div class="col-xs-12">
					<div class="empty-lg-50 empty-sm-50 empty-xs-30"></div>
					<hr>
				</div>
				</div>
			<?php } ?>

			<div class="empty-lg-70 empty-sm-50 empty-xs-30"></div>
				<?php get_template_part('template-parts/tabs'); ?>
			<div class="empty-lg-0 empty-sm-0 empty-xs-30"></div>

			<?php get_sidebar('mobile'); ?>
		</div>
	</div>
</div>
<?php get_footer();