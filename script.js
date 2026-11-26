const buttons = document.querySelectorAll(".menu-btn");
const message = document.getElementById("message");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const menu = button.dataset.menu;

    if (menu === "exit") {
      if (confirm("정말 종료할까요?")) {
        window.close(); // 브라우저가 막으면 닫히지 않을 수 있어요
        message.textContent = "종료를 눌렀어요.";
      }
    } else {
      message.textContent = `${button.textContent} 버튼을 눌렀어요!`;
    }
  });
});
