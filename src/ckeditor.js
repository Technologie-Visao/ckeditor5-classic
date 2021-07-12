import ClassicEditorBase from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import Image from '@ckeditor/ckeditor5-image/src/image';
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle';
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar';
import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload';
import Link from '@ckeditor/ckeditor5-link/src/link';
import List from '@ckeditor/ckeditor5-list/src/list';
import MediaEmbed from '@ckeditor/ckeditor5-media-embed/src/mediaembed';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import Video from "@visao/ckeditor5-video/src/video";
import VideoUpload from "@visao/ckeditor5-video/src/videoupload";
import VideoResize from "@visao/ckeditor5-video/src/videoresize";
import Layout from "@visao/ckeditor5-flex-layout/src/layout";
import VideoStyle from "@visao/ckeditor5-video/src/videostyle";
import HorizontalLine from '@ckeditor/ckeditor5-horizontal-line/src/horizontalline.js';

export default class ClassicEditor extends ClassicEditorBase {}

ClassicEditor.builtinPlugins = [
	Essentials,
	Autoformat,
	Paragraph,
	Bold,
	Italic,
	Image,
	ImageStyle,
	ImageToolbar,
	ImageUpload,
	Link,
	List,
	MediaEmbed,
	Video,
	VideoResize,
	VideoUpload,
	VideoStyle,
	Layout,
	HorizontalLine
];

ClassicEditor.defaultConfig = {
	toolbar: {
		items: [
			'undo',
			'redo',
			'|',
			'layout',
			'horizontalLine',
			'|',
			'bold',
			'italic',
			'link',
			'|',
			'bulletedList',
			'numberedList',
			'|',
			'uploadImage',
			'videoUpload',
			'mediaEmbed',
		]
	},
	image: {
		toolbar: [
			'imageStyle:inline',
			'imageStyle:block',
			'imageStyle:side',
			'|',
			'imageTextAlternative'
		]
	},

	mediaEmbed: {
		removeProviders: [ 'instagram', 'twitter', 'googleMaps', 'flickr', 'facebook', 'spotify', 'dailymotion' ]
	},
	language: 'en'
};
