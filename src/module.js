// export x and y from this module
export const x = 2;
export const y = 3;

// export function
export function test() {
  console.log("This is a test function");
}

function test2() {
  console.log("This is a test2 function as default export");
}
export default test2;
