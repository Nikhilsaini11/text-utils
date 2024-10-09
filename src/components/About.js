import React from 'react'

export default function About(props) {
    const darkModeStyles = {
        '--bs-accordion-bg': '#1e1e1e',
        '--bs-accordion-color': '#e0e0e0',
        '--bs-accordion-border-color': '#333',
        '--bs-accordion-btn-bg': '#2c2c2c',
        '--bs-accordion-btn-color': '#e0e0e0',
        '--bs-accordion-active-bg': '#333',
        '--bs-accordion-active-color': '#e0e0e0',
      };
      
  return (
    <div>
      <div className="accordion" id="accordionPanelsStayOpenExample" style={props.mode === 'dark' ? darkModeStyles : {}}>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
        About TextUtils
      </button>
    </h2>
    <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show">
      <div className="accordion-body">
        TextUtils is a utility which can be used to manipulate your text. It can be used to convert your text from Uppercase to Lowercase and vice versa. It also shows the number of words and characters present in your text and it also shows the time taken to read the text.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
        Author
      </button>
    </h2>
    <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse">
      <div className="accordion-body">
        TextUtils was made by a renouned developer, who is very passionate about coding and will provide more features in future.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
        Contact
      </button>
    </h2>
    <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse">
      <div className="accordion-body">
        You can contact me at: <strong>temp@gmail.com</strong>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}
