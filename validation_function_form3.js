function error_p() {
    var inputs = document.getElementsByTagName("input");
    [].forEach.call(inputs, function (item) {
        var error_parent = item.parentNode;
        error_parent.innerHTML += "<p class='error'></p>"
    })
}
function remove() {
    var inputs = document.querySelectorAll(".error");
    if (inputs) {
        [].forEach.call(inputs, function (item) {
            item.textContent = "";
        })
    }
}

function check_form()
{
    var inputs = document.getElementsByTagName("input");
    var email = document.querySelector(".email")
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var flag = 0;
    remove();

    [].forEach.call(inputs, function (item) {
        var error_parent = item.parentNode;

        if(item.getAttribute("data-required") === "1" && !item.value) {
            flag = 1
            error_parent.querySelector(".error").textContent += "Required field.";
        }
        if(item.hasAttribute("data-max") && item.value.length > item.getAttribute("data-max")) {
            flag = 1
            error_parent.querySelector(".error").textContent += " Max length " + item.getAttribute("data-max") + ".";
        }
        if(item.hasAttribute("data-min") && item.value.length < item.getAttribute("data-min") && item.value) {
            flag = 1
            error_parent.querySelector(".error").textContent += " Min length " + item.getAttribute("data-min") + ".";
        }
        if(item.hasAttribute("data-symbols") && (item.value.search(/[^a-zA-Z]+/) !== -1)) {
            console.log(item.value.search(/[^a-zA-Z]+/))
            flag = 1
            error_parent.querySelector(".error").textContent += "Only letters";
        }
        if (item.id === "yes" && item.checked) {
            var additional = document.getElementsByClassName("additional")[0];
            additional.setAttribute("data-required", "1");
        }
    })
    if(!email.value.match(mailformat) && email.value !== "") {
        flag = 1
        email.parentNode.querySelector(".error").textContent += "Please provide correct email";
    }
    return flag;
}

function submit(e) {
    if(check_form()) {
        e.preventDefault();
    }
}

document.getElementById("form").addEventListener("keyup", check_form);
document.getElementById("form").addEventListener("submit", submit);
window.addEventListener("load", function () {
    error_p();
    check_form();
})

function oddCount(n) {
    var result = 0
    while(n > 1) {
        result++
        n -= 2;
    }
    return result
}
oddCount()

function oddCount(n) {
    return Math.floor(n / 2)
}
oddCount()