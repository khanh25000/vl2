// Khởi tạo particles.js
particlesJS("particles-js", {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: "#64ffda",
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000000",
      },
      polygon: {
        nb_sides: 5,
      },
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 3,
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false,
      },
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#64ffda",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 2,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "grab",
      },
      onclick: {
        enable: true,
        mode: "push",
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 140,
        line_linked: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  retina_detect: true,
});

// Hiệu ứng scroll cho timeline
const timelineItems = document.querySelectorAll(".timeline-item");

function checkTimelineVisibility() {
  timelineItems.forEach((item) => {
    const itemTop = item.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (itemTop < windowHeight - 100) {
      item.classList.add("visible");
    }
  });
}

// Kiểm tra khi trang được tải
window.addEventListener("load", checkTimelineVisibility);

// Kiểm tra khi scroll
window.addEventListener("scroll", checkTimelineVisibility);

// Hiệu ứng hover cho các card
const serviceCards = document.querySelectorAll(".service-card");

serviceCards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    const icon = card.querySelector(".service-icon");
    icon.classList.add("floating");
  });

  card.addEventListener("mouseleave", () => {
    const icon = card.querySelector(".service-icon");
    icon.classList.remove("floating");
  });
});

// Hiệu ứng click cho button
const buttons = document.querySelectorAll(".cta-button");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();

    // Tạo hiệu ứng sóng
    const ripple = document.createElement("span");
    ripple.classList.add("ripple");
    button.appendChild(ripple);

    // Lấy vị trí click
    const x = e.clientX - e.target.getBoundingClientRect().left;
    const y = e.clientY - e.target.getBoundingClientRect().top;

    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;

    // Xóa ripple sau animation
    setTimeout(() => {
      ripple.remove();
    }, 1000);
  });
});
