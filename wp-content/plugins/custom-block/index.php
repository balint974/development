<?php
/*
 * Plugin Name: Custom Gutenberg Block
 * Description: Custom Gutenberg blocks
 * Version: 1.0
 * Author: Balint Gabriel
 */

if ( ! function_exists( 'add_action' ) ) {
    echo "Can't access directly!";
    exit;
}

// Setup
define( 'GUTENBERG_CUSTOM_BLOCKS', dirname(__FILE__) );

// Includes
include('includes/register-blocks.php');

// Hooks
add_action('init','cb_register_blocks');