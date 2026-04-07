
const projects = document.querySelectorAll('.project');

const obs = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('project--visible');
      obs.unobserve(e.target);
    }
  });
}, { threshold: 0.08 });

projects.forEach(p => obs.observe(p));
