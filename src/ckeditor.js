/**
 * @license Copyright (c) 2014-2020, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
import ClassicEditorBase from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials.js';
import HorizontalLine from '@ckeditor/ckeditor5-horizontal-line/src/horizontalline.js';
import Image from '@ckeditor/ckeditor5-image/src/image.js';
import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption.js';
import ImageInsert from '@ckeditor/ckeditor5-image/src/imageinsert.js';
import ImageResize from '@ckeditor/ckeditor5-image/src/imageresize.js';
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle.js';
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar.js';
import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload.js';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic.js';
import Link from '@ckeditor/ckeditor5-link/src/link.js';
import List from '@ckeditor/ckeditor5-list/src/list.js';
import ListStyle from '@ckeditor/ckeditor5-list/src/liststyle.js';
import MediaEmbed from '@ckeditor/ckeditor5-media-embed/src/mediaembed.js';
import Autoformat from "@ckeditor/ckeditor5-autoformat/src/autoformat";
import Bold from "@ckeditor/ckeditor5-basic-styles/src/bold";
import Video from "@visao/ckeditor5-video/src/video";
import VideoUpload from "@visao/ckeditor5-video/src/videoupload";
import VideoResize from "@visao/ckeditor5-video/src/videoresize";
import Layout from "@visao/ckeditor5-flex-layout/src/layout";
import VideoStyle from "@visao/ckeditor5-video/src/videostyle";

export default class ClassicVisaoEditor extends ClassicEditorBase {}

// Plugins to include in the build.
ClassicVisaoEditor.builtinPlugins = [
	Autoformat,
	Bold,
	Essentials,
	HorizontalLine,
	Image,
	ImageCaption,
	ImageInsert,
	ImageResize,
	ImageStyle,
	ImageToolbar,
	ImageUpload,
	Italic,
	Link,
	List,
	ListStyle,
	MediaEmbed,
	Video,
	VideoResize,
	VideoUpload,
	VideoStyle,
	Layout
];

// Editor configuration.
ClassicVisaoEditor.defaultConfig = {
	toolbar: {
		items: [
			'layout',
			'bold',
			'italic',
			'horizontalLine',
			'link',
			'mediaEmbed',
			'bulletedList',
			'numberedList',
			'imageUpload',
			'videoUpload',
		]
	},
	image: {
		toolbar: [
			'imageStyle:full',
			'imageStyle:side',
			'|',
			'imageTextAlternative'
		]
	},
	mediaEmbed: {
		removeProviders: [ 'instagram', 'twitter', 'googleMaps', 'flickr', 'facebook', 'spotify', 'dailymotion' ]
	},
	// This value must be kept in sync with the language defined in webpack.config.js.
	language: 'en'
};

