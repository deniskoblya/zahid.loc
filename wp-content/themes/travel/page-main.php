<?php

/**
 * Template Name: Main Template Page
 */
if (!defined('ABSPATH')) exit;

get_header(); ?>

<div class="container container-main-page hh" >     
    <div class="row">
        <aside class="col-md-3 col-sm-4 col-xs-12">
            <?php get_sidebar(); ?>
        </aside> 
        <div class="col-md-9 col-sm-8 col-xs-12">
            <?php if (get_field('enable_page_title')) { ?>


            <h1 class="h1 text-center"><?php the_title(); ?></h1>
            <div class="breadcrumbs_page_block">
                <?php travel_breadcrumbs(); ?>

                <!-- <div class="text-center">

                <div class="empty-lg-20 empty-xs-15"></div>
            </div>-->
            </div>
            <?php }
			$slider = get_field('slider');
			if ($slider) { ?>
            <div class="swiper-container simple-slider" data-space-between="0" data-parallax="1" data-slides-per-view="1" data-autoplay="4000" data-loop="1">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <div class="swiper-button-prev"></div>
                <div class="swiper-button-next"></div>
                <div class="swiper-wrapper">
                    <?php foreach ($slider as $image) { ?>
                    <div class="swiper-slide">
                        <img class="resp-img full-img" src="<?php echo $image['url']; ?>" alt="<?php echo esc_attr($image['alt']); ?>" title="<?php echo esc_attr($image['title']); ?>" data-swiper-parallax="30%">
                    </div>
                    <?php } ?>
                </div>
                <div class="swiper-pagination hidden-xs"></div>
            </div>
            <?php }

			$description = get_field('description');
			if ($description) { ?>
            <div class="white-box">
                <div class="simple-text"><?php echo wp_kses_post($description); ?></div>
            </div>
            <div class="empty-lg-40 empty-xs-15"></div>
            <hr>
            <div class="empty-lg-40 empty-xs-15"></div>
            <?php }

			$title = get_field('title');
			if ($title) { ?>
            <div class="text-center">
                <h2 class="h2" ><?php echo esc_html($title); ?></h2>
            </div>
            <div class="empty-lg-40 empty-xs-15"></div>
            <?php }

			$catalog_sanatorium = get_field('catalog_sanatorium');
			if ($catalog_sanatorium) {
				$page_type = get_field('page_type'); ?>
            <div class="row dinamyc">
                <?php
						foreach ($catalog_sanatorium as $key => $item) {
							$price = get_field('price', $item);
							$link = get_permalink($item); ?>
                <div class="c_item col-lg-4 col-sm-6 col-xs-12" <?php echo ($page_type != 'sanatorium' && $key >= 9 ? ' style="display:none;"' : ''); ?>>
                    <div class="sanatorium-item type-2">
                        <div class="overflow-hidden">
                            <div class="img-box" style="background-image: url(<?php echo get_the_post_thumbnail_url($item); ?>);"></div>
                            <?php echo ($price ? '<span>' . $price . '</span>' : ''); ?>
                        </div>
                        <div class="text-block text-center">
                            <p class="h5"><?php echo get_the_title($item); ?></p>
                        </div>
                        <a href="<?php echo $link; ?>" class="full-size"></a>
                    </div>
                </div>
                <?php } ?>
            </div>
            <?php if ($page_type != 'sanatorium' && count($catalog_sanatorium) > 9) { ?>
            <div class="text-center">
                <span id="load_more" class="button empty"><?php _e('More', 'travel'); ?></span>
            </div>
            <?php } ?>
            <div class="empty-lg-30"></div>

            <hr>
            <?php } ?>
            <div class="empty-lg-50 empty-xs-30"></div>
            <?php get_template_part('template-parts/tabs'); ?>
            <div class="empty-lg-0 empty-sm-0 empty-xs-30"></div>
            <?php get_sidebar('mobile'); ?>
        </div>
    </div>
</div>

<?php get_footer();
