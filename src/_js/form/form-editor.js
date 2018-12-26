import * as $ from 'jquery';
import 'tinymce';

$(document).ready(function () {
    // TinyMCE Post Editor
    tinymce.init({
        selector: '.tinymce',
        height: 300,
        menubar: false,
        themes: "inlite",
        statusbar: false,
        plugins: [
            'advlist autolink lists link image charmap print preview anchor textcolor',
            'searchreplace visualblocks code fullscreen',
            'insertdatetime media table contextmenu paste code help wordcount'
        ],
        toolbar: 'insert |  formatselect | bold italic blockquote alignleft aligncenter alignright alignjustify bullist numlist outdent indent removeformat | code',
    });

    tinymce.init({
        selector: '.tinymce-inline',
        theme: 'inlite',
        plugins: [
            'advlist autolink lists link image charmap print preview anchor textcolor',
            'searchreplace visualblocks code fullscreen',
            'insertdatetime media table contextmenu paste code help wordcount'
        ],
        insert_toolbar: 'formatselect | bullist numlist outdent indent | quickimage quicktable media codesample',
        selection_toolbar: 'formatselect | bold italic quicklink blockquote alignleft aligncenter alignright alignjustify removeformat ',
        inline: true,
        paste_data_images: true
    });
});