function handleSubmit(event) {
    event.preventDefault();
    
    // Get form data
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    
    // Basic validation
    if (!data.name || !data.email || !data.phone || !data.feedback || !data.rating || !data.recommend) {
        alert('Please fill in all required fields');
        return false;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
        alert('Please enter a valid email address');
        return false;
    }
    
    // Phone validation (basic)
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(data.phone.replace(/\D/g, ''))) {
        alert('Please enter a valid 10-digit phone number');
        return false;
    }
    
    // If all validation passes, you would typically send this data to a server
    console.log('Form submitted:', data);
    alert('Thank you for your feedback!');
    event.target.reset();
    
    return false;
}
