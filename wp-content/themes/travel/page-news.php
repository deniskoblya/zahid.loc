<?php
/**
* Template Name: News
*/

if(!defined('ABSPATH')) exit;
get_header(); ?>
	
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
					$default_posts_per_page = get_option('posts_per_page');
					$args = array(
						'post_type' => 'new',
						'posts_per_page' => $default_posts_per_page,
						'paged' => get_query_var('paged') ?: 1
					);
					$query = new WP_Query($args);
					$max_num_pages = $query->max_num_pages;
					if( $query->have_posts() ){ ?>
						<div class="row">
							<?php while( $query->have_posts() ){ $query->the_post(); ?>
								<div class="col-lg-4 col-sm-6 col-xs-12">
									<div class="proposal-item blog-item">
										<div class="overflow-hidden">
											<div class="img-box" style="background-image: url(<?php the_post_thumbnail_url(); ?>);"></div>
										</div>
										<div class="text-block">
											<h2 class="h5"><?php the_title(); ?></h2>
										</div>
										<a href="<?php the_permalink(); ?>" class="full-size"></a>
									</div>
									<?php travel_schema_get_news_article(get_the_id(),'NewsArticle'); ?>
								</div>
							<?php } ?>
						</div>
					<?php }
					wp_reset_postdata();
				?>
				<div class="empty-lg-20 empty-xs-15"></div>
				<?php travel_pagination($max_num_pages); ?>
				<div class="empty-lg-0 empty-sm-0 empty-xs-30"></div>
				<?php get_sidebar('mobile'); ?>
			</div>
		</div>
	</div>

<?php get_footer();