import React from 'react';
import Pdf from "react-to-pdf";

const ref = React.createRef();
const Blog = () => {
    return (
        <div ref={ref} className='container mx-auto mt-20'>
           <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
  <div className="collapse-title text-xl font-medium">
  Tell us the differences between uncontrolled and controlled components.
  </div>
  <div className="collapse-content">
    <p> 
In a controlled component, form data is handled by a React component.The alternative is uncontrolled components, where form data is handled
by the DOM itself. To write an uncontrolled component, instead of
writing an event handler for every state update, you can use a ref 
to get form values from the DOM.</p>
  </div>
</div>
           <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
  <div className="collapse-title text-xl font-medium">
  How to validate React props using PropTypes
  </div>
  <div className="collapse-content">
    <p> 
PropTypes.any: The prop can be of any data type,
PropTypes.bool: The prop should be a Boolean,
PropTypes.number: The prop should be a number,
PropTypes.string: The prop should be a string,
PropTypes.func: The prop should be a function,
PropTypes.array: The prop should be an array,
PropTypes.object: The prop should be an object,
PropTypes.symbol: The prop should be a symbol</p>
  </div>
              </div>
           <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
  <div className="collapse-title text-xl font-medium">
  Tell us the difference between nodejs and express js.
  </div>
  <div className="collapse-content">
    <p> 
    js web application framework that provides a robust set of features for web and mobile applications. In other words, NodeJS is the package, which provides the JavaScript run-time environment, whereas Express is a framework that sits on top of NodeJS and helps us to handle requests and responses.</p>
  </div>
              </div>
           <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
  <div className="collapse-title text-xl font-medium">
  What is a custom hook, and why will you create a custom hook?  </div>
  <div className="collapse-content">
    <p> 
    Custom React JS hooks offer reusability as when a custom hook is created, it can be reused easily, which makes the code cleaner and reduces the time to write the code. It also enhances the rendering speed of the code as a custom hook does not need to be rendered again and again while rendering the whole code.</p>
  </div>
              </div>

  <div className='container mx-auto  my-20'>
    
    <h1 className='text-5xl font-bold mb-8'>Generate a pdf  of this page</h1>
    
    <Pdf targetRef={ref} filename="code-example.pdf">
        {({ toPdf }) => <button className=' btn btn-main' onClick={toPdf}>Generate Pdf</button>}
      </Pdf>
      </div>
     
     
          


        </div>
    );
};

export default Blog;