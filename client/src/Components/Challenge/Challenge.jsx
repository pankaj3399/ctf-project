import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Input,
  DialogBody,
} from "@material-tailwind/react";
import { Dialog, Button } from "@material-tailwind/react";

import { useState } from "react";
import LoadingIcon from "../Shared/LoadingIcon/LoadingIcon";
import toast from "react-hot-toast";
import { useSubmitSolutionMutation } from "../../redux-rtk/features/challenges/challengesApi";

export function Challenge({ challenge }) {
  const [solution, setSolution] = useState("");

  const [size, setSize] = useState(null);
  const handleOpen = (value) => setSize(value);

  const {
    title,
    description,
    category,
    points,
    author,
    isSolved,
    createdBy,
  } = challenge;
  const descriptionHTML = { __html: description };

  const [submitSolution, { isLoading }] = useSubmitSolutionMutation();

  const handleSubmit = async () => {
    if (!solution) {
      toast.error("Solution is required!", {
        duration: 5000,
        zIndex: 9999,
      });
      return;
    }

    const res = await submitSolution({
      id: challenge._id,
      submission: {
        submission: solution,
      },
    });

    console.log(res, "res");

    if (res?.data?.success) {
      toast.success(res?.data?.message, {
        duration: 5000,
        zIndex: 9999,
      });
    } else {
      toast.error(res?.data?.message, {
        duration: 5000,
        zIndex: 9999,
      });
    }
    handleOpen(null);
    setSolution("");
  };

  console.log(isSolved);

  return (
    <>
      <Card
        className={`cursor-pointer max-w-[24rem] overflow-hidden my-[5px] rounded-sm relative ${
          isSolved && "border-2 border-green-400 shadow-md shadow-green-400"
        }`}
        onClick={() => handleOpen("lg")}
      >
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="m-0 rounded-none p-2"
        >
          <h2 className="text-sm font-medium flex w-full justify-between gap-2 text-red-600">
            {category?.name}{" "}
            <span className="font-normal text-md text-red-600">{points}</span>{" "}
          </h2>
        </CardHeader>
        <CardBody className="p-[10px]">
          <Typography color="blue-gray" className="text-[14px] font-bold">
            {title}
          </Typography>
        </CardBody>
      </Card>

      <>
        <Dialog
          open={size === "lg"}
          size={size || "lg"}
          handler={handleOpen}
          animate={{
            mount: { scale: 1, y: 0 },
            unmount: { scale: 0.9, y: -100 },
          }}
          className="bg-[#303030] text-white rounded-none w-[1200px] modal 2xl:max-w-[1200px] lg:max-w-[1200px] md:max-w-[1200px] max-w-[1200px] md:w-5/6 lg:w-3/4 2xl:w-3/5 min-w-[90%] md:min-w-[83.333333%] lg:min-w-[1200px] 2xl:min-w-[1200px] "
        >
          <DialogBody className="h-[42rem] text-white">
            <div className=" h-full overflow-auto max-w-[1200px] mx-auto reative">
              <div className="w-full p-5 pr-8 overflow-y-auto">
                <div>
                  <div className="flex gap-2">
                    <p className="bg-white px-[8px] py-[3px] my-[2px] text-black text-[13px] rounded-md flex items-center font-medium">
                      {category?.name}
                    </p>
                    <p className="bg-red-600 text-white px-[12px] py-[2px] font-bold my-[2px] rounded-md">
                      {points}
                    </p>
                  </div>
                  <div className="mt-2 flex gap-2 items-center">
                    {/* add User avatar Icon */}
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                      alt="user"
                      className="w-[20px] h-[20px] rounded-full"
                    />
                    <p>{createdBy === "admin" ? "admin" : author?.email}</p>
                  </div>
                  <div className="flex my-2">
                    <h3 className="text-[24px] font-bold">{title}</h3>
                  </div>
                  {/* <p className="text-[14px] pb-[10px]">Author: {author}</p> */}
                </div>

                <p className="mb-2 text-lg">Description</p>
                <hr className=" " />

                <hr className="text-red " />
                <div>
                  <p className="text-[12px] py-5">
                    <div dangerouslySetInnerHTML={descriptionHTML} />
                  </p>
                </div>
              </div>

              <div className=" w-full p-[25px] relative">
                <div className="mt-12">
                  {/* add a input box and a submit Button */}

                  <div className="flex flex-col gap-2 items-start">
                    <p className="text-[14px] text-left">Enter your solution</p>
                    <Input
                      type="text"
                      color="white"
                      size="regular"
                      outline={true}
                      placeholder="Enter solution"
                      required={true}
                      className="w-full"
                      onChange={(e) => setSolution(e.target.value)}
                      onEmptied={() => setSolution("")}
                    />
                    <Button
                      buttonType="filled"
                      size="regular"
                      rounded={false}
                      ripple="light"
                      onClick={handleSubmit}
                      disabled={isLoading}
                      className={`w-full ${
                        isLoading
                          ? "flex items-center justify-center gap-2"
                          : ""
                      }`}
                    >
                      {isLoading && <LoadingIcon />}
                      Submit
                    </Button>
                  </div>
                  <div className="mt-5">
                    Status :{" "}
                    {isSolved ? (
                      <span className="text-green-500">Solved</span>
                    ) : (
                      <span className="text-red-500">Not Solved</span>
                    )}
                  </div>
                </div>

                <div></div>
              </div>

              <div className="absolute top-5 right-10 justify-end items-center">
                <Button
                  variant="text"
                  color="white"
                  size="regular"
                  className="bg-whites"
                  onClick={() => handleOpen(null)}
                >
                  Close
                </Button>
              </div>
            </div>
          </DialogBody>
        </Dialog>
      </>
    </>
  );
}
