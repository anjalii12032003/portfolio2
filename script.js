document.addEventListener('DOMContentLoaded', function() {
    var text = "Welcome to My Portfolio";
    var node = document.getElementById('welcome-heading');
    var textLength = text.length;
    var speed = 150; // Speed of typing animation (milliseconds)

    function typeWriter(index) {
        if (index <= textLength) {
            node.innerHTML = text.substring(0, index);
            setTimeout(function() {
                typeWriter(index + 1);
            }, speed);
        }else {
            node.style.borderRight = "none"; // Remove typing cursor
    }
}
    typeWriter(0);

    document.querySelectorAll('.dropdown-btn').forEach(function(button) {
        button.addEventListener('click', function() {
            var dropdownContent = this.nextElementSibling;
            dropdownContent.classList.toggle('show');
        });
    });

    // Close the dropdowns if the user clicks outside of them
    window.onclick = function(event) {
        if (!event.target.matches('.dropdown-btn')) {
            var dropdowns = document.getElementsByClassName('dropdown-content');
            for (var i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                }
            }
        }
    }

    document.getElementById("queryForm").addEventListener("submit", function(event) {
        event.preventDefault();
        // Perform form validation here
        // You can use JavaScript to check if fields are filled and email format is correct, etc.
        // If validation passes, you can submit the form or perform further actions
        alert("Query submitted successfully!");
    });
    
});

