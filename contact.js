const form = document.querySelector("form")
let elems = Array.from(document.querySelectorAll("input[required], select[required], textarea[required]"));
// console.log(form)
elems.forEach(e => {
    const span = document.createElement("span");
    span.textContent = " *";
    span.style.color = "var(--red)";
    span.setAttribute("aria-hidden", "true");

    const label = document.querySelector(`label[for="${e.id}"]`);
    if (label) label.append(span);
});

form.addEventListener("submit", function (e) {
    e.preventDefault();
    let hasError = false;

    // Clear old messages
    document.querySelectorAll(".error-message").forEach(div => div.textContent = "");
    document.querySelectorAll("[aria-invalid='true']").forEach(el => el.removeAttribute("aria-invalid"));

    const requiredFields = document.querySelectorAll("input[required], select[required], textarea[required]");

    for (let field of requiredFields) {
        if (!field.value.trim()) {
            const label = document.querySelector(`label[for="${field.id}"]`);
            const errorDiv = document.getElementById(`${field.id}-error`);
            field.setAttribute("aria-invalid", "true");
            errorDiv.textContent = `Please fill out the ${label.textContent.replace("*", "").trim().toLowerCase()} field.`;
            if (!hasError) {
                field.focus(); // Focus the first invalid field
                hasError = true;
            }
        }
    }

    if (!hasError) {
        // All good!
        document.getElementById("form-message").textContent = "Message sent successfully!";
        // this.submit(); // uncomment if you want to actually submit
    }

    document.getElementById("form-message").textContent = "Message sent successfully!";
    setTimeout(() => form.submit(), 2000);
});