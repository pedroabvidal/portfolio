import { type PropsWithChildren, useMemo } from "react";
import { config } from "@/utils/config";

export function Background({ children }: PropsWithChildren) {
  const style = useMemo(
    () => ({
      backgroundImage: `url('${config.backgroundImage}')`,
    }),
    [],
  );

  return (
    <div className="relative min-h-screen w-full">
      <div className="absolute inset-0 bg-center bg-cover" style={style} aria-hidden="true" />
      <div className="absolute inset-0 bg-black/45" aria-hidden="true" />
      <div className="relative z-10">{children}</div>
    </div>
  );
}


