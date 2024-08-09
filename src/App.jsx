import "./App.css";
import PaginationComp from "./components/PaginationComp.jsx";
import ProductCarousel from "./components/ProductCarousel.jsx";

const landingPageData = [
  {
    src: "/MainBg.png",
    alt: "MainBg",
  },
  {
    src: "/MainBg.png",
    alt: "MainBg",
  },
  {
    src: "/MainBg.png",
    alt: "MainBg",
  },
  {
    src: "/MainBg.png",
    alt: "MainBg",
  },
];
const offersData = [
  {
    src: "/Items.png",
    alt: "Item1",
  },
  {
    src: "/Items.png",
    alt: "Item1",
  },
  {
    src: "/Items.png",
    alt: "Item1",
  },
  {
    src: "/Items.png",
    alt: "Item1",
  },
  {
    src: "/Items.png",
    alt: "Item1",
  },
];

function App() {
  return (
    <div className="fixed w-full h-full bg-neutral-950 overflow-y-auto overflow-x-hidden">
      <div
        className={
          "fixed left-0 top-0 bottom-0 w-[150px] bg-neutral-800/80 border-r-4 border-amber-700 z-30 flex flex-col items-center"
        }
      >
        {/* Sidebar content will be added here*/}
      </div>
      <div className="flex flex-col w-full h-auto">
        <div className="w-screen h-screen relative">
          <PaginationComp data={landingPageData} />
          <div
            className={
              "flex flex-row w-full h-auto z-30 absolute bottom-24 justify-center"
            }
          >
            <button
              className={
                "bg-transparent p-4 w-[300px] border-2 border-white text-lg font font-medium text-white"
              }
            >
              Meet Chef Matt
            </button>
          </div>
        </div>
        <div className={"flex flex-col h-full ml-[150px] w-[calc(100%-150px)]"}>
          <div className={"h-auto w-full"}>
            <div className={"h-[200px] flex items-center w-full relative"}>
              <img
                src={"Leafs.png"}
                alt={"Leafs"}
                className={"absolute w-[300px] h-[300px] top-[-100px] z-0"}
              />
              <div
                className={
                  "z-20 h-30 w-auto flex flex-col px-8 gap-y-4 text-white mt-20"
                }
              >
                <h1 className={"uppercase text-2xl text-customAmber"}>
                  Chef Matt Products
                </h1>
                <div className={"w-full border-2 border-customAmber"}>

                </div>
                <div>
                  <p>
                    Shop Gourmet Chef Quality products from the Chef Matt brand
                  </p>
                  <p>Chef it yourself and Thank us later.</p>
                </div>
              </div>
            </div>
          </div>
          <div className={"w-full h-auto flex items-center justify-center"}>
            <ProductCarousel />
          </div>
          <div
            className={
              "h-[350px] w-[90vw] bg-white mt-20 relative ml-10 right-[40px] z-20 flex justify-center"
            }
          >
            <PaginationComp data={offersData} />
            <div
              className={
                "absolute h-[300px] w-auto bottom-10 z-30 flex flex-col gap-2 p-4 items-center"
              }
            >
              <h1 className={"uppercase text-2xl font-medium"}>online only</h1>
              <div className={"border-2 border-black w-[50px] mt-5"}></div>
              <p className={"text-lg text-center max-w-[300px]"}>
                GET 20% OFF YOUR ORDER OF $50 OR MORE Use code <b>“Chef20”</b>
              </p>
              <button
                className={
                  "mt-20 bg-transparent border-4 border-black text-lg font font-bold text-black z-20 p-4 w-[300px]"
                }
              >
                Shop Now
              </button>
            </div>
          </div>
          <div
            className={"h-auto w-[90vw] grid grid-cols-2 bg-amber-500 mt-10"}
          >
            <div className={"w-full h-full bg-white"}>
              <img
                src={"/grid1.png"}
                alt={"grid1"}
                className={"object-contain w-full h-full"}
              />
            </div>
            <div className={"w-full h-full bg-blue-500"}>
              <img
                src={"/grid2.png"}
                alt={"grid2"}
                className={"object-contain w-full h-full"}
              />
            </div>
            <div className={"w-full h-full bg-lime-500"}>
              <img
                src={"/grid3.jfif"}
                alt={"grid3"}
                className={"object-contain w-full h-full"}
              />
            </div>
            <div className={"w-full h-full bg-teal-500"}>
              <img
                src={"/grid4.jfif"}
                alt={"grid4"}
                className={"object-contain w-full h-full"}
              />
            </div>
          </div>
          <div className={"h-auto w-[90vw] mt-0 bg-amber-500 relative"}>
            <img
              src={"/steak.jfif"}
              alt={"steak"}
              className={"object-cover w-full h-[400px]"}
            />
            <div
              className={
                "absolute z-20 text-white left-0 right-0 top-0 bottom-0 bg-neutral-950/30 flex flex-row"
              }
            >
              <div
                className={
                  "flex flex-col gap-8 w-full items-start p-4 justify-center"
                }
              >
                <h1
                  className={
                    "font-medium text-3xl uppercase underline-offset-[15px] underline"
                  }
                >
                  Sign Up for Special Promotions
                </h1>
                <p className={"text-lg"}>
                  Get exclusive deals you won’t find anywhere else straight to
                  your inbox!
                </p>
                <div className={"flex flex-row max-w-full h-auto"}>
                  <input
                    type={"email"}
                    name={"email"}
                    placeholder={"Enter Email Address"}
                    className={
                      "p-4 bg-neutral-50/10 border-2 border-white w-[450px]"
                    }
                  />
                  <button className={"p-2 bg-customAmber w-[200px] flex items-center justify-center ml-5 text-lg"}>
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
