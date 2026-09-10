import MovieGallery from "../Component/MovieGallery";
import MovieCard from "../Component/MovieCard";
import { useState } from "react";

function Home() {
  return (
    <div className="p-8 text-center">
      <h1 className="text-3xl font-bold text-slate-800">🏠 หน้าแรก</h1>
      <p className="mt-2 text-slate-500">ยินดีต้อนรับสู่ MovieHub</p>

      <div className="mx-auto mt-8 max-w-5xl">
        <MovieCard title="inline mandatorian and Grogu" year={2026} />
        <MovieCard title="Your Name." year={2016}/>
        <MovieCard title="Spider-Man: Brand New Day" year={2026}/>
        <h2 className="mt-8 text-2xl font-bold text-slate-800">ดูหนังเพิ่มเติม</h2>
        <div classname="mx-auto mt-8 max-w-md"></div>
          <MovieGallery />
      </div>
    </div >
  );
}

export default Home;


// import MovieCard from "../Component/MovieCard";
// import { useState } from 'react';
// function Home({ title, year }) {
//   const [likes, setLikes] = useState(0);
//   return (  
//     <div className="p-8 text-center">
//       <h1 className="text-3xl font-bold text-slate-800">🏠 หน้าแรก</h1>
//       <p className="mt-2 text-slate-500">ยินดีต้อนรับสู่ MovieHub</p>
//       <h3 className="text-lg font-bold">{title} ({year})</h3>
//       <button
//         onClick={() => setLikes(likes + 1)}   // 3. เปลี่ยนค่าผ่าน setLikes
//         className="mt-3 rounded-lg bg-pink-100 px-4 py-2 text-pink-700
//                    font-semibold hover:bg-pink-200 transition">
//         ❤️ {likes}
//       </button>
//     </div>
//   );
// }
// export default Home;