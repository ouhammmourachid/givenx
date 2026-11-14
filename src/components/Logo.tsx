import Image from "next/image";

/** GivenX Tech wordmark. `variant="light"` is the white logo for dark grounds. */
export default function Logo({
  variant = "light",
  height = 34,
  className = "",
  priority = false,
}: {
  variant?: "light" | "dark";
  height?: number;
  className?: string;
  priority?: boolean;
}) {
  const width = Math.round((height * 800) / 296);
  return (
    <Image
      src={variant === "light" ? "/brand/givenx-white.png" : "/brand/givenx-dark.png"}
      alt="GivenX Tech"
      width={width}
      height={height}
      priority={priority}
      className={className}
      style={{ height, width: "auto" }}
    />
  );
}
