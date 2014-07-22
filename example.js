var transloadit = new TransloaditXhr({
  authKey: "MY_AUTH_KEY",
  templateId: "MY_TEMPLATE_ID",
  steps: {step_name: {step: "options"}} //optional

  successCb: function(fileUrl) {
    console.log("Finished upload of file, amazon file url is: " + fileUrl);
  },

  errorCb: function(error) {
    alert(error);
  }
});

$("#file_input").change(function() {
  var file = $('#file_input').get(0).files[0];
  console.log("Upload started");
  transloadit.uploadFile(file);
});
