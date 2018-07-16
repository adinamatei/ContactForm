window.onload = function () {

    document.getElementById('submit').addEventListener("click", function (event) {
        event.preventDefault();
        validateForm()
    });


    function validateForm(form) {

        const first = document.getElementById('firstName');
        const last = document.getElementById('lastName');
        const banner = document.getElementById('banner');
        const bannerMessage = document.getElementById("successMessage");
        const gender = document.getElementsByName('gender');
        const message = document.getElementById('textArea');


        let genderVal = "";
        let messageVal = "";


        for(let i = 0; i < gender.length; i++) {
            if(gender[i].checked) {
                genderVal = gender[i].value.toUpperCase();
                // console.log(genderVal);
            }
        }

       if(message.value !== "") {
            messageVal = message.value;
       }


        if(checkValidity(first) ) {
            if(checkValidity(last)) {
                bannerMessage.innerHTML = "Thank you for contacting us, " + first.value;
                banner.style.visibility = "visible";

                console.log("FIRST NAME: " + first.value + ", LAST NAME: " + last.value + ", GENDER: " + genderVal + ", MESSAGE: " + messageVal);
                return true;
            }
        }
        return false;
    }

    function checkValidity(field) {
        let value = field.value;
        //if the field is empty
        if(value.length === 0) {
            field.classList.add("redBorder");
            return false;
        }
        //only alphabets is allowed
        if (!(/^[a-zA-Z]+$/).test(value)) {
            field.classList.add("redBorder");
            return false;
        }
        field.classList.remove("redBorder");
        return true;
    }


};