$(function(){
  Dropzone.options.myAwesomeDropzone = {
    maxFilesize: 25,
    addRemoveLinks: true,
    dictResponseError: 'Server not Configured',
    acceptedFiles: ".png,.jpg,.gif,.bmp,.jpeg",
    init:function(){
      var self = this;
      // config
      self.options.addRemoveLinks = true;
      self.options.dictRemoveFile = "Delete";
      //New file added
      self.on("addedfile", function (file) {
        console.log('new file added ', file);
        /**/
        /**/

              var setProperties = [
         {
            selected: false,
            strange: 'norm',
            namePr: ''
         },
         {
            p1:23,
            p2:24,
            p3:21
         },
         {
            p1:31,
            p2:32,
            p3:33
         },
         {
            p1:41,
            p2:42,
            p3:43
         },

      ];
      var itemProperties = {
            p1:1,
            p2:2,
            p3:3
      };

      var selectProperties;

      $('.set-img div').click(function(){
        

        var thisEl = $(this);
        $('.set-img .active').removeClass('active');
        thisEl.addClass('active');

        console.log('Индекс выбранного элемента в наборе: '+thisEl.index())
        console.log('Соответствующий объект');
        console.log(setProperties[thisEl.index()])
        selectProperties = setProperties[thisEl.index()];
        
        // если однородные поля
        // $('.filter input').each(function(indx){
        //   console.log(indx)
        //   $(this).val(1);
        // });

        $('#s1').val(selectProperties.p1);
        $('#s2').val(selectProperties.p2);
        $('#s3').val(selectProperties.p3);

      });

       $('#s1').blur(function(){
        selectProperties.p1 = $('#s1').val();
        console.log(selectProperties);
       })

       $('#s2').blur(function(){
        selectProperties.p2 = $('#s2').val();
        console.log(selectProperties);
       })

       $('#s3').blur(function(){
        selectProperties.p3 = $('#s3').val();
        console.log(selectProperties);
       })


        
        /**/
        /**/
      });
      // Send file starts
      self.on("sending", function (file) {
        console.log('upload started', file);
        $('.meter').show();
      });
      
      // File upload Progress
      self.on("totaluploadprogress", function (progress) {
        console.log("progress ", progress);
        $('.roller').width(progress + '%');
      });

      self.on("queuecomplete", function (progress) {
        $('.meter').delay(999).slideUp(999);
      });
      
      // On removing file
      self.on("removedfile", function (file) {
        console.log(file);
      });
    }
  };
})
 
