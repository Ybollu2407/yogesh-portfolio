interface Props {
  social: {
    github?: string;
    instagram?: string;
    linkedin?: string;
    email?: string;
  };
}

export default function SocialLinks({
  social
}: Props) {

  const links = [
    {
      label: "LinkedIn",
      href: social.linkedin
    },
    {
      label: "Instagram",
      href: social.instagram
    },
    {
      label: "Email",
      href: social.email
        ? `mailto:${social.email}`
        : undefined
    }
  ];

  return (
    <div className="flex flex-wrap justify-center gap-3">
      {links
        .filter((l) => l.href)
        .map((link, i) => (
          <a
            key={i}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-zinc-700 bg-zinc-900 px-5 py-3 text-sm transition hover:border-purple-500"
          >
            {link.label}
          </a>
        ))}
    </div>
  );
}