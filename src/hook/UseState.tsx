// import { useState } from "react";
// import { ChangeEvent } from "react";

// export default function App() {
//   const [name, setName] = useState('Charles');
//   const [age, setAge] = useState(23);
//   const [liked, setLiked] = useState(false);

//   function handleChange(e: ChangeEvent<HTMLInputElement>) {
//     setLiked(e.target.checked);
//   }
//   return (
//     <div>
//       {/* <input type="text" value={name} onChange={e => setName(e.target.value)} className="input"/>
//       <button className="btn btn-active" onClick={() => setAge(age + 1)}>Increase the age</button>

//       <p className="text-4xl">Hi, {name}. I'm {age} years old</p> */}

//       <label>
//         <input
//           type="checkbox"
//           checked={liked}
//           onChange={handleChange}
//         />
//         I liked this 
//       </label>

//       <p>You {liked ? 'liked' : 'did not like it? :<'}</p>
//     </div>
//   )
// }
