document.addEventListener("DOMContentLoaded", function() {
  const sidebar = document.getElementById("sidebar-toc");
  if (!sidebar) return;

  const headings = document.querySelectorAll("h2, h3");
  const ul = document.createElement("ul");

  headings.forEach(h => {
    const id = h.textContent.toLowerCase().replace(/\s+/g, '-');
    h.id = id;

    const li = document.createElement("li");
    li.style.marginLeft = h.tagName === 'H3' ? '15px' : '0';

    const a = document.createElement("a");
    a.href = '#' + id;
    a.textContent = h.textContent;

    li.appendChild(a);
    ul.appendChild(li);
  });

  sidebar.appendChild(ul);
});
