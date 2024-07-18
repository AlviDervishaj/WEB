"use client";
import { Queue as Q } from "../utils/queue";
import { QueueAction } from "../components/QueueAction";
import { TooltipProvider } from "../components/ui/tooltip";
import { toast } from "sonner";
import { useState } from "react";

const q = new Q<number>();

export const Queue = () => {
  const [queue, setQueue] = useState<Array<number>>(q.toArray());

  function dequeue() {
    const _temp = new Q<number>(...queue);
    const banishedElement: number = _temp.dequeue();
    if (banishedElement) {
      toast.success(`Dequeued ${banishedElement} from Queue.`, {
        duration: 2000,
      });
      setQueue(_temp.toArray());
    } else {
      toast.success(`Can not dequeue elements from queue since it is empty.`, {
        duration: 2000,
      });
      setQueue([]);
    }
    return;
  }

  function enqueue() {
    const _temp = new Q<number>(...queue);
    const insertedElement: number = _temp.enqueue();
    setQueue(_temp.toArray());
    toast.success(`Enqueued ${insertedElement} to queue.`, {
      duration: 2000,
    });
  }
  return (
    <>
      <div className="w-fit max-w-sm md:max-w-md lg:max-w-2xl overflow-x-auto py-2 flex flex-row items-center content-center justify-evenly border-4 border-white ">
        {queue && queue.length >= 1 ? (
          queue.map((element) => (
            <p
              key={element}
              className="text-5xl font-bold text-center p-6 flex flex-row items-center content-center justify-center gap-5 border-r-4 border-r-white last:border-none"
            >
              {element}
            </p>
          ))
        ) : (
          <p className="text-3xl font-bold text-center p-6 flex flex-row items-center content-center justify-center">
            Enqueue an element to see the queue in action.
          </p>
        )}
      </div>
      {queue ? (
        <div className="w-full h-fit p-2 flex flex-row items-center content-center justify-evenly">
          <TooltipProvider>
            <QueueAction
              queue={queue}
              action={enqueue}
              text={"Enqueue"}
              description={
                "Insert elements based on FIFO ( First In First Out ) principle."
              }
            />
            <QueueAction
              queue={queue}
              action={dequeue}
              text={"Dequeue"}
              description={
                "Remove elements based on FIFO ( First In First Out ) principle."
              }
            />
          </TooltipProvider>
        </div>
      ) : null}
    </>
  );
};
