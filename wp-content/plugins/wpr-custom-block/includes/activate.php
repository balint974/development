<?php

function wpr_activate_plugin() {
	// check for WordPress version
	if ( version_compare( get_bloginfo( 'version' ), '5.0', '<' ) ) {
		wp_die( __( 'You must update WordPress to use this plugin', 'wpr-blocks' ) );
	}
}
