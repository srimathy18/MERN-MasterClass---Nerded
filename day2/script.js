document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("customerForm");
    const customerList = document.getElementById("customerList");
    const addBtn = document.getElementById("addCustomerBtn");
    const deleteBtn = document.getElementById("deleteCustomerBtn");
  
    addBtn.addEventListener("click", function() {
      const name = document.getElementById("customerName").value;
      const contact = document.getElementById("contactInfo").value;
      const membership = document.getElementById("membershipType").value;
  
      if (name && contact && membership) {
        const listItem = document.createElement("li");
        listItem.textContent = `Name: ${name}, Contact: ${contact}, Membership: ${membership}`;
        customerList.appendChild(listItem);
        form.reset();
      } else {
        alert("Please fill in all fields.");
      }
    });
  
    deleteBtn.addEventListener("click", function() {
      const selectedCustomer = customerList.querySelector("li:last-child");
      if (selectedCustomer) {
        customerList.removeChild(selectedCustomer);
      } else {
        alert("No customer to delete.");
      }
    });
  });
  