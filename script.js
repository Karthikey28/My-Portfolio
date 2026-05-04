// Modal data
function openModal(type) {
  const data = {
    gst: {
      title: "GST Calculation Sheet",
      desc: "Excel-based GST calculation system",
      link: "https://onedrive.live.com/personal/993a78156ee5ce52/_layouts/15/doc.aspx?resid=caf7f2c4-b3c8-4307-b269-adbe5ff30646&cid=993a78156ee5ce52"
    },
    salary: {
      title: "Salary Calculator",
      desc: "Salary breakdown with deductions",
      link: "https://onedrive.live.com/personal/993a78156ee5ce52/_layouts/15/doc.aspx?resid=0686f672-2dfd-4d5a-93b4-7dc0e1b8f029&cid=993a78156ee5ce52"
    },
    attendance: {
      title: "Attendance System",
      desc: "Automated tracking system",
      link: "https://onedrive.live.com/personal/993a78156ee5ce52/_layouts/15/doc.aspx?resid=0686f672-2dfd-4d5a-93b4-7dc0e1b8f029&cid=993a78156ee5ce52"
    }
  };

  document.getElementById("modal-title").innerText = data[type].title;
  document.getElementById("modal-desc").innerText = data[type].desc;
  document.getElementById("modal-link").href = data[type].link;

  document.getElementById("modal").style.display = "block";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

window.onclick = function(e) {
  const modal = document.getElementById("modal");
  if (e.target == modal) {
    modal.style.display = "none";
  }
};

// Contact form
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = this.name.value;
  const email = this.email.value;
  const message = this.message.value;

  const subject = `Portfolio Contact from ${name}`;
  const body = `Name: ${name}%0AEmail: ${email}%0A%0A${message}`;

  window.location.href = `mailto:karthikey.kantamsetti28@gmail.com?subject=${subject}&body=${body}`;
});