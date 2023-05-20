import {registerBlockType} from '@wordpress/blocks'
import {
    RichText, useBlockProps, InspectorControls
} from '@wordpress/block-editor'
import {
    PanelBody, ColorPalette
} from '@wordpress/components'
import {__} from '@wordpress/i18n'
import block from './block.json'
import './main.css'

registerBlockType(block.name, {

    edit({attributes, setAttributes}) {
        const {content, underline_color} = attributes;
        const blockProps = useBlockProps();

        return (
            <>
                <InspectorControls>
                    <PanelBody title={__('Colors', 'custom-blocks')}>
                        <ColorPalette
                            value={underline_color}
                            onChange={(color) => setAttributes({underline_color: color})}
                        />
                    </PanelBody>
                </InspectorControls>
                <div {...blockProps}>
                    <RichText
                        className="fancy-header"
                        tagName="h2"
                        placeholder={__('Enter heading', 'custom-blocks')}
                        value={content}
                        onChange={(newVal) => setAttributes({content: newVal})}
                        allowedFormats={['core/bold', 'core/italic']}
                    />
                </div>
            </>
        )
    }, save({attributes}) {
        const {content, underline_color} = attributes;
        const blockProps = useBlockProps.save({
            className: 'fancy-header',
            style:{
                'background-image' : `
                    linear-gradient(transparent,transparent),
                    linear-gradient(${underline_color},${underline_color});
                `
            }
        });

        return (<RichText.Content
            {...blockProps}
            tagName="h2"
            value={content}
        />)
    }
})
