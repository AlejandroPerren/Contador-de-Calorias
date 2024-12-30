import { useMemo } from "react";
import { Activity } from "../types";
import { CaloryDisplay } from "./CaloryDisplay";

type CaloryTrackerProps = {
  activities: Activity[];
};

export const CaloryTracker = ({ activities }: CaloryTrackerProps) => {
  const caloriesConsumed = useMemo(
    () =>
      activities.reduce(
        (total, activity) =>
          activity.category === 1 ? total + activity.calories : total,
        0
      ),
    [activities]
  );

  const caloriesBurned = useMemo(
    () =>
      activities.reduce(
        (total, activity) =>
          activity.category === 2 ? total + activity.calories : total,
        0
      ),
    [activities]
  );

  const totalCalories = useMemo(
    () => caloriesConsumed - caloriesBurned,
    [activities]
  );

  return (
    <>
      <h2 className="text-4xl font-black text-white text-center">
        Resumen de Calorias
      </h2>

      <div className="flex flex-col text-center items-center md:flex-row md:justify-between gap-5 mt-10">
        <CaloryDisplay calories={caloriesConsumed} text="Consumida" />

        <CaloryDisplay calories={caloriesBurned} text="Ejercicio" />

        <CaloryDisplay calories={totalCalories} text="Diferencia" />
      </div>
    </>
  );
};
