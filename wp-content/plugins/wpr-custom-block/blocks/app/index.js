import "./style.scss"; //import style
import GridBlockAttributes from "../includes/attributes";
import PostsList from "../components/PostsList"; //import my custom component

const { registerBlockType } = wp.blocks; //use to register gutenberg block
const { __ } = wp.i18n; //use for string translations

registerBlockType("wpriders/grid-posts", {
	title: __("Post Grid", "wpr-blocks"),
	description: __("Responsive posts grid layout.", "wpr-blocks"),
	category: "common",
	icon: "grid-view",
	supports: {
		html: false,
	},
	keywords: [
		__("Grid", "wpr-blocks"),
		__("Post", "wpr-blocks"),
		__("Image", "wpr-blocks"),
	],
	attributes: GridBlockAttributes,
	edit: PostsList,
	save: (props) => {
		function linkCheck(link, img, title) {
			if (link) {
				return (
					<a href={link}>
						<div
							className="wpr-post-container"
							style={{
								backgroundImage: `url(${img})`,
							}}
						>
							<h4 className="wpr-post-title">{title}</h4>
						</div>
					</a>
				);
			} else {
				return (
					<div
						className="wpr-post-container"
						style={{
							backgroundImage: `url(${img})`,
						}}
					>
						<h4 className="wpr-post-title">{title}</h4>
					</div>
				);
			}
		}

		//CHECK FOR POSTS
		if (
			props.attributes.post_title ||
			props.attributes.post_title_1 ||
			props.attributes.post_title_2 ||
			props.attributes.post_title_3 ||
			props.attributes.post_title_4 ||
			props.attributes.post_title_5 ||
			props.attributes.post_title_6 ||
			props.attributes.post_title_7 ||
			props.attributes.post_title_8
		)
			return (
				<div className={`align${props.attributes.block_alignment}`}>
					<div className="wpr-grid-post wpr-grid-main-post">
						{linkCheck(
							props.attributes.post_link,
							props.attributes.feat_img,
							props.attributes.post_title
						)}
					</div>
					<div className="wpr-grid-post wpr-grid-post-1">
						{linkCheck(
							props.attributes.post_link_1,
							props.attributes.feat_img_1,
							props.attributes.post_title_1
						)}
					</div>
					<div className="wpr-grid-post wpr-grid-post-2">
						{linkCheck(
							props.attributes.post_link_2,
							props.attributes.feat_img_2,
							props.attributes.post_title_2
						)}
					</div>
					<div className="wpr-grid-post wpr-grid-post-3">
						{linkCheck(
							props.attributes.post_link_3,
							props.attributes.feat_img_3,
							props.attributes.post_title_3
						)}
					</div>
					<div className="wpr-grid-post wpr-grid-post-4">
						{linkCheck(
							props.attributes.post_link_4,
							props.attributes.feat_img_4,
							props.attributes.post_title_4
						)}
					</div>
					<div className="wpr-grid-post wpr-grid-post-5">
						{linkCheck(
							props.attributes.post_link_5,
							props.attributes.feat_img_5,
							props.attributes.post_title_5
						)}
					</div>
					<div className="wpr-grid-post wpr-grid-post-6">
						{linkCheck(
							props.attributes.post_link_6,
							props.attributes.feat_img_6,
							props.attributes.post_title_6
						)}
					</div>
					<div className="wpr-grid-post wpr-grid-post-7">
						{linkCheck(
							props.attributes.post_link_7,
							props.attributes.feat_img_7,
							props.attributes.post_title_7
						)}
					</div>
					<div className="wpr-grid-post wpr-grid-post-8">
						{linkCheck(
							props.attributes.post_link_8,
							props.attributes.feat_img_8,
							props.attributes.post_title_8
						)}
					</div>
				</div>
			);
		else return null;
	},
});
