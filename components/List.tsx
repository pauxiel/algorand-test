import * as React from "react";
import { Algorand } from "../interfaces";
import { useQueryClient } from "@tanstack/react-query";
import useList from "../pages/api/algorandRequest";
import Image from "next/image";

type Props = {
  items: Algorand[];
};

function List() {
  const queryClient = useQueryClient();
  const { status, data, error, isFetching } = useList();

  const algo = data?.filter(
    (searchRes) =>
      searchRes.name.toLowerCase().includes("Algo".toLowerCase()) &&
      searchRes.logo !== null
  );

  return (
    <>
      {status === "loading" ? (
        <div className="  pb-12 pt-10  md:pb-14 md:pt-10 lg:pb-16 lg:pt-10 text-center flex justify-center">
          <h1 className=" lg:w-2/5 md:w-3/5 w-4/5  text-2xl  md:text-3xl  lg:text-4xl font-medium">
            Loading...
          </h1>
        </div>
      ) : status === "error" ? (
        <span>Error</span>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 pl-10 pr-10 pb-14">
          {algo?.map((list) => (
            <div
              className="border-[#B7BECC] border rounded-lg"
              key={list.assetId}
            >
              <div className="py-7 px-2 text-center">
                <Image
                  className="bg-cover bg-no-repeat bg-center"
                  src={list?.logo || ""}
                  width={60}
                  height={60}
                />
                <p className="pb-2 pt-4 font-medium text-md md:text-lg lg:text-xl">
                  {list.name}
                </p>

                <button
                  className={`text-white py-2 px-2 rounded-lg
                    ${
                      list.available === true ? "bg-[#6fd791]" : "bg-[#BC3131]"
                    }`}
                >
                  {list.available === true ? "available" : "not available"}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default List;
