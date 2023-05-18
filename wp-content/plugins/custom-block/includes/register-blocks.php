<?php

function cb_register_blocks(){
    register_block_type(
        GUTENBERG_CUSTOM_BLOCKS. '\build\block.json'
    );
}