$(document).ready(function () {
    $("#fd-excerpt").textcounter({
      max: 15,
      stopInputAtMaximum: false,
      countDownText: "%d characters remaining",
    });
    //tags - multiselct
    $(".tagsInput, .multipleSelect").fastselect();
  
    //date picker demo
    //$('#datepicker').datepicker('setDate', 'now');
    //var date = new Date();
    //   var today = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    //   var end = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    $("#datepicker").datepicker({
      format: "dd/mm/yyyy",
      todayHighlight: true,
    });
    $("#datepicker").datepicker("setDate", "now");

   //replicate content to other text-field 
   $("#blog_title").on('keyup',function(event) {
    var stt = $(this).val();
    $("#blog_metatitle").val(stt);
  });
   
  
    //Add Content Available Langauge
    $(document)
  .on("click", ".blog_lang_container .add_lgn_btn", function (e) {
    e.preventDefault();
    // alert('hi');
      var blanginput_value = $(".blog_lang_container .input_value");
      var is_blanginput_value_empty = false;
      for (var i = 0; i < blanginput_value.length; i++) {
        if($(blanginput_value[i]).val() === ""){
          is_blanginput_value_empty = true;
        }
       
      }
      if(is_blanginput_value_empty === false){
    var blang_container_html =
      `  <div class="row langbx">
                           
      <div class="col-sm-10">
         <div class="mb-3">
             <label for="languagesecc3" class="form-label">Article Language<span class="text-danger">*</span> </label>
             <select class="form-select form-control input_value" aria-label="Default select example" id="languagesecc3">
               <option value="">Open this select menu</option>
               <option value="1">English</option>
               <option value="3">Hindi</option>
               <option value="2">Urdu</option>
               <option value="3">Marthi</option>
             </select>
             </div>
             <div class="mb-3">
                 <label for="blog_langurl" class="form-label">URL</label> <span class="text-danger">*</span>
                 <input type="text" class="form-control input_value" id="blog_langurl" placeholder="URL">
               </div>
         </div>
     
     <div class="col-sm-2">
         <button class="btn btn-danger member-del">
           <i class="fa-solid fa-minus"></i>
         </button>
         </div>
     </div>`;
      $(".blog_lang_url_container").prepend(blang_container_html);
        
      }
      else{
        $(myToastEl).find(".toast-body").html('Please select a Language');
        myToast.show();
      }
      
      
  });
  $(document)
  .on("click", ".blog_lang_container .add_lgn_btn", function (e) {
    e.preventDefault();
  
    
  })
  .on("click", ".langbx .member-del", function (e) {
    e.preventDefault();
    $(this).closest(".langbx").remove();
    return false;
  });
  //Add Content Available Langauge
   
    
  
  
  
    //add gallery
    $(document)
  .on("click", ".bgallery_container  .member-add", function (e) {
    e.preventDefault();
      var bgalleryinput_value = $(".bgallery_container .input_value");
      var is_bgalleryinput_value_empty = false;
      for (var i = 0; i < bgalleryinput_value.length; i++) {
        if($(bgalleryinput_value[i]).val() === ""){
          is_bgalleryinput_value_empty = true;
        }
       
      }
      if(is_bgalleryinput_value_empty === false){
    var bgallery_container_html =
    `<div class="row each-form-set mb-3">
  
    <div class="col-sm-10 mb-3">
      
      <label for="uploadThumb_file" class="col-sm-12 col-form-label mb-3">Type</label>
      <select class="form-select" aria-label="Type" name="typeg1">
        <option value="1">Image</option>
      </select>
  
      
      <label for="gallery_files" class="col-sm-12 col-form-label mb-3">Upload Thumb</label>
      <input class="form-control input_value file_uploader" type="file" id="gallery_files" name="gallery_files">
    
      
      
          <label for="blog_uploadtitle" class="col-sm-12 col-form-label mb-3">Title</label>
          <input type="text" aria-label="title" name="inputg2[]" class="form-control input_value" placeholder="Title" id="blog_uploadtitle">
  
         
      </div>
      <div class="col-sm-2 mb-3">
      <button class="btn btn-danger member-del">
      <i class="fa-solid fa-minus"></i>
    </button>
      </div>
      <hr>
      </div>`;
      $(".bgallerys_container").prepend(bgallery_container_html);
        
      }
      else{
        $(myToastEl).find(".toast-body").html('Please upload a image & title');
        myToast.show();
      }
      
      
  });
  $(document)
  .on("click", ".bgallery_container .member-add", function (e) {
    e.preventDefault();
  
    
  })
  .on("click", ".bgallery_container .each-form-set .member-del", function (e) {
    e.preventDefault();
    $(this).closest(".each-form-set").remove();
    return false;
  });
  //add sponsor members end
    //gallery ends
  
    //end ready function
  
    //Form Validation Start
  
    function checkvalidation() {
      //alert('hello');
      var isperfect = true;
      var info = "";
      var objdata = { isperfect: "", info: "" };
  
      //check field validations here
      //Basic Details
      var blog_title = $("#blog_title").val();
      if (blog_title === "") {
        info += "Please enter blog the title<br>";
        isperfect = false;
      }
      var blog_url = $("#blog_url").val();
      if (blog_url === "") {
        info += "Please enter the URL Slug<br>";
        isperfect = false;
      }
      var blog_excerpt = $("#blog_excerpt").val();
      if (blog_excerpt === "") {
        info += "Please fill the Excerpt with max 360 words<br>";
        isperfect = false;
      }

      var blogImage = $("#blog_uploadimg").val();
      // Allowing file type
      var allowedExtensions =
        /(\.png|\jpe?g|\.odt|\.pdf|\.tex|\.txt|\.rtf|\.wps|\.docx|\.doc)$/i;
      if (blogImage === "") {
        info += "Please upload Thumb image<br>";
        isperfect = false;
      } else if (!allowedExtensions.exec(blogImage)) {
        info += "Please upload a valid thumb file<br>";
        isperfect = false;
      }
      
      var blogexp_link = $("#blogexp_link").val();
      if (blogexp_link === "") {
        info += "Please enter Explore Link<br>";
        isperfect = false;
      }

      var select_lang2 = document.getElementById("languagesecc3");
      if($(select_lang2).length){
      if (select_lang2.selectedIndex <=0) {
            info += "Please Select Language <br>";
            isperfect = false;
      }  
     }

       //Meta Details
       var blog_metatitle = $("#blog_metatitle").val();
       if (blog_metatitle === "") {
         info += "Please enter the Meta title<br>";
         isperfect = false;
       }

      var blog_desc = $("#blog_desc").val();
      if (blog_desc === "") {
        info += "Please enter the Meta description<br>";
        isperfect = false;
      }

      var blogMImage = $("#blog_metaimg").val();
      // Allowing file type
      var allowedExtensions =
        /(\.png|\jpe?g|\.odt|\.pdf|\.tex|\.txt|\.rtf|\.wps|\.docx|\.doc)$/i;
      if (blogMImage === "") {
        info += "Please upload a Meta image<br>";
        isperfect = false;
      } else if (!allowedExtensions.exec(blogMImage)) {
        info += "Please upload a Meta Image<br>";
        isperfect = false;
      }

      var fileInput = $("#blog_zipfile").val();
      // Allowing file type
      var allowedExtensions3 = /(\.zip)$/i;
      if (fileInput === "") {
      info += "Please upload a file for download<br>";
      isperfect = false;
      } else if (!allowedExtensions3.exec(fileInput)) {
      info += "Please upload zip file for download<br>";
      isperfect = false;
      }


      var bgallery_file_uploader = $(".bgallery_container .input_value.file_uploader");
      var is_bgallery_file_uploader_empty = false;
      let allowedExtensions2 =
          /(\.png|\jpe?g|\.odt|\.pdf|\.tex|\.txt|\.rtf|\.wps|\.docx|\.doc)$/i;
          
      for (var i = 0; i < bgallery_file_uploader.length; i++) {
        let each_bgallery_file_uploader = $(bgallery_file_uploader[i]).val();
        //alert(each_bgallery_file_uploader);
        if(each_bgallery_file_uploader === ""){
          is_bgallery_file_uploader_empty = true;
  
          info += "Please upload a file in Image Gallery<br>";
          isperfect = false;
        }else if (!allowedExtensions2.exec(each_bgallery_file_uploader)) {
          info += "Please upload a valid file Extension in image Gallery<br>";
          isperfect = false;
  
        }
      }

      var blog_lang_input_value = $(".blog_lang_container .input_value");
      var is_blog_lang_input_value_empty = false;
      for (var i = 0; i < blog_lang_input_value.length; i++) {
        if($(blog_lang_input_value[i]).val() === ""){
          is_blog_lang_input_value_empty = true;

          info += "Please add URL for Blog Article Language Option<br>";
          isperfect = false;
        }
      
      }
        
      var blog_gallery_input_value = $(".bgallery_container .input_value");
      var is_blog_gallery_input_value_empty = false;
      for (var i = 0; i < blog_gallery_input_value.length; i++) {
        if($(blog_gallery_input_value[i]).val() === ""){
          is_blog_gallery_input_value_empty = true;

          info += "Please add details for Image Gallery<br>";
          isperfect = false;
        }
      
      }


      var select_hour = document.getElementById("blog_selecthours");
      if (select_hour.selectedIndex <=0) {
            info += "Please Select Hour<br>";
            isperfect = false;
      }
   
    var select_mins = document.getElementById("blog_selectmins");
    if (select_mins.selectedIndex <=0) {
          info += "Please Select Mins<br>";
          isperfect = false;
    }

    var blog_author = $("#author_name").val();
      if (blog_author === "") {
        info += "Please enter author name<br>";
        isperfect = false;
      }

      //check field validation ends
  
      objdata.isperfect = isperfect;
      objdata.info = info;
      //checkvalidation function ends
  
      return objdata;
    }
    $("#blog_cms_form").submit(function (e) {
      e.preventDefault();
      $("#blog_cms_form .form-control").removeClass("is-invalid");
      var validData = checkvalidation();
      if (validData.isperfect === false) {
        // alert(validData.info);
        // console.log('Hello');
        var html_alert_content =
          `<div class="alert alert-danger d-flex align-items-center" role="alert">
                                        <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Danger:"><use xlink:href="#exclamation-triangle-fill"/></svg>
                                        <div class="alert-content">
                                        `+validData.info +`
                                        </div>
                                      </div>`;
        $(".alerts-container").html(html_alert_content);
        $(myToastEl).find(".toast-body").html(validData.info);
        myToast.show();
        // $(".form-control").addClass("is-invalid");
      }
     
      
     //Bootstrap error validation 
        var form_validate = $("#blog_cms_form .form-control");
       
        var is_form_validate_empty = true;
        for (var i = 0; i < form_validate.length; i++) {
          if($(form_validate[i]).val() === ""){
            is_form_validate_empty = true;
            $(form_validate[i]).addClass("is-invalid");
            console.log('meee')
          }
          else{
            $(form_validate[i]).removeClass("is-invalid");
          }
          
        }
  
    });
  
    var myToastEl = document.getElementById("myToastEl");
    var myToast = bootstrap.Toast.getOrCreateInstance(myToastEl); // Returns a Bootstrap toast instance
   
  
     // CK Editor 
  
  // ClassicEditor
  // .create( document.querySelector( '#editor' ) )
  // .catch( error => {
  //     console.error( error );
  // } );

  var myEditor;

  // CKeditor
        // This sample still does not showcase all CKEditor 5 features (!)
            // Visit https://ckeditor.com/docs/ckeditor5/latest/features/index.html to browse all the features.
            CKEDITOR.ClassicEditor.create(document.getElementById("editor"), {
              // https://ckeditor.com/docs/ckeditor5/latest/features/toolbar/toolbar.html#extended-toolbar-configuration-format
              toolbar: {
                  items: [
                  "heading",
                  "|",
                          "bold",
                          "italic",
                          "link",
                          "bulletedList",
                          "numberedList",
                          "|",
                          "indent",
                          "outdent",
                          "|",
                          "imageUpload",
                          "blockQuote",
                          "mediaEmbed",
                          "undo",
                          "redo",
                          "sourceEditing",
                  ],
                  shouldNotGroupWhenFull: true
              },
              // Changing the language of the interface requires loading the language file using the <script> tag.
              // language: 'es',
              list: {
                  properties: {
                      styles: false,
                      startIndex: true,
                      reversed: true
                  }
              },
              // https://ckeditor.com/docs/ckeditor5/latest/features/headings.html#configuration
              heading: {
                  options: [
                      { model: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph' },
                      { model: 'heading1', view: 'h1', title: 'Heading 1', class: 'ck-heading_heading1' },
                      { model: 'heading2', view: 'h2', title: 'Heading 2', class: 'ck-heading_heading2' },
                      { model: 'heading3', view: 'h3', title: 'Heading 3', class: 'ck-heading_heading3' },
                      { model: 'heading4', view: 'h4', title: 'Heading 4', class: 'ck-heading_heading4' },
                      { model: 'heading5', view: 'h5', title: 'Heading 5', class: 'ck-heading_heading5' },
                      { model: 'heading6', view: 'h6', title: 'Heading 6', class: 'ck-heading_heading6' }
                  ]
              },
              // https://ckeditor.com/docs/ckeditor5/latest/features/editor-placeholder.html#using-the-editor-configuration
              placeholder: 'Your detail content here',
              // https://ckeditor.com/docs/ckeditor5/latest/features/font.html#configuring-the-font-family-feature
              fontFamily: {
                  options: [
                      'default',
                      // 'Arial, Helvetica, sans-serif',
                      // 'Courier New, Courier, monospace',
                      // 'Georgia, serif',
                      // 'Lucida Sans Unicode, Lucida Grande, sans-serif',
                      // 'Tahoma, Geneva, sans-serif',
                      // 'Times New Roman, Times, serif',
                      // 'Trebuchet MS, Helvetica, sans-serif',
                      // 'Verdana, Geneva, sans-serif'
                  ],
                  supportAllValues: true
              },
              // https://ckeditor.com/docs/ckeditor5/latest/features/font.html#configuring-the-font-size-feature
              fontSize: {
                  options: [ 10, 12, 14, 'default', 18, 20, 22 ],
                  supportAllValues: true
              },
              // Be careful with the setting below. It instructs CKEditor to accept ALL HTML markup.
              // https://ckeditor.com/docs/ckeditor5/latest/features/general-html-support.html#enabling-all-html-features
              htmlSupport: {
                  allow: [
                      {
                          name: /.*/,
                          attributes: true,
                          classes: true,
                          styles: true
                      }
                  ]
              },
              // Be careful with enabling previews
              // https://ckeditor.com/docs/ckeditor5/latest/features/html-embed.html#content-previews
              htmlEmbed: {
                  showPreviews: true
              },
              // https://ckeditor.com/docs/ckeditor5/latest/features/link.html#custom-link-attributes-decorators
              link: {
                  decorators: {
                      addTargetToExternalLinks: true,
                      defaultProtocol: 'https://',
                      toggleDownloadable: {
                          mode: 'manual',
                          label: 'Downloadable',
                          attributes: {
                              download: 'file'
                          }
                      }
                  }
              },
              // https://ckeditor.com/docs/ckeditor5/latest/features/mentions.html#configuration
              mention: {
                  feeds: [
                      {
                          marker: '@',
                          feed: [
                              '@apple', '@bears', '@brownie', '@cake', '@cake', '@candy', '@canes', '@chocolate', '@cookie', '@cotton', '@cream',
                              '@cupcake', '@danish', '@donut', '@dragÃ©e', '@fruitcake', '@gingerbread', '@gummi', '@ice', '@jelly-o',
                              '@liquorice', '@macaroon', '@marzipan', '@oat', '@pie', '@plum', '@pudding', '@sesame', '@snaps', '@soufflÃ©',
                              '@sugar', '@sweet', '@topping', '@wafer'
                          ],
                          minimumCharacters: 1
                      }
                  ]
              },
              // The "super-build" contains more premium features that require additional configuration, disable them below.
              // Do not turn them on unless you read the documentation and know how to configure them and setup the editor.
              removePlugins: [
                  // These two are commercial, but you can try them out without registering to a trial.
                  // 'ExportPdf',
                  // 'ExportWord',
                  'CKBox',
                  'CKFinder',
                  'EasyImage',
                  // This sample uses the Base64UploadAdapter to handle image uploads as it requires no configuration.
                  // https://ckeditor.com/docs/ckeditor5/latest/features/images/image-upload/base64-upload-adapter.html
                  // Storing images as Base64 is usually a very bad idea.
                  // Replace it on production website with other solutions:
                  // https://ckeditor.com/docs/ckeditor5/latest/features/images/image-upload/image-upload.html
                  // 'Base64UploadAdapter',
                  'RealTimeCollaborativeComments',
                  'RealTimeCollaborativeTrackChanges',
                  'RealTimeCollaborativeRevisionHistory',
                  'PresenceList',
                  'Comments',
                  'TrackChanges',
                  'TrackChangesData',
                  'RevisionHistory',
                  'Pagination',
                  'WProofreader',
                  // Careful, with the Mathtype plugin CKEditor will not load when loading this sample
                  // from a local file system (file://) - load this site via HTTP server if you enable MathType
                  'MathType'
              ]
          }).then( editor => {
            console.log( 'Editor was initialized', editor );
            myEditor = editor;
        } )
        .catch( err => {
            console.error( err.stack );
        } );
  
        $('#getdata').on('click',function(){
          console.log(myEditor.getData());
        });
  
       // $('textarea#editor').ckeditor().myEditor.insertHtml('<a href="#">text</a>');
  
          $('#getdata').on('click',function(){
            console.log(myEditor.getData());
          });
  
         // $('textarea#editor').ckeditor().myEditor.insertHtml('<a href="#">text</a>');
  
        
          $("#dataelement").click(function () {
            insertAtCaret('ananr');
              });
        
        function insertAtCaret(myValue) {
          var hvla = ` <div class="ratio ratio-16x9">
          <iframe src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" title="YouTube video" allowfullscreen></iframe>
        </div>`;
          //for raw html
          //myEditor.execute( 'htmlEmbed', hvla );
  
          const content = '<p>A paragraph with <a href="https://ckeditor.com">some link</a>.';
          const viewFragment = myEditor.data.processor.toView( content );
          const modelFragment = myEditor.data.toModel( viewFragment );
          
          myEditor.model.insertContent( modelFragment );
  
          alert('hi');
      };
      
        $("#dataelement").click(function () {
          insertAtCaret('ananr');
            });
      
      function insertAtCaret(myValue) {
        var hvla = ` <div class="ratio ratio-16x9">
        <iframe src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" title="YouTube video" allowfullscreen></iframe>
      </div>`;
        //for raw html
        //myEditor.execute( 'htmlEmbed', hvla );
  
        const content = '<p>A paragraph with <a href="https://ckeditor.com">some link</a>.';
        const viewFragment = myEditor.data.processor.toView( content );
        const modelFragment = myEditor.data.toModel( viewFragment );
        
        myEditor.model.insertContent( modelFragment );
  
        alert('hi');
    };
    
  
  });
  
  
  