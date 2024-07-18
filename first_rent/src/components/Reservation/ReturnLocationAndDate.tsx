import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { DateTimePicker } from "@mui/x-date-pickers";
import { Dayjs } from "dayjs";
type LocationType = "Tirana Blloku Office" | "Rinas Airport";

type Props = {
  returnDate: Dayjs,
  returnLocation: LocationType,
  changeReturnDate: (value: Dayjs | null) => void;
  handleReturnLocationChange: (event: SelectChangeEvent) => void;
  displayError: (value: { return: string, pickup: string }) => void;
}

export function ReturnLocationAndDate({ returnDate, changeReturnDate, returnLocation, handleReturnLocationChange, displayError }: Props) {
  return (
    <div className="w-full lg:w-9/12 h-fit p-2 flex flex-col items-start content-start gap-10 justify-evenly">
      <div className="w-full h-fit space-y-5">
        <h2 className="text-xl lg:text-2xl self-start text-gray-900">Return Date</h2>
        <DateTimePicker
          format="DD/MM/YYYY HH:mm"
          ampm={false}
          disablePast
          className="bg-white mx-auto rounded-md w-full"
          value={returnDate}
          onError={(error) => {
            displayError(error ? { return: `${error}_return`, pickup: "" } : { return: "CONTINUE", pickup: "" })
          }}
          onChange={(value, context) => {
            changeReturnDate(value);
            displayError(context.validationError ? { return: `${context.validationError}_return`, pickup: "" } : { return: "CONTINUE", pickup: "" })
          }} />
      </div>
      <div className="w-full h-fit space-y-5">
        <h2 className="text-xl lg:text-2xl self-start text-gray-900">Return Location</h2>
        <FormControl
          variant="filled"
          className="bg-white w-full"
        >
          <InputLabel id="return_location">Return Location</InputLabel>
          <Select
            labelId="return_location_s"
            id="return_location_select"
            value={returnLocation}
            label="Return Location"
            onChange={handleReturnLocationChange}
          >
            <MenuItem value={"Tirana Blloku Office"}>Tirana Blloku Office</MenuItem>
            <MenuItem value={"Rinas Airport"}>Rinas Airport</MenuItem>
          </Select>
        </FormControl>
      </div>
    </div>
  )
}
