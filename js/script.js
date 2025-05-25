document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const message = document.getElementById("message");

    // Dữ liệu giả lập để kiểm tra đăng nhập
    const validUsername = "admin";
    const validPassword = "password123";

    if (username === validUsername && password === validPassword) {
      message.textContent = "Đăng nhập thành công!";
      message.style.color = "#feca57";
      message.style.textShadow = "0 0 10px #feca57";
      // Thêm hiệu ứng rung nhẹ cho container khi đăng nhập thành công
      document.querySelector(".login-container").style.animation =
        "shake 0.5s ease";
      // Chuyển hướng tới trang dashboard.html sau 1 giây
      setTimeout(() => {
        window.location.href = "home.html";
      }, 1000);
    } else {
      message.textContent = "Tên người dùng hoặc mật khẩu không đúng!";
      message.style.color = "#ff6b6b";
      message.style.textShadow = "0 0 10px #ff6b6b";
    }
  });

// Định nghĩa hiệu ứng shake trong JS để không cần thêm vào CSS
const style = document.createElement("style");
style.innerHTML = `
    @keyframes shake {
        0% { transform: translateX(0); }
        25% { transform: translateX(-5px); }
        50% { transform: translateX(5px); }
        75% { transform: translateX(-5px); }
        100% { transform: translateX(0); }
    }
`;
document.head.appendChild(style);
