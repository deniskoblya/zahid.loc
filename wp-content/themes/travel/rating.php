<?php
add_action('wp_ajax_vote_rating','travel_vote_rating');
add_action('wp_ajax_nopriv_vote_rating','travel_vote_rating');
function travel_vote_rating(){
    if( isset($_POST['num']) && isset($_POST['id']) && is_numeric($_POST['id']) ){
        $id  = $_POST['id'];
        $num = $_POST['num'];
        if( !isset($_COOKIE["vote-post-".$id]) ){
            wp__set_data('vote-total', $id, (int)wp__get_data('vote-total',$id) + 1);
            wp__set_data('vote-rating', $id, (int)wp__get_data('vote-rating',$id) + $num);

            $total = wp__get_data('vote-total',$id);
            $rating = wp__get_data('vote-rating',$id);
            
            if( $total == 0 ) $total = 1;
            
            $resp = array('total' => $total);

            $pr  = ($rating/($total*5))*100;
            $abs = round($rating/$total, 1);
            $npr = round($pr, 0);

            $resp['pr'] = $pr;
            $resp['abs'] = $abs;
            $resp['npr'] = $npr;
            $resp['text'] = sprintf(_n('%s vote','%s votes',$total,'travel'),$total);

            wp_send_json($resp);
        } else {
            echo 'limit';
        }
    }
    die();
}


function rating( $voted = true ){
    if( $voted )
        $disable_class = ( isset( $_COOKIE["vote-post-". get_the_ID()] ) ? ' disabled' : '' );
    else
        $disable_class = ' disabled';

    $total = wp__get_data('vote-total',get_the_ID());
    $rating = wp__get_data('vote-rating',get_the_ID());

    $total_text = _n( '%s vote', '%s votes', $total, 'travel' );
    $total_rec  = $total;
    if( $total == 0 )
        $total = 1;

    $pr  = ($rating/($total*5))*100;
    $abs = round($rating/$total, 1);
    $npr = round($pr, 0);
    if( $pr != 0 )
        $yellow = 'yellow';
    else
        $yellow = '';

    $star_count = $pr/20;
    $star_count = ceil($star_count);

 $ratingHTML = '<div class="ratings with-bg vote-block extra_blabla '.$disable_class.'" data-id="'. get_the_ID() .'" data-total="'. $total_rec .'" data-rating="'. $rating .'">
        <div class="rating show-current stars star gray">
            <span href="#1" class="'.($star_count > 1 ? 'orange rated' : '').' '.($star_count == 1 ? 'active' : '').'">1</span>
            <span href="#2"  class="'.($star_count > 2 ? 'orange rated' : '').' '.($star_count == 2 ? 'active' : '').'">2</span>
            <span href="#3" class="'.($star_count > 3 ? 'orange rated' : '').' '.($star_count == 3 ? 'active' : '').'">3</span>
            <span href="#4" class="'.($star_count > 4 ? 'orange rated' : '').' '.($star_count == 4 ? 'active' : '').'">4</span>
            <span href="#5" class="'.($star_count > 5 ? 'orange rated' : '').' '.($star_count == 5 ? 'active' : '').'">5</span>
        </div>
        
    </div>';

    return array( 'html' => $ratingHTML, 'count' => $total, 'value' => $abs );
}

function sklonen($n,$s1,$s2,$s3, $b = false){
    $m = $n % 10; $j = $n % 100;
    if( $b )
        $n = $n;
    if( $m == 0 || $m >= 5 || ( $j >= 10 && $j <= 20 ) )
        return $s3;
    if( $m >= 2 && $m <= 4 )
        return $s2;

    return $s1;
}

function wp__set_data($name, $postID, $value){
    $count_key = $name;
    $count = get_post_meta($postID, $count_key, true);
    if( $count == '' ){
        $count = 0;
        delete_post_meta($postID, $count_key);
        add_post_meta($postID, $count_key, '0');
    } else {
        update_post_meta($postID, $count_key, $value);
    }
}

function wp__get_data($name, $postID){
    $count_key = $name;
    $count = get_post_meta($postID, $count_key, true);
    if( $count == '' ){
        delete_post_meta($postID, $count_key);
        add_post_meta($postID, $count_key, '0');
        return "0";
    }
    return $count.'';
}