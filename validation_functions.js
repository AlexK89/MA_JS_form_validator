function check_form() {
    var required_item = document.getElementsByTagName("input");
    var counter = 0;

    while (required_item[counter]) {
        var item = required_item[counter];
        var value = item.value;

        if ((item.classList.contains("required") && value === "") ||
            (item.classList.contains("min") && value.length < 10 && item.value) ||
            (item.classList.contains("max_8") && value.length > 8) ||
            (item.classList.contains("max_25") && value.length > 25) ||
            (item.classList.contains("letters") &&
                (!item.value  || item.value.search(/[^a-zA-Z]+/) !== -1)
            )) {
                event.preventDefault();
                alert("Fill the form correctly");
                return false;
        }
        if (item.id === "yes" && item.checked) {
            var additional = document.getElementsByClassName("additional")[0];
            additional.className += " required";
        }
        counter++;
    }

}

document.getElementById("form").addEventListener("submit", check_form);



