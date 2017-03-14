$(document).ready(function() {

    $('#contactForm')
        .formValidation({
            framework: 'bootstrap',
            err: {
                container: function($field, validator) {
                    return $field.parent().children('.errorMessage');
                }
            },
            icon: {
                valid: 'glyphicon glyphicon-ok',
                invalid: 'glyphicon glyphicon-remove',
                validating: 'glyphicon glyphicon-refresh'
            },
            button: {
                selector: '#contact-button',
                disabled: 'disabled'
            },
            fields: {
                name: {
                    validators: {
                        notEmpty: {
                            message: 'First and last name, please'
                        }
                    }
                },
                email: {
                    validators: {
                        notEmpty: {
                            message: 'Your email address is required, please'
                        },
                        emailAddress: {
                            message: 'Please enter a valid email address'
                        }
                    }
                },
                phone: {
                    validators: {
                        notEmpty: {
                            message: 'Please provide a contact number'
                        }
                    }
                }
            }
        })
        .on('status.field.fv', function(e, data) {
            if (data.field === 'email') {
                // Assume that the form uses the Bootstrap framework
                // and has a standard structure
                // Each pair of field and label are placed inside a .form-group element

                // Determine the field container
                var $container = data.element.closest('.form-group input');

                if (data.status !== 'NOT_VALIDATED') {
                    $container.addClass('errorInput');
                }

                if (data.status === 'VALID') {
                    $container.removeClass('errorInput');
                }
            }


            if ((data.fv.getFieldElements('name').val() === "") || 
    (data.fv.getFieldElements('email').val() === "") || 
    (data.fv.getFieldElements('message').val() === "")) {
                data.fv.disableSubmitButtons(true);    
            }
        })
  .on('success.form.fv', function(e) {
      // Prevent form submission
            e.preventDefault();
      e.stopPropagation();
  });
    $('#contact-button').attr('disabled','disabled').addClass('disabled');
});
