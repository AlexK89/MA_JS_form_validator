function remove() {
    var inputs = document.querySelectorAll(".error");
    if (inputs) {
        [].forEach.call(inputs, function (item) {
            var parent = item.parentNode
            var element = document.querySelector(".error")

            parent.removeChild(element)
        })
    }
}

function check_form(e)
{
    var inputs = document.getElementsByTagName("input");
    remove();

    [].forEach.call(inputs, function (item) {
        var error_parent = item.parentNode;
        error_parent.innerHTML += "<p class='error'></p>";

        if(item.getAttribute("data-required") === "1" && !item.value) {
            e.preventDefault();
            error_parent.querySelector(".error").innerHTML += "Required field.";
        }
        if(item.hasAttribute("data-max") && item.value.length > item.getAttribute("data-max")) {
            e.preventDefault();
            error_parent.querySelector(".error").innerHTML += " Max length " + item.getAttribute("data-max") + ".";
        }
        if(item.hasAttribute("data-min") && item.value.length < item.getAttribute("data-min")) {
            e.preventDefault();
            error_parent.querySelector(".error").innerHTML += " Min length " + item.getAttribute("data-min") + ".";
        }
        if(item.hasAttribute("data-symbols") && (item.value !== "" || item.getAttribute("data-symbols").search(/[^a-zA-Z]+/) !== -1)) {
            e.preventDefault();
            error_parent.querySelector(".error").innerHTML += "Only letters";
        }
        if (item.id === "yes" && item.checked) {
            var additional = document.getElementsByClassName("additional")[0];
            additional.setAttribute("data-required", "1");
        }
    })
}



document.getElementById("form").addEventListener("submit", check_form);



