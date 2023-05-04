import React from "react";
import Pdf from "react-to-pdf";

const ref = React.createRef();
const Blog = () => {
  return (
    <div ref={ref} className="container mx-auto mt-20 p-5">
      <div className=" mb-4">
        <h1 className="text-lg font-bold mb-2">
          Tell us the differences between uncontrolled and controlled
          components.
        </h1>

        <p className=" ">
          In a controlled component, form data is handled by a React
          component.The alternative is uncontrolled components, where form data
          is handled by the DOM itself.The main difference between controlled
          and uncontrolled components is that controlled components are more
          powerful and allow for more control over the state of the form. They
          require more code to set up, but they also provide more flexibility
          and control. Uncontrolled components are simpler and easier to set up,
          but they can be harder to manage and debug, especially when dealing
          with complex forms and data.
        </p>
      </div>

      <div className=" mb-4">
        <h1 className="text-lg font-bold mb-2">
          How to validate React props using PropTypes
        </h1>

        <p className="">
          PropTypes is a library that comes bundled with React, and it allows
          you to specify the type and shape of the props that a component should
          receive. Here is an example of how to use PropTypes to validate the
          props- PropTypes.any: The prop can be of any data type,
          PropTypes.bool: The prop should be a Boolean, PropTypes.number: The
          prop should be a number, PropTypes.string: The prop should be a
          string, PropTypes.func: The prop should be a function,
          PropTypes.array: The prop should be an array, PropTypes.object: The
          prop should be an object, PropTypes.symbol: The prop should be a
          symbol
        </p>
      </div>

      <div className=" mb-4">
        <h1 className="text-lg font-bold mb-2">
          {" "}
          Tell us the difference between nodejs and express js.
        </h1>

        <p className="">
          {" "}
          Node.js and Express.js are both technologies used for building
          server-side applications in JavaScript. However, they are different in
          some ways: NodeJS is the package, which provides the JavaScript
          run-time environment, whereas Express is a framework that sits on top
          of NodeJS and helps us to handle requests and responses.
        </p>
      </div>
      <div className=" mb-4">
        <h1 className="text-lg font-bold mb-2">
          {" "}
          What is a custom hook, and why will you create a custom hook?
        </h1>

        <p className="">
          {" "}
          Custom React JS hooks offer reusability as when a custom hook is
          created, it can be reused easily, which makes the code cleaner and
          reduces the time to write the code. It also enhances the rendering
          speed of the code as a custom hook does not need to be rendered again
          and again while rendering the whole code.
        </p>
      </div>

      <div className="container mx-auto  my-20">
        <h1 className="text-5xl font-bold mb-8">Generate a pdf of this page</h1>

        <Pdf targetRef={ref} filename="code-example.pdf">
          {({ toPdf }) => (
            <button className=" btn btn-main" onClick={toPdf}>
              Generate Pdf
            </button>
          )}
        </Pdf>
      </div>
    </div>
  );
};

export default Blog;
