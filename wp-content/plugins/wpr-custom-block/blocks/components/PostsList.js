const { __ } = wp.i18n;
const { BlockAlignmentToolbar, InspectorControls, BlockControls } = wp.editor;
const { TabPanel, SelectControl } = wp.components;
const { Component } = wp.element;

class PostsList extends Component {
	//initiate component
	static getInitialState(selectedPost) {
		return {
			posts: [], //storing all posts of a certain type
			selectedPost: selectedPost, //selected post ids
			post: [{}, {}, {}, {}, {}, {}, {}, {}, {}], //selected posts data
		};
	}

	constructor() {
		super(...arguments); //accept unlimited arguments

		const {
			feat_img,
			feat_img_1,
			feat_img_2,
			feat_img_3,
			feat_img_4,
			feat_img_5,
			feat_img_6,
			feat_img_7,
			feat_img_8,
			post_title,
			post_title_1,
			post_title_2,
			post_title_3,
			post_title_4,
			post_title_5,
			post_title_6,
			post_title_7,
			post_title_8,
			post_link,
			post_link_1,
			post_link_2,
			post_link_3,
			post_link_4,
			post_link_5,
			post_link_6,
			post_link_7,
			post_link_8,
		} = this.props.attributes;

		//set default values
		this.Post = ["", "", "", "", "", "", "", "", ""];
		this.postIds = this.props.attributes.post_ids;
		this.postTitles = [
			post_title,
			post_title_1,
			post_title_2,
			post_title_3,
			post_title_4,
			post_title_5,
			post_title_6,
			post_title_7,
			post_title_8,
		];
		this.postLinks = [
			post_link,
			post_link_1,
			post_link_2,
			post_link_3,
			post_link_4,
			post_link_5,
			post_link_6,
			post_link_7,
			post_link_8,
		];
		this.postFeaturedImg = [
			feat_img,
			feat_img_1,
			feat_img_2,
			feat_img_3,
			feat_img_4,
			feat_img_5,
			feat_img_6,
			feat_img_7,
			feat_img_8,
		];
		this.postType = this.props.attributes.post_type;
		this.postTypes = gut_block_data.wpr_post_types;
		// this.props.setAttributes({ post_ids: 15 });

		this.state = this.constructor.getInitialState(this.postIds);
		this.getOptions = this.getOptions.bind(this);
		this.getOptions();

		this.onChangeSelectPost = this.onChangeSelectPost.bind(this);
		this.onChangeSelectType = this.onChangeSelectType.bind(this);
	}

	onChangeSelectType = (val) => {
		this.postType = val;
		this.postIds = [0, 0, 0, 0, 0, 0, 0, 0, 0];
		this.postTitles = ["", "", "", "", "", "", "", "", ""];
		this.postLinks = ["", "", "", "", "", "", "", "", ""];
		this.postFeaturedImg = ["", "", "", "", "", "", "", "", ""];
		this.Post = ["", "", "", "", "", "", "", "", ""];
		this.setState({ selectedPost: this.postIds, post: this.Post });
		this.props.setAttributes({
			post_type: this.postType,
			post_titles: this.postTitles,
			post_link: this.postLinks[0],
			post_link_1: this.postLinks[1],
			post_link_2: this.postLinks[2],
			post_link_3: this.postLinks[3],
			post_link_4: this.postLinks[4],
			post_link_5: this.postLinks[5],
			post_link_6: this.postLinks[6],
			post_link_7: this.postLinks[7],
			post_link_8: this.postLinks[8],
			post_title: this.postTitles[0],
			post_title_1: this.postTitles[1],
			post_title_2: this.postTitles[2],
			post_title_3: this.postTitles[3],
			post_title_4: this.postTitles[4],
			post_title_5: this.postTitles[5],
			post_title_6: this.postTitles[6],
			post_title_7: this.postTitles[7],
			post_title_8: this.postTitles[8],
			feat_img: this.postFeaturedImg[0],
			feat_img_1: this.postFeaturedImg[1],
			feat_img_2: this.postFeaturedImg[2],
			feat_img_3: this.postFeaturedImg[3],
			feat_img_4: this.postFeaturedImg[4],
			feat_img_5: this.postFeaturedImg[5],
			feat_img_6: this.postFeaturedImg[6],
			feat_img_7: this.postFeaturedImg[7],
			feat_img_8: this.postFeaturedImg[8],
		});
		this.getOptions();
		// console.log(this.state.posts);
	};

	onChangeSelectPost = (index) => (val) => {
		const post = this.state.posts.find((item) => {
			return item.id == parseInt(val);
		});
		if (0 === parseInt(val)) {
			this.postIds[index] = parseInt(val);
			this.postTitles[index] = "";
			this.postLinks[index] = "";
			this.postFeaturedImg[index] = "";
			this.Post[index] = "";
			this.setState({ selectedPost: this.postIds, post: this.Post });
		} else {
			this.postIds[index] = parseInt(val);
			this.postTitles[index] = post.title.rendered;
			this.postLinks[index] = post.link;
			this.postFeaturedImg[index] = post.featured_image_src;
			this.Post[index] = post;
			this.setState({ selectedPost: this.postIds, post: this.Post });
		}

		this.props.setAttributes({
			post_ids: this.postIds,
			post_titles: this.postTitles,
			post_link: this.postLinks[0],
			post_link_1: this.postLinks[1],
			post_link_2: this.postLinks[2],
			post_link_3: this.postLinks[3],
			post_link_4: this.postLinks[4],
			post_link_5: this.postLinks[5],
			post_link_6: this.postLinks[6],
			post_link_7: this.postLinks[7],
			post_link_8: this.postLinks[8],
			post_title: this.postTitles[0],
			post_title_1: this.postTitles[1],
			post_title_2: this.postTitles[2],
			post_title_3: this.postTitles[3],
			post_title_4: this.postTitles[4],
			post_title_5: this.postTitles[5],
			post_title_6: this.postTitles[6],
			post_title_7: this.postTitles[7],
			post_title_8: this.postTitles[8],
			feat_img: this.postFeaturedImg[0],
			feat_img_1: this.postFeaturedImg[1],
			feat_img_2: this.postFeaturedImg[2],
			feat_img_3: this.postFeaturedImg[3],
			feat_img_4: this.postFeaturedImg[4],
			feat_img_5: this.postFeaturedImg[5],
			feat_img_6: this.postFeaturedImg[6],
			feat_img_7: this.postFeaturedImg[7],
			feat_img_8: this.postFeaturedImg[8],
		});
	};

	getOptions(searchTerm = "") {
		return jQuery.getJSON(
			gut_block_data.site_url +
				"/wp-json/wp/v2/" +
				this.postType +
				"?per_page=30" +
				searchTerm,
			(posts) => {
				let have_posts = false;
				this.state.selectedPost.forEach((id) => {
					if (0 !== id) {
						have_posts = true;
					}
				});

				if (posts && have_posts) {
					this.state.selectedPost.forEach((id, i) => {
						const post = posts.find((item) => {
							return item.id == this.state.selectedPost[i];
						});

						this.Post[i] = post;
					});

					this.setState({ post: this.Post, posts });
				} else {
					this.setState({ posts });
				}
			}
		);
	}

	render() {
		let type_options = [];
		for (const key in this.postTypes) {
			if (key === "post") type_options.push({ value: "posts", label: "posts" });
			else if ("page" !== key && "attachment" !== key)
				type_options.push({ value: key, label: key });
		}

		let options = [{ value: 0, label: __("Select a Post", "wpr-blocks") }];
		let output = __("Loading Posts", "wpr-blocks");
		this.props.className += " loading";
		if (this.state.posts.length > 0) {
			const loading = __("We have %d posts", "wpr-blocks");
			this.state.posts.forEach((post) => {
				options.push({ value: post.id, label: post.title.rendered });
			});
		} else {
			output = __("No posts found", "wpr-blocks");
		}

		// Check if we have anything in object

		let have_posts = false;
		this.state.post.forEach((mypost) => {
			if (mypost && mypost.hasOwnProperty("title") && !have_posts) {
				have_posts = true;
			}
		});

		if (have_posts) {
			output = (
				<>
					<BlockControls>
						<BlockAlignmentToolbar
							value={this.props.attributes.block_alignment}
							onChange={(new_val) => {
								this.props.setAttributes({ block_alignment: new_val });
							}}
						/>
					</BlockControls>
					<div className="wpr-grid-post block-edit wpr-grid-main-post">
						<div
							className="wpr-post-container"
							style={{
								backgroundImage: `url(${this.props.attributes.feat_img})`,
							}}
						>
							<h4 className="wpr-post-title">
								{this.state.post[0] ? this.state.post[0].title.rendered : ""}
							</h4>
						</div>
					</div>
					<div className="wpr-grid-post block-edit wpr-grid-post-1">
						<div
							className="wpr-post-container"
							style={{
								backgroundImage: `url(${this.props.attributes.feat_img_1})`,
							}}
						>
							<h4 className="wpr-post-title">
								{this.state.post[1] ? this.state.post[1].title.rendered : ""}
							</h4>
						</div>
					</div>
					<div className="wpr-grid-post block-edit wpr-grid-post-2">
						<div
							className="wpr-post-container"
							style={{
								backgroundImage: `url(${this.props.attributes.feat_img_2})`,
							}}
						>
							<h4 className="wpr-post-title">
								{this.state.post[2] ? this.state.post[2].title.rendered : ""}
							</h4>
						</div>
					</div>
					<div className="wpr-grid-post block-edit wpr-grid-post-3">
						<div
							className="wpr-post-container"
							style={{
								backgroundImage: `url(${this.props.attributes.feat_img_3})`,
							}}
						>
							<h4 className="wpr-post-title">
								{this.state.post[3] ? this.state.post[3].title.rendered : ""}
							</h4>
						</div>
					</div>
					<div className="wpr-grid-post block-edit wpr-grid-post-4">
						<div
							className="wpr-post-container"
							style={{
								backgroundImage: `url(${this.props.attributes.feat_img_4})`,
							}}
						>
							<h4 className="wpr-post-title">
								{this.state.post[4] ? this.state.post[4].title.rendered : ""}
							</h4>
						</div>
					</div>
					<div className="wpr-grid-post block-edit wpr-grid-post-5">
						<div
							className="wpr-post-container"
							style={{
								backgroundImage: `url(${this.props.attributes.feat_img_5})`,
							}}
						>
							<h4 className="wpr-post-title">
								{this.state.post[5] ? this.state.post[5].title.rendered : ""}
							</h4>
						</div>
					</div>
					<div className="wpr-grid-post block-edit wpr-grid-post-6">
						<div
							className="wpr-post-container"
							style={{
								backgroundImage: `url(${this.props.attributes.feat_img_6})`,
							}}
						>
							<h4 className="wpr-post-title">
								{this.state.post[6] ? this.state.post[6].title.rendered : ""}
							</h4>
						</div>
					</div>
					<div className="wpr-grid-post block-edit wpr-grid-post-7">
						<div
							className="wpr-post-container"
							style={{
								backgroundImage: `url(${this.props.attributes.feat_img_7})`,
							}}
						>
							<h4 className="wpr-post-title">
								{this.state.post[7] ? this.state.post[7].title.rendered : ""}
							</h4>
						</div>
					</div>
					<div className="wpr-grid-post block-edit wpr-grid-post-8">
						<div
							className="wpr-post-container"
							style={{
								backgroundImage: `url(${this.props.attributes.feat_img_8})`,
							}}
						>
							<h4 className="wpr-post-title">
								{this.state.post[8] ? this.state.post[8].title.rendered : ""}
							</h4>
						</div>
					</div>
				</>
			);
			this.props.className += " has-post";
		} else {
			this.props.className += " no-post";
		}

		return [
			!!this.props.isSelected && (
				<InspectorControls key="inspector">
					<SelectControl
						className="wpr-select-control-grid wpr-post-type-select"
						value={this.props.attributes.post_type}
						label={__("Post type", "wpr-blocks")}
						options={type_options}
						onChange={this.onChangeSelectType}
					/>
					<SelectControl
						className="wpr-select-control-grid"
						value={this.props.attributes.post_ids[0]}
						label={__("Main Post", "wpr-blocks")}
						options={options}
						onChange={this.onChangeSelectPost(0)}
					/>
					<SelectControl
						className="wpr-select-control-grid"
						value={this.props.attributes.post_ids[1]}
						label={__("Post #1", "wpr-blocks")}
						options={options}
						onChange={this.onChangeSelectPost(1)}
					/>
					<SelectControl
						className="wpr-select-control-grid"
						value={this.props.attributes.post_ids[2]}
						label={__("Post #2", "wpr-blocks")}
						options={options}
						onChange={this.onChangeSelectPost(2)}
					/>
					<SelectControl
						className="wpr-select-control-grid"
						value={this.props.attributes.post_ids[3]}
						label={__("Post #3", "wpr-blocks")}
						options={options}
						onChange={this.onChangeSelectPost(3)}
					/>
					<SelectControl
						className="wpr-select-control-grid"
						value={this.props.attributes.post_ids[4]}
						label={__("Post #4", "wpr-blocks")}
						options={options}
						onChange={this.onChangeSelectPost(4)}
					/>
					<SelectControl
						className="wpr-select-control-grid"
						value={this.props.attributes.post_ids[5]}
						label={__("Post #5", "wpr-blocks")}
						options={options}
						onChange={this.onChangeSelectPost(5)}
					/>
					<SelectControl
						className="wpr-select-control-grid"
						value={this.props.attributes.post_ids[6]}
						label={__("Post #6", "wpr-blocks")}
						options={options}
						onChange={this.onChangeSelectPost(6)}
					/>
					<SelectControl
						className="wpr-select-control-grid"
						value={this.props.attributes.post_ids[7]}
						label={__("Post #7", "wpr-blocks")}
						options={options}
						onChange={this.onChangeSelectPost(7)}
					/>
					<SelectControl
						className="wpr-select-control-grid"
						value={this.props.attributes.post_ids[8]}
						label={__("Post #8", "wpr-blocks")}
						options={options}
						onChange={this.onChangeSelectPost(8)}
					/>
				</InspectorControls>
			),
			<div className={this.props.className}>{output}</div>,
		];
	}
}

export default PostsList;
