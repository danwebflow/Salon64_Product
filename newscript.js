$(".field").on("focusin", function () {
  $(this).siblings(".field_label").removeClass("large");
});
$(".field").on("focusout", function () {
  if ($(this).val().length == 0) {
    $(this).siblings(".field_label").addClass("large");
  }
});

// Validation
// Learn more at https://jqueryvalidation.org/
// Options at https://jqueryvalidation.org/validate/
// Methods at https://jqueryvalidation.org/category/methods/

$("#contact-form").validate({
  rules: {
    Phone: {
      required: true,
      phoneUS: true
    },
    projectBudget: {
      required: true
    }
  },
  messages: {
    name: {
      required: "What should we call you?",
      minlength: "Please type your full name"
    }
  },
  errorPlacement: function (error, element) {
    error.appendTo(element.closest(".field_wrap"));
  }
});
