// import Image from "next/image";
// import { YearlyDividendRate } from "../chart/yearly-dividend-rate";

// export const StockInfoSection = () => (
//   <section className="p-5 space-y-5">
//     <h4 className="text-lg font-semibold">종목정보</h4>
//     <div className="flex gap-5 justify-between">
//       <div className="w-full">
//         {/* 현재가 */}
//         <div className="pb-5 border-b">
//           <h3 className="font-medium opacity-80">현재가</h3>
//           <p className="text-4xl font-bold">50,123$</p>
//           <p className="mt-1 text-blue-500">▲ 0.3 -0.28%</p>
//         </div>
//         {/* 운용사 등등 */}
//         {/* <Unyongsa /> */}
//       </div>
//       <YearlyDividendRate />
//     </div>
//   </section>
// );

// const Unyongsa = () => (
//   <div className="p-5 grid grid-cols-3 gap-5">
//     <div className="col-span-1">
//       <h4 className="p-5 text-lg font-semibold">운용사</h4>
//       <Image
//         src={"/logos/yieldmax-logo-square-blk.png"}
//         alt="ymetf"
//         height={400}
//         width={400}
//         className="mx-auto h-24 w-40 object-contain"
//       />
//       <p className="font-medium text-lg text-center">YieldMax</p>
//     </div>
//     <div className="col-span-1 border-x">
//       <h4 className="p-5 text-lg font-semibold">국가</h4>
//       <Image
//         src={"/logos/yieldmax-logo-square-blk.png"}
//         alt="ymetf"
//         height={400}
//         width={400}
//         className="mx-auto h-24 w-40 object-contain"
//       />
//       <p className="font-medium text-lg text-center">미국</p>
//     </div>

//     <div className="col-span-1">
//       <h4 className="p-5 text-lg font-semibold">상장 시장</h4>
//       <Image
//         src={"/logos/NASDAQ_Logo.svg"}
//         alt="nasdaq"
//         height={400}
//         width={400}
//         className="mx-auto h-24 w-40 object-contain"
//       />
//       <p className="font-medium text-lg text-center">Nasdaq</p>
//     </div>
//   </div>
// );
