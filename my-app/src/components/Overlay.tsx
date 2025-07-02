export default function Overlay() {
  return (
    <div
      className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-white text-center px-4 pointer-events-none"
    >
      <h1 className="text-4xl md:text-6xl font-bold drop-shadow-lg">
        Welcome to My Galaxy
      </h1>
      <p className="mt-4 text-lg md:text-xl drop-shadow-lg">
        별처럼 빛나는 당신의 이야기를 담아보세요.
      </p>
      <button
        className="mt-6 px-6 py-3 bg-white text-black rounded-full font-semibold hover:bg-gray-200 transition pointer-events-auto"
      >
        시작하기
      </button>
    </div>
  );
}