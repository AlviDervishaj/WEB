import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { Dayjs } from 'dayjs';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
type LocationType = "Tirana Blloku Office" | "Rinas Airport";

type Props = {
  pickupDate: Dayjs,
  pickupLocation: LocationType,
  changePickupDate: (value: Dayjs | null) => void;
  handlePickupLocationChange: (event: SelectChangeEvent) => void;
  displayError: (value: { return: string, pickup: string }) => void;
}
export function PickupLocationAndDate({ pickupLocation, pickupDate, changePickupDate, handlePickupLocationChange, displayError }: Props) {
  return (
    <div className="w-full lg:w-9/12 h-fit p-2 flex flex-col items-start content-start gap-10 justify-evenly">
      <div className="w-full h-fit space-y-5">
        <h2 className="text-xl lg:text-2xl self-start text-gray-900">Pickup Date</h2>
        <DateTimePicker
          format="DD/MM/YYYY HH:mm"
          ampm={false}
          className="bg-white mx-auto rounded-md w-full"
          value={pickupDate}
          disablePast
          onError={(error) => {
            displayError(error ? { pickup: `${error}_pickup`, return: "" } : { pickup: "CONTINUE", return: "" })
          }}
          onChange={(value, context) => {
            changePickupDate(value);
            displayError(context.validationError ? { pickup: `${context.validationError}_pickup`, return: "" } : { pickup: "CONTINUE", return: "" })
          }} />
      </div>
      <div className="w-full h-fit space-y-5">
        <h2 className="text-xl lg:text-2xl self-start text-gray-900">Pickup Location</h2>
        <FormControl
          variant="filled"
          className="bg-white w-full"
        >
          <InputLabel id="pickup_location">Pickup Location</InputLabel>
          <Select
            labelId="pickup_location_s"
            id="pickup_location_select"
            value={pickupLocation}
            label="Pickup Location"
            onChange={handlePickupLocationChange}
          >
            <MenuItem value={"Tirana Blloku Office"}>Tirana Blloku Office</MenuItem>
            <MenuItem value={"Rinas Airport"}>Rinas Airport</MenuItem>
          </Select>
        </FormControl>
      </div>
    </div>
  )
}
