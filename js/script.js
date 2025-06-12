// document.getElementById("explodeBtn").addEventListener("click", () => {
//   const confettiContainer = document.querySelector(".confetti-wrapper");

//   // Clear existing confetti before spawning new ones
//   confettiContainer.innerHTML = "";

//   for (let i = 0; i < 30; i++) {
//     let confetti = document.createElement("div");
//     confetti.classList.add("confetti");
//     confetti.style.background = `hsl(${Math.random() * 360}, 100%, 70%)`; // Random colors
//     confetti.style.left = `${Math.random() * 100}%`;
//     confetti.style.top = `${Math.random() * 50 + 50}%`; // Random vertical position

//     confettiContainer.appendChild(confetti);

//     // Animate confetti explosion
//     gsap.to(confetti, {
//       x: `${(Math.random() - 0.5) * 400}`,
//       y: `${Math.random() * -400}`,
//       rotation: Math.random() * 360,
//       duration: 1.5,
//       ease: "power3.out",
//       onComplete: () => confetti.remove(), // Removes confetti after animation
//     });
//   }
// });

// gsap.to(".big-categories article", {
//   backgroundSize: "105%", // Gradually zoom in
//   duration: 8, // Slower transition
//   ease: "slow(0.7, 0.7, false)", // Smooth easing with less exaggeration
//   repeat: -1, // Infinite loop
//   yoyo: true, // Reverse animation smoothly
// });

// gsap.to(".big-categories article", {
//   opacity: 1, // Fades in revealing the image
//   duration: 3, // Smooth transition
//   ease: "power1.inOut",
//   repeat: 1,
//   yoyo: true, // Reverse fade effect
//   stagger: 1, // Staggered effect for each article
// });
