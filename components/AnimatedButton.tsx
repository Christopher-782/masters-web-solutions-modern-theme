import Link from "next/link";

type AnimatedButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  external?: boolean;
  className?: string;
};

export default function AnimatedButton({
  href,
  children,
  variant = "primary",
  external = false,
  className = ""
}: AnimatedButtonProps) {
  const classes = `button button--${variant} ${className}`.trim();
  const content = (
    <>
      <span>{children}</span>
      <span className="button__arrow" aria-hidden="true">→</span>
    </>
  );

  if (external) {
    return (
      <a className={classes} href={href} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  return <Link className={classes} href={href}>{content}</Link>;
}
