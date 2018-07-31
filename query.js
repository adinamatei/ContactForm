$(document).ready(function () {
    $("#submit").click(function (event) {
        event.preventDefault();
        validateForm();
    });
    $("#textArea").click(function (event) {
        event.target.value = "";
    });

    $("input[name='name']").focus(function () {
        $(this).removeClass("redBorder");
    });


    function validateForm() {
        let first = $("#firstName");
        let last = $("#lastName");
        let message = $("#textArea");
        let gender = "";
        let messageVal = "";

        $("input[name='gender']:checked").each(function () {
            gender = $(this).val();
        });

        if(message.val() !== "" && message.val() !== "Your message here...") {
            messageVal = message.val();
        }

        if(checkValidity(first)) {
            if(checkValidity(last)){
                $("#successMessage").html("Thank you for contacting us, " + first.val());
                $("#banner").css("visibility", "visible");

                console.log("FIRST NAME: " + first.val() + ", LAST NAME: " + last.val() + ", GENDER: " + gender + ", MESSAGE: " + messageVal);
                return true;
            }

        }
        return false;
    }


    function checkValidity(input) {
        let value = input.val();
        if(value.length === 0 || !(/^[a-zA-Z]+$/).test(value)){
            input.addClass("redBorder");
            return false;
        }
        else {
            input.removeClass("redBorder");
            return true;
        }
    }

});

