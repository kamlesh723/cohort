// Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats - 

//  - HH:MM::SS (Eg. 13:45:23)

//  - HH:MM::SS AM/PM (Eg 01:45:23 PM)
// function pad(num) {
//   return num.toString().padStart(2, '0');
// }

function format24() {
  const now = new Date();
let hours = now.getHours();
//   const ampm = hours >= 12 ? 'PM' : 'AM';
//    hours = hours % 12;
//   hours = hours === 0 ? 12 : hours;
  const hh = hours;
  const mm = now.getMinutes();
  const ss = now.getSeconds();

  console.log( `${hh}:${mm}:${ss}${ampm}`);
}
format24()