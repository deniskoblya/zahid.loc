<?php if(!defined('ABSPATH')) exit;

//Validate gravatar by email or id
function travel_schema_validate_gravatar($email){
	$hashkey = md5(strtolower(trim($email)));
	$uri = 'http://www.gravatar.com/avatar/' . $hashkey;
	$data = get_transient($hashkey);
	
	if(false === $data){
		$response = wp_remote_head($uri);
		if(is_wp_error($response)){
			$data = 'not200';
		} else {
			$data = $response['response']['code'];
		}
	    set_transient($hashkey,$data,60*5);
	}
	return ($data == '200' ? true : false);
}

//Get description 
function travel_schema_get_description($post_id = null){
	global $post;
	if(!isset($post_id)) $post_id = $post->ID;
	
	//Get post content
	$content_post = get_post($post_id);
	
	//Strip shortcodes and tags
	$full_content = preg_replace('#\[[^\]]+\]#', '', $content_post->post_content);
	$full_content = wp_strip_all_tags( $full_content );
	$short_content = wp_trim_words( $full_content, 49, '' ); 
	
	//Use excerpt if presnet, or use short_content
	return ($content_post->post_excerpt != '' ? $content_post->post_excerpt : $short_content);
}

//Get author array
function travel_schema_get_author_array( $post_id = null ){
	global $post;
	if(!isset($post_id)) $post_id = $post->ID;

	//Get author from post content
	$content_post = get_post($post_id);
	$post_author = get_userdata($content_post->post_author);
	$email = $post_author->user_email; 
	
	$author = array(
		'@type'	=> 'Person',
		'name' => $post_author->display_name,
		'url' => esc_url( get_author_posts_url( $post_author->ID ) )
	);
	
	if( get_the_author_meta( 'description', $post_author->ID ) ){
		$author['description'] = strip_tags( get_the_author_meta( 'description', $post_author->ID ) );
	}
	
	if(travel_schema_validate_gravatar($email)){
		$args = array('size' => 96);
		$image_url	= get_avatar_url($email,$args);
		if($image_url){
			$author['image'] = array(
				'@type'	=> 'ImageObject',
				'url' => $image_url,
				'height' => 96, 
				'width' => 96
			);
		}
	}
	return $author;
}

//Get publisher array
function travel_schema_get_publisher(){
	$publisher = array(
		"@type"	=> "Organization",
		"@id" => travel_schema_get_home_url()."#organization",
		"name"	=> wp_filter_nohtml_kses(get_bloginfo('name'))
	);
	
	$logo = get_field('logo_option','options');
	if(!empty($logo['url'])){
		$publisher["logo"] = array(
    		"@type" => "ImageObject",
    		"url" => esc_attr( stripslashes( $logo['url'] ) ),
    		"width" => 600,
			"height" => 60
		);
	}

	return $publisher;
}

//Retrieves the home URL
function travel_schema_get_home_url( $path = '', $scheme = null ){
	$home_url = home_url($path,$scheme);
	if(!empty($path)){
		return $home_url;
	}

	$home_path = wp_parse_url($home_url,PHP_URL_PATH);
	if('/' === $home_path){
		return $home_url;
	}

	if(is_null($home_path)){
		return trailingslashit($home_url);
	}

	if(is_string($home_path)){
		return user_trailingslashit($home_url);
	}
	return $home_url;
}

//Get an array of enabled post types
function travel_schema_get_media( $post_id = null){
	global $post;
	if(!isset($post_id)) $post_id = $post->ID;
	
	$media = array();
	
	//Featured image
	$image_attributes = wp_get_attachment_image_src( get_post_thumbnail_id($post_id), 'full' );
	$image_url = $image_attributes[0];
	$image_width = ( $image_attributes[1] > 696 ) ? $image_attributes[1] : 696;
	$image_height = $image_attributes[2];
	
	if(!isset($image_url) || $image_url == ''){
		if(extension_loaded('xml') || extension_loaded('SimpleXML')){
			if($post->post_content){
				$Document = new DOMDocument();
				libxml_use_internal_errors(true);
				@$Document->loadHTML( $post->post_content );
				libxml_clear_errors();
				$DocumentImages = $Document->getElementsByTagName( 'img' );
				if($DocumentImages->length){
					$image_url = $DocumentImages->item( 0 )->getAttribute( 'src' );
					$image_width = ( $DocumentImages->item( 0 )->getAttribute( 'width' ) > 696 ) ? $DocumentImages->item( 0 )->getAttribute( 'width' ) : 696;
					$image_height = $DocumentImages->item( 0 )->getAttribute( 'height' );
				}
			}
		}
	}	
	
	if(!isset($image_url) || $image_url == '') return $media;
	if(!isset($image_width) || $image_width == '') return $media;
	if(!isset($image_height) || $image_height == '') return $media;
	
	$media = array(
		'@type' => 'ImageObject',
		'url' => $image_url,
		'width' => $image_width,
		'height' => $image_height,
	);
	return $media;
}

//Get post tags separate by commas, to be used as schema keywords for BlogPosting
function travel_schema_get_post_tags( $post_id = null ){
	global $post;
	if(!isset($post_id)) $post_id = $post->ID;
	
	$tags = '';
	$posttags = get_the_tags();
    if ($posttags) {
		$taglist = "";
		foreach($posttags as $tag) {
			$taglist .=  $tag->name . ', '; 
		}
		$tags =  rtrim($taglist, ", ");
	}
	return $tags;
}

//Get comments   
function travel_schema_get_comments( $post_id = null ){
	global $post;
	if(!isset($post_id)) $post_id = $post->ID;

	$comment_count = get_comments_number( $post->ID );
	if( $comment_count < 1 ){
		return array();
	}

	$comments = array();
	$post_comments = get_comments( array( 'post_id' => $post->ID, 'number' => 10, 'status' => 'approve', 'type' => 'comment' ) );
	if(count($post_comments)){
		foreach($post_comments as $item){
			$comments[] = array(
				'@type' => 'Comment',
				'dateCreated' => $item->comment_date,
				'description' => $item->comment_content,
				'author' => array (
					'@type' => 'Person',
					'name' => $item->comment_author,
					'url' => $item->comment_author_url,
				),
			);
		}
	}
	return $comments;
}

//Schema Blog Post
function travel_schema_blog_post( $post_id = null, $type = 'BlogPosting' ){
	global $post;
	if(!isset($post_id)) $post_id = $post->ID;

	$schema = array(
		'@type' => $type,
		'headline' => wp_filter_nohtml_kses( get_the_title() ),
		'description' => travel_schema_get_description(),
		'url' => get_the_permalink(),
		'datePublished' => get_the_date('c'),
		'dateModified' => get_the_modified_date('c'),
		'mainEntityOfPage' => get_the_permalink(),
		'author' => travel_schema_get_author_array(),
		'publisher' => travel_schema_get_publisher(),
		'image' => travel_schema_get_media(),
		'keywords' => travel_schema_get_post_tags(),
		'commentCount' => get_comments_number(),
		'comment' => travel_schema_get_comments(),
    );
	return $schema;
}

//Schema Aggregate Rating
function travel_schema_aggregate_rating($post_id = null){
	global $post;
	if(!isset($post_id)) $post_id = $post->ID;

    $address = get_field('address',$post_id);

	$total = (int)get_post_meta($post_id, 'vote-total', true);
    $rating = (int)get_post_meta($post_id, 'vote-rating', true);

    if(!$total) $total = 0;
    if(!$rating) $rating = 0;

    if(!empty($total)) $rating = round($rating/$total, 1);

	$schema = array(
		'@context' => 'http://schema.org/',
        "@type" => "Review-aggregate",
        'itemReviewed' => get_the_title($post_id),
        'count' => $total,
        "rating" => array(
            "@type" => "Rating",
            "best" => 5,
            "average" => $rating
		),
    );
	if($schema){
		echo '<script type="application/ld+json">'.json_encode($schema,JSON_UNESCAPED_UNICODE).'</script>';
	}
}

//Schema Website
function travel_schema_website(){
	$schema = array(
		'@context' => 'http://schema.org/',
		'@type' => 'WebSite',
		'@id' => '#website',
		'name'	=> wp_filter_nohtml_kses(get_bloginfo('name')),
		'alternateName'	=> wp_filter_nohtml_kses(get_bloginfo('name')),
		'url' => get_home_url().'/',
		'potentialAction' => array(
			'@type' => 'SearchAction',
			'target' => get_home_url().'/?s={search_term_string}',
			'query-input' => 'required name=search_term_string',
		)
    );
    return $schema;
}

//Schema Hotel
function travel_schema_get_hotel($post_id = null){
	global $post;
	if(!isset($post_id)) $post_id = $post->ID;

	$price = get_field('price',$post_id);
	$address = get_field('address',$post_id);

	//rating
	$total = (int)get_post_meta($post_id, 'vote-total', true);
    $rating = (int)get_post_meta($post_id, 'vote-rating', true);

    if(!$total) $total = 0;
    if(!$rating) $rating = 0;

    if(!empty($total)) $rating = round($rating/$total, 1);

    //phones
    $telephone = array();
    $phones = get_field('reservation_phones','option');
    if($phones){
    	foreach($phones as $phone){
    		if(!empty($phone['phone_number']) && isset($phone['operator']) && $phone['operator'] != 5 && $phone['operator'] != 6) $telephone[] = $phone['phone_number'];
    	}
    }

	$schema = array(
		'@context' => 'http://schema.org',
		'@type' => 'Hotel',
		'url' => get_the_permalink($post_id),
		'name' => get_the_title($post_id),
		'image' => get_the_post_thumbnail_url($post_id,'full'),
		'photo' => get_the_post_thumbnail_url($post_id,'full'),
		'priceRange' => ($price ? $price : ''),
		'hasMap' => '',
		'telephone' => $telephone,
		'address' => array(
			'@type' => 'PostalAddress',
			'addressLocality' => ($address ? $address : ''),
			'addressRegion' => __('Carpathians','travel'),
			'streetAddress' => ($address ? $address : ''),
			'addressCountry' => __('Ukraine','travel')
		),
		'aggregateRating' => array(
			'@type' => 'AggregateRating',
			'name' => get_the_title($post_id),
			'ratingValue' => $rating,
			'ratingCount' => $total,
			'bestRating' => 5,
			'worstRating' => 1,
			'itemReviewed' => array(
				'name' => sprintf(__('%s ratings, average: %s out of 5','travel'),$total,$rating)
			)
		)
	);
	return $schema;
}

//Schema Hotel
function travel_schema_get_question($post_id = null){
	global $post;
	if(!isset($post_id)) $post_id = $post->ID;

	$faq_hide = get_field('faq_hide',$post_id);
	$faq_page = $questions = array();
	if(!$faq_hide){
		$faq = get_field('faq',$post_id);
		if(!empty($faq['content'])){
			foreach($faq['content'] as $question){
				if(!empty($question['title']) && !empty($question['content'])){
					$questions[] = array(
						'@type' => 'Question',
      					'name' => strip_tags($question['title']),
      					'acceptedAnswer' => array(
      						'@type' => 'Answer',
    						'text' => strip_tags($question['content'],'<ul><li>'),
      					)
					);
				}
			}
		}
	}
	if($questions){
		$faq_page = array(
			'@context' => 'https://schema.org',
			'@type' => 'FAQPage',
			'mainEntity' => $questions
		);
	}
	return $faq_page;
}

//Schema News Article
function travel_schema_get_news_article($post_id = null){
	global $post;
	if(!isset($post_id)) $post_id = $post->ID;

	$schema = array(
		'@context' => 'http://schema.org/',
		'@type' => 'NewsArticle',
		'headline' => wp_filter_nohtml_kses(get_the_title($post_id)),
		'description' => travel_schema_get_description($post_id),
		'url' => get_the_permalink($post_id),
		'datePublished' => get_the_date('c',$post_id),
		'dateModified' => get_the_modified_date('c',$post_id),
		'mainEntityOfPage' => get_the_permalink($post_id),
		'author' => travel_schema_get_author_array($post_id),
		'publisher' => travel_schema_get_publisher(),
		'image' => travel_schema_get_media($post_id),
	);
	if($schema){
		echo '<script type="application/ld+json">'.json_encode($schema,JSON_UNESCAPED_UNICODE).'</script>';
	}
}

//Schema
function travel_schema(){
	$website = travel_schema_website();
	if($website){
		echo '<script type="application/ld+json">'.json_encode($website,JSON_UNESCAPED_UNICODE).'</script>';
	}
	if(is_singular('room')){
		$hotel = travel_schema_get_hotel();
		if($hotel){
			echo '<script type="application/ld+json">'.json_encode($hotel,JSON_UNESCAPED_UNICODE).'</script>';
		}
		$question = travel_schema_get_question();
		if($question){
			echo '<script type="application/ld+json">'.json_encode($question,JSON_UNESCAPED_UNICODE).'</script>';
		}
	}
}
add_action('wp_footer','travel_schema');