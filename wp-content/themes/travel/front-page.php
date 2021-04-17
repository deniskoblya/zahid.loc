<?php if (!defined('ABSPATH')) exit;
get_header();

$satanorium_list_title = get_field('satanorium_list_title');
if ($satanorium_list_title) { ?>
	<div class="home-title">
		<h1 class="h1"><?php echo esc_html($satanorium_list_title); ?></h1>
	</div>
<?php } ?>
<div class="empty-lg-40 empty-xs-30"></div>
<div class="container">
	<div class="row">
		<aside class="col-md-3 col-sm-4 col-xs-12"><?php get_sidebar(); ?></aside>
		<main class="col-md-9 col-sm-8 col-xs-12">
			<?php
			$sanatorium_list = get_field('sanatorium_list');
			if ($sanatorium_list) { ?>
				<section>
					<div class="row">
						<?php foreach ($sanatorium_list as $sanatorium) { ?>
							<article class="col-lg-4 col-xs-6">
								<div class="sanatorium-item">
									<div class="img-box" style="background-image: url(<?php echo get_the_post_thumbnail_url($sanatorium); ?>);"></div>
									<h5 class="text-block">
										<a href="<?php echo get_permalink($sanatorium); ?>" class="h5 light"><?php echo get_the_title($sanatorium); ?></a>
									</h5>
									<a href="<?php echo get_permalink($sanatorium); ?>" class="full-size"></a>
								</div>
							</article>
						<?php } ?>
					</div>
					<div class="empty-lg-40 empty-xs-0"></div>
				</section>
			<?php } ?>
			<hr>
			<?php
			$spec_list = get_field('spec_list');
			if ($spec_list) {
				$spec_title = get_field('spec_title');
				$list_size = count($spec_list); ?>
				<section>
					<div class="text-center">
						<div class="empty-lg-30 empty-xs-15"></div>
						<h4 class="h2"><?php echo esc_html($spec_title); ?></h4>
						<div class="empty-lg-30 empty-xs-15"></div>
					</div>
					<div class="swiper-container proposal-slider" data-space-between="30" data-slides-per-view="3" data-breakpoints="1" data-md-slides="2" data-sm-slides="2" data-xs-slides="2" data-autoplay="4000" data-loop="1">
						<div class="swiper-wrapper">
							<div class="swiper-slide">
								<?php
									$i = 1;
									foreach ($spec_list as $item) {
										if (!empty($item['object'])) { ?>
										<article class="proposal-item">
											<div class="overflow-hidden">
												<div class="img-box" style="background-image: url(<?php echo get_the_post_thumbnail_url($item['object']); ?>);"></div>
												<?php echo (!empty($item['discount']) ? '<span>' . $item['discount'] . '</span>' : ''); ?>
											</div>
											<div class="text-block">
												<a href="<?php echo get_permalink($item['object']); ?>" class="h5"><?php echo get_the_title($item['object']); ?></a>
											</div>
											<a href="<?php echo get_permalink($item['object']); ?>" class="full-size"></a>
										</article>
								<?php
											echo ($i % 2 == 0 && $i != $list_size ? '</div><div class="swiper-slide">' : '');
											$i++;
										}
									}
									?>
							</div>
						</div>
						<div class="empty-lg-40 empty-xs-15"></div>
						<div class="swiper-pagination hidden-xs"></div>
					</div>
					<div class="empty-lg-30 empty-xs-0"></div>
				</section>
			<?php } ?>

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
			<section>
				<div class="empty-lg-50 empty-xs-30"></div>
				<?php get_template_part('template-parts/tabs'); ?>
				<div class="empty-lg-0 empty-sm-0 empty-xs-30"></div>
			</section>
			<?php get_sidebar('mobile'); ?>
		</main>
	</div>
</div>

<?php get_footer();
