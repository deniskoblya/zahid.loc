<?php
if(!defined('ABSPATH')) exit;
get_header();

	switch(true){
		# Archive
		case(is_archive() || is_home()): 
		//case(is_home()):
		?>
			<div class="container">
				<div class="row">
					<div class="col-xs-12"><?php travel_breadcrumbs(); ?></div>
					<div class="col-md-3 col-sm-4 col-xs-12"><?php get_sidebar(); ?></div>
					<div class="col-md-9 col-sm-8 col-xs-12">
						<?php $page_for_posts = get_option('page_for_posts'); ?>
						<div class="text-center">
                            <?php if (is_category()) {
                                $category_title = get_queried_object(); ?>
                                <h1 class="h1"><?php echo $category_title->name; ?></h1>
                            <?php } else { ?>
                                <h1 class="h1"><?php echo get_the_title($page_for_posts); ?></h1>
                            <?php } ?>
							<div class="empty-lg-40 empty-xs-15"></div>
						</div>
						<?php
							$blogPost = array();
							$default_posts_per_page = get_option('posts_per_page');
							$args = array(
								'post_type' => 'room',
								'posts_per_page' => $default_posts_per_page,
								'paged' => get_query_var('paged') ?: 1
							);
							$query = new WP_Query($args);
						
							global $wp_query;
							$query = $wp_query;
							$wp_query = null;
							$wp_query = $query;
							if( $wp_query->have_posts() ){ ?>
								<div class="row">
									<?php while( $wp_query->have_posts() ){ $wp_query->the_post(); ?>
                                        <div class="col-xs-12">
                                            <div class="proposal-item type-2 blog-item">
                                                <div class="img-box-wrapp">
                                                    <div class="img-box" style="background-image: url(<?php the_post_thumbnail_url(); ?>);"></div>
                                                </div>
                                                <div class="text-block">
                                                    <h2 class="h5 caption"><?php the_title(); ?></h2>
                                                    <div class="simple-text">
                                                        <?php the_excerpt(); ?>
                                                    </div>
                                                    <div class="h5 btn-link">читать дальше &gt;&gt;</div>
                                                </div>
                                                <a href="<?php the_permalink(); ?>" class="full-size"></a>
                                            </div>
                                            <?php $blogPost[] = travel_schema_blog_post(get_the_id()); ?>
                                        </div>
									<?php } ?>
								</div>
							<?php }
							wp_reset_postdata();
						?>
						<div class="empty-lg-20 empty-xs-15"></div>
						<?php
							travel_pagination($wp_query->max_num_pages); 
							$wp_query = null;
							$wp_query = $query;
						?>
						<div class="empty-lg-0 empty-sm-0 empty-xs-30"></div>
						<?php get_sidebar('mobile'); ?>
					</div>
				</div>
			</div>
		<?php
			$schema = array(
				'@context' => 'http://schema.org/',
				'@type' => 'Blog',
				'headline' => get_option('page_for_posts') ? wp_filter_nohtml_kses(get_the_title(get_option('page_for_posts'))) : get_bloginfo('name'),
				'description' => get_bloginfo('description'),
				'url' => get_option('page_for_posts') ? get_permalink(get_option('page_for_posts')) : get_home_url(),
				'blogPost' => $blogPost,
	        );
			echo '<script type="application/ld+json">'.json_encode($schema,JSON_UNESCAPED_UNICODE).'</script>';

			break;
		# Search
		case(is_search()):
			printf(__('Search Results for %s','travel'),get_search_query());
		break;
		default:
	}

get_footer();