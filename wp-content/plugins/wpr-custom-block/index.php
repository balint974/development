<?php
/*
 * Plugin Name: WPRiders Gutenberg Blocks New
 * Description: WPRiders custom gutenberg blocks
 * Version: 1.1
 * Author: WPRiders
 * Author URI: https://wpriders.com
 * Text Domain: wpriders
 */

if ( ! function_exists( 'add_action' ) ) {
	echo "Can't access directly!";
	exit;
}

// Setup
define( 'WPR_GUT_BLOCKS_PLUGIN_URL', __FILE__ );

// Includes
include( 'includes/activate.php' );
include( 'blocks/enqueue.php' );

// Hooks
register_activation_hook( __FILE__, 'wpr_activate_plugin' );
add_action( 'enqueue_block_editor_assets', 'wpr_enqueue_block_editor_assets' );
add_action( 'enqueue_block_assets', 'wpr_enqueue_block_assets' );
add_action( 'init', 'custom_block_style' );

// Shortcodes
