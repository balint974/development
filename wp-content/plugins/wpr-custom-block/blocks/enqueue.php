<?php
function wpr_enqueue_block_editor_assets() {
	wp_register_script(
		'wpr_blocks_bundle',
		plugins_url( 'blocks/dist/bundle.js', WPR_GUT_BLOCKS_PLUGIN_URL ),
		array( 'wp-i18n', 'wp-element', 'wp-blocks', 'wp-components', 'wp-editor', 'wp-api', 'wp-data', 'jquery', 'wp-block-editor' ),
		filemtime( plugin_dir_path( WPR_GUT_BLOCKS_PLUGIN_URL ) . '/blocks/dist/bundle.js' )
	);
	wp_enqueue_script( 'wpr_blocks_bundle' );
	wp_localize_script(
		'wpr_blocks_bundle',
		'gut_block_data',
		array(
			'site_url'       => get_site_url(),
			'wpr_post_types' => get_post_types( array( 'public' => true ) ),
		)
	);
}

function wpr_enqueue_block_assets() {
	wp_register_style(
		'wpr_blocks_style',
		plugins_url( 'blocks/dist/blocks-main.css', WPR_GUT_BLOCKS_PLUGIN_URL )
	);
	wp_enqueue_style( 'wpr_blocks_style' );
}


function custom_block_style() {
	wp_register_script(
		'wpr_blocks_responsive',
		plugins_url( 'blocks/includes/responsive.js', WPR_GUT_BLOCKS_PLUGIN_URL ),
		array( 'jquery' ),
		filemtime( plugin_dir_path( WPR_GUT_BLOCKS_PLUGIN_URL ) . '/blocks/includes/responsive.js' ),
		true
	);
	wp_enqueue_script( 'wpr_blocks_responsive' );
}
