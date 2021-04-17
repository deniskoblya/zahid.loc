<?php

/**
 * Template Name: Main Template AJAX2
 */

if (!defined('ABSPATH')) exit;

get_header(); ?>




<div class="container container-main-page" itemscope itemtype="http://schema.org/Resort">
        <meta itemprop="description" content="<?php
$my_descr = get_post_meta($post->ID, "_yoast_wpseo_metadesc", true);
if ($my_descr){
echo  "$my_descr";
}
else echo  "Нет описания для данной страницы";
?>">
    <meta itemprop="brand" content="ZAHID-TRAVEL">
    <meta itemprop="brand" content="Захід Тревел">
    <meta itemprop="address" content="<?php the_field('schema_address'); ?>">
    <meta itemprop="pricerange" content="<?php the_field('pricerange'); ?>">
    
    <meta itemprop="url" content="<?php echo home_url(); ?>">
    <meta itemprop="telephone" content="<?php the_field('kyivstar_option', 'option');?>">
    <meta itemprop="telephone" content="<?php the_field('vodafone_option', 'option');?>">
    <meta itemprop="telephone" content="<?php the_field('lifecell_option', 'option');?>">
    <meta itemprop="telephone" content="<?php the_field('stationar_option', 'option');?>">
    
    <div class="row relative">
        <aside class="col-md-3 col-sm-4 col-xs-12">
            <?php get_sidebar(); ?>
        </aside>
        <main class="col-md-9 col-sm-8 col-xs-12">
            <?php if (get_field('enable_page_title')) { ?>
               
            
            <div class="flex-d">
				   <h1 class="h1 text-center" itemprop="name"><?php the_title(); ?></h1>
         
                <?php travel_breadcrumbs(); ?>
          
				</div>
           <div class="empty-lg-20 empty-xs-15"></div>
            <?php }
            $slider = get_field('slider');
            if ($slider) { ?>
                <div class="swiper-container simple-slider" data-space-between="0" data-parallax="1" data-slides-per-view="1" data-autoplay="4000" data-loop="1" data-auto-height="1">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <div class="swiper-button-prev"></div>
                    <div class="swiper-button-next"></div>
                    <div class="swiper-wrapper">
                        <?php foreach ($slider as $image) { ?>
                            <div class="swiper-slide">
                                <img class="resp-img full-img" itemprop="image" src="<?php echo $image['url']; ?>" alt="<?php echo esc_attr($image['alt']); ?>" title="<?php echo esc_attr($image['title']); ?>" data-swiper-parallax="30%">
                            </div>
                        <?php } ?>
                    </div>
                    <div class="swiper-pagination hidden-xs"></div>
                </div>
            <?php }

            $description = get_field('description');
            if ($description) { ?>
                <section class="white-box">
                    <div class="simple-text"><?php echo wp_kses_post($description); ?></div>
                </section>
                <div class="empty-lg-40 empty-xs-15"></div>
                <hr>
                <div class="empty-lg-40 empty-xs-15"></div>
            
            <?php }

            $title = get_field('title');
            if ($title) { ?>
                <div class="text-center">
                    <h2 class="h2"><?php echo esc_html($title); ?></h2>
                </div>
                <div class="empty-lg-40 empty-xs-15"></div>
                <div class="flex-d"><div>
                    <?php get_template_part('template-parts/tabs'); ?>
                </div>
                <div>
            <?php }
            $button_ajax_post_hide = get_field('button_ajax_post_hide');
            $catalog_sanatorium = get_field('catalog_sanatorium');
            if ($catalog_sanatorium) {
                $page_type = get_field('page_type'); ?>
                <div id="true_loadmore_content" class="row dinamyc" itemprop="hasOfferCatalog" itemscope itemtype="https://schema.org/OfferCatalog">
                    <meta itemprop="name" content="<?php the_field('hotels_sanator'); ?>">
                    <?php
                        foreach ($catalog_sanatorium as $key => $item) {
                            $price = get_field('price', $item);
                            $address = get_field('address', $item);
                            $link = get_permalink($item);
                            if ($key) { ?>
                            <article class="c_item col-lg-4 col-sm-6 col-xs-12" itemprop="itemListElement" itemscope itemtype="https://schema.org/Offer">
                                <div class="sanatorium-item type-2" itemprop="itemOffered" itemscope itemtype="https://schema.org/Hotel">
                                    <a class="overflow-hidden" itemprop="url" href="<?php echo $link; ?>">
                            <h3 class="h5" itemprop="name"><?php echo get_the_title($item); ?></h3>
                            <img itemprop="image" src="<?php echo get_the_post_thumbnail_url($item); ?>" alt="">
                                        <meta itemprop="telephone" content="<?php the_field('kyivstar_option', 'option');?>">
    <meta itemprop="telephone" content="<?php the_field('vodafone_option', 'option');?>">
    <meta itemprop="telephone" content="<?php the_field('lifecell_option', 'option');?>">
    <meta itemprop="telephone" content="<?php the_field('stationar_option', 'option');?>">
                            <?php echo ($price ? '<span itemprop="pricerange">' . $price . '</span>' : ''); ?>
                            <?php echo ($address ? '<meta itemprop="address" content="' . $address . '">' : ''); ?>
                        </a>
                                    <div class="text-block text-center">
                                       
                                    </div>
                                   
                                </div>
                            </article>
                    <?php }
                        } ?>
                </div>
          <?php }
            if ($page_type != 'sanatorium' && count($catalog_sanatorium) > 900 && !$button_ajax_post_hide) { ?>
                <div class="text-center">
                    <span class="true_loadmore_button button empty"><?php _e('More', 'travel'); ?></span>
                </div>
            <?php } ?>
            <div class="empty-lg-30"></div>

            <?php $faq = get_field('main_faq');
            $content_title = $faq['main_content_title'];
            $content = $faq['main_content'];
            if ($content) { ?>
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
                <div class="empty-lg-30 empty-xs-15"></div>
            <?php } ?>

            <hr>
            <div class="empty-lg-50 empty-xs-30"></div>
            </div>
            </div>
            <div class="empty-lg-0 empty-sm-0 empty-xs-30"></div>
            <?php get_sidebar('mobile'); ?>
        </main>
    </div>
</div>
<?php get_footer();
