$(".field").on("focusin", function () {
  $(this).siblings(".field_label").removeClass("large");
});
$(".field").on("focusout", function () {
  if ($(this).val().length == 0) {
    $(this).siblings(".field_label").addClass("large");
  }
});

// Validation
// $("#contact-form").validate();

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
  errorPlacement: function (error, element) {
    error.appendTo(element.closest(".field_wrap"));
  }
});
// function fieldValid(field) {
//   field.closest(".field_wrap").addClass("valid");
// }

// function fieldInvalid(field) {
//   field.closest(".field_wrap").removeClass("valid");
// }

// $(".field").on("keyup change", function () {
//   let value = $(this).val();
//   // NAME FIELD
//   if ($(this).hasClass("name")) {
//     if (value.includes(" ") && value.length >= 3) {
//       fieldValid($(this));
//     } else {
//       fieldInvalid($(this));
//     }
//   }
//   // EMAIL FIELD
//   if ($(this).hasClass("email")) {
//     if (value.includes("@") && value.includes(".") && value.length >= 5) {
//       fieldValid($(this));
//     } else {
//       fieldInvalid($(this));
//     }
//   }
//   // PHONE FIELD
//   if ($(this).hasClass("email")) {
//     if (value.includes("@") && value.includes(".") && value.length >= 5) {
//       fieldValid($(this));
//     } else {
//       fieldInvalid($(this));
//     }
//   }
// });

// $(".field").on("keyup change", function () {
//   if ($(this).val().length > 0) {
//     $(this).siblings(".error").hide();
//   } else {
//     $(this).siblings(".error").show();
//   }
// });

// $(".submit").on("click", function () {
//   if ($(".name").val().length > 2 && $(".email").val().length > 3) {
//     return true;
//   } else {
//     return false;
//   }
// });
