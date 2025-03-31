document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".edit-btn").forEach((button) => {
        button.addEventListener("click", function () {
            let row = this.closest("tr");
            row.querySelectorAll(".editable").forEach((span) => span.classList.add("hidden"));
            row.querySelectorAll(".edit-input").forEach((input) => input.classList.remove("hidden"));
            row.querySelector(".edit-btn").classList.add("hidden");
            row.querySelector(".save-btn").classList.remove("hidden");
        });
    });

    document.querySelectorAll(".save-btn").forEach((button) => {
        button.addEventListener("click", function () {
            let row = this.closest("tr");
            row.querySelectorAll(".edit-input").forEach((input) => {
                let span = input.previousElementSibling;
                span.textContent = input.value;
                input.classList.add("hidden");
                span.classList.remove("hidden");
            });
            row.querySelector(".edit-btn").classList.remove("hidden");
            row.querySelector(".save-btn").classList.add("hidden");
        });
    });
});
