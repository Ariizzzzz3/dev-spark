function togglePassword(id, icon) {
  const field = document.getElementById(id);
  const isPassword = field.type === "password";
  field.type = isPassword ? "text" : "password";
  icon.textContent = isPassword ? "🙈" : "👁️";
}

document.getElementById("resetForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const newPassword = document.getElementById("newPassword").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  if (!email || !newPassword || !confirmPassword) {
    alert("Please fill out all fields.");
    return;
  }

  if (newPassword !== confirmPassword) {
    alert("Passwords do not match.");
    return;
  }

  // Show popup
  document.getElementById("successPopup").style.display = "flex";
});
