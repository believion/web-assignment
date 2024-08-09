// eslint-disable-next-line react/prop-types
const ProductCard = ({ img, title, oldPrice, newPrice }) => {
  return (
    <div className="flex flex-col gap-2 p-4 bg-neutral-950 h-full w-full items-center text-white">
      <div className={"w-[200px] h-[200px]"}>
        <img
          src={img}
          alt="Product1"
          className="w-[200px] h-[200px] rounded-full border-4 border-amber-700"
        />
      </div>
      <h1 className="text-customAmber font-medium text-xl uppercase">
        {title}
      </h1>
      <div>
        <span className="line-through">{oldPrice}</span>
        <span className="ml-3">{newPrice}</span>
      </div>
    </div>
  );
};

export default ProductCard;
