document.addEventListener("DOMContentLoaded", function () {
    const table = document.getElementById("membersTable");

    if (!table) return; // Asegurarse de que la tabla existe

    table.addEventListener("click", function (event) {
        const target = event.target;

        if (target.classList.contains("editable")) {
            const input = target.nextElementSibling;
            const saveButton = target.closest("tr").querySelector(".save-btn");

            if (input) {
                target.classList.add("hidden");
                input.classList.remove("hidden");
                saveButton.classList.remove("hidden");
                input.focus();
            }
        }

        if (target.classList.contains("save-btn")) {
            const row = target.closest("tr");
            const spans = row.querySelectorAll(".editable");
            const inputs = row.querySelectorAll(".edit-input");

            inputs.forEach((input, index) => {
                spans[index].textContent = input.value;
                spans[index].classList.remove("hidden");
                input.classList.add("hidden");
            });

            target.classList.add("hidden");
        }
    });
});
