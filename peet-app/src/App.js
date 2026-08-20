import ProfileCard from './Component/ProfileCard';
import './App.css';

const members = [
  { id: 1, name: 'สรินทร์ชัย มีศิลป์', nickname: 'ปลื้ม',
    major: 'เทคโนโลยีสารสนเทศ', favorites: ['ชาเขียว', 'หมา'] },
    { id: 2, name: 'กฤษฎา นาคะพงศ์', nickname: 'พีข',
    major: 'เทคโนโลยีสารสนเทศ', favorites: ['เกี๊ยว', 'นก'] },
    { id: 3, name: 'ชาญชัญญ์ เอื้อประเสริฐ', nickname: 'โจ้',
    major: 'เทคโนโลยีสารสนเทศ', favorites: ['โกโก้', 'วัว'] },
  // 👉 เพิ่มสมาชิกคนอื่น ๆ ของกลุ่มที่นี่
];

function App() {
  return (
    <div className="container">
      <h1>สมาชิกกลุ่มของเรา</h1>
      <div className="card-row">
        {members.map((m) => (
          <ProfileCard
            key={m.id}
            name={m.name}
            nickname={m.nickname}
            major={m.major}
            favorites={m.favorites}
          />
        ))}
      </div>
    </div>
  );
}

export default App;