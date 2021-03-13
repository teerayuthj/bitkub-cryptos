import { useState } from "react";
import { TiArrowSortedUp, TiArrowSortedDown } from "react-icons/ti";
import { Layout } from "./styles";

export const IntlFormatNumber = (coin) => {
  return new Intl.NumberFormat("th-TH").format(coin);
};

const orderBy = (symbols, value, direction) => {
  if (direction === "asc") {
    return [...symbols].sort((a, b) => (a[value] > b[value] ? 1 : -1));
  }

  if (direction === "desc") {
    return [...symbols].sort((a, b) => (a[value] > b[value] ? -1 : 1));
  }

  return symbols;
};

const SortArrow = ({ direction }) => {
  if (!direction) {
    return <></>;
  }

  if (direction === "asc") {
    return (
      <h3 className="mt-1.5">
        <TiArrowSortedDown />
      </h3>
    );
  } else {
    return (
      <h3 className="mt-1.5">
        <TiArrowSortedUp />
      </h3>
    );
  }
};

const MarketTable = ({ symbols }) => {
  const [direction, setDirection] = useState();
  const [value, setValue] = useState();

  const orderSymbol = orderBy(symbols, value, direction);

  const switchDirection = () => {
    if (!direction) {
      setDirection("desc");
    } else if (direction === "desc") {
      setDirection("asc");
    } else {
      setDirection(null);
    }
  };

  const setValueAndDirection = (value) => {
    switchDirection();
    setValue(value);
  };

  return (
    <Layout className="mt-10 ">
      <div className="container-table mb-20">
        <table className="border-none container ">
          <thead className="border-b-2 border-fuchsia-600">
            <tr>
              <th className="py-4 px-8 flex">
                <button
                  className="inline-flex focus:outline-none"
                  onClick={() => setValueAndDirection("name")}
                >
                  <div className="font-extrabold">Name</div>
                  {value === "name" && <SortArrow direction={direction} />}
                </button>
              </th>
              <th className="p-4">
                <button
                  onClick={() => setValueAndDirection("symbol")}
                  className="inline-flex focus:outline-none"
                >
                  <div className="font-extrabold">Symbol</div>
                  {value === "symbol" && <SortArrow direction={direction} />}
                </button>
              </th>
              <th className="">
                <button
                  onClick={() => setValueAndDirection("last")}
                  className="inline-flex focus:outline-none"
                >
                  <div className="font-extrabold">Last Price</div>
                  {value === "last" && <SortArrow direction={direction} />}
                </button>
              </th>
              <th className="">
                <button
                  onClick={() => setValueAndDirection("baseVolume")}
                  className="inline-flex focus:outline-none"
                >
                  <div className="font-extrabold">24 Volume</div>
                  {value === "baseVolume" && (
                    <SortArrow direction={direction} />
                  )}
                </button>
              </th>
              <th className="">
                <button
                  onClick={() => setValueAndDirection("high24hr")}
                  className="inline-flex focus:outline-none"
                >
                  <div className="font-extrabold">24 Hight</div>
                  {value === "high24hr" && <SortArrow direction={direction} />}
                </button>
              </th>
              <th className="">
                <button
                  onClick={() => setValueAndDirection("low24hr")}
                  className="inline-flex focus:outline-none"
                >
                  <div className="font-extrabold">24 Low</div>
                  {value === "low24hr" && <SortArrow direction={direction} />}
                </button>
              </th>
              <th className="">
                <button
                  onClick={() => setValueAndDirection("percentChange")}
                  className="inline-flex focus:outline-none"
                >
                  <div className="font-extrabold">24 Change</div>
                  {value === "percentChange" && (
                    <SortArrow direction={direction} />
                  )}
                </button>
              </th>
            </tr>
          </thead>

          <tbody>
            {orderSymbol.map((sym) => (
              <tr
                key={sym.id}
                className="border-b border-fuchsia-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:bg-gray-100 focus:ring-opacity-50 font-medium"
              >
                <th className="inline-flex items-center py-4 px-8">
                  <img className="max-h-9" src={sym.src}></img>
                  <p className="font-medium p-2"> {sym.name} </p>
                </th>

                <th className="font-medium p-6">{sym.symbol.slice(4, 8)}</th>
                <th
                  className="font-medium"
                  style={{
                    color: sym.last - sym.prevOpen >= 0 ? "#019716" : "#e60000",
                  }}
                >
                  {IntlFormatNumber(sym.last || 0)}
                </th>
                <th className="font-medium">
                  {IntlFormatNumber(sym.baseVolume.toFixed(2) || 0)}
                </th>
                <th className="font-medium">
                  {IntlFormatNumber(sym.high24hr || 0)}
                </th>
                <th className="font-medium">
                  {IntlFormatNumber(sym.low24hr || 0)}
                </th>
                <th
                  className="font-medium"
                  style={{
                    color: sym.percentChange >= 0 ? "#019716" : "#e60000",
                  }}
                >
                  {IntlFormatNumber(sym.percentChange || 0)}%
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  );
};

export default MarketTable;
