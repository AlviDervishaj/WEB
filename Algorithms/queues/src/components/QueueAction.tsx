import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "../components/ui/tooltip";
export function QueueAction<T>({
  text,
  description,
  action,
  queue,
}: {
  text: string;
  queue: T[];
  description: string;
  action: () => void;
}) {
  return (
    <Tooltip>
      <TooltipTrigger onClick={action}>
        <p className="w-fit h-fit p-2 border-2 border-white text-lg tracking-wide font-medium rounded-lg">
          {text}
        </p>
      </TooltipTrigger>
      <TooltipContent>
        <p>{description}</p>
      </TooltipContent>
    </Tooltip>
  );
}
