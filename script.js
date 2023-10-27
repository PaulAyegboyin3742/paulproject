var navLinks = document.getElementById("navLinks")

        function showMenu(){
            navLinks.style.right = "0"
        }
        function hideMenu(){
            navLinks.style.right = "-200px"
        }

        document.getElementById('contactForm').addEventListener('submit', function(event) {
            event.preventDefault();
        
            var name = document.getElementById('name').value;
            var email = document.getElementById('email').value;
            var message = document.getElementById('message').value;
        
            if (name === '' || email === '' || message === '') {
                alert('Please fill in all fields.');
                return;
            }
        
            alert('Thank you for your message! We will get back to you soon.');
        
            document.getElementById('name').value = '';
            document.getElementById('email').value = '';
            document.getElementById('message').value = '';
        });
        
        document.getElementById('enrollmentForm').addEventListener('submit', function(event) {
            event.preventDefault();
        
            var applicantName = document.getElementById('applicantName').value;
            var parentName = document.getElementById('parentName').value;
            var applicantAge = document.getElementById('applicantAge').value;
            var email = document.getElementById('email').value;
            var phone = document.getElementById('phone').value;
            var grade = document.getElementById('grade').value;
            var homeAddress = document.getElementById('homeAddress').value;
            var consultationDate = document.getElementById('consultationDate').value;
        
            if (applicantName === '' || parentName === '' || applicantAge === '' || email === '' || phone === '' || grade === '') {
                alert('Please fill in all fields.');
                return;
            }
        
            if (isNaN(applicantAge) || applicantAge <= 0) {
                alert('Please enter a valid age.');
                return;
            }

            if (homeAddress === '') {
                alert('Please provide your home address.');
                return;
            }

            if (consultationDate === '') {
                alert('Please select a consultation date.');
                return;
            }

            var today = new Date().toISOString().slice(0, 10);
            if (consultationDate < today) {
                alert('Consultation date must be in the future.');
                return;
            }

            alert('Enrollment successful! Our Admin team will contact you shortly.');
    
            document.getElementById('applicantName').value = '';
            document.getElementById('parentName').value = '';
            document.getElementById('applicantAge').value = '';
            document.getElementById('email').value = '';
            document.getElementById('phone').value = '';
            document.getElementById('grade').value = 'kindergarten';
        });
        