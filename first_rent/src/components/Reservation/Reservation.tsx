import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { StepDots } from "../StepsDots";
import { Dates } from "./Dates";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { SelectChangeEvent } from '@mui/material/Select';
import dayjs, { Dayjs } from "dayjs";
import { PickupLocationAndDate } from "./PickupLocationAndDate";
import { ReturnLocationAndDate } from "./ReturnLocationAndDate";
type LocationType = "Tirana Blloku Office" | "Rinas Airport";
type ErrorType = {
  pickup: string,
  return: string,

};
/**
 * Home Page Reservation Component
 * */
export function Reservation() {
  const maxSteps = 6;
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [pickupLocation, setPickupLocation] = useState<LocationType>("Tirana Blloku Office");
  const [returnLocation, setReturnLocation] = useState<LocationType>("Tirana Blloku Office");
  const [pickupDate, setPickupDate] = useState<Dayjs>(dayjs(new Date()).add(1, "day"));
  const [returnDate, setReturnDate] = useState<Dayjs>(dayjs(new Date()).add(1, "day"));
  const [error, setError] = useState<ErrorType>({ pickup: "", return: "" });
  const changePickupDate = (value: Dayjs | null) => {
    console.log({ value });
    setPickupDate(dayjs(value));
  }
  const changeReturnDate = (value: Dayjs | null) => {
    console.log({ value });
    setReturnDate(dayjs(value));
  }
  const handlePickupLocationChange = (event: SelectChangeEvent) => {
    setPickupLocation(event.target.value as LocationType);
  };
  const handleReturnLocationChange = (event: SelectChangeEvent) => {
    setReturnLocation(event.target.value as LocationType);
  };


  function proceedToSecondStep() {
    // check pickup, return dates
    if (!pickupDate) {
      setError({ pickup: "Pickup date is not valid. ", return: "" });
      return;
    }
    if (!returnDate) {
      setError({ pickup: "", return: "Return date is not valid. " });
      return;
    }
    // lastly proceed to next step if everything is correct.
    nextStep();
  }

  function proceedToNextStep() {
    if (currentStep === 1 && error.pickup.trim() !== "") return;
    if (currentStep === 2 && error.return.trim() !== "") return;
    const cStep = currentStep + 1;
    if (cStep === 2) proceedToSecondStep();
  }

  function nextStep() {
    setCurrentStep((previous) => {
      if (previous >= maxSteps) return previous;
      return ++previous;
    });
  }

  function previousStep() {
    setCurrentStep((previous) => {
      if (previous <= 1) return previous;
      return --previous;
    });
  }

  function displayError(value: ErrorType) {
    if (!value) return;
    if (value.return.trim() === "CONTINUE" || value.pickup.trim() === "CONTINUE") {
      setError({ return: "", pickup: "" })
      return;
    };
    if (value.pickup.trim() === "disablePast_pickup") {
      setError({ pickup: "Please select a valid pickup date", return: "" });
      return;
    }
    if (value.return.trim() === "disablePast_return") {
      setError({ return: "Please select a valid return date", pickup: "" });
      return;
    }
    else setError(value);
  }
  return (
    <motion.section
      initial={{ opacity: 0, translateX: -300 }}
      animate={{ opacity: 1, translateX: 0 }}
      transition={{
        type: "spring",
        duration: 1.3,
        delay: 0.3,
      }}
      className="pt-4 pb-10"
    >
      <h1 className="text-2xl lg:text-3xl tracking-wider p-2 font-semibold  text-center text-gray-900">Reserve a Car</h1>
      <StepDots totalSteps={maxSteps} currentStep={currentStep} />
      <AnimatePresence mode="wait">
        {currentStep === 1 ? <Dates error={error.pickup} key={"pickup_location_key_"}>
          <PickupLocationAndDate changePickupDate={changePickupDate} pickupDate={pickupDate} pickupLocation={pickupLocation} displayError={displayError} handlePickupLocationChange={handlePickupLocationChange} />
        </Dates> : null}
        {currentStep === 2 ? <Dates error={error.return} key={"return_location_key_"}>
          <ReturnLocationAndDate changeReturnDate={changeReturnDate} returnDate={returnDate} displayError={displayError} handleReturnLocationChange={handleReturnLocationChange} returnLocation={returnLocation} />
        </Dates> : null}
      </AnimatePresence>
      <div className="w-full h-fit flex flex-row items-center content-center justify-evenly px-10 py-6">
        <button
          onClick={previousStep}
          className="flex flex-row gap-2 items-center content-center justify-center w-fit hover:bg-slate-700 transition-colors duration-300 ease-in-out h-fit py-2 px-5 text-center font-xl bg-slate-800 font-slate-100"
        >
          <IoIosArrowBack size={19} />
          Previous Step
        </button>
        <button
          onClick={proceedToNextStep}
          className="flex flex-row gap-2 items-center content-center justify-center w-fit hover:bg-slate-700 transition-colors duration-300 ease-in-out h-fit py-2 px-5 text-center font-xl bg-slate-800 font-slate-100"
        >
          Next Step
          <IoIosArrowForward size={19} />
        </button>
      </div>
    </motion.section>
  )
}
