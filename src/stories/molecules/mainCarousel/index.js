import MediumButton from 'stories/atoms/mediumButton'

const MainCarousel = ({data}) => {
  return (
    <div className="border-1 border-solid border-gray-600 rounded-20 px-20 py-12 max-y-215">
      <p className="text-black-900 text-16 font-semibold mb-10">{data.prodName}</p>
      <p className="text-gray-900 text-12 mb-10">{data.prodType} {data.accCode}</p>
      <p className="text-black-900 text-26 font-extrabold mb-30">{data.accBalance}</p>
      <div className="grid grid-cols-2 gap-x-15 justify-center mb-10">
        <MediumButton text = {"조회하기"}></MediumButton>
        <MediumButton text={"이체하기"} sub = {true}></MediumButton>
      </div>
    </div>
  );
};

export default MainCarousel;