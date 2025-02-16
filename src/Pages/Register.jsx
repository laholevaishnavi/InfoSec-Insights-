// import React, { Component } from 'react';

// class Register extends Component {
//   constructor() {
//     super();
//     this.state = {
//       email: '',
//       password: '',
//       name: '',
//       hasAgreed: false,
//     };
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange(event) {
//     const { name, value, type } = event.target;
//     this.setState({
//       [name]: type === 'checkbox' ? event.target.checked : value,
//     });
//   }

//   handleSubmit(e) {
//     e.preventDefault();
//     console.log('The form was submitted with the following data:');
//     console.log(this.state);
//   }

//   render() {
//     return (
//       <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
//         <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
//         <form onSubmit={this.handleSubmit}>
//           <div className="mb-4">
//             <label className="block text-sm font-medium text-gray-700">Name</label>
//             <input
//               type="text"
//               name="name"
//               value={this.state.name}
//               onChange={this.handleChange}
//               className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-sm font-medium text-gray-700">Email</label>
//             <input
//               type="email"
//               name="email"
//               value={this.state.email}
//               onChange={this.handleChange}
//               className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-sm font-medium text-gray-700">Password</label>
//             <input
//               type="password"
//               name="password"
//               value={this.state.password}
//               onChange={this.handleChange}
//               className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label className="flex items-center">
//               <input
//                 type="checkbox"
//                 name="hasAgreed"
//                 checked={this.state.hasAgreed}
//                 onChange={this.handleChange}
//                 className="mr-2"
//               />
//               I agree to the terms and conditions
//             </label>
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
//           >
//             Register
//           </button>
//         </form>
//       </div>
//     );
//   }
// }

// export default Register;






import React, { Component } from "react";
import { Link } from "react-router-dom";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      name: "",
      hasAgreed: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value, type } = event.target;
    this.setState({
      [name]: type === "checkbox" ? event.target.checked : value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log("The form was submitted with the following data:");
    console.log(this.state);
  }

  render() {
    return (
      <div className="App flex">
        <div className="appAside w-1/2 bg-[#6b5b95] flex items-center justify-center">
          {/* Optional: Add any background image or content here */}
        </div>
        <div className="appForm w-1/2 bg-[#12130f] p-10">
          <div className="pageSwitcher flex justify-end mb-10">
            <Link to="/login" className="pageSwitcherItem text-center p-2 bg-[#40434e] text-[#9da6b1] rounded-l-lg">
              Login
            </Link>
            <Link to="/register" className="pageSwitcherItem-active text-center p-2 bg-[#6b5b95] text-white rounded-r-lg">
              Register
            </Link>
          </div>
          <h2 className="formTitle text-[#f1f7ff] font-light mb-10 text-center">Create Account</h2>
          <form onSubmit={this.handleSubmit}>
            <div className="formField mb-10">
              <label className="formFieldLabel uppercase text-white">Name</label>
              <input
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.handleChange}
                className="formFieldInput w-full bg-transparent border-b border-[#445366] text-white placeholder-[#616e7f] mb-2"
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="formField mb-10">
              <label className="formFieldLabel uppercase text-white">Email</label>
              <input
                type="email"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
                className="formFieldInput w-full bg-transparent border-b border-[#445366] text-white placeholder-[#616e7f] mb-2"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="formField mb-10">
              <label className="formFieldLabel uppercase text-white">Password</label>
              <input
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
                className="formFieldInput w-full bg-transparent border-b border-[#445366] text-white placeholder-[#616e7f] mb-2"
                placeholder="Enter your password"
                required
              />
            </div>
            <div className="formField mb-10 flex items-center">
              <input
                type="checkbox"
                name="hasAgreed"
                checked={this.state.hasAgreed}
                onChange={this.handleChange}
                className="formFieldCheckbox mr-2"
              />
              <label className="formFieldCheckboxLabel text-[#646f7d] text-sm">
                I agree to the terms and conditions
              </label>
            </div>
            <button
              type="submit"
              className="formFieldButton w-full bg-[#6b5b95] text-white rounded-full py-3 font-medium"
            >
              Register
            </button>
          </form>
          <p className="mt-4 text-center text-[#f1f7ff]">
            Already have an account? <Link to="/login" className="formFieldLink">Login here</Link>
          </p>
        </div>
      </div>
    );
  }
}

export default Register;