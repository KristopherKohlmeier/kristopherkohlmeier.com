

function generateHeader(){
  const headerHTML = `
  
    <nav class="site-nav">

      <ul class="nav-menu">
        <li>
          <button class="nav-btn about" data-webpage = "index.html">ABOUT</button>
        </li>

        <li>
          <button class="nav-btn projects">PROJECTS</button>
          <ul class = "dropdown">
            <li>
              <button class="nav-btn sds" data-webpage = "story-development-software.html">SDS</button>
            </li>
          </ul>
        </li>

        <li>
          <button class="nav-btn resume" data-webpage = "resume.html">RESUME</button>
        </li>

        <li>
          <button class="nav-btn contact" data-webpage = "contact.html">CONTACT</button>
        </li>
      </ul>
    </nav>

  `;

  document.querySelector(".site-header")
  .innerHTML = headerHTML;
}


generateHeader();

document.querySelectorAll(".nav-btn").forEach(
  (button)=>{
    button.addEventListener('click', () => {
      if(button.hasAttribute('data-webpage')){
        location.href = button.dataset.webpage;
      }
    })
  }
)

