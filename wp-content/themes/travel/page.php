<?php if (!defined('ABSPATH')) exit;

get_header(); ?>

<div class="container ggg container-main-page 123" itemscope itemtype="http://schema.org/CollectionPage">




    <meta itemprop="description" content="<?php
$my_descr = get_post_meta($post->ID, "_yoast_wpseo_metadesc", true);
if ($my_descr){
echo  "$my_descr";
}
else echo  "Нет описания для данной страницы";
?>">
    <meta itemprop="url" content="<?php echo home_url(); ?>">
    <meta itemprop="name" content="<?php the_title(); ?>">





    <div class="row relative">
        <aside class="col-md-3 col-sm-4 col-xs-12">
            <?php get_sidebar(); ?>
        </aside>
        <main class="col-md-9 col-sm-8 col-xs-12">


            <?php if (get_field('enable_page_title')) { ?>
            <div class="flex-d">
                <h1 class="h1 text-center"><?php the_title(); ?></h1>

                <?php travel_breadcrumbs(); ?>

            </div>
            <div class="empty-lg-20 empty-xs-15" itemprop="provider" itemscope itemtype="http://schema.org/TravelAgency">
                <meta itemprop="name" content="Zahid Travel">
                <meta itemprop="description" content="Організація відпочинку та лікування в санаторіях та готелях України.">

                <meta itemprop="alternatename" content="ZAHID-TRAVEL">
                <meta itemprop="alternatename" content="ZAHID TRAVEL">
                <meta itemprop="alternatename" content="Захід Тревел">
                <meta itemprop="alternatename" content="ТОВ Курорти України">

                <meta itemprop="brand" content="ZAHID-TRAVEL">
                <meta itemprop="brand" content="Захід Тревел">

                <meta itemprop="address" content="82200, Україна, Трускавець, вулиця Стуса 2/34">
                <meta itemprop="url" content="<?php echo home_url(); ?>">
                <meta itemprop="pricerange" content="$$$">
                <meta itemprop="sameas" content="https://www.facebook.com/zah.travel/">
                <meta itemprop="sameas" content="https://twitter.com/TravelZahid">
                <meta itemprop="sameas" content="https://www.youtube.com/channel/UC2gJurLV_hgY4xiqjekyb_w/featured?view_as=subscriber">
                <meta itemprop="sameas" content="https://www.instagram.com/zahid.travel/">
                <meta itemprop="telephone" content="<?php the_field('kyivstar_option', 'option');?>">
                <meta itemprop="telephone" content="<?php the_field('vodafone_option', 'option');?>">
                <meta itemprop="telephone" content="<?php the_field('lifecell_option', 'option');?>">
                <meta itemprop="telephone" content="<?php the_field('stationar_option', 'option');?>">

                <?php if( get_field('schema_image', 'option') ): ?>

                <meta itemprop="image" content="<?php the_field('schema_image', 'option'); ?> ">

                <?php endif; ?>


                <meta itemprop="email" content="info@zahid.travel">

                <?php $logo = get_field('logo_option', 'options'); if ($logo) { ?>
                <meta itemprop="logo" content="<?php echo $logo['url']; ?>"><?php } ?>

                <meta itemprop="knowsLanguage" content="Ukrainian">
                <meta itemprop="knowsLanguage" content="Russian">
            </div>

            <div itemscope itemprop="mainEntity" itemtype="http://schema.org/Product">
                <meta itemprop="name" content="<?php the_title(); ?>">
                <meta itemprop="sku" content="<?php the_title(); ?>">
                <meta itemprop="brand" content="ZAHID-TRAVEL">
                <meta itemprop="brand" content="Захід Тревел">
                <meta itemprop="description" content="<?php
$my_descr = get_post_meta($post->ID, "_yoast_wpseo_metadesc", true);
if ($my_descr){
echo  "$my_descr";
}
else echo  "Нет описания для данной страницы";
?>">
                <meta itemprop="image" content="<?php the_field('16na9');?>">
                <meta itemprop="image" content="<?php the_field('1na1');?>">
                <meta itemprop="image" content="<?php the_field('3na4');?>">


                <!-- <div class="text-center">

                <div class="empty-lg-20 empty-xs-15"></div>
            </div>-->
                <?php }
            $slider = get_field('slider');
            if ($slider) { ?>
                <div class="swiper-container ttt simple-slider" data-space-between="0" data-parallax="1" data-slides-per-view="1" data-autoplay="4000" data-loop="1">
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
                <section class="white-box">
                    <div class="simple-text"><?php echo wp_kses_post($description); ?></div>
                </section>


                <div class="empty-lg-40 empty-xs-15"></div>

                <div class="flex-d">
                    <div>
                        <div><?php get_template_part('template-parts/tabs'); ?></div>
                    </div>
                    <div>


                        <?php }

            $title = get_field('title');
            if ($title) { ?>
                        <div class="text-center">
                            <h2 class="h2"><?php echo esc_html($title); ?></h2>
                        </div>


                        <div class="empty-lg-40 empty-xs-15"></div>






                        <?php }


            $button_ajax_post_hide = get_field('button_ajax_post_hide');
            $catalog_sanatorium = get_field('catalog_sanatorium');

            if ($catalog_sanatorium) {
                $page_type = get_field('page_type'); ?>
                        <div id="true_loadmore_content" class="row dinamyc">
                            <?php
                        foreach ($catalog_sanatorium as $key => $item) {
                            $price = get_field('price', $item);
                            $address = get_field('address', $item);
                            $link = get_permalink($item);
                            if (!$button_ajax_post_hide) {
                                if ($key > 9) { ?>
                            <article class="c_item den col-lg-4 col-sm-6 col-xs-12" <?php echo ($page_type != 'sanatorium' && $key >= 9 ? ' style="display:none;"' : ''); ?>>


                                <?php

$strWithoutChars = preg_replace('/[^0-9]/', '', $price);
echo $strWithoutChars;
?>

                                <div style="display:none;" itemprop="pricerange">от <span itemprop="price"><?php echo $strWithoutChars; ?></span> <span itemprop="pricecurrency">грн.</span></div>



                                <div class="sanatorium-item type-2">
                                    <a class="overflow-hidden" href="<?php echo $link; ?>">
                                        <h3 class="h5"><?php echo get_the_title($item); ?></h3>
                                        <img src="<?php echo get_the_post_thumbnail_url($item); ?>" alt="">
                                        <?php echo ($price ? '<span>' . $price . '</span>' : ''); ?>
                                    </a>

                                    <div class="text-block text-center">
                                        <?php echo single_rating($item, 'disabled', false); ?>
                                        <a href="<?php echo $link; ?>" class="button"><?php _e('Book now', 'travel'); ?></a>
                                    </div>
                                </div>
                            </article>
                            <?php } ?>
                            <?php  } else { ?>
                            <article class="c_item dden col-lg-4 col-sm-6 col-xs-12" <?php echo ($page_type != 'sanatorium' && $key >= 180 ? ' style="display:none;"' : ''); ?> itemprop="offers" itemscope itemtype="http://schema.org/Hotel http://schema.org/Offer">


                                <?php 
                     $murl = get_post_permalink($item);
                     $str = explode("/",$murl);?>
                                <meta itemprop="sku" content="<?php echo $str[count($str)-2];?>">

                                <div class="sanatorium-item type-2">
                                    <a class="overflow-hidden" itemprop="url" href="<?php echo $link; ?>">
                                        <h3 class="h5" itemprop="name"><?php echo get_the_title($item); ?></h3>
                                        <img src="<?php echo get_the_post_thumbnail_url($item); ?>" alt="" itemprop="image">

                                        <?php echo ($address ? '<meta itemprop="address" content="' . $address . '">' : ''); ?>
                                        <?php echo ($price ? '<span itemprop="pricerange">' . $price . '</span>' : ''); ?>
                                    </a>

                                    <?php

$strWithoutChars = preg_replace('/[^0-9]/', '', $price);
?>

                                    <div style="display:none;" itemprop="pricerange">от <span itemprop="price"><?php echo $strWithoutChars; ?></span> <span itemprop="pricecurrency">грн.</span></div>


                                    <div class="text-block text-center">
                                        <?php echo single_rating($item, 'disabled', false); ?>
                                        <a href="<?php echo $link; ?>" class="button"><?php _e('Book now', 'travel'); ?></a>
                                    </div>
                                </div>
                            </article>
                            <?php  } ?>
                            <?php  } ?>
                        </div>
                        <?php if (!$button_ajax_post_hide && count($catalog_sanatorium) > 9) { ?>
                        <div class="text-center">
                            <span id="true_loadmore_sanatorium" class="true_loadmore_button button empty"><?php _e('More', 'travel'); ?></span>
                        </div>
                        <?php } ?>
                        <div class="empty-lg-30"></div>
                    </div>

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


                    <?php } ?>


                </div>
                <div class="empty-lg-0 empty-sm-0 empty-xs-30"></div>
                <?php get_sidebar('mobile'); ?>
        </main>
    </div>
</div>


<?php get_footer();
