<?php
/**
 * The template for displaying comments
 */

if( post_password_required() ){
	return;
}
$comments = get_comments(array('post_id' => $post->ID, 'status' => 'approve'));
if($comments){
	$comments_title = get_field('comments_title', 'option');
	if($comments_title){ ?>
		<div id="reviews" class="text-center">
			<h3 class="h2"><?php echo esc_html($comments_title); ?></h3>
		</div>
		<div class="empty-lg-20 empty-xs-15"></div>
	<?php }
	echo '<div>';
	foreach($comments as $key => $comment) { ?>
		<div class="review white-box">
			<div>
				<span class="h5"><?php echo $comment->comment_author; ?></span>
				<span class="h5"><?php echo date('d.m.Y', strtotime($comment->comment_date)); ?></span>
			</div>
			<div class="simple-text">
				<p><?php echo $comment->comment_content; ?></p>
			</div>
		</div>
	<?php }
	echo '</div>';
}
$comment_form = get_field('comment_form', 'option');
$title_comment_form = get_field('title_comment_form', 'option');
if ($comment_form){?>
	<div class="row">
		<div class="col-lg-10 col-lg-offset-1 col-xs-12">
			<div class="empty-lg-20 empty-xs-15"></div>
			<?php if ($title_comment_form){ ?>
				<div class="text-center">
					<p class="h3"><?php echo esc_html($title_comment_form); ?></p>
				</div>
			<?php } ?>
			<div class="empty-lg-20 empty-xs-15"></div>	
			<?php travel_the_form($comment_form,'form text-center comment-form'); ?>
		</div>
	</div>
<?php } ?>
<input type="hidden" id="POST_ID" value="<?php echo $post->ID; ?>">